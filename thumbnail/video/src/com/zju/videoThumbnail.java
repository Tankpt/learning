package com.zju;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.MalformedURLException;
import java.net.URL;
import net.sf.json.*;

public class videoThumbnail {
	public String getThumbnailUrl(String siteUrl)  throws IOException{
		int no = siteUrl.indexOf("id_");
	    //获取id值，也就是"XMjU0MjI2NzY0"
	    String videoId =siteUrl.substring(no+3, siteUrl.indexOf(".html"));
	    //获取视频信息数据的URL对象 "http://v.youku.com/player/getPlayList/VideoIDS/"+videoId+"/version/5/source/out"
	    
	    URL myurl = new URL("http://v.youku.com/player/getPlayList/VideoIDS/"+videoId+"/version/5/source/out");
	    
	  //从URL对象中获取输入流
	       InputStreamReader isr = new InputStreamReader(myurl.openStream());
	       //封装
	       BufferedReader br = new BufferedReader(isr);
	       //readLine获取文本
	       String urls = br.readLine();
	       //关闭流
	       br.close();
	       //获取json对象
	       JSONObject json = JSONObject.fromObject(urls);
	       //获取json数据（data内）
	       JSONArray arr = json.getJSONArray("data");
	       //获取logo的值并打印
	   
		return JSONObject.fromObject(arr.get(0)).get("logo").toString();
	}
}
