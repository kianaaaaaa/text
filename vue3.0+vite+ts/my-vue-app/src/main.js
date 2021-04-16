import {createApp} from 'vue'
import App from './App.vue'
import router from "./router";
import store from "./store";
import './style/index.scss'
import element from './plugins/element'

let app = createApp(App)

app.use(router)
app.use(store)
element(app)
app.mount("#app");
