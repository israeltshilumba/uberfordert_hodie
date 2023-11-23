<template>
  <div id="app" class="">
    <HeaderBar/>
    <ShoppingCart/>
    <HoodieList/>
    <BottomBar/>
  </div>
</template>

<script>
import HeaderBar from "@/components/HeaderBar.vue";
import BottomBar from "@/components/BottomBar.vue";
import HoodieList from "@/components/HoodieList.vue";
import ShoppingCart from "@/components/ShoppingCart.vue";

export default {
  name: 'App',
  components: {ShoppingCart, HoodieList, BottomBar, HeaderBar},
}
</script>

<style>
/* Add any additional styles here */
</style>
