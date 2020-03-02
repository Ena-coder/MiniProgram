// services/network.js
export default function(options){
  return new Promise((resolve,reject) => {
    wx.request({
      url: options.url,
      method: options.method || 'GET',
      data: options.data || {},
      dataType: 'json',
      responseType: 'text',
      success: resolve,
      fail: reject
    })
  })
}