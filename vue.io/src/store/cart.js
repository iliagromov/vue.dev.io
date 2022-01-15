import store from '.';
import { makeRequest } from '../api/server';
export default {
    namespaced: true,

    state: {
        products: [],
        token: null

    },

    getters: {
        length: state => state.products.length,
        has: state => id => state.products.some(product => product.id === id),
        /*
        has(state){
            return function(id){
                return state.products.some(product => product.id === id)
            }
        }*/
        productsDetailed(state, getters, rootState, rootGetters) {
            return state.products.map(product => {
                let info = rootGetters['products/item'](product.id);
                return { ...product, ...info };
            })
        },
        total: (state, getters) => getters.productsDetailed.reduce((total, product) => total + product.price * product.cnt, 0)
    },

    mutations: {
        add(state, id) {

            state.products.push({ id, cnt: 1 });

        },
        remove(state, id) {

            state.products = state.products.filter(product => product.id !== id);

        },
        setCnt(state, { id, cnt }) {
            let i = state.products.findIndex(product => product.id === id)
            state.products[i].cnt = Math.max(1, cnt);
        },
        setCart(state, { token, cart}){
            state.token = token;
            state.products = cart;
        }

    },

    actions: {
        async add({ state, getters, commit }, id) {
            // console.log(state)
            if (!getters.has(id)) {
                let url = `http://faceprog.ru/reactcourseapi/cart/add.php?token=${state.token}&id=${id}`;
                let result = await makeRequest(url);
                if(result){
                    commit('add', id);
                }
                // result && commit('add', id);
            }
        },
        async remove({ state, getters, commit }, id) {
            if (getters.has(id)) {
                let url = `http://faceprog.ru/reactcourseapi/cart/remove.php?token=${state.token}&id=${id}`;
                let result = await makeRequest(url);
              
                result && commit('remove', id);
            }
        },
        setCnt(store, payload) {
            if (store.getters.has(payload.id)) {
                store.commit('setCnt', payload)
            }
        },
        async load(store){
            let oldToken = localStorage.getItem('CART_TOKEN');
            let url = `http://faceprog.ru/reactcourseapi/cart/load.php?token=${oldToken}`;
			
            let { needUpdate, cart, token  } = await makeRequest(url);

            if(needUpdate){
                localStorage.setItem('CART_TOKEN', token);
            }
            store.commit('setCart', { cart, token});
        }
    }
}