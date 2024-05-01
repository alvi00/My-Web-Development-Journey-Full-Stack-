let input=document.querySelector("input");
let button=document.querySelector(".add");
let button_remove=document.querySelector(".remove");
let delete_all=document.querySelector(".delete_all");
let ul=document.querySelector("ul");
let alvi=function(event){
    if(event.code=="Enter"){
        console.log(input.value);
    }
}

input.addEventListener("keydown",alvi);

button.addEventListener("click",function(){
    if(input.value==""){
        input.placeholder="Give again";
    }else{
        let alvi=document.createElement("li");
        ul.appendChild(alvi);
        alvi.innerText=input.value;
        input.value="";
        console.log(input.value);
    }
   
});

button_remove.addEventListener("click",function(){
    let anas=document.querySelectorAll("li");
    let count=0;
    for(let i=0;i<anas.length;i++){
        count++;
    }
    ul.removeChild(anas[count-1]);
});


delete_all.addEventListener("click",function(){
    let anas=document.querySelectorAll("li");
    for(lis of anas){
        lis.remove();
    }
   
});
