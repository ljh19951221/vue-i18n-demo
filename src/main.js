// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible/flexible' 
import VueI18n from 'vue-i18n'
import {   
  Toast,
  Button,
  Search,
  DropdownMenu,
  DropdownItem 
} from 'vant';

Vue.use(Toast)
  .use(Search)
  .use(Button)
  .use(DropdownMenu)
  .use(DropdownItem)
  .use(VueI18n);

Vue.config.productionTip = false

const i18n = new VueI18n({
  locale: 'zh-CN',    // 语言标识
  //this.$i18n.locale // 通过切换locale的值来实现语言切换
  messages: {
    'zh-CN': require('./common/lang/zh'),   // 中文语言包
    'zh-TW': require('./common/lang/zh_TW'), 
    'en-US': require('./common/lang/en')    // 英文语言包
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n, 
  router,
  components: { App },
  template: '<App/>'
})
