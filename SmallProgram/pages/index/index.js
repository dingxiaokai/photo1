//index.js  
//获取应用实例  
var app = getApp()
Page({
  data: {
    pages:"",
    currentPage:'',
    url:"",
    options:"",
    movies: [
      { url: '../../img/home/1.jpg' },
      { url: '../../img/home/2.jpg' },
      { url: '../../img/home/3.jpg' },
      { url: 'http://img02.tooopen.com/images/20141231/sy_78327074576.jpg' }
    ],
    imgs:[
      { url: '../../img/home/1.jpg', text:"开发者可以将页面内的功能模块抽象成自定义组件，以便在不同的页面中重复使用；也可以将复杂的页面拆分成多个低耦合的模块" },
      { url: '../../img/home/2.jpg', text: "开发者可以将页面内的功能模块抽象成自定义组件，以便在不同的页面中重复使用；也可以将复杂的页面拆分成多个低耦合的模块" },
      { url: '../../img/home/3.jpg', text: "开发者可以将页面内的功能模块抽象成自定义组件，以便在不同的页面中重复使用；也可以将复杂的页面拆分成多个低耦合的模块" }
    ]
  },
  getCurrentPageUrl:function(){
    var page = getCurrentPages() //获取加载的页面
    var currentPag = page[page.length - 1] //获取当前页面的对象
    var urll = currentPag.route //当前页面url
    var option = currentPag.options //如果要获取url中所带的参数可以查看options
    let that = this;
    that.setData({
      pages: page,
      currentPage: currentPag,
      url: urll,
      options: option,
    })
  },
  bindClick:function(e){
    this.getCurrentPageUrl()
    console.log(this.data)
  },
  newClick:function(e){
    console.log(e)
  }
})  
