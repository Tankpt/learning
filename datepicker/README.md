Datepicker
========

##介绍##
> 对网上一个日历的修改，用的是的[Stefan Petre](http://www.eyecon.ro/bootstrap-datepicker)的一个原型，在他的基础上对日历稍微进行了一点修改

>所要完成的功能主要是：当你比如选定一个酒店的时候，然后你点击日历查看日历，日历上应该能显示出从当前天开始往后的日子中不可选的日期，就是要将那些被订满的日期排除掉

##实现##
>对源码进行了稍微的修改主要的地方如下：<br>
1.对css进行了一点添加，主要是占有的一个class：busy和一个空余的class：free
<br>
2.在js中添加了一个filterDate（）的方法，来实现对日期的筛选

##使用##
    <div class="input-append date" id="dp3" data-date="2013-12-01" data-date-format="yyyy-mm-dd">
         <input class="span2" size="16" type="text">
        <span class="add-on"><i class="icon-th"></i></span>
    </div>
比如如下的这段代码，其中的data-date是必须的，表示的是你点击展开其中后选中的时间，这个可以先写一个，然后再后面重新设定<br>

首先是调用调用这个方法<br>

      $('#dp3').datepicker('filterDate',timeArray);
，其中的timeArray就是你从后台读取的关于该场地的忙率的时间，格式按2012-02-02这样的，取出时进行从小到大排序，然后传递进去，这个时候其实已经可以工作了，只不过前面提到按照正常思维的话，今天选择，那么今天以前的日期应该全部不能选，所以需要进行下一步，就是设置今天的日期<br>

     $("#dp3").datepicker('setValue',nowString);
其中的nowString就是今天的日期，格式也为2010-01-23这样<br>

第一次看别人的完整的代码，第一次修改，，第一次用这个格式来写文本==也是第一次上出这么个小东西~~质量自己感觉都不行~~ 