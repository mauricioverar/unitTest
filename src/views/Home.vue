<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Header title="Título" color="red"/>

  </div>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
  name: 'Home',
  components: {
    Header
  }
}
</script>