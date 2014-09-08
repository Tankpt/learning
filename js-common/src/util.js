(function (window) {
	var _u ={};/* cope with the event */
	var document = window.document;

    var _$$Cookie,
        _$$Cookie_Len=0;

	/*deal with the cookie*/
	_u._$getCookie = function(){
		var cookie = {};
        _$$Cookie_Len =0;
		var all = document.cookie ;
		if(!!all){
			var cookieArray = all.split("; ");
			for(var i=0 ,len=cookieArray.length;i<len;i++){
				var index = cookieArray[i].indexOf("="),
					name = cookieArray[i].slice(0,index),
					value = cookieArray[i].slice(index+1);
				cookie[name] = decodeURIComponent(value); 
			}
            _$$Cookie_Len = cookieArray.length;
		}
        _$$Cookie = cookie;
		return cookie;
	};

	_u._$setCookie = function(key ,value){
        if(!_$$Cookie_Len){
            _u._$getCookie();
        }
        _$$Cookie[key] = encodeURIComponent(value);
        if(!_$$Cookie[key]){
           _$$Cookie_Len++;
        }
        document.cookie = key+"="+encodeURIComponent(value);
	};

	_u._$deleteCookie = function(key){
        if(!_$$Cookie_Len){
            _u._$getCookie();
        }
		if(!!_$$Cookie[key]){
			delete _$$Cookie[key];
			document.cookie = key+"=; max-age=0";
		}
	};

    _u._$clearCookie = function(){
        if(!_$$Cookie_Len){
            _u._$getCookie();
        }
        for(var key in _$$Cookie){
            delete _$$Cookie[key];
            document.cookie = key+"=; max-age=0";
        }
        _$$Cookie = {};
        _$$Cookie_Len=0;
    };
	window._u = _u;
})(window);