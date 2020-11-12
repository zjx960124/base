console.log(`%c` + CONSTANT, 'color:red');
console.log(`%c ${process.env.NODE_ENV}`, 'color:blue');
import Vue from 'vue'
import App from './App.vue'
import router from './router';
import store from '../store/index';

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

