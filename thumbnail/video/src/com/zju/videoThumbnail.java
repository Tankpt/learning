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
	    //��ȡidֵ��Ҳ����"XMjU0MjI2NzY0"
	    String videoId =siteUrl.substring(no+3, siteUrl.indexOf(".html"));
	    //��ȡ��Ƶ��Ϣ���ݵ�URL���� "http://v.youku.com/player/getPlayList/VideoIDS/"+videoId+"/version/5/source/out"
	    
	    URL myurl = new URL("http://v.youku.com/player/getPlayList/VideoIDS/"+videoId+"/version/5/source/out");
	    
	  //��URL�����л�ȡ������
	       InputStreamReader isr = new InputStreamReader(myurl.openStream());
	       //��װ
	       BufferedReader br = new BufferedReader(isr);
	       //readLine��ȡ�ı�
	       String urls = br.readLine();
	       //�ر���
	       br.close();
	       //��ȡjson����
	       JSONObject json = JSONObject.fromObject(urls);
	       //��ȡjson���ݣ�data�ڣ�
	       JSONArray arr = json.getJSONArray("data");
	       //��ȡlogo��ֵ����ӡ
	   
		return JSONObject.fromObject(arr.get(0)).get("logo").toString();
	}
}
