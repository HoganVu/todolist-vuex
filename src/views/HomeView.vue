<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <MainHome />
  </div>
</template>

<script>
import MainHome from '@/components/MainHome.vue';

// @ is an alias to /src


export default {
  name: 'HomeView',
  components: {
    MainHome
}
}
</script>
