// pages/answer/answer-1710na.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0,
    navbar: ['阅读', '文法', '数学1', '数学2'],
    array1: [
      '题号', '答案', 1, 'D', 2, 'B', 3, 'B', 4, 'A', 5, 'C', 6, 'A', 7, 'C', 8, 'C', 9, 'B', 10, 'C', 11, 'D', 12, 'D', 13, 'D', 14, 'B', 15, 'B', 16, 'C', 17, 'A', 18, 'A', 19, 'C', 20, 'D', 21, 'C', 22, 'B', 23, 'D', 24, 'A', 25, 'C', 26, 'B', 27, 'A', 28, 'D', 29, 'D', 30, 'B', 31, 'B', 32, 'D', 33, 'A', 34, 'B', 35, 'B', 36, 'A', 37, 'A', 38, 'C', 39, 'D', 40, 'C', 41, 'C', 42, 'D', 43, 'C', 44, 'A', 45, 'B', 46, 'D', 47, 'C', 48, 'A', 49, 'D', 50, 'C', 51, 'C', 52, 'D'],
    array2: [
      '题号', '答案', 1, 'B', 2, 'B', 3, 'A', 4, 'C', 5, 'D', 6, 'C', 7, 'D', 8, 'A', 9, 'D', 10, 'C', 11, 'A', 12, 'C', 13, 'B', 14, 'B', 15, 'D', 16, 'A', 17, 'C', 18, 'D', 19, 'C', 20, 'C', 21, 'B', 22, 'D', 23, 'B', 24, 'B', 25, 'B', 26, 'D', 27, 'A', 28, 'D', 29, 'B', 30, 'D', 31, 'A', 32, 'D', 33, 'A', 34, 'A', 35, 'C', 36, 'D', 37, 'B', 38, 'D', 39, 'C', 40, 'C', 41, 'C', 42, 'A', 43, 'D', 44, 'C'],
    array3: [
      '题号', '答案', 1, 'B', 2, 'A', 3, 'D', 4, 'A', 5, 'C', 6, 'B', 7, 'D', 8, 'C', 9, 'B', 10, 'C', 11, 'B', 12, 'D', 13, 'A', 14, 'B', 15, 'B', 16, '360', 17, '2', 18, '8', 19, '0.75', 20, '2.5'],
    array4: [
      '题号', '答案', 1, 'B', 2, 'D', 3, 'B', 4, 'A', 5, 'D', 6, 'A', 7, 'C', 8, 'A', 9, 'D', 10, 'D', 11, 'A', 12, 'D', 13, 'C', 14, 'B', 15, 'D', 16, 'B', 17, 'C', 18, 'B', 19, 'B', 20, 'A', 21, 'D', 22, 'B', 23, 'B', 24, 'C', 25, 'C', 26, 'D', 27, 'A', 28, 'C', 29, 'A', 30, 'D', 31, '6', 32, '2', 33, '8', 34, '9', 35, '15', 36, '3/2', 37, '1.3', 38, '3']
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
      title: '1710北美答案'
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