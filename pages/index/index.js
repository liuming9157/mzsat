//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
   url:app.globalData.imgurl
  },
  onLoad: function () {
    var that=this;
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
    wx.request({
      url: app.globalData.api + 'system',
      success: function (res) {
        console.log(res.data)
        wx.setStorageSync('system', res.data)
        that.setData({
          system: res.data
        })
      }
    })
    wx.request({
      url: app.globalData.api+'tiku',
      success:function(res){
        that.setData({
          tiku:res.data
        })
      }
    })
    wx.request({
      url: app.globalData.api+'slide',
      success:function(res){
        that.setData({
          slide:res.data
        })
      }
    })
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  
  cancel:function(){
  this.setData({
    cancel:true
  })  
  },
  huodong:function(){
wx.navigateTo({
  url: '../hd/hd',
})
  },
  jump:function(e){
wx.navigateTo({
  url: e.currentTarget.dataset.url,
})
  },
  onShareAppMessage(){
    return {
      title: '明志|SAT有这款神器就够了',
      path: '/pages/index/index'
    }
  }
})
