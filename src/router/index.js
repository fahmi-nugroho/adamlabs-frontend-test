import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";
import ProfileView from "../views/ProfileView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      redirect: "/login",
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
      meta: { requiresAuth: false },
    },
    {
      path: "/register",
      name: "register",
      component: RegisterView,
      meta: { requiresAuth: false },
    },
    {
      path: "/profile",
      name: "profile",
      component: ProfileView,
      meta: { requiresAuth: true },
    },
  ],
});

router.beforeEach((to, from, next) => {
  const authData = localStorage.getItem("auth");
  if (authData != null && to.meta.requiresAuth) {
    if (new Date() > new Date(authData.expiresOn)) {
      localStorage.removeItem("auth");
      next("/login");
    } else {
      next();
    }
  } else if (!to.meta.requiresAuth) {
    next();
  } else {
    next("/login");
  }
});

export default router;
