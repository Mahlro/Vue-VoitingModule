import { createRouter, createWebHistory } from "vue-router";
import Voting from "../views/Voting/Voting.vue";
import Home from "../views/Home/Home.vue";

const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      props: true,
    },
    {
      path: "/voting",
      name: "voting",
      component: Voting,
      props: true,
    },
  ],
});

export default router;
