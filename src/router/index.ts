import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Tarefas from '../views/Tarefas.vue';
import Projetos from '../views/Projetos.vue';
import Formulario from '../views/Projetos/Formulario.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Tarefas',
    component: Tarefas
  },
  {
    path: '/projetos',
    name: 'Projetos',
    component: Projetos,
  },
  {
    path: '/projetos/novo',
    name: 'Novo Projeto',
    component: Formulario,
  },
  {
    path: '/projetos/:id',
    name: 'Editar Projeto',
    component: Formulario,
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})

export default router;