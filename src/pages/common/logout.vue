<template>
  <div>
    <p style="color:green;">{{common.message}}</p>
    <p></p>
    <p>
      <router-link to="/login">重新登录</router-link>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      common: {
        name: "logout",
        message: "welcome to logout page..."
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
