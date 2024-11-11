import { createApp } from 'vue'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import './style.css'
import App from './App.vue'

import router from './router'


import UndrawUi from 'undraw-ui'
import 'undraw-ui/dist/style.css'

import CKEditor from '@ckeditor/ckeditor5-vue'

// const app = createApp(App)
const app = createApp(App)
app.use(router)
app.use(UndrawUi)
app.use(Antd)
app.use(CKEditor)
app.mount('#app')
