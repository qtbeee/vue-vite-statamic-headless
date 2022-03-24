import { createRouter, createWebHistory, Router, RouteRecordRaw, RouterOptions } from "vue-router";
import Blog from "./pages/Blog.vue";
import BlogArticle from "./pages/BlogArticle.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: 'blog',
    component: Blog,
  },
  {
    path: "/blog/:slug",
    component: BlogArticle,
    props: (route) => ({ slug: route.params["slug"] as string }),
  },
];

const routerOptions: RouterOptions = {
  history: createWebHistory(),
  routes,
  // NOTE: instructs the browser to scroll to the top of the page on an internal route
  scrollBehavior() {
    return { top: 0 };
  },
};

export default (): Router => {
  const router = createRouter(routerOptions);

  return router;
}
