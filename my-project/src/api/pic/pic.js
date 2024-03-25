import request from '@/utils/request'

//查询图书资产列表数据
export function picEntityByPage(params) {
    return request({
        url: '/picture/getPicEntityByPage',
        method: 'get',
        params:{page:params.pageNum,"size":params.pageSize}
    })
}
