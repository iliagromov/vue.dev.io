<template>
  <div>
    <header>
      <div class="container">
        <div class="row">
          <div class="col col-sm-9">
            <h1>Site</h1>
          </div>
          <div class="col col-sm-3">
            <div class="alert alert-default">
              <div>In Cart: {{ cartCnt }}</div>
              <div>Total: {{ carTotal }}</div>
            </div>
          </div>
        </div>
        <hr>
      </div>
    </header>
    <section>
      <div class="container">
        <div class="row">
          <div class="col col-sm-3 menu">
            <ul class="list-group">
              <!-- <li class="list-group-item">
                 <router-link to="/">Products</router-link> 
                <router-link :to="{ name: 'catalog' }">Products</router-link>
              </li> -->

              <router-link
                v-for="item in menu"
                :key="item.route"
                :to="{ name: item.route }"
                v-slot="{ route, isExactActive, navigate }"
                :custom="true"
              >
                <li class="list-group-item" :class="isExactActive && 'active'">
                  <a :href="route.fullPath" @click="navigate">{{
                    item.title
                  }}</a>
                </li>
              </router-link>
            </ul>
          </div>
          <div class="col col-sm-9">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data: () => ({
    menu: [
      { route: "catalog", title: "Products" },
      { route: "cart", title: "Cart" },
      { route: "checkout", title: "Checkout" },
    ],
  }),
  computed: {
    ...mapGetters('cart', { cartCnt: 'length', carTotal: 'total'})
  }
};
</script>

<style>
.menu {
  border-right: 1px solid #ddd;
}

.list-group-item {
  transition: background 0.3s, color 0.3s;
}

.list-group-item a {
  text-decoration: none;
}

.list-group-item.active a {
  color: inherit;
}
</style>