let btn=document.querySelectorAll(".div");
let win=document.querySelector("#para");
let newgame=document.querySelector("#new");
let resetbtn=document.querySelector("#reset");
let a=[[0,1,2],[3,4,5],[6,7,8],[0,4,8],[0,3,6],[1,4,7],[2,5,8],[2,4,6]];
let t=0;
btn.forEach(change);
function change(ele)
{
     ele.addEventListener('click',()=>{
         if(t===0)
            {
             ele.innerText="X";
                 t=1;
            }
         else
            {
             ele.innerText="O";
              t=0;
            }
        ele.disabled=true;
        for(let p of a)
        {
             if(btn[p[0]].innerText!=""&& btn[p[1]].innerText1!="" && btn[p[2]].innerText!="")
                {
                  if(btn[p[0]].innerText===btn[p[1]].innerText && btn[p[1]].innerText===btn[p[2]].innerText)
                    {
                       btn.forEach(disable)
                        if(t===1)
                          win.innerText="Winner is X";
                        else
                          win.innerText="Winner is O"; 
                         win.classList.remove("hide");  
                     }
        
                }
        }
    })
}
    newgame.addEventListener("click",reset);
    resetbtn.addEventListener("click",reset);
    function reset()
    {
        for(let b of btn)
            {
            b.disabled=false;
            b.innerText="";
            win.classList.add("hide");  
            }
    }
    
    function disable ()
    {
        for(let g of btn)
         g.disabled=true; 
    }

    
    


    
    
    

