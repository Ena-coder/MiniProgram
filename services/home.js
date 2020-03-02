// services/home.js
import request from './network.js'
const baseUrl_1 = 'http://123.207.32.32:8000';
export function getMultiData(){
  return request({
    url: baseUrl_1 + '/home/multidata'
  })
}
const baseUrl_2 = 'http://106.54.54.237:8000/api/w1';
export function getGoodsData(type,page){
  return request({
    url: baseUrl_2 + '/home/data',
    data: {
      type,
      page
    }
  })
}