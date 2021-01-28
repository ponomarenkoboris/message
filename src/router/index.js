import { createRouter, createWebHashHistory } from "vue-router";
import Chat from '@/pages/Chat.vue';
import Settings from '@/pages/Settings.vue';
import Profile from '@/pages/Profile.vue';
import Credits from '@/pages/Credits.vue';
import Login from '@/pages/Login.vue';
import Registration from '@/pages/Registration.vue';

const routes = [
  {
    path: "/",
    name: "Chat",
    meta: { layout: 'MainLayout' },
    component: Chat
  },
  {
    path: "/Profile",
    name: 'Profile',
    meta: { layout: 'MainLayout' },
    component: Profile
  },
  {
    path: '/Settings',
    name: 'Settings',
    meta: { layout: 'MainLayout' },
    component: Settings
  },
  {
    path: '/Credits',
    name: 'Credits',
    meta: { layout: 'MainLayout' },
    component: Credits
  },
  {
    path: '/Login',
    name: 'Login',
    meta: { layout: 'MainLayout' },
    component: Login
  },
  {
    path: '/Registration',
    name: 'Registration',
    meta: { layout: 'EmptyLayout' },
    component: Registration

  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
