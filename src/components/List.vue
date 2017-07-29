<template>
  <div class="outsideWrapper">
      <section class="a" v-for="article in articles" v-on:click="routeChange(article.id)">
        <div class="b">
          <div class="d" :class="article.tab | tabToClass(article.top,article.good)">{{ article.tab | tabToLabel(article.top,article.good) }}</div>
          <div class="e">
            <img :src="article.author.avatar_url"> 
          </div>
        </div>
        <div class="c">
          <div class="f"><strong>{{article.title}}</strong></div>
          <div class="g">
            <div class="h">
              <div>{{article.author.loginname}}</div>
              <div>{{article.last_reply_at | dateStringToRead}}</div>
            </div>
            <div class="i">
              <div><span>{{article.reply_count}}</span> / {{article.visit_count}}</div>
              <div>{{ article.create_at | dateStringToRead }}</div>
            </div>
            <!-- <div class="i">{{article.id}}</div> -->
          </div>
        </div>
      </section>
      
  </div>
</template>

<script>
export default {
  name: 'list',
  methods: {
    routeChange(id) {
      this.$router.push(`/topic/${ id }`)
    },
  },
  data() {
    return {
      articles: [
        {
          id: "58eee565a92d341e48cfe7fc",
          author_id: "54009f5ccd66f2eb37190485",
          tab: "share",
          title: "2017，我们来聊聊 Node.js",
          last_reply_at: "2017-07-27T02:24:50.324Z",
          good: true,
          top: true,
          reply_count: 112,
          visit_count: 40135,
          create_at: "2017-04-13T02:41:41.818Z",
          author: {
            loginname: "i5ting",
            avatar_url: "https://avatars0.githubusercontent.com/u/3118295?v=3&s=120"
          }
        },
        {
          id: "592917b59e32cc84569a7458",
          author_id: "54009f5ccd66f2eb37190485",
          tab: "share",
          title: "测试请发到客户端测试专区，违规影响用户的，直接封号",
          last_reply_at: "2017-07-25T12:10:03.245Z",
          good: false,
          top: true,
          reply_count: 70,
          visit_count: 11663,
          create_at: "2017-05-27T06:07:49.278Z",
          author: {
            loginname: "i5ting",
            avatar_url: "https://avatars0.githubusercontent.com/u/3118295?v=3&s=120"
          }
        },
        {
          id: "592917b59e32cc84569a7458",
          author_id: "54009f5ccd66f2eb37190485",
          tab: "share",
          title: "测试请发到客户端测试专区，违规影响用户的，直接封号",
          last_reply_at: "2017-07-25T12:10:03.245Z",
          good: false,
          top: true,
          reply_count: 70,
          visit_count: 11663,
          create_at: "2017-05-27T06:07:49.278Z",
          author: {
            loginname: "i5ting",
            avatar_url: "https://avatars0.githubusercontent.com/u/3118295?v=3&s=120"
          }
        },
        {
          id: "592917b59e32cc84569a7458",
          author_id: "54009f5ccd66f2eb37190485",
          tab: "share",
          title: "测试请发到客户端测试专区，违规影响用户的，直接封号",
          last_reply_at: "2017-07-25T12:10:03.245Z",
          good: false,
          top: true,
          reply_count: 70,
          visit_count: 11663,
          create_at: "2017-05-27T06:07:49.278Z",
          author: {
            loginname: "i5ting",
            avatar_url: "https://avatars0.githubusercontent.com/u/3118295?v=3&s=120"
          }
        },
        {
          id: "592917b59e32cc84569a7458",
          author_id: "54009f5ccd66f2eb37190485",
          tab: "share",
          title: "测试请发到客户端测试专区，违规影响用户的，直接封号",
          last_reply_at: "2017-07-25T12:10:03.245Z",
          good: false,
          top: true,
          reply_count: 70,
          visit_count: 11663,
          create_at: "2017-05-27T06:07:49.278Z",
          author: {
            loginname: "i5ting",
            avatar_url: "https://avatars0.githubusercontent.com/u/3118295?v=3&s=120"
          }
        },
        {
          id: "592917b59e32cc84569a7458",
          author_id: "54009f5ccd66f2eb37190485",
          tab: "share",
          title: "测试请发到客户端测试专区，违规影响用户的，直接封号",
          last_reply_at: "2017-07-25T12:10:03.245Z",
          good: false,
          top: true,
          reply_count: 70,
          visit_count: 11663,
          create_at: "2017-05-27T06:07:49.278Z",
          author: {
            loginname: "i5ting",
            avatar_url: "https://avatars0.githubusercontent.com/u/3118295?v=3&s=120"
          }
        },
        {
          id: "592917b59e32cc84569a7458",
          author_id: "54009f5ccd66f2eb37190485",
          tab: "share",
          title: "测试请发到客户端测试专区，违规影响用户的，直接封号",
          last_reply_at: "2017-07-25T12:10:03.245Z",
          good: false,
          top: true,
          reply_count: 70,
          visit_count: 11663,
          create_at: "2017-05-27T06:07:49.278Z",
          author: {
            loginname: "i5ting",
            avatar_url: "https://avatars0.githubusercontent.com/u/3118295?v=3&s=120"
          }
        },
        {
          id: "592917b59e32cc84569a7458",
          author_id: "54009f5ccd66f2eb37190485",
          tab: "share",
          title: "测试请发到客户端测试专区，违规影响用户的，直接封号",
          last_reply_at: "2017-07-25T12:10:03.245Z",
          good: false,
          top: true,
          reply_count: 70,
          visit_count: 11663,
          create_at: "2017-05-27T06:07:49.278Z",
          author: {
            loginname: "i5ting",
            avatar_url: "https://avatars0.githubusercontent.com/u/3118295?v=3&s=120"
          }
        },
        {
          id: "592917b59e32cc84569a7458",
          author_id: "54009f5ccd66f2eb37190485",
          tab: "share",
          title: "测试请发到客户端测试专区，违规影响用户的，直接封号",
          last_reply_at: "2017-07-25T12:10:03.245Z",
          good: false,
          top: true,
          reply_count: 70,
          visit_count: 11663,
          create_at: "2017-05-27T06:07:49.278Z",
          author: {
            loginname: "i5ting",
            avatar_url: "https://avatars0.githubusercontent.com/u/3118295?v=3&s=120"
          }
        },
        {
          id: "592917b59e32cc84569a7458",
          author_id: "54009f5ccd66f2eb37190485",
          tab: "share",
          title: "测试请发到客户端测试专区，违规影响用户的，直接封号",
          last_reply_at: "2017-07-25T12:10:03.245Z",
          good: false,
          top: true,
          reply_count: 70,
          visit_count: 11663,
          create_at: "2017-05-27T06:07:49.278Z",
          author: {
            loginname: "i5ting",
            avatar_url: "https://avatars0.githubusercontent.com/u/3118295?v=3&s=120"
          }
        },
        {
          id: "592917b59e32cc84569a7458",
          author_id: "54009f5ccd66f2eb37190485",
          tab: "share",
          title: "测试请发到客户端测试专区，违规影响用户的，直接封号",
          last_reply_at: "2017-07-25T12:10:03.245Z",
          good: false,
          top: true,
          reply_count: 70,
          visit_count: 11663,
          create_at: "2017-05-27T06:07:49.278Z",
          author: {
            loginname: "i5ting",
            avatar_url: "https://avatars0.githubusercontent.com/u/3118295?v=3&s=120"
          }
        },
        {
          id: "592917b59e32cc84569a7458",
          author_id: "54009f5ccd66f2eb37190485",
          tab: "share",
          title: "测试请发到客户端测试专区，违规影响用户的，直接封号",
          last_reply_at: "2017-07-25T12:10:03.245Z",
          good: false,
          top: true,
          reply_count: 70,
          visit_count: 11663,
          create_at: "2017-05-27T06:07:49.278Z",
          author: {
            loginname: "i5ting",
            avatar_url: "https://avatars0.githubusercontent.com/u/3118295?v=3&s=120"
          }
        },
        {
          id: "592917b59e32cc84569a7458",
          author_id: "54009f5ccd66f2eb37190485",
          tab: "share",
          title: "测试请发到客户端测试专区，违规影响用户的，直接封号",
          last_reply_at: "2017-07-25T12:10:03.245Z",
          good: false,
          top: true,
          reply_count: 70,
          visit_count: 11663,
          create_at: "2017-05-27T06:07:49.278Z",
          author: {
            loginname: "i5ting",
            avatar_url: "https://avatars0.githubusercontent.com/u/3118295?v=3&s=120"
          }
        },
        {
          id: "58d0fb3517f61387400b7e15",
          author_id: "4f447c2f0a8abae26e01b27d",
          tab: "share",
          title: "Egg.js 1.0.0 正式发布 - 企业级 Node.js 框架",
          last_reply_at: "2017-07-21T07:56:03.794Z",
          good: false,
          top: true,
          reply_count: 172,
          visit_count: 42836,
          create_at: "2017-03-21T10:06:45.487Z",
          author: {
            loginname: "atian25",
            avatar_url: "https://avatars1.githubusercontent.com/u/227713?v=3&s=120"
          }
        },
        {
          id: "58ad76db7872ea0864fedfcc",
          author_id: "51f0f267f4963ade0e08f503",
          tab: "share",
          title: "饿了么大前端 Node.js 进阶教程",
          last_reply_at: "2017-07-20T15:20:37.989Z",
          good: true,
          top: true,
          reply_count: 187,
          visit_count: 80332,
          create_at: "2017-02-22T11:32:43.547Z",
          author: {
            loginname: "lellansin",
            avatar_url: "https://avatars6.githubusercontent.com/u/2081487?v=4&s=120"
          }
        },
        {
          id: "5979b69b518c054e4fc0c1b1",
          author_id: "5970beb60c87675e746746a1",
          title: "2017年node+mysql用什么orm框架?",
          tab: "ask", 
          last_reply_at: "2017-07-27T14:28:41.549Z",
          good: false,
          top: false,
          reply_count: 7,
          visit_count: 116,
          create_at: "2017-07-27T09:47:07.186Z",
          author: {
            loginname: "vlwq",
            avatar_url: "https://avatars3.githubusercontent.com/u/11732840?v=4&s=120"
          }
        },
        {
          id: "592917b59e32cc84569a7458",
          author_id: "54009f5ccd66f2eb37190485",
          tab: "share",
          title: "测试请发到客户端测试专区，违规影响用户的，直接封号",
          last_reply_at: "2017-07-25T12:10:03.245Z",
          good: false,
          top: true,
          reply_count: 70,
          visit_count: 11663,
          create_at: "2017-05-27T06:07:49.278Z",
          author: {
            loginname: "i5ting",
            avatar_url: "https://avatars0.githubusercontent.com/u/3118295?v=3&s=120"
          }
        },
        {
          id: "58d0fb3517f61387400b7e15",
          author_id: "4f447c2f0a8abae26e01b27d",
          tab: "share",
          title: "Egg.js 1.0.0 正式发布 - 企业级 Node.js 框架",
          last_reply_at: "2017-07-21T07:56:03.794Z",
          good: false,
          top: true,
          reply_count: 172,
          visit_count: 42836,
          create_at: "2017-03-21T10:06:45.487Z",
          author: {
            loginname: "atian25",
            avatar_url: "https://avatars1.githubusercontent.com/u/227713?v=3&s=120"
          }
        },
        {
          id: "58ad76db7872ea0864fedfcc",
          author_id: "51f0f267f4963ade0e08f503",
          tab: "share",
          title: "饿了么大前端 Node.js 进阶教程",
          last_reply_at: "2017-07-20T15:20:37.989Z",
          good: true,
          top: true,
          reply_count: 187,
          visit_count: 80332,
          create_at: "2017-02-22T11:32:43.547Z",
          author: {
            loginname: "lellansin",
            avatar_url: "https://avatars6.githubusercontent.com/u/2081487?v=4&s=120"
          }
        },
        {
          id: "5979b69b518c054e4fc0c1b1",
          author_id: "5970beb60c87675e746746a1",
          title: "2017年node+mysql用什么orm框架?",
          tab: "ask", 
          last_reply_at: "2017-07-27T14:28:41.549Z",
          good: false,
          top: false,
          reply_count: 7,
          visit_count: 116,
          create_at: "2017-07-27T09:47:07.186Z",
          author: {
            loginname: "vlwq",
            avatar_url: "https://avatars3.githubusercontent.com/u/11732840?v=4&s=120"
          }
        },
        {
          id: "592917b59e32cc84569a7458",
          author_id: "54009f5ccd66f2eb37190485",
          tab: "share",
          title: "测试请发到客户端测试专区，违规影响用户的，直接封号",
          last_reply_at: "2017-07-25T12:10:03.245Z",
          good: false,
          top: true,
          reply_count: 70,
          visit_count: 11663,
          create_at: "2017-05-27T06:07:49.278Z",
          author: {
            loginname: "i5ting",
            avatar_url: "https://avatars0.githubusercontent.com/u/3118295?v=3&s=120"
          }
        },
        {
          id: "58d0fb3517f61387400b7e15",
          author_id: "4f447c2f0a8abae26e01b27d",
          tab: "share",
          title: "Egg.js 1.0.0 正式发布 - 企业级 Node.js 框架",
          last_reply_at: "2017-07-21T07:56:03.794Z",
          good: false,
          top: true,
          reply_count: 172,
          visit_count: 42836,
          create_at: "2017-03-21T10:06:45.487Z",
          author: {
            loginname: "atian25",
            avatar_url: "https://avatars1.githubusercontent.com/u/227713?v=3&s=120"
          }
        },
        {
          id: "58ad76db7872ea0864fedfcc",
          author_id: "51f0f267f4963ade0e08f503",
          tab: "share",
          title: "饿了么大前端 Node.js 进阶教程",
          last_reply_at: "2017-07-20T15:20:37.989Z",
          good: true,
          top: true,
          reply_count: 187,
          visit_count: 80332,
          create_at: "2017-02-22T11:32:43.547Z",
          author: {
            loginname: "lellansin",
            avatar_url: "https://avatars6.githubusercontent.com/u/2081487?v=4&s=120"
          }
        },
        {
          id: "5979b69b518c054e4fc0c1b1",
          author_id: "5970beb60c87675e746746a1",
          title: "2017年node+mysql用什么orm框架?",
          tab: "ask", 
          last_reply_at: "2017-07-27T14:28:41.549Z",
          good: false,
          top: false,
          reply_count: 7,
          visit_count: 116,
          create_at: "2017-07-27T09:47:07.186Z",
          author: {
            loginname: "vlwq",
            avatar_url: "https://avatars3.githubusercontent.com/u/11732840?v=4&s=120"
          }
        },
        {
          id: "592917b59e32cc84569a7458",
          author_id: "54009f5ccd66f2eb37190485",
          tab: "share",
          title: "测试请发到客户端测试专区，违规影响用户的，直接封号",
          last_reply_at: "2017-07-25T12:10:03.245Z",
          good: false,
          top: true,
          reply_count: 70,
          visit_count: 11663,
          create_at: "2017-05-27T06:07:49.278Z",
          author: {
            loginname: "i5ting",
            avatar_url: "https://avatars0.githubusercontent.com/u/3118295?v=3&s=120"
          }
        },
        {
          id: "58d0fb3517f61387400b7e15",
          author_id: "4f447c2f0a8abae26e01b27d",
          tab: "share",
          title: "Egg.js 1.0.0 正式发布 - 企业级 Node.js 框架",
          last_reply_at: "2017-07-21T07:56:03.794Z",
          good: false,
          top: true,
          reply_count: 172,
          visit_count: 42836,
          create_at: "2017-03-21T10:06:45.487Z",
          author: {
            loginname: "atian25",
            avatar_url: "https://avatars1.githubusercontent.com/u/227713?v=3&s=120"
          }
        },
        {
          id: "58ad76db7872ea0864fedfcc",
          author_id: "51f0f267f4963ade0e08f503",
          tab: "share",
          title: "饿了么大前端 Node.js 进阶教程",
          last_reply_at: "2017-07-20T15:20:37.989Z",
          good: true,
          top: true,
          reply_count: 187,
          visit_count: 80332,
          create_at: "2017-02-22T11:32:43.547Z",
          author: {
            loginname: "lellansin",
            avatar_url: "https://avatars6.githubusercontent.com/u/2081487?v=4&s=120"
          }
        },
        {
          id: "5979b69b518c054e4fc0c1b1",
          author_id: "5970beb60c87675e746746a1",
          title: "2017年node+mysql用什么orm框架?",
          tab: "ask", 
          last_reply_at: "2017-07-27T14:28:41.549Z",
          good: false,
          top: false,
          reply_count: 7,
          visit_count: 116,
          create_at: "2017-07-27T09:47:07.186Z",
          author: {
            loginname: "vlwq",
            avatar_url: "https://avatars3.githubusercontent.com/u/11732840?v=4&s=120"
          }
        },
        {
          id: "592917b59e32cc84569a7458",
          author_id: "54009f5ccd66f2eb37190485",
          tab: "share",
          title: "测试请发到客户端测试专区，违规影响用户的，直接封号",
          last_reply_at: "2017-07-25T12:10:03.245Z",
          good: false,
          top: true,
          reply_count: 70,
          visit_count: 11663,
          create_at: "2017-05-27T06:07:49.278Z",
          author: {
            loginname: "i5ting",
            avatar_url: "https://avatars0.githubusercontent.com/u/3118295?v=3&s=120"
          }
        },
        {
          id: "58d0fb3517f61387400b7e15",
          author_id: "4f447c2f0a8abae26e01b27d",
          tab: "share",
          title: "Egg.js 1.0.0 正式发布 - 企业级 Node.js 框架",
          last_reply_at: "2017-07-21T07:56:03.794Z",
          good: false,
          top: true,
          reply_count: 172,
          visit_count: 42836,
          create_at: "2017-03-21T10:06:45.487Z",
          author: {
            loginname: "atian25",
            avatar_url: "https://avatars1.githubusercontent.com/u/227713?v=3&s=120"
          }
        },
        {
          id: "58ad76db7872ea0864fedfcc",
          author_id: "51f0f267f4963ade0e08f503",
          tab: "share",
          title: "饿了么大前端 Node.js 进阶教程",
          last_reply_at: "2017-07-20T15:20:37.989Z",
          good: true,
          top: true,
          reply_count: 187,
          visit_count: 80332,
          create_at: "2017-02-22T11:32:43.547Z",
          author: {
            loginname: "lellansin",
            avatar_url: "https://avatars6.githubusercontent.com/u/2081487?v=4&s=120"
          }
        },
        {
          id: "5979b69b518c054e4fc0c1b1",
          author_id: "5970beb60c87675e746746a1",
          title: "2017年node+mysql用什么orm框架?",
          tab: "ask", 
          last_reply_at: "2017-07-27T14:28:41.549Z",
          good: false,
          top: false,
          reply_count: 7,
          visit_count: 116,
          create_at: "2017-07-27T09:47:07.186Z",
          author: {
            loginname: "vlwq",
            avatar_url: "https://avatars3.githubusercontent.com/u/11732840?v=4&s=120"
          }
        }
      ],
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
.outsideWrapper {
  margin: 0px;
  padding: 0px;
  margin-top: 44px;
}
section {
  border-color: #f0f0f0;
  border-bottom-width: 5px;
  border-bottom-style: solid;
  padding: 15px;
  display: flex;
  justify-content: flex-start;
  &:active {
    transition: .8s;
    background-color: rgba(0,0,0,.1);
  }
  &:hover {
    cursor: pointer;
  }
  .b {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 5px;
    .d {
      color: white;
      font-size: 14px;
      font-weight: 800;
      border-radius: 5px;
      width: 38px;
    }
    img {
      display: block;
      margin-right: 10px;
      width: 38px;
      height: 38px;
      border-radius: 50px;
    }
  }
  .c {
    display: flex;
    /* flex-wrap: nowrap; */
    flex-direction: column;
    flex-grow:1;
    margin: 2px;
    overflow: hidden;
    justify-content: space-between;
    .f {
      font-size: 18px;
      text-align: left;
      padding-top: 2px;
      padding-bottom: 10px;
      flex: 1;
      text-overflow: ellipsis;
      height: 24px;
      line-height: 24px;
      white-space: nowrap;
      overflow: hidden;
      font-weight: 600;
    }
    .g {
      display: flex;
      justify-content: space-between;
      .h {
        display: flex;
        font-size: 13px;
        text-align: left;
        flex-direction: column;
        div {
          &:nth-of-type(1) {
            font-weight: bolder;
          }
          &:nth-of-type(2) {
            font-size: 8px;
          }
        }
      }
      .i {
        display: flex;
        font-size: 13px;
        text-align: right;
        flex-direction: column;
        align-self: flex-end;
        div {
          &:nth-of-type(1) {
            font-weight: bolder;
            span {
              color: #42b983;  
            }
          }
          &:nth-of-type(2) {
            font-size: 8px;
          }
        }
      }
    }
  }
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
</style>
