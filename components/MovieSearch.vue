<script setup lang="">
const query = ref("batman");
const movies = ref([]);

async function search() {
  const baseUrl = `http://www.omdbapi.com/?apikey=edf3dda4&s=${query.value}`;
  const { Search } = await $fetch(baseUrl);

  movies.value = Search;
}

search();
</script>

<template>
  <div>
    <form @submit.prevent="search">
      <input type="text" v-model="query" />
      <button>Search</button>
    </form>

    <ul style="display: flex; flex-wrap: wrap; gap: 10px; list-style: none">
      <li v-for="movie in movies" :key="movie.imdbID">
        <NuxtLink :to="{ name: 'movies-id', params: { id: movie.imdbID } }">
          <img :src="movie.Poster" :alt="movie.title" srcset="" />
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
