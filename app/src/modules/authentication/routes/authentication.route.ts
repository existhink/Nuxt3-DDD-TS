// Components
import AppBaseWrapper from '../../../core/components/base/Wrapper.vue';

// Interfaces
import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/authentication',
    component: AppBaseWrapper,
    children: [
      {
        path: 'login',
        name: 'login',
        component: () => import('../views/AuthenticationLoginUI.vue'),
        meta: {
          requiresAuthorization: false,
          layout: 'custom',
        },
      },
    ],
  },
];

export default routes;
