<template>
  <div class="outsideWrapper">
  	<loading v-show="loaded"></loading>
  	<div class="titleWrapper" v-show="!loaded">
	  	<p>
	  			<strong>{{ topic.title }}</strong>
	  	</p>
  	</div>

  	<main v-show="!loaded">
  		<div class="detailWrapper">
  			<img :src="topic.author.avatar_url" v-on:click="seeUser(topic.author.loginname)"/>
	  		<div class="c">
	      	<div v-on:click="seeUser(topic.author.loginname)">{{ topic.author.loginname }}</div>
	      	<div>{{ topic.create_at | dateStringToRead }}</div>
	      </div>
		    <div class="d">
			    <span class="tab" :class="topic.tab | tabToClass(topic.top,topic.good)">{{ topic.tab | tabToLabel(topic.top,topic.good) }}</span>
			    <div>{{ topic.visit_count }}<span>瀏覽人次</span></div>
			  </div>
			</div>
  	</main>
  	<div class="e">
  		<div class="markdown-body" v-html="topic.content"></div>
  	</div>
  	<div class="reply_count" v-show="!loaded">
  		<span class="f">{{ topic.reply_count }}</span><span>回覆</span>
  	</div>
  	<div class="reply_toWrapper" v-if="hasToken" v-show="!loaded">
	  	<div class="reply_to">
	  		<textarea placeholder="支援Markdown語法" v-model="reply_content" ref="reply_content"/>
	  		<input type="button" value="送出" v-on:click="reply_submit"/>
	  	</div>
	  </div>
    <section v-for="reply in topic.replies" v-show="!loaded">
      	<!-- <div>{{reply.id}}</div> -->
      <div class="upper">
	      <img :src="reply.author.avatar_url" v-on:click="seeUser(reply.author.loginname)"/>
	      <div class="upper_mid">
	      	<div v-on:click="seeUser(reply.author.loginname)">{{ reply.author.loginname }}</div>
	      	<div>{{ reply.create_at | dateStringToRead }}</div>
	      </div>
	      <div class="upper_last">
	      	<icon name="chevron-up" scale="1" class="icon" :class="{ upvoted: reply.is_uped}" @click.native="upvote(reply)"/>
	      	<span :class="{ upvoted: reply.is_uped}">{{ reply.ups.length }}</span>
	      	<icon name="reply" class="icon" scale="1" @click.native="attachId(reply.author.loginname, reply.id)"/>
	      </div>
      </div>
      <div class="middler" v-html="reply.content"></div>
    </section>
  </div>
</template>

