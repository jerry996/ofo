// pages/billing/billing.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hours: 0,
    minutes: 0,
    seconds: 0,
    disabled: false,
  },
  endRide:function () {
    clearInterval(this.timer);
    this.setData({
      disabled: true
    })
    this.timer = "";
  },
  movetoindex: function () {
    if(this.timer) {
      wx.navigateTo({
        url: '../index/index?flag=true',
      })
    }else{
      wx.redirectTo({
        url: '../index/index',
      })
    }
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      number : options.num
    })
    console.log(options);
    var h = 0; 
    var m = 0; 
    var s = 0;
    this.timer = setInterval(() => {
      s++;
      this.setData({
        seconds : s 
      })
      if(s == 60) {
        s = 0;
        m++;
        this.setData({
          seconds: s,
          minutes : m
        })
        if(m == 60) {
          m = 0;
          h++;
          this.setData({
            seconds: s,
            minutes: m,
            hours: h
          })
        }
      }
    }, 1000)
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
  
  }
})