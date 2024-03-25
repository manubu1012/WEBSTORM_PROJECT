import request from '@/utils/request'

//查询图书资产列表数据
export function getUserInfo() {
    return request({
        url: '/User/getUserInfo',
        method: 'get',
    })
}
