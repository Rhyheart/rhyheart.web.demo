<template>
  <div>
    <p style="color:green;">{{common.message}}</p>
    <p>
      <button v-on:click="register">注册</button>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      common: {
        name: "register",
        message: "welcome to register page..."
      }
    };
  },
  methods: {
    register() {
      this.$router.push("login");
    }
  }
};
</script>
