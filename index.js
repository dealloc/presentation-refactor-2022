(()=>{var Nu=Object.create;var da=Object.defineProperty;var Iu=Object.getOwnPropertyDescriptor;var zu=Object.getOwnPropertyNames;var _u=Object.getPrototypeOf,Ou=Object.prototype.hasOwnProperty;var $u=(D,n)=>()=>(n||D((n={exports:{}}).exports,n),n.exports);var Uu=(D,n,a,s)=>{if(n&&typeof n=="object"||typeof n=="function")for(let u of zu(n))!Ou.call(D,u)&&u!==a&&da(D,u,{get:()=>n[u],enumerable:!(s=Iu(n,u))||s.enumerable});return D};var qu=(D,n,a)=>(a=D!=null?Nu(_u(D)):{},Uu(n||!D||!D.__esModule?da(a,"default",{value:D,enumerable:!0}):a,D));var ka=$u((Yi,Xi)=>{(function(D,n){typeof Yi=="object"&&typeof Xi<"u"?Xi.exports=n():typeof define=="function"&&define.amd?define(n):(D=typeof globalThis<"u"?globalThis:D||self).RevealNotes=n()})(Yi,function(){"use strict";var D=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=function(i){return i&&i.Math==Math&&i},a=n(typeof globalThis=="object"&&globalThis)||n(typeof window=="object"&&window)||n(typeof self=="object"&&self)||n(typeof D=="object"&&D)||function(){return this}()||Function("return this")(),s={},u=function(i){try{return!!i()}catch{return!0}},m=!u(function(){return Object.defineProperty({},1,{get:function(){return 7}})[1]!=7}),f={},y={}.propertyIsEnumerable,g=Object.getOwnPropertyDescriptor,$=g&&!y.call({1:2},1);f.f=$?function(i){var e=g(this,i);return!!e&&e.enumerable}:y;var q=function(i,e){return{enumerable:!(1&i),configurable:!(2&i),writable:!(4&i),value:e}},C={}.toString,R=function(i){return C.call(i).slice(8,-1)},_=R,p="".split,dt=u(function(){return!Object("z").propertyIsEnumerable(0)})?function(i){return _(i)=="String"?p.call(i,""):Object(i)}:Object,V=function(i){if(i==null)throw TypeError("Can't call method on "+i);return i},kt=dt,Pt=V,G=function(i){return kt(Pt(i))},H=function(i){return typeof i=="object"?i!==null:typeof i=="function"},J=H,ot=function(i,e){if(!J(i))return i;var t,r;if(e&&typeof(t=i.toString)=="function"&&!J(r=t.call(i))||typeof(t=i.valueOf)=="function"&&!J(r=t.call(i))||!e&&typeof(t=i.toString)=="function"&&!J(r=t.call(i)))return r;throw TypeError("Can't convert object to primitive value")},Q=V,I=function(i){return Object(Q(i))},W=I,ct={}.hasOwnProperty,it=function(i,e){return ct.call(W(i),e)},lt=H,A=a.document,Y=lt(A)&&lt(A.createElement),Z=function(i){return Y?A.createElement(i):{}},vt=Z,yt=!m&&!u(function(){return Object.defineProperty(vt("div"),"a",{get:function(){return 7}}).a!=7}),Mt=m,tt=f,Mn=q,Nn=G,In=ot,zn=it,_n=yt,Je=Object.getOwnPropertyDescriptor;s.f=Mt?Je:function(i,e){if(i=Nn(i),e=In(e,!0),_n)try{return Je(i,e)}catch{}if(zn(i,e))return Mn(!tt.f.call(i,e),i[e])};var Et={},Re=H,ft=function(i){if(!Re(i))throw TypeError(String(i)+" is not an object");return i},On=m,$n=yt,Le=ft,Qe=ot,ie=Object.defineProperty;Et.f=On?ie:function(i,e,t){if(Le(i),e=Qe(e,!0),Le(t),$n)try{return ie(i,e,t)}catch{}if("get"in t||"set"in t)throw TypeError("Accessors not supported");return"value"in t&&(i[e]=t.value),i};var Un=Et,Ge=q,_t=m?function(i,e,t){return Un.f(i,e,Ge(1,t))}:function(i,e,t){return i[e]=t,i},Ct={exports:{}},pt=a,tn=_t,ge=function(i,e){try{tn(pt,i,e)}catch{pt[i]=e}return e},Te=ge,Be="__core-js_shared__",Pe=a[Be]||Te(Be,{}),fe=Pe,Ft=Function.toString;typeof fe.inspectSource!="function"&&(fe.inspectSource=function(i){return Ft.call(i)});var Ot=fe.inspectSource,en=Ot,Me=a.WeakMap,nn=typeof Me=="function"&&/native code/.test(en(Me)),re={exports:{}},Wt=Pe;(re.exports=function(i,e){return Wt[i]||(Wt[i]=e!==void 0?e:{})})("versions",[]).push({version:"3.12.1",mode:"global",copyright:"\xA9 2021 Denis Pushkarev (zloirock.ru)"});var ae,Kt,Vt,rn=0,se=Math.random(),Ne=function(i){return"Symbol("+String(i===void 0?"":i)+")_"+(++rn+se).toString(36)},oe=re.exports,qn=Ne,an=oe("keys"),bt=function(i){return an[i]||(an[i]=qn(i))},me={},Hn=nn,jn=H,Ie=_t,ve=it,le=Pe,Rt=bt,sn=me,on="Object already initialized",ln=a.WeakMap;if(Hn||le.state){var Lt=le.state||(le.state=new ln),Nt=Lt.get,ze=Lt.has,Wn=Lt.set;ae=function(i,e){if(ze.call(Lt,i))throw new TypeError(on);return e.facade=i,Wn.call(Lt,i,e),e},Kt=function(i){return Nt.call(Lt,i)||{}},Vt=function(i){return ze.call(Lt,i)}}else{var $t=Rt("state");sn[$t]=!0,ae=function(i,e){if(ve(i,$t))throw new TypeError(on);return e.facade=i,Ie(i,$t,e),e},Kt=function(i){return ve(i,$t)?i[$t]:{}},Vt=function(i){return ve(i,$t)}}var ye={set:ae,get:Kt,has:Vt,enforce:function(i){return Vt(i)?Kt(i):ae(i,{})},getterFor:function(i){return function(e){var t;if(!jn(e)||(t=Kt(e)).type!==i)throw TypeError("Incompatible receiver, "+i+" required");return t}}},Kn=a,_e=_t,un=it,Vn=ge,cn=Ot,Yn=ye.get,Yt=ye.enforce,be=String(String).split("String");(Ct.exports=function(i,e,t,r){var o,l=!!r&&!!r.unsafe,v=!!r&&!!r.enumerable,h=!!r&&!!r.noTargetGet;typeof t=="function"&&(typeof e!="string"||un(t,"name")||_e(t,"name",e),(o=Yt(t)).source||(o.source=be.join(typeof e=="string"?e:""))),i!==Kn?(l?!h&&i[e]&&(v=!0):delete i[e],v?i[e]=t:_e(i,e,t)):v?i[e]=t:Vn(e,t)})(Function.prototype,"toString",function(){return typeof this=="function"&&Yn(this).source||cn(this)});var Xt=a,Zt=a,ue=function(i){return typeof i=="function"?i:void 0},Jt=function(i,e){return arguments.length<2?ue(Xt[i])||ue(Zt[i]):Xt[i]&&Xt[i][e]||Zt[i]&&Zt[i][e]},ce={},Oe=Math.ceil,dn=Math.floor,Ut=function(i){return isNaN(i=+i)?0:(i>0?dn:Oe)(i)},Xn=Ut,hn=Math.min,Tt=function(i){return i>0?hn(Xn(i),9007199254740991):0},pn=Ut,gn=Math.max,fn=Math.min,Qt=function(i,e){var t=pn(i);return t<0?gn(t+e,0):fn(t,e)},mn=G,Zn=Tt,vn=Qt,d=function(i){return function(e,t,r){var o,l=mn(e),v=Zn(l.length),h=vn(r,v);if(i&&t!=t){for(;v>h;)if((o=l[h++])!=o)return!0}else for(;v>h;h++)if((i||h in l)&&l[h]===t)return i||h||0;return!i&&-1}},b={includes:d(!0),indexOf:d(!1)},x=it,S=G,B=b.indexOf,j=me,et=function(i,e){var t,r=S(i),o=0,l=[];for(t in r)!x(j,t)&&x(r,t)&&l.push(t);for(;e.length>o;)x(r,t=e[o++])&&(~B(l,t)||l.push(t));return l},At=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],gt=et,nt=At.concat("length","prototype");ce.f=Object.getOwnPropertyNames||function(i){return gt(i,nt)};var xt={};xt.f=Object.getOwnPropertySymbols;var St=ce,qt=xt,Jn=ft,De=Jt("Reflect","ownKeys")||function(i){var e=St.f(Jn(i)),t=qt.f;return t?e.concat(t(i)):e},Aa=it,xa=De,Sa=s,Ca=Et,Fa=u,Ra=/#|\.prototype\./,$e=function(i,e){var t=Ta[La(i)];return t==Pa||t!=Ba&&(typeof e=="function"?Fa(e):!!e)},La=$e.normalize=function(i){return String(i).replace(Ra,".").toLowerCase()},Ta=$e.data={},Ba=$e.NATIVE="N",Pa=$e.POLYFILL="P",Ji=$e,Qn=a,Ma=s.f,Na=_t,Ia=Ct.exports,za=ge,_a=function(i,e){for(var t=xa(e),r=Ca.f,o=Sa.f,l=0;l<t.length;l++){var v=t[l];Aa(i,v)||r(i,v,o(e,v))}},Oa=Ji,mt=function(i,e){var t,r,o,l,v,h=i.target,c=i.global,k=i.stat;if(t=c?Qn:k?Qn[h]||za(h,{}):(Qn[h]||{}).prototype)for(r in e){if(l=e[r],o=i.noTargetGet?(v=Ma(t,r))&&v.value:t[r],!Oa(c?r:h+(k?".":"#")+r,i.forced)&&o!==void 0){if(typeof l==typeof o)continue;_a(l,o)}(i.sham||o&&o.sham)&&Na(l,"sham",!0),Ia(t,r,l,i)}},$a=ft,Gn=function(){var i=$a(this),e="";return i.global&&(e+="g"),i.ignoreCase&&(e+="i"),i.multiline&&(e+="m"),i.dotAll&&(e+="s"),i.unicode&&(e+="u"),i.sticky&&(e+="y"),e},Ue={},Qi=u;function Gi(i,e){return RegExp(i,e)}Ue.UNSUPPORTED_Y=Qi(function(){var i=Gi("a","y");return i.lastIndex=2,i.exec("abcd")!=null}),Ue.BROKEN_CARET=Qi(function(){var i=Gi("^r","gy");return i.lastIndex=2,i.exec("str")!=null});var Ua=Gn,tr=Ue,qa=re.exports,yn=RegExp.prototype.exec,Ha=qa("native-string-replace",String.prototype.replace),er=yn,ti=function(){var i=/a/,e=/b*/g;return yn.call(i,"a"),yn.call(e,"a"),i.lastIndex!==0||e.lastIndex!==0}(),nr=tr.UNSUPPORTED_Y||tr.BROKEN_CARET,ei=/()??/.exec("")[1]!==void 0;(ti||ei||nr)&&(er=function(i){var e,t,r,o,l=this,v=nr&&l.sticky,h=Ua.call(l),c=l.source,k=0,w=i;return v&&((h=h.replace("y","")).indexOf("g")===-1&&(h+="g"),w=String(i).slice(l.lastIndex),l.lastIndex>0&&(!l.multiline||l.multiline&&i[l.lastIndex-1]!==`
`)&&(c="(?: "+c+")",w=" "+w,k++),t=new RegExp("^(?:"+c+")",h)),ei&&(t=new RegExp("^"+c+"$(?!\\s)",h)),ti&&(e=l.lastIndex),r=yn.call(v?t:l,w),v?r?(r.input=r.input.slice(k),r[0]=r[0].slice(k),r.index=l.lastIndex,l.lastIndex+=r[0].length):l.lastIndex=0:ti&&r&&(l.lastIndex=l.global?r.index+r[0].length:e),ei&&r&&r.length>1&&Ha.call(r[0],t,function(){for(o=1;o<arguments.length-2;o++)arguments[o]===void 0&&(r[o]=void 0)}),r});var qe=er;mt({target:"RegExp",proto:!0,forced:/./.exec!==qe},{exec:qe});var de,bn,ni=Jt("navigator","userAgent")||"",ir=a.process,rr=ir&&ir.versions,ar=rr&&rr.v8;ar?bn=(de=ar.split("."))[0]<4?1:de[0]+de[1]:ni&&(!(de=ni.match(/Edge\/(\d+)/))||de[1]>=74)&&(de=ni.match(/Chrome\/(\d+)/))&&(bn=de[1]);var ii=bn&&+bn,sr=ii,ja=u,or=!!Object.getOwnPropertySymbols&&!ja(function(){return!String(Symbol())||!Symbol.sham&&sr&&sr<41}),Wa=or&&!Symbol.sham&&typeof Symbol.iterator=="symbol",Ka=a,Va=re.exports,lr=it,Ya=Ne,ur=or,Xa=Wa,He=Va("wks"),je=Ka.Symbol,Za=Xa?je:je&&je.withoutSetter||Ya,Dt=function(i){return lr(He,i)&&(ur||typeof He[i]=="string")||(ur&&lr(je,i)?He[i]=je[i]:He[i]=Za("Symbol."+i)),He[i]},cr=Ct.exports,Ja=qe,Dn=u,ri=Dt,Qa=_t,Ga=ri("species"),ai=RegExp.prototype,ts=!Dn(function(){var i=/./;return i.exec=function(){var e=[];return e.groups={a:"7"},e},"".replace(i,"$<a>")!=="7"}),dr="a".replace(/./,"$0")==="$0",hr=ri("replace"),pr=!!/./[hr]&&/./[hr]("a","$0")==="",es=!Dn(function(){var i=/(?:)/,e=i.exec;i.exec=function(){return e.apply(this,arguments)};var t="ab".split(i);return t.length!==2||t[0]!=="a"||t[1]!=="b"}),wn=function(i,e,t,r){var o=ri(i),l=!Dn(function(){var E={};return E[o]=function(){return 7},""[i](E)!=7}),v=l&&!Dn(function(){var E=!1,F=/a/;return i==="split"&&((F={}).constructor={},F.constructor[Ga]=function(){return F},F.flags="",F[o]=/./[o]),F.exec=function(){return E=!0,null},F[o](""),!E});if(!l||!v||i==="replace"&&(!ts||!dr||pr)||i==="split"&&!es){var h=/./[o],c=t(o,""[i],function(E,F,T,M,O){var P=F.exec;return P===Ja||P===ai.exec?l&&!O?{done:!0,value:h.call(F,T,M)}:{done:!0,value:E.call(T,F,M)}:{done:!1}},{REPLACE_KEEPS_$0:dr,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:pr}),k=c[0],w=c[1];cr(String.prototype,i,k),cr(ai,o,e==2?function(E,F){return w.call(E,this,F)}:function(E){return w.call(E,this)})}r&&Qa(ai[o],"sham",!0)},ns=Object.is||function(i,e){return i===e?i!==0||1/i==1/e:i!=i&&e!=e},is=R,rs=qe,kn=function(i,e){var t=i.exec;if(typeof t=="function"){var r=t.call(i,e);if(typeof r!="object")throw TypeError("RegExp exec method returned something other than an Object or null");return r}if(is(i)!=="RegExp")throw TypeError("RegExp#exec called on incompatible receiver");return rs.call(i,e)},as=ft,ss=V,gr=ns,os=kn;wn("search",1,function(i,e,t){return[function(r){var o=ss(this),l=r?.[i];return l!==void 0?l.call(r,o):new RegExp(r)[i](String(o))},function(r){var o=t(e,r,this);if(o.done)return o.value;var l=as(r),v=String(this),h=l.lastIndex;gr(h,0)||(l.lastIndex=0);var c=os(l,v);return gr(l.lastIndex,h)||(l.lastIndex=h),c===null?-1:c.index}]});var ls=Ut,us=V,fr=function(i){return function(e,t){var r,o,l=String(us(e)),v=ls(t),h=l.length;return v<0||v>=h?i?"":void 0:(r=l.charCodeAt(v))<55296||r>56319||v+1===h||(o=l.charCodeAt(v+1))<56320||o>57343?i?l.charAt(v):r:i?l.slice(v,v+2):o-56320+(r-55296<<10)+65536}},cs={codeAt:fr(!1),charAt:fr(!0)}.charAt,si=function(i,e,t){return e+(t?cs(i,e).length:1)},ds=ft,hs=Tt,ps=V,gs=si,mr=kn;function we(i,e){if(!(i instanceof e))throw new TypeError("Cannot call a class as a function")}function vr(i,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(i,r.key,r)}}function ke(i,e,t){return e&&vr(i.prototype,e),t&&vr(i,t),i}function fs(i,e){return function(t){if(Array.isArray(t))return t}(i)||function(t,r){var o=t&&(typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"]);if(o!=null){var l,v,h=[],c=!0,k=!1;try{for(o=o.call(t);!(c=(l=o.next()).done)&&(h.push(l.value),!r||h.length!==r);c=!0);}catch(w){k=!0,v=w}finally{try{c||o.return==null||o.return()}finally{if(k)throw v}}return h}}(i,e)||yr(i,e)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function yr(i,e){if(i){if(typeof i=="string")return br(i,e);var t=Object.prototype.toString.call(i).slice(8,-1);return t==="Object"&&i.constructor&&(t=i.constructor.name),t==="Map"||t==="Set"?Array.from(i):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?br(i,e):void 0}}function br(i,e){(e==null||e>i.length)&&(e=i.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=i[t];return r}function We(i,e){var t=typeof Symbol<"u"&&i[Symbol.iterator]||i["@@iterator"];if(!t){if(Array.isArray(i)||(t=yr(i))||e&&i&&typeof i.length=="number"){t&&(i=t);var r=0,o=function(){};return{s:o,n:function(){return r>=i.length?{done:!0}:{done:!1,value:i[r++]}},e:function(c){throw c},f:o}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var l,v=!0,h=!1;return{s:function(){t=t.call(i)},n:function(){var c=t.next();return v=c.done,c},e:function(c){h=!0,l=c},f:function(){try{v||t.return==null||t.return()}finally{if(h)throw l}}}}wn("match",1,function(i,e,t){return[function(r){var o=ps(this),l=r?.[i];return l!==void 0?l.call(r,o):new RegExp(r)[i](String(o))},function(r){var o=t(e,r,this);if(o.done)return o.value;var l=ds(r),v=String(this);if(!l.global)return mr(l,v);var h=l.unicode;l.lastIndex=0;for(var c,k=[],w=0;(c=mr(l,v))!==null;){var E=String(c[0]);k[w]=E,E===""&&(l.lastIndex=gs(v,hs(l.lastIndex),h)),w++}return w===0?null:k}]});var ms=I,vs=Math.floor,ys="".replace,bs=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,Ds=/\$([$&'`]|\d{1,2})/g,ws=wn,ks=ft,Es=Tt,As=Ut,xs=V,Ss=si,Cs=function(i,e,t,r,o,l){var v=t+i.length,h=r.length,c=Ds;return o!==void 0&&(o=ms(o),c=bs),ys.call(l,c,function(k,w){var E;switch(w.charAt(0)){case"$":return"$";case"&":return i;case"`":return e.slice(0,t);case"'":return e.slice(v);case"<":E=o[w.slice(1,-1)];break;default:var F=+w;if(F===0)return k;if(F>h){var T=vs(F/10);return T===0?k:T<=h?r[T-1]===void 0?w.charAt(1):r[T-1]+w.charAt(1):k}E=r[F-1]}return E===void 0?"":E})},Fs=kn,Rs=Math.max,Ls=Math.min;ws("replace",2,function(i,e,t,r){var o=r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,l=r.REPLACE_KEEPS_$0,v=o?"$":"$0";return[function(h,c){var k=xs(this),w=h?.[i];return w!==void 0?w.call(h,k,c):e.call(String(k),h,c)},function(h,c){if(!o&&l||typeof c=="string"&&c.indexOf(v)===-1){var k=t(e,h,this,c);if(k.done)return k.value}var w=ks(h),E=String(this),F=typeof c=="function";F||(c=String(c));var T=w.global;if(T){var M=w.unicode;w.lastIndex=0}for(var O=[];;){var P=Fs(w,E);if(P===null||(O.push(P),!T))break;String(P[0])===""&&(w.lastIndex=Ss(E,Es(w.lastIndex),M))}for(var K,rt="",at=0,wt=0;wt<O.length;wt++){P=O[wt];for(var te=String(P[0]),st=Rs(Ls(As(P.index),E.length),0),zt=[],jt=1;jt<P.length;jt++)zt.push((K=P[jt])===void 0?K:String(K));var xe=P.groups;if(F){var he=[te].concat(zt,st,E);xe!==void 0&&he.push(xe);var Ln=String(c.apply(void 0,he))}else Ln=Cs(te,E,st,zt,xe,c);st>=at&&(rt+=E.slice(at,st)+Ln,at=st+te.length)}return rt+E.slice(at)}]});var Ts=H,Bs=ft,Ps=function(i){if(!Ts(i)&&i!==null)throw TypeError("Can't set "+String(i)+" as a prototype");return i},Ms=Object.setPrototypeOf||("__proto__"in{}?function(){var i,e=!1,t={};try{(i=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(t,[]),e=t instanceof Array}catch{}return function(r,o){return Bs(r),Ps(o),e?i.call(r,o):r.__proto__=o,r}}():void 0),Ns=H,Dr=Ms,Is=H,zs=R,_s=Dt("match"),oi=function(i){var e;return Is(i)&&((e=i[_s])!==void 0?!!e:zs(i)=="RegExp")},Os=Jt,$s=Et,Us=m,wr=Dt("species"),qs=m,kr=a,Hs=Ji,js=function(i,e,t){var r,o;return Dr&&typeof(r=e.constructor)=="function"&&r!==t&&Ns(o=r.prototype)&&o!==t.prototype&&Dr(i,o),i},Ws=Et.f,Ks=ce.f,Vs=oi,Ys=Gn,Xs=Ue,Zs=Ct.exports,Js=u,Qs=ye.enforce,Gs=function(i){var e=Os(i),t=$s.f;Us&&e&&!e[wr]&&t(e,wr,{configurable:!0,get:function(){return this}})},to=Dt("match"),It=kr.RegExp,li=It.prototype,Ke=/a/g,ui=/a/g,ci=new It(Ke)!==Ke,di=Xs.UNSUPPORTED_Y;if(qs&&Hs("RegExp",!ci||di||Js(function(){return ui[to]=!1,It(Ke)!=Ke||It(ui)==ui||It(Ke,"i")!="/a/i"}))){for(var Ht=function(i,e){var t,r=this instanceof Ht,o=Vs(i),l=e===void 0;if(!r&&o&&i.constructor===Ht&&l)return i;ci?o&&!l&&(i=i.source):i instanceof Ht&&(l&&(e=Ys.call(i)),i=i.source),di&&(t=!!e&&e.indexOf("y")>-1)&&(e=e.replace(/y/g,""));var v=js(ci?new It(i,e):It(i,e),r?this:li,Ht);return di&&t&&(Qs(v).sticky=!0),v},eo=function(i){i in Ht||Ws(Ht,i,{configurable:!0,get:function(){return It[i]},set:function(e){It[i]=e}})},Er=Ks(It),Ar=0;Er.length>Ar;)eo(Er[Ar++]);li.constructor=Ht,Ht.prototype=li,Zs(kr,"RegExp",Ht)}Gs("RegExp");var no=Ct.exports,io=ft,ro=u,ao=Gn,xr="toString",Sr=RegExp.prototype,Cr=Sr.toString,so=ro(function(){return Cr.call({source:"a",flags:"b"})!="/a/b"}),oo=Cr.name!=xr;(so||oo)&&no(RegExp.prototype,xr,function(){var i=io(this),e=String(i.source),t=i.flags;return"/"+e+"/"+String(t===void 0&&i instanceof RegExp&&!("flags"in Sr)?ao.call(i):t)},{unsafe:!0});var Fr=function(i){if(typeof i!="function")throw TypeError(String(i)+" is not a function");return i},Rr=ft,lo=Fr,uo=Dt("species"),co=wn,ho=oi,po=ft,Lr=V,go=function(i,e){var t,r=Rr(i).constructor;return r===void 0||(t=Rr(r)[uo])==null?e:lo(t)},fo=si,mo=Tt,Tr=kn,vo=qe,Ee=Ue.UNSUPPORTED_Y,yo=[].push,bo=Math.min,Br=4294967295;co("split",2,function(i,e,t){var r;return r="abbc".split(/(b)*/)[1]=="c"||"test".split(/(?:)/,-1).length!=4||"ab".split(/(?:ab)*/).length!=2||".".split(/(.?)(.?)/).length!=4||".".split(/()()/).length>1||"".split(/.?/).length?function(o,l){var v=String(Lr(this)),h=l===void 0?Br:l>>>0;if(h===0)return[];if(o===void 0)return[v];if(!ho(o))return e.call(v,o,h);for(var c,k,w,E=[],F=(o.ignoreCase?"i":"")+(o.multiline?"m":"")+(o.unicode?"u":"")+(o.sticky?"y":""),T=0,M=new RegExp(o.source,F+"g");(c=vo.call(M,v))&&!((k=M.lastIndex)>T&&(E.push(v.slice(T,c.index)),c.length>1&&c.index<v.length&&yo.apply(E,c.slice(1)),w=c[0].length,T=k,E.length>=h));)M.lastIndex===c.index&&M.lastIndex++;return T===v.length?!w&&M.test("")||E.push(""):E.push(v.slice(T)),E.length>h?E.slice(0,h):E}:"0".split(void 0,0).length?function(o,l){return o===void 0&&l===0?[]:e.call(this,o,l)}:e,[function(o,l){var v=Lr(this),h=o?.[i];return h!==void 0?h.call(o,v,l):r.call(String(v),o,l)},function(o,l){var v=t(r,o,this,l,r!==e);if(v.done)return v.value;var h=po(o),c=String(this),k=go(h,RegExp),w=h.unicode,E=(h.ignoreCase?"i":"")+(h.multiline?"m":"")+(h.unicode?"u":"")+(Ee?"g":"y"),F=new k(Ee?"^(?:"+h.source+")":h,E),T=l===void 0?Br:l>>>0;if(T===0)return[];if(c.length===0)return Tr(F,c)===null?[c]:[];for(var M=0,O=0,P=[];O<c.length;){F.lastIndex=Ee?0:O;var K,rt=Tr(F,Ee?c.slice(O):c);if(rt===null||(K=bo(mo(F.lastIndex+(Ee?O:0)),c.length))===M)O=fo(c,O,w);else{if(P.push(c.slice(M,O)),P.length===T)return P;for(var at=1;at<=rt.length-1;at++)if(P.push(rt[at]),P.length===T)return P;O=M=K}}return P.push(c.slice(M)),P}]},Ee);var Do=`	
\v\f\r \xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF`,wo=V,En=`[	
\v\f\r \xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]`,ko=RegExp("^"+En+En+"*"),Eo=RegExp(En+En+"*$"),hi=function(i){return function(e){var t=String(wo(e));return 1&i&&(t=t.replace(ko,"")),2&i&&(t=t.replace(Eo,"")),t}},pi={start:hi(1),end:hi(2),trim:hi(3)},Ao=u,Pr=Do,gi=function(i){return Ao(function(){return!!Pr[i]()||"\u200B\x85\u180E"[i]()!="\u200B\x85\u180E"||Pr[i].name!==i})},xo=pi.trim;mt({target:"String",proto:!0,forced:gi("trim")},{trim:function(){return xo(this)}});var So=R,fi=Array.isArray||function(i){return So(i)=="Array"},Co=H,Mr=fi,Fo=Dt("species"),mi=function(i,e){var t;return Mr(i)&&(typeof(t=i.constructor)!="function"||t!==Array&&!Mr(t.prototype)?Co(t)&&(t=t[Fo])===null&&(t=void 0):t=void 0),new(t===void 0?Array:t)(e===0?0:e)},Ro=ot,Lo=Et,To=q,vi=function(i,e,t){var r=Ro(e);r in i?Lo.f(i,r,To(0,t)):i[r]=t},Bo=u,Po=ii,Mo=Dt("species"),Ve=function(i){return Po>=51||!Bo(function(){var e=[];return(e.constructor={})[Mo]=function(){return{foo:1}},e[i](Boolean).foo!==1})},No=mt,Io=Qt,zo=Ut,_o=Tt,Oo=I,$o=mi,Uo=vi,qo=Ve("splice"),Ho=Math.max,jo=Math.min,Wo=9007199254740991,Ko="Maximum allowed length exceeded";No({target:"Array",proto:!0,forced:!qo},{splice:function(i,e){var t,r,o,l,v,h,c=Oo(this),k=_o(c.length),w=Io(i,k),E=arguments.length;if(E===0?t=r=0:E===1?(t=0,r=k-w):(t=E-2,r=jo(Ho(zo(e),0),k-w)),k+t-r>Wo)throw TypeError(Ko);for(o=$o(c,r),l=0;l<r;l++)(v=w+l)in c&&Uo(o,l,c[v]);if(o.length=r,t<r){for(l=w;l<k-r;l++)h=l+t,(v=l+r)in c?c[h]=c[v]:delete c[h];for(l=k;l>k-r+t;l--)delete c[l-1]}else if(t>r)for(l=k-r;l>w;l--)h=l+t-1,(v=l+r-1)in c?c[h]=c[v]:delete c[h];for(l=0;l<t;l++)c[l+w]=arguments[l+2];return c.length=k-r+t,o}});var Vo=u,Nr=function(i,e){var t=[][i];return!!t&&Vo(function(){t.call(null,e||function(){throw 1},1)})},Yo=mt,Xo=G,Zo=[].join,Jo=dt!=Object,Qo=Nr("join",",");Yo({target:"Array",proto:!0,forced:Jo||!Qo},{join:function(i){return Zo.call(Xo(this),i===void 0?",":i)}});var Go=Fr,tl=function(i,e,t){if(Go(i),e===void 0)return i;switch(t){case 0:return function(){return i.call(e)};case 1:return function(r){return i.call(e,r)};case 2:return function(r,o){return i.call(e,r,o)};case 3:return function(r,o,l){return i.call(e,r,o,l)}}return function(){return i.apply(e,arguments)}},el=dt,nl=I,il=Tt,rl=mi,Ir=[].push,Gt=function(i){var e=i==1,t=i==2,r=i==3,o=i==4,l=i==6,v=i==7,h=i==5||l;return function(c,k,w,E){for(var F,T,M=nl(c),O=el(M),P=tl(k,w,3),K=il(O.length),rt=0,at=E||rl,wt=e?at(c,K):t||v?at(c,0):void 0;K>rt;rt++)if((h||rt in O)&&(T=P(F=O[rt],rt,M),i))if(e)wt[rt]=T;else if(T)switch(i){case 3:return!0;case 5:return F;case 6:return rt;case 2:Ir.call(wt,F)}else switch(i){case 4:return!1;case 7:Ir.call(wt,F)}return l?-1:r||o?o:wt}},yi={forEach:Gt(0),map:Gt(1),filter:Gt(2),some:Gt(3),every:Gt(4),find:Gt(5),findIndex:Gt(6),filterOut:Gt(7)},al=yi.map;mt({target:"Array",proto:!0,forced:!Ve("map")},{map:function(i){return al(this,i,arguments.length>1?arguments[1]:void 0)}});var sl=mt,ol=H,zr=fi,_r=Qt,ll=Tt,ul=G,cl=vi,dl=Dt,hl=Ve("slice"),pl=dl("species"),gl=[].slice,fl=Math.max;sl({target:"Array",proto:!0,forced:!hl},{slice:function(i,e){var t,r,o,l=ul(this),v=ll(l.length),h=_r(i,v),c=_r(e===void 0?v:e,v);if(zr(l)&&(typeof(t=l.constructor)!="function"||t!==Array&&!zr(t.prototype)?ol(t)&&(t=t[pl])===null&&(t=void 0):t=void 0,t===Array||t===void 0))return gl.call(l,h,c);for(r=new(t===void 0?Array:t)(fl(c-h,0)),o=0;h<c;h++,o++)h in l&&cl(r,o,l[h]);return r.length=o,r}});var ml=mt,vl=pi.start,Or=gi("trimStart"),$r=Or?function(){return vl(this)}:"".trimStart;ml({target:"String",proto:!0,forced:Or},{trimStart:$r,trimLeft:$r});var yl=mt,bl=pi.end,Ur=gi("trimEnd"),qr=Ur?function(){return bl(this)}:"".trimEnd;yl({target:"String",proto:!0,forced:Ur},{trimEnd:qr,trimRight:qr});var Dl=yi.filter;mt({target:"Array",proto:!0,forced:!Ve("filter")},{filter:function(i){return Dl(this,i,arguments.length>1?arguments[1]:void 0)}});var wl=V,kl=/"/g,El=u,Al=function(i,e,t,r){var o=String(wl(i)),l="<"+e;return t!==""&&(l+=" "+t+'="'+String(r).replace(kl,"&quot;")+'"'),l+">"+o+"</"+e+">"};mt({target:"String",proto:!0,forced:function(i){return El(function(){var e=""[i]('"');return e!==e.toLowerCase()||e.split('"').length>3})}("link")},{link:function(i){return Al(this,"a","href",i)}});var Hr={};Hr[Dt("toStringTag")]="z";var bi=String(Hr)==="[object z]",xl=bi,An=R,Sl=Dt("toStringTag"),Cl=An(function(){return arguments}())=="Arguments",Fl=xl?An:function(i){var e,t,r;return i===void 0?"Undefined":i===null?"Null":typeof(t=function(o,l){try{return o[l]}catch{}}(e=Object(i),Sl))=="string"?t:Cl?An(e):(r=An(e))=="Object"&&typeof e.callee=="function"?"Arguments":r},Rl=bi?{}.toString:function(){return"[object "+Fl(this)+"]"},Ll=bi,Tl=Ct.exports,Bl=Rl;Ll||Tl(Object.prototype,"toString",Bl,{unsafe:!0});var Pl=yi.forEach,Ml=a,Nl={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0},Di=Nr("forEach")?[].forEach:function(i){return Pl(this,i,arguments.length>1?arguments[1]:void 0)},Il=_t;for(var zl in Nl){var jr=Ml[zl],xn=jr&&jr.prototype;if(xn&&xn.forEach!==Di)try{Il(xn,"forEach",Di)}catch{xn.forEach=Di}}var _l=et,Ol=At,Wr=Object.keys||function(i){return _l(i,Ol)},$l=I,Kr=Wr;mt({target:"Object",stat:!0,forced:u(function(){Kr(1)})},{keys:function(i){return Kr($l(i))}});var wi,Ul=Et,ql=ft,Hl=Wr,jl=m?Object.defineProperties:function(i,e){ql(i);for(var t,r=Hl(e),o=r.length,l=0;o>l;)Ul.f(i,t=r[l++],e[t]);return i},Wl=Jt("document","documentElement"),Kl=ft,Vl=jl,Vr=At,Yl=me,Xl=Wl,Zl=Z,Yr=bt("IE_PROTO"),ki=function(){},Xr=function(i){return"<script>"+i+"<\/script>"},Sn=function(){try{wi=document.domain&&new ActiveXObject("htmlfile")}catch{}var i,e;Sn=wi?function(r){r.write(Xr("")),r.close();var o=r.parentWindow.Object;return r=null,o}(wi):((e=Zl("iframe")).style.display="none",Xl.appendChild(e),e.src=String("javascript:"),(i=e.contentWindow.document).open(),i.write(Xr("document.F=Object")),i.close(),i.F);for(var t=Vr.length;t--;)delete Sn.prototype[Vr[t]];return Sn()};Yl[Yr]=!0;var Jl=Object.create||function(i,e){var t;return i!==null?(ki.prototype=Kl(i),t=new ki,ki.prototype=null,t[Yr]=i):t=Sn(),e===void 0?t:Vl(t,e)},Ql=Et,Ei=Dt("unscopables"),Ai=Array.prototype;Ai[Ei]==null&&Ql.f(Ai,Ei,{configurable:!0,value:Jl(null)});var Gl=b.includes,tu=function(i){Ai[Ei][i]=!0};mt({target:"Array",proto:!0},{includes:function(i){return Gl(this,i,arguments.length>1?arguments[1]:void 0)}}),tu("includes");var eu=oi,nu=Dt("match"),iu=function(i){if(eu(i))throw TypeError("The method doesn't accept regular expressions");return i},ru=V;mt({target:"String",proto:!0,forced:!function(i){var e=/./;try{"/./"[i](e)}catch{try{return e[nu]=!1,"/./"[i](e)}catch{}}return!1}("includes")},{includes:function(i){return!!~String(ru(this)).indexOf(iu(i),arguments.length>1?arguments[1]:void 0)}});var au=mt,su=u,ou=fi,lu=H,uu=I,cu=Tt,Zr=vi,du=mi,hu=Ve,pu=ii,Jr=Dt("isConcatSpreadable"),Qr=9007199254740991,Gr="Maximum allowed index exceeded",gu=pu>=51||!su(function(){var i=[];return i[Jr]=!1,i.concat()[0]!==i}),fu=hu("concat"),mu=function(i){if(!lu(i))return!1;var e=i[Jr];return e!==void 0?!!e:ou(i)};au({target:"Array",proto:!0,forced:!gu||!fu},{concat:function(i){var e,t,r,o,l,v=uu(this),h=du(v,0),c=0;for(e=-1,r=arguments.length;e<r;e++)if(mu(l=e===-1?v:arguments[e])){if(c+(o=cu(l.length))>Qr)throw TypeError(Gr);for(t=0;t<o;t++,c++)t in l&&Zr(h,c,l[t])}else{if(c>=Qr)throw TypeError(Gr);Zr(h,c++,l)}return h.length=c,h}});var vu=m,yu=Et.f,xi=Function.prototype,bu=xi.toString,Du=/^\s*function ([^ (]*)/,ta="name";function wu(){return{baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}vu&&!(ta in xi)&&yu(xi,ta,{configurable:!0,get:function(){try{return bu.call(this).match(Du)[1]}catch{return""}}});var Ae={baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1},ku=/[&<>"']/,Eu=/[&<>"']/g,Au=/[<>"']|&(?!#?\w+;)/,xu=/[<>"']|&(?!#?\w+;)/g,Su={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},ea=function(i){return Su[i]};function ut(i,e){if(e){if(ku.test(i))return i.replace(Eu,ea)}else if(Au.test(i))return i.replace(xu,ea);return i}var Cu=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;function na(i){return i.replace(Cu,function(e,t){return(t=t.toLowerCase())==="colon"?":":t.charAt(0)==="#"?t.charAt(1)==="x"?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""})}var Fu=/(^|[^\[])\^/g;function X(i,e){i=i.source||i,e=e||"";var t={replace:function(r,o){return o=(o=o.source||o).replace(Fu,"$1"),i=i.replace(r,o),t},getRegex:function(){return new RegExp(i,e)}};return t}var Ru=/[^\w:]/g,Lu=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function ia(i,e,t){if(i){var r;try{r=decodeURIComponent(na(t)).replace(Ru,"").toLowerCase()}catch{return null}if(r.indexOf("javascript:")===0||r.indexOf("vbscript:")===0||r.indexOf("data:")===0)return null}e&&!Lu.test(t)&&(t=function(o,l){Cn[" "+o]||(Tu.test(o)?Cn[" "+o]=o+"/":Cn[" "+o]=Rn(o,"/",!0));var v=(o=Cn[" "+o]).indexOf(":")===-1;return l.substring(0,2)==="//"?v?l:o.replace(Bu,"$1")+l:l.charAt(0)==="/"?v?l:o.replace(Pu,"$1")+l:o+l}(e,t));try{t=encodeURI(t).replace(/%25/g,"%")}catch{return null}return t}var Cn={},Tu=/^[^:]+:\/*[^/]*$/,Bu=/^([^:]+:)[\s\S]*$/,Pu=/^([^:]+:\/*[^/]*)[\s\S]*$/,Fn={exec:function(){}};function Bt(i){for(var e,t,r=1;r<arguments.length;r++)for(t in e=arguments[r])Object.prototype.hasOwnProperty.call(e,t)&&(i[t]=e[t]);return i}function ra(i,e){var t=i.replace(/\|/g,function(o,l,v){for(var h=!1,c=l;--c>=0&&v[c]==="\\";)h=!h;return h?"|":" |"}).split(/ \|/),r=0;if(t[0].trim()||t.shift(),t.length>0&&!t[t.length-1].trim()&&t.pop(),t.length>e)t.splice(e);else for(;t.length<e;)t.push("");for(;r<t.length;r++)t[r]=t[r].trim().replace(/\\\|/g,"|");return t}function Rn(i,e,t){var r=i.length;if(r===0)return"";for(var o=0;o<r;){var l=i.charAt(r-o-1);if(l!==e||t){if(l===e||!t)break;o++}else o++}return i.substr(0,r-o)}function aa(i){i&&i.sanitize&&!i.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")}function sa(i,e){if(e<1)return"";for(var t="";e>1;)1&e&&(t+=i),e>>=1,i+=i;return t+i}function oa(i,e,t,r){var o=e.href,l=e.title?ut(e.title):null,v=i[1].replace(/\\([\[\]])/g,"$1");if(i[0].charAt(0)!=="!"){r.state.inLink=!0;var h={type:"link",raw:t,href:o,title:l,text:v,tokens:r.inlineTokens(v,[])};return r.state.inLink=!1,h}return{type:"image",raw:t,href:o,title:l,text:ut(v)}}var Si=function(){function i(e){we(this,i),this.options=e||Ae}return ke(i,[{key:"space",value:function(e){var t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}},{key:"code",value:function(e){var t=this.rules.block.code.exec(e);if(t){var r=t[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?r:Rn(r,`
`)}}}},{key:"fences",value:function(e){var t=this.rules.block.fences.exec(e);if(t){var r=t[0],o=function(l,v){var h=l.match(/^(\s+)(?:```)/);if(h===null)return v;var c=h[1];return v.split(`
`).map(function(k){var w=k.match(/^\s+/);return w===null?k:fs(w,1)[0].length>=c.length?k.slice(c.length):k}).join(`
`)}(r,t[3]||"");return{type:"code",raw:r,lang:t[2]?t[2].trim():t[2],text:o}}}},{key:"heading",value:function(e){var t=this.rules.block.heading.exec(e);if(t){var r=t[2].trim();if(/#$/.test(r)){var o=Rn(r,"#");this.options.pedantic?r=o.trim():o&&!/ $/.test(o)||(r=o.trim())}var l={type:"heading",raw:t[0],depth:t[1].length,text:r,tokens:[]};return this.lexer.inline(l.text,l.tokens),l}}},{key:"hr",value:function(e){var t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:t[0]}}},{key:"blockquote",value:function(e){var t=this.rules.block.blockquote.exec(e);if(t){var r=t[0].replace(/^ *> ?/gm,"");return{type:"blockquote",raw:t[0],tokens:this.lexer.blockTokens(r,[]),text:r}}}},{key:"list",value:function(e){var t=this.rules.block.list.exec(e);if(t){var r,o,l,v,h,c,k,w,E,F,T,M,O=t[1].trim(),P=O.length>1,K={type:"list",raw:"",ordered:P,start:P?+O.slice(0,-1):"",loose:!1,items:[]};O=P?"\\d{1,9}\\".concat(O.slice(-1)):"\\".concat(O),this.options.pedantic&&(O=P?O:"[*+-]");for(var rt=new RegExp("^( {0,3}".concat(O,")((?: [^\\n]*)?(?:\\n|$))"));e&&(M=!1,t=rt.exec(e))&&!this.rules.block.hr.test(e);){if(r=t[0],e=e.substring(r.length),w=t[2].split(`
`,1)[0],E=e.split(`
`,1)[0],this.options.pedantic?(v=2,T=w.trimLeft()):(v=(v=t[2].search(/[^ ]/))>4?1:v,T=w.slice(v),v+=t[1].length),c=!1,!w&&/^ *$/.test(E)&&(r+=E+`
`,e=e.substring(E.length+1),M=!0),!M)for(var at=new RegExp("^ {0,".concat(Math.min(3,v-1),"}(?:[*+-]|\\d{1,9}[.)])"));e&&(w=F=e.split(`
`,1)[0],this.options.pedantic&&(w=w.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),!at.test(w));){if(w.search(/[^ ]/)>=v||!w.trim())T+=`
`+w.slice(v);else{if(c)break;T+=`
`+w}c||w.trim()||(c=!0),r+=F+`
`,e=e.substring(F.length+1)}K.loose||(k?K.loose=!0:/\n *\n *$/.test(r)&&(k=!0)),this.options.gfm&&(o=/^\[[ xX]\] /.exec(T))&&(l=o[0]!=="[ ] ",T=T.replace(/^\[[ xX]\] +/,"")),K.items.push({type:"list_item",raw:r,task:!!o,checked:l,loose:!1,text:T}),K.raw+=r}K.items[K.items.length-1].raw=r.trimRight(),K.items[K.items.length-1].text=T.trimRight(),K.raw=K.raw.trimRight();var wt=K.items.length;for(h=0;h<wt;h++){this.lexer.state.top=!1,K.items[h].tokens=this.lexer.blockTokens(K.items[h].text,[]);var te=K.items[h].tokens.filter(function(zt){return zt.type==="space"}),st=te.every(function(zt){var jt,xe=0,he=We(zt.raw.split(""));try{for(he.s();!(jt=he.n()).done;)if(jt.value===`
`&&(xe+=1),xe>1)return!0}catch(Ln){he.e(Ln)}finally{he.f()}return!1});!K.loose&&te.length&&st&&(K.loose=!0,K.items[h].loose=!0)}return K}}},{key:"html",value:function(e){var t=this.rules.block.html.exec(e);if(t){var r={type:"html",raw:t[0],pre:!this.options.sanitizer&&(t[1]==="pre"||t[1]==="script"||t[1]==="style"),text:t[0]};return this.options.sanitize&&(r.type="paragraph",r.text=this.options.sanitizer?this.options.sanitizer(t[0]):ut(t[0]),r.tokens=[],this.lexer.inline(r.text,r.tokens)),r}}},{key:"def",value:function(e){var t=this.rules.block.def.exec(e);if(t)return t[3]&&(t[3]=t[3].substring(1,t[3].length-1)),{type:"def",tag:t[1].toLowerCase().replace(/\s+/g," "),raw:t[0],href:t[2],title:t[3]}}},{key:"table",value:function(e){var t=this.rules.block.table.exec(e);if(t){var r={type:"table",header:ra(t[1]).map(function(k){return{text:k}}),align:t[2].replace(/^ *|\| *$/g,"").split(/ *\| */),rows:t[3]&&t[3].trim()?t[3].replace(/\n[ \t]*$/,"").split(`
`):[]};if(r.header.length===r.align.length){r.raw=t[0];var o,l,v,h,c=r.align.length;for(o=0;o<c;o++)/^ *-+: *$/.test(r.align[o])?r.align[o]="right":/^ *:-+: *$/.test(r.align[o])?r.align[o]="center":/^ *:-+ *$/.test(r.align[o])?r.align[o]="left":r.align[o]=null;for(c=r.rows.length,o=0;o<c;o++)r.rows[o]=ra(r.rows[o],r.header.length).map(function(k){return{text:k}});for(c=r.header.length,l=0;l<c;l++)r.header[l].tokens=[],this.lexer.inlineTokens(r.header[l].text,r.header[l].tokens);for(c=r.rows.length,l=0;l<c;l++)for(h=r.rows[l],v=0;v<h.length;v++)h[v].tokens=[],this.lexer.inlineTokens(h[v].text,h[v].tokens);return r}}}},{key:"lheading",value:function(e){var t=this.rules.block.lheading.exec(e);if(t){var r={type:"heading",raw:t[0],depth:t[2].charAt(0)==="="?1:2,text:t[1],tokens:[]};return this.lexer.inline(r.text,r.tokens),r}}},{key:"paragraph",value:function(e){var t=this.rules.block.paragraph.exec(e);if(t){var r={type:"paragraph",raw:t[0],text:t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1],tokens:[]};return this.lexer.inline(r.text,r.tokens),r}}},{key:"text",value:function(e){var t=this.rules.block.text.exec(e);if(t){var r={type:"text",raw:t[0],text:t[0],tokens:[]};return this.lexer.inline(r.text,r.tokens),r}}},{key:"escape",value:function(e){var t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:ut(t[1])}}},{key:"tag",value:function(e){var t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&/^<a /i.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:this.options.sanitize?"text":"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(t[0]):ut(t[0]):t[0]}}},{key:"link",value:function(e){var t=this.rules.inline.link.exec(e);if(t){var r=t[2].trim();if(!this.options.pedantic&&/^</.test(r)){if(!/>$/.test(r))return;var o=Rn(r.slice(0,-1),"\\");if((r.length-o.length)%2==0)return}else{var l=function(w,E){if(w.indexOf(E[1])===-1)return-1;for(var F=w.length,T=0,M=0;M<F;M++)if(w[M]==="\\")M++;else if(w[M]===E[0])T++;else if(w[M]===E[1]&&--T<0)return M;return-1}(t[2],"()");if(l>-1){var v=(t[0].indexOf("!")===0?5:4)+t[1].length+l;t[2]=t[2].substring(0,l),t[0]=t[0].substring(0,v).trim(),t[3]=""}}var h=t[2],c="";if(this.options.pedantic){var k=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(h);k&&(h=k[1],c=k[3])}else c=t[3]?t[3].slice(1,-1):"";return h=h.trim(),/^</.test(h)&&(h=this.options.pedantic&&!/>$/.test(r)?h.slice(1):h.slice(1,-1)),oa(t,{href:h&&h.replace(this.rules.inline._escapes,"$1"),title:c&&c.replace(this.rules.inline._escapes,"$1")},t[0],this.lexer)}}},{key:"reflink",value:function(e,t){var r;if((r=this.rules.inline.reflink.exec(e))||(r=this.rules.inline.nolink.exec(e))){var o=(r[2]||r[1]).replace(/\s+/g," ");if(!(o=t[o.toLowerCase()])||!o.href){var l=r[0].charAt(0);return{type:"text",raw:l,text:l}}return oa(r,o,r[0],this.lexer)}}},{key:"emStrong",value:function(e,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"",o=this.rules.inline.emStrong.lDelim.exec(e);if(o&&(!o[3]||!r.match(/(?:[0-9A-Za-z\xAA\xB2\xB3\xB5\xB9\xBA\xBC-\xBE\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u0660-\u0669\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07C0-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08C7\u0904-\u0939\u093D\u0950\u0958-\u0961\u0966-\u096F\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09E6-\u09F1\u09F4-\u09F9\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A66-\u0A6F\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AE6-\u0AEF\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B66-\u0B6F\u0B71-\u0B77\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0BE6-\u0BF2\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C66-\u0C6F\u0C78-\u0C7E\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CE6-\u0CEF\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D58-\u0D61\u0D66-\u0D78\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DE6-\u0DEF\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F20-\u0F33\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F-\u1049\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u1090-\u1099\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1369-\u137C\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A16\u1A20-\u1A54\u1A80-\u1A89\u1A90-\u1A99\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B50-\u1B59\u1B83-\u1BA0\u1BAE-\u1BE5\u1C00-\u1C23\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2070\u2071\u2074-\u2079\u207F-\u2089\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2150-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2CFD\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u3192-\u3195\u31A0-\u31BF\u31F0-\u31FF\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\u3400-\u4DBF\u4E00-\u9FFC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7BF\uA7C2-\uA7CA\uA7F5-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA830-\uA835\uA840-\uA873\uA882-\uA8B3\uA8D0-\uA8D9\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA900-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF-\uA9D9\uA9E0-\uA9E4\uA9E6-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA50-\uAA59\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDE80-\uDE9C\uDEA0-\uDED0\uDEE1-\uDEFB\uDF00-\uDF23\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC58-\uDC76\uDC79-\uDC9E\uDCA7-\uDCAF\uDCE0-\uDCF2\uDCF4\uDCF5\uDCFB-\uDD1B\uDD20-\uDD39\uDD80-\uDDB7\uDDBC-\uDDCF\uDDD2-\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE40-\uDE48\uDE60-\uDE7E\uDE80-\uDE9F\uDEC0-\uDEC7\uDEC9-\uDEE4\uDEEB-\uDEEF\uDF00-\uDF35\uDF40-\uDF55\uDF58-\uDF72\uDF78-\uDF91\uDFA9-\uDFAF]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDCFA-\uDD23\uDD30-\uDD39\uDE60-\uDE7E\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF27\uDF30-\uDF45\uDF51-\uDF54\uDFB0-\uDFCB\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC52-\uDC6F\uDC83-\uDCAF\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD03-\uDD26\uDD36-\uDD3F\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDD0-\uDDDA\uDDDC\uDDE1-\uDDF4\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDEF0-\uDEF9\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC50-\uDC59\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE50-\uDE59\uDE80-\uDEAA\uDEB8\uDEC0-\uDEC9\uDF00-\uDF1A\uDF30-\uDF3B]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCF2\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDD50-\uDD59\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC50-\uDC6C\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD50-\uDD59\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDDA0-\uDDA9\uDEE0-\uDEF2\uDFB0\uDFC0-\uDFD4]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF50-\uDF59\uDF5B-\uDF61\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE96\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82C[\uDC00-\uDD1E\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD834[\uDEE0-\uDEF3\uDF60-\uDF78]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD40-\uDD49\uDD4E\uDEC0-\uDEEB\uDEF0-\uDEF9]|\uD83A[\uDC00-\uDCC4\uDCC7-\uDCCF\uDD00-\uDD43\uDD4B\uDD50-\uDD59]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83C[\uDD00-\uDD0C]|\uD83E[\uDFF0-\uDFF9]|\uD869[\uDC00-\uDEDD\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A])/))){var l=o[1]||o[2]||"";if(!l||l&&(r===""||this.rules.inline.punctuation.exec(r))){var v,h,c=o[0].length-1,k=c,w=0,E=o[0][0]==="*"?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(E.lastIndex=0,t=t.slice(-1*e.length+c);(o=E.exec(t))!=null;)if(v=o[1]||o[2]||o[3]||o[4]||o[5]||o[6])if(h=v.length,o[3]||o[4])k+=h;else if(!((o[5]||o[6])&&c%3)||(c+h)%3){if(!((k-=h)>0)){if(h=Math.min(h,h+k+w),Math.min(c,h)%2){var F=e.slice(1,c+o.index+h);return{type:"em",raw:e.slice(0,c+o.index+h+1),text:F,tokens:this.lexer.inlineTokens(F,[])}}var T=e.slice(2,c+o.index+h-1);return{type:"strong",raw:e.slice(0,c+o.index+h+1),text:T,tokens:this.lexer.inlineTokens(T,[])}}}else w+=h}}}},{key:"codespan",value:function(e){var t=this.rules.inline.code.exec(e);if(t){var r=t[2].replace(/\n/g," "),o=/[^ ]/.test(r),l=/^ /.test(r)&&/ $/.test(r);return o&&l&&(r=r.substring(1,r.length-1)),r=ut(r,!0),{type:"codespan",raw:t[0],text:r}}}},{key:"br",value:function(e){var t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}},{key:"del",value:function(e){var t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2],[])}}},{key:"autolink",value:function(e,t){var r,o,l=this.rules.inline.autolink.exec(e);if(l)return o=l[2]==="@"?"mailto:"+(r=ut(this.options.mangle?t(l[1]):l[1])):r=ut(l[1]),{type:"link",raw:l[0],text:r,href:o,tokens:[{type:"text",raw:r,text:r}]}}},{key:"url",value:function(e,t){var r;if(r=this.rules.inline.url.exec(e)){var o,l;if(r[2]==="@")l="mailto:"+(o=ut(this.options.mangle?t(r[0]):r[0]));else{var v;do v=r[0],r[0]=this.rules.inline._backpedal.exec(r[0])[0];while(v!==r[0]);o=ut(r[0]),l=r[1]==="www."?"http://"+o:o}return{type:"link",raw:r[0],text:o,href:l,tokens:[{type:"text",raw:o,text:o}]}}}},{key:"inlineText",value:function(e,t){var r,o=this.rules.inline.text.exec(e);if(o)return r=this.lexer.state.inRawBlock?this.options.sanitize?this.options.sanitizer?this.options.sanitizer(o[0]):ut(o[0]):o[0]:ut(this.options.smartypants?t(o[0]):o[0]),{type:"text",raw:o[0],text:r}}}]),i}(),z={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)( [^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?<?([^\s>]+)>?(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:Fn,lheading:/^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/,_label:/(?!\s*\])(?:\\.|[^\[\]\\])+/,_title:/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/};z.def=X(z.def).replace("label",z._label).replace("title",z._title).getRegex(),z.bullet=/(?:[*+-]|\d{1,9}[.)])/,z.listItemStart=X(/^( *)(bull) */).replace("bull",z.bullet).getRegex(),z.list=X(z.list).replace(/bull/g,z.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+z.def.source+")").getRegex(),z._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",z._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/,z.html=X(z.html,"i").replace("comment",z._comment).replace("tag",z._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),z.paragraph=X(z._paragraph).replace("hr",z.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",z._tag).getRegex(),z.blockquote=X(z.blockquote).replace("paragraph",z.paragraph).getRegex(),z.normal=Bt({},z),z.gfm=Bt({},z.normal,{table:"^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"}),z.gfm.table=X(z.gfm.table).replace("hr",z.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",z._tag).getRegex(),z.gfm.paragraph=X(z._paragraph).replace("hr",z.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("table",z.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",z._tag).getRegex(),z.pedantic=Bt({},z.normal,{html:X(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",z._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Fn,paragraph:X(z.normal._paragraph).replace("hr",z.hr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",z.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()});var L={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:Fn,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,rDelimAst:/^[^_*]*?\_\_[^_*]*?\*[^_*]*?(?=\_\_)|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/,rDelimUnd:/^[^_*]*?\*\*[^_*]*?\_[^_*]*?(?=\*\*)|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:Fn,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^([\spunctuation])/};function Mu(i){return i.replace(/---/g,"\u2014").replace(/--/g,"\u2013").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1\u2018").replace(/'/g,"\u2019").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1\u201C").replace(/"/g,"\u201D").replace(/\.{3}/g,"\u2026")}function la(i){var e,t,r="",o=i.length;for(e=0;e<o;e++)t=i.charCodeAt(e),Math.random()>.5&&(t="x"+t.toString(16)),r+="&#"+t+";";return r}L._punctuation="!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~",L.punctuation=X(L.punctuation).replace(/punctuation/g,L._punctuation).getRegex(),L.blockSkip=/\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g,L.escapedEmSt=/\\\*|\\_/g,L._comment=X(z._comment).replace("(?:-->|$)","-->").getRegex(),L.emStrong.lDelim=X(L.emStrong.lDelim).replace(/punct/g,L._punctuation).getRegex(),L.emStrong.rDelimAst=X(L.emStrong.rDelimAst,"g").replace(/punct/g,L._punctuation).getRegex(),L.emStrong.rDelimUnd=X(L.emStrong.rDelimUnd,"g").replace(/punct/g,L._punctuation).getRegex(),L._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g,L._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,L._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,L.autolink=X(L.autolink).replace("scheme",L._scheme).replace("email",L._email).getRegex(),L._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,L.tag=X(L.tag).replace("comment",L._comment).replace("attribute",L._attribute).getRegex(),L._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,L._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/,L._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,L.link=X(L.link).replace("label",L._label).replace("href",L._href).replace("title",L._title).getRegex(),L.reflink=X(L.reflink).replace("label",L._label).replace("ref",z._label).getRegex(),L.nolink=X(L.nolink).replace("ref",z._label).getRegex(),L.reflinkSearch=X(L.reflinkSearch,"g").replace("reflink",L.reflink).replace("nolink",L.nolink).getRegex(),L.normal=Bt({},L),L.pedantic=Bt({},L.normal,{strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:X(/^!?\[(label)\]\((.*?)\)/).replace("label",L._label).getRegex(),reflink:X(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",L._label).getRegex()}),L.gfm=Bt({},L.normal,{escape:X(L.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/}),L.gfm.url=X(L.gfm.url,"i").replace("email",L.gfm._extended_email).getRegex(),L.breaks=Bt({},L.gfm,{br:X(L.br).replace("{2,}","*").getRegex(),text:X(L.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()});var Ye=function(){function i(e){we(this,i),this.tokens=[],this.tokens.links=Object.create(null),this.options=e||Ae,this.options.tokenizer=this.options.tokenizer||new Si,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};var t={block:z.normal,inline:L.normal};this.options.pedantic?(t.block=z.pedantic,t.inline=L.pedantic):this.options.gfm&&(t.block=z.gfm,this.options.breaks?t.inline=L.breaks:t.inline=L.gfm),this.tokenizer.rules=t}return ke(i,[{key:"lex",value:function(e){var t;for(e=e.replace(/\r\n|\r/g,`
`).replace(/\t/g,"    "),this.blockTokens(e,this.tokens);t=this.inlineQueue.shift();)this.inlineTokens(t.src,t.tokens);return this.tokens}},{key:"blockTokens",value:function(e){var t,r,o,l,v=this,h=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];for(this.options.pedantic&&(e=e.replace(/^ +$/gm,""));e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(function(k){return!!(t=k.call({lexer:v},e,h))&&(e=e.substring(t.raw.length),h.push(t),!0)}))){if(t=this.tokenizer.space(e))e=e.substring(t.raw.length),t.raw.length===1&&h.length>0?h[h.length-1].raw+=`
`:h.push(t);else if(t=this.tokenizer.code(e))e=e.substring(t.raw.length),!(r=h[h.length-1])||r.type!=="paragraph"&&r.type!=="text"?h.push(t):(r.raw+=`
`+t.raw,r.text+=`
`+t.text,this.inlineQueue[this.inlineQueue.length-1].src=r.text);else if(t=this.tokenizer.fences(e))e=e.substring(t.raw.length),h.push(t);else if(t=this.tokenizer.heading(e))e=e.substring(t.raw.length),h.push(t);else if(t=this.tokenizer.hr(e))e=e.substring(t.raw.length),h.push(t);else if(t=this.tokenizer.blockquote(e))e=e.substring(t.raw.length),h.push(t);else if(t=this.tokenizer.list(e))e=e.substring(t.raw.length),h.push(t);else if(t=this.tokenizer.html(e))e=e.substring(t.raw.length),h.push(t);else if(t=this.tokenizer.def(e))e=e.substring(t.raw.length),!(r=h[h.length-1])||r.type!=="paragraph"&&r.type!=="text"?this.tokens.links[t.tag]||(this.tokens.links[t.tag]={href:t.href,title:t.title}):(r.raw+=`
`+t.raw,r.text+=`
`+t.raw,this.inlineQueue[this.inlineQueue.length-1].src=r.text);else if(t=this.tokenizer.table(e))e=e.substring(t.raw.length),h.push(t);else if(t=this.tokenizer.lheading(e))e=e.substring(t.raw.length),h.push(t);else if(o=e,this.options.extensions&&this.options.extensions.startBlock&&function(){var k=1/0,w=e.slice(1),E=void 0;v.options.extensions.startBlock.forEach(function(F){typeof(E=F.call({lexer:this},w))=="number"&&E>=0&&(k=Math.min(k,E))}),k<1/0&&k>=0&&(o=e.substring(0,k+1))}(),this.state.top&&(t=this.tokenizer.paragraph(o)))r=h[h.length-1],l&&r.type==="paragraph"?(r.raw+=`
`+t.raw,r.text+=`
`+t.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=r.text):h.push(t),l=o.length!==e.length,e=e.substring(t.raw.length);else if(t=this.tokenizer.text(e))e=e.substring(t.raw.length),(r=h[h.length-1])&&r.type==="text"?(r.raw+=`
`+t.raw,r.text+=`
`+t.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=r.text):h.push(t);else if(e){var c="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(c);break}throw new Error(c)}}return this.state.top=!0,h}},{key:"inline",value:function(e,t){this.inlineQueue.push({src:e,tokens:t})}},{key:"inlineTokens",value:function(e){var t,r,o,l,v,h,c=this,k=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],w=e;if(this.tokens.links){var E=Object.keys(this.tokens.links);if(E.length>0)for(;(l=this.tokenizer.rules.inline.reflinkSearch.exec(w))!=null;)E.includes(l[0].slice(l[0].lastIndexOf("[")+1,-1))&&(w=w.slice(0,l.index)+"["+sa("a",l[0].length-2)+"]"+w.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(l=this.tokenizer.rules.inline.blockSkip.exec(w))!=null;)w=w.slice(0,l.index)+"["+sa("a",l[0].length-2)+"]"+w.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(l=this.tokenizer.rules.inline.escapedEmSt.exec(w))!=null;)w=w.slice(0,l.index)+"++"+w.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);for(;e;)if(v||(h=""),v=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(function(T){return!!(t=T.call({lexer:c},e,k))&&(e=e.substring(t.raw.length),k.push(t),!0)})))if(t=this.tokenizer.escape(e))e=e.substring(t.raw.length),k.push(t);else if(t=this.tokenizer.tag(e))e=e.substring(t.raw.length),(r=k[k.length-1])&&t.type==="text"&&r.type==="text"?(r.raw+=t.raw,r.text+=t.text):k.push(t);else if(t=this.tokenizer.link(e))e=e.substring(t.raw.length),k.push(t);else if(t=this.tokenizer.reflink(e,this.tokens.links))e=e.substring(t.raw.length),(r=k[k.length-1])&&t.type==="text"&&r.type==="text"?(r.raw+=t.raw,r.text+=t.text):k.push(t);else if(t=this.tokenizer.emStrong(e,w,h))e=e.substring(t.raw.length),k.push(t);else if(t=this.tokenizer.codespan(e))e=e.substring(t.raw.length),k.push(t);else if(t=this.tokenizer.br(e))e=e.substring(t.raw.length),k.push(t);else if(t=this.tokenizer.del(e))e=e.substring(t.raw.length),k.push(t);else if(t=this.tokenizer.autolink(e,la))e=e.substring(t.raw.length),k.push(t);else if(this.state.inLink||!(t=this.tokenizer.url(e,la))){if(o=e,this.options.extensions&&this.options.extensions.startInline&&function(){var T=1/0,M=e.slice(1),O=void 0;c.options.extensions.startInline.forEach(function(P){typeof(O=P.call({lexer:this},M))=="number"&&O>=0&&(T=Math.min(T,O))}),T<1/0&&T>=0&&(o=e.substring(0,T+1))}(),t=this.tokenizer.inlineText(o,Mu))e=e.substring(t.raw.length),t.raw.slice(-1)!=="_"&&(h=t.raw.slice(-1)),v=!0,(r=k[k.length-1])&&r.type==="text"?(r.raw+=t.raw,r.text+=t.text):k.push(t);else if(e){var F="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(F);break}throw new Error(F)}}else e=e.substring(t.raw.length),k.push(t);return k}}],[{key:"rules",get:function(){return{block:z,inline:L}}},{key:"lex",value:function(e,t){return new i(t).lex(e)}},{key:"lexInline",value:function(e,t){return new i(t).inlineTokens(e)}}]),i}(),Ci=function(){function i(e){we(this,i),this.options=e||Ae}return ke(i,[{key:"code",value:function(e,t,r){var o=(t||"").match(/\S*/)[0];if(this.options.highlight){var l=this.options.highlight(e,o);l!=null&&l!==e&&(r=!0,e=l)}return e=e.replace(/\n$/,"")+`
`,o?'<pre><code class="'+this.options.langPrefix+ut(o,!0)+'">'+(r?e:ut(e,!0))+`</code></pre>
`:"<pre><code>"+(r?e:ut(e,!0))+`</code></pre>
`}},{key:"blockquote",value:function(e){return`<blockquote>
`+e+`</blockquote>
`}},{key:"html",value:function(e){return e}},{key:"heading",value:function(e,t,r,o){return this.options.headerIds?"<h"+t+' id="'+this.options.headerPrefix+o.slug(r)+'">'+e+"</h"+t+`>
`:"<h"+t+">"+e+"</h"+t+`>
`}},{key:"hr",value:function(){return this.options.xhtml?`<hr/>
`:`<hr>
`}},{key:"list",value:function(e,t,r){var o=t?"ol":"ul";return"<"+o+(t&&r!==1?' start="'+r+'"':"")+`>
`+e+"</"+o+`>
`}},{key:"listitem",value:function(e){return"<li>"+e+`</li>
`}},{key:"checkbox",value:function(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "}},{key:"paragraph",value:function(e){return"<p>"+e+`</p>
`}},{key:"table",value:function(e,t){return t&&(t="<tbody>"+t+"</tbody>"),`<table>
<thead>
`+e+`</thead>
`+t+`</table>
`}},{key:"tablerow",value:function(e){return`<tr>
`+e+`</tr>
`}},{key:"tablecell",value:function(e,t){var r=t.header?"th":"td";return(t.align?"<"+r+' align="'+t.align+'">':"<"+r+">")+e+"</"+r+`>
`}},{key:"strong",value:function(e){return"<strong>"+e+"</strong>"}},{key:"em",value:function(e){return"<em>"+e+"</em>"}},{key:"codespan",value:function(e){return"<code>"+e+"</code>"}},{key:"br",value:function(){return this.options.xhtml?"<br/>":"<br>"}},{key:"del",value:function(e){return"<del>"+e+"</del>"}},{key:"link",value:function(e,t,r){if((e=ia(this.options.sanitize,this.options.baseUrl,e))===null)return r;var o='<a href="'+ut(e)+'"';return t&&(o+=' title="'+t+'"'),o+=">"+r+"</a>"}},{key:"image",value:function(e,t,r){if((e=ia(this.options.sanitize,this.options.baseUrl,e))===null)return r;var o='<img src="'+e+'" alt="'+r+'"';return t&&(o+=' title="'+t+'"'),o+=this.options.xhtml?"/>":">"}},{key:"text",value:function(e){return e}}]),i}(),ua=function(){function i(){we(this,i)}return ke(i,[{key:"strong",value:function(e){return e}},{key:"em",value:function(e){return e}},{key:"codespan",value:function(e){return e}},{key:"del",value:function(e){return e}},{key:"html",value:function(e){return e}},{key:"text",value:function(e){return e}},{key:"link",value:function(e,t,r){return""+r}},{key:"image",value:function(e,t,r){return""+r}},{key:"br",value:function(){return""}}]),i}(),ca=function(){function i(){we(this,i),this.seen={}}return ke(i,[{key:"serialize",value:function(e){return e.toLowerCase().trim().replace(/<[!\/a-z].*?>/gi,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")}},{key:"getNextSafeSlug",value:function(e,t){var r=e,o=0;if(this.seen.hasOwnProperty(r)){o=this.seen[e];do r=e+"-"+ ++o;while(this.seen.hasOwnProperty(r))}return t||(this.seen[e]=o,this.seen[r]=0),r}},{key:"slug",value:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=this.serialize(e);return this.getNextSafeSlug(r,t.dryrun)}}]),i}(),Xe=function(){function i(e){we(this,i),this.options=e||Ae,this.options.renderer=this.options.renderer||new Ci,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new ua,this.slugger=new ca}return ke(i,[{key:"parse",value:function(e){var t,r,o,l,v,h,c,k,w,E,F,T,M,O,P,K,rt,at,wt,te=!(arguments.length>1&&arguments[1]!==void 0)||arguments[1],st="",zt=e.length;for(t=0;t<zt;t++)if(E=e[t],!(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[E.type])||(wt=this.options.extensions.renderers[E.type].call({parser:this},E))===!1&&["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(E.type))switch(E.type){case"space":continue;case"hr":st+=this.renderer.hr();continue;case"heading":st+=this.renderer.heading(this.parseInline(E.tokens),E.depth,na(this.parseInline(E.tokens,this.textRenderer)),this.slugger);continue;case"code":st+=this.renderer.code(E.text,E.lang,E.escaped);continue;case"table":for(k="",c="",l=E.header.length,r=0;r<l;r++)c+=this.renderer.tablecell(this.parseInline(E.header[r].tokens),{header:!0,align:E.align[r]});for(k+=this.renderer.tablerow(c),w="",l=E.rows.length,r=0;r<l;r++){for(c="",v=(h=E.rows[r]).length,o=0;o<v;o++)c+=this.renderer.tablecell(this.parseInline(h[o].tokens),{header:!1,align:E.align[o]});w+=this.renderer.tablerow(c)}st+=this.renderer.table(k,w);continue;case"blockquote":w=this.parse(E.tokens),st+=this.renderer.blockquote(w);continue;case"list":for(F=E.ordered,T=E.start,M=E.loose,l=E.items.length,w="",r=0;r<l;r++)K=(P=E.items[r]).checked,rt=P.task,O="",P.task&&(at=this.renderer.checkbox(K),M?P.tokens.length>0&&P.tokens[0].type==="paragraph"?(P.tokens[0].text=at+" "+P.tokens[0].text,P.tokens[0].tokens&&P.tokens[0].tokens.length>0&&P.tokens[0].tokens[0].type==="text"&&(P.tokens[0].tokens[0].text=at+" "+P.tokens[0].tokens[0].text)):P.tokens.unshift({type:"text",text:at}):O+=at),O+=this.parse(P.tokens,M),w+=this.renderer.listitem(O,rt,K);st+=this.renderer.list(w,F,T);continue;case"html":st+=this.renderer.html(E.text);continue;case"paragraph":st+=this.renderer.paragraph(this.parseInline(E.tokens));continue;case"text":for(w=E.tokens?this.parseInline(E.tokens):E.text;t+1<zt&&e[t+1].type==="text";)w+=`
`+((E=e[++t]).tokens?this.parseInline(E.tokens):E.text);st+=te?this.renderer.paragraph(w):w;continue;default:var jt='Token with "'+E.type+'" type was not found.';if(this.options.silent)return void console.error(jt);throw new Error(jt)}else st+=wt||"";return st}},{key:"parseInline",value:function(e,t){t=t||this.renderer;var r,o,l,v="",h=e.length;for(r=0;r<h;r++)if(o=e[r],!(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[o.type])||(l=this.options.extensions.renderers[o.type].call({parser:this},o))===!1&&["escape","html","link","image","strong","em","codespan","br","del","text"].includes(o.type))switch(o.type){case"escape":v+=t.text(o.text);break;case"html":v+=t.html(o.text);break;case"link":v+=t.link(o.href,o.title,this.parseInline(o.tokens,t));break;case"image":v+=t.image(o.href,o.title,o.text);break;case"strong":v+=t.strong(this.parseInline(o.tokens,t));break;case"em":v+=t.em(this.parseInline(o.tokens,t));break;case"codespan":v+=t.codespan(o.text);break;case"br":v+=t.br();break;case"del":v+=t.del(this.parseInline(o.tokens,t));break;case"text":v+=t.text(o.text);break;default:var c='Token with "'+o.type+'" type was not found.';if(this.options.silent)return void console.error(c);throw new Error(c)}else v+=l||"";return v}}],[{key:"parse",value:function(e,t){return new i(t).parse(e)}},{key:"parseInline",value:function(e,t){return new i(t).parseInline(e)}}]),i}();function U(i,e,t){if(i==null)throw new Error("marked(): input parameter is undefined or null");if(typeof i!="string")throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(i)+", string expected");if(typeof e=="function"&&(t=e,e=null),aa(e=Bt({},U.defaults,e||{})),t){var r,o=e.highlight;try{r=Ye.lex(i,e)}catch(c){return t(c)}var l=function(c){var k;if(!c)try{e.walkTokens&&U.walkTokens(r,e.walkTokens),k=Xe.parse(r,e)}catch(w){c=w}return e.highlight=o,c?t(c):t(null,k)};if(!o||o.length<3||(delete e.highlight,!r.length))return l();var v=0;return U.walkTokens(r,function(c){c.type==="code"&&(v++,setTimeout(function(){o(c.text,c.lang,function(k,w){if(k)return l(k);w!=null&&w!==c.text&&(c.text=w,c.escaped=!0),--v===0&&l()})},0))}),void(v===0&&l())}try{var h=Ye.lex(i,e);return e.walkTokens&&U.walkTokens(h,e.walkTokens),Xe.parse(h,e)}catch(c){if(c.message+=`
Please report this to https://github.com/markedjs/marked.`,e.silent)return"<p>An error occurred:</p><pre>"+ut(c.message+"",!0)+"</pre>";throw c}}return U.options=U.setOptions=function(i){var e;return Bt(U.defaults,i),e=U.defaults,Ae=e,U},U.getDefaults=wu,U.defaults=Ae,U.use=function(){for(var i=arguments.length,e=new Array(i),t=0;t<i;t++)e[t]=arguments[t];var r,o=Bt.apply(void 0,[{}].concat(e)),l=U.defaults.extensions||{renderers:{},childTokens:{}};e.forEach(function(v){if(v.extensions&&(r=!0,v.extensions.forEach(function(c){if(!c.name)throw new Error("extension name required");if(c.renderer){var k=l.renderers?l.renderers[c.name]:null;l.renderers[c.name]=k?function(){for(var w=arguments.length,E=new Array(w),F=0;F<w;F++)E[F]=arguments[F];var T=c.renderer.apply(this,E);return T===!1&&(T=k.apply(this,E)),T}:c.renderer}if(c.tokenizer){if(!c.level||c.level!=="block"&&c.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");l[c.level]?l[c.level].unshift(c.tokenizer):l[c.level]=[c.tokenizer],c.start&&(c.level==="block"?l.startBlock?l.startBlock.push(c.start):l.startBlock=[c.start]:c.level==="inline"&&(l.startInline?l.startInline.push(c.start):l.startInline=[c.start]))}c.childTokens&&(l.childTokens[c.name]=c.childTokens)})),v.renderer&&function(){var c=U.defaults.renderer||new Ci,k=function(E){var F=c[E];c[E]=function(){for(var T=arguments.length,M=new Array(T),O=0;O<T;O++)M[O]=arguments[O];var P=v.renderer[E].apply(c,M);return P===!1&&(P=F.apply(c,M)),P}};for(var w in v.renderer)k(w);o.renderer=c}(),v.tokenizer&&function(){var c=U.defaults.tokenizer||new Si,k=function(E){var F=c[E];c[E]=function(){for(var T=arguments.length,M=new Array(T),O=0;O<T;O++)M[O]=arguments[O];var P=v.tokenizer[E].apply(c,M);return P===!1&&(P=F.apply(c,M)),P}};for(var w in v.tokenizer)k(w);o.tokenizer=c}(),v.walkTokens){var h=U.defaults.walkTokens;o.walkTokens=function(c){v.walkTokens.call(this,c),h&&h.call(this,c)}}r&&(o.extensions=l),U.setOptions(o)})},U.walkTokens=function(i,e){var t,r=We(i);try{var o=function(){var l=t.value;switch(e.call(U,l),l.type){case"table":var v,h=We(l.header);try{for(h.s();!(v=h.n()).done;){var c=v.value;U.walkTokens(c.tokens,e)}}catch(M){h.e(M)}finally{h.f()}var k,w=We(l.rows);try{for(w.s();!(k=w.n()).done;){var E,F=We(k.value);try{for(F.s();!(E=F.n()).done;){var T=E.value;U.walkTokens(T.tokens,e)}}catch(M){F.e(M)}finally{F.f()}}}catch(M){w.e(M)}finally{w.f()}break;case"list":U.walkTokens(l.items,e);break;default:U.defaults.extensions&&U.defaults.extensions.childTokens&&U.defaults.extensions.childTokens[l.type]?U.defaults.extensions.childTokens[l.type].forEach(function(M){U.walkTokens(l[M],e)}):l.tokens&&U.walkTokens(l.tokens,e)}};for(r.s();!(t=r.n()).done;)o()}catch(l){r.e(l)}finally{r.f()}},U.parseInline=function(i,e){if(i==null)throw new Error("marked.parseInline(): input parameter is undefined or null");if(typeof i!="string")throw new Error("marked.parseInline(): input parameter is of type "+Object.prototype.toString.call(i)+", string expected");aa(e=Bt({},U.defaults,e||{}));try{var t=Ye.lexInline(i,e);return e.walkTokens&&U.walkTokens(t,e.walkTokens),Xe.parseInline(t,e)}catch(r){if(r.message+=`
Please report this to https://github.com/markedjs/marked.`,e.silent)return"<p>An error occurred:</p><pre>"+ut(r.message+"",!0)+"</pre>";throw r}},U.Parser=Xe,U.parser=Xe.parse,U.Renderer=Ci,U.TextRenderer=ua,U.Lexer=Ye,U.lexer=Ye.lex,U.Tokenizer=Si,U.Slugger=ca,U.parse=U,function(){var i,e,t=null;function r(){if(t&&!t.closed)t.focus();else{if((t=window.open("about:blank","reveal.js - Notes","width=1100,height=700")).marked=U,t.document.write(`<!--
	NOTE: You need to build the notes plugin after making changes to this file.
-->
<html lang="en">
	<head>
		<meta charset="utf-8">

		<title>reveal.js - Speaker View</title>

		<style>
			body {
				font-family: Helvetica;
				font-size: 18px;
			}

			#current-slide,
			#upcoming-slide,
			#speaker-controls {
				padding: 6px;
				box-sizing: border-box;
				-moz-box-sizing: border-box;
			}

			#current-slide iframe,
			#upcoming-slide iframe {
				width: 100%;
				height: 100%;
				border: 1px solid #ddd;
			}

			#current-slide .label,
			#upcoming-slide .label {
				position: absolute;
				top: 10px;
				left: 10px;
				z-index: 2;
			}

			#connection-status {
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				z-index: 20;
				padding: 30% 20% 20% 20%;
				font-size: 18px;
				color: #222;
				background: #fff;
				text-align: center;
				box-sizing: border-box;
				line-height: 1.4;
			}

			.overlay-element {
				height: 34px;
				line-height: 34px;
				padding: 0 10px;
				text-shadow: none;
				background: rgba( 220, 220, 220, 0.8 );
				color: #222;
				font-size: 14px;
			}

			.overlay-element.interactive:hover {
				background: rgba( 220, 220, 220, 1 );
			}

			#current-slide {
				position: absolute;
				width: 60%;
				height: 100%;
				top: 0;
				left: 0;
				padding-right: 0;
			}

			#upcoming-slide {
				position: absolute;
				width: 40%;
				height: 40%;
				right: 0;
				top: 0;
			}

			/* Speaker controls */
			#speaker-controls {
				position: absolute;
				top: 40%;
				right: 0;
				width: 40%;
				height: 60%;
				overflow: auto;
				font-size: 18px;
			}

				.speaker-controls-time.hidden,
				.speaker-controls-notes.hidden {
					display: none;
				}

				.speaker-controls-time .label,
				.speaker-controls-pace .label,
				.speaker-controls-notes .label {
					text-transform: uppercase;
					font-weight: normal;
					font-size: 0.66em;
					color: #666;
					margin: 0;
				}

				.speaker-controls-time, .speaker-controls-pace {
					border-bottom: 1px solid rgba( 200, 200, 200, 0.5 );
					margin-bottom: 10px;
					padding: 10px 16px;
					padding-bottom: 20px;
					cursor: pointer;
				}

				.speaker-controls-time .reset-button {
					opacity: 0;
					float: right;
					color: #666;
					text-decoration: none;
				}
				.speaker-controls-time:hover .reset-button {
					opacity: 1;
				}

				.speaker-controls-time .timer,
				.speaker-controls-time .clock {
					width: 50%;
				}

				.speaker-controls-time .timer,
				.speaker-controls-time .clock,
				.speaker-controls-time .pacing .hours-value,
				.speaker-controls-time .pacing .minutes-value,
				.speaker-controls-time .pacing .seconds-value {
					font-size: 1.9em;
				}

				.speaker-controls-time .timer {
					float: left;
				}

				.speaker-controls-time .clock {
					float: right;
					text-align: right;
				}

				.speaker-controls-time span.mute {
					opacity: 0.3;
				}

				.speaker-controls-time .pacing-title {
					margin-top: 5px;
				}

				.speaker-controls-time .pacing.ahead {
					color: blue;
				}

				.speaker-controls-time .pacing.on-track {
					color: green;
				}

				.speaker-controls-time .pacing.behind {
					color: red;
				}

				.speaker-controls-notes {
					padding: 10px 16px;
				}

				.speaker-controls-notes .value {
					margin-top: 5px;
					line-height: 1.4;
					font-size: 1.2em;
				}

			/* Layout selector\xA0*/
			#speaker-layout {
				position: absolute;
				top: 10px;
				right: 10px;
				color: #222;
				z-index: 10;
			}
				#speaker-layout select {
					position: absolute;
					width: 100%;
					height: 100%;
					top: 0;
					left: 0;
					border: 0;
					box-shadow: 0;
					cursor: pointer;
					opacity: 0;

					font-size: 1em;
					background-color: transparent;

					-moz-appearance: none;
					-webkit-appearance: none;
					-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
				}

				#speaker-layout select:focus {
					outline: none;
					box-shadow: none;
				}

			.clear {
				clear: both;
			}

			/* Speaker layout: Wide */
			body[data-speaker-layout="wide"] #current-slide,
			body[data-speaker-layout="wide"] #upcoming-slide {
				width: 50%;
				height: 45%;
				padding: 6px;
			}

			body[data-speaker-layout="wide"] #current-slide {
				top: 0;
				left: 0;
			}

			body[data-speaker-layout="wide"] #upcoming-slide {
				top: 0;
				left: 50%;
			}

			body[data-speaker-layout="wide"] #speaker-controls {
				top: 45%;
				left: 0;
				width: 100%;
				height: 50%;
				font-size: 1.25em;
			}

			/* Speaker layout: Tall */
			body[data-speaker-layout="tall"] #current-slide,
			body[data-speaker-layout="tall"] #upcoming-slide {
				width: 45%;
				height: 50%;
				padding: 6px;
			}

			body[data-speaker-layout="tall"] #current-slide {
				top: 0;
				left: 0;
			}

			body[data-speaker-layout="tall"] #upcoming-slide {
				top: 50%;
				left: 0;
			}

			body[data-speaker-layout="tall"] #speaker-controls {
				padding-top: 40px;
				top: 0;
				left: 45%;
				width: 55%;
				height: 100%;
				font-size: 1.25em;
			}

			/* Speaker layout: Notes only */
			body[data-speaker-layout="notes-only"] #current-slide,
			body[data-speaker-layout="notes-only"] #upcoming-slide {
				display: none;
			}

			body[data-speaker-layout="notes-only"] #speaker-controls {
				padding-top: 40px;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				font-size: 1.25em;
			}

			@media screen and (max-width: 1080px) {
				body[data-speaker-layout="default"] #speaker-controls {
					font-size: 16px;
				}
			}

			@media screen and (max-width: 900px) {
				body[data-speaker-layout="default"] #speaker-controls {
					font-size: 14px;
				}
			}

			@media screen and (max-width: 800px) {
				body[data-speaker-layout="default"] #speaker-controls {
					font-size: 12px;
				}
			}

		</style>
	</head>

	<body>

		<div id="connection-status">Loading speaker view...</div>

		<div id="current-slide"></div>
		<div id="upcoming-slide"><span class="overlay-element label">Upcoming</span></div>
		<div id="speaker-controls">
			<div class="speaker-controls-time">
				<h4 class="label">Time <span class="reset-button">Click to Reset</span></h4>
				<div class="clock">
					<span class="clock-value">0:00 AM</span>
				</div>
				<div class="timer">
					<span class="hours-value">00</span><span class="minutes-value">:00</span><span class="seconds-value">:00</span>
				</div>
				<div class="clear"></div>

				<h4 class="label pacing-title" style="display: none">Pacing \u2013 Time to finish current slide</h4>
				<div class="pacing" style="display: none">
					<span class="hours-value">00</span><span class="minutes-value">:00</span><span class="seconds-value">:00</span>
				</div>
			</div>

			<div class="speaker-controls-notes hidden">
				<h4 class="label">Notes</h4>
				<div class="value"></div>
			</div>
		</div>
		<div id="speaker-layout" class="overlay-element interactive">
			<span class="speaker-layout-label"></span>
			<select class="speaker-layout-dropdown"></select>
		</div>

		<script>

			(function() {

				var notes,
					notesValue,
					currentState,
					currentSlide,
					upcomingSlide,
					layoutLabel,
					layoutDropdown,
					pendingCalls = {},
					lastRevealApiCallId = 0,
					connected = false,
					whitelistedWindows = [window.opener];

				var SPEAKER_LAYOUTS = {
					'default': 'Default',
					'wide': 'Wide',
					'tall': 'Tall',
					'notes-only': 'Notes only'
				};

				setupLayout();

				var connectionStatus = document.querySelector( '#connection-status' );
				var connectionTimeout = setTimeout( function() {
					connectionStatus.innerHTML = 'Error connecting to main window.<br>Please try closing and reopening the speaker view.';
				}, 5000 );
;
				window.addEventListener( 'message', function( event ) {

					// Validate the origin of this message to prevent XSS
					if( window.location.origin !== event.origin && whitelistedWindows.indexOf( event.source ) === -1 ) {
						return;
					}

					clearTimeout( connectionTimeout );
					connectionStatus.style.display = 'none';

					var data = JSON.parse( event.data );

					// The overview mode is only useful to the reveal.js instance
					// where navigation occurs so we don't sync it
					if( data.state ) delete data.state.overview;

					// Messages sent by the notes plugin inside of the main window
					if( data && data.namespace === 'reveal-notes' ) {
						if( data.type === 'connect' ) {
							handleConnectMessage( data );
						}
						else if( data.type === 'state' ) {
							handleStateMessage( data );
						}
						else if( data.type === 'return' ) {
							pendingCalls[data.callId](data.result);
							delete pendingCalls[data.callId];
						}
					}
					// Messages sent by the reveal.js inside of the current slide preview
					else if( data && data.namespace === 'reveal' ) {
						if( /ready/.test( data.eventName ) ) {
							// Send a message back to notify that the handshake is complete
							window.opener.postMessage( JSON.stringify({ namespace: 'reveal-notes', type: 'connected'} ), '*' );
						}
						else if( /slidechanged|fragmentshown|fragmenthidden|paused|resumed/.test( data.eventName ) && currentState !== JSON.stringify( data.state ) ) {

							dispatchStateToMainWindow( data.state );

						}
					}

				} );

				/**
				 * Updates the presentation in the main window to match the state
				 * of the presentation in the notes window.
				 */
				const dispatchStateToMainWindow = debounce(( state ) => {
					window.opener.postMessage( JSON.stringify({ method: 'setState', args: [ state ]} ), '*' );
				}, 500);

				/**
				 * Asynchronously calls the Reveal.js API of the main frame.
				 */
				function callRevealApi( methodName, methodArguments, callback ) {

					var callId = ++lastRevealApiCallId;
					pendingCalls[callId] = callback;
					window.opener.postMessage( JSON.stringify( {
						namespace: 'reveal-notes',
						type: 'call',
						callId: callId,
						methodName: methodName,
						arguments: methodArguments
					} ), '*' );

				}

				/**
				 * Called when the main window is trying to establish a
				 * connection.
				 */
				function handleConnectMessage( data ) {

					if( connected === false ) {
						connected = true;

						setupIframes( data );
						setupKeyboard();
						setupNotes();
						setupTimer();
						setupHeartbeat();
					}

				}

				/**
				 * Called when the main window sends an updated state.
				 */
				function handleStateMessage( data ) {

					// Store the most recently set state to avoid circular loops
					// applying the same state
					currentState = JSON.stringify( data.state );

					// No need for updating the notes in case of fragment changes
					if ( data.notes ) {
						notes.classList.remove( 'hidden' );
						notesValue.style.whiteSpace = data.whitespace;
						if( data.markdown ) {
							notesValue.innerHTML = marked( data.notes );
						}
						else {
							notesValue.innerHTML = data.notes;
						}
					}
					else {
						notes.classList.add( 'hidden' );
					}

					// Update the note slides
					currentSlide.contentWindow.postMessage( JSON.stringify({ method: 'setState', args: [ data.state ] }), '*' );
					upcomingSlide.contentWindow.postMessage( JSON.stringify({ method: 'setState', args: [ data.state ] }), '*' );
					upcomingSlide.contentWindow.postMessage( JSON.stringify({ method: 'next' }), '*' );

				}

				// Limit to max one state update per X ms
				handleStateMessage = debounce( handleStateMessage, 200 );

				/**
				 * Forward keyboard events to the current slide window.
				 * This enables keyboard events to work even if focus
				 * isn't set on the current slide iframe.
				 *
				 * Block F5 default handling, it reloads and disconnects
				 * the speaker notes window.
				 */
				function setupKeyboard() {

					document.addEventListener( 'keydown', function( event ) {
						if( event.keyCode === 116 || ( event.metaKey && event.keyCode === 82 ) ) {
							event.preventDefault();
							return false;
						}
						currentSlide.contentWindow.postMessage( JSON.stringify({ method: 'triggerKey', args: [ event.keyCode ] }), '*' );
					} );

				}

				/**
				 * Creates the preview iframes.
				 */
				function setupIframes( data ) {

					var params = [
						'receiver',
						'progress=false',
						'history=false',
						'transition=none',
						'autoSlide=0',
						'backgroundTransition=none'
					].join( '&' );

					var urlSeparator = /\\?/.test(data.url) ? '&' : '?';
					var hash = '#/' + data.state.indexh + '/' + data.state.indexv;
					var currentURL = data.url + urlSeparator + params + '&postMessageEvents=true' + hash;
					var upcomingURL = data.url + urlSeparator + params + '&controls=false' + hash;

					currentSlide = document.createElement( 'iframe' );
					currentSlide.setAttribute( 'width', 1280 );
					currentSlide.setAttribute( 'height', 1024 );
					currentSlide.setAttribute( 'src', currentURL );
					document.querySelector( '#current-slide' ).appendChild( currentSlide );

					upcomingSlide = document.createElement( 'iframe' );
					upcomingSlide.setAttribute( 'width', 640 );
					upcomingSlide.setAttribute( 'height', 512 );
					upcomingSlide.setAttribute( 'src', upcomingURL );
					document.querySelector( '#upcoming-slide' ).appendChild( upcomingSlide );

					whitelistedWindows.push( currentSlide.contentWindow, upcomingSlide.contentWindow );

				}

				/**
				 * Setup the notes UI.
				 */
				function setupNotes() {

					notes = document.querySelector( '.speaker-controls-notes' );
					notesValue = document.querySelector( '.speaker-controls-notes .value' );

				}

				/**
				 * We send out a heartbeat at all times to ensure we can
				 * reconnect with the main presentation window after reloads.
				 */
				function setupHeartbeat() {

					setInterval( () => {
						window.opener.postMessage( JSON.stringify({ namespace: 'reveal-notes', type: 'heartbeat'} ), '*' );
					}, 1000 );

				}

				function getTimings( callback ) {

					callRevealApi( 'getSlidesAttributes', [], function ( slideAttributes ) {
						callRevealApi( 'getConfig', [], function ( config ) {
							var totalTime = config.totalTime;
							var minTimePerSlide = config.minimumTimePerSlide || 0;
							var defaultTiming = config.defaultTiming;
							if ((defaultTiming == null) && (totalTime == null)) {
								callback(null);
								return;
							}
							// Setting totalTime overrides defaultTiming
							if (totalTime) {
								defaultTiming = 0;
							}
							var timings = [];
							for ( var i in slideAttributes ) {
								var slide = slideAttributes[ i ];
								var timing = defaultTiming;
								if( slide.hasOwnProperty( 'data-timing' )) {
									var t = slide[ 'data-timing' ];
									timing = parseInt(t);
									if( isNaN(timing) ) {
										console.warn("Could not parse timing '" + t + "' of slide " + i + "; using default of " + defaultTiming);
										timing = defaultTiming;
									}
								}
								timings.push(timing);
							}
							if ( totalTime ) {
								// After we've allocated time to individual slides, we summarize it and
								// subtract it from the total time
								var remainingTime = totalTime - timings.reduce( function(a, b) { return a + b; }, 0 );
								// The remaining time is divided by the number of slides that have 0 seconds
								// allocated at the moment, giving the average time-per-slide on the remaining slides
								var remainingSlides = (timings.filter( function(x) { return x == 0 }) ).length
								var timePerSlide = Math.round( remainingTime / remainingSlides, 0 )
								// And now we replace every zero-value timing with that average
								timings = timings.map( function(x) { return (x==0 ? timePerSlide : x) } );
							}
							var slidesUnderMinimum = timings.filter( function(x) { return (x < minTimePerSlide) } ).length
							if ( slidesUnderMinimum ) {
								message = "The pacing time for " + slidesUnderMinimum + " slide(s) is under the configured minimum of " + minTimePerSlide + " seconds. Check the data-timing attribute on individual slides, or consider increasing the totalTime or minimumTimePerSlide configuration options (or removing some slides).";
								alert(message);
							}
							callback( timings );
						} );
					} );

				}

				/**
				 * Return the number of seconds allocated for presenting
				 * all slides up to and including this one.
				 */
				function getTimeAllocated( timings, callback ) {

					callRevealApi( 'getSlidePastCount', [], function ( currentSlide ) {
						var allocated = 0;
						for (var i in timings.slice(0, currentSlide + 1)) {
							allocated += timings[i];
						}
						callback( allocated );
					} );

				}

				/**
				 * Create the timer and clock and start updating them
				 * at an interval.
				 */
				function setupTimer() {

					var start = new Date(),
					timeEl = document.querySelector( '.speaker-controls-time' ),
					clockEl = timeEl.querySelector( '.clock-value' ),
					hoursEl = timeEl.querySelector( '.hours-value' ),
					minutesEl = timeEl.querySelector( '.minutes-value' ),
					secondsEl = timeEl.querySelector( '.seconds-value' ),
					pacingTitleEl = timeEl.querySelector( '.pacing-title' ),
					pacingEl = timeEl.querySelector( '.pacing' ),
					pacingHoursEl = pacingEl.querySelector( '.hours-value' ),
					pacingMinutesEl = pacingEl.querySelector( '.minutes-value' ),
					pacingSecondsEl = pacingEl.querySelector( '.seconds-value' );

					var timings = null;
					getTimings( function ( _timings ) {

						timings = _timings;
						if (_timings !== null) {
							pacingTitleEl.style.removeProperty('display');
							pacingEl.style.removeProperty('display');
						}

						// Update once directly
						_updateTimer();

						// Then update every second
						setInterval( _updateTimer, 1000 );

					} );


					function _resetTimer() {

						if (timings == null) {
							start = new Date();
							_updateTimer();
						}
						else {
							// Reset timer to beginning of current slide
							getTimeAllocated( timings, function ( slideEndTimingSeconds ) {
								var slideEndTiming = slideEndTimingSeconds * 1000;
								callRevealApi( 'getSlidePastCount', [], function ( currentSlide ) {
									var currentSlideTiming = timings[currentSlide] * 1000;
									var previousSlidesTiming = slideEndTiming - currentSlideTiming;
									var now = new Date();
									start = new Date(now.getTime() - previousSlidesTiming);
									_updateTimer();
								} );
							} );
						}

					}

					timeEl.addEventListener( 'click', function() {
						_resetTimer();
						return false;
					} );

					function _displayTime( hrEl, minEl, secEl, time) {

						var sign = Math.sign(time) == -1 ? "-" : "";
						time = Math.abs(Math.round(time / 1000));
						var seconds = time % 60;
						var minutes = Math.floor( time / 60 ) % 60 ;
						var hours = Math.floor( time / ( 60 * 60 )) ;
						hrEl.innerHTML = sign + zeroPadInteger( hours );
						if (hours == 0) {
							hrEl.classList.add( 'mute' );
						}
						else {
							hrEl.classList.remove( 'mute' );
						}
						minEl.innerHTML = ':' + zeroPadInteger( minutes );
						if (hours == 0 && minutes == 0) {
							minEl.classList.add( 'mute' );
						}
						else {
							minEl.classList.remove( 'mute' );
						}
						secEl.innerHTML = ':' + zeroPadInteger( seconds );
					}

					function _updateTimer() {

						var diff, hours, minutes, seconds,
						now = new Date();

						diff = now.getTime() - start.getTime();

						clockEl.innerHTML = now.toLocaleTimeString( 'en-US', { hour12: true, hour: '2-digit', minute:'2-digit' } );
						_displayTime( hoursEl, minutesEl, secondsEl, diff );
						if (timings !== null) {
							_updatePacing(diff);
						}

					}

					function _updatePacing(diff) {

						getTimeAllocated( timings, function ( slideEndTimingSeconds ) {
							var slideEndTiming = slideEndTimingSeconds * 1000;

							callRevealApi( 'getSlidePastCount', [], function ( currentSlide ) {
								var currentSlideTiming = timings[currentSlide] * 1000;
								var timeLeftCurrentSlide = slideEndTiming - diff;
								if (timeLeftCurrentSlide < 0) {
									pacingEl.className = 'pacing behind';
								}
								else if (timeLeftCurrentSlide < currentSlideTiming) {
									pacingEl.className = 'pacing on-track';
								}
								else {
									pacingEl.className = 'pacing ahead';
								}
								_displayTime( pacingHoursEl, pacingMinutesEl, pacingSecondsEl, timeLeftCurrentSlide );
							} );
						} );
					}

				}

				/**
				 * Sets up the speaker view layout and layout selector.
				 */
				function setupLayout() {

					layoutDropdown = document.querySelector( '.speaker-layout-dropdown' );
					layoutLabel = document.querySelector( '.speaker-layout-label' );

					// Render the list of available layouts
					for( var id in SPEAKER_LAYOUTS ) {
						var option = document.createElement( 'option' );
						option.setAttribute( 'value', id );
						option.textContent = SPEAKER_LAYOUTS[ id ];
						layoutDropdown.appendChild( option );
					}

					// Monitor the dropdown for changes
					layoutDropdown.addEventListener( 'change', function( event ) {

						setLayout( layoutDropdown.value );

					}, false );

					// Restore any currently persisted layout
					setLayout( getLayout() );

				}

				/**
				 * Sets a new speaker view layout. The layout is persisted
				 * in local storage.
				 */
				function setLayout( value ) {

					var title = SPEAKER_LAYOUTS[ value ];

					layoutLabel.innerHTML = 'Layout' + ( title ? ( ': ' + title ) : '' );
					layoutDropdown.value = value;

					document.body.setAttribute( 'data-speaker-layout', value );

					// Persist locally
					if( supportsLocalStorage() ) {
						window.localStorage.setItem( 'reveal-speaker-layout', value );
					}

				}

				/**
				 * Returns the ID of the most recently set speaker layout
				 * or our default layout if none has been set.
				 */
				function getLayout() {

					if( supportsLocalStorage() ) {
						var layout = window.localStorage.getItem( 'reveal-speaker-layout' );
						if( layout ) {
							return layout;
						}
					}

					// Default to the first record in the layouts hash
					for( var id in SPEAKER_LAYOUTS ) {
						return id;
					}

				}

				function supportsLocalStorage() {

					try {
						localStorage.setItem('test', 'test');
						localStorage.removeItem('test');
						return true;
					}
					catch( e ) {
						return false;
					}

				}

				function zeroPadInteger( num ) {

					var str = '00' + parseInt( num );
					return str.substring( str.length - 2 );

				}

				/**
				 * Limits the frequency at which a function can be called.
				 */
				function debounce( fn, ms ) {

					var lastTime = 0,
						timeout;

					return function() {

						var args = arguments;
						var context = this;

						clearTimeout( timeout );

						var timeSinceLastCall = Date.now() - lastTime;
						if( timeSinceLastCall > ms ) {
							fn.apply( context, args );
							lastTime = Date.now();
						}
						else {
							timeout = setTimeout( function() {
								fn.apply( context, args );
								lastTime = Date.now();
							}, ms - timeSinceLastCall );
						}

					}

				}

			})();

		<\/script>
	</body>
