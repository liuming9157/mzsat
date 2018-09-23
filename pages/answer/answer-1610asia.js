// pages/answer/answer-1610asia.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0,
    navbar: ['阅读', '文法', '数学1', '数学2'],
    array1: [
      '题号', '答案', 1, 'C', 2, 'D', 3, 'C', 4, 'C', 5, 'D', 6, 'B', 7, 'C', 8, 'D', 9, 'B', 10, 'B', 11, 'C', 12, 'B', 13, 'C', 14, 'A', 15, 'B', 16, 'A', 17, 'B', 18, 'D', 19, 'C', 20, 'C', 21, 'B', 22, 'B', 23, 'B', 24, 'B', 25, 'A', 26, 'D', 27, 'D', 28, 'D', 29, 'D', 30, 'D', 31, 'B', 32, 'A', 33, 'A', 34, 'C', 35, 'B', 36, 'D', 37, 'A', 38, 'B', 39, 'B', 40, 'C', 41, 'A', 42, 'D', 43, 'B', 44, 'C', 45, 'C', 46, 'A', 47, 'B', 48, 'C', 49, 'C', 50, 'D', 51, 'A', 52, 'D'],
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
      title: '1610亚太答案'
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