<script setup>
const route = useRoute();
const baseUrl = `http://www.omdbapi.com/?apikey=edf3dda4&i=${route.params.id}`;
const testStatusUrl = "https://httpbin.org/status/500";
// const res = await $fetch(baseUrl);

// const { data } = await useAsyncData(`/movies/${route.params.id}`, () => {
//   return $fetch(baseUrl)
// })

const { data } = await useFetch(baseUrl, {
  pick: ["Plot", "Title", "Poster"],
  key: `/movies/${route.params.id}`,
  onResponse: ({ request, response }) => {
    if (response._data.Error === "Incorrect IMDb ID.") {
      showError({ statusCode: 404, statusMessage: "Page non trouvée" });
    }
  },
  onResponseError: () => {
    showError({
      statusCode: 500,
      statusMessage: "Oh noes",
    });
  },
});

useHead({
  title: data.value.Title,
  meta: [
    { name: "description", content: data.value.Plot },
    { property: "og:description", content: data.value.Plot },
    { property: "og:image", content: data.value.Poster },
    { name: "twitter:card", content: `summary_large_image` },
  ],
});
</script>

<template>
  <div>
    <pre>{{ data }}</pre>
  </div>
</template>
