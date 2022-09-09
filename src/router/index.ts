import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Tarefas from '../views/Tarefas.vue';
import Projetos from '../views/Projetos.vue';
import Formulario from '../views/Projetos/Formulario.vue'
import Lista from '../views/Projetos/Lista.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Tarefas',
    component: Tarefas
  },
  {
    path: '/projetos',
    component: Projetos,
    children: [
      {
        path: '',
        name: 'Projetos',
        component: Lista
      },
      {
        path: '/novo',
        name: 'Novo Projeto',
        component: Formulario,
      },
      {
        path: '/:id',
        name: 'Editar Projeto',
        component: Formulario,
        props: true
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})

export default router;