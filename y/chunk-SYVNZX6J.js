import{d as k}from"./chunk-I2IZRYSD.js";import{h as I,i as w}from"./chunk-GQFFDRHF.js";import{$a as l,Ba as r,Na as f,Pa as y,Ua as o,Va as a,Wa as v,Xa as _,Ya as d,Za as x,_a as p,ab as C,ba as u,bb as m,gb as E,ka as h,la as g,xa as b}from"./chunk-UDMSPLU7.js";function W(s,n){if(s&1){let c=_();o(0,"button",8),d("click",function(){let e=h(c).$implicit,i=x();return g(i.guessLetter(e))}),l(1),a()}if(s&2){let c=n.$implicit;p("id","letter-",c,""),r(),m(" ",c," ")}}var F=(()=>{let n=class n{constructor(){this.alphabet=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],this.words=["espantar","conjunto","economicamente","reivindicacion","extremadamente","alargar","sesenta","arabe","tulipan","hijo","silla","harina","abeja","sol","mar","luna","monta\xF1a","amor","corazon","libro","tiempo","casa","noche","dia","amigo","playa","cielo","flor","agua","fuego","aire","tierra","verde","rojo","azul","amarillo","naranja","blanco","negro","gris","musica","arte","vida","muerte","familia","trabajo","viaje","sue\xF1o","esperanza"],this.word=this.getNewWord(),this.guessedLetters=[],this.rightWordsCounter=0,this.attempts=6}guessLetter(t){this.guessedLetters.push(t),this.word.includes(t)||this.attempts--;let e=document.getElementById("letter-"+t);e.style.visibility="hidden",this.attempts==0&&this.mostrarNotificacion()}getNewWord(){return this.words[Math.floor(Math.random()*this.words.length)].toUpperCase()}getDisplayWord(){let t="";for(let e of this.word)t+=this.guessedLetters.includes(e)?e:"_";if(!t.includes("_")){let e=document.getElementById("next");e.style.visibility="visible";let i=document.getElementById("alphabet-container");i.style.visibility="hidden"}return t}resetWord(){this.attempts=6,this.guessedLetters=[],this.word=this.getNewWord();let t=document.getElementById("alphabet-container");t.style.visibility="visible";for(let e=0;e<this.alphabet.length;e++){let i=document.getElementById("letter-"+this.alphabet[e]);i.style.visibility="visible"}}resetGame(){this.rightWordsCounter=0,this.resetWord()}mostrarNotificacion(){let t=document.querySelector(".notification");t.style.visibility="visible"}esconderNotificacion(){let t=document.querySelector(".notification");t.style.visibility="hidden",this.resetGame()}siguienteClick(){let t=document.getElementById("next");t.style.visibility="hidden",this.rightWordsCounter++,this.resetWord()}};n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=u({type:n,selectors:[["app-ahorcado"]],standalone:!0,features:[E],decls:13,vars:6,consts:[[1,"container","has-text-centered","mt-6"],["alt","Imagen",1,"life-image",3,"src"],[1,"title","is-2"],[1,"notification","is-danger","is-light","mt-4",2,"visibility","hidden"],[1,"delete",3,"click"],["id","next",1,"button","is-primary","mb-6",2,"visibility","hidden",3,"click"],["id","alphabet-container",1,"buttons"],["class","alphabet",3,"id","click",4,"ngFor","ngForOf"],[1,"alphabet",3,"click","id"]],template:function(e,i){e&1&&(o(0,"div",0),v(1,"img",1),o(2,"p",2),l(3),a(),o(4,"p"),l(5),a(),o(6,"div",3)(7,"button",4),d("click",function(){return i.esconderNotificacion()}),a(),l(8),a(),o(9,"button",5),d("click",function(){return i.siguienteClick()}),l(10,"SIGUIENTE"),a(),o(11,"div",6),f(12,W,2,3,"button",7),a()()),e&2&&(r(),p("src","../../../assets/",i.attempts,"-vida.jpg",b),r(2),C(i.getDisplayWord()),r(2),m("Vidas: ",i.attempts,""),r(3),m(" PERDISTE. Acertaste un total de ",i.rightWordsCounter," palabras. "),r(4),y("ngForOf",i.alphabet))},dependencies:[k,w,I],styles:[".alphabet[_ngcontent-%COMP%]{margin:5px;width:50px;height:50px;font-size:40px;background-color:#00f;border-radius:5px}.title[_ngcontent-%COMP%]{font-family:Arial,Helvetica,sans-serif;font-size:60px;letter-spacing:10px}.life-image[_ngcontent-%COMP%]{width:auto;height:400px}"]});let s=n;return s})();export{F as AhorcadoComponent};
