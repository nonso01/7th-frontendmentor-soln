const csl=(x)=>console.log(x)
const dc=(x)=>document.createElement(x)
const dq=(x)=>document.querySelector(x)
const di=(x)=> document.getElementById(x)
const dqA=(x)=> document.querySelectorAll(x)

const html=dq("html")
const body= dq('body')


function interval(f,time){
const interval= setInterval(f,time)
}

function timeOut(f,time){
 const timeOut= setTimeout(f,time)
}

function event(e,t,f){
 const event= e.addEventListener(t,f)
}

function rmEvent(e,t,f){
 const remove= e.removeEventListener(t,f)
}
function p(a,b){
 return ((a/b)*100)
}




function Card(){
 this.logo= dq(".card__logo img")
 this.icons= dqA(".card__icon span")
}

Card.SPEED= 0.05
Card.MB= 600
Card.TB= 1000
Card.USED= dq(".numUsed")
Card.LEFT= dq(".numLeft")
Card.BAR= dq(".card__bar span")

Card.prototype={
 constructor: Card,
 mode: function(){
  
 },
 animate:function(){
  let num=0
  function _fbar(){
    let frame= webkitRequestAnimationFrame(_fbar)

   num+=Card.SPEED
   let _num= p(num.toFixed(2),Card.TB)
   
   Card.BAR.style=`--a: ${_num +"%"}; --b: ${(_num-=2)+"%"}`

  if(num>=Card.TB){
   num=Card.TB
   cancelAnimationFrame(frame)
    }
  }
      event(window,"animationend",_fbar)
    
    function _fnum(){
    let frame= webkitRequestAnimationFrame(_fnum)
     num+=Card.SPEED
     let _num=num.toFixed(1)
     
     Card.LEFT.textContent=(Card.TB - _num).toFixed(1)
    Card.USED.textContent=_num
    
    if(num>=Card.TB){
     num=Card.TB-0.2
     cancelAnimationFrame(frame)
      }
    }
    event(window,"animationend",_fnum)
 },
 resize:function(){
  let c= Card
  f()
  function f(){
   let W= window.innerWidth
   
   if(W>c.MB && W<=c.TB) html.id="tb"
   else if(W<=c.MB) html.id="mb"
   else if(W>c.TB) html.id=""
   else console.error("err")
   
   csl(W)
   
  }
  event(window,"resize",f)
 
 },
 nomalize: function(){
  this.icons.forEach(e=>e.className="fx-column fx-evenly")
 
 }
 
}


const method= Card.prototype

for(let prop in method){
 method[prop]()
}

event(dq(".card"),"pointerover",(e)=>{
 e.preventDefault()
  e.target.classList.add("trans")
 e.target.classList.add("point")
 
 timeOut(()=>e.target.classList.remove("point"),500)
})
