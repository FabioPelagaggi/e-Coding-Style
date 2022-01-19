import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import NotFound from "../components/NotFound.vue";
import Women from "../components/Women/Women.vue";
import Men from "../components/Men/Men.vue";
import Pet from "../components/Pet/Pet.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Women",
    name: "Women",
    component: Women,
  },
  {
    path: "/Men",
    name: "Men",
    component: Men,
  },
  {
    path: "/Pet",
    name: "Pet",
    component: Pet,
  },
  {
    path: "/Login",
    name: "Login",
    component: () => import('../components/AccountPages/Login.vue'),
  },
  {
    path: "/Register",
    name: "Register",
    component: () => import('../components/AccountPages/Register.vue'),
  },
  {
    path: "/Account",
    name: "Account",
    component: () => import('../components/AccountPages/Account.vue'),
  },
  {
    path: "/Checkout",
    name: "Checkout",
    component: () => import('../components/Checkout.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: "NotFound",
    component: NotFound 
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;