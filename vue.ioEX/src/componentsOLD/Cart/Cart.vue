<template>
  <div>
    <div>In cart: {{ cnt }}</div>
    <div>Total: {{ price * cnt }}</div>
  </div>
</template>
<script>
export default {
  props: ["cnt", "price"],
};
</script>
