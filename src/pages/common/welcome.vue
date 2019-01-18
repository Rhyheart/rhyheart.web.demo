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
        name: "welcome",
        message: "welcome to home page..."
      }
    };
  }
};
</script>
