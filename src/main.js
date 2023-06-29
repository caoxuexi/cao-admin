import { createApp } from 'vue'
import i18n from '@/i18n'
import App from './App.vue'
import router from './router'
import store from './store'
import installElementPlus from './plugins/element'
// 导入全局样式
import './styles/index.scss'
// 导入 svgIcon
import installIcons from '@/icons'
// 导入路由鉴权
import './permission'
// 导入element的图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)

installElementPlus(app)
installIcons(app)
app.use(store).use(router).use(i18n).mount('#app')

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
