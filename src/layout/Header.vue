<template>
  <div>
      <!--网页顶栏-->
      <div class="nav-simple">
          <div class="logo">
              <router-link class="logo" :to="'/'">
                releasekit 自动发布平台
            </router-link>
          </div>
      </div>
  </div>
</template>

<script>
// import { mapState } from "vuex";

export default {
  data() {
    return {
      username: "haohao"
    };
  }
}
</script>

<style>
/*搜索框*/
select {
  /*Chrome和Firefox里面的边框是不一样的，所以复写了一下*/
  border: solid 2px #616161;
  height: 40px;
  width: 100px;

  /*很关键：将默认的select选择框样式清除*/
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;

  /*在选择框的最右侧中间显示小箭头图片*/
  background: url("https://raw.githubusercontent.com/ourjs/static/gh-pages/2015/arrow.png")
    no-repeat scroll right center transparent;

  /*为下拉小箭头留出一点位置，避免被文字覆盖*/
  padding-right: 14px;
  vertical-align: -webkit-baseline-middle;
  margin-bottom: 10px;
}
.nav-simple {
  height: 85px;
  line-height: 40px;
  border-bottom: 1px solid #ddd;
  background: #808B96;
}
.nav-simple .space {
  height: 15px;
  line-height: 40px;
}
.nav-simple .logo {
  padding-top: 1%;
  font-size: 40px;
  font-weight: bold;
  color: #ECF0F1;
}
.nav-simple .logo .logo-sec {
  font-size: 40px;
  font-weight: bold;
  color: #e0e0e0;
}
</style>
