//app.js
//引入基于小程序的wxmock
var Mock = require("./WxMock.js");
//基于ajax请求地址的模拟数据
//格式： Mock.mock('请求地址',数据模板)
var users = Mock.mock('https://xxx.com/users', {
  "code": 200,
  "data|1-20": [
    {
      "name": function () {
        return Mock.Random.cname()
      },
      "lastLogin": function () {
        return Mock.Random.datetime()
      }
    }
  ]
})
var users = Mock.mock('https://xxx.com/users', {
  "code": 200,
  "data|1-20": [
    {
      "name": function () {
        return Mock.Random.cname()
      },
      "lastLogin": function () {
        return Mock.Random.datetime()
      }
    }
  ]
})
export default users