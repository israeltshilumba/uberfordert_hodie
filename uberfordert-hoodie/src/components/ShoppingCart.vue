<script setup>
  import {productsStore} from "@/store/products";

  console.log("cart size:", productsStore().cart.length);
</script>

<template>
  <div>Cart</div>
</template>