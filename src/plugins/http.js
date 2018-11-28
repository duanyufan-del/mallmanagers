
import axios from 'axios'
const MyHttpSever={};
MyHttpSever.install = function (Vue, options) {
    //设置基准地址
    axios.defaults.baseURL='http://localhost:8888/api/private/v1/'
    // 4. 添加实例方法
    Vue.prototype.$http = axios;
  }
  export default MyHttpSever