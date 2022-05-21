import axios from './axios'

export const getMenu = (param) => {
    return axios.request({
        url: '/permission/getMneu',
        method: 'post',
        data: param
    })
}