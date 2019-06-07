// pages/answer/answer-og1.js
var app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
  currentTab:0,
  navbar: ['阅读', '文法', '数学1','数学2'], 
  array:['题号','答案'],
  },
  navbarTap: function (e) {
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (e) {
    var that=this;
    wx.request({
      url: app.globalData.api+'answer',
      data:{
        id:e.id
      },
      success:function(res){
        wx.setNavigationBarTitle({
          title: res.data.title,
        })
        var reading=res.data.reading.split(',');
        var writing = res.data.writing.split(',')
        var math1 = res.data.math1.split(',')
        var math2 = res.data.math2.split(',')
        that.setData({
          reading:reading,
          writing:writing,
          math1:math1,
          math2:math2

        })
      }
    })
    
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
    return {
      title: '明志|赛达答案助手',
      path: '/pages/index/index'
    }
  },
 
  
})