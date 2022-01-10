
<template>
  <div v-if="false" class="Todo">
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
  <div class="sample">
    <form>
      <progress-bar
	  	:total="info.length"
		:current="fieldsDone"
	  ></progress-bar>
      <div>
        <app-field
          v-for="(field, i) in info"
          :key="i"
          :value="field.value"
          :name="field.name"
          :valid="field.valid"
          @updated="onInput(i, $event)"
        ></app-field>
      </div>
      <button class="btn btn-primary">Send Data</button>
    </form>
    <div>
      <table class="table table-bordered">
        <tr>
          <td></td>
          <td></td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
import AppAction from "./components/Action/Action.vue";
import AppField from "./components/Field/Field.vue";
import ProgressBar from "./components/ProgressBar/ProgressBar.vue";

export default {
  components: {
    AppAction,
    AppField,
	ProgressBar
  },
  data: () => ({
    todoList: [
      { title: "First action", current: 1, max: 5 },
      { title: "Other work", current: 2, max: 10 },
      { title: "Some fun", current: 4, max: 7 },
    ],
    info: [
      {
        name: "Name",
        value: "",
        pattern: /^[a-zA-Z ]{2,30}$/,
      },
      {
        name: "Phone",
        value: "",
        pattern: /^[0-9]{7,14}$/,
      },
      {
        name: "Email",
        value: "",
        pattern: /.+/,
      },
      {
        name: "Some Field 1",
        value: "",
        pattern: /.+/,
      },
      {
        name: "Some Field 2",
        value: "",
        pattern: /.+/,
      },
    ],
  }),
  computed: {
    fieldsDone() {
      return this.info.reduce((total, field) => {
        return total + (field.valid ? 1 : 0);
      }, 0);
      //return this.info.reduce((t, f) => t + (f.valid ? 1 : 0), 0);
    },
    formReady() {
      return this.fieldsDone === this.info.length;
    },
   
  },
  methods: {
    onNext(i) {
      this.todoList[i].current++;
    },
    onInput(i, value) {
      // console.log(i, value);
      let field = this.info[i];
      field.value = value.trim();
      field.valid = field.pattern.test(field.value);
    },
    created() {
      return this.info.forEach((field) => {
        field.valid = field.pattern.test(field.value);
      });
    },
  },
};
</script>

