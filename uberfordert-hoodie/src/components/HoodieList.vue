<template>
  <div class="text-white bg-blue-600">
    <Swiper
        class="sm:w-full xl:w-1/2 border border-sky-500"
        ref="swiperRef"
        @slideChange="onSlideChange"
        @swiper="onSwiper"
    >
      <SwiperSlide v-for="product in productsStore().products" :key="product.id">
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
import * as uuid from "uuid";

const selectedItemIndex = ref(null)
const selectedSize = ref("M")

onMounted(async() => {
  await productsStore().fetchProducts()
})
const onSlideChange = (swiper) => {
  selectedItemIndex.value = swiper.activeIndex
}
const onSwiper = (swiper) => {
  selectedItemIndex.value = swiper.activeIndex
}

const selectedProduct = computed( () => {
  return productsStore().products.at(Number(selectedItemIndex.value))
})

const addToCart = () =>{
  //Todo Error Handling
  if(selectedSize.value == null) {
    return
  }
  //Todo check if the size is even available
  const price = selectedProduct.value.price
  const info = selectedProduct.value.info
  const image = selectedProduct.value.image

  const cartProduct = {
    size: selectedSize.value,
    id:  uuid.v4(),
    price: price,
    info: info,
    image: image
  }
  productsStore().addToCart(cartProduct)
}

</script>
