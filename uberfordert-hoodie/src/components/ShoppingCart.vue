<script setup>
  import {productsStore} from "@/store/products";
  const useCartStore = productsStore().cart
</script>

<template>
  <div>
    <li v-for="cartItem in useCartStore" :key="cartItem.id">
      <ul>{{cartItem.product.name}} {{cartItem.product.price}} {{cartItem.size}}</ul>
    </li>
  </div>
</template>