<template>
  <section class="section is-large">
    <div class="container has-text-centered">
      <h1 class="title" v-on:click="fetchSomething">{{ greeting }}</h1>
    </div>
  </section>
</template>
<script>
  import axios from 'axios';

  export default {
    data() {
      return {
        greeting: 'static hello world!'
      }
    },
    methods: {
      async fetchSomething() {
        const response = await axios.get('/_api/provider/_functions/data');
        this.greeting = response.data;
      }
    }
  }
</script>
