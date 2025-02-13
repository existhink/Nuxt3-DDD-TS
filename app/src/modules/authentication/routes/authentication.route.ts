// Components
import BaseWrapper from '../../../core/components/base/BaseWrapper.vue';

// Interfaces
import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/authentication',
    component: BaseWrapper,
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
