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
        name: "demo-first",
        message: "welcome to demo-first page..."
      }
    };
  }
};
</script>
