<template>
  <div class="box">
    <div class="subtitle">google</div>
    <div>
      <span @click="$store.commit('googleStatus')">status: {{ $store.state.googleConnected }}</span>
    </div>
    <button class="button" @click="$store.commit('googleLogin')">log in</button>
    <button class="button" @click="$store.commit('googleLogout')">log out</button>
  </div>
</template>
