import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Course1 from "../views/Course1.vue";

import firebase from "firebase";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
      children: [
        {
          path: "/course1",
          name: "Course1",
          component: Course1,
        },
      ],
      meta: {
        login: true,
      },
    },
    {
      path: "/login",
      name: "Login",
      component: Login,
    },
    {
      path: "/about",
      name: "About",
      component: () =>
        import(/* webpackChunkName: "about" */ "../views/About.vue"),
    },
  ],
});

router.beforeEach((to, from, next) => {
  let user = firebase.auth().currentUser;
  let authRequired = to.matched.some((route) => route.meta.login);
  if (!user && authRequired) {
    next("/login");
  } else {
    next();
  }
});

export default router;
