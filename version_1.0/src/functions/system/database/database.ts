import { logoutButton } from '../../../init/variables';
import { firebase, auth, db, ui } from '../../../config';
import { login } from './isLogin';
import { signOut } from './signOut';
import { uiConfig } from './uiConfig';
import { logout } from './isLogout';

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
			logout();
			ui.start('#firebase-ui-container', uiConfig);
		}
	});
};
