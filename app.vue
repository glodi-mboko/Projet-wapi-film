<script setup>
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Movie site` : "Movie site";
  },
});
</script>

<template>
  <div>
    <!-- <NuxtWelcome /> -->
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
