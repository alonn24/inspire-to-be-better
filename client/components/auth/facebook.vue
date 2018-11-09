<template>
  <div class="box">
    <div class="subtitle">facebook</div>
    <div>
      <span @click="$store.commit('facebookStatus')">status: {{ $store.state.facebookConnected }}</span>
    </div>
    <button class="button" @click="$store.commit('facebookLogin')">log in</button>
    <button class="button" @click="$store.commit('facebookLogout')">log out</button>
  </div>
</template>
