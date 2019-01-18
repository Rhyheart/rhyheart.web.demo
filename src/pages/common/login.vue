<template>
  <div class="common-body login">
    <el-row>
      <el-card class="box-card login">
        <div slot="header" class="clearfix">
          <span>用户登录</span>
        </div>
        <el-form :model="editor" :rules="editorRule" ref="editor" label-width="100px">
          <el-form-item label="用户名" prop="userName">
            <el-input v-model="editor.userName"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="editor.password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submit('editor')">登录</el-button>
            <el-button @click="reset('editor')">重置</el-button>
          </el-form-item>
        </el-form>
        <div class="login-footer">
          <router-link to="/register">
            前往注册
            <i class="el-icon-arrow-right"></i>
          </router-link>
        </div>
      </el-card>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      editor: {
        userName: "",
        password: ""
      },
      editorRule: {
        userName: [
          { required: true, message: "请输入用户名", trigger: "blur" }
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  },
  methods: {
    submit(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.login();
        } else {
          return false;
        }
      });
    },
    reset(formName) {
      this.$refs[formName].resetFields();
    },
    login() {
      this.$notify({
        title: "成功",
        message: "登录成功",
        type: "success",
        position: "bottom-right"
      });
      this.$router.push("home");
    }
  }
};
</script>