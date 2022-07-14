import Vue from 'vue'
import { Button, Form, FormItem, Input, Message } from 'element-ui'




Vue.use(Button)
Vue.use(FormItem)
Vue.use(Form)
Vue.use(Input)
    //全局注册
Vue.prototype.$message = Message
    //挂载到this