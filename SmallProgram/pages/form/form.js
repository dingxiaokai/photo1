// pages/wxqrcode/demo1.js
const QR = require('../../utils/wxqrcode.js');

Page({
  data: {
    // qrcode
    text: 'http://www.lrxin.com',
    qrcode: ''
  },
  onLoad: function (options) {
    var that = this;
    let qrcodeSize = that.getQRCodeSize()
    that.createQRCode(that.data.text, qrcodeSize)
  },
  //适配不同屏幕大小的canvas
  getQRCodeSize: function () {
    var size = 0;
    try {
      var res = wx.getSystemInfoSync();
      var scale = res.windowWidth / 750; 
      var width = 300 * scale;
      size = width;
    } catch (e) {
      // Do something when catch error
      console.log("获取设备信息失败" + e);
      size = 150;
    }
    return size;
  },
  createQRCode: function (text, size) {
    //调用插件中的draw方法，绘制二维码图片
    let that = this
    try {
      // console.log('QRcode: ', text, size)
      let _img = QR.createQrCodeImg(text, {
        size: parseInt(size)
      })
      that.setData({
        'qrcode': _img
      })
    } catch (e) {
      console.log(e)
    }
  },
  bind_text(e) {
    let text = e.detail.value;
    this.setData({
      text: text
    });
  },
  bind_sumbit(e) {
    this.onLoad();
  },
  previewImage: function (e) {
    var current = e.target.dataset.src;
    wx.previewImage({
      current: current,
      urls: [current]
    })
    console.log(e)
  },
});