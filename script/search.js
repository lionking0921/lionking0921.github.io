 let value = ["吴君迪个人网站的运作原理是什么？","吴君迪100米最佳成绩是多少？", "吴君迪200米最佳成绩是多少？", "吴君迪骑车极速是多少？", "吴君迪跑步极速是多少？", "吴君迪最喜欢哪个品种的狗？", "吴君迪是哪个幼儿园毕业的？", "吴君迪去过鸟巢体育馆吗？", "吴君迪会骑马吗？", "吴君迪会哪些语言？", "吴君迪一口气能跑多远？", "吴君迪一口气能骑行多远？"];
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
        console.log(res);
        if (res != -1) {
            // 这里判断就是把不是-1的读取出来
         
        if(inp.value != ''){
         

          num++

if(num==1){
neiron.innerHTML=""

}

      
if(item=="吴君迪个人网站的运作原理是什么？"){
neiron.innerHTML+="<div class='tip'><a href='/que/q1.html'>💡"+item+"</a><p></p></div>"
}
else if(item=="吴君迪100米最佳成绩是多少？"){
neiron.innerHTML+="<div class='tip'><a href='/que/q2.html'>💡"+item+"</a><p></p></div>"
}
else if(item=="吴君迪200米最佳成绩是多少？"){
neiron.innerHTML+="<div class='tip'><a href='/que/q3.html'>💡"+item+"</a><p></p></div>"
}
else if(item=="吴君迪骑车极速是多少？"){
neiron.innerHTML+="<div class='tip'><a href='/que/q4.html'>💡"+item+"</a><p></p></div>"
}
else if(item=="吴君迪跑步极速是多少？"){
neiron.innerHTML+="<div class='tip'><a href='/que/q5.html'>💡"+item+"</a><p></p></div>"
}
else if(item=="吴君迪最喜欢哪个品种的狗？"){
neiron.innerHTML+="<div class='tip'><a href='/que/q6.html'>💡"+item+"</a><p></p></div>"
}
else if(item=="吴君迪是哪个幼儿园毕业的？"){
neiron.innerHTML+="<div class='tip'><a href='/que/q7.html'>💡"+item+"</a><p></p></div>"
}
else if(item=="吴君迪去过鸟巢体育馆吗？"){
neiron.innerHTML+="<div class='tip'><a href='/que/q8.html'>💡"+item+"</a><p></p></div>"
}
else if(item=="吴君迪会骑马吗？"){
neiron.innerHTML+="<div class='tip'><a href='/que/q9.html'>💡"+item+"</a><p></p></div>"
}
else if(item=="吴君迪会哪些语言？"){
neiron.innerHTML+="<div class='tip'><a href='/que/q10.html'>💡"+item+"</a><p></p></div>"
}
else if(item=="吴君迪一口气能跑多远？"){
neiron.innerHTML+="<div class='tip'><a href='/que/q11.html'>💡"+item+"</a><p></p></div>"
}
else if(item=="吴君迪一口气能骑行多远？"){
neiron.innerHTML+="<div class='tip'><a href='/que/q12.html'>💡"+item+"</a><p></p></div>"
}
else{
neiron.innerHTML+="<div class='tip'><p>😭糟糕，问题不见了</p></div>"
}












  //neiron.innerHTML+="<a href='' target='_blank'>"+item+"</a><p></p>"

          
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
 
 
 
 
        serviceWrapW.style.display = "none";
   serviceWrapW.innerHTML = "";
 
 
 
 

      }



  };
 
  
