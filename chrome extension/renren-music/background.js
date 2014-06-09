function getDomainFromUrl(url){
	var host = "null";
	if(typeof url == "undefined" || null == url)
		url = window.location.href;
	var regex = /.*\:\/\/([^\/]*).*/;
	var match = url.match(regex);
	if(typeof match != "undefined" && null != match)
		host = match[1];
	return host;
}
//当属于符合需要的网站的时候，显示插件的小图标
function checkForValidUrl(tabId, changeInfo, tab) {
	var _tmpUrl = getDomainFromUrl(tab.url).toLowerCase();
	if( _tmpUrl=="www.renren.com" || _tmpUrl=="page.renren.com" || _tmpUrl =="photo.renren.com"|| _tmpUrl =="share.renren.com"){
		chrome.pageAction.show(tabId);
	}
};

//当标签更新时，此事件被触发
chrome.tabs.onUpdated.addListener(checkForValidUrl);
