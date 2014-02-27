(function(window, document ){
	var regexCollection = {
		//用户名判断是否为全英文大写或全中文，可以包含空格 
		username : /^[A-Z u4E00-u9FA5]+$/ ,
		//判断一个输入量是否为电话号码
		telephone : /^([0-9]|[\-])+$/g ,
		//判断一个输入量是否为邮箱email
		email :  /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/ 

	};


	var FormValidator = function(formType , formContent){

		if(arguments.length<2) 
			return 0;
		return regexCollection[formType].test(formContent);
	}

	 window.FormValidator = FormValidator;
})(window,document);
