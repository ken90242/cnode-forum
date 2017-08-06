<template>
  <div class="outsideWrapper">
    <loading v-if="loaded"></loading>
      <section class="a" v-for="article in articles" v-on:click="routeChange(article.id)">
        <div class="b">
          <div class="d" :class="article.tab | tabToClass(article.top,article.good)">{{ article.tab | tabToLabel(article.top,article.good) }}</div>
          <div class="e">
            <img :src="article.author.avatar_url" v-on:click="seeUser(article.author.loginname)"> 
          </div>
        </div>
        <div class="c">
          <div class="f"><strong>{{article.title}}</strong></div>
          <div class="g">
            <div class="h">
              <div v-on:click="seeUser(article.author.loginname)">{{article.author.loginname}}</div>
              <div>{{article.last_reply_at | dateStringToRead}}</div>
            </div>
            <div class="i">
              <div><span>{{article.reply_count}}</span> / {{article.visit_count}}</div>
              <div>{{ article.create_at | dateStringToRead }}</div>
            </div>
          </div>
        </div>
      </section>
      <section class="blank">
        <transition name="down">
          <icon v-show="spinned" name="refresh" scale="2" spin></icon>
        </transition>
      </section>
      
  </div>
</template>

<script>
import loading from './Loading/Loading.vue';

export default {
  name: 'list',
  components: { loading },
  methods: {
    handleScroll(e) {
      // console.log(window.innerHeight)
      // console.log(window.scrollY)
      // console.log(document.body.scrollHeight)
      if(document.body.scrollHeight - window.scrollY === window.innerHeight
          && 
        window.scrollY !== 0) {
        this.spinned = true;
        let tab;
        if(!this.$route.query.tab) {
          tab = 'all';
        } else {
          tab = this.$route.query.tab;
        }
        const url = `https://cnodejs.org/api/v1/topics?tab=${tab}&limit=40&page=${ this.currentPage }`
        this.currentPage += 1
        fetch(url)
        .then(v => {
          return v.json();
        })
        .then(({ data }) => {
          this.spinned = false;
          this.articles = this.articles.concat(data);
        })
        .catch(err => {
          console.error(err);
        })
      }
    },
    routeChange(id) {
      if(this.routed) return false;
      this.routed = true;
      this.$router.push(`/topic/${ id }`)
    },
    seeUser(id) {
      if(this.routed) return false;
      this.routed = true;
      this.$router.push(`/user/${ id }`)
      return false;
    },
    fetch() {
      let tab;
        if(!this.$route.query.tab) {
          tab = 'all';
        } else {
          tab = this.$route.query.tab;
        }
        this.$store.$emit('changePath', tab);
        const url = `https://cnodejs.org/api/v1/topics?tab=${tab}&limit=40&page=${this.currentPage}`
        this.currentPage += 1
        this.loaded = true;
        fetch(url)
        .then(v => v.json())
        .then(({ data }) => {
          this.loaded = false;
          this.articles = data;
        })
        .catch(err => {
          console.error(err);
        })
    }
  },
  data() {
    return {
      spinned: false,
      currentPage: 1,
      loaded: false,
      routed: false,
      articles: null,
    }
  },
  created() {
    this.fetch();
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  watch: {
    $route() {
      this.fetch();
    }
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
    margin-top: 5px;
    margin-right: 5px;
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
.blank {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background-color: #f0f0f0;
  height: 100px;
}
.down-enter-active {
  animation: pop-up .3s;
}
.down-leave-active {
  animation: pop-down .5s;
}
@keyframes pop-up {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes pop-down {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}

</style>
