<template>
  <div class="outsideWrapper">
  	<section>
  		<input type="text" placeholder="請輸入標題" v-model="title" autofocus/>
  		<textarea placeholder="支援Markdown語法" v-model="content"/>
  		<!-- <input type="button" value="送出" @click="submit"/> -->
  	</section>
  </div>
</template>

<script>
import store from '@/store'
export default {
  name: 'login',
  data() {
    return {
    	title : null,
    	content: null,
    }
  },
  mounted() {
  	this.$store.$emit('changePath', '發佈文章');
  },
   beforeRouteEnter (to, from, next) {
	   if(store.token) {
	   	next();
	   } else {
	   	store.setTarget(to)
	   	next((vm) => {
	   		vm.$notifi({
				  title: '請先登入',
				  type: 'info',
				 });
	   		vm.$router.push('/login')
	   	});
	   	// next('/login');
	   }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

.outsideWrapper {
	margin: 0px;
  padding: 0px;
  width: 100%;
  display: flex;
	justify-content:center;
	height: 100vh;
}

section {
	padding-top: 70px;
	display: flex;
	flex-direction: column;
	width: 95%;
	height: 100%vh;
	input {
		font-size: 25px;
		font-height:18px;
		font-weight: bolder;
		&:first-child {
			border-style: none none solid none;
			border-bottom-color: #42b983; 
			padding-bottom: 10px;
		}
		&:focus {
			outline: none;
		}
	}
		textarea {
			margin-top:40px;
			font-size: 18px;
			min-height: 80%;
			border-style: none;
			font-weight: light;
			resize: none;
			max-height: 100px; 
			text-overflow: ellipsis;
			&:focus {
				outline: none;
			}
		}
	// input[type=button] {
	// 	border-style: none;
	// 		border-radius: 5px;
	// 		background-color: #42b983;
	// 		color: white;
	// 		padding: 10px;
	// 		font-weight: bolder;
	// }

}
</style>
