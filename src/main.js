import { createApp } from "vue";
// import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import Pagination from "v-pagination-3";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/main.scss";

const app = createApp(App);
app.component('pagination', Pagination);
// app.use(createPinia());
app.use(router);

app.mount("#app");
