package com.zju;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.MalformedURLException;
import java.net.URL;
import net.sf.json.*;

import com.zju.videoThumbnail; 

public class videoTest {
   /**
    * @param args
    * @throws IOException 
    */
   public static void main(String[] args)  throws IOException{
       // TODO Auto-generated method stub
       String url = "http://v.youku.com/v_show/id_XMjU0MjI2NzY0.html";
       String b ;
       long startTime = System.currentTimeMillis();
       videoThumbnail a = new videoThumbnail();
       b= a.getThumbnailUrl(url);
       long endTime = System.currentTimeMillis();

       float seconds = (endTime - startTime) / 1000F;
       System.out.println(Float.toString(seconds) + " seconds.");
       System.out.println(b);
   }
}