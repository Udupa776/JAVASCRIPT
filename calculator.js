 const nums=document.querySelectorAll(".num");
 let para1=document.querySelector("#para1");
 let para2=document.querySelector("#para2");
 let clear=document.querySelector(".clear");
let opr=document.querySelectorAll(".ops");
let eql=document.querySelector("#eql");


 nums.forEach(chang);
 opr.forEach(chang);
 function chang(num)
   {
      num.addEventListener("click",()=>
      {
    para1.innerText=para1.innerText+num.innerText; 
    para2.innerText="";

      })
  
   }
eql.addEventListener('click',()=>
  {
  const exp=para1.innerText;
  const result = new Function(`return ${exp}`)();
  para2.innerText=result;
  para1.innerText="";
  })
  
 
 clear.addEventListener("click",()=>
  {
  para1.innerText=para2.innerText=""; 
  });
