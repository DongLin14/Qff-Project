<template>
  <div class="title">
    <p>周报题目</p>
    <el-input
      placeholder="主题"
      v-model="input"
      clearable>
    </el-input>
  </div>


</template>

<script>
export default {
  name: "write"
}
</script>

<style scoped>
.el-input__inner {
  float: left;
  width: 50%;
}
</style>
