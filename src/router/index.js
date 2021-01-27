import { createRouter, createWebHashHistory } from "vue-router";
import Chat from '@/pages/Chat.vue';
import Settings from '@/pages/Settings.vue';
import Profile from '@/pages/Profile.vue';

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
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
