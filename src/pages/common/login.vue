<template>
  <!-- <div>
    <p>
      <router-link to="/register">Go to Register</router-link>
    </p>
    <p style="color:green;">{{common.message}}</p>
    <p>
      <button v-on:click="login">登录</button>
    </p>
  </div> -->
  <div>
    <el-row>
      <el-col :span="4">
        &nbsp;
      </el-col>
      <el-col :span="16">
        <el-card class="box-card login">
          <div slot="header" class="clearfix">
            <span>用户登录</span>
          </div>
          <el-form :model="editor" :rules="editorRule" ref="editor" label-width="100px">
            <el-form-item label="用户名" prop="userName">
              <el-input v-model="editor.userName"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input v-model="editor.password"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submit('editor')">登录</el-button>
              <el-button @click="reset('editor')">重置</el-button>
            </el-form-item>
          </el-form>
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
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    submit(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    reset(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style>
.box-card.login {
  margin-top: calc(20vh);
}
</style>
