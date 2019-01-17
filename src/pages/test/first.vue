<template>
  <div>
    <p>{{common.message}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      common: {
        name: "test-first",
        message: "welcome to test-first page..."
      }
    };
  }
};
</script>
