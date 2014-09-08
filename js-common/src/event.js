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
	* dispatchEvent
	*/
	_v._$dispatchEvent = function(_node,_event){
		try{
			if(_node.dispatchEvent){
				var _eventObj = document.createEvent("event");
				_eventObj.initEvent(_event,true,true);/*allow Bubble and cancelable*/
				_node.dispatchEvent(_eventObj);
			}else if(_node.fireEvent){
				_node.fireEvent('on'+_event);
			}
		}catch(e){}
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