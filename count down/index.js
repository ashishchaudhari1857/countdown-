const endDate ="5 April 2023 10:00 AM";
 
document.getElementById("endDate").innerHTML=endDate;
function clock(){
    const end= new Date(endDate)
    const now=new Date();
    const dif=(end-now)/1000;
    const input= document.querySelectorAll('input');
    // console.log(dif);
    // console.log(end);
    // console.log(now);
 var  days = Math.floor(dif/3600/24);
  input[0].value=days;
  input[1].value=Math.floor(dif/3600 %24);
  input[2].value=Math.floor(dif/60 %60);
  input[3].value=Math.floor(dif %60);

    // input[0].innerText=days;
}
clock();
setInterval(clock ,1000);
