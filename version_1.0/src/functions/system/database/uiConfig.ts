import { firebase } from '../../../config';
const uiConfig = {
	callbacks: {
		signInSuccessWithAuthResult: function (authResult: any, redirectUrl: any) {
			return true;
		},
		uiShown: function () {
			const loader = document.getElementById('loader');
			if (loader) {
				loader.style.display = 'none';
			}
		},
	},
	signInFlow: 'popup',
	signInOptions: [
		firebase.auth.GoogleAuthProvider.PROVIDER_ID,
		firebase.auth.GithubAuthProvider.PROVIDER_ID,
		firebase.auth.EmailAuthProvider.PROVIDER_ID,
	],
	// signInSuccessUrl: '',
};
export { uiConfig };
