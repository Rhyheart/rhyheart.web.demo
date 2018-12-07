<template>
  <div>
    <el-date-picker v-model="commonParam.startTime" type="date" value-format="yyyy-MM-dd" placeholder="选择开始日期">
    </el-date-picker> -
    <el-date-picker v-model="commonParam.endTime" type="date" placeholder="选择结束日期">
    </el-date-picker>
     <el-button type="primary" v-on:click="submit()">提交</el-button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        common: {
          name: 'test',
          message: 'welcome to test page...'
        },
        commonParam:{
            startTime:null,
            endTime:null
        }
      }
    },
    mounted() {
      this.$ele.Message.success(this.common.message);
    },
    methods:{
        submit(){
            console.log(this.commonParam.startTime);
        }
    }
  }
</script>
