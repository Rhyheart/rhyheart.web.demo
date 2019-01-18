<template>
  <div class="common-body error-500">
    <div class="error-header"></div>
    <div class="error-container">
      <div class="error-detail">
        <div class="error-name error-500">{{common.name}}</div>
        <div class="error-divider">
          <p class="error-title">{{common.title}}</p>
          <p class="error-message">{{common.message}}</p>
        </div>
        <div class="error-button">
          <el-button type="danger" v-on:click="home">
            <i class="fa fa-home">&nbsp;</i>Home
          </el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      common: {
        name: "500",
        title: "Service Error",
        message: "An exception occurred to the service"
      }
    };
  },
  methods: {
    home() {
      this.$router.push("home");
    }
  }
};
</script>
