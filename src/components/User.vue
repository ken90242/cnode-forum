<template>
  <div class="outsideWrapper">
  	<div class="a">
  		<img :src="user.avatar_url"/>
  		<span> {{user.loginname}} </span>
  	</div>
  	<div class="b">
  		<div>
  			<i class="el-icon-message"/>
  			<span>@</span>
  			<a :href="`http:\/\/www.github.com/${user.githubUsername}`">{{user.githubUsername}}</a>
  		</div>
  		<div>
  			<p><span>積分</span> <strong>{{ user.score }}</strong></p>
  			<p><span>創建</span> <strong>{{ user.create_at|dateStringToRead }}</strong></p>
  		</div>
  	</div>
  	<main>
  		<div class="read" :class="{ active: (displayTab==='reply' ? true : false) }" @click="switchTab('reply')">最近回覆</div>
  		<div class="unread" :class="{ active: (displayTab==='publish' ? true : false) }" @click="switchTab('publish')">最新發佈</div>
  	</main>
  	<section v-for="reply in user.recent_replies" v-if="displayTab==='reply'">
  		<div>
  			<img :src="reply.author.avatar_url">
  		</div>
  		<div>
	  		<p>{{reply.title}}</p>
	  		<p>{{reply.author.loginname}}</p>
  		</div>
  		<div>{{reply.last_reply_at | dateStringToRead}}</div>
  	</section>
  	<section v-for="topic in user.recent_topics" v-else>
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
export default {
  name: 'user',
  methods: {
  	switchTab(tab){
  		this.displayTab = tab;
  	}
  },
  data() {
    return {
    	displayTab : 'reply',
      user: {
      	loginname: "leapon",
				avatar_url: "https://avatars1.githubusercontent.com/u/4295945?v=3&s=120",
				githubUsername: "leapon",
				create_at: "2013-01-15T19:07:06.698Z",
				score: 9330,
				recent_topics: [
					{
						id: "5765b03cf3335b876d35cafb",
						author: {
							loginname: "leapon",
							avatar_url: "https://avatars1.githubusercontent.com/u/4295945?v=3&s=120"
						},
						title: "node 和 SQL Server 的连接",
						last_reply_at: "2016-06-18T20:35:43.729Z"
					},
					{
						id: "571e0bb63f27a7c841bcb5e0",
						author: {
							loginname: "leapon",
							avatar_url: "https://avatars1.githubusercontent.com/u/4295945?v=3&s=120"
						},
						title: "NodeJS 6 已经支持 96％ 的 ES6 了",
						last_reply_at: "2017-05-09T12:05:57.920Z"
					},
					{
						id: "564d201d1986c7df7e92b042",
						author: {
							loginname: "leapon",
							avatar_url: "https://avatars1.githubusercontent.com/u/4295945?v=3&s=120"
						},
						title: "Clojurescript 和 Javascript/ES6 选哪个",
						last_reply_at: "2015-11-19T14:53:04.611Z"
					},
					{
						id: "55ef4318b6a1ece43fc1fa7f",
						author: {
							loginname: "leapon",
							avatar_url: "https://avatars1.githubusercontent.com/u/4295945?v=3&s=120"
						},
						title: "万众瞩目的 4.0 出来了",
						last_reply_at: "2015-09-09T13:48:44.820Z"
					},
					{
						id: "55d523b247ad99e8787599ee",
						author: {
							loginname: "leapon",
							avatar_url: "https://avatars1.githubusercontent.com/u/4295945?v=3&s=120"
						},
						title: "Bootstrap 4 快来了",
						last_reply_at: "2015-12-30T07:06:22.519Z"
					},
					{
						id: "55bf8c56a547cfc86aac70f9",
						author: {
							loginname: "leapon",
							avatar_url: "https://avatars1.githubusercontent.com/u/4295945?v=3&s=120"
						},
						title: "cnodejs 需要防盗墓功能嘛",
						last_reply_at: "2015-08-03T16:48:11.055Z"
					},
					{
						id: "558384a601d3ce0d73d68e92",
						author: {
							loginname: "leapon",
							avatar_url: "https://avatars1.githubusercontent.com/u/4295945?v=3&s=120"
						},
						title: "有在烟台用node的公司嚒？",
						last_reply_at: "2015-06-19T02:55:34.904Z"
					},
					{
						id: "555c85a6e684c4c8088a0ced",
						author: {
							loginname: "leapon",
							avatar_url: "https://avatars1.githubusercontent.com/u/4295945?v=3&s=120"
						},
						title: "swagger API 界面",
						last_reply_at: "2015-05-20T21:40:22.397Z"
					},
					{
						id: "554bce84b68166372e600190",
						author: {
							loginname: "leapon",
							avatar_url: "https://avatars1.githubusercontent.com/u/4295945?v=3&s=120"
						},
						title: "React Native 看起来蛮容易上手的",
						last_reply_at: "2015-05-21T13:37:25.528Z"
					},
					{
						id: "553a55ca63b7692e48bbb754",
						author: {
							loginname: "leapon",
							avatar_url: "https://avatars1.githubusercontent.com/u/4295945?v=3&s=120"
						},
						title: "RethinkDB 取代 mongodb",
						last_reply_at: "2015-04-25T13:59:22.442Z"
					},
					{
						id: "546e0560c4922d383a829711",
						author: {
							loginname: "leapon",
							avatar_url: "https://avatars1.githubusercontent.com/u/4295945?v=3&s=120"
						},
						title: "我做的几个ReactJS的UI components",
						last_reply_at: "2014-11-20T15:14:40.619Z"
					},
					{
						id: "545ad6343e1f39344c5b3af8",
						author: {
							loginname: "leapon",
							avatar_url: "https://avatars1.githubusercontent.com/u/4295945?v=3&s=120"
						},
						title: "自定义的子域名用nodejs能做嘛",
						last_reply_at: "2015-04-27T00:06:57.961Z"
					},
					{
						id: "545a2fb43e1f39344c5b3aa3",
						author: {
							loginname: "leapon",
							avatar_url: "https://avatars1.githubusercontent.com/u/4295945?v=3&s=120"
						},
						title: "YC 的 Startup 公开课",
						last_reply_at: "2014-11-05T14:44:39.111Z"
					},
					{
						id: "544fc162888fcbd6172d396d",
						author: {
							loginname: "leapon",
							avatar_url: "https://avatars1.githubusercontent.com/u/4295945?v=3&s=120"
						},
						title: "有用 ReactJS 做前端的吗",
						last_reply_at: "2015-04-27T04:42:38.978Z"
					},
					{
						id: "542aa13db8ca90381f47d81a",
						author: {
							loginname: "leapon",	
							avatar_url: "https://avatars1.githubusercontent.com/u/4295945?v=3&s=120"
						},
						title: "Mozilla Brick 前端UI组件库",
						last_reply_at: "2014-10-04T12:49:08.388Z"
					}
				],
				recent_replies: [
					{
						id: "58d0fb3517f61387400b7e15",
						author: {
							loginname: "atian25",
							avatar_url: "https://avatars1.githubusercontent.com/u/227713?v=3&s=120"
						},
						title: "Egg.js 1.0.0 正式发布aaaaa - 企业级 Node.js 框架",
						last_reply_at: "2017-07-21T07:56:03.794Z"
					},
					{
						id: "58ca94579aa9bafe76762a45",
						author: {
							loginname: "imhered",
							avatar_url: "https://avatars5.githubusercontent.com/u/12947399?v=4&s=120"
						},
						title: "问一个vue调试问个vue调个vue调个vue调题",
						last_reply_at: "2017-03-17T02:16:00.193Z"
					},
					{
						id: "58824b20250bf4e2390e9e59",
						author: {
							loginname: "i5ting",
							avatar_url: "https://avatars3.githubusercontent.com/u/3118295?v=4&s=120"
						},
						title: "科普Node.js Bigpipe",
						last_reply_at: "2017-01-28T11:43:05.488Z"
					},
					{
						id: "58836823171f3bc843f600dc",
						author: {
							loginname: "zhangking520",
							avatar_url: "//gravatar.com/avatar/6a892642cadbe097e29895c32a4b1adf?size=48"
						},
						title: "vue组件 N3 支持2.0了！",
						last_reply_at: "2017-01-21T15:16:58.742Z"
					},
					{
						id: "5851ee55a670f31b6b46071e",
						author: {
							loginname: "fireswork",
							avatar_url: "https://avatars5.githubusercontent.com/u/14501987?v=4&s=120"
						},
						title: "关于react",
						last_reply_at: "2016-12-17T06:51:10.882Z"
					}
				]
			}
    }
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
			span {
				color: #42b983;	
			}
			a {
				color: black;
				
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
		&.noread {
      border-bottom-color: #eee;
      color: #eee;
    }
    &.active {
      border-bottom-color: #ff5a5f;
	 		color: #ff5a5f;
    }
	}
}
</style>
