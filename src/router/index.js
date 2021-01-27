import { createRouter, createWebHashHistory } from "vue-router";
import Chat from '@/pages/Chat.vue';
import Settings from '@/pages/Settings.vue';
import Profile from '@/pages/Profile.vue';
import Credits from '@/pages/Credits.vue';

const routes = [
  {
    path: "/Chat",
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
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
