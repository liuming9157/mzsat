// pages/answer/downlink-og1.js
var app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },
  copy:function(){
    wx.setClipboardData({
      data: this.data.url
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (e) {
    var that=this;
    if(0==e.id){
      wx.setNavigationBarTitle({
        title: '全部真题打包下载链接',
      })
      that.setData({
        url:wx.getStorageSync('system').link
      })
    }
    else{
      wx.request({
        url: app.globalData.api + 'answer',
        data: {
          id: e.id
        },
        success: function (res) {
          wx.setNavigationBarTitle({
            title: res.data.data.title + '真题下载地址',
          })
          that.setData({
            url: res.data.data.link
          })
        }
      })
    }
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  return{
   title: '明志|赛达答案助手',
   path: '/pages/index/index'
  }
  }
})