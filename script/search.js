let value = ["Q:吴君迪个人网站的运作原理是什么？","Q:吴君迪100米最佳成绩是多少？", "Q:吴君迪200米最佳成绩是多少？", "Q:吴君迪骑车极速是多少？", "Q:吴君迪跑步极速是多少？", "Q:吴君迪最喜欢哪个品种的狗？", "Q:吴君迪是哪个幼儿园毕业的？", "Q:吴君迪去过鸟巢体育馆吗？", "Q:吴君迪会骑马吗？", "Q:吴君迪会哪些语言？", "Q:吴君迪一口气能跑多远？", "Q:吴君迪一口气能骑行多远？","Q:如何下载吴君迪写的天气软件？","A1:吴君迪的个人网站的运作原理是，以GitHub作为服务器，在GitHub仓库内部署网页文件，并给该项目生成一个二级域名接入互联网。" ,"A1:相比租用服务器，使用GitHub可以0成本搭建自己的个人网站，因此可以省下一笔不小的费用。","A1:然后在某个平台上申请顶级域名（如wjd.email），添加CNAME记录，创建映射，使顶级域名指向GitHUb生成的二级域名，这样就可以使用自己的域名访问个人网站啦！","A1:需要注意的是，虽然GitHub服务器是免费的，但是顶级国际域名是要收费的哦！" ,"A1:其价格从几十元到几百元/年不等，按年缴交相关费用才能使用自己的域名哦。" ,"A1:所以说吴君迪搭建自己的网站也是有成本的，希望大家多多支持哦！","A1:映射关系","A1:吴君迪个人网站顶级国际域名证书","A1:在GitHub查看此项目","A1:查看项目展示视频及PPT","A2:手动计时:11.81s，该记录创造于2022年4月","A2:电子计时:12.36s，该记录创造于2021年10月","A2:运动水平:国家三级","A3:手动计时:24.72s，该记录创造于2021年7月" ,"A3:电子计时:25.14s，该记录创造于2021年10月" ,"A3:运动水平:国家三级","A4:54km/h(15m/s），该记录创造于2022年8月","A5:36.9km/h(10.25m/s)，该记录创造于2021年10月","A6:英系浅色金毛","A6:特别喜欢住在青岛的蛋黄优莉","A7:福州南公幼儿园","A8:去过。2015年8月，吴君迪去鸟巢看田径世锦赛100米决赛，他还在鸟巢内见到了苏炳添和博尔特呢！","A9:会的。2016年在呼伦贝尔学的。","A9:吴君迪在马背上。","A10:汉语，英语，蒙古语","A10:如果算上方言还会福州话","A11:36km，该记录创造于2017年","A12:70km，该记录创造于2020年","A13:您可以在文末的链接处下载最新版本的PC版桌面天气，该软件支持windows系统。" ,"A13:软件名称：天气（桌面天气）","软件大小：约190.12M（内含动态壁纸和虚拟引擎）","A13:软件版本：2.1.0" ,"A13:发布时间：2022.11.12" ,"A13:软件作者：吴君迪（版权所有，侵权必究）","A13:运行截图：见下方图片","A13:主界面","A13:设置界面" ,"A13:壁纸界面" ,"A13:点击下方按钮下载软件安装包，格式为zip，下载完成后解压到您喜欢的地方，然后按照安装说明的指引进行安装。","A13:若之前安装过，只是更新的话，安装新版本之前先在设置中点击“关闭程序”按钮再安装新版本。","A13:声明：动态天气壁纸功能目前尚未成熟，还处在测试阶段，漏洞较多。"];
    let inp = document.querySelector("input");
    let neiron = document.querySelector(".neiron");
    inp.onkeyup=function(){
neiron.style.display = "none";

 // 由有内容输入弹出

     
      neiron.style.display = "block";
 var i=0
 var num=0
      // 用for循环里面的数据
      value.forEach((item) => {
       
        let res = item.indexOf(inp.value);
        if (res != -1) {
            // 这里判断就是把不是-1的读取出来
         
        if(inp.value != ''){
         

          num++

if(num==1){
neiron.innerHTML=""

}

      
if(item=="Q:吴君迪个人网站的运作原理是什么？"){
neiron.innerHTML+="<div class='tip'><a href='/que/q1.html'>❓"+item+"</a><p></p></div>"
}
else if(item=="Q:吴君迪100米最佳成绩是多少？"){
neiron.innerHTML+="<div class='tip'><a href='/que/q2.html'>❓"+item+"</a><p></p></div>"
}
else if(item=="Q:吴君迪200米最佳成绩是多少？"){
neiron.innerHTML+="<div class='tip'><a href='/que/q3.html'>❓"+item+"</a><p></p></div>"
}
else if(item=="Q:吴君迪骑车极速是多少？"){
neiron.innerHTML+="<div class='tip'><a href='/que/q4.html'>❓"+item+"</a><p></p></div>"
}
else if(item=="Q:吴君迪跑步极速是多少？"){
neiron.innerHTML+="<div class='tip'><a href='/que/q5.html'>❓"+item+"</a><p></p></div>"
}
else if(item=="Q:吴君迪最喜欢哪个品种的狗？"){
neiron.innerHTML+="<div class='tip'><a href='/que/q6.html'>❓"+item+"</a><p></p></div>"
}
else if(item=="Q:吴君迪是哪个幼儿园毕业的？"){
neiron.innerHTML+="<div class='tip'><a href='/que/q7.html'>❓"+item+"</a><p></p></div>"
}
else if(item=="Q:吴君迪去过鸟巢体育馆吗？"){
neiron.innerHTML+="<div class='tip'><a href='/que/q8.html'>❓"+item+"</a><p></p></div>"
}
else if(item=="Q:吴君迪会骑马吗？"){
neiron.innerHTML+="<div class='tip'><a href='/que/q9.html'>❓"+item+"</a><p></p></div>"
}
else if(item=="Q:吴君迪会哪些语言？"){
neiron.innerHTML+="<div class='tip'><a href='/que/q10.html'>❓"+item+"</a><p></p></div>"
}
else if(item=="Q:吴君迪一口气能跑多远？"){
neiron.innerHTML+="<div class='tip'><a href='/que/q11.html'>❓"+item+"</a><p></p></div>"
}
else if(item=="Q:吴君迪一口气能骑行多远？"){
neiron.innerHTML+="<div class='tip'><a href='/que/q12.html'>❓"+item+"</a><p></p></div>"
}
else if(item=="Q:如何下载吴君迪写的天气软件？"){
neiron.innerHTML+="<div class='tip'><a href='/que/q13.html'>❓"+item+"</a><p></p></div>"
}



if(item.search(/A1:/)!=-1){
neiron.innerHTML+="<div class='wer'><a href='/que/q1.html'>💡"+item+"</a><p></p></div>"
}
if(item.search(/A2:/)!=-1){
neiron.innerHTML+="<div class='wer'><a href='/que/q2.html'>💡"+item+"</a><p></p></div>"
}
if(item.search(/A3:/)!=-1){
neiron.innerHTML+="<div class='wer'><a href='/que/q3.html'>💡"+item+"</a><p></p></div>"
}
if(item.search(/A4:/)!=-1){
neiron.innerHTML+="<div class='wer'><a href='/que/q4.html'>💡"+item+"</a><p></p></div>"
}
if(item.search(/A5:/)!=-1){
neiron.innerHTML+="<div class='wer'><a href='/que/q5.html'>💡"+item+"</a><p></p></div>"
}
if(item.search(/A6:/)!=-1){
neiron.innerHTML+="<div class='wer'><a href='/que/q6.html'>💡"+item+"</a><p></p></div>"
}
if(item.search(/A7:/)!=-1){
neiron.innerHTML+="<div class='wer'><a href='/que/q7.html'>💡"+item+"</a><p></p></div>"
}
if(item.search(/A8:/)!=-1){
neiron.innerHTML+="<div class='wer'><a href='/que/q8.html'>💡"+item+"</a><p></p></div>"
}
if(item.search(/A9:/)!=-1){
neiron.innerHTML+="<div class='wer'><a href='/que/q9.html'>💡"+item+"</a><p></p></div>"
}
if(item.search(/A10:/)!=-1){
neiron.innerHTML+="<div class='wer'><a href='/que/q10.html'>💡"+item+"</a><p></p></div>"
}
if(item.search(/A11:/)!=-1){
neiron.innerHTML+="<div class='wer'><a href='/que/q11.html'>💡"+item+"</a><p></p></div>"
}
if(item.search(/A12:/)!=-1){
neiron.innerHTML+="<div class='wer'><a href='/que/q12.html'>💡"+item+"</a><p></p></div>"
}
if(item.search(/A13:/)!=-1){
neiron.innerHTML+="<div class='wer'><a href='/que/q13.html'>💡"+item+"</a><p></p></div>"
}


          
         }
 
        }
else 
{
  i++
}

 
      });

if (num>0){
neiron.innerHTML+="<p>" + '共找到' +num+'条数据'+ "<p>"
}

      if(i==value.length){
       neiron.innerHTML = "<p>" + '没有结果' + "<p>"

      }

if(inp.value == '' ){
       neiron.style.display = "none";
   neiron.innerHTML = "";

      }



  };
 
  
