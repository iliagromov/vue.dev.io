import server from '@/api/http';

export async function login(login, password){
	let { data } = await server.post('auth/login.php', { login, password }, {
		errorSuppression: { text: 'при попытке логина' }
	});
	return data;
}

export async function check(){
	let { data } = await server.get('auth/check.php', {
		errorSuppression: {},
		silence401: true
	});
	return data;
}

export async function logout(){
	let { data } = await server.get('auth/logout.php', {
		errorSuppression: { text: 'при выходе с сайта' }
	});
	return data;
}