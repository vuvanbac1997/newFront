import request from '@/utils/request'
import axios from 'axios';
import CONSTANTS from '../constants';

export function login(data) {
  return axios({
    url: `${CONSTANTS.HOST}/v1/auth/login`,
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/vue-admin-template/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/vue-admin-template/user/logout',
    method: 'post'
  })
}