</html>`),!t)return void alert("Speaker view popup failed to open. Please make sure popups are allowed and reopen the speaker view.");h=e.getConfig().url,c=typeof h=="string"?h:window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.search,i=setInterval(function(){t.postMessage(JSON.stringify({namespace:"reveal-notes",type:"connect",state:e.getState(),url:c}),"*")},500),window.addEventListener("message",l)}var h,c}function o(h){var c=e.getCurrentSlide(),k=c.querySelector("aside.notes"),w=c.querySelector(".current-fragment"),E={namespace:"reveal-notes",type:"state",notes:"",markdown:!1,whitespace:"normal",state:e.getState()};if(c.hasAttribute("data-notes")&&(E.notes=c.getAttribute("data-notes"),E.whitespace="pre-wrap"),w){var F=w.querySelector("aside.notes");F?k=F:w.hasAttribute("data-notes")&&(E.notes=w.getAttribute("data-notes"),E.whitespace="pre-wrap",k=null)}k&&(E.notes=k.innerHTML,E.markdown=typeof k.getAttribute("data-markdown")=="string"),t.postMessage(JSON.stringify(E),"*")}function l(h){var c,k,w,E,F=JSON.parse(h.data);F&&F.namespace==="reveal-notes"&&F.type==="connected"?(clearInterval(i),v()):F&&F.namespace==="reveal-notes"&&F.type==="call"&&(c=F.methodName,k=F.arguments,w=F.callId,E=e[c].apply(e,k),t.postMessage(JSON.stringify({namespace:"reveal-notes",type:"return",result:E,callId:w}),"*"))}function v(){e.on("slidechanged",o),e.on("fragmentshown",o),e.on("fragmenthidden",o),e.on("overviewhidden",o),e.on("overviewshown",o),e.on("paused",o),e.on("resumed",o),o()}return{id:"notes",init:function(h){e=h,/receiver/i.test(window.location.search)||(window.location.search.match(/(\?|\&)notes/gi)!==null?r():window.addEventListener("message",function(c){if(!t&&typeof c.data=="string"){var k;try{k=JSON.parse(c.data)}catch{}k&&k.namespace==="reveal-notes"&&k.type==="heartbeat"&&(w=c.source,t&&!t.closed?t.focus():(t=w,window.addEventListener("message",l),v()))}var w}),e.addKeyBinding({keyCode:83,key:"S",description:"Speaker notes view"},function(){r()}))},open:r}}})});var Ce=(D,n)=>{for(let a in n)D[a]=n[a];return D},N=(D,n)=>Array.from(D.querySelectorAll(n)),Fi=(D,n,a)=>{a?D.classList.add(n):D.classList.remove(n)},Se=D=>{if(typeof D=="string"){if(D==="null")return null;if(D==="true")return!0;if(D==="false")return!1;if(D.match(/^-?[\d\.]+$/))return parseFloat(D)}return D},ne=(D,n)=>{D.style.transform=n},Tn=(D,n)=>{let a=D.matches||D.matchesSelector||D.msMatchesSelector;return!(!a||!a.call(D,n))},ht=(D,n)=>{if(typeof D.closest=="function")return D.closest(n);for(;D;){if(Tn(D,n))return D;D=D.parentNode}return null},Hu=(D,n,a,s="")=>{let u=D.querySelectorAll("."+a);for(let f=0;f<u.length;f++){let y=u[f];if(y.parentNode===D)return y}let m=document.createElement(n);return m.className=a,m.innerHTML=s,D.appendChild(m),m},Li=D=>{let n=document.createElement("style");return n.type="text/css",D&&D.length>0&&(n.styleSheet?n.styleSheet.cssText=D:n.appendChild(document.createTextNode(D))),document.head.appendChild(n),n},ha=()=>{let D={};location.search.replace(/[A-Z0-9]+?=([\w\.%-]*)/gi,n=>{D[n.split("=").shift()]=n.split("=").pop()});for(let n in D){let a=D[n];D[n]=Se(unescape(a))}return D.dependencies!==void 0&&delete D.dependencies,D},ju=(D,n=0)=>{if(D){let a,s=D.style.height;return D.style.height="0px",D.parentNode.style.height="auto",a=n-D.parentNode.offsetHeight,D.style.height=s+"px",D.parentNode.style.removeProperty("height"),a}return n},Wu={mp4:"video/mp4",m4a:"video/mp4",ogv:"video/ogg",mpeg:"video/mpeg",webm:"video/webm"},Ze=navigator.userAgent,Ku=document.createElement("div"),pe=/(iphone|ipod|ipad|android)/gi.test(Ze)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,Vu=/chrome/i.test(Ze)&&!/edge/i.test(Ze),ya=/android/gi.test(Ze),Yu="zoom"in Ku.style&&!pe&&(Vu||/Version\/[\d\.]+.*Safari/.test(Ze)),ba={};Object.defineProperty(ba,"__esModule",{value:!0});var pa=Object.assign||function(D){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(D[s]=a[s])}return D},Xu=ba.default=function(D){if(D){var n=function(A){return[].slice.call(A)},a=0,s=1,u=2,m=3,f=[],y=null,g="requestAnimationFrame"in D?function(){D.cancelAnimationFrame(y),y=D.requestAnimationFrame(function(){return q(f.filter(function(A){return A.dirty&&A.active}))})}:function(){},$=function(A){return function(){f.forEach(function(Y){return Y.dirty=A}),g()}},q=function(A){A.filter(function(Z){return!Z.styleComputed}).forEach(function(Z){Z.styleComputed=p(Z)}),A.filter(dt).forEach(V);var Y=A.filter(_);Y.forEach(R),Y.forEach(function(Z){V(Z),C(Z)}),Y.forEach(kt)},C=function(A){return A.dirty=a},R=function(A){A.availableWidth=A.element.parentNode.clientWidth,A.currentWidth=A.element.scrollWidth,A.previousFontSize=A.currentFontSize,A.currentFontSize=Math.min(Math.max(A.minSize,A.availableWidth/A.currentWidth*A.previousFontSize),A.maxSize),A.whiteSpace=A.multiLine&&A.currentFontSize===A.minSize?"normal":"nowrap"},_=function(A){return A.dirty!==u||A.dirty===u&&A.element.parentNode.clientWidth!==A.availableWidth},p=function(A){var Y=D.getComputedStyle(A.element,null);A.currentFontSize=parseFloat(Y.getPropertyValue("font-size")),A.display=Y.getPropertyValue("display"),A.whiteSpace=Y.getPropertyValue("white-space")},dt=function(A){var Y=!1;return!A.preStyleTestCompleted&&(/inline-/.test(A.display)||(Y=!0,A.display="inline-block"),A.whiteSpace!=="nowrap"&&(Y=!0,A.whiteSpace="nowrap"),A.preStyleTestCompleted=!0,Y)},V=function(A){A.element.style.whiteSpace=A.whiteSpace,A.element.style.display=A.display,A.element.style.fontSize=A.currentFontSize+"px"},kt=function(A){A.element.dispatchEvent(new CustomEvent("fit",{detail:{oldValue:A.previousFontSize,newValue:A.currentFontSize,scaleFactor:A.currentFontSize/A.previousFontSize}}))},Pt=function(A,Y){return function(){A.dirty=Y,A.active&&g()}},G=function(A){return function(){f=f.filter(function(Y){return Y.element!==A.element}),A.observeMutations&&A.observer.disconnect(),A.element.style.whiteSpace=A.originalStyle.whiteSpace,A.element.style.display=A.originalStyle.display,A.element.style.fontSize=A.originalStyle.fontSize}},H=function(A){return function(){A.active||(A.active=!0,g())}},J=function(A){return function(){return A.active=!1}},ot=function(A){A.observeMutations&&(A.observer=new MutationObserver(Pt(A,s)),A.observer.observe(A.element,A.observeMutations))},Q={minSize:16,maxSize:512,multiLine:!0,observeMutations:"MutationObserver"in D&&{subtree:!0,childList:!0,characterData:!0}},I=null,W=function(){D.clearTimeout(I),I=D.setTimeout($(u),lt.observeWindowDelay)},ct=["resize","orientationchange"];return Object.defineProperty(lt,"observeWindow",{set:function(A){var Y=(A?"add":"remove")+"EventListener";ct.forEach(function(Z){D[Y](Z,W)})}}),lt.observeWindow=!0,lt.observeWindowDelay=100,lt.fitAll=$(m),lt}function it(A,Y){var Z=pa({},Q,Y),vt=A.map(function(yt){var Mt=pa({},Z,{element:yt,active:!0});return function(tt){tt.originalStyle={whiteSpace:tt.element.style.whiteSpace,display:tt.element.style.display,fontSize:tt.element.style.fontSize},ot(tt),tt.newbie=!0,tt.dirty=!0,f.push(tt)}(Mt),{element:yt,fit:Pt(Mt,m),unfreeze:H(Mt),freeze:J(Mt),unsubscribe:G(Mt)}});return g(),vt}function lt(A){var Y=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return typeof A=="string"?it(n(document.querySelectorAll(A)),Y):it([A],Y)[0]}}(typeof window>"u"?null:window),Ti=class{constructor(n){this.Reveal=n,this.startEmbeddedIframe=this.startEmbeddedIframe.bind(this)}shouldPreload(n){let a=this.Reveal.getConfig().preloadIframes;return typeof a!="boolean"&&(a=n.hasAttribute("data-preload")),a}load(n,a={}){n.style.display=this.Reveal.getConfig().display,N(n,"img[data-src], video[data-src], audio[data-src], iframe[data-src]").forEach(u=>{(u.tagName!=="IFRAME"||this.shouldPreload(u))&&(u.setAttribute("src",u.getAttribute("data-src")),u.setAttribute("data-lazy-loaded",""),u.removeAttribute("data-src"))}),N(n,"video, audio").forEach(u=>{let m=0;N(u,"source[data-src]").forEach(f=>{f.setAttribute("src",f.getAttribute("data-src")),f.removeAttribute("data-src"),f.setAttribute("data-lazy-loaded",""),m+=1}),pe&&u.tagName==="VIDEO"&&u.setAttribute("playsinline",""),m>0&&u.load()});let s=n.slideBackgroundElement;if(s){s.style.display="block";let u=n.slideBackgroundContentElement,m=n.getAttribute("data-background-iframe");if(s.hasAttribute("data-loaded")===!1){s.setAttribute("data-loaded","true");let y=n.getAttribute("data-background-image"),g=n.getAttribute("data-background-video"),$=n.hasAttribute("data-background-video-loop"),q=n.hasAttribute("data-background-video-muted");if(y)/^data:/.test(y.trim())?u.style.backgroundImage=`url(${y.trim()})`:u.style.backgroundImage=y.split(",").map(C=>`url(${encodeURI(C.trim())})`).join(",");else if(g&&!this.Reveal.isSpeakerNotes()){let C=document.createElement("video");$&&C.setAttribute("loop",""),q&&(C.muted=!0),pe&&(C.muted=!0,C.setAttribute("playsinline","")),g.split(",").forEach(R=>{let _=((p="")=>Wu[p.split(".").pop()])(R);C.innerHTML+=_?`<source src="${R}" type="${_}">`:`<source src="${R}">`}),u.appendChild(C)}else if(m&&a.excludeIframes!==!0){let C=document.createElement("iframe");C.setAttribute("allowfullscreen",""),C.setAttribute("mozallowfullscreen",""),C.setAttribute("webkitallowfullscreen",""),C.setAttribute("allow","autoplay"),C.setAttribute("data-src",m),C.style.width="100%",C.style.height="100%",C.style.maxHeight="100%",C.style.maxWidth="100%",u.appendChild(C)}}let f=u.querySelector("iframe[data-src]");f&&this.shouldPreload(s)&&!/autoplay=(1|true|yes)/gi.test(m)&&f.getAttribute("src")!==m&&f.setAttribute("src",m)}this.layout(n)}layout(n){Array.from(n.querySelectorAll(".r-fit-text")).forEach(a=>{Xu(a,{minSize:24,maxSize:.8*this.Reveal.getConfig().height,observeMutations:!1,observeWindow:!1})})}unload(n){n.style.display="none";let a=this.Reveal.getSlideBackground(n);a&&(a.style.display="none",N(a,"iframe[src]").forEach(s=>{s.removeAttribute("src")})),N(n,"video[data-lazy-loaded][src], audio[data-lazy-loaded][src], iframe[data-lazy-loaded][src]").forEach(s=>{s.setAttribute("data-src",s.getAttribute("src")),s.removeAttribute("src")}),N(n,"video[data-lazy-loaded] source[src], audio source[src]").forEach(s=>{s.setAttribute("data-src",s.getAttribute("src")),s.removeAttribute("src")})}formatEmbeddedContent(){let n=(a,s,u)=>{N(this.Reveal.getSlidesElement(),"iframe["+a+'*="'+s+'"]').forEach(m=>{let f=m.getAttribute(a);f&&f.indexOf(u)===-1&&m.setAttribute(a,f+(/\?/.test(f)?"&":"?")+u)})};n("src","youtube.com/embed/","enablejsapi=1"),n("data-src","youtube.com/embed/","enablejsapi=1"),n("src","player.vimeo.com/","api=1"),n("data-src","player.vimeo.com/","api=1")}startEmbeddedContent(n){n&&!this.Reveal.isSpeakerNotes()&&(N(n,'img[src$=".gif"]').forEach(a=>{a.setAttribute("src",a.getAttribute("src"))}),N(n,"video, audio").forEach(a=>{if(ht(a,".fragment")&&!ht(a,".fragment.visible"))return;let s=this.Reveal.getConfig().autoPlayMedia;if(typeof s!="boolean"&&(s=a.hasAttribute("data-autoplay")||!!ht(a,".slide-background")),s&&typeof a.play=="function")if(a.readyState>1)this.startEmbeddedMedia({target:a});else if(pe){let u=a.play();u&&typeof u.catch=="function"&&a.controls===!1&&u.catch(()=>{a.controls=!0,a.addEventListener("play",()=>{a.controls=!1})})}else a.removeEventListener("loadeddata",this.startEmbeddedMedia),a.addEventListener("loadeddata",this.startEmbeddedMedia)}),N(n,"iframe[src]").forEach(a=>{ht(a,".fragment")&&!ht(a,".fragment.visible")||this.startEmbeddedIframe({target:a})}),N(n,"iframe[data-src]").forEach(a=>{ht(a,".fragment")&&!ht(a,".fragment.visible")||a.getAttribute("src")!==a.getAttribute("data-src")&&(a.removeEventListener("load",this.startEmbeddedIframe),a.addEventListener("load",this.startEmbeddedIframe),a.setAttribute("src",a.getAttribute("data-src")))}))}startEmbeddedMedia(n){let a=!!ht(n.target,"html"),s=!!ht(n.target,".present");a&&s&&(n.target.currentTime=0,n.target.play()),n.target.removeEventListener("loadeddata",this.startEmbeddedMedia)}startEmbeddedIframe(n){let a=n.target;if(a&&a.contentWindow){let s=!!ht(n.target,"html"),u=!!ht(n.target,".present");if(s&&u){let m=this.Reveal.getConfig().autoPlayMedia;typeof m!="boolean"&&(m=a.hasAttribute("data-autoplay")||!!ht(a,".slide-background")),/youtube\.com\/embed\//.test(a.getAttribute("src"))&&m?a.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}',"*"):/player\.vimeo\.com\//.test(a.getAttribute("src"))&&m?a.contentWindow.postMessage('{"method":"play"}',"*"):a.contentWindow.postMessage("slide:start","*")}}}stopEmbeddedContent(n,a={}){a=Ce({unloadIframes:!0},a),n&&n.parentNode&&(N(n,"video, audio").forEach(s=>{s.hasAttribute("data-ignore")||typeof s.pause!="function"||(s.setAttribute("data-paused-by-reveal",""),s.pause())}),N(n,"iframe").forEach(s=>{s.contentWindow&&s.contentWindow.postMessage("slide:stop","*"),s.removeEventListener("load",this.startEmbeddedIframe)}),N(n,'iframe[src*="youtube.com/embed/"]').forEach(s=>{!s.hasAttribute("data-ignore")&&s.contentWindow&&typeof s.contentWindow.postMessage=="function"&&s.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*")}),N(n,'iframe[src*="player.vimeo.com/"]').forEach(s=>{!s.hasAttribute("data-ignore")&&s.contentWindow&&typeof s.contentWindow.postMessage=="function"&&s.contentWindow.postMessage('{"method":"pause"}',"*")}),a.unloadIframes===!0&&N(n,"iframe[data-src]").forEach(s=>{s.setAttribute("src","about:blank"),s.removeAttribute("src")}))}},Bi=class{constructor(n){this.Reveal=n}render(){this.element=document.createElement("div"),this.element.className="slide-number",this.Reveal.getRevealElement().appendChild(this.element)}configure(n,a){let s="none";n.slideNumber&&!this.Reveal.isPrintingPDF()&&(n.showSlideNumber==="all"||n.showSlideNumber==="speaker"&&this.Reveal.isSpeakerNotes())&&(s="block"),this.element.style.display=s}update(){this.Reveal.getConfig().slideNumber&&this.element&&(this.element.innerHTML=this.getSlideNumber())}getSlideNumber(n=this.Reveal.getCurrentSlide()){let a,s=this.Reveal.getConfig(),u="h.v";if(typeof s.slideNumber=="function")a=s.slideNumber(n);else{typeof s.slideNumber=="string"&&(u=s.slideNumber),/c/.test(u)||this.Reveal.getHorizontalSlides().length!==1||(u="c");let f=n&&n.dataset.visibility==="uncounted"?0:1;switch(a=[],u){case"c":a.push(this.Reveal.getSlidePastCount(n)+f);break;case"c/t":a.push(this.Reveal.getSlidePastCount(n)+f,"/",this.Reveal.getTotalSlides());break;default:let y=this.Reveal.getIndices(n);a.push(y.h+f);let g=u==="h/v"?"/":".";this.Reveal.isVerticalSlide(n)&&a.push(g,y.v+1)}}let m="#"+this.Reveal.location.getHash(n);return this.formatNumber(a[0],a[1],a[2],m)}formatNumber(n,a,s,u="#"+this.Reveal.location.getHash()){return typeof s!="number"||isNaN(s)?`<a href="${u}">
					<span class="slide-number-a">${n}</span>
					</a>`:`<a href="${u}">
					<span class="slide-number-a">${n}</span>
					<span class="slide-number-delimiter">${a}</span>
					<span class="slide-number-b">${s}</span>
					</a>`}destroy(){this.element.remove()}},Ri=D=>{let n=D.match(/^#([0-9a-f]{3})$/i);if(n&&n[1])return n=n[1],{r:17*parseInt(n.charAt(0),16),g:17*parseInt(n.charAt(1),16),b:17*parseInt(n.charAt(2),16)};let a=D.match(/^#([0-9a-f]{6})$/i);if(a&&a[1])return a=a[1],{r:parseInt(a.slice(0,2),16),g:parseInt(a.slice(2,4),16),b:parseInt(a.slice(4,6),16)};let s=D.match(/^rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/i);if(s)return{r:parseInt(s[1],10),g:parseInt(s[2],10),b:parseInt(s[3],10)};let u=D.match(/^rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\,\s*([\d]+|[\d]*.[\d]+)\s*\)$/i);return u?{r:parseInt(u[1],10),g:parseInt(u[2],10),b:parseInt(u[3],10),a:parseFloat(u[4])}:null},Pi=class{constructor(n){this.Reveal=n}render(){this.element=document.createElement("div"),this.element.className="backgrounds",this.Reveal.getRevealElement().appendChild(this.element)}create(){this.element.innerHTML="",this.element.classList.add("no-transition"),this.Reveal.getHorizontalSlides().forEach(n=>{let a=this.createBackground(n,this.element);N(n,"section").forEach(s=>{this.createBackground(s,a),a.classList.add("stack")})}),this.Reveal.getConfig().parallaxBackgroundImage?(this.element.style.backgroundImage='url("'+this.Reveal.getConfig().parallaxBackgroundImage+'")',this.element.style.backgroundSize=this.Reveal.getConfig().parallaxBackgroundSize,this.element.style.backgroundRepeat=this.Reveal.getConfig().parallaxBackgroundRepeat,this.element.style.backgroundPosition=this.Reveal.getConfig().parallaxBackgroundPosition,setTimeout(()=>{this.Reveal.getRevealElement().classList.add("has-parallax-background")},1)):(this.element.style.backgroundImage="",this.Reveal.getRevealElement().classList.remove("has-parallax-background"))}createBackground(n,a){let s=document.createElement("div");s.className="slide-background "+n.className.replace(/present|past|future/,"");let u=document.createElement("div");return u.className="slide-background-content",s.appendChild(u),a.appendChild(s),n.slideBackgroundElement=s,n.slideBackgroundContentElement=u,this.sync(n),s}sync(n){let a=n.slideBackgroundElement,s=n.slideBackgroundContentElement,u={background:n.getAttribute("data-background"),backgroundSize:n.getAttribute("data-background-size"),backgroundImage:n.getAttribute("data-background-image"),backgroundVideo:n.getAttribute("data-background-video"),backgroundIframe:n.getAttribute("data-background-iframe"),backgroundColor:n.getAttribute("data-background-color"),backgroundRepeat:n.getAttribute("data-background-repeat"),backgroundPosition:n.getAttribute("data-background-position"),backgroundTransition:n.getAttribute("data-background-transition"),backgroundOpacity:n.getAttribute("data-background-opacity")},m=n.hasAttribute("data-preload");n.classList.remove("has-dark-background"),n.classList.remove("has-light-background"),a.removeAttribute("data-loaded"),a.removeAttribute("data-background-hash"),a.removeAttribute("data-background-size"),a.removeAttribute("data-background-transition"),a.style.backgroundColor="",s.style.backgroundSize="",s.style.backgroundRepeat="",s.style.backgroundPosition="",s.style.backgroundImage="",s.style.opacity="",s.innerHTML="",u.background&&(/^(http|file|\/\/)/gi.test(u.background)||/\.(svg|png|jpg|jpeg|gif|bmp)([?#\s]|$)/gi.test(u.background)?n.setAttribute("data-background-image",u.background):a.style.background=u.background),(u.background||u.backgroundColor||u.backgroundImage||u.backgroundVideo||u.backgroundIframe)&&a.setAttribute("data-background-hash",u.background+u.backgroundSize+u.backgroundImage+u.backgroundVideo+u.backgroundIframe+u.backgroundColor+u.backgroundRepeat+u.backgroundPosition+u.backgroundTransition+u.backgroundOpacity),u.backgroundSize&&a.setAttribute("data-background-size",u.backgroundSize),u.backgroundColor&&(a.style.backgroundColor=u.backgroundColor),u.backgroundTransition&&a.setAttribute("data-background-transition",u.backgroundTransition),m&&a.setAttribute("data-preload",""),u.backgroundSize&&(s.style.backgroundSize=u.backgroundSize),u.backgroundRepeat&&(s.style.backgroundRepeat=u.backgroundRepeat),u.backgroundPosition&&(s.style.backgroundPosition=u.backgroundPosition),u.backgroundOpacity&&(s.style.opacity=u.backgroundOpacity);let f=u.backgroundColor;if(!f||!Ri(f)){let g=window.getComputedStyle(a);g&&g.backgroundColor&&(f=g.backgroundColor)}if(f){let g=Ri(f);g&&g.a!==0&&(typeof(y=f)=="string"&&(y=Ri(y)),(y?(299*y.r+587*y.g+114*y.b)/1e3:null)<128?n.classList.add("has-dark-background"):n.classList.add("has-light-background"))}var y}update(n=!1){let a=this.Reveal.getCurrentSlide(),s=this.Reveal.getIndices(),u=null,m=this.Reveal.getConfig().rtl?"future":"past",f=this.Reveal.getConfig().rtl?"past":"future";if(Array.from(this.element.childNodes).forEach((y,g)=>{y.classList.remove("past","present","future"),g<s.h?y.classList.add(m):g>s.h?y.classList.add(f):(y.classList.add("present"),u=y),(n||g===s.h)&&N(y,".slide-background").forEach(($,q)=>{$.classList.remove("past","present","future"),q<s.v?$.classList.add("past"):q>s.v?$.classList.add("future"):($.classList.add("present"),g===s.h&&(u=$))})}),this.previousBackground&&this.Reveal.slideContent.stopEmbeddedContent(this.previousBackground,{unloadIframes:!this.Reveal.slideContent.shouldPreload(this.previousBackground)}),u){this.Reveal.slideContent.startEmbeddedContent(u);let y=u.querySelector(".slide-background-content");if(y){let q=y.style.backgroundImage||"";/\.gif/i.test(q)&&(y.style.backgroundImage="",window.getComputedStyle(y).opacity,y.style.backgroundImage=q)}let g=this.previousBackground?this.previousBackground.getAttribute("data-background-hash"):null,$=u.getAttribute("data-background-hash");$&&$===g&&u!==this.previousBackground&&this.element.classList.add("no-transition"),this.previousBackground=u}a&&["has-light-background","has-dark-background"].forEach(y=>{a.classList.contains(y)?this.Reveal.getRevealElement().classList.add(y):this.Reveal.getRevealElement().classList.remove(y)},this),setTimeout(()=>{this.element.classList.remove("no-transition")},1)}updateParallax(){let n=this.Reveal.getIndices();if(this.Reveal.getConfig().parallaxBackgroundImage){let a,s,u=this.Reveal.getHorizontalSlides(),m=this.Reveal.getVerticalSlides(),f=this.element.style.backgroundSize.split(" ");f.length===1?a=s=parseInt(f[0],10):(a=parseInt(f[0],10),s=parseInt(f[1],10));let y,g,$=this.element.offsetWidth,q=u.length;y=typeof this.Reveal.getConfig().parallaxBackgroundHorizontal=="number"?this.Reveal.getConfig().parallaxBackgroundHorizontal:q>1?(a-$)/(q-1):0,g=y*n.h*-1;let C,R,_=this.element.offsetHeight,p=m.length;C=typeof this.Reveal.getConfig().parallaxBackgroundVertical=="number"?this.Reveal.getConfig().parallaxBackgroundVertical:(s-_)/(p-1),R=p>0?C*n.v:0,this.element.style.backgroundPosition=g+"px "+-R+"px"}}destroy(){this.element.remove()}},Zu=/registerPlugin|registerKeyboardShortcut|addKeyBinding|addEventListener/,ga=/fade-(down|up|right|left|out|in-then-out|in-then-semi-out)|semi-fade-out|current-visible|shrink|grow/,fa=0,Mi=class{constructor(n){this.Reveal=n}run(n,a){this.reset();let s=this.Reveal.getSlides(),u=s.indexOf(a),m=s.indexOf(n);if(n.hasAttribute("data-auto-animate")&&a.hasAttribute("data-auto-animate")&&n.getAttribute("data-auto-animate-id")===a.getAttribute("data-auto-animate-id")&&!(u>m?a:n).hasAttribute("data-auto-animate-restart")){this.autoAnimateStyleSheet=this.autoAnimateStyleSheet||Li();let f=this.getAutoAnimateOptions(a);n.dataset.autoAnimate="pending",a.dataset.autoAnimate="pending",f.slideDirection=u>m?"forward":"backward";let y=this.getAutoAnimatableElements(n,a).map(g=>this.autoAnimateElements(g.from,g.to,g.options||{},f,fa++));if(a.dataset.autoAnimateUnmatched!=="false"&&this.Reveal.getConfig().autoAnimateUnmatched===!0){let g=.8*f.duration,$=.2*f.duration;this.getUnmatchedAutoAnimateElements(a).forEach(q=>{let C=this.getAutoAnimateOptions(q,f),R="unmatched";C.duration===f.duration&&C.delay===f.delay||(R="unmatched-"+fa++,y.push(`[data-auto-animate="running"] [data-auto-animate-target="${R}"] { transition: opacity ${C.duration}s ease ${C.delay}s; }`)),q.dataset.autoAnimateTarget=R},this),y.push(`[data-auto-animate="running"] [data-auto-animate-target="unmatched"] { transition: opacity ${g}s ease ${$}s; }`)}this.autoAnimateStyleSheet.innerHTML=y.join(""),requestAnimationFrame(()=>{this.autoAnimateStyleSheet&&(getComputedStyle(this.autoAnimateStyleSheet).fontWeight,a.dataset.autoAnimate="running")}),this.Reveal.dispatchEvent({type:"autoanimate",data:{fromSlide:n,toSlide:a,sheet:this.autoAnimateStyleSheet}})}}reset(){N(this.Reveal.getRevealElement(),'[data-auto-animate]:not([data-auto-animate=""])').forEach(n=>{n.dataset.autoAnimate=""}),N(this.Reveal.getRevealElement(),"[data-auto-animate-target]").forEach(n=>{delete n.dataset.autoAnimateTarget}),this.autoAnimateStyleSheet&&this.autoAnimateStyleSheet.parentNode&&(this.autoAnimateStyleSheet.parentNode.removeChild(this.autoAnimateStyleSheet),this.autoAnimateStyleSheet=null)}autoAnimateElements(n,a,s,u,m){n.dataset.autoAnimateTarget="",a.dataset.autoAnimateTarget=m;let f=this.getAutoAnimateOptions(a,u);s.delay!==void 0&&(f.delay=s.delay),s.duration!==void 0&&(f.duration=s.duration),s.easing!==void 0&&(f.easing=s.easing);let y=this.getAutoAnimatableProperties("from",n,s),g=this.getAutoAnimatableProperties("to",a,s);if(a.classList.contains("fragment")&&(delete g.styles.opacity,n.classList.contains("fragment"))&&(n.className.match(ga)||[""])[0]===(a.className.match(ga)||[""])[0]&&u.slideDirection==="forward"&&a.classList.add("visible","disabled"),s.translate!==!1||s.scale!==!1){let C=this.Reveal.getScale(),R={x:(y.x-g.x)/C,y:(y.y-g.y)/C,scaleX:y.width/g.width,scaleY:y.height/g.height};R.x=Math.round(1e3*R.x)/1e3,R.y=Math.round(1e3*R.y)/1e3,R.scaleX=Math.round(1e3*R.scaleX)/1e3,R.scaleX=Math.round(1e3*R.scaleX)/1e3;let _=s.translate!==!1&&(R.x!==0||R.y!==0),p=s.scale!==!1&&(R.scaleX!==0||R.scaleY!==0);if(_||p){let dt=[];_&&dt.push(`translate(${R.x}px, ${R.y}px)`),p&&dt.push(`scale(${R.scaleX}, ${R.scaleY})`),y.styles.transform=dt.join(" "),y.styles["transform-origin"]="top left",g.styles.transform="none"}}for(let C in g.styles){let R=g.styles[C],_=y.styles[C];R===_?delete g.styles[C]:(R.explicitValue===!0&&(g.styles[C]=R.value),_.explicitValue===!0&&(y.styles[C]=_.value))}let $="",q=Object.keys(g.styles);return q.length>0&&(y.styles.transition="none",g.styles.transition=`all ${f.duration}s ${f.easing} ${f.delay}s`,g.styles["transition-property"]=q.join(", "),g.styles["will-change"]=q.join(", "),$='[data-auto-animate-target="'+m+'"] {'+Object.keys(y.styles).map(C=>C+": "+y.styles[C]+" !important;").join("")+'}[data-auto-animate="running"] [data-auto-animate-target="'+m+'"] {'+Object.keys(g.styles).map(C=>C+": "+g.styles[C]+" !important;").join("")+"}"),$}getAutoAnimateOptions(n,a){let s={easing:this.Reveal.getConfig().autoAnimateEasing,duration:this.Reveal.getConfig().autoAnimateDuration,delay:0};if(s=Ce(s,a),n.parentNode){let u=ht(n.parentNode,"[data-auto-animate-target]");u&&(s=this.getAutoAnimateOptions(u,s))}return n.dataset.autoAnimateEasing&&(s.easing=n.dataset.autoAnimateEasing),n.dataset.autoAnimateDuration&&(s.duration=parseFloat(n.dataset.autoAnimateDuration)),n.dataset.autoAnimateDelay&&(s.delay=parseFloat(n.dataset.autoAnimateDelay)),s}getAutoAnimatableProperties(n,a,s){let u=this.Reveal.getConfig(),m={styles:[]};if(s.translate!==!1||s.scale!==!1){let y;if(typeof s.measure=="function")y=s.measure(a);else if(u.center)y=a.getBoundingClientRect();else{let g=this.Reveal.getScale();y={x:a.offsetLeft*g,y:a.offsetTop*g,width:a.offsetWidth*g,height:a.offsetHeight*g}}m.x=y.x,m.y=y.y,m.width=y.width,m.height=y.height}let f=getComputedStyle(a);return(s.styles||u.autoAnimateStyles).forEach(y=>{let g;typeof y=="string"&&(y={property:y}),g=y.from!==void 0&&n==="from"?{value:y.from,explicitValue:!0}:y.to!==void 0&&n==="to"?{value:y.to,explicitValue:!0}:f[y.property],g!==""&&(m.styles[y.property]=g)}),m}getAutoAnimatableElements(n,a){let s=(typeof this.Reveal.getConfig().autoAnimateMatcher=="function"?this.Reveal.getConfig().autoAnimateMatcher:this.getAutoAnimatePairs).call(this,n,a),u=[];return s.filter((m,f)=>{if(u.indexOf(m.to)===-1)return u.push(m.to),!0})}getAutoAnimatePairs(n,a){let s=[],u="h1, h2, h3, h4, h5, h6, p, li";return this.findAutoAnimateMatches(s,n,a,"[data-id]",m=>m.nodeName+":::"+m.getAttribute("data-id")),this.findAutoAnimateMatches(s,n,a,u,m=>m.nodeName+":::"+m.innerText),this.findAutoAnimateMatches(s,n,a,"img, video, iframe",m=>m.nodeName+":::"+(m.getAttribute("src")||m.getAttribute("data-src"))),this.findAutoAnimateMatches(s,n,a,"pre",m=>m.nodeName+":::"+m.innerText),s.forEach(m=>{Tn(m.from,u)?m.options={scale:!1}:Tn(m.from,"pre")&&(m.options={scale:!1,styles:["width","height"]},this.findAutoAnimateMatches(s,m.from,m.to,".hljs .hljs-ln-code",f=>f.textContent,{scale:!1,styles:[],measure:this.getLocalBoundingBox.bind(this)}),this.findAutoAnimateMatches(s,m.from,m.to,".hljs .hljs-ln-line[data-line-number]",f=>f.getAttribute("data-line-number"),{scale:!1,styles:["width"],measure:this.getLocalBoundingBox.bind(this)}))},this),s}getLocalBoundingBox(n){let a=this.Reveal.getScale();return{x:Math.round(n.offsetLeft*a*100)/100,y:Math.round(n.offsetTop*a*100)/100,width:Math.round(n.offsetWidth*a*100)/100,height:Math.round(n.offsetHeight*a*100)/100}}findAutoAnimateMatches(n,a,s,u,m,f){let y={},g={};[].slice.call(a.querySelectorAll(u)).forEach(($,q)=>{let C=m($);typeof C=="string"&&C.length&&(y[C]=y[C]||[],y[C].push($))}),[].slice.call(s.querySelectorAll(u)).forEach(($,q)=>{let C=m($),R;if(g[C]=g[C]||[],g[C].push($),y[C]){let _=g[C].length-1,p=y[C].length-1;y[C][_]?(R=y[C][_],y[C][_]=null):y[C][p]&&(R=y[C][p],y[C][p]=null)}R&&n.push({from:R,to:$,options:f})})}getUnmatchedAutoAnimateElements(n){return[].slice.call(n.children).reduce((a,s)=>{let u=s.querySelector("[data-auto-animate-target]");return s.hasAttribute("data-auto-animate-target")||u||a.push(s),s.querySelector("[data-auto-animate-target]")&&(a=a.concat(this.getUnmatchedAutoAnimateElements(s))),a},[])}},Ni=class{constructor(n){this.Reveal=n}configure(n,a){n.fragments===!1?this.disable():a.fragments===!1&&this.enable()}disable(){N(this.Reveal.getSlidesElement(),".fragment").forEach(n=>{n.classList.add("visible"),n.classList.remove("current-fragment")})}enable(){N(this.Reveal.getSlidesElement(),".fragment").forEach(n=>{n.classList.remove("visible"),n.classList.remove("current-fragment")})}availableRoutes(){let n=this.Reveal.getCurrentSlide();if(n&&this.Reveal.getConfig().fragments){let a=n.querySelectorAll(".fragment:not(.disabled)"),s=n.querySelectorAll(".fragment:not(.disabled):not(.visible)");return{prev:a.length-s.length>0,next:!!s.length}}return{prev:!1,next:!1}}sort(n,a=!1){n=Array.from(n);let s=[],u=[],m=[];n.forEach(y=>{if(y.hasAttribute("data-fragment-index")){let g=parseInt(y.getAttribute("data-fragment-index"),10);s[g]||(s[g]=[]),s[g].push(y)}else u.push([y])}),s=s.concat(u);let f=0;return s.forEach(y=>{y.forEach(g=>{m.push(g),g.setAttribute("data-fragment-index",f)}),f++}),a===!0?s:m}sortAll(){this.Reveal.getHorizontalSlides().forEach(n=>{let a=N(n,"section");a.forEach((s,u)=>{this.sort(s.querySelectorAll(".fragment"))},this),a.length===0&&this.sort(n.querySelectorAll(".fragment"))})}update(n,a){let s={shown:[],hidden:[]},u=this.Reveal.getCurrentSlide();if(u&&this.Reveal.getConfig().fragments&&(a=a||this.sort(u.querySelectorAll(".fragment"))).length){let m=0;if(typeof n!="number"){let f=this.sort(u.querySelectorAll(".fragment.visible")).pop();f&&(n=parseInt(f.getAttribute("data-fragment-index")||0,10))}Array.from(a).forEach((f,y)=>{if(f.hasAttribute("data-fragment-index")&&(y=parseInt(f.getAttribute("data-fragment-index"),10)),m=Math.max(m,y),y<=n){let g=f.classList.contains("visible");f.classList.add("visible"),f.classList.remove("current-fragment"),y===n&&(this.Reveal.announceStatus(this.Reveal.getStatusText(f)),f.classList.add("current-fragment"),this.Reveal.slideContent.startEmbeddedContent(f)),g||(s.shown.push(f),this.Reveal.dispatchEvent({target:f,type:"visible",bubbles:!1}))}else{let g=f.classList.contains("visible");f.classList.remove("visible"),f.classList.remove("current-fragment"),g&&(this.Reveal.slideContent.stopEmbeddedContent(f),s.hidden.push(f),this.Reveal.dispatchEvent({target:f,type:"hidden",bubbles:!1}))}}),n=typeof n=="number"?n:-1,n=Math.max(Math.min(n,m),-1),u.setAttribute("data-fragment",n)}return s}sync(n=this.Reveal.getCurrentSlide()){return this.sort(n.querySelectorAll(".fragment"))}goto(n,a=0){let s=this.Reveal.getCurrentSlide();if(s&&this.Reveal.getConfig().fragments){let u=this.sort(s.querySelectorAll(".fragment:not(.disabled)"));if(u.length){if(typeof n!="number"){let f=this.sort(s.querySelectorAll(".fragment:not(.disabled).visible")).pop();n=f?parseInt(f.getAttribute("data-fragment-index")||0,10):-1}n+=a;let m=this.update(n,u);return m.hidden.length&&this.Reveal.dispatchEvent({type:"fragmenthidden",data:{fragment:m.hidden[0],fragments:m.hidden}}),m.shown.length&&this.Reveal.dispatchEvent({type:"fragmentshown",data:{fragment:m.shown[0],fragments:m.shown}}),this.Reveal.controls.update(),this.Reveal.progress.update(),this.Reveal.getConfig().fragmentInURL&&this.Reveal.location.writeURL(),!(!m.shown.length&&!m.hidden.length)}}return!1}next(){return this.goto(null,1)}prev(){return this.goto(null,-1)}},Ii=class{constructor(n){this.Reveal=n,this.active=!1,this.onSlideClicked=this.onSlideClicked.bind(this)}activate(){if(this.Reveal.getConfig().overview&&!this.isActive()){this.active=!0,this.Reveal.getRevealElement().classList.add("overview"),this.Reveal.cancelAutoSlide(),this.Reveal.getSlidesElement().appendChild(this.Reveal.getBackgroundsElement()),N(this.Reveal.getRevealElement(),".slides section").forEach(u=>{u.classList.contains("stack")||u.addEventListener("click",this.onSlideClicked,!0)});let n=70,a=this.Reveal.getComputedSlideSize();this.overviewSlideWidth=a.width+n,this.overviewSlideHeight=a.height+n,this.Reveal.getConfig().rtl&&(this.overviewSlideWidth=-this.overviewSlideWidth),this.Reveal.updateSlidesVisibility(),this.layout(),this.update(),this.Reveal.layout();let s=this.Reveal.getIndices();this.Reveal.dispatchEvent({type:"overviewshown",data:{indexh:s.h,indexv:s.v,currentSlide:this.Reveal.getCurrentSlide()}})}}layout(){this.Reveal.getHorizontalSlides().forEach((n,a)=>{n.setAttribute("data-index-h",a),ne(n,"translate3d("+a*this.overviewSlideWidth+"px, 0, 0)"),n.classList.contains("stack")&&N(n,"section").forEach((s,u)=>{s.setAttribute("data-index-h",a),s.setAttribute("data-index-v",u),ne(s,"translate3d(0, "+u*this.overviewSlideHeight+"px, 0)")})}),Array.from(this.Reveal.getBackgroundsElement().childNodes).forEach((n,a)=>{ne(n,"translate3d("+a*this.overviewSlideWidth+"px, 0, 0)"),N(n,".slide-background").forEach((s,u)=>{ne(s,"translate3d(0, "+u*this.overviewSlideHeight+"px, 0)")})})}update(){let n=Math.min(window.innerWidth,window.innerHeight),a=Math.max(n/5,150)/n,s=this.Reveal.getIndices();this.Reveal.transformSlides({overview:["scale("+a+")","translateX("+-s.h*this.overviewSlideWidth+"px)","translateY("+-s.v*this.overviewSlideHeight+"px)"].join(" ")})}deactivate(){if(this.Reveal.getConfig().overview){this.active=!1,this.Reveal.getRevealElement().classList.remove("overview"),this.Reveal.getRevealElement().classList.add("overview-deactivating"),setTimeout(()=>{this.Reveal.getRevealElement().classList.remove("overview-deactivating")},1),this.Reveal.getRevealElement().appendChild(this.Reveal.getBackgroundsElement()),N(this.Reveal.getRevealElement(),".slides section").forEach(a=>{ne(a,""),a.removeEventListener("click",this.onSlideClicked,!0)}),N(this.Reveal.getBackgroundsElement(),".slide-background").forEach(a=>{ne(a,"")}),this.Reveal.transformSlides({overview:""});let n=this.Reveal.getIndices();this.Reveal.slide(n.h,n.v),this.Reveal.layout(),this.Reveal.cueAutoSlide(),this.Reveal.dispatchEvent({type:"overviewhidden",data:{indexh:n.h,indexv:n.v,currentSlide:this.Reveal.getCurrentSlide()}})}}toggle(n){typeof n=="boolean"?n?this.activate():this.deactivate():this.isActive()?this.deactivate():this.activate()}isActive(){return this.active}onSlideClicked(n){if(this.isActive()){n.preventDefault();let a=n.target;for(;a&&!a.nodeName.match(/section/gi);)a=a.parentNode;if(a&&!a.classList.contains("disabled")&&(this.deactivate(),a.nodeName.match(/section/gi))){let s=parseInt(a.getAttribute("data-index-h"),10),u=parseInt(a.getAttribute("data-index-v"),10);this.Reveal.slide(s,u)}}}},zi=class{constructor(n){this.Reveal=n,this.shortcuts={},this.bindings={},this.onDocumentKeyDown=this.onDocumentKeyDown.bind(this),this.onDocumentKeyPress=this.onDocumentKeyPress.bind(this)}configure(n,a){n.navigationMode==="linear"?(this.shortcuts["&#8594;  ,  &#8595;  ,  SPACE  ,  N  ,  L  ,  J"]="Next slide",this.shortcuts["&#8592;  ,  &#8593;  ,  P  ,  H  ,  K"]="Previous slide"):(this.shortcuts["N  ,  SPACE"]="Next slide",this.shortcuts["P  ,  Shift SPACE"]="Previous slide",this.shortcuts["&#8592;  ,  H"]="Navigate left",this.shortcuts["&#8594;  ,  L"]="Navigate right",this.shortcuts["&#8593;  ,  K"]="Navigate up",this.shortcuts["&#8595;  ,  J"]="Navigate down"),this.shortcuts["Alt + &#8592;/&#8593/&#8594;/&#8595;"]="Navigate without fragments",this.shortcuts["Shift + &#8592;/&#8593/&#8594;/&#8595;"]="Jump to first/last slide",this.shortcuts["B  ,  ."]="Pause",this.shortcuts.F="Fullscreen",this.shortcuts["ESC, O"]="Slide overview"}bind(){document.addEventListener("keydown",this.onDocumentKeyDown,!1),document.addEventListener("keypress",this.onDocumentKeyPress,!1)}unbind(){document.removeEventListener("keydown",this.onDocumentKeyDown,!1),document.removeEventListener("keypress",this.onDocumentKeyPress,!1)}addKeyBinding(n,a){typeof n=="object"&&n.keyCode?this.bindings[n.keyCode]={callback:a,key:n.key,description:n.description}:this.bindings[n]={callback:a,key:null,description:null}}removeKeyBinding(n){delete this.bindings[n]}triggerKey(n){this.onDocumentKeyDown({keyCode:n})}registerKeyboardShortcut(n,a){this.shortcuts[n]=a}getShortcuts(){return this.shortcuts}getBindings(){return this.bindings}onDocumentKeyPress(n){n.shiftKey&&n.charCode===63&&this.Reveal.toggleHelp()}onDocumentKeyDown(n){let a=this.Reveal.getConfig();if(typeof a.keyboardCondition=="function"&&a.keyboardCondition(n)===!1||a.keyboardCondition==="focused"&&!this.Reveal.isFocused())return!0;let s=n.keyCode,u=!this.Reveal.isAutoSliding();this.Reveal.onUserInput(n);let m=document.activeElement&&document.activeElement.isContentEditable===!0,f=document.activeElement&&document.activeElement.tagName&&/input|textarea/i.test(document.activeElement.tagName),y=document.activeElement&&document.activeElement.className&&/speaker-notes/i.test(document.activeElement.className),g=!([32,37,38,39,40,78,80].indexOf(n.keyCode)!==-1&&n.shiftKey||n.altKey)&&(n.shiftKey||n.altKey||n.ctrlKey||n.metaKey);if(m||f||y||g)return;let $,q=[66,86,190,191];if(typeof a.keyboard=="object")for($ in a.keyboard)a.keyboard[$]==="togglePause"&&q.push(parseInt($,10));if(this.Reveal.isPaused()&&q.indexOf(s)===-1)return!1;let C=a.navigationMode==="linear"||!this.Reveal.hasHorizontalSlides()||!this.Reveal.hasVerticalSlides(),R=!1;if(typeof a.keyboard=="object"){for($ in a.keyboard)if(parseInt($,10)===s){let _=a.keyboard[$];typeof _=="function"?_.apply(null,[n]):typeof _=="string"&&typeof this.Reveal[_]=="function"&&this.Reveal[_].call(),R=!0}}if(R===!1){for($ in this.bindings)if(parseInt($,10)===s){let _=this.bindings[$].callback;typeof _=="function"?_.apply(null,[n]):typeof _=="string"&&typeof this.Reveal[_]=="function"&&this.Reveal[_].call(),R=!0}}R===!1&&(R=!0,s===80||s===33?this.Reveal.prev({skipFragments:n.altKey}):s===78||s===34?this.Reveal.next({skipFragments:n.altKey}):s===72||s===37?n.shiftKey?this.Reveal.slide(0):!this.Reveal.overview.isActive()&&C?this.Reveal.prev({skipFragments:n.altKey}):this.Reveal.left({skipFragments:n.altKey}):s===76||s===39?n.shiftKey?this.Reveal.slide(this.Reveal.getHorizontalSlides().length-1):!this.Reveal.overview.isActive()&&C?this.Reveal.next({skipFragments:n.altKey}):this.Reveal.right({skipFragments:n.altKey}):s===75||s===38?n.shiftKey?this.Reveal.slide(void 0,0):!this.Reveal.overview.isActive()&&C?this.Reveal.prev({skipFragments:n.altKey}):this.Reveal.up({skipFragments:n.altKey}):s===74||s===40?n.shiftKey?this.Reveal.slide(void 0,Number.MAX_VALUE):!this.Reveal.overview.isActive()&&C?this.Reveal.next({skipFragments:n.altKey}):this.Reveal.down({skipFragments:n.altKey}):s===36?this.Reveal.slide(0):s===35?this.Reveal.slide(this.Reveal.getHorizontalSlides().length-1):s===32?(this.Reveal.overview.isActive()&&this.Reveal.overview.deactivate(),n.shiftKey?this.Reveal.prev({skipFragments:n.altKey}):this.Reveal.next({skipFragments:n.altKey})):s===58||s===59||s===66||s===86||s===190||s===191?this.Reveal.togglePause():s===70?(_=>{let p=(_=_||document.documentElement).requestFullscreen||_.webkitRequestFullscreen||_.webkitRequestFullScreen||_.mozRequestFullScreen||_.msRequestFullscreen;p&&p.apply(_)})(a.embedded?this.Reveal.getViewportElement():document.documentElement):s===65?a.autoSlideStoppable&&this.Reveal.toggleAutoSlide(u):R=!1),R?n.preventDefault&&n.preventDefault():s!==27&&s!==79||(this.Reveal.closeOverlay()===!1&&this.Reveal.overview.toggle(),n.preventDefault&&n.preventDefault()),this.Reveal.cueAutoSlide()}},_i=class{constructor(n){var a,s,u;u=1e3,(s="MAX_REPLACE_STATE_FREQUENCY")in(a=this)?Object.defineProperty(a,s,{value:u,enumerable:!0,configurable:!0,writable:!0}):a[s]=u,this.Reveal=n,this.writeURLTimeout=0,this.replaceStateTimestamp=0,this.onWindowHashChange=this.onWindowHashChange.bind(this)}bind(){window.addEventListener("hashchange",this.onWindowHashChange,!1)}unbind(){window.removeEventListener("hashchange",this.onWindowHashChange,!1)}getIndicesFromHash(n=window.location.hash){let a=n.replace(/^#\/?/,""),s=a.split("/");if(/^[0-9]*$/.test(s[0])||!a.length){let u=this.Reveal.getConfig(),m,f=u.hashOneBasedIndex?1:0,y=parseInt(s[0],10)-f||0,g=parseInt(s[1],10)-f||0;return u.fragmentInURL&&(m=parseInt(s[2],10),isNaN(m)&&(m=void 0)),{h:y,v:g,f:m}}{let u,m;/\/[-\d]+$/g.test(a)&&(m=parseInt(a.split("/").pop(),10),m=isNaN(m)?void 0:m,a=a.split("/").shift());try{u=document.getElementById(decodeURIComponent(a))}catch{}if(u)return{...this.Reveal.getIndices(u),f:m}}return null}readURL(){let n=this.Reveal.getIndices(),a=this.getIndicesFromHash();a?a.h===n.h&&a.v===n.v&&a.f===void 0||this.Reveal.slide(a.h,a.v,a.f):this.Reveal.slide(n.h||0,n.v||0)}writeURL(n){let a=this.Reveal.getConfig(),s=this.Reveal.getCurrentSlide();if(clearTimeout(this.writeURLTimeout),typeof n=="number")this.writeURLTimeout=setTimeout(this.writeURL,n);else if(s){let u=this.getHash();a.history?window.location.hash=u:a.hash&&(u==="/"?this.debouncedReplaceState(window.location.pathname+window.location.search):this.debouncedReplaceState("#"+u))}}replaceState(n){window.history.replaceState(null,null,n),this.replaceStateTimestamp=Date.now()}debouncedReplaceState(n){clearTimeout(this.replaceStateTimeout),Date.now()-this.replaceStateTimestamp>this.MAX_REPLACE_STATE_FREQUENCY?this.replaceState(n):this.replaceStateTimeout=setTimeout(()=>this.replaceState(n),this.MAX_REPLACE_STATE_FREQUENCY)}getHash(n){let a="/",s=n||this.Reveal.getCurrentSlide(),u=s?s.getAttribute("id"):null;u&&(u=encodeURIComponent(u));let m=this.Reveal.getIndices(n);if(this.Reveal.getConfig().fragmentInURL||(m.f=void 0),typeof u=="string"&&u.length)a="/"+u,m.f>=0&&(a+="/"+m.f);else{let f=this.Reveal.getConfig().hashOneBasedIndex?1:0;(m.h>0||m.v>0||m.f>=0)&&(a+=m.h+f),(m.v>0||m.f>=0)&&(a+="/"+(m.v+f)),m.f>=0&&(a+="/"+m.f)}return a}onWindowHashChange(n){this.readURL()}},Oi=class{constructor(n){this.Reveal=n,this.onNavigateLeftClicked=this.onNavigateLeftClicked.bind(this),this.onNavigateRightClicked=this.onNavigateRightClicked.bind(this),this.onNavigateUpClicked=this.onNavigateUpClicked.bind(this),this.onNavigateDownClicked=this.onNavigateDownClicked.bind(this),this.onNavigatePrevClicked=this.onNavigatePrevClicked.bind(this),this.onNavigateNextClicked=this.onNavigateNextClicked.bind(this)}render(){let n=this.Reveal.getConfig().rtl,a=this.Reveal.getRevealElement();this.element=document.createElement("aside"),this.element.className="controls",this.element.innerHTML=`<button class="navigate-left" aria-label="${n?"next slide":"previous slide"}"><div class="controls-arrow"></div></button>
			<button class="navigate-right" aria-label="${n?"previous slide":"next slide"}"><div class="controls-arrow"></div></button>
			<button class="navigate-up" aria-label="above slide"><div class="controls-arrow"></div></button>
			<button class="navigate-down" aria-label="below slide"><div class="controls-arrow"></div></button>`,this.Reveal.getRevealElement().appendChild(this.element),this.controlsLeft=N(a,".navigate-left"),this.controlsRight=N(a,".navigate-right"),this.controlsUp=N(a,".navigate-up"),this.controlsDown=N(a,".navigate-down"),this.controlsPrev=N(a,".navigate-prev"),this.controlsNext=N(a,".navigate-next"),this.controlsRightArrow=this.element.querySelector(".navigate-right"),this.controlsLeftArrow=this.element.querySelector(".navigate-left"),this.controlsDownArrow=this.element.querySelector(".navigate-down")}configure(n,a){this.element.style.display=n.controls?"block":"none",this.element.setAttribute("data-controls-layout",n.controlsLayout),this.element.setAttribute("data-controls-back-arrows",n.controlsBackArrows)}bind(){let n=["touchstart","click"];ya&&(n=["touchstart"]),n.forEach(a=>{this.controlsLeft.forEach(s=>s.addEventListener(a,this.onNavigateLeftClicked,!1)),this.controlsRight.forEach(s=>s.addEventListener(a,this.onNavigateRightClicked,!1)),this.controlsUp.forEach(s=>s.addEventListener(a,this.onNavigateUpClicked,!1)),this.controlsDown.forEach(s=>s.addEventListener(a,this.onNavigateDownClicked,!1)),this.controlsPrev.forEach(s=>s.addEventListener(a,this.onNavigatePrevClicked,!1)),this.controlsNext.forEach(s=>s.addEventListener(a,this.onNavigateNextClicked,!1))})}unbind(){["touchstart","click"].forEach(n=>{this.controlsLeft.forEach(a=>a.removeEventListener(n,this.onNavigateLeftClicked,!1)),this.controlsRight.forEach(a=>a.removeEventListener(n,this.onNavigateRightClicked,!1)),this.controlsUp.forEach(a=>a.removeEventListener(n,this.onNavigateUpClicked,!1)),this.controlsDown.forEach(a=>a.removeEventListener(n,this.onNavigateDownClicked,!1)),this.controlsPrev.forEach(a=>a.removeEventListener(n,this.onNavigatePrevClicked,!1)),this.controlsNext.forEach(a=>a.removeEventListener(n,this.onNavigateNextClicked,!1))})}update(){let n=this.Reveal.availableRoutes();[...this.controlsLeft,...this.controlsRight,...this.controlsUp,...this.controlsDown,...this.controlsPrev,...this.controlsNext].forEach(s=>{s.classList.remove("enabled","fragmented"),s.setAttribute("disabled","disabled")}),n.left&&this.controlsLeft.forEach(s=>{s.classList.add("enabled"),s.removeAttribute("disabled")}),n.right&&this.controlsRight.forEach(s=>{s.classList.add("enabled"),s.removeAttribute("disabled")}),n.up&&this.controlsUp.forEach(s=>{s.classList.add("enabled"),s.removeAttribute("disabled")}),n.down&&this.controlsDown.forEach(s=>{s.classList.add("enabled"),s.removeAttribute("disabled")}),(n.left||n.up)&&this.controlsPrev.forEach(s=>{s.classList.add("enabled"),s.removeAttribute("disabled")}),(n.right||n.down)&&this.controlsNext.forEach(s=>{s.classList.add("enabled"),s.removeAttribute("disabled")});let a=this.Reveal.getCurrentSlide();if(a){let s=this.Reveal.fragments.availableRoutes();s.prev&&this.controlsPrev.forEach(u=>{u.classList.add("fragmented","enabled"),u.removeAttribute("disabled")}),s.next&&this.controlsNext.forEach(u=>{u.classList.add("fragmented","enabled"),u.removeAttribute("disabled")}),this.Reveal.isVerticalSlide(a)?(s.prev&&this.controlsUp.forEach(u=>{u.classList.add("fragmented","enabled"),u.removeAttribute("disabled")}),s.next&&this.controlsDown.forEach(u=>{u.classList.add("fragmented","enabled"),u.removeAttribute("disabled")})):(s.prev&&this.controlsLeft.forEach(u=>{u.classList.add("fragmented","enabled"),u.removeAttribute("disabled")}),s.next&&this.controlsRight.forEach(u=>{u.classList.add("fragmented","enabled"),u.removeAttribute("disabled")}))}if(this.Reveal.getConfig().controlsTutorial){let s=this.Reveal.getIndices();!this.Reveal.hasNavigatedVertically()&&n.down?this.controlsDownArrow.classList.add("highlight"):(this.controlsDownArrow.classList.remove("highlight"),this.Reveal.getConfig().rtl?!this.Reveal.hasNavigatedHorizontally()&&n.left&&s.v===0?this.controlsLeftArrow.classList.add("highlight"):this.controlsLeftArrow.classList.remove("highlight"):!this.Reveal.hasNavigatedHorizontally()&&n.right&&s.v===0?this.controlsRightArrow.classList.add("highlight"):this.controlsRightArrow.classList.remove("highlight"))}}destroy(){this.unbind(),this.element.remove()}onNavigateLeftClicked(n){n.preventDefault(),this.Reveal.onUserInput(),this.Reveal.getConfig().navigationMode==="linear"?this.Reveal.prev():this.Reveal.left()}onNavigateRightClicked(n){n.preventDefault(),this.Reveal.onUserInput(),this.Reveal.getConfig().navigationMode==="linear"?this.Reveal.next():this.Reveal.right()}onNavigateUpClicked(n){n.preventDefault(),this.Reveal.onUserInput(),this.Reveal.up()}onNavigateDownClicked(n){n.preventDefault(),this.Reveal.onUserInput(),this.Reveal.down()}onNavigatePrevClicked(n){n.preventDefault(),this.Reveal.onUserInput(),this.Reveal.prev()}onNavigateNextClicked(n){n.preventDefault(),this.Reveal.onUserInput(),this.Reveal.next()}},$i=class{constructor(n){this.Reveal=n,this.onProgressClicked=this.onProgressClicked.bind(this)}render(){this.element=document.createElement("div"),this.element.className="progress",this.Reveal.getRevealElement().appendChild(this.element),this.bar=document.createElement("span"),this.element.appendChild(this.bar)}configure(n,a){this.element.style.display=n.progress?"block":"none"}bind(){this.Reveal.getConfig().progress&&this.element&&this.element.addEventListener("click",this.onProgressClicked,!1)}unbind(){this.Reveal.getConfig().progress&&this.element&&this.element.removeEventListener("click",this.onProgressClicked,!1)}update(){if(this.Reveal.getConfig().progress&&this.bar){let n=this.Reveal.getProgress();this.Reveal.getTotalSlides()<2&&(n=0),this.bar.style.transform="scaleX("+n+")"}}getMaxWidth(){return this.Reveal.getRevealElement().offsetWidth}onProgressClicked(n){this.Reveal.onUserInput(n),n.preventDefault();let a=this.Reveal.getSlides(),s=a.length,u=Math.floor(n.clientX/this.getMaxWidth()*s);this.Reveal.getConfig().rtl&&(u=s-u);let m=this.Reveal.getIndices(a[u]);this.Reveal.slide(m.h,m.v)}destroy(){this.element.remove()}},Ui=class{constructor(n){this.Reveal=n,this.lastMouseWheelStep=0,this.cursorHidden=!1,this.cursorInactiveTimeout=0,this.onDocumentCursorActive=this.onDocumentCursorActive.bind(this),this.onDocumentMouseScroll=this.onDocumentMouseScroll.bind(this)}configure(n,a){n.mouseWheel?(document.addEventListener("DOMMouseScroll",this.onDocumentMouseScroll,!1),document.addEventListener("mousewheel",this.onDocumentMouseScroll,!1)):(document.removeEventListener("DOMMouseScroll",this.onDocumentMouseScroll,!1),document.removeEventListener("mousewheel",this.onDocumentMouseScroll,!1)),n.hideInactiveCursor?(document.addEventListener("mousemove",this.onDocumentCursorActive,!1),document.addEventListener("mousedown",this.onDocumentCursorActive,!1)):(this.showCursor(),document.removeEventListener("mousemove",this.onDocumentCursorActive,!1),document.removeEventListener("mousedown",this.onDocumentCursorActive,!1))}showCursor(){this.cursorHidden&&(this.cursorHidden=!1,this.Reveal.getRevealElement().style.cursor="")}hideCursor(){this.cursorHidden===!1&&(this.cursorHidden=!0,this.Reveal.getRevealElement().style.cursor="none")}destroy(){this.showCursor(),document.removeEventListener("DOMMouseScroll",this.onDocumentMouseScroll,!1),document.removeEventListener("mousewheel",this.onDocumentMouseScroll,!1),document.removeEventListener("mousemove",this.onDocumentCursorActive,!1),document.removeEventListener("mousedown",this.onDocumentCursorActive,!1)}onDocumentCursorActive(n){this.showCursor(),clearTimeout(this.cursorInactiveTimeout),this.cursorInactiveTimeout=setTimeout(this.hideCursor.bind(this),this.Reveal.getConfig().hideCursorTime)}onDocumentMouseScroll(n){if(Date.now()-this.lastMouseWheelStep>1e3){this.lastMouseWheelStep=Date.now();let a=n.detail||-n.wheelDelta;a>0?this.Reveal.next():a<0&&this.Reveal.prev()}}},ma=(D,n)=>{let a=document.createElement("script");a.type="text/javascript",a.async=!1,a.defer=!1,a.src=D,typeof n=="function"&&(a.onload=a.onreadystatechange=u=>{(u.type==="load"||/loaded|complete/.test(a.readyState))&&(a.onload=a.onreadystatechange=a.onerror=null,n())},a.onerror=u=>{a.onload=a.onreadystatechange=a.onerror=null,n(new Error("Failed loading script: "+a.src+`
