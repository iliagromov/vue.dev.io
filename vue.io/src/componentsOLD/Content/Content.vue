<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="col col-sm-12">
          <app-product
            :price="price"

            @increase="$emit('increase')"
            @decrease="$emit('decrease')"
          ></app-product>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import AppProduct from "..//Product/Product.vue";

export default {
  components: {
    AppProduct,
  },
  props: ['price']
};
</script>
