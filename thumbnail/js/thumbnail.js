(function(window,document){
		var videoCollections= {
			youku:  /^http:\/\/player\.youku\.com\/player\.php\/sid\/+([\w]+)+\/v.swf$/
		};
		
		var a = /^http:\/\/player\.youku\.com\/player\.php\/sid\/+([\w]+)+\/v.swf$/;
		var videoId ,
			jsonUrl ,
			thumbnailsUrl;

		var videoThumbnail = function(videoUrl){
			//get the videoId 
			videoId = videoUrl.match(a)[1];
			//rebuild the imformation url which contains the video json imformation
			jsonUrl = "http://v.youku.com/player/getPlayList/VideoIDS/"+videoId+"/version/5/source/out";
	
			 $.ajax({
				type: 'GET', 
				url: "http://query.yahooapis.com/v1/public/yql",
				data:{
					 q: "select * from json where url=\""+jsonUrl+"\"",
				    format: "json"
				},
				async: false,
				dataType : "json",
				error:function(){
					console.log("出现错误");
				},
				success:function(data){
					thumbnailsUrl = data.query.results.json.data.logo;
				},
			});

			 return thumbnailsUrl;
		};

		window.videoThumbnail = videoThumbnail;
	})(window,document);