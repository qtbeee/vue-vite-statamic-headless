import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import createRouter from "./router";
import { createPinia } from "pinia";

const app = createApp(App);

app.use(createRouter())
app.use(createPinia())
app.mount("#app");
