// pages/home/childCpn/w-recommend/w-recommend.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    recommends: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isLoad:false
  },
  methods: {
    handleImageLoad(){
      if (!this.data.isLoad){
        this.triggerEvent('imageLoad')
        this.data.isLoad = true
        // console.log('图片加载已完成')
      }
    }
  }
})
