<template>
  <div class="com-container">
    <p>{{common.message}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      common: {
        name: "default-second",
        message: "welcome to default-second page..."
      }
    };
  }
};
</script>
