<template>
  <div class="box">
    <div class="subtitle">facebook</div>
    <div>
      <span @click="$store.commit('socialStatus', 'facebook')">status: {{ $store.state.social.facebook.connected }}</span>
    </div>
    <button class="button" @click="$store.commit('socialLogin', 'facebook')">log in</button>
    <button class="button" @click="$store.commit('socialLogout', 'facebook')">log out</button>
  </div>
</template>
