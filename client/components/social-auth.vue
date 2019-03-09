<template>
  <div class="box">
    <div class="subtitle">{{ vendor }}</div>
    <div>
      <span @click="$store.commit('socialStatus', vendor)">status: {{ $store.state.social[vendor].connected }}</span>
    </div>
    <button class="button" @click="$store.commit('socialLogin', vendor)">log in</button>
    <button class="button" @click="$store.commit('socialLogout', vendor)">log out</button>
  </div>
</template>
<script src="./social-auth.js"/>
