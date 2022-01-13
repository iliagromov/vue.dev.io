import store from ".";

export default {
    namespaced: true,
    
    state: {
        products: [
            { id: 100, cnt: 1  }
        ]

    },

    getters: {
        length: state => state.products.length,
        has: state => id => state.products.some(product => product.id === id)
        /*
        has(state){
            return function(id){
                return state.products.some(product => product.id === id)
            }
        }*/
    },

    mutations: {
        add(state, id){
            if(!store.getters.has(id)){
                state.products.push({id, cnt: 1});
            }
        },
        remove(state, id){
            if(store.getters.has(id)){
                state.products = state.products.filter(product => product.id !== id );
            }
        },

    },

    actions: {
        add(store, id){
            store.commit('add', id);
        },
        remove(store, id){
            store.commit('remove', id);
        },
    }
}