`+u))});let s=document.querySelector("head");s.insertBefore(a,s.lastChild)},qi=class{constructor(n){this.Reveal=n,this.state="idle",this.registeredPlugins={},this.asyncDependencies=[]}load(n,a){return this.state="loading",n.forEach(this.registerPlugin.bind(this)),new Promise(s=>{let u=[],m=0;if(a.forEach(f=>{f.condition&&!f.condition()||(f.async?this.asyncDependencies.push(f):u.push(f))}),u.length){m=u.length;let f=y=>{y&&typeof y.callback=="function"&&y.callback(),--m==0&&this.initPlugins().then(s)};u.forEach(y=>{typeof y.id=="string"?(this.registerPlugin(y),f(y)):typeof y.src=="string"?ma(y.src,()=>f(y)):(console.warn("Unrecognized plugin format",y),f())})}else this.initPlugins().then(s)})}initPlugins(){return new Promise(n=>{let a=Object.values(this.registeredPlugins),s=a.length;if(s===0)this.loadAsync().then(n);else{let u,m=()=>{--s==0?this.loadAsync().then(n):u()},f=0;u=()=>{let y=a[f++];if(typeof y.init=="function"){let g=y.init(this.Reveal);g&&typeof g.then=="function"?g.then(m):m()}else m()},u()}})}loadAsync(){return this.state="loaded",this.asyncDependencies.length&&this.asyncDependencies.forEach(n=>{ma(n.src,n.callback)}),Promise.resolve()}registerPlugin(n){arguments.length===2&&typeof arguments[0]=="string"?(n=arguments[1]).id=arguments[0]:typeof n=="function"&&(n=n());let a=n.id;typeof a!="string"?console.warn("Unrecognized plugin format; can't find plugin.id",n):this.registeredPlugins[a]===void 0?(this.registeredPlugins[a]=n,this.state==="loaded"&&typeof n.init=="function"&&n.init(this.Reveal)):console.warn('reveal.js: "'+a+'" plugin has already been registered')}hasPlugin(n){return!!this.registeredPlugins[n]}getPlugin(n){return this.registeredPlugins[n]}getRegisteredPlugins(){return this.registeredPlugins}destroy(){Object.values(this.registeredPlugins).forEach(n=>{typeof n.destroy=="function"&&n.destroy()}),this.registeredPlugins={},this.asyncDependencies=[]}},Hi=class{constructor(n){this.Reveal=n}async setupPDF(){let n=this.Reveal.getConfig(),a=N(this.Reveal.getRevealElement(),".slides section"),s=n.slideNumber&&/all|print/i.test(n.showSlideNumber),u=this.Reveal.getComputedSlideSize(window.innerWidth,window.innerHeight),m=Math.floor(u.width*(1+n.margin)),f=Math.floor(u.height*(1+n.margin)),y=u.width,g=u.height;await new Promise(requestAnimationFrame),Li("@page{size:"+m+"px "+f+"px; margin: 0px;}"),Li(".reveal section>img, .reveal section>video, .reveal section>iframe{max-width: "+y+"px; max-height:"+g+"px}"),document.documentElement.classList.add("print-pdf"),document.body.style.width=m+"px",document.body.style.height=f+"px";let $=document.querySelector(".reveal-viewport"),q;if($){let p=window.getComputedStyle($);p&&p.background&&(q=p.background)}await new Promise(requestAnimationFrame),this.Reveal.layoutSlideContents(y,g),await new Promise(requestAnimationFrame);let C=a.map(p=>p.scrollHeight),R=[],_=a[0].parentNode;a.forEach(function(p,dt){if(p.classList.contains("stack")===!1){let V=(m-y)/2,kt=(f-g)/2,Pt=C[dt],G=Math.max(Math.ceil(Pt/f),1);G=Math.min(G,n.pdfMaxPagesPerSlide),(G===1&&n.center||p.classList.contains("center"))&&(kt=Math.max((f-Pt)/2,0));let H=document.createElement("div");if(R.push(H),H.className="pdf-page",H.style.height=(f+n.pdfPageHeightOffset)*G+"px",q&&(H.style.background=q),H.appendChild(p),p.style.left=V+"px",p.style.top=kt+"px",p.style.width=y+"px",this.Reveal.slideContent.layout(p),p.slideBackgroundElement&&H.insertBefore(p.slideBackgroundElement,p),n.showNotes){let J=this.Reveal.getSlideNotes(p);if(J){let Q=typeof n.showNotes=="string"?n.showNotes:"inline",I=document.createElement("div");I.classList.add("speaker-notes"),I.classList.add("speaker-notes-pdf"),I.setAttribute("data-layout",Q),I.innerHTML=J,Q==="separate-page"?R.push(I):(I.style.left=8+"px",I.style.bottom=8+"px",I.style.width=m-2*8+"px",H.appendChild(I))}}if(s){let J=dt+1,ot=document.createElement("div");ot.classList.add("slide-number"),ot.classList.add("slide-number-pdf"),ot.innerHTML=J,H.appendChild(ot)}if(n.pdfSeparateFragments){let J=this.Reveal.fragments.sort(H.querySelectorAll(".fragment"),!0),ot;J.forEach(function(Q){ot&&ot.forEach(function(W){W.classList.remove("current-fragment")}),Q.forEach(function(W){W.classList.add("visible","current-fragment")},this);let I=H.cloneNode(!0);R.push(I),ot=Q},this),J.forEach(function(Q){Q.forEach(function(I){I.classList.remove("visible","current-fragment")})})}else N(H,".fragment:not(.fade-out)").forEach(function(J){J.classList.add("visible")})}},this),await new Promise(requestAnimationFrame),R.forEach(p=>_.appendChild(p)),this.Reveal.dispatchEvent({type:"pdf-ready"})}isPrintingPDF(){return/print-pdf/gi.test(window.location.search)}},ji=class{constructor(n){this.Reveal=n,this.touchStartX=0,this.touchStartY=0,this.touchStartCount=0,this.touchCaptured=!1,this.onPointerDown=this.onPointerDown.bind(this),this.onPointerMove=this.onPointerMove.bind(this),this.onPointerUp=this.onPointerUp.bind(this),this.onTouchStart=this.onTouchStart.bind(this),this.onTouchMove=this.onTouchMove.bind(this),this.onTouchEnd=this.onTouchEnd.bind(this)}bind(){let n=this.Reveal.getRevealElement();"onpointerdown"in window?(n.addEventListener("pointerdown",this.onPointerDown,!1),n.addEventListener("pointermove",this.onPointerMove,!1),n.addEventListener("pointerup",this.onPointerUp,!1)):window.navigator.msPointerEnabled?(n.addEventListener("MSPointerDown",this.onPointerDown,!1),n.addEventListener("MSPointerMove",this.onPointerMove,!1),n.addEventListener("MSPointerUp",this.onPointerUp,!1)):(n.addEventListener("touchstart",this.onTouchStart,!1),n.addEventListener("touchmove",this.onTouchMove,!1),n.addEventListener("touchend",this.onTouchEnd,!1))}unbind(){let n=this.Reveal.getRevealElement();n.removeEventListener("pointerdown",this.onPointerDown,!1),n.removeEventListener("pointermove",this.onPointerMove,!1),n.removeEventListener("pointerup",this.onPointerUp,!1),n.removeEventListener("MSPointerDown",this.onPointerDown,!1),n.removeEventListener("MSPointerMove",this.onPointerMove,!1),n.removeEventListener("MSPointerUp",this.onPointerUp,!1),n.removeEventListener("touchstart",this.onTouchStart,!1),n.removeEventListener("touchmove",this.onTouchMove,!1),n.removeEventListener("touchend",this.onTouchEnd,!1)}isSwipePrevented(n){if(Tn(n,"video, audio"))return!0;for(;n&&typeof n.hasAttribute=="function";){if(n.hasAttribute("data-prevent-swipe"))return!0;n=n.parentNode}return!1}onTouchStart(n){if(this.isSwipePrevented(n.target))return!0;this.touchStartX=n.touches[0].clientX,this.touchStartY=n.touches[0].clientY,this.touchStartCount=n.touches.length}onTouchMove(n){if(this.isSwipePrevented(n.target))return!0;let a=this.Reveal.getConfig();if(this.touchCaptured)ya&&n.preventDefault();else{this.Reveal.onUserInput(n);let s=n.touches[0].clientX,u=n.touches[0].clientY;if(n.touches.length===1&&this.touchStartCount!==2){let m=this.Reveal.availableRoutes({includeFragments:!0}),f=s-this.touchStartX,y=u-this.touchStartY;f>40&&Math.abs(f)>Math.abs(y)?(this.touchCaptured=!0,a.navigationMode==="linear"?a.rtl?this.Reveal.next():this.Reveal.prev():this.Reveal.left()):f<-40&&Math.abs(f)>Math.abs(y)?(this.touchCaptured=!0,a.navigationMode==="linear"?a.rtl?this.Reveal.prev():this.Reveal.next():this.Reveal.right()):y>40&&m.up?(this.touchCaptured=!0,a.navigationMode==="linear"?this.Reveal.prev():this.Reveal.up()):y<-40&&m.down&&(this.touchCaptured=!0,a.navigationMode==="linear"?this.Reveal.next():this.Reveal.down()),a.embedded?(this.touchCaptured||this.Reveal.isVerticalSlide())&&n.preventDefault():n.preventDefault()}}}onTouchEnd(n){this.touchCaptured=!1}onPointerDown(n){n.pointerType!==n.MSPOINTER_TYPE_TOUCH&&n.pointerType!=="touch"||(n.touches=[{clientX:n.clientX,clientY:n.clientY}],this.onTouchStart(n))}onPointerMove(n){n.pointerType!==n.MSPOINTER_TYPE_TOUCH&&n.pointerType!=="touch"||(n.touches=[{clientX:n.clientX,clientY:n.clientY}],this.onTouchMove(n))}onPointerUp(n){n.pointerType!==n.MSPOINTER_TYPE_TOUCH&&n.pointerType!=="touch"||(n.touches=[{clientX:n.clientX,clientY:n.clientY}],this.onTouchEnd(n))}},Wi=class{constructor(n){this.Reveal=n,this.onRevealPointerDown=this.onRevealPointerDown.bind(this),this.onDocumentPointerDown=this.onDocumentPointerDown.bind(this)}configure(n,a){n.embedded?this.blur():(this.focus(),this.unbind())}bind(){this.Reveal.getConfig().embedded&&this.Reveal.getRevealElement().addEventListener("pointerdown",this.onRevealPointerDown,!1)}unbind(){this.Reveal.getRevealElement().removeEventListener("pointerdown",this.onRevealPointerDown,!1),document.removeEventListener("pointerdown",this.onDocumentPointerDown,!1)}focus(){this.state!=="focus"&&(this.Reveal.getRevealElement().classList.add("focused"),document.addEventListener("pointerdown",this.onDocumentPointerDown,!1)),this.state="focus"}blur(){this.state!=="blur"&&(this.Reveal.getRevealElement().classList.remove("focused"),document.removeEventListener("pointerdown",this.onDocumentPointerDown,!1)),this.state="blur"}isFocused(){return this.state==="focus"}destroy(){this.Reveal.getRevealElement().classList.remove("focused")}onRevealPointerDown(n){this.focus()}onDocumentPointerDown(n){let a=ht(n.target,".reveal");a&&a===this.Reveal.getRevealElement()||this.blur()}},Ki=class{constructor(n){this.Reveal=n}render(){this.element=document.createElement("div"),this.element.className="speaker-notes",this.element.setAttribute("data-prevent-swipe",""),this.element.setAttribute("tabindex","0"),this.Reveal.getRevealElement().appendChild(this.element)}configure(n,a){n.showNotes&&this.element.setAttribute("data-layout",typeof n.showNotes=="string"?n.showNotes:"inline")}update(){this.Reveal.getConfig().showNotes&&this.element&&this.Reveal.getCurrentSlide()&&!this.Reveal.print.isPrintingPDF()&&(this.element.innerHTML=this.getSlideNotes()||'<span class="notes-placeholder">No notes on this slide.</span>')}updateVisibility(){this.Reveal.getConfig().showNotes&&this.hasNotes()&&!this.Reveal.print.isPrintingPDF()?this.Reveal.getRevealElement().classList.add("show-notes"):this.Reveal.getRevealElement().classList.remove("show-notes")}hasNotes(){return this.Reveal.getSlidesElement().querySelectorAll("[data-notes], aside.notes").length>0}isSpeakerNotesWindow(){return!!window.location.search.match(/receiver/gi)}getSlideNotes(n=this.Reveal.getCurrentSlide()){if(n.hasAttribute("data-notes"))return n.getAttribute("data-notes");let a=n.querySelector("aside.notes");return a?a.innerHTML:null}destroy(){this.element.remove()}},Vi=class{constructor(n,a){this.diameter=100,this.diameter2=this.diameter/2,this.thickness=6,this.playing=!1,this.progress=0,this.progressOffset=1,this.container=n,this.progressCheck=a,this.canvas=document.createElement("canvas"),this.canvas.className="playback",this.canvas.width=this.diameter,this.canvas.height=this.diameter,this.canvas.style.width=this.diameter2+"px",this.canvas.style.height=this.diameter2+"px",this.context=this.canvas.getContext("2d"),this.container.appendChild(this.canvas),this.render()}setPlaying(n){let a=this.playing;this.playing=n,!a&&this.playing?this.animate():this.render()}animate(){let n=this.progress;this.progress=this.progressCheck(),n>.8&&this.progress<.2&&(this.progressOffset=this.progress),this.render(),this.playing&&requestAnimationFrame(this.animate.bind(this))}render(){let n=this.playing?this.progress:0,a=this.diameter2-this.thickness,s=this.diameter2,u=this.diameter2,m=28;this.progressOffset+=.1*(1-this.progressOffset);let f=-Math.PI/2+n*(2*Math.PI),y=-Math.PI/2+this.progressOffset*(2*Math.PI);this.context.save(),this.context.clearRect(0,0,this.diameter,this.diameter),this.context.beginPath(),this.context.arc(s,u,a+4,0,2*Math.PI,!1),this.context.fillStyle="rgba( 0, 0, 0, 0.4 )",this.context.fill(),this.context.beginPath(),this.context.arc(s,u,a,0,2*Math.PI,!1),this.context.lineWidth=this.thickness,this.context.strokeStyle="rgba( 255, 255, 255, 0.2 )",this.context.stroke(),this.playing&&(this.context.beginPath(),this.context.arc(s,u,a,y,f,!1),this.context.lineWidth=this.thickness,this.context.strokeStyle="#fff",this.context.stroke()),this.context.translate(s-14,u-14),this.playing?(this.context.fillStyle="#fff",this.context.fillRect(0,0,10,m),this.context.fillRect(18,0,10,m)):(this.context.beginPath(),this.context.translate(4,0),this.context.moveTo(0,0),this.context.lineTo(24,14),this.context.lineTo(0,m),this.context.fillStyle="#fff",this.context.fill()),this.context.restore()}on(n,a){this.canvas.addEventListener(n,a,!1)}off(n,a){this.canvas.removeEventListener(n,a,!1)}destroy(){this.playing=!1,this.canvas.parentNode&&this.container.removeChild(this.canvas)}},Ju={width:960,height:700,margin:.04,minScale:.2,maxScale:2,controls:!0,controlsTutorial:!0,controlsLayout:"bottom-right",controlsBackArrows:"faded",progress:!0,slideNumber:!1,showSlideNumber:"all",hashOneBasedIndex:!1,hash:!1,respondToHashChanges:!0,history:!1,keyboard:!0,keyboardCondition:null,disableLayout:!1,overview:!0,center:!0,touch:!0,loop:!1,rtl:!1,navigationMode:"default",shuffle:!1,fragments:!0,fragmentInURL:!0,embedded:!1,help:!0,pause:!0,showNotes:!1,showHiddenSlides:!1,autoPlayMedia:null,preloadIframes:null,autoAnimate:!0,autoAnimateMatcher:null,autoAnimateEasing:"ease",autoAnimateDuration:1,autoAnimateUnmatched:!0,autoAnimateStyles:["opacity","color","background-color","padding","font-size","line-height","letter-spacing","border-width","border-color","border-radius","outline","outline-offset"],autoSlide:0,autoSlideStoppable:!0,autoSlideMethod:null,defaultTiming:null,mouseWheel:!1,previewLinks:!1,postMessage:!0,postMessageEvents:!1,focusBodyOnPageVisibilityChange:!0,transition:"slide",transitionSpeed:"default",backgroundTransition:"fade",parallaxBackgroundImage:"",parallaxBackgroundSize:"",parallaxBackgroundRepeat:"",parallaxBackgroundPosition:"",parallaxBackgroundHorizontal:null,parallaxBackgroundVertical:null,pdfMaxPagesPerSlide:Number.POSITIVE_INFINITY,pdfSeparateFragments:!0,pdfPageHeightOffset:-1,viewDistance:3,mobileViewDistance:2,display:"block",hideInactiveCursor:!0,hideCursorTime:5e3,dependencies:[],plugins:[]};function Da(D,n){arguments.length<2&&(n=arguments[0],D=document.querySelector(".reveal"));let a={},s,u,m,f,y,g={},$=!1,q={hasNavigatedHorizontally:!1,hasNavigatedVertically:!1},C=[],R=1,_={layout:"",overview:""},p={},dt="idle",V=0,kt=0,Pt=-1,G=!1,H=new Ti(a),J=new Bi(a),ot=new Mi(a),Q=new Pi(a),I=new Ni(a),W=new Ii(a),ct=new zi(a),it=new _i(a),lt=new Oi(a),A=new $i(a),Y=new Ui(a),Z=new qi(a),vt=new Hi(a),yt=new Wi(a),Mt=new ji(a),tt=new Ki(a);function Mn(d){if(!D)throw'Unable to find presentation root (<div class="reveal">).';if(p.wrapper=D,p.slides=D.querySelector(".slides"),!p.slides)throw'Unable to find slides container (<div class="slides">).';return g={...Ju,...g,...n,...d,...ha()},Nn(),window.addEventListener("load",Ot,!1),Z.load(g.plugins,g.dependencies).then(In),new Promise(b=>a.on("ready",b))}function Nn(){g.embedded===!0?p.viewport=ht(D,".reveal-viewport")||D:(p.viewport=document.body,document.documentElement.classList.add("reveal-full-page")),p.viewport.classList.add("reveal-viewport")}function In(){$=!0,zn(),_n(),$n(),ft(),On(),jn(),Le(),it.readURL(),Q.update(!0),setTimeout(()=>{p.slides.classList.remove("no-transition"),p.wrapper.classList.add("ready"),pt({type:"ready",data:{indexh:s,indexv:u,currentSlide:f}})},1),vt.isPrintingPDF()&&(ie(),document.readyState==="complete"?vt.setupPDF():window.addEventListener("load",()=>{vt.setupPDF()}))}function zn(){g.showHiddenSlides||N(p.wrapper,'section[data-visibility="hidden"]').forEach(d=>{d.parentNode.removeChild(d)})}function _n(){p.slides.classList.add("no-transition"),pe?p.wrapper.classList.add("no-hover"):p.wrapper.classList.remove("no-hover"),Q.render(),J.render(),lt.render(),A.render(),tt.render(),p.pauseOverlay=Hu(p.wrapper,"div","pause-overlay",g.controls?'<button class="resume-button">Resume presentation</button>':null),p.statusElement=Je(),p.wrapper.setAttribute("role","application")}function Je(){let d=p.wrapper.querySelector(".aria-status");return d||(d=document.createElement("div"),d.style.position="absolute",d.style.height="1px",d.style.width="1px",d.style.overflow="hidden",d.style.clip="rect( 1px, 1px, 1px, 1px )",d.classList.add("aria-status"),d.setAttribute("aria-live","polite"),d.setAttribute("aria-atomic","true"),p.wrapper.appendChild(d)),d}function Et(d){p.statusElement.textContent=d}function Re(d){let b="";if(d.nodeType===3)b+=d.textContent;else if(d.nodeType===1){let x=d.getAttribute("aria-hidden"),S=window.getComputedStyle(d).display==="none";x==="true"||S||Array.from(d.childNodes).forEach(B=>{b+=Re(B)})}return b=b.trim(),b===""?"":b+" "}function ft(){setInterval(()=>{p.wrapper.scrollTop===0&&p.wrapper.scrollLeft===0||(p.wrapper.scrollTop=0,p.wrapper.scrollLeft=0)},1e3)}function On(){document.addEventListener("fullscreenchange",Qt),document.addEventListener("webkitfullscreenchange",Qt)}function $n(){g.postMessage&&window.addEventListener("message",hn,!1)}function Le(d){let b={...g};if(typeof d=="object"&&Ce(g,d),a.isReady()===!1)return;let x=p.wrapper.querySelectorAll(".slides section").length;p.wrapper.classList.remove(b.transition),p.wrapper.classList.add(g.transition),p.wrapper.setAttribute("data-transition-speed",g.transitionSpeed),p.wrapper.setAttribute("data-background-transition",g.backgroundTransition),p.viewport.style.setProperty("--slide-width",g.width+"px"),p.viewport.style.setProperty("--slide-height",g.height+"px"),g.shuffle&&Ie(),Fi(p.wrapper,"embedded",g.embedded),Fi(p.wrapper,"rtl",g.rtl),Fi(p.wrapper,"center",g.center),g.pause===!1&&se(),g.previewLinks?(ge(),Te("[data-preview-link=false]")):(Te(),ge("[data-preview-link]:not([data-preview-link=false])")),ot.reset(),y&&(y.destroy(),y=null),x>1&&g.autoSlide&&g.autoSlideStoppable&&(y=new Vi(p.wrapper,()=>Math.min(Math.max((Date.now()-Pt)/V,0),1)),y.on("click",Zn),G=!1),g.navigationMode!=="default"?p.wrapper.setAttribute("data-navigation-mode",g.navigationMode):p.wrapper.removeAttribute("data-navigation-mode"),tt.configure(g,b),yt.configure(g,b),Y.configure(g,b),lt.configure(g,b),A.configure(g,b),ct.configure(g,b),I.configure(g,b),J.configure(g,b),me()}function Qe(){window.addEventListener("resize",gn,!1),g.touch&&Mt.bind(),g.keyboard&&ct.bind(),g.progress&&A.bind(),g.respondToHashChanges&&it.bind(),lt.bind(),yt.bind(),p.slides.addEventListener("click",pn,!1),p.slides.addEventListener("transitionend",Tt,!1),p.pauseOverlay.addEventListener("click",se,!1),g.focusBodyOnPageVisibilityChange&&document.addEventListener("visibilitychange",fn,!1)}function ie(){Mt.unbind(),yt.unbind(),ct.unbind(),lt.unbind(),A.unbind(),it.unbind(),window.removeEventListener("resize",gn,!1),p.slides.removeEventListener("click",pn,!1),p.slides.removeEventListener("transitionend",Tt,!1),p.pauseOverlay.removeEventListener("click",se,!1)}function Un(){ie(),be(),Te(),tt.destroy(),yt.destroy(),Z.destroy(),Y.destroy(),lt.destroy(),A.destroy(),Q.destroy(),J.destroy(),document.removeEventListener("fullscreenchange",Qt),document.removeEventListener("webkitfullscreenchange",Qt),document.removeEventListener("visibilitychange",fn,!1),window.removeEventListener("message",hn,!1),window.removeEventListener("load",Ot,!1),p.pauseOverlay&&p.pauseOverlay.remove(),p.statusElement&&p.statusElement.remove(),document.documentElement.classList.remove("reveal-full-page"),p.wrapper.classList.remove("ready","center","has-horizontal-slides","has-vertical-slides"),p.wrapper.removeAttribute("data-transition-speed"),p.wrapper.removeAttribute("data-background-transition"),p.viewport.classList.remove("reveal-viewport"),p.viewport.style.removeProperty("--slide-width"),p.viewport.style.removeProperty("--slide-height"),p.slides.style.removeProperty("width"),p.slides.style.removeProperty("height"),p.slides.style.removeProperty("zoom"),p.slides.style.removeProperty("left"),p.slides.style.removeProperty("top"),p.slides.style.removeProperty("bottom"),p.slides.style.removeProperty("right"),p.slides.style.removeProperty("transform"),Array.from(p.wrapper.querySelectorAll(".slides section")).forEach(d=>{d.style.removeProperty("display"),d.style.removeProperty("top"),d.removeAttribute("hidden"),d.removeAttribute("aria-hidden")})}function Ge(d,b,x){D.addEventListener(d,b,x)}function _t(d,b,x){D.removeEventListener(d,b,x)}function Ct(d){typeof d.layout=="string"&&(_.layout=d.layout),typeof d.overview=="string"&&(_.overview=d.overview),_.layout?ne(p.slides,_.layout+" "+_.overview):ne(p.slides,_.overview)}function pt({target:d=p.wrapper,type:b,data:x,bubbles:S=!0}){let B=document.createEvent("HTMLEvents",1,2);return B.initEvent(b,S,!0),Ce(B,x),d.dispatchEvent(B),d===p.wrapper&&tn(b),B}function tn(d,b){if(g.postMessageEvents&&window.parent!==window.self){let x={namespace:"reveal",eventName:d,state:cn()};Ce(x,b),window.parent.postMessage(JSON.stringify(x),"*")}}function ge(d="a"){Array.from(p.wrapper.querySelectorAll(d)).forEach(b=>{/^(http|www)/gi.test(b.getAttribute("href"))&&b.addEventListener("click",mn,!1)})}function Te(d="a"){Array.from(p.wrapper.querySelectorAll(d)).forEach(b=>{/^(http|www)/gi.test(b.getAttribute("href"))&&b.removeEventListener("click",mn,!1)})}function Be(d){Ft(),p.overlay=document.createElement("div"),p.overlay.classList.add("overlay"),p.overlay.classList.add("overlay-preview"),p.wrapper.appendChild(p.overlay),p.overlay.innerHTML=`<header>
				<a class="close" href="#"><span class="icon"></span></a>
				<a class="external" href="${d}" target="_blank"><span class="icon"></span></a>
			</header>
			<div class="spinner"></div>
			<div class="viewport">
				<iframe src="${d}"></iframe>
				<small class="viewport-inner">
					<span class="x-frame-error">Unable to load iframe. This is likely due to the site's policy (x-frame-options).</span>
				</small>
			</div>`,p.overlay.querySelector("iframe").addEventListener("load",b=>{p.overlay.classList.add("loaded")},!1),p.overlay.querySelector(".close").addEventListener("click",b=>{Ft(),b.preventDefault()},!1),p.overlay.querySelector(".external").addEventListener("click",b=>{Ft()},!1)}function Pe(d){typeof d=="boolean"?d?fe():Ft():p.overlay?Ft():fe()}function fe(){if(g.help){Ft(),p.overlay=document.createElement("div"),p.overlay.classList.add("overlay"),p.overlay.classList.add("overlay-help"),p.wrapper.appendChild(p.overlay);let d='<p class="title">Keyboard Shortcuts</p><br/>',b=ct.getShortcuts(),x=ct.getBindings();d+="<table><th>KEY</th><th>ACTION</th>";for(let S in b)d+=`<tr><td>${S}</td><td>${b[S]}</td></tr>`;for(let S in x)x[S].key&&x[S].description&&(d+=`<tr><td>${x[S].key}</td><td>${x[S].description}</td></tr>`);d+="</table>",p.overlay.innerHTML=`
				<header>
					<a class="close" href="#"><span class="icon"></span></a>
				</header>
				<div class="viewport">
					<div class="viewport-inner">${d}</div>
				</div>
			`,p.overlay.querySelector(".close").addEventListener("click",S=>{Ft(),S.preventDefault()},!1)}}function Ft(){return!!p.overlay&&(p.overlay.parentNode.removeChild(p.overlay),p.overlay=null,!0)}function Ot(){if(p.wrapper&&!vt.isPrintingPDF()){if(!g.disableLayout){pe&&!g.embedded&&document.documentElement.style.setProperty("--vh",.01*window.innerHeight+"px");let d=Me(),b=R;en(g.width,g.height),p.slides.style.width=d.width+"px",p.slides.style.height=d.height+"px",R=Math.min(d.presentationWidth/d.width,d.presentationHeight/d.height),R=Math.max(R,g.minScale),R=Math.min(R,g.maxScale),R===1?(p.slides.style.zoom="",p.slides.style.left="",p.slides.style.top="",p.slides.style.bottom="",p.slides.style.right="",Ct({layout:""})):R>1&&Yu&&window.devicePixelRatio<2?(p.slides.style.zoom=R,p.slides.style.left="",p.slides.style.top="",p.slides.style.bottom="",p.slides.style.right="",Ct({layout:""})):(p.slides.style.zoom="",p.slides.style.left="50%",p.slides.style.top="50%",p.slides.style.bottom="auto",p.slides.style.right="auto",Ct({layout:"translate(-50%, -50%) scale("+R+")"}));let x=Array.from(p.wrapper.querySelectorAll(".slides section"));for(let S=0,B=x.length;S<B;S++){let j=x[S];j.style.display!=="none"&&(g.center||j.classList.contains("center")?j.classList.contains("stack")?j.style.top=0:j.style.top=Math.max((d.height-j.scrollHeight)/2,0)+"px":j.style.top="")}b!==R&&pt({type:"resize",data:{oldScale:b,scale:R,size:d}})}A.update(),Q.updateParallax(),W.isActive()&&W.update()}}function en(d,b){N(p.slides,"section > .stretch, section > .r-stretch").forEach(x=>{let S=ju(x,b);if(/(img|video)/gi.test(x.nodeName)){let B=x.naturalWidth||x.videoWidth,j=x.naturalHeight||x.videoHeight,et=Math.min(d/B,S/j);x.style.width=B*et+"px",x.style.height=j*et+"px"}else x.style.width=d+"px",x.style.height=S+"px"})}function Me(d,b){let x={width:g.width,height:g.height,presentationWidth:d||p.wrapper.offsetWidth,presentationHeight:b||p.wrapper.offsetHeight};return x.presentationWidth-=x.presentationWidth*g.margin,x.presentationHeight-=x.presentationHeight*g.margin,typeof x.width=="string"&&/%$/.test(x.width)&&(x.width=parseInt(x.width,10)/100*x.presentationWidth),typeof x.height=="string"&&/%$/.test(x.height)&&(x.height=parseInt(x.height,10)/100*x.presentationHeight),x}function nn(d,b){typeof d=="object"&&typeof d.setAttribute=="function"&&d.setAttribute("data-previous-indexv",b||0)}function re(d){if(typeof d=="object"&&typeof d.setAttribute=="function"&&d.classList.contains("stack")){let b=d.hasAttribute("data-start-indexv")?"data-start-indexv":"data-previous-indexv";return parseInt(d.getAttribute(b)||0,10)}return 0}function Wt(d=f){return d&&d.parentNode&&!!d.parentNode.nodeName.match(/section/i)}function ae(){return!(!f||!Wt(f))&&!f.nextElementSibling}function Kt(){return s===0&&u===0}function Vt(){return!!f&&!f.nextElementSibling&&(!Wt(f)||!f.parentNode.nextElementSibling)}function rn(){if(g.pause){let d=p.wrapper.classList.contains("paused");be(),p.wrapper.classList.add("paused"),d===!1&&pt({type:"paused"})}}function se(){let d=p.wrapper.classList.contains("paused");p.wrapper.classList.remove("paused"),Yt(),d&&pt({type:"resumed"})}function Ne(d){typeof d=="boolean"?d?rn():se():oe()?se():rn()}function oe(){return p.wrapper.classList.contains("paused")}function qn(d){typeof d=="boolean"?d?Zt():Xt():G?Zt():Xt()}function an(){return!(!V||G)}function bt(d,b,x,S){if(pt({type:"beforeslidechange",data:{indexh:d===void 0?s:d,indexv:b===void 0?u:b,origin:S}}).defaultPrevented)return;m=f;let B=p.wrapper.querySelectorAll(".slides>section");if(B.length===0)return;b!==void 0||W.isActive()||(b=re(B[d])),m&&m.parentNode&&m.parentNode.classList.contains("stack")&&nn(m.parentNode,u);let j=C.concat();C.length=0;let et=s||0,At=u||0;s=ve(".slides>section",d===void 0?s:d),u=ve(".slides>section.present>section",b===void 0?u:b);let gt=s!==et||u!==At;gt||(m=null);let nt=B[s];f=nt.querySelectorAll("section")[u]||nt;let St=!1;gt&&m&&f&&!W.isActive()&&(m.hasAttribute("data-auto-animate")&&f.hasAttribute("data-auto-animate")&&m.getAttribute("data-auto-animate-id")===f.getAttribute("data-auto-animate-id")&&!(s>et||u>At?f:m).hasAttribute("data-auto-animate-restart")&&(St=!0,p.slides.classList.add("disable-slide-transitions")),dt="running"),le(),Ot(),W.isActive()&&W.update(),x!==void 0&&I.goto(x),m&&m!==f&&(m.classList.remove("present"),m.setAttribute("aria-hidden","true"),Kt()&&setTimeout(()=>{Wn().forEach(qt=>{nn(qt,0)})},0));t:for(let qt=0,Jn=C.length;qt<Jn;qt++){for(let De=0;De<j.length;De++)if(j[De]===C[qt]){j.splice(De,1);continue t}p.viewport.classList.add(C[qt]),pt({type:C[qt]})}for(;j.length;)p.viewport.classList.remove(j.pop());gt&&pt({type:"slidechanged",data:{indexh:s,indexv:u,previousSlide:m,currentSlide:f,origin:S}}),!gt&&m||(H.stopEmbeddedContent(m),H.startEmbeddedContent(f)),requestAnimationFrame(()=>{Et(Re(f))}),A.update(),lt.update(),tt.update(),Q.update(),Q.updateParallax(),J.update(),I.update(),it.writeURL(),Yt(),St&&(setTimeout(()=>{p.slides.classList.remove("disable-slide-transitions")},0),g.autoAnimate&&ot.run(m,f))}function me(){ie(),Qe(),Ot(),V=g.autoSlide,Yt(),Q.create(),it.writeURL(),I.sortAll(),lt.update(),A.update(),le(),tt.update(),tt.updateVisibility(),Q.update(!0),J.update(),H.formatEmbeddedContent(),g.autoPlayMedia===!1?H.stopEmbeddedContent(f,{unloadIframes:!1}):H.startEmbeddedContent(f),W.isActive()&&W.layout()}function Hn(d=f){Q.sync(d),I.sync(d),H.load(d),Q.update(),tt.update()}function jn(){Nt().forEach(d=>{N(d,"section").forEach((b,x)=>{x>0&&(b.classList.remove("present"),b.classList.remove("past"),b.classList.add("future"),b.setAttribute("aria-hidden","true"))})})}function Ie(d=Nt()){d.forEach((b,x)=>{let S=d[Math.floor(Math.random()*d.length)];S.parentNode===b.parentNode&&b.parentNode.insertBefore(b,S);let B=b.querySelectorAll("section");B.length&&Ie(B)})}function ve(d,b){let x=N(p.wrapper,d),S=x.length,B=vt.isPrintingPDF();if(S){g.loop&&(b%=S)<0&&(b=S+b),b=Math.max(Math.min(b,S-1),0);for(let gt=0;gt<S;gt++){let nt=x[gt],xt=g.rtl&&!Wt(nt);nt.classList.remove("past"),nt.classList.remove("present"),nt.classList.remove("future"),nt.setAttribute("hidden",""),nt.setAttribute("aria-hidden","true"),nt.querySelector("section")&&nt.classList.add("stack"),B?nt.classList.add("present"):gt<b?(nt.classList.add(xt?"future":"past"),g.fragments&&N(nt,".fragment").forEach(St=>{St.classList.add("visible"),St.classList.remove("current-fragment")})):gt>b&&(nt.classList.add(xt?"past":"future"),g.fragments&&N(nt,".fragment.visible").forEach(St=>{St.classList.remove("visible","current-fragment")}))}let j=x[b],et=j.classList.contains("present");j.classList.add("present"),j.removeAttribute("hidden"),j.removeAttribute("aria-hidden"),et||pt({target:j,type:"visible",bubbles:!1});let At=j.getAttribute("data-state");At&&(C=C.concat(At.split(" ")))}else b=0;return b}function le(){let d,b,x=Nt(),S=x.length;if(S&&s!==void 0){let B=W.isActive()?10:g.viewDistance;pe&&(B=W.isActive()?6:g.mobileViewDistance),vt.isPrintingPDF()&&(B=Number.MAX_VALUE);for(let j=0;j<S;j++){let et=x[j],At=N(et,"section"),gt=At.length;if(d=Math.abs((s||0)-j)||0,g.loop&&(d=Math.abs(((s||0)-j)%(S-B))||0),d<B?H.load(et):H.unload(et),gt){let nt=re(et);for(let xt=0;xt<gt;xt++){let St=At[xt];b=Math.abs(j===(s||0)?(u||0)-xt:xt-nt),d+b<B?H.load(St):H.unload(St)}}}ye()?p.wrapper.classList.add("has-vertical-slides"):p.wrapper.classList.remove("has-vertical-slides"),$t()?p.wrapper.classList.add("has-horizontal-slides"):p.wrapper.classList.remove("has-horizontal-slides")}}function Rt({includeFragments:d=!1}={}){let b=p.wrapper.querySelectorAll(".slides>section"),x=p.wrapper.querySelectorAll(".slides>section.present>section"),S={left:s>0,right:s<b.length-1,up:u>0,down:u<x.length-1};if(g.loop&&(b.length>1&&(S.left=!0,S.right=!0),x.length>1&&(S.up=!0,S.down=!0)),b.length>1&&g.navigationMode==="linear"&&(S.right=S.right||S.down,S.left=S.left||S.up),d===!0){let B=I.availableRoutes();S.left=S.left||B.prev,S.up=S.up||B.prev,S.down=S.down||B.next,S.right=S.right||B.next}if(g.rtl){let B=S.left;S.left=S.right,S.right=B}return S}function sn(d=f){let b=Nt(),x=0;t:for(let S=0;S<b.length;S++){let B=b[S],j=B.querySelectorAll("section");for(let et=0;et<j.length;et++){if(j[et]===d)break t;j[et].dataset.visibility!=="uncounted"&&x++}if(B===d)break;B.classList.contains("stack")===!1&&B.dataset.visibility!=="uncounted"&&x++}return x}function on(){let d=_e(),b=sn();if(f){let x=f.querySelectorAll(".fragment");if(x.length>0){let S=.9;b+=f.querySelectorAll(".fragment.visible").length/x.length*S}}return Math.min(b/(d-1),1)}function ln(d){let b,x=s,S=u;if(d){let B=Wt(d),j=B?d.parentNode:d,et=Nt();x=Math.max(et.indexOf(j),0),S=void 0,B&&(S=Math.max(N(d.parentNode,"section").indexOf(d),0))}if(!d&&f&&f.querySelectorAll(".fragment").length>0){let B=f.querySelector(".current-fragment");b=B&&B.hasAttribute("data-fragment-index")?parseInt(B.getAttribute("data-fragment-index"),10):f.querySelectorAll(".fragment.visible").length-1}return{h:x,v:S,f:b}}function Lt(){return N(p.wrapper,'.slides section:not(.stack):not([data-visibility="uncounted"])')}function Nt(){return N(p.wrapper,".slides>section")}function ze(){return N(p.wrapper,".slides>section>section")}function Wn(){return N(p.wrapper,".slides>section.stack")}function $t(){return Nt().length>1}function ye(){return ze().length>1}function Kn(){return Lt().map(d=>{let b={};for(let x=0;x<d.attributes.length;x++){let S=d.attributes[x];b[S.name]=S.value}return b})}function _e(){return Lt().length}function un(d,b){let x=Nt()[d],S=x&&x.querySelectorAll("section");return S&&S.length&&typeof b=="number"?S?S[b]:void 0:x}function Vn(d,b){let x=typeof d=="number"?un(d,b):d;if(x)return x.slideBackgroundElement}function cn(){let d=ln();return{indexh:d.h,indexv:d.v,indexf:d.f,paused:oe(),overview:W.isActive()}}function Yn(d){if(typeof d=="object"){bt(Se(d.indexh),Se(d.indexv),Se(d.indexf));let b=Se(d.paused),x=Se(d.overview);typeof b=="boolean"&&b!==oe()&&Ne(b),typeof x=="boolean"&&x!==W.isActive()&&W.toggle(x)}}function Yt(){if(be(),f&&g.autoSlide!==!1){let d=f.querySelector(".current-fragment");d||(d=f.querySelector(".fragment"));let b=d?d.getAttribute("data-autoslide"):null,x=f.parentNode?f.parentNode.getAttribute("data-autoslide"):null,S=f.getAttribute("data-autoslide");b?V=parseInt(b,10):S?V=parseInt(S,10):x?V=parseInt(x,10):(V=g.autoSlide,f.querySelectorAll(".fragment").length===0&&N(f,"video, audio").forEach(B=>{B.hasAttribute("data-autoplay")&&V&&1e3*B.duration/B.playbackRate>V&&(V=1e3*B.duration/B.playbackRate+1e3)})),!V||G||oe()||W.isActive()||Vt()&&!I.availableRoutes().next&&g.loop!==!0||(kt=setTimeout(()=>{typeof g.autoSlideMethod=="function"?g.autoSlideMethod():Ut(),Yt()},V),Pt=Date.now()),y&&y.setPlaying(kt!==-1)}}function be(){clearTimeout(kt),kt=-1}function Xt(){V&&!G&&(G=!0,pt({type:"autoslidepaused"}),clearTimeout(kt),y&&y.setPlaying(!1))}function Zt(){V&&G&&(G=!1,pt({type:"autoslideresumed"}),Yt())}function ue({skipFragments:d=!1}={}){q.hasNavigatedHorizontally=!0,g.rtl?(W.isActive()||d||I.next()===!1)&&Rt().left&&bt(s+1,g.navigationMode==="grid"?u:void 0):(W.isActive()||d||I.prev()===!1)&&Rt().left&&bt(s-1,g.navigationMode==="grid"?u:void 0)}function Jt({skipFragments:d=!1}={}){q.hasNavigatedHorizontally=!0,g.rtl?(W.isActive()||d||I.prev()===!1)&&Rt().right&&bt(s-1,g.navigationMode==="grid"?u:void 0):(W.isActive()||d||I.next()===!1)&&Rt().right&&bt(s+1,g.navigationMode==="grid"?u:void 0)}function ce({skipFragments:d=!1}={}){(W.isActive()||d||I.prev()===!1)&&Rt().up&&bt(s,u-1)}function Oe({skipFragments:d=!1}={}){q.hasNavigatedVertically=!0,(W.isActive()||d||I.next()===!1)&&Rt().down&&bt(s,u+1)}function dn({skipFragments:d=!1}={}){if(d||I.prev()===!1)if(Rt().up)ce({skipFragments:d});else{let b;if(b=g.rtl?N(p.wrapper,".slides>section.future").pop():N(p.wrapper,".slides>section.past").pop(),b&&b.classList.contains("stack")){let x=b.querySelectorAll("section").length-1||void 0;bt(s-1,x)}else ue({skipFragments:d})}}function Ut({skipFragments:d=!1}={}){if(q.hasNavigatedHorizontally=!0,q.hasNavigatedVertically=!0,d||I.next()===!1){let b=Rt();b.down&&b.right&&g.loop&&ae()&&(b.down=!1),b.down?Oe({skipFragments:d}):g.rtl?ue({skipFragments:d}):Jt({skipFragments:d})}}function Xn(d){g.autoSlideStoppable&&Xt()}function hn(d){let b=d.data;if(typeof b=="string"&&b.charAt(0)==="{"&&b.charAt(b.length-1)==="}"&&(b=JSON.parse(b),b.method&&typeof a[b.method]=="function"))if(Zu.test(b.method)===!1){let x=a[b.method].apply(a,b.args);tn("callback",{method:b.method,result:x})}else console.warn('reveal.js: "'+b.method+'" is is blacklisted from the postMessage API')}function Tt(d){dt==="running"&&/section/gi.test(d.target.nodeName)&&(dt="idle",pt({type:"slidetransitionend",data:{indexh:s,indexv:u,previousSlide:m,currentSlide:f}}))}function pn(d){let b=ht(d.target,'a[href^="#"]');if(b){let x=b.getAttribute("href"),S=it.getIndicesFromHash(x);S&&(a.slide(S.h,S.v,S.f),d.preventDefault())}}function gn(d){Ot()}function fn(d){document.hidden===!1&&document.activeElement!==document.body&&(typeof document.activeElement.blur=="function"&&document.activeElement.blur(),document.body.focus())}function Qt(d){(document.fullscreenElement||document.webkitFullscreenElement)===p.wrapper&&(d.stopImmediatePropagation(),setTimeout(()=>{a.layout(),a.focus.focus()},1))}function mn(d){if(d.currentTarget&&d.currentTarget.hasAttribute("href")){let b=d.currentTarget.getAttribute("href");b&&(Be(b),d.preventDefault())}}function Zn(d){Vt()&&g.loop===!1?(bt(0,0),Zt()):G?Zt():Xt()}let vn={VERSION:"4.3.1",initialize:Mn,configure:Le,destroy:Un,sync:me,syncSlide:Hn,syncFragments:I.sync.bind(I),slide:bt,left:ue,right:Jt,up:ce,down:Oe,prev:dn,next:Ut,navigateLeft:ue,navigateRight:Jt,navigateUp:ce,navigateDown:Oe,navigatePrev:dn,navigateNext:Ut,navigateFragment:I.goto.bind(I),prevFragment:I.prev.bind(I),nextFragment:I.next.bind(I),on:Ge,off:_t,addEventListener:Ge,removeEventListener:_t,layout:Ot,shuffle:Ie,availableRoutes:Rt,availableFragments:I.availableRoutes.bind(I),toggleHelp:Pe,toggleOverview:W.toggle.bind(W),togglePause:Ne,toggleAutoSlide:qn,isFirstSlide:Kt,isLastSlide:Vt,isLastVerticalSlide:ae,isVerticalSlide:Wt,isPaused:oe,isAutoSliding:an,isSpeakerNotes:tt.isSpeakerNotesWindow.bind(tt),isOverview:W.isActive.bind(W),isFocused:yt.isFocused.bind(yt),isPrintingPDF:vt.isPrintingPDF.bind(vt),isReady:()=>$,loadSlide:H.load.bind(H),unloadSlide:H.unload.bind(H),showPreview:Be,hidePreview:Ft,addEventListeners:Qe,removeEventListeners:ie,dispatchEvent:pt,getState:cn,setState:Yn,getProgress:on,getIndices:ln,getSlidesAttributes:Kn,getSlidePastCount:sn,getTotalSlides:_e,getSlide:un,getPreviousSlide:()=>m,getCurrentSlide:()=>f,getSlideBackground:Vn,getSlideNotes:tt.getSlideNotes.bind(tt),getSlides:Lt,getHorizontalSlides:Nt,getVerticalSlides:ze,hasHorizontalSlides:$t,hasVerticalSlides:ye,hasNavigatedHorizontally:()=>q.hasNavigatedHorizontally,hasNavigatedVertically:()=>q.hasNavigatedVertically,addKeyBinding:ct.addKeyBinding.bind(ct),removeKeyBinding:ct.removeKeyBinding.bind(ct),triggerKey:ct.triggerKey.bind(ct),registerKeyboardShortcut:ct.registerKeyboardShortcut.bind(ct),getComputedSlideSize:Me,getScale:()=>R,getConfig:()=>g,getQueryHash:ha,getSlidePath:it.getHash.bind(it),getRevealElement:()=>D,getSlidesElement:()=>p.slides,getViewportElement:()=>p.viewport,getBackgroundsElement:()=>Q.element,registerPlugin:Z.registerPlugin.bind(Z),hasPlugin:Z.hasPlugin.bind(Z),getPlugin:Z.getPlugin.bind(Z),getPlugins:Z.getRegisteredPlugins.bind(Z)};return Ce(a,{...vn,announceStatus:Et,getStatusText:Re,print:vt,focus:yt,progress:A,controls:lt,location:it,overview:W,fragments:I,slideContent:H,slideNumber:J,onUserInput:Xn,closeOverlay:Ft,updateSlidesVisibility:le,layoutSlideContents:en,transformSlides:Ct,cueAutoSlide:Yt,cancelAutoSlide:be}),vn}var ee=Da,va=[];ee.initialize=D=>(Object.assign(ee,new Da(document.querySelector(".reveal"),D)),va.map(n=>n(ee)),ee.initialize()),["configure","on","off","addEventListener","removeEventListener","registerPlugin"].forEach(D=>{ee[D]=(...n)=>{va.push(a=>a[D].call(null,...n))}}),ee.isReady=()=>!1,ee.VERSION="4.3.1";var wa=ee;var Ea=qu(ka()),Fe=document.getElementById("branding-logo"),Bn=document.getElementById("refactor-logo"),Pn=document.getElementById("opening-footer"),Zi=new wa({plugins:[Ea.default],hash:!0,pdfSeparateFragments:!1});Zi.on("slidechanged",D=>{let n=D.currentSlide.dataset.backgroundColor==="white",a=D.currentSlide.dataset.opening==="true";Zi.configure({controls:!a}),a?(Pn.classList.remove("animate__fadeOutDown"),Bn.classList.remove("animate__fadeOut"),Fe.classList.remove("animate__fadeIn"),Pn.classList.add("animate__fadeInUp"),Bn.classList.add("animate__fadeIn"),Fe.classList.add("animate__fadeOut")):(Pn.classList.remove("animate__fadeInUp"),Bn.classList.remove("animate__fadeIn"),Fe.classList.remove("animate__fadeOut"),Pn.classList.add("animate__fadeOutDown"),Bn.classList.add("animate__fadeOut"),Fe.classList.add("animate__fadeIn")),n?Fe.src="assets/euricom-logo-light.png":Fe.src="assets/euricom-logo.png"});Zi.initialize();})();
/*!
* reveal.js 4.3.1
* https://revealjs.com
* MIT licensed
*
* Copyright (C) 2011-2022 Hakim El Hattab, https://hakim.se
*/
