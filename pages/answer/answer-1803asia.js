// pages/answer/answer-1803asia.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0,
    navbar: ['阅读', '文法', '数学1', '数学2'],
    array1: [
      '题号', '答案', 1, 'B', 2, 'D', 3, 'C', 4, 'A', 5, 'D', 6, 'D', 7, 'B', 8, 'B', 9, 'D', 10, 'A', 11, 'D', 12, 'C', 13, 'D', 14, 'A', 15, 'D', 16, 'B', 17, 'D', 18, 'A', 19, 'C', 20, 'A', 21, 'C', 22, 'A', 23, 'D', 24, 'B', 25, 'A', 26, 'A', 27, 'B', 28, 'C', 29, 'C', 30, 'D', 31, 'D', 32, 'D', 33, 'B', 34, 'A', 35, 'A', 36, 'C', 37, 'B', 38, 'A', 39, 'B', 40, 'C', 41, 'B', 42, 'B', 43, 'A', 44, 'A', 45, 'C', 46, 'C', 47, 'B', 48, 'C', 49, 'D', 50, 'B', 51, 'D', 52, 'D'],
    array2: [
      '题号', '答案', 1, 'D', 2, 'B', 3, 'D', 4, 'A', 5, 'C', 6, 'D', 7, 'B', 8, 'D', 9, 'C', 10, 'A', 11, 'A', 12, 'C', 13, 'B', 14, 'A', 15, 'C', 16, 'D', 17, 'C', 18, 'D', 19, 'B', 20, 'C', 21, 'A', 22, 'B', 23, 'C', 24, 'C', 25, 'B', 26, 'A', 27, 'D', 28, 'D', 29, 'B', 30, 'B', 31, 'A', 32, 'D', 33, 'A', 34, 'C', 35, 'A', 36, 'B', 37, 'B', 38, 'D', 39, 'D', 40, 'D', 41, 'C', 42, 'B', 43, 'A', 44, 'C'],
    array3: [
      '题号', '答案', 1, 'D', 2, 'B', 3, 'C', 4, 'A', 5, 'C', 6, 'A', 7, 'C', 8, 'D', 9, 'C', 10, 'B', 11, 'D', 12, 'A', 13, 'A', 14, 'D', 15, 'B', 16, '7', 17, '1350', 18, '4', 19, '0.75', 20, '56'],
    array4: [
      '题号', '答案', 1, 'D', 2, 'B', 3, 'C', 4, 'C', 5, 'B', 6, 'B', 7, 'A', 8, 'D', 9, 'B', 10, 'D', 11, 'B', 12, 'A', 13, 'C', 14, 'C', 15, 'B', 16, 'D', 17, 'B', 18, 'C', 19, 'D', 20, 'A', 21, 'D', 22, 'B', 23, 'A', 24, 'B', 25, 'C', 26, 'A', 27, 'D', 28, 'A', 29, 'D', 30, 'A', 31, '441', 32, '7500', 33, '17', 34, '8', 35, '2', 36, '8,9,10,11,12', 37, '3/20', 38, '1/4']
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
      title: '1803亚太答案'
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