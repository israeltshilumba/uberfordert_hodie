<template>
  <div>
    <li v-for="cartItem in productsStore().cart" :key="cartItem.id">
      <ul>{{cartItem.name}} {{cartItem.price}} {{cartItem.size}}</ul>
      <div @click="removeProductFromCart(cartItem)">x</div>
    </li>
    <div>price: {{totalPrice}}</div>
  </div>
</template>

<script setup>
import {productsStore} from "@/store/products";
import {computed} from "vue";

const removeProductFromCart = (item) => {
  productsStore().removeFromCart(item)
  console.log("delete", item)
}

const totalPrice = computed( () => {
  let totalValue = 0;
  for (const product of productsStore().cart) {
    totalValue += Number(product.price)
    console.log(product, "price product")
  }
  return totalValue
})
</script>
