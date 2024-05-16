import{c,e as I,f as N,j as U,m as A,n as D,t as T}from"./chunk-HWEWCRWD.js";import{d as v,e as w}from"./chunk-TVGYTR6V.js";import"./chunk-OZ7M4S3R.js";import{a as k,b as S,c as E,d as L}from"./chunk-I2IZRYSD.js";import"./chunk-GQFFDRHF.js";import{$a as r,Ba as d,Ca as u,Pa as x,Ua as o,Va as i,Wa as f,Ya as m,Z as C,ba as b,bb as y,cb as p,db as h,eb as _,gb as P,hb as O,ya as M}from"./chunk-UDMSPLU7.js";var R=()=>["/registrar"],Q=(()=>{let s=class s{constructor(t,e){this.router=t,this.firestore=e,this.localUserService=C(T),this.mail="",this.contrasenia="",this.notificacion=""}ngOnInit(){let t=this.localUserService.localUser;t!=null&&t!=null&&this.goToHome()}loguear(){if(this.mail!=""&&this.contrasenia!=""){let t=N();I(t,this.mail,this.contrasenia).then(e=>{let n=e.user;this.guardarUsuarioLogueado(n.email),this.goToHome()}).catch(e=>{let n=e.code,l=e.message;switch(n){case c.INVALID_EMAIL:this.mostrarNotificacion("Email inv\xE1lido.");break;case c.USER_DISABLED:this.mostrarNotificacion("Este usuario ha sido deshabilitado.");break;case c.USER_MISMATCH:this.mostrarNotificacion("Usuario no encontrado.");break;case c.INVALID_PASSWORD:this.mostrarNotificacion("Contrase\xF1a incorrecta.");break;case c.INVALID_LOGIN_CREDENTIALS:this.mostrarNotificacion("Usuario o contrase\xF1a incorrecta.");break;default:this.mostrarNotificacion("Ha ocurrido un error al registrar. Intente de nuevo mas tarde.");break}})}else this.mostrarNotificacion("Complete ambos campos")}guardarUsuarioLogueado(t){this.localUserService.setActualUser(t);let e=U(this.firestore,"logins");A(e,{fecha:new Date,user:t})}goToHome(){this.router.navigate(["/home"])}mostrarNotificacion(t){this.notificacion=t;let e=document.querySelector(".notification");e.style.visibility="visible"}esconderNotificacion(){this.notificacion="";let t=document.querySelector(".notification");t.style.visibility="hidden"}fastAccessClick(){this.mail="usuariodeprueba@laboratorioiv.com",this.contrasenia="12345678"}};s.\u0275fac=function(e){return new(e||s)(u(v),u(D))},s.\u0275cmp=b({type:s,selectors:[["app-login"]],standalone:!0,features:[P],decls:25,vars:5,consts:[["href",M`https://fonts.googleapis.com/css?family=Ubuntu:500`,"rel","stylesheet","type","text/css"],[1,"login"],[1,"login-form"],[1,"login-header"],["type","email","placeholder","Mail",3,"ngModelChange","ngModel"],["type","password","placeholder","Contrase\xF1a",3,"ngModelChange","ngModel"],[1,"flex-container-horizontal"],[1,"button","is-link","is-inverted",3,"click"],[1,"flex-container-vertical"],[1,"button","is-link",3,"click"],[1,"button","is-link","is-outlined","mt-2",3,"routerLink"],[1,"notification","is-danger","is-light",2,"visibility","hidden"],[1,"delete",3,"click"]],template:function(e,n){e&1&&(f(0,"link",0),o(1,"div",1)(2,"div",2)(3,"div",3)(4,"h1"),r(5,"Login"),i()(),o(6,"h3"),r(7,"Mail:"),i(),o(8,"input",4),_("ngModelChange",function(a){return h(n.mail,a)||(n.mail=a),a}),i(),f(9,"br"),o(10,"h3"),r(11,"Contrase\xF1a"),i(),o(12,"input",5),_("ngModelChange",function(a){return h(n.contrasenia,a)||(n.contrasenia=a),a}),i(),o(13,"div",6)(14,"div")(15,"button",7),m("click",function(){return n.fastAccessClick()}),r(16,"Acceso r\xE1pido"),i()(),o(17,"div",8)(18,"button",9),m("click",function(){return n.loguear()}),r(19,"Login"),i(),o(20,"button",10),r(21,"Registrate!"),i()()()(),o(22,"div",11)(23,"button",12),m("click",function(){return n.esconderNotificacion()}),i(),r(24),i()()),e&2&&(d(8),p("ngModel",n.mail),d(4),p("ngModel",n.contrasenia),d(8),x("routerLink",O(4,R)),d(4),y(" ",n.notificacion," "))},dependencies:[w,L,k,S,E],styles:["[_nghost-%COMP%]{margin:0;font-family:Ubuntu,sans-serif;background-size:100% 110%;width:10vw}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], a[_ngcontent-%COMP%]{margin:0;padding:0}.login[_ngcontent-%COMP%]{margin:0 auto;max-width:500px}.login-header[_ngcontent-%COMP%]{color:#fff;text-align:center;font-size:300%}.login-form[_ngcontent-%COMP%]{border:.5px solid #fff;background:#4facff;border-radius:10px;box-shadow:0 0 10px #000}.login-form[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{text-align:left;margin-left:40px;color:#fff}.login-form[_ngcontent-%COMP%]{box-sizing:border-box;padding-top:15px;padding-bottom:10%;margin:5% auto;text-align:center}.login[_ngcontent-%COMP%]   input[type=email][_ngcontent-%COMP%], .login[_ngcontent-%COMP%]   input[type=password][_ngcontent-%COMP%]{max-width:400px;width:80%;line-height:3em;font-family:Ubuntu,sans-serif;margin:1em 2em;border-radius:5px;border:2px solid #f2f2f2;outline:none;padding-left:10px}.login-form[_ngcontent-%COMP%]   input[type=button][_ngcontent-%COMP%]{height:30px;width:100px;background:#fff;border:1px solid #f2f2f2;border-radius:20px;color:#708090;text-transform:uppercase;font-family:Ubuntu,sans-serif;cursor:pointer}.flex-container-horizontal[_ngcontent-%COMP%]{max-width:400px;width:80%;margin:1em 2em;padding-left:30px;display:flex;flex-direction:row;align-content:flex-start;justify-content:space-between;flex-wrap:wrap}.flex-container-vertical[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-between}@media only screen and (min-width: 150px) and (max-width: 530px){.login-form[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{text-align:center;margin:0}.sign-up[_ngcontent-%COMP%], .no-access[_ngcontent-%COMP%]{margin:10px 0}.login-button[_ngcontent-%COMP%]{margin-bottom:10px}}"]});let g=s;return g})();export{Q as LoginComponent};
