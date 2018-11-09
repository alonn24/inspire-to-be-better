<template>
  <section class="section is-large">
    <div class="container has-text-centered">
      <h1 class="title" @click="$store.commit('fetchSomething')">{{ $store.state.greeting }}</h1>
      <facebook></facebook>
      <google></google>
    </div>
  </section>
</template>
<script>
  import Facebook from '../components/auth/facebook'
  import Google from '../components/auth/google'

  export default {
    components: {
      Facebook,
      Google
    }
  }
</script>
