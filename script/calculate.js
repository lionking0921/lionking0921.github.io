function main(){
    var flag=1
//计算小球直径d(mm)的平均值和标准差
    var arrd = []
    var dsum=0
    var dba=-1
    
    var dpowsum=0
    var xigamad=-1
    
    var dlist=document.getElementById("d").value
    dlist=dlist.replace(' ','')
    if(dlist!=""){
        arrd=dlist.split(",")
        
        for(var j=0;j<arrd.length;j++){
            if(isNaN(arrd[j])||arrd[j]==""){
                alert("请正确输入直径数据")
                flag=0
                break
            }     
        }
    }

    
    var dlen=arrd.length
    if (flag){
        for(var i=0;i<dlen;i++){
            dsum=dsum+parseFloat(arrd[i])
            }
            dba=dsum/dlen
            for(var i=0;i<dlen;i++){
            dpowsum=dpowsum+((parseFloat(arrd[i])-dba)*(parseFloat(arrd[i])-dba))
            }
            if(dlen>1){
                xigamad=Math.sqrt(dpowsum/(dlen*(dlen-1)))
            }
            else{
                xigamad="无数据"
            }
    }

//计算时间t(s)的平均值和标准差
    var arrt = []
    var tsum=0
    var tba=-1
    
    var tpowsum=0
    var xigamat=-1
    
    var tlist=document.getElementById("t").value
    tlist=tlist.replace(' ','')
    if(tlist!=""){
        arrt=tlist.split(",")
        
        for(var j=0;j<arrt.length;j++){
            if(isNaN(arrt[j])||arrt[j]==""){
                alert("请正确输入时间数据")
                flag=0
                break
            }     
        }
    }
    
    
    var tlen=arrt.length
    if (flag){
        for(var i=0;i<tlen;i++){
            tsum=tsum+parseFloat(arrt[i])
            }
            tba=tsum/tlen
            for(var i=0;i<tlen;i++){
            tpowsum=tpowsum+((parseFloat(arrt[i])-tba)*(parseFloat(arrt[i])-tba))
            }
            if(tlen>1){
                xigamat=Math.sqrt(tpowsum/(tlen*(tlen-1)))
            }
            else{
                xigamat="无数据"
            }
    }

//计算粘度系数η(Pa·s)的平均值和标准差
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
    if(dlen>0&&tlen>0&&flag>0){
        minl=dlen<tlen?dlen:tlen
        for (var i=0;i<minl;i++){
                 od=parseFloat(arrd[i])
                 t=parseFloat(arrt[i])
                 arreta.push(etabal(p,p0,od,t,L,D0,H))
                 datanum++
        }
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

    var usbd=-1
    var usbt=-1

    var useta=-1
    
    usl=parseFloat(document.getElementById("deltaL").value)/2
    usd=parseFloat(document.getElementById("deltad").value)/2
    ust=parseFloat(document.getElementById("deltat").value)
    usp=parseFloat(document.getElementById("deltap").value)/2
    
    if(usl!=NaN&&usl>0.0&&usd!=NaN&&usd>0.0&&ust!=NaN&&ust>0.0&&usp!=NaN&&usp>0.0&&H!=NaN&&H>0.0&&p>p0){
        Usp0=usp/Math.sqrt(3)
        UsL=usl/Math.sqrt(3)
        usbd=usd/Math.sqrt(3)
        usbt=ust/Math.sqrt(3)
        Usd=Math.sqrt(xigamad+usbd)
        Ust=Math.sqrt(xigamat+usbt)
        E=Math.sqrt(Math.pow((Usp0/(p-p0)),2)+Math.pow((UsL/L),2)+Math.pow((Ust/tba),2)+Math.pow((Usd/dba),2))
        useta=E*etaba
    }
    else{
        if(p<=p0){alert("提示：小球密度必须大于液体密度")}
        E="无数据"
        usbd="无数据"
        usbt="无数据"
        useta="无数据"
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
    if(minl==1){
    E="无数据"
    useta="无数据"
    }

    document.getElementById("dba").innerHTML="小球直径平均值d="+dba+"mm"
    document.getElementById("usad").innerHTML="直径A类不确定度UsAd=标准误差σd="+xigamad+"mm"
    document.getElementById("usbd").innerHTML="直径B类不确定度UsBd="+usbd+"mm"

    document.getElementById("tba").innerHTML="时间平均值t="+tba+"s"
    document.getElementById("usat").innerHTML="时间A类不确定度UsAt=标准误差σt="+xigamat+"s"
    document.getElementById("usbt").innerHTML="时间B类不确定度UsBt="+usbt+"s"

    document.getElementById("etaba").innerHTML="平均粘度系数η="+etaba+"Pa·s"
    document.getElementById("xigamaeta").innerHTML="粘度系数标准差ση="+xigamaeta+"Pa·s"
    document.getElementById("eta").innerHTML="粘度系数η具体值(共"+datanum+"组数据)=\n"+str
    
    document.getElementById("E").innerHTML="E="+E
    document.getElementById("useta").innerHTML="Usη=E*η="+useta

    document.getElementById("v").innerHTML="小球下落速度v="+v+"m/s"

}
}


function etabal(p,p0,od,t,L,D0,H){
    var eta=-1
    var d=od/1000.0
    eta=(1/18)*((p-p0)*9.80*d*d*t)/(L*(1+2.4*(d/D0))*(1+3.3*(d/(2*H))))
    return eta
}
