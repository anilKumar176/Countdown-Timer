const endDate="26 August 2024 12:00 am"
document.getElementById("end-Date").innerText=endDate;
const inputs=document.querySelectorAll("input")
// there is the create the function
//const clock=()=>{
    //}
function clock(){
    const end=new Date(endDate)
    const now =new Date()
    const diff=(end-now)/1000;

    if(diff<0) return;
    //convert days
   inputs[0].value= Math.floor(diff/3600/24);//days
   //convert houres
   inputs[1].value=Math.floor(diff/3600)%24;//hours
   //convert mintues
   inputs[2].value=(Math.floor(diff/60)%60);//mintues
   //convert seconds
   inputs[3].value=(Math.floor(diff)%60);//seconds
    //days convert 
}
//initial call
clock();
/*1 day =24 hrs
1 hrs=60 min
60 min=3600 sec
*/
setInterval(() => {
    clock()
}, 
1000
);