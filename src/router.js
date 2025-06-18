import { createRouter, createWebHistory } from "vue-router";
import ProductList from "./pages/ProductList.vue";
import ProductDetail from "./pages/ProductDetail.vue";

const routes = [
  { path: "/", component: ProductList },
  { path: "/product/:id", component: ProductDetail, props: true },
];

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});
