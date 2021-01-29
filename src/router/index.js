import { createRouter, createWebHistory } from "vue-router";
const routes = [
  {
    path: '/',
    name: 'emptyLayout',
    meta: { layout: 'EmptyLayout' },
    component: () => import('@/layout/EmptyLayout.vue'),
    children: [
      {
        path: '/registration',
        name: 'Registration',
        meta: { layout: 'EmptyLayout' },
        component: () => import('@/pages/Registration.vue')
      },
      {
        path: '/login',
        name: 'Login',
        meta: { layout: 'EmptyLayout' },
        component: () => import('@/pages/Login.vue')
      },
    ]
  },
  {
    path: '/msb',
    name: 'mainLyout',
    meta: { layout: 'MainLayout' },
    component: () => import('@/layout/MainLayout.vue'),
    children: [
      {
        path: '/msb/chat',
        name: 'Chat',
        meta: { layout: 'MainLayout' },
        component: () => import('@/pages/Chat.vue')
      },
      {
        path: '/msb/profile',
        name: 'Profile',
        meta: { layout: 'MainLayout' },
        component: () => import('@/pages/Profile.vue')
      },
      {
        path: '/msb/credits',
        name: 'Credits',
        meta: { layout: 'MainLayout' },
        component: () => import('@/pages/Credits.vue')
      },
      {
        path: '/msb/settings',
        name: 'Settings',
        meta: { layout: 'MainLayout' },
        component: () => import('@/pages/Settings.vue')
      }
    ]
  }
  
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
