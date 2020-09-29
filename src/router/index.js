import Vue from "vue";
import VueRouter from "vue-router";
//import Home from "../views/Home.vue";
import LoginPage from "../views/Login.vue";
import GamePage from "../views/Game.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: LoginPage
  },
  {
    path: "/game",
    name: "Game",
    component: GamePage
    
  }
];

const router = new VueRouter({
  routes
});

export default router;
