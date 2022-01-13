import { createStore } from 'vuex';

export default createStore({
    state: {
        cnt: 1,
        price: 1000,
        status: 'none'
    },
    //getters расчитываемые данные // принцип приватности стейта
    getters: {
        // cnt(state){
        //     return state.cnt;
        // },
        cnt: state => state.cnt,
        price: state => state.price,
        status: state => state.status,
        total(state) {
            return state.cnt * state.price
        }
    },
    // mutations должны быть синхронны
    // обращение к мутации store.commit('setStatus', 'done');
    mutations: {
        // increase(state) {
        //     state.cnt++
        // },
        // decrease(state) {
        //     if (state.cnt > 1) {
        //         state.cnt--
        //     }

        // },
        // setCnt(state, newCnt) {
        //     let cnt = parseInt(newCnt);
        //     state.cnt = cnt;
        // },
        // setStatus(state, status) {
        //     state.status = status;
        // },
        // ======

        setCnt(state, newCnt){
            state.cnt = Math.max(1, newCnt);
            // Math.min(Math.max(1, newCnt), 10)
            // проверка вместо if else
        },
        setStatus(state, status) {
            state.status = status;
        },

    },
    actions: {
        // ======

        increase(store) {
            store.commit('setCnt', store.state.cnt + 1);
        },
        
        decrease({ commit, state}) {
            commit('setCnt', state.cnt - 1);
        },

        setCnt(store, newCnt) {
            let cnt = parseInt(newCnt);
            store.commit('setCnt', isNaN(cnt) ? 1 : cnt);
        },

        sendOrder(store) {
            store.commit('setStatus', 'pending');

            setTimeout(() => { 
                store.commit('setStatus', 'done');
            }, 500)
        }

    },

    strict: process.env.NODE_ENV !== 'production',
});
/** 
  setCnt(state, p1, p2, ... , pN)
  commit('setCnt', p1, p2, ... , pN)

  mapMutations(['setCnt']) -> set
*/
