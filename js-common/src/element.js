(function (window) {
	var _e ={};/* cope with the node */


	var ELEMENT_NODE = 1;


	/*
	* add a _className 
	*/
	_e._$addClass = function(_node ,_className){
		try{
			if(!_node || _node.nodeType != ELEMENT_NODE) throw new Error("Invalid empty node");
			if(!!_node.className){
				_node.className =  _node.className+" "+_className;
			}else{
				_node.className = _className;
			}			
		}catch(err){
			console.log(err.message);
		}
	};


	/*
	* search a class
	*
	*return bool [yes 1  no 0s]
	*/
	_e._$hasClass = function(_node,_className){
		try{
			if(!_node || _node.nodeType != ELEMENT_NODE) throw new Error("Invalid empty node");
			
			var _searchList = _className.split(" "),
				_classList = _node.className.split(" "),
				_len1 = _searchList.length,
				_len2 = _classList.length,
				_gkey=1;

			for(var i = 0;i < _len1 ; i++){
				var _tmpClass = _searchList[i],
					_tkey = 0;
				for(var j=0 ; j<_len2;j++){
					if(_tmpClass === _classList[j]){
						_tkey =1 ;
						break;
					}
				}
				_gkey = _gkey && _tkey;
			}

			return _gkey;
		}catch(err){
			console.log(err.message);
		}
	};

	/*
	*remove a class
	*
	*/
	_e._$removeClass = function(_node,_className){
		try{
			if(!_node || _node.nodeType != ELEMENT_NODE) throw new Error("Invalid empty node");
			
			var _searchList = _className.split(" "),
				_classList = _node.className.split(" "),
				_len1 = _searchList.length,
				_len3 = _len2 = _classList.length;

			for(var i = 0;i < _len1 ; i++){
				var _tmpClass = _searchList[i];
				for(var j=0 ; j<_len2;j++){
					if(_tmpClass === _classList[j]){
						_classList.splice(j,1);
						j--;
						_len2 --;
						break;
					}
				}
			}
			if(_len3!=_len2){
				_node.className = _classList.join(" ");
			}
		}catch(err){
			console.log(err.message);
		}
	};
	
	window._e = _e;
})(window);