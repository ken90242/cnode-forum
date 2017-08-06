import Vue from 'vue';

export default new Vue({
	data() {
		return {
			loginname: '',
			token: null,
			target: null,
			uid: '',
		}
	},
	methods: {
		setTarget(target) {
			this.target = target;
		},
		clearTarget() {
			this.target = null;
		},
		setToken(token) {
			this.token = token;
		},
		clearToken() {
			this.token = null;
		}
	}
})