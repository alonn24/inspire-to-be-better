<template>
  <div>
    <div>facebook</div>
    <div @click="$store.commit('facebookStatus')">status: {{ $store.state.connected }}</div>
    <div @click="$store.commit('facebookLogin')">log in</div>
    <div @click="$store.commit('facebookLogout')">log out</div>
  </div>
</template>
