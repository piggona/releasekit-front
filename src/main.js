import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "vue-awesome/icons";
import {
  Button,
  Row,
  Col,
  Progress,
  Radio,
  Icon,
  Card,
  Statistic
} from "ant-design-vue"

Vue.config.productionTip = true;

Vue.use(Button);
Vue.use(Row);
Vue.use(Col);
Vue.use(Progress);
Vue.use(Radio);
Vue.use(Icon);
Vue.use(Card);
Vue.use(Statistic);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
