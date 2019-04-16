// pages/answer/answer-og1.js
var app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
  currentTab:0,
  navbar: ['阅读', '文法', '数学1','数学2'], 
  array:['题号','答案'],
  array1:[
    '题号','答案',1,'B',2,'B',3,'C',4,'A',5,'C',6,'D',7,'D',8,'B',9,'C',10,'B',11,'A',12,'B',13,'D',14,'A',15,'A',16,'C',17,'C',18,'D',19,'A',20,'B',21,'A',22,'B',23,'D',24,'D',25,'C',26,'B',27,'D',28,'C',29,'A',30,'A',31,'D',32,'B',33,'A',34,'C',35,'B',36,'D',37,'C',38,'C',39,'B',40,'C',41,'B',42,'B',43,'A',44,'A',45,'D',46,'C',47,'B',48,'A',49,'D',50,'B',51,'D',52,'A'],
  array2: [
    '题号', '答案', 1, 'D', 2, 'B', 3, 'A', 4, 'C', 5, 'C', 6, 'D', 7, 'B', 8, 'C', 9, 'A', 10, 'A', 11, 'B', 12, 'B', 13, 'A', 14, 'B', 15, 'C', 16, 'C', 17, 'C', 18, 'A', 19, 'D', 20, 'D', 21, 'B', 22, 'D', 23, 'D', 24, 'D', 25, 'B', 26, 'A', 27, 'B', 28, 'C', 29, 'B', 30, 'D', 31, 'C', 32, 'A', 33, 'A', 34, 'A', 35, 'A', 36, 'B', 37, 'D', 38, 'C', 39, 'A', 40, 'B', 41, 'B', 42, 'C', 43, 'D', 44, 'D'],
  array3: [
    '题号', '答案', 1, 'D', 2, 'A', 3, 'C', 4, 'B', 5, 'C', 6, 'A', 7, 'B', 8, 'C', 9, 'B', 10, 'A', 11, 'D', 12, 'D', 13, 'B', 14, 'A', 15, 'D', 16, '2', 17, '1600', 18, '7', 19, '4/5 or 0.8', 20, '100'],
  array4: [
    '题号', '答案', 1, 'B', 2, 'C', 3, 'D', 4, 'C', 5, 'D', 6, 'D', 7, 'C', 8, 'D', 9, 'A', 10, 'B', 11, 'A', 12, 'C', 13, 'C', 14, 'C', 15, 'A', 16, 'C', 17, 'B', 18, 'A', 19, 'B', 20, 'D', 21, 'C', 22, 'B', 23, 'B', 24, 'A', 25, 'D', 26, 'B', 27, 'C', 28, 'C', 29, 'D', 30, 'D', 31, 'between 4and6', 32, '107', 33, '5/8 or0.625', 34, '96', 35, '6', 36, '3', 37, '1.02', 38, '6.11']
  },
  navbarTap: function (e) {
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (e) {
    var that=this;
    wx.request({
      url: app.globalData.api+'answer',
      data:{
        id:e.id
      },
      success:function(res){
        wx.setNavigationBarTitle({
          title: res.data.title,
        })
        var reading=res.data.reading.split(',');
        var writing = res.data.writing.split(',')
        var math1 = res.data.math1.split(',')
        var math2 = res.data.math2.split(',')
        that.setData({
          reading:reading,
          writing:writing,
          math1:math1,
          math2:math2

        })
      }
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
  },
 
  
})