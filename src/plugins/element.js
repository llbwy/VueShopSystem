import Vue from 'vue'
import {
    Button,
    Form,
    FormItem,
    Input,
    Message,
    Container,
    Header,
    Aside,
    Main,
    Menu,
    Submenu,
    MenuItem,
    Breadcrumb,
    BreadcrumbItem,
    Card,
    Row,
    Col,
    Table,
    TableColumn,
    Switch,
    Tooltip,
    Pagination,
    Dialog,
    MessageBox

} from 'element-ui'


Vue.use(Dialog)
Vue.use(Pagination)
Vue.use(Tooltip)
Vue.use(Switch)
Vue.use(Table)
Vue.use(Row)
Vue.use(Col)
Vue.use(Card)
Vue.use(Button)
Vue.use(FormItem)
Vue.use(Form)
Vue.use(Input)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(Breadcrumb)
Vue.use(MenuItem)
Vue.use(BreadcrumbItem)
Vue.use(TableColumn)
    //全局注册
Vue.prototype.$message = Message
    //挂载到this
Vue.prototype.$confirm = MessageBox.confirm