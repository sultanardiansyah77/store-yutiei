import{u as Q,d as g,e as Y,f as n,g as e,l as c,m as k,F as U,j as V,t as f,k as p,h as G,C as i,v as m,E,K as j,n as h,y as M,q as w,M as J,N as X,O as Z,P as ee,p as x,Q as D,o as d,I as N,S as te}from"./index-bfLQYE0C.js";const le=e("h1",{class:"text-2xl font-bold"},"Add Product",-1),oe={class:"flex flex-col gap-4"},se=e("label",{for:"Games"},"Game",-1),ae=e("option",{selected:"",disabled:"",value:""},"Select game",-1),ne=["value"],de=["src"],ie=["value"],re={value:"add"},ue={class:"flex gap-3"},ce={key:0,class:"flex flex-col gap-3"},pe={class:"flex gap-3"},me={class:"flex flex-col grow"},ge=e("label",{for:"id"},[e("strong",null,"Game"),i(" ID:")],-1),ve={class:"flex flex-col grow"},fe=e("label",{for:"name"},[e("strong",null,"Game"),i(" Name:")],-1),ye={class:"flex-grow flex flex-row-reverse"},_e={class:"flex gap-3 items-center"},he={class:"flex flex-col grow"},xe=e("label",{for:"id"},[e("strong",null,"Game"),i(" Method Name:")],-1),be=["id","onUpdate:modelValue"],we={class:"flex flex-col grow"},Ce=e("label",{for:"name"},[e("strong",null,"Method"),i(" Type:")],-1),qe=["onChange","id","onUpdate:modelValue"],Se=te('<option class="" selected disabled value="">Select method type</option><option value="text">text</option><option value="email">Email</option><option value="number">number</option><option value="password">password</option><option value="select">Select Option</option>',6),ke=[Se],Ue={class:"flex flex-col grow"},Ve={key:0,class:"flex justify-between grow"},Ge=e("label",{for:"name"},[e("strong",null,"Select "),i(" Option:")],-1),Ee=[Ge],De={key:1,class:"flex-grow flex gap-3"},Ne=["id","onKeyup","onUpdate:modelValue"],Ae={class:"flex-col flex gap-3"},Re=e("label",{for:""},"Game Categories",-1),Pe={class:"flex flex-col grow"},Ie=e("label",{for:"name"},[e("strong",null,"Game"),i(" Description:")],-1),je={class:"flex max-h-60 max-w-60"},Me=e("label",{for:"image"},[e("strong",null,"Game"),i(" Image:")],-1),Be=["src"],Oe={key:1,class:"flex flex-col gap-3"},Le=e("label",{for:"Games"},"Currency",-1),$e=e("option",{selected:"",disabled:"",value:""},"Select currency",-1),Ke=["value"],Te=["src"],Fe=["value"],We={value:"add"},ze={class:"flex gap-3"},He={key:0,class:"flex flex-col grow gap-3"},Qe={class:"flex gap-3"},Ye={class:"flex flex-col grow"},Je=e("label",{for:"id"},[e("strong",null,"Currency"),i(" ID:")],-1),Xe={class:"flex flex-col grow"},Ze=e("label",{for:"name"},[e("strong",null,"Currency"),i(" Name:")],-1),et={class:"flex max-h-60 max-w-60"},tt=e("label",{for:"image"},[e("strong",null,"Currency"),i(" Image:")],-1),lt=e("div",null,null,-1),ot=["src"],st={class:"flex gap-3"},at={class:"flex flex-col grow"},nt=e("label",{for:"id"},[e("strong",null,"Item"),i(" ID:")],-1),dt={class:"flex flex-col grow"},it=e("label",{for:"name"},[e("strong",null,"Item"),i(" Name:")],-1),rt={class:"flex flex-col grow"},ut=e("label",{for:"price"},[e("strong",null,"Item"),i(" Price:")],-1),mt={__name:"AddProdView",setup(ct){const q=Q(),S=g(""),s=g({id:"",name:"",image:"",uploader:q.user.email,method:[{name:"",type:""}],categories:["All Products"]}),b=g({message:"",type:""}),y=g({message:"",type:""}),u=g({id:"",name:"",image:"",uploader:q.user.email}),a=g({id:"",name:"",price:0,game:"",currency:"",uploader:q.user.email}),A=g([]),R=g([]),B=async()=>{const o=j(h(w,"game")),l=await M(o);A.value=l.docs.map(t=>t.data())},O=async()=>{const o=j(h(w,"game",a.value.game,"products")),l=await M(o);R.value=l.docs.map(t=>t.data())},P=async(o,l)=>{const r=o.target.files;if(r.length>0){const _=r[0],I=J(X,`images/${_.name}`);try{await Z(I,_);const C=await ee(I);l==="game"?s.value.image=C:u.value.image=C}catch(C){console.error("Error uploading file: ",C)}}},L=async()=>{try{if(!s.value.id||!s.value.name||!s.value.desc||!s.value.image){console.error("Please fill in all required fields."),y.value={message:"Please fill in all required fields.",type:"error"};return}const o=s.value.id,l=x(h(w,"game"),o);await D(l,s.value),a.game=o,y.value={message:"Document with custom ID added: "+o,type:"success"}}catch(o){console.error("Error adding document: ",o)}},v=g({message:"",type:""}),$=async()=>{if(!u.value.id||!u.value.name||!u.value.image){console.error("Please fill in all required fields."),v.value={message:"Please fill in all required fields.",type:"error"};return}try{const o=u.value.id,l=x(w,"game",a.value.game),t=h(l,"products"),r=x(t,o);await D(r,u.value),a.value.currency=o,v.value={message:"Document with custom ID added: "+o,type:"success"}}catch(o){console.error("Error adding document: ",o),v.value={message:`Error adding document: ${o.message}`,type:"error"}}},K=async()=>{try{if(!a.value.id||!a.value.name||!a.value.price||!a.value.game||!a.value.currency){console.error("Please fill in all required fields."),b.value={message:"Please fill in all required fields.",type:"error"};return}try{const o=x(w,"game",a.value.game),l=h(o,"products"),t=x(l,a.value.currency),r=h(t,"items"),_=x(r,a.value.id);await D(_,a.value),b.value={message:"Item added to 'products' sub-collection in the selected game document.",type:"success"}}catch(o){console.error("Error adding item: ",o)}}catch(o){console.error("Error adding item: ",o)}},T=()=>{const o=S.value.trim().split(",");o.unshift("All Products");const l=o.map(t=>t.trim());s.value.categories=l},F=o=>{const r=s.value.method[o].optionString.trim().split(",").map(_=>_.trim());s.value.method[o].options=r},W=()=>{s.value.method.push({name:"",type:""})},z=o=>{const l={name:s.value.method[o].name,type:s.value.method[o].type,optionString:"",options:[]};s.value.method[o]=l},H=o=>{const l={name:s.value.method[o].name,type:s.value.method[o].type};s.value.method[o]=l};return Y(()=>{B()}),(o,l)=>(d(),n("div",null,[le,e("form",oe,[se,c(e("select",{onChange:O,required:"",class:"bg-slate-700 p-3 rounded-lg text-lg max-w-md",name:"Games",id:"Games","onUpdate:modelValue":l[0]||(l[0]=t=>a.value.game=t)},[ae,(d(!0),n(U,null,V(A.value,t=>(d(),n("option",{key:t.id,value:t.id},[e("img",{src:t.image,alt:""},null,8,de),i(" "+f(t.name),1)],8,ne))),128)),y.value.type=="success"?(d(),n("option",{key:0,selected:"",value:s.value.id},f(s.value.name),9,ie)):p("",!0),e("option",re,[e("span",ue,[G(N),i("Add new game")])])],544),[[k,a.value.game]]),a.value.game=="add"?(d(),n("div",ce,[e("div",pe,[e("div",me,[ge,c(e("input",{placeholder:"e.g. GENSHIN *No space or special characters",required:"",type:"text",class:"bg-slate-700 p-3 rounded-lg text-lg",id:"id","onUpdate:modelValue":l[1]||(l[1]=t=>s.value.id=t)},null,512),[[m,s.value.id]])]),e("div",ve,[fe,c(e("input",{placeholder:"Enter game name",required:"",type:"text",class:"bg-slate-700 p-3 rounded-lg text-lg",id:"name","onUpdate:modelValue":l[2]||(l[2]=t=>s.value.name=t)},null,512),[[m,s.value.name]])])]),e("div",ye,[e("button",{type:"button",onClick:W,class:"group text-lg font-semibold flex gap-2 justify-center"},[G(N,{class:"w-7 duration-150 group-hover:scale-105"}),i(" Add method ")])]),(d(!0),n(U,null,V(s.value.method.length,t=>(d(),n("div",{key:t,class:"flex flex-col gap-3"},[e("div",_e,[e("div",he,[xe,c(e("input",{placeholder:'Will be displayed in the form "Enter/Select your <method-name>"',required:"",type:"text",class:"bg-slate-700 p-3 rounded-lg text-lg",id:"id_"+t,"onUpdate:modelValue":r=>s.value.method[t-1].name=r},null,8,be),[[m,s.value.method[t-1].name]])]),e("div",we,[Ce,c(e("select",{onChange:r=>s.value.method[t-1].type==="select"?z(t-1):H(t-1),class:"bg-slate-700 capitalize p-4 rounded-lg text-lg",id:"type_"+t,"onUpdate:modelValue":r=>s.value.method[t-1].type=r},ke,40,qe),[[k,s.value.method[t-1].type]])])]),e("div",Ue,[s.value.method[t-1].type==="select"?(d(),n("div",Ve,Ee)):p("",!0),s.value.method[t-1].type==="select"?(d(),n("div",De,[c(e("input",{placeholder:'Enter option (Use "," to add new option)',required:"",type:"text",class:"bg-slate-700 p-3 rounded-lg text-lg grow",id:"option_"+o.index,onKeyup:r=>F(t-1),"onUpdate:modelValue":r=>s.value.method[t-1].optionString=r},null,40,Ne),[[m,s.value.method[t-1].optionString]])])):p("",!0)])]))),128)),e("div",null,[e("div",Ae,[Re,c(e("input",{onKeyup:T,"onUpdate:modelValue":l[3]||(l[3]=t=>S.value=t),placeholder:'Enter option (Use "," to add new category)',required:"",type:"text",class:"bg-slate-700 p-3 rounded-lg text-lg grow"},null,544),[[m,S.value]])])]),e("div",Pe,[Ie,c(e("textarea",{placeholder:"Enter game description",required:"",type:"text",class:"bg-slate-700 p-3 rounded-lg text-lg",id:"name","onUpdate:modelValue":l[4]||(l[4]=t=>s.value.desc=t)},null,512),[[m,s.value.desc]])]),e("div",je,[e("div",null,[Me,e("input",{required:"",type:"file",class:"p-3 file:p-2 file:font-josefin file:bg-slate-700 file:rounded-full file:border-0 file:hover:bg-slate-600 file:me-3 file:px-4 file:text-white",id:"image",onChange:l[5]||(l[5]=t=>P(t,"game"))},null,32)]),s.value.image?(d(),n("img",{key:0,src:s.value.image,class:"",alt:"Uploaded Image",style:{"max-width":"100%","margin-top":"10px"}},null,8,Be)):p("",!0)]),e("button",{type:"button",class:"bg-blue-700 p-3 rounded-lg text-lg",onClick:L},"Add Game"),y.value.message?(d(),n("div",{key:0,class:E([y.value.type==="success"?"bg-green-500":"bg-red-500","rounded-lg text-black p-5"])},[e("span",null,f(y.value.message),1)],2)):p("",!0)])):p("",!0),a.value.game&&a.value.game!="add"?(d(),n("div",Oe,[Le,c(e("select",{required:"",class:"bg-slate-700 p-3 rounded-lg text-lg max-w-md",name:"Games",id:"Games","onUpdate:modelValue":l[6]||(l[6]=t=>a.value.currency=t)},[$e,(d(!0),n(U,null,V(R.value,t=>(d(),n("option",{key:t.id,value:t.id},[e("img",{src:t.image,alt:""},null,8,Te),i(" "+f(t.name),1)],8,Ke))),128)),v.value.type=="success"?(d(),n("option",{key:0,selected:"",value:u.value.id},f(u.value.name),9,Fe)):p("",!0),e("option",We,[e("span",ze,[G(N),i("Add new currency")])])],512),[[k,a.value.currency]]),a.value.currency=="add"?(d(),n("div",He,[e("div",Qe,[e("div",Ye,[Je,c(e("input",{placeholder:"e.g. GCRYSTAL *No Spaces or Special Characters",required:"",type:"text",class:"bg-slate-700 p-3 rounded-lg text-lg",id:"id","onUpdate:modelValue":l[7]||(l[7]=t=>u.value.id=t)},null,512),[[m,u.value.id]])]),e("div",Xe,[Ze,c(e("input",{placeholder:"Enter currency name",required:"",type:"text",class:"bg-slate-700 p-3 rounded-lg text-lg",id:"name","onUpdate:modelValue":l[8]||(l[8]=t=>u.value.name=t)},null,512),[[m,u.value.name]])])]),e("div",et,[e("div",null,[tt,e("input",{placeholder:"Enter currency image URL",required:"",type:"file",class:"p-3 file:p-2 file:bg-slate-700 file:font-josefin file:rounded-full file:border-0 file:hover:bg-slate-600 file:me-3 file:px-4 file:text-white",id:"image",onChange:l[9]||(l[9]=t=>P(t,"currency"))},null,32)]),lt,u.value.image?(d(),n("img",{key:0,src:u.value.image,class:"",alt:"Uploaded Image",style:{"max-width":"100%","margin-top":"10px"}},null,8,ot)):p("",!0)]),e("button",{type:"button",class:"bg-blue-700 p-3 rounded-lg text-lg",onClick:$},"Add Currency"),v.value.message?(d(),n("div",{key:0,class:E([v.value.type=="success"?"bg-green-500":"bg-red-500","rounded-lg text-black p-5"])},[e("span",null,f(v.value.message),1)],2)):p("",!0)])):p("",!0)])):p("",!0),e("div",st,[e("div",at,[nt,c(e("input",{placeholder:"e.g. 2400 *Better to fill it with the amount",required:"",type:"text",class:"bg-slate-700 p-3 rounded-lg text-lg",id:"id","onUpdate:modelValue":l[10]||(l[10]=t=>a.value.id=t)},null,512),[[m,a.value.id]])]),e("div",dt,[it,c(e("input",{placeholder:"Enter item name",required:"",type:"text",class:"bg-slate-700 p-3 rounded-lg text-lg",id:"name","onUpdate:modelValue":l[11]||(l[11]=t=>a.value.name=t)},null,512),[[m,a.value.name]])])]),e("div",rt,[ut,c(e("input",{required:"",type:"number",class:"bg-slate-700 p-3 rounded-lg text-lg",id:"price","onUpdate:modelValue":l[12]||(l[12]=t=>a.value.price=t)},null,512),[[m,a.value.price]])]),e("button",{type:"button",class:"bg-blue-700 p-3 rounded-lg text-lg",onClick:K},"Add Items"),b.value.message?(d(),n("div",{key:2,class:E([b.value.type==="success"?"bg-green-300":"bg-red-300","rounded-lg text-black p-5"])},[e("span",null,f(b.value.message)+" in ",1)],2)):p("",!0)])]))}};export{mt as default};
