"use strict";var __TAURI_IIFE__=(()=>{var S=Object.defineProperty;var fe=Object.getOwnPropertyDescriptor;var be=Object.getOwnPropertyNames;var _e=Object.prototype.hasOwnProperty;var c=(t,e)=>{for(var n in e)S(t,n,{get:e[n],enumerable:!0})},Pe=(t,e,n,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of be(e))!_e.call(t,s)&&s!==n&&S(t,s,{get:()=>e[s],enumerable:!(r=fe(e,s))||r.enumerable});return t};var we=t=>Pe(S({},"__esModule",{value:!0}),t);var an={};c(an,{app:()=>T,cli:()=>F,clipboard:()=>W,dialog:()=>A,event:()=>I,fs:()=>N,globalShortcut:()=>H,http:()=>V,invoke:()=>rn,notification:()=>G,os:()=>J,path:()=>j,process:()=>q,shell:()=>$,tauri:()=>C,updater:()=>Q,window:()=>Y});var T={};c(T,{getName:()=>De,getTauriVersion:()=>Ee,getVersion:()=>Le,hide:()=>Ue,show:()=>Re});var C={};c(C,{convertFileSrc:()=>Me,invoke:()=>f,transformCallback:()=>m});function ve(){return window.crypto.getRandomValues(new Uint32Array(1))[0]}function m(t,e=!1){let n=ve(),r=`_${n}`;return Object.defineProperty(window,r,{value:s=>(e&&Reflect.deleteProperty(window,r),t?.(s)),writable:!1,configurable:!0}),n}async function f(t,e={}){return new Promise((n,r)=>{let s=m(l=>{n(l),Reflect.deleteProperty(window,`_${o}`)},!0),o=m(l=>{r(l),Reflect.deleteProperty(window,`_${s}`)},!0);window.__TAURI_IPC__({cmd:t,callback:s,error:o,...e})})}function Me(t,e="asset"){let n=encodeURIComponent(t);return navigator.userAgent.includes("Windows")?`https://${e}.localhost/${n}`:`${e}://localhost/${n}`}async function i(t){return f("tauri",t)}async function Le(){return i({__tauriModule:"App",message:{cmd:"getAppVersion"}})}async function De(){return i({__tauriModule:"App",message:{cmd:"getAppName"}})}async function Ee(){return i({__tauriModule:"App",message:{cmd:"getTauriVersion"}})}async function Re(){return i({__tauriModule:"App",message:{cmd:"show"}})}async function Ue(){return i({__tauriModule:"App",message:{cmd:"hide"}})}var F={};c(F,{getMatches:()=>Oe});async function Oe(){return i({__tauriModule:"Cli",message:{cmd:"cliMatches"}})}var W={};c(W,{readText:()=>Ce,writeText:()=>Se});async function Se(t){return i({__tauriModule:"Clipboard",message:{cmd:"writeText",data:t}})}async function Ce(){return i({__tauriModule:"Clipboard",message:{cmd:"readText",data:null}})}var A={};c(A,{ask:()=>Ae,confirm:()=>xe,message:()=>We,open:()=>Te,save:()=>Fe});async function Te(t={}){return typeof t=="object"&&Object.freeze(t),i({__tauriModule:"Dialog",message:{cmd:"openDialog",options:t}})}async function Fe(t={}){return typeof t=="object"&&Object.freeze(t),i({__tauriModule:"Dialog",message:{cmd:"saveDialog",options:t}})}async function We(t,e){let n=typeof e=="string"?{title:e}:e;return i({__tauriModule:"Dialog",message:{cmd:"messageDialog",message:t.toString(),title:n?.title?.toString(),type:n?.type}})}async function Ae(t,e){let n=typeof e=="string"?{title:e}:e;return i({__tauriModule:"Dialog",message:{cmd:"askDialog",message:t.toString(),title:n?.title?.toString(),type:n?.type}})}async function xe(t,e){let n=typeof e=="string"?{title:e}:e;return i({__tauriModule:"Dialog",message:{cmd:"confirmDialog",message:t.toString(),title:n?.title?.toString(),type:n?.type}})}var I={};c(I,{TauriEvent:()=>M,emit:()=>L,listen:()=>x,once:()=>k});async function B(t,e){return i({__tauriModule:"Event",message:{cmd:"unlisten",event:t,eventId:e}})}async function w(t,e,n){await i({__tauriModule:"Event",message:{cmd:"emit",event:t,windowLabel:e,payload:n}})}async function b(t,e,n){return i({__tauriModule:"Event",message:{cmd:"listen",event:t,windowLabel:e,handler:m(n)}}).then(r=>async()=>B(t,r))}async function v(t,e,n){return b(t,e,r=>{n(r),B(t,r.id).catch(()=>{})})}var M=(u=>(u.WINDOW_RESIZED="tauri://resize",u.WINDOW_MOVED="tauri://move",u.WINDOW_CLOSE_REQUESTED="tauri://close-requested",u.WINDOW_CREATED="tauri://window-created",u.WINDOW_DESTROYED="tauri://destroyed",u.WINDOW_FOCUS="tauri://focus",u.WINDOW_BLUR="tauri://blur",u.WINDOW_SCALE_FACTOR_CHANGED="tauri://scale-change",u.WINDOW_THEME_CHANGED="tauri://theme-changed",u.WINDOW_FILE_DROP="tauri://file-drop",u.WINDOW_FILE_DROP_HOVER="tauri://file-drop-hover",u.WINDOW_FILE_DROP_CANCELLED="tauri://file-drop-cancelled",u.MENU="tauri://menu",u.CHECK_UPDATE="tauri://update",u.UPDATE_AVAILABLE="tauri://update-available",u.INSTALL_UPDATE="tauri://update-install",u.STATUS_UPDATE="tauri://update-status",u.DOWNLOAD_PROGRESS="tauri://update-download-progress",u))(M||{});async function x(t,e){return b(t,null,e)}async function k(t,e){return v(t,null,e)}async function L(t,e){return w(t,void 0,e)}var N={};c(N,{BaseDirectory:()=>D,FsFile:()=>_,SeekMode:()=>ee,close:()=>te,copyFile:()=>Ne,create:()=>Ie,exists:()=>Xe,fstat:()=>re,ftruncate:()=>ae,lstat:()=>Qe,mkdir:()=>He,open:()=>ze,read:()=>ne,readDir:()=>Ve,readFile:()=>Ge,readTextFile:()=>je,remove:()=>qe,rename:()=>$e,seek:()=>ie,stat:()=>Ke,truncate:()=>Ze,write:()=>se,writeFile:()=>Ye,writeTextFile:()=>Je});function d(){return navigator.appVersion.includes("Win")}var D=(a=>(a[a.Audio=1]="Audio",a[a.Cache=2]="Cache",a[a.Config=3]="Config",a[a.Data=4]="Data",a[a.LocalData=5]="LocalData",a[a.Desktop=6]="Desktop",a[a.Document=7]="Document",a[a.Download=8]="Download",a[a.Executable=9]="Executable",a[a.Font=10]="Font",a[a.Home=11]="Home",a[a.Picture=12]="Picture",a[a.Public=13]="Public",a[a.Runtime=14]="Runtime",a[a.Template=15]="Template",a[a.Video=16]="Video",a[a.Resource=17]="Resource",a[a.App=18]="App",a[a.Log=19]="Log",a[a.Temp=20]="Temp",a[a.AppConfig=21]="AppConfig",a[a.AppData=22]="AppData",a[a.AppLocalData=23]="AppLocalData",a[a.AppCache=24]="AppCache",a[a.AppLog=25]="AppLog",a))(D||{}),ee=(r=>(r[r.Start=0]="Start",r[r.Current=1]="Current",r[r.End=2]="End",r))(ee||{});function z(t){let e=!d();return{isFile:t.isFile,isDirectory:t.isDirectory,isSymlink:t.isSymlink,size:t.size,mtime:t.mtime!=null?new Date(t.mtime):null,atime:t.atime!=null?new Date(t.atime):null,birthtime:t.birthtime!=null?new Date(t.birthtime):null,dev:e?t.dev:null,ino:e?t.ino:null,mode:e?t.mode:null,nlink:e?t.nlink:null,uid:e?t.uid:null,gid:e?t.gid:null,rdev:e?t.rdev:null,blksize:e?t.blksize:null,blocks:e?t.blocks:null}}var _=class{constructor(e){this.rid=e}async read(e){return ne(this.rid,e)}async seek(e,n){return ie(this.rid,e,n)}async stat(){return re(this.rid)}async truncate(e){return ae(this.rid,e)}async write(e){return se(this.rid,e)}async close(){return te(this.rid)}};async function Ie(t,e){if(t instanceof URL&&t.protocol!=="file:")throw new TypeError("Must be a file URL.");let n=await i({__tauriModule:"Fs",message:{cmd:"create",path:t instanceof URL?t.toString():t,options:e}});return new _(n)}async function ze(t,e){if(t instanceof URL&&t.protocol!=="file:")throw new TypeError("Must be a file URL.");let n=await i({__tauriModule:"Fs",message:{cmd:"open",path:t instanceof URL?t.toString():t,options:e}});return new _(n)}async function te(t){return i({__tauriModule:"Fs",message:{cmd:"close",rid:t}})}async function Ne(t,e,n){if(t instanceof URL&&t.protocol!=="file:"||e instanceof URL&&e.protocol!=="file:")throw new TypeError("Must be a file URL.");return i({__tauriModule:"Fs",message:{cmd:"copyFile",fromPath:t instanceof URL?t.toString():t,toPath:e instanceof URL?e.toString():e,options:n}})}async function He(t,e){if(t instanceof URL&&t.protocol!=="file:")throw new TypeError("Must be a file URL.");return i({__tauriModule:"Fs",message:{cmd:"mkdir",path:t instanceof URL?t.toString():t,options:e}})}async function Ve(t,e){if(t instanceof URL&&t.protocol!=="file:")throw new TypeError("Must be a file URL.");return i({__tauriModule:"Fs",message:{cmd:"readDir",path:t instanceof URL?t.toString():t,options:e}})}async function ne(t,e){if(e.byteLength===0)return 0;let[n,r]=await i({__tauriModule:"Fs",message:{cmd:"read",rid:t,len:e.byteLength}});return e.set(n),r===0?null:r}async function Ge(t,e){if(t instanceof URL&&t.protocol!=="file:")throw new TypeError("Must be a file URL.");let n=await i({__tauriModule:"Fs",message:{cmd:"readFile",path:t instanceof URL?t.toString():t,options:e}});return Uint8Array.from(n)}async function je(t,e){if(t instanceof URL&&t.protocol!=="file:")throw new TypeError("Must be a file URL.");return i({__tauriModule:"Fs",message:{cmd:"readTextFile",path:t instanceof URL?t.toString():t,options:e}})}async function qe(t,e){if(t instanceof URL&&t.protocol!=="file:")throw new TypeError("Must be a file URL.");return i({__tauriModule:"Fs",message:{cmd:"remove",path:t instanceof URL?t.toString():t,options:e}})}async function $e(t,e,n){if(t instanceof URL&&t.protocol!=="file:"||e instanceof URL&&e.protocol!=="file:")throw new TypeError("Must be a file URL.");return i({__tauriModule:"Fs",message:{cmd:"rename",oldPath:t instanceof URL?t.toString():t,newPath:e instanceof URL?e.toString():e,options:n}})}async function ie(t,e,n){return i({__tauriModule:"Fs",message:{cmd:"seek",rid:t,offset:e,whence:n}})}async function Ke(t,e){let n=await i({__tauriModule:"Fs",message:{cmd:"stat",path:t instanceof URL?t.toString():t,options:e}});return z(n)}async function Qe(t,e){let n=await i({__tauriModule:"Fs",message:{cmd:"lstat",path:t instanceof URL?t.toString():t,options:e}});return z(n)}async function re(t){let e=await i({__tauriModule:"Fs",message:{cmd:"fstat",rid:t}});return z(e)}async function Ze(t,e,n){if(t instanceof URL&&t.protocol!=="file:")throw new TypeError("Must be a file URL.");return i({__tauriModule:"Fs",message:{cmd:"truncate",path:t instanceof URL?t.toString():t,len:e,options:n}})}async function ae(t,e){return i({__tauriModule:"Fs",message:{cmd:"ftruncate",rid:t,len:e}})}async function se(t,e){return i({__tauriModule:"Fs",message:{cmd:"write",rid:t,data:Array.from(e)}})}async function Ye(t,e,n){if(t instanceof URL&&t.protocol!=="file:")throw new TypeError("Must be a file URL.");return i({__tauriModule:"Fs",message:{cmd:"writeFile",path:t instanceof URL?t.toString():t,data:Array.from(e),options:n}})}async function Je(t,e,n){if(t instanceof URL&&t.protocol!=="file:")throw new TypeError("Must be a file URL.");return i({__tauriModule:"Fs",message:{cmd:"writeTextFile",path:t instanceof URL?t.toString():t,data:e,options:n}})}async function Xe(t,e){return i({__tauriModule:"Fs",message:{cmd:"exists",path:t,options:e}})}var H={};c(H,{isRegistered:()=>tt,register:()=>Be,registerAll:()=>et,unregister:()=>nt,unregisterAll:()=>it});async function Be(t,e){return i({__tauriModule:"GlobalShortcut",message:{cmd:"register",shortcut:t,handler:m(e)}})}async function et(t,e){return i({__tauriModule:"GlobalShortcut",message:{cmd:"registerAll",shortcuts:t,handler:m(e)}})}async function tt(t){return i({__tauriModule:"GlobalShortcut",message:{cmd:"isRegistered",shortcut:t}})}async function nt(t){return i({__tauriModule:"GlobalShortcut",message:{cmd:"unregister",shortcut:t}})}async function it(){return i({__tauriModule:"GlobalShortcut",message:{cmd:"unregisterAll"}})}var V={};c(V,{fetch:()=>rt});async function rt(t,e){let n=new Request(t,e),r=await n.arrayBuffer(),s=r.byteLength?Array.from(new Uint8Array(r)):null,[o,l]=await i({__tauriModule:"Http",message:{cmd:"fetch",method:n.method,url:n.url,headers:Array.from(n.headers.entries()),data:s}});l&&n.signal.addEventListener("abort",sn=>{i({__tauriModule:"Http",message:{cmd:"fetchCancel",rid:l}})});let{status:de,statusText:ge,url:pe,headers:ye,data:he}=await i({__tauriModule:"Http",message:{cmd:"fetchSend",rid:o}}),X=new Response(Uint8Array.from(he),{headers:ye,status:de,statusText:ge});return Object.defineProperty(X,"url",{value:pe}),X}var G={};c(G,{isPermissionGranted:()=>at,requestPermission:()=>st,sendNotification:()=>ot});async function at(){return window.Notification.permission!=="default"?Promise.resolve(window.Notification.permission==="granted"):i({__tauriModule:"Notification",message:{cmd:"isNotificationPermissionGranted"}})}async function st(){return window.Notification.requestPermission()}function ot(t){typeof t=="string"?new window.Notification(t):new window.Notification(t.title,t)}var j={};c(j,{BaseDirectory:()=>D,appCacheDir:()=>mt,appConfigDir:()=>oe,appDataDir:()=>ut,appDir:()=>lt,appLocalDataDir:()=>ct,appLogDir:()=>le,audioDir:()=>dt,basename:()=>zt,cacheDir:()=>gt,configDir:()=>pt,dataDir:()=>yt,delimiter:()=>Ft,desktopDir:()=>ht,dirname:()=>kt,documentDir:()=>ft,downloadDir:()=>bt,executableDir:()=>_t,extname:()=>It,fontDir:()=>Pt,homeDir:()=>wt,isAbsolute:()=>Nt,join:()=>xt,localDataDir:()=>vt,logDir:()=>St,normalize:()=>At,pictureDir:()=>Mt,publicDir:()=>Lt,resolve:()=>Wt,resolveResource:()=>Et,resourceDir:()=>Dt,runtimeDir:()=>Rt,sep:()=>Tt,tempDir:()=>Ct,templateDir:()=>Ut,videoDir:()=>Ot});async function lt(){return oe()}async function oe(){return i({__tauriModule:"Path",message:{cmd:"resolvePath",path:"",directory:21}})}async function ut(){return i({__tauriModule:"Path",message:{cmd:"resolvePath",path:"",directory:22}})}async function ct(){return i({__tauriModule:"Path",message:{cmd:"resolvePath",path:"",directory:23}})}async function mt(){return i({__tauriModule:"Path",message:{cmd:"resolvePath",path:"",directory:24}})}async function dt(){return i({__tauriModule:"Path",message:{cmd:"resolvePath",path:"",directory:1}})}async function gt(){return i({__tauriModule:"Path",message:{cmd:"resolvePath",path:"",directory:2}})}async function pt(){return i({__tauriModule:"Path",message:{cmd:"resolvePath",path:"",directory:3}})}async function yt(){return i({__tauriModule:"Path",message:{cmd:"resolvePath",path:"",directory:4}})}async function ht(){return i({__tauriModule:"Path",message:{cmd:"resolvePath",path:"",directory:6}})}async function ft(){return i({__tauriModule:"Path",message:{cmd:"resolvePath",path:"",directory:7}})}async function bt(){return i({__tauriModule:"Path",message:{cmd:"resolvePath",path:"",directory:8}})}async function _t(){return i({__tauriModule:"Path",message:{cmd:"resolvePath",path:"",directory:9}})}async function Pt(){return i({__tauriModule:"Path",message:{cmd:"resolvePath",path:"",directory:10}})}async function wt(){return i({__tauriModule:"Path",message:{cmd:"resolvePath",path:"",directory:11}})}async function vt(){return i({__tauriModule:"Path",message:{cmd:"resolvePath",path:"",directory:5}})}async function Mt(){return i({__tauriModule:"Path",message:{cmd:"resolvePath",path:"",directory:12}})}async function Lt(){return i({__tauriModule:"Path",message:{cmd:"resolvePath",path:"",directory:13}})}async function Dt(){return i({__tauriModule:"Path",message:{cmd:"resolvePath",path:"",directory:17}})}async function Et(t){return i({__tauriModule:"Path",message:{cmd:"resolvePath",path:t,directory:17}})}async function Rt(){return i({__tauriModule:"Path",message:{cmd:"resolvePath",path:"",directory:14}})}async function Ut(){return i({__tauriModule:"Path",message:{cmd:"resolvePath",path:"",directory:15}})}async function Ot(){return i({__tauriModule:"Path",message:{cmd:"resolvePath",path:"",directory:16}})}async function St(){return le()}async function le(){return i({__tauriModule:"Path",message:{cmd:"resolvePath",path:"",directory:25}})}async function Ct(){return i({__tauriModule:"Path",message:{cmd:"tempDir"}})}var Tt=d()?"\\":"/",Ft=d()?";":":";async function Wt(...t){return i({__tauriModule:"Path",message:{cmd:"resolve",paths:t}})}async function At(t){return i({__tauriModule:"Path",message:{cmd:"normalize",path:t}})}async function xt(...t){return i({__tauriModule:"Path",message:{cmd:"join",paths:t}})}async function kt(t){return i({__tauriModule:"Path",message:{cmd:"dirname",path:t}})}async function It(t){return i({__tauriModule:"Path",message:{cmd:"extname",path:t}})}async function zt(t,e){return i({__tauriModule:"Path",message:{cmd:"basename",path:t,ext:e}})}async function Nt(t){return i({__tauriModule:"Path",message:{cmd:"isAbsolute",path:t}})}var q={};c(q,{exit:()=>Ht,relaunch:()=>Vt});async function Ht(t=0){return i({__tauriModule:"Process",message:{cmd:"exit",exitCode:t}})}async function Vt(){return i({__tauriModule:"Process",message:{cmd:"relaunch"}})}var $={};c($,{Child:()=>E,Command:()=>P,EventEmitter:()=>p,open:()=>jt});async function Gt(t,e,n=[],r){return typeof n=="object"&&Object.freeze(n),i({__tauriModule:"Shell",message:{cmd:"execute",program:e,args:n,options:r,onEventFn:m(t)}})}var p=class{constructor(){this.eventListeners=Object.create(null)}addListener(e,n){return this.on(e,n)}removeListener(e,n){return this.off(e,n)}on(e,n){return e in this.eventListeners?this.eventListeners[e].push(n):this.eventListeners[e]=[n],this}once(e,n){let r=(...s)=>{this.removeListener(e,r),n(...s)};return this.addListener(e,r)}off(e,n){return e in this.eventListeners&&(this.eventListeners[e]=this.eventListeners[e].filter(r=>r!==n)),this}removeAllListeners(e){return e?delete this.eventListeners[e]:this.eventListeners=Object.create(null),this}emit(e,...n){if(e in this.eventListeners){let r=this.eventListeners[e];for(let s of r)s(...n);return!0}return!1}listenerCount(e){return e in this.eventListeners?this.eventListeners[e].length:0}prependListener(e,n){return e in this.eventListeners?this.eventListeners[e].unshift(n):this.eventListeners[e]=[n],this}prependOnceListener(e,n){let r=(...s)=>{this.removeListener(e,r),n(...s)};return this.prependListener(e,r)}},E=class{constructor(e){this.pid=e}async write(e){return i({__tauriModule:"Shell",message:{cmd:"stdinWrite",pid:this.pid,buffer:typeof e=="string"?e:Array.from(e)}})}async kill(){return i({__tauriModule:"Shell",message:{cmd:"killChild",pid:this.pid}})}},P=class extends p{constructor(n,r=[],s){super();this.stdout=new p;this.stderr=new p;this.program=n,this.args=typeof r=="string"?[r]:r,this.options=s??{}}static sidecar(n,r=[],s){let o=new P(n,r,s);return o.options.sidecar=!0,o}async spawn(){return Gt(n=>{switch(n.event){case"Error":this.emit("error",n.payload);break;case"Terminated":this.emit("close",n.payload);break;case"Stdout":this.stdout.emit("data",n.payload);break;case"Stderr":this.stderr.emit("data",n.payload);break}},this.program,this.args,this.options).then(n=>new E(n))}async execute(){return new Promise((n,r)=>{this.on("error",r);let s=[],o=[];this.stdout.on("data",l=>{s.push(l)}),this.stderr.on("data",l=>{o.push(l)}),this.on("close",l=>{n({code:l.code,signal:l.signal,stdout:s.join(`
`),stderr:o.join(`
`)})}),this.spawn().catch(r)})}};async function jt(t,e){return i({__tauriModule:"Shell",message:{cmd:"open",path:t,with:e}})}var Q={};c(Q,{checkUpdate:()=>$t,installUpdate:()=>qt,onUpdaterEvent:()=>K});async function K(t){return x("tauri://update-status",e=>{t(e?.payload)})}async function qt(){let t;function e(){t&&t(),t=void 0}return new Promise((n,r)=>{function s(o){if(o.error)return e(),r(o.error);if(o.status==="DONE")return e(),n()}K(s).then(o=>{t=o}).catch(o=>{throw e(),o}),L("tauri://update-install").catch(o=>{throw e(),o})})}async function $t(){let t;function e(){t&&t(),t=void 0}return new Promise((n,r)=>{function s(l){return e(),n({manifest:l,shouldUpdate:!0})}function o(l){if(l.error)return e(),r(l.error);if(l.status==="UPTODATE")return e(),n({shouldUpdate:!1})}k("tauri://update-available",l=>{s(l?.payload)}).catch(l=>{throw e(),l}),K(o).then(l=>{t=l}).catch(l=>{throw e(),l}),L("tauri://update").catch(l=>{throw e(),l})})}var Y={};c(Y,{CloseRequestedEvent:()=>O,LogicalPosition:()=>U,LogicalSize:()=>R,PhysicalPosition:()=>h,PhysicalSize:()=>y,UserAttentionType:()=>ce,Window:()=>g,availableMonitors:()=>Yt,currentMonitor:()=>Qt,getAll:()=>me,getCurrent:()=>Kt,primaryMonitor:()=>Zt});var R=class{constructor(e,n){this.type="Logical";this.width=e,this.height=n}},y=class{constructor(e,n){this.type="Physical";this.width=e,this.height=n}toLogical(e){return new R(this.width/e,this.height/e)}},U=class{constructor(e,n){this.type="Logical";this.x=e,this.y=n}},h=class{constructor(e,n){this.type="Physical";this.x=e,this.y=n}toLogical(e){return new U(this.x/e,this.y/e)}},ce=(n=>(n[n.Critical=1]="Critical",n[n.Informational=2]="Informational",n))(ce||{});function Kt(){return new g(window.__TAURI_METADATA__.__currentWindow.label,{skip:!0})}function me(){return window.__TAURI_METADATA__.__windows.map(t=>new g(t.label,{skip:!0}))}var ue=["tauri://created","tauri://error"],g=class{constructor(e,n={}){this.label=e,this.listeners=Object.create(null),n?.skip||i({__tauriModule:"Window",message:{cmd:"createWebview",data:{options:{label:e,...n}}}}).then(async()=>this.emit("tauri://created")).catch(async r=>this.emit("tauri://error",r))}static getByLabel(e){return me().some(n=>n.label===e)?new g(e,{skip:!0}):null}async listen(e,n){return this._handleTauriEvent(e,n)?Promise.resolve(()=>{let r=this.listeners[e];r.splice(r.indexOf(n),1)}):b(e,this.label,n)}async once(e,n){return this._handleTauriEvent(e,n)?Promise.resolve(()=>{let r=this.listeners[e];r.splice(r.indexOf(n),1)}):v(e,this.label,n)}async emit(e,n){if(ue.includes(e)){for(let r of this.listeners[e]||[])r({event:e,id:-1,windowLabel:this.label,payload:n});return Promise.resolve()}return w(e,this.label,n)}_handleTauriEvent(e,n){return ue.includes(e)?(e in this.listeners?this.listeners[e].push(n):this.listeners[e]=[n],!0):!1}async scaleFactor(){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"scaleFactor"}}}})}async innerPosition(){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"innerPosition"}}}}).then(({x:e,y:n})=>new h(e,n))}async outerPosition(){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"outerPosition"}}}}).then(({x:e,y:n})=>new h(e,n))}async innerSize(){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"innerSize"}}}}).then(({width:e,height:n})=>new y(e,n))}async outerSize(){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"outerSize"}}}}).then(({width:e,height:n})=>new y(e,n))}async isFullscreen(){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"isFullscreen"}}}})}async isMaximized(){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"isMaximized"}}}})}async isDecorated(){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"isDecorated"}}}})}async isResizable(){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"isResizable"}}}})}async isVisible(){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"isVisible"}}}})}async theme(){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"theme"}}}})}async center(){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"center"}}}})}async requestUserAttention(e){let n=null;return e&&(e===1?n={type:"Critical"}:n={type:"Informational"}),i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"requestUserAttention",payload:n}}}})}async setResizable(e){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setResizable",payload:e}}}})}async setTitle(e){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setTitle",payload:e}}}})}async maximize(){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"maximize"}}}})}async unmaximize(){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"unmaximize"}}}})}async toggleMaximize(){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"toggleMaximize"}}}})}async minimize(){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"minimize"}}}})}async unminimize(){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"unminimize"}}}})}async show(){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"show"}}}})}async hide(){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"hide"}}}})}async close(){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"close"}}}})}async setDecorations(e){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setDecorations",payload:e}}}})}async setAlwaysOnTop(e){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setAlwaysOnTop",payload:e}}}})}async setSize(e){if(!e||e.type!=="Logical"&&e.type!=="Physical")throw new Error("the `size` argument must be either a LogicalSize or a PhysicalSize instance");return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setSize",payload:{type:e.type,data:{width:e.width,height:e.height}}}}}})}async setMinSize(e){if(e&&e.type!=="Logical"&&e.type!=="Physical")throw new Error("the `size` argument must be either a LogicalSize or a PhysicalSize instance");return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setMinSize",payload:e?{type:e.type,data:{width:e.width,height:e.height}}:null}}}})}async setMaxSize(e){if(e&&e.type!=="Logical"&&e.type!=="Physical")throw new Error("the `size` argument must be either a LogicalSize or a PhysicalSize instance");return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setMaxSize",payload:e?{type:e.type,data:{width:e.width,height:e.height}}:null}}}})}async setPosition(e){if(!e||e.type!=="Logical"&&e.type!=="Physical")throw new Error("the `position` argument must be either a LogicalPosition or a PhysicalPosition instance");return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setPosition",payload:{type:e.type,data:{x:e.x,y:e.y}}}}}})}async setFullscreen(e){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setFullscreen",payload:e}}}})}async setFocus(){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setFocus"}}}})}async setIcon(e){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setIcon",payload:{icon:typeof e=="string"?e:Array.from(e)}}}}})}async setSkipTaskbar(e){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setSkipTaskbar",payload:e}}}})}async setCursorGrab(e){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setCursorGrab",payload:e}}}})}async setCursorVisible(e){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setCursorVisible",payload:e}}}})}async setCursorIcon(e){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setCursorIcon",payload:e}}}})}async setCursorPosition(e){if(!e||e.type!=="Logical"&&e.type!=="Physical")throw new Error("the `position` argument must be either a LogicalPosition or a PhysicalPosition instance");return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setCursorPosition",payload:{type:e.type,data:{x:e.x,y:e.y}}}}}})}async setIgnoreCursorEvents(e){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setIgnoreCursorEvents",payload:e}}}})}async startDragging(){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"startDragging"}}}})}async onResized(e){return this.listen("tauri://resize",e)}async onMoved(e){return this.listen("tauri://move",e)}async onCloseRequested(e){return this.listen("tauri://close-requested",n=>{let r=new O(n);Promise.resolve(e(r)).then(()=>{if(!r.isPreventDefault())return this.close()})})}async onFocusChanged(e){let n=await this.listen("tauri://focus",s=>{e({...s,payload:!0})}),r=await this.listen("tauri://blur",s=>{e({...s,payload:!1})});return()=>{n(),r()}}async onScaleChanged(e){return this.listen("tauri://scale-change",e)}async onMenuClicked(e){return this.listen("tauri://menu",e)}async onFileDropEvent(e){let n=await this.listen("tauri://file-drop",o=>{e({...o,payload:{type:"drop",paths:o.payload}})}),r=await this.listen("tauri://file-drop-hover",o=>{e({...o,payload:{type:"hover",paths:o.payload}})}),s=await this.listen("tauri://file-drop-cancelled",o=>{e({...o,payload:{type:"cancel"}})});return()=>{n(),r(),s()}}async onThemeChanged(e){return this.listen("tauri://theme-changed",e)}},O=class{constructor(e){this._preventDefault=!1;this.event=e.event,this.windowLabel=e.windowLabel,this.id=e.id}preventDefault(){this._preventDefault=!0}isPreventDefault(){return this._preventDefault}};function Z(t){return t===null?null:{name:t.name,scaleFactor:t.scaleFactor,position:new h(t.position.x,t.position.y),size:new y(t.size.width,t.size.height)}}async function Qt(){return i({__tauriModule:"Window",message:{cmd:"manage",data:{cmd:{type:"currentMonitor"}}}}).then(Z)}async function Zt(){return i({__tauriModule:"Window",message:{cmd:"manage",data:{cmd:{type:"primaryMonitor"}}}}).then(Z)}async function Yt(){return i({__tauriModule:"Window",message:{cmd:"manage",data:{cmd:{type:"availableMonitors"}}}}).then(t=>t.map(Z))}var J={};c(J,{EOL:()=>Jt,arch:()=>en,hostname:()=>nn,platform:()=>Xt,tempDir:()=>tn,version:()=>Bt});var Jt=d()?`\r
`:`
`;async function Xt(){return i({__tauriModule:"Os",message:{cmd:"platform"}})}async function Bt(){return i({__tauriModule:"Os",message:{cmd:"version"}})}async function en(){return i({__tauriModule:"Os",message:{cmd:"arch"}})}async function tn(){return i({__tauriModule:"Os",message:{cmd:"tempDir"}})}async function nn(){return i({__tauriModule:"Os",message:{cmd:"hostname"}})}var rn=f;return we(an);})();
window.__TAURI__ = __TAURI_IIFE__
