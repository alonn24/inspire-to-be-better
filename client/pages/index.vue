<template>
  <section class="section">
    <div class="container has-text-centered">
      <h1 class="title" @click="$store.commit('fetchSomething')">{{ $store.state.greeting }}</h1>
      <social-auth vendor="facebook"></social-auth>
      <social-auth vendor="google"></social-auth>
      <social-auth vendor="github"></social-auth>
    </div>
  </section>
</template>
<script>
  import SocialAuth from '../components/social-auth.vue'

  export default {
    components: {
      SocialAuth
    }
  }
</script>
