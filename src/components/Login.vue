<template>
  <div class="outsideWrapper">
  	<loading v-show="logged"></loading>
  	<section>
  		<input type="text" placeholder="Access Token" v-model="accessToken"/>
  		<input type="button" value="登錄" @click="verifyToken"/>
  	</section>
  </div>
</template>

<script>
import loading from './Loading/Loading.vue'
export default {
  name: 'login',
  components: { loading },
  data() {
    return {
    	accessToken : '2c43262f-ac31-4e49-addf-e46b60b9c1e5',
    	logged: false
    }
  },
  methods: {
  	verifyToken() {
  		this.logged = true;
  		fetch('https://cnodejs.org/api/v1/accesstoken', {
	   		method: 'POST',
	   		headers: {
	   			'Content-Type': 'application/x-www-form-urlencoded'
	   		},
	   		body: `accesstoken=${ this.accessToken }`,
	   	})
	   	.then((res) => {
	   		res.json()
	   		.then((data) => {
		   		if(data.success) {
		   			this.$store.loginname = data.loginname;
		   			this.$store.uid = data.id;
		   			this.$store.setToken(this.accessToken);
		   			if(this.$store.target) {
		   				const path = this.$store.target.path
		   				this.$router.push(path);
		   			} else {
		   				this.$router.push('/list?tab=all');
		   			}
		   			this.$notifi({
		   				title: '登入成功',
		   				type: 'success'
		   			});
		   			this.$store.$emit('logged');
		   			
		   		}
		   		else {
		   			this.$store.clearToken()
		   			console.log(data.error_msg)
		   		}
		   		this.logged = false;
	   		})
	   	})
	   	.catch(console.error)
  	}
  },
  mounted() {
  	this.$store.$emit('changePath', '登錄');
  },
  beforeRouteLeave(to, from, next) {
		this.$store.clearTarget();
		next();
  },
  watch: {
    // $route() {
    //   const url = `https://cnodejs.org/api/v1/topics?tab=${this.$route.params.tab}&limit=5&page=1`
    //   fetch(url)
    //   .then(v => v.json())
    //   .then(({ data }) => {
    //     this.articles = data;
    //     console.log(data[0])
    //   })
    //   .catch(err => {
    //     console.error(err);
    //   })
    // }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

.outsideWrapper {
	margin: 0px;
  padding: 0px;
  width: 100%;
  margin-top: 44px;
  display: flex;
	justify-content:center;
}

section {
	padding-top: 100px;
	display: flex;
	flex-direction: column;
	width: 95%;
	input {
		margin:10px;
		font-size: 18px;
		font-height:18px;
		&:focus {
			outline: none;
		}
		&:nth-of-type(1) {
			border-style: none none solid none;
			border-bottom-color: #42b983; 
			color:gray;
		}
		&:nth-of-type(2) {
			border-style: none;
			border-radius: 5px;
			background-color: #42b983;
			color: white;
			padding: 10px;
			font-weight: bolder;
		}
	}

}
</style>
