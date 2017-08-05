import Vue from 'vue';
import Router from 'vue-router';
import List from '../components/list';
import Topic from '../components/topic';
import User from '../components/user';
import About from '../components/about';
import Message from '../components/message';
import Login from '../components/login';
import Publish from '../components/publish';

Vue.use(Router);

const routes = [
    {
      path: '/',
      alias: '/list/all',
      name: 'main',
      component: List,
    },
    {
      path: '/list',
      name: 'list',
      component: List,
    },
    {
      path: '/topic/:id',
      name: 'topic',
      component: Topic,
    },
    {
      path: '/user/:id',
      name: 'user',
      component: User,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/message',
      name: 'message',
      component: Message,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/publish',
      name: 'publish',
      component: Publish,
    }
  ];

const router = new Router({
  mode: 'history',
  routes,
});


export default router;
