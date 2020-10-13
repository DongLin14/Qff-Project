
import axios from 'axios'

const myHttpServer = {}

myHttpServer.install =  (Vue) => {

  axios.defaults.baseURL = 'http://localhost:3000'
  //  添加实例方法
  Vue.prototype.$http = axios
}

export default myHttpServer
