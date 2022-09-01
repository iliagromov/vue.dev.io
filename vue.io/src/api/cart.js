import server from '@/api/http';

export async function load(token){
	let { data } = await server.get('cart/load.php', { 
		params: { token },
		errorSuppression: { text: 'при загрузке корзины', critical: true}
	});
	return data;
}

export async function add(token, id){
	let { data } = await server.get(`cart/add.php`, { 
		params: { token, id },
		errorSuppression: { text: 'при  добавлении товара'}

	});
	return data;
}

export async function remove(token, id){
	let { data } = await server.get(`cart/remove.php`, { 
		params: { token, id },
		errorSuppression: { text: 'при  удалении товара'}
	});
	return data;
}

export async function change(token, id, cnt){
	let { data } = await server.get(`cart/change.php`, { 
		params: { token, id, cnt },
		errorSuppression: { text: 'при изменении количества товара'}
	});
	return data;
}