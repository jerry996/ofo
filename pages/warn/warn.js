// pages/warn/warn.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    checkboxValue : [],
    checkBoxList: [{
      checked: false,
      title: "私锁私用"
    }, 
    {
      checked: false,
      title: "车牌缺损"
      },
       {
        checked: false,
        title: "轮胎坏了"
    }, 
    {
      checked: false,
      title: "车锁坏了"
      }, 
      {
        checked: false,
        title: "违规乱停"
    }, 
    {
      checked: false,
      title: "密码不对"
      }, 
      {
        checked: false,
        title: "刹车坏了"
    }, 
    {
      checked: false,
      title: "其他故障"
    }],
    pics: [],
    actionText:"拍照/照片",
    bikeInfo: {
      number: 0,
      desc: ""
    }
  },
  
  submit:function () {
    if(this.data.checkboxValue.length && this.data.pics.length){

    }else{
      wx.showModal({
        title: '警告',
        content: '你有内容没有填写',
        confirmText:"好的我填",
        cancelText:"老子不填",
        success:(res) => {
          if(res.confirm) {

          }else{
            wx.redirectTo({
              url: '../index/index',
            })
          }
        }
      })
    }
  },
  changenumber: function (e) {
    this.setData({
      bikeInfo:{
        number : e.detail.value,
        desc:this.data.bikeInfo.desc,
      }
    })
  },
  changedesc: function (e) {
    // console.log(this.data.bikeInfo.number),
    this.setData({
      bikeInfo: {
        number: this.data.bikeInfo.number,
        desc: e.detail.value,
      }
    })
  },
  
  bindchange:function (e) {
    console.log(e.detail.value);
    this.data.checkboxValue = e.detail.value
  },
  del:function (e) {
    // console.log(e);
    var index = e.currentTarget.dataset.index;
    this.data.pics.splice(index,1)
    if(this.data.pics.length) {
      this.setData({
        pics: this.data.pics
      })
    }else{
      this.setData({
        pics: this.data.pics,
        actionText: "拍照/照片"
      })
    }
  },
  takePic:function () {
    wx.chooseImage({
      success: (res) =>{
        // console.log(res)
        var pic = this.data.pics;
        var pics = pic.concat(res.tempFilePaths)
        this.setData({
          pics: pics,
          actionText:"+"
        })
      }
    })
  },
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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