// components/w-tabbar/w-tabbar.js
Component({
  properties: {
    titles: {
      type:Array,
      value:[]
    }
  },
  data: {
    currentIndex:0
  },
  methods: {
    titleItemClick(e){
      var title = e.currentTarget.dataset.title
      var index = e.currentTarget.dataset.index
      this.triggerEvent('handleTitleItemClick', {title, index})
      // 如果只传入index属性，但是有需要传出title，该怎么做呢？
      // this.triggerEvent('handleTitleItemClick', { title:this.properties.titles[index],index })
      this.setData({
        currentIndex: index
      })
    }
  }
})
