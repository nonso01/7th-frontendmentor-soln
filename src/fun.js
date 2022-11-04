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
 this.attr= dq(".attr")
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
  this.attr.onclick=(e)=>{
   confirm("will add light theme soon!")
  }
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
  
  // on purpose (^^)
 this.attr.style="width: 60px; height:60px; border-radius: var(--st-w); position:fixed; top: 10%; left: 70%; z-index: 5; background: url('/images/favicon-32x32.png') no-repeat var(--cn)/cover; box-shadow: 0 var(--rad) var(--fts) 1vmin hsla(0 100% 100% / .2); animation-name: goLeft;"
 
 this.attr.children[0].style="width: 230px; height: 180px; border-radius: var(--fts); position:fixed; top: 50%;left:50%; transform: translate(-50%,-50%); background-color: var(--v-d-b);"

 
 event(this.attr,"click",()=>{
  this.attr.children[0].classList.toggle("hide")
 })

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


/* -----   others ------- */


