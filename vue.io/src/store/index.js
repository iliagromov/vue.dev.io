import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import cart from './cart';
import products from './products';
import alerts from './alerts';
import user from './user';

import { addResponseHandler } from '@/api/http';

const store = new Vuex.Store({
	modules: {
		cart,
		products,
		alerts,
		user
	},
	strict: process.env.NODE_ENV !== 'production'
});

addResponseHandler(response => {
	response => {
		if('errorSuppression' in response.config && response.status === 200 ){
			response.data =  { ok: true, data: response.data }
		}
		return response;
	},
	error => {
		if(!('errorSuppression' in error.config)){
			return Promise.reject(error);
		}

		let es = error.config.errorSuppression;
		let alert = { text:`Ошибка ответа от сервера${error.config.errorSuppression.text} `};
		

		if('critical' in  es){
			alert.text += `Рекомендуем перезагрузить страницу`;
		}
		else{
			alert.timeout = 3000;

		}
		
		store.dispatch('alerts/add', alert);
		return { data: { ok: false }};
	}
	// let text = 'Ошибка ответа от сервера';

	// if('vueAlert' in response.config){
	// 	text += ` ${response.config.vueAlert}`;
	// }

	// store.dispatch('alerts/add', { timeout:3000, text });
	// return { res: false };
});

export default store;