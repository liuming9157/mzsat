// pages/answer/answer-1712asia.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0,
    navbar: ['阅读', '文法', '数学1', '数学2'],
    array1: [
      '题号', '答案', 1, 'C', 2, 'B', 3, 'C', 4, 'D', 5, 'C', 6, 'A', 7, 'B', 8, 'B', 9, 'C', 10, 'D', 11, 'C', 12, 'B', 13, 'A', 14, 'A', 15, 'B', 16, 'D', 17, 'C', 18, 'B', 19, 'A', 20, 'D', 21, 'D', 22, 'C', 23, 'B', 24, 'A', 25, 'D', 26, 'A', 27, 'C', 28, 'D', 29, 'C', 30, 'C', 31, 'D', 32, 'D', 33, 'C', 34, 'D', 35, 'C', 36, 'B', 37, 'B', 38, 'A', 39, 'A', 40, 'C', 41, 'B', 42, 'D', 43, 'B', 44, 'B', 45, 'A', 46, 'A', 47, 'B', 48, 'D', 49, 'C', 50, 'A', 51, 'B', 52, 'D'],
    array2: [
      '题号', '答案', 1, 'D', 2, 'B', 3, 'B', 4, 'C', 5, 'D', 6, 'C', 7, 'D', 8, 'D', 9, 'A', 10, 'A', 11, 'C', 12, 'B', 13, 'C', 14, 'A', 15, 'B', 16, 'C', 17, 'A', 18, 'D', 19, 'B', 20, 'A', 21, 'B', 22, 'A', 23, 'D', 24, 'D', 25, 'C', 26, 'A', 27, 'D', 28, 'A', 29, 'B', 30, 'D', 31, 'B', 32, 'B', 33, 'C', 34, 'B', 35, 'C', 36, 'B', 37, 'A', 38, 'C', 39, 'D', 40, 'C', 41, 'A', 42, 'D', 43, 'A', 44, 'C'],
    array3: [
      '题号', '答案', 1, 'C', 2, 'B', 3, 'D', 4, 'C', 5, 'B', 6, 'D', 7, 'A', 8, 'A', 9, 'C', 10, 'A', 11, 'D', 12, 'A', 13, 'C', 14, 'B', 15, 'D', 16, '0', 17, '5', 18, '8', 19, '3.33', 20, '907'],
    array4: [
      '题号', '答案', 1, 'A', 2, 'B', 3, 'C', 4, 'A', 5, 'D', 6, 'C', 7, 'C', 8, 'A', 9, 'D', 10, 'B', 11, 'C', 12, 'B', 13, 'D', 14, 'C', 15, 'A', 16, 'B', 17, 'D', 18, 'C', 19, 'D', 20, 'B', 21, 'B', 22, 'C', 23, 'A', 24, 'B', 25, 'A', 26, 'C', 27, 'A', 28, 'B', 29, 'B', 30, 'D', 31, '1056', 32, '6 or 2', 33, '32', 34, '4', 35, '1728', 36, '11', 37, '37.9', 38, '9598']
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
      title: '1712亚太答案'
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