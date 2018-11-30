Page({
  data: {
    userName: ''
  },
  //获取用户输入的用户名
  userNameInput: function (e) {
    this.setData({
      userName: e.detail.value
    })
  },
  loginBtnClick: function (e) {
    console.log("用户名：" + this.data.userName);
  },
  buttonBar: function () {
    wx.navigateTo({
      url: '../index/index',
    })
  }
})