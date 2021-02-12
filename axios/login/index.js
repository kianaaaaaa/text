import http from "../http";

export function login(params) {
    return http({
        url: '/admin/sys/menu/list',
        method: 'get',
        params
    })
}

export function login1(params) {
    return http({
        url: '/admin/sys/menu/list',
        method: 'get',
        params
    })
}


