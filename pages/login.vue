<script setup>
// by useState in composable
// const isLoggedIn = useIsLoggedIn();

const user = useUser()

definePageMeta({
  layout: "plain",
});

//move to action on store
function login() {
  // isLoggedIn.value = true;
  user.isLoggedIn = true
  useRouter().push("/");
}
</script>

<template>
  <div>
    <form @submit.prevent="user.login">
      <h1>Login</h1>
      <label for="">
        Username
        <input type="text" />
      </label>
      <label for="">
        Password
        <input type="password" />
      </label>
      <button>Login</button>
    </form>
  </div>
</template>
