<template>
  <section class="section is-large">
    <div class="container has-text-centered">
      <h1 class="title" @click="$store.commit('fetchSomething')">{{ $store.state.greeting }}</h1>
      <facebook></facebook>
    </div>
  </section>
</template>
<script>
  import Facebook from '../components/login/facebook'

  export default {
    components: {
      Facebook
    }
  }
</script>
