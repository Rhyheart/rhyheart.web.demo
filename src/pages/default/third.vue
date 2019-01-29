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
        name: "default-third",
        message: "welcome to default-third page..."
      }
    };
  }
};
</script>
