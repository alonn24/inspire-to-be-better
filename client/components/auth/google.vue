<template>
  <div class="box">
    <div class="subtitle">google</div>
    <div>
      <span @click="$store.commit('socialStatus', 'google')">status: {{ $store.state.social.google.connected }}</span>
    </div>
    <button class="button" @click="$store.commit('socialLogin', 'google')">log in</button>
    <button class="button" @click="$store.commit('socialLogout', 'google')">log out</button>
  </div>
</template>
