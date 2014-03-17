纯js获取优酷视频的缩略图（demo）
-----

今天本来想着把这个东西做一个类似插件的东西，但是尝试了好多次之后，未果，然后想着用js通过代理的方式再去抓去这个url感觉时间上太慢了，在浏览器上看了下事件，用js的话花了1.3s，感觉不能忍了，然后在网上找了一个java版本的代码，也是一样的功能，时间上测试的花了0.8s，虽然很慢，不过好多了，顺便附上java代码，我只是把别人的整理了下，百度下，这个有很多的[例子](http://www.baidu.com/#wd=java%E6%8F%90%E5%8F%96%E4%BC%98%E9%85%B7%E8%A7%86%E9%A2%91suoluet&rsv_bp=0&tn=baidu&rsv_spt=3&ie=utf-8&rsv_sug3=10&rsv_sug4=746&rsv_sug1=8&inputT=1231&rsv_sug=4)

----------分割线
主要是用了网上有人说的提取视频的id，然后抓取相应的json数据，从中解析到缩略图的地址，中间采用了雅虎的[YQL](http://developer.yahoo.com/yql/)代理，很不错，一些细节的请见[博客](http://blog.csdn.net/tankpt/article/details/20380761)


----------

 在demo中我是输入的是在优酷视频下面分享的地方，嵌入的html代码的那段来进行实现的，其他的应该也是同理的。展示demo的左下角是原视频，不出意外应该都是有广告的，右边是通过这个截取的缩略图
----2014/3/18版本
将功能做成了一个函数一样的放在js中的thumbnail.js

需要使用的时候调用函数videoThumbnail（）,里面输入的是优酷视频的地址，不是网址，是类似下面这个的格式，
`http://player.youku.com/player.php/sid/XNjc1Njk4ODg4/v.swf`因为在正则表达上，我做的是输入一个优酷视频下方分享中的
`<embed src="http://player.youku.com/player.php/sid/XNjc1Njk4ODg4/v.swf" allowFullScreen="true" quality="high" width="480" height="400" align="middle" allowScriptAccess="always" type="application/x-shockwave-flash"></embed>`最后在页面上显示视频以及他的相应的缩略图