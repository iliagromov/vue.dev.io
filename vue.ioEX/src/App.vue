<template>
  <app-header ></app-header>
  <app-content ></app-content>
</template>
<script>
import AppHeader from "./components/Header/Header.vue";
import AppContent from "./components/Content/Content.vue";

export default {
  components: {

    AppContent,
    AppHeader
  },
  data: () => ({
    cnt: 1,
    price: 1000,
  }),
  methods: {
    onDescrease() {
      if (this.cnt > 1) {
        this.cnt--;
      }
    },
  },
};
</script>
