import{a as v,b as M,e as N,h as x}from"./chunk-OX2NJMZF.js";import{m as E}from"./chunk-6OTV5RLS.js";import{$a as b,Da as d,Ia as C,Pa as f,Ra as n,Sa as e,Va as s,Wa as h,_a as t,ab as c,cb as _,da as g,db as y,eb as P,ta as a}from"./chunk-DPBY32N4.js";var u=class r{message;counter;notify=new g;notifyParent(){this.notify.emit(`Counter is now from enfant: ${this.counter}`)}static \u0275fac=function(o){return new(o||r)};static \u0275cmp=d({type:r,selectors:[["app-child"]],inputs:{message:"message",counter:"counter"},outputs:{notify:"notify"},decls:13,vars:2,consts:[[1,"card","p-3","mb-3","bg-danger-subtle"],[1,"text-primary"],[1,"btn","btn-info","mt-2",3,"click"]],template:function(o,i){o&1&&(n(0,"div",0)(1,"h5",1),t(2,"Child Component"),e(),n(3,"p")(4,"strong"),t(5,"Message from Parent:"),e(),t(6),e(),n(7,"p")(8,"strong"),t(9,"Counter Value:"),e(),t(10),e(),n(11,"button",2),s("click",function(){return i.notifyParent()}),t(12," Notify Parent "),e()()),o&2&&(a(6),c(" ",i.message,""),a(4),c(" ",i.counter,""))},encapsulation:2})};function k(r,l){if(r&1&&(n(0,"div",11)(1,"strong"),t(2,"Notification from Child:"),e(),t(3),e()),r&2){let o=h();a(3),c(" ",o.childNotification," ")}}var S=class r{parentMessage="Ici le parent balance des infos intra ENFANT";counterParent=0;childNotification=null;increaseCounter(){this.counterParent++}decreaseCounter(){this.counterParent>0&&this.counterParent--}handleNotification(l){this.childNotification=l}static \u0275fac=function(o){return new(o||r)};static \u0275cmp=d({type:r,selectors:[["app-parent"]],decls:18,vars:5,consts:[[1,"container","my-5","p-5","bg-warning-subtle"],[1,"text-center","text-primary"],["class","alert alert-warning mt-3",4,"ngIf"],[1,"mb-3"],["for","messageInput",1,"form-label"],["id","messageInput","placeholder","Enter a message",1,"form-control",3,"ngModelChange","ngModel"],[1,"form-label"],[1,"btn","btn-danger","me-2",3,"click"],[1,"badge","bg-secondary"],[1,"btn","btn-success","ms-2",3,"click"],[3,"notify","message","counter"],[1,"alert","alert-warning","mt-3"]],template:function(o,i){o&1&&(n(0,"div",0)(1,"h2",1),t(2,"Parent Component"),e(),C(3,k,4,1,"div",2),n(4,"div",3)(5,"label",4),t(6,"Message to Child:"),e(),n(7,"input",5),P("ngModelChange",function(m){return y(i.parentMessage,m)||(i.parentMessage=m),m}),e()(),n(8,"div",3)(9,"label",6),t(10,"Counter Value:"),e(),n(11,"button",7),s("click",function(){return i.decreaseCounter()}),t(12,"-"),e(),n(13,"span",8),t(14),e(),n(15,"button",9),s("click",function(){return i.increaseCounter()}),t(16,"+"),e()(),n(17,"app-child",10),s("notify",function(m){return i.handleNotification(m)}),e()()),o&2&&(a(3),f("ngIf",i.childNotification),a(4),_("ngModel",i.parentMessage),a(7),b(i.counterParent),a(3),f("message",i.parentMessage)("counter",i.counterParent))},dependencies:[u,x,v,M,N,E],encapsulation:2})};export{S as ParentComponent};
