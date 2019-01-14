<template>
  <el-container>
    <el-header style="height:50px;">
      <img src="../../assets/logo.png" alt="vue logo">
      <span>测试项目</span>
      <span v-on:click="changeCollapse">
        <i v-if="ui.isCollapse" class="el-icon-d-arrow-right"></i>
        <i v-else class="el-icon-d-arrow-left"></i>
      </span>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <!-- Aside -->
        <el-menu
          class="el-menu-vertical"
          @open="handleOpen"
          @close="handleClose"
          @select="handleSelect"
          :collapse="ui.isCollapse"
        >
          <template v-for="(item,index) in menus">
            <el-submenu v-if="item.children" :key="index" :index="index+''">
              <template slot="title">
                <i :class="item.icon"></i>
                <span>{{item.name}}</span>
              </template>
              <el-menu-item
                v-for="(item2,index2) in item.children"
                :key="index2"
                :index="index+'_'+index2"
              >
                <span>{{item2.name}}</span>
              </el-menu-item>
            </el-submenu>
            <el-menu-item v-else :key="index" :index="index+''">
              <i :class="item.icon"></i>
              <span slot="title">{{item.name}}</span>
            </el-menu-item>
          </template>
        </el-menu>
      </el-aside>
      <el-container>
        <el-main>
          <!-- Main -->
          <router-view/>
        </el-main>
        <el-footer style="height:40px;">Design by rhyheart @ 2019</el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      ui: {
        isCollapse: false
      },
      menus: [],
      common: {
        name: "home",
        message: "welcome to  home page..."
      }
    };
  },
  mounted() {
    this.menus = [
      {
        name: "默认分组",
        icon: "el-icon-location",
        children: [
          {
            name: "页面一",
            url: "first",
            icon: "el-icon-menu"
          },
          {
            name: "页面二",
            url: "second",
            icon: "el-icon-menu"
          },
          {
            name: "页面三",
            url: "third",
            icon: "el-icon-menu"
          }
        ]
      },
      {
        name: "测试分组",
        icon: "el-icon-edit-outline",
        children: [
          {
            name: "页面一",
            url: "first",
            icon: "el-icon-menu"
          },
          {
            name: "页面二",
            url: "second",
            icon: "el-icon-menu"
          },
          {
            name: "页面三",
            url: "third",
            icon: "el-icon-menu"
          }
        ]
      },
      {
        name: "示例分组",
        icon: "el-icon-star-on",
        children: [
          {
            name: "页面一",
            url: "first",
            icon: "el-icon-menu"
          },
          {
            name: "页面二",
            url: "second",
            icon: "el-icon-menu"
          },
          {
            name: "页面三",
            url: "third",
            icon: "el-icon-menu"
          }
        ]
      }
    ];
    //this.$message.success(this.common.message);
  },
  methods: {
    changeCollapse() {
      if (this.ui.isCollapse) {
        this.ui.isCollapse = false;
        document.getElementsByClassName("el-main")[0].style.margin =
          "50px 0 0 200px";
        document.getElementsByClassName("el-footer")[0].style.margin =
          "0 0 0 200px";
      } else {
        this.ui.isCollapse = true;
        document.getElementsByClassName("el-main")[0].style.margin =
          "50px 0 0 64px";
        document.getElementsByClassName("el-footer")[0].style.margin =
          "0 0 0 64px";
      }
    },
    handleOpen(key, keyPath) {
      //console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      //console.log(key, keyPath);
    },
    handleSelect(index) {
      let strs = index.split("_");
      let item = {};
      if (strs.length >= 1) {
        item = this.menus[strs[0]];
      }
      if (strs.length >= 2) {
        item = item.children[strs[1]];
      }
      this.changePage(item);
    },
    changePage(item) {
      this.$router.push(item.url);
    }
  }
};
</script>

<style>
body {
  margin: 2px;
}

.el-header {
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.25);
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 100;
  background-color: white;
  color: #333;
  line-height: 50px;
  text-align: left;
}

.el-header span {
  font-size: 20px;
  padding-left: 15px;
  vertical-align: middle;
}

.el-header img {
  vertical-align: middle;
  width: 30px;
  height: 30px;
}

.el-footer {
  padding-top: 10px;
  margin: 0 0 0 200px;
  text-align: center;
  transition-delay: 50ms;
  transition-duration: 300ms;
  background-color: #e9eef3;
}

.el-aside {
  position: fixed;
  top: 50px;
  bottom: 0;
  color: #333;
  text-align: center;
  line-height: 200px;
  overflow-y: auto;
  overflow-x: hidden;
}

.el-main {
  min-height: calc(100vh - 95px);
  padding: 5px;
  margin: 50px 0 0 200px;
  background-color: #e9eef3;
  color: #333;
  transition-delay: 50ms;
  transition-duration: 300ms;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}

.el-menu-vertical:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>