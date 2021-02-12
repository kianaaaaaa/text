import axios from 'axios';

switch (process.env.NODE_ENV) {
    case "prodeuction":
        aixos.default.baseURL = "开发环境"
        break
    case "test":
        aixos.default.baseURL = "生产环境"
        break
    default:
        aixos.default.baseURL = ""
}

axios.default.timeout = 10000;
axios.default.withCredentials = true;
