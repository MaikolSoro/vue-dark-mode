import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import Home from '@/components/Home'; 
// import HelloWorld from '@/components/HelloWorld'; 

Vue.config.productionTip = false
Vue.use(VueRouter);

const routes = [
   {path: '/home', component: Home},
  //  { path: '/hello', component: HelloWorld}
  
];
const router= new VueRouter({
    routes,
    mode: 'history'
});


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
