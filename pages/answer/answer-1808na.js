// pages/answer/answer-1710asia.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0,
    navbar: ['阅读', '文法', '数学1', '数学2'],
    array1: [
      '题号', '答案', 1, 'A', 2, 'C', 3, 'B', 4, 'D', 5, 'B', 6, 'A', 7, 'B', 8, 'D', 9, 'C', 10, 'C', 11, 'D', 12, 'A', 13, 'C', 14, 'C', 15, 'B', 16, 'A', 17, 'D', 18, 'D', 19, 'C', 20, 'B', 21, 'C', 22, 'C', 23, 'C', 24, 'B', 25, 'D', 26, 'A', 27, 'B', 28, 'D', 29, 'B', 30, 'A', 31, 'B', 32, 'D', 33, 'D', 34, 'D', 35, 'C', 36, 'D', 37, 'D', 38, 'C', 39, 'B', 40, 'D', 41, 'C', 42, 'A', 43, 'B', 44, 'D', 45, 'D', 46, 'A', 47, 'C', 48, 'C', 49, 'C', 50, 'B', 51, 'C', 52, 'A'],
    array2: [
      '题号', '答案', 1, 'D', 2, 'C', 3, 'B', 4, 'A', 5, 'C', 6, 'B', 7, 'A', 8, 'D', 9, 'D', 10, 'C', 11, 'D', 12, 'B', 13, 'B', 14, 'C', 15, 'D', 16, 'A', 17, 'D', 18, 'D', 19, 'B', 20, 'A', 21, 'D', 22, 'B', 23, 'B', 24, 'A', 25, 'C', 26, 'D', 27, 'B', 28, 'C', 29, 'A', 30, 'B', 31, 'D', 32, 'B', 33, 'B', 34, 'A', 35, 'A', 36, 'D', 37, 'C', 38, 'B', 39, 'A', 40, 'D', 41, 'D', 42, 'A', 43, 'C', 44, 'B'],
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
      title: '1808北美答案'
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