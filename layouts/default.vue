<script setup>
const user = useUser()
// const isLoggedIn = useIsLoggedIn();
</script>
<template>
  <div>
    <nav style="display: flex; gap: 10px">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/movies">Movies</NuxtLink>
      <NuxtLink v-if="!user.isLoggedIn" to="/login">Login</NuxtLink>
      <a href="#" v-if="user.isLoggedIn" @click.prevent="user.isLoggedIn = false"
        >Logout</a
      >
    </nav>
    <slot></slot>
  </div>
</template>
