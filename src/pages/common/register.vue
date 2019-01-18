<template>
  <div>
    <el-row>
      <el-col :span="4">
        &nbsp;
      </el-col>
      <el-col :span="16">
        <el-card class="box-card login">
          <div slot="header" class="clearfix">
            <span>用户注册</span>
          </div>
          <el-form :model="editor" :rules="editorRule" ref="editor" label-width="100px">
            <el-form-item label="用户名" prop="userName">
              <el-input v-model="editor.userName"></el-input>
            </el-form-item>
            <el-form-item label="昵称" prop="nickName">
              <el-input v-model="editor.nickName"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input type="password" v-model="editor.password"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="confirmPassword">
              <el-input type="password" v-model="editor.confirmPassword"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submit('editor')">注册</el-button>
              <el-button @click="reset('editor')">重置</el-button>
            </el-form-item>
          </el-form>
          <div style="text-align:right;">
            <router-link to="/login">前往登录<i class="el-icon-arrow-right"></i></router-link>
          </div>
        </el-card>
      </el-col>
      <el-col :span="4">
        &nbsp;
      </el-col>
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
          { required: true, message: "请输入用户名", trigger: "blur" },
          {
            min: 3,
            max: 20,
            message: "长度在 3 到 20 个字符",
            trigger: "blur"
          },
          {
            validator: this.checkUserName,
            trigger: "blur"
          }
        ],
        nickName: [
          {
            max: 30,
            message: "长度不能超过 30 个字符",
            trigger: "blur"
          }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 5,
            max: 10,
            message: "长度在 5 到 10 个字符",
            trigger: "blur"
          },
          {
            validator: this.checkPassword,
            trigger: "blur"
          }
        ],
        confirmPassword: [
          { required: true, message: "请输入确认密码", trigger: "blur" },
          {
            validator: this.checkConfirmPassword,
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    checkUserName(rule, value, callback) {
      console.log("用户名：" + value);
      if (!/^[a-zA-Z]{1}\w+$/.test(value)) {
        var errorMessage = "用户名必须以字母开头，且不能包含汉字和其他特殊字符";
        callback(errorMessage);
      } else {
        callback();
      }
    },
    checkPassword(rule, value, callback) {
      if (!/^\w+$/.test(value)) {
        var errorMessage = "密码中不能包含汉字和其他特殊字符";
        callback(errorMessage);
      } else {
        callback();
      }
    },
    checkConfirmPassword(rule, value, callback) {
      if (value != this.editor.password) {
        var errorMessage = "确认密码必须与密码一致";
        callback(errorMessage);
      } else {
        callback();
      }
    },
    formatData() {
      if (this.editor.userName) {
        this.editor.userName = this.editor.userName.trim();
      }
      if (this.editor.nickName) {
        this.editor.nickName = this.editor.nickName.trim();
      }
      if (this.editor.password) {
        this.editor.password = this.editor.password.trim();
      }
      if (this.editor.confirmPassword) {
        this.editor.confirmPassword = this.editor.confirmPassword.trim();
      }
    },
    submit(formName) {
      this.formatData();
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.register();
        } else {
          return false;
        }
      });
    },
    reset(formName) {
      this.$refs[formName].resetFields();
    },
    register() {
      this.$notify({
        title: "成功",
        message: "登录成功",
        type: "success"
      });
      this.$router.push("login");
    }
  }
};
</script>

<style>
.box-card.login {
  margin-top: calc(20vh);
}
</style>
