<template>
  <header>
    <div class="container">
      <div class="rwo">
        <div class="col col-sm-12">
          <h1>Site</h1>
          <app-cart :price="price" :cnt="cnt"></app-cart>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
import AppCart from "../Cart/Cart.vue";

export default {
  props: ["cnt", "price"],
  components: {
    AppCart,
  },
};
</script>
