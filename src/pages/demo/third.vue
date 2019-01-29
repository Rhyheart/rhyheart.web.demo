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
        name: "demo-third",
        message: "welcome to demo-third page..."
      }
    };
  }
};
</script>
