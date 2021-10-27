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
			// 同名のプレイヤーが存在しない
			const finalConfirmation = confirm(
				`${username}でスコアを投稿します。\nよろしいですか?`,
			);
			if (finalConfirmation === true) {
				hamakoFes
					.add({
						name: username,
						life: life,
						score: score,
						round: gameRound,
					})
					.then(() => {
						alert('スコアを投稿しました');
						inputUserName.value = '';
						setTimeout(() => {
							location.reload();
						}, 2000);
					})
					.catch((err) => {
						alert('通信に失敗しました');
						console.log(err);
					});
			} else {
				alert('投稿をキャンセルしました');
			}
		}
	});
};

export { logout };
