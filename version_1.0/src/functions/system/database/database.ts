import { logoutButton } from '../../../init/variables';
import { firebase, auth, db, ui } from '../../../config';
import { login } from './isLogin';
import { signOut } from './signOut';
import { uiConfig } from './uiConfig';

export const database = () => {
	logoutButton?.addEventListener('click', () => {
		signOut();
	});

	const isLogin = document.getElementById('isLogin');
	auth.onAuthStateChanged((user) => {
		if (user && isLogin) {
			//ログインしている時
			login(isLogin, user);
		} else {
			//ログアウトしている時
			if (isLogin) {
				isLogin.style.display = 'none';
			}
			ui.start('#firebase-ui-container', uiConfig);
		}
	});
};
