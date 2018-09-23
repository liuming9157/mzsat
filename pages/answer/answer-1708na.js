// pages/answer/answer-1708na.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0,
    navbar: ['阅读', '文法', '数学1', '数学2'],
    array1: [
      '题号', '答案', 1, 'A', 2, 'B', 3, 'C', 4, 'B', 5, 'B', 6, 'C', 7, 'C', 8, 'B', 9, 'B', 10, 'D', 11, 'C', 12, 'C', 13, 'D', 14, 'D', 15, 'A', 16, 'D', 17, 'A', 18, 'D', 19, 'B', 20, 'C', 21, 'B', 22, 'B', 23, 'D', 24, 'D', 25, 'C', 26, 'D', 27, 'A', 28, 'A', 29, 'B', 30, 'B', 31, 'B', 32, 'A', 33, 'A', 34, 'A', 35, 'A', 36, 'B', 37, 'D', 38, 'A', 39, 'B', 40, 'D', 41, 'A', 42, 'B', 43, 'B', 44, 'C', 45, 'D', 46, 'B', 47, 'A', 48, 'C', 49, 'D', 50, 'A', 51, 'D', 52, 'D'],
    array2: [
      '题号', '答案', 1, 'B', 2, 'D', 3, 'D', 4, 'C', 5, 'B', 6, 'D', 7, 'A', 8, 'B', 9, 'D', 10, 'C', 11, 'C', 12, 'A', 13, 'C', 14, 'C', 15, 'D', 16, 'A', 17, 'A', 18, 'D', 19, 'D', 20, 'C', 21, 'A', 22, 'D', 23, 'A', 24, 'D', 25, 'D', 26, 'B', 27, 'D', 28, 'C', 29, 'B', 30, 'A', 31, 'B', 32, 'B', 33, 'A', 34, 'A', 35, 'C', 36, 'C', 37, 'D', 38, 'B', 39, 'C', 40, 'C', 41, 'B', 42, 'B', 43, 'D', 44, 'A'],
    array3: [
      '题号', '答案', 1, 'C', 2, 'B', 3, 'A', 4, 'C', 5, 'B', 6, 'D', 7, 'B', 8, 'B', 9, 'D', 10, 'C', 11, 'D', 12, 'A', 13, 'B', 14, 'A', 15, 'A', 16, '8/5', 17, '5', 18, '6', 19, '7,8,9', 20, '36'],
    array4: [
      '题号', '答案', 1, 'A', 2, 'B', 3, 'D', 4, 'C', 5, 'B', 6, 'C', 7, 'D', 8, 'C', 9, 'C', 10, 'D', 11, 'C', 12, 'C', 13, 'B', 14, 'C', 15, 'B', 16, 'C', 17, 'D', 18, 'A', 19, 'A', 20, 'C', 21, 'C', 22, 'D', 23, 'B', 24, 'C', 25, 'C', 26, 'D', 27, 'C', 28, 'D', 29, 'D', 30, 'C', 31, '0.8', 32, '720', 33, '8/15', 34, '19', 35, '3/4', 36, '22', 37, '800', 38, '4']
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
      title: '1708北美答案'
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