import{r as _,a as Y,c as j,o,b as a,w as p,v as h,d as e,u as s,e as J,f as q,t as n,g as y,F as D,h as I,n as K,p as re,i as ie,j as de,k as ve}from"./vendor.6f537796.js";const _e=function(){const b=document.createElement("link").relList;if(b&&b.supports&&b.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))E(t);new MutationObserver(t=>{for(const d of t)if(d.type==="childList")for(const l of d.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&E(l)}).observe(document,{childList:!0,subtree:!0});function g(t){const d={};return t.integrity&&(d.integrity=t.integrity),t.referrerpolicy&&(d.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?d.credentials="include":t.crossorigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function E(t){if(t.ep)return;t.ep=!0;const d=g(t);fetch(t.href,d)}};_e();var pe=(k,b)=>{const g=k.__vccOpts||k;for(const[E,t]of b)g[E]=t;return g};const m=k=>(re("data-v-7ac97464"),k=k(),ie(),k),he={class:"body"},ye={class:"beforegame"},fe={class:"playbuttondiv"},me={class:"header"},ke={class:"field-name"},be=m(()=>e("div",{class:"field-topic"},[e("h1",null,"WELCOME TO GAME !")],-1)),ge={class:"field-name-text"},xe={class:"ok-button-div"},Ee={class:"gameplay"},Ne={key:0,class:"rule"},Re=m(()=>e("div",{class:"rule-title"},"BlackJack Rule",-1)),Se=de('<div class="rule-body" data-v-7ac97464><p style="color:black;" data-v-7ac97464>- \u0E1C\u0E39\u0E49\u0E40\u0E25\u0E48\u0E19\u0E08\u0E30\u0E15\u0E49\u0E2D\u0E07\u0E19\u0E33\u0E04\u0E48\u0E32\u0E02\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E4C\u0E14\u0E17\u0E35\u0E48\u0E44\u0E14\u0E49\u0E21\u0E32\u0E1A\u0E27\u0E01\u0E01\u0E31\u0E19\u0E43\u0E2B\u0E49\u0E40\u0E17\u0E48\u0E32\u0E01\u0E31\u0E1A\u0E2B\u0E23\u0E37\u0E2D\u0E43\u0E01\u0E25\u0E49\u0E40\u0E04\u0E35\u0E22\u0E07 21 \u0E21\u0E32\u0E01\u0E17\u0E35\u0E48\u0E2A\u0E38\u0E14</p><p style="color:black;" data-v-7ac97464> - \u0E42\u0E14\u0E22\u0E08\u0E30\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E40\u0E25\u0E37\u0E2D\u0E01 <a style="color:#11856d;" data-v-7ac97464>Draw</a> \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E08\u0E31\u0E48\u0E27\u0E01\u0E32\u0E23\u0E4C\u0E14\u0E40\u0E1E\u0E34\u0E48\u0E21 \u0E2B\u0E23\u0E37\u0E2D <a style="color:#b51010;" data-v-7ac97464>Stay</a> \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E44\u0E21\u0E48\u0E08\u0E31\u0E48\u0E27\u0E01\u0E32\u0E23\u0E4C\u0E14 </p><p style="color:black;" data-v-7ac97464>- \u0E2B\u0E32\u0E01\u0E1C\u0E39\u0E49\u0E40\u0E25\u0E48\u0E19\u0E1D\u0E48\u0E32\u0E22\u0E43\u0E14\u0E21\u0E35\u0E04\u0E48\u0E32\u0E40\u0E17\u0E48\u0E32\u0E01\u0E31\u0E1A\u0E2B\u0E23\u0E37\u0E2D\u0E43\u0E01\u0E25\u0E49\u0E40\u0E04\u0E35\u0E22\u0E07 21 \u0E21\u0E32\u0E01\u0E17\u0E35\u0E48\u0E2A\u0E38\u0E14 \u0E08\u0E30\u0E40\u0E1B\u0E47\u0E19\u0E1C\u0E39\u0E49\u0E0A\u0E19\u0E30</p><p style="color:black;" data-v-7ac97464>- \u0E43\u0E19\u0E01\u0E23\u0E13\u0E35\u0E17\u0E35\u0E48\u0E1D\u0E48\u0E32\u0E22\u0E43\u0E14\u0E21\u0E35\u0E04\u0E48\u0E32\u0E21\u0E32\u0E01\u0E01\u0E27\u0E48\u0E32 21 \u0E08\u0E30\u0E2B\u0E21\u0E14\u0E2A\u0E34\u0E17\u0E18\u0E34\u0E4C\u0E0A\u0E19\u0E30\u0E43\u0E19\u0E17\u0E31\u0E19\u0E17\u0E35</p><p style="color:black;" data-v-7ac97464>- \u0E41\u0E15\u0E48\u0E2B\u0E32\u0E01\u0E17\u0E31\u0E49\u0E07\u0E04\u0E39\u0E48\u0E21\u0E35\u0E04\u0E48\u0E32\u0E21\u0E32\u0E01\u0E01\u0E27\u0E48\u0E32 21 \u0E08\u0E30\u0E16\u0E37\u0E2D\u0E27\u0E48\u0E32\u0E40\u0E2A\u0E21\u0E2D</p><p style="color:black;" data-v-7ac97464>- \u0E16\u0E49\u0E32 \u0E0A\u0E19\u0E30 \u0E08\u0E30\u0E44\u0E14\u0E49 1 \u0E04\u0E30\u0E41\u0E19\u0E19 \u0E41\u0E15\u0E48\u0E16\u0E49\u0E32 \u0E41\u0E1E\u0E49\u0E2B\u0E23\u0E37\u0E2D\u0E40\u0E2A\u0E21\u0E2D \u0E08\u0E30\u0E44\u0E14\u0E49 0 \u0E43\u0E04\u0E23\u0E44\u0E14\u0E49 2 \u0E04\u0E30\u0E41\u0E19\u0E19\u0E01\u0E48\u0E2D\u0E19\u0E40\u0E1B\u0E47\u0E19\u0E1C\u0E39\u0E49\u0E0A\u0E19\u0E30 Game</p></div>',1),De={class:"field-game"},Ie={class:"score-board"},we=y(" Score Board "),Te={style:{display:"flex","justify-content":"space-around"}},We={style:{width:"50%","text-align":"end",color:"#EDE682"}},Ae={style:{width:"50%"}},Be={style:{width:"50%","text-align":"start",color:"#EA99D5"}},Ce={class:"player-score"},He={style:{color:"#EA99D5"}},Oe={key:0,class:"card-card-div"},Pe={class:"card-card-text"},Ge={key:1,class:"card-card-div"},Le={class:"card-card-text"},Me={class:"center"},Ue={class:"text-choose"},Ve=y(" : "),Fe=y(" Turn Of "),$e={style:{color:"#EDE682"}},ze=y(" Turn Of "),Ye={style:{color:"#EA99D5"}},je={key:2},Je={class:"winnerRound"},qe=m(()=>e("br",null,null,-1)),Ke={class:"button-choose-player-div"},Qe=["disabled"],Xe={class:"player-score"},Ze={style:{color:"#EDE682"}},et={class:"card-card-div"},tt={class:"card-card-text"},st={key:2,class:"history"},ot=m(()=>e("div",{class:"history-title"},"History",-1)),at={class:"history-body"},lt={style:{color:"#008E89"}},nt={key:0},ct=m(()=>e("a",{style:{color:"red"}},"+1",-1)),ut=[ct],rt={key:1},it=m(()=>e("br",null,null,-1)),dt={style:{color:"#008E89"}},vt={key:0},_t=m(()=>e("a",{style:{color:"red"}},"+1",-1)),pt=[_t],ht={key:1},yt={class:"beforegame"},ft={class:"final-field"},mt=m(()=>e("p",{style:{"font-size":"50px","text-align":"center","padding-top":"2%"}},"Result",-1)),kt={style:{"text-align":"center","list-style-type":"none","font-size":"25px"}},bt={key:0},gt={key:1},xt=m(()=>e("br",null,null,-1)),Et={key:0},Nt={key:1},Rt={class:"winnerGame"},St={setup(k){const b=_(!0),g=_(!1),E="font-size: 25px; margin-top:2%; font-weight: 600",t=_([1,2,3,4,5,6,7,8,9,10,11,12]);function d(c){return c[Math.floor(Math.random()*c.length)]}const l=Y({name:"",score:0,round:[]}),r=Y({name:"",score:0,round:[]}),N=_([]),w=_(["?"]),R=_([]),v=_(0),P=_(!1),T=_(),W=_(),C=_(!0),S=_(0);let A=_(""),H=_(),G,L,M,U=_(1);const O=j(()=>N.value.reduce((c,i)=>c+i,0)),B=j(()=>R.value.reduce((c,i)=>c+i,0));function V(){H.value=d(t.value),R.value.push(H.value),t.value.splice(t.value.indexOf(H.value),1),G=d(t.value),R.value.push(G),w.value.push(G),t.value.splice(t.value.indexOf(G),1),L=d(t.value),t.value.splice(t.value.indexOf(L),1),N.value.push(L),M=d(t.value),N.value.push(M),t.value.splice(t.value.indexOf(M),1)}const F=()=>{if(t.value.length!=0){W.value=!1;let c=d(t.value);N.value.push(c),t.value.splice(t.value.indexOf(c),1),v.value=1,$()}},Q=()=>{W.value=!0,v.value=1,W.value==T.value?v.value=2:$()};function $(){P.value=!0,B.value<18?(X(),T.value=!1):(Z(),T.value=!0)}function X(){setTimeout(()=>{A.value="color:red"},2e3),setTimeout(()=>{if(t.value.length!=0){let c=d(t.value);w.value.push(c),R.value=[H.value,...w.value.slice(1)],t.value.splice(t.value.indexOf(c),1),v.value=0,P.value=!1,A.value=""}},3e3)}function Z(){setTimeout(()=>{A.value="color:red"},3e3),setTimeout(()=>{A.value="",v.value=0,P.value=!1,T.value==W.value&&(v.value=2)},6e3)}const x=_(""),ee=(c,i)=>c>21&&i>21?(x.value="Draw","DRAW"):c>i&&c<=21?(x.value=l.name,`THE WINNER IN THIS ROUND IS ${l.name} !`):c>i&&c>21?(x.value=r.name,`THE WINNER IN THIS ROUND IS ${r.name} !`):c<i&&i<=21?(x.value=r.name,`THE WINNER IN THIS ROUND IS ${r.name} !`):c<i&&i>21?(x.value=l.name,`THE WINNER IN THIS ROUND IS ${l.name} !`):(x.value="Draw","DRAW"),te=()=>{U.value++,x.value==l.name?(l.score++,l.round.push("Win"),r.round.push("Lose")):x.value==r.name?(r.score++,l.round.push("Lose"),r.round.push("Win")):(l.round.push("Draw"),r.round.push("Draw")),t.value=[1,2,3,4,5,6,7,8,9,10,11,12],N.value=[],w.value=["?"],R.value=[],v.value=0,T.value=void 0,W.value=void 0,V()},z=()=>{S.value++,S.value==2&&V()},se=(c,i)=>{c===""||i===""?alert("Please enter your/maid name !"):z()},oe=(c,i)=>{if(c==2)return C.value=!1,l.name;if(i==2)return C.value=!1,r.name},ae=()=>{t.value=[1,2,3,4,5,6,7,8,9,10,11,12],N.value=[],w.value=["?"],R.value=[],v.value=0,C.value=!0,l.score=0,l.round=[],r.score=0,r.round=[],T.value=void 0,W.value=void 0,U.value=1,V()},le=()=>{alert("Thank You For Playing :)"),location.reload()},ne=()=>{b.value=!1},ce=()=>{g.value=!0},ue=()=>{g.value=!1};return(c,i)=>(o(),a("div",he,[p(e("div",ye,[e("div",fe,[p(e("h1",me,"Maid BlackJack Game",512),[[h,S.value==0]]),p(e("button",{onClick:z,class:"playbutton"},"Play",512),[[h,S.value==0]])]),p(e("div",ke,[be,e("div",ge,[p(e("input",{type:"text",placeholder:"Enter Your Name...","onUpdate:modelValue":i[0]||(i[0]=u=>s(l).name=u),class:"field-name-text-text-input"},null,512),[[J,s(l).name]]),p(e("input",{type:"text",placeholder:"Enter Maid Name...","onUpdate:modelValue":i[1]||(i[1]=u=>s(r).name=u),class:"field-name-text-text-input"},null,512),[[J,s(r).name]])]),e("div",xe,[e("button",{onClick:i[2]||(i[2]=u=>se(s(l).name,s(r).name)),class:"ok-button"},"GO")])],512),[[h,S.value==1]])],512),[[h,S.value!==2]]),p(e("div",Ee,[b.value==!0?(o(),a("div",Ne,[e("div",{class:"rule-header"},[Re,e("button",{class:"close-rule",onClick:ne},"\xD7")]),Se])):q("",!0),p(e("div",De,[p(e("button",{class:"historyBtn",style:{"margin-top":"2%"},onClick:ce},"History",512),[[h,s(l).round.length!=0]]),e("div",Ie,[we,e("div",Te,[e("div",We,n(s(l).name),1),e("div",Ae," | "+n(s(l).score)+" : "+n(s(r).score)+" | ",1),e("div",Be,n(s(r).name),1)]),y(" Round : "+n(s(U)),1)]),e("p",Ce,[e("a",He,n(s(r).name),1),y(" : "+n(v.value==2?s(B):s(B)-s(H)),1)]),v.value==2?(o(),a("div",Oe,[(o(!0),a(D,null,I(R.value,u=>(o(),a("div",{key:u,class:"card-card"},[e("p",Pe,n(u),1)]))),128))])):(o(),a("div",Ge,[(o(!0),a(D,null,I(w.value,u=>(o(),a("div",{key:u,class:"card-card"},[e("p",Le,n(u),1)]))),128))])),e("div",Me,[p(e("p",Ue,[e("span",{style:K(s(B)<18?s(A):"")},"DRAW",4),Ve,e("span",{style:K(s(B)<18?"":s(A))},"STAY",4)],512),[[h,P.value]]),v.value==0?(o(),a("p",{key:0,style:E},[Fe,e("a",$e,n(s(l).name),1)])):v.value==1?(o(),a("p",{key:1,style:E},[ze,e("a",Ye,n(s(r).name),1)])):(o(),a("div",je,[p(e("div",Je,[y(n(ee(s(O),s(B)))+" ",1),qe],512),[[h,v.value==2]]),p(e("button",{onClick:te,class:"button-next"},"Next Round",512),[[h,v.value==2]])]))]),e("div",Ke,[p(e("button",{onClick:F,class:"button-choose-player-left"},"DRAW",512),[[h,v.value==0&&s(O)<21]]),p(e("button",{onClick:F,class:"button-choose-player-left-disable",disabled:s(O)>=21},"DRAW",8,Qe),[[h,v.value==0&&s(O)>=21]]),p(e("button",{onClick:Q,class:"button-choose-player-right"},"STAY",512),[[h,v.value==0]])]),e("p",Xe,[e("a",Ze,n(s(l).name),1),y(" : "+n(s(O)),1)]),e("div",et,[(o(!0),a(D,null,I(N.value,u=>(o(),a("div",{key:u,class:"card-card"},[e("p",tt,n(u),1)]))),128))]),g.value==!0?(o(),a("div",st,[e("div",{class:"history-header"},[ot,e("button",{class:"close-history",onClick:ue},"\xD7")]),e("div",at,[e("ul",null,[e("a",lt,n(s(l).name),1),(o(!0),a(D,null,I(s(l).round,(u,f)=>(o(),a("li",{key:f},[y(" Round "+n(f+1)+" : "+n(u)+" ",1),u=="Win"?(o(),a("span",nt,ut)):(o(),a("span",rt,"+0"))]))),128)),it,e("a",dt,n(s(r).name),1),(o(!0),a(D,null,I(s(r).round,(u,f)=>(o(),a("li",{key:f},[y(" Round "+n(f+1)+" : "+n(u)+" ",1),u=="Win"?(o(),a("span",vt,pt)):(o(),a("span",ht,"+0"))]))),128))])])])):q("",!0)],512),[[h,C.value]])],512),[[h,S.value==2]]),p(e("div",yt,[e("div",ft,[mt,e("ul",kt,[y(n(s(l).name)+" ",1),(o(!0),a(D,null,I(s(l).round,(u,f)=>(o(),a("li",{key:f},[y(" Round "+n(f+1)+" : "+n(u)+" ",1),u=="Win"?(o(),a("span",bt,"+1")):(o(),a("span",gt,"+0"))]))),128)),xt,y(" "+n(s(r).name)+" ",1),(o(!0),a(D,null,I(s(r).round,(u,f)=>(o(),a("li",{key:f},[y(" Round "+n(f+1)+" : "+n(u)+" ",1),u=="Win"?(o(),a("span",Et,"+1")):(o(),a("span",Nt,"+0"))]))),128))]),e("div",Rt,"THE WINNER IS "+n(oe(s(l).score,s(r).score))+" !!!!!!",1),e("div",{class:"final-field-button"},[e("button",{class:"restartButton",onClick:ae},"Play Agian"),e("button",{class:"endGame",onClick:le},"End Game")])])],512),[[h,C.value==!1]])]))}};var Dt=pe(St,[["__scopeId","data-v-7ac97464"]]);ve(Dt).mount("#app");
