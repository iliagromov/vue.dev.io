<template>
  <app-header :price="price" :cnt="cnt"></app-header>
  <app-content
    :price="price"

    @increase="cnt++"
    @decrease="onDescrease"
  ></app-content>
</template>
<script>
import AppHeader from "./components/Header/Header.vue";
import AppContent from "./components/Content/Content.vue";

export default {
  components: {
    AppHeader,
    AppContent,
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
