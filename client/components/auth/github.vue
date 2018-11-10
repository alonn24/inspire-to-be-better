<template>
  <div class="box">
    <div class="subtitle">github</div>
    <div>
      <span @click="$store.commit('socialStatus', 'github')">status: {{ $store.state.social.github.connected }}</span>
    </div>
    <button class="button" @click="$store.commit('socialLogin', 'github')">log in</button>
    <button class="button" @click="$store.commit('socialLogout', 'github')">log out</button>
  </div>
</template>
