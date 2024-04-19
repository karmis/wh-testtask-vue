import { createRouter, createWebHistory } from "vue-router";
// import HomeView from "../views/HomeView.vue";
import AdsList from "@/components/AdList.vue";
import AdList from "@/components/AdList.vue";
import AdItem from "@/components/AdItem.vue";
import AdNew from "@/components/AdNew.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "list",
      component: AdList
    },
    {
      path: "/item/:id",
      name: "item",
      component: AdItem
    },
    {
      path: "/item/new",
      name: "new",
      component: AdNew
    }
  ]
});

export default router;
