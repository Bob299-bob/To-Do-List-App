//To Remove Task From the TO DO LIST APP
let container=document.querySelector(".container");
container.addEventListener("click",(e)=>{
    let curr=e.target.dataset;
    let idName=curr.name;
    if(curr?.name){
    document.getElementById(idName).style.display="none";
    console.log(idName);
    }
});
//To Get Information About Tasks that are running .
container.addEventListener("click",(e)=>{
let curr1=e.target.dataset;
let idIn=curr1.in;
if(curr1?.in){
    let a=document.getElementById(idIn);
    let div=document.createElement("div");
    div.style.width="100px";
    div.style.height="50px";
    div.style.position="absolute";
    div.style.border="2px solid black";
    div.innerText="Task Information";
    div.style.backgroundColor="yellow";
    div.style.color="blue";
    a.appendChild(div);
  }
});
//To Add new task in a TO DO LIST APP(TASK MANAGER).
function add(){
    alert("Your Task is under Processing");
    setTimeout(()=>{
    let store=(document.getElementById("inp").value);
    console.log(store); 
    let div=document.createElement("div");
    div.style.display="block";
    div.style.padding="10px";
    div.style.margin="50px 0 0 150px";
    let btn1=document.createElement("button");
    div.appendChild(btn1);
    btn1.style.width="100px";
    btn1.innerText="Click";
    btn1.style.padding="10px";
    btn1.style.borderRadius="10px";
    btn1.style.border="1px";
    btn1.style.color="blue";
    btn1.style.cursor="pointer";
    let btn2=document.createElement("button");
    btn2.style.width="100px";
    btn2.innerText="Remove";
    btn2.style.backgroundColor="red";
    btn2.style.padding="10px";
    btn2.style.marginLeft="50px";
    btn2.style.borderRadius="10px";
    btn2.style.border="1px";
    btn2.style.color="white";
    console.log(btn2);
    div.appendChild(btn2);
    container.appendChild(div);
    btn2.style.cursor="pointer";
    btn2.dataset.name="five";  
    let ele=document.createElement("h2");
    ele.style.color="blue";
    ele.style.marginLeft="150px";
    container.appendChild(ele);
    ele.innerText=`Your New Task IS : ${store}`;
    btn2.onclick= function(){
    div.style.display="none";
    ele.style.display="none";
    }
    },2000);   
}

