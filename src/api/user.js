import request from '@/utils/request'
import CONSTANTS from '../constants';

export function login(data) {
  return request({
    url: `${CONSTANTS.HOST}/v1/auth/login`,
    method: 'post',
    data
  })
}

export function getInfo(userId) {
  return request({
    url: `${CONSTANTS.HOST}/v1/users/${userId}`,
    method: 'get'
  })
}

export function logout() {
  return request({
    url: '/vue-element-admin/user/logout',
    method: 'post'
  })
}
