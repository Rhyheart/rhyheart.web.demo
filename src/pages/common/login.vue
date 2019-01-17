<template>
  <div>
    <p>
      <router-link to="/register">Go to Register</router-link>
    </p>
    <p style="color:green;">{{common.message}}</p>
    <p>
      <button v-on:click="login">登录</button>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      common: {
        name: "login",
        message: "welcome to login page..."
      }
    };
  },
  methods: {
    login() {
      this.$router.push("home");
    }
  }
};
</script>
