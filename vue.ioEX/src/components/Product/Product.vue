<template>
    <div>
        <h2>Product title</h2>
        <!-- <div class="price"> {{ $store.state.price }}</div> -->
        <div class="price"> {{ price }}</div>
        <hr>
        <!-- <button class="btn btn-warning" @click="$store.commit('decrease')">-1</button>
        <button class="btn btn-success" @click="$store.commit('increase')">+1</button>
     -->
        <button class="btn btn-warning" @click="decrease">-1</button>
        <input type="text" :value="cnt" @change="onInput" />
        <button class="btn btn-success" @click="increase">+1</button>
    
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
 
export default {
   computed: mapGetters(['price', 'cnt']),
   methods: {
       ...mapActions(['decrease', 'increase', 'setCnt']),
        onInput(e){
            let lastCnt = this.cnt;
            this.setCnt(e.target.value);
            if(lastCnt === this.cnt && lastCnt.toString() !== e.target.value){
              e.target.value = lastCnt;
            }
        }
   }
    /*
    {
      decrease(){
        return this.$store.commit('decrease')
      },
      increase(){
        return this.$store.commit('increase')
      }
    }
  */

}

/* 
let a = {a: 1}
let b = {b: 2}
let c = { ...a, ...b, c:3 }
*/
</script>
