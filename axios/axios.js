import axios from 'axios';
import qs from 'qs';

switch (process.env.NODE_ENV) {
    case "prodeuction":
        aixos.defaults.baseURL = "开发环境"
        break
    case "test":
        aixos.defaults.baseURL = "生产环境"
        break
    default:
        aixos.defaults.baseURL = ""

}
/*
* 设置超时时间
* */
axios.defaults.timeout = 10000;
axios.defaults.withCredentials = true;

/*
* 设置请求传递数据的格式 (看服务器要求什么格式)
* x-www-from-urlencoded
* */
axios.defaults.headers['Content-Type'] = "application/x-www-form-urlencoded";
axios.defaults.transformRequest = data => qs.stringify(data);

/*
* 请求拦截器拦截器
* 客户端发送请求 -> [请求拦截器] -> 服务器
* token校验 (JWT) 接收到服务器返回的token ,可以存储到vuex/本地存储,每次发送请求时应该带上token,
* */

axios.interceptors.request.use((config) => {
    // 携带上TOKEN
    let token = localStorage.getItem('token');
    token && (config.headers.Authorization = token)
    return config
}, error => {
    return promise.reject(error)
});


/*
* 响应拦截器
* 服务器返回信息 -> [拦截的统一处理] -> 客户端获取到信息
* */

axios.interceptors.response.use((response) => {

    response.status == 200 ? Promise.resolve(res) : Promise.reject(res);
    return response.data

}, error => {
    let {response} = error;
    if (response) {
        // =>服务器最起码返回结果了
        switch (response.status) {
            //业务处理
            case 401: // 当前请求用户需要验证 => 权限
                toLogin();//去登陆
                break;
            case 403: // 服务器已经理解请求,但是拒绝执行 => 一般为token过期
                tip('登录过期，请重新登录');
                localStorage.removeItem('token');
                store.commit('loginSuccess', null);
                setTimeout(() => {
                    toLogin();
                }, 1000);
                break;
            case 404: // 找不到地址
                tip('请求的资源不存在');
                break;
            default:
                console.log(response.other);
        }

    } else {
        // => 服务器连结果都没返回
        if (!window.navigator.onLine) {
            // 断网处理: 可以跳转到断网页面
            return
        }
        // 返回错误信息
        return Promise.reject(error);

    }

    return promise.reject(error)
});

export default axios;
