<template>
  <div id="app" class="">
    <HeaderBar/>
    <HoodieView/>
    <BottomBar/>
  </div>
</template>

<script>
import HeaderBar from "@/components/HeaderBar.vue";
import HoodieView from "@/components/HoodieView.vue";
import BottomBar from "@/components/BottomBar.vue";

export default {
  name: 'App',
  components: {BottomBar, HoodieView, HeaderBar},
}
</script>

<style>
/* Add any additional styles here */
</style>
