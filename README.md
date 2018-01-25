# learning

学习前端过程中一些记录，都是些学过程中的demo，所以放一起好了。

### 11.angular todolist

### 10.js通用的方法

主要就是模仿下实现一些js基本内容的兼容，比如事件的绑定等等

### 9.跨域demo的

[地址](https://github.com/Tankpt/learning/tree/master/crossMessage)
之前在看几种跨域方法的过程中，写的几个demo，不过有几个是参考了博客里的，里面列了四种跨域的方法，postMessage 、修改window.domain、修改window.name、修改hash

### 8.[轮播的功能]

[地址](https://github.com/Tankpt/learning/tree/master/picScroll)

四月份在面试的时候一个面试官问的一个问题，怎么来实现一个轮播的功能，先试着写一个，貌似现在只是beat1，还有很多没有解决的问题

### 7.[chrome extension]

[地址](https://github.com/Tankpt/learning/tree/master/chrome%20extension)
chrome插件。可以读取人人网上那些音频的地址，试听并下载

### 6.js模拟登录输入验证码]

[地址](https://github.com/Tankpt/learning/tree/master/code)

主要的还是尝试下是否可以做类似的东西，单纯的前台进行随机生成几个放入一个字符串中，然后再在Dom中加入

### 5.纯js获取优酷视频的缩略图

[地址](https://github.com/Tankpt/learning/tree/master/thumbnail)

在做上传视频的时候突然意识到的一个问题，就是视频的缩略图，中间还扯到什么跨域访问什么的，都是第一次接触，还有很生疏的正则表达式
简介：主要是用了网上有人说的提取视频的id，然后抓取相应的json数据，从中解析到缩略图的地址，中间采用了雅虎的[YQL]代理，很不错，折腾了两三天感觉收获挺大的，一些细节的请见[博客],具体效果点击[demo5]

### 4.表单验证（正在写ing

之前在网上找有关于验证的插件有很多，但是感觉功能有点略多，而其实自己使用的时候，只需要部分的功能，所以准备试着动手做一个试试看

### 3.datepicker

[地址]((https://github.com/Tankpt/learning/tree/master/datepicker`))

自己利用网上已有的一个代码进行了稍微的修改，用的是的[Stefan Petre]。大致的功能就是可以在日历中将一些制定的日期给剔除掉,第一次看别人的完整的代码，第一次修改，第一次用这个格式来写文本==也是第一次上出这么个小东西,各种第一次~

**主要做的修改**

1.对css进行了一点添加，主要是占有的一个class：busy和一个空余的class：free<br>
2.在js中添加了一个filterDate（）的方法，来实现对日期的筛选

### 2.bubbleSort

[地址]((https://github.com/Tankpt/learning/tree/master/bubbleSort))

起因是在sef看到他们发起了一个30行js能做什么，看到一个排序的可视化，然后便自己动手试试，主要是canvas+时间延迟的setInterval的模拟，在网上看到了一个说while来模拟sleep事件很不好，所以采取的方式的记录了排序要做的步骤，将他放到一个动作队列里面，然后时间结束后，开始一个个执行，有点投机取巧的感觉。跟网上的30行差很远，还需努力,具体效果点击[demo2]

### 1.bandticket

暑假第一次接触前段的时候，利用bootstrap v2写的一个简单的购票的网站
现在感觉实在是不能直视 ==！（代码暂时没放上去）

[Stefan Petre]:  http://www.eyecon.ro/bootstrap-datepicker  
[YQL]: http://developer.yahoo.com/yql/
[博客]: http://blog.csdn.net/tankpt/article/details/20380761
[demo5]: http://tankpt.github.io/learning/thumbnail/
[demo2]: http://tankpt.github.io/learning/bubbleSort/
