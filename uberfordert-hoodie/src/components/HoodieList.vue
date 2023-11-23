<template>
  <div class="text-white bg-blue-600">
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
    <div class="bg-red-200 text-black">select size</div>
    <select
        class="rounded-md flex-none text-sm"
        name="size"
        v-model="selectedSize"
    >
      <option class="text-inherit" value="XS">XS</option>
      <option value="S">S</option>
      <option value="M">M</option>
      <option value="L">L</option>
    </select>
    <button @click="addToCart()">CHOOSE</button>
  </div>
</template>

<script setup>
import {computed, onMounted, ref} from "vue"
import {productsStore} from "@/store/products";
import {Swiper, SwiperSlide} from "swiper/vue"
import "swiper/css";

const useProductsStore = productsStore()
const selectedItemIndex = ref(null)
const selectedSize = ref("M")

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
  console.log(useProductsStore.products.at(Number(selectedItemIndex.value)), "selectedProduct to CArt")
  return useProductsStore.products.at(Number(selectedItemIndex.value))
})

const addToCart = () =>{
  //Todo Error Handling
  if(selectedSize.value == null) {
    return
  }
  //Todo check if the size is even available
  console.log("Add to cart")
  const cartProduct = {
    size: selectedSize.value,
    product: selectedProduct.value
  }
  useProductsStore.addToCart(cartProduct)

  console.log(cartProduct, "cart product")
}

</script>
