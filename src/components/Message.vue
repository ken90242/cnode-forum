<template>
  <div class="outsideWrapper">
  	<loading v-show="loaded"></loading>
  	<main>
  		<div :class="{ active: (displayTab==='reply' ? true : false) }" @click="switchTab('reply')">未讀消息</div>
  		<div :class="{ active: (displayTab==='publish' ? true : false) }" @click="switchTab('publish')">已讀消息</div>
  	</main>
  	<section v-for="msg in message.hasnot_read_messages" v-show="displayTab==='reply'">
  		<div>
  			<img :src="msg.author.avatar_url" v-on:click="seeUser(msg.author.loginname)">
  		</div>
  		<div class="unread">
	  		<p v-on:click="seeUser(msg.author.loginname)">{{msg.author.loginname}}</p>
	  		<p>{{msg.reply.content}}</p>
  		</div>
  		<div>{{msg.reply.create_at | dateStringToRead}}</div>
  	</section>
  	<section v-for="msg in message.has_read_messages" v-show="displayTab==='publish'">
  		<div>
  			<img :src="msg.author.avatar_url" style="width:50px;height:50px;" v-on:click="seeUser(msg.author.loginname)">
  		</div>
  		<div class="read" >
  			<p v-on:click="seeUser(msg.author.loginname)">{{msg.author.loginname}}</p>
  			<p>{{msg.reply.content}}</p>
  		</div>
  		<div>{{msg.reply.create_at | dateStringToRead}}</div>
  	</section>
  </div>
</template>

<script>
import store from '@/store';
import loading from './Loading/Loading.vue'

export default {
  name: 'message',
  components: { loading },
  methods: {
  	switchTab(tab){
  		this.displayTab = tab;
  	},
  	seeUser(id) {
      this.$router.push(`/user/${ id }`)
  	}
  },
  data() {
    return {
    	loaded: false,
    	displayTab : 'reply',
    	message: {},
      b: {
		    has_read_messages: [],
		    hasnot_read_messages: []
		  }
		}
  },
  beforeRouteEnter (to, from, next) {
	   if(store.token) {
	   	next();
	   } else {
	   	store.setTarget(to)
	   	next((vm) => {
	   		vm.$notifi({
				  title: '請先登入',
				 	// message: `於${ new Date().toLocaleString() }登錄.`
				 });
	   		vm.$router.push('/login')
	   	});
	   	return;
	   }
  },
  created() {
      const url = `https://cnodejs.org/api/v1/messages?accesstoken=${store.token}`
      this.loaded = true;
      fetch(url)
      .then(v => v.json())
      .then(({ data }) => {
        this.message = data;
        this.loaded = false;
      })
      .catch(err => {
        console.error(err);
      })
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
}

section {
	display: flex;
	padding: 10px;
	border-bottom-style: solid;
	border-bottom-width: .5px;
	border-bottom-color: #eee;
	&:last-of-type {
		margin-bottom: 10px;
		border-bottom-width: 0;
	}
	div {
		display: flex;
		&:nth-of-type(1) {
			align-items: center;
			margin-right: 10px;
			img {
				width: 50px;
				height: 50px;
				border-radius: 50%;
			}
		}
		&:nth-of-type(2) {
			flex-grow: 1;
			flex-direction: column;
			justify-content: space-between;			
			overflow: hidden;
			p {
				text-align: left;
				margin:0px;

				&:nth-of-type(1) {
					overflow: hidden;
					white-space: nowrap;
					text-overflow: ellipsis;
				}
				&:nth-of-type(2) {
					font-weight: lighter;
					overflow: hidden;
					white-space: nowrap;
					text-overflow: ellipsis;
				}
			}
		}
		&:nth-of-type(3) {
			white-space: nowrap;
			text-align: right;
			font-weight: lighter;
			color: #42b983;
			font-size: 10px;
			align-items: flex-end;
		}
	}
}
main {
	display: flex;
	justify-content:center;
	padding-top: 10px;
	padding-bottom: 10px;
	div {
		display: flex;
		flex-grow:1;
		justify-content:center;
		border-bottom-style: solid;
		border-bottom-width: 5px;
		border-bottom-color: #eee;
		padding: 10px;
    &.active {
      border-bottom-color: #ff5a5f;
	 		color: #ff5a5f;
    }
	}
}
.unread {
	font-weight: bolder;
	color: black;
}
.read {
	font-weight: lighter;
	color: gray;
}
</style>
