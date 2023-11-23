<template>
  <div id="app" class="">
    <HeaderBar/>
    <HoodieList/>
    <BottomBar/>
  </div>
</template>

<script>
import HeaderBar from "@/components/HeaderBar.vue";
import BottomBar from "@/components/BottomBar.vue";
import HoodieList from "@/components/HoodieList.vue";

export default {
  name: 'App',
  components: {HoodieList, BottomBar, HeaderBar},
}
</script>

<style>
/* Add any additional styles here */
</style>
