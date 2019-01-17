<template>
  <div>
    <p>
      <router-link to="/home">Go to Home</router-link>
    </p>
    <p>
      <router-link to="/login">Go to Login</router-link>
    </p>
    <p style="color:red;">{{common.message}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      common: {
        name: "404",
        message: "welcome to 404 page..."
      }
    };
  }
};
</script>
