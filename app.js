//app.js
App({
  onLaunch: function () {

    
this.login()
    
  },
  login:function(){
    // 登录
    wx.login({
      success: res => {
        /*将code换取openid并存入后台数据库*/
        wx.request({
          url: this.globalData.api + 'login',
          data: { code: res.code },
          success: function (res) {
            console.log(res.data)
            wx.setStorageSync('uid', res.data)

          }
        })
      }
    })
  },
  globalData: {
    userInfo: null,
    api:'https://promotion.mzsat.cn/api/index/',
    imgurl: 'https://promotion.mzsat.cn/images/',
  }
  
})