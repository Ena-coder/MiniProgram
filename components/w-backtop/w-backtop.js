// components/w-backtop/w-backtop.js
Component({
  methods: {
    handleBackTop(){
      wx:wx.pageScrollTo({
        scrollTop: 0,
        duration: 1000,
      })
    }
  }
})
