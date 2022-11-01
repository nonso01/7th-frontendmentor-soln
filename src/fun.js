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
 this.number
}

Card.SPEED= 0.04
Card.MB= 600
Card.TB= 1000


Card.prototype={
 constructor: Card,
 mode: function(){
  
 },
 animate:function(){
  
 },
 resize:function(){
  
 },
 nomalize: function(){
  this.icons.forEach(e=>e.className="fx-column fx-evenly")
  
 }
 
}
let a = new Card()
a.nomalize()
