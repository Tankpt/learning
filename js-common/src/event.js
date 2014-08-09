(function (window) {
	var _v ={};/* cope with the event */

	/*
	*add event
	*/

	_v._$addEvent = function(_node,_event,_iterate){
		if(_node.addEventListener){
			_node.addEventListener(_event,_iterate,false);
		}else if(_node.attachEvent){
			_node.attachEvent("on"+_event,_iterate);
		}else{
			//DOM 0 level
			_node["on"+_event] = _iterate;
		}
	};
	
	/*
	*remove the event
	**/
	_v._$removeEvent = function(_node,_event,_iterate){
		if(_node.removeEventListener){
			_node.removeEventListener(_event,_iterate,false);
		}else if(_node.detachEvent){
			_node.detachEvent("on"+_event,_iterate);
		}else{
			_node["on"+_event] = null;
		}
	};

	/*
	*stop the propagation
	**/
	_v._$stopPropagation = function(_event){
		var event = _event || window.event;
		if(event.stopPropagation){
			event.stopPropagation();
		}else{
			event.cancelBubble = true;
		}
	};


	/*
	*preventDefault
	***/
	_v._$preventDefault = function(_event){
		var event = _event || window.event;
		if(event.preventDefault){
			event.preventDefault();
		}else{
			event.returnValue =  false;
		}
	};

	window._v = _v;
})(window);