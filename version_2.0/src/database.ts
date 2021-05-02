import { logoutButton, player, vars, scoreSubmit } from './init/variables';
import { firebase, auth, db, ui } from './config';

export const database = () => {
	console.log('STARTING Database');
	const uiConfig = {
		callbacks: {
			signInSuccessWithAuthResult: function (
				authResult: any,
				redirectUrl: any
			) {
				console.log(`おうすりぞると : ${authResult}`);
				console.log(redirectUrl);
				return true;
			},
			uiShown: function () {
				const loader: HTMLElement | null = document.getElementById('loader');
				if (loader !== null) {
					loader.style.display = 'none';
				}
			},
		},
		signInFlow: 'popup',
		signInOptions: [
			firebase.auth.GoogleAuthProvider.PROVIDER_ID,
			firebase.auth.GithubAuthProvider.PROVIDER_ID,
		],
		// signInSuccessUrl: '',
	};

	function signOut() {
		firebase.auth().onAuthStateChanged((user) => {
			firebase
				.auth()
				.signOut()
				.then(() => {
					console.log('ログアウトしました');
					location.reload();
				})
				.catch((error) => {
					console.log(`ログアウト時にエラーが発生しました (${error})`);
				});
		});
	}

	if (logoutButton) {
		logoutButton.addEventListener('click', () => {
			signOut();
		});
	}

	const isLogin = document.getElementById('isLogin');
	auth.onAuthStateChanged((user) => {
		if (user) {
			//ログインしている時
			const isLogout = document.getElementById('isLogout');

			if (isLogout !== null) {
				isLogout.style.display = 'none';
			}

			if (isLogin !== null) {
				isLogin.style.display = 'flex';
			}

			// @ts-ignore
			const docUser = db.collection('profiles').doc(`${auth.currentUser.uid}`);
			console.log(`docUser : ${docUser}`);

			const inputUserName = document.getElementById(
				'userName'
			) as HTMLInputElement;
			const loginText = document.getElementById('login-text');

			docUser
				.get()
				.then((doc) => {
					if (doc.exists) {
						const data = doc.data();
						//既にアカウントが存在する
						if (loginText !== null && data !== undefined) {
							loginText.innerHTML = `ようこそ、${data.name}さん`;
						}

						console.log('ログインしています');
						console.log('データの取得に成功しました');
						console.log(docUser);

						//既存のユーザ名を取得する
						let oldUserName: string | '';
						let oldScore: number;
						let oldLife: number;
						docUser
							.get()
							.then((doc) => {
								if (doc.exists) {
									if (data !== undefined) {
										oldUserName = data.name;
										oldScore = data.score;
										oldLife = data.life;
									}
									if (inputUserName !== undefined && inputUserName !== null) {
										inputUserName.value = oldUserName;
									}
								} else {
									oldUserName = '';
									oldScore = 0;
									inputUserName.value = '';
								}
							})
							.catch((err) => {
								console.error('エラーだお', err);
								oldUserName = '';
								oldScore = 0;
								inputUserName.value = '';
							});

						//スコアの投稿処理
						if (scoreSubmit !== null) {
							scoreSubmit.addEventListener('submit', () => {
								if (player.hp > oldLife) {
									docUser
										.set(
											{
												score: vars.score,
												life: player.hp,
											},
											{ merge: true }
										)
										.then(() => {
											alert('スコアを投稿しました');
											inputUserName.value = '';
										})
										.catch((err) => {
											console.error('データの書き換え失敗しました', err);
										});
								} else if (vars.score > oldScore) {
									if (
										window.confirm(
											`ランキングの順位が下がる可能性があります。データを送信してもよろしいですか？`
										)
									) {
										docUser
											.set(
												{
													score: vars.score,
													life: player.hp,
												},
												{ merge: true }
											)
											.then((r) => r);
									}
								} else {
									alert('通信に成功しました');
									console.log('スコアの書き換えを行いませんでした');
								}

								if (oldUserName !== inputUserName.value) {
									docUser
										.set(
											{
												name: inputUserName.value,
											},
											{ merge: true }
										)
										.then(() => {
											alert('スコアを投稿しました');
											const loginText_inner = `ようこそ、${inputUserName.value}さん`;
											inputUserName.value = '';
											if (loginText !== null) {
												loginText.innerHTML = loginText_inner;
											}
										})
										.catch((err) => {
											alert('データの送信に失敗しました');
											console.error('エラー', err);
										});
								}
							});
						}
					} else {
						//アカウントのデータが存在しない
						console.log('初ログイン');
						console.log(
							`userID : ${user.uid} = userName : ${user.displayName}`
						);

						//スコアを投稿する際に名前をセットする。
						if (scoreSubmit !== null) {
							scoreSubmit.addEventListener('submit', () => {
								const newUserName = document.getElementById(
									'userName'
								) as HTMLInputElement;

								db.collection('profiles')
									.doc(user.uid)
									.set({
										name: newUserName.value,
										score: vars.score,
										life: player.hp,
									})
									.then(() => {
										alert('スコアを投稿しました');
										inputUserName.value = '';
									})
									.catch((err: Error) => {
										alert('データの送信に失敗しました');
										console.error('エラー', err);
									});
							});
						}
					}
				})
				.catch((error) => {
					console.log('エラーだお', error);
				});
		} else {
			//ログアウトしている時
			if (isLogin !== null) {
				isLogin.style.display = 'none';
			}
			ui.start('#firebase-ui-container', uiConfig);
			console.log(`score : ${vars.score}`);
		}
	});
};
