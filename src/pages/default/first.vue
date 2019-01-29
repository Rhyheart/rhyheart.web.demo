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
        name: "default-first",
        message: "welcome to default-first page..."
      }
    };
  }
};
</script>
