import Vue from 'vue';
import VueRouter from 'vue-router';

import DefaultLayout from '../components/layouts/DefaultLayout.vue';
import Home from '../components/pages/TheHomepage.vue';
import Detail from '../components/pages/DetailPage.vue';
import History from '../components/pages/HistoryPage.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '',
    component: DefaultLayout,
    children: [
      {
        path: '/',
        name: 'homepage',
        component: Home,
      },
      {
        path: '/detail/:idx',
        name: 'detailPage',
        component: Detail,
      },
      {
        path: '/history',
        name: 'history',
        component: History,
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

export default router;
