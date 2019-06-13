<template>
<div class="cell">
  <div class="cell-title">{{title}}</div>
  <span class="cell-content">
    <slot name="content">
      {{content}}
    </slot>
  </span>
  <span class="cell-right">
    <slot name="right">
      {{right}}
    </slot>
  </span>
</div>

</template>
<script>
export default {
    props: {
    title: String,
    content: String,
    right:String
    }
}
</script>
<style>
.cell {
  overflow: hidden;
  text-align: center;
  line-height: 36px;
  background-color: rgb(255, 255, 255);
}
.cell-title {
  color: black;
  float: left;
  margin-left: 3px;
}
.cell-content {
  margin: 0 auto;
}
.cell .cell-right{
  margin-right: 5px;
  float: right;
  color: black;
}
</style>

