function main(){
    var flag=1
//计算小球直径d(mm)的平均值和标准差
    var arrd = []
    var dsum=0
    var dba=-1
    
    var dpowsum=0
    var xigamad=-1
    
    for(var i=1;i<=10;i++){
        if(document.getElementById("d"+i).value!=NaN&&document.getElementById("d"+i).value>0.0){
            arrd.push(document.getElementById("d"+i).value)
        }
    }
    var dlen=arrd.length

    if (dlen>0){
        for(var i=0;i<dlen;i++){
            dsum=dsum+parseFloat(arrd[i])
            }
            dba=dsum/dlen
            
            
            for(var i=0;i<dlen;i++){
            dpowsum=dpowsum+((parseFloat(arrd[i])-dba)*(parseFloat(arrd[i])-dba))
            }
            xigamad=Math.sqrt(dpowsum/dlen)
    }
    else{
        alert("请至少输入一项直径数据")
        flag=0
    }

//计算时间t(s)的平均值和标准差
    var arrt = []
    var tsum=0
    var tba=-1
    
    var tpowsum=0
    var xigamat=-1
    
    for(var i=1;i<=10;i++){
        if(document.getElementById("t"+i).value!=NaN&&document.getElementById("t"+i).value>0.0){
            arrt.push(document.getElementById("t"+i).value)
        }
    }
    var tlen=arrt.length
    if(tlen>0){
        for(var i=0;i<tlen;i++){
            tsum=tsum+parseFloat(arrt[i])
            }
            tba=tsum/tlen
            
            
            for(var i=0;i<tlen;i++){
            tpowsum=tpowsum+((parseFloat(arrt[i])-tba)*(parseFloat(arrt[i])-tba))
            }
            xigamat=Math.sqrt(tpowsum/tlen)
    }
    else{
        alert("请至少输入一项时间数据")
        flag=0
    }
//计算粘度系数t(Pa·s)的平均值和标准差
    var p=-1
    var p0=-1
    var od=-1
    var t=-1
    var L=-1
    var D0=-1
    var H=-1
    var arreta=[]
    var datanum=0
    var etaba=-1
    var etasum=0
    var etapowsum=0
    var xigamaeta=-1
  
    p=parseFloat(document.getElementById("pball").value)
    p0=parseFloat(document.getElementById("pliquid").value)
    D0=parseFloat(document.getElementById("D0").value)
    L=parseFloat(document.getElementById("L").value)
    H=parseFloat(document.getElementById("H").value)

    if(p!=NaN&&p>0.0&&p0!=NaN&&p0>0.0&&D0!=NaN&&D0>0.0&&L!=NaN&&L>0.0&&H!=NaN&&H>0.0){
    for (var i=1;i<=10;i++){
        if(document.getElementById("d"+i).value!=NaN&&document.getElementById("d"+i).value>0.0&&document.getElementById("t"+i).value!=NaN&&document.getElementById("t"+i).value>0.0){
             od=parseFloat(document.getElementById("d"+i).value)
             t=parseFloat(document.getElementById("t"+i).value)
             arreta.push(etabal(p,p0,od,t,L,D0,H))
             datanum++
        }
        else{
            break
        }
    }
    if(arreta.length>0){
        for(var i=0;i<arreta.length;i++){
            etasum=etasum+parseFloat(arreta[i])
        }
        etaba=etasum/arreta.length
        for(var i=0;i<arreta.length;i++){
            etapowsum=etapowsum+((parseFloat(arreta[i])-etaba)*(parseFloat(arreta[i])-etaba))
        }
        xigamaeta=Math.sqrt(etapowsum/arreta.length)
    }
    else{
        alert("输入的直径和时间数据没有对齐")
        flag=0
    } 
    }
    else{
        alert("必填项不能为空")
        flag=0
    }
//计算误差E
    var E=-1

    var Usp0=-1
    var UsL=-1
    var Ust=-1
    var Usd=-1

    var usl=-1
    var usd=-1
    var ust=-1
    var usp=-1

    var useta=-1
    
    usl=parseFloat(document.getElementById("deltaL").value)
    usd=parseFloat(document.getElementById("deltad").value)
    ust=parseFloat(document.getElementById("deltat").value)
    usp=parseFloat(document.getElementById("deltap").value)
    
    if(usl!=NaN&&usl>0.0&&usd!=NaN&&usd>0.0&&ust!=NaN&&ust>0.0&&usp!=NaN&&usp>0.0&&H!=NaN&&H>0.0){
        Usp0=usp/Math.sqrt(3)
        UsL=usl/Math.sqrt(3)
        Ust=Math.sqrt(xigamat+(ust/Math.sqrt(3)))
        Usd=Math.sqrt(xigamad+(usd/Math.sqrt(3)))
        E=Math.sqrt(Math.pow((Usp0/(p-p0)),2)+Math.pow((UsL/L),2)+Math.pow((Ust/tba),2)+Math.pow((Usd/dba),2))
        useta=E*etaba
    }
    else{
        E="未填写"
    }
//计算小球速度v
    var v=-1
    if(L!=NaN&&L>0.0&&tba>0.0){
        v=L/tba
    }
//输出计算结果

    var str=""
if(flag){
    for(var i=0;i<datanum;i++){
        str=str+arreta[i]+"Pa·s\n"
    }

    document.getElementById("dba").innerHTML="d爸="+dba+"mm"
    document.getElementById("usad").innerHTML="UsAd爸=σd爸="+xigamad+"mm"
    document.getElementById("usbd").innerHTML="UsBd爸="+Usd+"mm"

    document.getElementById("tba").innerHTML="d爸="+tba+"s"
    document.getElementById("usat").innerHTML="UsAt爸=σd爸="+xigamat+"s"
    document.getElementById("usbt").innerHTML="UsBt爸="+Ust+"s"

    document.getElementById("etaba").innerHTML="平均粘度系数eta爸="+etaba+"Pa·s"
    document.getElementById("xigamaeta").innerHTML="σeta爸="+xigamaeta+"Pa·s"
    document.getElementById("eta").innerHTML="粘度系数eta具体值(共"+datanum+"组数据)=\n"+str
    
    document.getElementById("E").innerHTML="E="+E
    document.getElementById("useta").innerHTML="Useta爸="+useta

    document.getElementById("v").innerHTML="速度v="+v+"m/s"

}
}


function etabal(p,p0,od,t,L,D0,H){
    var eta=-1
    var d=od/1000.0
    eta=(1/18)*((p-p0)*9.80*d*d*t)/(L*(1+2.4*(d/D0))*(1+3.3*(d/(2*H))))
    return eta
}
