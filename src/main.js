// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import iView from 'iview'
import config from '@/config'
import 'iview/dist/styles/iview.css'
import './index.less'
import '@/assets/icons/iconfont.css'
if (process.env.NODE_ENV !== 'production') require('@/mock')
Vue.use(iView, {
    transfer: true,
    size: 'small'
});
Vue.prototype.$config = config

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})