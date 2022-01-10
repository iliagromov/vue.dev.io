<template>
  <div class="form-group">
    <label>{{ name }}</label>
    <fa-icon v-if="activated" :icon="icon" :key="icon" :class="iconClasses"></fa-icon>
    <input type="text" class="form-control" :value="value" @input="onInput" />
  </div>
</template>
<script>
import { FontAwesomeIcon as FaIcon } from "@fortawesome/vue-fontawesome";

export default {
  components: {
    FaIcon,
  },
  props: ["name", "value", "valid"],
  data() {
    return {
      activated: this.value !== "",
    };
  },
  computed: {
    icon() {
      return this.valid ? "check-circle" : "exclamation-circle";
    },
    iconClasses(){
        return this.valid ? "text-success" : "text-danger";
    }
  },
  methods: {
    onInput(e) {
      this.activated = true;
      this.$emit("updated", e.target.value);
    },
  },
};
</script>
