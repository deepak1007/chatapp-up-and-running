(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"bS+g":function(n,e,t){"use strict";t.r(e),t.d(e,"HomemoduleModule",(function(){return E}));var o=t("ofXK"),i=t("tyNb"),r=t("XNiG"),a=t("1G5W"),s=t("fXoL"),l=t("tk/3"),c=t("R7Hv"),d=t("Ebwu"),g=t("3Pt+");function b(n,e){1&n&&(s.Pb(0,"span",24),s.tc(1," *please enter valid name"),s.Ob())}function p(n,e){1&n&&(s.Pb(0,"span",24),s.tc(1," *please enter valid email"),s.Ob())}function h(n,e){1&n&&(s.Pb(0,"span",24),s.tc(1," *please enter valid Phone number"),s.Ob())}function m(n,e){1&n&&(s.Pb(0,"span",25),s.tc(1," *please write a query"),s.Ob())}let u=(()=>{class n{constructor(n,e,t){this.httpc=n,this.ds=e,this.ss=t,this.httpURL="https://chatep.azurewebsites.net/",this.unsubscriber$=new r.a}ngOnInit(){this.ds.spinnerControl("show"),window.innerWidth<=600&&(document.getElementsByClassName("second-header")[0].style.display="none"),this.ds.spinnerControl("hide")}sendQuery(){this.ds.spinnerControl("show"),this.httpc.post(this.httpURL+"query",{fullName:this.fullName,userEmail:this.userEmail,phone:this.phone,userQuery:this.userQuery}).pipe(Object(a.a)(this.unsubscriber$)).subscribe(n=>{1==n.status?(alert("Query has been submitted"),this.fullName="",this.userQuery="",this.userEmail="",this.phone="",this.ds.spinnerControl("hide")):(this.ds.spinnerControl("hide"),alert("Sorry Query was not submitted, Please try again"))})}ngOnDestroy(){this.ss.headToggle(!1),this.unsubscriber$.next(),this.unsubscriber$.complete()}}return n.\u0275fac=function(e){return new(e||n)(s.Kb(l.a),s.Kb(c.a),s.Kb(d.a))},n.\u0275cmp=s.Eb({type:n,selectors:[["app-contact-us"]],decls:37,vars:9,consts:[[1,"container-fluid"],[1,"row"],[1,"col-12"],[1,"form-container"],[1,"text-center","mt-sm-3"],["action","",3,"ngSubmit"],["contactForm","ngForm"],[1,"form-group"],["for","name",1,"form-label"],["class","error ml-2",4,"ngIf"],["type","text","name","name","placeholder","ex. Ravi singh","pattern","[a-z\\sA-Z]+","required","","id","","ngModel","",1,"form-control",3,"ngModel","ngModelChange"],["name","ngModel"],["for","email",1,"form-label"],["type","email","name","email","placeholder","ex:ravi123@gmail.com","pattern","[a-zA-Z0-9.]+@[a-zA-Z]+\\.[a-zA-Z]+","required","","email","","id","","ngModel","",1,"form-control",3,"ngModel","ngModelChange"],["email","ngModel"],["for","phone_no",1,"form-label"],["type","text","name","phone_no","placeholder","ex: 9968901231","pattern","[0-9+]+","minlength","10","maxlength","13","required","","id","","ngModel","",1,"form-control",3,"ngModel","ngModelChange"],["phone_no","ngModel"],["for","query",1,"form-label"],["class","error",4,"ngIf"],["name","query","id","","cols","30","rows","6","placeholder","how to register an account?","required","","ngModel","",1,"form-control",3,"ngModel","ngModelChange"],["query","ngModel"],[2,"text-align","center"],["type","submit",1,"btn","btn-success","send-btn","py-2","px-5",3,"disabled"],[1,"error","ml-2"],[1,"error"]],template:function(n,e){if(1&n&&(s.Pb(0,"div",0),s.Pb(1,"div",1),s.Pb(2,"div",2),s.Pb(3,"div",3),s.Pb(4,"h2",4),s.Pb(5,"small"),s.tc(6,"contact us"),s.Ob(),s.Ob(),s.Lb(7,"hr"),s.Pb(8,"form",5,6),s.Xb("ngSubmit",(function(){return e.sendQuery()})),s.Pb(10,"div",7),s.Pb(11,"label",8),s.tc(12,"Name:"),s.Ob(),s.sc(13,b,2,0,"span",9),s.Pb(14,"input",10,11),s.Xb("ngModelChange",(function(n){return e.fullName=n})),s.Ob(),s.Ob(),s.Pb(16,"div",7),s.Pb(17,"label",12),s.tc(18,"Email:"),s.Ob(),s.sc(19,p,2,0,"span",9),s.Pb(20,"input",13,14),s.Xb("ngModelChange",(function(n){return e.userEmail=n})),s.Ob(),s.Ob(),s.Pb(22,"div",7),s.Pb(23,"label",15),s.tc(24,"Phone:"),s.Ob(),s.sc(25,h,2,0,"span",9),s.Pb(26,"input",16,17),s.Xb("ngModelChange",(function(n){return e.phone=n})),s.Ob(),s.Ob(),s.Pb(28,"div",7),s.Pb(29,"label",18),s.tc(30,"Query:"),s.Ob(),s.sc(31,m,2,0,"span",19),s.Pb(32,"textarea",20,21),s.Xb("ngModelChange",(function(n){return e.userQuery=n})),s.Ob(),s.Ob(),s.Pb(34,"div",22),s.Pb(35,"button",23),s.tc(36,"Send"),s.Ob(),s.Ob(),s.Ob(),s.Ob(),s.Ob(),s.Ob(),s.Ob()),2&n){const n=s.lc(9),t=s.lc(15),o=s.lc(21),i=s.lc(27),r=s.lc(33);s.zb(13),s.gc("ngIf",t.invalid&&t.touched),s.zb(1),s.gc("ngModel",e.fullName),s.zb(5),s.gc("ngIf",o.invalid&&o.touched),s.zb(1),s.gc("ngModel",e.userEmail),s.zb(5),s.gc("ngIf",i.invalid&&i.touched),s.zb(1),s.gc("ngModel",e.phone),s.zb(5),s.gc("ngIf",r.invalid&&r.touched),s.zb(1),s.gc("ngModel",e.userQuery),s.zb(3),s.gc("disabled",n.invalid)}},directives:[g.n,g.g,g.h,o.j,g.a,g.k,g.l,g.f,g.i,g.b,g.e,g.d],styles:["*[_ngcontent-%COMP%]{box-sizing:border-box}.container-fluid[_ngcontent-%COMP%]{background:url(5267.10fe5bf138ef6b968654.jpg);background-size:contain;background-repeat:no-repeat;background-position:100%}@-webkit-keyframes bganimate{0%{background-position-x:center}to{background-position:100%}}@keyframes bganimate{0%{background-position-x:center}to{background-position:100%}}.row[_ngcontent-%COMP%]{height:82vh;opacity:1}.form-container[_ngcontent-%COMP%]{background:hsla(0,0%,100%,.95);width:40%;margin:20px;padding:5px 20px}.error[_ngcontent-%COMP%]{color:red}input.ng-valid[_ngcontent-%COMP%]{border-left:2px solid green}input.ng-invalid[_ngcontent-%COMP%]{border-left:2px solid red}.form-control[_ngcontent-%COMP%]{letter-spacing:1px;font-size:15px;padding:7px 10px;border-radius:5px;background:#f5f5f5}.form-label[_ngcontent-%COMP%]{font-size:18px}.form-label[_ngcontent-%COMP%], h2[_ngcontent-%COMP%]{letter-spacing:2px}h2[_ngcontent-%COMP%]{font-weight:bolder;text-shadow:2px 2px 4px rgba(0,0,0,.3)}.send-btn[_ngcontent-%COMP%]{letter-spacing:1px}@media screen and (max-width:1200px){.container-fluid[_ngcontent-%COMP%]{background-attachment:fixed;background-size:cover;background-position:50%}.row[_ngcontent-%COMP%]{min-height:92vh}.form-container[_ngcontent-%COMP%]{width:60%;letter-spacing:3px;font-size:20px;margin:20px auto}.error[_ngcontent-%COMP%]{font-size:16px}}@media screen and (max-width:800px){.form-container[_ngcontent-%COMP%]{width:80%;background:hsla(0,0%,100%,.9);height:100%}}@media screen and (max-width:600px){.form-container[_ngcontent-%COMP%]{width:100%}.container-fluid[_ngcontent-%COMP%]{height:100%;padding:0}.row[_ngcontent-%COMP%]{min-height:92vh;overflow-y:hidden;height:unset}h2[_ngcontent-%COMP%]{margin-top:70px}}"]}),n})(),f=(()=>{class n{constructor(n,e){this.ds=n,this.ss=e,this.scroll_string_to_no={"0px":0,"100%":100,"200%":200,"300%":300,"50%":50,"150%":150,"250%":250,"-300%":-300,"-200%":-200,"-100%":-100,"-250%":-250,"-150%":-150,"-50%":-50},this.scroll_no_to_string={0:"0",100:"100%",200:"200%",300:"300%",50:"50%",150:"150%",250:"250%","-300":"-300%","-200":"-200%","-100":"-100%","-250":"-250%","-150":"-150%","-50":"-50%"}}ngOnInit(){this.ds.spinnerControl("show"),window.innerWidth<=600&&(document.getElementsByClassName("second-header")[0].style.display="none"),this.inner=document.getElementById("animate"),this.inner.style.left="0px",window.addEventListener("wheel",n=>{window.innerWidth>600&&(n.deltaY<0?"0px"!=this.inner.style.left&&(this.inner.style.left=this.scroll_no_to_string[this.scroll_string_to_no[this.inner.style.left]+100]):n.deltaY>0&&"-300%"!=this.inner.style.left&&(this.inner.style.left=this.scroll_no_to_string[this.scroll_string_to_no[this.inner.style.left]-100]))}),this.ds.spinnerControl("hide")}ngOnDestroy(){this.ss.headToggle(!1)}}return n.\u0275fac=function(e){return new(e||n)(s.Kb(c.a),s.Kb(d.a))},n.\u0275cmp=s.Eb({type:n,selectors:[["app-home"]],decls:47,vars:0,consts:[[1,"container-fluid"],[1,"row"],[1,"col-12"],[1,"outer"],["id","animate",1,"inner"],[1,"flexed-element-container"],[1,"text","col-12","col-md-6"],[1,"justify-center"],["routerLink","/dashboardmodule",1,"btn","btn-dark","mb-3",2,"animation-duration","3s"],[1,"pic","col-12","col-md-6"],["src","..\\..\\assets\\undraw_friends_online_klj6.png","alt",""],[1,"text","col-12","order-md-2","col-md-6"],[1,"pic","col-12","order-md-1","col-md-6"],["src","..\\..\\assets\\undraw_shared_goals_3d12.png","alt","representation of two people having same interest "],["src"," ..\\..\\assets\\undraw_online_connection_6778.png","alt","representation of two people having online conversation "],[1,"text","col-12","order-md-2","col-md-6","mb-3"],["routerLink","/login",1,"btn","border-success","px-4","mr-2"],["routerLink","/sign-up",1,"btn","btn-dark","px-3"],["src"," ..\\..\\assets\\undraw_ideas_s70l.png","id","piclast","alt","representation of human thinking"]],template:function(n,e){1&n&&(s.Pb(0,"div",0),s.Pb(1,"div",1),s.Pb(2,"div",2),s.Pb(3,"div",3),s.Pb(4,"div",4),s.Pb(5,"div",5),s.Pb(6,"div",6),s.Pb(7,"h3"),s.Pb(8,"small"),s.tc(9,"Welcome to Chatapp"),s.Ob(),s.Ob(),s.Pb(10,"p",7),s.tc(11," A place to chat with strangers, make friends. Join random chat rooms and or create a public or private chat room. "),s.Ob(),s.Pb(12,"div",8),s.tc(13,"Enter chat room"),s.Ob(),s.Ob(),s.Pb(14,"div",9),s.Lb(15,"img",10),s.Ob(),s.Ob(),s.Pb(16,"div",5),s.Pb(17,"div",11),s.Pb(18,"h3"),s.Pb(19,"small"),s.tc(20,"Find Someone who has the same interest as you"),s.Ob(),s.Ob(),s.Pb(21,"p",7),s.tc(22,"have a one to one chat with strangers who have same interest as you."),s.Ob(),s.Ob(),s.Pb(23,"div",12),s.Lb(24,"img",13),s.Ob(),s.Ob(),s.Pb(25,"div",5),s.Pb(26,"div",6),s.Pb(27,"h3"),s.Pb(28,"small"),s.tc(29,"Chat with strangers or friends online"),s.Ob(),s.Ob(),s.Pb(30,"p",7),s.tc(31,"talk to random person or have a private chat with your friends"),s.Ob(),s.Ob(),s.Pb(32,"div",9),s.Lb(33,"img",14),s.Ob(),s.Ob(),s.Pb(34,"div",5),s.Pb(35,"div",15),s.Pb(36,"h3"),s.Pb(37,"small"),s.tc(38,"Register to Start conversations"),s.Ob(),s.Ob(),s.Pb(39,"p",7),s.tc(40,"click on Login to enter the chat dashboard or sign up button to register an account."),s.Ob(),s.Pb(41,"div",16),s.tc(42," login "),s.Ob(),s.Pb(43,"div",17),s.tc(44," Sign up"),s.Ob(),s.Ob(),s.Pb(45,"div",12),s.Lb(46,"img",18),s.Ob(),s.Ob(),s.Ob(),s.Ob(),s.Ob(),s.Ob(),s.Ob())},directives:[i.f],styles:["*[_ngcontent-%COMP%]{overflow-x:hidden;box-sizing:border-box}@media screen and (min-width:600px){.container-fluid[_ngcontent-%COMP%]{height:100%;padding:0;position:relative}.row[_ngcontent-%COMP%]{height:100%!important;padding:0}.text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{overflow-y:hidden;font-size:35px;margin-bottom:10px;letter-spacing:2px}.text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{letter-spacing:1px}.outer[_ngcontent-%COMP%]{width:100%;height:100%;margin:0;background:#fff;position:relative}.inner[_ngcontent-%COMP%]{box-sizing:border-box;height:100%;width:400%;padding:10px 0;display:flex;position:absolute;transition:.8s;filter:blur(0);-webkit-filter:blur(0)}.scroll-notify-left[_ngcontent-%COMP%]{left:20px}.scroll-notify-left[_ngcontent-%COMP%], .scroll-notify-right[_ngcontent-%COMP%]{position:absolute;z-index:1000;bottom:10px;font-weight:bolder;letter-spacing:2px}.scroll-notify-right[_ngcontent-%COMP%]{right:20px}@-webkit-keyframes slider{0%{left:0}25%{left:0}26%{left:-100%}50%{left:-100%}51%{left:-200%}75%{left:-200%}76%{left:-300%}to{left:-300%}}@keyframes slider{0%{left:0}25%{left:0}26%{left:-100%}50%{left:-100%}51%{left:-200%}75%{left:-200%}76%{left:-300%}to{left:-300%}}.inner[_ngcontent-%COMP%]   .flexed-element-container[_ngcontent-%COMP%]{height:100%;width:100%;display:flex;flex-direction:row;align-items:center;position:-webkit-sticky;position:sticky;left:0}.inner[_ngcontent-%COMP%]   .flexed-element-container[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{padding:0 20px!important}.inner[_ngcontent-%COMP%]   .flexed-element-container[_ngcontent-%COMP%]   .pic[_ngcontent-%COMP%]{height:100%;width:100%;display:flex;align-items:center}.inner[_ngcontent-%COMP%]   .flexed-element-container[_ngcontent-%COMP%]   .pic[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%}@-webkit-keyframes float{0%{transform:translateY(0)}25%{transform:translateY(5px)}50%{transform:translateY(-5px)}75%{transform:translateY(-5px)}}@keyframes float{0%{transform:translateY(0)}25%{transform:translateY(5px)}50%{transform:translateY(-5px)}75%{transform:translateY(-5px)}}#piclast[_ngcontent-%COMP%]{width:90%}}@media screen and (max-width:600px){.container-fluid[_ngcontent-%COMP%]{width:100%;padding:0;background:#f5f5f5}.row[_ngcontent-%COMP%]{min-height:100vh}.inner[_ngcontent-%COMP%], .row[_ngcontent-%COMP%]{height:unset}.inner[_ngcontent-%COMP%]{display:block;min-height:90vh;width:100%;-webkit-animation:none;animation:none}.scroll-notify-left[_ngcontent-%COMP%], .scroll-notify-right[_ngcontent-%COMP%]{display:none}.inner[_ngcontent-%COMP%]   .flexed-element-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-evenly;height:unset;min-height:90vh}.inner[_ngcontent-%COMP%]   .flexed-element-container[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{padding:0 20px!important;height:40vh;order:2}.text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{overflow:hidden;overflow-y:hidden;margin-bottom:20px;font-weight:800}.text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{letter-spacing:1px;text-align:justify}.inner[_ngcontent-%COMP%]   .flexed-element-container[_ngcontent-%COMP%]   .pic[_ngcontent-%COMP%]{display:block;width:100%;height:35vh;order:1;padding:0}.inner[_ngcontent-%COMP%]   .flexed-element-container[_ngcontent-%COMP%]   .pic[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;-webkit-animation:none;animation:none}.btn[_ngcontent-%COMP%]{width:100%!important;margin-top:5px}}"]}),n})();function P(n,e){1&n&&(s.Pb(0,"span",19),s.tc(1," *please enter valid email"),s.Ob())}function O(n,e){1&n&&(s.Pb(0,"span",19),s.tc(1," *Please enter password "),s.Ob())}let x=(()=>{class n{constructor(n,e,t){this.ds=n,this.route=e,this.ss=t,this.unsubscriber$=new r.a}ngOnInit(){this.ds.spinnerControl("show"),window.innerWidth<=600&&(document.getElementsByClassName("second-header")[0].style.display="none"),this.ds.spinnerControl("hide")}onLogin(){this.ds.spinnerControl("show"),this.ds.login({email:this.valueemail,password:this.valuepassword}).pipe(Object(a.a)(this.unsubscriber$)).subscribe(n=>{1==n.status?(localStorage.setItem("email",n.data.email),localStorage.setItem("userUniqueId",n.data.uniqueUserId),this.ds.filldetails({FullName:n.data.FullName,email:n.data.email,password:n.data.password,about:n.data.about,gender:n.data.gender}),this.route.navigate(["/dashboardmodule"]),this.ds.spinnerControl("hide")):(this.ds.spinnerControl("hide"),alert(n.data.err))},n=>{this.ds.spinnerControl("hide"),alert("sorry some error has occured")})}ngOnDestroy(){this.ss.headToggle(!1),this.unsubscriber$.next(),this.unsubscriber$.complete()}}return n.\u0275fac=function(e){return new(e||n)(s.Kb(c.a),s.Kb(i.e),s.Kb(d.a))},n.\u0275cmp=s.Eb({type:n,selectors:[["app-login"]],decls:24,vars:5,consts:[[1,"container-fluid"],[1,"row"],[1,"col-md-6","login-box"],[1,"login-form-container","order-2","order-md-1"],[1,"text-center","heading"],[1,"form",3,"ngSubmit"],["loginform","ngForm"],[1,"form-group"],["for","email",1,"form-label"],["type","text","pattern","[a-zA-Z0-9.]+@[a-zA-Z]+\\.[a-zA-Z]+","required","","email","","placeholder","enter email","name","email","ngModel","",1,"form-control",3,"ngModel","ngModelChange"],["email","ngModel"],["class","error",4,"ngIf"],["for","password",1,"form-label"],["type","password","required","","placeholder","enter Password","name","password","ngModel","",1,"form-control",3,"ngModel","ngModelChange"],["password","ngModel"],["type","submit",1,"btn","btn-dark","text-white","mt-3","py-md-2","px-lg-5","px-4",3,"disabled"],[1,"col-md-6","order-1","order-md-2","picturebox"],[1,"img"],["src","..\\..\\assets\\undraw_secure_login_pdn4.png","alt","computer and servers that represents unlock and lock"],[1,"error"]],template:function(n,e){if(1&n&&(s.Pb(0,"div",0),s.Pb(1,"div",1),s.Pb(2,"div",2),s.Pb(3,"div",3),s.Pb(4,"h2",4),s.Pb(5,"small"),s.tc(6,"Login Please!"),s.Ob(),s.Ob(),s.Pb(7,"form",5,6),s.Xb("ngSubmit",(function(){return e.onLogin()})),s.Pb(9,"div",7),s.Lb(10,"label",8),s.Pb(11,"input",9,10),s.Xb("ngModelChange",(function(n){return e.valueemail=n})),s.Ob(),s.sc(13,P,2,0,"span",11),s.Ob(),s.Pb(14,"div",7),s.Lb(15,"label",12),s.Pb(16,"input",13,14),s.Xb("ngModelChange",(function(n){return e.valuepassword=n})),s.Ob(),s.sc(18,O,2,0,"span",11),s.Ob(),s.Pb(19,"button",15),s.tc(20,"Login"),s.Ob(),s.Ob(),s.Ob(),s.Ob(),s.Pb(21,"div",16),s.Pb(22,"div",17),s.Lb(23,"img",18),s.Ob(),s.Ob(),s.Ob(),s.Ob()),2&n){const n=s.lc(8),t=s.lc(12),o=s.lc(17);s.zb(11),s.gc("ngModel",e.valueemail),s.zb(2),s.gc("ngIf",t.invalid&&t.touched),s.zb(3),s.gc("ngModel",e.valuepassword),s.zb(2),s.gc("ngIf",o.invalid&&o.touched),s.zb(1),s.gc("disabled",n.invalid)}},directives:[g.n,g.g,g.h,g.a,g.k,g.l,g.b,g.f,g.i,o.j],styles:[".error[_ngcontent-%COMP%]{color:red}input.ng-valid[_ngcontent-%COMP%]{border-left:3px solid green}input.ng-invalid[_ngcontent-%COMP%]{border-left:3px solid red}.container-fluid[_ngcontent-%COMP%]{background:#fff}.row[_ngcontent-%COMP%]{height:82vh;padding:0;overflow:hidden}.login-box[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;height:100%}.login-form-container[_ngcontent-%COMP%]{width:80%;background:hsla(0,0%,100%,.4);text-align:center;padding:40px 30px;border-radius:10px;border-top:3px solid #f5f5f5;border-left:3px solid #f5f5f5;box-shadow:5px 5px 9px rgba(0,0,0,.1);transform:scale(.98)}.form-label[_ngcontent-%COMP%]{padding:0}.form-group[_ngcontent-%COMP%]{margin:0;padding:0}.heading[_ngcontent-%COMP%]{letter-spacing:2px}.picturebox[_ngcontent-%COMP%]{height:100%;padding:0;display:flex;align-items:center}.picturebox[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]{overflow-y:hidden}.picturebox[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;position:relative;-webkit-animation:float 4s ease-in-out infinite;animation:float 4s ease-in-out infinite}@-webkit-keyframes float{0%{transform:translateY(0)}25%{transform:translateY(5px)}50%{transform:translateY(-5px)}75%{transform:translateY(-5px)}}@keyframes float{0%{transform:translateY(0)}25%{transform:translateY(5px)}50%{transform:translateY(-5px)}75%{transform:translateY(-5px)}}input[_ngcontent-%COMP%]{padding:3px 10px;font-size:19px;letter-spacing:1px}button[_ngcontent-%COMP%]{letter-spacing:4px;font-size:18px}h2[_ngcontent-%COMP%]{letter-spacing:2px;font-size:45px;font-weight:400;text-shadow:3px 3px 4px rgba(0,0,0,.2)}@media screen and (max-width:600px){.login-form-container[_ngcontent-%COMP%]{width:90%}.row[_ngcontent-%COMP%]{height:unset;min-height:90vh}.login-box[_ngcontent-%COMP%]{padding:10px 0;height:100%;order:1!important}.login-form-container[_ngcontent-%COMP%]{margin-left:0;margin-right:0;border:none;box-shadow:none;width:100%}.form-control[_ngcontent-%COMP%]{width:100%;border-radius:5px}.picturebox[_ngcontent-%COMP%]{margin-top:50px;order:0!important;position:relative;left:-20px}.picturebox[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{-webkit-animation:none;animation:none}}"]}),n})();var M=t("kIXe");function C(n,e){1&n&&(s.Pb(0,"span",28),s.tc(1," *please enter valid name"),s.Ob())}function v(n,e){1&n&&(s.Pb(0,"span",28),s.tc(1," *please enter valid last name"),s.Ob())}function w(n,e){1&n&&(s.Pb(0,"span",28),s.tc(1," *please enter valid email"),s.Ob())}function _(n,e){1&n&&(s.Pb(0,"span",28),s.tc(1," *Please enter password between 8 to 15 characters"),s.Ob())}function y(n,e){1&n&&(s.Pb(0,"span",28),s.tc(1," *password did not match "),s.Ob())}let k=(()=>{class n{constructor(n,e,t){this.ds=n,this.router=e,this.ss=t,this.unsubscriber$=new r.a}ngOnInit(){this.ds.spinnerControl("show"),window.innerWidth<=600&&(document.getElementsByClassName("second-header")[0].style.display="none"),this.ds.spinnerControl("hide")}onSignup(){this.ds.spinnerControl("show"),this.ds.signup({firstname:this.valuefirstName,lastname:this.valuelastName,email:this.valueemail,password:this.valuepassword,about:"",gender:""}).pipe(Object(a.a)(this.unsubscriber$)).subscribe(n=>{1==n.status?(this.ds.spinnerControl("hide"),alert("We have sent you an email with the verification link, please verify your account"),this.router.navigate(["/login"])):(this.ds.spinnerControl("hide"),alert(n.data.err))},n=>{this.ds.spinnerControl("hide"),alert("some problem has occured please try again")})}ngOnDestroy(){this.ss.headToggle(!1),this.unsubscriber$.next(),this.unsubscriber$.complete()}}return n.\u0275fac=function(e){return new(e||n)(s.Kb(c.a),s.Kb(i.e),s.Kb(d.a))},n.\u0275cmp=s.Eb({type:n,selectors:[["app-signup"]],decls:39,vars:11,consts:[[1,"container-fluid"],[1,"row"],[1,"col-md-6","order-2","order-md-1","picturebox"],[1,"img"],["src","..\\..\\assets\\undraw_sign_in_e6hj.png","alt","computer and servers that represents unlock and lock"],[1,"col-md-6","order-1","order-md-2","signup-box"],[1,"signup-form-container"],[1,"text-center","py-1","my-3"],[1,"form",3,"ngSubmit"],["signupform","ngForm"],[1,"form-group"],["for","firstName",1,"form-label"],["type","text","pattern","[a-zA-Z]+","required","","placeholder","enter your first name(ex:Rahul)","name","firstName","ngModel","",1,"form-control",3,"ngModel","ngModelChange"],["firstName","ngModel"],["class","error",4,"ngIf"],["for","lastName",1,"form-label"],["type","text","pattern","[a-zA-Z]+","required","","placeholder","enter your last name(ex:sharma)","name","lastName","ngModel","",1,"form-control",3,"ngModel","ngModelChange"],["lastName","ngModel"],["for","email",1,"form-label"],["type","text","pattern","[a-zA-Z0-9.]+@[a-zA-Z]+\\.[a-zA-Z]+","required","","email","","placeholder","enter email","name","email","ngModel","",1,"form-control",3,"ngModel","ngModelChange"],["email","ngModel"],["for","password",1,"form-label"],["type","password","required","","placeholder","enter Password","minlength","8","maxlength","15","name","password","ngModel","",1,"form-control",3,"ngModel","ngModelChange"],["password","ngModel"],["for","confirmPassword",1,"form-label"],["type","password","required","","placeholder","Confirm Password","minlength","8","maxlength","15","name","confirmPassword","ngModel","",1,"form-control",3,"ngModel","ngModelChange"],["confirmPassword","ngModel"],["type","submit",1,"btn","btn-dark","text-white","my-3","py-md-2","px-lg-5","px-2",3,"disabled"],[1,"error"]],template:function(n,e){if(1&n&&(s.Pb(0,"div",0),s.Pb(1,"div",1),s.Pb(2,"div",2),s.Pb(3,"div",3),s.Lb(4,"img",4),s.Ob(),s.Ob(),s.Pb(5,"div",5),s.Pb(6,"div",6),s.Pb(7,"h2",7),s.Pb(8,"small"),s.tc(9,"Make Your Account"),s.Ob(),s.Ob(),s.Pb(10,"form",8,9),s.Xb("ngSubmit",(function(){return e.onSignup()})),s.Pb(12,"div",10),s.Pb(13,"label",11),s.Pb(14,"input",12,13),s.Xb("ngModelChange",(function(n){return e.valuefirstName=n})),s.Ob(),s.Ob(),s.sc(16,C,2,0,"span",14),s.Ob(),s.Pb(17,"div",10),s.Pb(18,"label",15),s.Pb(19,"input",16,17),s.Xb("ngModelChange",(function(n){return e.valuelastName=n})),s.Ob(),s.Ob(),s.sc(21,v,2,0,"span",14),s.Ob(),s.Pb(22,"div",10),s.Pb(23,"label",18),s.Pb(24,"input",19,20),s.Xb("ngModelChange",(function(n){return e.valueemail=n})),s.Ob(),s.Ob(),s.sc(26,w,2,0,"span",14),s.Ob(),s.Pb(27,"div",10),s.Pb(28,"label",21),s.Pb(29,"input",22,23),s.Xb("ngModelChange",(function(n){return e.valuepassword=n})),s.Ob(),s.Ob(),s.sc(31,_,2,0,"span",14),s.Ob(),s.Pb(32,"div",10),s.Pb(33,"label",24),s.Pb(34,"input",25,26),s.Xb("ngModelChange",(function(n){return e.valueconfirmPassword=n})),s.Ob(),s.Ob(),s.sc(36,y,2,0,"span",14),s.Ob(),s.Pb(37,"button",27),s.tc(38,"signup"),s.Ob(),s.Ob(),s.Ob(),s.Ob(),s.Ob(),s.Ob()),2&n){const n=s.lc(11),t=s.lc(15),o=s.lc(20),i=s.lc(25),r=s.lc(30),a=s.lc(35);s.zb(14),s.gc("ngModel",e.valuefirstName),s.zb(2),s.gc("ngIf",t.invalid&&t.touched),s.zb(3),s.gc("ngModel",e.valuelastName),s.zb(2),s.gc("ngIf",o.invalid&&o.touched),s.zb(3),s.gc("ngModel",e.valueemail),s.zb(2),s.gc("ngIf",i.invalid&&i.touched),s.zb(3),s.gc("ngModel",e.valuepassword),s.zb(2),s.gc("ngIf",r.invalid&&r.touched),s.zb(3),s.gc("ngModel",e.valueconfirmPassword),s.zb(2),s.gc("ngIf",a.touched&&r.value!=a.value),s.zb(1),s.gc("disabled",n.invalid||r.value!=a.value)}},directives:[g.n,g.g,g.h,g.a,g.k,g.l,g.f,g.i,o.j,g.b,g.e,g.d],styles:["*[_ngcontent-%COMP%]{box-sizing:border-box;overflow-x:hidden}.error[_ngcontent-%COMP%]{color:red}input.ng-valid[_ngcontent-%COMP%]{border-left:2px solid green}input.ng-invalid[_ngcontent-%COMP%]{border-left:2px solid red}.row[_ngcontent-%COMP%]{height:81vh;padding:0;overflow:hidden}.signup-box[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;height:100%}h2[_ngcontent-%COMP%]{letter-spacing:2px;font-size:40px;font-weight:400;text-shadow:3px 3px 3px rgba(0,0,0,.2)}.signup-form-container[_ngcontent-%COMP%]{max-height:100%;width:80%;text-align:center;padding:15px 30px;border-radius:10px;border-top:4px solid #f5f5f5;border-left:4px solid #f5f5f5;box-shadow:5px 5px 9px rgba(0,0,0,.1)}.signup-form-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{box-sizing:border-box;max-height:-webkit-min-content;max-height:-moz-min-content;max-height:min-content}.form-group[_ngcontent-%COMP%]{padding:4px 5px;margin:0}.form-label[_ngcontent-%COMP%]{width:100%;margin:5px 0;padding:0}button[_ngcontent-%COMP%]{box-shadow:2px 2px 6px rgba(0,0,0,.3)}.picturebox[_ngcontent-%COMP%]{height:100%;padding:0;display:flex;align-items:center}.picturebox[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]{overflow-y:hidden}input[_ngcontent-%COMP%]{padding:3px 10px;font-size:19px;letter-spacing:1px;border-radius:5px}.picturebox[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;-webkit-animation:float 4s ease-in-out infinite;animation:float 4s ease-in-out infinite}@-webkit-keyframes float{0%{transform:translateY(0)}25%{transform:translateY(5px)}50%{transform:translateY(-5px)}75%{transform:translateY(-5px)}}@keyframes float{0%{transform:translateY(0)}25%{transform:translateY(5px)}50%{transform:translateY(-5px)}75%{transform:translateY(-5px)}}.btn[_ngcontent-%COMP%]{letter-spacing:2px!important;font-size:18px!important}@media screen and (max-width:600px){.picturebox[_ngcontent-%COMP%]{margin-top:50px}.picturebox[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]{order:1}.picturebox[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{-webkit-animation:none;animation:none}.container-fluid[_ngcontent-%COMP%]{margin:0}.row[_ngcontent-%COMP%]{height:unset;min-height:90vh}.signup-box[_ngcontent-%COMP%]{order:2;display:flex;flex-direction:column;justify-content:center;margin-top:none}.container-fluid[_ngcontent-%COMP%]{overflow-y:auto}.signup-form-container[_ngcontent-%COMP%]{width:100%;margin-top:10px;padding:10px 5px;border-radius:unset;box-shadow:none;border:none}.form-control[_ngcontent-%COMP%]{border-radius:5px}}"]}),n})();function z(n,e){1&n&&(s.Pb(0,"H1",2),s.tc(1,"Account Verified"),s.Ob())}function I(n,e){1&n&&(s.Pb(0,"H1",3),s.tc(1,"Account Not Verified"),s.Ob())}let Y=(()=>{class n{constructor(n,e,t){this.router=n,this.ar=e,this.ds=t,this.unsubscriber$=new r.a}ngOnInit(){this.ar.queryParamMap.subscribe(n=>{this.hash=n.get("hash")}),this.ds.verifyAccount({hash:this.hash}).pipe(Object(a.a)(this.unsubscriber$)).subscribe(n=>{1==n.status?(localStorage.setItem("email",n.data.email),this.ds.spinnerControl("hide"),this.verified=1,alert("congratulations! Your account is verified"),this.router.navigate(["/dashboardmodule"])):(this.ds.spinnerControl("hide"),this.verified=0,alert(n.data.err),this.router.navigate(["/sign-up"]))},n=>{this.verified=0,this.ds.spinnerControl("hide"),alert("sorry some error has occured")})}ngOnDestroy(){this.unsubscriber$.next(),this.unsubscriber$.complete()}}return n.\u0275fac=function(e){return new(e||n)(s.Kb(i.e),s.Kb(i.a),s.Kb(c.a))},n.\u0275cmp=s.Eb({type:n,selectors:[["app-verifyaccount"]],decls:2,vars:2,consts:[["class","verified noti",4,"ngIf"],["class","not verified",4,"ngIf"],[1,"verified","noti"],[1,"not","verified"]],template:function(n,e){1&n&&(s.sc(0,z,2,0,"H1",0),s.sc(1,I,2,0,"H1",1)),2&n&&(s.gc("ngIf",e.verified),s.zb(1),s.gc("ngIf",e.verified))},directives:[o.j],styles:[".noti[_ngcontent-%COMP%]{position:abosolute;top:50%;left:50%;transform:translate(-50%,-50%)}.verified[_ngcontent-%COMP%]{color:green}.not-verified[_ngcontent-%COMP%]{color:red}"]}),n})();const N=[{path:"",component:(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=s.Eb({type:n,selectors:[["app-homemodule"]],decls:1,vars:0,template:function(n,e){1&n&&s.Lb(0,"router-outlet")},directives:[i.h],styles:[""]}),n})(),children:[{path:"",component:M.a,children:[{path:"",component:f},{path:"home",component:f},{path:"login",component:x},{path:"sign-up",component:k},{path:"contact-us",component:u},{path:"verify-account",component:Y}]}]}];let L=(()=>{class n{}return n.\u0275mod=s.Ib({type:n}),n.\u0275inj=s.Hb({factory:function(e){return new(e||n)},imports:[[i.g.forChild(N)],i.g]}),n})(),E=(()=>{class n{}return n.\u0275mod=s.Ib({type:n}),n.\u0275inj=s.Hb({factory:function(e){return new(e||n)},imports:[[o.b,L]]}),n})()}}]);