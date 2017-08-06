// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-default/index.css';
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
import App from './App';
import router from './router';
import filter from './filter';
import store from './store';
import Loading from './components/Loading';
import Notification from './components/Notification';

Object.keys(filter).forEach(f => {
  Vue.filter(f,filter[f]);
});

Vue.config.productionTip = false;
// Vue.use(ElementUI);
Vue.component('icon', Icon)

Vue.prototype.$notifi = Notification;

Object.defineProperties(Vue.prototype, {
  $store: {
		get() {
			return store;
		}
	}
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<html><meta name="viewport" content="width=device-width"><App/></html>',
  components: { App },
});
