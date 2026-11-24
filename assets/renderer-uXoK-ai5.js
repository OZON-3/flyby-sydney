import{U as Hf,V as th,W as ni,X as Gf,Y as Vf,Z as zl,$ as Wf,a0 as nh,a1 as ih,a2 as xr,g as Xf,a3 as aa,a4 as wc,a5 as oi,a6 as qf,D as Yf,E as $f,a7 as sh,K as va,a8 as Kf,a9 as Er,aa as Zf,ab as jf,ac as bc,ad as Jf,J as Qf,ae as ed,A as td,af as nd,ag as id,ah as sd,ai as rd,aj as ad,ak as od}from"./index-CG-iHTWJ.js";import{G as Xe,P as le,o as zn,C as ld}from"./game-BoECYWP7.js";/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Hl="187",cd=0,Ec=1,ud=2,hd=0,ir=1,fd=2,er=3,ns=0,gn=1,Bn=2,Cs=0,Ps=1,_a=2,Tc=3,Ac=4,dd=5,Ts=100,pd=101,md=102,gd=103,xd=104,vd=200,_d=201,Md=202,Sd=203,rh=204,ah=205,yd=206,wd=207,bd=208,Ed=209,Td=210,Ad=211,Rd=212,Cd=213,Pd=214,Go=0,Ma=1,Vo=2,cr=3,Wo=4,Xo=5,qo=6,Yo=7,Da=0,Ld=1,Dd=2,_i=0,oh=1,lh=2,ch=3,uh=4,hh=5,fh=6,dh=7,ph=300,Ns=301,ur=302,Ga=303,Va=304,hr=1e3,vi=1001,$o=1002,_t=1003,Id=1004,Tr=1005,Ft=1006,Wa=1007,Jn=1008,an=1009,mh=1010,gh=1011,fr=1012,Gl=1013,ii=1014,En=1015,si=1016,Vl=1017,Wl=1018,Fs=1020,xh=35902,vh=35899,_h=1021,Mh=1022,Rn=1023,Oi=1026,Ui=1027,vr=1028,Xl=1029,is=1030,ql=1031,Yl=1033,oa=33776,la=33777,ca=33778,ua=33779,Ko=35840,Zo=35841,jo=35842,Jo=35843,Qo=36196,el=37492,tl=37496,nl=37488,il=37489,Sa=37490,sl=37491,rl=37808,al=37809,ol=37810,ll=37811,cl=37812,ul=37813,hl=37814,fl=37815,dl=37816,pl=37817,ml=37818,gl=37819,xl=37820,vl=37821,_l=36492,Ml=36494,Sl=36495,yl=36283,wl=36284,ya=36285,bl=36286,Nd=3200,wa=0,Fd=1,Zn="",Mn="srgb",ba="srgb-linear",Ea="linear",vt="srgb",Xa=7680,Ud=519,Od=512,Bd=513,kd=514,Sh=515,zd=516,Hd=517,yh=518,wh=519,Gd=35044,Vd=35048,Rc="300 es",Hn=2e3,dr=2001;function Wd(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ta(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Xd(){const n=Ta("canvas");return n.style.display="block",n}const Cc={};let ss=null;function qd(n){ss=n}function Pc(...n){const e="THREE."+n.shift();ss?ss("log",e,...n):console.log(e,...n)}function bh(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function $e(...n){n=bh(n);const e="THREE."+n.shift();if(ss)ss("warn",e,...n);else{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function mt(...n){n=bh(n);const e="THREE."+n.shift();if(ss)ss("error",e,...n);else{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function ha(...n){const e=n.join(" ");e in Cc||(Cc[e]=!0,$e(...n))}function Yd(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const $d={[Go]:Go,[Vo]:qo,[Wo]:Wo,[cr]:Xo,[Ma]:Ma,[qo]:Vo,[Yo]:Yo,[Xo]:cr};class as{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const en=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],qa=Math.PI/180,El=180/Math.PI;function _r(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(en[n&255]+en[n>>8&255]+en[n>>16&255]+en[n>>24&255]+"-"+en[e&255]+en[e>>8&255]+"-"+en[e>>16&15|64]+en[e>>24&255]+"-"+en[t&63|128]+en[t>>8&255]+"-"+en[t>>16&255]+en[t>>24&255]+en[i&255]+en[i>>8&255]+en[i>>16&255]+en[i>>24&255]).toLowerCase()}function ft(n,e,t){return Math.max(e,Math.min(t,n))}function Kd(n,e){return(n%e+e)%e}function Ya(n,e,t){return(1-t)*n+t*e}function Zd(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function $l(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function jd(n,e){if(e.constructor===Float32Array)return n;const t=$l(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/t,-1)}function Jd(n,e){if(e.constructor===Float32Array)return n;const t=$l(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*t)}class ze{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ft(this.x,e.x,t.x),this.y=ft(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ft(this.x,e,t),this.y=ft(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ft(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ft(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ei{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,l){let o=i[s+0],c=i[s+1],u=i[s+2],f=i[s+3],h=r[a+0],p=r[a+1],x=r[a+2],_=r[a+3];if(f!==_||o!==h||c!==p||u!==x){let d=o*h+c*p+u*x+f*_;d<0&&(h=-h,p=-p,x=-x,_=-_,d=-d);let m=1-l;if(d<.9995){const y=Math.acos(d),w=Math.sin(y);m=Math.sin(m*y)/w,l=Math.sin(l*y)/w,o=o*m+h*l,c=c*m+p*l,u=u*m+x*l,f=f*m+_*l}else{o=o*m+h*l,c=c*m+p*l,u=u*m+x*l,f=f*m+_*l;const y=1/Math.sqrt(o*o+c*c+u*u+f*f);o*=y,c*=y,u*=y,f*=y}}e[t]=o,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,s,r,a){const l=i[s],o=i[s+1],c=i[s+2],u=i[s+3],f=r[a],h=r[a+1],p=r[a+2],x=r[a+3];return e[t]=l*x+u*f+o*p-c*h,e[t+1]=o*x+u*h+c*f-l*p,e[t+2]=c*x+u*p+l*h-o*f,e[t+3]=u*x-l*f-o*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,a=e._order,l=Math.cos,o=Math.sin,c=l(i/2),u=l(s/2),f=l(r/2),h=o(i/2),p=o(s/2),x=o(r/2);switch(a){case"XYZ":this._x=h*u*f+c*p*x,this._y=c*p*f-h*u*x,this._z=c*u*x+h*p*f,this._w=c*u*f-h*p*x;break;case"YXZ":this._x=h*u*f+c*p*x,this._y=c*p*f-h*u*x,this._z=c*u*x-h*p*f,this._w=c*u*f+h*p*x;break;case"ZXY":this._x=h*u*f-c*p*x,this._y=c*p*f+h*u*x,this._z=c*u*x+h*p*f,this._w=c*u*f-h*p*x;break;case"ZYX":this._x=h*u*f-c*p*x,this._y=c*p*f+h*u*x,this._z=c*u*x-h*p*f,this._w=c*u*f+h*p*x;break;case"YZX":this._x=h*u*f+c*p*x,this._y=c*p*f+h*u*x,this._z=c*u*x-h*p*f,this._w=c*u*f-h*p*x;break;case"XZY":this._x=h*u*f-c*p*x,this._y=c*p*f-h*u*x,this._z=c*u*x+h*p*f,this._w=c*u*f+h*p*x;break;default:$e("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],l=t[5],o=t[9],c=t[2],u=t[6],f=t[10],h=i+l+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-o)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(i>l&&i>f){const p=2*Math.sqrt(1+i-l-f);this._w=(u-o)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(l>f){const p=2*Math.sqrt(1+l-i-f);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(o+u)/p}else{const p=2*Math.sqrt(1+f-i-l);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(o+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ft(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,a=e._w,l=t._x,o=t._y,c=t._z,u=t._w;return this._x=i*u+a*l+s*c-r*o,this._y=s*u+a*o+r*l-i*c,this._z=r*u+a*c+i*o-s*l,this._w=a*u-i*l-s*o-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,l=this.dot(e);l<0&&(i=-i,s=-s,r=-r,a=-a,l=-l);let o=1-t;if(l<.9995){const c=Math.acos(l),u=Math.sin(c);o=Math.sin(o*c)/u,t=Math.sin(t*c)/u,this._x=this._x*o+i*t,this._y=this._y*o+s*t,this._z=this._z*o+r*t,this._w=this._w*o+a*t,this._onChangeCallback()}else this._x=this._x*o+i*t,this._y=this._y*o+s*t,this._z=this._z*o+r*t,this._w=this._w*o+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{static{this.prototype.isVector3=!0}constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Lc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Lc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,l=e.z,o=e.w,c=2*(a*s-l*i),u=2*(l*t-r*s),f=2*(r*i-a*t);return this.x=t+o*c+a*f-l*u,this.y=i+o*u+l*c-r*f,this.z=s+o*f+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ft(this.x,e.x,t.x),this.y=ft(this.y,e.y,t.y),this.z=ft(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ft(this.x,e,t),this.y=ft(this.y,e,t),this.z=ft(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ft(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,a=t.x,l=t.y,o=t.z;return this.x=s*o-r*l,this.y=r*a-i*o,this.z=i*l-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return $a.copy(this).projectOnVector(e),this.sub($a)}reflect(e){return this.sub($a.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ft(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const $a=new H,Lc=new ei;class Je{static{this.prototype.isMatrix3=!0}constructor(e,t,i,s,r,a,l,o,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,l,o,c)}set(e,t,i,s,r,a,l,o,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=l,u[3]=t,u[4]=r,u[5]=o,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],l=i[3],o=i[6],c=i[1],u=i[4],f=i[7],h=i[2],p=i[5],x=i[8],_=s[0],d=s[3],m=s[6],y=s[1],w=s[4],M=s[7],v=s[2],S=s[5],g=s[8];return r[0]=a*_+l*y+o*v,r[3]=a*d+l*w+o*S,r[6]=a*m+l*M+o*g,r[1]=c*_+u*y+f*v,r[4]=c*d+u*w+f*S,r[7]=c*m+u*M+f*g,r[2]=h*_+p*y+x*v,r[5]=h*d+p*w+x*S,r[8]=h*m+p*M+x*g,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],l=e[5],o=e[6],c=e[7],u=e[8];return t*a*u-t*l*c-i*r*u+i*l*o+s*r*c-s*a*o}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],l=e[5],o=e[6],c=e[7],u=e[8],f=u*a-l*c,h=l*o-u*r,p=c*r-a*o,x=t*f+i*h+s*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/x;return e[0]=f*_,e[1]=(s*c-u*i)*_,e[2]=(l*i-s*a)*_,e[3]=h*_,e[4]=(u*t-s*o)*_,e[5]=(s*r-l*t)*_,e[6]=p*_,e[7]=(i*o-c*t)*_,e[8]=(a*t-i*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,l){const o=Math.cos(r),c=Math.sin(r);return this.set(i*o,i*c,-i*(o*a+c*l)+a+e,-s*c,s*o,-s*(-c*a+o*l)+l+t,0,0,1),this}scale(e,t){return ha("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ka.makeScale(e,t)),this}rotate(e){return ha("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ka.makeRotation(-e)),this}translate(e,t){return ha("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ka.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ka=new Je,Dc=new Je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ic=new Je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Qd(){const n={enabled:!0,workingColorSpace:ba,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===vt&&(s.r=Mi(s.r),s.g=Mi(s.g),s.b=Mi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===vt&&(s.r=Ls(s.r),s.g=Ls(s.g),s.b=Ls(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Zn?Ea:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[ba]:{primaries:e,whitePoint:i,transfer:Ea,toXYZ:Dc,fromXYZ:Ic,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Mn},outputColorSpaceConfig:{drawingBufferColorSpace:Mn}},[Mn]:{primaries:e,whitePoint:i,transfer:vt,toXYZ:Dc,fromXYZ:Ic,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Mn}}}),n}const ht=Qd();function Mi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ls(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let hs;class ep{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{hs===void 0&&(hs=Ta("canvas")),hs.width=e.width,hs.height=e.height;const s=hs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=hs}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ta("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Mi(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Mi(t[i]/255)*255):t[i]=Mi(t[i]);return{data:t,width:e.width,height:e.height}}else return $e("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let tp=0;class Kl{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:tp++}),this.uuid=_r(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,l=s.length;a<l;a++)s[a].isDataTexture?r.push(Za(s[a].image)):r.push(Za(s[a]))}else r=Za(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function Za(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?ep.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:($e("Texture: Unable to serialize Texture."),{})}let np=0;const ja=new H;class ln extends as{constructor(e=ln.DEFAULT_IMAGE,t=ln.DEFAULT_MAPPING,i=vi,s=vi,r=Ft,a=Jn,l=Rn,o=an,c=ln.DEFAULT_ANISOTROPY,u=Zn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:np++}),this.uuid=_r(),this.name="",this.source=new Kl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=l,this.internalFormat=null,this.type=o,this.offset=new ze(0,0),this.repeat=new ze(1,1),this.center=new ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(ja).x}get height(){return this.source.getSize(ja).y}get depth(){return this.source.getSize(ja).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){$e(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){$e(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ph)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case hr:e.x=e.x-Math.floor(e.x);break;case vi:e.x=e.x<0?0:1;break;case $o:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case hr:e.y=e.y-Math.floor(e.y);break;case vi:e.y=e.y<0?0:1;break;case $o:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}ln.DEFAULT_IMAGE=null;ln.DEFAULT_MAPPING=ph;ln.DEFAULT_ANISOTROPY=1;class Dt{static{this.prototype.isVector4=!0}constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const o=e.elements,c=o[0],u=o[4],f=o[8],h=o[1],p=o[5],x=o[9],_=o[2],d=o[6],m=o[10];if(Math.abs(u-h)<.01&&Math.abs(f-_)<.01&&Math.abs(x-d)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+_)<.1&&Math.abs(x+d)<.1&&Math.abs(c+p+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(c+1)/2,M=(p+1)/2,v=(m+1)/2,S=(u+h)/4,g=(f+_)/4,b=(x+d)/4;return w>M&&w>v?w<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(w),s=S/i,r=g/i):M>v?M<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),i=S/s,r=b/s):v<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(v),i=g/r,s=b/r),this.set(i,s,r,t),this}let y=Math.sqrt((d-x)*(d-x)+(f-_)*(f-_)+(h-u)*(h-u));return Math.abs(y)<.001&&(y=1),this.x=(d-x)/y,this.y=(f-_)/y,this.z=(h-u)/y,this.w=Math.acos((c+p+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ft(this.x,e.x,t.x),this.y=ft(this.y,e.y,t.y),this.z=ft(this.z,e.z,t.z),this.w=ft(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ft(this.x,e,t),this.y=ft(this.y,e,t),this.z=ft(this.z,e,t),this.w=ft(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ft(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ip extends as{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ft,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Dt(0,0,e,t),this.scissorTest=!1,this.viewport=new Dt(0,0,e,t),this.textures=[];const s=i.count;for(let r=0;r<s;r++)this.textures[r]=new ln({width:e,height:t,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Ft,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Kl(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xt extends ip{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Eh extends ln{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=_t,this.minFilter=_t,this.wrapR=vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class sp extends ln{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=_t,this.minFilter=_t,this.wrapR=vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}class rt{static{this.prototype.isMatrix4=!0}constructor(e,t,i,s,r,a,l,o,c,u,f,h,p,x,_,d){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,l,o,c,u,f,h,p,x,_,d)}set(e,t,i,s,r,a,l,o,c,u,f,h,p,x,_,d){const m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=s,m[1]=r,m[5]=a,m[9]=l,m[13]=o,m[2]=c,m[6]=u,m[10]=f,m[14]=h,m[3]=p,m[7]=x,m[11]=_,m[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new rt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,s=1/fs.setFromMatrixColumn(e,0).length(),r=1/fs.setFromMatrixColumn(e,1).length(),a=1/fs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),l=Math.sin(i),o=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const h=a*u,p=a*f,x=l*u,_=l*f;t[0]=o*u,t[4]=-o*f,t[8]=c,t[1]=p+x*c,t[5]=h-_*c,t[9]=-l*o,t[2]=_-h*c,t[6]=x+p*c,t[10]=a*o}else if(e.order==="YXZ"){const h=o*u,p=o*f,x=c*u,_=c*f;t[0]=h+_*l,t[4]=x*l-p,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-l,t[2]=p*l-x,t[6]=_+h*l,t[10]=a*o}else if(e.order==="ZXY"){const h=o*u,p=o*f,x=c*u,_=c*f;t[0]=h-_*l,t[4]=-a*f,t[8]=x+p*l,t[1]=p+x*l,t[5]=a*u,t[9]=_-h*l,t[2]=-a*c,t[6]=l,t[10]=a*o}else if(e.order==="ZYX"){const h=a*u,p=a*f,x=l*u,_=l*f;t[0]=o*u,t[4]=x*c-p,t[8]=h*c+_,t[1]=o*f,t[5]=_*c+h,t[9]=p*c-x,t[2]=-c,t[6]=l*o,t[10]=a*o}else if(e.order==="YZX"){const h=a*o,p=a*c,x=l*o,_=l*c;t[0]=o*u,t[4]=_-h*f,t[8]=x*f+p,t[1]=f,t[5]=a*u,t[9]=-l*u,t[2]=-c*u,t[6]=p*f+x,t[10]=h-_*f}else if(e.order==="XZY"){const h=a*o,p=a*c,x=l*o,_=l*c;t[0]=o*u,t[4]=-f,t[8]=c*u,t[1]=h*f+_,t[5]=a*u,t[9]=p*f-x,t[2]=x*f-p,t[6]=l*u,t[10]=_*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(rp,e,ap)}lookAt(e,t,i){const s=this.elements;return Sn.subVectors(e,t),Sn.lengthSq()===0&&(Sn.z=1),Sn.normalize(),Ti.crossVectors(i,Sn),Ti.lengthSq()===0&&(Math.abs(i.z)===1?Sn.x+=1e-4:Sn.z+=1e-4,Sn.normalize(),Ti.crossVectors(i,Sn)),Ti.normalize(),Ar.crossVectors(Sn,Ti),s[0]=Ti.x,s[4]=Ar.x,s[8]=Sn.x,s[1]=Ti.y,s[5]=Ar.y,s[9]=Sn.y,s[2]=Ti.z,s[6]=Ar.z,s[10]=Sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],l=i[4],o=i[8],c=i[12],u=i[1],f=i[5],h=i[9],p=i[13],x=i[2],_=i[6],d=i[10],m=i[14],y=i[3],w=i[7],M=i[11],v=i[15],S=s[0],g=s[4],b=s[8],E=s[12],T=s[1],P=s[5],L=s[9],D=s[13],C=s[2],N=s[6],k=s[10],U=s[14],Y=s[3],O=s[7],V=s[11],q=s[15];return r[0]=a*S+l*T+o*C+c*Y,r[4]=a*g+l*P+o*N+c*O,r[8]=a*b+l*L+o*k+c*V,r[12]=a*E+l*D+o*U+c*q,r[1]=u*S+f*T+h*C+p*Y,r[5]=u*g+f*P+h*N+p*O,r[9]=u*b+f*L+h*k+p*V,r[13]=u*E+f*D+h*U+p*q,r[2]=x*S+_*T+d*C+m*Y,r[6]=x*g+_*P+d*N+m*O,r[10]=x*b+_*L+d*k+m*V,r[14]=x*E+_*D+d*U+m*q,r[3]=y*S+w*T+M*C+v*Y,r[7]=y*g+w*P+M*N+v*O,r[11]=y*b+w*L+M*k+v*V,r[15]=y*E+w*D+M*U+v*q,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],l=e[5],o=e[9],c=e[13],u=e[2],f=e[6],h=e[10],p=e[14],x=e[3],_=e[7],d=e[11],m=e[15],y=o*p-c*h,w=l*p-c*f,M=l*h-o*f,v=a*p-c*u,S=a*h-o*u,g=a*f-l*u;return t*(_*y-d*w+m*M)-i*(x*y-d*v+m*S)+s*(x*w-_*v+m*g)-r*(x*M-_*S+d*g)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],a=e[5],l=e[9],o=e[2],c=e[6],u=e[10];return t*(a*u-l*c)-i*(r*u-l*o)+s*(r*c-a*o)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],l=e[5],o=e[6],c=e[7],u=e[8],f=e[9],h=e[10],p=e[11],x=e[12],_=e[13],d=e[14],m=e[15],y=t*l-i*a,w=t*o-s*a,M=t*c-r*a,v=i*o-s*l,S=i*c-r*l,g=s*c-r*o,b=u*_-f*x,E=u*d-h*x,T=u*m-p*x,P=f*d-h*_,L=f*m-p*_,D=h*m-p*d,C=y*D-w*L+M*P+v*T-S*E+g*b;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/C;return e[0]=(l*D-o*L+c*P)*N,e[1]=(s*L-i*D-r*P)*N,e[2]=(_*g-d*S+m*v)*N,e[3]=(h*S-f*g-p*v)*N,e[4]=(o*T-a*D-c*E)*N,e[5]=(t*D-s*T+r*E)*N,e[6]=(d*M-x*g-m*w)*N,e[7]=(u*g-h*M+p*w)*N,e[8]=(a*L-l*T+c*b)*N,e[9]=(i*T-t*L-r*b)*N,e[10]=(x*S-_*M+m*y)*N,e[11]=(f*M-u*S-p*y)*N,e[12]=(l*E-a*P-o*b)*N,e[13]=(t*P-i*E+s*b)*N,e[14]=(_*w-x*v-d*y)*N,e[15]=(u*v-f*w+h*y)*N,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,l=e.y,o=e.z,c=r*a,u=r*l;return this.set(c*a+i,c*l-s*o,c*o+s*l,0,c*l+s*o,u*l+i,u*o-s*a,0,c*o-s*l,u*o+s*a,r*o*o+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,a=t._y,l=t._z,o=t._w,c=r+r,u=a+a,f=l+l,h=r*c,p=r*u,x=r*f,_=a*u,d=a*f,m=l*f,y=o*c,w=o*u,M=o*f,v=i.x,S=i.y,g=i.z;return s[0]=(1-(_+m))*v,s[1]=(p+M)*v,s[2]=(x-w)*v,s[3]=0,s[4]=(p-M)*S,s[5]=(1-(h+m))*S,s[6]=(d+y)*S,s[7]=0,s[8]=(x+w)*g,s[9]=(d-y)*g,s[10]=(1-(h+_))*g,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let a=fs.set(s[0],s[1],s[2]).length();const l=fs.set(s[4],s[5],s[6]).length(),o=fs.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Pn.copy(this);const c=1/a,u=1/l,f=1/o;return Pn.elements[0]*=c,Pn.elements[1]*=c,Pn.elements[2]*=c,Pn.elements[4]*=u,Pn.elements[5]*=u,Pn.elements[6]*=u,Pn.elements[8]*=f,Pn.elements[9]*=f,Pn.elements[10]*=f,t.setFromRotationMatrix(Pn),i.x=a,i.y=l,i.z=o,this}makePerspective(e,t,i,s,r,a,l=Hn,o=!1){const c=this.elements,u=2*r/(t-e),f=2*r/(i-s),h=(t+e)/(t-e),p=(i+s)/(i-s);let x,_;if(o)x=r/(a-r),_=a*r/(a-r);else if(l===Hn)x=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(l===dr)x=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,a,l=Hn,o=!1){const c=this.elements,u=2/(t-e),f=2/(i-s),h=-(t+e)/(t-e),p=-(i+s)/(i-s);let x,_;if(o)x=1/(a-r),_=a/(a-r);else if(l===Hn)x=-2/(a-r),_=-(a+r)/(a-r);else if(l===dr)x=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=x,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const fs=new H,Pn=new rt,rp=new H(0,0,0),ap=new H(1,1,1),Ti=new H,Ar=new H,Sn=new H,Nc=new rt,Fc=new ei;class yi{constructor(e=0,t=0,i=0,s=yi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],a=s[4],l=s[8],o=s[1],c=s[5],u=s[9],f=s[2],h=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(ft(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ft(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(l,p),this._z=Math.atan2(o,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(ft(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(o,r));break;case"ZYX":this._y=Math.asin(-ft(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(o,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ft(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(l,p));break;case"XZY":this._z=Math.asin(-ft(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(l,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:$e("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Nc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Nc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Fc.setFromEuler(this),this.setFromQuaternion(Fc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}yi.DEFAULT_ORDER="XYZ";class Th{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let op=0;const Uc=new H,ds=new ei,li=new rt,Rr=new H,Gs=new H,lp=new H,cp=new ei,Oc=new H(1,0,0),Bc=new H(0,1,0),kc=new H(0,0,1),zc={type:"added"},up={type:"removed"},ps={type:"childadded",child:null},Ja={type:"childremoved",child:null};class kt extends as{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:op++}),this.uuid=_r(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=kt.DEFAULT_UP.clone();const e=new H,t=new yi,i=new ei,s=new H(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new rt},normalMatrix:{value:new Je}}),this.matrix=new rt,this.matrixWorld=new rt,this.matrixAutoUpdate=kt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Th,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ds.setFromAxisAngle(e,t),this.quaternion.multiply(ds),this}rotateOnWorldAxis(e,t){return ds.setFromAxisAngle(e,t),this.quaternion.premultiply(ds),this}rotateX(e){return this.rotateOnAxis(Oc,e)}rotateY(e){return this.rotateOnAxis(Bc,e)}rotateZ(e){return this.rotateOnAxis(kc,e)}translateOnAxis(e,t){return Uc.copy(e).applyQuaternion(this.quaternion),this.position.add(Uc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Oc,e)}translateY(e){return this.translateOnAxis(Bc,e)}translateZ(e){return this.translateOnAxis(kc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(li.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Rr.copy(e):Rr.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Gs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?li.lookAt(Gs,Rr,this.up):li.lookAt(Rr,Gs,this.up),this.quaternion.setFromRotationMatrix(li),s&&(li.extractRotation(s.matrixWorld),ds.setFromRotationMatrix(li),this.quaternion.premultiply(ds.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(mt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(zc),ps.child=e,this.dispatchEvent(ps),ps.child=null):mt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(up),Ja.child=e,this.dispatchEvent(Ja),Ja.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),li.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),li.multiply(e.parent.matrixWorld)),e.applyMatrix4(li),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(zc),ps.child=e,this.dispatchEvent(ps),ps.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gs,e,lp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gs,cp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const r=this.children;for(let a=0,l=r.length;a<l;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(l=>({...l,boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(l=>({...l})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(l,o){return l[o.uuid]===void 0&&(l[o.uuid]=o.toJSON(e)),o.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const o=l.shapes;if(Array.isArray(o))for(let c=0,u=o.length;c<u;c++){const f=o[c];r(e.shapes,f)}else r(e.shapes,o)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let o=0,c=this.material.length;o<c;o++)l.push(r(e.materials,this.material[o]));s.material=l}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let l=0;l<this.children.length;l++)s.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let l=0;l<this.animations.length;l++){const o=this.animations[l];s.animations.push(r(e.animations,o))}}if(t){const l=a(e.geometries),o=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),h=a(e.skeletons),p=a(e.animations),x=a(e.nodes);l.length>0&&(i.geometries=l),o.length>0&&(i.materials=o),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),x.length>0&&(i.nodes=x)}return i.object=s,i;function a(l){const o=[];for(const c in l){const u=l[c];delete u.metadata,o.push(u)}return o}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}kt.DEFAULT_UP=new H(0,1,0);kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class bn extends kt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const hp={type:"move"};class Qa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new bn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new bn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new bn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null;const l=this._targetRay,o=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const d=t.getJointPose(_,i),m=this._getHandJoint(c,_);d!==null&&(m.matrix.fromArray(d.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=d.radius),m.visible=d!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),p=.02,x=.005;c.inputState.pinching&&h>p+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else o!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,o.eventsEnabled&&o.dispatchEvent({type:"gripUpdated",data:e,target:this})));l!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(hp)))}return l!==null&&(l.visible=s!==null),o!==null&&(o.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new bn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Ah={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ai={h:0,s:0,l:0},Cr={h:0,s:0,l:0};function eo(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ge{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Mn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ht.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=ht.workingColorSpace){return this.r=e,this.g=t,this.b=i,ht.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=ht.workingColorSpace){if(e=Kd(e,1),t=ft(t,0,1),i=ft(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=eo(a,r,e+1/3),this.g=eo(a,r,e),this.b=eo(a,r,e-1/3)}return ht.colorSpaceToWorking(this,s),this}setStyle(e,t=Mn){function i(r){r!==void 0&&parseFloat(r)<1&&$e("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],l=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(l))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(l))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(l))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:$e("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);$e("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Mn){const i=Ah[e.toLowerCase()];return i!==void 0?this.setHex(i,t):$e("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Mi(e.r),this.g=Mi(e.g),this.b=Mi(e.b),this}copyLinearToSRGB(e){return this.r=Ls(e.r),this.g=Ls(e.g),this.b=Ls(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Mn){return ht.workingToColorSpace(tn.copy(this),e),Math.round(ft(tn.r*255,0,255))*65536+Math.round(ft(tn.g*255,0,255))*256+Math.round(ft(tn.b*255,0,255))}getHexString(e=Mn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ht.workingColorSpace){ht.workingToColorSpace(tn.copy(this),t);const i=tn.r,s=tn.g,r=tn.b,a=Math.max(i,s,r),l=Math.min(i,s,r);let o,c;const u=(l+a)/2;if(l===a)o=0,c=0;else{const f=a-l;switch(c=u<=.5?f/(a+l):f/(2-a-l),a){case i:o=(s-r)/f+(s<r?6:0);break;case s:o=(r-i)/f+2;break;case r:o=(i-s)/f+4;break}o/=6}return e.h=o,e.s=c,e.l=u,e}getRGB(e,t=ht.workingColorSpace){return ht.workingToColorSpace(tn.copy(this),t),e.r=tn.r,e.g=tn.g,e.b=tn.b,e}getStyle(e=Mn){ht.workingToColorSpace(tn.copy(this),e);const t=tn.r,i=tn.g,s=tn.b;return e!==Mn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Ai),this.setHSL(Ai.h+e,Ai.s+t,Ai.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ai),e.getHSL(Cr);const i=Ya(Ai.h,Cr.h,t),s=Ya(Ai.s,Cr.s,t),r=Ya(Ai.l,Cr.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const tn=new Ge;Ge.NAMES=Ah;class Zl{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ge(e),this.near=t,this.far=i}clone(){return new Zl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Ds extends kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new yi,this.environmentIntensity=1,this.environmentRotation=new yi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Ln=new H,ci=new H,to=new H,ui=new H,ms=new H,gs=new H,Hc=new H,no=new H,io=new H,so=new H,ro=new Dt,ao=new Dt,oo=new Dt;class kn{constructor(e=new H,t=new H,i=new H){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Ln.subVectors(e,t),s.cross(Ln);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Ln.subVectors(s,t),ci.subVectors(i,t),to.subVectors(e,t);const a=Ln.dot(Ln),l=Ln.dot(ci),o=Ln.dot(to),c=ci.dot(ci),u=ci.dot(to),f=a*c-l*l;if(f===0)return r.set(0,0,0),null;const h=1/f,p=(c*o-l*u)*h,x=(a*u-l*o)*h;return r.set(1-p-x,x,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,ui)===null?!1:ui.x>=0&&ui.y>=0&&ui.x+ui.y<=1}static getInterpolation(e,t,i,s,r,a,l,o){return this.getBarycoord(e,t,i,s,ui)===null?(o.x=0,o.y=0,"z"in o&&(o.z=0),"w"in o&&(o.w=0),null):(o.setScalar(0),o.addScaledVector(r,ui.x),o.addScaledVector(a,ui.y),o.addScaledVector(l,ui.z),o)}static getInterpolatedAttribute(e,t,i,s,r,a){return ro.setScalar(0),ao.setScalar(0),oo.setScalar(0),ro.fromBufferAttribute(e,t),ao.fromBufferAttribute(e,i),oo.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(ro,r.x),a.addScaledVector(ao,r.y),a.addScaledVector(oo,r.z),a}static isFrontFacing(e,t,i,s){return Ln.subVectors(i,t),ci.subVectors(e,t),Ln.cross(ci).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ln.subVectors(this.c,this.b),ci.subVectors(this.a,this.b),Ln.cross(ci).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return kn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return kn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return kn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return kn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return kn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let a,l;ms.subVectors(s,i),gs.subVectors(r,i),no.subVectors(e,i);const o=ms.dot(no),c=gs.dot(no);if(o<=0&&c<=0)return t.copy(i);io.subVectors(e,s);const u=ms.dot(io),f=gs.dot(io);if(u>=0&&f<=u)return t.copy(s);const h=o*f-u*c;if(h<=0&&o>=0&&u<=0&&o-u>0)return a=o/(o-u),t.copy(i).addScaledVector(ms,a);so.subVectors(e,r);const p=ms.dot(so),x=gs.dot(so);if(x>=0&&p<=x)return t.copy(r);const _=p*c-o*x;if(_<=0&&c>=0&&x<=0)return l=c/(c-x),t.copy(i).addScaledVector(gs,l);const d=u*x-p*f;if(d<=0&&f-u>=0&&p-x>=0)return Hc.subVectors(r,s),l=(f-u)/(f-u+(p-x)),t.copy(s).addScaledVector(Hc,l);const m=1/(d+_+h);return a=_*m,l=h*m,t.copy(i).addScaledVector(ms,a).addScaledVector(gs,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class os{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Dn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Dn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Dn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,l=r.count;a<l;a++)e.isMesh===!0?e.getVertexPosition(a,Dn):Dn.fromBufferAttribute(r,a),Dn.applyMatrix4(e.matrixWorld),this.expandByPoint(Dn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Pr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Pr.copy(i.boundingBox)),Pr.applyMatrix4(e.matrixWorld),this.union(Pr)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Dn),Dn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Vs),Lr.subVectors(this.max,Vs),xs.subVectors(e.a,Vs),vs.subVectors(e.b,Vs),_s.subVectors(e.c,Vs),Ri.subVectors(vs,xs),Ci.subVectors(_s,vs),Vi.subVectors(xs,_s);let t=[0,-Ri.z,Ri.y,0,-Ci.z,Ci.y,0,-Vi.z,Vi.y,Ri.z,0,-Ri.x,Ci.z,0,-Ci.x,Vi.z,0,-Vi.x,-Ri.y,Ri.x,0,-Ci.y,Ci.x,0,-Vi.y,Vi.x,0];return!lo(t,xs,vs,_s,Lr)||(t=[1,0,0,0,1,0,0,0,1],!lo(t,xs,vs,_s,Lr))?!1:(Dr.crossVectors(Ri,Ci),t=[Dr.x,Dr.y,Dr.z],lo(t,xs,vs,_s,Lr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Dn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Dn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(hi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),hi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),hi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),hi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),hi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),hi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),hi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),hi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(hi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const hi=[new H,new H,new H,new H,new H,new H,new H,new H],Dn=new H,Pr=new os,xs=new H,vs=new H,_s=new H,Ri=new H,Ci=new H,Vi=new H,Vs=new H,Lr=new H,Dr=new H,Wi=new H;function lo(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Wi.fromArray(n,r);const l=s.x*Math.abs(Wi.x)+s.y*Math.abs(Wi.y)+s.z*Math.abs(Wi.z),o=e.dot(Wi),c=t.dot(Wi),u=i.dot(Wi);if(Math.max(-Math.max(o,c,u),Math.min(o,c,u))>l)return!1}return!0}const Ot=new H,Ir=new ze;let fp=0;class nt extends as{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:fp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Gd,this.updateRanges=[],this.gpuType=En,this.version=0,this._normalizationScale=e!==void 0?$l(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ir.fromBufferAttribute(this,t),Ir.applyMatrix3(e),this.setXY(t,Ir.x,Ir.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix3(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix4(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.applyNormalMatrix(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.transformDirection(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):jd(e,this.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):Jd(e,this.array)}}class Rh extends nt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Ch extends nt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Tt extends nt{constructor(e,t,i){super(new Float32Array(e),t,i)}}const dp=new os,Ws=new H,co=new H;class ri{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):dp.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ws.subVectors(e,this.center);const t=Ws.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Ws,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(co.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ws.copy(e.center).add(co)),this.expandByPoint(Ws.copy(e.center).sub(co))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let pp=0;const Tn=new rt,uo=new kt,Ms=new H,yn=new os,Xs=new os,Wt=new H;class It extends as{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:pp++}),this.uuid=_r(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Wd(e)?Ch:Rh)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Je().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Tn.makeRotationFromQuaternion(e),this.applyMatrix4(Tn),this}rotateX(e){return Tn.makeRotationX(e),this.applyMatrix4(Tn),this}rotateY(e){return Tn.makeRotationY(e),this.applyMatrix4(Tn),this}rotateZ(e){return Tn.makeRotationZ(e),this.applyMatrix4(Tn),this}translate(e,t,i){return Tn.makeTranslation(e,t,i),this.applyMatrix4(Tn),this}scale(e,t,i){return Tn.makeScale(e,t,i),this.applyMatrix4(Tn),this}lookAt(e){return uo.lookAt(e),uo.updateMatrix(),this.applyMatrix4(uo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ms).negate(),this.translate(Ms.x,Ms.y,Ms.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Tt(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&$e("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new os);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){mt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];yn.setFromBufferAttribute(r),this.morphTargetsRelative?(Wt.addVectors(this.boundingBox.min,yn.min),this.boundingBox.expandByPoint(Wt),Wt.addVectors(this.boundingBox.max,yn.max),this.boundingBox.expandByPoint(Wt)):(this.boundingBox.expandByPoint(yn.min),this.boundingBox.expandByPoint(yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&mt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ri);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){mt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){const i=this.boundingSphere.center;if(yn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const l=t[r];Xs.setFromBufferAttribute(l),this.morphTargetsRelative?(Wt.addVectors(yn.min,Xs.min),yn.expandByPoint(Wt),Wt.addVectors(yn.max,Xs.max),yn.expandByPoint(Wt)):(yn.expandByPoint(Xs.min),yn.expandByPoint(Xs.max))}yn.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)Wt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Wt));if(t)for(let r=0,a=t.length;r<a;r++){const l=t[r],o=this.morphTargetsRelative;for(let c=0,u=l.count;c<u;c++)Wt.fromBufferAttribute(l,c),o&&(Ms.fromBufferAttribute(e,c),Wt.add(Ms)),s=Math.max(s,i.distanceToSquared(Wt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&mt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){mt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new nt(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const l=[],o=[],c=new Uint8Array(i.count);for(let E=0;E<i.count;E++)l[E]=new H,o[E]=new H;const u=new H,f=new H,h=new H,p=new ze,x=new ze,_=new ze,d=new H,m=new H;function y(E,T,P){c[E]=c[T]=c[P]=1,u.fromBufferAttribute(i,E),f.fromBufferAttribute(i,T),h.fromBufferAttribute(i,P),p.fromBufferAttribute(r,E),x.fromBufferAttribute(r,T),_.fromBufferAttribute(r,P),f.sub(u),h.sub(u),x.sub(p),_.sub(p);const L=1/(x.x*_.y-_.x*x.y);isFinite(L)&&(d.copy(f).multiplyScalar(_.y).addScaledVector(h,-x.y).multiplyScalar(L),m.copy(h).multiplyScalar(x.x).addScaledVector(f,-_.x).multiplyScalar(L),l[E].add(d),l[T].add(d),l[P].add(d),o[E].add(m),o[T].add(m),o[P].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let E=0,T=w.length;E<T;++E){const P=w[E],L=P.start,D=P.count;for(let C=L,N=L+D;C<N;C+=3)y(e.getX(C+0),e.getX(C+1),e.getX(C+2))}const M=new H,v=new H,S=new H,g=new H;function b(E){S.fromBufferAttribute(s,E),g.copy(S);const T=l[E];M.copy(T),M.sub(S.multiplyScalar(S.dot(T))).normalize(),v.crossVectors(g,T);const L=v.dot(o[E])<0?-1:1;a.setXYZW(E,M.x,M.y,M.z,L)}for(let E=0,T=i.count;E<T;++E)c[E]&&b(E);this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new nt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const s=new H,r=new H,a=new H,l=new H,o=new H,c=new H,u=new H,f=new H;if(e)for(let h=0,p=e.count;h<p;h+=3){const x=e.getX(h+0),_=e.getX(h+1),d=e.getX(h+2);s.fromBufferAttribute(t,x),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,d),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),l.fromBufferAttribute(i,x),o.fromBufferAttribute(i,_),c.fromBufferAttribute(i,d),l.add(u),o.add(u),c.add(u),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(d,c.x,c.y,c.z)}else for(let h=0,p=t.count;h<p;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Wt.fromBufferAttribute(e,t),Wt.normalize(),e.setXYZ(t,Wt.x,Wt.y,Wt.z)}toNonIndexed(){function e(l,o){const c=l.array,u=l.itemSize,f=l.normalized,h=new c.constructor(o.length*u);let p=0,x=0;for(let _=0,d=o.length;_<d;_++){l.isInterleavedBufferAttribute?p=o[_]*l.data.stride+l.offset:p=o[_]*u;for(let m=0;m<u;m++)h[x++]=c[p++]}return new nt(h,u,f)}if(this.index===null)return $e("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new It,i=this.index.array,s=this.attributes;for(const l in s){const o=s[l],c=e(o,i);t.setAttribute(l,c)}const r=this.morphAttributes;for(const l in r){const o=[],c=r[l];for(let u=0,f=c.length;u<f;u++){const h=c[u],p=e(h,i);o.push(p)}t.morphAttributes[l]=o}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let l=0,o=a.length;l<o;l++){const c=a[l];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const o=this.parameters;for(const c in o)o[c]!==void 0&&(e[c]=o[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const o in i){const c=i[o];e.data.attributes[o]=c.toJSON(e.data)}const s={};let r=!1;for(const o in this.morphAttributes){const c=this.morphAttributes[o],u=[];for(let f=0,h=c.length;f<h;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(s[o]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const l=this.boundingSphere;return l!==null&&(e.data.boundingSphere=l.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],f=r[c];for(let h=0,p=f.length;h<p;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());const o=e.boundingSphere;return o!==null&&(this.boundingSphere=o.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ho=new H,mp=new H,gp=new Je;class Fi{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=ho.subVectors(i,t).cross(mp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const s=e.delta(ho),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||gp.getNormalMatrix(e),s=this.coplanarPoint(ho).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let xp=0;class ks extends as{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xp++}),this.uuid=_r(),this.name="",this.type="Material",this.blending=Ps,this.side=ns,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=rh,this.blendDst=ah,this.blendEquation=Ts,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ge(0,0,0),this.blendAlpha=0,this.depthFunc=cr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ud,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xa,this.stencilZFail=Xa,this.stencilZPass=Xa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){$e(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){$e(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const l in r){const o=r[l];delete o.metadata,a.push(o)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ge().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Fi().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new ze().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ze().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const fi=new H,fo=new H,Nr=new H,Fr=new H;class vp{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,fi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=fi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(fi.copy(this.origin).addScaledVector(this.direction,t),fi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){fo.copy(e).add(t).multiplyScalar(.5),Nr.copy(t).sub(e).normalize(),Fr.copy(this.origin).sub(fo);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Nr),l=Fr.dot(this.direction),o=-Fr.dot(Nr),c=Fr.lengthSq(),u=Math.abs(1-a*a);let f,h,p,x;if(u>0)if(f=a*o-l,h=a*l-o,x=r*u,f>=0)if(h>=-x)if(h<=x){const _=1/u;f*=_,h*=_,p=f*(f+a*h+2*l)+h*(a*f+h+2*o)+c}else h=r,f=Math.max(0,-(a*h+l)),p=-f*f+h*(h+2*o)+c;else h=-r,f=Math.max(0,-(a*h+l)),p=-f*f+h*(h+2*o)+c;else h<=-x?(f=Math.max(0,-(-a*r+l)),h=f>0?-r:Math.min(Math.max(-r,-o),r),p=-f*f+h*(h+2*o)+c):h<=x?(f=0,h=Math.min(Math.max(-r,-o),r),p=h*(h+2*o)+c):(f=Math.max(0,-(a*r+l)),h=f>0?r:Math.min(Math.max(-r,-o),r),p=-f*f+h*(h+2*o)+c);else h=a>0?-r:r,f=Math.max(0,-(a*h+l)),p=-f*f+h*(h+2*o)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(fo).addScaledVector(Nr,h),p}intersectSphere(e,t){if(e.radius<0)return null;fi.subVectors(e.center,this.origin);const i=fi.dot(this.direction),s=fi.dot(fi)-i*i,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),l=i-a,o=i+a;return o<0?null:l<0?this.at(o,t):this.at(l,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,l,o;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),f>=0?(l=(e.min.z-h.z)*f,o=(e.max.z-h.z)*f):(l=(e.max.z-h.z)*f,o=(e.min.z-h.z)*f),i>o||l>s)||((l>i||i!==i)&&(i=l),(o<s||s!==s)&&(s=o),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,fi)!==null}intersectTriangle(e,t,i,s,r){const a=this.origin,l=this.direction,o=l.x,c=l.y,u=l.z,f=e.x-a.x,h=e.y-a.y,p=e.z-a.z,x=t.x-a.x,_=t.y-a.y,d=t.z-a.z,m=i.x-a.x,y=i.y-a.y,w=i.z-a.z,M=Math.abs(o),v=Math.abs(c),S=Math.abs(u);let g,b,E,T,P,L,D,C,N,k,U,Y;if(M>=v&&M>=S?(E=o,L=f,N=x,Y=m,o>=0?(g=c,b=u,T=h,P=p,D=_,C=d,k=y,U=w):(g=u,b=c,T=p,P=h,D=d,C=_,k=w,U=y)):v>=S?(E=c,L=h,N=_,Y=y,c>=0?(g=u,b=o,T=p,P=f,D=d,C=x,k=w,U=m):(g=o,b=u,T=f,P=p,D=x,C=d,k=m,U=w)):(E=u,L=p,N=d,Y=w,u>=0?(g=o,b=c,T=f,P=h,D=x,C=_,k=m,U=y):(g=c,b=o,T=h,P=f,D=_,C=x,k=y,U=m)),E===0)return null;const O=g/E,V=b/E,q=1/E,ne=T-O*L,fe=P-V*L,z=D-O*N,J=C-V*N,se=k-O*Y,X=U-V*Y,F=se*J-X*z,ee=ne*X-fe*se,ce=z*fe-J*ne;if(s){if(F<0||ee<0||ce<0)return null}else if((F<0||ee<0||ce<0)&&(F>0||ee>0||ce>0))return null;const ue=F+ee+ce;if(ue===0)return null;const xe=q*(F*L+ee*N+ce*Y);return(ue>0?xe<0:xe>0)?null:this.at(xe/ue,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class jl extends ks{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yi,this.combine=Da,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Gc=new rt,Xi=new vp,Ur=new ri,Vc=new H,Or=new H,Br=new H,kr=new H,po=new H,zr=new H,Wc=new H,Hr=new H;class gt extends kt{constructor(e=new It,t=new jl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const l=this.morphTargetInfluences;if(r&&l){zr.set(0,0,0);for(let o=0,c=r.length;o<c;o++){const u=l[o],f=r[o];u!==0&&(po.fromBufferAttribute(f,e),a?zr.addScaledVector(po,u):zr.addScaledVector(po.sub(t),u))}t.add(zr)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ur.copy(i.boundingSphere),Ur.applyMatrix4(r),Xi.copy(e.ray).recast(e.near),!(Ur.containsPoint(Xi.origin)===!1&&(Xi.intersectSphere(Ur,Vc)===null||Xi.origin.distanceToSquared(Vc)>(e.far-e.near)**2))&&(Gc.copy(r).invert(),Xi.copy(e.ray).applyMatrix4(Gc),!(i.boundingBox!==null&&Xi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Xi)))}_computeIntersections(e,t,i){let s;const r=this.geometry,a=this.material,l=r.index,o=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,p=r.drawRange;if(l!==null)if(Array.isArray(a))for(let x=0,_=h.length;x<_;x++){const d=h[x],m=a[d.materialIndex],y=Math.max(d.start,p.start),w=Math.min(l.count,Math.min(d.start+d.count,p.start+p.count));for(let M=y,v=w;M<v;M+=3){const S=l.getX(M),g=l.getX(M+1),b=l.getX(M+2);s=Gr(this,m,e,i,c,u,f,S,g,b),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=d.materialIndex,t.push(s))}}else{const x=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let d=x,m=_;d<m;d+=3){const y=l.getX(d),w=l.getX(d+1),M=l.getX(d+2);s=Gr(this,a,e,i,c,u,f,y,w,M),s&&(s.faceIndex=Math.floor(d/3),t.push(s))}}else if(o!==void 0)if(Array.isArray(a))for(let x=0,_=h.length;x<_;x++){const d=h[x],m=a[d.materialIndex],y=Math.max(d.start,p.start),w=Math.min(o.count,Math.min(d.start+d.count,p.start+p.count));for(let M=y,v=w;M<v;M+=3){const S=M,g=M+1,b=M+2;s=Gr(this,m,e,i,c,u,f,S,g,b),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=d.materialIndex,t.push(s))}}else{const x=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let d=x,m=_;d<m;d+=3){const y=d,w=d+1,M=d+2;s=Gr(this,a,e,i,c,u,f,y,w,M),s&&(s.faceIndex=Math.floor(d/3),t.push(s))}}}}function _p(n,e,t,i,s,r,a,l){let o;if(e.side===gn?o=i.intersectTriangle(a,r,s,!0,l):o=i.intersectTriangle(s,r,a,e.side===ns,l),o===null)return null;Hr.copy(l),Hr.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Hr);return c<t.near||c>t.far?null:{distance:c,point:Hr.clone(),object:n}}function Gr(n,e,t,i,s,r,a,l,o,c){n.getVertexPosition(l,Or),n.getVertexPosition(o,Br),n.getVertexPosition(c,kr);const u=_p(n,e,t,i,Or,Br,kr,Wc);if(u){const f=new H;kn.getBarycoord(Wc,Or,Br,kr,f),s&&(u.uv=kn.getInterpolatedAttribute(s,l,o,c,f,new ze)),r&&(u.uv1=kn.getInterpolatedAttribute(r,l,o,c,f,new ze)),a&&(u.normal=kn.getInterpolatedAttribute(a,l,o,c,f,new H),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a:l,b:o,c,normal:new H,materialIndex:0};kn.getNormal(Or,Br,kr,h.normal),u.face=h,u.barycoord=f}return u}class ls extends ln{constructor(e=null,t=1,i=1,s,r,a,l,o,c=_t,u=_t,f,h){super(null,a,l,o,c,u,s,r,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class es extends nt{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ss=new rt,Xc=new rt,Vr=[],qc=new os,Mp=new rt,qs=new gt,Ys=new ri;class Gn extends gt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new es(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Mp)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new os),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ss),qc.copy(e.boundingBox).applyMatrix4(Ss),this.boundingBox.union(qc)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ri),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ss),Ys.copy(e.boundingSphere).applyMatrix4(Ss),this.boundingSphere.union(Ys)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=e*r+1;for(let l=0;l<i.length;l++)i[l]=s[a+l]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(qs.geometry=this.geometry,qs.material=this.material,qs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ys.copy(this.boundingSphere),Ys.applyMatrix4(i),e.ray.intersectsSphere(Ys)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ss),Xc.multiplyMatrices(i,Ss),qs.matrixWorld=Xc,qs.raycast(e,Vr);for(let a=0,l=Vr.length;a<l;a++){const o=Vr[a];o.instanceId=r,o.object=this,t.push(o)}Vr.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new es(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new ls(new Float32Array(s*this.count),s,this.count,vr,En));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<i.length;c++)a+=i[c];const l=this.geometry.morphTargetsRelative?1:1-a,o=s*e;return r[o]=l,r.set(i,o+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const qi=new ri,Sp=new ze(.5,.5),Wr=new H;class Bi{constructor(e=new Fi,t=new Fi,i=new Fi,s=new Fi,r=new Fi,a=new Fi){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){const l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(i),l[3].copy(s),l[4].copy(r),l[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Hn,i=!1){const s=this.planes,r=e.elements,a=r[0],l=r[1],o=r[2],c=r[3],u=r[4],f=r[5],h=r[6],p=r[7],x=r[8],_=r[9],d=r[10],m=r[11],y=r[12],w=r[13],M=r[14],v=r[15];if(s[0].setComponents(c-a,p-u,m-x,v-y).normalize(),s[1].setComponents(c+a,p+u,m+x,v+y).normalize(),s[2].setComponents(c+l,p+f,m+_,v+w).normalize(),s[3].setComponents(c-l,p-f,m-_,v-w).normalize(),i)s[4].setComponents(o,h,d,M).normalize(),s[5].setComponents(c-o,p-h,m-d,v-M).normalize();else if(s[4].setComponents(c-o,p-h,m-d,v-M).normalize(),t===Hn)s[5].setComponents(c+o,p+h,m+d,v+M).normalize();else if(t===dr)s[5].setComponents(o,h,d,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),qi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qi)}intersectsSprite(e){qi.center.set(0,0,0);const t=Sp.distanceTo(e.center);return qi.radius=.7071067811865476+t,qi.applyMatrix4(e.matrixWorld),this.intersectsSphere(qi)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Wr.x=s.normal.x>0?e.max.x:e.min.x,Wr.y=s.normal.y>0?e.max.y:e.min.y,Wr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Wr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const Yc=new rt;class Jl{constructor(){this.coordinateSystem=Hn,this._frustums=[],this._count=0}setFromArrayCamera(e){const t=e.cameras,i=this._frustums;for(let s=0;s<t.length;s++){const r=t[s];Yc.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new Bi),i[s].setFromProjectionMatrix(Yc,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,i=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new Bi),t[s].copy(i[s]);return this._count=e._count,this}clone(){return new Jl().copy(this)}}class Ph extends ln{constructor(e=[],t=Ns,i,s,r,a,l,o,c,u){super(e,t,i,s,r,a,l,o,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ki extends ln{constructor(e,t,i=ii,s,r,a,l=_t,o=_t,c,u=Oi,f=1){if(u!==Oi&&u!==Ui)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:f};super(h,s,r,a,l,o,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Kl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Lh extends ki{constructor(e,t=ii,i=Ns,s,r,a=_t,l=_t,o,c=Oi){const u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,t,i,s,r,a,l,o,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Dh extends ln{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Mr extends It{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const l=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const o=[],c=[],u=[],f=[];let h=0,p=0;x("z","y","x",-1,-1,i,t,e,a,r,0),x("z","y","x",1,-1,i,t,-e,a,r,1),x("x","z","y",1,1,e,i,t,s,a,2),x("x","z","y",1,-1,e,i,-t,s,a,3),x("x","y","z",1,-1,e,t,i,s,r,4),x("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(o),this.setAttribute("position",new Tt(c,3)),this.setAttribute("normal",new Tt(u,3)),this.setAttribute("uv",new Tt(f,2));function x(_,d,m,y,w,M,v,S,g,b,E){const T=M/g,P=v/b,L=M/2,D=v/2,C=S/2,N=g+1,k=b+1;let U=0,Y=0;const O=new H;for(let V=0;V<k;V++){const q=V*P-D;for(let ne=0;ne<N;ne++){const fe=ne*T-L;O[_]=fe*y,O[d]=q*w,O[m]=C,c.push(O.x,O.y,O.z),O[_]=0,O[d]=0,O[m]=S>0?1:-1,u.push(O.x,O.y,O.z),f.push(ne/g),f.push(1-V/b),U+=1}}for(let V=0;V<b;V++)for(let q=0;q<g;q++){const ne=h+q+N*V,fe=h+q+N*(V+1),z=h+(q+1)+N*(V+1),J=h+(q+1)+N*V;o.push(ne,fe,J),o.push(fe,z,J),Y+=6}l.addGroup(p,Y,E),p+=Y,h+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class sr extends It{constructor(e=1,t=1,i=1,s=32,r=1,a=!1,l=0,o=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:l,thetaLength:o};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],f=[],h=[],p=[];let x=0;const _=[],d=i/2;let m=0;y(),a===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(u),this.setAttribute("position",new Tt(f,3)),this.setAttribute("normal",new Tt(h,3)),this.setAttribute("uv",new Tt(p,2));function y(){const M=new H,v=new H;let S=0;const g=(t-e)/i;for(let b=0;b<=r;b++){const E=[],T=b/r,P=T*(t-e)+e;for(let L=0;L<=s;L++){const D=L/s,C=D*o+l,N=Math.sin(C),k=Math.cos(C);v.x=P*N,v.y=-T*i+d,v.z=P*k,f.push(v.x,v.y,v.z),M.set(N,g,k).normalize(),h.push(M.x,M.y,M.z),p.push(D,1-T),E.push(x++)}_.push(E)}for(let b=0;b<s;b++)for(let E=0;E<r;E++){const T=_[E][b],P=_[E+1][b],L=_[E+1][b+1],D=_[E][b+1];(e>0||E!==0)&&(u.push(T,P,D),S+=3),(t>0||E!==r-1)&&(u.push(P,L,D),S+=3)}c.addGroup(m,S,0),m+=S}function w(M){const v=x,S=new ze,g=new H;let b=0;const E=M===!0?e:t,T=M===!0?1:-1;for(let L=1;L<=s;L++)f.push(0,d*T,0),h.push(0,T,0),p.push(.5,.5),x++;const P=x;for(let L=0;L<=s;L++){const C=L/s*o+l,N=Math.cos(C),k=Math.sin(C);g.x=E*k,g.y=d*T,g.z=E*N,f.push(g.x,g.y,g.z),h.push(0,T,0),S.x=N*.5+.5,S.y=k*.5*T+.5,p.push(S.x,S.y),x++}for(let L=0;L<s;L++){const D=v+L,C=P+L;M===!0?u.push(C,C+1,D):u.push(C+1,C,D),b+=3}c.addGroup(m,b,M===!0?1:2),m+=b}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sr(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ia extends It{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};const r=[],a=[];l(s),c(i),u(),this.setAttribute("position",new Tt(r,3)),this.setAttribute("normal",new Tt(r.slice(),3)),this.setAttribute("uv",new Tt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function l(y){const w=new H,M=new H,v=new H;for(let S=0;S<t.length;S+=3)p(t[S+0],w),p(t[S+1],M),p(t[S+2],v),o(w,M,v,y)}function o(y,w,M,v){const S=v+1,g=[];for(let b=0;b<=S;b++){g[b]=[];const E=y.clone().lerp(M,b/S),T=w.clone().lerp(M,b/S),P=S-b;for(let L=0;L<=P;L++)L===0&&b===S?g[b][L]=E:g[b][L]=E.clone().lerp(T,L/P)}for(let b=0;b<S;b++)for(let E=0;E<2*(S-b)-1;E++){const T=Math.floor(E/2);E%2===0?(h(g[b][T+1]),h(g[b+1][T]),h(g[b][T])):(h(g[b][T+1]),h(g[b+1][T+1]),h(g[b+1][T]))}}function c(y){const w=new H;for(let M=0;M<r.length;M+=3)w.x=r[M+0],w.y=r[M+1],w.z=r[M+2],w.normalize().multiplyScalar(y),r[M+0]=w.x,r[M+1]=w.y,r[M+2]=w.z}function u(){const y=new H;for(let w=0;w<r.length;w+=3){y.x=r[w+0],y.y=r[w+1],y.z=r[w+2];const M=d(y)/2/Math.PI+.5,v=m(y)/Math.PI+.5;a.push(M,1-v)}x(),f()}function f(){for(let y=0;y<a.length;y+=6){const w=a[y+0],M=a[y+2],v=a[y+4],S=Math.max(w,M,v),g=Math.min(w,M,v);S>.9&&g<.1&&(w<.2&&(a[y+0]+=1),M<.2&&(a[y+2]+=1),v<.2&&(a[y+4]+=1))}}function h(y){r.push(y.x,y.y,y.z)}function p(y,w){const M=y*3;w.x=e[M+0],w.y=e[M+1],w.z=e[M+2]}function x(){const y=new H,w=new H,M=new H,v=new H,S=new ze,g=new ze,b=new ze;for(let E=0,T=0;E<r.length;E+=9,T+=6){y.set(r[E+0],r[E+1],r[E+2]),w.set(r[E+3],r[E+4],r[E+5]),M.set(r[E+6],r[E+7],r[E+8]),S.set(a[T+0],a[T+1]),g.set(a[T+2],a[T+3]),b.set(a[T+4],a[T+5]),v.copy(y).add(w).add(M).divideScalar(3);const P=d(v);_(S,T+0,y,P),_(g,T+2,w,P),_(b,T+4,M,P)}}function _(y,w,M,v){v<0&&y.x===1&&(a[w]=y.x-1),M.x===0&&M.z===0&&(a[w]=v/2/Math.PI+.5)}function d(y){return Math.atan2(y.z,-y.x)}function m(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ia(e.vertices,e.indices,e.radius,e.detail)}}class Aa extends Ia{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Aa(e.radius,e.detail)}}class Ql extends Ia{constructor(e=1,t=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ql(e.radius,e.detail)}}class rs extends It{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,a=t/2,l=Math.floor(i),o=Math.floor(s),c=l+1,u=o+1,f=e/l,h=t/o,p=[],x=[],_=[],d=[];for(let m=0;m<u;m++){const y=m*h-a;for(let w=0;w<c;w++){const M=w*f-r;x.push(M,-y,0),_.push(0,0,1),d.push(w/l),d.push(1-m/o)}}for(let m=0;m<o;m++)for(let y=0;y<l;y++){const w=y+c*m,M=y+c*(m+1),v=y+1+c*(m+1),S=y+1+c*m;p.push(w,M,S),p.push(M,v,S)}this.setIndex(p),this.setAttribute("position",new Tt(x,3)),this.setAttribute("normal",new Tt(_,3)),this.setAttribute("uv",new Tt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rs(e.width,e.height,e.widthSegments,e.heightSegments)}}class ec extends It{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:l},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const o=Math.min(a+l,Math.PI);let c=0;const u=[],f=new H,h=new H,p=[],x=[],_=[],d=[];for(let m=0;m<=i;m++){const y=[],w=m/i,M=a+w*l,v=e*Math.cos(M),S=Math.sqrt(e*e-v*v);let g=0;m===0&&a===0?g=.5/t:m===i&&o===Math.PI&&(g=-.5/t);for(let b=0;b<=t;b++){const E=b/t,T=s+E*r;f.x=-S*Math.cos(T),f.y=v,f.z=S*Math.sin(T),x.push(f.x,f.y,f.z),h.copy(f).normalize(),_.push(h.x,h.y,h.z),d.push(E+g,1-w),y.push(c++)}u.push(y)}for(let m=0;m<i;m++)for(let y=0;y<t;y++){const w=u[m][y+1],M=u[m][y],v=u[m+1][y],S=u[m+1][y+1];(m!==0||a>0)&&p.push(w,M,S),(m!==i-1||o<Math.PI)&&p.push(M,v,S)}this.setIndex(p),this.setAttribute("position",new Tt(x,3)),this.setAttribute("normal",new Tt(_,3)),this.setAttribute("uv",new Tt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ec(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function Us(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];if($c(s))s.isRenderTargetTexture?($e("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if($c(s[0])){const r=[];for(let a=0,l=s.length;a<l;a++)r[a]=s[a].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function dn(n){const e={};for(let t=0;t<n.length;t++){const i=Us(n[t]);for(const s in i)e[s]=i[s]}return e}function $c(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function yp(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Ih(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ht.workingColorSpace}const Nh={clone:Us,merge:dn};var wp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class cn extends ks{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wp,this.fragmentShader=bp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Us(e.uniforms),this.uniformsGroups=yp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new Ge().setHex(s.value);break;case"v2":this.uniforms[i].value=new ze().fromArray(s.value);break;case"v3":this.uniforms[i].value=new H().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Dt().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Je().fromArray(s.value);break;case"m4":this.uniforms[i].value=new rt().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Ep extends cn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Tp extends ks{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ge(16777215),this.specular=new Ge(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wa,this.normalScale=new ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yi,this.combine=Da,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class sn extends ks{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wa,this.normalScale=new ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yi,this.combine=Da,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ap extends ks{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Nd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Rp extends ks{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Fh extends kt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ge(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class Cp extends Fh{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(kt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ge(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const mo=new rt,Kc=new H,Zc=new H;class Pp{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ze(512,512),this.mapType=an,this.map=null,this.mapPass=null,this.matrix=new rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Bi,this._frameExtents=new ze(1,1),this._viewportCount=1,this._viewports=[new Dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;Kc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Kc),Zc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Zc),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){mo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(mo,e.coordinateSystem,e.reversedDepth);const r=this._frameExtents,a=s?s.z/r.x:1,l=s?s.w/r.y:1,o=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===dr||e.reversedDepth?t.set(.5*a,0,0,.5*a+o,0,.5*l,0,.5*l+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+o,0,.5*l,0,.5*l+c,0,0,.5,.5,0,0,0,1),t.multiply(mo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Xr=new H,qr=new ei,Vn=new H;class Uh extends kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rt,this.projectionMatrix=new rt,this.projectionMatrixInverse=new rt,this.coordinateSystem=Hn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Xr,qr,Vn),Vn.x===1&&Vn.y===1&&Vn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Xr,qr,Vn.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Xr,qr,Vn),Vn.x===1&&Vn.y===1&&Vn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Xr,qr,Vn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Pi=new H,jc=new ze,Jc=new ze;class An extends Uh{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=El*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(qa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return El*2*Math.atan(Math.tan(qa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Pi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Pi.x,Pi.y).multiplyScalar(-e/Pi.z),Pi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Pi.x,Pi.y).multiplyScalar(-e/Pi.z)}getViewSize(e,t){return this.getViewBounds(e,jc,Jc),t.subVectors(Jc,jc)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(qa*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const o=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/o,t-=a.offsetY*i/c,s*=a.width/o,i*=a.height/c}const l=this.filmOffset;l!==0&&(r+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Os extends Uh{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,a=i+e,l=s+t,o=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,l-=u*this.view.offsetY,o=l-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,l,o,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Lp extends Pp{constructor(){super(new Os(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class go extends Fh{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(kt.DEFAULT_UP),this.updateMatrix(),this.target=new kt,this.shadow=new Lp}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Oh extends It{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}const ys=-90,ws=1;class Tl extends kt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new An(ys,ws,e,t);s.layers=this.layers,this.add(s);const r=new An(ys,ws,e,t);r.layers=this.layers,this.add(r);const a=new An(ys,ws,e,t);a.layers=this.layers,this.add(a);const l=new An(ys,ws,e,t);l.layers=this.layers,this.add(l);const o=new An(ys,ws,e,t);o.layers=this.layers,this.add(o);const c=new An(ys,ws,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,l,o]=t;for(const c of t)this.remove(c);if(e===Hn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(e===dr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,l,o,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let d=!1;e.isWebGLRenderer===!0?d=e.state.buffers.depth.getReversed():d=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),d&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),d&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,s),d&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,3,s),d&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,4,s),d&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.mipmapsAutoUpdate=_,e.setRenderTarget(i,5,s),d&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(f,h,p),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class Dp extends An{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}function Qc(n,e,t,i){const s=Ip(i);switch(t){case _h:return n*e;case vr:return n*e/s.components*s.byteLength;case Xl:return n*e/s.components*s.byteLength;case is:return n*e*2/s.components*s.byteLength;case ql:return n*e*2/s.components*s.byteLength;case Mh:return n*e*3/s.components*s.byteLength;case Rn:return n*e*4/s.components*s.byteLength;case Yl:return n*e*4/s.components*s.byteLength;case oa:case la:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ca:case ua:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Zo:case Jo:return Math.max(n,16)*Math.max(e,8)/4;case Ko:case jo:return Math.max(n,8)*Math.max(e,8)/2;case Qo:case el:case nl:case il:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case tl:case Sa:case sl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case rl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case al:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case ol:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case ll:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case cl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case ul:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case hl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case fl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case dl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case pl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case ml:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case gl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case xl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case vl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case _l:case Ml:case Sl:return Math.ceil(n/4)*Math.ceil(e/4)*16;case yl:case wl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case ya:case bl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Ip(n){switch(n){case an:case mh:return{byteLength:1,components:1};case fr:case gh:case si:return{byteLength:2,components:1};case Vl:case Wl:return{byteLength:2,components:4};case ii:case Gl:case En:return{byteLength:4,components:1};case xh:case vh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Hl}}));typeof window<"u"&&(window.__THREE__?$e("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Hl);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Bh(){let n=null,e=!1,t=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Np(n){const e=new WeakMap;function t(l,o){const c=l.array,u=l.usage,f=c.byteLength,h=n.createBuffer();n.bindBuffer(o,h),n.bufferData(o,c,u),l.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=n.HALF_FLOAT;else if(c instanceof Uint16Array)l.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:l.version,size:f}}function i(l,o,c){const u=o.array,f=o.updateRanges;if(n.bindBuffer(c,l),f.length===0)n.bufferSubData(c,0,u);else{f.sort((p,x)=>p.start-x.start);let h=0;for(let p=1;p<f.length;p++){const x=f[h],_=f[p];_.start<=x.start+x.count+1?x.count=Math.max(x.count,_.start+_.count-x.start):(++h,f[h]=_)}f.length=h+1;for(let p=0,x=f.length;p<x;p++){const _=f[p];n.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}o.clearUpdateRanges()}o.onUploadCallback()}function s(l){return l.isInterleavedBufferAttribute&&(l=l.data),e.get(l)}function r(l){l.isInterleavedBufferAttribute&&(l=l.data);const o=e.get(l);o&&(n.deleteBuffer(o.buffer),e.delete(l))}function a(l,o){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){const u=e.get(l);(!u||u.version<l.version)&&e.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}const c=e.get(l);if(c===void 0)e.set(l,t(l,o));else if(c.version<l.version){if(c.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,l,o),c.version=l.version}}return{get:s,remove:r,update:a}}var Fp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Up=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Op=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Bp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,zp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Hp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Gp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Vp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Wp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Xp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,qp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Yp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,$p=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Kp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Zp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,jp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Jp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Qp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,em=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,tm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,nm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,im=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,sm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,rm=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,am=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,om=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,lm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,cm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,um="gl_FragColor = linearToOutputTexel( gl_FragColor );",hm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,fm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,dm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,pm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,mm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,gm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,xm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_m=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Mm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Sm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ym=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,bm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Em=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Tm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Am=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Rm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Cm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Pm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Lm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Dm=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Im=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Nm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Fm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Um=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Om=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Bm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,km=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Hm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Gm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Vm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Wm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ym=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$m=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Km=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,jm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Qm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,e0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,t0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,n0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,i0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,s0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,r0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,a0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,o0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,l0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,c0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,u0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,h0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,f0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,d0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,p0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,m0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,g0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,x0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,v0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,_0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,M0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,S0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,y0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,w0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,b0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,E0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,T0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,A0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,R0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,C0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,P0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,L0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,D0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,I0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const N0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,F0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,U0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,O0=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,B0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,k0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,z0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,H0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,G0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,V0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,W0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,X0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,q0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Y0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,K0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Z0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,j0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,J0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Q0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,tg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ng=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ig=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,rg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ag=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,og=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,cg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ug=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,fg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,dg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,tt={alphahash_fragment:Fp,alphahash_pars_fragment:Up,alphamap_fragment:Op,alphamap_pars_fragment:Bp,alphatest_fragment:kp,alphatest_pars_fragment:zp,aomap_fragment:Hp,aomap_pars_fragment:Gp,batching_pars_vertex:Vp,batching_vertex:Wp,begin_vertex:Xp,beginnormal_vertex:qp,bsdfs:Yp,iridescence_fragment:$p,bumpmap_pars_fragment:Kp,clipping_planes_fragment:Zp,clipping_planes_pars_fragment:jp,clipping_planes_pars_vertex:Jp,clipping_planes_vertex:Qp,color_fragment:em,color_pars_fragment:tm,color_pars_vertex:nm,color_vertex:im,common:sm,defaultnormal_vertex:rm,displacementmap_pars_vertex:am,displacementmap_vertex:om,emissivemap_fragment:lm,emissivemap_pars_fragment:cm,colorspace_fragment:um,colorspace_pars_fragment:hm,envmap_fragment:fm,envmap_common_pars_fragment:dm,envmap_pars_fragment:pm,envmap_pars_vertex:mm,envmap_physical_pars_fragment:Tm,envmap_vertex:gm,fog_vertex:xm,fog_pars_vertex:vm,fog_fragment:_m,fog_pars_fragment:Mm,gradientmap_pars_fragment:Sm,lightmap_pars_fragment:ym,lights_lambert_fragment:wm,lights_lambert_pars_fragment:bm,lights_pars_begin:Em,lights_toon_fragment:Am,lights_toon_pars_fragment:Rm,lights_phong_fragment:Cm,lights_phong_pars_fragment:Pm,lights_physical_fragment:Lm,lights_physical_pars_fragment:Dm,lights_fragment_begin:Im,lights_fragment_maps:Nm,lights_fragment_end:Fm,lightprobes_pars_fragment:Um,logdepthbuf_fragment:Om,logdepthbuf_pars_fragment:Bm,logdepthbuf_pars_vertex:km,logdepthbuf_vertex:zm,map_fragment:Hm,map_pars_fragment:Gm,map_particle_fragment:Vm,map_particle_pars_fragment:Wm,metalnessmap_fragment:Xm,metalnessmap_pars_fragment:qm,morphinstance_vertex:Ym,morphcolor_vertex:$m,morphnormal_vertex:Km,morphtarget_pars_vertex:Zm,morphtarget_vertex:jm,normal_fragment_begin:Jm,normal_fragment_maps:Qm,normal_pars_fragment:e0,normal_pars_vertex:t0,normal_vertex:n0,normalmap_pars_fragment:i0,clearcoat_normal_fragment_begin:s0,clearcoat_normal_fragment_maps:r0,clearcoat_pars_fragment:a0,iridescence_pars_fragment:o0,opaque_fragment:l0,packing:c0,premultiplied_alpha_fragment:u0,project_vertex:h0,dithering_fragment:f0,dithering_pars_fragment:d0,roughnessmap_fragment:p0,roughnessmap_pars_fragment:m0,shadowmap_pars_fragment:g0,shadowmap_pars_vertex:x0,shadowmap_vertex:v0,shadowmask_pars_fragment:_0,skinbase_vertex:M0,skinning_pars_vertex:S0,skinning_vertex:y0,skinnormal_vertex:w0,specularmap_fragment:b0,specularmap_pars_fragment:E0,tonemapping_fragment:T0,tonemapping_pars_fragment:A0,transmission_fragment:R0,transmission_pars_fragment:C0,uv_pars_fragment:P0,uv_pars_vertex:L0,uv_vertex:D0,worldpos_vertex:I0,background_vert:N0,background_frag:F0,backgroundCube_vert:U0,backgroundCube_frag:O0,cube_vert:B0,cube_frag:k0,depth_vert:z0,depth_frag:H0,distance_vert:G0,distance_frag:V0,equirect_vert:W0,equirect_frag:X0,linedashed_vert:q0,linedashed_frag:Y0,meshbasic_vert:$0,meshbasic_frag:K0,meshlambert_vert:Z0,meshlambert_frag:j0,meshmatcap_vert:J0,meshmatcap_frag:Q0,meshnormal_vert:eg,meshnormal_frag:tg,meshphong_vert:ng,meshphong_frag:ig,meshphysical_vert:sg,meshphysical_frag:rg,meshtoon_vert:ag,meshtoon_frag:og,points_vert:lg,points_frag:cg,shadow_vert:ug,shadow_frag:hg,sprite_vert:fg,sprite_frag:dg},Ae={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},envMapRotation:{value:new Je},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},$n={basic:{uniforms:dn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.fog]),vertexShader:tt.meshbasic_vert,fragmentShader:tt.meshbasic_frag},lambert:{uniforms:dn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new Ge(0)},envMapIntensity:{value:1}}]),vertexShader:tt.meshlambert_vert,fragmentShader:tt.meshlambert_frag},phong:{uniforms:dn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:tt.meshphong_vert,fragmentShader:tt.meshphong_frag},standard:{uniforms:dn([Ae.common,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.roughnessmap,Ae.metalnessmap,Ae.fog,Ae.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag},toon:{uniforms:dn([Ae.common,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.gradientmap,Ae.fog,Ae.lights,{emissive:{value:new Ge(0)}}]),vertexShader:tt.meshtoon_vert,fragmentShader:tt.meshtoon_frag},matcap:{uniforms:dn([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,{matcap:{value:null}}]),vertexShader:tt.meshmatcap_vert,fragmentShader:tt.meshmatcap_frag},points:{uniforms:dn([Ae.points,Ae.fog]),vertexShader:tt.points_vert,fragmentShader:tt.points_frag},dashed:{uniforms:dn([Ae.common,Ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:tt.linedashed_vert,fragmentShader:tt.linedashed_frag},depth:{uniforms:dn([Ae.common,Ae.displacementmap]),vertexShader:tt.depth_vert,fragmentShader:tt.depth_frag},normal:{uniforms:dn([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,{opacity:{value:1}}]),vertexShader:tt.meshnormal_vert,fragmentShader:tt.meshnormal_frag},sprite:{uniforms:dn([Ae.sprite,Ae.fog]),vertexShader:tt.sprite_vert,fragmentShader:tt.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:tt.background_vert,fragmentShader:tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Je}},vertexShader:tt.backgroundCube_vert,fragmentShader:tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:tt.cube_vert,fragmentShader:tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:tt.equirect_vert,fragmentShader:tt.equirect_frag},distance:{uniforms:dn([Ae.common,Ae.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:tt.distance_vert,fragmentShader:tt.distance_frag},shadow:{uniforms:dn([Ae.lights,Ae.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:tt.shadow_vert,fragmentShader:tt.shadow_frag}};$n.physical={uniforms:dn([$n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Je},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag};const Yr={r:0,b:0,g:0},pg=new rt,kh=new Je;kh.set(-1,0,0,0,1,0,0,0,1);function mg(n,e,t,i,s,r){const a=new Ge(0);let l=s===!0?0:1,o,c,u=null,f=0,h=null;function p(y){let w=y.isScene===!0?y.background:null;if(w&&w.isTexture){const M=y.backgroundBlurriness>0;w=e.get(w,M)}return w}function x(y){let w=!1;const M=p(y);M===null?d(a,l):M&&M.isColor&&(d(M,1),w=!0);const v=n.xr.getEnvironmentBlendMode();v==="additive"?t.buffers.color.setClear(0,0,0,1,r):v==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||w)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function _(y,w){const M=p(w);M&&M.isCubeTexture?(c===void 0&&(c=new gt(new Mr(1,1,1),new cn({name:"BackgroundCubeMaterial",uniforms:Us($n.backgroundCube.uniforms),vertexShader:$n.backgroundCube.vertexShader,fragmentShader:$n.backgroundCube.fragmentShader,side:gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(v,S,g){this.matrixWorld.copyPosition(g.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(pg.makeRotationFromEuler(w.backgroundRotation)).transpose(),M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(kh),c.material.toneMapped=ht.getTransfer(M.colorSpace)!==vt,(u!==M||f!==M.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,u=M,f=M.version,h=n.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(o===void 0&&(o=new gt(new rs(2,2),new cn({name:"BackgroundMaterial",uniforms:Us($n.background.uniforms),vertexShader:$n.background.vertexShader,fragmentShader:$n.background.fragmentShader,side:ns,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),o.geometry.deleteAttribute("normal"),Object.defineProperty(o.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(o)),o.material.uniforms.t2D.value=M,o.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,o.material.toneMapped=ht.getTransfer(M.colorSpace)!==vt,M.matrixAutoUpdate===!0&&M.updateMatrix(),o.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||f!==M.version||h!==n.toneMapping)&&(o.material.needsUpdate=!0,u=M,f=M.version,h=n.toneMapping),o.layers.enableAll(),y.unshift(o,o.geometry,o.material,0,0,null))}function d(y,w){y.getRGB(Yr,Ih(n)),t.buffers.color.setClear(Yr.r,Yr.g,Yr.b,w,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),o!==void 0&&(o.geometry.dispose(),o.material.dispose(),o=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,w=1){a.set(y),l=w,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,d(a,l)},render:x,addToRenderList:_,dispose:m}}function gg(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null);let r=s,a=!1;function l(P,L,D,C,N){let k=!1;const U=f(P,C,D,L);r!==U&&(r=U,c(r.object)),k=p(P,C,D,N),k&&x(P,C,D,N),N!==null&&e.update(N,n.ELEMENT_ARRAY_BUFFER),(k||a)&&(a=!1,M(P,L,D,C),N!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function o(){return n.createVertexArray()}function c(P){return n.bindVertexArray(P)}function u(P){return n.deleteVertexArray(P)}function f(P,L,D,C){const N=C.wireframe===!0;let k=i[L.id];k===void 0&&(k={},i[L.id]=k);const U=P.isInstancedMesh===!0?P.id:0;let Y=k[U];Y===void 0&&(Y={},k[U]=Y);let O=Y[D.id];O===void 0&&(O={},Y[D.id]=O);let V=O[N];return V===void 0&&(V=h(o()),O[N]=V),V}function h(P){const L=[],D=[],C=[];for(let N=0;N<t;N++)L[N]=0,D[N]=0,C[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:D,attributeDivisors:C,object:P,attributes:{},index:null}}function p(P,L,D,C){const N=r.attributes,k=L.attributes;let U=0;const Y=D.getAttributes();for(const O in Y)if(Y[O].location>=0){const q=N[O];let ne=k[O];if(ne===void 0&&(O==="instanceMatrix"&&P.instanceMatrix&&(ne=P.instanceMatrix),O==="instanceColor"&&P.instanceColor&&(ne=P.instanceColor)),q===void 0||q.attribute!==ne||ne&&q.data!==ne.data)return!0;U++}return r.attributesNum!==U||r.index!==C}function x(P,L,D,C){const N={},k=L.attributes;let U=0;const Y=D.getAttributes();for(const O in Y)if(Y[O].location>=0){let q=k[O];q===void 0&&(O==="instanceMatrix"&&P.instanceMatrix&&(q=P.instanceMatrix),O==="instanceColor"&&P.instanceColor&&(q=P.instanceColor));const ne={};ne.attribute=q,q&&q.data&&(ne.data=q.data),N[O]=ne,U++}r.attributes=N,r.attributesNum=U,r.index=C}function _(){const P=r.newAttributes;for(let L=0,D=P.length;L<D;L++)P[L]=0}function d(P){m(P,0)}function m(P,L){const D=r.newAttributes,C=r.enabledAttributes,N=r.attributeDivisors;D[P]=1,C[P]===0&&(n.enableVertexAttribArray(P),C[P]=1),N[P]!==L&&(n.vertexAttribDivisor(P,L),N[P]=L)}function y(){const P=r.newAttributes,L=r.enabledAttributes;for(let D=0,C=L.length;D<C;D++)L[D]!==P[D]&&(n.disableVertexAttribArray(D),L[D]=0)}function w(P,L,D,C,N,k,U){U===!0?n.vertexAttribIPointer(P,L,D,N,k):n.vertexAttribPointer(P,L,D,C,N,k)}function M(P,L,D,C){_();const N=C.attributes,k=D.getAttributes(),U=L.defaultAttributeValues;for(const Y in k){const O=k[Y];if(O.location>=0){let V=N[Y];if(V===void 0&&(Y==="instanceMatrix"&&P.instanceMatrix&&(V=P.instanceMatrix),Y==="instanceColor"&&P.instanceColor&&(V=P.instanceColor)),V!==void 0){const q=V.normalized,ne=V.itemSize,fe=e.get(V);if(fe===void 0)continue;const z=fe.buffer,J=fe.type,se=fe.bytesPerElement,X=J===n.INT||J===n.UNSIGNED_INT||V.gpuType===Gl;if(V.isInterleavedBufferAttribute){const F=V.data,ee=F.isInterleavedBuffer===!0?F.stride:F.itemSize,ce=V.offset;if(F.isInstancedInterleavedBuffer||F.isInstancedBufferAttribute){for(let ue=0;ue<O.locationSize;ue++)m(O.location+ue,F.meshPerAttribute);P.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=F.meshPerAttribute*F.count)}else for(let ue=0;ue<O.locationSize;ue++)d(O.location+ue);n.bindBuffer(n.ARRAY_BUFFER,z);for(let ue=0;ue<O.locationSize;ue++)w(O.location+ue,ne/O.locationSize,J,q,ee*se,(ce+ne/O.locationSize*ue)*se,X)}else{if(V.isInstancedBufferAttribute){for(let F=0;F<O.locationSize;F++)m(O.location+F,V.meshPerAttribute);P.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let F=0;F<O.locationSize;F++)d(O.location+F);n.bindBuffer(n.ARRAY_BUFFER,z);for(let F=0;F<O.locationSize;F++)w(O.location+F,ne/O.locationSize,J,q,ne*se,ne/O.locationSize*F*se,X)}}else if(U!==void 0){const q=U[Y];if(q!==void 0)switch(q.length){case 2:n.vertexAttrib2fv(O.location,q);break;case 3:n.vertexAttrib3fv(O.location,q);break;case 4:n.vertexAttrib4fv(O.location,q);break;default:n.vertexAttrib1fv(O.location,q)}}}}y()}function v(){E();for(const P in i){const L=i[P];for(const D in L){const C=L[D];for(const N in C){const k=C[N];for(const U in k)u(k[U].object),delete k[U];delete C[N]}}delete i[P]}}function S(P){if(i[P.id]===void 0)return;const L=i[P.id];for(const D in L){const C=L[D];for(const N in C){const k=C[N];for(const U in k)u(k[U].object),delete k[U];delete C[N]}}delete i[P.id]}function g(P){for(const L in i){const D=i[L];for(const C in D){const N=D[C];if(N[P.id]===void 0)continue;const k=N[P.id];for(const U in k)u(k[U].object),delete k[U];delete N[P.id]}}}function b(P){for(const L in i){const D=i[L],C=P.isInstancedMesh===!0?P.id:0,N=D[C];if(N!==void 0){for(const k in N){const U=N[k];for(const Y in U)u(U[Y].object),delete U[Y];delete N[k]}delete D[C],Object.keys(D).length===0&&delete i[L]}}}function E(){T(),a=!0,r!==s&&(r=s,c(r.object))}function T(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:l,reset:E,resetDefaultState:T,dispose:v,releaseStatesOfGeometry:S,releaseStatesOfObject:b,releaseStatesOfProgram:g,initAttributes:_,enableAttribute:d,disableUnusedAttributes:y}}function xg(n,e,t){let i;function s(o){i=o}function r(o,c){n.drawArrays(i,o,c),t.update(c,i,1)}function a(o,c,u){u!==0&&(n.drawArraysInstanced(i,o,c,u),t.update(c,i,u))}function l(o,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,o,0,c,0,u);let h=0;for(let p=0;p<u;p++)h+=c[p];t.update(h,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=l}function vg(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const g=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(g.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(g){return!(g!==Rn&&i.convert(g)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(g){const b=g===si&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(g!==an&&g!==En&&!b&&i.convert(g)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function o(g){if(g==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";g="mediump"}return g==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=o(c);u!==c&&($e("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=t.logarithmicDepthBuffer===!0&&f===!1;t.reversedDepthBuffer===!0&&f===!1&&$e("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&f===!0&&$e("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),d=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),w=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),v=n.getParameter(n.MAX_SAMPLES),S=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:o,textureFormatReadable:a,textureTypeReadable:l,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:x,maxTextureSize:_,maxCubemapSize:d,maxAttributes:m,maxVertexUniforms:y,maxVaryings:w,maxFragmentUniforms:M,maxSamples:v,samples:S}}function _g(n){const e=this;let t=null,i=0,s=!1,r=!1;const a=new Fi,l=new Je,o={value:null,needsUpdate:!1};this.uniform=o,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||i!==0||s;return s=h,i=f.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,p){const x=f.clippingPlanes,_=f.clipIntersection,d=f.clipShadows,m=n.get(f);if(!s||x===null||x.length===0||r&&!d)r?u(null):c();else{const y=r?0:i,w=y*4;let M=m.clippingState||null;o.value=M,M=u(x,h,w,p);for(let v=0;v!==w;++v)M[v]=t[v];m.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){o.value!==t&&(o.value=t,o.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,p,x){const _=f!==null?f.length:0;let d=null;if(_!==0){if(d=o.value,x!==!0||d===null){const m=p+_*4,y=h.matrixWorldInverse;l.getNormalMatrix(y),(d===null||d.length<m)&&(d=new Float32Array(m));for(let w=0,M=p;w!==_;++w,M+=4)a.copy(f[w]).applyMatrix4(y,l),a.normal.toArray(d,M),d[M+3]=a.constant}o.value=d,o.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,d}}class tc extends Xt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Ph(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Mr(5,5,5),r=new cn({name:"CubemapFromEquirect",uniforms:Us(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:gn,blending:Cs});r.uniforms.tEquirect.value=t;const a=new gt(s,r),l=t.minFilter;return t.minFilter===Jn&&(t.minFilter=Ft),new Tl(1,10,this).update(e,a),t.minFilter=l,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}}const eu=256,Mg=3,Sg=20,zh=256,Hh=16,yg=3,wg=new H,bg=new Ge;class Ra{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Tl(1,10,null),this._boxMesh=new gt(new Mr(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){const{size:a=256,position:l=wg}=r,o=this._renderer;this._setSize(a);const c=this._allocateTarget(),u=this._getSourceTarget(!0);t>0&&(u.texture.mipmapsAutoUpdate=!1);const f=o.autoClear,h=o.autoClearColor,p=o.autoClearDepth,x=o.autoClearStencil,_=e.background;o.autoClear=!0,o.autoClearColor=!0,o.autoClearDepth=!0,o.autoClearStencil=!0,_===null&&(e.background=o.getClearColor(bg));const d=new Tl(i,s,u);return d.position.copy(l),d.update(o,e),o.autoClear=f,o.autoClearColor=h,o.autoClearDepth=p,o.autoClearStencil=x,e.background=_,t>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=iu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=nu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(eu,Zd(e))}_fromTexture(e,t){e.mapping===Ns||e.mapping===ur?this._setSize(e.image.length===0?eu:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const i=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){const e=this._cubeSize,t=tu(e,!1,!1),i=Math.log2(e)-Mg;for(let s=0;s<=i;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){const t=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==t||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=tu(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,i){const s=this._boxMesh,r=this._cubeCamera;s.material=i,r.renderTarget=e,r.activeMipmapLevel=t;const a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Ns||e.mapping===ur?(this._cubemapMaterial===null&&(this._cubemapMaterial=iu()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=nu()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=Eg(),this._integrationMaterial=Tg());const t=this._cubeSize,i=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;const r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/Hh);for(let a=0;a<=i;a++){const l=Ra.lodToRoughness(a,i);if(a>i-yg)r.roughness.value=l,this._renderCube(e,a,this._integrationMaterial);else{const o=l>0?Math.log2(t)+.5*Math.log2(6/(zh*Math.pow(l,4)))+.5:0;s.roughness.value=l,s.lodBias.value=o,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Ag());const i=this._blurMaterial,s=i.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,i),s.envMap.value=e.texture,this._renderCube(r,0,i)}}function tu(n,e,t){return new tc(n,{minFilter:Jn,generateMipmaps:e,type:si,colorSpace:ba,depthBuffer:t})}function Sr(n,e,t){return new cn({name:n,uniforms:e,vertexShader:tt.cube_vert,fragmentShader:t,side:gn,blending:Cs,depthTest:!1,depthWrite:!1})}function Eg(){return Sr("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${zh}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Tg(){return Sr("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Hh}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Ag(){return Sr("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Sg}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function nu(){return Sr("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function iu(){return Sr("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Rg(n){let e=new WeakMap,t=new WeakMap,i=null;function s(h,p=!1){return h==null?null:p?a(h):r(h)}function r(h){if(h&&h.isTexture){const p=h.mapping;if(p===Ga||p===Va)if(e.has(h)){const x=e.get(h).texture;return l(x,h.mapping)}else{const x=h.image;if(x&&x.height>0){const _=new tc(x.height);return _.fromEquirectangularTexture(n,h),e.set(h,_),h.addEventListener("dispose",c),l(_.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture&&h.isPMREMTexture!==!0){const p=h.mapping,x=p===Ga||p===Va,_=p===Ns||p===ur;if(x||_){let d=t.get(h);const m=d!==void 0?d.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==m)return i===null&&(i=new Ra(n)),d=x?i.fromEquirectangular(h,d):i.fromCubemap(h,d),d.texture.pmremVersion=h.pmremVersion,t.set(h,d),d.texture;if(d!==void 0)return d.texture;{const y=h.image;return x&&y&&y.height>0||_&&y&&o(y)?(i===null&&(i=new Ra(n)),d=x?i.fromEquirectangular(h):i.fromCubemap(h),d.texture.pmremVersion=h.pmremVersion,t.set(h,d),h.addEventListener("dispose",u),d.texture):null}}}return h}function l(h,p){return p===Ga?h.mapping=Ns:p===Va&&(h.mapping=ur),h}function o(h){let p=0;const x=6;for(let _=0;_<x;_++)h[_]!==void 0&&p++;return p===x}function c(h){const p=h.target;p.removeEventListener("dispose",c);const x=e.get(p);x!==void 0&&(e.delete(p),x.dispose())}function u(h){const p=h.target;p.removeEventListener("dispose",u);const x=t.get(p);x!==void 0&&(t.delete(p),x.dispose())}function f(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function Cg(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&ha("WebGLRenderer: "+i+" extension not supported."),s}}}function Pg(n,e,t,i){const s={},r=new WeakMap,a=new FinalizationRegistry(x=>delete s[x]);function l(x){o(x.target)}function o(x){x.index!==null&&e.remove(x.index);for(const d in x.attributes)e.remove(x.attributes[d]);x.removeEventListener("dispose",l),delete s[x.id],a.unregister(x);const _=r.get(x);_&&(e.remove(_),r.delete(x)),i.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,t.memory.geometries--}function c(x,_){return s[_.id]!==void 0||(_.addEventListener("dispose",l),s[_.id]=new WeakRef(_),a.register(_,_.id,_),t.memory.geometries++),_}function u(x){const _=x.attributes;for(const d in _)e.update(_[d],n.ARRAY_BUFFER)}function f(x){const _=x.index,d=x.attributes.position;let m=0;if(d===void 0)return;const y=_!==null?_.array.length:d.array.length/3-1,w=d.count>=65535?Ch:Rh,M=new w(Math.ceil(y/3)*6,1),v=M.array;if(_!==null){const g=_.array;m=_.version;for(let b=0,E=0;b<y;b+=3){const T=g[b+0],P=g[b+1],L=g[b+2];v[E++]=T,v[E++]=P,v[E++]=P,v[E++]=L,v[E++]=L,v[E++]=T}}else{m=d.version;for(let g=0,b=0;g<y;g+=3){const E=g+0,T=g+1,P=g+2;v[b++]=E,v[b++]=T,v[b++]=T,v[b++]=P,v[b++]=P,v[b++]=E}}M.version=m;const S=r.get(x);S&&e.remove(S),r.set(x,M)}function h(x){const _=r.get(x);if(_){const d=x.index;d!==null&&_.version<d.version&&f(x)}else f(x);return r.get(x)}function p(){for(const x in s){const _=s[x].deref();_!==void 0&&o(_)}}return{get:c,update:u,getWireframeAttribute:h,dispose:p}}function Lg(n,e,t){let i;function s(f){i=f}let r,a;function l(f){r=f.type,a=f.bytesPerElement}function o(f,h){n.drawElements(i,h,r,f*a),t.update(h,i,1)}function c(f,h,p){p!==0&&(n.drawElementsInstanced(i,h,r,f*a,p),t.update(h,i,p))}function u(f,h,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,f,0,p);let _=0;for(let d=0;d<p;d++)_+=h[d];t.update(_,i,1)}this.setMode=s,this.setIndex=l,this.render=o,this.renderInstances=c,this.renderMultiDraw=u}function Dg(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,l){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=l*(r/3);break;case n.LINES:t.lines+=l*(r/2);break;case n.LINE_STRIP:t.lines+=l*(r-1);break;case n.LINE_LOOP:t.lines+=l*r;break;case n.POINTS:t.points+=l*r;break;default:mt("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Ig(n,e,t){const i=new WeakMap,s=new Dt;function r(a,l,o){const c=a.morphTargetInfluences,u=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(l);if(h===void 0||h.count!==f){let E=function(){g.dispose(),i.delete(l),l.removeEventListener("dispose",E)};h!==void 0&&h.texture.dispose();const p=l.morphAttributes.position!==void 0,x=l.morphAttributes.normal!==void 0,_=l.morphAttributes.color!==void 0,d=l.morphAttributes.position||[],m=l.morphAttributes.normal||[],y=l.morphAttributes.color||[];let w=0;p===!0&&(w=1),x===!0&&(w=2),_===!0&&(w=3);let M=l.attributes.position.count*w,v=1;M>e.maxTextureSize&&(v=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const S=new Float32Array(M*v*4*f),g=new Eh(S,M,v,f);g.type=En,g.needsUpdate=!0;const b=w*4;for(let T=0;T<f;T++){const P=d[T],L=m[T],D=y[T],C=M*v*4*T;for(let N=0;N<P.count;N++){const k=N*b;p===!0&&(s.fromBufferAttribute(P,N),S[C+k+0]=s.x,S[C+k+1]=s.y,S[C+k+2]=s.z,S[C+k+3]=0),x===!0&&(s.fromBufferAttribute(L,N),S[C+k+4]=s.x,S[C+k+5]=s.y,S[C+k+6]=s.z,S[C+k+7]=0),_===!0&&(s.fromBufferAttribute(D,N),S[C+k+8]=s.x,S[C+k+9]=s.y,S[C+k+10]=s.z,S[C+k+11]=D.itemSize===4?s.w:1)}}h={count:f,texture:g,size:new ze(M,v)},i.set(l,h),l.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)o.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let p=0;for(let _=0;_<c.length;_++)p+=c[_];const x=l.morphTargetsRelative?1:1-p;o.getUniforms().setValue(n,"morphTargetBaseInfluence",x),o.getUniforms().setValue(n,"morphTargetInfluences",c)}o.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),o.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:r}}function Ng(n,e,t,i,s){let r=new WeakMap;function a(c){const u=s.render.frame,f=c.geometry,h=e.get(c,f);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==u&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const p=c.skeleton;r.get(p)!==u&&(p.update(),r.set(p,u))}return h}function l(){r=new WeakMap}function o(c){const u=c.target;u.removeEventListener("dispose",o),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:l}}const Fg={[oh]:"LINEAR_TONE_MAPPING",[lh]:"REINHARD_TONE_MAPPING",[ch]:"CINEON_TONE_MAPPING",[uh]:"ACES_FILMIC_TONE_MAPPING",[fh]:"AGX_TONE_MAPPING",[dh]:"NEUTRAL_TONE_MAPPING",[hh]:"CUSTOM_TONE_MAPPING"};function Ug(n,e,t,i,s,r){const a=new Xt(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let l=null,o=null,c=null;const u=new It;u.setAttribute("position",new Tt([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new Tt([0,2,0,0,2,0],2));const f=new Ep({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new gt(u,f),p=new Os(-1,1,1,-1,0,1);let x=null,_=null,d=!1,m,y=null,w=[],M=!1;this.setSize=function(v,S){a.setSize(v,S),l!==null&&l.setSize(v,S),o!==null&&o.setSize(v,S);for(let g=0;g<w.length;g++){const b=w[g];b.setSize&&b.setSize(v,S)}},this.setEffects=function(v){w=v,M=w.length>0&&w[0].isRenderPass===!0;const S=a.width,g=a.height;w.length>0&&l===null&&(l=new Xt(S,g,{type:si,depthBuffer:!1,stencilBuffer:!1}),o=new Xt(S,g,{type:si,depthBuffer:!1,stencilBuffer:!1}));const b=s===!0&&w.some(E=>E.needsDepthTexture===!0);b!==(a.depthTexture!==null)&&(b===!0&&c===null&&(c=new ki(S,g),r===!0&&(c.format=Ui,c.type=Fs)),a.dispose(),a.depthTexture=b?c:null,a.resolveDepthBuffer=b,a.storeMultisampledDepthBuffer=b);for(let E=0;E<w.length;E++){const T=w[E];T.setSize&&T.setSize(S,g),b&&T.needsDepthTexture===!0&&T.setDepthTexture&&T.setDepthTexture(c)}},this.begin=function(v,S){if(d||v.toneMapping===_i&&w.length===0)return!1;if(y=S,S!==null){const g=S.width,b=S.height;(a.width!==g||a.height!==b)&&this.setSize(g,b)}return M===!1&&v.setRenderTarget(a),m=v.toneMapping,v.toneMapping=_i,!0},this.hasRenderPass=function(){return M},this.end=function(v,S){v.toneMapping=m,d=!0;let g=a,b=l;for(let E=0;E<w.length;E++){const T=w[E];T.enabled!==!1&&(T.render(v,b,g,S),T.needsSwap!==!1&&(g=b,b=b===l?o:l))}if(x!==v.outputColorSpace||_!==v.toneMapping){x=v.outputColorSpace,_=v.toneMapping,f.defines={},ht.getTransfer(x)===vt&&(f.defines.SRGB_TRANSFER="");const E=Fg[_];E&&(f.defines[E]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=g.texture,v.setRenderTarget(y),v.render(h,p),y=null,d=!1},this.isCompositing=function(){return d},this.dispose=function(){a.dispose(),l!==null&&l.dispose(),o!==null&&o.dispose(),u.dispose(),f.dispose()}}const Gh=new ln,Vh=new ki(1,1),Wh=new Lh(1),Xh=new Eh,qh=new sp,Yh=new Ph,su=[],ru=[],au=new Float32Array(16),ou=new Float32Array(9),lu=new Float32Array(4);function zs(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=su[s];if(r===void 0&&(r=new Float32Array(s),su[s]=r),e!==0){i.toArray(r,0);for(let a=1,l=0;a!==e;++a)l+=t,n[a].toArray(r,l)}return r}function zt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Ht(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Na(n,e){let t=ru[e];t===void 0&&(t=new Int32Array(e),ru[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Og(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Bg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;n.uniform2fv(this.addr,e),Ht(t,e)}}function kg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(zt(t,e))return;n.uniform3fv(this.addr,e),Ht(t,e)}}function zg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;n.uniform4fv(this.addr,e),Ht(t,e)}}function Hg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(zt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Ht(t,e)}else{if(zt(t,i))return;lu.set(i),n.uniformMatrix2fv(this.addr,!1,lu),Ht(t,i)}}function Gg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(zt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Ht(t,e)}else{if(zt(t,i))return;ou.set(i),n.uniformMatrix3fv(this.addr,!1,ou),Ht(t,i)}}function Vg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(zt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Ht(t,e)}else{if(zt(t,i))return;au.set(i),n.uniformMatrix4fv(this.addr,!1,au),Ht(t,i)}}function Wg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Xg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;n.uniform2iv(this.addr,e),Ht(t,e)}}function qg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zt(t,e))return;n.uniform3iv(this.addr,e),Ht(t,e)}}function Yg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;n.uniform4iv(this.addr,e),Ht(t,e)}}function $g(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Kg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;n.uniform2uiv(this.addr,e),Ht(t,e)}}function Zg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zt(t,e))return;n.uniform3uiv(this.addr,e),Ht(t,e)}}function jg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;n.uniform4uiv(this.addr,e),Ht(t,e)}}function Fa(n){return n.version===0&&(n.compareFunction=wh,n.needsUpdate=!0),n}function Jg(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?r=Fa(Vh):r=Gh,t.setTexture2D(e||r,s)}function Qg(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||qh,s)}function ex(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_CUBE_SHADOW?r=Fa(Wh):r=Yh,t.setTextureCube(e||r,s)}function tx(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Xh,s)}function nx(n){switch(n){case 5126:return Og;case 35664:return Bg;case 35665:return kg;case 35666:return zg;case 35674:return Hg;case 35675:return Gg;case 35676:return Vg;case 5124:case 35670:return Wg;case 35667:case 35671:return Xg;case 35668:case 35672:return qg;case 35669:case 35673:return Yg;case 5125:return $g;case 36294:return Kg;case 36295:return Zg;case 36296:return jg;case 35678:case 36198:case 36298:case 36306:case 35682:return Jg;case 35679:case 36299:case 36307:return Qg;case 35680:case 36300:case 36308:case 36293:return ex;case 36289:case 36303:case 36311:case 36292:return tx}}function ix(n,e){n.uniform1fv(this.addr,e)}function sx(n,e){const t=zs(e,this.size,2);n.uniform2fv(this.addr,t)}function rx(n,e){const t=zs(e,this.size,3);n.uniform3fv(this.addr,t)}function ax(n,e){const t=zs(e,this.size,4);n.uniform4fv(this.addr,t)}function ox(n,e){const t=zs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function lx(n,e){const t=zs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function cx(n,e){const t=zs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function ux(n,e){n.uniform1iv(this.addr,e)}function hx(n,e){n.uniform2iv(this.addr,e)}function fx(n,e){n.uniform3iv(this.addr,e)}function dx(n,e){n.uniform4iv(this.addr,e)}function px(n,e){n.uniform1uiv(this.addr,e)}function mx(n,e){n.uniform2uiv(this.addr,e)}function gx(n,e){n.uniform3uiv(this.addr,e)}function xx(n,e){n.uniform4uiv(this.addr,e)}function vx(n,e,t){const i=this.cache,s=e.length,r=Na(t,s);zt(i,r)||(n.uniform1iv(this.addr,r),Ht(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=Fa(Vh):a=Gh;for(let l=0;l!==s;++l)t.setTexture2D(e[l]||a,r[l])}function _x(n,e,t){const i=this.cache,s=e.length,r=Na(t,s);zt(i,r)||(n.uniform1iv(this.addr,r),Ht(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||qh,r[a])}function Mx(n,e,t){const i=this.cache,s=e.length,r=Na(t,s);zt(i,r)||(n.uniform1iv(this.addr,r),Ht(i,r));let a;this.type===n.SAMPLER_CUBE_SHADOW?a=Fa(Wh):a=Yh;for(let l=0;l!==s;++l)t.setTextureCube(e[l]||a,r[l])}function Sx(n,e,t){const i=this.cache,s=e.length,r=Na(t,s);zt(i,r)||(n.uniform1iv(this.addr,r),Ht(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Xh,r[a])}function yx(n){switch(n){case 5126:return ix;case 35664:return sx;case 35665:return rx;case 35666:return ax;case 35674:return ox;case 35675:return lx;case 35676:return cx;case 5124:case 35670:return ux;case 35667:case 35671:return hx;case 35668:case 35672:return fx;case 35669:case 35673:return dx;case 5125:return px;case 36294:return mx;case 36295:return gx;case 36296:return xx;case 35678:case 36198:case 36298:case 36306:case 35682:return vx;case 35679:case 36299:case 36307:return _x;case 35680:case 36300:case 36308:case 36293:return Mx;case 36289:case 36303:case 36311:case 36292:return Sx}}class wx{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=nx(t.type)}}class bx{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=yx(t.type)}}class Ex{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const l=s[r];l.setValue(e,t[l.id],i)}}}const xo=/(\w+)(\])?(\[|\.)?/g;function cu(n,e){n.seq.push(e),n.map[e.id]=e}function Tx(n,e,t){const i=n.name,s=i.length;for(xo.lastIndex=0;;){const r=xo.exec(i),a=xo.lastIndex;let l=r[1];const o=r[2]==="]",c=r[3];if(o&&(l=l|0),c===void 0||c==="["&&a+2===s){cu(t,c===void 0?new wx(l,n,e):new bx(l,n,e));break}else{let f=t.map[l];f===void 0&&(f=new Ex(l),cu(t,f)),t=f}}}class fa{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const l=e.getActiveUniform(t,a),o=e.getUniformLocation(t,l.name);Tx(l,o,this)}const s=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){const l=t[r],o=i[l.id];o.needsUpdate!==!1&&l.setValue(e,o.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&i.push(a)}return i}}function uu(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Ax=37297;let Rx=0;function Cx(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const l=a+1;i.push(`${l===e?">":" "} ${l}: ${t[a]}`)}return i.join(`
`)}const hu=new Je;function Px(n){ht._getMatrix(hu,ht.workingColorSpace,n);const e=`mat3( ${hu.elements.map(t=>t.toFixed(4))} )`;switch(ht.getTransfer(n)){case Ea:return[e,"LinearTransferOETF"];case vt:return[e,"sRGBTransferOETF"];default:return $e("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function fu(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const l=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Cx(n.getShaderSource(e),l)}else return r}function Lx(n,e){const t=Px(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const Dx={[oh]:"Linear",[lh]:"Reinhard",[ch]:"Cineon",[uh]:"ACESFilmic",[fh]:"AgX",[dh]:"Neutral",[hh]:"Custom"};function Ix(n,e){const t=Dx[e];return t===void 0?($e("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const $r=new H;function Nx(){ht.getLuminanceCoefficients($r);const n=$r.x.toFixed(4),e=$r.y.toFixed(4),t=$r.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Fx(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(tr).join(`
`)}function Ux(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Ox(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),a=r.name;let l=1;r.type===n.FLOAT_MAT2&&(l=2),r.type===n.FLOAT_MAT3&&(l=3),r.type===n.FLOAT_MAT4&&(l=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:l}}return t}function tr(n){return n!==""}function du(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function pu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Bx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Al(n){return n.replace(Bx,kx)}function kx(n,e){const t=tt[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Al(t)}const zx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function mu(n){return n.replace(zx,Hx)}function Hx(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function gu(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const Gx={[ir]:"SHADOWMAP_TYPE_PCF",[er]:"SHADOWMAP_TYPE_VSM"};function Vx(n){return Gx[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Wx={[ur]:"ENVMAP_MODE_REFRACTION"};function Xx(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":Wx[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const qx={[Da]:"ENVMAP_BLENDING_MULTIPLY",[Ld]:"ENVMAP_BLENDING_MIX",[Dd]:"ENVMAP_BLENDING_ADD"};function Yx(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":qx[n.combine]||"ENVMAP_BLENDING_NONE"}function $x(n,e,t,i){const s=n.getContext(),r=t.defines;let a=t.vertexShader,l=t.fragmentShader;const o=Vx(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=Xx(t),f=Yx(t),h=Fx(t),p=Ux(r),x=s.createProgram();let _,d,m=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(tr).join(`
`),_.length>0&&(_+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(tr).join(`
`),d.length>0&&(d+=`
`)):(_=[gu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+o:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(tr).join(`
`),d=[gu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+o:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==_i?"#define TONE_MAPPING":"",t.toneMapping!==_i?tt.tonemapping_pars_fragment:"",t.toneMapping!==_i?Ix("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",tt.colorspace_pars_fragment,Lx("linearToOutputTexel",t.outputColorSpace),Nx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(tr).join(`
`)),a=Al(a),a=du(a,t),a=pu(a,t),l=Al(l),l=du(l,t),l=pu(l,t),a=mu(a),l=mu(l),t.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,_=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,d=["#define varying in",t.glslVersion===Rc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Rc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const y=m+_+a,w=m+d+l,M=uu(s,s.VERTEX_SHADER,y),v=uu(s,s.FRAGMENT_SHADER,w);s.attachShader(x,M),s.attachShader(x,v),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function S(T){if(n.debug.checkShaderErrors){const P=s.getProgramInfoLog(x)||"",L=s.getShaderInfoLog(M)||"",D=s.getShaderInfoLog(v)||"",C=P.trim(),N=L.trim(),k=D.trim();let U=!0,Y=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(U=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,M,v);else{const O=fu(s,M,"vertex"),V=fu(s,v,"fragment");mt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+C+`
`+O+`
`+V)}else C!==""?$e("WebGLProgram: Program Info Log:",C):(N===""||k==="")&&(Y=!1);Y&&(T.diagnostics={runnable:U,programLog:C,vertexShader:{log:N,prefix:_},fragmentShader:{log:k,prefix:d}})}s.deleteShader(M),s.deleteShader(v),g=new fa(s,x),b=Ox(s,x)}let g;this.getUniforms=function(){return g===void 0&&S(this),g};let b;this.getAttributes=function(){return b===void 0&&S(this),b};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=s.getProgramParameter(x,Ax)),E},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Rx++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=M,this.fragmentShader=v,this}let Kx=0;class Zx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new jx(e),t.set(e,i)),i}}class jx{constructor(e){this.id=Kx++,this.code=e,this.usedTimes=0}}function Jx(n){return n===is||n===Sa||n===ya}function Qx(n,e,t,i,s,r){const a=new Th,l=new Zx,o=new Set,c=[],u=new Map,f=i.logarithmicDepthBuffer,h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(g){return o.add(g),g===0?"uv":`uv${g}`}function x(g,b,E,T,P,L){const D=T.fog,C=P.geometry,N=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?T.environment:null,k=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,U=e.get(g.envMap||N,k),Y=h[g.type];let O=i.precision;g.precision!==null&&(O=i.getMaxPrecision(g.precision),O!==g.precision&&$e("WebGLProgram.getParameters:",g.precision,"not supported, using",O,"instead."));const V=C.morphAttributes.position||C.morphAttributes.normal||C.morphAttributes.color,q=V!==void 0?V.length:0;let ne=0;C.morphAttributes.position!==void 0&&(ne=1),C.morphAttributes.normal!==void 0&&(ne=2),C.morphAttributes.color!==void 0&&(ne=3);let fe,z,J,se;if(Y){const Ce=$n[Y];fe=Ce.vertexShader,z=Ce.fragmentShader}else{fe=g.vertexShader,z=g.fragmentShader;const Ce=l.getVertexShaderStage(g),xt=l.getFragmentShaderStage(g);l.update(g,Ce,xt),J=Ce.id,se=xt.id}const X=n.getRenderTarget(),F=n.state.buffers.depth.getReversed(),ee=P.isInstancedMesh===!0,ce=P.isBatchedMesh===!0,ue=!!g.map,xe=!!g.matcap,Le=!!U,$=Le&&U.isPMREMTexture===!0,ge=!!g.aoMap,Re=!!g.lightMap,De=!!g.bumpMap&&g.wireframe===!1,Ve=!!g.normalMap,Ze=!!g.displacementMap,Be=!!g.emissiveMap,et=!!g.metalnessMap,bt=!!g.roughnessMap,un=g.anisotropy>0,W=g.clearcoat>0,hn=g.diffuseRoughness>0,At=g.dispersion>0,Rt=g.retroreflectivity>0,Te=g.iridescence>0,Bt=g.sheen>0,We=g.transmission>0,Ke=un&&!!g.anisotropyMap,I=W&&!!g.clearcoatMap,A=W&&!!g.clearcoatNormalMap,Z=W&&!!g.clearcoatRoughnessMap,de=hn&&!!g.diffuseRoughnessMap,he=Te&&!!g.iridescenceMap,ve=Te&&!!g.iridescenceThicknessMap,be=Bt&&!!g.sheenColorMap,ie=Bt&&!!g.sheenRoughnessMap,re=!!g.specularMap,Me=!!g.specularColorMap,B=!!g.specularIntensityMap,ae=We&&!!g.transmissionMap,te=We&&!!g.thicknessMap,Se=!!g.gradientMap,me=!!g.alphaMap,_e=g.alphaTest>0,ke=!!g.alphaHash,st=!!g.extensions;let pe=_i;g.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(pe=n.toneMapping);const He=$?U.isCompressedCubeTexture?U.image[0].mipmaps:U.mipmaps:null,it={shaderID:Y,shaderType:g.type,shaderName:g.name,vertexShader:fe,fragmentShader:z,defines:g.defines,customVertexShaderID:J,customFragmentShaderID:se,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:O,batching:ce,batchingColor:ce&&P._colorsTexture!==null,instancing:ee,instancingColor:ee&&P.instanceColor!==null,instancingMorph:ee&&P.morphTexture!==null,outputColorSpace:X===null?n.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:ht.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:ue,matcap:xe,envMap:Le,envMapMode:Le&&U.mapping,envMapPMREM:$,envMapMaxLod:$?He.length-1:null,envMapSize:$?He[0].width:null,aoMap:ge,lightMap:Re,bumpMap:De,normalMap:Ve,displacementMap:Ze,emissiveMap:Be,normalMapObjectSpace:Ve&&g.normalMapType===Fd,normalMapTangentSpace:Ve&&g.normalMapType===wa,packedNormalMap:Ve&&g.normalMapType===wa&&Jx(g.normalMap.format),metalnessMap:et,roughnessMap:bt,anisotropy:un,anisotropyMap:Ke,clearcoat:W,clearcoatMap:I,clearcoatNormalMap:A,clearcoatRoughnessMap:Z,diffuseRoughness:hn,diffuseRoughnessMap:de,dispersion:At,retroreflection:Rt,iridescence:Te,iridescenceMap:he,iridescenceThicknessMap:ve,sheen:Bt,sheenColorMap:be,sheenRoughnessMap:ie,specularMap:re,specularColorMap:Me,specularIntensityMap:B,transmission:We,transmissionMap:ae,thicknessMap:te,gradientMap:Se,opaque:g.transparent===!1&&g.blending===Ps&&g.alphaToCoverage===!1,alphaMap:me,alphaTest:_e,alphaHash:ke,combine:g.combine,mapUv:ue&&p(g.map.channel),aoMapUv:ge&&p(g.aoMap.channel),lightMapUv:Re&&p(g.lightMap.channel),bumpMapUv:De&&p(g.bumpMap.channel),normalMapUv:Ve&&p(g.normalMap.channel),displacementMapUv:Ze&&p(g.displacementMap.channel),emissiveMapUv:Be&&p(g.emissiveMap.channel),metalnessMapUv:et&&p(g.metalnessMap.channel),roughnessMapUv:bt&&p(g.roughnessMap.channel),anisotropyMapUv:Ke&&p(g.anisotropyMap.channel),clearcoatMapUv:I&&p(g.clearcoatMap.channel),clearcoatNormalMapUv:A&&p(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Z&&p(g.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:de&&p(g.diffuseRoughnessMap.channel),iridescenceMapUv:he&&p(g.iridescenceMap.channel),iridescenceThicknessMapUv:ve&&p(g.iridescenceThicknessMap.channel),sheenColorMapUv:be&&p(g.sheenColorMap.channel),sheenRoughnessMapUv:ie&&p(g.sheenRoughnessMap.channel),specularMapUv:re&&p(g.specularMap.channel),specularColorMapUv:Me&&p(g.specularColorMap.channel),specularIntensityMapUv:B&&p(g.specularIntensityMap.channel),transmissionMapUv:ae&&p(g.transmissionMap.channel),thicknessMapUv:te&&p(g.thicknessMap.channel),alphaMapUv:me&&p(g.alphaMap.channel),vertexTangents:!!C.attributes.tangent&&(Ve||un),vertexNormals:!!C.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!C.attributes.color&&C.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!C.attributes.uv&&(ue||me),fog:!!D,useFog:g.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||C.attributes.normal===void 0&&Ve===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:F,skinning:P.isSkinnedMesh===!0,hasPositionAttribute:C.attributes.position!==void 0,morphTargets:C.morphAttributes.position!==void 0,morphNormals:C.morphAttributes.normal!==void 0,morphColors:C.morphAttributes.color!==void 0,morphTargetsCount:q,morphTextureStride:ne,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:L.filter(Ce=>Ce.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:g.dithering,shadowMapEnabled:n.shadowMap.enabled&&E.length>0,shadowMapType:n.shadowMap.type,toneMapping:pe,decodeVideoTexture:ue&&g.map.isVideoTexture===!0&&ht.getTransfer(g.map.colorSpace)===vt,decodeVideoTextureEmissive:Be&&g.emissiveMap.isVideoTexture===!0&&ht.getTransfer(g.emissiveMap.colorSpace)===vt,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===Bn,flipSided:g.side===gn,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:st&&g.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(st&&g.extensions.multiDraw===!0||ce)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return it.vertexUv1s=o.has(1),it.vertexUv2s=o.has(2),it.vertexUv3s=o.has(3),o.clear(),it}function _(g){const b=[];if(g.shaderID?b.push(g.shaderID):(b.push(g.customVertexShaderID),b.push(g.customFragmentShaderID)),g.defines!==void 0)for(const E in g.defines)b.push(E),b.push(g.defines[E]);return g.isRawShaderMaterial===!1&&(d(b,g),m(b,g),b.push(n.outputColorSpace)),b.push(g.customProgramCacheKey),b.join()}function d(g,b){g.push(b.precision),g.push(b.outputColorSpace),g.push(b.envMapMode),g.push(b.envMapPMREM),g.push(b.envMapMaxLod),g.push(b.envMapSize),g.push(b.mapUv),g.push(b.alphaMapUv),g.push(b.lightMapUv),g.push(b.aoMapUv),g.push(b.bumpMapUv),g.push(b.normalMapUv),g.push(b.displacementMapUv),g.push(b.emissiveMapUv),g.push(b.metalnessMapUv),g.push(b.roughnessMapUv),g.push(b.anisotropyMapUv),g.push(b.clearcoatMapUv),g.push(b.clearcoatNormalMapUv),g.push(b.clearcoatRoughnessMapUv),g.push(b.diffuseRoughnessMapUv),g.push(b.iridescenceMapUv),g.push(b.iridescenceThicknessMapUv),g.push(b.sheenColorMapUv),g.push(b.sheenRoughnessMapUv),g.push(b.specularMapUv),g.push(b.specularColorMapUv),g.push(b.specularIntensityMapUv),g.push(b.transmissionMapUv),g.push(b.thicknessMapUv),g.push(b.combine),g.push(b.fogExp2),g.push(b.sizeAttenuation),g.push(b.morphTargetsCount),g.push(b.numSunLights),g.push(b.numDirLights),g.push(b.numPointLights),g.push(b.numSpotLights),g.push(b.numSpotLightMaps),g.push(b.numHemiLights),g.push(b.numRectAreaLights),g.push(b.numSunLightShadows),g.push(b.numDirLightShadows),g.push(b.numPointLightShadows),g.push(b.numSpotLightShadows),g.push(b.numSpotLightShadowsWithMaps),g.push(b.numLightProbes),g.push(b.numLightProbeGrids),g.push(b.shadowMapType),g.push(b.toneMapping),g.push(b.numClippingPlanes),g.push(b.numClipIntersection),g.push(b.depthPacking)}function m(g,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.retroreflection&&a.enable(24),b.diffuseRoughness&&a.enable(25),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),b.packedNormalMap&&a.enable(22),b.vertexNormals&&a.enable(23),g.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),b.numLightProbeGrids>0&&a.enable(22),b.hasPositionAttribute&&a.enable(23),g.push(a.mask)}function y(g){const b=h[g.type];let E;if(b){const T=$n[b];E=Nh.clone(T.uniforms)}else E=g.uniforms;return E}function w(g,b){let E=u.get(b);return E!==void 0?++E.usedTimes:(E=new $x(n,b,g,s),c.push(E),u.set(b,E)),E}function M(g){if(--g.usedTimes===0){const b=c.indexOf(g);c[b]=c[c.length-1],c.pop(),u.delete(g.cacheKey),g.destroy()}}function v(g){l.remove(g)}function S(){l.dispose()}return{getParameters:x,getProgramCacheKey:_,getUniforms:y,acquireProgram:w,releaseProgram:M,releaseShaderCache:v,programs:c,dispose:S}}function ev(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let l=n.get(a);return l===void 0&&(l={},n.set(a,l)),l}function i(a){n.delete(a)}function s(a,l,o){n.get(a)[l]=o}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function tv(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function xu(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function vu(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(h){let p=0;return h.isInstancedMesh&&(p+=2),h.isSkinnedMesh&&(p+=1),p}function l(h,p,x,_,d,m){let y=n[e];return y===void 0?(y={id:h.id,object:h,geometry:p,material:x,materialVariant:a(h),groupOrder:_,renderOrder:h.renderOrder,z:d,group:m},n[e]=y):(y.id=h.id,y.object=h,y.geometry=p,y.material=x,y.materialVariant=a(h),y.groupOrder=_,y.renderOrder=h.renderOrder,y.z=d,y.group=m),e++,y}function o(h,p,x,_,d,m,y){y.reversedDepth===!0&&(d=-d);const w=l(h,p,x,_,d,m);x.transmission>0?i.push(w):x.transparent===!0?s.push(w):t.push(w)}function c(h,p,x,_,d,m){const y=l(h,p,x,_,d,m);x.transmission>0?i.unshift(y):x.transparent===!0?s.unshift(y):t.unshift(y)}function u(h,p){t.length>1&&t.sort(h||tv),i.length>1&&i.sort(p||xu),s.length>1&&s.sort(p||xu)}function f(){for(let h=e,p=n.length;h<p;h++){const x=n[h];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:o,unshift:c,finish:f,sort:u}}function nv(){let n=new WeakMap;function e(i,s){const r=n.get(i);let a;return r===void 0?(a=new vu,n.set(i,[a])):s>=r.length?(a=new vu,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function iv(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new H,color:new Ge};break;case"SpotLight":t={position:new H,direction:new H,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":t={color:new Ge,position:new H,halfWidth:new H,halfHeight:new H};break}return n[e.id]=t,t}}}function sv(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let rv=0;function av(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function ov(n){const e=new iv,t=sv(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new H);const s=new H,r=new rt,a=new rt;function l(c){let u=0,f=0,h=0;for(let L=0;L<9;L++)i.probe[L].set(0,0,0);let p=0,x=0,_=0,d=0,m=0,y=0,w=0,M=0,v=0,S=0,g=0,b=0,E=0,T=0;c.sort(av);for(let L=0,D=c.length;L<D;L++){const C=c[L],N=C.color,k=C.intensity,U=C.distance;let Y=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===is?Y=C.shadow.map.texture:Y=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)u+=N.r*k,f+=N.g*k,h+=N.b*k;else if(C.isLightProbe){for(let O=0;O<9;O++)i.probe[O].addScaledVector(C.sh.coefficients[O],k);T++}else if(C.isSunLight){const O=e.get(C);if(O.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const V=C.shadow,q=t.get(C);q.shadowIntensity=V.intensity,q.shadowBias=V.bias,q.shadowNormalBias=V.normalBias,q.shadowRadius=V.radius,q.shadowMapSize.copy(V.mapSize).multiply(V.getFrameExtents()),i.sunShadow[x]=q,i.sunShadowMap[x]=Y;const ne=V.getViewportCount();for(let fe=0;fe<ne;fe++)i.sunShadowMatrix[_+fe]=V.getMatrix(fe),i.sunShadowCascade[_+fe]=V._cascadeData[fe];_+=ne,x++}i.sun[p]=O,p++}else if(C.isDirectionalLight){const O=e.get(C);if(O.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const V=C.shadow,q=t.get(C);q.shadowIntensity=V.intensity,q.shadowBias=V.bias,q.shadowNormalBias=V.normalBias,q.shadowRadius=V.radius,q.shadowMapSize=V.mapSize,i.directionalShadow[d]=q,i.directionalShadowMap[d]=Y,i.directionalShadowMatrix[d]=C.shadow.matrix,v++}i.directional[d]=O,d++}else if(C.isSpotLight){const O=e.get(C);O.position.setFromMatrixPosition(C.matrixWorld),O.color.copy(N).multiplyScalar(k),O.distance=U,O.coneCos=Math.cos(C.angle),O.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),O.decay=C.decay,i.spot[y]=O;const V=C.shadow;if(C.map&&(i.spotLightMap[b]=C.map,b++,V.updateMatrices(C),C.castShadow&&E++),i.spotLightMatrix[y]=V.matrix,C.castShadow){const q=t.get(C);q.shadowIntensity=V.intensity,q.shadowBias=V.bias,q.shadowNormalBias=V.normalBias,q.shadowRadius=V.radius,q.shadowMapSize=V.mapSize,i.spotShadow[y]=q,i.spotShadowMap[y]=Y,g++}y++}else if(C.isRectAreaLight){const O=e.get(C);O.color.copy(N).multiplyScalar(k),O.halfWidth.set(C.width*.5,0,0),O.halfHeight.set(0,C.height*.5,0),i.rectArea[w]=O,w++}else if(C.isPointLight){const O=e.get(C);if(O.color.copy(C.color).multiplyScalar(C.intensity),O.distance=C.distance,O.decay=C.decay,C.castShadow){const V=C.shadow,q=t.get(C);q.shadowIntensity=V.intensity,q.shadowBias=V.bias,q.shadowNormalBias=V.normalBias,q.shadowRadius=V.radius,q.shadowMapSize=V.mapSize,q.shadowCameraNear=V.camera.near,q.shadowCameraFar=V.camera.far,i.pointShadow[m]=q,i.pointShadowMap[m]=Y,i.pointShadowMatrix[m]=C.shadow.matrix,S++}i.point[m]=O,m++}else if(C.isHemisphereLight){const O=e.get(C);O.skyColor.copy(C.color).multiplyScalar(k),O.groundColor.copy(C.groundColor).multiplyScalar(k),i.hemi[M]=O,M++}}w>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ae.LTC_FLOAT_1,i.rectAreaLTC2=Ae.LTC_FLOAT_2):(i.rectAreaLTC1=Ae.LTC_HALF_1,i.rectAreaLTC2=Ae.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const P=i.hash;(P.sunLength!==p||P.directionalLength!==d||P.pointLength!==m||P.spotLength!==y||P.rectAreaLength!==w||P.hemiLength!==M||P.numSunShadows!==x||P.numDirectionalShadows!==v||P.numPointShadows!==S||P.numSpotShadows!==g||P.numSpotMaps!==b||P.numLightProbes!==T)&&(i.sun.length=p,i.directional.length=d,i.spot.length=y,i.rectArea.length=w,i.point.length=m,i.hemi.length=M,i.sunShadow.length=x,i.sunShadowMap.length=x,i.sunShadowMatrix.length=_,i.sunShadowCascade.length=_,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.directionalShadowMatrix.length=v,i.pointShadow.length=S,i.pointShadowMap.length=S,i.pointShadowMatrix.length=S,i.spotShadow.length=g,i.spotShadowMap.length=g,i.spotLightMatrix.length=g+b-E,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=T,P.sunLength=p,P.directionalLength=d,P.pointLength=m,P.spotLength=y,P.rectAreaLength=w,P.hemiLength=M,P.numSunShadows=x,P.numDirectionalShadows=v,P.numPointShadows=S,P.numSpotShadows=g,P.numSpotMaps=b,P.numLightProbes=T,i.version=rv++)}function o(c,u){let f=0,h=0,p=0,x=0,_=0,d=0;const m=u.matrixWorldInverse;for(let y=0,w=c.length;y<w;y++){const M=c[y];if(M.isSunLight){const v=i.sun[f];v.direction.setFromMatrixPosition(M.matrixWorld),v.direction.transformDirection(m),f++}else if(M.isDirectionalLight){const v=i.directional[h];v.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),h++}else if(M.isSpotLight){const v=i.spot[x];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),x++}else if(M.isRectAreaLight){const v=i.rectArea[_];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),a.identity(),r.copy(M.matrixWorld),r.premultiply(m),a.extractRotation(r),v.halfWidth.set(M.width*.5,0,0),v.halfHeight.set(0,M.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),_++}else if(M.isPointLight){const v=i.point[p];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),p++}else if(M.isHemisphereLight){const v=i.hemi[d];v.direction.setFromMatrixPosition(M.matrixWorld),v.direction.transformDirection(m),d++}}}return{setup:l,setupView:o,state:i}}function _u(n){const e=new ov(n),t=[],i=[],s=[];function r(f){u.camera=f,t.length=0,i.length=0,s.length=0}function a(f){f.isLightProbeGrid?s.push(f):t.push(f)}function l(f){i.push(f)}function o(){e.setup(t),s.sort((f,h)=>f.priority-h.priority||f.id-h.id)}function c(f){e.setupView(t,f)}const u={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:o,setupLightsView:c,pushLight:a,pushShadow:l}}function lv(n){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let l;return a===void 0?(l=new _u(n),e.set(s,[l])):r>=a.length?(l=new _u(n),a.push(l)):l=a[r],l}function i(){e=new WeakMap}return{get:t,dispose:i}}const cv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,uv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,hv=[new H(1,0,0),new H(-1,0,0),new H(0,1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1)],fv=[new H(0,-1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1),new H(0,-1,0),new H(0,-1,0)],Mu=new rt,$s=new H,vo=new H;function dv(n,e,t){let i=new Bi;const s=new ze,r=new ze,a=new Dt,l=new Ap,o=new Rp,c={},u=t.maxTextureSize,f={[ns]:gn,[gn]:ns,[Bn]:Bn},h=new cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ze},radius:{value:4}},vertexShader:cv,fragmentShader:uv}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const x=new It;x.setAttribute("position",new nt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new gt(x,h),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ir;let m=this.type;this.render=function(S,g,b){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||S.length===0)return;this.type===fd&&($e("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ir);const E=n.getRenderTarget(),T=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),L=n.state;L.setBlending(Cs),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const D=m!==this.type;D&&g.traverse(function(C){C.material&&(Array.isArray(C.material)?C.material.forEach(N=>N.needsUpdate=!0):C.material.needsUpdate=!0)});for(let C=0,N=S.length;C<N;C++){const k=S[C],U=k.shadow;if(U===void 0){$e("WebGLShadowMap:",k,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;s.copy(U.mapSize);const Y=U.getFrameExtents();s.multiply(Y),r.copy(U.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/Y.x),s.x=r.x*Y.x,U.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/Y.y),s.y=r.y*Y.y,U.mapSize.y=r.y));const O=n.state.buffers.depth.getReversed();if(U.camera._reversedDepth=O,U.map===null||D===!0){if(U.map!==null&&(U.map.depthTexture!==null&&(U.map.depthTexture.dispose(),U.map.depthTexture=null),U.map.dispose()),this.type===er){if(k.isPointLight){$e("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}U.map=new Xt(s.x,s.y,{format:is,type:si,minFilter:Ft,magFilter:Ft,generateMipmaps:!1}),U.map.texture.name=k.name+".shadowMap",U.map.depthTexture=new ki(s.x,s.y,En),U.map.depthTexture.name=k.name+".shadowMapDepth",U.map.depthTexture.format=Oi,U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=_t,U.map.depthTexture.magFilter=_t}else k.isPointLight?(U.map=new tc(s.x),U.map.depthTexture=new Lh(s.x,ii)):(U.map=new Xt(s.x,s.y),U.map.depthTexture=new ki(s.x,s.y,ii)),U.map.depthTexture.name=k.name+".shadowMap",U.map.depthTexture.format=Oi,this.type===ir?(U.map.depthTexture.compareFunction=O?yh:Sh,U.map.depthTexture.minFilter=Ft,U.map.depthTexture.magFilter=Ft):(U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=_t,U.map.depthTexture.magFilter=_t);U.camera.updateProjectionMatrix()}U.map.isWebGLCubeRenderTarget!==!0&&(U.map.width!==s.x||U.map.height!==s.y)&&U.map.setSize(s.x,s.y);const V=U.map.isWebGLCubeRenderTarget?6:U.getViewportCount();k.isPointLight!==!0&&U.updateMatrices(k,b);const q=(U.camera.layers.mask&4294967294)!==0?U.camera.layers:b.layers;for(let ne=0;ne<V;ne++){const fe=U.getCamera(ne);if(k.isPointLight){const z=U.camera,J=U.matrix,se=k.distance||z.far;se!==z.far&&(z.far=se,z.updateProjectionMatrix()),$s.setFromMatrixPosition(k.matrixWorld),z.position.copy($s),vo.copy(z.position),vo.add(hv[ne]),z.up.copy(fv[ne]),z.lookAt(vo),z.updateMatrixWorld(),J.makeTranslation(-$s.x,-$s.y,-$s.z),Mu.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),U._frustum.setFromProjectionMatrix(Mu,z.coordinateSystem,z.reversedDepth)}if(U.map.isWebGLCubeRenderTarget)n.setRenderTarget(U.map,ne),n.clear();else{ne===0&&(n.setRenderTarget(U.map),n.clear());const z=U.getViewport(ne);a.set(r.x*z.x,r.y*z.y,r.x*z.z,r.y*z.w),L.viewport(a)}i=U.getFrustum(ne),M(g,b,fe,k,q,this.type)}U.isPointLightShadow!==!0&&this.type===er&&y(U,b),U.needsUpdate=!1}m=this.type,d.needsUpdate=!1,n.setRenderTarget(E,T,P)};function y(S,g){const b=e.update(_);h.defines.VSM_SAMPLES!==S.blurSamples&&(h.defines.VSM_SAMPLES=S.blurSamples,p.defines.VSM_SAMPLES=S.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),S.mapPass===null?S.mapPass=new Xt(s.x,s.y,{format:is,type:si}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),h.uniforms.shadow_pass.value=S.map.depthTexture,h.uniforms.resolution.value.set(S.map.width,S.map.height),h.uniforms.radius.value=S.radius,n.setRenderTarget(S.mapPass),n.clear(),n.renderBufferDirect(g,null,b,h,_,null),p.uniforms.shadow_pass.value=S.mapPass.texture,p.uniforms.resolution.value.set(S.map.width,S.map.height),p.uniforms.radius.value=S.radius,n.setRenderTarget(S.map),n.clear(),n.renderBufferDirect(g,null,b,p,_,null)}function w(S,g,b,E){let T=null;const P=b.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(P!==void 0)T=P;else if(T=b.isPointLight===!0?o:l,n.localClippingEnabled&&g.clipShadows===!0&&Array.isArray(g.clippingPlanes)&&g.clippingPlanes.length!==0||g.displacementMap&&g.displacementScale!==0||g.alphaMap&&g.alphaTest>0||g.map&&g.alphaTest>0||g.alphaToCoverage===!0){const L=T.uuid,D=g.uuid;let C=c[L];C===void 0&&(C={},c[L]=C);let N=C[D];N===void 0&&(N=T.clone(),C[D]=N,g.addEventListener("dispose",v)),T=N}if(T.visible=g.visible,T.wireframe=g.wireframe,E===er?T.side=g.shadowSide!==null?g.shadowSide:g.side:T.side=g.shadowSide!==null?g.shadowSide:f[g.side],T.alphaMap=g.alphaMap,T.alphaTest=g.alphaToCoverage===!0?.5:g.alphaTest,T.map=g.map,T.clipShadows=g.clipShadows,T.clippingPlanes=g.clippingPlanes,T.clipIntersection=g.clipIntersection,T.displacementMap=g.displacementMap,T.displacementScale=g.displacementScale,T.displacementBias=g.displacementBias,T.wireframeLinewidth=g.wireframeLinewidth,T.linewidth=g.linewidth,b.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const L=n.properties.get(T);L.light=b}return T}function M(S,g,b,E,T,P){if(S.visible===!1)return;if(S.layers.test(T)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&P===er)&&(!S.frustumCulled||S.intersectsFrustum(i))){S.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,S.matrixWorld);const C=e.update(S),N=S.material;if(Array.isArray(N)){const k=C.groups;for(let U=0,Y=k.length;U<Y;U++){const O=k[U],V=N[O.materialIndex];if(V&&V.visible){const q=w(S,V,E,P);S.onBeforeShadow(n,S,g,b,C,q,O),n.renderBufferDirect(b,null,C,q,S,O),S.onAfterShadow(n,S,g,b,C,q,O)}}}else if(N.visible){const k=w(S,N,E,P);S.onBeforeShadow(n,S,g,b,C,k,null),n.renderBufferDirect(b,null,C,k,S,null),S.onAfterShadow(n,S,g,b,C,k,null)}}const D=S.children;for(let C=0,N=D.length;C<N;C++)M(D[C],g,b,E,T,P)}function v(S){S.target.removeEventListener("dispose",v);for(const b in c){const E=c[b],T=S.target.uuid;T in E&&(E[T].dispose(),delete E[T])}}}function pv(n,e){function t(){let B=!1;const ae=new Dt;let te=null;const Se=new Dt(0,0,0,0);return{setMask:function(me){te!==me&&!B&&(n.colorMask(me,me,me,me),te=me)},setLocked:function(me){B=me},setClear:function(me,_e,ke,st,pe){pe===!0&&(me*=st,_e*=st,ke*=st),ae.set(me,_e,ke,st),Se.equals(ae)===!1&&(n.clearColor(me,_e,ke,st),Se.copy(ae))},reset:function(){B=!1,te=null,Se.set(-1,0,0,0)}}}function i(){let B=!1,ae=!1,te=null,Se=null,me=null;return{setReversed:function(_e){if(ae!==_e){const ke=e.get("EXT_clip_control");_e?ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.ZERO_TO_ONE_EXT):ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.NEGATIVE_ONE_TO_ONE_EXT),ae=_e;const st=me;me=null,this.setClear(st)}},getReversed:function(){return ae},setTest:function(_e){_e?F(n.DEPTH_TEST):ee(n.DEPTH_TEST)},setMask:function(_e){te!==_e&&!B&&(n.depthMask(_e),te=_e)},setFunc:function(_e){if(ae&&(_e=$d[_e]),Se!==_e){switch(_e){case Go:n.depthFunc(n.NEVER);break;case Ma:n.depthFunc(n.ALWAYS);break;case Vo:n.depthFunc(n.LESS);break;case cr:n.depthFunc(n.LEQUAL);break;case Wo:n.depthFunc(n.EQUAL);break;case Xo:n.depthFunc(n.GEQUAL);break;case qo:n.depthFunc(n.GREATER);break;case Yo:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Se=_e}},setLocked:function(_e){B=_e},setClear:function(_e){me!==_e&&(me=_e,ae&&(_e=1-_e),n.clearDepth(_e))},reset:function(){B=!1,te=null,Se=null,me=null,ae=!1}}}function s(){let B=!1,ae=null,te=null,Se=null,me=null,_e=null,ke=null,st=null,pe=null;return{setTest:function(He){B||(He?F(n.STENCIL_TEST):ee(n.STENCIL_TEST))},setMask:function(He){ae!==He&&!B&&(n.stencilMask(He),ae=He)},setFunc:function(He,it,Ce){(te!==He||Se!==it||me!==Ce)&&(n.stencilFunc(He,it,Ce),te=He,Se=it,me=Ce)},setOp:function(He,it,Ce){(_e!==He||ke!==it||st!==Ce)&&(n.stencilOp(He,it,Ce),_e=He,ke=it,st=Ce)},setLocked:function(He){B=He},setClear:function(He){pe!==He&&(n.clearStencil(He),pe=He)},reset:function(){B=!1,ae=null,te=null,Se=null,me=null,_e=null,ke=null,st=null,pe=null}}}const r=new t,a=new i,l=new s;let o={};const c=new WeakMap;let u={},f={},h={},p=new WeakMap,x=[],_=null,d=!1,m=null,y=null,w=null,M=null,v=null,S=null,g=null,b=new Ge(0,0,0),E=0,T=!1,P=null,L=null,D=null,C=null,N=null;const k=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let U=!1,Y=0;const O=n.getParameter(n.VERSION);O.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(O)[1]),U=Y>=1):O.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),U=Y>=2);let V=null,q={};const ne=n.getParameter(n.SCISSOR_BOX),fe=n.getParameter(n.VIEWPORT),z=new Dt().fromArray(ne),J=new Dt().fromArray(fe);function se(B,ae,te,Se){const me=new Uint8Array(4),_e=n.createTexture();n.bindTexture(B,_e),n.texParameteri(B,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(B,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ke=0;ke<te;ke++)B===n.TEXTURE_3D||B===n.TEXTURE_2D_ARRAY?n.texImage3D(ae,0,n.RGBA,1,1,Se,0,n.RGBA,n.UNSIGNED_BYTE,me):n.texImage2D(ae+ke,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,me);return _e}const X={};X[n.TEXTURE_2D]=se(n.TEXTURE_2D,n.TEXTURE_2D,1),X[n.TEXTURE_CUBE_MAP]=se(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),X[n.TEXTURE_2D_ARRAY]=se(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),X[n.TEXTURE_3D]=se(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),l.setClear(0),F(n.DEPTH_TEST),a.setFunc(cr),De(!1),Ve(Ec),F(n.CULL_FACE),ge(Cs);function F(B){u[B]!==!0&&(n.enable(B),u[B]=!0)}function ee(B){u[B]!==!1&&(n.disable(B),u[B]=!1)}function ce(B,ae){return h[B]!==ae?(n.bindFramebuffer(B,ae),h[B]=ae,B===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=ae),B===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=ae),!0):!1}function ue(B,ae){let te=x,Se=!1;if(B){te=p.get(ae),te===void 0&&(te=[],p.set(ae,te));const me=B.textures;if(te.length!==me.length||te[0]!==n.COLOR_ATTACHMENT0){for(let _e=0,ke=me.length;_e<ke;_e++)te[_e]=n.COLOR_ATTACHMENT0+_e;te.length=me.length,Se=!0}}else te[0]!==n.BACK&&(te[0]=n.BACK,Se=!0);Se&&n.drawBuffers(te)}function xe(B){return _!==B?(n.useProgram(B),_=B,!0):!1}const Le={[Ts]:n.FUNC_ADD,[pd]:n.FUNC_SUBTRACT,[md]:n.FUNC_REVERSE_SUBTRACT};Le[gd]=n.MIN,Le[xd]=n.MAX;const $={[vd]:n.ZERO,[_d]:n.ONE,[Md]:n.SRC_COLOR,[rh]:n.SRC_ALPHA,[Td]:n.SRC_ALPHA_SATURATE,[bd]:n.DST_COLOR,[yd]:n.DST_ALPHA,[Sd]:n.ONE_MINUS_SRC_COLOR,[ah]:n.ONE_MINUS_SRC_ALPHA,[Ed]:n.ONE_MINUS_DST_COLOR,[wd]:n.ONE_MINUS_DST_ALPHA,[Ad]:n.CONSTANT_COLOR,[Rd]:n.ONE_MINUS_CONSTANT_COLOR,[Cd]:n.CONSTANT_ALPHA,[Pd]:n.ONE_MINUS_CONSTANT_ALPHA};function ge(B,ae,te,Se,me,_e,ke,st,pe,He){if(B===Cs){d===!0&&(ee(n.BLEND),d=!1);return}if(d===!1&&(F(n.BLEND),d=!0),B!==dd){if(B!==m||He!==T){if((y!==Ts||v!==Ts)&&(n.blendEquation(n.FUNC_ADD),y=Ts,v=Ts),He)switch(B){case Ps:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case _a:n.blendFunc(n.ONE,n.ONE);break;case Tc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ac:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:mt("WebGLState: Invalid blending: ",B);break}else switch(B){case Ps:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case _a:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Tc:mt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ac:mt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:mt("WebGLState: Invalid blending: ",B);break}w=null,M=null,S=null,g=null,b.set(0,0,0),E=0,m=B,T=He}return}me=me||ae,_e=_e||te,ke=ke||Se,(ae!==y||me!==v)&&(n.blendEquationSeparate(Le[ae],Le[me]),y=ae,v=me),(te!==w||Se!==M||_e!==S||ke!==g)&&(n.blendFuncSeparate($[te],$[Se],$[_e],$[ke]),w=te,M=Se,S=_e,g=ke),(st.equals(b)===!1||pe!==E)&&(n.blendColor(st.r,st.g,st.b,pe),b.copy(st),E=pe),m=B,T=!1}function Re(B,ae){B.side===Bn?ee(n.CULL_FACE):F(n.CULL_FACE);let te=B.side===gn;ae&&(te=!te),De(te),B.blending===Ps&&B.transparent===!1?ge(Cs):ge(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),a.setFunc(B.depthFunc),a.setTest(B.depthTest),a.setMask(B.depthWrite),r.setMask(B.colorWrite);const Se=B.stencilWrite;l.setTest(Se),Se&&(l.setMask(B.stencilWriteMask),l.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),l.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),Be(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?F(n.SAMPLE_ALPHA_TO_COVERAGE):ee(n.SAMPLE_ALPHA_TO_COVERAGE)}function De(B){P!==B&&(B?n.frontFace(n.CW):n.frontFace(n.CCW),P=B)}function Ve(B){B!==cd?(F(n.CULL_FACE),B!==L&&(B===Ec?n.cullFace(n.BACK):B===ud?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ee(n.CULL_FACE),L=B}function Ze(B){B!==D&&(U&&n.lineWidth(B),D=B)}function Be(B,ae,te){B?(F(n.POLYGON_OFFSET_FILL),(C!==ae||N!==te)&&(C=ae,N=te,a.getReversed()&&(ae=-ae,te=-te),n.polygonOffset(ae,te))):ee(n.POLYGON_OFFSET_FILL)}function et(B){B?F(n.SCISSOR_TEST):ee(n.SCISSOR_TEST)}function bt(B){B===void 0&&(B=n.TEXTURE0+k-1),V!==B&&(n.activeTexture(B),V=B)}function un(B,ae,te){te===void 0&&(V===null?te=n.TEXTURE0+k-1:te=V);let Se=q[te];Se===void 0&&(Se={type:void 0,texture:void 0},q[te]=Se),(Se.type!==B||Se.texture!==ae)&&(V!==te&&(n.activeTexture(te),V=te),n.bindTexture(B,ae||X[B]),Se.type=B,Se.texture=ae)}function W(){const B=q[V];B!==void 0&&B.type!==void 0&&(n.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function hn(){try{n.compressedTexImage2D(...arguments)}catch(B){mt("WebGLState:",B)}}function At(){try{n.compressedTexImage3D(...arguments)}catch(B){mt("WebGLState:",B)}}function Rt(){try{n.texSubImage2D(...arguments)}catch(B){mt("WebGLState:",B)}}function Te(){try{n.texSubImage3D(...arguments)}catch(B){mt("WebGLState:",B)}}function Bt(){try{n.compressedTexSubImage2D(...arguments)}catch(B){mt("WebGLState:",B)}}function We(){try{n.compressedTexSubImage3D(...arguments)}catch(B){mt("WebGLState:",B)}}function Ke(){try{n.texStorage2D(...arguments)}catch(B){mt("WebGLState:",B)}}function I(){try{n.texStorage3D(...arguments)}catch(B){mt("WebGLState:",B)}}function A(){try{n.texImage2D(...arguments)}catch(B){mt("WebGLState:",B)}}function Z(){try{n.texImage3D(...arguments)}catch(B){mt("WebGLState:",B)}}function de(B){return f[B]!==void 0?f[B]:n.getParameter(B)}function he(B,ae){f[B]!==ae&&(n.pixelStorei(B,ae),f[B]=ae)}function ve(B){z.equals(B)===!1&&(n.scissor(B.x,B.y,B.z,B.w),z.copy(B))}function be(B){J.equals(B)===!1&&(n.viewport(B.x,B.y,B.z,B.w),J.copy(B))}function ie(B,ae){let te=c.get(ae);te===void 0&&(te=new WeakMap,c.set(ae,te));let Se=te.get(B);Se===void 0&&(Se=n.getUniformBlockIndex(ae,B.name),n.uniformBlockBinding(ae,Se,Se),te.set(B,Se))}function re(B,ae,te){const me=c.get(ae).get(B);o[me]!==te&&(n.bindBufferBase(n.UNIFORM_BUFFER,me,te),o[me]=te)}function Me(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},f={},V=null,q={},h={},o={},p=new WeakMap,x=[],_=null,d=!1,m=null,y=null,w=null,M=null,v=null,S=null,g=null,b=new Ge(0,0,0),E=0,T=!1,P=null,L=null,D=null,C=null,N=null,z.set(0,0,n.canvas.width,n.canvas.height),J.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),l.reset()}return{buffers:{color:r,depth:a,stencil:l},enable:F,disable:ee,bindFramebuffer:ce,drawBuffers:ue,useProgram:xe,setBlending:ge,setMaterial:Re,setFlipSided:De,setCullFace:Ve,setLineWidth:Ze,setPolygonOffset:Be,setScissorTest:et,activeTexture:bt,bindTexture:un,unbindTexture:W,compressedTexImage2D:hn,compressedTexImage3D:At,texImage2D:A,texImage3D:Z,pixelStorei:he,getParameter:de,updateUBOMapping:ie,uniformBlockBinding:re,texStorage2D:Ke,texStorage3D:I,texSubImage2D:Rt,texSubImage3D:Te,compressedTexSubImage2D:Bt,compressedTexSubImage3D:We,scissor:ve,viewport:be,reset:Me}}function mv(n,e,t,i,s,r,a){const l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,o=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ze,u=new WeakMap,f=new Set;let h;const p=new WeakMap,x=new Set,_=new FinalizationRegistry(I=>x.delete(I));let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(I,A){return d?new OffscreenCanvas(I,A):Ta("canvas")}function y(I,A,Z){let de=1;const he=Ke(I);if((he.width>Z||he.height>Z)&&(de=Z/Math.max(he.width,he.height)),de<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const ve=Math.floor(de*he.width),be=Math.floor(de*he.height);h===void 0&&(h=m(ve,be));const ie=A?m(ve,be):h;return ie.width=ve,ie.height=be,ie.getContext("2d").drawImage(I,0,0,ve,be),$e("WebGLRenderer: Texture has been resized from ("+he.width+"x"+he.height+") to ("+ve+"x"+be+")."),ie}else return"data"in I&&$e("WebGLRenderer: Image in DataTexture is too big ("+he.width+"x"+he.height+")."),I;return I}function w(I){return I.generateMipmaps}function M(I){n.generateMipmap(I)}function v(I){return I.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?n.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function S(I,A,Z,de,he,ve=!1){if(I!==null){if(n[I]!==void 0)return n[I];$e("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let be;de&&(be=e.get("EXT_texture_norm16"),be||$e("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ie=A;if(A===n.RED&&(Z===n.FLOAT&&(ie=n.R32F),Z===n.HALF_FLOAT&&(ie=n.R16F),Z===n.UNSIGNED_BYTE&&(ie=n.R8),Z===n.UNSIGNED_SHORT&&be&&(ie=be.R16_EXT),Z===n.SHORT&&be&&(ie=be.R16_SNORM_EXT)),A===n.RED_INTEGER&&(Z===n.UNSIGNED_BYTE&&(ie=n.R8UI),Z===n.UNSIGNED_SHORT&&(ie=n.R16UI),Z===n.UNSIGNED_INT&&(ie=n.R32UI),Z===n.BYTE&&(ie=n.R8I),Z===n.SHORT&&(ie=n.R16I),Z===n.INT&&(ie=n.R32I)),A===n.RG&&(Z===n.FLOAT&&(ie=n.RG32F),Z===n.HALF_FLOAT&&(ie=n.RG16F),Z===n.UNSIGNED_BYTE&&(ie=n.RG8),Z===n.UNSIGNED_SHORT&&be&&(ie=be.RG16_EXT),Z===n.SHORT&&be&&(ie=be.RG16_SNORM_EXT)),A===n.RG_INTEGER&&(Z===n.UNSIGNED_BYTE&&(ie=n.RG8UI),Z===n.UNSIGNED_SHORT&&(ie=n.RG16UI),Z===n.UNSIGNED_INT&&(ie=n.RG32UI),Z===n.BYTE&&(ie=n.RG8I),Z===n.SHORT&&(ie=n.RG16I),Z===n.INT&&(ie=n.RG32I)),A===n.RGB_INTEGER&&(Z===n.UNSIGNED_BYTE&&(ie=n.RGB8UI),Z===n.UNSIGNED_SHORT&&(ie=n.RGB16UI),Z===n.UNSIGNED_INT&&(ie=n.RGB32UI),Z===n.BYTE&&(ie=n.RGB8I),Z===n.SHORT&&(ie=n.RGB16I),Z===n.INT&&(ie=n.RGB32I)),A===n.RGBA_INTEGER&&(Z===n.UNSIGNED_BYTE&&(ie=n.RGBA8UI),Z===n.UNSIGNED_SHORT&&(ie=n.RGBA16UI),Z===n.UNSIGNED_INT&&(ie=n.RGBA32UI),Z===n.BYTE&&(ie=n.RGBA8I),Z===n.SHORT&&(ie=n.RGBA16I),Z===n.INT&&(ie=n.RGBA32I)),A===n.RGB&&(Z===n.UNSIGNED_SHORT&&be&&(ie=be.RGB16_EXT),Z===n.SHORT&&be&&(ie=be.RGB16_SNORM_EXT),Z===n.UNSIGNED_INT_5_9_9_9_REV&&(ie=n.RGB9_E5),Z===n.UNSIGNED_INT_10F_11F_11F_REV&&(ie=n.R11F_G11F_B10F)),A===n.RGBA){const re=ve?Ea:ht.getTransfer(he);Z===n.FLOAT&&(ie=n.RGBA32F),Z===n.HALF_FLOAT&&(ie=n.RGBA16F),Z===n.UNSIGNED_BYTE&&(ie=re===vt?n.SRGB8_ALPHA8:n.RGBA8),Z===n.UNSIGNED_SHORT&&be&&(ie=be.RGBA16_EXT),Z===n.SHORT&&be&&(ie=be.RGBA16_SNORM_EXT),Z===n.UNSIGNED_SHORT_4_4_4_4&&(ie=n.RGBA4),Z===n.UNSIGNED_SHORT_5_5_5_1&&(ie=n.RGB5_A1)}return(ie===n.R16F||ie===n.R32F||ie===n.RG16F||ie===n.RG32F||ie===n.RGBA16F||ie===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function g(I,A){let Z;return I?A===null||A===ii||A===Fs?Z=n.DEPTH24_STENCIL8:A===En?Z=n.DEPTH32F_STENCIL8:A===fr&&(Z=n.DEPTH24_STENCIL8,$e("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===ii||A===Fs?Z=n.DEPTH_COMPONENT24:A===En?Z=n.DEPTH_COMPONENT32F:A===fr&&(Z=n.DEPTH_COMPONENT16),Z}function b(I,A){return w(I)===!0||I.isFramebufferTexture&&I.minFilter!==_t&&I.minFilter!==Ft?Math.log2(Math.max(A.width,A.height))+1:I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?A.mipmaps.length:1}function E(I){const A=new WeakRef(I);i.get(I).__ref=A,x.add(A),_.register(I,A,A)}function T(I){const A=i.get(I).__ref;A!==void 0&&(x.delete(A),_.unregister(A))}function P(I){D(I.target)}function L(I){C(I.target)}function D(I){I.removeEventListener("dispose",P),T(I),k(I),I.isVideoTexture&&u.delete(I),I.isHTMLTexture&&f.delete(I)}function C(I){I.removeEventListener("dispose",L),T(I),Y(I)}function N(){for(const I of x){const A=I.deref();A!==void 0&&(A.isRenderTarget===!0?C(A):D(A))}x.clear(),f.clear()}function k(I){const A=i.get(I);if(A.__webglInit===void 0)return;const Z=I.source,de=p.get(Z);if(de){const he=de[A.__cacheKey];he.usedTimes--,he.usedTimes===0&&U(I),Object.keys(de).length===0&&p.delete(Z)}i.remove(I)}function U(I){const A=i.get(I);n.deleteTexture(A.__webglTexture);const Z=I.source,de=p.get(Z);delete de[A.__cacheKey],a.memory.textures--}function Y(I){const A=i.get(I);A.__depthDisposeCallback&&A.__depthDisposeCallback();const Z=I.depthTexture;if(Z&&Z.renderTarget===I&&D(Z),I.isWebGLCubeRenderTarget)for(let he=0;he<6;he++){if(Array.isArray(A.__webglFramebuffer[he]))for(let ve=0;ve<A.__webglFramebuffer[he].length;ve++)n.deleteFramebuffer(A.__webglFramebuffer[he][ve]);else n.deleteFramebuffer(A.__webglFramebuffer[he]);A.__webglDepthbuffer&&n.deleteRenderbuffer(A.__webglDepthbuffer[he])}else{if(Array.isArray(A.__webglFramebuffer))for(let he=0;he<A.__webglFramebuffer.length;he++)n.deleteFramebuffer(A.__webglFramebuffer[he]);else n.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&n.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&n.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let he=0;he<A.__webglColorRenderbuffer.length;he++)A.__webglColorRenderbuffer[he]&&n.deleteRenderbuffer(A.__webglColorRenderbuffer[he]);A.__webglDepthRenderbuffer&&n.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const de=I.textures;for(let he=0,ve=de.length;he<ve;he++){const be=i.get(de[he]);be.__webglTexture&&(n.deleteTexture(be.__webglTexture),a.memory.textures--),i.remove(de[he])}i.remove(I)}let O=0;function V(){O=0}function q(){return O}function ne(I){O=I}function fe(){const I=O;return I>=s.maxTextures&&$e("WebGLTextures: Trying to use "+(I+1)+" texture units while this GPU supports only "+s.maxTextures),O+=1,I}function z(I){const A=[];return A.push(I.wrapS),A.push(I.wrapT),A.push(I.wrapR||0),A.push(I.magFilter),A.push(I.minFilter),A.push(I.anisotropy),A.push(I.internalFormat),A.push(I.format),A.push(I.type),A.push(I.generateMipmaps),A.push(I.mipmapsAutoUpdate),A.push(I.premultiplyAlpha),A.push(I.flipY),A.push(I.unpackAlignment),A.push(I.colorSpace),A.join()}function J(I,A){const Z=i.get(I);if(I.isVideoTexture&&Bt(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&Z.__version!==I.version){const de=I.image;if(de===null)$e("WebGLRenderer: Texture marked for update but no image data found.");else if(de.complete===!1)$e("WebGLRenderer: Texture marked for update but image is incomplete");else{Re(Z,I,A);return}}else I.isExternalTexture&&(Z.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,Z.__webglTexture,n.TEXTURE0+A)}function se(I,A){const Z=i.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&Z.__version!==I.version){Re(Z,I,A);return}else I.isExternalTexture&&(Z.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,Z.__webglTexture,n.TEXTURE0+A)}function X(I,A){const Z=i.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&Z.__version!==I.version){Re(Z,I,A);return}t.bindTexture(n.TEXTURE_3D,Z.__webglTexture,n.TEXTURE0+A)}function F(I,A){const Z=i.get(I);if(I.version>0&&Z.__version!==I.version){De(Z,I,A);return}t.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture,n.TEXTURE0+A)}const ee={[hr]:n.REPEAT,[vi]:n.CLAMP_TO_EDGE,[$o]:n.MIRRORED_REPEAT},ce={[_t]:n.NEAREST,[Id]:n.NEAREST_MIPMAP_NEAREST,[Tr]:n.NEAREST_MIPMAP_LINEAR,[Ft]:n.LINEAR,[Wa]:n.LINEAR_MIPMAP_NEAREST,[Jn]:n.LINEAR_MIPMAP_LINEAR},ue={[Od]:n.NEVER,[wh]:n.ALWAYS,[Bd]:n.LESS,[Sh]:n.LEQUAL,[kd]:n.EQUAL,[yh]:n.GEQUAL,[zd]:n.GREATER,[Hd]:n.NOTEQUAL};function xe(I,A){if(A.type===En&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===Ft||A.magFilter===Wa||A.magFilter===Tr||A.magFilter===Jn||A.minFilter===Ft||A.minFilter===Wa||A.minFilter===Tr||A.minFilter===Jn)&&$e("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(I,n.TEXTURE_WRAP_S,ee[A.wrapS]),n.texParameteri(I,n.TEXTURE_WRAP_T,ee[A.wrapT]),(I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY)&&n.texParameteri(I,n.TEXTURE_WRAP_R,ee[A.wrapR]),n.texParameteri(I,n.TEXTURE_MAG_FILTER,ce[A.magFilter]),n.texParameteri(I,n.TEXTURE_MIN_FILTER,ce[A.minFilter]),A.compareFunction&&(n.texParameteri(I,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(I,n.TEXTURE_COMPARE_FUNC,ue[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===_t||A.minFilter!==Tr&&A.minFilter!==Jn||A.type===En&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||i.get(A).__currentAnisotropy){const Z=e.get("EXT_texture_filter_anisotropic");n.texParameterf(I,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),i.get(A).__currentAnisotropy=A.anisotropy}}}function Le(I,A){let Z=!1;I.__webglInit===void 0&&(I.__webglInit=!0,A.addEventListener("dispose",P),E(A));const de=A.source;let he=p.get(de);he===void 0&&(he={},p.set(de,he));const ve=z(A);if(ve!==I.__cacheKey){he[ve]===void 0&&(he[ve]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,Z=!0),he[ve].usedTimes++;const be=he[I.__cacheKey];be!==void 0&&(he[I.__cacheKey].usedTimes--,be.usedTimes===0&&U(A)),I.__cacheKey=ve,I.__webglTexture=he[ve].texture}return Z}function $(I,A,Z){return Math.floor(Math.floor(I/Z)/A)}function ge(I,A,Z,de){const ve=I.updateRanges;if(ve.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,A.width,A.height,Z,de,A.data);else{ve.sort((B,ae)=>B.start-ae.start);let be=0;for(let B=1;B<ve.length;B++){const ae=ve[be],te=ve[B],Se=ae.start+ae.count,me=$(te.start,A.width,4),_e=$(ae.start,A.width,4);te.start<=Se+1&&me===_e&&$(te.start+te.count-1,A.width,4)===me?ae.count=Math.max(ae.count,te.start+te.count-ae.start):(++be,ve[be]=te)}ve.length=be+1;const ie=t.getParameter(n.UNPACK_ROW_LENGTH),re=t.getParameter(n.UNPACK_SKIP_PIXELS),Me=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,A.width);for(let B=0,ae=ve.length;B<ae;B++){const te=ve[B],Se=Math.floor(te.start/4),me=Math.ceil(te.count/4),_e=Se%A.width,ke=Math.floor(Se/A.width),st=me,pe=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,_e),t.pixelStorei(n.UNPACK_SKIP_ROWS,ke),t.texSubImage2D(n.TEXTURE_2D,0,_e,ke,st,pe,Z,de,A.data)}I.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,ie),t.pixelStorei(n.UNPACK_SKIP_PIXELS,re),t.pixelStorei(n.UNPACK_SKIP_ROWS,Me)}}function Re(I,A,Z){let de=n.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(de=n.TEXTURE_2D_ARRAY),A.isData3DTexture&&(de=n.TEXTURE_3D);const he=Le(I,A),ve=A.source;t.bindTexture(de,I.__webglTexture,n.TEXTURE0+Z);const be=i.get(ve);if(ve.version!==be.__version||he===!0){if(t.activeTexture(n.TEXTURE0+Z),(typeof ImageBitmap<"u"&&A.image instanceof ImageBitmap)===!1){const pe=ht.getPrimaries(ht.workingColorSpace),He=A.colorSpace===Zn?null:ht.getPrimaries(A.colorSpace),it=A.colorSpace===Zn||pe===He?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,it)}t.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment);let re=y(A.image,!1,s.maxTextureSize);re=We(A,re);const Me=r.convert(A.format,A.colorSpace),B=r.convert(A.type);let ae=S(A.internalFormat,Me,B,A.normalized,A.colorSpace,A.isVideoTexture);xe(de,A);let te;const Se=A.mipmaps,me=A.isVideoTexture!==!0,_e=be.__version===void 0||he===!0,ke=ve.dataReady,st=b(A,re);if(A.isDepthTexture)ae=g(A.format===Ui,A.type),_e&&(me?t.texStorage2D(n.TEXTURE_2D,1,ae,re.width,re.height):t.texImage2D(n.TEXTURE_2D,0,ae,re.width,re.height,0,Me,B,null));else if(A.isDataTexture)if(Se.length>0){me&&_e&&t.texStorage2D(n.TEXTURE_2D,st,ae,Se[0].width,Se[0].height);for(let pe=0,He=Se.length;pe<He;pe++)te=Se[pe],me?ke&&t.texSubImage2D(n.TEXTURE_2D,pe,0,0,te.width,te.height,Me,B,te.data):t.texImage2D(n.TEXTURE_2D,pe,ae,te.width,te.height,0,Me,B,te.data);A.generateMipmaps=!1}else me?(_e&&t.texStorage2D(n.TEXTURE_2D,st,ae,re.width,re.height),ke&&ge(A,re,Me,B)):t.texImage2D(n.TEXTURE_2D,0,ae,re.width,re.height,0,Me,B,re.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){me&&_e&&t.texStorage3D(n.TEXTURE_2D_ARRAY,st,ae,Se[0].width,Se[0].height,re.depth);for(let pe=0,He=Se.length;pe<He;pe++)if(te=Se[pe],A.format!==Rn)if(Me!==null)if(me){if(ke)if(A.layerUpdates.size>0){const it=Qc(te.width,te.height,A.format,A.type);for(const Ce of A.layerUpdates){const xt=te.data.subarray(Ce*it/te.data.BYTES_PER_ELEMENT,(Ce+1)*it/te.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,pe,0,0,Ce,te.width,te.height,1,Me,xt)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,pe,0,0,0,te.width,te.height,re.depth,Me,te.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,pe,ae,te.width,te.height,re.depth,0,te.data,0,0);else $e("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else me?ke&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,pe,0,0,0,te.width,te.height,re.depth,Me,B,te.data):t.texImage3D(n.TEXTURE_2D_ARRAY,pe,ae,te.width,te.height,re.depth,0,Me,B,te.data);A.layerUpdates.size>0&&A.clearLayerUpdates()}else{me&&_e&&t.texStorage2D(n.TEXTURE_2D,st,ae,Se[0].width,Se[0].height);for(let pe=0,He=Se.length;pe<He;pe++)te=Se[pe],A.format!==Rn?Me!==null?me?ke&&t.compressedTexSubImage2D(n.TEXTURE_2D,pe,0,0,te.width,te.height,Me,te.data):t.compressedTexImage2D(n.TEXTURE_2D,pe,ae,te.width,te.height,0,te.data):$e("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):me?ke&&t.texSubImage2D(n.TEXTURE_2D,pe,0,0,te.width,te.height,Me,B,te.data):t.texImage2D(n.TEXTURE_2D,pe,ae,te.width,te.height,0,Me,B,te.data)}else if(A.isDataArrayTexture)if(me){if(_e&&t.texStorage3D(n.TEXTURE_2D_ARRAY,st,ae,re.width,re.height,re.depth),ke)if(A.layerUpdates.size>0){const pe=Qc(re.width,re.height,A.format,A.type);for(const He of A.layerUpdates){const it=re.data.subarray(He*pe/re.data.BYTES_PER_ELEMENT,(He+1)*pe/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,He,re.width,re.height,1,Me,B,it)}A.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,Me,B,re.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ae,re.width,re.height,re.depth,0,Me,B,re.data);else if(A.isData3DTexture)me?(_e&&t.texStorage3D(n.TEXTURE_3D,st,ae,re.width,re.height,re.depth),ke&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,Me,B,re.data)):t.texImage3D(n.TEXTURE_3D,0,ae,re.width,re.height,re.depth,0,Me,B,re.data);else if(A.isFramebufferTexture){if(_e)if(me)t.texStorage2D(n.TEXTURE_2D,st,ae,re.width,re.height);else{let pe=re.width,He=re.height;for(let it=0;it<st;it++)t.texImage2D(n.TEXTURE_2D,it,ae,pe,He,0,Me,B,null),pe>>=1,He>>=1}}else if(A.isHTMLTexture){if("texElementImage2D"in n){const pe=n.canvas;if(pe.hasAttribute("layoutsubtree")||pe.setAttribute("layoutsubtree","true"),re.parentNode!==pe){pe.appendChild(re),f.add(A),pe.onpaint=He=>{const it=He.changedElements;for(const Ce of f)it.includes(Ce.image)&&(Ce.needsUpdate=!0)},pe.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,re);else{const it=n.RGBA,Ce=n.RGBA,xt=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,it,Ce,xt,re)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Se.length>0){if(me&&_e){const pe=Ke(Se[0]);t.texStorage2D(n.TEXTURE_2D,st,ae,pe.width,pe.height)}for(let pe=0,He=Se.length;pe<He;pe++)te=Se[pe],me?ke&&t.texSubImage2D(n.TEXTURE_2D,pe,0,0,Me,B,te):t.texImage2D(n.TEXTURE_2D,pe,ae,Me,B,te);A.generateMipmaps=!1}else if(me){if(_e){const pe=Ke(re);t.texStorage2D(n.TEXTURE_2D,st,ae,pe.width,pe.height)}ke&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Me,B,re)}else t.texImage2D(n.TEXTURE_2D,0,ae,Me,B,re);w(A)&&A.mipmapsAutoUpdate===!0&&M(de),be.__version=ve.version,A.onUpdate&&A.onUpdate(A)}I.__version=A.version}function De(I,A,Z){if(A.image.length!==6)return;const de=Le(I,A),he=A.source;t.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+Z);const ve=i.get(he);if(he.version!==ve.__version||de===!0){t.activeTexture(n.TEXTURE0+Z);const be=ht.getPrimaries(ht.workingColorSpace),ie=A.colorSpace===Zn?null:ht.getPrimaries(A.colorSpace),re=A.colorSpace===Zn||be===ie?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);const Me=A.isCompressedTexture||A.image[0].isCompressedTexture,B=A.image[0]&&A.image[0].isDataTexture,ae=[];for(let Ce=0;Ce<6;Ce++)!Me&&!B?ae[Ce]=y(A.image[Ce],!0,s.maxCubemapSize):ae[Ce]=B?A.image[Ce].image:A.image[Ce],ae[Ce]=We(A,ae[Ce]);const te=ae[0],Se=r.convert(A.format,A.colorSpace),me=r.convert(A.type);let _e=S(A.internalFormat,Se,me,A.normalized,A.colorSpace);const ke=A.isVideoTexture!==!0,st=ve.__version===void 0||de===!0,pe=he.dataReady;let He=b(A,te);xe(n.TEXTURE_CUBE_MAP,A);let it;if(A.isDepthTexture){if(_e=g(A.format===Ui,A.type),st)if(ke)t.texStorage2D(n.TEXTURE_CUBE_MAP,1,_e,te.width,te.height);else for(let Ce=0;Ce<6;Ce++)t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0,_e,te.width,te.height,0,Se,me,null)}else if(Me){ke&&st&&t.texStorage2D(n.TEXTURE_CUBE_MAP,He,_e,te.width,te.height);for(let Ce=0;Ce<6;Ce++){it=ae[Ce].mipmaps;for(let xt=0;xt<it.length;xt++){const Gt=it[xt];A.format!==Rn?Se!==null?ke?pe&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,xt,0,0,Gt.width,Gt.height,Se,Gt.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,xt,_e,Gt.width,Gt.height,0,Gt.data):$e("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ke?pe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,xt,0,0,Gt.width,Gt.height,Se,me,Gt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,xt,_e,Gt.width,Gt.height,0,Se,me,Gt.data)}}}else{if(it=A.mipmaps,ke&&st){it.length>0&&He++;const Ce=Ke(ae[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,He,_e,Ce.width,Ce.height)}for(let Ce=0;Ce<6;Ce++)if(B){ke?pe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0,0,0,ae[Ce].width,ae[Ce].height,Se,me,ae[Ce].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0,_e,ae[Ce].width,ae[Ce].height,0,Se,me,ae[Ce].data);for(let xt=0;xt<it.length;xt++){const bi=it[xt].image[Ce].image;ke?pe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,xt+1,0,0,bi.width,bi.height,Se,me,bi.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,xt+1,_e,bi.width,bi.height,0,Se,me,bi.data)}}else{ke?pe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0,0,0,Se,me,ae[Ce]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0,_e,Se,me,ae[Ce]);for(let xt=0;xt<it.length;xt++){const Gt=it[xt];ke?pe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,xt+1,0,0,Se,me,Gt.image[Ce]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,xt+1,_e,Se,me,Gt.image[Ce])}}}w(A)&&A.mipmapsAutoUpdate===!0&&M(n.TEXTURE_CUBE_MAP),ve.__version=he.version,A.onUpdate&&A.onUpdate(A)}I.__version=A.version}function Ve(I,A,Z,de,he,ve){const be=r.convert(Z.format,Z.colorSpace),ie=r.convert(Z.type),re=S(Z.internalFormat,be,ie,Z.normalized,Z.colorSpace),Me=i.get(A),B=i.get(Z);if(B.__renderTarget=A,!Me.__hasExternalTextures){const ae=Math.max(1,A.width>>ve),te=Math.max(1,A.height>>ve);he===n.TEXTURE_3D||he===n.TEXTURE_2D_ARRAY?t.texImage3D(he,ve,re,ae,te,A.depth,0,be,ie,null):t.texImage2D(he,ve,re,ae,te,0,be,ie,null)}t.bindFramebuffer(n.FRAMEBUFFER,I),Te(A)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,de,he,B.__webglTexture,0,Rt(A)):(he===n.TEXTURE_2D||he>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&he<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,de,he,B.__webglTexture,ve),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ze(I,A,Z){if(n.bindRenderbuffer(n.RENDERBUFFER,I),A.depthBuffer){const de=A.depthTexture,he=de&&de.isDepthTexture?de.type:null,ve=g(A.stencilBuffer,he),be=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Te(A)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Rt(A),ve,A.width,A.height):Z?n.renderbufferStorageMultisample(n.RENDERBUFFER,Rt(A),ve,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,ve,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,be,n.RENDERBUFFER,I)}else{const de=A.textures;for(let he=0;he<de.length;he++){const ve=de[he],be=r.convert(ve.format,ve.colorSpace),ie=r.convert(ve.type),re=S(ve.internalFormat,be,ie,ve.normalized,ve.colorSpace);Te(A)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Rt(A),re,A.width,A.height):Z?n.renderbufferStorageMultisample(n.RENDERBUFFER,Rt(A),re,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,re,A.width,A.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Be(I,A,Z){const de=A.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,I),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const he=i.get(A.depthTexture);he.__renderTarget=A;const ve=de?A.depthTexture.image[0]:A.depthTexture.image;(!he.__webglTexture||ve.width!==A.width||ve.height!==A.height)&&(ve.width=A.width,ve.height=A.height,A.depthTexture.needsUpdate=!0),de?F(A.depthTexture,0):J(A.depthTexture,0);const be=he.__webglTexture,ie=Rt(A),re=de?n.TEXTURE_CUBE_MAP_POSITIVE_X+Z:n.TEXTURE_2D,Me=A.depthTexture.format===Ui?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(A.depthTexture.format===Oi)Te(A)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Me,re,be,0,ie):n.framebufferTexture2D(n.FRAMEBUFFER,Me,re,be,0);else if(A.depthTexture.format===Ui)Te(A)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Me,re,be,0,ie):n.framebufferTexture2D(n.FRAMEBUFFER,Me,re,be,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function et(I){const A=i.get(I),Z=I.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==I.depthTexture){const de=I.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),de){const he=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,de.removeEventListener("dispose",he)};de.addEventListener("dispose",he),A.__depthDisposeCallback=he}A.__boundDepthTexture=de}if(I.depthTexture&&!A.__autoAllocateDepthBuffer)if(Z)for(let de=0;de<6;de++)Be(A.__webglFramebuffer[de],I,de);else I.texture.mipmaps.length>0?Be(A.__webglFramebuffer[0],I,0):Be(A.__webglFramebuffer,I,0);else if(Z){A.__webglDepthbuffer=[];for(let de=0;de<6;de++)if(t.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer[de]),A.__webglDepthbuffer[de]===void 0)A.__webglDepthbuffer[de]=n.createRenderbuffer(),Ze(A.__webglDepthbuffer[de],I,!1);else{const he=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ve=A.__webglDepthbuffer[de];n.bindRenderbuffer(n.RENDERBUFFER,ve),n.framebufferRenderbuffer(n.FRAMEBUFFER,he,n.RENDERBUFFER,ve)}}else if(I.texture.mipmaps.length>0?t.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=n.createRenderbuffer(),Ze(A.__webglDepthbuffer,I,!1);else{const he=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ve=A.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ve),n.framebufferRenderbuffer(n.FRAMEBUFFER,he,n.RENDERBUFFER,ve)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function bt(I,A,Z){const de=i.get(I);A!==void 0&&Ve(de.__webglFramebuffer,I,I.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),Z!==void 0&&et(I)}function un(I){const A=I.texture,Z=i.get(I),de=i.get(A);I.addEventListener("dispose",L),E(I);const he=I.textures,ve=I.isWebGLCubeRenderTarget===!0,be=he.length>1;if(be||(de.__webglTexture===void 0&&(de.__webglTexture=n.createTexture()),de.__version=A.version,a.memory.textures++),ve){Z.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)if(A.mipmaps.length>0){Z.__webglFramebuffer[ie]=[];for(let re=0;re<A.mipmaps.length;re++)Z.__webglFramebuffer[ie][re]=n.createFramebuffer()}else Z.__webglFramebuffer[ie]=n.createFramebuffer()}else{if(A.mipmaps.length>0){Z.__webglFramebuffer=[];for(let ie=0;ie<A.mipmaps.length;ie++)Z.__webglFramebuffer[ie]=n.createFramebuffer()}else Z.__webglFramebuffer=n.createFramebuffer();if(be)for(let ie=0,re=he.length;ie<re;ie++){const Me=i.get(he[ie]);Me.__webglTexture===void 0&&(Me.__webglTexture=n.createTexture(),a.memory.textures++)}if(I.samples>0&&Te(I)===!1){Z.__webglMultisampledFramebuffer=n.createFramebuffer(),Z.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let ie=0;ie<he.length;ie++){const re=he[ie];Z.__webglColorRenderbuffer[ie]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,Z.__webglColorRenderbuffer[ie]);const Me=r.convert(re.format,re.colorSpace),B=r.convert(re.type),ae=S(re.internalFormat,Me,B,re.normalized,re.colorSpace,I.isXRRenderTarget===!0),te=Rt(I);n.renderbufferStorageMultisample(n.RENDERBUFFER,te,ae,I.width,I.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ie,n.RENDERBUFFER,Z.__webglColorRenderbuffer[ie])}n.bindRenderbuffer(n.RENDERBUFFER,null),I.depthBuffer&&(Z.__webglDepthRenderbuffer=n.createRenderbuffer(),Ze(Z.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ve){t.bindTexture(n.TEXTURE_CUBE_MAP,de.__webglTexture),xe(n.TEXTURE_CUBE_MAP,A);for(let ie=0;ie<6;ie++)if(A.mipmaps.length>0)for(let re=0;re<A.mipmaps.length;re++)Ve(Z.__webglFramebuffer[ie][re],I,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,re);else Ve(Z.__webglFramebuffer[ie],I,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0);w(A)?M(n.TEXTURE_CUBE_MAP):A.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,A.mipmaps.length-1),t.unbindTexture()}else if(be){for(let ie=0,re=he.length;ie<re;ie++){const Me=he[ie],B=i.get(Me);let ae=n.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(ae=I.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ae,B.__webglTexture),xe(ae,Me),Ve(Z.__webglFramebuffer,I,Me,n.COLOR_ATTACHMENT0+ie,ae,0),w(Me)&&M(ae)}t.unbindTexture()}else{let ie=n.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(ie=I.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ie,de.__webglTexture),xe(ie,A),A.mipmaps.length>0)for(let re=0;re<A.mipmaps.length;re++)Ve(Z.__webglFramebuffer[re],I,A,n.COLOR_ATTACHMENT0,ie,re);else Ve(Z.__webglFramebuffer,I,A,n.COLOR_ATTACHMENT0,ie,0);w(A)?M(ie):A.mipmaps.length>0&&n.texParameteri(ie,n.TEXTURE_MAX_LEVEL,A.mipmaps.length-1),t.unbindTexture()}I.depthBuffer&&et(I)}function W(I){const A=I.textures;for(let Z=0,de=A.length;Z<de;Z++){const he=A[Z];if(w(he)&&he.mipmapsAutoUpdate===!0){const ve=v(I),be=i.get(he).__webglTexture;t.bindTexture(ve,be),M(ve),t.unbindTexture()}}}const hn=[];function At(I){if(I.samples>0){if(Te(I)===!1){const A=I.textures,Z=I.width,de=I.height;let he=n.COLOR_BUFFER_BIT;const ve=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,be=i.get(I),ie=A.length>1;if(ie)for(let Me=0;Me<A.length;Me++)t.bindFramebuffer(n.FRAMEBUFFER,be.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,be.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer),I.texture.mipmaps.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,be.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let Me=0;Me<A.length;Me++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(he|=n.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(he|=n.STENCIL_BUFFER_BIT)),ie){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,be.__webglColorRenderbuffer[Me]);const B=i.get(A[Me]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,B,0)}n.blitFramebuffer(0,0,Z,de,0,0,Z,de,he,n.NEAREST),o===!0&&(hn.length=0,hn.push(n.COLOR_ATTACHMENT0+Me),I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&hn.push(ve),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,hn))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ie)for(let Me=0;Me<A.length;Me++){t.bindFramebuffer(n.FRAMEBUFFER,be.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.RENDERBUFFER,be.__webglColorRenderbuffer[Me]);const B=i.get(A[Me]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,be.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.TEXTURE_2D,B,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&o){const A=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[A])}}}function Rt(I){return Math.min(s.maxSamples,I.samples)}function Te(I){const A=i.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Bt(I){const A=a.render.frame;u.get(I)!==A&&(u.set(I,A),I.update())}function We(I,A){const Z=I.colorSpace,de=I.format,he=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||Z!==ba&&Z!==Zn&&(ht.getTransfer(Z)===vt?(de!==Rn||he!==an)&&$e("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):mt("WebGLTextures: Unsupported texture color space:",Z)),A}function Ke(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=fe,this.resetTextureUnits=V,this.getTextureUnits=q,this.setTextureUnits=ne,this.setTexture2D=J,this.setTexture2DArray=se,this.setTexture3D=X,this.setTextureCube=F,this.rebindTextures=bt,this.setupRenderTarget=un,this.updateRenderTargetMipmap=W,this.updateMultisampleRenderTarget=At,this.setupDepthRenderbuffer=et,this.setupFrameBufferTexture=Ve,this.useMultisampledRTT=Te,this.dispose=N}function gv(n,e){function t(i,s=Zn){let r;const a=ht.getTransfer(s);if(i===an)return n.UNSIGNED_BYTE;if(i===Vl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Wl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===xh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===vh)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===mh)return n.BYTE;if(i===gh)return n.SHORT;if(i===fr)return n.UNSIGNED_SHORT;if(i===Gl)return n.INT;if(i===ii)return n.UNSIGNED_INT;if(i===En)return n.FLOAT;if(i===si)return n.HALF_FLOAT;if(i===_h)return n.ALPHA;if(i===Mh)return n.RGB;if(i===Rn)return n.RGBA;if(i===Oi)return n.DEPTH_COMPONENT;if(i===Ui)return n.DEPTH_STENCIL;if(i===vr)return n.RED;if(i===Xl)return n.RED_INTEGER;if(i===is)return n.RG;if(i===ql)return n.RG_INTEGER;if(i===Yl)return n.RGBA_INTEGER;if(i===oa||i===la||i===ca||i===ua)if(a===vt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===oa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===la)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ca)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ua)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===oa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===la)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ca)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ua)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ko||i===Zo||i===jo||i===Jo)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Ko)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Zo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===jo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Jo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Qo||i===el||i===tl||i===nl||i===il||i===Sa||i===sl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Qo||i===el)return a===vt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===tl)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===nl)return r.COMPRESSED_R11_EAC;if(i===il)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Sa)return r.COMPRESSED_RG11_EAC;if(i===sl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===rl||i===al||i===ol||i===ll||i===cl||i===ul||i===hl||i===fl||i===dl||i===pl||i===ml||i===gl||i===xl||i===vl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===rl)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===al)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ol)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ll)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===cl)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ul)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===hl)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===fl)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===dl)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===pl)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ml)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===gl)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===xl)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===vl)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===_l||i===Ml||i===Sl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===_l)return a===vt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ml)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Sl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===yl||i===wl||i===ya||i===bl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===yl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===wl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ya)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===bl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Fs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const xv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,vv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class _v{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Dh(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new cn({vertexShader:xv,fragmentShader:vv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new gt(new rs(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Mv extends as{constructor(e,t){super();const i=this;let s=null,r=1,a=null,l="local-floor",o=1,c=null,u=null,f=null,h=null,p=null,x=null;const _=typeof XRWebGLBinding<"u",d=new _v,m={},y=t.getContextAttributes();let w=null,M=null;const v=[],S=[],g=new ze;let b=null,E=null;const T=new An;T.viewport=new Dt;const P=new An;P.viewport=new Dt;const L=[T,P],D=new Dp;let C=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let J=v[z];return J===void 0&&(J=new Qa,v[z]=J),J.getTargetRaySpace()},this.getControllerGrip=function(z){let J=v[z];return J===void 0&&(J=new Qa,v[z]=J),J.getGripSpace()},this.getHand=function(z){let J=v[z];return J===void 0&&(J=new Qa,v[z]=J),J.getHandSpace()};function k(z){const J=S.indexOf(z.inputSource);if(J===-1)return;const se=v[J];se!==void 0&&(se.update(z.inputSource,z.frame,c||a),se.dispatchEvent({type:z.type,data:z.inputSource}))}function U(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",U),s.removeEventListener("inputsourceschange",Y);for(let z=0;z<v.length;z++){const J=S[z];J!==null&&(S[z]=null,v[z].disconnect(J))}C=null,N=null,d.reset();for(const z in m)delete m[z];if(e.setRenderTarget(w),p=null,h=null,f=null,s=null,M=null,fe.stop(),i.isPresenting=!1,e.setPixelRatio(b),e.setSize(g.width,g.height,!1),E!==null){const z=E.camera;z.fov=E.fov,z.zoom=E.zoom,z.updateProjectionMatrix(),E=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){r=z,i.isPresenting===!0&&$e("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){l=z,i.isPresenting===!0&&$e("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(z){c=z},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f===null&&_&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(z){if(s=z,s!==null){if(w=e.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",U),s.addEventListener("inputsourceschange",Y),y.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(g),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let se=null,X=null,F=null;y.depth&&(F=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,se=y.stencil?Ui:Oi,X=y.stencil?Fs:ii);const ee={colorFormat:t.RGBA8,depthFormat:F,scaleFactor:r};f=this.getBinding(),h=f.createProjectionLayer(ee),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),M=new Xt(h.textureWidth,h.textureHeight,{format:Rn,type:an,depthTexture:new ki(h.textureWidth,h.textureHeight,X,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{const se={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,se),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new Xt(p.framebufferWidth,p.framebufferHeight,{format:Rn,type:an,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(o),c=null,a=await s.requestReferenceSpace(l),fe.setContext(s),fe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return d.getDepthTexture()};function Y(z){for(let J=0;J<z.removed.length;J++){const se=z.removed[J],X=S.indexOf(se);X>=0&&(S[X]=null,v[X].disconnect(se))}for(let J=0;J<z.added.length;J++){const se=z.added[J];let X=S.indexOf(se);if(X===-1){for(let ee=0;ee<v.length;ee++)if(ee>=S.length){S.push(se),X=ee;break}else if(S[ee]===null){S[ee]=se,X=ee;break}if(X===-1)break}const F=v[X];F&&F.connect(se)}}function O(z,J){J===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(J.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(s===null)return;let J=z.near,se=z.far;d.texture!==null&&(d.depthNear>0&&(J=d.depthNear),d.depthFar>0&&(se=d.depthFar)),D.near=P.near=T.near=J,D.far=P.far=T.far=se,(C!==D.near||N!==D.far)&&(s.updateRenderState({depthNear:D.near,depthFar:D.far}),C=D.near,N=D.far),D.layers.mask=z.layers.mask|6,T.layers.mask=D.layers.mask&-5,P.layers.mask=D.layers.mask&-3;const X=z.parent,F=D.cameras;O(D,X);for(let ee=0;ee<F.length;ee++)O(F[ee],X);D.projectionMatrix.copy(T.projectionMatrix),D.projectionMatrixInverse.copy(T.projectionMatrixInverse),E===null&&z.isPerspectiveCamera&&(E={camera:z,fov:z.fov,zoom:z.zoom}),V(z,D,X)};function V(z,J,se){se===null?z.matrix.copy(J.matrixWorld):(z.matrix.copy(se.matrixWorld),z.matrix.invert(),z.matrix.multiply(J.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0),z.projectionMatrix.copy(J.projectionMatrix),z.projectionMatrixInverse.copy(J.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=El*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(h===null&&p===null))return o},this.setFoveation=function(z){o=z,h!==null&&(h.fixedFoveation=z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=z)},this.hasDepthSensing=function(){return d.texture!==null},this.getDepthSensingMesh=function(){return d.getMesh(D)},this.getCameraTexture=function(z){return m[z]};let q=null;function ne(z,J){if(u=J.getViewerPose(c||a),x=J,u!==null){const se=u.views;p!==null&&(e.setRenderTargetFramebuffer(M,p.framebuffer),e.setRenderTarget(M));let X=!1;se.length!==D.cameras.length&&(D.cameras.length=0,X=!0);for(let ue=0;ue<se.length;ue++){const xe=se[ue];let Le=null;if(p!==null)Le=p.getViewport(xe);else{const ge=f.getViewSubImage(h,xe);Le=ge.viewport,ue===0&&(e.setRenderTargetTextures(M,ge.colorTexture,ge.depthStencilTexture),e.setRenderTarget(M))}let $=L[ue];$===void 0&&($=new An,$.layers.enable(ue),$.viewport=new Dt,L[ue]=$),$.matrix.fromArray(xe.transform.matrix),$.matrix.decompose($.position,$.quaternion,$.scale),$.projectionMatrix.fromArray(xe.projectionMatrix),$.projectionMatrixInverse.copy($.projectionMatrix).invert(),$.viewport.set(Le.x,Le.y,Le.width,Le.height),ue===0&&(D.matrix.copy($.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),X===!0&&D.cameras.push($)}const F=s.enabledFeatures;if(F&&F.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){f=i.getBinding();const ue=f.getDepthInformation(se[0]);ue&&ue.isValid&&ue.texture&&d.init(ue,s.renderState)}if(F&&F.includes("camera-access")&&_){e.state.unbindTexture(),f=i.getBinding();for(let ue=0;ue<se.length;ue++){const xe=se[ue].camera;if(xe){let Le=m[xe];Le||(Le=new Dh,m[xe]=Le);const $=f.getCameraImage(xe);Le.sourceTexture=$}}}}for(let se=0;se<v.length;se++){const X=S[se],F=v[se];X!==null&&F!==void 0&&F.update(X,J,c||a)}q&&q(z,J),J.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:J}),x=null}const fe=new Bh;fe.setAnimationLoop(ne),this.setAnimationLoop=function(z){q=z},this.dispose=function(){}}}const Sv=new rt,$h=new Je;$h.set(-1,0,0,0,1,0,0,0,1);function yv(n,e){function t(d,m){d.matrixAutoUpdate===!0&&d.updateMatrix(),m.value.copy(d.matrix)}function i(d,m){m.color.getRGB(d.fogColor.value,Ih(n)),m.isFog?(d.fogNear.value=m.near,d.fogFar.value=m.far):m.isFogExp2&&(d.fogDensity.value=m.density)}function s(d,m,y,w,M){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(d,m):m.isMeshLambertMaterial?(r(d,m),m.envMap&&(d.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(d,m),f(d,m)):m.isMeshPhongMaterial?(r(d,m),u(d,m),m.envMap&&(d.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(d,m),h(d,m),m.isMeshPhysicalMaterial&&p(d,m,M)):m.isMeshMatcapMaterial?(r(d,m),x(d,m)):m.isMeshDepthMaterial?r(d,m):m.isMeshDistanceMaterial?(r(d,m),_(d,m)):m.isMeshNormalMaterial?r(d,m):m.isLineBasicMaterial?(a(d,m),m.isLineDashedMaterial&&l(d,m)):m.isPointsMaterial?o(d,m,y,w):m.isSpriteMaterial?c(d,m):m.isShadowMaterial?(d.color.value.copy(m.color),d.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(d,m){d.opacity.value=m.opacity,m.color&&d.diffuse.value.copy(m.color),m.emissive&&d.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(d.map.value=m.map,t(m.map,d.mapTransform)),m.alphaMap&&(d.alphaMap.value=m.alphaMap,t(m.alphaMap,d.alphaMapTransform)),m.bumpMap&&(d.bumpMap.value=m.bumpMap,t(m.bumpMap,d.bumpMapTransform),d.bumpScale.value=m.bumpScale,m.side===gn&&(d.bumpScale.value*=-1)),m.normalMap&&(d.normalMap.value=m.normalMap,t(m.normalMap,d.normalMapTransform),d.normalScale.value.copy(m.normalScale),m.side===gn&&d.normalScale.value.negate()),m.displacementMap&&(d.displacementMap.value=m.displacementMap,t(m.displacementMap,d.displacementMapTransform),d.displacementScale.value=m.displacementScale,d.displacementBias.value=m.displacementBias),m.emissiveMap&&(d.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,d.emissiveMapTransform)),m.specularMap&&(d.specularMap.value=m.specularMap,t(m.specularMap,d.specularMapTransform)),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest);const y=e.get(m),w=y.envMap,M=y.envMapRotation;w&&(d.envMap.value=w,d.envMapRotation.value.setFromMatrix4(Sv.makeRotationFromEuler(M)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&d.envMapRotation.value.premultiply($h),d.reflectivity.value=m.reflectivity,d.ior.value=m.ior,d.refractionRatio.value=m.refractionRatio),m.lightMap&&(d.lightMap.value=m.lightMap,d.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,d.lightMapTransform)),m.aoMap&&(d.aoMap.value=m.aoMap,d.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,d.aoMapTransform))}function a(d,m){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity,m.map&&(d.map.value=m.map,t(m.map,d.mapTransform))}function l(d,m){d.dashSize.value=m.dashSize,d.totalSize.value=m.dashSize+m.gapSize,d.scale.value=m.scale}function o(d,m,y,w){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity,d.size.value=m.size*y,d.scale.value=w*.5,m.map&&(d.map.value=m.map,t(m.map,d.uvTransform)),m.alphaMap&&(d.alphaMap.value=m.alphaMap,t(m.alphaMap,d.alphaMapTransform)),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest)}function c(d,m){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity,d.rotation.value=m.rotation,m.map&&(d.map.value=m.map,t(m.map,d.mapTransform)),m.alphaMap&&(d.alphaMap.value=m.alphaMap,t(m.alphaMap,d.alphaMapTransform)),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest)}function u(d,m){d.specular.value.copy(m.specular),d.shininess.value=Math.max(m.shininess,1e-4)}function f(d,m){m.gradientMap&&(d.gradientMap.value=m.gradientMap)}function h(d,m){d.metalness.value=m.metalness,m.metalnessMap&&(d.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,d.metalnessMapTransform)),d.roughness.value=m.roughness,m.roughnessMap&&(d.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,d.roughnessMapTransform)),m.envMap&&(d.envMapIntensity.value=m.envMapIntensity)}function p(d,m,y){d.ior.value=m.ior,m.diffuseRoughness>0&&(d.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(d.diffuseRoughnessMap.value=m.diffuseRoughnessMap,t(m.diffuseRoughnessMap,d.diffuseRoughnessMapTransform))),m.sheen>0&&(d.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),d.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(d.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,d.sheenColorMapTransform)),m.sheenRoughnessMap&&(d.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,d.sheenRoughnessMapTransform))),m.clearcoat>0&&(d.clearcoat.value=m.clearcoat,d.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(d.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,d.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(d.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===gn&&d.clearcoatNormalScale.value.negate())),m.dispersion>0&&(d.dispersion.value=m.dispersion),m.retroreflectivity>0&&(d.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(d.iridescence.value=m.iridescence,d.iridescenceIOR.value=m.iridescenceIOR,d.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,d.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(d.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,d.iridescenceMapTransform)),m.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),m.transmission>0&&(d.transmission.value=m.transmission,d.transmissionSamplerMap.value=y.texture,d.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(d.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,d.transmissionMapTransform)),d.thickness.value=m.thickness,m.thicknessMap&&(d.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=m.attenuationDistance,d.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(d.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(d.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=m.specularIntensity,d.specularColor.value.copy(m.specularColor),m.specularColorMap&&(d.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,d.specularColorMapTransform)),m.specularIntensityMap&&(d.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,d.specularIntensityMapTransform))}function x(d,m){m.matcap&&(d.matcap.value=m.matcap)}function _(d,m){const y=e.get(m).light;d.referencePosition.value.setFromMatrixPosition(y.matrixWorld),d.nearDistance.value=y.shadow.camera.near,d.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function wv(n,e,t,i){let s={},r={};function a(y,w){const M=w.program;i.uniformBlockBinding(y,M,s[y.id])}function l(y,w){let M=s[y.id];M===void 0&&(x(y),M=o(y),s[y.id]=M,y.addEventListener("dispose",d));const v=w.program;i.updateUBOMapping(y,v);const S=e.render.frame;r[y.id]!==S&&(c(y),r[y.id]=S)}function o(y){const w=n.createBuffer(),M=y.__size,v=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,w),n.bufferData(n.UNIFORM_BUFFER,M,v),n.bindBuffer(n.UNIFORM_BUFFER,null),w}function c(y){const w=s[y.id],M=y.uniforms,v=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let S=0,g=M.length;S<g;S++){const b=M[S];if(Array.isArray(b))for(let E=0,T=b.length;E<T;E++)u(b[E],S,E,v);else u(b,S,0,v)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function u(y,w,M,v){if(h(y,w,M,v)===!0){const S=y.__offset,g=y.value;if(Array.isArray(g)){let b=0;for(let E=0;E<g.length;E++){const T=g[E],P=_(T,!0);f(T,y.__data,b),b+=P.storage/Float32Array.BYTES_PER_ELEMENT}}else f(g,y.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,S,y.__data)}}function f(y,w,M){typeof y=="number"||typeof y=="boolean"?w[M]=y:y.isMatrix3?(w[M]=y.elements[0],w[M+1]=y.elements[1],w[M+2]=y.elements[2],w[M+3]=0,w[M+4]=y.elements[3],w[M+5]=y.elements[4],w[M+6]=y.elements[5],w[M+7]=0,w[M+8]=y.elements[6],w[M+9]=y.elements[7],w[M+10]=y.elements[8],w[M+11]=0):ArrayBuffer.isView(y)?w.set(y.subarray(0,w.length-M),M):y.toArray(w,M)}function h(y,w,M,v){const S=y.value,g=w+"_"+M;if(Array.isArray(S)){v[g]===void 0&&(v[g]=[]);const b=v[g];let E=!1;for(let T=0;T<S.length;T++)p(S[T],b,T)===!0&&(E=!0);return E}return p(S,v,g)}function p(y,w,M){if(w[M]===void 0)return typeof y=="number"||typeof y=="boolean"?w[M]=y:ArrayBuffer.isView(y)?w[M]=y.slice():w[M]=y.clone(),!0;{const v=w[M];if(typeof y=="number"||typeof y=="boolean"){if(v!==y)return w[M]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(v.equals(y)===!1)return v.copy(y),!0}}return!1}function x(y){const w=y.uniforms;let M=0;const v=16;for(let g=0,b=w.length;g<b;g++){const E=Array.isArray(w[g])?w[g]:[w[g]];for(let T=0,P=E.length;T<P;T++){const L=E[T],D=Array.isArray(L.value)?L.value:[L.value],C=Array.isArray(w[g])||Array.isArray(L.value);let N=M;for(let U=0,Y=D.length;U<Y;U++){const O=D[U],V=_(O,C),q=M%v,ne=q%V.boundary,fe=q+ne;M+=ne,fe!==0&&v-fe<V.storage&&(M+=v-fe),U===0&&(N=M),M+=V.storage}const k=L.type==="int"?Int32Array:L.type==="uint"?Uint32Array:Float32Array;L.__data=new k((M-N)/Float32Array.BYTES_PER_ELEMENT),L.__offset=N}}const S=M%v;return S>0&&(M+=v-S),y.__size=M,y.__cache={},this}function _(y,w){const M={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(M.boundary=4,M.storage=4):y.isVector2?(M.boundary=8,M.storage=8):y.isVector3||y.isColor?(M.boundary=16,M.storage=12):y.isVector4?(M.boundary=16,M.storage=16):y.isMatrix3?(M.boundary=16,M.storage=48):y.isMatrix4?(M.boundary=16,M.storage=64):y.isTexture?$e("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(M.boundary=16,M.storage=y.byteLength):$e("WebGLRenderer: Unsupported uniform value type.",y),w===!0&&(M.boundary=16,M.storage=Math.ceil(M.storage/16)*16),M}function d(y){const w=y.target;w.removeEventListener("dispose",d),n.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function m(){for(const y in s)n.deleteBuffer(s[y]);s={},r={}}return{bind:a,update:l,dispose:m}}const bv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Wn=null;function Ev(){return Wn===null&&(Wn=new ls(bv,16,16,is,si),Wn.name="DFG_LUT",Wn.minFilter=Ft,Wn.magFilter=Ft,Wn.wrapS=vi,Wn.wrapT=vi,Wn.generateMipmaps=!1,Wn.needsUpdate=!0),Wn}class Tv{constructor(e={}){const{canvas:t=Xd(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:l=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:p=an}=e;this.isWebGLRenderer=!0;let x;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=i.getContextAttributes().alpha}else x=a;const _=p,d=new Set([Yl,ql,Xl]),m=new Set([an,ii,fr,Fs,Vl,Wl]),y=new Uint32Array(4),w=new Int32Array(4),M={textures:[],min:[],max:[],resolution:[]};let v=null,S=null;const g=[],b=[];let E=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=_i,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const T=this;let P=!1,L=null,D=null,C=null,N=null;this._outputColorSpace=Mn;let k=0,U=0,Y=null,O=-1,V=null;const q=new Dt,ne=new Dt;let fe=null;const z=new Ge(0);let J=0,se=t.width,X=t.height,F=1,ee=null,ce=null;const ue=new Dt(0,0,se,X),xe=new Dt(0,0,se,X);let Le=!1;const $=new Bi,ge=new Jl;let Re=!1,De=!1;const Ve=new rt,Ze=new H,Be=new Dt,et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let bt=!1;function un(){return Y===null?F:1}let W=i;function hn(R,G){return t.getContext(R,G)}let At,Rt,Te,Bt,We,Ke,I,A,Z,de,he,ve,be,ie,re,Me,B,ae,te,Se,me,_e,ke;try{const R={alpha:!0,depth:s,stencil:r,antialias:l,premultipliedAlpha:o,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Hl}`),t.addEventListener("webglcontextlost",He,!1),t.addEventListener("webglcontextrestored",it,!1),t.addEventListener("webglcontextcreationerror",Ce,!1),W===null){const G="webgl2";if(W=hn(G,R),W===null)throw hn(G)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}st()}catch(R){throw t.removeEventListener("webglcontextlost",He,!1),t.removeEventListener("webglcontextrestored",it,!1),t.removeEventListener("webglcontextcreationerror",Ce,!1),mt("WebGLRenderer: "+R.message),R}function st(){At=new Cg(W),At.init(),me=new gv(W,At),Rt=new vg(W,At,e,me),Te=new pv(W,At),Rt.reversedDepthBuffer&&h&&Te.buffers.depth.setReversed(!0),D=W.createFramebuffer(),C=W.createFramebuffer(),N=W.createFramebuffer(),Bt=new Dg(W),We=new ev,Ke=new mv(W,At,Te,We,Rt,me,Bt),I=new Rg(T),A=new Np(W),_e=new gg(W,A),Z=new Pg(W,A,Bt,_e),de=new Ng(W,Z,A,_e,Bt),ae=new Ig(W,Rt,Ke),re=new _g(We),he=new Qx(T,I,At,Rt,_e,re),ve=new yv(T,We),be=new nv,ie=new lv(At),B=new mg(T,I,Te,de,x,o),Me=new dv(T,de,Rt),ke=new wv(W,Bt,Rt,Te),te=new xg(W,At,Bt),Se=new Lg(W,At,Bt),Bt.programs=he.programs,T.capabilities=Rt,T.extensions=At,T.properties=We,T.renderLists=be,T.shadowMap=Me,T.state=Te,T.info=Bt}_!==an&&(E=new Ug(_,t.width,t.height,l,s,r));const pe=new Mv(T,W);this.xr=pe,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const R=At.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=At.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(R){R!==void 0&&(F=R,this.setSize(se,X,!1))},this.getSize=function(R){return R.set(se,X)},this.setSize=function(R,G,Q=!0){if(pe.isPresenting){$e("WebGLRenderer: Can't change size while VR device is presenting.");return}se=R,X=G,t.width=Math.floor(R*F),t.height=Math.floor(G*F),Q===!0&&(t.style.width=R+"px",t.style.height=G+"px"),E!==null&&E.setSize(t.width,t.height),this.setViewport(0,0,R,G)},this.getDrawingBufferSize=function(R){return R.set(se*F,X*F).floor()},this.setDrawingBufferSize=function(R,G,Q){se=R,X=G,F=Q,t.width=Math.floor(R*Q),t.height=Math.floor(G*Q),this.setViewport(0,0,R,G)},this.setEffects=function(R){if(_===an){mt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let G=0;G<R.length;G++)if(R[G].isOutputPass===!0){$e("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(q)},this.getViewport=function(R){return R.copy(ue)},this.setViewport=function(R,G,Q,K){R.isVector4?ue.set(R.x,R.y,R.z,R.w):ue.set(R,G,Q,K),Te.viewport(q.copy(ue).multiplyScalar(un()).round())},this.getScissor=function(R){return R.copy(xe)},this.setScissor=function(R,G,Q,K){R.isVector4?xe.set(R.x,R.y,R.z,R.w):xe.set(R,G,Q,K),Te.scissor(ne.copy(xe).multiplyScalar(un()).round())},this.getScissorTest=function(){return Le},this.setScissorTest=function(R){Te.setScissorTest(Le=R)},this.setOpaqueSort=function(R){ee=R},this.setTransparentSort=function(R){ce=R},this.getClearColor=function(R){return R.copy(B.getClearColor())},this.setClearColor=function(){B.setClearColor(...arguments)},this.getClearAlpha=function(){return B.getClearAlpha()},this.setClearAlpha=function(){B.setClearAlpha(...arguments)},this.clear=function(R=!0,G=!0,Q=!0){let K=0;if(R){let j=!1;if(Y!==null){const Ee=Y.texture.format;j=d.has(Ee)}if(j){const Ee=Y.texture.type,Ie=m.has(Ee),we=B.getClearColor(),Pe=B.getClearAlpha(),Ue=we.r,je=we.g,lt=we.b;Ie?(y[0]=Ue,y[1]=je,y[2]=lt,y[3]=Pe,W.clearBufferuiv(W.COLOR,0,y)):(w[0]=Ue,w[1]=je,w[2]=lt,w[3]=Pe,W.clearBufferiv(W.COLOR,0,w))}else K|=W.COLOR_BUFFER_BIT}G&&(K|=W.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Q&&(K|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),K!==0&&W.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),L=R},this.dispose=function(){t.removeEventListener("webglcontextlost",He,!1),t.removeEventListener("webglcontextrestored",it,!1),t.removeEventListener("webglcontextcreationerror",Ce,!1),B.dispose(),be.dispose(),ie.dispose(),Ke.dispose(),We.dispose(),I.dispose(),de.dispose(),Z.dispose(),_e.dispose(),ke.dispose(),he.dispose(),pe.dispose(),pe.removeEventListener("sessionstart",dc),pe.removeEventListener("sessionend",pc),zi.stop()};function He(R){R.preventDefault(),Pc("WebGLRenderer: Context Lost."),P=!0}function it(){Pc("WebGLRenderer: Context Restored."),P=!1;const R=Bt.autoReset,G=Me.enabled,Q=Me.autoUpdate,K=Me.needsUpdate,j=Me.type;st(),Bt.autoReset=R,Me.enabled=G,Me.autoUpdate=Q,Me.needsUpdate=K,Me.type=j}function Ce(R){mt("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function xt(R){const G=R.target;G.removeEventListener("dispose",xt),Gt(G)}function Gt(R){bi(R),We.remove(R)}function bi(R){const G=We.get(R).programs;G!==void 0&&(G.forEach(function(Q){he.releaseProgram(Q)}),R.isShaderMaterial&&he.releaseShaderCache(R))}this.renderBufferDirect=function(R,G,Q,K,j,Ee){G===null&&(G=et);const Ie=j.isMesh&&j.matrixWorld.determinantAffine()<0,we=Bf(R,G,Q,K,j);Te.setMaterial(K,Ie);let Pe=Q.index,Ue=1;if(K.wireframe===!0){if(Pe=Z.getWireframeAttribute(Q),Pe===void 0)return;Ue=2}const je=Q.drawRange,lt=Q.attributes.position;let Ne=je.start*Ue,ct=(je.start+je.count)*Ue;Ee!==null&&(Ne=Math.max(Ne,Ee.start*Ue),ct=Math.min(ct,(Ee.start+Ee.count)*Ue)),Pe!==null?(Ne=Math.max(Ne,0),ct=Math.min(ct,Pe.count)):lt!=null&&(Ne=Math.max(Ne,0),ct=Math.min(ct,lt.count));const Ut=ct-Ne;if(Ut<0||Ut===1/0)return;_e.setup(j,K,we,Q,Pe);let yt,St=te;if(Pe!==null&&(yt=A.get(Pe),St=Se,St.setIndex(yt)),j.isMesh)K.wireframe===!0?(Te.setLineWidth(K.wireframeLinewidth*un()),St.setMode(W.LINES)):St.setMode(W.TRIANGLES);else if(j.isLine){let Jt=K.linewidth;Jt===void 0&&(Jt=1),Te.setLineWidth(Jt*un()),j.isLineSegments?St.setMode(W.LINES):j.isLineLoop?St.setMode(W.LINE_LOOP):St.setMode(W.LINE_STRIP)}else j.isPoints?St.setMode(W.POINTS):j.isSprite&&St.setMode(W.TRIANGLES);if(j.isBatchedMesh)if(At.get("WEBGL_multi_draw"))St.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const Jt=j._multiDrawStarts,Fe=j._multiDrawCounts,fn=j._multiDrawCount,pt=Pe?A.get(Pe).bytesPerElement:1,Hi=We.get(K).currentProgram.getUniforms();for(let Qt=0;Qt<fn;Qt++)Hi.setValue(W,"_gl_DrawID",Qt),St.render(Jt[Qt]/pt,Fe[Qt])}else if(j.isInstancedMesh)St.renderInstances(Ne,Ut,j.count);else if(Q.isInstancedBufferGeometry){const Jt=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,Fe=Math.min(Q.instanceCount,Jt);St.renderInstances(Ne,Ut,Fe)}else St.render(Ne,Ut)};function fc(R,G,Q,K){L!==null&&R.isNodeMaterial&&L.setObject(K,R),Re===!0&&re.setState(R,Q,!1),R.transparent===!0&&R.side===Bn&&R.forceSinglePass===!1?(R.side=gn,R.needsUpdate=!0,Hs(R,G,K),R.side=ns,R.needsUpdate=!0,Hs(R,G,K),R.side=Bn):Hs(R,G,K)}this.compile=function(R,G,Q=null){Q===null&&(Q=R),L!==null&&L.renderStart(R,G,Q),S=ie.get(Q),S.init(G),b.push(S),Q.traverseVisible(function(j){j.isLight&&j.layers.test(G.layers)&&(S.pushLight(j),j.castShadow&&S.pushShadow(j))}),R!==Q&&R.traverseVisible(function(j){j.isLight&&j.layers.test(G.layers)&&(S.pushLight(j),j.castShadow&&S.pushShadow(j))}),S.setupLights(),L!==null&&L.updateLights(S.state.lightsArray),De=this.localClippingEnabled,Re=re.init(this.clippingPlanes,De),Re===!0&&re.setGlobalState(this.clippingPlanes,G),L!==null&&Me.render(S.state.shadowsArray,Q,G);const K=new Set;return R.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const Ee=j.material;if(Ee)if(Array.isArray(Ee))for(let Ie=0;Ie<Ee.length;Ie++){const we=Ee[Ie];fc(we,Q,G,j),K.add(we)}else fc(Ee,Q,G,j),K.add(Ee)}),S=b.pop(),L!==null&&L.renderEnd(),K},this.compileAsync=function(R,G,Q=null){const K=this.compile(R,G,Q);return new Promise(j=>{function Ee(){if(K.forEach(function(Ie){const Pe=We.get(Ie).currentProgram;(Pe===void 0||Pe.isReady())&&K.delete(Ie)}),K.size===0){j(R);return}setTimeout(Ee,10)}At.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let za=null;function Uf(R){za&&za(R)}function dc(){zi.stop()}function pc(){zi.start()}const zi=new Bh;zi.setAnimationLoop(Uf),typeof self<"u"&&zi.setContext(self),this.setAnimationLoop=function(R){za=R,pe.setAnimationLoop(R),R===null?zi.stop():zi.start()},pe.addEventListener("sessionstart",dc),pe.addEventListener("sessionend",pc),this.render=function(R,G){if(G!==void 0&&G.isCamera!==!0){mt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;L!==null&&L.renderStart(R,G);const Q=pe.enabled===!0&&pe.isPresenting===!0,K=E!==null&&(Y===null||Q)&&E.begin(T,Y);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),pe.enabled===!0&&pe.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(pe.cameraAutoUpdate===!0&&pe.updateCamera(G),G=pe.getCamera()),R.isScene===!0&&R.onBeforeRender(T,R,G,Y),S=ie.get(R,b.length),S.init(G),S.state.textureUnits=Ke.getTextureUnits(),b.push(S),Ve.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),G.isArrayCamera?ge.setFromArrayCamera(G):$.setFromProjectionMatrix(Ve,Hn,G.reversedDepth),De=this.localClippingEnabled,Re=re.init(this.clippingPlanes,De),v=be.get(R,g.length),v.init(),g.push(v),this.info.render.frame++,pe.enabled===!0&&pe.isPresenting===!0){const Ie=T.xr.getDepthSensingMesh();Ie!==null&&Ha(Ie,G,-1/0,T.sortObjects)}Ha(R,G,0,T.sortObjects),v.finish(),L!==null&&L.updateLights(S.state.lightsArray),T.sortObjects===!0&&v.sort(ee,ce),bt=pe.enabled===!1||pe.isPresenting===!1||pe.hasDepthSensing()===!1,bt&&B.addToRenderList(v,R),this.info.autoReset===!0&&this.info.reset(),Re===!0&&re.beginShadows();const j=S.state.shadowsArray;if(Me.render(j,R,G),Re===!0&&re.endShadows(),(K&&E.hasRenderPass())===!1){const Ie=v.opaque,we=v.transmissive;if(S.setupLights(),G.isArrayCamera){const Pe=G.cameras;if(we.length>0)for(let Ue=0,je=Pe.length;Ue<je;Ue++){const lt=Pe[Ue];gc(Ie,we,R,lt)}bt&&B.render(R);for(let Ue=0,je=Pe.length;Ue<je;Ue++){const lt=Pe[Ue];mc(v,R,lt,lt.viewport)}}else we.length>0&&gc(Ie,we,R,G),bt&&B.render(R),mc(v,R,G)}Y!==null&&U===0&&(Ke.updateMultisampleRenderTarget(Y),Ke.updateRenderTargetMipmap(Y)),K&&E.end(T),R.isScene===!0&&R.onAfterRender(T,R,G),_e.resetDefaultState(),O=-1,V=null,b.pop(),b.length>0?(S=b[b.length-1],Ke.setTextureUnits(S.state.textureUnits),Re===!0&&re.setGlobalState(T.clippingPlanes,S.state.camera)):S=null,g.pop(),g.length>0?v=g[g.length-1]:v=null,L!==null&&L.renderEnd()};function Ha(R,G,Q,K){if(R.visible===!1)return;if(R.layers.test(G.layers)){if(R.isGroup)Q=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(G);else if(R.isLight)S.pushLight(R),R.castShadow&&S.pushShadow(R);else if(R.isSprite){const Ie=G.isArrayCamera?ge:$;if(!R.frustumCulled||R.intersectsFrustum(Ie)){K&&Be.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Ve);const we=de.update(R),Pe=R.material;Pe.visible&&v.push(R,we,Pe,Q,Be.z,null,G)}}else if(R.isMesh||R.isLine||R.isPoints){const Ie=G.isArrayCamera?ge:$;if(!R.frustumCulled||R.intersectsFrustum(Ie)){const we=de.update(R),Pe=R.material;if(K&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Be.copy(R.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),Be.copy(we.boundingSphere.center)),Be.applyMatrix4(R.matrixWorld).applyMatrix4(Ve)),Array.isArray(Pe)){const Ue=we.groups;for(let je=0,lt=Ue.length;je<lt;je++){const Ne=Ue[je],ct=Pe[Ne.materialIndex];ct&&ct.visible&&v.push(R,we,ct,Q,Be.z,Ne,G)}}else Pe.visible&&v.push(R,we,Pe,Q,Be.z,null,G)}}}const Ee=R.children;for(let Ie=0,we=Ee.length;Ie<we;Ie++)Ha(Ee[Ie],G,Q,K)}function mc(R,G,Q,K){const{opaque:j,transmissive:Ee,transparent:Ie}=R;S.setupLightsView(Q),Re===!0&&re.setGlobalState(T.clippingPlanes,Q),K&&Te.viewport(q.copy(K)),j.length>0&&wr(j,G,Q),Ee.length>0&&wr(Ee,G,Q),Ie.length>0&&wr(Ie,G,Q),Te.buffers.depth.setTest(!0),Te.buffers.depth.setMask(!0),Te.buffers.color.setMask(!0),Te.setPolygonOffset(!1)}function gc(R,G,Q,K){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[K.id]===void 0){const Ne=At.has("EXT_color_buffer_half_float")||At.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[K.id]=new Xt(1,1,{generateMipmaps:!0,type:Ne?si:an,minFilter:Jn,samples:Math.max(4,Rt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ht.workingColorSpace})}const Ee=S.state.transmissionRenderTarget[K.id],Ie=K.viewport||q;Ee.setSize(Ie.z*T.transmissionResolutionScale,Ie.w*T.transmissionResolutionScale);const we=T.getRenderTarget(),Pe=T.getActiveCubeFace(),Ue=T.getActiveMipmapLevel();T.setRenderTarget(Ee),T.getClearColor(z),J=T.getClearAlpha(),J<1&&T.setClearColor(16777215,.5),T.clear(),bt&&B.render(Q);const je=T.toneMapping;T.toneMapping=_i;const lt=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),S.setupLightsView(K),Re===!0&&re.setGlobalState(T.clippingPlanes,K),wr(R,Q,K),Ke.updateMultisampleRenderTarget(Ee),Ke.updateRenderTargetMipmap(Ee),At.has("WEBGL_multisampled_render_to_texture")===!1){let Ne=!1;for(let ct=0,Ut=G.length;ct<Ut;ct++){const yt=G[ct],{object:St,geometry:Jt,material:Fe,group:fn}=yt;if(Fe.side===Bn&&St.layers.test(K.layers)){const pt=Fe.side;Fe.side=gn,Fe.needsUpdate=!0,xc(St,Q,K,Jt,Fe,fn),Fe.side=pt,Fe.needsUpdate=!0,Ne=!0}}Ne===!0&&(Ke.updateMultisampleRenderTarget(Ee),Ke.updateRenderTargetMipmap(Ee))}T.setRenderTarget(we,Pe,Ue),T.setClearColor(z,J),lt!==void 0&&(K.viewport=lt),T.toneMapping=je}function wr(R,G,Q){const K=G.isScene===!0?G.overrideMaterial:null;for(let j=0,Ee=R.length;j<Ee;j++){const Ie=R[j],{object:we,geometry:Pe,group:Ue}=Ie;let je=Ie.material;je.allowOverride===!0&&K!==null&&(je=K),we.layers.test(Q.layers)&&xc(we,G,Q,Pe,je,Ue)}}function xc(R,G,Q,K,j,Ee){L!==null&&j.isNodeMaterial&&L.setObject(R,j),R.onBeforeRender(T,G,Q,K,j,Ee),R.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),j.onBeforeRender(T,G,Q,K,R,Ee),j.transparent===!0&&j.side===Bn&&j.forceSinglePass===!1?(j.side=gn,j.needsUpdate=!0,T.renderBufferDirect(Q,G,K,j,R,Ee),j.side=ns,j.needsUpdate=!0,T.renderBufferDirect(Q,G,K,j,R,Ee),j.side=Bn):T.renderBufferDirect(Q,G,K,j,R,Ee),R.onAfterRender(T,G,Q,K,j,Ee)}function vc(R){let G=0;for(const Q of R)Q.texture!==null&&G++;return G}function Hs(R,G,Q){G.isScene!==!0&&(G=et);const K=We.get(R),j=S.state.lights,Ee=S.state.shadowsArray,Ie=j.state.version,we=he.getParameters(R,j.state,Ee,G,Q,S.state.lightProbeGridArray),Pe=he.getProgramCacheKey(we);let Ue=K.programs;K.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?G.environment:null,K.fog=G.fog;const je=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;K.envMap=I.get(R.envMap||K.environment,je),K.envMapRotation=K.environment!==null&&R.envMap===null?G.environmentRotation:R.envMapRotation,Ue===void 0&&(R.addEventListener("dispose",xt),Ue=new Map,K.programs=Ue,K.programVariants=new Map);let lt=Ue.get(Pe);if(lt!==void 0){if(K.currentProgram===lt&&K.lightsStateVersion===Ie)return Mc(R,we),lt}else we.uniforms=he.getUniforms(R),L!==null&&R.isNodeMaterial&&L.build(R,Q,we),R.onBeforeCompile(we,T),lt=he.acquireProgram(we,Pe),Ue.set(Pe,lt),K.uniforms=we.uniforms;const Ne=K.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ne.clippingPlanes=re.uniform),Mc(R,we),K.needsLights=zf(R),K.lightsStateVersion=Ie,K.needsLights&&(Ne.ambientLightColor.value=j.state.ambient,Ne.lightProbe.value=j.state.probe,Ne.sunLights.value=j.state.sun,Ne.sunLightShadows.value=j.state.sunShadow,Ne.directionalLights.value=j.state.directional,Ne.directionalLightShadows.value=j.state.directionalShadow,Ne.spotLights.value=j.state.spot,Ne.spotLightShadows.value=j.state.spotShadow,Ne.rectAreaLights.value=j.state.rectArea,Ne.ltc_1.value=j.state.rectAreaLTC1,Ne.ltc_2.value=j.state.rectAreaLTC2,Ne.pointLights.value=j.state.point,Ne.pointLightShadows.value=j.state.pointShadow,Ne.hemisphereLights.value=j.state.hemi,Ne.sunShadowMatrix.value=j.state.sunShadowMatrix,Ne.sunShadowCascade.value=j.state.sunShadowCascade,Ne.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Ne.spotLightMatrix.value=j.state.spotLightMatrix,Ne.spotLightMap.value=j.state.spotLightMap,Ne.pointShadowMatrix.value=j.state.pointShadowMatrix),K.numLightProbeGrids=vc(S.state.lightProbeGridArray),K.currentProgram=lt,K.uniformsList=null,lt}function Of(R,G,Q,K,j){const Ee=We.get(R),Ie=Ee.currentProgram.id+","+K+","+j;let we=Ee.programVariants.get(Ie);return we===void 0?(we=Hs(R,G,Q),Ee.programVariants.set(Ie,we)):(Ee.currentProgram=we,Ee.uniformsList=null,Ee.outputColorSpace=K,Ee.toneMapping=j),we}function _c(R){if(R.uniformsList===null){const G=R.currentProgram.getUniforms();R.uniformsList=fa.seqWithValue(G.seq,R.uniforms)}return R.uniformsList}function Mc(R,G){const Q=We.get(R);Q.outputColorSpace=G.outputColorSpace,Q.batching=G.batching,Q.batchingColor=G.batchingColor,Q.instancing=G.instancing,Q.instancingColor=G.instancingColor,Q.instancingMorph=G.instancingMorph,Q.skinning=G.skinning,Q.morphTargets=G.morphTargets,Q.morphNormals=G.morphNormals,Q.morphColors=G.morphColors,Q.morphTargetsCount=G.morphTargetsCount,Q.numClippingPlanes=G.numClippingPlanes,Q.numIntersection=G.numClipIntersection,Q.vertexAlphas=G.vertexAlphas,Q.vertexTangents=G.vertexTangents,Q.toneMapping=G.toneMapping}function Bf(R,G,Q,K,j){G.isScene!==!0&&(G=et),Ke.resetTextureUnits();const Ee=G.fog,Ie=K.isMeshStandardMaterial||K.isMeshLambertMaterial||K.isMeshPhongMaterial?G.environment:null,we=Y===null?T.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:ht.workingColorSpace,Pe=K.isMeshStandardMaterial||K.isMeshLambertMaterial&&!K.envMap||K.isMeshPhongMaterial&&!K.envMap,Ue=I.get(K.envMap||Ie,Pe),je=K.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,lt=!!Q.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Ne=!!Q.morphAttributes.position,ct=!!Q.morphAttributes.normal,Ut=!!Q.morphAttributes.color;let yt=_i;K.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(yt=T.toneMapping);const St=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Jt=St!==void 0?St.length:0,Fe=We.get(K),fn=S.state.lights;if(Re===!0&&(De===!0||R!==V)){const Lt=R===V&&K.id===O;re.setState(K,R,Lt)}let pt=!1,Hi=!1;K.version===Fe.__version?Fe.needsLights&&Fe.lightsStateVersion!==fn.state.version||j.isBatchedMesh&&Fe.batching===!1||!j.isBatchedMesh&&Fe.batching===!0||j.isBatchedMesh&&Fe.batchingColor===!0&&j._colorsTexture===null||j.isBatchedMesh&&Fe.batchingColor===!1&&j._colorsTexture!==null||j.isInstancedMesh&&Fe.instancing===!1||!j.isInstancedMesh&&Fe.instancing===!0||j.isSkinnedMesh&&Fe.skinning===!1||!j.isSkinnedMesh&&Fe.skinning===!0||j.isInstancedMesh&&Fe.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Fe.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Fe.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Fe.instancingMorph===!1&&j.morphTexture!==null||Fe.envMap!==Ue||K.fog===!0&&Fe.fog!==Ee||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==re.numPlanes||Fe.numIntersection!==re.numIntersection)||Fe.vertexAlphas!==je||Fe.vertexTangents!==lt||Fe.morphTargets!==Ne||Fe.morphNormals!==ct||Fe.morphColors!==Ut||Fe.morphTargetsCount!==Jt||Fe.numLightProbeGrids!==vc(S.state.lightProbeGridArray)?pt=!0:(Fe.outputColorSpace!==we||Fe.toneMapping!==yt)&&(Hi=!0):(pt=!0,Fe.__version=K.version);let Qt=Fe.currentProgram;(pt===!0||Hi===!0)&&(Qt=Hi===!0?Of(K,G,j,we,yt):Hs(K,G,j),L&&K.isNodeMaterial&&L.onUpdateProgram(K,Qt,Fe));let br=!1,Ei=!1,Gi=!1;const dt=Qt.getUniforms(),qt=Fe.uniforms;if(Te.useProgram(Qt.program)&&(br=!0,Ei=!0,Gi=!0),K.id!==O&&(O=K.id,Ei=!0),br||V!==R){Te.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),dt.setValue(W,"projectionMatrix",R.projectionMatrix),dt.setValue(W,"viewMatrix",R.matrixWorldInverse);const Vt=dt.map.cameraPosition;Vt!==void 0&&Vt.setValue(W,Ze.setFromMatrixPosition(R.matrixWorld)),Rt.logarithmicDepthBuffer&&dt.setValue(W,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&dt.setValue(W,"isOrthographic",R.isOrthographicCamera===!0),V!==R&&(V=R,Ei=!0,Gi=!0)}if(Fe.needsLights&&(fn.state.sunShadowMap.length>0&&dt.setValue(W,"sunShadowMap",fn.state.sunShadowMap,Ke),fn.state.directionalShadowMap.length>0&&dt.setValue(W,"directionalShadowMap",fn.state.directionalShadowMap,Ke),fn.state.spotShadowMap.length>0&&dt.setValue(W,"spotShadowMap",fn.state.spotShadowMap,Ke),fn.state.pointShadowMap.length>0&&dt.setValue(W,"pointShadowMap",fn.state.pointShadowMap,Ke)),j.isSkinnedMesh){dt.setOptional(W,j,"bindMatrix"),dt.setOptional(W,j,"bindMatrixInverse");const Lt=j.skeleton;Lt&&(Lt.boneTexture===null&&Lt.computeBoneTexture(),dt.setValue(W,"boneTexture",Lt.boneTexture,Ke))}j.isBatchedMesh&&(dt.setOptional(W,j,"batchingTexture"),dt.setValue(W,"batchingTexture",j._matricesTexture,Ke),dt.setOptional(W,j,"batchingIdTexture"),dt.setValue(W,"batchingIdTexture",j._indirectTexture,Ke),dt.setOptional(W,j,"batchingColorTexture"),j._colorsTexture!==null&&dt.setValue(W,"batchingColorTexture",j._colorsTexture,Ke));const Cn=Q.morphAttributes;if((Cn.position!==void 0||Cn.normal!==void 0||Cn.color!==void 0)&&ae.update(j,Q,Qt),(Ei||Fe.receiveShadow!==j.receiveShadow)&&(Fe.receiveShadow=j.receiveShadow,dt.setValue(W,"receiveShadow",j.receiveShadow)),(K.isMeshStandardMaterial||K.isMeshLambertMaterial||K.isMeshPhongMaterial)&&K.envMap===null&&G.environment!==null&&(qt.envMapIntensity.value=G.environmentIntensity),qt.dfgLUT!==void 0&&(qt.dfgLUT.value=Ev()),Ei){if(dt.setValue(W,"toneMappingExposure",T.toneMappingExposure),Fe.needsLights&&kf(qt,Gi),Ee&&K.fog===!0&&ve.refreshFogUniforms(qt,Ee),ve.refreshMaterialUniforms(qt,K,F,X,S.state.transmissionRenderTarget[R.id]),Fe.needsLights&&Fe.numLightProbeGrids>0){const Lt=M;let Vt=0;for(const ai of S.state.lightProbeGridArray)ai.texture!==null&&(Lt.textures[Vt]=ai.texture,Lt.min[Vt]=ai.boundingBox.min,Lt.max[Vt]=ai.boundingBox.max,Lt.resolution[Vt]=ai.resolution,Vt++);for(const ai in Lt)Lt[ai].length=Vt;qt.probesSH.value=Lt.textures,qt.probesMin.value=Lt.min,qt.probesMax.value=Lt.max,qt.probesResolution.value=Lt.resolution}fa.upload(W,_c(Fe),qt,Ke)}if(K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(fa.upload(W,_c(Fe),qt,Ke),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&dt.setValue(W,"center",j.center),dt.setValue(W,"modelViewMatrix",j.modelViewMatrix),dt.setValue(W,"normalMatrix",j.normalMatrix),dt.setValue(W,"modelMatrix",j.matrixWorld),K.uniformsGroups!==void 0){const Lt=K.uniformsGroups;for(let Vt=0,ai=Lt.length;Vt<ai;Vt++){const yc=Lt[Vt];ke.update(yc,Qt),ke.bind(yc,Qt)}}return Qt}function kf(R,G){R.ambientLightColor.needsUpdate=G,R.lightProbe.needsUpdate=G,R.sunLights.needsUpdate=G,R.sunLightShadows.needsUpdate=G,R.directionalLights.needsUpdate=G,R.directionalLightShadows.needsUpdate=G,R.pointLights.needsUpdate=G,R.pointLightShadows.needsUpdate=G,R.spotLights.needsUpdate=G,R.spotLightShadows.needsUpdate=G,R.rectAreaLights.needsUpdate=G,R.hemisphereLights.needsUpdate=G}function zf(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(R,G,Q){const K=We.get(R);K.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,K.__autoAllocateDepthBuffer===!1&&(K.__useRenderToTexture=!1),We.get(R.texture).__webglTexture=G,We.get(R.depthTexture).__webglTexture=K.__autoAllocateDepthBuffer?void 0:Q,K.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,G){const Q=We.get(R);Q.__webglFramebuffer=G,Q.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(R,G=0,Q=0){Y=R,k=G,U=Q;let K=null,j=!1,Ee=!1;if(R){const we=We.get(R);if(we.__useDefaultFramebuffer!==void 0){Te.bindFramebuffer(W.FRAMEBUFFER,we.__webglFramebuffer),q.copy(R.viewport),ne.copy(R.scissor),fe=R.scissorTest,Te.viewport(q),Te.scissor(ne),Te.setScissorTest(fe),O=-1;return}else if(we.__webglFramebuffer===void 0)Ke.setupRenderTarget(R);else if(we.__hasExternalTextures)Ke.rebindTextures(R,We.get(R.texture).__webglTexture,We.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const je=R.depthTexture;if(we.__boundDepthTexture!==je){if(je!==null&&We.has(je)&&(R.width!==je.image.width||R.height!==je.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ke.setupDepthRenderbuffer(R)}}const Pe=R.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(Ee=!0);const Ue=We.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Ue[G])?K=Ue[G][Q]:K=Ue[G],j=!0):R.samples>0&&Ke.useMultisampledRTT(R)===!1?K=We.get(R).__webglMultisampledFramebuffer:Array.isArray(Ue)?K=Ue[Q]:K=Ue,q.copy(R.viewport),ne.copy(R.scissor),fe=R.scissorTest}else q.copy(ue).multiplyScalar(F).floor(),ne.copy(xe).multiplyScalar(F).floor(),fe=Le;if(Q!==0&&(K=D),Te.bindFramebuffer(W.FRAMEBUFFER,K)&&Te.drawBuffers(R,K),Te.viewport(q),Te.scissor(ne),Te.setScissorTest(fe),j){const we=We.get(R.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+G,we.__webglTexture,Q)}else if(Ee){const we=G;for(let Pe=0;Pe<R.textures.length;Pe++){const Ue=We.get(R.textures[Pe]);W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0+Pe,Ue.__webglTexture,Q,we)}}else if(R!==null&&Q!==0){const we=We.get(R.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,we.__webglTexture,Q)}O=-1};function Sc(R){const G=We.get(R);return(G.__readFormat!==R.format||G.__readType!==R.type)&&(G.__readFormat=R.format,G.__readType=R.type,G.__formatReadable=Rt.textureFormatReadable(R.format),G.__typeReadable=Rt.textureTypeReadable(R.type)),G}this.readRenderTargetPixels=function(R,G,Q,K,j,Ee,Ie,we=0){if(!(R&&R.isWebGLRenderTarget)){mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=We.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ie!==void 0&&(Pe=Pe[Ie],Array.isArray(Pe)&&(Pe=Pe[0])),Pe){Te.bindFramebuffer(W.FRAMEBUFFER,Pe);try{const Ue=R.textures[we],je=Ue.format,lt=Ue.type;R.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+we);const Ne=Sc(Ue);if(Ne.__formatReadable===!1){mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ne.__typeReadable===!1){mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=R.width-K&&Q>=0&&Q<=R.height-j&&W.readPixels(G,Q,K,j,me.convert(je),me.convert(lt),Ee)}finally{const Ue=Y!==null?We.get(Y).__webglFramebuffer:null;Te.bindFramebuffer(W.FRAMEBUFFER,Ue)}}},this.readRenderTargetPixelsAsync=async function(R,G,Q,K,j,Ee,Ie,we=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pe=We.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ie!==void 0&&(Pe=Pe[Ie],Array.isArray(Pe)&&(Pe=Pe[0])),Pe)if(G>=0&&G<=R.width-K&&Q>=0&&Q<=R.height-j){Te.bindFramebuffer(W.FRAMEBUFFER,Pe);const Ue=R.textures[we],je=Ue.format,lt=Ue.type;R.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+we);const Ne=Sc(Ue);if(Ne.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ne.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ct=W.createBuffer();W.bindBuffer(W.PIXEL_PACK_BUFFER,ct),W.bufferData(W.PIXEL_PACK_BUFFER,Ee.byteLength,W.STREAM_READ),W.readPixels(G,Q,K,j,me.convert(je),me.convert(lt),0),W.bindBuffer(W.PIXEL_PACK_BUFFER,null);const Ut=Y!==null?We.get(Y).__webglFramebuffer:null;Te.bindFramebuffer(W.FRAMEBUFFER,Ut);const yt=W.fenceSync(W.SYNC_GPU_COMMANDS_COMPLETE,0);return W.flush(),await Yd(W,yt,4),W.bindBuffer(W.PIXEL_PACK_BUFFER,ct),W.getBufferSubData(W.PIXEL_PACK_BUFFER,0,Ee),W.bindBuffer(W.PIXEL_PACK_BUFFER,null),W.deleteBuffer(ct),W.deleteSync(yt),Ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,G=null,Q=0){const K=Math.pow(2,-Q),j=Math.floor(R.image.width*K),Ee=Math.floor(R.image.height*K),Ie=G!==null?G.x:0,we=G!==null?G.y:0;Ke.setTexture2D(R,0),W.copyTexSubImage2D(W.TEXTURE_2D,Q,0,0,Ie,we,j,Ee),Te.unbindTexture()},this.copyTextureToTexture=function(R,G,Q=null,K=null,j=0,Ee=0){let Ie,we,Pe,Ue,je,lt,Ne,ct,Ut;const yt=R.isCompressedTexture?R.mipmaps[Ee]:R.image;if(Q!==null)Ie=Q.max.x-Q.min.x,we=Q.max.y-Q.min.y,Pe=Q.isBox3?Q.max.z-Q.min.z:1,Ue=Q.min.x,je=Q.min.y,lt=Q.isBox3?Q.min.z:0;else{const dt=Math.pow(2,-j);Ie=Math.floor(yt.width*dt),we=Math.floor(yt.height*dt),R.isDataArrayTexture?Pe=yt.depth:R.isData3DTexture?Pe=Math.floor(yt.depth*dt):Pe=1,Ue=0,je=0,lt=0}K!==null?(Ne=K.x,ct=K.y,Ut=K.z):(Ne=0,ct=0,Ut=0);const St=me.convert(G.format),Jt=me.convert(G.type);let Fe;G.isData3DTexture?(Ke.setTexture3D(G,0),Fe=W.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(Ke.setTexture2DArray(G,0),Fe=W.TEXTURE_2D_ARRAY):(Ke.setTexture2D(G,0),Fe=W.TEXTURE_2D),Te.activeTexture(W.TEXTURE0),Te.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,G.flipY),Te.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),Te.pixelStorei(W.UNPACK_ALIGNMENT,G.unpackAlignment);const fn=Te.getParameter(W.UNPACK_ROW_LENGTH),pt=Te.getParameter(W.UNPACK_IMAGE_HEIGHT),Hi=Te.getParameter(W.UNPACK_SKIP_PIXELS),Qt=Te.getParameter(W.UNPACK_SKIP_ROWS),br=Te.getParameter(W.UNPACK_SKIP_IMAGES);Te.pixelStorei(W.UNPACK_ROW_LENGTH,yt.width),Te.pixelStorei(W.UNPACK_IMAGE_HEIGHT,yt.height),Te.pixelStorei(W.UNPACK_SKIP_PIXELS,Ue),Te.pixelStorei(W.UNPACK_SKIP_ROWS,je),Te.pixelStorei(W.UNPACK_SKIP_IMAGES,lt);const Ei=R.isDataArrayTexture||R.isData3DTexture,Gi=G.isDataArrayTexture||G.isData3DTexture;if(R.isDepthTexture){const dt=We.get(R),qt=We.get(G),Cn=We.get(dt.__renderTarget),Lt=We.get(qt.__renderTarget);Te.bindFramebuffer(W.READ_FRAMEBUFFER,Cn.__webglFramebuffer),Te.bindFramebuffer(W.DRAW_FRAMEBUFFER,Lt.__webglFramebuffer);for(let Vt=0;Vt<Pe;Vt++)Ei&&(W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,We.get(R).__webglTexture,j,lt+Vt),W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,We.get(G).__webglTexture,Ee,Ut+Vt)),W.blitFramebuffer(Ue,je,Ue+Ie,je+we,Ne,ct,Ne+Ie,ct+we,W.DEPTH_BUFFER_BIT,W.NEAREST);Te.bindFramebuffer(W.READ_FRAMEBUFFER,null),Te.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else if(j!==0||R.isRenderTargetTexture||We.has(R)){const dt=We.get(R),qt=We.get(G);Te.bindFramebuffer(W.READ_FRAMEBUFFER,C),Te.bindFramebuffer(W.DRAW_FRAMEBUFFER,N);for(let Cn=0;Cn<Pe;Cn++)Ei?W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,dt.__webglTexture,j,lt+Cn):W.framebufferTexture2D(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,dt.__webglTexture,j),Gi?W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,qt.__webglTexture,Ee,Ut+Cn):W.framebufferTexture2D(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,qt.__webglTexture,Ee),j!==0?W.blitFramebuffer(Ue,je,Ue+Ie,je+we,Ne,ct,Ne+Ie,ct+we,W.COLOR_BUFFER_BIT,W.NEAREST):Gi?W.copyTexSubImage3D(Fe,Ee,Ne,ct,Ut+Cn,Ue,je,Ie,we):W.copyTexSubImage2D(Fe,Ee,Ne,ct,Ue,je,Ie,we);Te.bindFramebuffer(W.READ_FRAMEBUFFER,null),Te.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else Gi?R.isDataTexture||R.isData3DTexture?W.texSubImage3D(Fe,Ee,Ne,ct,Ut,Ie,we,Pe,St,Jt,yt.data):G.isCompressedArrayTexture?W.compressedTexSubImage3D(Fe,Ee,Ne,ct,Ut,Ie,we,Pe,St,yt.data):W.texSubImage3D(Fe,Ee,Ne,ct,Ut,Ie,we,Pe,St,Jt,yt):R.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,Ee,Ne,ct,Ie,we,St,Jt,yt.data):R.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,Ee,Ne,ct,yt.width,yt.height,St,yt.data):W.texSubImage2D(W.TEXTURE_2D,Ee,Ne,ct,Ie,we,St,Jt,yt);Te.pixelStorei(W.UNPACK_ROW_LENGTH,fn),Te.pixelStorei(W.UNPACK_IMAGE_HEIGHT,pt),Te.pixelStorei(W.UNPACK_SKIP_PIXELS,Hi),Te.pixelStorei(W.UNPACK_SKIP_ROWS,Qt),Te.pixelStorei(W.UNPACK_SKIP_IMAGES,br),Ee===0&&G.generateMipmaps===!0&&G.mipmapsAutoUpdate===!0&&W.generateMipmap(Fe),Te.unbindTexture()},this.initRenderTarget=function(R){We.get(R).__webglFramebuffer===void 0&&Ke.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?Ke.setTextureCube(R,0):R.isData3DTexture?Ke.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?Ke.setTexture2DArray(R,0):Ke.setTexture2D(R,0),Te.unbindTexture()},this.resetState=function(){k=0,U=0,Y=null,Te.reset(),_e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ht._getDrawingBufferColorSpace(e),t.unpackColorSpace=ht._getUnpackColorSpace()}}const cs={uWarp:{value:new ze(0,1)},uWarpPlane:{value:new Dt(0,0,0,0)},uWarpOwn:{value:0},uTurn:{value:new ze(0,0)},uTurnR:{value:new Je},uTurnPlace:{value:new Dt(0,0,0,0)}},Av=`
vec2 turnRay(vec2 ab, float share) {
  vec3 q = uTurnR * vec3(ab, 1.0);
  if (!(q.z > 0.0)) return ab;
  return ab + (uTurnPlace.xy + uTurn.y * (q.xy / q.z - uTurnPlace.zw) - ab) * share;
}`,Rv=`
{
  vec4 stepMv = mvPosition;
  bool stepped = false;
  if (uWarp.x > 0.0 && -mvPosition.z > uWarp.y) {
    // Today's renderer's across-divisor (src/render-gpu/warp.ts): x scaled by kz / kr, gl_Position only. A vertex behind
    // the near plane (part of a face the near plane cuts; today's renderer draws nothing there) keeps the plain pinhole.
    float warpD = -stepMv.z;
    float warpK = warpD + (dot(uWarpPlane.xyz, stepMv.xyz) + uWarpPlane.w) * (1.0 - uWarpOwn);
    stepMv.x *= warpD / max(warpK, uWarp.y);
    stepped = true;
  }
  if (uTurn.x > 0.0 && uWarpOwn > 0.0 && -mvPosition.z > uWarp.y) {
    // The subject's turn (commit 9b), in level and tilted views alike, on whatever the step left; gl_Position only.
    float turnD = -stepMv.z;
    stepMv.xy = turnRay(stepMv.xy / turnD, 1.0) * turnD;
    stepped = true;
  }
  if (stepped) gl_Position = projectionMatrix * stepMv;
}`,Kh=`uniform vec2 uWarp; uniform vec4 uWarpPlane; uniform float uWarpOwn; uniform vec2 uTurn; uniform mat3 uTurnR; uniform vec4 uTurnPlace;${Av}`,Su="/* warp step */";function Ua(n){return n.includes(Su)||!n.includes("#include <project_vertex>")?n:n.replace("#include <common>",`#include <common>
${Su} ${Kh}`).replace("#include <project_vertex>",`#include <project_vertex>
${Rv}`)}const Rl=new WeakMap;function Cl(n){return Rl.get(n)}function Zh(n){if(Rl.has(n))return n;const e={value:0},t=n.onBeforeCompile;if(!Object.prototype.hasOwnProperty.call(n,"customProgramCacheKey")){const i=t.toString();n.customProgramCacheKey=()=>i}return n.onBeforeCompile=(i,s)=>{t.call(n,i,s),i.uniforms.uWarpOwn=e},Rl.set(n,e),n}function jh(n){const e=n.clone(),t=n.defines;return t&&(e.defines=t),e.onBeforeCompile=(i,s)=>n.onBeforeCompile(i,s),e.customProgramCacheKey=()=>n.customProgramCacheKey(),Zh(e)}function wi(n){return Xe.project.warp&&!n.ortho&&n.cpu.sinP>Xe.project.warpMinSinP&&n.cpu.invD>0}function Cv(n,e=cs){if(!wi(n)){e.uWarp.value.set(0,n.near),e.uWarpPlane.value.set(0,0,0,0);return}const t=n.cpu.sinP,i=n.view.elements,s=(n.cpu.zr+n.cpu.tz)*n.cpu.cellMetres;e.uWarp.value.set(t,n.near),e.uWarpPlane.value.set(t*i[4],t*i[5],t*i[6],t*(n.eye.y-s))}function Pv(n,e=cs){const t=n.cpu;if(!t.subOn||n.ortho||!(t.focal>0)){e.uTurn.value.set(0,0);return}const i=t.subR;e.uTurnR.value.set(i[0],i[1],i[2],i[3],i[4],i[5],i[6],i[7],i[8]),e.uTurnPlace.value.set((t.subSX-t.cx)/t.focal,(t.cy-t.subSY)/t.focal,t.subA0,t.subB0),e.uTurn.value.set(1,t.subKF/t.focal)}function nc(n,e,t,i,s){s.x=e,s.y=t;const r=n.cpu;if(!r.subOn||n.ortho||!(r.focal>0)||!(i>0))return s;const a=r.subR,l=a[6]*e+a[7]*t+a[8];if(!(l>0))return s;const o=r.subKF/r.focal;return s.x=e+((r.subSX-r.cx)/r.focal+o*((a[0]*e+a[1]*t+a[2])/l-r.subA0)-e)*i,s.y=t+((r.cy-r.subSY)/r.focal+o*((a[3]*e+a[4]*t+a[5])/l-r.subB0)-t)*i,s}function Lv(n,e,t,i){i.x=e,i.y=t;const s=n.cpu;if(!s.subOn||n.ortho||!(s.focal>0))return i;const r=s.subKF/s.focal,a=(e-(s.subSX-s.cx)/s.focal)/r+s.subA0,l=(t-(s.cy-s.subSY)/s.focal)/r+s.subB0,o=s.subR,c=o[2]*a+o[5]*l+o[8];return c>0&&(i.x=(o[0]*a+o[3]*l+o[6])/c,i.y=(o[1]*a+o[4]*l+o[7])/c),i}function ic(n){return(n.cpu.zr+n.cpu.tz)*n.cpu.cellMetres}function Ca(n,e,t,i,s){if(!wi(n))return Number.NaN;const r=-i;if(!(r>n.near))return Number.NaN;const a=n.view.elements;return r+n.cpu.sinP*(a[4]*e+a[5]*t+a[6]*i+n.eye.y-ic(n))*(1-s)}function Jh(n,e,t,i,s){const r=Ca(n,e,t,i,s);return Number.isNaN(r)?1:-i/Math.max(r,n.near)}function yu(n,e,t,i,s){const r=n.view.elements;s.x=n.eye.x+r[0]*e+r[1]*t+r[2]*i,s.y=n.eye.y+r[4]*e+r[5]*t+r[6]*i,s.z=n.eye.z+r[8]*e+r[9]*t+r[10]*i}function sc(n,e,t,i,s,r,a,l=0){let o=i,c=s,u=1,f=0,h=1;if(wi(n)){const p=n.view.elements,x=n.cpu.sinP*(1-l);if(u=1-x*p[6]+x*p[5]*t,f=x*(n.eye.y-ic(n)),h=1-e*x*p[4],!(h>0))return!1;const _=(u*o+f)/h,d=(u*c+f)/h,m=n.near;if(_<m&&d<m)return!1;_<m?o+=(c-o)*(m-_)/(d-_):d<m&&(c-=(c-o)*(m-d)/(_-d))}return c>o?(yu(n,e*(u*o+f)/h,t*o,-o,r),yu(n,e*(u*c+f)/h,t*c,-c,a),!0):!1}class Qh{planes=Array.from({length:7},()=>({nx:0,ny:0,nz:0,w:0}));on=!1;set(e){if(this.on=wi(e)&&e.cpu.focal>0,!this.on)return this;const t=e.cpu,i=e.view.elements,s=t.sinP,r=s*i[5],a=s*i[6],l=s*(e.eye.y-ic(e)),o=-t.cx/t.focal,c=(t.sheetW-t.cx)/t.focal,u=t.cy/t.focal,f=(t.cy-t.sheetH)/t.focal;return this.view(0,1,-o*r,o*(1-a),-o*l,e),this.view(1,-1,c*r,-c*(1-a),c*l,e),this.view(2,0,-1,-u,0,e),this.view(3,0,1,f,0,e),this.view(4,0,0,-1,-e.near,e),this.view(5,0,0,1,e.far,e),this.view(6,0,r,-(1-a),l-e.near,e),this}view(e,t,i,s,r,a){const l=a.view.elements,o=l[0]*t+l[1]*i+l[2]*s,c=l[4]*t+l[5]*i+l[6]*s,u=l[8]*t+l[9]*i+l[10]*s,f=Math.hypot(o,c,u)||1,h=this.planes[e];h.nx=o/f,h.ny=c/f,h.nz=u/f,h.w=(r-(o*a.eye.x+c*a.eye.y+u*a.eye.z))/f}intersectsSphere(e,t,i,s){for(const r of this.planes)if(r.nx*e+r.ny*t+r.nz*i+r.w<-s)return!1;return!0}}const Is=new ri;function Dv(n){if(n.boundingSphere!==void 0){if(n.boundingSphere===null&&n.computeBoundingSphere?.(),!n.boundingSphere)return!1;Is.copy(n.boundingSphere)}else{const e=n.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Is.copy(e.boundingSphere)}return Is.applyMatrix4(n.matrixWorld),!0}class Iv{lifted=[];frustum=new Bi;vol=null;liftedCount=0;tested=0;lift(e,t,i){this.liftedCount=0,this.tested=0,i.on&&(this.frustum.setFromProjectionMatrix(t.viewProj),this.vol=i,e.traverseVisible(this.visit),this.vol=null,this.liftedCount=this.lifted.length)}visit=e=>{const t=e;if(!e.frustumCulled||t.boundingSphere===void 0&&!t.geometry||(this.tested++,e.matrixWorldAutoUpdate&&e.updateWorldMatrix(!0,!1),!Dv(t)||this.frustum.intersectsSphere(Is)))return;const i=Is.center;this.vol.intersectsSphere(i.x,i.y,i.z,Is.radius)&&(e.frustumCulled=!1,this.lifted.push(e))};restore(){for(const e of this.lifted)e.frustumCulled=!0;this.lifted.length=0}}const _o={x:0,y:0},pn=Xe.view,Yi={up:new H,centre:new H,m:new rt,roll:new rt,shear:new rt,scaled:{target:{x:0,y:0,z:0},heading:0,pitch:0,roll:0,distance:1,fovY:1,orthoScale:1,perspective:0,horizonShift:0}};function Nv(n){return{cpu:Hf(),outW:0,outH:0,gridW:0,gridH:0,toGridX:1,toGridY:1,view:new rt,proj:new rt,viewProj:new rt,viewProjInverse:new rt,ortho:!0,eye:new H,nominalEye:new H,target:new H,forward:new H,near:pn.minNearMetres,far:pn.defaultFarMetres,fovY:0,orthoHalfH:0,orthoHalfW:0,metresPerPixel:0,origin:{x:n.x,y:n.y},camera:{target:{x:0,y:0,z:0},heading:0,pitch:0,roll:0,distance:1,fovY:1,orthoScale:1,perspective:0,horizonShift:0}}}function ti(n,e,t,i,s,r){return r.x=t*e-n.x,r.y=s,r.z=i*e-n.y,r}function wu(n,e,t,i,s,r=0,a=t,l=i){const o=n.cpu,c=th(s),u=n.camera;u.target.x=e.target.x,u.target.y=e.target.y,u.target.z=e.target.z,u.heading=e.heading,u.pitch=e.pitch,u.roll=e.roll,u.distance=e.distance,u.fovY=e.fovY,u.orthoScale=e.orthoScale,u.perspective=e.perspective,u.horizonShift=e.horizonShift??0;let f=e;if(l>0&&l!==i){const m=Yi.scaled;m.target.x=e.target.x,m.target.y=e.target.y,m.target.z=e.target.z,m.heading=e.heading,m.pitch=e.pitch,m.roll=e.roll,m.distance=e.distance,m.fovY=e.fovY,m.perspective=e.perspective,m.horizonShift=e.horizonShift,m.orthoScale=Math.max(ni.camera.minOrthoScale,e.orthoScale)*(l/i),f=m}Gf(o,f,t,i,c),n.outW=t,n.outH=i,n.gridW=a>0?a:t,n.gridH=l>0?l:i,n.toGridX=n.gridW/t,n.toGridY=n.gridH/i;const h=o.cellMetres,p=n.origin;n.target.set(o.tx*h-p.x,o.tz*h,o.ty*h-p.y),n.forward.set(o.fx*o.cosP,-o.sinP,o.fy*o.cosP).normalize(),n.nominalEye.copy(n.target).addScaledVector(n.forward,-o.distance*h);const x=o.perspective;n.ortho=!(x>=pn.orthoBelowPerspective),n.metresPerPixel=h/o.ppc,Yi.up.set(o.fx*o.sinP,o.cosP,o.fy*o.sinP).normalize();const _=n.ortho?0:Math.max(0,(o.distance/x-o.distance)*h),d=r>0?Math.min(pn.maxFarMetres+_,r*pn.farHazeMargin):pn.defaultFarMetres+_;if(n.ortho){n.orthoHalfH=i/2*h/o.ppc,n.orthoHalfW=t/2*h/o.ppc,n.fovY=0;const m=Math.max(pn.minOrthoSinPitch,o.sinP),y=o.cosP/m,w=Math.max(0,(c.zMaxCells-o.tz)*h),M=Math.min(0,(c.zMinCells-o.tz)*h),v=n.orthoHalfH*y+w/m+pn.mapNearMarginMetres;n.near=pn.mapNearMarginMetres,n.far=Math.min(pn.maxFarMetres,Math.max(n.near+pn.minDepthRangeMetres,v+n.orthoHalfH*y-M/m)),n.eye.copy(n.target).addScaledVector(n.forward,-v),n.proj.makeOrthographic(-n.orthoHalfW,n.orthoHalfW,n.orthoHalfH,-n.orthoHalfH,n.near,n.far)}else{const m=o.distance/x,y=o.ppc*m;n.fovY=2*Math.atan(i/2/y),n.orthoHalfH=0,n.orthoHalfW=0;const w=o.kMin/o.invD;n.near=Math.max(pn.minNearMetres,w*h);const M=m*h,v=Fv(o,c,s);if(M-v>0){const b=i/2/y,E=b*t/i,T=1/Math.sqrt(1+E*E+b*b);n.near=Math.max(n.near,(M-v)*T-pn.slideNearMarginMetres)}n.far=Math.max(n.near+pn.minDepthRangeMetres,d),n.eye.copy(n.target).addScaledVector(n.forward,-m*h);const S=Math.tan(n.fovY/2)*n.near,g=S*t/i;n.proj.makePerspective(-g,g,S,-S,n.near,n.far)}if(o.shift!==0&&(n.ortho?n.proj.elements[13]+=2*o.shift:n.proj.elements[9]-=2*o.shift),o.rolled){const m=t/i,y=o.cosR,w=o.sinR;Yi.roll.set(y,w/m,0,0,-w*m,y,0,0,0,0,1,0,0,0,0,1),n.proj.premultiply(Yi.roll)}return Yi.centre.copy(n.eye).add(n.forward),n.view.lookAt(n.eye,Yi.centre,Yi.up),n.view.setPosition(n.eye),n.view.invert(),n.viewProj.multiplyMatrices(n.proj,n.view),n.viewProjInverse.copy(n.viewProj).invert(),n}function Fv(n,e,t){const i=n.cellMetres,s=t.size,r=Math.max(Math.abs(n.tx),Math.abs(s-n.tx))*i,a=Math.max(Math.abs(n.ty),Math.abs(s-n.ty))*i,l=n.tz*i,o=Math.max(Math.abs(pn.slideSceneTopMetres-l),Math.abs(l-e.zMinCells*i));return Math.hypot(r,a,o)}function rc(n,e,t,i,s,r=0,a=0){const l=n.viewProj.elements;let o=l[3]*e+l[7]*t+l[11]*i+l[15];if(!(o>0))return!1;let c=l[0]*e+l[4]*t+l[8]*i+l[12],u=l[1]*e+l[5]*t+l[9]*i+l[13],f=!1;if(r>0&&a>0&&n.cpu.subOn&&!n.ortho){const S=n.view.elements;let g=S[0]*e+S[4]*t+S[8]*i+S[12],b=S[1]*e+S[5]*t+S[9]*i+S[13];const E=S[2]*e+S[6]*t+S[10]*i+S[14],T=-E;if(T>n.near){const P=Ca(n,g,b,E,r);f=P<=n.near,Number.isNaN(P)||(g*=T/Math.max(P,n.near)),nc(n,g/T,b/T,a,_o),g=_o.x*T,b=_o.y*T;const L=n.proj.elements;c=L[0]*g+L[4]*b+L[8]*E+L[12],u=L[1]*g+L[5]*b+L[9]*E+L[13],o=L[3]*g+L[7]*b+L[11]*E+L[15]}}else if(wi(n)){const S=n.view.elements,g=S[0]*e+S[4]*t+S[8]*i+S[12],b=S[2]*e+S[6]*t+S[10]*i+S[14],E=Ca(n,g,S[1]*e+S[5]*t+S[9]*i+S[13],b,r);f=E<=n.near;const T=Number.isNaN(E)?1:-b/Math.max(E,n.near);if(T!==1){const P=n.proj.elements,L=(T-1)*g;c+=P[0]*L,u+=P[1]*L,o+=P[3]*L}}const h=c/o,p=u/o;s.x=(h+1)/2*n.outW,s.y=(1-p)/2*n.outH;const x=e-n.target.x,_=t-n.target.y,d=i-n.target.z,m=x*n.forward.x+_*n.forward.y+d*n.forward.z;s.depthMetres=m+n.cpu.distance*n.cpu.cellMetres;const y=e-n.eye.x,w=t-n.eye.y,M=i-n.eye.z,v=y*n.forward.x+w*n.forward.y+M*n.forward.z;return s.eyeMetres=v,s.pixelsPerMetre=n.ortho?n.outH/(2*n.orthoHalfH):v>0?n.outH/(2*Math.tan(n.fovY/2)*v):0,!n.ortho&&!(v>=n.near)||f?!1:s.x>=0&&s.y>=0&&s.x<n.outW&&s.y<n.outH}function ef(n,e){return e.x=n.cpu.snapDX,e.y=n.cpu.snapDY,e}function Uv(n){return n.eye.distanceTo(n.target)-n.nominalEye.distanceTo(n.target)}function Ov(n,e={x:0,y:0,z:0}){return Vf(n.camera,n.cpu.cellMetres,e)}const bu=new WeakMap,Eu={x:0,y:0,depth:0,scale:0};function Pl(n){const e=bu.get(n.voxels);if(e&&e.px===n.pivot.x&&e.py===n.pivot.y&&e.pz===n.pivot.z)return e.r;const{sx:t,sy:i,sz:s,voxels:r,pivot:a}=n;let l=0;for(let c=0;c<s;c++)for(let u=0;u<i;u++)for(let f=0;f<t;f++){if(r[f+t*(u+i*c)]===0)continue;const h=f+.5-a.x,p=u+.5-a.y,x=c+.5-a.z,_=h*h+p*p+x*x;_>l&&(l=_)}const o=l>0||r.some(c=>c!==0)?Math.sqrt(l)+1:-1;return bu.set(n.voxels,{px:a.x,py:a.y,pz:a.z,r:o}),o}function Bv(n){for(const e of n)Pl(e),e.coarse&&Pl(e.coarse.model)}function Tu(n,e){const t=n.scale*(e.voxelSize??1);return t>0&&Number.isFinite(t)?t:0}function kv(n,e){const t=n.cpu;if(t.subReach=0,!t.subOn)return 0;const i=e.objects,s=e.followObjects??0;for(let r=0;r<i.length;r++){const a=i[r];if(!(zl(a)>0))continue;const l=r<s,o=a.position.x+(l?t.snapDX:0),c=a.position.y+(l?t.snapDY:0),u=a.position.z/t.cellMetres;if(!Number.isFinite(o+c+u))continue;const f=a.fade;if(f!==void 0&&!(f>0))continue;let h=a.model;const p=h.coarse;p!==void 0&&Wf(t,o,c,u,Eu)&&Tu(a,h)*Eu.scale*n.toGridY<p.belowPx&&(h=p.model);const x=Tu(a,h);if(!(x>0))continue;const _=Pl(h);if(!(_>0))continue;const d=Math.hypot(o-t.subX,c-t.subY,u-t.subZ)+_*x;d>t.subReach&&(t.subReach=d)}return t.subReach}function Au(n){n.matrixAutoUpdate=!1,n.matrixWorldAutoUpdate=!1}function zv(){const n=new An,e=new Os;return Au(n),Au(e),{persp:n,ortho:e}}const Ru=new H;function Cu(n,e){const t=e.ortho?n.ortho:n.persp;if(t.near=e.near,t.far=e.far,t.userData.ported=!0,e.ortho){const i=n.ortho;i.left=-e.orthoHalfW,i.right=e.orthoHalfW,i.top=e.orthoHalfH,i.bottom=-e.orthoHalfH,i.zoom=1,i.userData.texelMetres=e.metresPerPixel,i.userData.focusMetres=e.nominalEye.distanceTo(e.target)}else{const i=n.persp;i.fov=e.fovY*180/Math.PI,i.aspect=e.outW/e.outH,i.userData.focusMetres=e.eye.distanceTo(e.target),i.userData.texelMetres=void 0}return t.projectionMatrix.copy(e.proj),t.projectionMatrixInverse.copy(e.proj).invert(),t.matrixWorldInverse.copy(e.view),t.matrixWorld.copy(e.view).invert(),t.matrix.copy(t.matrixWorld),Ru.setFromMatrixPosition(t.matrixWorld),t.position.copy(Ru),t.matrixWorld.decompose(t.position,t.quaternion,t.scale),t}const jn=Xe.project,Mt={x:0,y:0,z:0},Ye={ox:0,oy:0,oz:0,dx:0,dy:0,dz:0,len:0,fromEye:!0},Ni={x:0,y:0,z:0},nr={x:0,y:0,z:0};function Hv(n,e,t){if(e<0||t<0||e>=n.size||t>=n.size)return-1/0;const i=t*n.size+e;return n.surface[i]*n.meta.heightUnitMetres}function Gv(n,e,t){return e<0||t<0||e>=n.size||t>=n.size?nh:n.material[t*n.size+e]}function Ll(n,e,t,i,s,r){const a=n.ground;if(a&&a.drawnSolid&&a.fine(e,t))return a.drawnSolid(e,t,i,s);const l=Math.floor(e),o=Math.floor(t),c=Gv(n.world,l,o);if(c===nh)return!1;const u=Hv(n.world,l,o);return r&&c<=ih.Surf?i<u-jn.waterSurfaceMetres:i<u}function Vv(n,e,t,i,s=0){const r=n.cpu.cellMetres;if(ti(n.origin,r,e,t,i,Mt),Ye.fromEye=!0,(wi(n)||s>0&&n.cpu.subOn&&!n.ortho)&&Wv(n,s))return Ye.len;if(n.ortho){const u=n.forward,f=(Mt.x-n.eye.x)*u.x+(Mt.y-n.eye.y)*u.y+(Mt.z-n.eye.z)*u.z;return f>0?(Ye.ox=Mt.x-u.x*f,Ye.oy=Mt.y-u.y*f,Ye.oz=Mt.z-u.z*f,Ye.dx=u.x,Ye.dy=u.y,Ye.dz=u.z,Ye.len=f,f):0}Ye.ox=n.eye.x,Ye.oy=n.eye.y,Ye.oz=n.eye.z;let a=Mt.x-Ye.ox,l=Mt.y-Ye.oy,o=Mt.z-Ye.oz;const c=Math.hypot(a,l,o);return c>0?(a/=c,l/=c,o/=c,Ye.dx=a,Ye.dy=l,Ye.dz=o,Ye.len=c,c):0}function Wv(n,e){const t=n.view.elements,i=t[0]*Mt.x+t[4]*Mt.y+t[8]*Mt.z+t[12],s=t[1]*Mt.x+t[5]*Mt.y+t[9]*Mt.z+t[13],r=t[2]*Mt.x+t[6]*Mt.y+t[10]*Mt.z+t[14],a=-r;if(!(a>n.near))return!1;let l=i*Jh(n,i,s,r,e)/a,o=s/a;if(e>0&&n.cpu.subOn&&(nc(n,l,o,1,Si),l=Si.x,o=Si.y),!sc(n,l,o,n.near,a,Ni,nr))return!1;const c=nr.x-Ni.x,u=nr.y-Ni.y,f=nr.z-Ni.z,h=Math.hypot(c,u,f);return h>0?(Ye.ox=Ni.x,Ye.oy=Ni.y,Ye.oz=Ni.z,Ye.dx=c/h,Ye.dy=u/h,Ye.dz=f/h,Ye.len=h,Ye.fromEye=!1,!0):!1}const Xn={x:0,y:0,z:0},Kr={x:0,y:0,z:0},Si={x:0,y:0};function tf(n,e){return n.cpu.subOn&&!n.ortho&&!!e.objects&&e.objects.subjectInFrame()}function nf(n,e,t,i,s){if(Lv(n,t,i,Si),!sc(n,Si.x,Si.y,n.near,s,Xn,Kr,n.cpu.subShare))return 1/0;let r=Kr.x-Xn.x,a=Kr.y-Xn.y,l=Kr.z-Xn.z;const o=Math.hypot(r,a,l);if(!(o>0))return 1/0;r/=o,a/=o,l/=o;const c=e.objects.firstHit(Xn.x,Xn.y,Xn.z,r,a,l,o,2);if(!(c<o))return 1/0;const u=n.forward;return(Xn.x+r*c-n.eye.x)*u.x+(Xn.y+a*c-n.eye.y)*u.y+(Xn.z+l*c-n.eye.z)*u.z}function sf(n,e,t,i,s,r,a,l){const o=n.forward,c=r*o.x+a*o.y+l*o.z;return c>0?(e-((t-n.eye.x)*o.x+(i-n.eye.y)*o.y+(s-n.eye.z)*o.z))/c:1/0}function rf(n,e,t,i){return Math.hypot(e-n.eye.x,t-n.eye.y,i-n.eye.z)}function Xv(n,e,t,i,s,r=0){const a=n.cpu.cellMetres,l=Vv(n,t,i,s,r);if(!(l>0))return 0;const o=n.origin,c=tf(n,e);let u=e.objects?e.objects.firstHit(Ye.ox,Ye.oy,Ye.oz,Ye.dx,Ye.dy,Ye.dz,l,c?1:0):1/0;if(c){const d=n.view.elements,m=d[0]*Mt.x+d[4]*Mt.y+d[8]*Mt.z+d[12],y=d[1]*Mt.x+d[5]*Mt.y+d[9]*Mt.z+d[13],w=d[2]*Mt.x+d[6]*Mt.y+d[10]*Mt.z+d[14],M=-w;if(M>n.near){let v=m*Jh(n,m,y,w,r)/M,S=y/M;r>0&&(nc(n,v,S,1,Si),v=Si.x,S=Si.y);const g=sf(n,nf(n,e,v,S,M),Ye.ox,Ye.oy,Ye.oz,Ye.dx,Ye.dy,Ye.dz);g>=0&&g<u&&(u=g)}}const f=Math.min(l,u),h=Ye.dx*n.forward.x+Ye.dy*n.forward.y+Ye.dz*n.forward.z,p=Ye.fromEye;let x=p?jn.rayStartMetres:0,_=0;for(;x<f&&_++<jn.rayMaxSteps;){const d=Ye.ox+Ye.dx*x,m=Ye.oy+Ye.dy*x,y=Ye.oz+Ye.dz*x,w=(d+o.x)/a,M=(y+o.y)/a,v=p?x:rf(n,d,m,y);if(Ll(e,w,M,m,v,!0))return(l-x)*h/a;x+=jn.rayStepMetres+v*jn.rayStepGrowth}return u<l?(l-u)*h/a:0}function qv(n){const e=ni.project;return e.visibleToleranceCells+e.visibleToleranceShare*Math.abs(n)}function Yv(n,e,t,i,s){if(!Number.isFinite(t)||!Number.isFinite(i)||!(t>=0&&i>=0&&t<n.outW&&i<n.outH))return null;const r=n.cpu.cellMetres,a=n.viewProjInverse.elements,l=t/n.outW*2-1,o=1-i/n.outH*2,c=(D,C)=>{const N=a[3]*l+a[7]*o+a[11]*D+a[15];return Math.abs(N)>0?(C.x=(a[0]*l+a[4]*o+a[8]*D+a[12])/N,C.y=(a[1]*l+a[5]*o+a[9]*D+a[13])/N,C.z=(a[2]*l+a[6]*o+a[10]*D+a[14])/N,!0):!1},u=Ni,f=nr;if(!c(-1,u)||!c(1,f))return null;const h=wi(n),p=tf(n,e);let x=0,_=0;if(h||p){const D=n.view.elements,C=D[0]*u.x+D[4]*u.y+D[8]*u.z+D[12],N=D[1]*u.x+D[5]*u.y+D[9]*u.z+D[13],k=-(D[2]*u.x+D[6]*u.y+D[10]*u.z+D[14]);if(!(k>0))return null;x=C/k,_=N/k}if(h&&!sc(n,x,_,n.near,n.far,u,f))return null;let d=f.x-u.x,m=f.y-u.y,y=f.z-u.z;const w=Math.hypot(d,m,y);if(!(w>0))return null;d/=w,m/=w,y/=w;const M=n.origin,v=Math.min(w,n.far-n.near+jn.rayStartMetres);let S=e.objects?e.objects.firstHit(u.x,u.y,u.z,d,m,y,v,p?1:0):1/0;if(p){const D=sf(n,nf(n,e,x,_,n.far),u.x,u.y,u.z,d,m,y);D>=0&&D<S&&(S=D)}const g=Math.min(v,S);let b=0,E=0,T=u.x,P=u.y,L=u.z;for(;b<g&&E++<jn.rayMaxSteps;){const D=u.x+d*b,C=u.y+m*b,N=u.z+y*b,k=(D+M.x)/r,U=(N+M.y)/r,Y=h?rf(n,D,C,N):n.near+b;if(Ll(e,k,U,C,Y,!1)){let O=0,V=1,q=T,ne=P,fe=L;for(let J=0;J<jn.bisectSteps;J++){const se=(O+V)/2,X=q+(D-q)*se,F=ne+(C-ne)*se,ee=fe+(N-fe)*se;Ll(e,(X+M.x)/r,(ee+M.y)/r,F,Y,!1)?V=se:O=se}const z=(O+V)/2;return s.x=(q+(D-q)*z+M.x)/r,s.y=(fe+(N-fe)*z+M.y)/r,s.z=ne+(C-ne)*z,s}T=D,P=C,L=N,b+=jn.rayStepMetres+Y*jn.rayStepGrowth}return S<v?(s.x=(u.x+d*S+M.x)/r,s.y=(u.z+y*S+M.y)/r,s.z=u.y+m*S,s):null}const di=Xe.project,Li={x:0,y:0,z:0};class $v{constructor(e,t=()=>performance.now(),i=di.marchBudgetMs){this.host=e,this.now=t,this.budgetMs=i}frame=0;spentMs=0;marched=0;pendingCount=0;cache=new Map;wanted=[];carryOver(){this.spentMs=0,this.marched=0,this.pendingCount=0;const e=this.wanted;if(e.length>0){e.sort(Kv);for(const t of e)t.wanted=!1,!(this.budgetMs>0&&this.spentMs>=this.budgetMs)&&this.marchInto(t);e.length=0}if(this.frame++,this.frame%di.evictAfterFrames===0)for(const[t,i]of this.cache)this.frame-i.read>di.evictAfterFrames&&this.cache.delete(t)}point(e,t,i,s,r,a,l,o=!1){return new e_(this,e,t,i,s,r,a,l,o)}resolve(e,t,i,s,r=!1){const a=Math.round(e/di.keyCells),l=Math.round(t/di.keyCells),o=Math.round(i/di.keyMetres);let c=Qv(a,l,o),u=this.cache.get(c);for(;u&&(u.kx!==a||u.ky!==l||u.kz!==o||u.subj!==r);)c=c+1|0,u=this.cache.get(c);const f=!!u&&this.valid(u);if(u&&(u.read=this.frame),u&&f&&this.frame-u.frame<di.refreshAgeFrames){s.behind=u.behind,s.pending=!1;return}if(this.budgetMs<=0||this.spentMs<this.budgetMs){u||(u={x:e,y:t,z:i,subj:r,behind:NaN,ex:0,ey:0,ez:0,frame:-1,read:this.frame,kx:a,ky:l,kz:o,wanted:!1,starved:!1},this.cache.set(c,u)),this.marchInto(u),s.behind=u.behind,s.pending=!1;return}if(u||(u={x:e,y:t,z:i,subj:r,behind:NaN,ex:0,ey:0,ez:0,frame:-1,read:this.frame,kx:a,ky:l,kz:o,wanted:!1,starved:!1},this.cache.set(c,u)),u.wanted||(u.wanted=!0,this.wanted.push(u)),f){u.starved=!1,s.behind=u.behind,s.pending=!1;return}u.starved=!0,this.pendingCount++,s.behind=NaN,s.pending=!0}valid(e){if(e.frame<0||this.frame-e.frame>di.maxAgeFrames)return!1;this.host.eye(Li);const t=Math.hypot(Li.x-e.ex,Li.y-e.ey,Li.z-e.ez);if(t===0)return!0;const i=this.host.distance(e.x,e.y,e.z);return i>0&&t/i<=di.maxParallaxRad}marchInto(e){const t=this.now();let i;try{i=this.host.march(e.x,e.y,e.z,e.subj)}catch(s){this.host.fault(`the in-sight march failed: ${s instanceof Error?s.message:String(s)}`),i=NaN}this.spentMs+=this.now()-t,this.marched++,this.host.eye(Li),e.behind=i,e.ex=Li.x,e.ey=Li.y,e.ez=Li.z,e.frame=this.frame,e.starved=!1}}function Kv(n,e){return n.starved===e.starved?n.frame-e.frame:n.starved?-1:1}const Zv=73856093,jv=19349663,Jv=83492791;function Qv(n,e,t){return Math.imul(n,Zv)^Math.imul(e,jv)^Math.imul(t,Jv)|0}const Mo={behind:NaN,pending:!1};class e_{constructor(e,t,i,s,r,a,l,o,c=!1){this.owner=e,this.x=t,this.y=i,this.depth=s,this.pixelsPerCell=r,this.wx=a,this.wy=l,this.wz=o,this.subj=c}done=!1;b=NaN;pend=!1;visSet;resolve(){this.done||(this.done=!0,this.owner.resolve(this.wx,this.wy,this.wz,Mo,this.subj),this.b=Mo.behind,this.pend=Mo.pending)}get behindCells(){return this.resolve(),this.b}set behindCells(e){this.done=!0,this.b=e,this.pend=!1}get visible(){return this.visSet!==void 0?this.visSet:(this.resolve(),!this.pend&&this.b<=qv(this.depth))}set visible(e){this.visSet=e}get pending(){return this.resolve(),this.pend}}const Yt=le.plain,In=n=>new Ge().setHex(n),pr={uNight:{value:0},uLitShare:{value:Yt.litShare},uWindowGlow:{value:Yt.windowGlow},uEmissiveGain:{value:Yt.emissiveGain},uNightLift:{value:Yt.actorNightLift},uFarCell:{value:new ze(Yt.farWindowMetres[0],Yt.farWindowMetres[1])},uGlassDay:{value:In(Yt.glassDay)},uGlassSky:{value:In(Yt.glassSky)},uTrim0:{value:In(Yt.trimColours[0])},uTrim1:{value:In(Yt.trimColours[1])},uTrim2:{value:In(Yt.trimColours[2])},uDoor:{value:In(Yt.doorColour)},uShopGlass:{value:In(Yt.shopGlass)},uShopGlow:{value:In(Yt.shopGlow)},uWin0:{value:In(Yt.windowColours[0])},uWin1:{value:In(Yt.windowColours[1])},uWin2:{value:In(Yt.windowColours[2])}},Oa=xr(0,0,0),ac=n=>n-Math.floor(n),t_=ac(Oa-xr(-1,0,0)),n_=ac(Oa-xr(0,-1,0)),i_=ac(Oa-xr(0,0,-1)),at=le.facade,qn=le.pixel.masonry,ut=n=>Number.isInteger(n)?n.toFixed(1):String(n),$t=n=>`vec${n.length}(${n.map(ut).join(", ")})`,So=new Ge().setHex(at.laceIron),da=()=>!!le.smooth.on,s_=()=>[["F_PARAPET_MIX",ut(at.parapetTrimMix)],["F_CORNICE",ut(at.corniceMetres)],["F_MIN_STOREY",ut(at.minStoreyMetres)],["F_MIN_BAY",ut(at.minBayMetres)],["F_WARM",ut(at.warmShare)],["F_PALE",ut(at.paleShare)],["F_SKY_BASE",ut(at.glassSkyBase)],["F_SKY_HASH",ut(at.glassSkyHash)],["F_DOOR_EVERY",ut(at.doorEvery)],["F_SHOP_LIT",ut(at.shopLitShare)],["F_DOOR_GLOW",ut(at.doorGlow)],["F_SHOP_GLOW",ut(at.shopGlow)],["F_HDOOR_MAX",ut(at.houseDoorMaxMetres)],["F_HDOOR_SHARE",ut(at.houseDoorShare)],["F_MULLION",ut(at.mullionMetres)],["F_CURTAIN_MIX",ut(at.curtainTrimMix)],["F_POINT_OFF",ut(at.pointedOffset)],["F_POINT_R",ut(at.pointedRadius)],["F_FRAME",ut(at.frameMetres)],["F_LACE_H",ut(at.laceMetres)],["F_LACE_PER_M",ut(at.lacePerMetre)],["F_LACE_HOLE",ut(at.laceHoleShare)],["F_LOD0",ut(da()?le.smooth.facadeLod[0]:at.lodFrom)],["F_LOD1",ut(da()?le.smooth.facadeLod[1]:at.lodTo)],["F_LOD_GLASS",ut(at.lodGlass)],["M_BRICK_RG",ut(qn.brickRedOverGreen)],["M_BRICK_RB",ut(qn.brickRedOverBlue)],["M_STONE_RB",ut(qn.stoneRedOverBlue)],["M_STONE_GB",ut(qn.stoneGreenOverBlue)],["M_JOINT_DARK",ut(qn.jointDark)]].map(([n,e])=>`const float ${n} = ${e};`).join(`
`)+`
`+[["F_SDOOR",$t(at.shopDoor)],["F_SGLASS",$t(at.shopGlass)],["F_SFRAME",$t(at.shopFrame)],["F_HDOOR",$t(at.houseDoor)],["F_FAN",$t(at.fanlight)],["F_SPANDREL",$t(at.spandrel)],["F_PUNCHED",$t(at.punched)],["F_TERRACE",$t(at.terrace)],["F_HOUSE",$t(at.house)],["F_SILL",$t(at.sillMetres)],["F_LACE_OPEN",$t(at.laceOpen)],["F_LACE_IRON",$t([So.r,So.g,So.b])],["M_BRICK",$t(qn.brickMetres)],["M_STONE",$t(qn.stoneMetres)],["M_RENDER",$t(qn.renderMetres)],["M_VAR",$t(qn.variation)],["M_LOD",$t(da()?le.smooth.masonryLod:qn.lodPixels)]].map(([n,e])=>`const ${e.slice(0,4)} ${n} = ${e};`).join(`
`),r_=()=>s_()+`
float fh1(vec3 p) { return fract(sin(dot(p, vec3(12.9898, 78.233, 37.719))) * 43758.5453); }
float box2(vec2 p, vec2 a, vec2 b, vec2 w) {
  vec2 s = smoothstep(a - w, a + w, p) * (1.0 - smoothstep(b - w, b + w, p));
  return s.x * s.y;
}
// Returns the facade's colour over the wall (rgb) and how much glows (a), given the wall's albedo.
vec4 facadeColour(vec3 wall, vec4 f0, vec4 f1) {
  int code = int(f1.w + 0.5);
  int style = (code & 7) - 1;
  if (style < 0 || style == 3 || f1.z <= 0.0) return vec4(wall, 0.0);
  bool street = ((code >> 3) & 1) == 1;
  int trimCode = (code >> 4) & 3;
  int orn = (code >> 6) & 31;
  float seed = float((code >> 11) & 4095);
  vec3 trim = trimCode == 0 ? uTrim0 : trimCode == 1 ? uTrim1 : uTrim2;
  float u = f0.x, v = f0.y, wallH = f0.z, storey = max(f0.w, F_MIN_STOREY), gf = f1.x, bay = max(f1.y, F_MIN_BAY), share = f1.z;
  vec2 aa = max(fwidth(vec2(u, v)), vec2(1e-3));
#ifdef PIXEL_MASONRY
  // Look B: the wall's own masonry, by its colour: brick courses, sandstone blocks, or rendered walls with a light
  // mottle; one-pixel joints; it fades out once a course is under a couple of pixels.
  {
    bool brick = wall.r > wall.g * M_BRICK_RG && wall.r > wall.b * M_BRICK_RB;
    bool stone = !brick && wall.r > wall.b * M_STONE_RB && wall.g > wall.b * M_STONE_GB;
    vec2 cell = brick ? M_BRICK : (stone ? M_STONE : M_RENDER);
    float lodM = 1.0 - smoothstep(M_LOD.x, M_LOD.y, max(aa.x / cell.x, aa.y / cell.y));
    if (lodM > 0.0) {
      float row = floor(v / cell.y);
      float uu = u / cell.x + mod(row, 2.0) * 0.5;
      vec2 fr = vec2(fract(uu) * cell.x, fract(v / cell.y) * cell.y);
      float joint = (brick || stone) ? max(step(fr.y, aa.y), step(fr.x, aa.x)) : 0.0;
      float h = fh1(vec3(floor(uu), row, seed)) - 0.5;
      vec3 m = wall * (1.0 + h * (brick ? M_VAR.x : (stone ? M_VAR.y : M_VAR.z)));
      m = mix(m, wall * M_JOINT_DARK, joint);
      wall = mix(wall, m, lodM);
    }
  }
#endif
  // Above the walls' top: a parapet, with a cornice band at its foot.
  if (v > wallH) return vec4(mix(wall, trim, F_PARAPET_MIX), 0.0);
  float cornice = box2(vec2(0.5, v), vec2(0.0, wallH - F_CORNICE), vec2(1.0, wallH), aa);
  bool ground = v < gf;
  float fl = ground ? 0.0 : 1.0 + floor((v - gf) / storey);
  float fv = ground ? v : mod(v - gf, storey);
  float fhh = ground ? gf : storey;
  float bi = floor(u / bay);
  vec2 q = vec2(fract(u / bay) * bay, fv);       // metres within the bay and the floor
  bool house = style == 4, terrace = style == 2, curtain = style == 1;
  vec3 col = wall;
  float glow = 0.0;
  float lit = step(fh1(vec3(seed, fl, bi)), uLitShare * uNight);
  vec3 litCol = fh1(vec3(bi, seed, fl)) < F_WARM ? uWin0 : (fh1(vec3(fl, bi, seed)) < F_PALE ? uWin1 : uWin2);
  vec3 glass = mix(uGlassDay, uGlassSky, F_SKY_BASE + F_SKY_HASH * fh1(vec3(seed, bi * 0.37, fl * 0.71)));
${da()?`  // Smooth B: where the windows have fully given way to the wall's average (by day), stop here; the result is the same.
  if (smoothstep(F_LOD0, F_LOD1, max(aa.x / bay, aa.y / storey)) * (1.0 - uNight) >= 1.0) return vec4(mix(mix(wall, glass, F_LOD_GLASS * share), trim, cornice), 0.0);
`:""}  if (ground && street && !house && !terrace && !curtain) {
    // Shop fronts: wide glass, a door every third bay, a fascia above.
    bool door = mod(bi + seed, F_DOOR_EVERY) < 1.0;
    float w = door ? box2(q, vec2(bay * F_SDOOR.x, 0.0), vec2(bay * F_SDOOR.y, fhh * F_SDOOR.z), aa) : box2(q, vec2(bay * F_SGLASS.x, fhh * F_SGLASS.y), vec2(bay * F_SGLASS.z, fhh * F_SGLASS.w), aa);
    float frame = box2(q, vec2(bay * F_SFRAME.x, 0.0), vec2(bay * F_SFRAME.y, fhh * F_SFRAME.z), aa);
    col = mix(col, trim, frame);
    vec3 shop = mix(uShopGlass, uShopGlow, step(fh1(vec3(bi, seed, 3.0)), F_SHOP_LIT * uNight));
    col = mix(col, door ? mix(uDoor, uShopGlow, F_DOOR_GLOW * uNight) : shop, w);
    glow = w * uNight * (door ? F_DOOR_GLOW : F_SHOP_GLOW);
  } else if (ground && street && (house || terrace) && mod(bi, 2.0) < 1.0) {
    // A front door, with a round fanlight on heritage terraces.
    float w = box2(q, vec2(bay * F_HDOOR.x, 0.0), vec2(bay * F_HDOOR.y, min(F_HDOOR_MAX, fhh * F_HDOOR_SHARE)), aa);
    if ((orn & 8) != 0) w = max(w, step(length((q - vec2(bay * 0.5, min(F_HDOOR_MAX, fhh * F_HDOOR_SHARE))) / vec2(bay * F_FAN.x, F_FAN.y)), 1.0));
    col = mix(col, uDoor, w);
  } else if (curtain) {
    // Curtain wall: glass between thin mullions and spandrel bands.
    float g = box2(q, vec2(F_MULLION, fhh * F_SPANDREL.x), vec2(bay - F_MULLION, fhh * F_SPANDREL.y), aa);
    col = mix(mix(wall, trim, F_CURTAIN_MIX), mix(glass, litCol, lit), g);
    glow = g * lit;
  } else {
    // Punched windows: by style; tall ones for terraces; round heads where the record says so.
    float h0 = terrace ? F_TERRACE.x : F_PUNCHED.x, h1 = terrace ? F_TERRACE.y : F_PUNCHED.y;
    if (house) { h0 = F_HOUSE.x; h1 = F_HOUSE.y; }
    vec2 a = vec2(bay * (0.5 - share * 0.5), fhh * h0), b = vec2(bay * (0.5 + share * 0.5), fhh * h1);
    float w = box2(q, a, b, aa);
    if ((orn & 3) != 0) {
      float r = (b.x - a.x) * 0.5;
      float y0 = b.y - r;
      vec2 c = q - vec2(bay * 0.5, y0);
      float inHead = (orn & 1) != 0 ? step(length(c), r) : step(length(c + vec2(r * F_POINT_OFF * sign(c.x), 0.0)), r * F_POINT_R) * step(abs(c.x), r);
      w = q.y > y0 ? inHead * step(a.x, q.x) * step(q.x, b.x) : w;
    }
    float frame = box2(q, a - vec2(F_FRAME), b + vec2(F_FRAME, 0.0), aa) - w;
    float sill = box2(q, vec2(a.x - F_SILL.x, a.y - F_SILL.y), vec2(b.x + F_SILL.x, a.y), aa);
    col = mix(col, trim, clamp(frame + sill, 0.0, 1.0));
    col = mix(col, mix(glass, litCol, lit), w);
    glow = w * lit;
    // An iron-lace balcony across the first floor of a terrace.
    if ((orn & 4) != 0 && fl == 1.0 && fv < F_LACE_H) {
      float rail = box2(vec2(0.5, fv), vec2(0.0, 0.0), vec2(1.0, F_LACE_H), aa);
      float holes = step(F_LACE_OPEN.x, fract(u * F_LACE_PER_M)) * step(F_LACE_OPEN.y, fv) * step(fv, F_LACE_OPEN.z);
      col = mix(col, F_LACE_IRON, rail * (1.0 - holes * F_LACE_HOLE));
    }
  }
  // Windows smaller than a pixel or two give way to the wall's average (no stripes of aliased windows by day;
  // after dark the lit windows stay, as points of light).
  float lod = smoothstep(F_LOD0, F_LOD1, max(aa.x / bay, aa.y / storey)) * (1.0 - uNight);
  col = mix(col, mix(wall, glass, F_LOD_GLASS * share), lod);
  col = mix(col, trim, cornice);
  return vec4(col, glow);
}
`,af=new WeakMap,oc={uRigInv:{value:new rt},uRigVoxel:{value:1}};function of(n){return af.get(n)}function Dl(n,e){const t=n.onBeforeCompile,i=e.dissolve?{share:{value:1},seed:{value:0},pivot:{value:new H}}:null;return i&&af.set(n,i),n.onBeforeCompile=(s,r)=>{t?.call(n,s,r),Object.assign(s.uniforms,pr),e.rigCells&&Object.assign(s.uniforms,oc),i&&(s.uniforms.uDissolveShare=i.share,s.uniforms.uDissolveSeed=i.seed,s.uniforms.uDissolvePivot=i.pivot);let a=s.vertexShader,l=s.fragmentShader;const o=[],c=[],u=[];e.dissolve&&(o.push("varying vec3 vVoxPos; varying vec3 vVoxNrm;"+(e.rigCells?" uniform mat4 uRigInv; uniform float uRigVoxel;":"")),c.push("varying vec3 vVoxPos; varying vec3 vVoxNrm; uniform float uDissolveShare; uniform float uDissolveSeed; uniform vec3 uDissolvePivot;"),u.push(e.rigCells?"{ vec4 rp = uRigInv * (modelMatrix * vec4(position, 1.0)); vVoxPos = vec3(rp.x, -rp.z, rp.y) / uRigVoxel; vVoxNrm = vec3(0.0); }":"vVoxPos = position; vVoxNrm = normal;")),e.ao&&(o.push("attribute float ao; varying float vAo;"),c.push("varying float vAo;"),u.push("vAo = ao;")),e.facade&&(o.push("attribute vec4 fac0; attribute vec4 fac1; varying vec4 vFac0; flat varying vec4 vFac1;"),c.push("varying vec4 vFac0; flat varying vec4 vFac1;"),u.push("vFac0 = fac0; vFac1 = fac1;")),e.dayNight&&(o.push("attribute vec3 col2; attribute float glow; varying float vGlow; uniform float uNight;"),c.push("varying float vGlow;"),u.push("{ float gb = floor(glow * 3.0 + 0.5); float dayG = mod(gb, 2.0); float nightG = floor(gb / 2.0); vColor.rgb = mix(vColor.rgb, col2, step(0.5, uNight)); vGlow = mix(dayG, nightG, step(0.5, uNight)); }")),e.srgbColours&&u.push("vColor.rgb = pow(vColor.rgb, vec3(2.2));"),e.farWindows&&(o.push("varying vec3 vFarPos; varying vec3 vFarN;"),c.push("varying vec3 vFarPos; varying vec3 vFarN; uniform vec2 uFarCell;"),u.push("vFarPos = (modelMatrix * vec4(position, 1.0)).xyz; vFarN = normal;")),c.push("uniform float uNight; uniform float uLitShare; uniform float uWindowGlow; uniform float uEmissiveGain; uniform float uNightLift;","uniform vec3 uGlassDay; uniform vec3 uGlassSky; uniform vec3 uTrim0; uniform vec3 uTrim1; uniform vec3 uTrim2; uniform vec3 uDoor; uniform vec3 uShopGlass; uniform vec3 uShopGlow; uniform vec3 uWin0; uniform vec3 uWin1; uniform vec3 uWin2;"),e.facade&&c.push(r_()),a=a.replace("#include <common>",`#include <common>
`+o.join(`
`)).replace("#include <color_vertex>",`#include <color_vertex>
`+u.join(`
`));const f=[];e.facade&&f.push("vec4 fcd = facadeColour(diffuseColor.rgb, vFac0, vFac1); diffuseColor.rgb = fcd.rgb; float facadeGlow = fcd.a;"),e.ao&&e.aoSteps?f.push(`diffuseColor.rgb *= max(floor(vAo * ${ut(e.aoSteps)} + 0.5) / ${ut(e.aoSteps)}, ${ut(e.aoFloor??0)});`):e.ao&&e.aoFloor!==void 0?f.push(`diffuseColor.rgb *= max(vAo, ${ut(e.aoFloor)});`):e.ao&&f.push("diffuseColor.rgb *= vAo;");const h=[];e.facade&&h.push("totalEmissiveRadiance += diffuseColor.rgb * facadeGlow * uWindowGlow;"),e.dayNight&&h.push("totalEmissiveRadiance += diffuseColor.rgb * vGlow * uEmissiveGain;"),e.nightLift&&h.push("totalEmissiveRadiance += diffuseColor.rgb * uNight * uNightLift;"),e.farWindows&&h.push("if (abs(vFarN.y) < 0.5 && uNight > 0.01) { vec2 c = floor(vec2(vFarPos.x + vFarPos.z, vFarPos.y) / uFarCell); float h = fract(sin(dot(c, vec2(12.9898, 78.233))) * 43758.5453); vec2 f = fract(vec2(vFarPos.x + vFarPos.z, vFarPos.y) / uFarCell); float w = step(0.25, f.x) * step(f.x, 0.75) * step(0.3, f.y) * step(f.y, 0.8); totalEmissiveRadiance += uWin0 * w * step(h, uLitShare * uNight) * uWindowGlow; }");const p=e.dissolve?"if (uDissolveShare < 1.0) { vec3 g = floor(vVoxPos + uDissolvePivot - 0.5 * vVoxNrm); float r = fract("+ut(Oa)+" + g.x * "+t_.toPrecision(17)+" + g.y * "+n_.toPrecision(17)+" + g.z * "+i_.toPrecision(17)+"); if (fract(r + uDissolveSeed) >= uDissolveShare) discard;}":"";l=l.replace("#include <common>",`#include <common>
`+c.join(`
`)).replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
`+p).replace("#include <color_fragment>",`#include <color_fragment>
`+f.join(`
`)).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
`+h.join(`
`)),"uWarp"in s.uniforms||Object.assign(s.uniforms,cs),s.vertexShader=Ua(a),s.fragmentShader=l},n.customProgramCacheKey=()=>`surface-${e.srgbColours?1:0}${e.ao?1:0}${e.facade?1:0}${e.dayNight?1:0}${e.nightLift?1:0}${e.farWindows?1:0}${e.dissolve?1:0}${e.rigCells?"r":""}-${e.aoSteps??0}-${n.type}`,n}const Bs={far:1,near:2,landmarks:3,actors:4},lf={skip:!1},Il=5;function $i(n){const e=n.onBeforeCompile;return n.onBeforeCompile=(t,i)=>{e?.call(n,t,i),"uWarp"in t.uniforms||Object.assign(t.uniforms,cs),t.vertexShader=Ua(t.vertexShader)},n}class a_{id="plain";mats=new Map;lampHead;lampPool;constructor(e){const t=i=>Dl(new sn({vertexColors:i.vertexColors}),{srgbColours:i.srgb,ao:i.ao,facade:i.facade,dayNight:i.dayNight,nightLift:i.nightLift,farWindows:i.farWindows});e.colorSpace=Mn,this.mats.set("ground",$i(new sn({map:e}))),this.mats.set("building",t({srgb:!0,ao:!0,facade:!0,dayNight:!1,vertexColors:!0})),this.mats.set("road",t({srgb:!0,ao:!0,facade:!1,dayNight:!1,vertexColors:!0})),this.mats.set("farGround",t({srgb:!0,ao:!0,facade:!1,dayNight:!1,vertexColors:!0})),this.mats.set("farBuilding",t({srgb:!0,ao:!0,facade:!1,dayNight:!1,vertexColors:!0,farWindows:!0})),this.mats.set("voxel",t({srgb:!0,ao:!0,facade:!1,dayNight:!0,vertexColors:!0})),this.mats.set("part",t({srgb:!0,ao:!1,facade:!1,dayNight:!1,vertexColors:!0,nightLift:!0})),this.mats.set("walker",this.mats.get("part")),this.mats.set("crown",$i(new sn({color:16777215}))),this.mats.set("trunk",$i(new sn({color:le.props.trunkColour}))),this.mats.set("lampPole",$i(new sn({color:le.props.lampPoleColour}))),this.lampHead=$i(new sn({color:le.props.lampHeadColour,emissive:new Ge(le.props.lampHeadColour)})),this.mats.set("lampHead",this.lampHead),this.lampPool=$i(new jl({map:o_(),color:le.props.lampPoolColour,transparent:!0,blending:_a,depthWrite:!1,fog:!0,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4})),this.mats.set("lampPool",this.lampPool),this.mats.set("water",$i(new Tp({color:le.water.colour,shininess:le.water.shininess,specular:new Ge(le.water.specular,le.water.specular,le.water.specular)})));for(const i of["road"]){const s=this.mats.get(i);s.polygonOffset=!0,s.polygonOffsetFactor=0,s.polygonOffsetUnits=le.plain.roadDepthUnits}}material(e){return this.mats.get(e)}update(e){this.lampHead.emissiveIntensity=e,this.lampPool.opacity=e*le.props.lampPoolStrength,this.lampPool.visible=e>.01}render(e,t,i,s,r){i.layers.mask=r?s|1:s,e.autoClear=r,e.render(t,i)}}function o_(){const e=new Uint8Array(16384);for(let i=0;i<64;i++)for(let s=0;s<64;s++){const r=Math.hypot(s+.5-32,i+.5-32)/32,a=Math.round(255*Math.max(0,1-r)**2);e.set([a,a,a,255],(i*64+s)*4)}const t=new ls(e,64,64,Rn);return t.needsUpdate=!0,t}const Nl=Object.keys(Bs),vn={looks:null,mix:[],has:[],steps:[]};function l_(n){const e=new Map;for(const[t,i]of Object.entries(Bs)){const s=n.has(le.look.mix[t])?le.look.mix[t]:"plain";e.set(s,(e.get(s)??0)|1<<i)}return[...e].sort((t,i)=>+!!n.get(i[0]).lowRes-+!!n.get(t[0]).lowRes).map(([t,i])=>{const s=n.get(t);return{id:t,look:s,lowRes:!!s.lowRes,mask:i}})}function c_(n){if(vn.looks!==n)return!1;const e=le.look.mix;for(let t=0;t<Nl.length;t++){const i=e[Nl[t]];if(i!==vn.mix[t]||n.has(i)!==vn.has[t])return!1}for(let t=0;t<vn.steps.length;t++){const i=vn.steps[t];if(n.get(i.id)!==i.look||!!i.look.lowRes!==i.lowRes)return!1}return!0}function u_(n,e){if(c_(n))return vn.steps;vn.looks=n,vn.mix.length=0,vn.has.length=0;for(const t of Nl){const i=le.look.mix[t];vn.mix.push(i),vn.has.push(n.has(i))}return vn.steps=l_(n),h_(vn.steps,e),vn.steps}function h_(n,e){if(!e||n.every(i=>i.lowRes))return;e.getContext?.()?.getContextAttributes?.()?.depth===!1&&console.warn("flyby: the look mix draws a full-resolution look, but the canvas was made without a depth buffer (the mix changed after the context was made); its layers will not sort")}function f_(n,e,t,i){const s=u_(n,e);e.shadowMap.autoUpdate=!1,e.shadowMap.needsUpdate=!lf.skip;for(let r=0;r<s.length;r++)s[r].look.render(e,t,i,s[r].mask,r===0);i.layers.enableAll()}class d_{constructor(e,t){this.m=e,this.night=t}p=[];n=[];c=[];c2=[];g=[];o=[];i=[];vertex(e,t,i,s,r,a,l,o){const c=this.p.length/3,u=this.m;this.p.push(e-u.pivot.x,t-u.pivot.y,i-u.pivot.z),this.n.push(s,r,a);const f=u.palette[l]??0,h=this.night.palette[l]??f;return this.c.push(f>>16&255,f>>8&255,f&255),this.c2.push(h>>16&255,h>>8&255,h&255),this.g.push((u.emissive[l]?1:0)|(this.night.emissive[l]?2:0)),this.o.push(o),c}done(){return{pos:new Float32Array(this.p),nrm:new Float32Array(this.n),col:new Uint8Array(this.c),col2:new Uint8Array(this.c2),glow:new Uint8Array(this.g),ao:new Uint8Array(this.o),idx:new Uint32Array(this.i)}}}const p_=le.landmarks.aoBytes;function m_(n,e=n,t){const{sx:i,sy:s,sz:r,voxels:a}=n,l=[i,s,r],o=(p,x,_)=>p<0||x<0||_<0||p>=i||x>=s||_>=r?0:a[p+i*(x+s*_)],c=t?(p,x,_)=>p<0||x<0||_<0||p>=i||x>=s||_>=r?0:t[p+i*(x+s*_)]:o,u=new d_(n,e),f=[0,0,0],h=[0,0,0];for(let p=0;p<3;p++){const x=(p+1)%3,_=(p+2)%3,d=l[x],m=l[_],y=new Int32Array(d*m),w=new Uint8Array(d*m*4);for(const M of[1,-1])for(let v=0;v<l[p];v++){y.fill(-1);for(let S=0;S<m;S++)for(let g=0;g<d;g++){h[p]=v,h[x]=g,h[_]=S;const b=o(h[0],h[1],h[2]);if(!b||(f[0]=h[0],f[1]=h[1],f[2]=h[2],f[p]+=M,o(f[0],f[1],f[2])))continue;const E=(L,D)=>{const C=[f[0],f[1],f[2]];C[x]+=L;const N=c(C[0],C[1],C[2])?1:0,k=[f[0],f[1],f[2]];k[_]+=D;const U=c(k[0],k[1],k[2])?1:0,Y=[f[0],f[1],f[2]];Y[x]+=L,Y[_]+=D;const O=c(Y[0],Y[1],Y[2])?1:0;return N&&U?0:3-(N+U+O)},T=(S*d+g)*4;w[T]=E(-1,-1),w[T+1]=E(1,-1),w[T+2]=E(1,1),w[T+3]=E(-1,1);const P=w[T]===w[T+1]&&w[T]===w[T+2]&&w[T]===w[T+3];y[S*d+g]=P?b|w[T]<<8:b|4096}for(let S=0;S<m;S++)for(let g=0;g<d;){const b=y[S*d+g];if(b<0){g++;continue}const E=(b&4096)===0;let T=1,P=1;if(E){for(;g+T<d&&y[S*d+g+T]===b;)T++;e:for(;S+P<m;){for(let fe=0;fe<T;fe++)if(y[(S+P)*d+g+fe]!==b)break e;P++}}const L=b&255,D=(S*d+g)*4,C=[w[D],w[D+1],w[D+2],w[D+3]],N=M>0?v+1:v,k=(fe,z)=>{const J=[0,0,0];return J[p]=N,J[x]=fe,J[_]=z,J},U=[k(g,S),k(g+T,S),k(g+T,S+P),k(g,S+P)],Y=[0,0,0];Y[p]=M;const O=U.map((fe,z)=>u.vertex(fe[0],fe[1],fe[2],Y[0],Y[1],Y[2],L,p_[C[z]])),V=C[0]+C[2]<C[1]+C[3],q=M>0,ne=(fe,z,J)=>q?u.i.push(O[fe],O[z],O[J]):u.i.push(O[fe],O[J],O[z]);V?(ne(1,2,3),ne(1,3,0)):(ne(0,1,2),ne(0,2,3));for(let fe=0;fe<P;fe++)for(let z=0;z<T;z++)y[(S+fe)*d+g+z]=-1;g+=T}}}return u.done()}const bs=8192;function g_(n,e=Number.POSITIVE_INFINITY){const t=n.pos.length/12;if(!(t>=1)||n.idx.length!==t*6)return n;const i=n.pos[0],s=n.pos[1],r=n.pos[2],a=(w,M)=>Math.round(n.pos[w*3+M]-(M===0?i:M===1?s:r)),l=[i,s,r],o=[],c=[],u=[],f=[],h=[0,0,0];for(let w=0;w<t;w++){const M=w*4,v=n.idx[w*6],g=(n.idx[w*6+1]-v+4)%4===1,b=[a(M,0),a(M,1),a(M,2)],E=[a(M+1,0),a(M+1,1),a(M+1,2)],T=[a(M+3,0),a(M+3,1),a(M+3,2)],P=E[0]!==b[0]?0:E[1]!==b[1]?1:2,L=T[0]!==b[0]?0:T[1]!==b[1]?1:2,D=(U,Y)=>{const O=[U],V=Y>U?1:-1;if(Number.isFinite(e)&&e>=1)for(let q=U+V;q!==Y;q+=V)(q%e+e)%e===0&&O.push(q);return O.push(Y),O},C=D(b[P],E[P]),N=D(b[L],T[L]),k=C.length===2&&N.length===2;for(let U=0;U+1<N.length;U++)for(let Y=0;Y+1<C.length;Y++){k?o.push(M,M+1,M+2,M+3):o.push(M,M,M,M),c.push(g),u.push(k?w:-1);for(const[O,V]of[[Y,U],[Y+1,U],[Y+1,U+1],[Y,U+1]])h[0]=b[0],h[1]=b[1],h[2]=b[2],h[P]=C[O],h[L]=N[V],f.push(h[0],h[1],h[2])}}const p=c.length;for(let w=0;w<f.length;w++)if(Math.abs(f[w])>=bs/2)return n;const x=(w,M,v)=>((w+bs/2)*bs+(M+bs/2))*bs+(v+bs/2),_=new Set;for(let w=0;w<f.length;w+=3)_.add(x(f[w],f[w+1],f[w+2]));const d={p:[],n:[],c:[],c2:[],g:[],o:[],i:[]},m=(w,M,v,S)=>{const g=d.p.length/3;return d.p.push(M+l[0],v+l[1],S+l[2]),d.n.push(n.nrm[w*3],n.nrm[w*3+1],n.nrm[w*3+2]),d.c.push(n.col[w*3],n.col[w*3+1],n.col[w*3+2]),d.c2.push(n.col2[w*3],n.col2[w*3+1],n.col2[w*3+2]),d.g.push(n.glow[w]),d.o.push(n.ao[w]),g},y=[];for(let w=0;w<p;w++){const M=o[w*4],v=w*12;y.length=0;let S=!1;for(let b=0;b<4;b++){const E=v+b*3,T=v+(b+1)%4*3,P=f[E],L=f[E+1],D=f[E+2],C=f[T]-P,N=f[T+1]-L,k=f[T+2]-D,U=Math.abs(C)+Math.abs(N)+Math.abs(k);y.push(m(o[w*4+b],P,L,D));for(let Y=1;Y<U;Y++){const O=P+C/U*Y,V=L+N/U*Y,q=D+k/U*Y;_.has(x(O,V,q))&&(y.push(m(M,O,V,q)),S=!0)}}if(!S){const b=u[w];if(b>=0){for(let D=0;D<6;D++)d.i.push(y[n.idx[b*6+D]-b*4]);continue}const[E,T,P,L]=y;c[w]?d.i.push(E,T,P,E,P,L):d.i.push(E,P,T,E,L,P);continue}const g=m(M,(f[v]+f[v+6])/2,(f[v+1]+f[v+7])/2,(f[v+2]+f[v+8])/2);for(let b=0;b<y.length;b++){const E=y[b],T=y[(b+1)%y.length];c[w]?d.i.push(g,E,T):d.i.push(g,T,E)}}return{pos:new Float32Array(d.p),nrm:new Float32Array(d.n),col:new Uint8Array(d.c),col2:new Uint8Array(d.c2),glow:new Uint8Array(d.g),ao:new Uint8Array(d.o),idx:new Uint32Array(d.i)}}const Fl=Xe.meshes,x_=3,rr=255,v_=rr/x_,__=3,cf=new WeakMap,uf=new WeakMap,mr=new WeakSet;let hf=0,ff=0,df=0,pf=0,mf=0,gf=0;function M_(n,e){return n.sx===e.sx&&n.sy===e.sy&&n.sz===e.sz&&n.pivot.x===e.pivot.x&&n.pivot.y===e.pivot.y&&n.pivot.z===e.pivot.z&&n.shadeAs===e.shadeAs&&n.shadeHollow===e.shadeHollow}function S_(n){return{sx:n.sx,sy:n.sy,sz:n.sz,pivot:{x:n.pivot.x,y:n.pivot.y,z:n.pivot.z},shadeAs:n.shadeAs,shadeHollow:n.shadeHollow}}function Ba(n){const e=cf.get(n.voxels);return e!==void 0&&M_(e.grid,n)&&e.conformed===mr.has(n.voxels)?e:void 0}function yr(n){const e=uf.get(n);return e!==void 0&&e.voxels===n.voxels&&e.geom.conformed===mr.has(n.voxels)?e:void 0}function y_(n){for(const e of n)xf(e)}function xf(n){mr.has(n.voxels)||(mr.add(n.voxels),hf++)}function w_(n){const{sx:e,sy:t,sz:i,shadeAs:s,shadeHollow:r}=n;if(s===void 0&&r===void 0)return;const a=(s??n.voxels).slice(0,e*t*i);if(r!==void 0)for(let l=0;l<a.length;l++)r[l]!==0&&(a[l]=0);return a}function b_(n){pf++;const e=[];for(let o=0;o<=rr;o++)e.push(o);const t=mr.has(n.voxels),i=m_({...n,palette:e,emissive:[]},void 0,w_(n)),s=t?g_(i,Fl.subjectCutVoxels):i,r=s.pos.length/3,a=new Uint8Array(r);let l=0;for(let o=0;o<r;o++){a[o]=s.col[o*3+2];const c=s.pos[o*3],u=s.pos[o*3+1],f=s.pos[o*3+2],h=c*c+u*u+f*f;h>l&&(l=h)}return{pos:s.pos,nrm:s.nrm,ao:s.ao,idx:s.idx,slots:a,radiusVoxels:Math.sqrt(l),conformed:t}}function E_(n,e){const t=new It;return t.name=`${e.name} grid`,t.setAttribute("position",new nt(n.pos,3)),t.setAttribute("normal",new nt(n.nrm,3)),t.setAttribute("ao",new nt(n.ao,1,!0)),t.setIndex(new nt(n.idx,1)),n.pos.length>0?t.computeBoundingSphere():t.boundingSphere=new ri,{geometry:t,tris:n.idx.length/__,radiusVoxels:n.radiusVoxels,slots:n.slots,grid:S_(e),conformed:n.conformed}}function T_(n,e){const t=n.slots,i=t.length,s=new Uint8Array(i*3),r=new Uint8Array(i*3),a=new Uint8Array(i);for(let c=0;c<i;c++){const u=t[c],f=e.palette[u]??0,h=f>>16&rr,p=f>>8&rr,x=f&rr;s[c*3]=h,s[c*3+1]=p,s[c*3+2]=x,r[c*3]=h,r[c*3+1]=p,r[c*3+2]=x;const _=e.emissive[u]?1:0;a[c]=(_|_<<1)*v_}const l=new It;l.name=e.name;const o=n.geometry;return l.setAttribute("position",o.getAttribute("position")),l.setAttribute("normal",o.getAttribute("normal")),l.setAttribute("ao",o.getAttribute("ao")),l.setAttribute("color",new nt(s,3,!0)),l.setAttribute("col2",new nt(r,3,!0)),l.setAttribute("glow",new nt(a,1,!0)),l.setIndex(o.index),l.boundingSphere=o.boundingSphere.clone(),l}function A_(n,e){let t=Ba(n);return t===void 0&&(t=E_(e,n),cf.set(n.voxels,t),ff++,(n.shadeAs!==void 0||n.shadeHollow!==void 0)&&gf++),lc(t,n)}function lc(n,e){const t={geom:n,geometry:T_(n,e),voxels:e.voxels};return uf.set(e,t),df++,t}function vf(n){const e=Ba(n);return e!==void 0?lc(e,n):A_(n,b_(n))}function R_(n){const e=yr(n);if(e)return e;const t=Ba(n);if(t!==void 0)return Sf(n),Mf++,lc(t,n)}function C_(n){const e=yr(n);return e||(Sf(n),_f++,vf(n))}const on=[];let _f=0,Mf=0;function Sf(n){for(let e=0;e<on.length;e++)if(on[e].model===n){on.splice(e,1);return}}let yo=0,wo=0;function Pu(n){if(!n.urgent){on.push(n);return}let e=0;for(;e<on.length&&on[e].urgent;)e++;on.splice(e,0,n)}function yf(n,e=!1){if(yr(n)===void 0){for(const t of on)if(t.model===n){e&&!t.urgent&&(on.splice(on.indexOf(t),1),t.urgent=!0,Pu(t));return}Pu({model:n,urgent:e})}}function P_(n){for(const e of n)yf(e,!1)}function bo(n=Fl.sliceBudgetMs){const e=performance.now();let t=0;for(;on.length>0&&t<Fl.maxJobsPerCall;){const i=on[0],s=Ba(i.model)!==void 0;if(t>0&&performance.now()-e+(s?wo:yo)>n)break;on.shift();const r=performance.now();vf(i.model);const a=performance.now()-r;mf+=a,s?wo=Math.max(wo,a):yo=Math.max(yo,a),t++}return on.length>0}function L_(){return{geometries:ff,models:df,meshed:pf,queued:on.length,builtMs:mf,shadeGaps:gf,forced:_f,forcedColour:Mf,conformed:hf}}function D_(){return on.length}function I_(){const n=new It;return n.name="pre-warm (voxel mesh layout)",n.setAttribute("position",new nt(new Float32Array(0),3)),n.setAttribute("normal",new nt(new Float32Array(0),3)),n.setAttribute("ao",new nt(new Uint8Array(0),1,!0)),n.setAttribute("color",new nt(new Uint8Array(0),3,!0)),n.setAttribute("col2",new nt(new Uint8Array(0),3,!0)),n.setAttribute("glow",new nt(new Uint8Array(0),1,!0)),n.setIndex(new nt(new Uint32Array(0),1)),n.boundingSphere=new ri,n}function Ul(n,e){const t=Math.cos(n.roll||0),i=Math.sin(n.roll||0),s=Math.cos(n.pitch||0),r=Math.sin(n.pitch||0),a=Math.cos(n.yaw||0),l=Math.sin(n.yaw||0),o=t,c=0,u=i,f=i*r,h=s,p=-t*r,x=-i*s,_=r,d=t*s,m=a,y=l,w=l,M=-a;return e[0]=m*o+w*f,e[1]=m*c+w*h,e[2]=m*u+w*p,e[3]=y*o+M*f,e[4]=y*c+M*h,e[5]=y*u+M*p,e[6]=x,e[7]=_,e[8]=d,e}function N_(n,e,t,i,s,r){const a=t;return n.set(e[0]*a,e[1]*a,e[2]*a,i,e[6]*a,e[7]*a,e[8]*a,s,e[3]*a,e[4]*a,e[5]*a,r,0,0,0,1),n}function F_(n,e,t){return n.scale*(e.voxelSize??1)*t}function U_(n,e){const t=n.model.coarse;return t&&n.scale*(n.model.voxelSize??1)*e<t.belowPx?t.model:n.model}function O_(n,e,t,i){const s=e?t.pixelsPerMetre*i.cpu.cellMetres*i.toGridY:0;return s>0?U_(n,s):n.model}function B_(n,e,t,i,s,r){s.pixelsPerMetre=0;const a=rc(n,t.x,t.y,t.z,s,i);return r.model=O_(e,a||n.cpu.subOn&&i>0&&s.pixelsPerMetre>0,s,n),a}function k_(n,e){return n===e||n.voxels===e.voxels||n.coarse?.model===e||e.coarse?.model===n}function wf(){const n=new WeakSet,e=new Set([...le.landmarks.include,...Xe.meshes.replacedLandmarks]);for(const[t,i]of Xf())e.has(t)&&(n.add(i.day),n.add(i.night));return n}const z_=new Float64Array(9),Nn={x:0,y:0,z:0},Eo={x:0,y:0,depthMetres:0,eyeMetres:0,pixelsPerMetre:0},Lu={model:null},To=new ri,Ao=new Bi,Zr=new Qh,Du=new rt,Iu=new H;function H_(n,e,t,i=wf){const s=new bn;s.matrixAutoUpdate=!1,s.frustumCulled=!1;const r=[],a=[],l=M=>{if(!t)return null;let v=a[M];if(!v){if(M>=Xe.objects.maxFadeMaterials)return null;v=Zh(t()),a[M]=v}return v};for(let M=0;M<Xe.prewarm.fadeMaterials&&l(M);M++);const o=[],c=M=>o[M]??=jh(n);for(let M=0;M<Xe.prewarm.subjectMaterials;M++)c(M);let u=0,f=null,h=0,p=new Int32Array(Xe.objects.maxDrawn);const x=[];let _=new Uint8Array(Xe.objects.maxDrawn);const d={drawn:0,waiting:0,culled:0,popped:0,fading:0,kept:0,colourPasses:0,forced:0,skipped:0,subject:0},m=new WeakMap;let y=null;const w=M=>{let v=r[M];return v||(v=new gt(void 0,n),v.matrixAutoUpdate=!1,v.frustumCulled=!1,v.layers.set(Bs.actors),r[M]=v,s.add(v)),v};return{group:s,stats:d,update(M,v,S,g){d.drawn=0,d.waiting=0,d.culled=0,d.popped=0,d.kept=0,d.colourPasses=0,d.forced=0,d.skipped=0,d.subject=0,h=0,u=0;const b=M.objects;p.length<b.length&&(p=new Int32Array(b.length*2)),p.fill(-1,0,b.length),_.length<b.length&&(_=new Uint8Array(b.length*2)),_.fill(0,0,b.length);const E=v.cpu.cellMetres;Du.copy(v.viewProj),Ao.setFromProjectionMatrix(Du),Zr.set(v);const T=le.opt.actors.cullMarginMetres;let P=0;for(let L=0;L<b.length&&P<Xe.objects.maxDrawn;L++){if(g[L])continue;const D=b[L],C=D.position;if(!Number.isFinite(C.x+C.y+C.z)||!((D.fade??1)>0))continue;if(D.static&&(y??=i(),y.has(D.model))){d.skipped++,_[L]=1;continue}const N=L<(M.followObjects??0),k=N?v.cpu.snapDX:0,U=N?v.cpu.snapDY:0;ti(e,E,C.x+k,C.y+U,C.z,Nn);const Y=v.cpu.subOn,O=Zr.on||Y?zl(D):0,V=B_(v,D,Nn,O,Eo,Lu);let q=Lu.model;D.subject!==void 0&&xf(q);let ne=yr(q);if(!ne&&d.colourPasses<Xe.meshes.colourPassesPerFrame&&(ne=R_(q),ne&&d.colourPasses++),ne){if(D.static||N){const F=m.get(D);(!F||F.mesh!==ne||F.model!==q)&&m.set(D,{mesh:ne,model:q})}}else{yf(q,!0);const F=m.get(D);if(F&&(D.static||N&&k_(F.model,q)))ne=F.mesh,q=F.model,d.kept++;else if(N&&!D.static)ne=C_(q),d.forced++;else{d.waiting++;continue}}const fe=F_(D,q,E),z=ne.geom.radiusVoxels*fe+T+(V&&Eo.pixelsPerMetre>0?2/Eo.pixelsPerMetre:0);if(Iu.set(Nn.x,Nn.y,Nn.z),To.set(Iu,z),!(O>0&&Y?!0:Zr.on?Zr.intersectsSphere(Nn.x,Nn.y,Nn.z,z)||O>0&&Ao.intersectsSphere(To):Ao.intersectsSphere(To))){d.culled++;continue}const se=w(P);se.geometry=ne.geometry,se.visible=!0;const X=D.fade??1;if(O>0&&!(X<1)){const F=c(u);Cl(F).value=O,se.material=F,u++,d.subject++}else if(X<1){const F=l(h),ee=F?of(F):void 0,ce=F?Cl(F):void 0;if(F&&ee&&ce){ee.share.value=X,ce.value=O,O>0&&d.subject++;const ue=D.fadeSeed??0;ee.seed.value=ue>=0&&ue<1?ue:0,ee.pivot.value.set(q.pivot.x,q.pivot.y,q.pivot.z),se.material=F,h++}else se.material=n,d.popped++}else se.material=n;N_(se.matrix,Ul(D,z_),fe,Nn.x,Nn.y,Nn.z),se.matrixWorld.copy(se.matrix),p[L]=P,x[P]=q,P++,d.drawn++}d.fading=h;for(let L=P;L<r.length;L++)r[L].visible=!1},drawn(M){const v=M>=0&&M<p.length?p[M]:-1;return v>=0?r[v]:null},modelOf(M){const v=M>=0&&M<p.length?p[M]:-1;return v>=0?x[v]??null:null},skippedAt(M){return M>=0&&M<_.length&&_[M]===1},warmMeshes(){if(!f){const M=I_();f=[new gt(M,n)];for(const v of a)v&&f.push(new gt(M,v));for(const v of o)f.push(new gt(M,v))}return f}}}const As=Xe.sight,gr=new WeakMap,ar=[];function bf(n){const e=Math.max(1,Math.round(As.occupancyBlockVoxels)),t=Math.ceil(n.sx/e),i=Math.ceil(n.sy/e),s=Math.ceil(n.sz/e);return{sx:n.sx,sy:n.sy,sz:n.sz,b:e,bx:t,by:i,bz:s,blocks:new Uint8Array(t*i*s),voxels:n.voxels,x0:n.sx,y0:n.sy,z0:n.sz,x1:0,y1:0,z1:0,done:!1,nextZ:0}}function Ef(n){const e=n.nextZ++,{sx:t,sy:i,b:s,bx:r,by:a,voxels:l,blocks:o}=n,c=(e/s|0)*r*a;let u=t*i*e,f=!1;for(let h=0;h<i;h++,u+=t){const p=c+(h/s|0)*r;for(let x=0;x<t;x++)l[u+x]!==0&&(o[p+(x/s|0)]=1,f=!0,x<n.x0&&(n.x0=x),x+1>n.x1&&(n.x1=x+1),h<n.y0&&(n.y0=h),h+1>n.y1&&(n.y1=h+1))}f&&(e<n.z0&&(n.z0=e),e+1>n.z1&&(n.z1=e+1)),n.nextZ>=n.sz&&(n.done=!0)}function G_(n){const e=gr.get(n.voxels);return e&&e.done&&e.sx===n.sx&&e.sy===n.sy&&e.sz===n.sz?e:void 0}function Ro(n){let e=gr.get(n.voxels);for((!e||e.sx!==n.sx||e.sy!==n.sy||e.sz!==n.sz)&&(e=bf(n),gr.set(n.voxels,e));!e.done;)Ef(e);return e}function V_(n){if(gr.has(n.voxels))return;const e=bf(n);gr.set(n.voxels,e),ar.push(e)}const W_=()=>performance.now();function Nu(n=As.occupancyBudgetMs,e=W_){const t=e();let i=!0;for(;ar.length>0;){const s=ar[0];for(;!s.done;){if(!i&&e()-t>=n)return!0;Ef(s),i=!1}ar.shift()}return!1}function X_(){return ar.length}const Ki=1e-7,Qn=1e-12,q_=16,Co=2;function Y_(n,e,t,i,s,r,a,l,o=1,c=0){if(!(n.x1>n.x0&&n.y1>n.y0&&n.z1>n.z0))return 1/0;const u=cc(e,t,i,s,r,a,n.x0,n.y0,n.z0,n.x1,n.y1,n.z1,l);if(!(u<1/0))return 1/0;const f=Tf.v,h=u>0,{sx:p,sy:x,b:_,bx:d,by:m,voxels:y,blocks:w}=n,M=s>0?1:-1,v=r>0?1:-1,S=a>0?1:-1,g=Math.abs(s)>Qn?Math.abs(1/s):1/0,b=Math.abs(r)>Qn?Math.abs(1/r):1/0,E=Math.abs(a)>Qn?Math.abs(1/a):1/0;let T=u,P=!1,L=!0,D=0,C=0,N=0,k=0,U=0,Y=0,O=!0;for(;T<=f;){if(O){O=!1;const fe=e+s*(T+Ki),z=t+r*(T+Ki),J=i+a*(T+Ki);D=Math.min(n.x1-1,Math.max(n.x0,Math.floor(fe))),C=Math.min(n.y1-1,Math.max(n.y0,Math.floor(z))),N=Math.min(n.z1-1,Math.max(n.z0,Math.floor(J))),k=g===1/0?1/0:((s>0?D+1:D)-e)/s,U=b===1/0?1/0:((r>0?C+1:C)-t)/r,Y=E===1/0?1/0:((a>0?N+1:N)-i)/a}const V=D/_|0,q=C/_|0,ne=N/_|0;if(w[V+d*(q+m*ne)]===0){const fe=g===1/0?1/0:((s>0?(V+1)*_:V*_)-e)/s,z=b===1/0?1/0:((r>0?(q+1)*_:q*_)-t)/r,J=E===1/0?1/0:((a>0?(ne+1)*_:ne*_)-i)/a;let se=Math.min(fe,z,J);if(se>T||(se=T+Ki),P=!1,L=!1,se>f)return 1/0;T=se;const X=e+s*(T+Ki),F=t+r*(T+Ki),ee=i+a*(T+Ki);if(X<n.x0||X>=n.x1||F<n.y0||F>=n.y1||ee<n.z0||ee>=n.z1)return 1/0;O=!0;continue}if(y[D+p*(C+x*N)]!==0){if(L?h:!P){if(o>=1)return T;const fe=xr(D,C,N)+c;if(fe-Math.floor(fe)<o)return T}P=!0}else P=!1;if(L=!1,k<=U&&k<=Y){if(T=k,D+=M,k+=g,D<n.x0||D>=n.x1)return 1/0}else if(U<=Y){if(T=U,C+=v,U+=b,C<n.y0||C>=n.y1)return 1/0}else if(T=Y,N+=S,Y+=E,N<n.z0||N>=n.z1)return 1/0}return 1/0}function $_(n,e,t,i,s,r,a,l,o,c,u,f,h){const p=cc(n,e,t,i,s,r,a,l,o,c,u,f,h);return p>0?p:1/0}const Fu={yaw:0,pitch:0,roll:0},Fn=new Float64Array(9),Zi={x:0,y:0,z:0};class K_{count=0;waiting=0;cap=0;occ=[];xf=new Float64Array(0);box=new Float64Array(0);share=new Float64Array(0);seed=new Float64Array(0);rig=new Uint8Array(0);subj=new Uint8Array(0);anySubject=!1;stamp=new Uint32Array(0);tick=0;gx0=0;gz0=0;cell=1;nx=0;nz=0;cellStart=new Int32Array(1);cellItems=new Int32Array(0);grow(e){if(e<=this.cap)return;const t=Math.max(e,this.cap*Co,q_),i=new Float64Array(t*16);i.set(this.xf),this.xf=i;const s=new Float64Array(t*6);s.set(this.box),this.box=s;const r=new Float64Array(t);r.set(this.share),this.share=r;const a=new Float64Array(t);a.set(this.seed),this.seed=a;const l=new Uint8Array(t);l.set(this.rig),this.rig=l;const o=new Uint8Array(t);o.set(this.subj),this.subj=o,this.stamp=new Uint32Array(t),this.cap=t}pending=null;frameIn={objects:[],origin:{x:0,y:0},cellMetres:1,pick:()=>null,mode:()=>0,follow:0,snapX:0,snapY:0};setFrame(e,t,i,s,r,a=0,l=0,o=0){const c=this.frameIn;c.objects=e,c.origin=t,c.cellMetres=i,c.pick=s,c.mode=r,c.follow=a,c.snapX=l,c.snapY=o,this.pending=c,this.count=0,this.waiting=0,this.nx=this.nz=0}subjectInFrame(){return this.ensure(),this.anySubject}ensure(){const e=this.pending;e&&(this.pending=null,this.build(e.objects,e.origin,e.cellMetres,e.pick,e.mode,e.follow,e.snapX,e.snapY))}build(e,t,i,s,r,a,l,o){const c=i;this.grow(e.length),this.count=0,this.waiting=0,this.anySubject=!1;const u=Z_;u.length=0;let f=1/0,h=1/0,p=-1/0,x=-1/0;for(let v=0;v<e.length;v++){const S=e[v];this.occ[v]=null;const g=S.position;if(!Number.isFinite(g.x+g.y+g.z))continue;const b=S.fade??1;if(!(b>0))continue;const E=s(S,v);if(!E)continue;const T=G_(E);if(!T){V_(E),this.waiting++;continue}if(!(T.x1>T.x0))continue;const P=S.scale*(E.voxelSize??1)*c;if(!(P>0))continue;const L=v<a;ti(t,c,g.x+(L?l:0),g.y+(L?o:0),g.z,Zi);const D=r(v);D===0?Ul(S,Fn):(Fu.yaw=S.yaw,Ul(Fu,Fn));const C=this.xf,N=v*16;C[N]=Fn[0],C[N+1]=Fn[1],C[N+2]=Fn[2],C[N+3]=Fn[6],C[N+4]=Fn[7],C[N+5]=Fn[8],C[N+6]=Fn[3],C[N+7]=Fn[4],C[N+8]=Fn[5],C[N+9]=Zi.x,C[N+10]=Zi.y,C[N+11]=Zi.z,C[N+12]=P,C[N+13]=E.pivot.x,C[N+14]=E.pivot.y,C[N+15]=E.pivot.z;const k=D===1?1:0;this.rig[v]=k,this.subj[v]=(S.subject??0)>0?1:0,this.subj[v]&&(this.anySubject=!0);const U=k?As.walkerBoxMarginMetres/P:0;let Y=1/0,O=1/0,V=1/0,q=-1/0,ne=-1/0,fe=-1/0;for(let X=0;X<8;X++){const F=(X&1?T.x1+U:T.x0-U)-E.pivot.x,ee=(X&2?T.y1+U:T.y0-U)-E.pivot.y,ce=(X&4?T.z1+U:T.z0-U)-E.pivot.z,ue=Zi.x+P*(C[N]*F+C[N+1]*ee+C[N+2]*ce),xe=Zi.y+P*(C[N+3]*F+C[N+4]*ee+C[N+5]*ce),Le=Zi.z+P*(C[N+6]*F+C[N+7]*ee+C[N+8]*ce);ue<Y&&(Y=ue),ue>q&&(q=ue),xe<O&&(O=xe),xe>ne&&(ne=xe),Le<V&&(V=Le),Le>fe&&(fe=Le)}const z=this.box,J=v*6;z[J]=Y,z[J+1]=O,z[J+2]=V,z[J+3]=q,z[J+4]=ne,z[J+5]=fe,this.share[v]=k?1:b<1?b:1;const se=S.fadeSeed??0;this.seed[v]=se>=0&&se<1?se:0,this.occ[v]=T,u.push(v),Y<f&&(f=Y),V<h&&(h=V),q>p&&(p=q),fe>x&&(x=fe)}for(let v=e.length;v<this.occ.length;v++)this.occ[v]=null;if(this.occ.length=e.length,this.count=u.length,u.length===0){this.nx=this.nz=0;return}const _=Math.max(p-f,x-h),d=Math.max(As.boxGridCellMetres,_/As.boxGridMaxCells);this.cell=d,this.gx0=f,this.gz0=h,this.nx=Math.max(1,Math.ceil((p-f)/d)),this.nz=Math.max(1,Math.ceil((x-h)/d));const m=this.nx*this.nz;this.cellStart.length<m+1&&(this.cellStart=new Int32Array(m+1));const y=this.cellStart;y.fill(0,0,m+1);let w=0;for(const v of u){this.range(v,xn);for(let S=xn[1];S<=xn[3];S++)for(let g=xn[0];g<=xn[2];g++)y[S*this.nx+g+1]++;w+=(xn[2]-xn[0]+1)*(xn[3]-xn[1]+1)}for(let v=0;v<m;v++)y[v+1]+=y[v];this.cellItems.length<w&&(this.cellItems=new Int32Array(Math.max(w,this.cellItems.length*Co)));const M=Po.length>=m?Po:Po=new Int32Array(m*Co);M.set(y.subarray(0,m));for(const v of u){this.range(v,xn);for(let S=xn[1];S<=xn[3];S++)for(let g=xn[0];g<=xn[2];g++)this.cellItems[M[S*this.nx+g]++]=v}}range(e,t){const i=this.box,s=e*6,r=this.cell;t[0]=Math.min(this.nx-1,Math.max(0,Math.floor((i[s]-this.gx0)/r))),t[1]=Math.min(this.nz-1,Math.max(0,Math.floor((i[s+2]-this.gz0)/r))),t[2]=Math.min(this.nx-1,Math.max(0,Math.floor((i[s+3]-this.gx0)/r))),t[3]=Math.min(this.nz-1,Math.max(0,Math.floor((i[s+5]-this.gz0)/r)))}prepareFrame(){this.ensure()}firstHit(e,t,i,s,r,a,l,o=0){if(this.ensure(),this.count===0||this.nx===0||!(l>0))return 1/0;let c=l,u=1/0;++this.tick===4294967295&&(this.stamp.fill(0),this.tick=1);const f=this.tick,h=this.cell,p=this.gx0,x=this.gz0,_=p+this.nx*h,d=x+this.nz*h;let m=0,y=c;if(Math.abs(s)<Qn){if(e<p||e>_)return 1/0}else{const C=(p-e)/s,N=(_-e)/s;m=Math.max(m,Math.min(C,N)),y=Math.min(y,Math.max(C,N))}if(Math.abs(a)<Qn){if(i<x||i>d)return 1/0}else{const C=(x-i)/a,N=(d-i)/a;m=Math.max(m,Math.min(C,N)),y=Math.min(y,Math.max(C,N))}if(m>y)return 1/0;let w=Math.min(this.nx-1,Math.max(0,Math.floor((e+s*m-p)/h))),M=Math.min(this.nz-1,Math.max(0,Math.floor((i+a*m-x)/h)));const v=s>0?1:-1,S=a>0?1:-1,g=Math.abs(s)>Qn?h/Math.abs(s):1/0,b=Math.abs(a)>Qn?h/Math.abs(a):1/0;let E=g===1/0?1/0:(p+(s>0?w+1:w)*h-e)/s,T=b===1/0?1/0:(x+(a>0?M+1:M)*h-i)/a,P=m;const L=this.xf,D=this.box;for(;!(P>=c);){const C=M*this.nx+w;for(let N=this.cellStart[C];N<this.cellStart[C+1];N++){const k=this.cellItems[N];if(this.stamp[k]===f||(this.stamp[k]=f,o!==0&&this.subj[k]===1!=(o===2)))continue;const U=k*6;if(!(cc(e,t,i,s,r,a,D[U],D[U+1],D[U+2],D[U+3],D[U+4],D[U+5],c)<c))continue;const O=k*16,V=e-L[O+9],q=t-L[O+10],ne=i-L[O+11],fe=L[O+12],z=(L[O]*V+L[O+3]*q+L[O+6]*ne)/fe+L[O+13],J=(L[O+1]*V+L[O+4]*q+L[O+7]*ne)/fe+L[O+14],se=(L[O+2]*V+L[O+5]*q+L[O+8]*ne)/fe+L[O+15],X=L[O]*s+L[O+3]*r+L[O+6]*a,F=L[O+1]*s+L[O+4]*r+L[O+7]*a,ee=L[O+2]*s+L[O+5]*r+L[O+8]*a,ce=this.occ[k];let ue;if(this.rig[k]){const Le=As.walkerBoxMarginMetres/fe;ue=$_(z,J,se,X,F,ee,ce.x0-Le,ce.y0-Le,ce.z0-Le,ce.x1+Le,ce.y1+Le,ce.z1+Le,c/fe)}else ue=Y_(ce,z,J,se,X,F,ee,c/fe,this.share[k],this.seed[k]);const xe=ue*fe;xe<c&&(c=xe,u=xe)}if(E<=T){if(P=E,w+=v,E+=g,w<0||w>=this.nx)break}else if(P=T,M+=S,T+=b,M<0||M>=this.nz)break;if(P>y)break}return u}}const Tf={v:0};function cc(n,e,t,i,s,r,a,l,o,c,u,f,h){let p=0,x=h,_,d;if(Math.abs(i)<Qn){if(n<a||n>c)return 1/0}else{if(_=(a-n)/i,d=(c-n)/i,_>d){const m=_;_=d,d=m}_>p&&(p=_),d<x&&(x=d)}if(Math.abs(s)<Qn){if(e<l||e>u)return 1/0}else{if(_=(l-e)/s,d=(u-e)/s,_>d){const m=_;_=d,d=m}_>p&&(p=_),d<x&&(x=d)}if(Math.abs(r)<Qn){if(t<o||t>f)return 1/0}else{if(_=(o-t)/r,d=(f-t)/r,_>d){const m=_;_=d,d=m}_>p&&(p=_),d<x&&(x=d)}return Tf.v=x,p<=x?p:1/0}const Z_=[],xn=new Int32Array(4);let Po=new Int32Array(64);const pa=Xe.frame,Ks=Xe.blend,Kn=le.plain,Af=ni.timeOfDay,Pa=ni.buildings,Rf=ni.street,Lo=ni.clouds;function j_(){return{hour:Af.defaultHour,timeSec:0,haze:[Kn.haze.chase[0],Kn.haze.chase[1]],hazeFullMetres:Kn.haze.chase[1],shadowFocus:{x:0,y:0,z:0},shadowHalf:Kn.shadowHalfMetres.chase,litTower:Pa.litTower/pa.windowShareOutOf,litOther:Pa.litOther/pa.windowShareOutOf,signLit:Rf.signLitShare/pa.windowShareOutOf,cloudCover:0,cloudShare:0}}function J_(n,e){const t=Lo.zoomFadeCellsPerPx,i=1/e.cpu.ppc/e.toGridY,s=1-(1-t.keep)*qf(t.from,t.to,i),r=Yf($f[1],n*s);return r>0?Math.pow(r,Lo.coverCurve)*Lo.maxCoverage:0}const Q_={x:0,y:0,z:0};function Do(n,e){const t=n!==void 0&&Number.isFinite(n)?n:e;return aa(t/pa.windowShareOutOf)}function eM(n){const e=Ov(n,Q_);if(Number.isFinite(e.x)&&Number.isFinite(e.y)&&Number.isFinite(e.z))return e;const t=n.cpu;return e.x=t.eyeX,e.y=t.eyeY,e.z=t.eyeZ*t.cellMetres,e}function tM(n,e,t){const i=t.cpu,s=i.cellMetres,r=th(e.world);n.hour=Number.isFinite(e.timeOfDay)?e.timeOfDay:Af.defaultHour,n.timeSec=Number.isFinite(e.timeSec)?e.timeSec:0,n.litTower=Do(e.windows?.litTower,Pa.litTower),n.litOther=Do(e.windows?.litOther,Pa.litOther),n.signLit=Do(e.windows?.signLit,Rf.signLitShare),e.cloudCover===void 0?(n.cloudCover=Number.NaN,n.cloudShare=Number.NaN):(n.cloudCover=Number.isFinite(e.cloudCover)?aa(e.cloudCover):0,n.cloudShare=J_(n.cloudCover,t));const[a,l]=Ks.mapToChasePerspective,o=aa((i.perspective-a)/(l-a)),c=eM(t),u=c.z-wc(r,c.x,c.y)*s,[f,h]=Ks.chaseToFootEyeAglMetres,p=aa((f-u)/(f-h)),x=Uv(t),_=Kn.haze.map,d=Kn.haze.chase,m=Kn.haze.foot;n.haze[0]=Math.max(0,oi(oi(_[0],d[0],o),m[0],p)+x),n.haze[1]=Math.max(0,oi(oi(_[1],d[1],o),m[1],p)+x),n.hazeFullMetres=n.haze[1];const y=Math.max(Kn.shadowHalfMetres.map,t.metresPerPixel*t.outW*Ks.mapWidthShare);n.shadowHalf=oi(oi(y,Kn.shadowHalfMetres.chase,o),Kn.shadowHalfMetres.foot,p);const w=oi(Ks.aheadEyeShares[0],Ks.aheadEyeShares[1],p)*i.distance,M=oi(i.tx-i.snapDX,c.x+i.fx*w,o),v=oi(i.ty-i.snapDY,c.y+i.fy*w,o);return ti(t.origin,s,M,v,wc(r,M,v)*s,n.shadowFocus),n}const nM=Xe.sight,iM=sh.unitMetres,sM=sh.offsetMetres,rM=65536;function Uu(n,e,t){const i=Math.floor(e/n.cellMetres),s=Math.floor(t/n.cellMetres),r=1<<n.shift;if(i<n.gx0||s<n.gy0||i>=n.gx0+r||s>=n.gy0+r)return-1;const a=n.tileShift,l=(r>>a)-1,o=i>>a,c=s>>a;if(n.slotTile[(c&l)<<n.shift-a|o&l]!==c*rM+o)return-1;const u=r-1;return(s&u)<<n.shift|i&u}function jr(n){throw new Error(`render-gpu/sight.ts: SceneGround answers fine() and drawnSolid() only — ${n}() reads the street layer's own ground (src/street/ground.ts), not the renderer's scene`)}function aM(n){const e=n.meta.cellMetres,t=n.meta.heightUnitMetres,i=n.size;let s=null,r=0,a=0;function l(o,c,u,f){const h=s;if(h){const _=o*e,d=c*e,m=(u+sM)/iM,y=h.levels;for(let w=0;w<y.length;w++){const M=y[w],v=Math.min(M.stopMetres*r,a);if(!(v>0)||!(f<=v))continue;const S=Uu(M,_,d);if(!(S<0))return M.top0[S]>m+nM.levelSlackUnits}}if(!(o>=0&&c>=0&&o<i&&c<i))return!1;const p=(c|0)*i+(o|0);return(n.material[p]===ih.Building?n.surface[p]:n.ground[p])*t>u}return{setScene(o){if(s=o,!o){r=0,a=0;return}const c=o.fade;r=c>0?c<1?c:1:0;const u=o.levels,f=u.length>0?u[u.length-1].stopMetres*r:0,h=o.farStartMetres;a=h>=0&&h<f?h:f},fine(o,c){const u=s;return!u||u.levels.length===0?!1:Uu(u.levels[0],o*e,c*e)>=0},drawnSolid:l,standHeight:()=>jr("standHeight"),blocked:()=>jr("blocked"),ceiling:()=>jr("ceiling"),lightAt:()=>jr("lightAt")}}function Ol(n,e=!1){const t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},a={},l=n[0].morphTargetsRelative,o=new It;o.morphTargetsRelative=l;let c=0;for(let u=0;u<n.length;++u){const f=n[u];let h=0,p=0;if(t!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const x in f.attributes){if(!i.has(x))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+x+'" attribute exists among all geometries, or in none of them.'),null;r[x]===void 0&&(r[x]=[]),r[x].push(f.attributes[x]),h++}if(h!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(l!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const x in f.morphAttributes){if(!s.has(x))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;if(f.morphAttributes[x].length!==n[0].morphAttributes[x].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have the same number of morph targets for the "'+x+'" morph attribute.'),null;a[x]===void 0&&(a[x]=[]),a[x].push(f.morphAttributes[x]),p++}if(p!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of morph attributes."),null;if(e){let x;if(t)x=f.index.count;else if(f.attributes.position!==void 0)x=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;o.addGroup(c,x,u),c+=x}}if(t){let u=0;const f=[];for(let h=0;h<n.length;++h){const p=n[h].index;for(let x=0;x<p.count;++x)f.push(p.getX(x)+u);u+=n[h].attributes.position.count}o.setIndex(f)}for(const u in r){const f=Ou(r[u]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;o.setAttribute(u,f)}for(const u in a){const f=a[u][0].length;if(f!==0){o.morphAttributes=o.morphAttributes||{},o.morphAttributes[u]=[];for(let h=0;h<f;++h){const p=[];for(let _=0;_<a[u].length;++_)p.push(a[u][_][h]);const x=Ou(p);if(!x)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;o.morphAttributes[u].push(x)}}}return o}function Ou(n){let e,t,i,s=-1,r=0;for(let c=0;c<n.length;++c){const u=n[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}const a=new e(r),l=new nt(a,t,i);let o=0;for(let c=0;c<n.length;++c){const u=n[c];if(u.isInterleavedBufferAttribute){const f=o/t;for(let h=0,p=u.count;h<p;h++)for(let x=0;x<t;x++){const _=u.getComponent(h,x);l.setComponent(h+f,x,_)}}else a.set(u.array,o);o+=u.count*t}return s!==void 0&&(l.gpuType=s),l}function Bu(n,e=1e-4){e=Math.max(e,Number.EPSILON);const t={},i=n.getIndex(),s=n.getAttribute("position"),r=i?i.count:s.count;let a=0;const l=Object.keys(n.attributes),o=[],c=new Map,u=[],f=["getX","getY","getZ","getW"],h=e*.5,p=Math.log10(1/e),x=Math.pow(10,p),_=h*x;for(let m=0;m<r;m++){const y=i?i.getX(m):m;let w="";for(let M=0,v=l.length;M<v;M++){const S=l[M],g=n.getAttribute(S),b=g.itemSize;for(let E=0;E<b;E++)w+=`${Math.trunc(g[f[E]](y)*x+_)},`}w in t?u.push(t[w]):(o.push(y),t[w]=a,u.push(a),a++)}const d=n.clone();for(const m in n.attributes)d.setAttribute(m,ku(n.attributes[m],o,c));for(const m in n.morphAttributes)d.morphAttributes[m]=n.morphAttributes[m].map(y=>ku(y,o,c));return d.setIndex(u),d}function ku(n,e,t=new Map){const i=n.isInterleavedBufferAttribute,s=i?n.data:n,r=i?s.stride:n.itemSize;let a=i?t.get(s):void 0;if(a===void 0){const o=new s.array.constructor(e.length*r);for(let c=0;c<e.length;c++)for(let u=0;u<r;u++)o[c*r+u]=s.array[e[c]*r+u];a=i?new s.constructor(o,r,s.meshPerAttribute):new n.constructor(o,n.itemSize,n.normalized,n.meshPerAttribute),a.setUsage(s.usage),i&&t.set(s,a)}const l=i?new n.constructor(a,n.itemSize,n.offset,n.normalized):a;return l.name=n.name,i||(l.gpuType=n.gpuType),l}const Rs=(n,e,t)=>[n,t,-e],Qi=(n,e)=>Math.sign(n)*Math.pow(Math.abs(n),e);function us(n,e,t,i,s,r=!0){const a=[];for(let _=0;_<=e;_++)for(let d=0;d<=n;d++)a.push(t(r?d%n:d,_));const l=(_,d)=>a[Math.min(e,Math.max(0,d))*(n+1)+(r?(_%n+n)%n:Math.min(n,Math.max(0,_)))],o=[];for(let _=0;_<=e;_++)for(let d=0;d<=n;d++){const m=l(d+1,_),y=l(d-1,_),w=l(d,_+1),M=l(d,_-1),v=m[0]-y[0],S=m[1]-y[1],g=m[2]-y[2],b=w[0]-M[0],E=w[1]-M[1],T=w[2]-M[2];let P=S*T-g*E,L=g*b-v*T,D=v*E-S*b;const C=Math.hypot(P,L,D);if(C<1e-9){const N=l(d,Math.round(e/2)),k=l(d,_);P=0,L=0,D=k[2]>N[2]?1:-1}else P/=C,L/=C,D/=C;o.push([P,L,D])}const c=[],u=[],f=[],h=_=>{const d=a[_],m=o[_],y=Rs(d[0],d[1],d[2]),w=Rs(m[0],m[1],m[2]);c.push(y[0],y[1],y[2]),u.push(w[0],w[1],w[2])},p=(_,d,m)=>{const y=a[_],w=a[d],M=a[m],v=(y[0]+w[0]+M[0])/3,S=(y[1]+w[1]+M[1])/3,g=(y[2]+w[2]+M[2])/3;if(s&&!s(v,S,g))return;const b=w[0]-y[0],E=w[1]-y[1],T=w[2]-y[2],P=M[0]-y[0],L=M[1]-y[1],D=M[2]-y[2],C=E*D-T*L,N=T*P-b*D,k=b*L-E*P,U=o[_],O=C*U[0]+N*U[1]+k*U[2]<0?[_,m,d]:[_,d,m];for(const q of O)h(q);const V=i(v,S,g);for(let q=0;q<3;q++)f.push((V>>16&255)/255,(V>>8&255)/255,(V&255)/255)};for(let _=0;_<e;_++)for(let d=0;d<n;d++){const m=_*(n+1)+d,y=m+1,w=m+n+2,M=m+n+1;p(m,y,w),p(m,w,M)}const x=new It;return x.setAttribute("position",new nt(new Float32Array(c),3)),x.setAttribute("normal",new nt(new Float32Array(u),3)),x.setAttribute("color",new nt(new Float32Array(f),3)),x}function ji(n,e,t,i,s,r,a={}){const l=2/t;return us(i,s,(o,c)=>{const u=o/i*Math.PI*2,f=-Math.PI/2+c/s*Math.PI,h=Math.cos(f),p=Math.sin(f),x=a.tuck&&p<0?1-a.tuck*p*p:1;return[n[0]+e[0]*x*Qi(h,l)*Qi(Math.cos(u),l),n[1]+e[1]*Qi(h,l)*Qi(Math.sin(u),l),n[2]+e[2]*Qi(p,l)]},r,a.keep)}function Es(n,e,t,i,s,r,a,l,o={}){const c=2/s,u=o.capBottom??0,f=o.capTop??0,h=le.walker.capRings,p=[];for(let _=0;_<=h;_++){const d=_/h*(Math.PI/2);p.push({z:n+u*(1-Math.cos(d)),k:u>0?Math.sin(d):1})}const x=[];for(let _=1;_<a;_++)x.push(n+u+(e-f-n-u)*_/a);for(const _ of o.breaks??[])_>n+u+1e-4&&_<e-f-1e-4&&x.push(_);x.sort((_,d)=>_-d);for(const _ of x)p.push({z:_,k:1});for(let _=0;_<=h;_++){const d=_/h*(Math.PI/2);p.push({z:e-f+f*Math.sin(d),k:f>0?Math.cos(d):1})}return u>0&&(p[0].k=.001),f>0&&(p[p.length-1].k=.001),us(r,p.length-1,(_,d)=>{const{z:m,k:y}=p[d],w=_/r*Math.PI*2,M=o.cy?o.cy(m):0;return[t(m)*y*Qi(Math.cos(w),c),M+i(m)*y*Qi(Math.sin(w),c),m]},l)}function Jr(n,e,t,i,s,r,a){const l=[],o=le.walker.capRings;for(let u=0;u<=o;u++){const f=u/o*(Math.PI/2);l.push([e*Math.sin(f)+1e-4,-e*Math.cos(f)])}for(let u=1;u<r;u++){const f=u/r;l.push([e+(t-e)*f,n*f])}for(let u=0;u<=o;u++){const f=u/o*(Math.PI/2);l.push([t*Math.cos(f)+1e-4,n+t*Math.sin(f)])}return us(s,l.length-1,(u,f)=>{const h=-(u/s)*Math.PI*2,[p,x]=l[f];return[Math.cos(h)*p*i,Math.sin(h)*p,-x]},(u,f,h)=>a(-h,u))}function Qr(n,e,t,i,s=1){const r=n.length;return us(t,r-1,(a,l)=>{const o=n[l],c=n[Math.max(0,l-1)],u=n[Math.min(r-1,l+1)];let f=u[0]-c[0],h=u[1]-c[1],p=u[2]-c[2];const x=Math.hypot(f,h,p)||1;f/=x,h/=x,p/=x;let _=h*0-p*0,d=p*1-f*0,m=f*0-h*1;Math.hypot(_,d,m)<.001&&(_=0,d=0,m=1);const y=Math.hypot(_,d,m);_/=y,d/=y,m/=y;const w=d*p-m*h,M=m*f-_*p,v=_*h-d*f,S=a/t*Math.PI*2,g=Math.cos(S)*e,b=Math.sin(S)*e*s;return[o[0]+w*g+_*b,o[1]+M*g+d*b,o[2]+v*g+m*b]},()=>i)}function oM(n,e,t,i){return us(n,e,(s,r)=>t(s/n,r/e),()=>i,void 0,!1)}const Ct=va.model,Qe=Ct.palette,Zt=Ct.body,ts=Ct.widths,oe=Ct.sculpt,wt=Ct.backpack,Kt=Ct.arm,Et=le.walker,ye=Et.detail,Un=ye.strap,zu=n=>n<=0?0:n>=1?1:n*n*(3-2*n),Hu=(n,e,t)=>n+(e-n)*Math.max(0,Math.min(1,t));function lM(n){return Zt.shoeTopMetres*Math.cos(n)+Math.max(ts.toeMetres*Math.sin(n),-.11000000000000001*Math.sin(n))}function Gu(n,e,t){return Math.cos(n)*Ct.leg.thighMetres+Math.cos(n-e)*Ct.leg.shinMetres+lM(t)}const cM={kl:0,kr:0,kneeL:0,kneeR:0};function uM(n,e){const s=-n/2,r=-n/2,a=Math.hypot(1,r),l=Math.hypot(0,s),o=Math.atan2(s,0),c=Math.atan2(r,1);return e.first=(c+o)/2,e.second=(c-o)/2,e.s1=a+l,e.s2=a-l,e}const Zs={first:0,second:0,s1:1,s2:1};class or{root=new bn;lift=new bn;leanPivot=new bn;shearTurn=new bn;upper=new bn;parts={};down=new H(0,-1,0);tmp=new H;q=new ei;triangles;drawParts;constructor(e){this.root.name="walker",this.root.add(this.lift),this.lift.add(this.leanPivot),this.leanPivot.position.y=Zt.hipMetres,this.leanPivot.add(this.shearTurn),this.shearTurn.add(this.upper),this.upper.position.y=-.9;const t=()=>oc.uRigInv.value.copy(this.root.matrixWorld).invert(),i=(F,ee,ce=this.root)=>{const ue=new gt(ee,e);return ue.name=F,ue.onBeforeRender=t,ue.castShadow=!0,ue.receiveShadow=!0,ce.add(ue),this.parts[F]=ue,ue},s=()=>Jr(Ct.leg.thighMetres,oe.thighRadiusMetres,oe.kneeRadiusMetres,oe.legAcrossShare,Et.limbSegments,Et.limbRings,()=>Qe.trousers),r=()=>Jr(Ct.leg.shinMetres,oe.kneeRadiusMetres,oe.ankleRadiusMetres,oe.legAcrossShare,Et.limbSegments,Et.limbRings,F=>F>Ct.leg.shinMetres-oe.cuffMetres?Qe.trousersCuff:Qe.trousers);for(const F of["L","R"])i("thigh"+F,s()),i("shin"+F,r()),i("shoe"+F,fM(F==="L"?-1:1));const a=Zt.hipMetres,l=Zt.waistMetres;i("pelvis",Es(a-oe.pelvisDropMetres,l,F=>ts.hipMetres/2*(F<a?1-oe.pelvisTuckShare*(a-F)/oe.pelvisDropMetres:1),()=>oe.waistHalfDepthMetres,oe.roundness,Et.loftSegments,4,(F,ee,ce)=>{if(ce>l-oe.beltMetres)return ee>0&&Math.abs(F)<ye.buckleHalf?Qe.buckle:Qe.belt;const ue=l-ce;return ee<0&&Math.abs(F)>=oe.backPocketX[0]&&Math.abs(F)<=oe.backPocketX[1]&&ue>=oe.backPocketDrop[0]&&ue<=oe.backPocketDrop[1]?Qe.trousersDark:Qe.trousers},{capBottom:oe.pelvisDropMetres*ye.pelvisCapShare,breaks:[l-oe.beltMetres,l-oe.backPocketDrop[1],l-oe.backPocketDrop[0]]}),this.upper);const o=Zt.shoulderMetres,c=F=>{let ee=Hu(oe.waistHalfMetres,oe.chestHalfMetres,zu((F-l)/oe.chestRiseMetres));const ce=F-(o-oe.shoulderRoundMetres);return ce>0&&(ee-=oe.shoulderRoundMetres-Math.sqrt(Math.max(0,oe.shoulderRoundMetres**2-ce*ce))),Math.max(ee,oe.neckRadiusMetres+ye.shoulderOverNeck)},u=F=>Hu(oe.waistHalfDepthMetres,oe.chestHalfDepthMetres,zu((F-l)/oe.chestRiseMetres)),f=o-oe.yokeDropMetres,h=l+oe.pocketRiseMetres,p=Et.seamMetres;i("torso",Es(l-ye.torsoBelow,o+ye.torsoAbove,c,u,oe.roundness,Et.loftSegments,Et.loftRings,(F,ee,ce)=>{const ue=Math.abs(F),xe=ee>0;return ce<l+oe.hemMetres?Qe.jacketTrim:xe&&Math.abs(ce-h)<p&&ue>=oe.pocketX[0]&&ue<=oe.pocketX[1]||!xe&&Math.abs(ce-f)<p?Qe.jacketSeam:Qe.jacket},{capTop:Et.shoulderCapMetres,breaks:[l+oe.hemMetres,h-p,h+p,f-p,f+p]}),this.upper);const x=oe.roundness,_=(F,ee)=>u(ee)*Math.pow(Math.max(0,1-Math.pow(Math.abs(F)/c(ee),x)),1/x),d=F=>oe.openHalfMetres+oe.openWidenMetres*((F-l)/(o-l)),m=o-Et.teeBelowShoulderMetres,y=(F,ee,ce,ue,xe,Le)=>oM(8,Et.loftRings,($,ge)=>{const Re=ce+(ue-ce)*ge,De=ee(Re)+(F(Re)-ee(Re))*$;return[De,_(De,Re)+Le,Re]},xe);i("tee",y(F=>-d(F),F=>d(F),l,m,Qe.tee,Et.panelLiftMetres),this.upper);for(const F of[-1,1]){const ee=ue=>F*d(ue),ce=ue=>F*(d(ue)+oe.zipMetres);i("zip"+F,y(F>0?ee:ce,F>0?ce:ee,l+oe.hemMetres,m,Qe.zip,Et.panelLiftMetres*1.5),this.upper)}i("neck",Es(o-ye.neckBelow,Zt.chinMetres+ye.neckAbove,()=>oe.neckRadiusMetres,()=>oe.neckRadiusMetres,2,ye.neckSegments,3,()=>Qe.skinShade),this.upper);const w=[];for(let F=0;F<=ye.collarPoints;F++){const ee=-Math.PI/2+ye.collarOpenRad+F/ye.collarPoints*(Math.PI*2-2*ye.collarOpenRad),ce=(oe.collarRadii[0]+oe.collarRadii[1])/2;w.push([Math.cos(ee)*ce,Math.sin(ee)*ce*ye.collarStretch-ye.collarBack,o+oe.collarMetres/2])}i("collar",Qr(w.map(F=>[F[0],-F[1],F[2]]),(oe.collarRadii[1]-oe.collarRadii[0])/2+ye.collarThick,8,Qe.jacketTrim,ye.collarFlat),this.upper);const v=Ct.heightMetres-oe.hairMetres,S=(Zt.chinMetres+v)/2,g=(v-Zt.chinMetres)/2;i("head",ji([0,0,S],[oe.headHalfMetres,oe.headHalfDepthMetres,g],oe.roundness,Et.headSegments,Et.headRings,()=>Qe.skin,{tuck:oe.jawTuckShare}),this.upper);const b=oe.headHalfMetres+oe.hairMetres*ye.hairOverShare,E=oe.headHalfDepthMetres+oe.hairMetres/2,T=g+oe.hairMetres,P=-.03/2,L=2/oe.roundness,D=F=>{const ee=Math.sin(F),ce=oe.earZ[1];let ue=ee>=0?ce+(oe.hairlineMetres-ce)*ee:ce+(-.085-ce)*-ee;return ue-=oe.fringeSweepMetres*Math.max(0,Math.min(1,Math.cos(F)*2))*Math.max(0,Math.min(1,ee*2)),ue};i("hair",us(Et.headSegments,Et.headRings,(F,ee)=>{const ce=F/Et.headSegments*Math.PI*2,ue=Math.sign(D(ce))*Math.pow(Math.min(1,Math.abs(D(ce)/T)),oe.roundness/2),xe=Math.asin(Math.max(-1,Math.min(1,ue))),Le=xe+(Math.PI/2-xe)*ee/Et.headRings,$=Math.cos(Le),ge=Math.sin(Le),Re=De=>Math.sign(De)*Math.pow(Math.abs(De),L);return[b*Re($)*Re(Math.cos(ce)),P+E*Re($)*Re(Math.sin(ce)),S+ye.hairLift+T*Re(ge)]},(F,ee,ce)=>ee<0&&ce-S<-.085+ye.hairDarkBand?Qe.hairDark:Qe.hair),this.upper);const C=oe.headHalfDepthMetres*ye.faceFrontShare;for(const F of[-1,1])i("eye"+F,ji([F*oe.eyeXMetres,C-ye.eyeInset,S+(oe.eyeZ[0]+oe.eyeZ[1])/2],[ye.eye[0],ye.eye[1],(oe.eyeZ[1]-oe.eyeZ[0])/2*ye.eyeHeightShare],2,10,6,()=>Qe.eye),this.upper),i("ear"+F,ji([F*(oe.headHalfMetres+ye.earOut),(oe.earY[0]+oe.earY[1])/2,S+(oe.earZ[0]+oe.earZ[1])/2],[ye.earDepth,(oe.earY[1]-oe.earY[0])/2,(oe.earZ[1]-oe.earZ[0])/2],ye.earRound,10,8,()=>Qe.skinShade),this.upper);i("nose",ji([0,C+ye.noseOut,S+oe.eyeZ[0]-ye.noseDrop],ye.nose,2.2,10,8,()=>Qe.skin),this.upper),i("mouth",ji([0,C-ye.mouthIn,S-oe.mouthDropMetres],[oe.mouthHalfMetres,ye.mouth[0],ye.mouth[1]],2.4,12,6,()=>Qe.lip),this.upper);const N=o-wt.dropMetres,k=N-wt.heightMetres,U=-.18;i("pack",Es(k,N,F=>wt.widthMetres/2-(F>N-wt.roundMetres?ye.packTaper*(F-N+wt.roundMetres):0),()=>wt.depthMetres/2,ye.packRound,Et.loftSegments,8,(F,ee,ce)=>{const ue=N-ce;return ue<wt.lidMetres?Qe.packLid:ue<wt.lidMetres+ye.lidSeam?Qe.packDark:Qe.pack},{cy:()=>U,capBottom:wt.roundMetres*ye.packCapShare,capTop:wt.roundMetres}),this.upper);const Y=k+wt.pocketZ[0],O=k+wt.pocketZ[1];i("packPocket",Es(Y,O,()=>wt.pocketHalfMetres,()=>ye.pocketDepth,3,24,4,(F,ee,ce)=>ce>O-ye.pocketZip?Qe.zip:Qe.packPocket,{cy:()=>U-wt.depthMetres/2,capBottom:ye.pocketCap,capTop:ye.pocketCap}),this.upper);for(const F of[-1,1])i("sidePocket"+F,Es(k+ye.sidePocketInset,k+wt.sidePocketMetres,()=>ye.sidePocketHalf,()=>wt.depthMetres*ye.sidePocketDepthShare,3,16,3,()=>Qe.strap,{cy:()=>U+ye.sidePocketInset,capBottom:ye.sidePocketInset,capTop:ye.sidePocketInset}),this.upper).position.x=F*(wt.widthMetres/2+ye.sidePocketOut);const V=[];for(let F=0;F<=ye.handlePoints;F++){const ee=F/ye.handlePoints*Math.PI;V.push([Math.cos(ee)*ye.handle[0],U,N+Math.sin(ee)*ye.handle[1]])}i("handle",Qr(V,ye.handleRadius,6,Qe.strap),this.upper);for(const F of[-1,1]){const ee=F*(wt.strapX[0]+wt.strapX[1])/2,ce=[[ee,U+wt.depthMetres*Un.packDepthShare,N-Un.packDrop],[ee,-.115*Un.backShare,o+Un.overShoulder],[ee,0,o+Un.topRise],[ee,oe.chestHalfDepthMetres*Un.frontShare,o],[ee,oe.chestHalfDepthMetres+Un.chestOut,o-wt.chestStrapDropMetres],[ee*Un.endSpread,oe.chestHalfDepthMetres*Un.endShare+Un.endOut,o-wt.chestStrapDropMetres-Un.endDrop]];i("strap"+F,Qr(ce,ye.strapRadius,8,Qe.strap,ye.strapFlat),this.upper)}const q=[[-.125,oe.chestHalfDepthMetres+ye.chestStrapOut,o-wt.chestStrapDropMetres],[wt.strapX[1],oe.chestHalfDepthMetres+ye.chestStrapOut,o-wt.chestStrapDropMetres]];i("chestStrap",Qr(q,ye.chestStrapRadius,6,Qe.strap,ye.chestStrapFlat),this.upper),i("buckle",ji([0,oe.chestHalfDepthMetres+ye.buckleOut,o-wt.chestStrapDropMetres],ye.buckle,4,10,6,()=>Qe.buckle),this.upper);const ne=Kt.upperMetres+Kt.lowerMetres*oe.sleeveForearmShare,fe=Kt.upperMetres+Kt.lowerMetres-Kt.handMetres;for(const F of["L","R"])i("upperArm"+F,Jr(Kt.upperMetres,oe.shoulderRadiusMetres,oe.elbowRadiusMetres,1,Et.limbSegments,Et.limbRings,()=>Qe.jacket),this.lift),i("foreArm"+F,Jr(Kt.lowerMetres-Kt.handMetres*ye.foreArmHandShare,oe.elbowRadiusMetres,oe.wristRadiusMetres,1,Et.limbSegments,Et.limbRings,ee=>{const ce=Kt.upperMetres+ee;return ce<ne-oe.sleeveCuffMetres?Qe.jacket:ce<ne?Qe.jacketTrim:ce<fe?Qe.skinShade:Qe.skin}),this.lift),i("hand"+F,ji([0,0,0],[oe.handRadiusMetres*ye.hand[0],oe.handRadiusMetres*ye.hand[1],oe.handRadiusMetres*ye.hand[2]],2.2,14,10,()=>Qe.skin),this.lift);const z=this.upper.children.filter(F=>F instanceof gt&&!/^(upperArm|foreArm|hand)[LR]$/.test(F.name)),J=z.map(F=>(F.updateMatrix(),F.geometry.clone().applyMatrix4(F.matrix))),se=Ol(J);for(const F of z)this.upper.remove(F),F.geometry.dispose(),delete this.parts[F.name];i("body",se,this.upper);let X=0;for(const F of Object.values(this.parts))X+=F.geometry.getAttribute("position").count/3|0;this.triangles=X,this.drawParts=Object.keys(this.parts).length,this.pose(Kf())}warmMeshes(e){const t=this.parts.body;return e.filter(i=>!!i).map(i=>{const s=new gt(t.geometry,i);return s.castShadow=!0,s.receiveShadow=!0,s.layers.mask=t.layers.mask,s})}setMaterial(e){for(const t of Object.values(this.parts))t.material=e}pose(e,t=cM){const i=Math.max(Gu(e.thighL,e.kneeL,e.footL),Gu(e.thighR,e.kneeR,e.footR)),s=i-Zt.hipMetres,r=e.lean/(Ct.heightMetres-Zt.hipMetres);this.lift.position.y=s,uM(r,Zs),this.leanPivot.rotation.x=Zs.first,this.leanPivot.scale.set(1,Zs.s1,Zs.s2),this.shearTurn.rotation.x=Zs.second;const a=Ct.voxelMetres,l=ts.legGapMetres/2+ts.legMetres/2;for(const[f,h,p,x,_,d,m]of[["L",-1,e.thighL,e.kneeL,e.footL,t.kl,t.kneeL],["R",1,e.thighR,e.kneeR,e.footR,t.kr,t.kneeR]]){const y=Math.sin(p)*Ct.leg.thighMetres,w=i-Math.cos(p)*Ct.leg.thighMetres+m*a,M=p-x,v=y+Math.sin(M)*Ct.leg.shinMetres,S=w-m*a-Math.cos(M)*Ct.leg.shinMetres+d*a;this.seg(this.parts["thigh"+f],h*l,0,i,h*l,y,w,m>0?Ct.leg.thighMetres:0),this.seg(this.parts["shin"+f],h*l,y,w,h*l,v,S,d>0||m>0?Ct.leg.shinMetres:0);const g=this.parts["shoe"+f];g.position.set(...Rs(h*l,v,S)),g.rotation.set(-_,0,0)}const o=oe.chestHalfMetres+oe.shoulderRadiusMetres*ye.armOutShare,c=Zt.shoulderMetres-ye.shoulderDrop,u=r*(Zt.shoulderMetres-Zt.hipMetres);for(const[f,h,p,x]of[["L",-1,e.armL,e.elbowL],["R",1,e.armR,e.elbowR]]){const _=u+Math.sin(p)*Kt.upperMetres,d=c-Math.cos(p)*Kt.upperMetres,m=p+x,y=Kt.lowerMetres-Kt.handMetres*ye.foreArmHandShare,w=_+Math.sin(m)*y,M=d-Math.cos(m)*y;this.seg(this.parts["upperArm"+f],h*o,u,c,h*o,_,d),this.seg(this.parts["foreArm"+f],h*o,_,d,h*o,w,M);const v=_+Math.sin(m)*(Kt.lowerMetres-Kt.handMetres*ye.handReach),S=d-Math.cos(m)*(Kt.lowerMetres-Kt.handMetres*ye.handReach),g=this.parts["hand"+f];g.position.set(...Rs(h*o,v,S)),g.rotation.set(m,0,0)}}seg(e,t,i,s,r,a,l,o=0){const c=Rs(t,i,s),u=Rs(r,a,l);e.position.set(c[0],c[1],c[2]),this.tmp.set(u[0]-c[0],u[1]-c[1],u[2]-c[2]);const f=this.tmp.length();this.tmp.normalize(),this.q.setFromUnitVectors(this.down,this.tmp),e.quaternion.copy(this.q),e.scale.set(1,o>0?f/o:1,1)}static cycle(e,t){return t<=0?Er(e,!1):t>=1?Er(e,!0):Zf(Er(e,!1),Er(e,!0),t)}static strideMetres(e){return Ct.strideMetres*(1+(Ct.runStrideShare-1)*e)}}function hM(n,e=le.opt.actors.walkerLow){const t=le.walker,i=[];for(const[s,r]of Object.entries(e)){const a=s in t?t:t.detail;i.push([a,s,a[s]]),a[s]=r}try{return new or(n)}finally{for(const[s,r,a]of i)s[r]=a}}function fM(n,e){const t=Ct.voxelMetres,i=t/2,s=Xe.walker.cellEps,r=ts.toeMetres,a=ts.legGapMetres/2+ts.legMetres/2,l=[];for(let X=0;X*t<=a+oe.shoeHalfWidthMetres+t;X++){const F=X*t-a;Math.abs(F)<=oe.shoeHalfWidthMetres+s&&l.push(F)}const o=Math.min(...l)-i,c=Math.max(...l)+i,u=n>0?o:-c,f=n>0?c:-o,h=-.15,p=X=>{let F=0;for(;h+(F+.5)*t<X-s;)F++;return h+F*t},x=-.15+Zt.soleMetres+oe.toeHeightMetres,_=X=>X<=oe.ankleRadiusMetres?i:i+(x-i)*Math.min(1,(X-oe.ankleRadiusMetres)/(r-oe.ankleRadiusMetres)),d=X=>{if(X<=oe.ankleRadiusMetres)return _(X)+i;if(X>=oe.ankleRadiusMetres+t)return _(X);const F=(X-oe.ankleRadiusMetres)/t;return(_(oe.ankleRadiusMetres)+i)*(1-F)+_(oe.ankleRadiusMetres+t)*F},m=(f-u)/2,y=(u+f)/2,w=oe.toeRoundMetres,M=X=>{const F=(X-(r-w))/w;return F<=0?1:ye.shoeToeTipShare+(1-ye.shoeToeTipShare)*Math.sqrt(Math.max(0,1-F*F))},v=p(h+Zt.soleMetres),S=h+Math.round((Zt.soleMetres+oe.shoeStripeMetres)/t-.5)*t,g=S+t,b=p(h+Zt.soleMetres+t),E=l.filter(X=>Math.abs(X)<t*ye.shoeLaceCellShare),T=n>0?Math.min(...E)-i:-(Math.max(...E)+i),P=n>0?Math.max(...E)+i:-(Math.min(...E)-i),L=r-oe.laceFromToeMetres-oe.laceLengthMetres,D=r-oe.laceFromToeMetres,C=-.11000000000000001+t,N=r-oe.toeRoundMetres,k=-.11000000000000001+t,U=ye.shoeEdgeMetres,Y=[v,S,g,b].filter(X=>!0).sort((X,F)=>X-F),O=Y.filter((X,F)=>F===0||X-Y[F-1]>s),V=[-.11000000000000001+U,k,oe.ankleRadiusMetres,oe.ankleRadiusMetres+t,L,D,N,r-w,r-w/2,r-U].sort((X,F)=>X-F).filter((X,F,ee)=>F===0||X-ee[F-1]>s),q=ye.shoeEndCollapse,ne=[{u:-.11000000000000001,k:q,inset:U},{u:-.11000000000000001,k:1,inset:U},...V.map(X=>({u:X,k:1,inset:0})),{u:r,k:1,inset:U},{u:r,k:q,inset:U}],fe=(X,F)=>{const ee=m*M(X)-F,ce=d(X)-F,ue=h,xe=Math.max(ye.shoeEdgeMinMetres,Math.min(U,ee*ye.shoeEdgeWidthShare,(ce-ue)*ye.shoeEdgeHeightShare)),Le=y-ee,$=y+ee,ge=(Be,et,bt)=>{const un=[];for(let W=1;W<=ye.shoeCornerPoints;W++){const hn=bt+W/(ye.shoeCornerPoints+1)*(Math.PI/2);un.push([Be+xe*Math.cos(hn),et+xe*Math.sin(hn)])}return un},Re=Be=>Math.min(ce-xe-ye.shoeWallClampMetres,Math.max(ue+xe+ye.shoeWallClampMetres,Be)),De=O.map(Re),Ve=Math.max(Le+xe,Math.min($-xe,T)),Ze=Math.max(Le+xe,Math.min($-xe,P));return[[y,ue],[$-xe,ue],...ge($-xe,ue+xe,-Math.PI/2),[$,ue+xe],...De.map(Be=>[$,Be]),[$,ce-xe],...ge($-xe,ce-xe,0),[$-xe,ce],[Math.max(Ve,Ze),ce],[(Ve+Ze)/2,ce],[Math.min(Ve,Ze),ce],[Le+xe,ce],...ge(Le+xe,ce-xe,Math.PI/2),[Le,ce-xe],...De.slice().reverse().map(Be=>[Le,Be]),[Le,ue+xe],...ge(Le+xe,ue+xe,Math.PI),[Le+xe,ue]]};let z=ne.map(X=>fe(X.u,X.inset));z=z.map(X=>[X[0],...X.slice(1).reverse()]);const J=dM(n,{mid:y,soleTop:v,stripeLo:S,stripeHi:g,tabLo:b,tabU1:k,stripeU0:C,stripeU1:N,laceA:T,laceB:P,laceU0:L,laceU1:D,top:d}),se=us(z[0].length,ne.length-1,(X,F)=>{const ee=ne[F],ce=z[F][X],ue=ce[1];return[y+(ce[0]-y)*ee.k,ee.u,ue]},J);return se.userData={paint:J,columns:z[0].length,rowGaps:ne.length-1,heel:-.11000000000000001,toe:r},se}function dM(n,e){const t=Ct.voxelMetres;return(i,s,r)=>r<e.soleTop?Qe.sole:s<e.tabU1&&r>e.tabLo||(i-e.mid)*n>0&&r>e.stripeLo&&r<e.stripeHi&&s>e.stripeU0&&s<e.stripeU1?Qe.shoeStripe:r>e.top(s)-t&&i>Math.min(e.laceA,e.laceB)&&i<Math.max(e.laceA,e.laceB)&&s>=e.laceU0&&s<=e.laceU1?Qe.lace:Qe.shoe}const gi=va.model,xi={resolved:0,unresolved:0,oddPivot:0,kneeMoved:0,liftedTwice:0},pM=/-lit(\d+)$/,Io=new WeakMap;function mM(n){const e=pM.exec(n.name);return e?Number(e[1]):0}function gM(n){const e=Io.get(n);if(e!==void 0)return e;const t=jf(n),s=bc(t??n);bc(s.base).base!==s.base&&xi.liftedTwice++;const r=Jf(s.base.voxels);if(!r)return xi.unresolved++,Io.set(n,null),null;(n.pivot.x!==n.sx/2||n.pivot.y!==n.sy/2)&&xi.oddPivot++;const a=s.kl>0&&Wu(s.base,r,0)?s.kl:0,l=s.kr>0&&Wu(s.base,r,1)?s.kr:0;(a>0||l>0)&&xi.kneeMoved++;const o={pose:r,kl:s.kl,kr:s.kr,kneeL:a,kneeR:l,level:t?mM(n):0,pivotZ:n.pivot.z};return xi.resolved++,Io.set(n,o),o}function xM(n){const e=gi.widths;return gi.body.shoeTopMetres*Math.cos(n)+Math.max(e.toeMetres*Math.sin(n),-.11000000000000001*Math.sin(n))}function Vu(n,e,t){return Math.cos(n)*gi.leg.thighMetres+Math.cos(n-e)*gi.leg.shinMetres+xM(t)}function Wu(n,e,t){const i=gi.voxelMetres,s=(n.sx-1)/2,r=(n.sy-1)/2,a=Math.max(Vu(e.thighL,e.kneeL,e.footL),Vu(e.thighR,e.kneeR,e.footR)),l=t===0?e.thighL:e.thighR,o=gi.widths.legGapMetres/2+gi.widths.legMetres/2,c=(t===0?-1:1)*Math.round(o/i)+s,u=Math.round(Math.sin(l)*gi.leg.thighMetres/i)+r,f=Math.floor((a-Math.cos(l)*gi.leg.thighMetres)/i+Xe.walker.cellEps),h=Math.min(n.sz,Math.round(Qf.handover.footLiftKneeM/i));if(f>=h||c<0||c>=n.sx||u<0||u>=n.sy)return!1;const p=n.sx*n.sy;let x=1/0,_=-1/0,d=-1;for(let v=0;v<n.sz;v++)for(let S=0;S<n.sy;S++)for(let g=0;g<n.sx;g++)ed.has(n.voxels[g+n.sx*S+p*v])&&(g+.5<n.pivot.x?0:1)===t&&(g<x&&(x=g),g>_&&(_=g),v>d&&(d=v));if(d<0)return!1;const m=Math.ceil(n.pivot.x-.5)-1,y=Math.max(0,t===0?x-1:Math.max(x-1,m+1)),w=Math.min(n.sx-1,t===0?Math.min(_+1,m):_+1);if(c<y||c>w)return!1;const M=c+n.sx*u;for(let v=0;v<h;v++)if(n.voxels[M+p*v])return v<=d;return!1}function Cf(n,e,t){const i=s=>{const r=s,a=r.__watched??={};a[e]||(a[e]=!0,s.addEventListener("childadded",l=>l.child.traverse(i))),t(s)};n.traverse(i)}const ka="void main() { gl_Position = vec4(position.xy, 0.0, 1.0); }",No=n=>Number.isInteger(n)?n.toFixed(1):String(n);function vM(){const n=le.smooth.fxaa;return new cn({uniforms:{tIn:{value:null},uRcp:{value:new ze(1,1)}},vertexShader:ka,fragmentShader:`
uniform sampler2D tIn; uniform vec2 uRcp;
void main() {
  vec2 pos = gl_FragCoord.xy * uRcp;
  vec4 m = texture2D(tIn, pos);
  // Four bilinear taps at the pixel's corners: each averages four pixels.
  float lNw = texture2D(tIn, pos + vec2(-0.5, -0.5) * uRcp).a;
  float lSw = texture2D(tIn, pos + vec2(-0.5, 0.5) * uRcp).a;
  float lNe = texture2D(tIn, pos + vec2(0.5, -0.5) * uRcp).a + 1.0 / 384.0;
  float lSe = texture2D(tIn, pos + vec2(0.5, 0.5) * uRcp).a;
  float lMax = max(max(lNw, lSw), max(lNe, lSe));
  float lMin = min(min(lNw, lSw), min(lNe, lSe));
  float lMaxM = max(lMax, m.a), lMinM = min(lMin, m.a);
  if (lMaxM - lMinM < max(${No(n.edgeThresholdMin)}, lMax * ${No(n.edgeThreshold)})) { gl_FragColor = vec4(m.rgb, 1.0); return; }
  float sw = lSw - lNe, se = lSe - lNw;
  vec2 dir = vec2(sw + se, sw - se);
  vec2 d1 = normalize(dir + vec2(1e-6));
  vec4 n1 = texture2D(tIn, pos - d1 * 0.5 * uRcp);
  vec4 p1 = texture2D(tIn, pos + d1 * 0.5 * uRcp);
  float dmin = min(abs(d1.x), abs(d1.y)) * ${No(n.edgeSharpness)};
  vec2 d2 = clamp(d1 / max(dmin, 1e-6), -2.0, 2.0);
  vec4 n2 = texture2D(tIn, pos - d2 * 2.0 * uRcp);
  vec4 p2 = texture2D(tIn, pos + d2 * 2.0 * uRcp);
  vec4 a = n1 + p1;
  vec4 b = (n2 + p2) * 0.25 + a * 0.25;
  // The wide pair crossed another edge: keep the narrow pair.
  if (b.a < lMin || b.a > lMax) b.rgb = a.rgb * 0.5;
  gl_FragColor = vec4(b.rgb, 1.0);
}`,depthTest:!1,depthWrite:!1})}function _M(){return new cn({uniforms:{tIn:{value:null},uInSize:{value:new ze(1,1)},uOutSize:{value:new ze(1,1)}},vertexShader:ka,fragmentShader:`
uniform sampler2D tIn; uniform vec2 uInSize; uniform vec2 uOutSize;
float rcpLo(float a) { return uintBitsToFloat(0x7ef07ebbu - floatBitsToUint(a)); }
float rsqLo(float a) { return uintBitsToFloat(0x5f347d74u - (floatBitsToUint(a) >> 1u)); }
vec3 ld(ivec2 p) { return texelFetch(tIn, clamp(p, ivec2(0), ivec2(uInSize) - 1), 0).rgb; }
// FSR's luma times two, in two multiply-adds.
float lum(vec3 c) { return c.b * 0.5 + (c.r * 0.5 + c.g); }
// Accumulates the direction and length of the edge from one of the four centre texels (A above, B left, C centre, D right, E below).
void easuSet(inout vec2 dir, inout float len, float w, float lA, float lB, float lC, float lD, float lE) {
  float dc = lD - lC, cb = lC - lB;
  float lenX = rcpLo(max(abs(dc), abs(cb)));
  float dirX = lD - lB;
  dir.x += dirX * w;
  lenX = clamp(abs(dirX) * lenX, 0.0, 1.0);
  lenX *= lenX;
  len += lenX * w;
  float ec = lE - lC, ca = lC - lA;
  float lenY = rcpLo(max(abs(ec), abs(ca)));
  float dirY = lE - lA;
  dir.y += dirY * w;
  lenY = clamp(abs(dirY) * lenY, 0.0, 1.0);
  lenY *= lenY;
  len += lenY * w;
}
// One tap of the approximate Lanczos(2) kernel, stretched along the edge.
void easuTap(inout vec3 aC, inout float aW, vec2 off, vec2 dir, vec2 len, float lob, float clp, vec3 c) {
  vec2 v = vec2(off.x * dir.x + off.y * dir.y, off.x * (-dir.y) + off.y * dir.x) * len;
  float d2 = min(v.x * v.x + v.y * v.y, clp);
  float wB = 0.4 * d2 - 1.0;
  float wA = lob * d2 - 1.0;
  wB *= wB;
  wA *= wA;
  wB = 1.5625 * wB - 0.5625;
  float w = wB * wA;
  aC += c * w;
  aW += w;
}
void main() {
  vec2 pp = gl_FragCoord.xy * (uInSize / uOutSize) - 0.5;
  vec2 fp = floor(pp);
  pp -= fp;
  ivec2 q = ivec2(fp);
  //    b c
  //  e f g h
  //  i j k l
  //    n o
  vec3 b = ld(q + ivec2(0, -1)), c = ld(q + ivec2(1, -1));
  vec3 e = ld(q + ivec2(-1, 0)), f = ld(q), g = ld(q + ivec2(1, 0)), h = ld(q + ivec2(2, 0));
  vec3 i = ld(q + ivec2(-1, 1)), j = ld(q + ivec2(0, 1)), k = ld(q + ivec2(1, 1)), l = ld(q + ivec2(2, 1));
  vec3 n = ld(q + ivec2(0, 2)), o = ld(q + ivec2(1, 2));
  float bL = lum(b), cL = lum(c), eL = lum(e), fL = lum(f), gL = lum(g), hL = lum(h);
  float iL = lum(i), jL = lum(j), kL = lum(k), lL = lum(l), nL = lum(n), oL = lum(o);
  vec2 dir = vec2(0.0);
  float len = 0.0;
  easuSet(dir, len, (1.0 - pp.x) * (1.0 - pp.y), bL, eL, fL, gL, jL);
  easuSet(dir, len, pp.x * (1.0 - pp.y), cL, fL, gL, hL, kL);
  easuSet(dir, len, (1.0 - pp.x) * pp.y, fL, iL, jL, kL, nL);
  easuSet(dir, len, pp.x * pp.y, gL, jL, kL, lL, oL);
  vec2 dir2 = dir * dir;
  float dirR = dir2.x + dir2.y;
  bool zro = dirR < 1.0 / 32768.0;
  dirR = zro ? 1.0 : rsqLo(dirR);
  dir.x = zro ? 1.0 : dir.x;
  dir *= dirR;
  len = len * 0.5;
  len *= len;
  float stretch = (dir.x * dir.x + dir.y * dir.y) * rcpLo(max(abs(dir.x), abs(dir.y)));
  vec2 len2 = vec2(1.0 + (stretch - 1.0) * len, 1.0 - 0.5 * len);
  float lob = 0.5 + ((1.0 / 4.0 - 0.04) - 0.5) * len;
  float clp = rcpLo(lob);
  vec3 min4 = min(min(f, g), min(j, k));
  vec3 max4 = max(max(f, g), max(j, k));
  vec3 aC = vec3(0.0);
  float aW = 0.0;
  easuTap(aC, aW, vec2(0.0, -1.0) - pp, dir, len2, lob, clp, b);
  easuTap(aC, aW, vec2(1.0, -1.0) - pp, dir, len2, lob, clp, c);
  easuTap(aC, aW, vec2(-1.0, 1.0) - pp, dir, len2, lob, clp, i);
  easuTap(aC, aW, vec2(0.0, 1.0) - pp, dir, len2, lob, clp, j);
  easuTap(aC, aW, vec2(0.0, 0.0) - pp, dir, len2, lob, clp, f);
  easuTap(aC, aW, vec2(-1.0, 0.0) - pp, dir, len2, lob, clp, e);
  easuTap(aC, aW, vec2(1.0, 1.0) - pp, dir, len2, lob, clp, k);
  easuTap(aC, aW, vec2(2.0, 1.0) - pp, dir, len2, lob, clp, l);
  easuTap(aC, aW, vec2(2.0, 0.0) - pp, dir, len2, lob, clp, h);
  easuTap(aC, aW, vec2(1.0, 0.0) - pp, dir, len2, lob, clp, g);
  easuTap(aC, aW, vec2(1.0, 2.0) - pp, dir, len2, lob, clp, o);
  easuTap(aC, aW, vec2(0.0, 2.0) - pp, dir, len2, lob, clp, n);
  // Deringing: never outside the four nearest texels' range.
  gl_FragColor = vec4(min(max4, max(min4, aC / aW)), 1.0);
}`,depthTest:!1,depthWrite:!1})}function MM(){return new cn({uniforms:{tIn:{value:null},uOutSize:{value:new ze(1,1)}},vertexShader:ka,fragmentShader:"uniform sampler2D tIn; uniform vec2 uOutSize; void main() { gl_FragColor = vec4(texture2D(tIn, gl_FragCoord.xy / uOutSize).rgb, 1.0); }",depthTest:!1,depthWrite:!1})}function SM(){return new cn({uniforms:{tIn:{value:null},uSize:{value:new ze(1,1)},uSharp:{value:1}},vertexShader:ka,fragmentShader:`
uniform sampler2D tIn; uniform vec2 uSize; uniform float uSharp;
vec3 ld(ivec2 p) { return texelFetch(tIn, clamp(p, ivec2(0), ivec2(uSize) - 1), 0).rgb; }
float rcpMed(float a) { float b = uintBitsToFloat(0x7ef19fffu - floatBitsToUint(a)); return b * (-b * a + 2.0); }
float lum(vec3 c) { return c.b * 0.5 + (c.r * 0.5 + c.g); }
void main() {
  //    b
  //  d e f
  //    h
  ivec2 sp = ivec2(gl_FragCoord.xy);
  vec3 b = ld(sp + ivec2(0, -1)), d = ld(sp + ivec2(-1, 0)), e = ld(sp), f = ld(sp + ivec2(1, 0)), h = ld(sp + ivec2(0, 1));
  float bL = lum(b), dL = lum(d), eL = lum(e), fL = lum(f), hL = lum(h);
  // Noise detection.
  float nz = 0.25 * bL + 0.25 * dL + 0.25 * fL + 0.25 * hL - eL;
  nz = clamp(abs(nz) * rcpMed(max(max(max(bL, dL), max(eL, fL)), hL) - min(min(min(bL, dL), min(eL, fL)), hL)), 0.0, 1.0);
  nz = -0.5 * nz + 1.0;
  // Min and max of the ring, and the lobe that keeps the result inside it.
  vec3 mn4 = min(min(b, d), min(f, h));
  vec3 mx4 = max(max(b, d), max(f, h));
  vec3 hitMin = min(mn4, e) / max(4.0 * mx4, vec3(1e-6));
  vec3 hitMax = (1.0 - max(mx4, e)) / min(4.0 * mn4 - 4.0, vec3(-1e-6));
  vec3 lobeC = max(-hitMin, hitMax);
  float lobe = max(-(0.25 - 1.0 / 16.0), min(max(lobeC.r, max(lobeC.g, lobeC.b)), 0.0)) * uSharp;
  ${le.smooth.rcas.denoise?"lobe *= nz;":""}
  float rcpL = rcpMed(4.0 * lobe + 1.0);
  gl_FragColor = vec4((lobe * (b + d + h + f) + e) * rcpL, 1.0);
}`,depthTest:!1,depthWrite:!1})}const Oe=le.pixel,Pt=Oe.edge,nn=Oe.water,rn=Oe.night,ot=Oe.clouds,_n=()=>le.smooth,qe=n=>Number.isInteger(n)?n.toFixed(1):String(n),Pf={object:null},mn={uAmb:{value:new H(.5,.5,.5)},uSun:{value:new H(.5,.5,.5)},uLevels:{value:Oe.shadeLevels.slice()},uBandGain:{value:Oe.bandGain},uBandBias:{value:Oe.bandBias},uShadowLevel:{value:Oe.shadowLevel},uHazeSteps:{value:Oe.hazeSteps},uHazeDither:{value:Oe.hazeDither},uDitherOrigin:{value:new ze},uTime:{value:0},uBNight:{value:0},uShadowMix:{value:1},uSunW:{value:new H(0,1,0)},uCloudTex:{value:yM()},uCloudOn:{value:ot.on?1:0},uCloudThresh:{value:ot.fallbackThreshold}};function yM(){const n=ot.noiseSize;let e=ot.noiseSeed>>>0;const t=()=>(e=Math.imul(e^e>>>15,739982445)+2654435769>>>0)/4294967296,i=new Float32Array(n*n);ot.noisePeriods.forEach((o,c)=>{const u=Math.max(1,Math.round(n/o)),f=new Float32Array(u*u).map(()=>t()),h=1/(1<<c);for(let p=0;p<n;p++)for(let x=0;x<n;x++){const _=x/n*u,d=p/n*u,m=Math.floor(_),y=Math.floor(d),w=_-m,M=d-y,v=w*w*(3-2*w),S=M*M*(3-2*M),g=(b,E)=>f[(E+u)%u*u+(b+u)%u];i[p*n+x]+=((g(m,y)*(1-v)+g(m+1,y)*v)*(1-S)+(g(m,y+1)*(1-v)+g(m+1,y+1)*v)*S)*h}});let s=1/0,r=-1/0;for(const o of i)s=Math.min(s,o),r=Math.max(r,o);const a=new Uint8Array(n*n);for(let o=0;o<n*n;o++)a[o]=Math.round((i[o]-s)/(r-s||1)*255);const l=new ls(a,n,n,vr,an);return l.wrapS=l.wrapT=hr,l.magFilter=l.minFilter=Ft,l.needsUpdate=!0,l}const wM=()=>`
float bCloud(vec2 xz) {
  vec2 d = uTime * vec2(${qe(ot.driftMps[0])}, ${qe(ot.driftMps[1])}) + vec2(${qe(ot.offsetMetres[0])}, ${qe(ot.offsetMetres[1])});
  float n = texture2D(uCloudTex, (xz + d) / ${qe(ot.tileMetres[0])}).r * ${qe(ot.weights[0])}
          + texture2D(uCloudTex, (xz + d * ${qe(ot.secondDrift)}) / ${qe(ot.tileMetres[1])} + vec2(${qe(ot.secondOffset[0])}, ${qe(ot.secondOffset[1])})).r * ${qe(ot.weights[1])};
  return n - uCloudThresh;
}
`,jt=()=>!!le.smooth.on,bM=()=>jt()&&le.smooth.dither==="mean",uc=()=>`
float bayer4(vec2 p) {
  ivec2 q = ivec2(mod(floor(p), 4.0));
  int i = q.x + q.y * 4;
  int m[16] = int[16](0, 8, 2, 10, 12, 4, 14, 6, 3, 11, 1, 9, 15, 7, 13, 5);
  return (float(m[i]) + 0.5) / 16.0;
}
// x (0–1) in n steps; between two steps the pattern mixes them over \`width\` of the step (1 = ordered dithering
// across the whole step, small = flat bands with a narrow dithered seam).
float bQuant(float x, float n, float width) {
  float q = x * n, b = floor(q), t = clamp((q - b - 0.5) / max(width, 1e-3) + 0.5, 0.0, 1.0);
${bM()?`  // Smooth B: the dither's average (the share of the 4 × 4 pattern that takes the upper step is t).
  return (b + t) / n;`:"  return (b + step(bayer4(gl_FragCoord.xy + uDitherOrigin), t)) / n;"}
}
`,lr=()=>jt()&&le.smooth.shadowSoft,EM=()=>`
uniform vec3 uAmb; uniform vec3 uSun; uniform float uLevels[${Oe.shadeLevels.length}]; uniform float uBandGain; uniform float uBandBias;
uniform float uShadowLevel; uniform float uHazeSteps; uniform float uHazeDither; uniform vec2 uDitherOrigin; uniform float uTime;
uniform float uEdgeClass; uniform float uMinLevel; uniform float uShadowFloorLvl;
float bMinLvl; float bShFloor;
uniform float uBNight; uniform float uShadowMix; uniform vec3 uSunW; uniform sampler2D uCloudTex; uniform float uCloudOn; uniform float uCloudThresh;
varying vec3 vBWorld;
layout(location = 1) out highp vec4 pc_fragN;
${uc()}
${wM()}
float bandLevel(float ndl, float sh) {
${lr()?"":"  if (sh < 0.5) return uLevels[max(int(uShadowLevel), int(bShFloor))];"}
  float v = ndl * uBandGain + uBandBias;
  float best = uLevels[0];
  v = max(v, uLevels[int(bMinLvl)]);
  for (int i = 1; i < ${Oe.shadeLevels.length}; i++) if (abs(uLevels[i] - v) < abs(best - v)) best = uLevels[i];
${lr()?`  // Smooth B: the shadowed level and the lit level blend across the shadow's filtered edge.
  return mix(uLevels[max(int(uShadowLevel), int(bShFloor))], best, sh);`:"  return best;"}
}
${lr()?`// Smooth B: one hardware-compared, bilinear-filtered tap of the sun shadow (2 × 2 texels).
#if defined(USE_SHADOWMAP) && NUM_DIR_LIGHT_SHADOWS > 0
float bShadow1(sampler2DShadow m, float intensity, float bias, vec4 c) {
  c.xyz /= c.w;
  c.z += bias;
  bool inF = c.x >= 0.0 && c.x <= 1.0 && c.y >= 0.0 && c.y <= 1.0 && c.z <= 1.0;
  return inF ? mix(1.0, texture(m, c.xyz), intensity) : 1.0;
}
#endif`:""}
`,Bl={uWalkerGain:{value:1},uWalkerTint:{value:new H(1,1,1)}},ma={uLodEye:{value:new H},uMeshMetres:{value:0},uOverlap:{value:0}},ga=n=>{const e=Number(n.toPrecision(9));return Number.isInteger(e)?e.toFixed(1):String(e)},ea=n=>n.map(e=>`vec3(${e.map(ga).join(", ")})`).join(", ");function TM(n){const e=n.crownPos,t=n.crownIdx,i=e.length/3,s=t.length/3,r=s/n.lobeCentres.length,a=[],l=[],o=[],c=[];for(let v=0;v<i;v++){const S=[e[v*3],e[v*3+1],e[v*3+2]],g=Math.hypot(S[0],S[1],S[2])||1;a.push(S),l.push(S.map(b=>b/g))}const u=(v,S)=>[v[0]-S[0],v[1]-S[1],v[2]-S[2]],f=(v,S)=>[v[1]*S[2]-v[2]*S[1],v[2]*S[0]-v[0]*S[2],v[0]*S[1]-v[1]*S[0]],h=(v,S)=>v[0]*S[0]+v[1]*S[1]+v[2]*S[2],p=(v,S,g,b)=>{let E=f(u(S,v),u(g,v));const T=Math.hypot(E[0],E[1],E[2])||1;return E=E.map(P=>P/T),h(E,u(v,b))<0&&(E=E.map(P=>-P)),[E[0],E[1],E[2],h(E,v)]};for(let v=0;v<s;v++){const S=t[v*3],g=t[v*3+1],b=t[v*3+2];o.push([S,g,b]),c.push(p(a[S],a[g],a[b],n.lobeCentres[Math.floor(v/r)]))}const x=n.trunkSegments,_=[],d=[],m=[];for(let v=0;v<2*(x+1);v++)_.push([n.trunkPos[v*3],n.trunkPos[v*3+1],n.trunkPos[v*3+2]]),v<=x&&d.push([n.trunkNrm[v*3],n.trunkNrm[v*3+1],n.trunkNrm[v*3+2]]);for(let v=0;v<x;v++)m.push(p(_[x+1+v],_[x+2+v],_[v],[0,.5,0]));const y=n.lobeCentres.map((v,S)=>{let g=0;for(let b=S*r;b<(S+1)*r;b++)for(const E of o[b])g=Math.max(g,Math.hypot(a[E][0]-v[0],a[E][1]-v[1],a[E][2]-v[2]));return[v[0],v[1],v[2],g*1.001]}),w=`
uniform vec3 uTrunkCol; uniform mat4 projectionMatrix;
varying vec3 vRayP; flat varying vec4 vIBase; flat varying vec4 vIShape; flat varying vec3 vICol;
#if defined(USE_SHADOWMAP) && NUM_DIR_LIGHT_SHADOWS > 0
uniform mat4 directionalShadowMatrix[NUM_DIR_LIGHT_SHADOWS];
vec4 bHitSC[NUM_DIR_LIGHT_SHADOWS];
#endif
const vec3 B_LV[${i}] = vec3[${i}](${ea(a)});
const vec3 B_LN[${i}] = vec3[${i}](${ea(l)});
const ivec3 B_LF[${s}] = ivec3[${s}](${o.map(v=>`ivec3(${v.join(", ")})`).join(", ")});
const vec4 B_LP[${s}] = vec4[${s}](${c.map(v=>`vec4(${v.map(ga).join(", ")})`).join(", ")});
const vec3 B_TV[${_.length}] = vec3[${_.length}](${ea(_)});
const vec3 B_TN[${d.length}] = vec3[${d.length}](${ea(d)});
const vec4 B_TP[${x}] = vec4[${x}](${m.map(v=>`vec4(${v.map(ga).join(", ")})`).join(", ")});
const vec4 B_LS[${y.length}] = vec4[${y.length}](${y.map(v=>`vec4(${v.map(ga).join(", ")})`).join(", ")});
vec3 bHitW; vec3 bHitN; vec3 bHitV; float bHitFog; vec3 bHitCP;
vec3 bRotY(vec3 v, float a) { float c = cos(a), s = sin(a); return vec3(c * v.x + s * v.z, v.y, -s * v.x + c * v.z); }
vec3 bBary(vec3 p, vec3 a, vec3 b, vec3 c) {
  vec3 v0 = b - a, v1 = c - a, v2 = p - a;
  float d00 = dot(v0, v0), d01 = dot(v0, v1), d11 = dot(v1, v1), d20 = dot(v2, v0), d21 = dot(v2, v1);
  float den = d00 * d11 - d01 * d01;
  float v = (d11 * d20 - d01 * d21) / den, w = (d00 * d21 - d01 * d20) / den;
  return vec3(1.0 - v - w, v, w);
}
#define vBWorld bHitW
#define vNormal bHitN
#define vViewPosition bHitV
#define vFogDepth bHitFog
#define vCrownP bHitCP
#define vDirectionalShadowCoord bHitSC
`,M=`
  float bIsCrown = 1.0;
  {
    vec3 O = vRayP;
    vec3 Dw = isOrthographic ? -vec3(viewMatrix[0][2], viewMatrix[1][2], viewMatrix[2][2]) : normalize(vRayP - cameraPosition);
    float th = vIBase.w, tl = vIShape.w;
    vec3 base = vIBase.xyz, C = base + vec3(0.0, vIShape.z, 0.0), sc = vec3(vIShape.x, vIShape.y, vIShape.x);
    vec3 oc = bRotY(O - C, -th) / sc, uc = bRotY(Dw, -th) / sc;
    float tBest = 1e30; int kind = -1, face = -1;
    for (int L = 0; L < ${n.lobeCentres.length}; L++) {
${jt()?`      // Smooth B: a ray that misses the lobe's bounding sphere misses the lobe (the same pixels, fewer plane tests).
      { vec3 oq = oc - B_LS[L].xyz; float bq = dot(oq, uc), aq = dot(uc, uc), cq = dot(oq, oq) - B_LS[L].w * B_LS[L].w; if (bq * bq - aq * cq < 0.0) continue; }`:""}
      float tin = -1e30, tout = 1e30; int fe = -1;
      for (int i = 0; i < ${r}; i++) {
        vec4 P = B_LP[L * ${r} + i];
        float den = dot(P.xyz, uc), num = P.w - dot(P.xyz, oc);
        if (den < 0.0) { float t = num / den; if (t > tin) { tin = t; fe = L * ${r} + i; } }
        else if (den > 0.0) tout = min(tout, num / den);
        else if (num < 0.0) tout = -1e30;
      }
      if (fe >= 0 && tin <= tout && tin > 0.0 && tin < tBest) { tBest = tin; kind = 0; face = fe; }
    }
    vec3 tsc = vec3(1.0, tl, 1.0);
    vec3 ot = bRotY(O - base, -th) / tsc, ut = bRotY(Dw, -th) / tsc;
    {
      float tin = -1e30, tout = 1e30; int fe = -1;
      for (int i = 0; i < ${x}; i++) {
        vec4 P = B_TP[i];
        float den = dot(P.xyz, ut), num = P.w - dot(P.xyz, ot);
        if (den < 0.0) { float t = num / den; if (t > tin) { tin = t; fe = i; } }
        else if (den > 0.0) tout = min(tout, num / den);
        else if (num < 0.0) tout = -1e30;
      }
      float y = ot.y + tin * ut.y;
      if (fe >= 0 && tin <= tout && tin > 0.0 && tin < tBest && y >= 0.0 && y <= 1.0) { tBest = tin; kind = 1; face = fe; }
    }
    if (kind < 0) discard;
    vec3 hw = O + Dw * tBest;
    vec3 w, n0, n1, n2;
    if (kind == 0) {
      vec3 q = oc + uc * tBest;
      ivec3 F = B_LF[face];
      w = bBary(q, B_LV[F.x], B_LV[F.y], B_LV[F.z]);
      n0 = normalize(bRotY(B_LN[F.x] / sc, th)); n1 = normalize(bRotY(B_LN[F.y] / sc, th)); n2 = normalize(bRotY(B_LN[F.z] / sc, th));
      bHitCP = q;
    } else {
      vec3 q = ot + ut * tBest;
      int i = face;
      // The side quad's two triangles, as CylinderGeometry winds them: (top i, bottom i, top i+1), (bottom i, bottom i+1, top i+1).
      vec3 tA = B_TV[i], bA = B_TV[${x+1} + i], tB = B_TV[i + 1], bB = B_TV[${x+2} + i];
      vec3 m0 = normalize(bRotY(vec3(B_TN[i].x, B_TN[i].y / tl, B_TN[i].z), th));
      vec3 m1 = normalize(bRotY(vec3(B_TN[i + 1].x, B_TN[i + 1].y / tl, B_TN[i + 1].z), th));
      vec3 w1 = bBary(q, tA, bA, tB), w2 = bBary(q, bA, bB, tB);
      if (min(w1.x, min(w1.y, w1.z)) >= min(w2.x, min(w2.y, w2.z))) { w = w1; n0 = m0; n1 = m0; n2 = m1; }
      else { w = w2; n0 = m0; n1 = m1; n2 = m1; }
      bHitCP = vec3(0.0);
      bIsCrown = 0.0;
    }
    vec3 swn = w.x * n0 + w.y * n1 + w.z * n2;
    bHitN = mat3(viewMatrix) * swn;
    vec4 vp = viewMatrix * vec4(hw, 1.0);
    bHitV = -vp.xyz;
    bHitFog = -vp.z;
    bHitW = hw;
#if defined(USE_SHADOWMAP) && NUM_DIR_LIGHT_SHADOWS > 0
    bHitSC[0] = directionalShadowMatrix[0] * vec4(hw + swn * directionalLightShadows[0].shadowNormalBias, 1.0);
#if NUM_DIR_LIGHT_SHADOWS > 1
    bHitSC[1] = directionalShadowMatrix[1] * vec4(hw + swn * directionalLightShadows[1].shadowNormalBias, 1.0);
#endif
#endif
    vec4 cp = projectionMatrix * vp;
    gl_FragDepth = 0.5 * cp.z / cp.w + 0.5;
  }
`;return{decl:w,cast:M}}const Xu=n=>!!n.noCloud&&!ot.objectCloudShadows;function AM(n=ot.quantileSeed,e=ot.quantileSamples){const t=mn.uCloudTex.value,i=t.image.data,s=t.image.width;if((s&s-1)!==0)throw new Error(`cloudTable: the noise must be a power of two texels (${s})`);const r=s-1,[a,l]=ot.tileMetres,[o,c]=ot.weights,[u,f]=ot.offsetMetres,h=(g,b)=>b?h(b,g%b):g,p=a*l/h(Math.round(a),Math.round(l)),x=Math.max(1,Math.round(Math.sqrt(e))),_=ot.quantileBins,d=new Float64Array(_+1);let m=n>>>0;const y=()=>(m=Math.imul(m^m>>>15,739982445)+2654435769>>>0)/4294967296,w=ot.secondDrift,[M,v]=ot.secondOffset;for(let g=0;g<x;g++)for(let b=0;b<x;b++){const E=(b+y())/x*p,T=(g+y())/x*p;let P=(E+u)/a*s-.5,L=(T+f)/a*s-.5,D=Math.floor(P),C=Math.floor(L),N=P-D,k=L-C,U=(C&r)*s,Y=(C+1&r)*s,O=D&r,V=D+1&r;const q=(i[U+O]/255*(1-N)+i[U+V]/255*N)*(1-k)+(i[Y+O]/255*(1-N)+i[Y+V]/255*N)*k;P=((E+u*w)/l+M)*s-.5,L=((T+f*w)/l+v)*s-.5,D=Math.floor(P),C=Math.floor(L),N=P-D,k=L-C,U=(C&r)*s,Y=(C+1&r)*s,O=D&r,V=D+1&r;const ne=(i[U+O]/255*(1-N)+i[U+V]/255*N)*(1-k)+(i[Y+O]/255*(1-N)+i[Y+V]/255*N)*k,fe=q*o+ne*c;d[Math.min(_,Math.max(0,Math.floor(fe*_)))]++}const S=new Float64Array(_+2);for(let g=_;g>=0;g--)S[g]=S[g+1]+d[g]/(x*x);return{threshold(g){if(!(g>0))return Number.POSITIVE_INFINITY;if(g>=S[0])return 0;let b=0;for(;b<_&&S[b+1]>=g;)b++;const E=(S[b]-g)/Math.max(1e-12,S[b]-S[b+1]);return(b+E)/_},share(g){const b=Math.min(_,Math.max(0,g*_)),E=Math.floor(b),T=b-E;return S[E]-(S[E]-S[Math.min(_+1,E+1)])*T}}}function RM(n,e,t={on:!1,threshold:0}){const i=Number.isNaN(n);return t.on=ot.on&&(i||n>0),t.threshold=i||!t.on?ot.fallbackThreshold:e.threshold(n),t}function Yn(n,e,t={}){const i=n.onBeforeCompile,s=n.customProgramCacheKey.bind(n);return n.onBeforeCompile=(r,a)=>{i?.call(n,r,a),Object.assign(r.uniforms,mn,t,{uEdgeClass:{value:e.edgeClass},uMinLevel:{value:e.minLevel??0},uShadowFloorLvl:{value:e.shadowFloor??0}}),e.walker&&Object.assign(r.uniforms,Bl);let l=r.vertexShader,o=r.fragmentShader;e.walker&&(o=o.replace("#include <common>",`#include <common>
uniform float uWalkerGain; uniform vec3 uWalkerTint;`)),e.worldCells&&(o=o.replace("#include <common>",`#include <common>
uniform sampler2D uFam; uniform vec3 uFamFrame; uniform float uFamN;`).replace("#include <color_fragment>",`#include <color_fragment>
{
  vec2 cell = (vBWorld.xz - uFamFrame.xy) / uFamFrame.z * uFamN;
  // In the map view the camera moves in whole pixels, so the cells stay crisp at every zoom (as the game's map).
  float lod = isOrthographic ? 0.0 : smoothstep(${qe(Oe.farCellsLod[0])}, ${qe(Oe.farCellsLod[1])}, max(fwidth(cell).x, fwidth(cell).y));
  vec3 c = pow(${jt()?"/* smooth B: filtered between cells, mipmapped far off */ texture2D(uFam, cell / uFamN).rgb":"texelFetch(uFam, clamp(ivec2(floor(cell)), ivec2(0), ivec2(int(uFamN) - 1)), 0).rgb"}, vec3(2.2));
  diffuseColor.rgb = mix(c, diffuseColor.rgb, lod);
}`)),l=l.replace("#include <common>",`#include <common>
varying vec3 vBWorld;`).replace("#include <project_vertex>",`#include <project_vertex>
{ vec4 bw = vec4(transformed, 1.0);
#ifdef USE_INSTANCING
  bw = instanceMatrix * bw;
#endif
  vBWorld = (modelMatrix * bw).xyz; }`);const c=zn("shadowCoords");if(c){l=l.replace("#include <shadowmap_pars_vertex>",`#if NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || defined(USE_BATCHING)
#error opt.shadowCoords handles directional shadows only (no spot or point lights with shadows or maps, no sun cascades, no BatchedMesh)
#endif`).replace("#include <shadowmap_vertex>","");const f="varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];";if(!tt.shadowmap_pars_fragment.includes(f))throw new Error("shadowCoords: three's shadowmap_pars_fragment changed");o=o.replace("#include <shadowmap_pars_fragment>",tt.shadowmap_pars_fragment.replace(f,e.impostor?"":`vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];`))}e.actor&&!c&&(l=l.replace("#include <shadowmap_vertex>",`#include <shadowmap_vertex>
#if defined(USE_SHADOWMAP) && NUM_DIR_LIGHT_SHADOWS > 0
  vDirectionalShadowCoord[0] = directionalShadowMatrix[0] * (worldPosition + vec4(shadowWorldNormal * directionalLightShadows[0].shadowNormalBias * ${qe(Oe.actorShadowBias)}, 0.0));
#endif
#if defined(USE_SHADOWMAP) && NUM_DIR_LIGHT_SHADOWS > 1
  vDirectionalShadowCoord[1] = directionalShadowMatrix[1] * (worldPosition + vec4(shadowWorldNormal * directionalLightShadows[1].shadowNormalBias * ${qe(Oe.actorShadowBias)}, 0.0));
#endif`)),e.roadNight&&(o=o.replace("#include <common>",`#include <common>
uniform vec3 uRoadNight;`)),e.cloud&&(o=o.replace("#include <common>",`#include <common>
uniform vec3 uCloudShade; uniform vec3 uCloudLight;`),o=o.replace("#include <color_fragment>",`#include <color_fragment>
{
  float cd = bCloud(vBWorld.xz);
  if (cd <= 0.0) discard;
  // The sun side of a cloud (where the pattern thins towards the sun) is light, the far side shade, in dithered steps.
  vec2 sd = normalize(uSunW.xz + vec2(1e-4, 0.0));
  float toward = bCloud(vBWorld.xz + sd * ${qe(ot.sunOffsetMetres)});
  float lit = clamp(0.55 + (cd - toward) * 7.0, 0.0, 1.0);
  lit = min(lit, 0.35 + cd * 12.0);
  diffuseColor.rgb = mix(uCloudShade, uCloudLight, bQuant(lit, ${qe(ot.steps-1)}, ${qe(ot.dither)})) * mix(1.0, ${qe(ot.nightDim)}, uBNight);
}`)),e.grain&&(o=o.replace("#include <color_fragment>",`#include <color_fragment>
{
  vec2 gc = vBWorld.xz / ${qe(Oe.grainMetres)};
  float lod = 1.0 - smoothstep(${jt()?`${qe(_n().grainLod[0])}, ${qe(_n().grainLod[1])}`:`${qe(Oe.grainLod[0])}, ${qe(Oe.grainLod[1])}`}, max(fwidth(gc).x, fwidth(gc).y));
${jt()&&_n().grainSmooth?`  // Smooth B: the same cells' values, blended between cell centres (value noise; no hard cell edges); nothing to do once faded.
  if (lod > 0.0) {
  vec2 g0 = floor(gc - 0.5), gt = gc - 0.5 - g0;
  gt = gt * gt * (3.0 - 2.0 * gt);
  float h00 = fract(sin(dot(g0, vec2(12.9898, 78.233))) * 43758.5453), h10 = fract(sin(dot(g0 + vec2(1.0, 0.0), vec2(12.9898, 78.233))) * 43758.5453);
  float h01 = fract(sin(dot(g0 + vec2(0.0, 1.0), vec2(12.9898, 78.233))) * 43758.5453), h11 = fract(sin(dot(g0 + vec2(1.0), vec2(12.9898, 78.233))) * 43758.5453);
  float h = mix(mix(h00, h10, gt.x), mix(h01, h11, gt.x), gt.y) - 0.5;
  diffuseColor.rgb *= 1.0 + h * ${qe(Oe.grainAmp*_n().grainSmoothGain)} * 2.0 * lod;
  }`:`  float h = fract(sin(dot(floor(gc), vec2(12.9898, 78.233))) * 43758.5453) - 0.5;
  diffuseColor.rgb *= 1.0 + h * ${qe(Oe.grainAmp)} * 2.0 * lod;`}
}`)),e.water&&(o=o.replace("#include <common>",`#include <common>
uniform sampler2D uNoise; uniform vec2 uWaveTexel; uniform vec2 uSpeedA; uniform vec2 uSpeedB; uniform float uScaleB;
uniform float uMid; uniform float uHigh; uniform float uSparkleAbove; uniform float uSparkleChance; uniform float uSparkleHz; uniform float uSparkleMetres;
uniform vec3 uTones[9]; uniform vec3 uSparkle; uniform sampler2D uFam; uniform vec3 uFamFrame; uniform float uFamDither;`),o=o.replace("#include <color_fragment>",`#include <color_fragment>
{
  vec2 wp = vBWorld.xz;
  float ns = ${qe(nn.noiseSize)};
  float a = texture2D(uNoise, (wp + uTime * uSpeedA) / uWaveTexel / ns).r;
  float b = texture2D(uNoise, ((wp + uTime * uSpeedB) / uWaveTexel * uScaleB) / ns).r;
  float s = a + b;
  // The family (open sea, harbour, shallows) from the 10 m world, its edges dithered; the tone from the waves.
  float fam = texture2D(uFam, (wp - uFamFrame.xy) / uFamFrame.z).a;
${jt()?`  // Smooth B: the tones' thresholds softened over a pixel or so, the families blended by the dither's average,
  // and each sparkle a round dot.
  float we = max(fwidth(s), 1e-4) * ${qe(_n().waterEdgePx)};
  float t1 = smoothstep(uMid - we, uMid + we, s), t2 = smoothstep(uHigh - we, uHigh + we, s);
  float fm = bQuant(fam, 2.0, uFamDither) * 2.0;
  int f0 = int(min(floor(fm), 1.0));
  float ft = fm - float(f0);
  vec3 tA = mix(mix(uTones[f0 * 3], uTones[f0 * 3 + 1], t1), uTones[f0 * 3 + 2], t2);
  vec3 tB = mix(mix(uTones[f0 * 3 + 3], uTones[f0 * 3 + 4], t1), uTones[f0 * 3 + 5], t2);
  vec3 tone = mix(tA, tB, ft);
  vec2 sq = wp / uSparkleMetres;
  vec2 cell = floor(sq);
  float tick = floor(uTime * uSparkleHz);
  float h = fract(sin(dot(vec3(cell, tick), vec3(12.9898, 78.233, 37.719))) * 43758.5453);
  float sr = length(fract(sq) - 0.5), saa = max(fwidth(sq.x), 1e-4);
  float spk = 1.0 - smoothstep(${qe(_n().sparkleDotShare*.5)} - saa, ${qe(_n().sparkleDotShare*.5)} + saa, sr);
  tone = mix(tone, uSparkle, spk * step(uSparkleAbove, s) * step(h, uSparkleChance));`:`  int fi = int(bQuant(fam, 2.0, uFamDither) * 2.0 + 0.5);
  int ti = s > uHigh ? 2 : (s > uMid ? 1 : 0);
  vec3 tone = uTones[fi * 3 + ti];
  vec2 cell = floor(wp / uSparkleMetres);
  float tick = floor(uTime * uSparkleHz);
  float h = fract(sin(dot(vec3(cell, tick), vec3(12.9898, 78.233, 37.719))) * 43758.5453);
  if (s > uSparkleAbove && h < uSparkleChance) tone = uSparkle;`}
  diffuseColor.rgb = tone;
}`));const u=e.impostor?"if (bIsCrown > 0.5)":"";if(e.crown&&(l=l.replace("#include <common>",`#include <common>
varying vec3 vCrownP;`).replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
objectNormal = normalize(position);
vCrownP = position;`),o=o.replace("#include <common>",`#include <common>
varying vec3 vCrownP; uniform float uClumps; uniform float uClumpAmp;`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
${u} {
  // The crown's rim breaks into leaves.
  float rim = 1.0 - abs(dot(normal, normalize(vViewPosition)));
  float leaf = fract(sin(dot(floor(vCrownP * ${qe(jt()?_n().crownLeafPerUnit:Oe.crownLeafPerUnit)}), vec3(39.346, 11.135, 83.155))) * 43758.5453);
  if (rim + (leaf - 0.5) * ${qe(jt()?_n().crownCutNoise:Oe.crownCutNoise)} > ${qe(Oe.crownCut)}) discard;
}`)),o=o.replace("#include <common>",`#include <common>
`+EM()),o=o.replace("#include <lights_fragment_begin>",`
float bNdl = 0.0, bSh = 1.0;
bMinLvl = uMinLevel; bShFloor = uShadowFloorLvl;
${e.impostor?"if (bIsCrown < 0.5) { bMinLvl = 0.0; bShFloor = 0.0; }":""}
#if NUM_DIR_LIGHTS > 0
  bNdl = max(dot(normal, directionalLights[0].direction), 0.0);
${c&&!e.impostor?`  // S1 shadowCoords: three's shadowmap_vertex, per pixel. World normal = transpose(view) × the interpolated vNormal
  // (vNormal is normalize(transformedNormal) at each vertex, so this is three's shadowWorldNormal, interpolated;
  // every B geometry has a normal attribute, crowns included, so three's HAS_NORMAL path is the one matched).
  #if defined(USE_SHADOWMAP) && NUM_DIR_LIGHT_SHADOWS > 0
  if (receiveShadow) {
    vec3 bSwn = (vec4(vNormal, 0.0) * viewMatrix).xyz;
    vDirectionalShadowCoord[0] = directionalShadowMatrix[0] * vec4(vBWorld + bSwn * directionalLightShadows[0].shadowNormalBias${e.actor?" * "+qe(Oe.actorShadowBias):""}, 1.0);
  #if NUM_DIR_LIGHT_SHADOWS > 1
    vDirectionalShadowCoord[1] = directionalShadowMatrix[1] * vec4(vBWorld + bSwn * directionalLightShadows[1].shadowNormalBias${e.actor?" * "+qe(Oe.actorShadowBias):""}, 1.0);
  #endif
  }
  #endif`:""}
  #if defined(USE_SHADOWMAP) && NUM_DIR_LIGHT_SHADOWS > 0
    bSh = receiveShadow ? ${lr()?"bShadow1(directionalShadowMap[0], directionalLightShadows[0].shadowIntensity, directionalLightShadows[0].shadowBias, vDirectionalShadowCoord[0])":"getShadow(directionalShadowMap[0], directionalLightShadows[0].shadowMapSize, directionalLightShadows[0].shadowIntensity, directionalLightShadows[0].shadowBias, directionalLightShadows[0].shadowRadius, vDirectionalShadowCoord[0])"} : 1.0;
  #endif
  // S1: the moving things' shadow map beside the cached one (either shades). Shadows fall only inside the moving
  // map's box (the view's own box, as before), never in the cached map's margin, so the edge of the shadowed area
  // moves smoothly with the view and never jumps when the cache redraws.
  #if defined(USE_SHADOWMAP) && NUM_DIR_LIGHT_SHADOWS > 1
    if (receiveShadow) {
      vec3 bDc = vDirectionalShadowCoord[1].xyz / vDirectionalShadowCoord[1].w;
      bool bInD = bDc.x >= 0.0 && bDc.x <= 1.0 && bDc.y >= 0.0 && bDc.y <= 1.0 && bDc.z <= 1.0;
      bSh = bInD ? min(bSh, ${lr()?"bShadow1(directionalShadowMap[1], directionalLightShadows[1].shadowIntensity, directionalLightShadows[1].shadowBias, vDirectionalShadowCoord[1])":"getShadow(directionalShadowMap[1], directionalLightShadows[1].shadowMapSize, directionalLightShadows[1].shadowIntensity, directionalLightShadows[1].shadowBias, directionalLightShadows[1].shadowRadius, vDirectionalShadowCoord[1])"}) : 1.0;
    }
  #endif
#endif
${e.crown?u+" bNdl += (fract(sin(dot(floor(vCrownP * uClumps), vec3(12.9898, 78.233, 37.719))) * 43758.5453) - 0.5) * uClumpAmp;":""}
// After dusk the sun (moon) shadow fades out; by day clouds shade the ground under them.
bSh = mix(1.0, bSh, uShadowMix);
if (uCloudOn > 0.5 && uSunW.y > 0.05 && ${ot.shadows&&!Xu(e)?"true":"false"}) {
  float cs = bCloud(vBWorld.xz + uSunW.xz / uSunW.y * (${qe(ot.heightMetres)} - vBWorld.y));
${jt()?"  bSh = min(bSh, mix(1.0, 1.0 - uShadowMix, smoothstep(0.0, max(fwidth(cs), 1e-4), cs)));":"  if (cs > 0.0) bSh = min(bSh, 1.0 - uShadowMix);"}
}
${e.cloud?"bNdl = 1.0; bSh = 1.0;":""}
vec3 bLight = uAmb + uSun * bandLevel(bNdl, bSh);
${e.crown?`${u} bLight += vec3(${rn.crownFill.map(qe).join(", ")}) * uBNight;`:""}
${e.roadNight?`{
  vec2 rq = (fract(vBWorld.xz / ${qe(rn.roadPoolSpacingMetres)} + 0.5) - 0.5) * ${qe(rn.roadPoolSpacingMetres)};
  float pl = pow(max(0.0, 1.0 - length(rq) / ${qe(rn.roadPoolMetres)}), 2.0);
  float rm = 1.0;
  ${e.roadMask?`vec3 dc = pow(max(diffuseColor.rgb, vec3(0.0)), vec3(1.0 / 2.2)); rm = 1.0 - step(${qe(rn.groundGreyMax)}, max(dc.r, max(dc.g, dc.b)) - min(dc.r, min(dc.g, dc.b)));`:""}
  bLight += rm * uRoadNight * uBNight * (${qe(rn.roadGlow)} + ${qe(rn.roadPool)} * bQuant(pl, ${qe(Oe.poolRings)}, 1.0));
}`:""}
`),o=o.replace("#include <lights_fragment_maps>","").replace("#include <lights_fragment_end>",""),o=o.replace("vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;",`vec3 bAlb = pow(max(diffuseColor.rgb, vec3(0.0)), vec3(1.0 / 2.2));
`+(e.walker?`bAlb = min(bAlb * uWalkerGain, vec3(1.0));
`:"")+"vec3 outgoingLight = pow(pow(bAlb * bLight, vec3(2.2)) + totalEmissiveRadiance, vec3(1.0 / 2.2));"+(e.walker?`
outgoingLight *= uWalkerTint;`:"")),o=o.replace("#include <fog_fragment>",`
#ifdef USE_FOG
  float fogFactor = bQuant(smoothstep(fogNear, fogFar, vFogDepth), uHazeSteps - 1.0, uHazeDither);
  gl_FragColor.rgb = mix(gl_FragColor.rgb, pow(fogColor, vec3(1.0 / 2.2)), fogFactor);
#endif
`),o=o.replace("#include <dithering_fragment>",`#include <dithering_fragment>
pc_fragN = vec4(normal * 0.5 + 0.5, uEdgeClass);`),e.impostor){const f=TM(e.impostor);l=l.replace("#include <common>",`#include <common>
attribute vec4 iBase; attribute vec4 iShape; attribute vec4 iSphere; attribute vec3 iColour;
uniform vec3 uLodEye; uniform float uMeshMetres; uniform float uOverlap;
varying vec3 vRayP; flat varying vec4 vIBase; flat varying vec4 vIShape; flat varying vec3 vICol;`).replace("#include <begin_vertex>",`vec3 transformed;
{
  // A quad facing the eye in front of the tree's bounding sphere (it covers the sphere's whole outline); trees the
  // CPU draws as meshes (nearer than uMeshMetres − uOverlap from uLodEye) collapse to nothing.
  vec3 C = iBase.xyz + vec3(0.0, iSphere.x, 0.0);
  float r = iSphere.y;
  if (!isOrthographic && distance(uLodEye, C) <= uMeshMetres - uOverlap) r = 0.0;
  vec3 ax = vec3(viewMatrix[0][0], viewMatrix[1][0], viewMatrix[2][0]), ay = vec3(viewMatrix[0][1], viewMatrix[1][1], viewMatrix[2][1]);
  vec3 fw = -vec3(viewMatrix[0][2], viewMatrix[1][2], viewMatrix[2][2]);
  if (!isOrthographic) { fw = normalize(C - cameraPosition); ax = normalize(cross(fw, ay)); ay = cross(ax, fw); }
  transformed = C - fw * r + (ax * position.x + ay * position.y) * r;
  vRayP = transformed; vIBase = iBase; vIShape = iShape; vICol = iColour;
}`),o=o.replace("#include <common>",`#include <common>
`+f.decl.split("#define")[0]),o=o.replace("void main() {","#define"+f.decl.split("#define").slice(1).join("#define")+`
void main() {
`+f.cast),o=o.replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb = bIsCrown > 0.5 ? vICol : uTrunkCol;`)}"uWarp"in r.uniforms||Object.assign(r.uniforms,cs),r.vertexShader=Ua(l),r.fragmentShader=o},e.masonry&&(n.defines={...n.defines??{},PIXEL_MASONRY:""}),n.customProgramCacheKey=()=>`pixel-${zn("shadowCoords")?"s":""}${e.water?1:0}${e.crown?1:0}${e.grain?1:0}${e.masonry?1:0}${e.worldCells?1:0}${e.roadNight?1:0}${e.roadMask?1:0}${e.actor?1:0}${e.walker?"w":""}${e.cloud?1:0}${e.impostor?"i":""}${Xu(e)?"n":""}-`+s(),n}function CM(){const n=nn.noiseSize,e=[4,8,16],t=[1,.5,.25];let i=nn.noiseSeed>>>0;const s=()=>(i=Math.imul(i^i>>>15,739982445)+2654435769>>>0)/4294967296,r=new Float32Array(n*n);e.forEach((u,f)=>{const h=n/u,p=new Float32Array(h*h).map(()=>s()),x=t[f];for(let _=0;_<n;_++)for(let d=0;d<n;d++){const m=d/u,y=_/u,w=Math.floor(m),M=Math.floor(y),v=m-w,S=y-M,g=v*v*(3-2*v),b=S*S*(3-2*S),E=(P,L)=>p[(L+h)%h*h+(P+h)%h],T=(E(w,M)*(1-g)+E(w+1,M)*g)*(1-b)+(E(w,M+1)*(1-g)+E(w+1,M+1)*g)*b;r[_*n+d]+=T*x}});let a=1/0,l=-1/0;for(const u of r)a=Math.min(a,u),l=Math.max(l,u);const o=new Uint8Array(n*n);for(let u=0;u<n*n;u++)o[u]=Math.round((r[u]-a)/(l-a||1)*255);const c=new ls(o,n,n,vr,an);return c.wrapS=c.wrapT=hr,c.magFilter=jt()?Ft:_t,c.minFilter=jt()?Jn:_t,c.generateMipmaps=jt(),c.needsUpdate=!0,c}function PM(n){const e=new ls(n.data,n.n,n.n,Rn,an);return e.magFilter=e.minFilter=Ft,jt()&&(e.minFilter=Jn,e.generateMipmaps=!0),e.flipY=!1,e.needsUpdate=!0,e}const Fo=(()=>{const n=new It;return n.setAttribute("position",new Tt([-1,-1,0,3,-1,0,-1,3,0],3)),n})(),Lf="void main() { gl_Position = vec4(position.xy, 0.0, 1.0); }";function LM(){const n=Pt.outline;return new cn({uniforms:{tCol:{value:null},tNrm:{value:null},tDepth:{value:null},uNF:{value:new ze(1,1e3)},uOrtho:{value:0},uSize:{value:new ze(1,1)},uOrthoDepth:{value:Pt.orthoDepthMetres},uOrthoTexels:{value:Pt.orthoDepthTexels},uShare:{value:Pt.perspShare},uSoftScale:{value:Pt.softDepthScale},uMinFacing:{value:Pt.minFacing},uTexel:{value:1},uPixelAngle:{value:.001},uTint:{value:new H(...Pt.outlineTint)},uLift:{value:Pt.creaseLift},uConcave:{value:Pt.concaveDark},uCreaseMin:{value:Pt.creaseMin},uFade:{value:new ze(...Pt.fadeMetres)},uDebug:{value:0},uSoftOutline:{value:1},uC:{value:1},uShiftC:{value:new ze},uNewStyle:{value:0},uThin:{value:0},uStrength:{value:n.strength},uShade:{value:n.shade},uSat:{value:n.saturation},uConcaveOn:{value:1},uCreaseShare:{value:1},uOrthoFade:{value:new ze(...n.orthoFadeTexelMetres)},uFadeTexel:{value:1},uAlphaLuma:{value:0},uSharpen:{value:0},uOuter:{value:0}},vertexShader:Lf,fragmentShader:`
uniform sampler2D tCol; uniform sampler2D tNrm; uniform sampler2D tDepth;
uniform vec2 uNF; uniform float uOrtho; uniform vec2 uSize;
uniform float uOrthoDepth; uniform float uOrthoTexels; uniform float uShare; uniform float uSoftScale; uniform float uMinFacing; uniform float uTexel; uniform float uPixelAngle;
uniform vec3 uTint; uniform float uLift; uniform float uConcave; uniform float uCreaseMin; uniform vec2 uFade; uniform float uDebug; uniform float uSoftOutline;
uniform float uC; uniform vec2 uShiftC; uniform float uNewStyle; uniform float uThin; uniform float uStrength; uniform float uShade; uniform float uSat;
uniform float uConcaveOn; uniform float uCreaseShare; uniform vec2 uOrthoFade;
// The map's outline fade counts in pixel B's buffer texels of this zoom (smooth B's pixels are finer); the luma in alpha for FXAA (smooth B).
uniform float uFadeTexel; uniform float uAlphaLuma;
// Smooth B: the sharpen amount (0 = off) and the second outline pixel's share (0 = one pixel).
uniform float uSharpen; uniform float uOuter;
float lin(ivec2 p) {
  float d = texelFetch(tDepth, p, 0).r;
  return uOrtho > 0.5 ? uNF.x + d * (uNF.y - uNF.x) : uNF.x * uNF.y / (uNF.y - d * (uNF.y - uNF.x));
}
void main() {
  // The buffer pixel under this canvas pixel, and where in it this canvas pixel sits (−0.5 … 0.5 each way).
  vec2 qc = floor(gl_FragCoord.xy) - uShiftC;
  vec2 pb = floor(qc / uC);
  vec2 sub = (qc - pb * uC + 0.5) / uC - 0.5;
  bool thin = uThin > 0.5 && uC > 1.5;
  ivec2 hi = ivec2(uSize) - 1;
  ivec2 p = clamp(ivec2(pb), ivec2(0), hi);
  vec4 c = texelFetch(tCol, p, 0);
  vec4 nc = texelFetch(tNrm, p, 0);
  float cls = nc.a;
  vec3 n = normalize(nc.rgb * 2.0 - 1.0);
  float d = lin(p);
  // A buffer pixel's size at this depth, metres; the threshold for a depth step that is not this face going on.
  float px = uOrtho > 0.5 ? uTexel : d * uPixelAngle;
  float thr = (uOrtho > 0.5 ? max(uOrthoDepth, px * uOrthoTexels) : d * uShare) * (cls < 0.9 ? uSoftScale : 1.0);
  float outline = 0.0, convex = 0.0, concave = 0.0;
  vec3 cSum = vec3(0.0), cMn = c.rgb, cMx = c.rgb;
  ivec2 offs[4] = ivec2[4](ivec2(1, 0), ivec2(-1, 0), ivec2(0, 1), ivec2(0, -1));
${Xe.look.skyEarlyOut?"  bool takesNoEdge = cls < 0.5;  // sky and ground/roads: neither an outline nor a crease (GPU_CONFIG.look.skyEarlyOut)":""}
  for (int i = 0; i < 4; i++) {
    ivec2 q = clamp(p + offs[i], ivec2(0), hi);
    if (uSharpen > 0.0) { vec3 cn = texelFetch(tCol, q, 0).rgb; cSum += cn; cMn = min(cMn, cn); cMx = max(cMx, cn); }
${Xe.look.skyEarlyOut?"    if (takesNoEdge) continue;  // the sharpen cross above still runs, so the drawn picture is unchanged":""}
    // Thin lines: only the half of the pixel facing this neighbour takes what comes from it.
    bool here = !thin || dot(sub, vec2(offs[i])) > 0.0;
    float dn = lin(q);
    vec4 nn = texelFetch(tNrm, q, 0);
    // The depth this face would have one pixel over (its plane), and how far the neighbour lies beyond it.
    float expect = dot(n.xy, vec2(offs[i])) * px / max(n.z, uMinFacing);
    float beyond = dn - d - expect;
    if (beyond > thr) { if (here) outline = 1.0; continue; }
    // Smooth B's second outline pixel: this neighbour is the same surface, the one beyond it is a silhouette step.
    if (uOuter > 0.0 && beyond > -thr && lin(clamp(p + 2 * offs[i], ivec2(0), hi)) - d - 2.0 * expect > thr) outline = max(outline, uOuter);
    if (here && abs(beyond) < thr && nn.a > 0.9 && cls > 0.9) {
      vec3 m = normalize(nn.rgb * 2.0 - 1.0);
      if (1.0 - dot(n, m) > uCreaseMin) {
        if (dot(m - n, vec3(vec2(offs[i]), 0.0)) > 0.0) convex = 1.0; else concave = 1.0;
      }
    }
  }
  float fade = uOrtho > 0.5 ? (uNewStyle > 0.5 ? 1.0 - smoothstep(uOrthoFade.x, uOrthoFade.y, uFadeTexel) : 1.0) : 1.0 - smoothstep(uFade.x, uFade.y, d);
  vec3 col = c.rgb;
  if (uSharpen > 0.0) {
    // Smooth B: contrast-adaptive sharpening (AMD CAS) on the cross, the weight held so the result stays in its range.
    vec3 amp = sqrt(clamp(min(cMn, 1.0 - cMx) / max(cMx, vec3(1e-4)), 0.0, 1.0));
    vec3 w = -amp / mix(8.0, 5.0, uSharpen);
    col = clamp((cSum * w + c.rgb) / (1.0 + 4.0 * w), 0.0, 1.0);
  }
  if (cls > 0.5 && outline > 0.0 && (cls > 0.9 || uSoftOutline > 0.5)) {
    if (uNewStyle > 0.5) {
      // A darker shade of the object's own colour, its saturation lifted.
      vec3 dark = col * uShade;
      float l = dot(dark, vec3(0.299, 0.587, 0.114));
      dark = clamp(mix(vec3(l), dark, uSat), 0.0, 1.0);
      col = mix(col, dark, uStrength * fade * outline);
    } else col = mix(col, col * uTint, fade * outline);
  }
  else if (convex > 0.0) col = mix(col, mix(col, vec3(1.0), uLift * uCreaseShare), fade);
  else if (concave > 0.0 && uConcaveOn > 0.5) col = mix(col, col * uConcave, fade);
  if (uDebug > 0.5 && uDebug < 1.5) col = vec3(fract(d / 10.0), fract(d / 100.0), fract(d / 1000.0));
  if (uDebug > 1.5 && uDebug < 2.5) col = nc.rgb;
  if (uDebug > 2.5 && uDebug < 3.5) col = vec3(outline, convex, concave);
  if (uDebug > 3.5) {
    // The canvas test: top third a checker of single buffer pixels; middle third one-pixel lines every 4 pixels on
    // grey; bottom third colour steps one pixel wide. Hard, equal pixels that slide evenly = the canvas is right.
    ivec2 q = ivec2(pb);
    float band = float(q.y) / uSize.y;
    if (band > 0.66) col = ((q.x + q.y) % 2 == 0) ? vec3(0.95) : vec3(0.08);
    else if (band > 0.33) col = (q.x % 4 == 0 || q.y % 4 == 0) ? vec3(0.95, 0.85, 0.2) : vec3(0.3, 0.32, 0.36);
    else { int k3 = q.x % 3; col = k3 == 0 ? vec3(0.85, 0.2, 0.2) : k3 == 1 ? vec3(0.2, 0.75, 0.3) : vec3(0.2, 0.35, 0.9); }
  }
  gl_FragColor = vec4(col, uAlphaLuma > 0.5 ? dot(col, vec3(0.299, 0.587, 0.114)) : 1.0);
}`,depthTest:!1,depthWrite:!1})}function DM(){return new cn({uniforms:{tCol:{value:null},tDepth:{value:null},uOrigin:{value:new ze},uK:{value:1},uSize:{value:new ze(1,1)}},vertexShader:Lf,fragmentShader:`
uniform sampler2D tCol; uniform sampler2D tDepth; uniform vec2 uOrigin; uniform float uK; uniform vec2 uSize;
void main() {
  ivec2 p = clamp(ivec2(floor((gl_FragCoord.xy - uOrigin) / uK)), ivec2(0), ivec2(uSize) - 1);
  gl_FragColor = vec4(texelFetch(tCol, p, 0).rgb, 1.0);
  gl_FragDepth = texelFetch(tDepth, p, 0).r;
}`,depthTest:!0,depthWrite:!0,depthFunc:Ma})}function qu(n){return new cn({uniforms:{...n.uniforms,...mn,uSkySteps:{value:Oe.skySteps},uSkyDither:{value:Oe.skyDither}},vertexShader:"varying vec3 vDir; void main() { vDir = normalize(position); vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0); gl_Position = p.xyww; }",fragmentShader:`
uniform vec3 uZenith; uniform vec3 uMid; uniform vec3 uHorizon; uniform float uMidShare; uniform float uSkySteps; uniform float uSkyDither;
uniform vec2 uDitherOrigin; uniform float uBNight;
varying vec3 vDir;
layout(location = 1) out highp vec4 pc_fragN;
${uc()}
void main() {
  float e = bQuant(clamp(vDir.y, 0.0, 1.0), uSkySteps, uSkyDither);
  vec3 c = e < uMidShare ? mix(uHorizon, uMid, e / uMidShare) : mix(uMid, uZenith, (e - uMidShare) / (1.0 - uMidShare));
  // Stars after dark: single cells of the sky's direction.
  vec3 sd = normalize(vDir) * ${qe(rn.starCellsPerRadian)};
  vec3 sc = floor(sd);
  float sh = fract(sin(dot(sc, vec3(12.9898, 78.233, 37.719))) * 43758.5453);
${jt()?`  // Smooth B: each star a round dot in its cell.
  float saa = max(fwidth(sd.x) + fwidth(sd.y), 1e-4);
  float sdot = 1.0 - smoothstep(${qe(_n().starDotShare*.5)} - saa, ${qe(_n().starDotShare*.5)} + saa, length(fract(sd) - 0.5));
  c = mix(c, vec3(0.85, 0.88, 0.95), sdot * step(1.0 - ${qe(rn.starShare)}, sh) * step(0.6, uBNight) * smoothstep(0.04, 0.2, vDir.y));`:`  c = mix(c, vec3(0.85, 0.88, 0.95), step(1.0 - ${qe(rn.starShare)}, sh) * step(0.6, uBNight) * smoothstep(0.04, 0.2, vDir.y));`}
  gl_FragColor = vec4(pow(c, vec3(1.0 / 2.2)), 1.0);
  pc_fragN = vec4(0.5, 0.5, 1.0, 0.0);
}`,side:n.side,depthWrite:!1,depthTest:!1,fog:!1})}const wn={w:1,h:1,dpr:1,baseX:0,baseY:0},Ji={hooked:!1,inScene:!1,t0:0,next:1/0,step:1/0,cuts:0,lastSceneTris:0,flushes:0},xa={scale:le.smooth.scale},IM=["","depth","normal","edges"],NM=["","depth","normal","edges","grid"],La={n:0};function Yu(n){n.state.buffers.color.setMask(!0),n.clear(!0,!1,!1)}function Di(n,e,t){n[0]=e,n[1]=t}function $u(n,e,t,i){n.length=0,n.push("scene","edges"),e&&n.push("fxaa"),t!==null&&n.push(t),i&&n.push("rcas")}function Ku(n,e){const t=td.quality.standard,i=matchMedia("(pointer: coarse)").matches?t.targetBufferPixelsTouch:t.targetBufferPixels,s=Math.max(1,Math.round(Math.sqrt(n*e/i)/Oe.fineGrid)),r=Oe.marginPixels,a=Math.ceil(n/s)+2*r,l=Math.ceil(e/s)+2*r,o=Math.floor((n-a*s)/2),c=Math.floor((e-l*s)/2);let u=Math.max(1,Math.min(s,le.opt.canvas.perBufferPixel));for(;s%u;)u--;return{k:s,bw:a,bh:l,lx:o,ly:c,c:u}}class FM{id="pixel";lowRes=!0;mats=new Map;lampHead;pool;poolUniforms={uRings:{value:Oe.poolRings},uPoolOpacity:{value:0}};rt=null;post=null;edge=LM();blow=DM();edgeScene=new Ds;blowScene=new Ds;passCam=new Os(-1,1,1,-1,0,1);sky=null;skyB=null;cloud;cloudIn=!1;cloudShares;cloudNow={on:!1,threshold:0};ortho=new Os;persp=new An;layout={buffer:[0,0],scale:1,shift:[0,0],texelMetres:0,mode:"pixel",output:[0,0],canvas:[0,0],upscale:"",passes:[]};aa=null;full=null;sm=null;drawingBuffer=new ze;camRight=new H;camUp=new H;finish={S:le.smooth,W:1,H:1,iw:1,ih:1,ow:1,oh:1,none:!1,isOrtho:!1,pxOrtho:0,texel:0,camNear:0,camFar:0,camFov:0,focus:0};constructor(e,t){const i=Pt,s=jt()?_n().aoSteps:Oe.aoSteps,r=PM(t),a=new H(t.e0,t.s0,t.step*t.n),l=(p,x)=>Yn(Dl(new sn({vertexColors:p.vertexColors}),{srgbColours:p.srgb,ao:p.ao,facade:p.facade,dayNight:p.dayNight,nightLift:p.nightLift,farWindows:p.farWindows,dissolve:p.dissolve,rigCells:p.rigCells,aoSteps:s,aoFloor:Oe.aoFloor}),{edgeClass:x,grain:p.grain,masonry:p.facade,roadNight:p.roadNight,actor:p.actor,walker:p.walker,noCloud:p.noCloud},p.roadNight?o:{}),o={uRoadNight:{value:new H((rn.roadColour>>16&255)/255,(rn.roadColour>>8&255)/255,(rn.roadColour&255)/255)}};e.colorSpace=Mn,this.mats.set("ground",Yn(new sn({map:e}),{edgeClass:i.classGround,grain:!0,roadNight:!0,roadMask:!0},o)),this.mats.set("building",l({srgb:!0,ao:!0,facade:!0,dayNight:!1,vertexColors:!0},i.classObject)),this.mats.set("road",l({srgb:!0,ao:!0,facade:!1,dayNight:!1,vertexColors:!0,grain:!0,roadNight:!0},i.classGround)),this.mats.set("farGround",Yn(Dl(new sn({vertexColors:!0}),{srgbColours:!0,ao:!0,facade:!1,dayNight:!1,aoSteps:s,aoFloor:Oe.aoFloor}),{edgeClass:i.classGround,worldCells:!0},{uFam:{value:r},uFamFrame:{value:a},uFamN:{value:t.n}})),this.mats.set("farBuilding",l({srgb:!0,ao:!0,facade:!1,dayNight:!1,vertexColors:!0,farWindows:!0},i.classSoft)),this.makeVoxel=()=>l({srgb:!0,ao:!0,facade:!1,dayNight:!0,vertexColors:!0,dissolve:!0,noCloud:!0},i.classObject),this.mats.set("voxel",l({srgb:!0,ao:!0,facade:!1,dayNight:!0,vertexColors:!0,noCloud:!0},i.classObject)),this.mats.set("part",l({srgb:!0,ao:!1,facade:!1,dayNight:!1,vertexColors:!0,nightLift:!0,actor:!0,noCloud:!0},i.classObject)),this.mats.set("walker",l({srgb:!0,ao:!1,facade:!1,dayNight:!1,vertexColors:!0,nightLift:!1,actor:!0,walker:!0,noCloud:!0},i.classObject)),this.makeWalkerDissolve=()=>l({srgb:!0,ao:!1,facade:!1,dayNight:!1,vertexColors:!0,nightLift:!1,actor:!0,walker:!0,dissolve:!0,rigCells:!0,noCloud:!0},i.classObject),this.mats.set("crown",Yn(new sn({color:16777215}),{edgeClass:i.classSoft,minLevel:Oe.crownMinLevel,shadowFloor:Oe.crownShadowLevel,crown:!0},{uClumps:{value:Oe.crownClumps},uClumpAmp:{value:Oe.crownClumpAmp}}));const c=Yn(new sn({color:16777215,side:Bn}),{edgeClass:i.classNone,cloud:!0},{uCloudShade:{value:new Ge().setHex(ot.shade)},uCloudLight:{value:new Ge().setHex(ot.light)}});this.cloud=new gt(new rs(ot.sizeMetres,ot.sizeMetres).rotateX(-Math.PI/2),c),this.cloud.name="clouds",this.cloud.frustumCulled=!1,this.cloud.castShadow=!1,this.cloud.receiveShadow=!1,this.cloudShares=AM(),this.mats.set("trunk",Yn(new sn({color:le.props.trunkColour}),{edgeClass:i.classSoft})),this.mats.set("lampPole",Yn(new sn({color:le.props.lampPoleColour}),{edgeClass:i.classSoft,noCloud:!0})),this.lampHead=Yn(new sn({color:le.props.lampHeadColour,emissive:new Ge(le.props.lampHeadColour)}),{edgeClass:i.classSoft,noCloud:!0}),this.mats.set("lampHead",this.lampHead);const u=p=>new Ge().setHex(p);this.mats.set("water",Yn(new sn({color:le.water.colour}),{edgeClass:i.classNone,water:!0},{uNoise:{value:CM()},uWaveTexel:{value:new ze(...nn.texelMetres)},uSpeedA:{value:new ze(...nn.speedA)},uSpeedB:{value:new ze(...nn.speedB)},uScaleB:{value:nn.scaleB},uMid:{value:nn.mid},uHigh:{value:nn.high},uSparkleAbove:{value:nn.sparkleAbove},uSparkleChance:{value:nn.sparkleChance},uSparkleHz:{value:nn.sparkleHz},uSparkleMetres:{value:nn.sparkleMetres},uTones:{value:nn.tones.map(u)},uSparkle:{value:u(nn.sparkle)},uFam:{value:r},uFamFrame:{value:a},uFamDither:{value:nn.familyDither}})),this.pool=new jl({map:UM(),color:le.props.lampPoolColour,transparent:!0,blending:_a,depthWrite:!1,fog:!1,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4}),this.pool.onBeforeCompile=p=>{Object.assign(p.uniforms,mn,this.poolUniforms,cs),p.vertexShader=Ua(p.vertexShader),p.fragmentShader=p.fragmentShader.replace("#include <common>",`#include <common>
uniform vec2 uDitherOrigin; uniform float uRings; uniform float uPoolOpacity;
layout(location = 1) out highp vec4 pc_fragN;
${uc()}`).replace("#include <opaque_fragment>","gl_FragColor = vec4(pow(diffuse, vec3(1.0 / 2.2)) * bQuant(sampledDiffuseColor.r, uRings, 1.0), uPoolOpacity);").replace("#include <colorspace_fragment>","").replace("#include <dithering_fragment>","pc_fragN = vec4(0.0);")},this.pool.customProgramCacheKey=()=>"pixel-pool",this.mats.set("lampPool",this.pool);for(const p of["road"]){const x=this.mats.get(p);x.polygonOffset=!0,x.polygonOffsetFactor=0,x.polygonOffsetUnits=le.plain.roadDepthUnits}const f=new gt(Fo,this.edge);f.frustumCulled=!1,this.edgeScene.add(f);const h=new gt(Fo,this.blow);h.frustumCulled=!1,this.blowScene.add(h)}makeVoxel=()=>{throw new Error("PixelLook.makeVoxel was called before the constructor set it")};makeWalkerDissolve=()=>{throw new Error("PixelLook.makeWalkerDissolve was called before the constructor set it")};material(e){return this.mats.get(e)}treeImpostorMaterial(e){const t=Yn(new sn({color:16777215}),{edgeClass:Pt.classSoft,minLevel:Oe.crownMinLevel,shadowFloor:Oe.crownShadowLevel,crown:!0,impostor:e},{uClumps:{value:Oe.crownClumps},uClumpAmp:{value:Oe.crownClumpAmp},uTrunkCol:{value:new Ge().setHex(le.props.trunkColour)},...ma});return this.mats.set("treeImpostor",t),t}update(e){this.lampHead.emissiveIntensity=e,this.poolUniforms.uPoolOpacity.value=e*le.props.lampPoolStrength,this.pool.visible=e>.01}clouds(e){const t=RM(e,this.cloudShares,this.cloudNow);mn.uCloudOn.value=t.on?1:0,mn.uCloudThresh.value=t.threshold,this.cloud.visible=t.on}warmMeshes(){return[this.cloud]}light(e,t){mn.uAmb.value.set(e.ambient[0],e.ambient[1],e.ambient[2]),mn.uSun.value.set(e.sun[0],e.sun[1],e.sun[2]),mn.uTime.value=t,mn.uBNight.value=e.night;const[i,s]=rn.shadowOffNight,r=Math.min(1,Math.max(0,(e.night-i)/(s-i)));mn.uShadowMix.value=1-r*r*(3-2*r),mn.uSunW.value.set(e.lightDir[0],e.lightDir[2],e.lightDir[1]).normalize();const a=Math.max(.001,e.lightDir[2]),[l,o]=Oe.bandGainRange;mn.uBandGain.value=Math.min(o,Math.max(l,Oe.shadeLevels[Oe.flatLevel]/a))}targets(e,t){if(this.rt&&this.rt.width===e&&this.rt.height===t)return;this.rt?.dispose(),this.post?.dispose();const i=new Xt(e,t,{count:2,minFilter:_t,magFilter:_t,generateMipmaps:!1,depthBuffer:!0});i.depthTexture=new ki(e,t,En),i.depthTexture.minFilter=i.depthTexture.magFilter=_t;for(const s of i.textures)s.colorSpace=Zn;this.rt=i,this.post=new Xt(e,t,{minFilter:_t,magFilter:_t,generateMipmaps:!1,depthBuffer:!1})}smoothTargets(e,t,i,s){const r=_n();if(!this.rt||this.rt.width!==e||this.rt.height!==t){this.rt?.dispose(),this.post?.dispose(),this.aa?.dispose();const l=new Xt(e,t,{count:2,minFilter:_t,magFilter:_t,generateMipmaps:!1,depthBuffer:!0});l.depthTexture=new ki(e,t,En),l.depthTexture.minFilter=l.depthTexture.magFilter=_t;for(const o of l.textures)o.colorSpace=Zn;this.rt=l,this.post=new Xt(e,t,{minFilter:Ft,magFilter:Ft,generateMipmaps:!1,depthBuffer:!1}),this.aa=r.fxaa.on?new Xt(e,t,{minFilter:Ft,magFilter:Ft,generateMipmaps:!1,depthBuffer:!1}):null}if(r.rcas.on&&r.upscale!=="none"&&(!this.full||this.full.width!==i||this.full.height!==s)&&(this.full?.dispose(),this.full=new Xt(i,s,{minFilter:_t,magFilter:_t,generateMipmaps:!1,depthBuffer:!1})),!this.sm){const l=new gt(Fo,vM());l.frustumCulled=!1;const o=new Ds;o.add(l),this.sm={fxaa:l.material,up:r.upscale==="bilinear"?MM():_M(),rcas:SM(),scene:o,quad:l}}}hookSubmit(e,t){if(Ji.hooked)return;Ji.hooked=!0;const i=e.getContext(),s=e.shadowMap,r=s.render;s.render=function(...c){const u=e.info.render.calls;r.apply(this,c),Ji.inScene&&(Ji.t0=e.info.render.triangles);const f=le.opt.submit;!le.opt.on||!f.on||!f.flushAfterShadow||e.info.render.calls===u||(i.flush(),Ji.flushes++)};const a=()=>{const c=Ji;!c.inScene||c.cuts<=0||e.info.render.triangles-c.t0>=c.next&&(i.flush(),c.flushes++,c.next+=c.step,c.cuts--)},l=Object.getPrototypeOf(t).onAfterRender;Cf(t,"submit",c=>{if(!c.isMesh)return;const u=c.onAfterRender;if(u?.__submitHook)return;const f=u&&u!==l?((...h)=>{u.apply(c,h),a()}):()=>a();f.__submitHook=!0,c.onAfterRender=f})}pass(e,t,i){this.sm.quad.material=t,e.setRenderTarget(i),Xe.look.clearFinishColour&&(Yu(e),La.n++),e.autoClear=!1,e.render(this.sm.scene,this.passCam),e.autoClear=!0}renderSmooth(e,t,i,s,r){const a=_n(),l=wn.w,o=wn.h,c=e.getDrawingBufferSize(this.drawingBuffer),u=a.upscale==="none",f=u?c.x:Math.max(1,Math.round(l*xa.scale)),h=u?c.y:Math.max(1,Math.round(o*xa.scale));this.smoothTargets(f,h,c.x,c.y);let p,x=0,_=0;const d=i.isOrthographicCamera===!0;if(d){const g=i;if(p=this.ortho.copy(g),g.userData.ported&&Xe.view.useGameFrame)p.projectionMatrix.copy(g.projectionMatrix),p.projectionMatrixInverse.copy(g.projectionMatrixInverse),x=g.userData.texelMetres??(g.right-g.left)/l,_=(g.top-g.bottom)/h;else{const{k:b}=Ku(l,o);x=g.userData.texelMetres??(g.right-g.left)/l*b,p.left=-l/b/2*x,p.right=l/b/2*x,p.top=o/b/2*x,p.bottom=-o/b/2*x,p.updateProjectionMatrix(),_=(p.top-p.bottom)/h}}else{const g=i;p=this.persp.copy(g),p.projectionMatrix.copy(g.projectionMatrix),p.projectionMatrixInverse.copy(g.projectionMatrixInverse)}p.layers.mask=r?s|1:s,p.updateMatrixWorld(),mn.uDitherOrigin.value.set(0,0),Oe.clouds.on&&!this.cloudIn&&(t.add(this.cloud),this.cloudIn=!0),this.cloud.position.set(p.position.x,Oe.clouds.heightMetres,p.position.z),this.cloud.updateMatrixWorld();const m=le.plain.windowGlow;pr.uWindowGlow.value=d?m*rn.mapWindowGain:m,this.sky||(this.sky=t.getObjectByName("sky")??null,this.sky&&(this.skyB=qu(this.sky.material)));const y=this.sky?.material;this.sky&&this.skyB&&(this.sky.material=this.skyB),e.setRenderTarget(this.rt),e.setClearColor(0,0),e.autoClear=!0;const w=le.opt.submit,M=le.opt.on&&w.on,v=Ji;M&&this.hookSubmit(e,t),v.t0=e.info.render.triangles,v.inScene=M,v.cuts=M&&w.sceneParts>1&&v.lastSceneTris>0?w.sceneParts-1:0,v.step=v.cuts>0?v.lastSceneTris/w.sceneParts:1/0,v.next=v.step,e.render(t,p),v.lastSceneTris=e.info.render.triangles-v.t0,v.inScene=!1,M&&w.flushAfterScene&&(e.getContext().flush(),v.flushes++),this.sky&&y&&(this.sky.material=y);const S=this.finish;S.S=a,S.W=l,S.H=o,S.iw=f,S.ih=h,S.ow=c.x,S.oh=c.y,S.none=u,S.isOrtho=d,S.pxOrtho=_,S.texel=x,S.camNear=p.near,S.camFar=p.far,S.camFov=d?0:p.fov,S.focus=i.userData?.focusMetres??0,this.finishSmooth(e,S)}finishSmooth(e,t){const{S:i,W:s,H:r,iw:a,ih:l,none:o,isOrtho:c,pxOrtho:u,texel:f}=t,h=this.edge.uniforms,p=Pt.outline,x=zn("outline");h.tCol.value=this.rt.textures[0],h.tNrm.value=this.rt.textures[1],h.tDepth.value=this.rt.depthTexture,h.uNF.value.set(t.camNear,t.camFar),h.uOrtho.value=c?1:0,h.uSize.value.set(a,l),h.uTexel.value=u,h.uFadeTexel.value=f,h.uAlphaLuma.value=i.fxaa.on?1:0,h.uPixelAngle.value=c?0:2*Math.tan(t.camFov*Math.PI/360)/l,h.uDebug.value=IM.indexOf(Oe.debug);const _=c?Pt.orthoOutlineTint:Pt.outlineTint;h.uTint.value.set(_[0],_[1],_[2]),h.uSoftOutline.value=c&&!Pt.orthoSoftOutline?0:1,h.uNewStyle.value=x?1:0,h.uThin.value=0,h.uConcaveOn.value=x&&p.silhouetteOnly?0:1,h.uCreaseShare.value=x?i.outline.creaseShare:1,h.uStrength.value=c?i.outline.orthoStrength:i.outline.strength,h.uOuter.value=i.outline.outerShare,h.uSharpen.value=o?i.sharpen.amount:0;const d=h.uFade.value;x?d.set(Math.max(p.fadeMetres[0],t.focus*p.fadeFocusShare[0]),Math.max(p.fadeMetres[1],t.focus*p.fadeFocusShare[1])):d.set(Pt.fadeMetres[0],Pt.fadeMetres[1]),h.uC.value=1,h.uShiftC.value.set(0,0);const m=i.fxaa.on&&!!this.aa;this.pass(e,this.edge,o&&!m?null:this.post);let y=this.post;if(m&&(this.sm.fxaa.uniforms.tIn.value=this.post.texture,this.sm.fxaa.uniforms.uRcp.value.set(1/a,1/l),this.pass(e,this.sm.fxaa,o?null:this.aa),y=this.aa),o){e.setRenderTarget(null),this.layout.mode="smooth",Di(this.layout.buffer,a,l),this.layout.scale=s/a,Di(this.layout.shift,0,0),this.layout.texelMetres=c?u:0,Di(this.layout.output,s,r),Di(this.layout.canvas,t.ow,t.oh),this.layout.upscale="compositor (bilinear)",$u(this.layout.passes,m,null,!1);return}const w=this.sm.up;w.uniforms.tIn.value=y.texture,w.uniforms.uInSize&&w.uniforms.uInSize.value.set(a,l),w.uniforms.uOutSize.value.set(t.ow,t.oh);const M=i.rcas.on&&this.full;if(this.pass(e,w,M?this.full:null),M){const v=this.sm.rcas;v.uniforms.tIn.value=this.full.texture,v.uniforms.uSize.value.set(t.ow,t.oh),v.uniforms.uSharp.value=Math.pow(2,-i.rcas.sharpnessStops),this.pass(e,v,null)}e.setRenderTarget(null),this.layout.mode="smooth",Di(this.layout.buffer,a,l),this.layout.scale=1/xa.scale,Di(this.layout.shift,0,0),this.layout.texelMetres=c?u:0,Di(this.layout.output,s,r),Di(this.layout.canvas,t.ow,t.oh),this.layout.upscale=i.upscale+(M?" + RCAS":""),$u(this.layout.passes,m,i.upscale,!!M)}render(e,t,i,s,r){if(jt()){this.renderSmooth(e,t,i,s,r);return}const a=zn("canvas"),l=a?this.drawingBuffer.set(wn.w,wn.h):e.getDrawingBufferSize(this.drawingBuffer),o=l.x,c=l.y,{k:u,bw:f,bh:h,lx:p,ly:x,c:_}=Ku(o,c),d=Oe.marginPixels;this.targets(f,h);const m=o/(f*u),y=c/(h*u),w=(o-2*p)/(f*u)-1,M=(c-2*x)/(h*u)-1;let v,S;if(i.isOrthographicCamera){const X=i;v=this.ortho.copy(X),X.userData.ported&&Xe.view.useGameFrame?(v.projectionMatrix.copy(X.projectionMatrix),v.projectionMatrixInverse.copy(X.projectionMatrixInverse),S=X.userData.texelMetres??(X.right-X.left)/o):(S=X.userData.texelMetres??(X.right-X.left)/o*u,v.left=-o/u/2*S,v.right=o/u/2*S,v.top=c/u/2*S,v.bottom=-c/u/2*S,v.updateProjectionMatrix())}else{const X=i;v=this.persp.copy(X),v.projectionMatrix.copy(X.projectionMatrix),S=2*(X.userData.focusMetres??50)*Math.tan(X.fov*Math.PI/360)/c*u}v.layers.mask=r?s|1:s,v.updateMatrixWorld();const g=this.camRight.setFromMatrixColumn(v.matrixWorld,0),b=this.camUp.setFromMatrixColumn(v.matrixWorld,1);let E=0,T=0,P=0,L=0;if(Oe.snap){const X=v.position.dot(g)/S,F=v.position.dot(b)/S;P=Math.round(X),L=Math.round(F),E=X-P,T=F-L,v.position.addScaledVector(g,-E*S).addScaledVector(b,-T*S),v.updateMatrixWorld()}const D=v.projectionMatrix.elements;for(let X=0;X<4;X++){const F=D[X*4],ee=D[X*4+1],ce=D[X*4+3];D[X*4]=m*F+w*ce,D[X*4+1]=y*ee+M*ce}v.projectionMatrixInverse.copy(v.projectionMatrix).invert();const C=X=>(X%4+4)%4;mn.uDitherOrigin.value.set(C(P),C(L));const N=v.isOrthographicCamera===!0;Oe.clouds.on&&!this.cloudIn&&(t.add(this.cloud),this.cloudIn=!0),this.cloud.position.set(v.position.x,Oe.clouds.heightMetres,v.position.z),this.cloud.updateMatrixWorld();const k=le.plain.windowGlow;pr.uWindowGlow.value=N?k*rn.mapWindowGain:k;const U=Pf.object??void 0,Y=U&&Oe.snapActors&&Oe.snap?U.position.clone():null;U&&Y&&(U.position.addScaledVector(g,-E*S).addScaledVector(b,-T*S),U.updateMatrixWorld(!0)),this.sky||(this.sky=t.getObjectByName("sky")??null,this.sky&&(this.skyB=qu(this.sky.material)));const O=this.sky?.material;this.sky&&this.skyB&&(this.sky.material=this.skyB),e.setRenderTarget(this.rt),e.setClearColor(0,0),e.autoClear=!0,e.render(t,v),this.sky&&O&&(this.sky.material=O),U&&Y&&(U.position.copy(Y),U.updateMatrixWorld(!0));const V=this.edge.uniforms;V.tCol.value=this.rt.textures[0],V.tNrm.value=this.rt.textures[1],V.tDepth.value=this.rt.depthTexture,V.uNF.value.set(v.near,v.far),V.uOrtho.value=v.isOrthographicCamera?1:0,V.uSize.value.set(f,h),V.uTexel.value=S,V.uFadeTexel.value=S,V.uAlphaLuma.value=0,V.uPixelAngle.value=v.isPerspectiveCamera?2*Math.tan(v.fov*Math.PI/360)*u/c:0,V.uDebug.value=NM.indexOf(Oe.debug),V.uTint.value.set(...N?Pt.orthoOutlineTint:Pt.outlineTint),V.uSoftOutline.value=N&&!Pt.orthoSoftOutline?0:1;const q=Pt.outline,ne=zn("outline");V.uNewStyle.value=ne?1:0,V.uThin.value=ne&&q.thin?1:0,V.uConcaveOn.value=ne&&q.silhouetteOnly?0:1,V.uCreaseShare.value=ne?q.creaseShare:1,V.uStrength.value=N?q.orthoStrength:q.strength,V.uOuter.value=0,V.uSharpen.value=0;const fe=i.userData?.focusMetres??0;V.uFade.value.set(...ne?[Math.max(q.fadeMetres[0],fe*q.fadeFocusShare[0]),Math.max(q.fadeMetres[1],fe*q.fadeFocusShare[1])]:Pt.fadeMetres);let z=Oe.snap?Math.round(-E*u):0,J=Oe.snap?Math.round(-T*u):0;if(Oe.debug==="grid"){const X=Oe.gridTest,F=Math.round(X.cycleBufferPixels*u),ee=Math.floor(performance.now()/1e3*X.stepsPerSecond)%(2*F);z=ee<F?ee:2*F-ee,J=Math.floor(z/2)}if(a){const X=u/_,F=Math.round(z/X),ee=Math.round(J/X),ce=le.opt.canvas.cssRemainder?z-F*X:0,ue=le.opt.canvas.cssRemainder?J-ee*X:0;V.uC.value=_,V.uShiftC.value.set(F,ee),e.setRenderTarget(null),Xe.look.clearFinishColour&&(Yu(e),La.n++),e.autoClear=!1,e.render(this.edgeScene,this.passCam),e.autoClear=!0;const xe=e.domElement,Le=`translate(${(wn.baseX+ce)/wn.dpr}px, ${(wn.baseY-ue)/wn.dpr}px)`;xe.style.transform!==Le&&(xe.style.transform=Le),this.layout.buffer=[f-2*d,h-2*d],this.layout.scale=u,this.layout.shift=[z,J],this.layout.texelMetres=S,this.layout.output=[wn.w,wn.h],this.layout.canvas=[e.domElement.width,e.domElement.height],this.layout.upscale="compositor (hard pixels)",this.layout.passes=["scene","edges (to the canvas)"];return}V.uC.value=1,V.uShiftC.value.set(0,0),e.setRenderTarget(this.post),e.render(this.edgeScene,this.passCam);const se=this.blow.uniforms;se.tCol.value=this.post.texture,se.tDepth.value=this.rt.depthTexture,se.uOrigin.value.set(p+z,x+J),se.uK.value=u,se.uSize.value.set(f,h),e.setRenderTarget(null),e.autoClear=r,e.render(this.blowScene,this.passCam),e.autoClear=!0,this.layout.buffer=[f-2*d,h-2*d],this.layout.scale=u,this.layout.shift=[z,J],this.layout.texelMetres=S,this.layout.output=[o,c],this.layout.canvas=[e.domElement.width,e.domElement.height],this.layout.upscale="blow-up pass (hard pixels)",this.layout.passes=["scene","edges","blow-up"]}}function UM(){const e=new Uint8Array(16384);for(let i=0;i<64;i++)for(let s=0;s<64;s++){const r=Math.hypot(s+.5-32,i+.5-32)/32,a=Math.round(255*Math.max(0,1-r)**2);e.set([a,a,a,255],(i*64+s)*4)}const t=new ls(e,64,64);return t.needsUpdate=!0,t}function OM(){le.actors.ferries=[],le.actors.carRoads=[]}const ta={x:0,y:0,z:0};function BM(n,e,t,i,s){n.ok=!1;const r=e.objects[t.object];if(!r)return n;const a=r.position;if(!Number.isFinite(a.x+a.y+a.z))return n;const l=t.object<(e.followObjects??0),o=l?i.cpu.snapDX:0,c=l?i.cpu.snapDY:0;return ti(s,i.cpu.cellMetres,a.x+o,a.y+c,a.z,ta),n.x=ta.x,n.y=ta.y,n.z=ta.z,n.yaw=-r.yaw,n.ok=!0,n}function kM(n,e){let t=-1,i=-1,s=null,r=0,a=!1,l=null,o=null;oc.uRigVoxel.value=va.model.voxelMetres;const c={x:0,y:0,z:0,yaw:0,ok:!1},u=(f,h,p,x)=>(BM(c,h,p,x,e),c.ok?(f.position.set(c.x,c.y,c.z),f.rotation.y=c.yaw,!0):!1);return{update(f,h,p,x){t=-1,i=-1,a=!1;const _=p?.poses;if(_){for(const d of _)if(!(d.object<0||d.object>=f.objects.length))switch(d.kind){case"walker":{if(!u(n.walker.root,f,d,h))break;const m=f.objects[d.object].model,y=gM(m);if(y)n.walker.root.position.y-=y.pivotZ*va.model.voxelMetres,m!==s&&(n.walker.pose(y.pose,y),n.walkerLow?.pose(y.pose,y),s=m);else{r++;const b=or.cycle(d.phase??0,d.gait??0);n.walker.pose(b),n.walkerLow?.pose(b),s=null}const w=f.objects[d.object];Bl.uWalkerGain.value=y?nd(y.level):1;const M=w.tint??16777215;Bl.uWalkerTint.value.set((M>>16&255)/255,(M>>8&255)/255,(M&255)/255);const v=w.fade??1,S=n.walkerDissolve?of(n.walkerDissolve):void 0,g=o??(v<1&&S?n.walkerDissolve:n.walkerMaterial);if(g!==l&&(n.walker.setMaterial(g),n.walkerLow?.setMaterial(g),l=g),g===n.walkerDissolve&&S){S.share.value=v;const b=w.fadeSeed??0;S.seed.value=b>=0&&b<1?b:0,S.pivot.value.set(m.pivot.x,m.pivot.y,0)}a=!(v>0),n.walker.root.visible=!a,t=d.object,x[d.object]=1;break}case"jet":{if(!u(n.jet,f,d,h))break;n.jet.visible=!0,n.jetOwn.value=zl(f.objects[d.object]),i=d.object,x[d.object]=1;break}}}this.hideUnclaimed()},hideUnclaimed(){(t<0||a)&&(n.walker.root.visible=!1,n.walkerLow&&(n.walkerLow.root.visible=!1)),i<0&&(n.jet.visible=!1)},get unresolvedFrames(){return r},setMark(f){o=f},drawn(f){return f===t?n.walkerLow?.root.visible?n.walkerLow.root:n.walker.root:f===i?n.jet:null}}}const mi=ni.particles,zM=ni.haze.emissiveShare,HM=ni.shadeLevels[ni.flatShade],Df=Xe.particles.max,GM=le.plain.actorNightLift,If=n=>Number.isInteger(n)?n.toFixed(1):String(n),VM=[["P_FLAT_SHADE",HM],["P_DECAL_BIAS_METRES",mi.decalBiasMetres],["P_NIGHT_LIFT",GM]].map(([n,e])=>`const float ${n} = ${If(e)};`).join(`
`),WM=`
#include <common>
#include <lights_pars_begin>

${VM}

/** Scene metres of the particle's centre. */
attribute vec3 iCentre;
/** A flat ellipse's two half-axes, scene metres (both zero for a camera-facing quad). */
attribute vec3 iAxisU;
attribute vec3 iAxisV;
/** A camera-facing quad's half width and height, view metres at its own depth (zero for an ellipse). */
attribute vec2 iHalf;
/** The particle's colour, the working space's own (zero for nothing). */
attribute vec3 iColour;
/** The landing light's pool, added to a plain particle's light where it stands inside it. */
attribute vec3 iPool;
/** alpha, the additive gain, whether the blend keeps alpha, and this particle's share of the haze. */
attribute vec4 iLook;
/**
 * Soft falloff (0/1), flat on its own plane (0/1), lit by the hour (0/1 — emissive particles are not), and the subject
 * share it is drawn with in a tilted view (OI-11's Particle.subject, the jet's exhaust: the frame's share; 0 for the world).
 */
attribute vec4 iShape;
/** This particle's share of the subject's turn (commit 9b: the exhaust's, subjectShare at its place; 0 for the world's). */
attribute float iTurn;

uniform float uNight;
${Kh}

#ifdef USE_FOG
  uniform vec3 fogColor;
  #ifdef FOG_EXP2
    uniform float fogDensity;
  #else
    uniform float fogNear;
    uniform float fogFar;
  #endif
#endif

varying vec3 vColour;
/** alpha, gain, keep-alpha, soft. */
varying vec4 vLook;
varying vec2 vUnit;

void main() {
  vec4 mvCentre = modelViewMatrix * vec4(iCentre, 1.0);
  vec4 mv;
  if (iShape.y > 0.5) {
    // A flat ellipse is built in the scene's own metres on the plane its axes span, so every pixel of it is
    // depth-tested at that plane's depth: a lamp's pool on the road is not cut by the road.
    mv = modelViewMatrix * vec4(iCentre + position.x * iAxisU + position.y * iAxisV, 1.0);
    // Drawn this much nearer the eye than its own plane, as the CPU renderer's decal bias does — view space
    // looks down −z, so adding to z moves it towards the eye. A bias in metres, not a polygon offset in
    // depth units, because the CPU's bias is in metres and this must be the same distance in every view.
    mv.z += P_DECAL_BIAS_METRES;
  } else {
    // Camera-facing, and offset in VIEW space rather than in clip space. That is the part worth being
    // careful about: the camera's roll lives inside the projection matrix (src/render-gpu/camera.ts turns
    // the finished picture, as the CPU's sheet → output rotation does). Offsetting here, before the
    // projection, lands the square axis-aligned in the CPU's sheet and lets the roll turn it with the rest
    // of the picture — which is what the CPU draws. Offsetting after the projection would leave squares
    // standing upright in a banking view while everything behind them turned.
    mv = mvCentre;
    mv.xy += position.xy * iHalf;
  }
  gl_Position = projectionMatrix * mv;
  // Tilted views as today's renderer draws them (src/render-gpu/warp.ts, commit 9a): across, x scaled by kz / kr. A flat
  // ellipse's corners each take it, as a face's vertices do; a camera-facing quad moves by its centre's shift only (today's
  // renderer places a square at its centre's projection and sizes it by its own depth).
  // (The centre as drawn, for a camera-facing quad's turn below: its x through the step.)
  vec4 drawnCentre = mvCentre;
  if (uWarp.x > 0.0) {
    vec4 warpAt = iShape.y > 0.5 ? mv : mvCentre;
    float warpD = -warpAt.z;
    if (warpD > uWarp.y) {
      float warpK = warpD + (dot(uWarpPlane.xyz, warpAt.xyz) + uWarpPlane.w) * (1.0 - iShape.w);
      float warpF = warpD / max(warpK, uWarp.y);
      if (iShape.y > 0.5) mv.x *= warpF;
      else mv.x += mvCentre.x * (warpF - 1.0);
      drawnCentre.x *= warpF;
      gl_Position = projectionMatrix * mv;
    }
  }
  // The subject's turn (commit 9b; today's subjectLook), by this particle's share of it (iTurn: the exhaust's, by its
  // distance from the subject; 0 for the world's), in level and tilted views alike: a camera-facing quad by its centre's
  // move (today places a square at its centre's turned place, sized by its own depth), as today's. A flat ellipse's
  // corners are turned each, as the step above takes each; today's builds an ellipse in the picture from its centre and
  // its two axis ends, each projected and turned (render/particles.ts:62-77), which differs where the step or the turn
  // bends across the ellipse. No subject particle is an ellipse (the exhaust is squares), so the turn draws nothing
  // differently; the world's ellipses take the step only (9a's measured lamp pools and streaks).
  if (uTurn.x > 0.0 && iTurn > 0.0) {
    vec4 turnAt = iShape.y > 0.5 ? mv : drawnCentre;
    float turnD = -turnAt.z;
    if (turnD > uWarp.y) {
      vec2 moved = turnRay(turnAt.xy / turnD, iTurn) * turnD - turnAt.xy;
      mv.xy += moved;
      gl_Position = projectionMatrix * mv;
    }
  }
  #ifdef P_FAR_KEEP
    // The fixed-size points only (the aviation lights): one past the far plane is drawn just inside it. The far
    // plane stops at full haze, and a night light is not wholly hazed (iLook.w), so the CPU still draws it there.
    // Only z moves: x, y and w, so its place and its size on screen, are the point's own, and its haze (below) is
    // taken at its true depth. Lengyel FGED 2 §6.3, Eqs. 6.46–6.47 (the infinite far plane's ε guard).
    gl_Position.z = min(gl_Position.z, gl_Position.w * P_FAR_KEEP);
  #endif

  vec3 colour = iColour;
  if (iShape.z > 0.5) {
    // Plain particles take the hour's light. The look scales its lights by π (three's Lambert divides by
    // π), so the same π comes back out here; the sun's share is the CPU's one flat level, and the ambient
    // is full, exactly as drawParticles shades them. Every directional light is summed because the look's
    // shadow split adds a second sun of zero intensity, and which of the two is index 0 is not ours to
    // depend on.
    vec3 light = ambientLightColor;
    #if NUM_HEMI_LIGHTS > 0
      for (int i = 0; i < NUM_HEMI_LIGHTS; i++) light += hemisphereLights[i].skyColor;
    #endif
    #if NUM_DIR_LIGHTS > 0
      for (int i = 0; i < NUM_DIR_LIGHTS; i++) light += directionalLights[i].color * P_FLAT_SHADE;
    #endif
    light *= RECIPROCAL_PI;
    // Under the hovering jet, inside its landing light's pool, the light's own adds to the sky's.
    light += iPool;
    // The look lifts the actors after dark so they still read (PROTO.plain.actorNightLift); the spray and
    // smoke off a lifted jet are lifted with it, or they would read darker than the thing they come from.
    light += uNight * P_NIGHT_LIFT;
    // A lit colour cannot pass white, as the CPU clamps its channels at 255 before blending.
    colour = min(colour * light, vec3(1.0));
  }

  #ifdef USE_FOG
    // The haze is taken at the centre's depth, one value for the whole particle, as the CPU takes it.
    float fogDepth = -mvCentre.z;
    #ifdef FOG_EXP2
      float fogFactor = 1.0 - exp(-fogDensity * fogDensity * fogDepth * fogDepth);
    #else
      float fogFactor = smoothstep(fogNear, fogFar, fogDepth);
    #endif
    // iLook.w is this particle's share of it: all of it for a plain particle, the CPU's emissive share for
    // a night light.
    colour = mix(colour, fogColor, clamp(fogFactor, 0.0, 1.0) * iLook.w);
  #endif

  vColour = colour;
  vLook = vec4(iLook.xyz, iShape.x);
  vUnit = position.xy;
}
`,XM=`
varying vec3 vColour;
varying vec4 vLook;
varying vec2 vUnit;
/**
 * Look B draws the scene into two colour targets at once (look/pixel.ts: the colour, and the normal and edge class its
 * edge pass reads), and WebGL refuses a draw whose shader leaves an active draw buffer without an output ("Active draw
 * buffers with missing fragment shader outputs": no particle was drawn in look B until 24 Nov 2026). So the second
 * output is written, as the lamp pool's is: zero, alpha zero, which the premultiplied blend (src + dst × (1 − src.a))
 * turns into the target unchanged, so the edge pass still sees the surface behind the particle. A look that draws to
 * one target (the plain look, onto the canvas) has no draw buffer at location 1, and the output is dropped.
 * A limit of that: a particle over a silhouette takes the surface's outline, because the edge pass shades the colour it
 * finds there, the particle's included. Measured 24 Nov 2026 in the 21:00 chase: the nearest aviation light's core,
 * on a tower's top edge, is about 22 % darker than with outlines off; lights past the outline's fade distance are
 * untouched. A particle cannot lower the class through this blend (it only adds alpha), so the fix is the edge pass's
 * (open: with the lamp-halo push, which works on the same pass).
 */
layout(location = 1) out highp vec4 pc_fragN;

void main() {
  float f = vLook.x;
  if (vLook.w > 0.5) {
    // A soft spot or ellipse: alpha × (1 − q²)², q the distance from the centre in the ellipse's own
    // measure (0 middle, 1 edge). No square, no hard edge — the CPU's own falloff.
    float q2 = dot(vUnit, vUnit);
    if (q2 >= 1.0) discard;
    float s = 1.0 - q2;
    f *= s * s;
  }

  // PREMULTIPLIED. The colour is encoded for the drawing buffer BEFORE it is multiplied by the coverage,
  // not after (so no <colorspace_fragment> here). With premultiplied-alpha blending — src × 1 +
  // dst × (1 − srcAlpha) — writing (encoded × f × gain, f × keep) is the CPU renderer's three modes
  // exactly, in the same encoded values the CPU blends its bytes in:
  //   plain      gain 1,       keep 1 → dst + (colour − dst)·f
  //   emissive   gain add,     keep 0 → dst + colour·f·add
  //   glowAdd    gain 1+glow,  keep 1 → dst + (colour − dst)·f + colour·f·glow
  // Encoding after the multiply (what the stock chunk does) would brighten every half-covered pixel,
  // because the transfer curve is not linear.
  vec3 encoded = linearToOutputTexel(vec4(vColour, 1.0)).rgb;
  gl_FragColor = vec4(encoded * (f * vLook.y), f * vLook.z);
  pc_fragN = vec4(0.0);
}
`,On={x:0,y:0,z:0},js={x:0,y:0,z:0},Js={x:0,y:0,z:0},pi={x:0,y:0,depthMetres:0,eyeMetres:0,pixelsPerMetre:0},Uo={x:0,y:0,depthMetres:0,eyeMetres:0,pixelsPerMetre:0},Oo={x:0,y:0,depthMetres:0,eyeMetres:0,pixelsPerMetre:0},qM={x:0,y:0},na=new Ge;function Bo(n,e,t,i,s=0){const r=(e.x-n.eye.x)*n.forward.x+(e.y-n.eye.y)*n.forward.y+(e.z-n.eye.z)*n.forward.z;if(!n.ortho&&!(r>=n.near))return!1;if(wi(n)){const a=n.view.elements;if(Ca(n,a[0]*e.x+a[4]*e.y+a[8]*e.z+a[12],a[1]*e.x+a[5]*e.y+a[9]*e.z+a[13],a[2]*e.x+a[6]*e.y+a[10]*e.z+a[14],i)<=n.near)return!1}return rc(n,e.x,e.y,e.z,t,i,s),t.pixelsPerMetre>0}class Zu{constructor(e=Df,t="general"){this.capacity=e,this.take=t,this.geometry.setAttribute("position",new Tt([-1,-1,0,1,-1,0,1,1,0,-1,1,0],3)),this.geometry.setIndex([0,1,2,0,2,3]),this.geometry.instanceCount=0;const i=(s,r)=>{const a=new es(new Float32Array(Math.max(1,this.capacity)*r),r);return a.setUsage(Vd),this.geometry.setAttribute(s,a),this.attributes.push(a),a};this.centre=i("iCentre",3),this.axisU=i("iAxisU",3),this.axisV=i("iAxisV",3),this.half=i("iHalf",2),this.colour=i("iColour",3),this.pool=i("iPool",3),this.look=i("iLook",4),this.shape=i("iShape",4),this.turn=i("iTurn",1),this.uniforms=Nh.merge([Ae.lights,Ae.fog,{uNight:{value:0}}]),Object.assign(this.uniforms,cs),this.material=new cn({name:"particles",uniforms:this.uniforms,vertexShader:WM,fragmentShader:XM,transparent:!0,premultipliedAlpha:!0,blending:Ps,depthWrite:!1,depthTest:!0,side:Bn,fog:!0,lights:!0,defines:t==="fixed"&&Xe.particles.fixedFarEpsilon>0?{P_FAR_KEEP:If(1-Xe.particles.fixedFarEpsilon)}:{}}),this.object=new gt(this.geometry,this.material),this.object.name=t==="fixed"?"fixed points":"particles",this.object.frustumCulled=!1}object;drawn=0;dropped=0;geometry=new Oh;material;uniforms;centre;axisU;axisV;half;colour;pool;look;shape;turn;attributes=[];update(e,t,i,s,r=0){this.uniforms.uNight.value=s;const a=i.cpu.cellMetres,l=this.centre.array,o=this.axisU.array,c=this.axisV.array,u=this.half.array,f=this.colour.array,h=this.pool.array,p=this.look.array,x=this.shape.array,_=this.turn.array,d=Math.min(r,e.length),m=ef(i,qM);let y=0;this.dropped=0;const w=this.take==="fixed";for(let M=0;M<e.length;M++){const v=e[M],S=v.fixedPx;if(S!==void 0!==w)continue;const g=v.alpha;if(!(g>0))continue;if(y>=this.capacity){this.dropped++;continue}const b=M<d,E=b?v.position.x+m.x:v.position.x,T=b?v.position.y+m.y:v.position.y,P=v.position.z;if(!Number.isFinite(E+T+P+v.size))continue;ti(i.origin,a,E,T,P,On);const L=v.subject===!0?i.cpu.subShare:0,D=L>0&&i.cpu.subOn?id(i.cpu,E,T,P/a):0;if(!Bo(i,On,pi,L,D))continue;const C=i.toGridY,N=pi.pixelsPerMetre*a*C,k=pi.pixelsPerMetre*C,U=pi.x*i.toGridX,Y=pi.y*i.toGridY,O=i.gridW,V=i.gridH,q=v.axisA,ne=v.axisB,fe=!!q&&!!ne,z=!!v.soft||fe;let J=0,se=0,X=0,F=0,ee=0,ce=0;if(q&&ne){if(ti(i.origin,a,E+q.x,T+q.y,P+q.z,js),ti(i.origin,a,E+ne.x,T+ne.y,P+ne.z,Js),!Bo(i,js,Uo,L,D)||!Bo(i,Js,Oo,L,D))continue;J=(Uo.x-pi.x)*i.toGridX,se=(Uo.y-pi.y)*i.toGridY,X=(Oo.x-pi.x)*i.toGridX,F=(Oo.y-pi.y)*i.toGridY}else if(w){const Be=S;if(v.soft){const et=Math.min(mi.softMaxPx,Be/2);J=et,F=et,ee=et/k}else{const et=Be<1?1:Be;if(Math.max(0,Math.floor(U-et/2))>=Math.min(O,Math.ceil(U+et/2))||Math.max(0,Math.floor(Y-et/2))>=Math.min(V,Math.ceil(Y+et/2)))continue;ee=et/2/k}ce=ee}else if(v.soft){const Be=Math.min(mi.softMaxPx,v.size*N/2);J=Be,F=Be,ee=Be/k,ce=ee}else{let Be=Math.round(v.size*N);Be>=1?Be>mi.maxPx&&(Be=mi.maxPx):Be=1;const et=Math.round(U-Be/2),bt=Math.round(Y-Be/2);if(Math.max(0,et)>=Math.min(O,et+Be)||Math.max(0,bt)>=Math.min(V,bt+Be))continue;ee=Be/2/k,ce=ee}if(z){const Be=J*F-se*X;if(Math.abs(Be)<mi.softMinPx*Math.max(1,Math.hypot(J,se,X,F)))continue;const et=Math.min(mi.softMaxPx,Math.hypot(J,X)),bt=Math.min(mi.softMaxPx,Math.hypot(se,F));if(Math.max(0,Math.floor(U-et))>=Math.min(O,Math.ceil(U+et))||Math.max(0,Math.floor(Y-bt))>=Math.min(V,Math.ceil(Y+bt)))continue}const ue=v.emissive&&v.glowAdd!==void 0,xe=ue?1+v.glowAdd:v.emissive?mi.emissiveAdd:1,Le=v.emissive&&!ue?0:1;let $=0,ge=0,Re=0;!v.emissive&&t&&P<=t.topZ&&(E-t.x)**2+(T-t.y)**2<=t.r*t.r&&($=t.red,ge=t.green,Re=t.blue),na.setHex(v.colour);const De=y*3,Ve=y*2,Ze=y*4;l[De]=On.x,l[De+1]=On.y,l[De+2]=On.z,o[De]=fe?js.x-On.x:0,o[De+1]=fe?js.y-On.y:0,o[De+2]=fe?js.z-On.z:0,c[De]=fe?Js.x-On.x:0,c[De+1]=fe?Js.y-On.y:0,c[De+2]=fe?Js.z-On.z:0,u[Ve]=ee,u[Ve+1]=ce,f[De]=na.r,f[De+1]=na.g,f[De+2]=na.b,h[De]=$,h[De+1]=ge,h[De+2]=Re,p[Ze]=g>1?1:g,p[Ze+1]=xe,p[Ze+2]=Le,p[Ze+3]=v.emissive?zM:1,x[Ze]=z?1:0,x[Ze+1]=fe?1:0,x[Ze+2]=v.emissive?0:1,x[Ze+3]=L,_[y]=D,y++}this.drawn=y,this.geometry.instanceCount=y,w&&(this.object.visible=y>0);for(const M of this.attributes)M.clearUpdateRanges(),y>0&&(M.addUpdateRange(0,y*M.itemSize),M.needsUpdate=!0)}dispose(){this.geometry.dispose(),this.material.dispose()}}function YM(n=0){const e=new Zu(Df,"general"),t=new Zu(n,"fixed");return t.object.visible=!1,{object:e.object,fixedObject:t.object,update(i,s,r,a,l){e.update(i,s,r,a,l),t.update(i,s,r,a,l)},get drawn(){return e.drawn+t.drawn},get fixedDrawn(){return t.drawn},get dropped(){return e.dropped+t.dropped},dispose(){e.dispose(),t.dispose()}}}le.props;const ia=7;function $M(n,e){const t=le.water,i=t.gridCellMetres;let s=(n.eye.x-n.target.x)/2,r=(n.eye.z-n.target.z)/2;const a=Math.hypot(s,r);return a>t.gridTowardEyeMetres&&(s*=t.gridTowardEyeMetres/a,r*=t.gridTowardEyeMetres/a),e.x=Math.round((n.target.x+s)/i)*i,e.z=Math.round((n.target.z+r)/i)*i,e}function KM(n,e,t,i,s=[]){const r=[];let a=0,l=t;for(;a<n;){r.push(a),a>=e&&(l*=i);const c=s.find(([u])=>a<u);a=Math.min(n,a+(c?Math.min(c[1],c[0]-a):l))}return r.push(n),r.slice(1).reverse().map(c=>-c).concat(r)}function ZM(){const n=le.water;return[[n.gridInnermostHalfMetres,n.gridInnermostCellMetres],[n.gridInnerHalfMetres,n.gridInnerCellMetres]]}function jM(){const n=le.water,e=KM(n.halfSizeMetres,n.gridFineHalfMetres,n.gridCellMetres,n.gridGrowth,ZM()),t=e.length,i=new Float32Array(t*t*3),s=new Float32Array(t*t*3),r=new Float32Array(t*t*2),a=2*n.halfSizeMetres;for(let u=0;u<t;u++)for(let f=0;f<t;f++){const h=u*t+f;i[h*3]=e[f],i[h*3+1]=n.levelMetres,i[h*3+2]=e[u],s[h*3+1]=1,r[h*2]=(e[f]+n.halfSizeMetres)/a,r[h*2+1]=1-(e[u]+n.halfSizeMetres)/a}const l=new Uint32Array((t-1)*(t-1)*6);let o=0;for(let u=0;u+1<t;u++)for(let f=0;f+1<t;f++){const h=u*t+f;l[o++]=h,l[o++]=h+t,l[o++]=h+1,l[o++]=h+1,l[o++]=h+t,l[o++]=h+t+1}const c=new It;return c.setAttribute("position",new Tt(i,3)),c.setAttribute("normal",new Tt(s,3)),c.setAttribute("uv",new Tt(r,2)),c.setIndex(Array.from(l)),c}const JM={ground:"ground",building:"building",road:"road"},QM={x:0,z:0};function eS(n){const e=new It;return e.setAttribute("position",new nt(n.pos,3)),e.setAttribute("normal",new nt(n.nrm,3)),e.setAttribute("color",new nt(n.col,3,!0)),e.setAttribute("ao",new nt(n.ao,1,!0)),n.fac0&&n.fac1&&(e.setAttribute("fac0",new nt(n.fac0,4)),e.setAttribute("fac1",new nt(n.fac1,4))),n.uv&&e.setAttribute("uv",new nt(n.uv,2)),e.setIndex(new nt(n.idx,1)),e.computeBoundingSphere(),e.computeBoundingBox(),e}function ju(n){const e=new It;e.setAttribute("position",new nt(n.pos,3)),e.setAttribute("normal",new nt(n.nrm,3)),e.setAttribute("color",new nt(n.col,3,!0)),e.setAttribute("col2",new nt(n.col2,3,!0));const t=new Uint8Array(n.glow.length);for(let i=0;i<t.length;i++)t[i]=n.glow[i]*85;return e.setAttribute("glow",new nt(t,1,!0)),e.setAttribute("ao",new nt(n.ao,1,!0)),e.setIndex(new nt(n.idx,1)),e.computeBoundingSphere(),e}const hc=new WeakSet;function ko(n,e,t){if(hc.has(n)){n.needsUpdate=!0;return}const i=n.itemSize,s=n.updateRanges;let r=e*i,a=t*i;for(let l=0;l<s.length;l++)r=Math.min(r,s[l].start),a=Math.max(a,s[l].start+s[l].count);n.clearUpdateRanges(),n.addUpdateRange(r,a-r),n.needsUpdate=!0}function sa(n){n.clearUpdateRanges(),hc.add(n),n.needsUpdate=!0}function ra(n){n.onUpload(()=>{n.clearUpdateRanges(),hc.delete(n)})}function tS(n){n.traverse(e=>{e.matrixAutoUpdate=!1,e.matrixWorldAutoUpdate=!1})}function nS(n,e){const t=n.index.array,i=n.getAttribute("normal").array,s=[],r=[],a=t.length/3;for(let f=0;f<a;f++){const h=t[f*3],p=new H(i[h*3],i[h*3+1],i[h*3+2]);let x=s.findIndex(_=>_.dot(p)>.999);x<0&&(x=s.length,s.push(p.clone().normalize()),r.push([])),r[x].push(t[f*3],t[f*3+1],t[f*3+2])}const l=new Uint32Array(t.length),o=[0];let c=0;for(const f of r)l.set(f,c),c+=f.length,o.push(c);const u=new It;for(const[f,h]of Object.entries(n.attributes))u.setAttribute(f,h);return u.setIndex(new nt(l,1)),u.computeBoundingSphere(),u.computeBoundingBox(),u.addGroup(0,l.length,0),e.push({mesh:null,ranges:o,dirs:s,box:u.boundingBox.clone(),shown:new Uint8Array(s.length),built:!1,lo:null}),u}class iS{constructor(e){this.g=e}at(e,t){const i=this.g,s=(e-i.e0)/i.step,r=(t-i.s0)/i.step;if(s<0||r<0||s>=i.nx||r>=i.ny)return 0;const a=Math.floor(s),l=Math.floor(r),o=s-a,c=r-l,u=i.nx+1,f=i.z[l*u+a],h=i.z[l*u+a+1],p=i.z[(l+1)*u+a],x=i.z[(l+1)*u+a+1];return(f*(1-o)+h*o)*(1-c)+(p*(1-o)+x*o)*c}}class sS{scene=new Ds;looks=new Map;ground;walker;jet;jetOwn;landmarkGroups={voxel:new bn,smooth:new bn,both:new bn};stats;cars=[];voxFaced=[];farFaced=[];facingEye=new H;facingBack=new H;facingCorner=new H;actorCull=zn("actors");carLevels=new Map;walkerLow=null;walkerMaterial;walkerDissolve=null;waterPlane;waterGrid;frustum=new Bi;sph=new ri;tmpM=new rt;treeS1=null;carMeshes=[];carSlot=new Map;carCount=new Int32Array(0);still=[];frozen=[];treeBlocks=[];crownNear=new It;crownFar=new It;tmpO=new kt;walkerPhase=0;walkerPath=null;walkerDist=0;walkerStart=new H;walkerHeading=0;gait=0;constructor(e,t={}){const i=performance.now(),s=new ln(e.groundTexture);s.flipY=!1,s.needsUpdate=!0,s.anisotropy=4;const r=new a_(s);this.looks.set("plain",r),this.looks.set("pixel",new FM(s,e.waterMap));const a=E=>this.looks.get(le.look.mix[E]??"plain")??r,l=(E,T)=>a(E).material(T),o=(E,T)=>(E.traverse(P=>P.layers.set(Bs[T])),E),c={},u=(E,T)=>c[E]=(c[E]??0)+T;let f=0;for(const E of e.meshes){const T=E.layer,P=T==="far"?E.kind==="ground"?"farGround":"farBuilding":JM[E.kind]??"road",L=eS(E),D=new gt(L,E.ranges?[l(T,P)]:l(T,P));E.ranges&&(L.addGroup(0,E.idx.length,0),this.farFaced.push({mesh:D,ranges:E.ranges,box:L.boundingBox,shown:-1})),D.name=E.name,D.receiveShadow=!0,D.castShadow=T==="near"&&E.kind==="building",this.scene.add(o(D,T)),this.still.push(D),u(T==="far"?"far":E.kind,E.idx.length/3),f++}const h=new gt(new rs(le.water.halfSizeMetres*2,le.water.halfSizeMetres*2),l("near","water"));h.rotation.x=-Math.PI/2,h.position.y=le.water.levelMetres,h.receiveShadow=!0,h.name="water",this.scene.add(o(h,"near")),this.still.push(h),this.waterPlane=h;const p=new gt(jM(),l("near","water"));p.receiveShadow=!0,p.name="water grid",p.visible=!1,this.scene.add(o(p,"near")),this.still.push(p),this.waterGrid=p,f++;for(const E of e.landmarks){const T=ju(E.mesh),P=zn("landmarkFacing")&&E.variant!=="smooth",L=new gt(P?nS(T,this.voxFaced):T,P?[l(E.layer,"voxel")]:l(E.layer,"voxel"));if(L.name=`${E.id} ${E.variant}`,L.castShadow=!P,L.receiveShadow=!0,P){this.voxFaced[this.voxFaced.length-1].mesh=L;const D=new gt(T,l(E.layer,"voxel"));D.name=`${E.id} ${E.variant} caster`,D.castShadow=!0,D.layers.set(Il),this.landmarkGroups[E.variant].add(D)}this.landmarkGroups[E.variant].add(o(L,E.layer)),u(`landmarks ${E.variant}`,E.mesh.idx.length/3)}this.scene.add(this.landmarkGroups.voxel,this.landmarkGroups.smooth,this.landmarkGroups.both),this.still.push(this.landmarkGroups.voxel,this.landmarkGroups.smooth,this.landmarkGroups.both),this.setLandmarkVariant(le.look.landmarkVariant);const x=new Map,_=new Map;for(const E of e.actors)_.set(E.name,E.voxelMetres??0),x.set(E.name,ju(E.mesh)),u(`actor ${E.name} (each)`,E.mesh.idx.length/3);const d=le.actors.jet,m=jh(l("actors","voxel"));this.jetOwn=Cl(m),this.jet=new gt(x.get("jet"),m),this.jet.name="jet",this.jet.castShadow=!0,this.jet.position.set(d.x-le.origin.x,d.heightMetres,d.y-le.origin.y),this.jet.rotation.y=-d.heading,this.scene.add(o(this.jet,"actors"));for(const E of le.actors.ferries){const T=new gt(x.get("ferry"),l("actors","voxel"));T.name="ferry",T.castShadow=!0,T.receiveShadow=!0,T.position.set(E.x-le.origin.x,le.water.levelMetres,E.y-le.origin.y),T.rotation.y=-E.heading,this.scene.add(o(T,"actors"))}const y=le.actors.carModels.map(E=>`car${E}`),w=[];let M=0;for(const E of le.actors.carRoads){const T=e.carPaths.filter(P=>P.name===E).map(P=>({p:P,len:rS(P)})).sort((P,L)=>L.len-P.len).slice(0,le.actors.carsPerRoad);for(const{p:P}of T)w.push({p:P,model:M++%y.length})}y.forEach((E,T)=>{const P=w.filter(C=>C.model===T);if(!P.length)return;const L=new Gn(x.get(E),l("actors","voxel"),P.length);L.name=`cars ${E}`,L.castShadow=!0,L.frustumCulled=!1,this.scene.add(o(L,"actors")),this.carMeshes.push(L);const D=[{im:L,voxel:_.get(E)??0}];for(let C=2;x.has(`${E} L${C}`);C++){const N=new Gn(x.get(`${E} L${C}`),l("actors","voxel"),P.length);N.name=`cars ${E} L${C}`,N.castShadow=!0,N.frustumCulled=!1,N.count=0,this.scene.add(o(N,"actors")),this.carMeshes.push(N),D.push({im:N,voxel:_.get(`${E} L${C}`)??0})}D.length>1&&this.carLevels.set(L,D),P.forEach(({p:C},N)=>{const k=zo(C);this.cars.push({obj:L,slot:N,m:new rt,pos:new H,path:C,cum:k,s:k[k.length-1]*le.actors.carStartShare})})}),this.carMeshes.forEach((E,T)=>this.carSlot.set(E,T)),this.carCount=new Int32Array(this.carMeshes.length),this.walkerMaterial=l("actors",t.gameWalker?"walker":"part");const v=a("actors");t.gameWalker&&v.makeWalkerDissolve&&(this.walkerDissolve=v.makeWalkerDissolve()),this.walker=new or(this.walkerMaterial);const S=le.actors.walker;this.ground=new iS(e.groundGrid),this.walkerStart.set(S.x-le.origin.x,0,S.y-le.origin.y),this.walkerHeading=S.heading;let g=null;for(const E of e.carPaths){if(E.name!==S.street)continue;const T=zo(E);for(let P=0;P+1<E.pts.length/3;P++){const L=E.pts[P*3],D=E.pts[P*3+2],C=E.pts[P*3+3],N=E.pts[P*3+5],k=C-L,U=N-D,Y=k*k+U*U||1,O=Math.max(0,Math.min(1,((this.walkerStart.x-L)*k+(this.walkerStart.z-D)*U)/Y)),V=Math.hypot(L+k*O-this.walkerStart.x,D+U*O-this.walkerStart.z);(!g||V<g.d)&&(g={p:E,d:V,s:T[P]+O*(T[P+1]-T[P])})}}if(g){const E=zo(g.p),T=new kt;Ho(T,g.p,E,Math.min(E[E.length-1],g.s+.5));const P=Math.cos(-T.rotation.y-S.heading)>0;this.walkerPath={p:g.p,cum:E,s0:g.s,dir:P?1:-1}}this.scene.add(o(this.walker.root,"actors")),u("walker",this.walker.triangles),this.actorCull&&le.opt.actors.walkerLowOn&&(this.walkerLow=hM(this.walkerMaterial),this.walkerLow.root.name="walker low",this.walkerLow.root.visible=!1,this.scene.add(o(this.walkerLow.root,"actors")),u("walker low",this.walkerLow.triangles));const b={};for(const E of e.instances)b[E.kind]=E.count,E.count&&(E.kind==="tree"&&zn("trees")&&le.look.mix.near==="pixel"?this.treesS1(E.data,E.count,l("near","crown"),l("near","trunk"),o,u):E.kind==="tree"?this.trees(E.data,E.count,l("near","crown"),l("near","trunk"),o,u):this.lamps(E.data,E.count,l("near","lampPole"),l("near","lampHead"),l("near","lampPool"),o,u));if(this.stats={meshes:f,triangles:c,instances:b,uploadMs:performance.now()-i},this.update(0),Xe.frameWork.freezeStatic){this.scene.updateMatrixWorld();for(const E of this.still)tS(E);this.frozen=this.still}}get stillObjects(){return this.frozen}get frameWorkActs(){return{treeSlots:!!this.treeS1&&this.treeS1.nearCrowns.count>0,facingCache:this.farFaced.length+this.voxFaced.length>0}}setLandmarkVariant(e){this.landmarkGroups.voxel.visible=e==="voxel",this.landmarkGroups.smooth.visible=e==="smooth"}trees(e,t,i,s,r,a){const l=le.props,o=(w,M,v,S)=>{const g=new Aa(1,l.treeDetail);g.deleteAttribute("normal"),g.deleteAttribute("uv");const b=Bu(g);return b.computeVertexNormals(),b.scale(S,S,S),b.translate(w,M,v),b};this.crownNear=Ol(l.treeLobes.map(([w,M,v,S])=>o(w,M,v,S))),this.crownFar=o(0,0,0,1);const c=new sr(l.treeTrunkRadiusMetres*l.trunkTaper,l.treeTrunkRadiusMetres,1,l.trunkSegments,1,!0);c.translate(0,.5,0);const u=le.blockChunks*320,f=new Map;for(let w=0;w<t;w++){const M=w*ia,v=`${Math.floor((e[M]+le.origin.x)/u)},${Math.floor((e[M+2]+le.origin.y)/u)}`;let S=f.get(v);S||f.set(v,S=[]),S.push(w)}const h=new rt,p=new ei,x=new H,_=new H,d=new Ge,m=new H(0,1,0);for(const[w,M]of f){const v=new Gn(this.crownNear,i,M.length),S=new Gn(c,s,M.length);M.forEach((g,b)=>{const E=g*ia,T=e[E+3],P=e[E+4],L=e[E+5],D=e[E+6],C=P*l.treeTrunkShare,N=T/2,k=Math.max(N*l.crownMinHeightShare,(P-C)/2);p.setFromAxisAngle(m,L),h.compose(x.set(e[E],e[E+1]+C+k*l.crownSeat,e[E+2]),p,_.set(N,k,N)),v.setMatrixAt(b,h),v.setColorAt(b,d.setHex(l.treeColours[Math.floor(D*l.treeColours.length)%l.treeColours.length])),h.compose(x.set(e[E],e[E+1],e[E+2]),p,_.set(1,C+k*l.trunkIntoCrown,1)),S.setMatrixAt(b,h)});for(const g of[v,S])g.castShadow=!0,g.receiveShadow=!0,g.computeBoundingSphere(),this.scene.add(r(g,"near")),this.still.push(g);v.name=`tree crowns ${w}`,S.name=`tree trunks ${w}`,this.treeBlocks.push(v)}const y=w=>(w.index?w.index.count:w.getAttribute("position").count)/3;a("trees (near crowns)",t*(y(this.crownNear)+y(c)))}treesS1(e,t,i,s,r,a){const l=le.props,o=(z,J,se,X)=>{const F=new Aa(1,l.treeDetail);F.deleteAttribute("normal"),F.deleteAttribute("uv");const ee=Bu(F);return ee.computeVertexNormals(),ee.scale(X,X,X),ee.translate(z,J,se),ee};this.crownNear=Ol(l.treeLobes.map(([z,J,se,X])=>o(z,J,se,X)));const c=new sr(l.treeTrunkRadiusMetres*l.trunkTaper,l.treeTrunkRadiusMetres,1,l.trunkSegments,1,!0);c.translate(0,.5,0);const u=new Float32Array(t*16),f=new Float32Array(t*16),h=new Float32Array(t*3),p=new Float32Array(t*3),x=new Float32Array(t),_=new Float32Array(t*4),d=new Float32Array(t*4),m=new Float32Array(t*4),y=new rt,w=new ei,M=new H,v=new H,S=new Ge,g=new H(0,1,0),b=Math.max(...l.treeLobes.map(([z,,J,se])=>Math.hypot(z,J)+se)),E=Math.max(...l.treeLobes.map(([,z,,J])=>z+J));for(let z=0;z<t;z++){const J=z*ia,se=e[J+3],X=e[J+4],F=e[J+5],ee=e[J+6],ce=X*l.treeTrunkShare,ue=se/2,xe=Math.max(ue*l.crownMinHeightShare,(X-ce)/2),Le=ce+xe*l.crownSeat,$=ce+xe*l.trunkIntoCrown;w.setFromAxisAngle(g,F),y.compose(M.set(e[J],e[J+1]+Le,e[J+2]),w,v.set(ue,xe,ue)),y.toArray(u,z*16),y.compose(M.set(e[J],e[J+1],e[J+2]),w,v.set(1,$,1)),y.toArray(f,z*16),S.setHex(l.treeColours[Math.floor(ee*l.treeColours.length)%l.treeColours.length]),h.set([S.r,S.g,S.b],z*3);const ge=Le+xe*E,Re=ue*b+l.treeTrunkRadiusMetres,De=ge/2,Ve=Math.hypot(ge/2,Re);p.set([e[J],e[J+1]+De,e[J+2]],z*3),x[z]=Ve,_.set([e[J],e[J+1],e[J+2],F],z*4),d.set([ue,xe,Le,$],z*4),m.set([De,Ve,0,0],z*4)}const T=(z,J,se)=>{const X=new Gn(z,J,t);return X.count=0,X.frustumCulled=!1,X.name=se,X.setColorAt(0,S.setRGB(1,1,1)),X},P=T(this.crownNear,i,"tree crowns near"),L=T(c,s,"tree trunks near");ra(P.instanceMatrix),ra(P.instanceColor),ra(L.instanceMatrix),ra(L.instanceColor);const D=Math.max(1,le.opt.shadow.spreadOn?le.opt.shadow.buildFrames:1),C=Math.ceil(t/D)+1,N=[],k=[];for(let z=0;z<D;z++){const J=new Gn(this.crownNear,i,C),se=new Gn(c,s,C);J.name="tree crowns casters",se.name="tree trunks casters";for(const X of[J,se])X.count=0,X.frustumCulled=!1,X.setColorAt(0,S.setRGB(1,1,1)),X.castShadow=!0,X.receiveShadow=!1,X.visible=!1,X.userData.buildGroup=z,X.layers.set(Il),this.scene.add(X);N.push(J),k.push(se)}for(const z of[P,L])z.castShadow=!1,z.receiveShadow=!0,this.scene.add(r(z,"near"));const U=new Oh;U.setAttribute("position",new Tt([-1,-1,0,1,-1,0,1,1,0,-1,1,0],3)),U.setAttribute("normal",new Tt([0,0,1,0,0,1,0,0,1,0,0,1],3)),U.setIndex([0,1,2,0,2,3]),U.setAttribute("iBase",new es(_,4)),U.setAttribute("iShape",new es(d,4)),U.setAttribute("iSphere",new es(m,4)),U.setAttribute("iColour",new es(h,3)),U.instanceCount=t;const Y=this.looks.get("pixel"),O=c.getAttribute("position").array,V=c.getAttribute("normal").array,q=Y.treeImpostorMaterial({crownPos:this.crownNear.getAttribute("position").array,crownIdx:this.crownNear.index.array,lobeCentres:l.treeLobes.map(([z,J,se])=>[z,J,se]),trunkPos:O,trunkNrm:V,trunkSegments:l.trunkSegments}),ne=new gt(U,q);ne.name="tree impostors",ne.frustumCulled=!1,ne.castShadow=!1,ne.receiveShadow=!0,this.scene.add(r(ne,"near")),ma.uMeshMetres.value=le.opt.trees.meshMetres,ma.uOverlap.value=le.opt.trees.overlapMetres,this.treeS1={n:t,crownM:u,trunkM:f,colour:h,centre:p,radius:x,nearCrowns:P,nearTrunks:L,castCrowns:N,castTrunks:k,impostor:ne,nearSlot:new Int32Array(t).fill(-1)},this.still.push(P,L,...N,...k,ne);const fe=z=>(z.index?z.index.count:z.getAttribute("position").count)/3;a("trees (mesh, each)",fe(this.crownNear)+fe(c)),a("trees (impostor, each)",2)}treeInto(e,t,i,s){const r=this.treeS1,a=e.instanceMatrix.array,l=t.instanceMatrix.array,o=e.instanceColor.array,c=i*16,u=s*16;for(let f=0;f<16;f++)a[u+f]=r.crownM[c+f],l[u+f]=r.trunkM[c+f];o[s*3]=r.colour[i*3],o[s*3+1]=r.colour[i*3+1],o[s*3+2]=r.colour[i*3+2]}treeCasters(e){const t=this.treeS1;if(!t)return;const i=new H,s=t.castCrowns.length,r=new Array(s).fill(0);let a=0;for(let l=0;l<t.n;l++){if(i.fromArray(t.centre,l*3),!e(i,t.radius[l]))continue;const o=a++%s;this.treeInto(t.castCrowns[o],t.castTrunks[o],l,r[o]++)}for(let l=0;l<s;l++)for(const o of[t.castCrowns[l],t.castTrunks[l]])o.count=r[l],o.visible=r[l]>0,o.instanceMatrix.needsUpdate=!0,o.instanceColor&&(o.instanceColor.needsUpdate=!0)}farFacings(e){if(this.voxFacings(e),!this.farFaced.length)return;const t=Xe.frameWork.facingCache,i=e.isOrthographicCamera===!0;e.updateMatrixWorld();const s=e.matrixWorld.elements,r=s[12],a=s[14],l=-s[8],o=-s[10],c=1;for(const u of this.farFaced){const f=u.box,h=i?(o>-1e-4?1:0)|(l<1e-4?2:0)|(o<1e-4?4:0)|(l>-1e-4?8:0):(a<f.max.z+c?1:0)|(r>f.min.x-c?2:0)|(a>f.min.z-c?4:0)|(r<f.max.x+c?8:0);if(t&&h===u.shown)continue;u.shown=h;const p=u.mesh.geometry;p.clearGroups();const x=u.ranges;let _=x[0],d=x[1];for(let m=0;m<4;m++)h&1<<m&&(x[m+1]===d||(d>_&&p.addGroup(_,d-_,0),_=x[m+1]),d=x[m+2]);d>_&&p.addGroup(_,d-_,0)}}voxFacings(e){if(!this.voxFaced.length)return;const t=Xe.frameWork.facingCache,i=e.isOrthographicCamera===!0;e.updateMatrixWorld();const s=e.matrixWorld.elements,r=this.facingEye.set(s[12],s[13],s[14]),a=this.facingBack.set(s[8],s[9],s[10]),l=this.facingCorner;for(const o of this.voxFaced){if(!o.lo){o.lo=new Float64Array(o.dirs.length);for(let p=0;p<o.dirs.length;p++){const x=o.dirs[p];let _=1/0;for(let d=0;d<8;d++)l.set(d&1?o.box.max.x:o.box.min.x,d&2?o.box.max.y:o.box.min.y,d&4?o.box.max.z:o.box.min.z),_=Math.min(_,x.dot(l));o.lo[p]=_}}let c=!o.built||!t;for(let p=0;p<o.dirs.length;p++){const x=o.dirs[p],_=(i?x.dot(a)>-.001:x.dot(r)>o.lo[p]-1)?1:0;o.shown[p]!==_&&(o.shown[p]=_,c=!0)}if(!c)continue;o.built=!0;const u=o.mesh.geometry;u.clearGroups();let f=-1,h=-1;for(let p=0;p<o.dirs.length;p++)!o.shown[p]||o.ranges[p+1]===o.ranges[p]||(o.ranges[p]===h||(h>f&&u.addGroup(f,h-f,0),f=o.ranges[p]),h=o.ranges[p+1]);h>f&&u.addGroup(f,h-f,0)}}setWaterGrid(e,t){if(this.waterGrid.visible=e,this.waterPlane.visible=!e,!e||!t)return;const i=$M(t,QM),s=this.waterGrid;s.position.x===i.x&&s.position.z===i.z||(s.position.set(i.x,0,i.z),s.updateMatrix(),s.matrixWorld.copy(s.matrix))}cullActors(e,t,i,s,r=null){if(!this.actorCull)return;e.updateMatrixWorld(),this.frustum.setFromProjectionMatrix(this.tmpM.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse));const a=this.carCount;a.fill(0);for(const o of this.cars){const c=le.opt.actors.cullMarginMetres+2*t(o.pos);if(this.sph.center.copy(o.pos),this.sph.radius=c,!(r&&r.on?r.intersectsSphere(o.pos.x,o.pos.y,o.pos.z,c):this.frustum.intersectsSphere(this.sph))&&!(i&&i(o.pos,c)))continue;let f=o.obj;const h=this.carLevels.get(o.obj);if(h&&zn("carLevels")){const x=le.opt.carLevels.maxErrorPx*t(o.pos);for(const _ of h)_.voxel<=x&&(f=_.im)}const p=this.carSlot.get(f);f.setMatrixAt(a[p],o.m),a[p]++}for(let o=0;o<this.carMeshes.length;o++){const c=this.carMeshes[o];c.count=a[o],c.visible=c.count>0,c.instanceMatrix.needsUpdate=!0}const l=this.walkerLow;if(l){const o=this.walker.root,c=1.8/Math.max(1e-6,t(o.position)),u=!s&&c<le.opt.actors.walkerLowPx;l.root.visible=u,o.visible=!u,u&&(l.root.position.copy(o.position),l.root.rotation.copy(o.rotation))}}treeLod(e){const t=this.treeS1;if(t){ma.uLodEye.value.copy(e);const i=le.opt.trees.meshMetres,s=i*i,r=t.nearSlot;if(!Xe.frameWork.treeSlots){let c=0;for(let u=0;u<t.n;u++){const f=t.centre[u*3]-e.x,h=t.centre[u*3+1]-e.y,p=t.centre[u*3+2]-e.z;f*f+h*h+p*p>s||(r[c]=u,this.treeInto(t.nearCrowns,t.nearTrunks,u,c++))}sa(t.nearCrowns.instanceMatrix),sa(t.nearCrowns.instanceColor),sa(t.nearTrunks.instanceMatrix),sa(t.nearTrunks.instanceColor),t.nearCrowns.count=c,t.nearCrowns.visible=c>0,t.nearTrunks.count=c,t.nearTrunks.visible=c>0;return}let a=0,l=-1,o=-1;for(let c=0;c<t.n;c++){const u=t.centre[c*3]-e.x,f=t.centre[c*3+1]-e.y,h=t.centre[c*3+2]-e.z;u*u+f*f+h*h>s||(r[a]!==c&&(r[a]=c,this.treeInto(t.nearCrowns,t.nearTrunks,c,a),l<0&&(l=a),o=a+1),a++)}l>=0&&(ko(t.nearCrowns.instanceMatrix,l,o),ko(t.nearTrunks.instanceMatrix,l,o),ko(t.nearCrowns.instanceColor,l,o)),t.nearCrowns.count=a,t.nearCrowns.visible=a>0,t.nearTrunks.count=a,t.nearTrunks.visible=a>0;return}for(const i of this.treeBlocks){const s=i.boundingSphere,a=(s?Math.max(0,s.center.distanceTo(e)-s.radius):0)>le.props.treeLodMetres;i.geometry=a?this.crownFar:this.crownNear,i.castShadow=!a}}lamps(e,t,i,s,r,a,l){const o=le.props,c=new sr(o.lampRadiusMetres,o.lampRadiusMetres*o.lampPoleTaper,1,6);c.translate(0,.5,0);const u=new Ql(.5,o.lampHeadDetail),f=new rs(1,1);f.rotateX(-Math.PI/2);const h=new Gn(c,i,t),p=new Gn(u,s,t),x=new Gn(f,r,t),_=new rt,d=new ei,m=new H,y=new H;for(let w=0;w<t;w++){const M=w*ia,v=e[M+4],S=e[M+3];_.compose(m.set(e[M],e[M+1],e[M+2]),d,y.set(1,v,1)),h.setMatrixAt(w,_),_.compose(m.set(e[M],e[M+1]+v,e[M+2]),d,y.set(S,S*o.lampHeadSquash,S)),p.setMatrixAt(w,_),_.compose(m.set(e[M],e[M+1]+o.lampPoolLiftMetres,e[M+2]),d,y.set(o.lampPoolMetres*2,1,o.lampPoolMetres*2)),x.setMatrixAt(w,_)}for(const w of[h,p,x])w.computeBoundingSphere(),this.scene.add(a(w,"near")),this.still.push(w);h.castShadow=!0,h.name="lamp poles",p.name="lamp heads",x.name="lamp pools",l("lamps",t*(c.index.count/3+u.getAttribute("position").count/3+2))}update(e){for(const o of this.cars){const c=o.cum[o.cum.length-1],u=(o.s+e*le.actors.carSpeedMps)%c;Ho(this.tmpO,o.path,o.cum,u),this.tmpO.updateMatrix(),o.m.copy(this.tmpO.matrix),o.pos.copy(this.tmpO.position),this.actorCull||o.obj.setMatrixAt(o.slot,this.tmpO.matrix)}if(!this.actorCull)for(const o of this.carMeshes)o.instanceMatrix.needsUpdate=!0;const t=this.gait>le.actors.runFromGait?le.actors.runSpeedMps:le.actors.walkSpeedMps,i=this.walkerPath,s=i?i.dir>0?i.cum[i.cum.length-1]-i.s0:i.s0:le.actors.walkLoopMetres;this.walkerDist=e*t%Math.max(1,Math.min(le.actors.walkLoopMetres,s)),this.walkerPhase=this.walkerDist/or.strideMetres(this.gait)%1;let r,a;if(i)Ho(this.tmpO,i.p,i.cum,i.s0+i.dir*this.walkerDist),r=this.tmpO.position.x,a=this.tmpO.position.z,this.walkerHeading=-this.tmpO.rotation.y+(i.dir>0?0:Math.PI);else{const o=Math.sin(this.walkerHeading),c=-Math.cos(this.walkerHeading);r=this.walkerStart.x+o*this.walkerDist,a=this.walkerStart.z+c*this.walkerDist}this.walker.root.position.set(r,this.ground.at(r,a)+le.actors.walkerLiftMetres,a),this.walker.root.rotation.y=-this.walkerHeading;const l=or.cycle(this.walkerPhase,this.gait);this.walker.pose(l),this.walkerLow?.pose(l)}}function rS(n){let e=0;for(let t=3;t<n.pts.length;t+=3)e+=Math.hypot(n.pts[t]-n.pts[t-3],n.pts[t+2]-n.pts[t-1]);return e}function zo(n){const e=n.pts.length/3,t=new Float32Array(e);for(let i=1;i<e;i++)t[i]=t[i-1]+Math.hypot(n.pts[i*3]-n.pts[i*3-3],n.pts[i*3+2]-n.pts[i*3-1]);return t}function Ho(n,e,t,i){let s=1;for(;s<t.length-1&&t[s]<i;)s++;const r=s-1,a=(i-t[r])/Math.max(1e-6,t[s]-t[r]),l=e.pts,o=l[r*3]+(l[s*3]-l[r*3])*a,c=l[r*3+1]+(l[s*3+1]-l[r*3+1])*a,u=l[r*3+2]+(l[s*3+2]-l[r*3+2])*a;n.position.set(o,c,u);const f=l[s*3]-l[r*3],h=l[s*3+2]-l[r*3+2];n.rotation.y=Math.atan2(-f,-h)}const Nt=le.plain,Nf=new Set([ir,hd]),kl=new WeakSet;function Ff(n){const e=n.shadowMap;if(kl.has(e))return;kl.add(e);const t=e.render,i=n.state.buffers.color,s=new Set;let r=n.renderBufferDirect,a=n.clear;const l=f=>{s.delete(f.target)},o=(f,h,p,x,_,d)=>{x.isMeshDepthMaterial===!0&&x!==_.customDepthMaterial&&(x.colorWrite=!1,s.has(x)||(s.add(x),x.addEventListener("dispose",l))),r.call(n,f,h,p,x,_,d)},c=(f=!0,h=!0,p=!0)=>{f&&i.setMask(!0),a.call(n,f,h,p)};let u=0;e.render=function(f,h,p){if(u>0||!e.enabled||!e.autoUpdate&&!e.needsUpdate||f.length===0){t.call(this,f,h,p);return}if(!Xe.look.shadowDepthOnly||!Nf.has(e.type)){for(const x of s)x.colorWrite=!0;s.clear(),t.call(this,f,h,p);return}r=n.renderBufferDirect,a=n.clear,i.setMask(!0),n.renderBufferDirect=o,n.clear=c,u++;try{t.call(this,f,h,p)}finally{n.renderBufferDirect=r,n.clear=a,u--}}}const Ju=n=>Xe.look.shadowDepthOnly&&Nf.has(n.shadowMap.type)&&kl.has(n.shadowMap);class aS{tod=sd();sun=new go(16777215,1);hemi=new Cp(16777215,16777215,1);fog=new Zl(16777215,1e3,1e4);sky;skyMat;lightDir=new H;sunMoving=null;cache={valid:!1,centre:new H,half:0,dir:new H,redraws:0,oneFrame:0,rebuilds:0};sunBuild=null;build=null;casters=null;buildScene=new Ds;buildCam=new Os;renderer=null;scene=null;buildTriangles=0;lastFocus=new H;hasLastFocus=!1;prevFocus=new H;onStaticBox=null;lx=new H;ly=new H;lightAxes=[this.lx,this.ly];focusV=new H;offsetV=new H;leadV=new H;stepV=new H;probeV=new H;savedDir=new H;wasCasting=[];ambLinear=[0,0,0];sunLinear=[0,0,0];constructor(e){if(this.sun.castShadow=!0,this.sun.shadow.mapSize.set(Nt.shadowMapSize,Nt.shadowMapSize),this.sun.shadow.bias=Nt.shadowBias,this.sun.shadow.camera.layers.enableAll(),zn("shadow")){this.sun.shadow.camera.layers.mask=12|1<<Il,this.sun.shadow.autoUpdate=!1;const t=new go(16777215,0);if(t.castShadow=!0,t.shadow.mapSize.set(Nt.shadowMapSize,Nt.shadowMapSize),t.shadow.bias=Nt.shadowBias,t.shadow.camera.layers.mask=16,t.layers.enableAll(),this.sunMoving=t,le.opt.shadow.spreadOn){const i=new go(16777215,0);i.castShadow=!0,i.shadow.mapSize.set(Nt.shadowMapSize,Nt.shadowMapSize),i.shadow.bias=Nt.shadowBias,i.shadow.autoUpdate=!1,i.shadow.camera.layers.mask=this.sun.shadow.camera.layers.mask,this.sunBuild=i,this.buildScene.add(i,i.target)}}this.scene=e,this.sun.layers.enableAll(),this.hemi.layers.enableAll(),e.add(this.sun,this.sun.target,this.hemi),this.sunMoving&&e.add(this.sunMoving,this.sunMoving.target),e.fog=this.fog,this.skyMat=new cn({uniforms:{uZenith:{value:new Ge},uMid:{value:new Ge},uHorizon:{value:new Ge},uMidShare:{value:Nt.skyMidShare}},vertexShader:"varying vec3 vDir; void main() { vDir = normalize(position); vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0); gl_Position = p.xyww; }",fragmentShader:`uniform vec3 uZenith; uniform vec3 uMid; uniform vec3 uHorizon; uniform float uMidShare; varying vec3 vDir;
        void main() { float e = clamp(vDir.y, 0.0, 1.0); vec3 c = e < uMidShare ? mix(uHorizon, uMid, e / uMidShare) : mix(uMid, uZenith, (e - uMidShare) / (1.0 - uMidShare));
          gl_FragColor = vec4(c, 1.0);
          #include <colorspace_fragment>
        }`,side:gn,depthWrite:!1,depthTest:!1,fog:!1}),this.sky=new gt(new ec(1,24,12),this.skyMat),this.sky.name="sky",this.sky.frustumCulled=!1,this.sky.renderOrder=-1e3,e.add(this.sky)}setHour(e,t){const i=this.tod;rd(i,e);const s=Nt.gamma;this.lightDir.set(i.lightDir[0],i.lightDir[2],i.lightDir[1]).normalize();const r=this.ambLinear,a=this.sunLinear;for(let c=0;c<r.length;c++)r[c]=Math.pow(i.ambient[c],s)*Nt.ambientStrength,a[c]=(Math.pow(i.ambient[c]+i.sun[c],s)-Math.pow(i.ambient[c],s))*Nt.sunStrength;this.sun.color.setRGB(a[0],a[1],a[2]),this.sun.intensity=Math.PI,this.hemi.color.setRGB(r[0],r[1],r[2]),this.hemi.groundColor.setRGB(r[0]*Nt.hemiGroundShare,r[1]*Nt.hemiGroundShare,r[2]*Nt.hemiGroundShare),this.hemi.intensity=Math.PI,this.fog.color.setHex(i.haze),this.fog.near=t[0],this.fog.far=t[1],this.skyMat.uniforms.uZenith.value.setHex(i.zenith),this.skyMat.uniforms.uMid.value.setHex(i.skyMid),this.skyMat.uniforms.uHorizon.value.setHex(i.horizon),pr.uNight.value=i.night;const[l,o]=le.pixel.night.shadowOffNight;lf.skip=zn("shadow")&&le.opt.shadow.skipWhenFaded&&i.night>=o&&o>l}axes(){const e=this.lightDir;this.lx.set(0,1,0).cross(e),this.lx.lengthSq()<1e-12&&this.lx.set(1,0,0),this.lx.normalize(),this.ly.copy(e).cross(this.lx).normalize()}snapLight(e,t,i){const s=e.dot(this.lx),r=e.dot(this.ly);return i.copy(e).addScaledVector(this.lx,Math.round(s/t)*t-s).addScaledVector(this.ly,Math.round(r/t)*t-r)}place(e,t,i,s){const r=e.shadow.camera;r.left=-i,r.right=i,r.top=i,r.bottom=-i,r.near=1,r.far=i*6,r.updateProjectionMatrix(),e.shadow.mapSize.x!==s&&e.shadow.mapSize.set(s,s),e.shadow.normalBias=Nt.shadowNormalBiasTexels*(2*i/s),e.target.position.copy(t),e.position.copy(t).addScaledVector(this.lightDir,i*3),e.target.updateMatrixWorld(),e.updateMatrixWorld()}fitShadow(e,t,i){if(this.sunMoving){this.fitSplit(e,t),this.sky.position.copy(i.position),this.sky.scale.setScalar(Nt.skyRadiusMetres);return}const s=this.sun.shadow.camera;s.left=-t,s.right=t,s.top=t,s.bottom=-t,s.near=1,s.far=t*6,s.updateProjectionMatrix();const r=2*t/Nt.shadowMapSize;this.sun.shadow.normalBias=Nt.shadowNormalBiasTexels*r;const a=Math.round(e.x/r)*r,l=Math.round(e.z/r)*r;if(this.sun.target.position.set(a,e.y,l),this.sun.position.set(a+this.lightDir.x*t*3,e.y+this.lightDir.y*t*3,l+this.lightDir.z*t*3),this.sun.target.updateMatrixWorld(),this.sun.updateMatrixWorld(),this.onStaticBox&&(this.cache.centre.x!==a||this.cache.centre.z!==l||this.cache.half!==t)){this.cache.centre.set(a,e.y,l),this.cache.half=t,this.axes();const o=this.cache.centre.clone(),c=this.lx.clone(),u=this.ly.clone();this.onStaticBox((f,h)=>{const p=f.clone().sub(o);return Math.abs(p.dot(c))<t+h&&Math.abs(p.dot(u))<t+h})}this.sky.position.copy(i.position),this.sky.scale.setScalar(Nt.skyRadiusMetres)}attach(e){this.renderer=e,Ff(e)}fitSplit(e,t){const i=le.opt.shadow,s=Nt.shadowMapSize,r=2*t/s;this.axes(),this.buildTriangles=0;const a=i.lightSpaceSnap?this.snapLight(e,r,this.focusV):this.focusV.copy(e),l=this.hasLastFocus;this.prevFocus.copy(this.lastFocus),this.lastFocus.copy(a),this.hasLastFocus=!0,this.place(this.sunMoving,a,t,s);const o=2*Math.round(s*(1+i.marginShare)/2),c=o*r/2,u=this.cache,f=this.offsetV.copy(a).sub(u.centre),h=u.valid&&Math.abs(u.half-c)<1e-6*c,p=u.valid&&u.dir.angleTo(this.lightDir)>i.sunStepRad,x=!!this.sunBuild&&!!this.renderer&&!!this.scene,_=h&&(x||!p)&&Math.abs(f.dot(this.lx))+t<=c&&Math.abs(f.dot(this.ly))+t<=c,d=this.leadV.set(0,0,0);if(h&&(d.copy(this.lx).multiplyScalar(f.dot(this.lx)).addScaledVector(this.ly,f.dot(this.ly)),d.lengthSq()>1e-6?d.normalize().multiplyScalar(Math.min(i.leadShare*t,i.leadMarginShare*Math.max(0,c-t))):d.set(0,0,0)),_){if(x)if(this.build)this.buildStep();else{const y=c-t;let w=y;for(let M=0;M<this.lightAxes.length;M++){const v=this.lightAxes[M],S=f.dot(v),g=l?this.stepV.copy(a).sub(this.prevFocus).dot(v):0;w=Math.min(w,g>1e-9?y-S:g<-1e-9?y+S:y-Math.abs(S))}if(y<=0||w<=(1-i.rebuildAtShare)*y||p){globalThis.__shdbg&&console.log("rebuild",JSON.stringify({f:a.toArray().map(Math.round),c:u.centre.toArray().map(Math.round),left:Math.round(w),margin:Math.round(y),half:t,sunTurned:p,lead:d.toArray().map(Math.round)}));const M=new H().copy(a).add(d);this.build={centre:this.snapLight(M,r,M),dir:this.lightDir.clone(),halfS:c,sizeS:o,chunk:0,group:new Map},this.buildStep()}}return}this.build=null;const m=new H().copy(a).add(d);this.snapLight(m,r,m),this.place(this.sun,m,c,o),this.sun.shadow.needsUpdate=!0,u.valid=!0,u.centre.copy(m),u.half=c,u.dir.copy(this.lightDir),u.redraws++,u.oneFrame++,this.onStaticBox?.(this.boxTest(m,c))}boxTest(e,t){const i=this.lx.clone(),s=this.ly.clone(),r=new H;return(a,l)=>(r.copy(a).sub(e),Math.abs(r.dot(i))<t+l&&Math.abs(r.dot(s))<t+l)}invalidateCasters(){this.casters=null}stillCasters(){if(this.casters)return this.casters;const e=this.sun.shadow.camera.layers,t=[];return this.scene.traverse(i=>{i.isMesh&&i.castShadow&&i.layers.test(e)&&t.push(i)}),this.casters=t}buildStep(){const e=this.build,t=this.sunBuild,i=this.renderer,s=le.opt.shadow.buildFrames,r=this.stillCasters();if(e.chunk===0){this.savedDir.copy(this.lightDir),this.lightDir.copy(e.dir),this.place(t,e.centre,e.halfS,e.sizeS),this.lightDir.copy(this.savedDir),t.shadow.updateMatrices(t),this.onStaticBox?.(this.boxTest(e.centre,e.halfS));const d=t.shadow.getFrustum(),m=new Array(s).fill(0),y=M=>{const v=M.geometry,S=(v.index?v.index.count:v.getAttribute("position").count)/3,g=M.isInstancedMesh?M.count:1;return S*g},w=[];for(const M of r){const v=M.visible?M.frustumCulled&&!M.intersectsFrustum(d)?0:y(M):0,S=M.userData.buildGroup;S!==void 0?(e.group.set(M,S%s),m[S%s]+=v):w.push([M,v])}w.sort((M,v)=>v[1]-M[1]);for(const[M,v]of w){let S=0;for(let g=1;g<s;g++)m[g]<m[S]&&(S=g);e.group.set(M,S),m[S]+=v}}const a=this.wasCasting;a.length=r.length;for(let d=0;d<r.length;d++)a[d]=r[d].castShadow,r[d].castShadow=e.group.get(r[d])===e.chunk;const l=i.shadowMap,o=l.needsUpdate,c=i.clear,u=i.autoClear,f=l.render,h=i.info.render.triangles,p=this.scene;l.needsUpdate=!0,t.shadow.needsUpdate=!0,e.chunk>0&&(i.clear=()=>{}),i.autoClear=!1,l.render=(d,m,y)=>f.call(l,d,p,y);try{i.render(this.buildScene,this.buildCam)}finally{l.render=f,i.clear=c,i.autoClear=u,l.needsUpdate=o;for(let d=0;d<r.length;d++)r[d].castShadow=a[d]}if(this.buildTriangles=i.info.render.triangles-h,e.chunk++,e.chunk<s)return;const x=this.sun.shadow.map;this.sun.shadow.map=t.shadow.map,t.shadow.map=x,this.savedDir.copy(this.lightDir),this.lightDir.copy(e.dir),this.place(this.sun,e.centre,e.halfS,e.sizeS),this.lightDir.copy(this.savedDir),this.sun.shadow.updateMatrices(this.sun);const _=this.cache;_.centre.copy(e.centre),_.half=e.halfS,_.dir.copy(e.dir),_.redraws++,_.rebuilds++,this.build=null}inMovingShadow(e,t){const i=this.sunMoving??this.sun;this.axes();const s=i.shadow.camera.right,r=this.probeV.copy(e).sub(i.target.position);return Math.abs(r.dot(this.lx))<s+t&&Math.abs(r.dot(this.ly))<s+t}get shadowRedraws(){return this.cache.redraws}get buildMapBytes(){const e=this.sunBuild?.shadow.map;return e?e.width*e.height*4*2:0}get shadowCounts(){return{redraws:this.cache.redraws,oneFrame:this.cache.oneFrame,background:this.cache.rebuilds,building:!!this.build}}}function oS(n){const e=le.smooth,t=Math.max(1,n.w),i=Math.max(1,n.h),s=Math.round(t*n.dpr),r=Math.round(i*n.dpr);let a=e.scale;e.minPerCss>0&&(a=Math.max(a,e.minPerCss/n.dpr));const l=s*r;e.maxPixels>0&&a*a*l>e.maxPixels&&(a=Math.sqrt(e.maxPixels/l));const o=Math.min(1,a);return{cssW:t,cssH:i,screenW:s,screenH:r,scale:o,drawW:Math.max(1,Math.round(s*o)),drawH:Math.max(1,Math.round(r*o))}}function lS(n=()=>performance.now()){const e={prologueMs:0,renderMs:0};let t=0,i=0;return{timings:e,start(){t=n()},mark(){i=n(),e.prologueMs=i-t},end(){e.renderMs=n()-i},idle(){e.prologueMs=0,e.renderMs=0}}}const cS={x:0,y:0,z:0},Ii={x:0,y:0,z:0},Qs={x:0,y:0,depthMetres:0,eyeMetres:0,pixelsPerMetre:0},uS={x:0,y:0},Qu=new H,eh=new H;function hS(n,e,t){let i=0;for(let s=0;s<t;s++)e[s]&&n.drawn(s)&&i++;return i}function pS(n){OM();let e=!1;const t=$=>{e||(e=!0,n.onFailure?n.onFailure($):n.log(`flyby: ${$}`))},i=new Tv({canvas:n.canvas,context:n.gl,antialias:!1,powerPreference:"high-performance",depth:!1});i.info.autoReset=!1,i.shadowMap.enabled=!0,i.debug.checkShaderErrors=!0,i.debug.onShaderError=($,ge)=>{const Re=$.getProgramInfoLog(ge)??"";t(`a shader did not link${Re?` (${Re.trim().slice(0,Xe.fallback.shaderLogChars)})`:""}, so the classic renderer is taking over`)};const s=new sS(n.build,{gameWalker:!0}),r=new aS(s.scene);r.attach(i),r.onStaticBox=$=>s.treeCasters($);let a=!1;Cf(s.scene,"casters",()=>{a&&r.invalidateCasters()}),a=!0;const l=zv(),o=Nv(le.origin),c=new Qh,u=new Iv,f=j_(),h=kM(s,le.origin),p=s.looks.get("pixel"),x=H_(p.material("voxel"),le.origin,p.makeVoxel?.bind(p)),_=YM(Xe.particles.fixedPerLight*(n.aviationLights??0));s.scene.add(x.group),_.object.layers.set(Bs.actors),s.scene.add(_.object),_.fixedObject.layers.set(Bs.actors),s.scene.add(_.fixedObject);let d=null;const m=new K_,y={world:n.world,ground:null,objects:m};let w=new Uint8Array(Xe.objects.maxDrawn),M=!1,v=null,S=0,g=!!n.failSight;const b=new $v({march:($,ge,Re,De)=>{if(g)throw g=!1,new Error("forced (?gpuFail=sight)");return Xv(o,y,$,ge,Re,De?o.cpu.subShare:0)},eye:$=>{$.x=o.eye.x,$.y=o.eye.y,$.z=o.eye.z},distance:($,ge,Re)=>(ti(o.origin,o.cpu.cellMetres,$,ge,Re,Ii),Math.hypot(Ii.x-o.eye.x,Ii.y-o.eye.y,Ii.z-o.eye.z)),fault:$=>{S++,v===null&&(v=$,t($))}}),E=($,ge)=>{const Re=x.modelOf(ge);return Re||(x.skippedAt(ge)||ge<w.length&&w[ge]!==0?$.model:null)},T=$=>$<w.length?w[$]:0;let P=new Uint8Array(Xe.objects.maxDrawn),L=0,D=0;const C=new ld(n.now);let N=!1,k=null,U=0,Y=!0;n.canvas.addEventListener("webglcontextlost",$=>{$.preventDefault(),C.onLost()==="giveUp"&&(N=!0,t(C.reason()))}),n.canvas.addEventListener("webglcontextrestored",()=>{C.onRestored(),Y=!1,k=null,r.invalidateCasters(),Ff(i)});let O=1,V=1,q=1,ne=1,fe=1,z=1;const J=($,ge)=>{$===O&&ge===V||(O=$,V=ge,i.setSize(O,V,!1))},se=()=>{const $=n.cssSize(),ge=oS($);fe=ge.cssW,z=ge.cssH,wn.w=ge.screenW,wn.h=ge.screenH,wn.dpr=$.dpr,xa.scale=ge.scale,J(ge.drawW,ge.drawH)};se(),q=O,ne=V;const X=$=>{const ge=l.persp;return o.ortho?o.metresPerPixel:(eh.copy($),o.eye.distanceTo(eh)*2*Math.tan(ge.fov*Math.PI/360)/V)},F=($,ge)=>r.inMovingShadow($,ge),ee=$=>{$.update(r.tod.night),$.light?.(r.tod,f.timeSec),$.clouds?.(f.cloudShare)},ce=lS();let ue=null,xe;const Le={kind:"gpu",get width(){return q},get height(){return ne},get drawWidth(){return O},get drawHeight(){return V},get scaleX(){return fe/q},get scaleY(){return z/ne},get failure(){return v},get canvas(){return n.canvas},get gaveUp(){return C.gaveUp||N},get reason(){return C.gaveUp?C.reason():""},resize($,ge){se(),n.gridIsDrawing?(q=O,ne=V):(q=Math.max(1,Math.round($)),ne=Math.max(1,Math.round(ge)))},render($,ge){if(ue=$,xe=ge,C.lost){C.tick()==="giveUp"&&!N&&(N=!0,t(C.reason())),ce.idle(),D=0;return}if(!Y){k?n.now()-U>Xe.fallback.restoreWarmLimitSeconds&&t(`compiling the shaders again after a lost context took over ${Xe.fallback.restoreWarmLimitSeconds} s, so the classic renderer is taking over`):(U=n.now(),k=Le.prewarm().then(()=>Y=!0,Ze=>t(`compiling the shaders again after a lost context failed (${Ze instanceof Error?Ze.message:String(Ze)})`))),ce.idle(),D=0;return}ce.start();const Re=ge??n.actors?.()??null;wu(o,$.camera,O,V,$.world,f.hazeFullMetres,q,ne),tM(f,$,o),wu(o,$.camera,O,V,$.world,f.hazeFullMetres,q,ne),Cv(o),s.setWaterGrid(wi(o),o),c.set(o),ad(o.cpu,$.objects),Pv(o),kv(o,$);const De=Cu(l,o);if(P.length<$.objects.length&&(P=new Uint8Array($.objects.length*2)),P.fill(0,0,$.objects.length),h.update($,o,Re,P),L=hS(h,P,$.objects.length),s.jet.frustumCulled=!o.cpu.subOn,w.length<$.objects.length&&(w=new Uint8Array($.objects.length*2)),w.fill(0,0,$.objects.length),Re)for(const Ze of Re.poses)Ze.object>=0&&Ze.object<$.objects.length&&P[Ze.object]&&(w[Ze.object]=Ze.kind==="walker"?1:2);x.update($,o,Re,P),_.update($.particles,$.lightPool??null,o,r.tod.night,$.followParticles??0),$.street?(d||(d=aM($.world)),d.setScene($.street),y.ground=d):(y.ground=null,d?.setScene(null)),y.world=$.world,m.setFrame($.objects,o.origin,o.cpu.cellMetres,E,T,$.followObjects??0,o.cpu.snapDX,o.cpu.snapDY),M=!0,b.carryOver(),r.setHour(f.hour,f.haze),pr.uLitShare.value=f.litTower,i.info.reset(),Qu.set(f.shadowFocus.x,f.shadowFocus.y,f.shadowFocus.z),r.fitShadow(Qu,f.shadowHalf,De),s.treeLod(De.position),s.farFacings(De),s.cullActors(De,X,i.shadowMap.enabled?F:null,!1,c),h.hideUnclaimed(),Pf.object=($.followObjects??0)>0?h.drawn(0)??x.drawn(0):null,s.looks.forEach(ee);const Ve=La.n;u.lift(s.scene,o,c),ce.mark();try{f_(s.looks,i,s.scene,De)}finally{u.restore()}ce.end(),D=La.n-Ve},project($,ge){if(!M)return null;const Re=o.cpu.cellMetres;return ti(o.origin,Re,$.x,$.y,$.z,Ii),rc(o,Ii.x,Ii.y,Ii.z,Qs,ge?o.cpu.subShare:0,ge?1:0)?b.point(Qs.x*o.toGridX,Qs.y*o.toGridY,Qs.depthMetres/Re,Qs.pixelsPerMetre*Re*o.toGridY,$.x,$.y,$.z,!!ge):null},unproject($,ge){return M?Yv(o,y,$/o.toGridX,ge/o.toGridY,cS):null},warmSight($){for(const ge of $)Ro(ge)},warmMeshes($,ge=Xe.prewarm.uploadDraws){for(P_($),Bv($);bo(Number.POSITIVE_INFINITY););for(const et of $)Ro(et);if(!ge||C.lost)return 0;const Re=new Xt(Xe.prewarm.targetPx,Xe.prewarm.targetPx,{depthBuffer:!0}),De=i.getRenderTarget(),Ve=new gt(void 0,p.material("voxel"));Ve.frustumCulled=!1;const Ze=new Ds;Ze.add(Ve);let Be=0;i.setRenderTarget(Re);try{for(const et of $){const bt=yr(et);bt&&(Ve.geometry=bt.geometry,i.render(Ze,l.persp),Be++)}}finally{i.setRenderTarget(De),Re.dispose()}return Be},warmLandmarks($,ge=Xe.prewarm.uploadDraws){const Re=wf(),De=[];for(const Ve of $)Re.has(Ve)?Ro(Ve):De.push(Ve);return Le.warmMeshes(De,ge)},conform($){y_($)},capture(){if(!ue||C.lost)return new Uint8Array(0);Le.render(ue,xe);const $=n.gl,ge=$.drawingBufferWidth,Re=$.drawingBufferHeight,De=new Uint8Array(ge*Re*4);$.readPixels(0,0,ge,Re,$.RGBA,$.UNSIGNED_BYTE,De);const Ve=new Uint8Array(De.length),Ze=ge*4;for(let Be=0;Be<Re;Be++)Ve.set(De.subarray((Re-1-Be)*Ze,(Re-Be)*Ze),Be*Ze);return Ve},linkFailure(){if(C.lost)return null;const $=n.gl;for(const ge of i.info.programs??[]){const Re=ge.program;if(!Re)continue;if($.getProgramParameter(Re,$.LINK_STATUS)===!1)return ge.name??"a program"}return null},viewEye($){return M?od(o.cpu,$):!1},shimmerPlaced(){return null},followOffset(){return ef(o,uS)},get info(){return{calls:i.info.render.calls,triangles:i.info.render.triangles,objects:x.stats.drawn,fading:x.stats.fading,actors:L,walker:{unresolvedFrames:h.unresolvedFrames,unresolvedModels:xi.unresolved,oddPivot:xi.oddPivot,kneeMoved:xi.kneeMoved,liftedTwice:xi.liftedTwice},waiting:x.stats.waiting,culled:x.stats.culled,popped:x.stats.popped,particles:_.drawn,fixedPoints:_.fixedDrawn,particlesDropped:_.dropped,shadowHalf:f.shadowHalf,shadowDepthOnly:Ju(i),savingsAct:{...s.frameWorkActs,clearFinishColour:D>0,shadowDepthOnly:i.shadowMap.enabled&&Ju(i)},timings:{prologueMs:ce.timings.prologueMs,renderMs:ce.timings.renderMs},sight:{marched:b.marched,marchMs:b.spentMs,pending:b.pendingCount,objects:m.count,objectsWaiting:m.waiting,gridsQueued:X_(),faults:S},...n.debug?{meshes:L_()}:{}}},get timings(){return ce.timings},prepare($=Xe.meshes.sliceBudgetMs){const ge=bo($),Re=Nu();return ge||Re},prepareSight($=Xe.sight.occupancyBudgetMs){return Nu($)},prepareMeshes($=Xe.meshes.sliceBudgetMs){return bo($)},meshesQueued(){return D_()},async prewarm(){if(C.lost)return{programs:0};const $=i.info.programs?.length??0,ge=new Xt(Xe.prewarm.targetPx,Xe.prewarm.targetPx,{depthBuffer:!1}),Re=i.getRenderTarget(),De=l.persp,Ve=[];i.setRenderTarget(ge);try{Ve.push(i.compileAsync(s.scene,De));for(const et of x.warmMeshes())Ve.push(i.compileAsync(et,De,s.scene));for(const et of s.walker.warmMeshes([s.walkerMaterial,s.walkerDissolve]))Ve.push(i.compileAsync(et,De,s.scene));s.looks.forEach(et=>et.warmMeshes?.().forEach(bt=>Ve.push(i.compileAsync(bt,De,s.scene))))}finally{i.setRenderTarget(Re)}let Ze=()=>{};const Be=new Promise(et=>Ze=et);n.canvas.addEventListener("webglcontextlost",Ze);try{await Promise.race([Promise.all(Ve),Be])}finally{n.canvas.removeEventListener("webglcontextlost",Ze),ge.dispose()}return{programs:(i.info.programs?.length??0)-$}},debugDraw:{three:i,scene:s.scene,camera:()=>Cu(l,o),gv:o,objects:x.group,rig:s.jet,particles:_.object,walkerMark:$=>h.setMark($)},dispose(){_.dispose(),i.dispose()}};return Le}function mS(n,e=console){qd((t,i,...s)=>{n&&e[t](`three: ${i}`,...s)})}export{lS as createFrameClock,pS as createGpuRenderer,oS as drawingSize,hS as rigsClaimed,mS as routeThreeConsole};
