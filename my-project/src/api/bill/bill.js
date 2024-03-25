import request from '@/utils/request'

//query info of bill management
export function billManagementByPage(params) {
    return request({
        url: '/bill/getBillManagementByPage',
        method: 'post',
        // params:{page:params.pageNum,"size":params.pageSize},
        data:{page:params.pageNum,"size":params.pageSize}
    })
}