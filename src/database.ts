import { logoutButton, player, score, scoreSubmit } from './init/variables';
import { firebase, auth, db, ui } from './config';

export const database = () => {
	console.log('START Database');
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
				// @ts-ignore
				document.getElementById('loader').style.display = 'none';
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
			// @ts-ignore
			document.getElementById('isLogout').style.display = 'none';
			// @ts-ignore
			isLogin.style.display = 'flex';
			// @ts-ignore
			const docUser = db.collection('profiles').doc(`${auth.currentUser.uid}`);
			const inputUserName = document.getElementById('userName');
			const loginText = document.getElementById('login-text');

			docUser
				.get()
				.then((doc) => {
					if (doc.exists) {
						//既にアカウントが存在する
						// @ts-ignore
						loginText.innerHTML = `ようこそ、${doc.data().name}さん`;

						console.log('ログインしています');
						console.log('データの取得に成功しました');
						console.log(doc.data());

						//既存のユーザ名を取得する
						let oldUserName: string | undefined;
						let oldScore: number;
						let oldLife: number;
						docUser
							.get()
							.then((doc) => {
								if (doc.exists) {
									// @ts-ignore
									oldUserName = doc.data().name;
									// @ts-ignore
									oldScore = doc.data().score;
									// @ts-ignore
									oldLife = doc.data().life;
									// @ts-ignore
									inputUserName.value = oldUserName;
								} else {
									oldUserName = undefined;
									oldScore = 0;
									// @ts-ignore
									inputUserName.value = '';
								}
							})
							.catch((err) => {
								console.error('エラーだお', err);
								oldUserName = undefined;
								oldScore = 0;
								// @ts-ignore
								inputUserName.value = '';
							});

						//スコアの投稿処理
						// @ts-ignore
						scoreSubmit.addEventListener('submit', () => {
							if (player.hp > oldLife) {
								docUser
									.set(
										{
											score: score,
											life: player.hp,
										},
										{ merge: true }
									)
									.then(() => {
										alert('スコアを投稿しました');
										// @ts-ignore
										inputUserName.value = '';
									})
									.catch((err) => {
										console.error('データの書き換え失敗しました', err);
									});
							} else if (score > oldScore) {
								if (
									window.confirm(`ランキングの順位が下がる可能性があります。
							データを送信してもよろしいですか？`)
								) {
									docUser
										.set(
											{
												score: score,
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

							// @ts-ignore
							if (oldUserName !== inputUserName.value) {
								docUser
									.set(
										{
											// @ts-ignore
											name: inputUserName.value,
										},
										{ merge: true }
									)
									.then(() => {
										alert('スコアを投稿しました');
										// @ts-ignore
										const loginText_inner = `ようこそ、${inputUserName.value}さん`;
										// @ts-ignore
										inputUserName.value = '';
										// @ts-ignore
										loginText.innerHTML = loginText_inner;
									})
									.catch((err) => {
										alert('データの送信に失敗しました');
										console.error('エラー', err);
									});
							}
						});
					} else {
						//アカウントのデータが存在しない
						console.log('初ログイン');
						console.log(
							`userID : ${user.uid} = userName : ${user.displayName}`
						);

						//スコアを投稿する際に名前をセットする。
						// @ts-ignore
						scoreSubmit.addEventListener('submit', () => {
							db.collection('profiles')
								.doc(user.uid)
								.set({
									// @ts-ignore
									name: document.getElementById('userName').value,
									score: score,
									life: player.hp,
								})
								.then(() => {
									alert('スコアを投稿しました');
									// @ts-ignore
									inputUserName.value = '';
								})
								.catch((err: Error) => {
									alert('データの送信に失敗しました');
									console.error('エラー', err);
								});
						});
					}
				})
				.catch((error) => {
					console.log('エラーだお', error);
				});
		} else {
			//ログアウトしている時
			// @ts-ignore
			isLogin.style.display = 'none';
			ui.start('#firebase-ui-container', uiConfig);
			console.log(`score : ${score}`);
		}
	});
};
