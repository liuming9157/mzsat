// pages/index/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  goIndex: function () {
    wx.switchTab({
      url: '../index/index',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var tel = wx.getStorageSync('system').tel;
    var chongti = wx.getStorageSync('system').chongti.split('|');
    var queti = wx.getStorageSync('system').queti.split('|');
    var qq = wx.getStorageSync('system').qq.split('|');
    that.setData({
      tel: tel,
      chongti: chongti,
      queti: queti,
      qq: qq
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

  },
  phoneCall: function () {
    wx.makePhoneCall({
      phoneNumber: this.data.tel,
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  fuzhi: function (e) {
    wx.setClipboardData({
      data: e.currentTarget.dataset.item,
    })

  }
})