<template>
  <div class="col-span-5 col-start-1">
    <div class="grid grid-cols-5 text-center text-sm" v-for="cartItem in productsStore().cart" :key="cartItem.id">
      <div>
        <div class="text-sm">1</div>
        <div class="text-xs">QTY</div>
      </div>
      <div>
        <div class="text-sm"> {{cartItem.size}}</div>
        <div class="text-xs">SIZE</div>
      </div>
      <div>
        <div class="text-sm">{{cartItem.name}}</div>
        <div class="text-xs">ITEM</div>
      </div>
      <div>
        <div class="text-sm">{{cartItem.price}}</div>
        <div class="text-xs">€</div>
      </div>
      <div>
        <div class="text-red-700 text-base" @click="removeProductFromCart(cartItem)">x</div>
      </div>
    </div>
    <div class="grid grid-cols-5 py-5">
      <div class="col-span-2 col-start-1 text-center">TOTAL: {{totalPrice}} €</div>
    </div>
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
