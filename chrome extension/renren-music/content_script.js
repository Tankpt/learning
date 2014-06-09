chrome.extension.onMessage.addListener(  
  function(request, sender, sendResponse) {  
    if (request.search == "true"){
    	var postInfo = document.getElementsByClassName("vocal-player");
		var _urlArray = [];
		for(var i=0 ,_len = postInfo.length ,_tmp;i<_len;i++){
			_tmp = postInfo[i].dataset.vocal;
			_urlArray.push(_tmp.substring(_tmp.indexOf("http"),_tmp.indexOf("mp3")+3));
		}
		 sendResponse({result: _urlArray});  
    }
    else  
        sendResponse({result: ""})  
  });  