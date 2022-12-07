import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import cart from './cart';
import products from './products';
import alerts from './alerts';
import user from './user';

import router from '@/router';
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

addResponseHandler(
	response => {
		if('errorSuppression' in response.config && response.status === 200){
			response.data = { ok: true, data: response.data };
		}

		return response;
	},
	error => {
		if(error.response.status === 401 && error.config.silence401 !== true){
			//await 
			store.dispatch('user/cleanUser');
			router.push({ name: 'login' }, function(){
				// document.location.reload(); // опционально, либо чистим склад
			});
		}

		if(!('errorSuppression' in error.config)){
			return Promise.reject(error);
		}

		let es = error.config.errorSuppression;

		if('exclude' in es && es.exclude.includes(error.response.status)){
			return Promise.reject(error);
		}

		if('text' in es){
			let alert = { text: `Ошибка ответа от сервера ${es.text}` };

			if('critical' in es){
				alert.text += ' Рекомендуем перезагрузить страницу!';
			}
			else{
				alert.timeout = 3000;
			}
	
			store.dispatch('alerts/add', alert);
		}
		
		return { data: { ok: false } };
	}
);

export default store;