import Vue from 'vue'
import {
  Button,
  Form,
  FormItem,
  Input,
  Table,
  Menu,
  MenuItem,
  Submenu,
  Tooltip,
  Tag,
  Dialog,
  TableColumn,
  DatePicker,
  Select,
  Option,
  Message,
  MessageBox,
  Card
} from 'element-ui'

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Table)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Submenu)
Vue.use(Tooltip)
Vue.use(Tag)
Vue.use(Dialog)
Vue.use(TableColumn)
Vue.use(DatePicker)
Vue.use(Select)
Vue.use(Option)
Vue.use(Card)
Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm
