<template>

<el-row>
  <el-col :span="4" v-for="(o, index) in 4" :key="o" :offset="index > 0 ? 2 : 0">
    <el-card :body-style="{ padding: '0px' }">
      
      <div style="padding: 14px;">
        <span></span>
        <h4>帖子名</h4>
        <p>主楼内容</p>
        <div class="bottom clearfix">
          <el-button type="text" class="button" @click="toPost()" >打开帖子</el-button>
          <td></td>
          <el-popconfirm title="这是一段内容确定删除吗？" @click="test">
          <el-button type="text" slot="reference">删除</el-button>
        </el-popconfirm>

  
        </div>
      </div>
    </el-card>
  </el-col>
</el-row>

</template>

<script>
//import func from 'vue-editor-bridge'
export default {
  methods:{
    test:function()
    {
      console.log("ok");
    },
    toPost:function()
    {
      this.$router.replace({path:'/postid=xxx'});
    }
  }
  
}
</script>