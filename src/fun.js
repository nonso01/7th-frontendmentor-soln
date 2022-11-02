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





function Card(){
 this.logo= dq(".card__logo img")
 this.icons= dqA(".card__icon span")
 /*this.numberLeft= dq(".numLeft")
 this.numberUsed= dq(".numUsed")
 this.bar= dq(".card__bar span")*/
}

Card.SPEED= 0.04
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
  function f(){
   //let num=0
   num+=Card.SPEED
   Card.BAR.style.backgroundImage=`linear-gradient(${num.toPrecision(2) +"deg"},red,blue)`
   //todo
   csl(num)
   webkitRequestAnimationFrame(f)
  }
      event(window,"animationend",f)
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

