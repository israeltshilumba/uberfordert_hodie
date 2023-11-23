<template>
  <div class="text-white bg-blue-600">
    <p class="bg-red">test</p>
    <Swiper
        class="sm:w-full xl:w-1/2 border border-sky-500"
        ref="swiperRef"
        @slideChange="onSlideChange"
        @swiper="onSwiper"
    >
      <SwiperSlide v-for="product in useProductsStore.products" :key="product.id">
        <img :src="product.image" alt="no image"/>
        <div class="bg-amber-300">
          {{product.price}}
          {{product.name}}
        </div>
      </SwiperSlide>
    </Swiper>
    <button @click="addToCart()">add product</button>
  </div>
</template>

<script setup>
import {computed, onMounted, ref} from "vue"
import {productsStore} from "@/store/products";
import {Swiper, SwiperSlide} from "swiper/vue"
import "swiper/css";

const useProductsStore = productsStore()
const selectedItemIndex = ref(0);

onMounted(async() => {
  console.log("Mounted")
  await useProductsStore.fetchProducts()
  console.log(useProductsStore.products)
})
const onSlideChange = (swiper) => {
  console.log("slide changed", swiper.activeIndex)
  selectedItemIndex.value = swiper.activeIndex
}
const onSwiper = (swiper) => {
  selectedItemIndex.value = swiper.activeIndex
 console.log(swiper.activeIndex, "swiper init")
}

const selectedProduct = computed( () => {
  return useProductsStore.products.at(Number(selectedItemIndex))
})
const addToCart = () =>{
  console.log("Add to cart")
  useProductsStore.addToCart(selectedProduct.value)
  console.log(useProductsStore.cart)
}

</script>
