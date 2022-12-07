import Vue from 'vue';
import App from './App.vue';

import store from './store';
import router from './router';

store.dispatch('cart/load');
store.dispatch('user/autoLogin');
store.dispatch('products/load')
.then(() => {
	new Vue({
		el: '#app',
		store,
		router,
		render: h => h(App)
	});
})
.catch(err => {
	console.log(err.response)
	document.body.innerHTML = 'Critical error';
});

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
