<template>
  <div class="col-span-5 col-start-1">
    <Swiper
        class="border border-sky-500"
        ref="swiperRef"
        @slideChange="onSlideChange"
        @swiper="onSwiper"
    >
      <SwiperSlide v-for="product in productsStore().products" :key="product.id">
        <img :src="product.image" alt="no image"/>
        <div class="grid grid-cols-4">
          <div class="col-start-2">{{product.price}}€</div>
          <div class="col-start-3">{{product.name}}</div>
        </div>
      </SwiperSlide>
    </Swiper>
    <div class="grid grid-cols-5 text-center text-4xl">
      <div id="previousProduct" class="col-start-1" @click="previousProduct">&lt;</div>
      <div id="nextProduct" class="col-start-5" @click="nextProduct">&gt;</div>
    </div>
    <div class="grid grid-cols-5">
      <select id="size"
              class="col-start-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
        focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
        dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              name="size"
              v-model="selectedSize"
      >
        <option class="" value="XS">XS</option>
        <option value="S">S</option>
        <option value="M">M</option>
        <option value="L">L</option>
      </select>
    </div>
    <div class="grid grid-cols-5">
      <button class="col-start-3 text-center" @click="addToCart()">CHOOSE</button>
    </div>
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
const swiperRef = ref(null)

onMounted(async() => {
  await productsStore().fetchProducts()
})
const onSlideChange = (swiper) => {
  selectedItemIndex.value = swiper.activeIndex
}
const onSwiper = (swiper) => {
  swiperRef.value = swiper
  selectedItemIndex.value = swiper.activeIndex
}
const nextProduct = () => {
  try {
    swiperRef.value.slideNext()
  } catch (e) {
    console.error(e)
  }
}

const previousProduct = () => {
  try {
    swiperRef.value.slidePrev()
  } catch (e) {
    console.error(e)
  }
}

const selectedProduct = computed( () => {
  try {
    return productsStore().products.at(Number(selectedItemIndex.value))
  } catch (e) {
    console.error(e)
    return 0
  }
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
  const name= selectedProduct.value.name
  const cartProduct = {
    size: selectedSize.value,
    id:  uuid.v4(),
    price: price,
    info: info,
    image: image,
    name: name,
  }
  productsStore().addToCart(cartProduct)
}

</script>
