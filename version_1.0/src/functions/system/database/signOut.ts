import { auth } from '../../../config';

const signOut = () => {
	auth.onAuthStateChanged(() => {
		auth
			.signOut()
			.then(() => {
				location.reload();
			})
			.catch((error) => {
				console.error(error);
			});
	});
};

export { signOut };
