<template>
  <div class="progress">
    <div class="progress-bar" :style="progressStyles"></div>
  </div>
</template>
<script>
export default {
  props: {
       total: {
           type: Number,
           default: 0
       },
       current: {
           type: Number,
           default: 0
       }
  },
  computed: {
    progressStyles() {
      return {
        width: (this.current / this.total) * 100 + "%",
      };
    },
  },
};
</script>
