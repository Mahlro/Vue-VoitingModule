import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import store from "./store/store";
// Link bootstrap for project
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";
import bootstrap from "bootstrap/dist/js/bootstrap.bundle.js";
// Link icons
import "@fortawesome/fontawesome-free/js/all";
import "./css/main.css";

const app = createApp(App);
app.use(bootstrap);

app.use(store);

app.use(router);

app.mount("#app");
