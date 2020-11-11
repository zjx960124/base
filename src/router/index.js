import Vue from 'vue';
import vueRouter from 'vue-router';
import page1 from '../view/page1.vue';
import page2 from '../view/page2.vue';


Vue.use(vueRouter);

const _import = require('./import-' + process.env.NODE_ENV);
console.log(_import);

export default new vueRouter ({
  mode: 'hash',
  routes: [
    {
      path: '/page1',
      component: _import('page1')
    },
    {
      path: '/page2',
      component: _import('page2')
    },
    {
      path: '/',
      component: _import('page1')
    }
  ]
})
