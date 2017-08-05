import Vue from 'vue';
let NotificationConstructor = Vue.extend(require('./Notification.vue'));
export default (opts) => {
	const instance = new NotificationConstructor({
		data: opts
	});
	instance.vm = instance.$mount();
	document.body.appendChild(instance.vm.$el)
	instance.vm.visible = true;
}