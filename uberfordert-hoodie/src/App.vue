<template>
  <div id="app" class="font-BrunoAce bg-zinc-900 text-white">
    <div class="flex flex-col min-h-screen">
      <!-- Main content area -->
      <div class="flex-1">
        <div class="grid grid-cols-5 gap-y-8">
          <HeaderBar/>
          <ShoppingCart/>
          <HoodieList/>
        </div>
      </div>
    </div>
    <div class="row-start-2 ">
      <BottomBar/>
    </div>
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
