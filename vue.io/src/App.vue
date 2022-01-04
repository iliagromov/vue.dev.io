<template>
  <div class="Todo">
    <h1>Your actions</h1>
    <app-action
      v-for="(action, i) in todoList"
      :title="action.title"
      :current="action.current"
      :max="action.max"
      @step="onNext(i)"
      :key="i"
    ></app-action>
  </div>
</template>
<script>
import AppAction from './components/Action/Action.vue';

export default {
	components:{
		AppAction
	},
	data: () => ({
		todoList: [
			{ title: 'First action', current: 1, max: 5 },
			{ title: 'Other work', current: 2, max: 10 },
			{ title: 'Some fun', current: 4, max: 7 }
		]
	}),
	methods: {
		onNext(i){
			this.todoList[i].current++;
		}
	}
}
</script>

