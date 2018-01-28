Page({
  data:{
    longitude : "126.5358",
    latitude : "45.80216"
  },
  bindcontrol:function (e) {
    // console.log(e);
    switch(e.controlId) {
      case 1 :
        this.moveTocenter();
        break;
      case 2 :
      if(this.flag) {
        wx.navigateBack({
          delta:1
        })
      }else{
        wx.scanCode({
          success: () => {
            wx.showLoading({
              title: '正在获取密码',
            })
            wx.request({
              url: "https://www.easy-mock.com/mock/5a69c84706d25f530541f299/password#!method=get",
              success: (res) => {
                // console.log(res);
                wx.redirectTo({
                  url: `../scanCode/scanCode?pass=${res.data.data.password}&num=${res.data.data.number}`,
                })
              },

            })
          }
        })
      }
      break;
      case 3 :
        wx.redirectTo({
          url: '../warn/warn',
        })
        break;
      case 4 :
        wx.redirectTo({
          url: '../my/my',
        })
       
    }
  },
  onLoad: function (options) {
    this.flag = options.flag;
    console.log(options)
    wx.getLocation({
      success: (res) => {//箭头函数借助父级this指向
        this.setData({
          longitude: res.longitude,
          latitude:res.latitude,
        })
      },
    })
    wx.getSystemInfo({
      success:(res) => {
        this.setData({
          controls: [{
            id: 1,
            position: {
              width: 50,
              height: 50,
              top: res.windowHeight - 100,
              left: 20,
            },
            iconPath: "/images/location.png",
            clickable: true,
          },
          {
            id: 2,
            position: {
              width: 90,
              height: 90,
              top: res.windowHeight - 140,
              left: res.windowWidth/2 - 45,
            },
            iconPath: "/images/use.png",
            clickable: true,
          },
          {
            id: 3,
            position: {
              width: 50,
              height: 50,
              top: res.windowHeight - 100,
              left: res.windowWidth - 70,
            },
            iconPath: "/images/warn.png",
            clickable: true,
          },
          {
            id: 4,
            position: {
              width: 50,
              height: 50,
              top: res.windowHeight - 170,
              left: res.windowWidth - 70,
            },
            iconPath: "/images/avatar.png",
            clickable: true,
          },
          {
            id: 5,
            position: {
              width: 40,
              height: 60,
              top: res.windowHeight/2 - 60,
              left: res.windowWidth / 2 - 20,
            },
            iconPath: "/images/marker.png",
          }]
         
        })
      }
    })
  },
  onReady: function () {
    console.log("onready");
    this.moveTocenter();
  },
  onShow: function () {
    // console.log("onshow")
    this.mapContext = wx.createMapContext("mapId", this)
  }, 
  moveTocenter: function () {
    // console.log(111)
    this.mapContext.moveToLocation()
  },
  onUnLoad: function () {
    console.log("onunload")
  },
  
  onHead: function () {
  },
  
})