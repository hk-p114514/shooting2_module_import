import { logoutButton, player, vars, scoreSubmit } from './init/variables';
import { firebase, auth, db, ui } from './config';

export const database = () => {
	const uiConfig = {
		callbacks: {
			signInSuccessWithAuthResult: function (
				authResult: any,
				redirectUrl: any,
			) {
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
					location.reload();
				})
				.catch((error) => {});
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

			const inputUserName = document.getElementById(
				'userName',
			) as HTMLInputElement;
			const loginText = document.getElementById('login-text');

			docUser
				.get()
				.then((doc) => {
					if (doc.exists) {
						const data = doc.data();
						//既にアカウントが存在する
						if (loginText !== null && data !== undefined) {
							loginText.innerHTML = `${data.name}さん`;
						}

						console.log('データの取得に成功しました');

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
											{ merge: true },
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
											`ランキングの順位が下がる可能性があります。データを送信してもよろしいですか？`,
										)
									) {
										docUser
											.set(
												{
													score: vars.score,
													life: player.hp,
												},
												{ merge: true },
											)
											.then((r) => r);
									}
								} else {
									console.log('スコアの書き換えを行いませんでした');
								}

								if (oldUserName !== inputUserName.value) {
									docUser
										.set(
											{
												name: inputUserName.value,
											},
											{ merge: true },
										)
										.then(() => {
											alert('スコアを投稿しました');
											const loginText_inner = `${inputUserName.value}さん`;
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

						//スコアを投稿する際に名前をセットする。
						if (scoreSubmit !== null) {
							scoreSubmit.addEventListener('submit', () => {
								const newUserName = document.getElementById(
									'userName',
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
		}
	});
};
