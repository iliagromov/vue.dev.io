<template>
    <div>
        <h2>Product title</h2>
        <div class="price"> {{ price }}</div>
        <hr>
        <button class="btn btn-warning" @click="$emit('decrease')">-1</button>
        <button class="btn btn-success" @click="$emit('increase')">+1</button>
    </div>
</template>
<script>

export default {
    props: ['price']
   
}

</script>
