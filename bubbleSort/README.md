bubbleSort
========
		
演示地址点击[demo]之前一次在网上看到一个论坛发起的一个活动，30行的js能做什么，其中一个就是实现了一个排序的
可视化，一直想自己也试试看，然后尝试做了一下，自己差不多用了60+吧，差距还是很大的，anyway，我
也才刚入门，以后继续努力

bubbleSort
------
		主要的东西就是canvas+时间延迟的setInterval，js貌似没有严格意义的sleep函数，用一个while跑几秒钟，
		这样貌似很不好的感觉，后来看了一个人的代码之后参考了以下，最后暂时的方法是将需要做的操作放到一
		个队列里面，然后最后的时候用setInterval，每隔一段时间运行一次，成功模拟了那个效果

		 var fOperatorSort = window.setInterval(function(){
            if(oOperateList.length>0){
                tmpOperate = oOperateList.shift();
                fUpdatetoCanvas(tmpOperate.x1,tmpOperate.y1,oContext);
                fUpdatetoCanvas(tmpOperate.x2,tmpOperate.y2,oContext);
            }else{
                window.clearInterval(fOperatorSort);
            }
        },2);

[demo]: http://tankpt.github.io/learning/bubbleSort/