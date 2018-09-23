// pages/answer/answer-1606asia.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0,
    navbar: ['阅读', '文法', '数学1', '数学2'],
    array1: [
      '题号', '答案', 1, 'C', 2, 'B', 3, 'C', 4, 'A', 5, 'D', 6, 'A', 7, 'B', 8, 'A', 9, 'B', 10, 'A', 11, 'C', 12, 'A', 13, 'B', 14, 'D', 15, 'C', 16, 'C', 17, 'C', 18, 'A', 19, 'B', 20, 'B', 21, 'D', 22, 'A', 23, 'A', 24, 'A', 25, 'B', 26, 'D', 27, 'C', 28, 'C', 29, 'B', 30, 'D', 31, 'D', 32, 'B', 33, 'A', 34, 'A', 35, 'B', 36, 'B', 37, 'C', 38, 'A', 39, 'D', 40, 'B', 41, 'A', 42, 'D', 43, 'C', 44, 'B', 45, 'C', 46, 'A', 47, 'D', 48, 'D', 49, 'C', 50, 'D', 51, 'A', 52, 'A'],
    array2: [
      '题号', '答案'],
    array3: [
      '题号', '答案'],
    array4: [
      '题号', '答案']
  },
  navbarTap: function (e) {
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '1606亚太答案'
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
  }
})