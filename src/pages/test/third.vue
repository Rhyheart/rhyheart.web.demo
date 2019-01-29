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
        name: "test-third",
        message: "welcome to test-third page..."
      }
    };
  }
};
</script>
