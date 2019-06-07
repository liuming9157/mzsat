// pages/feedback/feedback.js
var app = getApp();
Page({
  data: {
  
  },

 
  onLoad: function(t) {
    var that = this,
      system = wx.getStorageSync('system');
    that.setData({
      system: system
    })
    
  },

  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  formSubmit:function(e){
    console.log(e.detail.value)
    if(e.detail.value.mistake==''){
      wx.showModal({
        title: '提示',
        content: '请输入错题内容',
      })
      return false;
    }
    if (e.detail.value.name == '') {
      wx.showModal({
        title: '提示',
        content: '请输入姓名',
      })
      return false;
    }
    if (e.detail.value.mobile.length!=11) {
      wx.showModal({
        title: '提示',
        content: '请输入正确手机号',
      })
      return false;
    }
    if (e.detail.value.school == '') {
      wx.showModal({
        title: '提示',
        content: '请输入学校名称',
      })
      return false;
    }
    wx.request({
      url: app.globalData.api + 'feedback',
      data: {
        mistake: e.detail.value.mistake,
        name: e.detail.value.name,
        mobile: e.detail.value.mobile,
        school: e.detail.value.school
      },
      success: function (res) {
        wx.showModal({
          title: '提交成功',
          content: '感谢您的支持！',
          success:function(res){
            if(res.confirm){
              wx.navigateBack({
                
              })
            }
          }
        })
      },
      fail: function (res) {
        wx.showToast({
          title: '网络故障，提交失败',
        })
      }
    })
  }
})