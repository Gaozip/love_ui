/**
 * 引入fetch、baseUrl
 * @param params
 * @returns {*}
 */
import {fetch, baseUrl} from '@/api/index'
// 登录接口
export function loginUserNo(params) {
  return fetch(`${baseUrl}/root/user/1`, params)
}
