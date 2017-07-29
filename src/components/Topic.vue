<template>
  <div class="outsideWrapper">
  	<div class="titleWrapper">
	  	<p>
	  			<strong>{{ topic.title }}</strong>
	  	</p>
  	</div>

  	<main>
  		<div class="detailWrapper">
  			<img :src="topic.author.avatar_url"/>
	  		<div class="c">
	      	<div>{{ topic.author.loginname }}</div>
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
  	<div class="reply_count">
  		<span class="f">{{ topic.reply_count }}</span><span>回覆</span>
  	</div>
    <section v-for="reply in topic.replies">
      	<!-- <div>{{reply.id}}</div> -->
      <div class="upper">
	      <img :src="reply.author.avatar_url"/>
	      <div class="upper_mid">
	      	<div>{{ reply.author.loginname }}</div>
	      	<div>{{ reply.create_at | dateStringToRead }}</div>
	      </div>
	      <div class="upper_last">
	      	<i class="el-icon-arrow-up"/>
	      	<span>{{ reply.ups.length }}</span>
	      	<i class="el-icon-message"/>
	      </div>
      </div>
      <div class="middler" v-html="reply.content"></div>
      	<!-- <div>{{reply.isuped}}</div> -->
    </section>
  </div>
</template>

<script>
export default {
  name: 'list',
  data() {
    return {
      topic: {
      	id: "5433d5e4e737cbe96dcef312",
				author_id: "504c28a2e2b845157708cb61",
				tab: "share",
				content: "<div class=\"markdown-text\"><p>GitHub repo 地址：<a href=\"https://github.com/alsotang/node-lessons\">https://github.com/alsotang/node-lessons</a></p> <p>如果大家认为漏了哪些初学者应会的内容，可以在此留言，或者开个 issue 给我（!!推荐）。</p> <hr> <h1>《Node.js 包教不包会》 – by alsotang</h1> <h1>为何写作此课程</h1> <p>在 CNode(<a href=\"https://cnodejs.org/\">https://cnodejs.org/</a>) 混了那么久，解答了不少 Node.js 初学者们的问题。回头想想，那些问题所需要的思路都不难，但大部分人由于练手机会少，所以在遇到问题的时候很无措。国内唯一一本排的上号的 Node.js 书是 @朴灵(<a href=\"https://github.com/JacksonTian\">https://github.com/JacksonTian</a>) 的 《深入浅出Node.js》(<a href=\"http://book.douban.com/subject/25768396/\">http://book.douban.com/subject/25768396/</a> )，但这本书离实战还是比较远的。</p> <p>这个课程是希望提供更多的 Node.js 实战机会，通过每一节精心安排的课程目标，让 Node.js 的初学者们可以循序渐进地，有目的有挑战地开展 Node.js 的学习。</p> <p>更多 Node.js 入门资料请前往：<a href=\"https://cnodejs.org/getstart\">https://cnodejs.org/getstart</a></p> <h1>课程列表</h1> <ul> <li>Lesson 0: <a href=\"https://github.com/alsotang/node-lessons/tree/master/lesson0\">《搭建 Node.js 开发环境》</a></li> <li>Lesson 1: <a href=\"https://github.com/alsotang/node-lessons/tree/master/lesson1\">《一个最简单的 express 应用》</a></li> <li>Lesson 2: <a href=\"https://github.com/alsotang/node-lessons/tree/master/lesson2\">《学习使用外部模块》</a></li> <li>Lesson 3: <a href=\"https://github.com/alsotang/node-lessons/tree/master/lesson3\">《使用 superagent 与 cheerio 完成简单爬虫》</a></li> <li>Lesson 4: <a href=\"https://github.com/alsotang/node-lessons/tree/master/lesson4\">《使用 eventproxy 控制并发》</a></li> <li>Lesson 5: <a href=\"https://github.com/alsotang/node-lessons/tree/master/lesson5\">《使用 async 控制并发》</a></li> <li>Lesson 6: <a href=\"https://github.com/alsotang/node-lessons/tree/master/lesson6\">《测试用例：mocha，should，istanbul》</a></li> <li>Lesson 7: 《测试用例：supertest》</li> <li>Lesson 8: 《Mongodb 与 Mongoose 的使用》</li> <li>Lesson 9: 《一个简单的 blog》</li> </ul> <h1>License</h1> <p>MIT</p> </div>",
				title: "一个面向 Noasa我五我喔aaaaa我五我喔我五我喔你,s我五我喔nm,andm,asndm,ansm,dde.js 初学者的系列课程：node-lessons",
				last_reply_at: "2016-06-16T08:12:21.234Z",
				good: true,
				top: false,
				reply_count: 85,
				visit_count: 29390,
				create_at: "2014-10-07T12:00:36.270Z",
				author: {
					loginname: "alsotang",
					avatar_url: "https://avatars1.githubusercontent.com/u/1147375?v=4&s=120"
				},
				replies: [
					{
						id: "5433d866e737cbe96dcef313",
						author: {
							loginname: "leapon",
							avatar_url: "https://avatars1.githubusercontent.com/u/4295945?v=3&s=120"
						},
						content: '<div class="markdown-text"><p>我喜欢我喜欢你的写作风格我喜欢你的写作风格我喜欢你的写作风格我喜欢你的写作风格我喜欢你的写作风格我喜欢你的写作风格我喜欢你的写作风格我喜欢你的写作风格我喜欢你的写作风格我喜欢你的写作风格我喜欢你的写作风格我喜欢你的写作风格我喜欢你的写作风格我喜欢你的写作风格我喜欢你的写作风格我喜欢你的写作风格我喜欢你的写作风格我喜欢你的写作风格我喜欢你的写作风格我喜欢你的写作风格我喜欢你的写作风格我喜欢你的写作风格我喜欢你的写作风格我喜欢你的写作风格你的写作风格</p> </div>',
						ups: [
							"5404a4120256839f712590f3",
							"50f3b267df9e9fcc58452224",
							"56ce9a441739f76e1a05d3e1",
							"5697a7c169d67aff5a8353db",
							"57bfb35b100afbbc0dcc53c4",
							"5822a40fb71596cc386783e8",
							"550959b33135610a365b01e2"
						],
						create_at: "2014-10-07T12:11:18.981Z",
						reply_id: null,
						is_uped: false
					},
					{
						id: "5433e51ce737cbe96dcef315",
						author: {
							loginname: "alsotang",
							avatar_url: "https://avatars1.githubusercontent.com/u/1147375?v=4&s=120"
						},
						content: '<div class="markdown-text"><p>[[[<a href="/user/leapon">@leapon</a>](/user/leapon)](/user/leapon)](/user/leapon) 原来你喜欢扯淡式风格</p> </div>',
						ups: [
							"50f5a8dadf9e9fcc58635898",
							"51ed5627f4963ade0ea60395"
						],
						create_at: "2014-10-07T13:05:32.158Z",
						reply_id: "5433d866e737cbe96dcef313",
						is_uped: false
					},
					{
						id: "5433f893e737cbe96dcef31f",
						author: {
							loginname: "Pana",
							avatar_url: "https://avatars.githubusercontent.com/u/552081?v=3&s=120"
						},
						content: '<div class="markdown-text"><p>不错呀, 楼主继续哟, 将来就是一本书了</p> </div>',
						ups: [ ],
						create_at: "2014-10-07T14:28:35.184Z",
						reply_id: null,
						is_uped: false
					}
				],
				is_collect: false,
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
	 		i, span {
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
</style>
