// pages/home/home.js
import {getMultiData, getGoodsData} from '../../services/home.js'

const TOP_DISTANCE = 1000
Page({
  data:{
    banners:[],
    recommends: [],
    goods:{
      'new':{page:0, list:[]},
      'pop': { page: 0, list: [] }, 
      'sell': { page: 0, list: [] },
    },
    currentType:'pop',
    isFixed:true,
    tabScrollTop:0
  },
  onLoad: function (options) {
    // 1.请求轮播图和推荐数据
    this._getMultiData()
    // 2.请求商品数据
    this._getGoodsData('pop')
    this._getGoodsData('new')
    this._getGoodsData('sell')
  },
  //页面显示出来时回调的函数
  // 思考问题页面显示是否意味着所有的图片都加载完成
  // onShow(){
  //  setTimeout(function(){
  //    wx.createSelectorQuery().select('.tab-control').boundingClientRect(rect => {
  //      console.log(rect)
  //    }).exec()
  //  },1000)
  // },
  handleImageLoad() {
    wx.createSelectorQuery().select('.tab-control').boundingClientRect(rect => {
      this.data.tabScrollTop = rect.top
    }).exec()
  },
  onReachBottom(){
    this._getGoodsData(this.data.currentType)
  },
  onPageScroll(options){
    const flag1 = options.scrollTop >= TOP_DISTANCE
    if (flag1 != this.data.showBackTop) {
      this.setData({
        // 官方建议：不要在滚动的函数回调中频繁的调用this.setData,影响性能
        // showBackTop: options.scrollTop > TOP_DISTANCE
        showBackTop:flag1
      })
    }
    // 修改isFixed属性
    const flag2 = options.scrollTop >= this.data.tabScrollTop
    if (flag2 != this.data.isFixed){
      this.setData({
        isFixed: flag2
      })
    }
  },
  // ------------------------------网络请求函数------------------------------
  _getGoodsData(type){
    // 1.获取页码
    const page = this.data.goods[type].page + 1
    getGoodsData(type, page).then(res => {
      // 1.取出数据
      const list = res.data.data.list
      // 2.将数据设置到对应type的list中
      // 法一
      const oldList = this.data.goods[type].list
      oldList.push(...list)
      const typeKey = `goods.${type}.list`
      const typePage = `goods.${type}.page`
      this.setData({
        [typeKey]: oldList,
        [typePage]: page
      })
      // 法二（不采用，缺点：不能实时更新）
      // { // 方式一：for循环遍历每项
      //   for (let item of list) {
      //     this.data.goods[type].list.push(item)
      //   }
      //   // 方式二：es6语法...[原数组]
      //   this.data.goods[type].list.push(...list)
      // }
    })
  },
  _getMultiData(){
    getMultiData().then(res => {
      // 1-2.取出轮播图和推荐数据
      this.setData({
        banners: res.data.data.banner.list,
        recommends: res.data.data.recommend.list
      })
    })
  },
  // ------------------------------事件监听函数------------------------------
  handleTitleItemClick(e) {
    // 取出Index
    const index = e.detail.index
    switch (index){
      case 0:
        this.setData({
          currentType:'pop'
        })
        break;
      case 1:
        this.setData({
          currentType: 'new'
        })
        break;
      case 2:
        this.setData({
          currentType: 'sell'
        })
        break;
    }
  },
  
})