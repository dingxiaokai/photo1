// pages/photo/photo.js
const data = [];
const dataStr = '1、霍比特人3<br>\
<br>\
导演：彼得·杰克逊<br>\
编剧：弗兰·威尔士 / 费力怕·报恩寺 / 彼得·杰克逊 / 吉尔默·德尔·托罗 / J·R·R·托尔金<br>\
主演：马丁·福瑞曼 / 伊恩·麦克莱恩 / 理查德·阿尔第七 / 伊万杰琳·莉莉 / 李·佩斯 / 更多...<br>\
类型：动作 / 奇幻 / 冒险<br>\
制片国家/地区：美国 / 新西兰<br>\
语言：英语<br>\
上映日期：2015-01-23(中国大陆) / 2014-12-17(美国)<br>\
片长：144分钟<br>\
<br>\
<br>\
2、博物馆奇妙夜3<br>\
<br>\
导演：彼得·杰克逊<br>\
编剧：弗兰·威尔士 / 费力怕·报恩寺 / 彼得·杰克逊 / 吉尔默·德尔·托罗 / J·R·R·托尔金<br>\
主演：马丁·福瑞曼 / 伊恩·麦克莱恩 / 理查德·阿尔第七 / 伊万杰琳·莉莉 / 李·佩斯 / 更多...<br>\
类型：动作 / 奇幻 / 冒险<br>\
制片国家/地区：美国 / 新西兰<br>\
语言：英语<br>\
上映日期：2015-01-23(中国大陆) / 2014-12-17(美国)<br>\
片长：144分钟<br>\
<br>\
<br>\
3、饥饿游戏<br>\
<br>\
导演：彼得·杰克逊<br>\
编剧：弗兰·威尔士 / 费力怕·报恩寺 / 彼得·杰克逊 / 吉尔默·德尔·托罗 / J·R·R·托尔金<br>\
主演：马丁·福瑞曼 / 伊恩·麦克莱恩 / 理查德·阿尔第七 / 伊万杰琳·莉莉 / 李·佩斯 / 更多...<br>\
类型：动作 / 奇幻 / 冒险<br>\
制片国家/地区：美国 / 新西兰<br>\
语言：英语<br>\
上映日期：2015-01-23(中国大陆) / 2014-12-17(美国)<br>\
片长：144分钟<br>\
<br>\
<br>\
4、爆裂鼓手<br>\
<br>\
导演：彼得·杰克逊<br>\
编剧：弗兰·威尔士 / 费力怕·报恩寺 / 彼得·杰克逊 / 吉尔默·德尔·托罗 / J·R·R·托尔金<br>\
主演：马丁·福瑞曼 / 伊恩·麦克莱恩 / 理查德·阿尔第七 / 伊万杰琳·莉莉 / 李·佩斯 / 更多...<br>\
类型：动作 / 奇幻 / 冒险<br>\
制片国家/地区：美国 / 新西兰<br>\
语言：英语<br>\
上映日期：2015-01-23(中国大陆) / 2014-12-17(美国)<br>\
片长：144分钟<br>\
<br>\
<br>\
5、利维坦<br>\
<br>\
导演：彼得·杰克逊<br>\
编剧：弗兰·威尔士 / 费力怕·报恩寺 / 彼得·杰克逊 / 吉尔默·德尔·托罗 / J·R·R·托尔金<br>\
主演：马丁·福瑞曼 / 伊恩·麦克莱恩 / 理查德·阿尔第七 / 伊万杰琳·莉莉 / 李·佩斯 / 更多...<br>\
类型：动作 / 奇幻 / 冒险<br>\
制片国家/地区：美国 / 新西兰<br>\
语言：英语<br>\
上映日期：2015-01-23(中国大陆) / 2014-12-17(美国)<br>\
片长：144分钟<br>\
<br>\
<br>\
6、侏罗纪世界<br>\
<br>\
导演：彼得·杰克逊<br>\
编剧：弗兰·威尔士 / 费力怕·报恩寺 / 彼得·杰克逊 / 吉尔默·德尔·托罗 / J·R·R·托尔金<br>\
主演：马丁·福瑞曼 / 伊恩·麦克莱恩 / 理查德·阿尔第七 / 伊万杰琳·莉莉 / 李·佩斯 / 更多...<br>\
类型：动作 / 奇幻 / 冒险<br>\
制片国家/地区：美国 / 新西兰<br>\
语言：英语<br>\
上映日期：2015-01-23(中国大陆) / 2014-12-17(美国)<br>\
片长：144分钟<br>\
<br>\
<br>\
7、杀破狼2<br>\
<br>\
导演：彼得·杰克逊<br>\
编剧：弗兰·威尔士 / 费力怕·报恩寺 / 彼得·杰克逊 / 吉尔默·德尔·托罗 / J·R·R·托尔金<br>\
主演：马丁·福瑞曼 / 伊恩·麦克莱恩 / 理查德·阿尔第七 / 伊万杰琳·莉莉 / 李·佩斯 / 更多...<br>\
类型：动作 / 奇幻 / 冒险<br>\
制片国家/地区：美国 / 新西兰<br>\
语言：英语<br>\
上映日期：2015-01-23(中国大陆) / 2014-12-17(美国)<br>\
片长：144分钟<br>\
<br>\
<br>\
8、分歧者2：绝地反击<br>\
<br>\
导演：彼得·杰克逊<br>\
编剧：弗兰·威尔士 / 费力怕·报恩寺 / 彼得·杰克逊 / 吉尔默·德尔·托罗 / J·R·R·托尔金<br>\
主演：马丁·福瑞曼 / 伊恩·麦克莱恩 / 理查德·阿尔第七 / 伊万杰琳·莉莉 / 李·佩斯 / 更多...<br>\
类型：动作 / 奇幻 / 冒险<br>\
制片国家/地区：美国 / 新西兰<br>\
语言：英语<br>\
上映日期：2015-01-23(中国大陆) / 2014-12-17(美国)<br>\
片长：144分钟<br>\
<br>\
<br>\
9、少年班<br>\
<br>\
导演：彼得·杰克逊<br>\
编剧：弗兰·威尔士 / 费力怕·报恩寺 / 彼得·杰克逊 / 吉尔默·德尔·托罗 / J·R·R·托尔金<br>\
主演：马丁·福瑞曼 / 伊恩·麦克莱恩 / 理查德·阿尔第七 / 伊万杰琳·莉莉 / 李·佩斯 / 更多...<br>\
类型：动作 / 奇幻 / 冒险<br>\
制片国家/地区：美国 / 新西兰<br>\
语言：英语<br>\
上映日期：2015-01-23(中国大陆) / 2014-12-17(美国)<br>\
片长：144分钟<br>\
<br>\
<br>\
10、我的男友和狗<br>\
<br>\
导演：彼得·杰克逊<br>\
编剧：弗兰·威尔士 / 费力怕·报恩寺 / 彼得·杰克逊 / 吉尔默·德尔·托罗 / J·R·R·托尔金<br>\
主演：马丁·福瑞曼 / 伊恩·麦克莱恩 / 理查德·阿尔第七 / 伊万杰琳·莉莉 / 李·佩斯 / 更多...<br>\
类型：动作 / 奇幻 / 冒险<br>\
制片国家/地区：美国 / 新西兰<br>\
语言：英语<br>\
上映日期：2015-01-23(中国大陆) / 2014-12-17(美国)<br>\
片长：144分钟<br>\
<br>\
<br>\
11、末日崩塌<br>\
<br>\
导演：彼得·杰克逊<br>\
编剧：弗兰·威尔士 / 费力怕·报恩寺 / 彼得·杰克逊 / 吉尔默·德尔·托罗 / J·R·R·托尔金<br>\
主演：马丁·福瑞曼 / 伊恩·麦克莱恩 / 理查德·阿尔第七 / 伊万杰琳·莉莉 / 李·佩斯 / 更多...<br>\
类型：动作 / 奇幻 / 冒险<br>\
制片国家/地区：美国 / 新西兰<br>\
语言：英语<br>\
上映日期：2015-01-23(中国大陆) / 2014-12-17(美国)<br>\
片长：144分钟<br>\
<br>\
<br>\
12、惊魂电影院<br>\
<br>\
导演：彼得·杰克逊<br>\
编剧：弗兰·威尔士 / 费力怕·报恩寺 / 彼得·杰克逊 / 吉尔默·德尔·托罗 / J·R·R·托尔金<br>\
主演：马丁·福瑞曼 / 伊恩·麦克莱恩 / 理查德·阿尔第七 / 伊万杰琳·莉莉 / 李·佩斯 / 更多...<br>\
类型：动作 / 奇幻 / 冒险<br>\
制片国家/地区：美国 / 新西兰<br>\
语言：英语<br>\
上映日期：2015-01-23(中国大陆) / 2014-12-17(美国)<br>\
片长：144分钟<br>\
<br>\
<br>\
13、哆啦A梦：伴我同行<br>\
<br>\
导演：彼得·杰克逊<br>\
编剧：弗兰·威尔士 / 费力怕·报恩寺 / 彼得·杰克逊 / 吉尔默·德尔·托罗 / J·R·R·托尔金<br>\
主演：马丁·福瑞曼 / 伊恩·麦克莱恩 / 理查德·阿尔第七 / 伊万杰琳·莉莉 / 李·佩斯 / 更多...<br>\
类型：动作 / 奇幻 / 冒险<br>\
制片国家/地区：美国 / 新西兰<br>\
语言：英语<br>\
上映日期：2015-01-23(中国大陆) / 2014-12-17(美国)<br>\
片长：144分钟<br>\
<br>\
<br>\
14、念念<br>\
<br>\
导演：彼得·杰克逊<br>\
编剧：弗兰·威尔士 / 费力怕·报恩寺 / 彼得·杰克逊 / 吉尔默·德尔·托罗 / J·R·R·托尔金<br>\
主演：马丁·福瑞曼 / 伊恩·麦克莱恩 / 理查德·阿尔第七 / 伊万杰琳·莉莉 / 李·佩斯 / 更多...<br>\
类型：动作 / 奇幻 / 冒险<br>\
制片国家/地区：美国 / 新西兰<br>\
语言：英语<br>\
上映日期：2015-01-23(中国大陆) / 2014-12-17(美国)<br>\
片长：144分钟<br>\
<br>\
<br>\
15、横冲直撞好莱坞<br>\
<br>\
导演：彼得·杰克逊<br>\
编剧：弗兰·威尔士 / 费力怕·报恩寺 / 彼得·杰克逊 / 吉尔默·德尔·托罗 / J·R·R·托尔金<br>\
主演：马丁·福瑞曼 / 伊恩·麦克莱恩 / 理查德·阿尔第七 / 伊万杰琳·莉莉 / 李·佩斯 / 更多...<br>\
类型：动作 / 奇幻 / 冒险<br>\
制片国家/地区：美国 / 新西兰<br>\
语言：英语<br>\
上映日期：2015-01-23(中国大陆) / 2014-12-17(美国)<br>\
片长：144分钟<br>\
<br>\
<br>\
16、再次出发<br>\
<br>\
导演：彼得·杰克逊<br>\
编剧：弗兰·威尔士 / 费力怕·报恩寺 / 彼得·杰克逊 / 吉尔默·德尔·托罗 / J·R·R·托尔金<br>\
主演：马丁·福瑞曼 / 伊恩·麦克莱恩 / 理查德·阿尔第七 / 伊万杰琳·莉莉 / 李·佩斯 / 更多...<br>\
类型：动作 / 奇幻 / 冒险<br>\
制片国家/地区：美国 / 新西兰<br>\
语言：英语<br>\
上映日期：2015-01-23(中国大陆) / 2014-12-17(美国)<br>\
片长：144分钟<br>\
<br>\
<br>\
17、听说<br>\
<br>\
导演：彼得·杰克逊<br>\
编剧：弗兰·威尔士 / 费力怕·报恩寺 / 彼得·杰克逊 / 吉尔默·德尔·托罗 / J·R·R·托尔金<br>\
主演：马丁·福瑞曼 / 伊恩·麦克莱恩 / 理查德·阿尔第七 / 伊万杰琳·莉莉 / 李·佩斯 / 更多...<br>\
类型：动作 / 奇幻 / 冒险<br>\
制片国家/地区：美国 / 新西兰<br>\
语言：英语<br>\
上映日期：2015-01-23(中国大陆) / 2014-12-17(美国)<br>\
片长：144分钟<br>\
<br>\
<br>\
18、拳霸风云<br>\
<br>\
导演：彼得·杰克逊<br>\
编剧：弗兰·威尔士 / 费力怕·报恩寺 / 彼得·杰克逊 / 吉尔默·德尔·托罗 / J·R·R·托尔金<br>\
主演：马丁·福瑞曼 / 伊恩·麦克莱恩 / 理查德·阿尔第七 / 伊万杰琳·莉莉 / 李·佩斯 / 更多...<br>\
类型：动作 / 奇幻 / 冒险<br>\
制片国家/地区：美国 / 新西兰<br>\
语言：英语<br>\
上映日期：2015-01-23(中国大陆) / 2014-12-17(美国)<br>\
片长：144分钟<br>\
<br>\
<br>\
19、因为谷桂花<br>\
<br>\
导演：彼得·杰克逊<br>\
编剧：弗兰·威尔士 / 费力怕·报恩寺 / 彼得·杰克逊 / 吉尔默·德尔·托罗 / J·R·R·托尔金<br>\
主演：马丁·福瑞曼 / 伊恩·麦克莱恩 / 理查德·阿尔第七 / 伊万杰琳·莉莉 / 李·佩斯 / 更多...<br>\
类型：动作 / 奇幻 / 冒险<br>\
制片国家/地区：美国 / 新西兰<br>\
语言：英语<br>\
上映日期：2015-01-23(中国大陆) / 2014-12-17(美国)<br>\
片长：144分钟<br>\
<br>\
<br>\
20、约定倒计时<br>\
<br>\
导演：彼得·杰克逊<br>\
编剧：弗兰·威尔士 / 费力怕·报恩寺 / 彼得·杰克逊 / 吉尔默·德尔·托罗 / J·R·R·托尔金<br>\
主演：马丁·福瑞曼 / 伊恩·麦克莱恩 / 理查德·阿尔第七 / 伊万杰琳·莉莉 / 李·佩斯 / 更多...<br>\
类型：动作 / 奇幻 / 冒险<br>\
制片国家/地区：美国 / 新西兰<br>\
语言：英语<br>\
上映日期：2015-01-23(中国大陆) / 2014-12-17(美国)<br>\
片长：144分钟<br>\
';
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  g: function () {
    return selector.substring(0, 1) == '.' ? document.getElementsByClassName(selector.substring(1)) : document.getElementById(selector.substring(1));
  },
  random: function () {
    var min = Math.min(range[0], range[1]);
    var max = Math.max(range[0], range[1]);
    var diff = max - min;
    var number = Math.round(Math.random() * diff) + min;
    return number;
  },
  addPhotos: function () {
    var _wrap = '';
    var _nav = '';
    for (var i = 0; i < data.length; i++) {//for in 循环中的循环计数器是字符串，而不是数字它包含当前属性的名称或当前数组元素的索引
      _wrap += '<view class="photo  photo_front" onclick="turn(this)" id="photo_' + (i + 1) + '"><view class="photo-wrap"><view class="side side-front"><p class="image"><img src="images/' + data[i].img + '"></p><p class="caption">' + data[i].caption + '</p></view><view class="side side-back"><p class="desc">' + data[i].desc + '</p></view></view></view></view>';

      _nav += '<span id="nav_' + (i + 1) + '" onclick="turn(g(\'#photo_' + (i + 1) + '\'))" class="i"></span>';
    }
    var navigation = '<view class="nav">' + _nav + '</view>'
    g('#wrap').innerHTML = _wrap + navigation;

    rsort(random([1, data.length]));
  },
  range: function () {
    var range = {
      left: {
        x: [],
        y: []
      },
      right: {
        x: [],
        y: []
      }
    };
    //获取最外围容器的宽度和高度
    var wrap = {
      width: g('#wrap').clientWidth,
      height: g('#wrap').clientHeight
    };
    var photo = {
      width: g('.photo')[0].clientWidth,
      height: g('.photo')[0].clientHeight
    };
    range.left.x = [0 - photo.width / 4 + 130, wrap.width / 2 - photo.width * 5 / 4 + 130];
    range.left.y = [0 - photo.height / 4 + 160, wrap.height - photo.height * 3 / 4 + 160];
    range.right.x = [wrap.width / 2 + photo.width / 4 + 130, wrap.width - photo.width / 4 + 130];
    range.right.y = range.left.y;
    console.log(range)
    return range;
  },
  rsort: function () {
    var _photo = g('.photo');
    var photos = [];
    for (var i = 0; i < _photo.length; i++) {
      _photo[i].className = 'photo photo_front';
      _photo[i].style.left = '';
      _photo[i].style.top = '';
      _photo[i].style['transform'] = _photo[i].style['-webkit-transform'] = 'scale(1.3)';

      photos.push(_photo[i]);
    }
    var photo_center = g('#photo_' + n);
    photo_center.className += ' photo_center';

    photo_center = photos.splice(n - 1, 1);//把photo_center从数组里删掉，splice() 方法会改变原始数组
    // 把剩下的海报分为左右两部分
    var photos_left = photos.splice(0, Math.ceil(photos.length / 2));
    var photos_right = photos;
    var ranges = range();
    // 对左右区域的海报位置进行随机赋值
    for (var j = 0; j < photos_left.length; j++) {
      var photo = photos_left[j];
      photo.style.left = random(ranges.left.x) + 'px';
      photo.style.top = random(ranges.left.y) + 'px';
      photo.style['transform'] = photo.style['-webkit-transform'] = 'rotate(' + random([-150, 150]) + 'deg) scale(1)';
    }
    for (var s = 0; s < photos_right.length; s++) {
      var photo = photos_right[s];
      photo.style.left = random(ranges.right.x) + 'px';
      photo.style.top = random(ranges.right.y) + 'px';
      photo.style['transform'] = photo.style['-webkit-transform'] = 'rotate(' + random([-150, 150]) + 'deg) scale(1)';
    }
    // 控制按钮处理
    var navs = g('.i');
    for (var k = 0; k < navs.length; k++) {
      navs[k].className = 'i';
    }
    g('#nav_' + n).className += ' i_current';
  },
  turn: function () {
    var cls = elem.className;
    var n = elem.id.split('_')[1];//var n = elem.id.substr(-1, 1)，但是不推荐 substr;
    if (!/photo_center/.test(cls)) {//判断当前点击的元素是不是 photo_center，不是的话不执行后面的翻转而进行海报排序
      return rsort(n);
    }
    if (/photo_front/.test(cls)) {
      cls = cls.replace(/photo_front/, 'photo_back');
      g('#nav_' + n).className += ' i_back';//同时处理控制按钮
    } else {
      cls = cls.replace(/photo_back/, 'photo_front');
      g('#nav_' + n).className = g('#nav_' + n).className.replace(/\s*i_back\s*/, ' ');//同时处理控制按钮
    }

    elem.className = cls;
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