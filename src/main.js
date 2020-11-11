let i = 4;
console.log(i);
console.log(CONSTANT);
console.log(process.env.NODE_ENV);
import Vue from 'vue'
import App from './App.vue'
import router from './router';

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

