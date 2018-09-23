// pages/answer/answer-1612asia.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0,
    navbar: ['阅读', '文法', '数学1', '数学2'],
    array1: [
      '题号', '答案', 1, 'B', 2, 'D', 3, 'A', 4, 'D', 5, 'C', 6, 'D', 7, 'C', 8, 'A', 9, 'C', 10, 'B', 11, 'B', 12, 'C', 13, 'D', 14, 'C', 15, 'A', 16, 'A', 17, 'A', 18, 'B', 19, 'D', 20, 'A', 21, 'B', 22, 'B', 23, 'A', 24, 'A', 25, 'D', 26, 'C', 27, 'A', 28, 'D', 29, 'B', 30, 'A', 31, 'C', 32, 'C', 33, 'D', 34, 'A', 35, 'B', 36, 'C', 37, 'C', 38, 'D', 39, 'B', 40, 'B', 41, 'A', 42, 'D', 43, 'D', 44, 'C', 45, 'C', 46, 'A', 47, 'D', 48, 'B', 49, 'C', 50, 'A', 51, 'D', 52, 'B'],
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
      title: '1612亚太答案'
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