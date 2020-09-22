import bgLogin from './bgLogin'
import loginForm from './loginForm'
import homeHeader from './homeHeader'
import homePanel from './homePanel'
import homeNumber from './homeNumber'
import homePanelTitle from './homePanelTitle'
import homePush from './homePush'
import homeBar from './homeBar'
import monitorHeader from './monitorHeader'
import monitorPanel from './monitorPanel'
import monitorSeamless from './monitorSeamless'
import monitorBar from './monitorBar'
import monitorDialog from './monitorDialog'
import monitorTable from './monitorTable'
import historySearch from './historySearch'
import historyBody from './historyBody'
import historyTable from './historyTable'
const components = {
  bgLogin,
  loginForm,
  homeHeader,
  homePanel,
  homeNumber,
  homePanelTitle,
  homePush,
  homeBar,
  monitorHeader,
  monitorPanel,
  monitorSeamless,
  monitorBar,
  monitorDialog,
  monitorTable,
  historySearch,
  historyBody,
  historyTable
}

// 组件安装
function myComponent (Vue) {
  // 组件是否已安装
  if (myComponent.installed) {
    return
  }
  Object.keys(components).forEach(component => {
    Vue.component(components[component].name, components[component])
  })
}
// 导出组件
export default myComponent
