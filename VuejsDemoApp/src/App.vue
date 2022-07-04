<template>
    <div id="app">
        <Home/>
        <StoreData/>
    </div>
</template>

<script lang="ts">
    import Home from './components/Home.vue';
    import StoreData from './components/StoreData.vue'
    import store from "@/store";

   export default {
        components: {
            Home,
            StoreData
        },
        store
   }
</script>

<style>
</style>
