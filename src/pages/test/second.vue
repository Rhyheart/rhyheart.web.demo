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
        name: "test-second",
        message: "welcome to test-second page..."
      }
    };
  }
};
</script>
