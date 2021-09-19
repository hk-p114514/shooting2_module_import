import { db } from '../../../config';
import { player, vars } from '../../../init/variables';

const logout = () => {
	const hamakoFes = db.collection('hamako-fes');
	const inputUserName: HTMLInputElement = document.getElementById(
		'userNameLogout',
	) as HTMLInputElement;

	const submit: HTMLFormElement = document.getElementById(
		'score-submit',
	) as HTMLFormElement;

	// Rリロードを回避
	inputUserName.addEventListener('focusin', () => {
		vars.inputOnFocus = false;
	});
	inputUserName.addEventListener('focusout', () => {
		vars.inputOnFocus = true;
	});

	const { score, gameRound } = vars;
	const life: number = player.hp;
	// データ送信処理
	submit?.addEventListener('submit', () => {
		const username: string = inputUserName.value;

		// 0点の時はデータベースにアクセスしない
		if (score > 0) {
			// 既に同じ名前のプレイヤー情報がないか確認する
			const usernameDoc = hamakoFes.doc(username);
			usernameDoc
				.get()
				.then((doc) => {
					if (doc.exists) {
						// 既に同名のプレイヤーが存在する
						alert(
							`「${username}」は既に存在します。\n他の名前に変更してください`,
						);
					} else {
						// 同名のプレイヤーが存在しない
						usernameDoc
							.set({
								name: username,
								life: life,
								score: score,
								round: gameRound,
							})
							.then(() => {
								alert('スコアを投稿しました');
								inputUserName.value = '';
							})
							.catch((err) => {
								alert('通信に失敗しました');
								console.log(err);
							});
					}
				})
				.catch(() => {
					alert('通信に失敗しました\n通信環境を確認して再度お試し下さい');
				});
		} else {
			alert('スコアが低すぎるため投稿できませんw');
		}
	});
};

export { logout };
