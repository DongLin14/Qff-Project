<template>
  <el-container style="height: 100%; border: 1px solid #eee">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu :default-openeds="['1', '3']">
        <el-submenu index="1">
          <template slot="title"><i class="el-icon-message"></i>周报系统</template>
          <el-menu-item-group>


<!--            路由跳转还是有问题，用el-menu-item标签没办法跳转-->
            <el-menu-item index="write" ><a href="write">周报填写</a></el-menu-item>
            <el-menu-item index="refer"><a href="refer">历史查询</a></el-menu-item>
            <el-menu-item index="userList"><a href="userList">用户列表</a></el-menu-item>
          </el-menu-item-group>

          </el-submenu>

      </el-menu>
    </el-aside>

    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>查看</el-dropdown-item>
            <el-dropdown-item>新增</el-dropdown-item>
            <el-dropdown-item>删除</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span>admin</span>
      </el-header>

      <el-main>
        <router-view></router-view>

      </el-main>
<!--      此处应该做成是一个欢迎界面，然后通过组件的方式安排不同的界面-->
<!--      <el-main>-->
<!--        <el-table :data="tableData">-->
<!--          <el-table-column prop="date" label="日期" width="140">-->
<!--          </el-table-column>-->
<!--          <el-table-column prop="name" label="姓名" width="120">-->
<!--          </el-table-column>-->
<!--          <el-table-column prop="address" label="地址">-->
<!--          </el-table-column>-->
<!--        </el-table>-->
<!--      </el-main>-->

    </el-container>
  </el-container>
</template>

<script>
export default {
  // data() {
  //   const item = {
  //     date: '2016-05-02',
  //     name: '王小虎',
  //     address: '上海市普陀区金沙江路 1518 弄'
  //   };
  //   return {
  //     tableData: Array(20).fill(item)
  //   }
  // }
};
</script>

<style>
.el-header {
  background-color: #B3C0D1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}

</style>
