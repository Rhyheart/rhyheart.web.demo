<template>
  <div class="common-body error-404">
    <div class="error-header"></div>
    <div class="error-container">
      <div class="error-detail">
        <div class="error-name error-404">{{common.name}}</div>
        <div class="error-divider">
          <p class="error-title">{{common.title}}</p>
          <p class="error-message">{{common.message}}</p>
        </div>
        <div class="error-button">
          <el-button type="primary" v-on:click="home">
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
        name: "404",
        title: "Page Not Found",
        message: "We couldn’t find this page"
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
