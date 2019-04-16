// pages/contact/contact.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
array:['13738866091','308463095','362066974','mzsat01','mzsat02','www.mzsat.cn'],
    array1: ['http://qiniu.satapp.cn/sat/pengfei.jpg', 'http://qiniu.satapp.cn/sat/mzsat01.jpg', 'http://qiniu.satapp.cn/sat/mzsat02.jpg']
  },
  goIndex:function(){
    wx.switchTab({
      url: '../index/index',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
  fuzhi: function (e) {
    wx.setClipboardData({
      data: e.currentTarget.dataset.item,
    })
  },
  tel:function(){
    wx.makePhoneCall({
      phoneNumber: '010-86466630',
    })
  },
  preview:function(e){
    
    wx.previewImage({
      urls: this.data.array1,
      current:this.data.array1[e.currentTarget.dataset.index],
    })
  }
})