<script>
import loading from './Loading/Loading.vue'
export default {
  name: 'topic',
  components: { loading },
  methods: {
  	upvote(replyObj) {
  		if(!this.$store.token) {
  			this.$notifi({
  				title: '請先登入'
  			})
  			return;
  		}
  		const { id } = replyObj;
  		if(replyObj.is_uped === false) {
  			this.$set(replyObj, 'is_uped', true);
  			this.$set(replyObj.ups, 'length', replyObj.ups.length + 1);
  		} else {
  			this.$set(replyObj, 'is_uped', false);
  			this.$set(replyObj.ups, 'length', replyObj.ups.length - 1);
  		}
  		fetch(`https://cnodejs.org/api/v1/reply/${ id }/ups`, {
	   		method: 'POST',
	   		headers: {
	   			'Content-Type': 'application/x-www-form-urlencoded'
	   		},
	   		body: `accesstoken=${ this.$store.token }`,
	   	})
	   	.then((res) => {
	   		res.json()
	   		.then((data) => {
	   			const { success, action } = data;
	   			if (!success) {
	   				this.$notifi({
		   				title: '錯誤',
		   				type: 'error',
		   				message: `點讚發生錯誤.`
		   			});
	   			}
		   		this.logged = false;
	   		})
	   	})
	   	.catch(console.error)

  	},
  	attachId(name, id) {
			if(this.$store.token) {
				this.reply_content = `@${ name } `;
				this.reply_id = id;
			  this.$refs.reply_content.focus()
			} else {
				this.$notifi({
					type: 'info',
			  	title: '請先登入',
			  });
			  this.$store.setTarget({ path: `/topic/${ this.topic.id }` });
				this.$router.push('/login')
			}
  	},
  	seeUser(id) {
      this.$router.push(`/user/${ id }`)
  	},
  	reply_submit() {
  		let body;
  		if(this.reply_id !== null) {
  			body = `accesstoken=${ this.$store.token }&content=${ this.reply_content }&reply_id= ${ this.reply_id }`;
  		} else {
  			body = `accesstoken=${ this.$store.token }&content=${ this.reply_content }`;
  		}
  		this.loaded = true;
  		fetch(`https://cnodejs.org/api/v1/topic/${this.topic.id}/replies`, {
	   		method: 'POST',
	   		headers: {
	   			'Content-Type': 'application/x-www-form-urlencoded'
	   		},
	   		body,
	   	})
	   	.then((res) => {
	   		res.json()
	   		.then((data) => {
		   		if(data.success) {
		   			this.fetch_topic();
		   			this.reply_content = '';
		   			this.$notifi({
		   				title: '成功發表',
		   				type: 'success',
		   			});
		   			window.scrollTo(0,document.body.scrollHeight);
		   		}
		   		else {
		   			this.$notifi({
		   				title: '錯誤',
		   				type: 'error',
		   				message: `發生錯誤：${ data.error_msg }.`
		   			});
		   		}
		   		this.logged = false;
	   		})
	   	})
	   	.catch(console.error)
  	},
  	fetch_topic() {
  		const url = `https://cnodejs.org/api/v1/topic/${this.$route.params.id}?accesstoken=${this.$store.token}`
      this.loaded = true;
      fetch(url)
      .then(v => v.json())
      .then(({ data }) => {
        this.topic = data;
        this.loaded = false;
      })
      .catch(err => {
        console.error(err);
      })
  	}
  },
  data() {
    return {
    	action: 'up',
    	loaded: false,
    	reply_content: '',
    	reply_id: null,
      topic: {
      	title: '',
      	author: {
      		avatar_url: '',
      	},
      	replies: [
      		{
      			author: {
      				avatar_url: '',
      			},
      			ups: {
      				length: 0,
      			}
      		},
      	]
      },
    }
  },
  mounted() {
  	this.fetch_topic();
  	this.$store.$emit('changePath', '文章')
  },
  watch: {
    $route() {
      this.fetch_topic();
    }
  },
  computed: {
  	hasToken() {
  		return this.$store.token;
  	}
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
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
section {
 	border:0;border-bottom:.5px;border-color: #eee;border-style: solid;
 	.upper {
 		display:flex;margin:5px;
 		img {
 			width:40px;height:40px;border-radius:10px;margin:5px;
 		}
 		.upper_mid {
 			display:flex;flex-grow:1;font-size:10px;text-align:left;align-items:center;
 			div {
 				margin-right:5px;margin-left:5px;
 				&:nth-of-type(2) {
	 				font-weight: lighter;
	 			}
 			}
	 	}
	 	.upper_last {
	 		display:flex;margin-right:10px;align-items:center;
	 		.icon, span {
	 			margin:5px;
	 		}
	 		span {
	 			margin-left: 0px;	
	 			font-size: 10px;
	 			font-weight: lighter;
	 		}
		}
 	}
 	.middler {
		text-align:left;font-size:13px;padding:0 20px 0 20px;
 	}
}
.outsideWrapper {
  margin: 0px;
  padding: 0px;
  margin-top: 44px;
  font-family:"Helvetica Neue","Luxi Sans","DejaVu Sans",Tahoma,"Hiragino Sans GB",STHeiti,sans-serif!important;
  font-size: 15px;
  font-weight: bold;
}

.titleWrapper {
	display: flex;
	justify-content: center;
	font-size: 16px;
	font-weight: bolder;
	p {
		width: 90%;
		text-align: left;
		background-color: #f0f0f0;
		padding:10px;
		border-radius: 10px;
	}	
}

.reply_count {
	border: 0px;
	border-top: .5px;
	border-bottom: .5px;
	border-color: #eee;
	border-style: solid;
	padding: 15px;
	span {
		font-weight: bolder;
		font-size: 20px;
		padding-left: 20px;
		&:first-of-type {
			color: #42b983;
		}
	}
}
.e {
	display: flex;
	justify-content: center;
	div {
		text-align: left;
		width: 90%;
	}
}
ul li {
	list-style: none;
	list-style-type: none;
}
main {
	display: flex;
	justify-content:center;
	.detailWrapper {
		display: flex;
		width: 90%;
		margin-bottom: 20px;
		img {
			width: 50px;
			height: 50px;
			border-radius: 50%;
			margin-right: 10px;
		}

		.c {
			text-align: left;
			display: flex;
			flex-grow:1;
			flex-direction: column;
			justify-content: space-between;
			div {
				&:nth-of-type(2) {
					font-weight:lighter;
				}
			}
		}
		.d {
			display: flex;
			align-items: flex-end;
			flex-direction: column;
			justify-content: space-between;
			.tab {
				font-size: 15px;
				font-weight: bold;
				padding-top: 2px;
				padding-bottom: 2px;
				padding-left: 15px;
				padding-right: 15px;
				color:white;
				border-radius: 7px;
			}
			div span {
				font-size: 12px;
				padding-left: 5px;
				font-weight: lighter;
			}
		}
	}
}
.reply_toWrapper {
	display: flex;
	justify-content: center;
	max-height: 200px;
	width: 100%;
	.reply_to {
		width: 90%;
		display: flex;
		flex-direction: column;
		input {
			font-size: 18px;
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
				font-size: 18px;
				min-height: 80px;
				margin-top: 10px;
				font-weight: light;
				font-size: 14px;
				resize: none;
				max-height: 100px; 
				text-overflow: ellipsis;
				&:focus {
					outline: none;
				}
			}
		input[type=button] {
			width: 100%;
			min-height: 30px;
			border-style: none;
			border-radius: 5px;
			background-color: #42b983;
			color: white;
			padding: 5px;
			font-weight: bolder;
			margin-top: 20px;
			margin-bottom: 20px;
		}
	}
}

.upvoted {
	color: #FF44AA;
	font-weight: bolder;
	font-size: 18px;
}

</style>
<style lang="scss">

.markdown-text {
	a {
		color: #08c;
		word-break:break-word;
		text-decoration: none;
	}
	pre {
	  font-size: 95%;
	  line-height: 140%;
		white-space: pre-wrap;
		background-color: #f7f7f7;
		code {
			font-family: Monaco, Consolas, "Andale Mono", "DejaVu Sans Mono", monospace;
	    font-size: 95%;
	    line-height: 140%;
	    white-space: pre-wrap;
	    display: block;
	    font-weight: lighter;
	    padding: .5em 1em;
	    overflow: scroll;
		}
	}
	img {
		max-width: 100%;
	}
	li {
		font-weight: inherit;
	}
	p {
		word-break:break-word;
	}
	table {
		display: table;
		max-width: 100%;
		border-collapse: separate;
	  border-spacing: 0px;
	  border-color: grey;
	  border-width: .1px;
	  border-style: solid;
		td, th {
			word-break: break-word;
			border-spacing: 0;
	  	border-width: .1px;
		  border-style: solid;
		}
	}
}

</style>
