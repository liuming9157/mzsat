// pages/answer/answer-1606na.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0,
    navbar: ['阅读', '文法', '数学1', '数学2'],
    array1: [
      '题号', '答案', 1, 'A', 2, 'C', 3, 'B', 4, 'B', 5, 'A', 6, 'C', 7, 'D', 8, 'A', 9, 'B', 10, 'B', 11, 'A', 12, 'A', 13, 'B', 14, 'A', 15, 'B', 16, 'B', 17, 'C', 18, 'A', 19, 'B', 20, 'B', 21, 'D', 22, 'C', 23, 'A', 24, 'D', 25, 'D', 26, 'A', 27, 'B', 28, 'C', 29, 'A', 30, 'B', 31, 'D', 32, 'C', 33, 'B', 34, 'B', 35, 'A', 36, 'A', 37, 'D', 38, 'C', 39, 'B', 40, 'D', 41, 'C', 42, 'A', 43, 'A', 44, 'C', 45, 'D', 46, 'B', 47, 'A', 48, 'D', 49, 'B', 50, 'A', 51, 'D', 52, 'A'],
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
      title: '1606北美答案'
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