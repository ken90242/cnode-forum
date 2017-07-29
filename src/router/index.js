import Vue from 'vue';
import Router from 'vue-router';
import List from '@/components/list';
import Topic from '@/components/topic';
import User from '@/components/user';

Vue.use(Router);

export default new Router({
	mode: 'history',
  routes: [
    {
      path: '/',
      name: 'main',
      component: List,

    },
    {
    	path: '/list/:tab',
      name: 'list',
      component: List,
      beforeRouteEnter(to, from, next) {
		    console.log(from);
		  }
    },
    {
      path: '/topic/:id',
      name: 'topic',
      component: Topic,
      beforeRouteEnter(to, from, next) {
        console.log(from);
      }
    },
    {
      path: '/user/:id',
      name: 'user',
      component: User,
      beforeRouteEnter(to, from, next) {
        console.log(from);
      }
    }
  ],
});
