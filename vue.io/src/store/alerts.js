
let messageAI = 0; 

export default {
	namespaced: true,
	state: {
		messages: []
	},
	getters: {
		all: state => state.messages,
	},
	mutations: {
		add(state, message){
			state.messages.push(message);
		},
		remove(state, id){
			state.messages = state.message.filter(msg => msg.id !== id);
		}
	},
	actions: {
		add({ commit }, { text, timeout }){
			// id, autoremove after n sec
			let id = ++messageAI;
			commit('add', { id, text });

			if(timeout !== undefined){ // undefined?? 
				setTimeout(()=>{
					commit('remove', id)
				},timeout)
			}
		}
	}
}