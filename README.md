learning
========

学习前端过程中一些记录，都是些学过程中的demo，所以放一起好了。

表单验证（正在写ing）
------
之前在网上找有关于验证的插件有很多，但是感觉功能有点略多，而其实自己使用的时候，只需要部分的功能，所以准备试着动手做一个试试看
datepicker（[demo地址](https://github.com/Tankpt/learning/tree/master/datepicker)）
------
自己利用网上已有的一个代码进行了稍微的修改，用的是的[Stefan Petre](http://www.eyecon.ro/bootstrap-datepicker)。大致的功能就是可以在日历中将一些制定的日期给剔除掉,第一次看别人的完整的代码，第一次修改，第一次用这个格式来写文本==也是第一次上出这么个小东西,各种第一次~

**主要做的修改**
1.对css进行了一点添加，主要是占有的一个class：busy和一个空余的class：free<br>
2.在js中添加了一个filterDate（）的方法，来实现对日期的筛选

bubbleSort（[demo地址](https://github.com/Tankpt/learning/tree/master/bubbleSort)）
------
起因是在sef看到他们发起了一个30行js能做什么，看到一个排序的可视化，然后便自己动手试试，主要是canvas+时间延迟的setInterval的模拟，在网上看到了一个说while来模拟sleep事件很不好，所以采取的方式的记录了排序要做的步骤，将他放到一个动作队列里面，然后时间结束后，开始一个个执行，有点投机取巧的感觉。跟网上的30行差很远，还需努力
bandticket
------
暑假第一次接触前段的时候，利用bootstrap v2写的一个简单的购票的网站
现在感觉实在是不能直视 ==！（代码暂时没放上去）





