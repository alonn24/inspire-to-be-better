<template>
  <section class="section is-large">
    <div class="container has-text-centered">
      <h1 class="title" @click="$store.commit('fetchSomething')">{{ $store.state.greeting }}</h1>
      <facebook></facebook>
      <google></google>
      <github></github>
    </div>
  </section>
</template>
<script>
  import Facebook from '../components/auth/facebook'
  import Google from '../components/auth/google'
  import Github from '../components/auth/github'

  export default {
    components: {
      Facebook,
      Google,
      Github
    }
  }
</script>
