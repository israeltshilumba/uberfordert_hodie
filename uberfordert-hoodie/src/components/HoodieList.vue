<template>
  <div>Hoodie List</div>
</template>

<script setup>
  import {onMounted} from "vue"
  import {productsStore} from "@/store/products";

  const useProductsStore = productsStore()


  onMounted(async() => {
    console.log("Mounted")
    await useProductsStore.fetchProducts()
    console.log(useProductsStore.products)
  })

</script>
