(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[366],{89301:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/app",function(){return c(22512)}])},22512:function(a,b,c){"use strict";c.r(b),c.d(b,{default:function(){return S}});var d=c(47568),e=c(29815),f=c(34051),g=c.n(f),h=c(85893),i=c(67294),j=c(93731),k=c(95192),l=c(828),m=c(25675),n=c.n(m),o=c(6628),p=c(90286),q=c(90998),r=c(7838),s=c(28713),t=c(56116),u=c(2766),v=c(86875),w=c(88197),x=function(a){var b,c,d=a.coinType,e=a.coinUi,f=a.onClick,g="",i=null!==(b=e.name)&& void 0!==b?b:"",j=d.name.split("::");return j.length>1&&(g=j[0],""===i&&(i=j.slice(1).join("::"))),(0,h.jsxs)("div",{className:"modal-token-list-item-frame",onClick:f,children:[(0,h.jsxs)("div",{className:"modal-token-list-item-left-frame",children:[(0,h.jsx)(n(),{src:null!==(c=e.logoUrl)&& void 0!==c?c:q.d_.DEFAULT_UNKNOWN_COIN_UI_LOGO_PATH,width:30,height:30}),(0,h.jsxs)("span",{style:{width:"210px",overflow:"hidden",whiteSpace:"nowrap"},children:[(0,h.jsx)("span",{className:"modal-token-list-item-left-symbol-span",children:e.symbol}),(0,h.jsx)("span",{className:"modal-token-list-item-left-detail-span",children:" "}),(0,h.jsx)("span",{className:"modal-token-list-item-left-detail-span",children:i})]})]}),(0,h.jsx)("div",{className:"modal-token-list-item-right-frame",children:(0,h.jsx)("span",{children:g.length>13?g.slice(0,10)+"...":g})})]})},y=function(a){var b=a.coinTypeAndUis,c=a.onSelectCoinType;return(0,h.jsxs)("div",{className:"modal-wallet-frame",children:[(0,h.jsx)("div",{className:"modal-wallet-title-frame",children:(0,h.jsx)("span",{children:"Select Token"})}),b.length>0?(0,h.jsx)("div",{className:"modal-token-list-panel-frame",children:b.map(function(a){var b=(0,l.Z)(a,2),d=b[0],e=b[1];return(0,h.jsx)(x,{onClick:function(){void 0!==c&&c(d)},coinType:d,coinUi:e},d.name)})}):(0,h.jsx)("span",{style:{fontStyle:"normal",fontWeight:"500",fontSize:"21px",lineHeight:"32px",color:"#9da3ae"},children:"No avaliable token for selecting"})]})},z="#d83939",A="#d88f39",B=function(a){var b,c,e,f,m,p,r,t,w,x,y,B,C,D,E,F=a.accountAddr,G=a.poolInfo,H=a.getCoinUi,I=a.wallet,J=a.client,K=a.dismissModal,L=(0,i.useState)("CUSTOM"),M=L[0],N=L[1],O=(0,s.K)().refreshPositionInfos;if(null===G||null===I||null===J||null===F)return(0,h.jsx)(h.Fragment,{});var P=(0,i.useState)([]),Q=P[0],R=P[1],S=(0,i.useState)([]),T=S[0],U=S[1],V=(0,i.useState)([]),W=V[0],X=V[1],Y=(0,i.useState)(""),Z=Y[0],$=Y[1],_=(0,i.useState)(""),aa=_[0],ab=_[1],ac=I.getAddLiqudityEstimatedGas();(0,i.useEffect)(function(){var a;null!==F&&(a=(0,d.Z)(g().mark(function a(){var b,c,d,e,f;return g().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,b=[G.type.xTokenType.name,G.type.yTokenType.name,J.getPrimaryCoinType().name],a.t0=l.Z,a.next=5,J.getSortedAccountCoinsArray(F,b);case 5:a.t1=a.sent,d=(c=(0,a.t0)(a.t1,3))[0],e=c[1],f=c[2],R(d),U(e),X(f.filter(function(a){return a.balance>=ac})),a.next=18;break;case 15:a.prev=15,a.t2=a.catch(0),console.log(a.t2,"deposit-model-fetch-coin-info");case 18:case"end":return a.stop()}},a,null,[[0,15]])})),function(){return a.apply(this,arguments)})()},[F,I,J,G]);var ad=W.length>0?W.slice(-1)[0]:null,ae=Q.length>0?Q[0]:null,af=T.length>0?T[0]:null,ag=(0,i.useMemo)(function(){if(null===ae)return q.K_.ZERO;var a=null!==ad&&(0,o.Rd)(ae,ad)?ae.balance-ac:ae.balance;return a>q.K_.ZERO?a:q.K_.ZERO},[ae,ad,I]),ah=(0,i.useMemo)(function(){if(null===af)return q.K_.ZERO;var a=null!==ad&&(0,o.Rd)(af,ad)?af.balance-ac:af.balance;return a>q.K_.ZERO?a:q.K_.ZERO},[af,ad,I]),ai=q.K_.ZERO,aj=q.K_.ZERO;G.isInitialized()&&(G.getDepositXAmount(ah)>ag?(ai=ag,aj=(aj=G.getDepositYAmount(ag))<ah?aj:ah):(aj=ah,ai=(ai=G.getDepositXAmount(ah))<ag?ai:ag));var ak=H(G.type.xTokenType),al=H(G.type.yTokenType),am=null!==(b=ak.demical)&& void 0!==b?b:0,an=null!==(c=al.demical)&& void 0!==c?c:0,ao=ak.symbol,ap=al.symbol,aq=null!==(e=ak.logoUrl)&& void 0!==e?e:"/images/token/unknown-token.svg",ar=null!==(f=al.logoUrl)&& void 0!==f?f:"/images/token/unknown-token.svg",as=(0,i.useMemo)(function(){return(0,u.v4)(new o.NS(ag,am).toString(!0),10)},[ag,am]),at=(0,i.useMemo)(function(){return(0,u.v4)(new o.NS(ah,an).toString(!0),10)},[ah,an]),au=(0,i.useMemo)(function(){var a=o.NS.fromString(Z);return null!==a&&a.canAlignTo(am)?a.alignTo(am).value:q.K_.ZERO},[Z,am]),av=(0,i.useMemo)(function(){var a=o.NS.fromString(aa);return null!==a&&a.canAlignTo(an)?a.alignTo(an).value:q.K_.ZERO},[aa,an]),aw=(0,i.useCallback)(function(a){if(""===a){$(""),G.isInitialized()&&ab("");return}if(!(am<=0&&a.indexOf(".")> -1)){var b=o.NS.fromString(a);if(null!==b&&b.canAlignTo(am)&&b.value>=q.K_.ZERO){var c=(b=b.alignTo(am)).value,d=G.getDepositYAmount(c);c<=ag&&(!G.isInitialized()||d<=ah)&&($(a),G.isInitialized()&&ab(new o.NS(d,an).toString()))}}},[ag,ah,am,an,$,ab,G]),ax=(0,i.useCallback)(function(a){if(""===a){ab(""),G.isInitialized()&&$("");return}if(!(an<=0&&a.indexOf(".")> -1)){var b=o.NS.fromString(a);if(null!==b&&b.canAlignTo(an)&&b.value>=q.K_.ZERO){var c=(b=b.alignTo(an)).value,d=G.getDepositXAmount(c);c<=ah&&(!G.isInitialized()||d<=ag)&&(ab(a),G.isInitialized()&&$(new o.NS(d,am).toString()))}}},[ag,ah,am,an,$,ab,G]),ay=null,az=null;null===F?(ay=(m=[z,"Invalid account address"])[0],az=m[1]):null===ad?(ay=(p=[z,"Cannot pay enough gas"])[0],az=p[1]):null===ae||ag===q.K_.ZERO?(ay=(r=[z,"Cannot find avaliable coin ".concat(ak.symbol," to deposit")])[0],az=r[1]):null===af||ah===q.K_.ZERO?(ay=(t=[z,"Cannot find avaliable coin ".concat(al.symbol," to deposit")])[0],az=t[1]):au<=q.K_.ZERO||au>ag?(ay=(w=[z,"Invalid amount input for ".concat(ak.symbol)])[0],az=w[1]):av<=q.K_.ZERO||av>ah?(ay=(x=[z,"Invalid amount input for ".concat(al.symbol)])[0],az=x[1]):G.freeze?(ay=(y=[z,"Pool is freeze for adding liqudity"])[0],az=y[1]):null!==ad&&ad.balance<ac?(ay=(B=[A,"Not enough balance left to pay transaction gas fee"])[0],az=B[1]):au>ai&&G.isInitialized()?(ay=(C=[A,"Input amount for ".concat(ak.symbol," is enough")])[0],az=C[1]):av>aj&&G.isInitialized()?(ay=(D=[A,"Input amount for ".concat(al.symbol," is enough")])[0],az=D[1]):!G.isInitialized()&&av>q.K_.ZERO&&au>q.K_.ZERO&&(ay=(E=["#2e98f1","Pool is initialzed"])[0],az=E[1]);var aA=(0,j.s)(),aB=aA.refresh,aC=(0,i.useCallback)(function(){if(null!==az&&ay===z){(0,v._N)(az);return}var a,b=(a=(0,d.Z)(g().mark(function a(){var b;return g().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,I.addLiqudity({client:J,pool:G,xAmount:au,yAmount:av});case 2:return(b=a.sent).isSuccess()&&(aB(),O()),a.abrupt("return",b);case 5:case"end":return a.stop()}},a)})),function(){return a.apply(this,arguments)});(0,v.pn)(J,"Deposit Coin",b()),void 0!==K&&K()},[az,ay,v._N,aB,au,av,K]),aD=(0,i.useCallback)(function(a,b){var c=ai*a/b,d=aj*a/b,e=new o.NS(ag<c?ag:c,am).toString(!0),f=new o.NS(ah<d?ah:d,an).toString(!0);$(e),ab(f)},[am,an,ai,aj,ag,ah]);return(0,h.jsxs)("div",{className:"modal-wallet-frame",children:[(0,h.jsx)("div",{className:"modal-wallet-title-frame",children:(0,h.jsxs)("span",{children:["Deposit",(0,h.jsx)("span",{children:" "}),(0,h.jsx)("span",{style:{fontWeight:"700",fontSize:"24px",lineHeight:"36px"},children:ao}),(0,h.jsx)("span",{style:{fontWeight:"700",fontSize:"24px",lineHeight:"36px"},children:"/"}),(0,h.jsx)("span",{style:{fontWeight:"700",fontSize:"24px",lineHeight:"36px"},children:ap})]})}),(0,h.jsxs)("div",{className:"modal-deposit-info-frame",children:[(0,h.jsxs)("div",{className:"modal-deposit-panel-frame",children:[(0,h.jsx)(n(),{src:aq,width:29,height:29,style:{borderRadius:"15px",overflow:"hidden"}}),(0,h.jsx)("span",{className:"modal-deposit-panel-token-name-label",children:ao}),(0,h.jsx)("input",{className:"modal-deposit-panel-token-amount-input",placeholder:"0",style:{color:"CUSTOM"===M?"#000000":"#2e98f1"},disabled:G.isInitialized()&&ai<=q.K_.ZERO||"CUSTOM"!==M,value:Z,onInput:function(a){aw(a.target.value)}}),(0,h.jsx)("div",{className:"modal-deposit-panel-token-amount-label-frame",children:(0,h.jsxs)("span",{className:"modal-deposit-panel-token-amount-label",children:[(0,h.jsx)("span",{children:"max: "}),(0,h.jsx)("span",{children:as})]})})]}),(0,h.jsxs)("div",{className:"modal-deposit-panel-frame",children:[(0,h.jsx)(n(),{src:ar,width:29,height:29,style:{borderRadius:"15px",overflow:"hidden"}}),(0,h.jsx)("span",{className:"modal-deposit-panel-token-name-label",children:ap}),(0,h.jsx)("input",{className:"modal-deposit-panel-token-amount-input",placeholder:"0",style:{color:"CUSTOM"===M?"#000000":"#2e98f1"},disabled:G.isInitialized()&&aj<=q.K_.ZERO||"CUSTOM"!==M,value:aa,onInput:function(a){ax(a.target.value)}}),(0,h.jsx)("div",{className:"modal-deposit-panel-token-amount-label-frame",children:(0,h.jsxs)("span",{className:"modal-deposit-panel-token-amount-label",children:[(0,h.jsx)("span",{children:"max: "}),(0,h.jsx)("span",{children:at})]})})]}),(0,h.jsxs)("div",{className:"modal-deposit-panel-quick-select-frame",children:[(0,h.jsx)(k.cc,{selected:"0.2"===M,onClick:function(){G.isInitialized()&&(N("0.2"),aD(BigInt(2),BigInt(10)))},children:"20%"}),(0,h.jsx)(k.cc,{selected:"0.5"===M,onClick:function(){G.isInitialized()&&(N("0.5"),aD(BigInt(1),BigInt(2)))},children:"50%"}),(0,h.jsx)(k.cc,{selected:"0.75"===M,onClick:function(){G.isInitialized()&&(N("0.75"),aD(BigInt(75),BigInt(100)))},children:"75%"}),(0,h.jsx)(k.cc,{selected:"1.0"===M,onClick:function(){G.isInitialized()&&(N("1.0"),aD(BigInt(1),BigInt(1)))},children:"MAX"}),(0,h.jsx)(k.cc,{selected:!1,onClick:function(){"CUSTOM"!==M&&(N("CUSTOM"),$(""),ab(""))},children:"CUSTOM"})]}),null===az||null===ay||""===Z||""===aa?(0,h.jsx)(h.Fragment,{}):(0,h.jsx)(k.OY,{color:ay,message:az}),(0,h.jsx)(k.Hq,{enabled:ay!==z,onClick:aC,icon:!1})]})]})},C=function(a){var b=a.slippageIndex,c=a.onSlippageIndexChange,d=a.customSlippageValue,e=a.onCustomSlippageValueChange,f="Custom"===b;return(0,h.jsxs)("div",{className:"swap-slippage-frame",children:[(0,h.jsxs)(k.cc,{selected:"0.2"===b,onClick:function(){c("0.2")},children:["0.2",(0,h.jsx)("span",{style:{fontWeight:300},children:"%"})]}),(0,h.jsxs)(k.cc,{selected:"0.5"===b,onClick:function(){c("0.5")},children:["0.5",(0,h.jsx)("span",{style:{fontWeight:300},children:"%"})]}),(0,h.jsxs)(k.cc,{selected:"1.0"===b,onClick:function(){c("1.0")},children:["1.0",(0,h.jsx)("span",{style:{fontWeight:300},children:"%"})]}),(0,h.jsxs)(k.cc,{selected:"2.0"===b,onClick:function(){c("2.0")},children:["2.0",(0,h.jsx)("span",{style:{fontWeight:300},children:"%"})]}),(0,h.jsx)(k.cc,{selected:"Disable"===b,onClick:function(){c("Disable")},children:"Disable"}),(0,h.jsxs)("div",{className:f?"swap-slippage-input-frame":"swap-slippage-input-frame-unselected",onClick:function(){!1===f&&c("Custom")},children:[(0,h.jsx)("span",{className:"swap-slippage-input-pre-label",children:"Custom: "}),(0,h.jsx)("input",{className:"swap-slippage-input",style:{width:"25.8px",overflow:"hidden",whiteSpace:"nowrap",cursor:f?void 0:"pointer"},contentEditable:!0,suppressContentEditableWarning:!0,disabled:!f,value:d,onInput:function(a){e(a.target.value)}}),(0,h.jsx)("span",{className:"swap-slippage-input",style:{fontWeight:400},children:"%"})]},f?"swap-slippage-input-frame":"swap-slippage-input-frame-unselected")]})},D=function(){var a,b,c,e,f=(0,j.s)(),m=f.client,x=f.pools,z=f.refresh,A=f.refreshPool,B=f.getCoinUi,D=(0,i.useMemo)(function(){return x.filter(function(a){return a.isAvaliableForSwap()})},[x]),E=(0,i.useMemo)(function(){var a=D.flatMap(function(a){return[a.type.xTokenType,a.type.yTokenType]});return(0,o.hm)(a,function(a){return a.name})},[D]),F=(0,r.O)(),G=F.wallet,H=F.connected,I=F.presentModal,J=(0,s.K)(),K=J.accountAddr,L=J.refreshPositionInfos,M=J.accountCoins,N=J.refreshAccountCoins,O=(0,i.useState)(null),P=O[0],Q=O[1],R=(0,i.useState)(null),S=R[0],T=R[1],U=(0,i.useState)(""),V=U[0],W=U[1],X=(0,i.useState)(""),Y=X[0],Z=X[1],$=(0,i.useState)("Disable"),_=$[0],aa=$[1],ab=(0,i.useState)("0.1"),ac=ab[0],ad=ab[1],ae=(0,i.useMemo)(function(){if(null===P||null===M||null===K||null===m||null===G)return[null,!1];var a=(0,o.r2)(m.getPrimaryCoinType(),P),b=M.filter(function(a){return(0,o.r2)(a.type,P)}),c=q.K_.ZERO;if(a&&(c=G.getSwapEstimatedGas(),b.filter(function(a){return a.balance<=c})),b.sort(function(a,b){return a.balance<b.balance?1:a.balance>b.balance?-1:0}),0===b.length)return[q.K_.ZERO,!1];var d=a&&1===b.length,e=d?b[0].balance-c:b[0].balance;return e<q.K_.ZERO&&(e=q.K_.ZERO),[e,d]},[P,K,M,m,G]),af=ae[0],ag=ae[1],ah=(0,i.useMemo)(function(){return null!==P?B(P):null},[P,B]),ai=(0,i.useMemo)(function(){return null!==S?B(S):null},[S,B]),aj=(0,i.useCallback)(function(a){if(""!==a){var b=o.NS.fromString(a);if(null===b||b.demical>3)return}ad(a)},[]),ak=0;if("0.2"==_)ak=.002;else if("0.5"==_)ak=.005;else if("1.0"==_)ak=.01;else if("2.0"==_)ak=.02;else if("Disable"==_)ak=0;else if("Custom"==_){var al=""!==ac?Number(ac):0;ak=(isNaN(al)?0:al)/100}var am=(0,i.useCallback)(function(){az("from"),aC(!0)},[]),an=(0,i.useCallback)(function(){az("to"),aC(!0)},[]),ao=(0,i.useMemo)(function(){if(null===P||null===S)return null;var a=!0,b=!1,c=void 0;try{for(var d,e=D[Symbol.iterator]();!(a=(d=e.next()).done);a=!0){var f=d.value,g=(0,o.r2)(f.type.xTokenType,P)&&(0,o.r2)(f.type.yTokenType,S),h=(0,o.r2)(f.type.yTokenType,P)&&(0,o.r2)(f.type.xTokenType,S);if(!0===g|| !0===h)return{pool:f,direction:g?"forward":"reverse"}}}catch(i){b=!0,c=i}finally{try{a||null==e.return||e.return()}finally{if(b)throw c}}return null},[D,P,S]);(0,i.useEffect)(function(){z();var a=setInterval(function(){z()},6e4);return function(){return clearInterval(a)}},[z]),(0,i.useEffect)(function(){var a=setInterval(function(){N()},2e4);return function(){return clearInterval(a)}},[N]),(0,i.useEffect)(function(){if(null!==ao){var a=setInterval(function(){A(ao.pool)},5e3);return function(){return clearInterval(a)}}},[ao,A]);var ap=(0,i.useCallback)(function(a){if(null!==P&&null!==ah){var b,c,d=null!==(b=ah.demical)&& void 0!==b?b:0;if(0!=d|| -1===a.indexOf(".")){var e=new o.NS(q.K_.ZERO,d);if(""!==a){if(null===(e=o.NS.fromString(a))||!e.canAlignTo(d))return;e=e.alignTo(d)}if(null!==e){if(W(a),""===a){null!==S&&Z("");return}if(null!==S&&null!==ai&&null!==ao&&ao.pool.isInitialized()){var f="forward"===ao.direction?ao.pool.getXToYAmount(e.value):ao.pool.getYToXAmount(e.value),g=new o.NS(f,null!==(c=ai.demical)&& void 0!==c?c:0).toString();Z(g)}}}}},[P,ah,S,ai,ao]),aq=(0,i.useCallback)(function(a){if(null!==S&&null!==ai){var b,c,d=null!==(b=ai.demical)&& void 0!==b?b:0;if(0!=d|| -1===a.indexOf(".")){var e=new o.NS(q.K_.ZERO,d);if(""!==a){if(null===(e=o.NS.fromString(a))||!e.canAlignTo(d))return;e=e.alignTo(d)}if(null!==e){if(Z(a),""===a){null!==P&&W("");return}if(null!==P&&null!==ah&&null!==ao&&ao.pool.isInitialized()){var f=q.K_.ZERO;if(e.value>q.K_.ZERO){for(var g=q.K_._1E0,h="forward"===ao.direction?ao.pool.x:ao.pool.y;g<h;){var i,j=(g+h)/q.K_.TWO;(i=j,("forward"===ao.direction?ao.pool.getXToYAmount(i):ao.pool.getYToXAmount(i))>=e.value)?h=j:g=j+q.K_.ONE}f=g}var k=new o.NS(f,null!==(c=ah.demical)&& void 0!==c?c:0).toString();W(k)}}}}},[S,ai,P,ah,ao]),ar=(0,i.useCallback)(function(){Q(S),T(P),W(""),Z("")},[P,S]),as=(0,i.useMemo)(function(){if(""===V||null===ah)return q.K_.ZERO;var a,b=null!==(a=ah.demical)&& void 0!==a?a:0,c=o.NS.fromString(V);return null!==c&&c.canAlignTo(b)?c.alignTo(b).value:q.K_.ZERO},[V,ah]),at=(0,i.useMemo)(function(){if(""===Y||null===ai)return q.K_.ZERO;var a,b=null!==(a=ai.demical)&& void 0!==a?a:0,c=o.NS.fromString(Y);return null!==c&&c.canAlignTo(b)?c.alignTo(b).value:q.K_.ZERO},[Y,ai]),au=null;null!==af&&(au=af===q.K_.ZERO?0:Number(as*q.K_._1E7/af)/1e7);var av=(0,i.useCallback)(function(a){if(a<=0||null===P||null===ah||null===af||af<=q.K_.ZERO){W(""),Z("");return}var b,c=null!==(b=ah.demical)&& void 0!==b?b:0,d=af*BigInt(Math.round(1e7*a))/q.K_._1E7;d<=q.K_.ZERO?d=q.K_.ZERO:d>=af&&(d=af);var e=new o.NS(d,c);ap(e.toString())},[ap,P,ah,af]),aw=(0,i.useMemo)(function(){if(null===ao||null===ah||null===ai||ao.pool.x<=q.K_.ZERO||ao.pool.y<=q.K_.ZERO)return null;var a,b,c,d,e=(0,l.Z)("forward"===ao.direction?[as,at]:[at,as],2),f=e[0],g=e[1];if(f===q.K_.ZERO||g===q.K_.ZERO)return null;var h=(0,l.Z)("forward"===ao.direction?[null!==(a=ah.demical)&& void 0!==a?a:0,null!==(b=ai.demical)&& void 0!==b?b:0]:[null!==(c=ai.demical)&& void 0!==c?c:0,null!==(d=ah.demical)&& void 0!==d?d:0],2),i=h[0],j=h[1],k=(0,t.$)(BigInt(10),i),m=(0,t.$)(BigInt(10),j),n=ao.pool.y*k,p=ao.pool.x*m,r=g*k,s=f*m,u=p>n,v=s>r,w=new o.NS(u?p*BigInt(1e8)/n:n*BigInt(1e8)/p,8),x=new o.NS(v?s*BigInt(1e8)/r:r*BigInt(1e8)/s,8),y=u?1/w.toNumber():w.toNumber(),z=v?1/x.toNumber():x.toNumber();return[{df:x,inverse:v,value:z},{df:w,inverse:u,value:y}]},[ao,ah,ai,as,at]),ax=(0,i.useState)("initial"),ay=ax[0],az=ax[1],aA=(0,i.useState)(!1),aB=aA[0],aC=aA[1],aD=(0,i.useCallback)(function(a,b){return null===a||null===b||D.some(function(c){return c.isCapableSwappingForCoins(a,b)})},[D]),aE=(0,i.useMemo)(function(){return"from"===ay?E:"to"===ay?E.filter(function(a){return(null===P||a.name!==P.name)&&(null===S||a.name!==S.name)&&aD(P,a)}):[]},[E,P,S,ay,aD]),aF=(0,i.useMemo)(function(){return aE.map(function(a){return[a,B(a)]})},[aE,B]),aG=(0,i.useState)(!1),aH=aG[0],aI=aG[1],aJ=(0,i.useState)(!1),aK=aJ[0],aL=aJ[1];(0,i.useEffect)(function(){aH&&null!==P&&null!==S&&null!==ah&&null!==ai&&(ap(V),aI(!1))},[P,S,ah,ai,V,aH]),(0,i.useEffect)(function(){aK&&null!==P&&null!==S&&null!==ah&&null!==ai&&(aq(Y),aL(!1))},[P,S,ah,ai,Y,aK]);var aM=(0,i.useCallback)(function(a){aC(!1);var b=P,c=S;"from"===ay?(b=a,null!==S&&((0,o.r2)(S,a)||!aD(a,S))&&(c=null)):"to"===ay&&(c=a,null!==P&&((0,o.r2)(P,a)||!aD(P,a))&&(b=null)),Q(b),T(c),""!==V&&null!==b&&"to"===ay?aI(!0):""!==Y&&null!==c&&"from"===ay?aq(Y):(W(""),Z(""))},[ay,aD,ap,aq,P,S,V,Y,B]),aN=null,aO=null,aP="#d83939";if(null!==G&&"connected"===H&&null!==K){if(null===ao&&(null===P||null===S))aN="Please select the correct tokens for swapping",aO="error",aP="#d83939";else if(null!==P&&(null===af||af===q.K_.ZERO||as>af))aN=ag?"No enough balance to swap (gas include)":"No enough balance to swap",aO="error",aP="#d83939";else if(as<=q.K_.ZERO&&""!==V)aN="Not correct input value",aO="error",aP="#d83939";else if(isNaN(ak)||ak<0)aN="Invalid slipplage input",aO="error",aP="#d83939";else if(null===ao&&null!==P&&null!==S)aN="Could not find pool(s) for swapping",aO="error",aP="#d83939";else if(null!==ao&&null!==ao.pool.getNotAvaliableForSwapReason())aN=ao.pool.getNotAvaliableForSwapReason(),aO="error",aP="#d83939";else if(as>q.K_.ZERO&&at===q.K_.ZERO)aN="Estimated output amount is zero",aO="warning",aP="#d88f39";else if(as<=q.K_.ZERO&&""===V)aN="Not correct input value",aO="error-not-show",aP="#d83939";else if(null===P||null===S)aN="Invalid coin input",aO="error-not-show",aP="#d83939";else if(null===ao&&(null===P||null===S))aN="No token pair select",aO="error-not-show",aP="#d83939";else if(null!==aw){var aQ=aw[0],aR=aw[1],aS=function(a){return(0,u.IZ)(a,10)},aT=aQ.inverse?(0,h.jsx)("span",{children:aS(aQ.value.toFixed(aQ.df.demical))}):(0,h.jsx)(k.$z,{value:aQ.df}),aU=aR.inverse?(0,h.jsx)("span",{children:aS(aR.value.toFixed(aR.df.demical))}):(0,h.jsx)(k.$z,{value:aR.df});aN=(0,h.jsxs)("span",{children:["Swap price: ",aT,"(pool price: ",aU,")"]}),aO="info",aP="#2e98f1"}}else aN="Wallet is either not connected or cannot sign transaction",aO="warning",aP="#d88f39";var aV=(0,i.useCallback)(function(){if(null!==m&&null!==ao&&null!==ah&&null!==ai&&null!==G&&as!==q.K_.ZERO){"forward"===ao.direction?ao.pool.getXToYMinOutputAmount:ao.pool.getYToXMinOutputAmount;var a,b=ak<=0?void 0:"forward"===ao.direction?ao.pool.getXToYMinOutputAmount(as,ak):ao.pool.getYToXMinOutputAmount(as,ak),c=(a=(0,d.Z)(g().mark(function a(){var c;return g().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,G.swap({client:m,pool:ao.pool,direction:ao.direction,amount:as,minOutputAmount:b});case 2:return(c=a.sent).isSuccess()&&(z(),L(),N(),W(""),Z("")),a.abrupt("return",c);case 5:case"end":return a.stop()}},a)})),function(){return a.apply(this,arguments)});(0,v.pn)(m,"Swap Coin ".concat(ah.symbol," to ").concat(ai.symbol),c())}},[m,ao,ah,ai,G,as,at,ak,z,L,N,v.pn,W,Z]),aW="error"!==aO&&"error-not-show"!==aO;return(0,h.jsxs)("div",{className:"swap-frame",children:[(0,h.jsx)("div",{className:"swap-frame-title-frame",children:(0,h.jsx)("span",{children:"Exchange Token"})}),(0,h.jsxs)("div",{className:"swap-frame-panel-and-slippage-frame",children:[(0,h.jsxs)("div",{className:"swap-frame-panel-frame-outer-frame",children:[(0,h.jsxs)("div",{className:"swap-frame-panel-from-outer-frame",children:[(0,h.jsx)("div",{className:"swap-frame-panel-token-frame",children:(0,h.jsx)("div",{className:"swap-frame-panel-token-info-frame",children:null===ah?(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)("div",{className:"swap-frame-panel-token-info-left-frame",children:[(0,h.jsx)("span",{className:"swap-frame-panel-token-info-left-frame-title",children:"From"}),(0,h.jsx)("span",{className:"swap-frame-panel-token-info-left-frame-span",children:"Select Your Token"})]}),(0,h.jsxs)("div",{className:"swap-frame-panel-token-info-right-select-token-frame",onClick:am,children:[(0,h.jsx)("span",{children:"Token"}),(0,h.jsx)("div",{style:{display:"flex",flexDirection:"row",alignItems:"flex-start",padding:"4px 0px 0px 4px"},children:(0,h.jsx)(p.GG,{size:12,color:"#9da3ae"})})]})]}):(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)("div",{className:"swap-frame-panel-token-info-left-frame",children:[(0,h.jsx)("span",{className:"swap-frame-panel-token-info-left-frame-title",children:"From"}),(0,h.jsx)("input",{value:V,onInput:function(a){ap(a.target.value)},className:"swap-frame-panel-token-info-left-frame-input",placeholder:"0.0"})]}),(0,h.jsx)("div",{className:"swap-frame-panel-token-info-right-token-info-frame",onClick:am,children:(0,h.jsxs)("div",{className:"swap-frame-panel-token-info-right-token-info-inner-frame",children:[(0,h.jsx)(n(),{src:null!==(a=ah.logoUrl)&& void 0!==a?a:q.d_.DEFAULT_UNKNOWN_COIN_UI_LOGO_PATH,width:29,height:29}),(0,h.jsx)("span",{className:"swap-frame-panel-token-info-right-token-info-inner-frame-token-title",children:ah.symbol})]})})]})})}),(0,h.jsxs)("div",{className:"swap-frame-panel-from-hint-info-frame",children:[null!==au&&null!==af?(0,h.jsxs)("span",{className:"swap-frame-panel-from-hint-text",children:[(0,h.jsxs)("span",{style:{fontWeight:700},children:[(100*au).toFixed(2),(0,h.jsx)("span",{children:"%"})]}),(0,h.jsxs)("span",{children:["(",(0,h.jsx)(k.$z,{value:new o.NS(as,null!==(b=null==ah?void 0:ah.demical)&& void 0!==b?b:0)}),(0,h.jsx)("span",{children:"/"}),(0,h.jsx)(k.$z,{value:new o.NS(af,null!==(c=null==ah?void 0:ah.demical)&& void 0!==c?c:0)}),")"]})]}):(0,h.jsx)(h.Fragment,{}),(0,h.jsxs)("div",{className:"swap-frame-panel-from-fast-set-button-group",children:[(0,h.jsx)("a",{className:"swap-frame-panel-from-fast-set-button",onClick:function(){av(.25)},children:"25%"}),(0,h.jsx)("a",{className:"swap-frame-panel-from-fast-set-button",onClick:function(){av(.5)},children:"50%"}),(0,h.jsx)("a",{className:"swap-frame-panel-from-fast-set-button",onClick:function(){av(.75)},children:"75%"}),(0,h.jsx)("a",{className:"swap-frame-panel-from-fast-set-button",onClick:function(){av(1)},children:"MAX"}),(0,h.jsx)("a",{className:"swap-frame-panel-from-fast-set-button",onClick:function(){av(0)},children:"RESET"})]})]})]}),(0,h.jsx)("div",{onClick:ar,style:{width:18,height:18,cursor:"pointer"},children:(0,h.jsx)(p.G4,{size:18,color:"#000000"})}),(0,h.jsx)("div",{className:"swap-frame-panel-token-frame",children:(0,h.jsx)("div",{className:"swap-frame-panel-token-info-frame",children:null===ai?(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)("div",{className:"swap-frame-panel-token-info-left-frame",children:[(0,h.jsx)("span",{className:"swap-frame-panel-token-info-left-frame-title",children:"To"}),(0,h.jsx)("span",{className:"swap-frame-panel-token-info-left-frame-span",children:"Select Your Token"})]}),(0,h.jsxs)("div",{className:"swap-frame-panel-token-info-right-select-token-frame",onClick:an,children:[(0,h.jsx)("span",{children:"Token"}),(0,h.jsx)("div",{style:{display:"flex",flexDirection:"row",alignItems:"flex-start",padding:"4px 0px 0px 4px"},children:(0,h.jsx)(p.GG,{size:12,color:"#9da3ae"})})]})]}):(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)("div",{className:"swap-frame-panel-token-info-left-frame",children:[(0,h.jsx)("span",{className:"swap-frame-panel-token-info-left-frame-title",children:"To"}),(0,h.jsx)("input",{value:Y,onInput:function(a){aq(a.target.value)},className:"swap-frame-panel-token-info-left-frame-input",placeholder:"0.0"})]}),(0,h.jsx)("div",{className:"swap-frame-panel-token-info-right-token-info-frame",onClick:an,children:(0,h.jsxs)("div",{className:"swap-frame-panel-token-info-right-token-info-inner-frame",children:[(0,h.jsx)(n(),{src:null!==(e=ai.logoUrl)&& void 0!==e?e:q.d_.DEFAULT_UNKNOWN_COIN_UI_LOGO_PATH,width:29,height:29}),(0,h.jsx)("span",{className:"swap-frame-panel-token-info-right-token-info-inner-frame-token-title",children:ai.symbol})]})})]})})}),null===aN||"error-not-show"===aO?(0,h.jsx)(h.Fragment,{}):(0,h.jsx)(k.OY,{color:aP,message:aN})]}),(0,h.jsx)(C,{slippageIndex:_,onSlippageIndexChange:aa,customSlippageValue:ac,onCustomSlippageValueChange:aj})]}),"connected"===H?(0,h.jsx)(k.LB,{text:"Swap",onClick:aV,avaliable:aW}):(0,h.jsx)(k.LB,{text:"Connect Wallet",onClick:I,avaliable:!0}),(0,h.jsx)(w.u,{presented:aB,setPresented:aC,children:(0,h.jsx)(y,{coinTypeAndUis:aF,onSelectCoinType:aM})})]})},E=function(){return(0,h.jsxs)("div",{className:"swap-section-frame",children:[(0,h.jsx)(k.NZ,{children:"Swap"}),(0,h.jsx)(D,{})]})},F=c(79097),G=function(a){var b,c,d,e,f=a.poolInfo,g=a.getCoinUi,i=a.onClickDeposit,j=a.depositButtonEnabled,l=g(f.type.xTokenType),m=g(f.type.yTokenType),o=f.getPrice()*Math.pow(10,null!==(b=l.demical)&& void 0!==b?b:0)/Math.pow(10,null!==(c=m.demical)&& void 0!==c?c:0);return(0,h.jsxs)("div",{className:"pool-info-frame",children:[(0,h.jsxs)("div",{className:"pool-info-left-frame",children:[(0,h.jsx)("span",{className:"pool-info-left-frame-title",children:"Pool Token"}),(0,h.jsxs)("div",{className:"pool-info-left-frame-detail-frame",children:[(0,h.jsxs)("div",{className:"pool-info-left-frame-detail-frame-token-pair",children:[(0,h.jsx)("div",{style:{borderRadius:"17px",overflow:"hidden",position:"absolute"},children:(0,h.jsx)(n(),{src:null!==(d=l.logoUrl)&& void 0!==d?d:q.d_.DEFAULT_UNKNOWN_COIN_UI_LOGO_PATH,width:29,height:29})}),(0,h.jsx)("div",{style:{borderRadius:"17px",overflow:"hidden",margin:"0px 0px 0px 17px"},children:(0,h.jsx)(n(),{src:null!==(e=m.logoUrl)&& void 0!==e?e:q.d_.DEFAULT_UNKNOWN_COIN_UI_LOGO_PATH,width:29,height:29})})]}),(0,h.jsxs)("span",{className:"pool-info-left-frame-detail-frame-token-pair-info",children:[(0,h.jsx)("span",{children:l.symbol}),(0,h.jsx)("span",{style:{fontWeight:400},children:"/"}),(0,h.jsx)("span",{children:m.symbol})]})]})]}),(0,h.jsxs)("div",{className:"pool-info-middle-frame-detail-frame",children:[(0,h.jsx)("span",{className:"pool-info-left-frame-title",children:"Price"}),(0,h.jsx)("div",{className:"pool-info-middle-frame-detail-frame-price-info",children:(0,h.jsxs)("span",{children:[(0,h.jsx)("span",{children:(0,u.IZ)(o.toFixed(8))}),(0,h.jsx)("span",{children:" "}),(0,h.jsxs)("span",{style:{fontWeight:"600",fontSize:"12px",lineHeight:"18px",color:"#9da3ae"},children:[l.symbol,"/",m.symbol]})]})})]}),(0,h.jsx)(k.Hq,{enabled:j,icon:!0,onClick:function(){void 0!==i&&i(f)}})]})},H=function(a){var b=a.pools,c=a.getCoinUi,d=a.onClickDeposit,e=a.depositButtonEnabled;return(0,h.jsx)("div",{className:"pool-panel-frame",children:b.map(function(a){return(0,h.jsx)(G,{depositButtonEnabled:e,poolInfo:a,getCoinUi:c,onClickDeposit:d},"".concat(a.addr,"-").concat(a.type.xTokenType.name,"-").concat(a.type.yTokenType.name))})})},I=function(a){var b=a.pools,c=a.getCoinUi,d=a.onClickDeposit,e=a.depositButtonEnabled;return(0,h.jsxs)("div",{className:"pool-section-frame",children:[(0,h.jsx)(k.NZ,{children:"Pool"}),(0,h.jsx)(H,{getCoinUi:c,depositButtonEnabled:e,pools:b,onClickDeposit:d})]})},J=c(49694),K=function(){var a,b,c,d=(0,J.Yb)(),e=null!==(a=d.twitter)&& void 0!==a?a:"https://twitter.com",f=null!==(b=d.github)&& void 0!==b?b:"https://github.com/vividnetwork",g=null!==(c=d.discord)&& void 0!==c?c:"https://discord.com";return(0,h.jsxs)("div",{className:"bottom-section-frame",children:[(0,h.jsxs)("div",{className:"bottom-section-frame-inner-frame",children:[(0,h.jsxs)("div",{className:"bottom-section-frame-inner-frame-left-frame",children:[(0,h.jsx)(p.TR,{size:60}),(0,h.jsx)("span",{children:"Vivid Network"})]}),(0,h.jsxs)("div",{className:"bottom-section-frame-inner-frame-right-frame",children:[(0,h.jsx)(F.iv,{href:e,children:"Twitter"}),(0,h.jsx)(F.iv,{href:f,children:"Github"}),(0,h.jsx)(F.iv,{href:g,children:"Discord"})]})]}),(0,h.jsx)("div",{style:{width:"1px",height:"80px"}})]})},L=function(a){var b=a.onClick,c=a.wallet,d=a.client,e=a.enabledMintButton,f=[],g=(0,J.$1)("app-position-section-extra-buttons");return void 0!==g&&(f=g.map(function(a){var b=a.title,f=a.action;return(0,h.jsx)("button",{disabled:!e,onClick:function(){null!==c&&null!==d&& void 0!==c.executeRawTransaction&&(0,v.pn)(d,b[0]+" "+b[1],c.executeRawTransaction(d,f))},className:"position-mint-token-frame-button",children:(0,h.jsxs)("span",{className:"position-mint-token-frame-button-inner-span",children:[b[0]," ",(0,h.jsxs)("span",{style:{fontWeight:700},children:[b[1],"!"]})]})},b[0]+b[1])})),(0,h.jsxs)("div",{className:"position-mint-token-frame",children:[(0,h.jsx)("span",{className:"position-mint-token-frame-title",children:"Mint Some Test Token For Test"}),(0,h.jsxs)("div",{className:"position-button-group-frame",children:[(0,h.jsx)("button",{disabled:!e,onClick:b,className:"position-mint-token-frame-button",children:(0,h.jsxs)("span",{className:"position-mint-token-frame-button-inner-span",children:["Mint ",(0,h.jsx)("span",{style:{fontWeight:700},children:"tAPTS!"})]})},"uniq-mint-tAPTS"),f]})]})},M=function(a){var b,c,d,e,f=a.positionInfo,g=a.getCoinUi,i=a.onClickHarvestButton,j=f.poolInfo,m=j.type.xTokenType,p=j.type.yTokenType,r=g(m),s=g(p),t=f.getShareRatio(),v=(0,l.Z)(f.getShareCoinAmounts(),2),w=v[0],x=v[1],y="";y=t<1e-4?(0,u.IZ)((1e4*t).toFixed(8),8)+"‱":t<.001?(0,u.IZ)((1e3*t).toFixed(8),8)+"‰":(0,u.IZ)(Math.min(100*t,100).toFixed(8),8)+"%";var z=new o.NS(w,null!==(b=r.demical)&& void 0!==b?b:0),A=new o.NS(x,null!==(c=s.demical)&& void 0!==c?c:0),B=null!==(d=r.logoUrl)&& void 0!==d?d:q.d_.DEFAULT_UNKNOWN_COIN_UI_LOGO_PATH,C=null!==(e=s.logoUrl)&& void 0!==e?e:q.d_.DEFAULT_UNKNOWN_COIN_UI_LOGO_PATH;return(0,h.jsxs)("div",{className:"pool-info-frame",children:[(0,h.jsxs)("div",{className:"pool-info-left-frame",children:[(0,h.jsx)("span",{className:"pool-info-left-frame-title",children:"Pool Token"}),(0,h.jsxs)("div",{className:"pool-info-left-frame-detail-frame",children:[(0,h.jsxs)("div",{className:"pool-info-left-frame-detail-frame-token-pair",children:[(0,h.jsx)("div",{style:{borderRadius:"17px",overflow:"hidden",position:"absolute"},children:(0,h.jsx)(n(),{src:B,width:29,height:29})}),(0,h.jsx)("div",{style:{borderRadius:"17px",overflow:"hidden",margin:"0px 0px 0px 17px"},children:(0,h.jsx)(n(),{src:C,width:29,height:29})})]}),(0,h.jsxs)("span",{className:"pool-info-left-frame-detail-frame-token-pair-info",children:[(0,h.jsx)("span",{children:r.symbol}),(0,h.jsx)("span",{style:{fontWeight:400},children:"/"}),(0,h.jsx)("span",{children:s.symbol})]})]})]}),(0,h.jsxs)("div",{className:"pool-info-middle-frame-detail-frame",style:{width:"90px"},children:[(0,h.jsx)("span",{className:"pool-info-left-frame-title",children:"Share"}),(0,h.jsx)("div",{className:"pool-info-middle-frame-detail-frame-price-info",children:(0,h.jsx)("span",{children:y})})]}),(0,h.jsxs)("div",{className:"pool-info-middle-frame-detail-frame",style:{width:"260px"},children:[(0,h.jsx)("span",{className:"pool-info-left-frame-title",children:"Value"}),(0,h.jsx)("div",{className:"pool-info-middle-frame-detail-frame-price-info",children:(0,h.jsxs)("span",{children:[(0,h.jsx)(k.$z,{fontSize:16,value:z}),(0,h.jsx)("span",{style:{fontWeight:"600",fontSize:"12px",lineHeight:"18px",color:"#9da3ae"},children:" "}),(0,h.jsx)("span",{style:{fontWeight:"600",fontSize:"12px",lineHeight:"18px",color:"#9da3ae"},children:r.symbol}),(0,h.jsx)("span",{style:{fontWeight:"600",fontSize:"12px",lineHeight:"18px",color:"#9da3ae"},children:"/"}),(0,h.jsx)(k.$z,{fontSize:16,value:A}),(0,h.jsx)("span",{style:{fontWeight:"600",fontSize:"12px",lineHeight:"18px",color:"#9da3ae"},children:" "}),(0,h.jsx)("span",{style:{fontWeight:"600",fontSize:"12px",lineHeight:"18px",color:"#9da3ae"},children:s.symbol})]})})]}),(0,h.jsx)(k.eV,{enabled:!0,onClick:i})]})},N=function(a){var b=a.wallet,c=a.client,d=a.positionInfos,e=a.getCoinUi,f=a.onClickPositionInfoHarvestButton,g=a.onClickMintTestToken,i=a.enabledMintButton;return(0,h.jsxs)("div",{className:"position-panel-frame",children:[(null!=d?d:[]).map(function(a){return(0,h.jsx)(M,{positionInfo:a,getCoinUi:e,onClickHarvestButton:function(){void 0!==f&&f(a)}},a.lspCoin.addr)}),(0,h.jsx)(L,{wallet:b,client:c,enabledMintButton:i,onClick:g})]})},O=function(a){var b=a.wallet,c=a.client,d=a.positionInfos,e=a.getCoinUi,f=a.onClickPositionInfoHarvestButton,g=a.enabledMintButton,i=a.onClickMintTestToken;return(0,h.jsxs)("div",{className:"position-section-frame",children:[(0,h.jsx)(k.NZ,{children:"Position"}),(0,h.jsx)(N,{wallet:b,client:c,positionInfos:d,getCoinUi:e,onClickPositionInfoHarvestButton:f,enabledMintButton:g,onClickMintTestToken:i})]})},P=function(a){var b,c,d=a.coin,e=a.coinUi,f=new o.NS(d.balance,null!==(b=e.demical)&& void 0!==b?b:0);return(0,h.jsxs)("div",{className:"balance-info-frame",children:[(0,h.jsxs)("div",{className:"balance-info-token-name-frame",children:[(0,h.jsx)("span",{className:"balance-info-title-span",children:"Token"}),(0,h.jsxs)("div",{className:"balance-info-token-info-frame",children:[(0,h.jsx)(n(),{src:null!==(c=e.logoUrl)&& void 0!==c?c:"/images/token/unknown-token.svg",width:29,height:29}),(0,h.jsxs)("span",{children:[(0,h.jsx)("span",{style:{fontStyle:"normal",fontWeight:"600",fontSize:"20px",lineHeight:"30px",color:"#000000"},children:e.symbol}),(0,h.jsx)("span",{style:{fontStyle:"normal",fontWeight:"600",fontSize:"12px",lineHeight:"18px",color:"#9da3ae"},children:void 0!==e.name?(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("span",{children:"("}),e.name,(0,h.jsx)("span",{children:")"})]}):(0,h.jsx)(h.Fragment,{})})]})]})]}),(0,h.jsxs)("div",{className:"balance-info-balance-amount-frame",children:[(0,h.jsx)("span",{className:"balance-info-title-span",children:"Balance"}),(0,h.jsxs)("span",{style:{},children:[(0,h.jsxs)("span",{style:{fontStyle:"normal",fontWeight:"600",fontSize:"16px",lineHeight:"24px",color:"#000000"},children:[(0,h.jsx)(k.$z,{fontSize:16,hintFontSize:8,value:f,width:13}),(0,h.jsx)("span",{children:" "})]}),(0,h.jsx)("span",{style:{fontStyle:"normal",fontWeight:"600",fontSize:"12px",lineHeight:"18px",color:"#9da3ae"},children:e.symbol})]})]})]})},Q=function(a){var b=a.info;return(0,h.jsxs)("div",{className:"balance-section-frame",children:[(0,h.jsx)(k.NZ,{children:"Balance"}),b.map(function(a){var b=(0,l.Z)(a,2),c=b[0],d=b[1];return(0,h.jsx)(P,{coin:c,coinUi:d},"".concat(c.addr,"-").concat(c.type.name))})]})},R=function(){var a=(0,j.s)(),b=a.client,c=a.coins,f=a.getCoinUi,l=a.pools,m=a.refresh,n=(0,i.useMemo)(function(){var a=(0,e.Z)(l);return a.sort(function(a,b){var c;return(a.isAvaliableForSwap()?0:1)-(b.isAvaliableForSwap()?0:1)}),a},[l]),o=(0,i.useMemo)(function(){return n.filter(function(a){return!1===a.freeze})},[n]),p=(0,r.O)(),q=p.wallet,u=p.connected,x=(0,s.K)(),y=x.accountAddr,z=x.positionInfos,A=x.refreshPositionInfos,C=x.accountCoins,D=x.refreshAccountCoins,G=(0,i.useMemo)(function(){return new Set(c.map(function(a){return a.name}))},[c]),H=null!==q&&"connected"===u&&null!==y,J=(0,i.useCallback)(function(a){if(null===q|| !1===H||null===b){(0,v._N)("Cannot correctly sign the operation, wallet is either not connected or we could not operate the sign operation");return}var c,e=(c=(0,d.Z)(g().mark(function c(){var d;return g().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,q.removeLiqudity({client:b,positionInfo:a});case 3:return d=c.sent,A(),m(),c.abrupt("return",d);case 9:throw c.prev=9,c.t0=c.catch(0),c.t0;case 12:case"end":return c.stop()}},c,null,[[0,9]])})),function(){return c.apply(this,arguments)});(0,v.pn)(b,"Harvest Position",e())},[q,H,v.pn,v._N,A,m]),L=(0,i.useState)(null),M=L[0],N=L[1],P=(0,i.useState)(!1),R=P[0],S=P[1],T=(0,i.useCallback)(function(a){N(a),S(!0)},[]),U=(0,i.useCallback)(function(){if(!H||null===b){(0,v._N)("Wallet is not connected or encoutering error when signing");return}var a,c,e=null!==(a=f(q.getMintTestCoinType()).demical)&& void 0!==a?a:0,h=(c=(0,d.Z)(g().mark(function a(){var c;return g().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,q.mintTestCoin({client:b,amount:BigInt(1e3)*(0,t.$)(BigInt(10),e)});case 2:return c=a.sent,D(),a.abrupt("return",c);case 5:case"end":return a.stop()}},a)})),function(){return c.apply(this,arguments)});(0,v.pn)(b,"Mint Test Token",h())},[H,b,q,v.pn,D,f]),V=(0,i.useMemo)(function(){return Array.from(null!=C?C:[]).filter(function(a){return G.has(a.type.name)}).sort(function(a,b){return a.type.name<b.type.name?-1:a.type.name>b.type.name?1:0}).map(function(a){return[a,f(a.type)]})},[C,G,f]);return(0,h.jsxs)("div",{children:[(0,h.jsxs)(k.Ku,{width:1290,children:[(0,h.jsx)(F.Oh,{}),(0,h.jsx)(E,{}),V.length>0?(0,h.jsx)(Q,{info:V}):(0,h.jsx)(h.Fragment,{}),(0,h.jsx)(O,{wallet:q,client:b,positionInfos:z,getCoinUi:f,onClickPositionInfoHarvestButton:J,onClickMintTestToken:U,enabledMintButton:H}),(0,h.jsx)(I,{pools:o,getCoinUi:f,onClickDeposit:T,depositButtonEnabled:H}),(0,h.jsx)(k.nv,{}),(0,h.jsx)(K,{})]}),(0,h.jsx)(w.u,{presented:R,setPresented:S,children:(0,h.jsx)(B,{poolInfo:M,getCoinUi:f,wallet:q,client:b,accountAddr:y,dismissModal:function(){S(!1)}})})]})},S=function(){return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(k.UJ,{}),(0,h.jsx)(w.t,{children:(0,h.jsx)(r.z,{children:(0,h.jsx)(j.R,{children:(0,h.jsxs)(s.S,{children:[(0,h.jsx)(R,{}),(0,h.jsx)(v.tP,{})]})})})})]})}}},function(a){a.O(0,[675,218,192,111,774,888,179],function(){var b;return a(a.s=89301)}),_N_E=a.O()}])