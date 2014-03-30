##code##
尝试用js写的一个类似前台登录输入验证码的功能，暂时只能生成0-9 a-z A-Z之间的几个字符串，验证码的长度定义为6，主要有两个方法来显现，
>1.code.createCode(codeLength,checkId)
其中codeLength是验证码的长度，checkId是要添加验证码到dom中的id，由于宽度的设置，暂时用6个最恰当

>2.code.getCode()
用来返回生成的code的字符串，每次调用code.createCode都会生成一个字符串，code.getCode()则是返回最新的那个