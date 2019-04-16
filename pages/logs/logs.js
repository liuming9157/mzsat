const app = getApp();

Page({
  data: {
    url: app.globalData.imgurl,
    tel:'010-86466630',
  },
  onLoad: function() {
    var that = this;
    wx.request({
      url: app.globalData.api + 'grids',
      success(res) {
        console.log(res.data)
        that.setData({
          grids: res.data
        })
      },
      fail() {
        wx.showToast({
          title: '网络连接失败',
        })
      }
    })
    wx.request({
      url: app.globalData.api + 'grids2',
      success(res) {
        console.log(res.data)
        that.setData({
          grids2: res.data
        })
      },
      fail() {
        wx.showToast({
          title: '网络连接失败',
        })
      }
    })
  },
  phoneCall: function () {
    wx.makePhoneCall({
      phoneNumber: this.data.tel,
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  fuzhi: function (e) {
    wx.setClipboardData({
      data: e.currentTarget.dataset.item,
    })

  }
})