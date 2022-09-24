
let inp = document.getElementById('input');
let btn = document.getElementById('btn');
let not= document.getElementById('not');
let allt=document.getElementById('allt');
// let toggle=document.getElementById('toggle');
let li=document.getElementById('link');
function addtask(){
    let data=inp.value;

if(data.trim()!= ''&& data.trim().length>=3 && data.trim().length<=20){
   
    allt.innerHTML += `<div class="alert alert-info t" id="t">
    ${data}
<button class="btn btn-danger del" style="float: right; margin:-7px"> Delete </button>
</div>`;
not.style.display="none";
}
else{
    window.alert("enter valid data")

}
inp.value=''; 
    
}




btn.addEventListener('click', addtask );

function check(){
    if(allt.childElementCount==0){
        not.style.display="block";

    }
}

document.addEventListener('click',(e)=>{
   if(e.target.classList.contains('del')){
 
    e.target.parentElement.remove() ;
   
}
check(); 



})
document.addEventListener('click',(e)=>{
    if(e.target.classList.contains('t')){
e.target.classList.toggle('checked');
    }
})

function change(){
if(li.href=='file:///H:/ssd/project3/css/dark.css' ){
    li.href='file:///H:/ssd/project3/css/light.css'
}
else{
    li.href='file:///H:/ssd/project3/css/dark.css'

}

}
toggle.addEventListener('click', change)


