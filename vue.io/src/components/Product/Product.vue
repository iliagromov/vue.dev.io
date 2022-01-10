<template>
    <div>
        <h2>Product title</h2>
        <div class="price"> {{ $store.state.price }}</div>
        <hr>
        <button class="btn btn-warning" @click="() => {}">-1</button>
        <button class="btn btn-success" @click="() => {}">+1</button>
    </div>
</template>
<script>

export default {
   
}

</script>
