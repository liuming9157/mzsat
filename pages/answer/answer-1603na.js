// pages/answer/answer-1603na.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0,
    navbar: ['阅读', '文法', '数学1', '数学2'],
    array1: [
      '题号', '答案', 1, 'A', 2, 'C', 3, 'C', 4, 'A', 5, 'C', 6, 'B', 7, 'B', 8, 'A', 9, 'C', 10, 'D', 11, 'B', 12, 'A', 13, 'C', 14, 'A', 15, 'B', 16, 'A', 17, 'B', 18, 'B', 19, 'D', 20, 'B', 21, 'A', 22, 'D', 23, 'A', 24, 'B', 25, 'C', 26, 'D', 27, 'B', 28, 'A', 29, 'D', 30, 'A', 31, 'C', 32, 'A', 33, 'A', 34, 'A', 35, 'D', 36,'D', 37, 'C', 38, 'D', 39, 'B', 40, 'C', 41, 'B', 42, 'A', 43, 'B', 44, 'C', 45, 'D', 46, 'D', 47, 'B', 48, 'A', 49, 'A', 50, 'D', 51, 'C', 52, 'B'],
    array2: [
      '题号', '答案', 1, 'D', 2, 'B', 3, 'A', 4, 'B', 5, 'D', 6, 'D', 7, 'B', 8,'B', 9, 'D', 10, 'D', 11, 'D', 12, 'C', 13, 'A', 14, 'A', 15, 'C', 16, 'A', 17, 'B', 18, 'D', 19, 'D', 20, 'C', 21, 'D', 22, 'A', 23, 'D', 24, 'B', 25, 'C', 26, 'D', 27, 'C', 28, 'C', 29, 'A', 30, 'A', 31, 'B', 32, 'A', 33, 'B', 34, 'C', 35, 'A', 36, 'D', 37, 'C', 38, 'B', 39, 'D', 40, 'C', 41, 'B', 42, 'C', 43, 'A', 44, 'C'],
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
      title: '1603北美答案'
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