import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Tarefas from '../views/Tarefas.vue';


const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Tarefas',
    component: Tarefas
  },
  // {
  //   path: '',
  //   name: '',
  //   component: ,
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})

export default router;