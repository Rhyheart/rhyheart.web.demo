<template>
  <el-container>
    <el-header style="height:50px;">
      <el-row>
        <el-col :span="16" class="left">
          <img src="../../assets/img/logo.png">
          <span>测试项目</span>
          <span v-on:click="asideExchange">
            <i v-if="page.isAsideOpen" class="el-icon-d-arrow-left"></i>
            <i v-else class="el-icon-d-arrow-right"></i>
          </span>
        </el-col>
        <el-col :span="8" class="right">
          <span v-on:click="logout"><i class="fa fa-sign-out"></i></span>
        </el-col>
      </el-row>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <!-- Aside -->
        <el-menu class="el-menu-vertical" @open="handleMenuOpen" @close="handleMenuClose" @select="handleMenuSelect" :collapse="!page.isAsideOpen" :default-active="this.$route.path">
          <template v-for="(item,index) in menus">
            <el-submenu v-if="item.children" :key="index" :index="item.url?item.url:index+''">
              <template slot="title">
                <i :class="item.icon"></i>
                <span>{{item.name}}</span>
              </template>
              <el-menu-item v-for="(item2,index2) in item.children" :key="index2" :index="item2.url?item2.url:(index+'-'+index2)+''">
                <span>{{item2.name}}</span>
              </el-menu-item>
            </el-submenu>
            <el-menu-item v-else :key="index" :index="item.url?item.url:index+''">
              <i :class="item.icon"></i>
              <span slot="title">{{item.name}}</span>
            </el-menu-item>
          </template>
        </el-menu>
      </el-aside>
      <el-container>
        <!-- Main -->
        <el-main :class="page.isAsideOpen?'open':'close'">
          <router-view />
        </el-main>
        <!-- Footer -->
        <!-- <el-footer style="height:40px;" :class="page.isAsideOpen?'open':'close'">Design by rhyheart @ 2019</el-footer> -->
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      page: {
        isAsideOpen: true,
        screenWidth: document.body.clientWidth,
        screenHeight: document.body.clientHeight
      },
      menus: [],
      common: {
        name: "home",
        message: "welcome to  home page..."
      }
    };
  },
  mounted() {
    this.initEvent();
    this.initMenu();
  },
  methods: {
    logout() {
      this.$router.push("/login");
    },
    initEvent() {
      var This = this;
      window.onresize = () => {
        return (() => {
          This.page.screenWidth = document.body.clientWidth;
          This.page.screenHeight = document.body.clientHeight;
          This.asideAdapting();
        })();
      };
      This.asideAdapting();
    },
    asideAdapting() {
      if (this.page.screenWidth > 500) {
        this.page.isAsideOpen = true;
      } else {
        this.page.isAsideOpen = false;
      }
    },
    asideExchange() {
      this.page.isAsideOpen = !this.page.isAsideOpen;
    },
    handleMenuOpen(key, keyPath) {
      //console.log(key, keyPath);
    },
    handleMenuClose(key, keyPath) {
      //console.log(key, keyPath);
    },
    handleMenuSelect(index) {
      //console.log(index);
      this.$router.push(index);
    },
    initMenu() {
      this.menus = [
        {
          name: "首页",
          icon: "fa fa-home",
          url: "/welcome"
        },
        {
          name: "默认分组",
          icon: "el-icon-location",
          children: [
            {
              name: "页面一",
              url: "/default/first",
              icon: "el-icon-menu"
            },
            {
              name: "页面二",
              url: "/default/second",
              icon: "el-icon-menu"
            },
            {
              name: "页面三",
              url: "/default/third",
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
              url: "/test/first",
              icon: "el-icon-menu"
            },
            {
              name: "页面二",
              url: "/test/second",
              icon: "el-icon-menu"
            },
            {
              name: "页面三",
              url: "/test/third",
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
              url: "/demo/first",
              icon: "el-icon-menu"
            },
            {
              name: "页面二",
              url: "/demo/second",
              icon: "el-icon-menu"
            },
            {
              name: "页面三",
              url: "/demo/third",
              icon: "el-icon-menu"
            }
          ]
        }
      ];
    }
  }
};
</script>
