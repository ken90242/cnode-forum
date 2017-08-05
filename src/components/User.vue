<template>
  <div class="outsideWrapper">
  	<loading v-show="loaded"></loading>
  	<div class="a" v-show="!loaded">
  		<img :src="user.avatar_url"/>
  		<span> {{user.loginname}} </span>
  	</div>
  	<div class="b" v-show="!loaded">
  		<div>
  			<icon class="icon" name="home"></icon>
  			<a :href="`http:\/\/www.github.com/${user.githubUsername}`">@{{user.githubUsername}}</a>
  		</div>
  		<div>
  			<p><span>積分</span> <strong>{{ user.score }}</strong></p>
  			<p><span>創建</span> <strong>{{ user.create_at|dateStringToRead }}</strong></p>
  		</div>
  	</div>
  	<main v-show="!loaded">
  		<div :class="{ active: (displayTab==='reply' ? true : false) }" @click="switchTab('reply')">最近回覆</div>
  		<div :class="{ active: (displayTab==='publish' ? true : false) }" @click="switchTab('publish')">最新發佈</div>
  	</main>
  	<section v-for="reply in user.recent_replies" v-if="displayTab==='reply'" v-on:click="seeTopic(reply.id)">
  		<div>
  			<img :src="reply.author.avatar_url">
  		</div>
  		<div>
	  		<p>{{reply.title}}</p>
	  		<p>{{reply.author.loginname}}</p>
  		</div>
  		<div>{{reply.last_reply_at | dateStringToRead}}</div>
  	</section>
  	<section v-for="topic in user.recent_topics" v-else v-on:click="seeTopic(topic.id)">
  		<div>
  			<img :src="topic.author.avatar_url" style="width:50px;height:50px;">
  		</div>
  		<div>
  			<p>{{topic.title}}</p>
  			<p>{{topic.author.loginname}}</p>
  		</div>
  		<div>{{topic.last_reply_at | dateStringToRead}}</div>
  	</section>
  </div>
</template>

<script>
import loading from './Loading/Loading.vue'
export default {
  name: 'user',
  components: { loading },
  methods: {
  	switchTab(tab){
  		this.displayTab = tab;
  	},
  	seeTopic(id) {
      if(this.routed) return false;
      this.routed = true;
      this.$router.push(`/topic/${ id }`)
    },
  },
  data() {
    return {
    	loaded: false,
    	routed: false,
    	displayTab : 'reply',
      user: {
      	avatar_url: '',
				recent_topics: [
					{
						author: {
							loginname: '',
							avatar_url: ''
						},
					}
				],
				recent_replies: [
					{
						author: {
							loginname: '',
							avatar_url: ''
						},
					}
				]
			}
    }
  },
  mounted() {
      const url = `https://cnodejs.org/api/v1/user/${this.$route.params.id}`
      this.loaded = true;
      fetch(url)
      .then(v => v.json())
      .then(({ data }) => {
        this.user = data;
        this.loaded = false;
      })
      .catch(err => {
        console.error(err);
      })
  },
  watch: {
    $route() {
      const url = `https://cnodejs.org/api/v1/user/${this.$route.params.id}&limit=5&page=1`
      fetch(url)
      .then(v => v.json())
      .then(({ data }) => {
        this.user = data;
      })
      .catch(err => {
        console.error(err);
      })
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.icon {
	margin-right: 5px;
}
.tab_top {
  background-color: #e74c3c;
}
.tab_good {
  background-color: #e67e22;
}
.tab_share {
  background-color: #1abc9c;
}
.tab_ask {
  background-color: #3498db;
}
.tab_job {
  background-color: #9b59b6;
}
.outsideWrapper {
	margin: 0px;
  padding: 0px;
  width: 100%;
  margin-top: 44px;
}
.a {
	display: flex;
	flex-direction: column;
	align-items: center;
	padding:10px;
	background-color: rgba(0,0,0,.3);
	color: white;
	font-size: 20px;
	font-weight: bolder;
	img {
		width: 200px;
		height: 200px;
		border-radius: 50%;
		margin-bottom: 10px;
	}
}
.b {
	display: flex;
	justify-content: space-between;
	div {
		display: flex;
		margin:10px 20px 5px 20px;
		&:nth-of-type(1) {
			align-items: center;
			i {
				margin-right: 5px;
			}
			a {
				color: #42b983;	
				
			}
		}
		&:nth-of-type(2) {
			flex-direction: column;
			justify-content: flex-end;
			text-align: right;
			p {
				&:first-of-type {
					strong {
						color: #42b983;
					}
				}
				margin: 0px;
				span {
					font-size: 10px;
				}
			}
		}
	}
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
					font-weight: bolder;
					overflow: hidden;
					white-space: nowrap;
					text-overflow: ellipsis;
				}
				&:nth-of-type(2) {
					font-weight: lighter;
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

</style>
