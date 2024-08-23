<script setup lang="ts">
</script>

<template>
  <nav class="link">
    <router-link to="/micro-app-vue">Micro App Vue</router-link>
    <router-link to="/micro-app-svelte">Micro App Svelte</router-link>
    <router-link to="/micro-app-dom7">Micro App dom7</router-link>
  </nav>
  <router-view />
</template>

<style scoped>
.link {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin: 20px;
  a {
    text-decoration: none;
    color: #000;
    &.router-link-active {
      color: green;
    }
  }
}
</style>
