<template>

  <el-container>
    <el-header>Header</el-header>
    <el-container>
      <el-aside width="200px">
        <!-- Aside -->
        <el-row class="tac">
          <el-col :span="24">
            <el-menu @open="handleOpen" @close="handleClose">
                <el-menu-item index="0">
                <i class="el-icon-menu"></i>
                <span slot="title"><a href="#/test">测试</a></span>
              </el-menu-item>
              <el-menu-item index="1">
                <i class="el-icon-menu"></i>
                <span slot="title"><a href="#/first">页面一</a></span>
              </el-menu-item>
              <el-menu-item index="2">
                <i class="el-icon-setting"></i>
                <span slot="title"><a href="#/second">页面二</a></span>
              </el-menu-item>
              <el-menu-item index="3">
                <i class="el-icon-document"></i>
                <span slot="title"><a href="#/third">页面三</a></span>
              </el-menu-item>
            </el-menu>
          </el-col>
        </el-row>
      </el-aside>
      <el-container>
        <el-main>
          <!-- Main -->
          <router-view />
        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </el-container>

</template>

<script>
  export default {
    data() {
      return {
        common: {
          name: "home",
          message: "welcome to  home page..."
        }
      };
    },
    mounted() {
      this.$message.success(this.common.message);
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  };
</script>
