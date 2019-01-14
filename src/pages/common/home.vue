<template>
  <el-container>
    <el-header style="height:50px;">
      <img src="../../assets/logo.png" alt="vue logo">
      <span>测试项目</span>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <!-- Aside -->
        <el-row>
          <el-col :span="24">
            <el-menu @open="handleOpen" @close="handleClose">
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
                  >{{item2.name}}</el-menu-item>
                </el-submenu>
                <el-menu-item v-else :key="index" :index="index+''">
                  <i :class="item.icon"></i>
                  <span slot="title">{{item.name}}</span>
                </el-menu-item>
              </template>
            </el-menu>
          </el-col>
        </el-row>
      </el-aside>
      <el-container>
        <el-main>
          <!-- Main -->
          <router-view/>
        </el-main>
        <el-footer style="height:3  0px;">Design by rhyheart @ 2019</el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
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
        url: "#",
        icon: "el-icon-location",
        children: [
          {
            name: "页面一",
            url: "#",
            icon: "el-icon-menu"
          },
          {
            name: "页面二",
            url: "#",
            icon: "el-icon-menu"
          },
          {
            name: "页面三",
            url: "#",
            icon: "el-icon-menu"
          }
        ]
      },
      {
        name: "测试分组",
        url: "#",
        icon: "el-icon-edit-outline",
        children: [
          {
            name: "页面一",
            url: "#",
            icon: "el-icon-menu"
          },
          {
            name: "页面二",
            url: "#",
            icon: "el-icon-menu"
          },
          {
            name: "页面三",
            url: "#",
            icon: "el-icon-menu"
          }
        ]
      },
      {
        name: "示例分组",
        url: "#",
        icon: "el-icon-star-on",
        children: [
          {
            name: "页面一",
            url: "#",
            icon: "el-icon-menu"
          },
          {
            name: "页面二",
            url: "#",
            icon: "el-icon-menu"
          },
          {
            name: "页面三",
            url: "#",
            icon: "el-icon-menu"
          }
        ]
      }
    ];
    //this.$message.success(this.common.message);
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
  padding-left: 10px;
  vertical-align: middle;
}

.el-header img {
  vertical-align: middle;
  width: 30px;
  height: 30px;
}

.el-footer {
  padding: 10px 0 0 200px;
  text-align: center;
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
  min-height: calc(100vh - 90px);
  padding: 5px;
  margin: 50px 0 0 200px;
  background-color: #e9eef3;
  color: #333;
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
</style>