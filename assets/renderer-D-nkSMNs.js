import{ax as Od,ay as Gh,az as hi,aA as kd,aB as Bd,aC as hc,aD as zd,aE as Hh,aF as Wh,aG as Or,aH as co,aI as ts,aJ as uo,aK as ho,L as Gd,aL as Ta,aM as Jc,aN as gi,aO as Hd,a2 as Wd,a3 as Vd,aP as Vh,C as Oa,aQ as Xd,aR as Vr,aS as qd,aT as $d,aU as Qc,aV as Yd,a8 as jd,aW as Kd,A as Zd,aX as Jd,aY as Qd,aZ as ep,a_ as tp,a$ as np,b0 as ip,b1 as sp,b2 as rp}from"./index-1enT43OV.js";import{G as $e,P as ae,o as Kn,A as qn,a as fc,C as ap}from"./game-Bbnw1xO7.js";/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const dc="187",op=0,eu=1,lp=2,cp=0,Mr=1,up=2,xr=3,ms=0,xn=1,$n=2,Ws=0,Vs=1,ka=2,tu=3,nu=4,hp=5,zs=100,fp=101,dp=102,pp=103,mp=104,gp=200,xp=201,vp=202,_p=203,Xh=204,qh=205,Mp=206,Sp=207,yp=208,wp=209,bp=210,Ep=211,Tp=212,Ap=213,Rp=214,ml=0,Ba=1,gl=2,Rr=3,xl=4,vl=5,_l=6,Ml=7,Qa=0,Cp=1,Pp=2,Ri=0,$h=1,Yh=2,jh=3,Kh=4,Zh=5,Jh=6,Qh=7,iu="attached",Lp="detached",ef=300,js=301,Cr=302,fo=303,po=304,Ks=1e3,Ai=1001,Sl=1002,bt=1003,Dp=1004,Xr=1005,kt=1006,mo=1007,Un=1008,tn=1009,tf=1010,nf=1011,Pr=1012,pc=1013,fi=1014,Rn=1015,di=1016,mc=1017,gc=1018,Zs=1020,sf=35902,rf=35899,af=1021,of=1022,Cn=1023,$i=1026,qi=1027,Qs=1028,xc=1029,Yi=1030,vc=1031,_c=1033,Aa=33776,Ra=33777,Ca=33778,Pa=33779,yl=35840,wl=35841,bl=35842,El=35843,Tl=36196,Al=37492,Rl=37496,Cl=37488,Pl=37489,za=37490,Ll=37491,Dl=37808,Il=37809,Nl=37810,Fl=37811,Ul=37812,Ol=37813,kl=37814,Bl=37815,zl=37816,Gl=37817,Hl=37818,Wl=37819,Vl=37820,Xl=37821,ql=36492,$l=36494,Yl=36495,jl=36283,Kl=36284,Ga=36285,Zl=36286,Ip=3200,Lr=0,Np=1,Yn="",bn="srgb",Ha="srgb-linear",Wa="linear",wt="srgb",go=7680,Fp=519,Up=512,Op=513,kp=514,lf=515,Bp=516,zp=517,cf=518,uf=519,Gp=35044,Hp=35048,su="300 es",Zn=2e3,Dr=2001;function Wp(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Va(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Vp(){const n=Va("canvas");return n.style.display="block",n}const ru={};let gs=null;function Xp(n){gs=n}function au(...n){const e="THREE."+n.shift();gs?gs("log",e,...n):console.log(e,...n)}function hf(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Ye(...n){n=hf(n);const e="THREE."+n.shift();if(gs)gs("warn",e,...n);else{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function _t(...n){n=hf(n);const e="THREE."+n.shift();if(gs)gs("error",e,...n);else{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Xs(...n){const e=n.join(" ");e in ru||(ru[e]=!0,Ye(...n))}function qp(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const $p={[ml]:ml,[gl]:_l,[xl]:xl,[Rr]:vl,[Ba]:Ba,[_l]:gl,[Ml]:Ml,[vl]:Rr};class Ms{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ou=1234567;const Sr=Math.PI/180,Ir=180/Math.PI;function Ss(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(un[n&255]+un[n>>8&255]+un[n>>16&255]+un[n>>24&255]+"-"+un[e&255]+un[e>>8&255]+"-"+un[e>>16&15|64]+un[e>>24&255]+"-"+un[t&63|128]+un[t>>8&255]+"-"+un[t>>16&255]+un[t>>24&255]+un[i&255]+un[i>>8&255]+un[i>>16&255]+un[i>>24&255]).toLowerCase()}function ht(n,e,t){return Math.max(e,Math.min(t,n))}function Mc(n,e){return(n%e+e)%e}function Yp(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function jp(n,e,t){return n!==e?(t-n)/(e-n):0}function yr(n,e,t){return(1-t)*n+t*e}function Kp(n,e,t,i){return yr(n,e,1-Math.exp(-t*i))}function Zp(n,e=1){return e-Math.abs(Mc(n,e*2)-e)}function Jp(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Qp(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function em(n,e){return n+Math.floor(Math.random()*(e-n+1))}function tm(n,e){return n+Math.random()*(e-n)}function nm(n){return n*(.5-Math.random())}function im(n){n!==void 0&&(ou=n);let e=ou+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function sm(n){return n*Sr}function rm(n){return n*Ir}function am(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function om(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function ff(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function lm(n,e,t,i,s){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+i)/2),u=a((e+i)/2),f=r((e-i)/2),h=a((e-i)/2),d=r((i-e)/2),g=a((i-e)/2);switch(s){case"XYX":n.set(o*u,l*f,l*h,o*c);break;case"YZY":n.set(l*h,o*u,l*f,o*c);break;case"ZXZ":n.set(l*f,l*h,o*u,o*c);break;case"XZX":n.set(o*u,l*g,l*d,o*c);break;case"YXY":n.set(l*d,o*u,l*g,o*c);break;case"ZYZ":n.set(l*g,l*d,o*u,o*c);break;default:Ye("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Sc(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function df(n,e){if(e.constructor===Float32Array)return n;const t=Sc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/t,-1)}function pf(n,e){if(e.constructor===Float32Array)return n;const t=Sc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*t)}const lu={DEG2RAD:Sr,RAD2DEG:Ir,generateUUID:Ss,clamp:ht,euclideanModulo:Mc,mapLinear:Yp,inverseLerp:jp,lerp:yr,damp:Kp,pingpong:Zp,smoothstep:Jp,smootherstep:Qp,randInt:em,randFloat:tm,randFloatSpread:nm,seededRandom:im,degToRad:sm,radToDeg:rm,isPowerOfTwo:am,ceilPowerOfTwo:om,floorPowerOfTwo:ff,setQuaternionFromProperEuler:lm,normalize:pf,denormalize:df};class Oe{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ht(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ht(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Jn{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],c=i[s+1],u=i[s+2],f=i[s+3],h=r[a+0],d=r[a+1],g=r[a+2],M=r[a+3];if(f!==M||l!==h||c!==d||u!==g){let p=l*h+c*d+u*g+f*M;p<0&&(h=-h,d=-d,g=-g,M=-M,p=-p);let m=1-o;if(p<.9995){const y=Math.acos(p),w=Math.sin(y);m=Math.sin(m*y)/w,o=Math.sin(o*y)/w,l=l*m+h*o,c=c*m+d*o,u=u*m+g*o,f=f*m+M*o}else{l=l*m+h*o,c=c*m+d*o,u=u*m+g*o,f=f*m+M*o;const y=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=y,c*=y,u*=y,f*=y}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,s,r,a){const o=i[s],l=i[s+1],c=i[s+2],u=i[s+3],f=r[a],h=r[a+1],d=r[a+2],g=r[a+3];return e[t]=o*g+u*f+l*d-c*h,e[t+1]=l*g+u*h+c*f-o*d,e[t+2]=c*g+u*d+o*h-l*f,e[t+3]=u*g-o*f-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(s/2),f=o(r/2),h=l(i/2),d=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"YXZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"ZXY":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"ZYX":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"YZX":this._x=h*u*f+c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f-h*d*g;break;case"XZY":this._x=h*u*f-c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f+h*d*g;break;default:Ye("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=i+o+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(i>o&&i>f){const d=2*Math.sqrt(1+i-o-f);this._w=(u-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>f){const d=2*Math.sqrt(1+o-i-f);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-i-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ht(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-i*c,this._z=r*u+a*c+i*l-s*o,this._w=a*u-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class G{static{this.prototype.isVector3=!0}constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(cu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(cu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),u=2*(o*t-r*s),f=2*(r*i-a*t);return this.x=t+l*c+a*f-o*u,this.y=i+l*u+o*c-r*f,this.z=s+l*f+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this.z=ht(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this.z=ht(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ht(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return xo.copy(this).projectOnVector(e),this.sub(xo)}reflect(e){return this.sub(xo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ht(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const xo=new G,cu=new Jn;class et{static{this.prototype.isMatrix3=!0}constructor(e,t,i,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c)}set(e,t,i,s,r,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],d=i[5],g=i[8],M=s[0],p=s[3],m=s[6],y=s[1],w=s[4],_=s[7],v=s[2],S=s[5],x=s[8];return r[0]=a*M+o*y+l*v,r[3]=a*p+o*w+l*S,r[6]=a*m+o*_+l*x,r[1]=c*M+u*y+f*v,r[4]=c*p+u*w+f*S,r[7]=c*m+u*_+f*x,r[2]=h*M+d*y+g*v,r[5]=h*p+d*w+g*S,r[8]=h*m+d*_+g*x,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*r*u+i*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,h=o*l-u*r,d=c*r-a*l,g=t*f+i*h+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/g;return e[0]=f*M,e[1]=(s*c-u*i)*M,e[2]=(o*i-s*a)*M,e[3]=h*M,e[4]=(u*t-s*l)*M,e[5]=(s*r-o*t)*M,e[6]=d*M,e[7]=(i*l-c*t)*M,e[8]=(a*t-i*r)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Xs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(vo.makeScale(e,t)),this}rotate(e){return Xs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(vo.makeRotation(-e)),this}translate(e,t){return Xs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(vo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const vo=new et,uu=new et().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),hu=new et().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function cm(){const n={enabled:!0,workingColorSpace:Ha,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===wt&&(s.r=Ci(s.r),s.g=Ci(s.g),s.b=Ci(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===wt&&(s.r=qs(s.r),s.g=qs(s.g),s.b=qs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Yn?Wa:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Ha]:{primaries:e,whitePoint:i,transfer:Wa,toXYZ:uu,fromXYZ:hu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:bn},outputColorSpaceConfig:{drawingBufferColorSpace:bn}},[bn]:{primaries:e,whitePoint:i,transfer:wt,toXYZ:uu,fromXYZ:hu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:bn}}}),n}const pt=cm();function Ci(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function qs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let bs;class um{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{bs===void 0&&(bs=Va("canvas")),bs.width=e.width,bs.height=e.height;const s=bs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=bs}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Va("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ci(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ci(t[i]/255)*255):t[i]=Ci(t[i]);return{data:t,width:e.width,height:e.height}}else return Ye("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let hm=0;class yc{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:hm++}),this.uuid=Ss(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(_o(s[a].image)):r.push(_o(s[a]))}else r=_o(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function _o(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?um.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ye("Texture: Unable to serialize Texture."),{})}let fm=0;const Mo=new G;class vn extends Ms{constructor(e=vn.DEFAULT_IMAGE,t=vn.DEFAULT_MAPPING,i=Ai,s=Ai,r=kt,a=Un,o=Cn,l=tn,c=vn.DEFAULT_ANISOTROPY,u=Yn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:fm++}),this.uuid=Ss(),this.name="",this.source=new yc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Oe(0,0),this.repeat=new Oe(1,1),this.center=new Oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new et,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Mo).x}get height(){return this.source.getSize(Mo).y}get depth(){return this.source.getSize(Mo).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Ye(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ye(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ef)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ks:e.x=e.x-Math.floor(e.x);break;case Ai:e.x=e.x<0?0:1;break;case Sl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ks:e.y=e.y-Math.floor(e.y);break;case Ai:e.y=e.y<0?0:1;break;case Sl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}vn.DEFAULT_IMAGE=null;vn.DEFAULT_MAPPING=ef;vn.DEFAULT_ANISOTROPY=1;class Mt{static{this.prototype.isVector4=!0}constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],g=l[9],M=l[2],p=l[6],m=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-M)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+M)<.1&&Math.abs(g+p)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(c+1)/2,_=(d+1)/2,v=(m+1)/2,S=(u+h)/4,x=(f+M)/4,b=(g+p)/4;return w>_&&w>v?w<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(w),s=S/i,r=x/i):_>v?_<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),i=S/s,r=b/s):v<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(v),i=x/r,s=b/r),this.set(i,s,r,t),this}let y=Math.sqrt((p-g)*(p-g)+(f-M)*(f-M)+(h-u)*(h-u));return Math.abs(y)<.001&&(y=1),this.x=(p-g)/y,this.y=(f-M)/y,this.z=(h-u)/y,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this.z=ht(this.z,e.z,t.z),this.w=ht(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this.z=ht(this.z,e,t),this.w=ht(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ht(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class dm extends Ms{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:kt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Mt(0,0,e,t),this.scissorTest=!1,this.viewport=new Mt(0,0,e,t),this.textures=[];const s=i.count;for(let r=0;r<s;r++)this.textures[r]=new vn({width:e,height:t,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:kt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new yc(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $t extends dm{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class mf extends vn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=bt,this.minFilter=bt,this.wrapR=Ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class pm extends vn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=bt,this.minFilter=bt,this.wrapR=Ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}class Ve{static{this.prototype.isMatrix4=!0}constructor(e,t,i,s,r,a,o,l,c,u,f,h,d,g,M,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c,u,f,h,d,g,M,p)}set(e,t,i,s,r,a,o,l,c,u,f,h,d,g,M,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=u,m[10]=f,m[14]=h,m[3]=d,m[7]=g,m[11]=M,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ve().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,s=1/Es.setFromMatrixColumn(e,0).length(),r=1/Es.setFromMatrixColumn(e,1).length(),a=1/Es.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const h=a*u,d=a*f,g=o*u,M=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=d+g*c,t[5]=h-M*c,t[9]=-o*l,t[2]=M-h*c,t[6]=g+d*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*u,d=l*f,g=c*u,M=c*f;t[0]=h+M*o,t[4]=g*o-d,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=d*o-g,t[6]=M+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*u,d=l*f,g=c*u,M=c*f;t[0]=h-M*o,t[4]=-a*f,t[8]=g+d*o,t[1]=d+g*o,t[5]=a*u,t[9]=M-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*u,d=a*f,g=o*u,M=o*f;t[0]=l*u,t[4]=g*c-d,t[8]=h*c+M,t[1]=l*f,t[5]=M*c+h,t[9]=d*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,d=a*c,g=o*l,M=o*c;t[0]=l*u,t[4]=M-h*f,t[8]=g*f+d,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=d*f+g,t[10]=h-M*f}else if(e.order==="XZY"){const h=a*l,d=a*c,g=o*l,M=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+M,t[5]=a*u,t[9]=d*f-g,t[2]=g*f-d,t[6]=o*u,t[10]=M*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(mm,e,gm)}lookAt(e,t,i){const s=this.elements;return Ln.subVectors(e,t),Ln.lengthSq()===0&&(Ln.z=1),Ln.normalize(),Fi.crossVectors(i,Ln),Fi.lengthSq()===0&&(Math.abs(i.z)===1?Ln.x+=1e-4:Ln.z+=1e-4,Ln.normalize(),Fi.crossVectors(i,Ln)),Fi.normalize(),qr.crossVectors(Ln,Fi),s[0]=Fi.x,s[4]=qr.x,s[8]=Ln.x,s[1]=Fi.y,s[5]=qr.y,s[9]=Ln.y,s[2]=Fi.z,s[6]=qr.z,s[10]=Ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],d=i[13],g=i[2],M=i[6],p=i[10],m=i[14],y=i[3],w=i[7],_=i[11],v=i[15],S=s[0],x=s[4],b=s[8],E=s[12],T=s[1],P=s[5],L=s[9],D=s[13],C=s[2],I=s[6],O=s[10],U=s[14],$=s[3],k=s[7],V=s[11],X=s[15];return r[0]=a*S+o*T+l*C+c*$,r[4]=a*x+o*P+l*I+c*k,r[8]=a*b+o*L+l*O+c*V,r[12]=a*E+o*D+l*U+c*X,r[1]=u*S+f*T+h*C+d*$,r[5]=u*x+f*P+h*I+d*k,r[9]=u*b+f*L+h*O+d*V,r[13]=u*E+f*D+h*U+d*X,r[2]=g*S+M*T+p*C+m*$,r[6]=g*x+M*P+p*I+m*k,r[10]=g*b+M*L+p*O+m*V,r[14]=g*E+M*D+p*U+m*X,r[3]=y*S+w*T+_*C+v*$,r[7]=y*x+w*P+_*I+v*k,r[11]=y*b+w*L+_*O+v*V,r[15]=y*E+w*D+_*U+v*X,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],d=e[14],g=e[3],M=e[7],p=e[11],m=e[15],y=l*d-c*h,w=o*d-c*f,_=o*h-l*f,v=a*d-c*u,S=a*h-l*u,x=a*f-o*u;return t*(M*y-p*w+m*_)-i*(g*y-p*v+m*S)+s*(g*w-M*v+m*x)-r*(g*_-M*S+p*x)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10];return t*(a*u-o*c)-i*(r*u-o*l)+s*(r*c-a*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],d=e[11],g=e[12],M=e[13],p=e[14],m=e[15],y=t*o-i*a,w=t*l-s*a,_=t*c-r*a,v=i*l-s*o,S=i*c-r*o,x=s*c-r*l,b=u*M-f*g,E=u*p-h*g,T=u*m-d*g,P=f*p-h*M,L=f*m-d*M,D=h*m-d*p,C=y*D-w*L+_*P+v*T-S*E+x*b;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/C;return e[0]=(o*D-l*L+c*P)*I,e[1]=(s*L-i*D-r*P)*I,e[2]=(M*x-p*S+m*v)*I,e[3]=(h*S-f*x-d*v)*I,e[4]=(l*T-a*D-c*E)*I,e[5]=(t*D-s*T+r*E)*I,e[6]=(p*_-g*x-m*w)*I,e[7]=(u*x-h*_+d*w)*I,e[8]=(a*L-o*T+c*b)*I,e[9]=(i*T-t*L-r*b)*I,e[10]=(g*S-M*_+m*y)*I,e[11]=(f*_-u*S-d*y)*I,e[12]=(o*E-a*P-l*b)*I,e[13]=(t*P-i*E+s*b)*I,e[14]=(M*w-g*v-p*y)*I,e[15]=(u*v-f*w+h*y)*I,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+i,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,f=o+o,h=r*c,d=r*u,g=r*f,M=a*u,p=a*f,m=o*f,y=l*c,w=l*u,_=l*f,v=i.x,S=i.y,x=i.z;return s[0]=(1-(M+m))*v,s[1]=(d+_)*v,s[2]=(g-w)*v,s[3]=0,s[4]=(d-_)*S,s[5]=(1-(h+m))*S,s[6]=(p+y)*S,s[7]=0,s[8]=(g+w)*x,s[9]=(p-y)*x,s[10]=(1-(h+M))*x,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let a=Es.set(s[0],s[1],s[2]).length();const o=Es.set(s[4],s[5],s[6]).length(),l=Es.set(s[8],s[9],s[10]).length();r<0&&(a=-a),kn.copy(this);const c=1/a,u=1/o,f=1/l;return kn.elements[0]*=c,kn.elements[1]*=c,kn.elements[2]*=c,kn.elements[4]*=u,kn.elements[5]*=u,kn.elements[6]*=u,kn.elements[8]*=f,kn.elements[9]*=f,kn.elements[10]*=f,t.setFromRotationMatrix(kn),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,s,r,a,o=Zn,l=!1){const c=this.elements,u=2*r/(t-e),f=2*r/(i-s),h=(t+e)/(t-e),d=(i+s)/(i-s);let g,M;if(l)g=r/(a-r),M=a*r/(a-r);else if(o===Zn)g=-(a+r)/(a-r),M=-2*a*r/(a-r);else if(o===Dr)g=-a/(a-r),M=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=Zn,l=!1){const c=this.elements,u=2/(t-e),f=2/(i-s),h=-(t+e)/(t-e),d=-(i+s)/(i-s);let g,M;if(l)g=1/(a-r),M=a/(a-r);else if(o===Zn)g=-2/(a-r),M=-(a+r)/(a-r);else if(o===Dr)g=-1/(a-r),M=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Es=new G,kn=new Ve,mm=new G(0,0,0),gm=new G(1,1,1),Fi=new G,qr=new G,Ln=new G,fu=new Ve,du=new Jn;class pi{constructor(e=0,t=0,i=0,s=pi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],f=s[2],h=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(ht(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ht(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(ht(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ht(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ht(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-ht(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:Ye("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return fu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(fu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return du.setFromEuler(this),this.setFromQuaternion(du,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}pi.DEFAULT_ORDER="XYZ";class gf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let xm=0;const pu=new G,Ts=new Jn,xi=new Ve,$r=new G,nr=new G,vm=new G,_m=new Jn,mu=new G(1,0,0),gu=new G(0,1,0),xu=new G(0,0,1),vu={type:"added"},Mm={type:"removed"},As={type:"childadded",child:null},So={type:"childremoved",child:null};class Vt extends Ms{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xm++}),this.uuid=Ss(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Vt.DEFAULT_UP.clone();const e=new G,t=new pi,i=new Jn,s=new G(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ve},normalMatrix:{value:new et}}),this.matrix=new Ve,this.matrixWorld=new Ve,this.matrixAutoUpdate=Vt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new gf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ts.setFromAxisAngle(e,t),this.quaternion.multiply(Ts),this}rotateOnWorldAxis(e,t){return Ts.setFromAxisAngle(e,t),this.quaternion.premultiply(Ts),this}rotateX(e){return this.rotateOnAxis(mu,e)}rotateY(e){return this.rotateOnAxis(gu,e)}rotateZ(e){return this.rotateOnAxis(xu,e)}translateOnAxis(e,t){return pu.copy(e).applyQuaternion(this.quaternion),this.position.add(pu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(mu,e)}translateY(e){return this.translateOnAxis(gu,e)}translateZ(e){return this.translateOnAxis(xu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(xi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?$r.copy(e):$r.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),nr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xi.lookAt(nr,$r,this.up):xi.lookAt($r,nr,this.up),this.quaternion.setFromRotationMatrix(xi),s&&(xi.extractRotation(s.matrixWorld),Ts.setFromRotationMatrix(xi),this.quaternion.premultiply(Ts.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(_t("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(vu),As.child=e,this.dispatchEvent(As),As.child=null):_t("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Mm),So.child=e,this.dispatchEvent(So),So.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),xi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),xi.multiply(e.parent.matrixWorld)),e.applyMatrix4(xi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(vu),As.child=e,this.dispatchEvent(As),As.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nr,e,vm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nr,_m,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),h=a(e.skeletons),d=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Vt.DEFAULT_UP=new G(0,1,0);Vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class mn extends Vt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Sm={type:"move"};class yo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new mn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new mn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new mn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const M of e.hand.values()){const p=t.getJointPose(M,i),m=this._getHandJoint(c,M);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&h>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Sm)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new mn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const xf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ui={h:0,s:0,l:0},Yr={h:0,s:0,l:0};function wo(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ue{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=bn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,pt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=pt.workingColorSpace){return this.r=e,this.g=t,this.b=i,pt.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=pt.workingColorSpace){if(e=Mc(e,1),t=ht(t,0,1),i=ht(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=wo(a,r,e+1/3),this.g=wo(a,r,e),this.b=wo(a,r,e-1/3)}return pt.colorSpaceToWorking(this,s),this}setStyle(e,t=bn){function i(r){r!==void 0&&parseFloat(r)<1&&Ye("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ye("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ye("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=bn){const i=xf[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ye("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ci(e.r),this.g=Ci(e.g),this.b=Ci(e.b),this}copyLinearToSRGB(e){return this.r=qs(e.r),this.g=qs(e.g),this.b=qs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=bn){return pt.workingToColorSpace(hn.copy(this),e),Math.round(ht(hn.r*255,0,255))*65536+Math.round(ht(hn.g*255,0,255))*256+Math.round(ht(hn.b*255,0,255))}getHexString(e=bn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=pt.workingColorSpace){pt.workingToColorSpace(hn.copy(this),t);const i=hn.r,s=hn.g,r=hn.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=pt.workingColorSpace){return pt.workingToColorSpace(hn.copy(this),t),e.r=hn.r,e.g=hn.g,e.b=hn.b,e}getStyle(e=bn){pt.workingToColorSpace(hn.copy(this),e);const t=hn.r,i=hn.g,s=hn.b;return e!==bn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Ui),this.setHSL(Ui.h+e,Ui.s+t,Ui.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ui),e.getHSL(Yr);const i=yr(Ui.h,Yr.h,t),s=yr(Ui.s,Yr.s,t),r=yr(Ui.l,Yr.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const hn=new Ue;Ue.NAMES=xf;class wc{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ue(e),this.near=t,this.far=i}clone(){return new wc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class $s extends Vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new pi,this.environmentIntensity=1,this.environmentRotation=new pi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Bn=new G,vi=new G,bo=new G,_i=new G,Rs=new G,Cs=new G,_u=new G,Eo=new G,To=new G,Ao=new G,Ro=new Mt,Co=new Mt,Po=new Mt;class jn{constructor(e=new G,t=new G,i=new G){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Bn.subVectors(e,t),s.cross(Bn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Bn.subVectors(s,t),vi.subVectors(i,t),bo.subVectors(e,t);const a=Bn.dot(Bn),o=Bn.dot(vi),l=Bn.dot(bo),c=vi.dot(vi),u=vi.dot(bo),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;const h=1/f,d=(c*l-o*u)*h,g=(a*u-o*l)*h;return r.set(1-d-g,g,d)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,_i)===null?!1:_i.x>=0&&_i.y>=0&&_i.x+_i.y<=1}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,_i)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,_i.x),l.addScaledVector(a,_i.y),l.addScaledVector(o,_i.z),l)}static getInterpolatedAttribute(e,t,i,s,r,a){return Ro.setScalar(0),Co.setScalar(0),Po.setScalar(0),Ro.fromBufferAttribute(e,t),Co.fromBufferAttribute(e,i),Po.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Ro,r.x),a.addScaledVector(Co,r.y),a.addScaledVector(Po,r.z),a}static isFrontFacing(e,t,i,s){return Bn.subVectors(i,t),vi.subVectors(e,t),Bn.cross(vi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Bn.subVectors(this.c,this.b),vi.subVectors(this.a,this.b),Bn.cross(vi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return jn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return jn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return jn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return jn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return jn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let a,o;Rs.subVectors(s,i),Cs.subVectors(r,i),Eo.subVectors(e,i);const l=Rs.dot(Eo),c=Cs.dot(Eo);if(l<=0&&c<=0)return t.copy(i);To.subVectors(e,s);const u=Rs.dot(To),f=Cs.dot(To);if(u>=0&&f<=u)return t.copy(s);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0&&l-u>0)return a=l/(l-u),t.copy(i).addScaledVector(Rs,a);Ao.subVectors(e,r);const d=Rs.dot(Ao),g=Cs.dot(Ao);if(g>=0&&d<=g)return t.copy(r);const M=d*c-l*g;if(M<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(Cs,o);const p=u*g-d*f;if(p<=0&&f-u>=0&&d-g>=0)return _u.subVectors(r,s),o=(f-u)/(f-u+(d-g)),t.copy(s).addScaledVector(_u,o);const m=1/(p+M+h);return a=M*m,o=h*m,t.copy(i).addScaledVector(Rs,a).addScaledVector(Cs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Li{constructor(e=new G(1/0,1/0,1/0),t=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(zn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(zn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=zn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,zn):zn.fromBufferAttribute(r,a),zn.applyMatrix4(e.matrixWorld),this.expandByPoint(zn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),jr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),jr.copy(i.boundingBox)),jr.applyMatrix4(e.matrixWorld),this.union(jr)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,zn),zn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ir),Kr.subVectors(this.max,ir),Ps.subVectors(e.a,ir),Ls.subVectors(e.b,ir),Ds.subVectors(e.c,ir),Oi.subVectors(Ls,Ps),ki.subVectors(Ds,Ls),ns.subVectors(Ps,Ds);let t=[0,-Oi.z,Oi.y,0,-ki.z,ki.y,0,-ns.z,ns.y,Oi.z,0,-Oi.x,ki.z,0,-ki.x,ns.z,0,-ns.x,-Oi.y,Oi.x,0,-ki.y,ki.x,0,-ns.y,ns.x,0];return!Lo(t,Ps,Ls,Ds,Kr)||(t=[1,0,0,0,1,0,0,0,1],!Lo(t,Ps,Ls,Ds,Kr))?!1:(Zr.crossVectors(Oi,ki),t=[Zr.x,Zr.y,Zr.z],Lo(t,Ps,Ls,Ds,Kr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,zn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(zn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Mi=[new G,new G,new G,new G,new G,new G,new G,new G],zn=new G,jr=new Li,Ps=new G,Ls=new G,Ds=new G,Oi=new G,ki=new G,ns=new G,ir=new G,Kr=new G,Zr=new G,is=new G;function Lo(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){is.fromArray(n,r);const o=s.x*Math.abs(is.x)+s.y*Math.abs(is.y)+s.z*Math.abs(is.z),l=e.dot(is),c=t.dot(is),u=i.dot(is);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Ht=new G,Jr=new Oe;let ym=0;class tt extends Ms{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ym++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Gp,this.updateRanges=[],this.gpuType=Rn,this.version=0,this._normalizationScale=e!==void 0?Sc(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Jr.fromBufferAttribute(this,t),Jr.applyMatrix3(e),this.setXY(t,Jr.x,Jr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ht.fromBufferAttribute(this,t),Ht.applyMatrix3(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ht.fromBufferAttribute(this,t),Ht.applyMatrix4(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ht.fromBufferAttribute(this,t),Ht.applyNormalMatrix(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ht.fromBufferAttribute(this,t),Ht.transformDirection(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):df(e,this.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):pf(e,this.array)}}class vf extends tt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class _f extends tt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Lt extends tt{constructor(e,t,i){super(new Float32Array(e),t,i)}}const wm=new Li,sr=new G,Do=new G;class Pn{constructor(e=new G,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):wm.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;sr.subVectors(e,this.center);const t=sr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(sr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Do.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(sr.copy(e.center).add(Do)),this.expandByPoint(sr.copy(e.center).sub(Do))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let bm=0;const Fn=new Ve,Io=new Vt,Is=new G,Dn=new Li,rr=new Li,Jt=new G;class Dt extends Ms{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bm++}),this.uuid=Ss(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Wp(e)?_f:vf)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new et().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Fn.makeRotationFromQuaternion(e),this.applyMatrix4(Fn),this}rotateX(e){return Fn.makeRotationX(e),this.applyMatrix4(Fn),this}rotateY(e){return Fn.makeRotationY(e),this.applyMatrix4(Fn),this}rotateZ(e){return Fn.makeRotationZ(e),this.applyMatrix4(Fn),this}translate(e,t,i){return Fn.makeTranslation(e,t,i),this.applyMatrix4(Fn),this}scale(e,t,i){return Fn.makeScale(e,t,i),this.applyMatrix4(Fn),this}lookAt(e){return Io.lookAt(e),Io.updateMatrix(),this.applyMatrix4(Io.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Is).negate(),this.translate(Is.x,Is.y,Is.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Lt(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ye("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Li);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){_t("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];Dn.setFromBufferAttribute(r),this.morphTargetsRelative?(Jt.addVectors(this.boundingBox.min,Dn.min),this.boundingBox.expandByPoint(Jt),Jt.addVectors(this.boundingBox.max,Dn.max),this.boundingBox.expandByPoint(Jt)):(this.boundingBox.expandByPoint(Dn.min),this.boundingBox.expandByPoint(Dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&_t('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){_t("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(e){const i=this.boundingSphere.center;if(Dn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];rr.setFromBufferAttribute(o),this.morphTargetsRelative?(Jt.addVectors(Dn.min,rr.min),Dn.expandByPoint(Jt),Jt.addVectors(Dn.max,rr.max),Dn.expandByPoint(Jt)):(Dn.expandByPoint(rr.min),Dn.expandByPoint(rr.max))}Dn.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)Jt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Jt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Jt.fromBufferAttribute(o,c),l&&(Is.fromBufferAttribute(e,c),Jt.add(Is)),s=Math.max(s,i.distanceToSquared(Jt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&_t('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){_t("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new tt(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],l=[],c=new Uint8Array(i.count);for(let E=0;E<i.count;E++)o[E]=new G,l[E]=new G;const u=new G,f=new G,h=new G,d=new Oe,g=new Oe,M=new Oe,p=new G,m=new G;function y(E,T,P){c[E]=c[T]=c[P]=1,u.fromBufferAttribute(i,E),f.fromBufferAttribute(i,T),h.fromBufferAttribute(i,P),d.fromBufferAttribute(r,E),g.fromBufferAttribute(r,T),M.fromBufferAttribute(r,P),f.sub(u),h.sub(u),g.sub(d),M.sub(d);const L=1/(g.x*M.y-M.x*g.y);isFinite(L)&&(p.copy(f).multiplyScalar(M.y).addScaledVector(h,-g.y).multiplyScalar(L),m.copy(h).multiplyScalar(g.x).addScaledVector(f,-M.x).multiplyScalar(L),o[E].add(p),o[T].add(p),o[P].add(p),l[E].add(m),l[T].add(m),l[P].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let E=0,T=w.length;E<T;++E){const P=w[E],L=P.start,D=P.count;for(let C=L,I=L+D;C<I;C+=3)y(e.getX(C+0),e.getX(C+1),e.getX(C+2))}const _=new G,v=new G,S=new G,x=new G;function b(E){S.fromBufferAttribute(s,E),x.copy(S);const T=o[E];_.copy(T),_.sub(S.multiplyScalar(S.dot(T))).normalize(),v.crossVectors(x,T);const L=v.dot(l[E])<0?-1:1;a.setXYZW(E,_.x,_.y,_.z,L)}for(let E=0,T=i.count;E<T;++E)c[E]&&b(E);this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new tt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,d=i.count;h<d;h++)i.setXYZ(h,0,0,0);const s=new G,r=new G,a=new G,o=new G,l=new G,c=new G,u=new G,f=new G;if(e)for(let h=0,d=e.count;h<d;h+=3){const g=e.getX(h+0),M=e.getX(h+1),p=e.getX(h+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,M),a.fromBufferAttribute(t,p),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,M),c.fromBufferAttribute(i,p),o.add(u),l.add(u),c.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(M,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Jt.fromBufferAttribute(e,t),Jt.normalize(),e.setXYZ(t,Jt.x,Jt.y,Jt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u);let d=0,g=0;for(let M=0,p=l.length;M<p;M++){o.isInterleavedBufferAttribute?d=l[M]*o.data.stride+o.offset:d=l[M]*u;for(let m=0;m<u;m++)h[g++]=c[d++]}return new tt(h,u,f)}if(this.index===null)return Ye("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Dt,i=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,i);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=e(h,i);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],f=r[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const No=new G,Em=new G,Tm=new et;class Xi{constructor(e=new G(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=No.subVectors(i,t).cross(Em.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const s=e.delta(No),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Tm.getNormalMatrix(e),s=this.coplanarPoint(No).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let Am=0;class ys extends Ms{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Am++}),this.uuid=Ss(),this.name="",this.type="Material",this.blending=Vs,this.side=ms,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xh,this.blendDst=qh,this.blendEquation=zs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ue(0,0,0),this.blendAlpha=0,this.depthFunc=Rr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=go,this.stencilZFail=go,this.stencilZPass=go,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Ye(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ye(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ue().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Xi().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Oe().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Oe().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Si=new G,Fo=new G,Qr=new G,ea=new G;class Mf{constructor(e=new G,t=new G(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Si)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Si.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Si.copy(this.origin).addScaledVector(this.direction,t),Si.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Fo.copy(e).add(t).multiplyScalar(.5),Qr.copy(t).sub(e).normalize(),ea.copy(this.origin).sub(Fo);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Qr),o=ea.dot(this.direction),l=-ea.dot(Qr),c=ea.lengthSq(),u=Math.abs(1-a*a);let f,h,d,g;if(u>0)if(f=a*l-o,h=a*o-l,g=r*u,f>=0)if(h>=-g)if(h<=g){const M=1/u;f*=M,h*=M,d=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=r,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;else h=-r,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-a*r+o)),h=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-r,-l),r),d=h*(h+2*l)+c):(f=Math.max(0,-(a*r+o)),h=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+h*(h+2*l)+c);else h=a>0?-r:r,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Fo).addScaledVector(Qr,h),d}intersectSphere(e,t){if(e.radius<0)return null;Si.subVectors(e.center,this.origin);const i=Si.dot(this.direction),s=Si.dot(Si)-i*i,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Si)!==null}intersectTriangle(e,t,i,s,r){const a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,f=e.x-a.x,h=e.y-a.y,d=e.z-a.z,g=t.x-a.x,M=t.y-a.y,p=t.z-a.z,m=i.x-a.x,y=i.y-a.y,w=i.z-a.z,_=Math.abs(l),v=Math.abs(c),S=Math.abs(u);let x,b,E,T,P,L,D,C,I,O,U,$;if(_>=v&&_>=S?(E=l,L=f,I=g,$=m,l>=0?(x=c,b=u,T=h,P=d,D=M,C=p,O=y,U=w):(x=u,b=c,T=d,P=h,D=p,C=M,O=w,U=y)):v>=S?(E=c,L=h,I=M,$=y,c>=0?(x=u,b=l,T=d,P=f,D=p,C=g,O=w,U=m):(x=l,b=u,T=f,P=d,D=g,C=p,O=m,U=w)):(E=u,L=d,I=p,$=w,u>=0?(x=l,b=c,T=f,P=h,D=g,C=M,O=m,U=y):(x=c,b=l,T=h,P=f,D=M,C=g,O=y,U=m)),E===0)return null;const k=x/E,V=b/E,X=1/E,te=T-k*L,le=P-V*L,z=D-k*I,Z=C-V*I,se=O-k*$,q=U-V*$,F=se*Z-q*z,ee=te*q-le*se,fe=z*le-Z*te;if(s){if(F<0||ee<0||fe<0)return null}else if((F<0||ee<0||fe<0)&&(F>0||ee>0||fe>0))return null;const he=F+ee+fe;if(he===0)return null;const ge=X*(F*L+ee*I+fe*$);return(he>0?ge<0:ge>0)?null:this.at(ge/he,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class eo extends ys{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pi,this.combine=Qa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Mu=new Ve,ss=new Mf,ta=new Pn,Su=new G,na=new G,ia=new G,sa=new G,Uo=new G,ra=new G,yu=new G,aa=new G;class gt extends Vt{constructor(e=new Dt,t=new eo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){ra.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],f=r[l];u!==0&&(Uo.fromBufferAttribute(f,e),a?ra.addScaledVector(Uo,u):ra.addScaledVector(Uo.sub(t),u))}t.add(ra)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ta.copy(i.boundingSphere),ta.applyMatrix4(r),ss.copy(e.ray).recast(e.near),!(ta.containsPoint(ss.origin)===!1&&(ss.intersectSphere(ta,Su)===null||ss.origin.distanceToSquared(Su)>(e.far-e.near)**2))&&(Mu.copy(r).invert(),ss.copy(e.ray).applyMatrix4(Mu),!(i.boundingBox!==null&&ss.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ss)))}_computeIntersections(e,t,i){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,M=h.length;g<M;g++){const p=h[g],m=a[p.materialIndex],y=Math.max(p.start,d.start),w=Math.min(o.count,Math.min(p.start+p.count,d.start+d.count));for(let _=y,v=w;_<v;_+=3){const S=o.getX(_),x=o.getX(_+1),b=o.getX(_+2);s=oa(this,m,e,i,c,u,f,S,x,b),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const g=Math.max(0,d.start),M=Math.min(o.count,d.start+d.count);for(let p=g,m=M;p<m;p+=3){const y=o.getX(p),w=o.getX(p+1),_=o.getX(p+2);s=oa(this,a,e,i,c,u,f,y,w,_),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,M=h.length;g<M;g++){const p=h[g],m=a[p.materialIndex],y=Math.max(p.start,d.start),w=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let _=y,v=w;_<v;_+=3){const S=_,x=_+1,b=_+2;s=oa(this,m,e,i,c,u,f,S,x,b),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const g=Math.max(0,d.start),M=Math.min(l.count,d.start+d.count);for(let p=g,m=M;p<m;p+=3){const y=p,w=p+1,_=p+2;s=oa(this,a,e,i,c,u,f,y,w,_),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}}function Rm(n,e,t,i,s,r,a,o){let l;if(e.side===xn?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===ms,o),l===null)return null;aa.copy(o),aa.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(aa);return c<t.near||c>t.far?null:{distance:c,point:aa.clone(),object:n}}function oa(n,e,t,i,s,r,a,o,l,c){n.getVertexPosition(o,na),n.getVertexPosition(l,ia),n.getVertexPosition(c,sa);const u=Rm(n,e,t,i,na,ia,sa,yu);if(u){const f=new G;jn.getBarycoord(yu,na,ia,sa,f),s&&(u.uv=jn.getInterpolatedAttribute(s,o,l,c,f,new Oe)),r&&(u.uv1=jn.getInterpolatedAttribute(r,o,l,c,f,new Oe)),a&&(u.normal=jn.getInterpolatedAttribute(a,o,l,c,f,new G),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new G,materialIndex:0};jn.getNormal(na,ia,sa,h.normal),u.face=h,u.barycoord=f}return u}const ar=new Mt,wu=new Mt,bu=new Mt,Cm=new Mt,Eu=new Ve,la=new G,Oo=new Pn,Tu=new Ve,ko=new Mf;class Sf extends gt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=iu,this.bindMatrix=new Ve,this.bindMatrixInverse=new Ve,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Li),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,la),this.boundingBox.expandByPoint(la)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Pn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,la),this.boundingSphere.expandByPoint(la)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}raycast(e,t){const i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Oo.copy(this.boundingSphere),Oo.applyMatrix4(s),e.ray.intersectsSphere(Oo)!==!1&&(Tu.copy(s).invert(),ko.copy(e.ray).applyMatrix4(Tu),!(this.boundingBox!==null&&ko.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,ko)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Mt,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===iu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Lp?this.bindMatrixInverse.copy(this.bindMatrix).invert():Ye("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,s=this.geometry;wu.fromBufferAttribute(s.attributes.skinIndex,e),bu.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(ar.copy(t),t.set(0,0,0,0)):(ar.set(t.x,t.y,t.z,1),t.set(0,0,0)),ar.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){const a=bu.getComponent(r);if(a!==0){const o=wu.getComponent(r);Eu.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),t.addScaledVector(Cm.copy(ar).applyMatrix4(Eu),a)}}return t.isVector4&&(t.w=ar.w),t.applyMatrix4(this.bindMatrixInverse)}}class yf extends Vt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Qn extends vn{constructor(e=null,t=1,i=1,s,r,a,o,l,c=bt,u=bt,f,h){super(null,a,o,l,c,u,s,r,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Au=new Ve,Pm=new Ve;class bc{constructor(e=[],t=[]){this.uuid=Ss(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Ye("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new Ve)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new Ve;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:Pm;Au.multiplyMatrices(o,t[r]),Au.toArray(i,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new bc(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new Qn(t,e,e,Cn,Rn);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){const r=e.bones[i];let a=t[r];a===void 0&&(Ye("Skeleton: No bone found with UUID:",r),a=new yf),this.bones.push(a),this.boneInverses.push(new Ve().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const a=t[s];e.bones.push(a.uuid);const o=i[s];e.boneInverses.push(o.toArray())}return e}}class ds extends tt{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ns=new Ve,Ru=new Ve,ca=[],Cu=new Li,Lm=new Ve,or=new gt,lr=new Pn;class ei extends gt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ds(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Lm)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Li),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ns),Cu.copy(e.boundingBox).applyMatrix4(Ns),this.boundingBox.union(Cu)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Pn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ns),lr.copy(e.boundingSphere).applyMatrix4(Ns),this.boundingSphere.union(lr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=e*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(or.geometry=this.geometry,or.material=this.material,or.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),lr.copy(this.boundingSphere),lr.applyMatrix4(i),e.ray.intersectsSphere(lr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ns),Ru.multiplyMatrices(i,Ns),or.matrixWorld=Ru,or.raycast(e,ca);for(let a=0,o=ca.length;a<o;a++){const l=ca[a];l.instanceId=r,l.object=this,t.push(l)}ca.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new ds(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Qn(new Float32Array(s*this.count),s,this.count,Qs,Rn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<i.length;c++)a+=i[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const rs=new Pn,Dm=new Oe(.5,.5),ua=new G;class ji{constructor(e=new Xi,t=new Xi,i=new Xi,s=new Xi,r=new Xi,a=new Xi){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Zn,i=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],f=r[5],h=r[6],d=r[7],g=r[8],M=r[9],p=r[10],m=r[11],y=r[12],w=r[13],_=r[14],v=r[15];if(s[0].setComponents(c-a,d-u,m-g,v-y).normalize(),s[1].setComponents(c+a,d+u,m+g,v+y).normalize(),s[2].setComponents(c+o,d+f,m+M,v+w).normalize(),s[3].setComponents(c-o,d-f,m-M,v-w).normalize(),i)s[4].setComponents(l,h,p,_).normalize(),s[5].setComponents(c-l,d-h,m-p,v-_).normalize();else if(s[4].setComponents(c-l,d-h,m-p,v-_).normalize(),t===Zn)s[5].setComponents(c+l,d+h,m+p,v+_).normalize();else if(t===Dr)s[5].setComponents(l,h,p,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),rs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),rs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(rs)}intersectsSprite(e){rs.center.set(0,0,0);const t=Dm.distanceTo(e.center);return rs.radius=.7071067811865476+t,rs.applyMatrix4(e.matrixWorld),this.intersectsSphere(rs)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(ua.x=s.normal.x>0?e.max.x:e.min.x,ua.y=s.normal.y>0?e.max.y:e.min.y,ua.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ua)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const Pu=new Ve;class Ec{constructor(){this.coordinateSystem=Zn,this._frustums=[],this._count=0}setFromArrayCamera(e){const t=e.cameras,i=this._frustums;for(let s=0;s<t.length;s++){const r=t[s];Pu.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new ji),i[s].setFromProjectionMatrix(Pu,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,i=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new ji),t[s].copy(i[s]);return this._count=e._count,this}clone(){return new Ec().copy(this)}}class wf extends vn{constructor(e=[],t=js,i,s,r,a,o,l,c,u){super(e,t,i,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ki extends vn{constructor(e,t,i=fi,s,r,a,o=bt,l=bt,c,u=$i,f=1){if(u!==$i&&u!==qi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:f};super(h,s,r,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new yc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class bf extends Ki{constructor(e,t=fi,i=js,s,r,a=bt,o=bt,l,c=$i){const u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,t,i,s,r,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Ef extends vn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class kr extends Dt{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],f=[];let h=0,d=0;g("z","y","x",-1,-1,i,t,e,a,r,0),g("z","y","x",1,-1,i,t,-e,a,r,1),g("x","z","y",1,1,e,i,t,s,a,2),g("x","z","y",1,-1,e,i,-t,s,a,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Lt(c,3)),this.setAttribute("normal",new Lt(u,3)),this.setAttribute("uv",new Lt(f,2));function g(M,p,m,y,w,_,v,S,x,b,E){const T=_/x,P=v/b,L=_/2,D=v/2,C=S/2,I=x+1,O=b+1;let U=0,$=0;const k=new G;for(let V=0;V<O;V++){const X=V*P-D;for(let te=0;te<I;te++){const le=te*T-L;k[M]=le*y,k[p]=X*w,k[m]=C,c.push(k.x,k.y,k.z),k[M]=0,k[p]=0,k[m]=S>0?1:-1,u.push(k.x,k.y,k.z),f.push(te/x),f.push(1-V/b),U+=1}}for(let V=0;V<b;V++)for(let X=0;X<x;X++){const te=h+X+I*V,le=h+X+I*(V+1),z=h+(X+1)+I*(V+1),Z=h+(X+1)+I*V;l.push(te,le,Z),l.push(le,z,Z),$+=6}o.addGroup(d,$,E),d+=$,h+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class wr extends Dt{constructor(e=1,t=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],f=[],h=[],d=[];let g=0;const M=[],p=i/2;let m=0;y(),a===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(u),this.setAttribute("position",new Lt(f,3)),this.setAttribute("normal",new Lt(h,3)),this.setAttribute("uv",new Lt(d,2));function y(){const _=new G,v=new G;let S=0;const x=(t-e)/i;for(let b=0;b<=r;b++){const E=[],T=b/r,P=T*(t-e)+e;for(let L=0;L<=s;L++){const D=L/s,C=D*l+o,I=Math.sin(C),O=Math.cos(C);v.x=P*I,v.y=-T*i+p,v.z=P*O,f.push(v.x,v.y,v.z),_.set(I,x,O).normalize(),h.push(_.x,_.y,_.z),d.push(D,1-T),E.push(g++)}M.push(E)}for(let b=0;b<s;b++)for(let E=0;E<r;E++){const T=M[E][b],P=M[E+1][b],L=M[E+1][b+1],D=M[E][b+1];(e>0||E!==0)&&(u.push(T,P,D),S+=3),(t>0||E!==r-1)&&(u.push(P,L,D),S+=3)}c.addGroup(m,S,0),m+=S}function w(_){const v=g,S=new Oe,x=new G;let b=0;const E=_===!0?e:t,T=_===!0?1:-1;for(let L=1;L<=s;L++)f.push(0,p*T,0),h.push(0,T,0),d.push(.5,.5),g++;const P=g;for(let L=0;L<=s;L++){const C=L/s*l+o,I=Math.cos(C),O=Math.sin(C);x.x=E*O,x.y=p*T,x.z=E*I,f.push(x.x,x.y,x.z),h.push(0,T,0),S.x=I*.5+.5,S.y=O*.5*T+.5,d.push(S.x,S.y),g++}for(let L=0;L<s;L++){const D=v+L,C=P+L;_===!0?u.push(C,C+1,D):u.push(C+1,C,D),b+=3}c.addGroup(m,b,_===!0?1:2),m+=b}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wr(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class to extends Dt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};const r=[],a=[];o(s),c(i),u(),this.setAttribute("position",new Lt(r,3)),this.setAttribute("normal",new Lt(r.slice(),3)),this.setAttribute("uv",new Lt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(y){const w=new G,_=new G,v=new G;for(let S=0;S<t.length;S+=3)d(t[S+0],w),d(t[S+1],_),d(t[S+2],v),l(w,_,v,y)}function l(y,w,_,v){const S=v+1,x=[];for(let b=0;b<=S;b++){x[b]=[];const E=y.clone().lerp(_,b/S),T=w.clone().lerp(_,b/S),P=S-b;for(let L=0;L<=P;L++)L===0&&b===S?x[b][L]=E:x[b][L]=E.clone().lerp(T,L/P)}for(let b=0;b<S;b++)for(let E=0;E<2*(S-b)-1;E++){const T=Math.floor(E/2);E%2===0?(h(x[b][T+1]),h(x[b+1][T]),h(x[b][T])):(h(x[b][T+1]),h(x[b+1][T+1]),h(x[b+1][T]))}}function c(y){const w=new G;for(let _=0;_<r.length;_+=3)w.x=r[_+0],w.y=r[_+1],w.z=r[_+2],w.normalize().multiplyScalar(y),r[_+0]=w.x,r[_+1]=w.y,r[_+2]=w.z}function u(){const y=new G;for(let w=0;w<r.length;w+=3){y.x=r[w+0],y.y=r[w+1],y.z=r[w+2];const _=p(y)/2/Math.PI+.5,v=m(y)/Math.PI+.5;a.push(_,1-v)}g(),f()}function f(){for(let y=0;y<a.length;y+=6){const w=a[y+0],_=a[y+2],v=a[y+4],S=Math.max(w,_,v),x=Math.min(w,_,v);S>.9&&x<.1&&(w<.2&&(a[y+0]+=1),_<.2&&(a[y+2]+=1),v<.2&&(a[y+4]+=1))}}function h(y){r.push(y.x,y.y,y.z)}function d(y,w){const _=y*3;w.x=e[_+0],w.y=e[_+1],w.z=e[_+2]}function g(){const y=new G,w=new G,_=new G,v=new G,S=new Oe,x=new Oe,b=new Oe;for(let E=0,T=0;E<r.length;E+=9,T+=6){y.set(r[E+0],r[E+1],r[E+2]),w.set(r[E+3],r[E+4],r[E+5]),_.set(r[E+6],r[E+7],r[E+8]),S.set(a[T+0],a[T+1]),x.set(a[T+2],a[T+3]),b.set(a[T+4],a[T+5]),v.copy(y).add(w).add(_).divideScalar(3);const P=p(v);M(S,T+0,y,P),M(x,T+2,w,P),M(b,T+4,_,P)}}function M(y,w,_,v){v<0&&y.x===1&&(a[w]=y.x-1),_.x===0&&_.z===0&&(a[w]=v/2/Math.PI+.5)}function p(y){return Math.atan2(y.z,-y.x)}function m(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new to(e.vertices,e.indices,e.radius,e.detail)}}class Xa extends to{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Xa(e.radius,e.detail)}}class Tc extends to{constructor(e=1,t=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Tc(e.radius,e.detail)}}class xs extends Dt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,u=l+1,f=e/o,h=t/l,d=[],g=[],M=[],p=[];for(let m=0;m<u;m++){const y=m*h-a;for(let w=0;w<c;w++){const _=w*f-r;g.push(_,-y,0),M.push(0,0,1),p.push(w/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let y=0;y<o;y++){const w=y+c*m,_=y+c*(m+1),v=y+1+c*(m+1),S=y+1+c*m;d.push(w,_,S),d.push(_,v,S)}this.setIndex(d),this.setAttribute("position",new Lt(g,3)),this.setAttribute("normal",new Lt(M,3)),this.setAttribute("uv",new Lt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xs(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ac extends Dt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const u=[],f=new G,h=new G,d=[],g=[],M=[],p=[];for(let m=0;m<=i;m++){const y=[],w=m/i,_=a+w*o,v=e*Math.cos(_),S=Math.sqrt(e*e-v*v);let x=0;m===0&&a===0?x=.5/t:m===i&&l===Math.PI&&(x=-.5/t);for(let b=0;b<=t;b++){const E=b/t,T=s+E*r;f.x=-S*Math.cos(T),f.y=v,f.z=S*Math.sin(T),g.push(f.x,f.y,f.z),h.copy(f).normalize(),M.push(h.x,h.y,h.z),p.push(E+x,1-w),y.push(c++)}u.push(y)}for(let m=0;m<i;m++)for(let y=0;y<t;y++){const w=u[m][y+1],_=u[m][y],v=u[m+1][y],S=u[m+1][y+1];(m!==0||a>0)&&d.push(w,_,S),(m!==i-1||l<Math.PI)&&d.push(_,v,S)}this.setIndex(d),this.setAttribute("position",new Lt(g,3)),this.setAttribute("normal",new Lt(M,3)),this.setAttribute("uv",new Lt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ac(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function Js(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];if(Lu(s))s.isRenderTargetTexture?(Ye("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(Lu(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function yn(n){const e={};for(let t=0;t<n.length;t++){const i=Js(n[t]);for(const s in i)e[s]=i[s]}return e}function Lu(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Im(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Tf(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:pt.workingColorSpace}const Af={clone:Js,merge:yn};var Nm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Fm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _n extends ys{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Nm,this.fragmentShader=Fm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Js(e.uniforms),this.uniformsGroups=Im(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new Ue().setHex(s.value);break;case"v2":this.uniforms[i].value=new Oe().fromArray(s.value);break;case"v3":this.uniforms[i].value=new G().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Mt().fromArray(s.value);break;case"m3":this.uniforms[i].value=new et().fromArray(s.value);break;case"m4":this.uniforms[i].value=new Ve().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Um extends _n{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Om extends ys{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ue(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Lr,this.normalScale=new Oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class km extends Om{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Oe(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ht(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Ue(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ue(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ue(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return Xs('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){Xs('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Bm extends ys{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ue(16777215),this.specular=new Ue(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Lr,this.normalScale=new Oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pi,this.combine=Qa,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class dn extends ys{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Lr,this.normalScale=new Oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pi,this.combine=Qa,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Rc extends ys{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ip,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class zm extends ys{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Rf extends Vt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ue(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class Gm extends Rf{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Vt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ue(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Bo=new Ve,Du=new G,Iu=new G;class Hm{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Oe(512,512),this.mapType=tn,this.map=null,this.mapPass=null,this.matrix=new Ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ji,this._frameExtents=new Oe(1,1),this._viewportCount=1,this._viewports=[new Mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;Du.setFromMatrixPosition(e.matrixWorld),t.position.copy(Du),Iu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Iu),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){Bo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Bo,e.coordinateSystem,e.reversedDepth);const r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===Dr||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Bo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const ha=new G,fa=new Jn,ti=new G;class Cf extends Vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ve,this.projectionMatrix=new Ve,this.projectionMatrixInverse=new Ve,this.coordinateSystem=Zn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ha,fa,ti),ti.x===1&&ti.y===1&&ti.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ha,fa,ti.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(ha,fa,ti),ti.x===1&&ti.y===1&&ti.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ha,fa,ti.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Bi=new G,Nu=new Oe,Fu=new Oe;class Nn extends Cf{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ir*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Sr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ir*2*Math.atan(Math.tan(Sr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Bi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Bi.x,Bi.y).multiplyScalar(-e/Bi.z),Bi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Bi.x,Bi.y).multiplyScalar(-e/Bi.z)}getViewSize(e,t){return this.getViewBounds(e,Nu,Fu),t.subVectors(Fu,Nu)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Sr*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class vs extends Cf{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Wm extends Hm{constructor(){super(new vs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class zo extends Rf{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Vt.DEFAULT_UP),this.updateMatrix(),this.target=new Vt,this.shadow=new Wm}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Pf extends Dt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}const Fs=-90,Us=1;class Jl extends Vt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Nn(Fs,Us,e,t);s.layers=this.layers,this.add(s);const r=new Nn(Fs,Us,e,t);r.layers=this.layers,this.add(r);const a=new Nn(Fs,Us,e,t);a.layers=this.layers,this.add(a);const o=new Nn(Fs,Us,e,t);o.layers=this.layers,this.add(o);const l=new Nn(Fs,Us,e,t);l.layers=this.layers,this.add(l);const c=new Nn(Fs,Us,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===Zn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Dr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const M=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.mipmapsAutoUpdate=M,e.setRenderTarget(i,5,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(f,h,d),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Vm extends Nn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}function Uu(n,e,t,i){const s=Xm(i);switch(t){case af:return n*e;case Qs:return n*e/s.components*s.byteLength;case xc:return n*e/s.components*s.byteLength;case Yi:return n*e*2/s.components*s.byteLength;case vc:return n*e*2/s.components*s.byteLength;case of:return n*e*3/s.components*s.byteLength;case Cn:return n*e*4/s.components*s.byteLength;case _c:return n*e*4/s.components*s.byteLength;case Aa:case Ra:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ca:case Pa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case wl:case El:return Math.max(n,16)*Math.max(e,8)/4;case yl:case bl:return Math.max(n,8)*Math.max(e,8)/2;case Tl:case Al:case Cl:case Pl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Rl:case za:case Ll:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Dl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Il:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Nl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Fl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Ul:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Ol:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case kl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Bl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case zl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Gl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Hl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Wl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Vl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Xl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case ql:case $l:case Yl:return Math.ceil(n/4)*Math.ceil(e/4)*16;case jl:case Kl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Ga:case Zl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Xm(n){switch(n){case tn:case tf:return{byteLength:1,components:1};case Pr:case nf:case di:return{byteLength:2,components:1};case mc:case gc:return{byteLength:2,components:4};case fi:case pc:case Rn:return{byteLength:4,components:1};case sf:case rf:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:dc}}));typeof window<"u"&&(window.__THREE__?Ye("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=dc);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Lf(){let n=null,e=!1,t=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function qm(n){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,f=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),o.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){const u=l.array,f=l.updateRanges;if(n.bindBuffer(c,o),f.length===0)n.bufferSubData(c,0,u);else{f.sort((d,g)=>d.start-g.start);let h=0;for(let d=1;d<f.length;d++){const g=f[h],M=f[d];M.start<=g.start+g.count+1?g.count=Math.max(g.count,M.start+M.count-g.start):(++h,f[h]=M)}f.length=h+1;for(let d=0,g=f.length;d<g;d++){const M=f[d];n.bufferSubData(c,M.start*u.BYTES_PER_ELEMENT,u,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var $m=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ym=`#ifdef USE_ALPHAHASH
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
#endif`,jm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Km=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Jm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Qm=`#ifdef USE_AOMAP
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
#endif`,e0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,t0=`#ifdef USE_BATCHING
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
#endif`,n0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,i0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,s0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,r0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,a0=`#ifdef USE_IRIDESCENCE
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
#endif`,o0=`#ifdef USE_BUMPMAP
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
#endif`,l0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,c0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,u0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,h0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,f0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,d0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,p0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,m0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,g0=`#define PI 3.141592653589793
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
} // validated`,x0=`vec3 transformedNormal = objectNormal;
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
#endif`,v0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,M0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,S0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,y0="gl_FragColor = linearToOutputTexel( gl_FragColor );",w0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,b0=`#ifdef USE_ENVMAP
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
#endif`,E0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,T0=`#ifdef USE_ENVMAP
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
#endif`,A0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,R0=`#ifdef USE_ENVMAP
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
#endif`,C0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,P0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,L0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,D0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,I0=`#ifdef USE_GRADIENTMAP
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
}`,N0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,F0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,U0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,O0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,k0=`#ifdef USE_ENVMAP
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
#endif`,B0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,z0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,G0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,H0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,W0=`PhysicalMaterial material;
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
#endif`,V0=`uniform sampler2D dfgLUT;
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
}`,X0=`
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
#endif`,q0=`#if defined( RE_IndirectDiffuse )
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
#endif`,$0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Y0=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,j0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,K0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Z0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,J0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Q0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,eg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,tg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ng=`#if defined( USE_POINTS_UV )
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
#endif`,ig=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,sg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ag=`#if defined( USE_MORPHCOLORS )
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
#endif`,og=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lg=`#ifdef USE_MORPHTARGETS
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
#endif`,cg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ug=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,hg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,fg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,mg=`#ifdef USE_NORMALMAP
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
#endif`,gg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,xg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_g=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Mg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Sg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,yg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,wg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,bg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Eg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Tg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ag=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Rg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Cg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Pg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Lg=`float getShadowMask() {
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
}`,Dg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ig=`#ifdef USE_SKINNING
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
#endif`,Ng=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Fg=`#ifdef USE_SKINNING
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
#endif`,Ug=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Og=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,kg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Bg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,zg=`#ifdef USE_TRANSMISSION
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
#endif`,Gg=`#ifdef USE_TRANSMISSION
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
#endif`,Hg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const qg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$g=`uniform sampler2D t2D;
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
}`,Yg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jg=`uniform float backgroundBlurriness;
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
}`,Kg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jg=`#include <common>
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
}`,Qg=`#if DEPTH_PACKING == 3200
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
}`,ex=`#define DISTANCE
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
}`,tx=`#define DISTANCE
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
}`,nx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ix=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sx=`uniform float scale;
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
}`,rx=`uniform vec3 diffuse;
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
}`,ax=`#include <common>
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
}`,ox=`uniform vec3 diffuse;
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
}`,lx=`#define LAMBERT
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
}`,cx=`#define LAMBERT
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
}`,ux=`#define MATCAP
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
}`,hx=`#define MATCAP
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
}`,fx=`#define NORMAL
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
}`,dx=`#define NORMAL
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
}`,px=`#define PHONG
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
}`,mx=`#define PHONG
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
}`,gx=`#define STANDARD
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
}`,xx=`#define STANDARD
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
}`,vx=`#define TOON
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
}`,_x=`#define TOON
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
}`,Mx=`uniform float size;
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
}`,Sx=`uniform vec3 diffuse;
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
}`,yx=`#include <common>
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
}`,wx=`uniform vec3 color;
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
}`,bx=`uniform float rotation;
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
}`,Ex=`uniform vec3 diffuse;
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
}`,st={alphahash_fragment:$m,alphahash_pars_fragment:Ym,alphamap_fragment:jm,alphamap_pars_fragment:Km,alphatest_fragment:Zm,alphatest_pars_fragment:Jm,aomap_fragment:Qm,aomap_pars_fragment:e0,batching_pars_vertex:t0,batching_vertex:n0,begin_vertex:i0,beginnormal_vertex:s0,bsdfs:r0,iridescence_fragment:a0,bumpmap_pars_fragment:o0,clipping_planes_fragment:l0,clipping_planes_pars_fragment:c0,clipping_planes_pars_vertex:u0,clipping_planes_vertex:h0,color_fragment:f0,color_pars_fragment:d0,color_pars_vertex:p0,color_vertex:m0,common:g0,defaultnormal_vertex:x0,displacementmap_pars_vertex:v0,displacementmap_vertex:_0,emissivemap_fragment:M0,emissivemap_pars_fragment:S0,colorspace_fragment:y0,colorspace_pars_fragment:w0,envmap_fragment:b0,envmap_common_pars_fragment:E0,envmap_pars_fragment:T0,envmap_pars_vertex:A0,envmap_physical_pars_fragment:k0,envmap_vertex:R0,fog_vertex:C0,fog_pars_vertex:P0,fog_fragment:L0,fog_pars_fragment:D0,gradientmap_pars_fragment:I0,lightmap_pars_fragment:N0,lights_lambert_fragment:F0,lights_lambert_pars_fragment:U0,lights_pars_begin:O0,lights_toon_fragment:B0,lights_toon_pars_fragment:z0,lights_phong_fragment:G0,lights_phong_pars_fragment:H0,lights_physical_fragment:W0,lights_physical_pars_fragment:V0,lights_fragment_begin:X0,lights_fragment_maps:q0,lights_fragment_end:$0,lightprobes_pars_fragment:Y0,logdepthbuf_fragment:j0,logdepthbuf_pars_fragment:K0,logdepthbuf_pars_vertex:Z0,logdepthbuf_vertex:J0,map_fragment:Q0,map_pars_fragment:eg,map_particle_fragment:tg,map_particle_pars_fragment:ng,metalnessmap_fragment:ig,metalnessmap_pars_fragment:sg,morphinstance_vertex:rg,morphcolor_vertex:ag,morphnormal_vertex:og,morphtarget_pars_vertex:lg,morphtarget_vertex:cg,normal_fragment_begin:ug,normal_fragment_maps:hg,normal_pars_fragment:fg,normal_pars_vertex:dg,normal_vertex:pg,normalmap_pars_fragment:mg,clearcoat_normal_fragment_begin:gg,clearcoat_normal_fragment_maps:xg,clearcoat_pars_fragment:vg,iridescence_pars_fragment:_g,opaque_fragment:Mg,packing:Sg,premultiplied_alpha_fragment:yg,project_vertex:wg,dithering_fragment:bg,dithering_pars_fragment:Eg,roughnessmap_fragment:Tg,roughnessmap_pars_fragment:Ag,shadowmap_pars_fragment:Rg,shadowmap_pars_vertex:Cg,shadowmap_vertex:Pg,shadowmask_pars_fragment:Lg,skinbase_vertex:Dg,skinning_pars_vertex:Ig,skinning_vertex:Ng,skinnormal_vertex:Fg,specularmap_fragment:Ug,specularmap_pars_fragment:Og,tonemapping_fragment:kg,tonemapping_pars_fragment:Bg,transmission_fragment:zg,transmission_pars_fragment:Gg,uv_pars_fragment:Hg,uv_pars_vertex:Wg,uv_vertex:Vg,worldpos_vertex:Xg,background_vert:qg,background_frag:$g,backgroundCube_vert:Yg,backgroundCube_frag:jg,cube_vert:Kg,cube_frag:Zg,depth_vert:Jg,depth_frag:Qg,distance_vert:ex,distance_frag:tx,equirect_vert:nx,equirect_frag:ix,linedashed_vert:sx,linedashed_frag:rx,meshbasic_vert:ax,meshbasic_frag:ox,meshlambert_vert:lx,meshlambert_frag:cx,meshmatcap_vert:ux,meshmatcap_frag:hx,meshnormal_vert:fx,meshnormal_frag:dx,meshphong_vert:px,meshphong_frag:mx,meshphysical_vert:gx,meshphysical_frag:xx,meshtoon_vert:vx,meshtoon_frag:_x,points_vert:Mx,points_frag:Sx,shadow_vert:yx,shadow_frag:wx,sprite_vert:bx,sprite_frag:Ex},Ae={common:{diffuse:{value:new Ue(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new et}},envmap:{envMap:{value:null},envMapRotation:{value:new et},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new et},normalScale:{value:new Oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0},uvTransform:{value:new et}},sprite:{diffuse:{value:new Ue(16777215)},opacity:{value:1},center:{value:new Oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}}},ai={basic:{uniforms:yn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.fog]),vertexShader:st.meshbasic_vert,fragmentShader:st.meshbasic_frag},lambert:{uniforms:yn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new Ue(0)},envMapIntensity:{value:1}}]),vertexShader:st.meshlambert_vert,fragmentShader:st.meshlambert_frag},phong:{uniforms:yn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new Ue(0)},specular:{value:new Ue(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:st.meshphong_vert,fragmentShader:st.meshphong_frag},standard:{uniforms:yn([Ae.common,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.roughnessmap,Ae.metalnessmap,Ae.fog,Ae.lights,{emissive:{value:new Ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag},toon:{uniforms:yn([Ae.common,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.gradientmap,Ae.fog,Ae.lights,{emissive:{value:new Ue(0)}}]),vertexShader:st.meshtoon_vert,fragmentShader:st.meshtoon_frag},matcap:{uniforms:yn([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,{matcap:{value:null}}]),vertexShader:st.meshmatcap_vert,fragmentShader:st.meshmatcap_frag},points:{uniforms:yn([Ae.points,Ae.fog]),vertexShader:st.points_vert,fragmentShader:st.points_frag},dashed:{uniforms:yn([Ae.common,Ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:st.linedashed_vert,fragmentShader:st.linedashed_frag},depth:{uniforms:yn([Ae.common,Ae.displacementmap]),vertexShader:st.depth_vert,fragmentShader:st.depth_frag},normal:{uniforms:yn([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,{opacity:{value:1}}]),vertexShader:st.meshnormal_vert,fragmentShader:st.meshnormal_frag},sprite:{uniforms:yn([Ae.sprite,Ae.fog]),vertexShader:st.sprite_vert,fragmentShader:st.sprite_frag},background:{uniforms:{uvTransform:{value:new et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:st.background_vert,fragmentShader:st.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new et}},vertexShader:st.backgroundCube_vert,fragmentShader:st.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:st.cube_vert,fragmentShader:st.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:st.equirect_vert,fragmentShader:st.equirect_frag},distance:{uniforms:yn([Ae.common,Ae.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:st.distance_vert,fragmentShader:st.distance_frag},shadow:{uniforms:yn([Ae.lights,Ae.fog,{color:{value:new Ue(0)},opacity:{value:1}}]),vertexShader:st.shadow_vert,fragmentShader:st.shadow_frag}};ai.physical={uniforms:yn([ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new et},clearcoatNormalScale:{value:new Oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new et},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new et},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new et},sheen:{value:0},sheenColor:{value:new Ue(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new et},transmissionSamplerSize:{value:new Oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new et},attenuationDistance:{value:0},attenuationColor:{value:new Ue(0)},specularColor:{value:new Ue(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new et},anisotropyVector:{value:new Oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new et}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag};const da={r:0,b:0,g:0},Tx=new Ve,Df=new et;Df.set(-1,0,0,0,1,0,0,0,1);function Ax(n,e,t,i,s,r){const a=new Ue(0);let o=s===!0?0:1,l,c,u=null,f=0,h=null;function d(y){let w=y.isScene===!0?y.background:null;if(w&&w.isTexture){const _=y.backgroundBlurriness>0;w=e.get(w,_)}return w}function g(y){let w=!1;const _=d(y);_===null?p(a,o):_&&_.isColor&&(p(_,1),w=!0);const v=n.xr.getEnvironmentBlendMode();v==="additive"?t.buffers.color.setClear(0,0,0,1,r):v==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||w)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function M(y,w){const _=d(w);_&&_.isCubeTexture?(c===void 0&&(c=new gt(new kr(1,1,1),new _n({name:"BackgroundCubeMaterial",uniforms:Js(ai.backgroundCube.uniforms),vertexShader:ai.backgroundCube.vertexShader,fragmentShader:ai.backgroundCube.fragmentShader,side:xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(v,S,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Tx.makeRotationFromEuler(w.backgroundRotation)).transpose(),_.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Df),c.material.toneMapped=pt.getTransfer(_.colorSpace)!==wt,(u!==_||f!==_.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,u=_,f=_.version,h=n.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new gt(new xs(2,2),new _n({name:"BackgroundMaterial",uniforms:Js(ai.background.uniforms),vertexShader:ai.background.vertexShader,fragmentShader:ai.background.fragmentShader,side:ms,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=pt.getTransfer(_.colorSpace)!==wt,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||f!==_.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,u=_,f=_.version,h=n.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function p(y,w){y.getRGB(da,Tf(n)),t.buffers.color.setClear(da.r,da.g,da.b,w,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,w=1){a.set(y),o=w,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(y){o=y,p(a,o)},render:g,addToRenderList:M,dispose:m}}function Rx(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null);let r=s,a=!1;function o(P,L,D,C,I){let O=!1;const U=f(P,C,D,L);r!==U&&(r=U,c(r.object)),O=d(P,C,D,I),O&&g(P,C,D,I),I!==null&&e.update(I,n.ELEMENT_ARRAY_BUFFER),(O||a)&&(a=!1,_(P,L,D,C),I!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(I).buffer))}function l(){return n.createVertexArray()}function c(P){return n.bindVertexArray(P)}function u(P){return n.deleteVertexArray(P)}function f(P,L,D,C){const I=C.wireframe===!0;let O=i[L.id];O===void 0&&(O={},i[L.id]=O);const U=P.isInstancedMesh===!0?P.id:0;let $=O[U];$===void 0&&($={},O[U]=$);let k=$[D.id];k===void 0&&(k={},$[D.id]=k);let V=k[I];return V===void 0&&(V=h(l()),k[I]=V),V}function h(P){const L=[],D=[],C=[];for(let I=0;I<t;I++)L[I]=0,D[I]=0,C[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:D,attributeDivisors:C,object:P,attributes:{},index:null}}function d(P,L,D,C){const I=r.attributes,O=L.attributes;let U=0;const $=D.getAttributes();for(const k in $)if($[k].location>=0){const X=I[k];let te=O[k];if(te===void 0&&(k==="instanceMatrix"&&P.instanceMatrix&&(te=P.instanceMatrix),k==="instanceColor"&&P.instanceColor&&(te=P.instanceColor)),X===void 0||X.attribute!==te||te&&X.data!==te.data)return!0;U++}return r.attributesNum!==U||r.index!==C}function g(P,L,D,C){const I={},O=L.attributes;let U=0;const $=D.getAttributes();for(const k in $)if($[k].location>=0){let X=O[k];X===void 0&&(k==="instanceMatrix"&&P.instanceMatrix&&(X=P.instanceMatrix),k==="instanceColor"&&P.instanceColor&&(X=P.instanceColor));const te={};te.attribute=X,X&&X.data&&(te.data=X.data),I[k]=te,U++}r.attributes=I,r.attributesNum=U,r.index=C}function M(){const P=r.newAttributes;for(let L=0,D=P.length;L<D;L++)P[L]=0}function p(P){m(P,0)}function m(P,L){const D=r.newAttributes,C=r.enabledAttributes,I=r.attributeDivisors;D[P]=1,C[P]===0&&(n.enableVertexAttribArray(P),C[P]=1),I[P]!==L&&(n.vertexAttribDivisor(P,L),I[P]=L)}function y(){const P=r.newAttributes,L=r.enabledAttributes;for(let D=0,C=L.length;D<C;D++)L[D]!==P[D]&&(n.disableVertexAttribArray(D),L[D]=0)}function w(P,L,D,C,I,O,U){U===!0?n.vertexAttribIPointer(P,L,D,I,O):n.vertexAttribPointer(P,L,D,C,I,O)}function _(P,L,D,C){M();const I=C.attributes,O=D.getAttributes(),U=L.defaultAttributeValues;for(const $ in O){const k=O[$];if(k.location>=0){let V=I[$];if(V===void 0&&($==="instanceMatrix"&&P.instanceMatrix&&(V=P.instanceMatrix),$==="instanceColor"&&P.instanceColor&&(V=P.instanceColor)),V!==void 0){const X=V.normalized,te=V.itemSize,le=e.get(V);if(le===void 0)continue;const z=le.buffer,Z=le.type,se=le.bytesPerElement,q=Z===n.INT||Z===n.UNSIGNED_INT||V.gpuType===pc;if(V.isInterleavedBufferAttribute){const F=V.data,ee=F.isInterleavedBuffer===!0?F.stride:F.itemSize,fe=V.offset;if(F.isInstancedInterleavedBuffer||F.isInstancedBufferAttribute){for(let he=0;he<k.locationSize;he++)m(k.location+he,F.meshPerAttribute);P.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=F.meshPerAttribute*F.count)}else for(let he=0;he<k.locationSize;he++)p(k.location+he);n.bindBuffer(n.ARRAY_BUFFER,z);for(let he=0;he<k.locationSize;he++)w(k.location+he,te/k.locationSize,Z,X,ee*se,(fe+te/k.locationSize*he)*se,q)}else{if(V.isInstancedBufferAttribute){for(let F=0;F<k.locationSize;F++)m(k.location+F,V.meshPerAttribute);P.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let F=0;F<k.locationSize;F++)p(k.location+F);n.bindBuffer(n.ARRAY_BUFFER,z);for(let F=0;F<k.locationSize;F++)w(k.location+F,te/k.locationSize,Z,X,te*se,te/k.locationSize*F*se,q)}}else if(U!==void 0){const X=U[$];if(X!==void 0)switch(X.length){case 2:n.vertexAttrib2fv(k.location,X);break;case 3:n.vertexAttrib3fv(k.location,X);break;case 4:n.vertexAttrib4fv(k.location,X);break;default:n.vertexAttrib1fv(k.location,X)}}}}y()}function v(){E();for(const P in i){const L=i[P];for(const D in L){const C=L[D];for(const I in C){const O=C[I];for(const U in O)u(O[U].object),delete O[U];delete C[I]}}delete i[P]}}function S(P){if(i[P.id]===void 0)return;const L=i[P.id];for(const D in L){const C=L[D];for(const I in C){const O=C[I];for(const U in O)u(O[U].object),delete O[U];delete C[I]}}delete i[P.id]}function x(P){for(const L in i){const D=i[L];for(const C in D){const I=D[C];if(I[P.id]===void 0)continue;const O=I[P.id];for(const U in O)u(O[U].object),delete O[U];delete I[P.id]}}}function b(P){for(const L in i){const D=i[L],C=P.isInstancedMesh===!0?P.id:0,I=D[C];if(I!==void 0){for(const O in I){const U=I[O];for(const $ in U)u(U[$].object),delete U[$];delete I[O]}delete D[C],Object.keys(D).length===0&&delete i[L]}}}function E(){T(),a=!0,r!==s&&(r=s,c(r.object))}function T(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:E,resetDefaultState:T,dispose:v,releaseStatesOfGeometry:S,releaseStatesOfObject:b,releaseStatesOfProgram:x,initAttributes:M,enableAttribute:p,disableUnusedAttributes:y}}function Cx(n,e,t){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function a(l,c,u){u!==0&&(n.drawArraysInstanced(i,l,c,u),t.update(c,i,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let h=0;for(let d=0;d<u;d++)h+=c[d];t.update(h,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Px(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const x=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(x){return!(x!==Cn&&i.convert(x)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(x){const b=x===di&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(x!==tn&&x!==Rn&&!b&&i.convert(x)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(Ye("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=t.logarithmicDepthBuffer===!0&&f===!1;t.reversedDepthBuffer===!0&&f===!1&&Ye("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&f===!0&&Ye("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),w=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),v=n.getParameter(n.MAX_SAMPLES),S=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:M,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:y,maxVaryings:w,maxFragmentUniforms:_,maxSamples:v,samples:S}}function Lx(n){const e=this;let t=null,i=0,s=!1,r=!1;const a=new Xi,o=new et,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||i!==0||s;return s=h,i=f.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,d){const g=f.clippingPlanes,M=f.clipIntersection,p=f.clipShadows,m=n.get(f);if(!s||g===null||g.length===0||r&&!p)r?u(null):c();else{const y=r?0:i,w=y*4;let _=m.clippingState||null;l.value=_,_=u(g,h,w,d);for(let v=0;v!==w;++v)_[v]=t[v];m.clippingState=_,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,d,g){const M=f!==null?f.length:0;let p=null;if(M!==0){if(p=l.value,g!==!0||p===null){const m=d+M*4,y=h.matrixWorldInverse;o.getNormalMatrix(y),(p===null||p.length<m)&&(p=new Float32Array(m));for(let w=0,_=d;w!==M;++w,_+=4)a.copy(f[w]).applyMatrix4(y,o),a.normal.toArray(p,_),p[_+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,p}}class Cc extends $t{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new wf(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new kr(5,5,5),r=new _n({name:"CubemapFromEquirect",uniforms:Js(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:xn,blending:Ws});r.uniforms.tEquirect.value=t;const a=new gt(s,r),o=t.minFilter;return t.minFilter===Un&&(t.minFilter=kt),new Jl(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}}const Ou=256,Dx=3,Ix=20,If=256,Nf=16,Nx=3,Fx=new G,Ux=new Ue;class qa{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Jl(1,10,null),this._boxMesh=new gt(new kr(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){const{size:a=256,position:o=Fx}=r,l=this._renderer;this._setSize(a);const c=this._allocateTarget(),u=this._getSourceTarget(!0);t>0&&(u.texture.mipmapsAutoUpdate=!1);const f=l.autoClear,h=l.autoClearColor,d=l.autoClearDepth,g=l.autoClearStencil,M=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,M===null&&(e.background=l.getClearColor(Ux));const p=new Jl(i,s,u);return p.position.copy(o),p.update(l,e),l.autoClear=f,l.autoClearColor=h,l.autoClearDepth=d,l.autoClearStencil=g,e.background=M,t>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Ou,ff(e))}_fromTexture(e,t){e.mapping===js||e.mapping===Cr?this._setSize(e.image.length===0?Ou:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const i=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){const e=this._cubeSize,t=ku(e,!1,!1),i=Math.log2(e)-Dx;for(let s=0;s<=i;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){const t=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==t||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=ku(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,i){const s=this._boxMesh,r=this._cubeCamera;s.material=i,r.renderTarget=e,r.activeMipmapLevel=t;const a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===js||e.mapping===Cr?(this._cubemapMaterial===null&&(this._cubemapMaterial=zu()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Bu()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=Ox(),this._integrationMaterial=kx());const t=this._cubeSize,i=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;const r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/Nf);for(let a=0;a<=i;a++){const o=qa.lodToRoughness(a,i);if(a>i-Nx)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{const l=o>0?Math.log2(t)+.5*Math.log2(6/(If*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Bx());const i=this._blurMaterial,s=i.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,i),s.envMap.value=e.texture,this._renderCube(r,0,i)}}function ku(n,e,t){return new Cc(n,{minFilter:Un,generateMipmaps:e,type:di,colorSpace:Ha,depthBuffer:t})}function Br(n,e,t){return new _n({name:n,uniforms:e,vertexShader:st.cube_vert,fragmentShader:t,side:xn,blending:Ws,depthTest:!1,depthWrite:!1})}function Ox(){return Br("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${If}u

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
	`)}function kx(){return Br("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Nf}},`

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
	`)}function Bx(){return Br("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Ix}
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
	`)}function Bu(){return Br("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function zu(){return Br("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function zx(n){let e=new WeakMap,t=new WeakMap,i=null;function s(h,d=!1){return h==null?null:d?a(h):r(h)}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===fo||d===po)if(e.has(h)){const g=e.get(h).texture;return o(g,h.mapping)}else{const g=h.image;if(g&&g.height>0){const M=new Cc(g.height);return M.fromEquirectangularTexture(n,h),e.set(h,M),h.addEventListener("dispose",c),o(M.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture&&h.isPMREMTexture!==!0){const d=h.mapping,g=d===fo||d===po,M=d===js||d===Cr;if(g||M){let p=t.get(h);const m=p!==void 0?p.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==m)return i===null&&(i=new qa(n)),p=g?i.fromEquirectangular(h,p):i.fromCubemap(h,p),p.texture.pmremVersion=h.pmremVersion,t.set(h,p),p.texture;if(p!==void 0)return p.texture;{const y=h.image;return g&&y&&y.height>0||M&&y&&l(y)?(i===null&&(i=new qa(n)),p=g?i.fromEquirectangular(h):i.fromCubemap(h),p.texture.pmremVersion=h.pmremVersion,t.set(h,p),h.addEventListener("dispose",u),p.texture):null}}}return h}function o(h,d){return d===fo?h.mapping=js:d===po&&(h.mapping=Cr),h}function l(h){let d=0;const g=6;for(let M=0;M<g;M++)h[M]!==void 0&&d++;return d===g}function c(h){const d=h.target;d.removeEventListener("dispose",c);const g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function u(h){const d=h.target;d.removeEventListener("dispose",u);const g=t.get(d);g!==void 0&&(t.delete(d),g.dispose())}function f(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function Gx(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&Xs("WebGLRenderer: "+i+" extension not supported."),s}}}function Hx(n,e,t,i){const s={},r=new WeakMap,a=new FinalizationRegistry(g=>delete s[g]);function o(g){l(g.target)}function l(g){g.index!==null&&e.remove(g.index);for(const p in g.attributes)e.remove(g.attributes[p]);g.removeEventListener("dispose",o),delete s[g.id],a.unregister(g);const M=r.get(g);M&&(e.remove(M),r.delete(g)),i.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function c(g,M){return s[M.id]!==void 0||(M.addEventListener("dispose",o),s[M.id]=new WeakRef(M),a.register(M,M.id,M),t.memory.geometries++),M}function u(g){const M=g.attributes;for(const p in M)e.update(M[p],n.ARRAY_BUFFER)}function f(g){const M=g.index,p=g.attributes.position;let m=0;if(p===void 0)return;const y=M!==null?M.array.length:p.array.length/3-1,w=p.count>=65535?_f:vf,_=new w(Math.ceil(y/3)*6,1),v=_.array;if(M!==null){const x=M.array;m=M.version;for(let b=0,E=0;b<y;b+=3){const T=x[b+0],P=x[b+1],L=x[b+2];v[E++]=T,v[E++]=P,v[E++]=P,v[E++]=L,v[E++]=L,v[E++]=T}}else{m=p.version;for(let x=0,b=0;x<y;x+=3){const E=x+0,T=x+1,P=x+2;v[b++]=E,v[b++]=T,v[b++]=T,v[b++]=P,v[b++]=P,v[b++]=E}}_.version=m;const S=r.get(g);S&&e.remove(S),r.set(g,_)}function h(g){const M=r.get(g);if(M){const p=g.index;p!==null&&M.version<p.version&&f(g)}else f(g);return r.get(g)}function d(){for(const g in s){const M=s[g].deref();M!==void 0&&l(M)}}return{get:c,update:u,getWireframeAttribute:h,dispose:d}}function Wx(n,e,t){let i;function s(f){i=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,h){n.drawElements(i,h,r,f*a),t.update(h,i,1)}function c(f,h,d){d!==0&&(n.drawElementsInstanced(i,h,r,f*a,d),t.update(h,i,d))}function u(f,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,f,0,d);let M=0;for(let p=0;p<d;p++)M+=h[p];t.update(M,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function Vx(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:_t("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Xx(n,e,t){const i=new WeakMap,s=new Mt;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(o);if(h===void 0||h.count!==f){let E=function(){x.dispose(),i.delete(o),o.removeEventListener("dispose",E)};h!==void 0&&h.texture.dispose();const d=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,M=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let w=0;d===!0&&(w=1),g===!0&&(w=2),M===!0&&(w=3);let _=o.attributes.position.count*w,v=1;_>e.maxTextureSize&&(v=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);const S=new Float32Array(_*v*4*f),x=new mf(S,_,v,f);x.type=Rn,x.needsUpdate=!0;const b=w*4;for(let T=0;T<f;T++){const P=p[T],L=m[T],D=y[T],C=_*v*4*T;for(let I=0;I<P.count;I++){const O=I*b;d===!0&&(s.fromBufferAttribute(P,I),S[C+O+0]=s.x,S[C+O+1]=s.y,S[C+O+2]=s.z,S[C+O+3]=0),g===!0&&(s.fromBufferAttribute(L,I),S[C+O+4]=s.x,S[C+O+5]=s.y,S[C+O+6]=s.z,S[C+O+7]=0),M===!0&&(s.fromBufferAttribute(D,I),S[C+O+8]=s.x,S[C+O+9]=s.y,S[C+O+10]=s.z,S[C+O+11]=D.itemSize===4?s.w:1)}}h={count:f,texture:x,size:new Oe(_,v)},i.set(o,h),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let d=0;for(let M=0;M<c.length;M++)d+=c[M];const g=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:r}}function qx(n,e,t,i,s){let r=new WeakMap;function a(c){const u=s.render.frame,f=c.geometry,h=e.get(c,f);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return h}function o(){r=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}const $x={[$h]:"LINEAR_TONE_MAPPING",[Yh]:"REINHARD_TONE_MAPPING",[jh]:"CINEON_TONE_MAPPING",[Kh]:"ACES_FILMIC_TONE_MAPPING",[Jh]:"AGX_TONE_MAPPING",[Qh]:"NEUTRAL_TONE_MAPPING",[Zh]:"CUSTOM_TONE_MAPPING"};function Yx(n,e,t,i,s,r){const a=new $t(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null,c=null;const u=new Dt;u.setAttribute("position",new Lt([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new Lt([0,2,0,0,2,0],2));const f=new Um({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new gt(u,f),d=new vs(-1,1,1,-1,0,1);let g=null,M=null,p=!1,m,y=null,w=[],_=!1;this.setSize=function(v,S){a.setSize(v,S),o!==null&&o.setSize(v,S),l!==null&&l.setSize(v,S);for(let x=0;x<w.length;x++){const b=w[x];b.setSize&&b.setSize(v,S)}},this.setEffects=function(v){w=v,_=w.length>0&&w[0].isRenderPass===!0;const S=a.width,x=a.height;w.length>0&&o===null&&(o=new $t(S,x,{type:di,depthBuffer:!1,stencilBuffer:!1}),l=new $t(S,x,{type:di,depthBuffer:!1,stencilBuffer:!1}));const b=s===!0&&w.some(E=>E.needsDepthTexture===!0);b!==(a.depthTexture!==null)&&(b===!0&&c===null&&(c=new Ki(S,x),r===!0&&(c.format=qi,c.type=Zs)),a.dispose(),a.depthTexture=b?c:null,a.resolveDepthBuffer=b,a.storeMultisampledDepthBuffer=b);for(let E=0;E<w.length;E++){const T=w[E];T.setSize&&T.setSize(S,x),b&&T.needsDepthTexture===!0&&T.setDepthTexture&&T.setDepthTexture(c)}},this.begin=function(v,S){if(p||v.toneMapping===Ri&&w.length===0)return!1;if(y=S,S!==null){const x=S.width,b=S.height;(a.width!==x||a.height!==b)&&this.setSize(x,b)}return _===!1&&v.setRenderTarget(a),m=v.toneMapping,v.toneMapping=Ri,!0},this.hasRenderPass=function(){return _},this.end=function(v,S){v.toneMapping=m,p=!0;let x=a,b=o;for(let E=0;E<w.length;E++){const T=w[E];T.enabled!==!1&&(T.render(v,b,x,S),T.needsSwap!==!1&&(x=b,b=b===o?l:o))}if(g!==v.outputColorSpace||M!==v.toneMapping){g=v.outputColorSpace,M=v.toneMapping,f.defines={},pt.getTransfer(g)===wt&&(f.defines.SRGB_TRANSFER="");const E=$x[M];E&&(f.defines[E]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=x.texture,v.setRenderTarget(y),v.render(h,d),y=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),u.dispose(),f.dispose()}}const Ff=new vn,Uf=new Ki(1,1),Of=new bf(1),kf=new mf,Bf=new pm,zf=new wf,Gu=[],Hu=[],Wu=new Float32Array(16),Vu=new Float32Array(9),Xu=new Float32Array(4);function er(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=Gu[s];if(r===void 0&&(r=new Float32Array(s),Gu[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function Yt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function jt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function no(n,e){let t=Hu[e];t===void 0&&(t=new Int32Array(e),Hu[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function jx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Kx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;n.uniform2fv(this.addr,e),jt(t,e)}}function Zx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Yt(t,e))return;n.uniform3fv(this.addr,e),jt(t,e)}}function Jx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;n.uniform4fv(this.addr,e),jt(t,e)}}function Qx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Yt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),jt(t,e)}else{if(Yt(t,i))return;Xu.set(i),n.uniformMatrix2fv(this.addr,!1,Xu),jt(t,i)}}function ev(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Yt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),jt(t,e)}else{if(Yt(t,i))return;Vu.set(i),n.uniformMatrix3fv(this.addr,!1,Vu),jt(t,i)}}function tv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Yt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),jt(t,e)}else{if(Yt(t,i))return;Wu.set(i),n.uniformMatrix4fv(this.addr,!1,Wu),jt(t,i)}}function nv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function iv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;n.uniform2iv(this.addr,e),jt(t,e)}}function sv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Yt(t,e))return;n.uniform3iv(this.addr,e),jt(t,e)}}function rv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;n.uniform4iv(this.addr,e),jt(t,e)}}function av(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function ov(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;n.uniform2uiv(this.addr,e),jt(t,e)}}function lv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Yt(t,e))return;n.uniform3uiv(this.addr,e),jt(t,e)}}function cv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;n.uniform4uiv(this.addr,e),jt(t,e)}}function io(n){return n.version===0&&(n.compareFunction=uf,n.needsUpdate=!0),n}function uv(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?r=io(Uf):r=Ff,t.setTexture2D(e||r,s)}function hv(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Bf,s)}function fv(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_CUBE_SHADOW?r=io(Of):r=zf,t.setTextureCube(e||r,s)}function dv(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||kf,s)}function pv(n){switch(n){case 5126:return jx;case 35664:return Kx;case 35665:return Zx;case 35666:return Jx;case 35674:return Qx;case 35675:return ev;case 35676:return tv;case 5124:case 35670:return nv;case 35667:case 35671:return iv;case 35668:case 35672:return sv;case 35669:case 35673:return rv;case 5125:return av;case 36294:return ov;case 36295:return lv;case 36296:return cv;case 35678:case 36198:case 36298:case 36306:case 35682:return uv;case 35679:case 36299:case 36307:return hv;case 35680:case 36300:case 36308:case 36293:return fv;case 36289:case 36303:case 36311:case 36292:return dv}}function mv(n,e){n.uniform1fv(this.addr,e)}function gv(n,e){const t=er(e,this.size,2);n.uniform2fv(this.addr,t)}function xv(n,e){const t=er(e,this.size,3);n.uniform3fv(this.addr,t)}function vv(n,e){const t=er(e,this.size,4);n.uniform4fv(this.addr,t)}function _v(n,e){const t=er(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Mv(n,e){const t=er(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Sv(n,e){const t=er(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function yv(n,e){n.uniform1iv(this.addr,e)}function wv(n,e){n.uniform2iv(this.addr,e)}function bv(n,e){n.uniform3iv(this.addr,e)}function Ev(n,e){n.uniform4iv(this.addr,e)}function Tv(n,e){n.uniform1uiv(this.addr,e)}function Av(n,e){n.uniform2uiv(this.addr,e)}function Rv(n,e){n.uniform3uiv(this.addr,e)}function Cv(n,e){n.uniform4uiv(this.addr,e)}function Pv(n,e,t){const i=this.cache,s=e.length,r=no(t,s);Yt(i,r)||(n.uniform1iv(this.addr,r),jt(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=io(Uf):a=Ff;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function Lv(n,e,t){const i=this.cache,s=e.length,r=no(t,s);Yt(i,r)||(n.uniform1iv(this.addr,r),jt(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Bf,r[a])}function Dv(n,e,t){const i=this.cache,s=e.length,r=no(t,s);Yt(i,r)||(n.uniform1iv(this.addr,r),jt(i,r));let a;this.type===n.SAMPLER_CUBE_SHADOW?a=io(Of):a=zf;for(let o=0;o!==s;++o)t.setTextureCube(e[o]||a,r[o])}function Iv(n,e,t){const i=this.cache,s=e.length,r=no(t,s);Yt(i,r)||(n.uniform1iv(this.addr,r),jt(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||kf,r[a])}function Nv(n){switch(n){case 5126:return mv;case 35664:return gv;case 35665:return xv;case 35666:return vv;case 35674:return _v;case 35675:return Mv;case 35676:return Sv;case 5124:case 35670:return yv;case 35667:case 35671:return wv;case 35668:case 35672:return bv;case 35669:case 35673:return Ev;case 5125:return Tv;case 36294:return Av;case 36295:return Rv;case 36296:return Cv;case 35678:case 36198:case 36298:case 36306:case 35682:return Pv;case 35679:case 36299:case 36307:return Lv;case 35680:case 36300:case 36308:case 36293:return Dv;case 36289:case 36303:case 36311:case 36292:return Iv}}class Fv{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=pv(t.type)}}class Uv{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Nv(t.type)}}class Ov{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],i)}}}const Go=/(\w+)(\])?(\[|\.)?/g;function qu(n,e){n.seq.push(e),n.map[e.id]=e}function kv(n,e,t){const i=n.name,s=i.length;for(Go.lastIndex=0;;){const r=Go.exec(i),a=Go.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){qu(t,c===void 0?new Fv(o,n,e):new Uv(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new Ov(o),qu(t,f)),t=f}}}class La{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);kv(o,l,this)}const s=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&i.push(a)}return i}}function $u(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Bv=37297;let zv=0;function Gv(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const Yu=new et;function Hv(n){pt._getMatrix(Yu,pt.workingColorSpace,n);const e=`mat3( ${Yu.elements.map(t=>t.toFixed(4))} )`;switch(pt.getTransfer(n)){case Wa:return[e,"LinearTransferOETF"];case wt:return[e,"sRGBTransferOETF"];default:return Ye("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function ju(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Gv(n.getShaderSource(e),o)}else return r}function Wv(n,e){const t=Hv(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const Vv={[$h]:"Linear",[Yh]:"Reinhard",[jh]:"Cineon",[Kh]:"ACESFilmic",[Jh]:"AgX",[Qh]:"Neutral",[Zh]:"Custom"};function Xv(n,e){const t=Vv[e];return t===void 0?(Ye("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const pa=new G;function qv(){pt.getLuminanceCoefficients(pa);const n=pa.x.toFixed(4),e=pa.y.toFixed(4),t=pa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $v(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(vr).join(`
`)}function Yv(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function jv(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function vr(n){return n!==""}function Ku(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Zu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Kv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ql(n){return n.replace(Kv,Zv)}function Zv(n,e){const t=st[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Ql(t)}const Jv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ju(n){return n.replace(Jv,Qv)}function Qv(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Qu(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}const e_={[Mr]:"SHADOWMAP_TYPE_PCF",[xr]:"SHADOWMAP_TYPE_VSM"};function t_(n){return e_[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const n_={[Cr]:"ENVMAP_MODE_REFRACTION"};function i_(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":n_[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const s_={[Qa]:"ENVMAP_BLENDING_MULTIPLY",[Cp]:"ENVMAP_BLENDING_MIX",[Pp]:"ENVMAP_BLENDING_ADD"};function r_(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":s_[n.combine]||"ENVMAP_BLENDING_NONE"}function a_(n,e,t,i){const s=n.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=t_(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=i_(t),f=r_(t),h=$v(t),d=Yv(r),g=s.createProgram();let M,p,m=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(M=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(vr).join(`
`),M.length>0&&(M+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(vr).join(`
`),p.length>0&&(p+=`
`)):(M=[Qu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vr).join(`
`),p=[Qu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ri?"#define TONE_MAPPING":"",t.toneMapping!==Ri?st.tonemapping_pars_fragment:"",t.toneMapping!==Ri?Xv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",st.colorspace_pars_fragment,Wv("linearToOutputTexel",t.outputColorSpace),qv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(vr).join(`
`)),a=Ql(a),a=Ku(a,t),a=Zu(a,t),o=Ql(o),o=Ku(o,t),o=Zu(o,t),a=Ju(a),o=Ju(o),t.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,M=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,p=["#define varying in",t.glslVersion===su?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===su?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=m+M+a,w=m+p+o,_=$u(s,s.VERTEX_SHADER,y),v=$u(s,s.FRAGMENT_SHADER,w);s.attachShader(g,_),s.attachShader(g,v),t.index0AttributeName!==void 0?s.bindAttribLocation(g,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function S(T){if(n.debug.checkShaderErrors){const P=s.getProgramInfoLog(g)||"",L=s.getShaderInfoLog(_)||"",D=s.getShaderInfoLog(v)||"",C=P.trim(),I=L.trim(),O=D.trim();let U=!0,$=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(U=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,g,_,v);else{const k=ju(s,_,"vertex"),V=ju(s,v,"fragment");_t("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+C+`
`+k+`
`+V)}else C!==""?Ye("WebGLProgram: Program Info Log:",C):(I===""||O==="")&&($=!1);$&&(T.diagnostics={runnable:U,programLog:C,vertexShader:{log:I,prefix:M},fragmentShader:{log:O,prefix:p}})}s.deleteShader(_),s.deleteShader(v),x=new La(s,g),b=jv(s,g)}let x;this.getUniforms=function(){return x===void 0&&S(this),x};let b;this.getAttributes=function(){return b===void 0&&S(this),b};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=s.getProgramParameter(g,Bv)),E},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=zv++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=_,this.fragmentShader=v,this}let o_=0;class l_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new c_(e),t.set(e,i)),i}}class c_{constructor(e){this.id=o_++,this.code=e,this.usedTimes=0}}function u_(n){return n===Yi||n===za||n===Ga}function h_(n,e,t,i,s,r){const a=new gf,o=new l_,l=new Set,c=[],u=new Map,f=i.logarithmicDepthBuffer,h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(x){return l.add(x),x===0?"uv":`uv${x}`}function g(x,b,E,T,P,L){const D=T.fog,C=P.geometry,I=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?T.environment:null,O=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,U=e.get(x.envMap||I,O),$=h[x.type];let k=i.precision;x.precision!==null&&(k=i.getMaxPrecision(x.precision),k!==x.precision&&Ye("WebGLProgram.getParameters:",x.precision,"not supported, using",k,"instead."));const V=C.morphAttributes.position||C.morphAttributes.normal||C.morphAttributes.color,X=V!==void 0?V.length:0;let te=0;C.morphAttributes.position!==void 0&&(te=1),C.morphAttributes.normal!==void 0&&(te=2),C.morphAttributes.color!==void 0&&(te=3);let le,z,Z,se;if($){const Re=ai[$];le=Re.vertexShader,z=Re.fragmentShader}else{le=x.vertexShader,z=x.fragmentShader;const Re=o.getVertexShaderStage(x),yt=o.getFragmentShaderStage(x);o.update(x,Re,yt),Z=Re.id,se=yt.id}const q=n.getRenderTarget(),F=n.state.buffers.depth.getReversed(),ee=P.isInstancedMesh===!0,fe=P.isBatchedMesh===!0,he=!!x.map,ge=!!x.matcap,Le=!!U,ke=Le&&U.isPMREMTexture===!0,lt=!!x.aoMap,J=!!x.lightMap,de=!!x.bumpMap&&x.wireframe===!1,Pe=!!x.normalMap,Ze=!!x.displacementMap,De=!!x.emissiveMap,Xe=!!x.metalnessMap,xt=!!x.roughnessMap,St=x.anisotropy>0,W=x.clearcoat>0,Mn=x.diffuseRoughness>0,It=x.dispersion>0,Nt=x.retroreflectivity>0,Te=x.iridescence>0,Xt=x.sheen>0,qe=x.transmission>0,Je=St&&!!x.anisotropyMap,N=W&&!!x.clearcoatMap,A=W&&!!x.clearcoatNormalMap,j=W&&!!x.clearcoatRoughnessMap,pe=Mn&&!!x.diffuseRoughnessMap,ue=Te&&!!x.iridescenceMap,ve=Te&&!!x.iridescenceThicknessMap,be=Xt&&!!x.sheenColorMap,ie=Xt&&!!x.sheenRoughnessMap,re=!!x.specularMap,Me=!!x.specularColorMap,B=!!x.specularIntensityMap,oe=qe&&!!x.transmissionMap,ne=qe&&!!x.thicknessMap,Se=!!x.gradientMap,xe=!!x.alphaMap,_e=x.alphaTest>0,Ge=!!x.alphaHash,at=!!x.extensions;let me=Ri;x.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(me=n.toneMapping);const He=ke?U.isCompressedCubeTexture?U.image[0].mipmaps:U.mipmaps:null,rt={shaderID:$,shaderType:x.type,shaderName:x.name,vertexShader:le,fragmentShader:z,defines:x.defines,customVertexShaderID:Z,customFragmentShaderID:se,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:k,batching:fe,batchingColor:fe&&P._colorsTexture!==null,instancing:ee,instancingColor:ee&&P.instanceColor!==null,instancingMorph:ee&&P.morphTexture!==null,outputColorSpace:q===null?n.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:pt.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:he,matcap:ge,envMap:Le,envMapMode:Le&&U.mapping,envMapPMREM:ke,envMapMaxLod:ke?He.length-1:null,envMapSize:ke?He[0].width:null,aoMap:lt,lightMap:J,bumpMap:de,normalMap:Pe,displacementMap:Ze,emissiveMap:De,normalMapObjectSpace:Pe&&x.normalMapType===Np,normalMapTangentSpace:Pe&&x.normalMapType===Lr,packedNormalMap:Pe&&x.normalMapType===Lr&&u_(x.normalMap.format),metalnessMap:Xe,roughnessMap:xt,anisotropy:St,anisotropyMap:Je,clearcoat:W,clearcoatMap:N,clearcoatNormalMap:A,clearcoatRoughnessMap:j,diffuseRoughness:Mn,diffuseRoughnessMap:pe,dispersion:It,retroreflection:Nt,iridescence:Te,iridescenceMap:ue,iridescenceThicknessMap:ve,sheen:Xt,sheenColorMap:be,sheenRoughnessMap:ie,specularMap:re,specularColorMap:Me,specularIntensityMap:B,transmission:qe,transmissionMap:oe,thicknessMap:ne,gradientMap:Se,opaque:x.transparent===!1&&x.blending===Vs&&x.alphaToCoverage===!1,alphaMap:xe,alphaTest:_e,alphaHash:Ge,combine:x.combine,mapUv:he&&d(x.map.channel),aoMapUv:lt&&d(x.aoMap.channel),lightMapUv:J&&d(x.lightMap.channel),bumpMapUv:de&&d(x.bumpMap.channel),normalMapUv:Pe&&d(x.normalMap.channel),displacementMapUv:Ze&&d(x.displacementMap.channel),emissiveMapUv:De&&d(x.emissiveMap.channel),metalnessMapUv:Xe&&d(x.metalnessMap.channel),roughnessMapUv:xt&&d(x.roughnessMap.channel),anisotropyMapUv:Je&&d(x.anisotropyMap.channel),clearcoatMapUv:N&&d(x.clearcoatMap.channel),clearcoatNormalMapUv:A&&d(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:j&&d(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:pe&&d(x.diffuseRoughnessMap.channel),iridescenceMapUv:ue&&d(x.iridescenceMap.channel),iridescenceThicknessMapUv:ve&&d(x.iridescenceThicknessMap.channel),sheenColorMapUv:be&&d(x.sheenColorMap.channel),sheenRoughnessMapUv:ie&&d(x.sheenRoughnessMap.channel),specularMapUv:re&&d(x.specularMap.channel),specularColorMapUv:Me&&d(x.specularColorMap.channel),specularIntensityMapUv:B&&d(x.specularIntensityMap.channel),transmissionMapUv:oe&&d(x.transmissionMap.channel),thicknessMapUv:ne&&d(x.thicknessMap.channel),alphaMapUv:xe&&d(x.alphaMap.channel),vertexTangents:!!C.attributes.tangent&&(Pe||St),vertexNormals:!!C.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!C.attributes.color&&C.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!C.attributes.uv&&(he||xe),fog:!!D,useFog:x.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||C.attributes.normal===void 0&&Pe===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:F,skinning:P.isSkinnedMesh===!0,hasPositionAttribute:C.attributes.position!==void 0,morphTargets:C.morphAttributes.position!==void 0,morphNormals:C.morphAttributes.normal!==void 0,morphColors:C.morphAttributes.color!==void 0,morphTargetsCount:X,morphTextureStride:te,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:L.filter(Re=>Re.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&E.length>0,shadowMapType:n.shadowMap.type,toneMapping:me,decodeVideoTexture:he&&x.map.isVideoTexture===!0&&pt.getTransfer(x.map.colorSpace)===wt,decodeVideoTextureEmissive:De&&x.emissiveMap.isVideoTexture===!0&&pt.getTransfer(x.emissiveMap.colorSpace)===wt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===$n,flipSided:x.side===xn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:at&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(at&&x.extensions.multiDraw===!0||fe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return rt.vertexUv1s=l.has(1),rt.vertexUv2s=l.has(2),rt.vertexUv3s=l.has(3),l.clear(),rt}function M(x){const b=[];if(x.shaderID?b.push(x.shaderID):(b.push(x.customVertexShaderID),b.push(x.customFragmentShaderID)),x.defines!==void 0)for(const E in x.defines)b.push(E),b.push(x.defines[E]);return x.isRawShaderMaterial===!1&&(p(b,x),m(b,x),b.push(n.outputColorSpace)),b.push(x.customProgramCacheKey),b.join()}function p(x,b){x.push(b.precision),x.push(b.outputColorSpace),x.push(b.envMapMode),x.push(b.envMapPMREM),x.push(b.envMapMaxLod),x.push(b.envMapSize),x.push(b.mapUv),x.push(b.alphaMapUv),x.push(b.lightMapUv),x.push(b.aoMapUv),x.push(b.bumpMapUv),x.push(b.normalMapUv),x.push(b.displacementMapUv),x.push(b.emissiveMapUv),x.push(b.metalnessMapUv),x.push(b.roughnessMapUv),x.push(b.anisotropyMapUv),x.push(b.clearcoatMapUv),x.push(b.clearcoatNormalMapUv),x.push(b.clearcoatRoughnessMapUv),x.push(b.diffuseRoughnessMapUv),x.push(b.iridescenceMapUv),x.push(b.iridescenceThicknessMapUv),x.push(b.sheenColorMapUv),x.push(b.sheenRoughnessMapUv),x.push(b.specularMapUv),x.push(b.specularColorMapUv),x.push(b.specularIntensityMapUv),x.push(b.transmissionMapUv),x.push(b.thicknessMapUv),x.push(b.combine),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.numSunLights),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numSpotLightMaps),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numSunLightShadows),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.numSpotLightShadowsWithMaps),x.push(b.numLightProbes),x.push(b.numLightProbeGrids),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking)}function m(x,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.retroreflection&&a.enable(24),b.diffuseRoughness&&a.enable(25),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),b.packedNormalMap&&a.enable(22),b.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),b.numLightProbeGrids>0&&a.enable(22),b.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function y(x){const b=h[x.type];let E;if(b){const T=ai[b];E=Af.clone(T.uniforms)}else E=x.uniforms;return E}function w(x,b){let E=u.get(b);return E!==void 0?++E.usedTimes:(E=new a_(n,b,x,s),c.push(E),u.set(b,E)),E}function _(x){if(--x.usedTimes===0){const b=c.indexOf(x);c[b]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function v(x){o.remove(x)}function S(){o.dispose()}return{getParameters:g,getProgramCacheKey:M,getUniforms:y,acquireProgram:w,releaseProgram:_,releaseShaderCache:v,programs:c,dispose:S}}function f_(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function d_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function eh(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function th(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(h){let d=0;return h.isInstancedMesh&&(d+=2),h.isSkinnedMesh&&(d+=1),d}function o(h,d,g,M,p,m){let y=n[e];return y===void 0?(y={id:h.id,object:h,geometry:d,material:g,materialVariant:a(h),groupOrder:M,renderOrder:h.renderOrder,z:p,group:m},n[e]=y):(y.id=h.id,y.object=h,y.geometry=d,y.material=g,y.materialVariant=a(h),y.groupOrder=M,y.renderOrder=h.renderOrder,y.z=p,y.group=m),e++,y}function l(h,d,g,M,p,m,y){y.reversedDepth===!0&&(p=-p);const w=o(h,d,g,M,p,m);g.transmission>0?i.push(w):g.transparent===!0?s.push(w):t.push(w)}function c(h,d,g,M,p,m){const y=o(h,d,g,M,p,m);g.transmission>0?i.unshift(y):g.transparent===!0?s.unshift(y):t.unshift(y)}function u(h,d){t.length>1&&t.sort(h||d_),i.length>1&&i.sort(d||eh),s.length>1&&s.sort(d||eh)}function f(){for(let h=e,d=n.length;h<d;h++){const g=n[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:f,sort:u}}function p_(){let n=new WeakMap;function e(i,s){const r=n.get(i);let a;return r===void 0?(a=new th,n.set(i,[a])):s>=r.length?(a=new th,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function m_(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new G,color:new Ue};break;case"SpotLight":t={position:new G,direction:new G,color:new Ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new G,color:new Ue,distance:0,decay:0};break;case"HemisphereLight":t={direction:new G,skyColor:new Ue,groundColor:new Ue};break;case"RectAreaLight":t={color:new Ue,position:new G,halfWidth:new G,halfHeight:new G};break}return n[e.id]=t,t}}}function g_(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let x_=0;function v_(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function __(n){const e=new m_,t=g_(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new G);const s=new G,r=new Ve,a=new Ve;function o(c){let u=0,f=0,h=0;for(let L=0;L<9;L++)i.probe[L].set(0,0,0);let d=0,g=0,M=0,p=0,m=0,y=0,w=0,_=0,v=0,S=0,x=0,b=0,E=0,T=0;c.sort(v_);for(let L=0,D=c.length;L<D;L++){const C=c[L],I=C.color,O=C.intensity,U=C.distance;let $=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===Yi?$=C.shadow.map.texture:$=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)u+=I.r*O,f+=I.g*O,h+=I.b*O;else if(C.isLightProbe){for(let k=0;k<9;k++)i.probe[k].addScaledVector(C.sh.coefficients[k],O);T++}else if(C.isSunLight){const k=e.get(C);if(k.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const V=C.shadow,X=t.get(C);X.shadowIntensity=V.intensity,X.shadowBias=V.bias,X.shadowNormalBias=V.normalBias,X.shadowRadius=V.radius,X.shadowMapSize.copy(V.mapSize).multiply(V.getFrameExtents()),i.sunShadow[g]=X,i.sunShadowMap[g]=$;const te=V.getViewportCount();for(let le=0;le<te;le++)i.sunShadowMatrix[M+le]=V.getMatrix(le),i.sunShadowCascade[M+le]=V._cascadeData[le];M+=te,g++}i.sun[d]=k,d++}else if(C.isDirectionalLight){const k=e.get(C);if(k.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const V=C.shadow,X=t.get(C);X.shadowIntensity=V.intensity,X.shadowBias=V.bias,X.shadowNormalBias=V.normalBias,X.shadowRadius=V.radius,X.shadowMapSize=V.mapSize,i.directionalShadow[p]=X,i.directionalShadowMap[p]=$,i.directionalShadowMatrix[p]=C.shadow.matrix,v++}i.directional[p]=k,p++}else if(C.isSpotLight){const k=e.get(C);k.position.setFromMatrixPosition(C.matrixWorld),k.color.copy(I).multiplyScalar(O),k.distance=U,k.coneCos=Math.cos(C.angle),k.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),k.decay=C.decay,i.spot[y]=k;const V=C.shadow;if(C.map&&(i.spotLightMap[b]=C.map,b++,V.updateMatrices(C),C.castShadow&&E++),i.spotLightMatrix[y]=V.matrix,C.castShadow){const X=t.get(C);X.shadowIntensity=V.intensity,X.shadowBias=V.bias,X.shadowNormalBias=V.normalBias,X.shadowRadius=V.radius,X.shadowMapSize=V.mapSize,i.spotShadow[y]=X,i.spotShadowMap[y]=$,x++}y++}else if(C.isRectAreaLight){const k=e.get(C);k.color.copy(I).multiplyScalar(O),k.halfWidth.set(C.width*.5,0,0),k.halfHeight.set(0,C.height*.5,0),i.rectArea[w]=k,w++}else if(C.isPointLight){const k=e.get(C);if(k.color.copy(C.color).multiplyScalar(C.intensity),k.distance=C.distance,k.decay=C.decay,C.castShadow){const V=C.shadow,X=t.get(C);X.shadowIntensity=V.intensity,X.shadowBias=V.bias,X.shadowNormalBias=V.normalBias,X.shadowRadius=V.radius,X.shadowMapSize=V.mapSize,X.shadowCameraNear=V.camera.near,X.shadowCameraFar=V.camera.far,i.pointShadow[m]=X,i.pointShadowMap[m]=$,i.pointShadowMatrix[m]=C.shadow.matrix,S++}i.point[m]=k,m++}else if(C.isHemisphereLight){const k=e.get(C);k.skyColor.copy(C.color).multiplyScalar(O),k.groundColor.copy(C.groundColor).multiplyScalar(O),i.hemi[_]=k,_++}}w>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ae.LTC_FLOAT_1,i.rectAreaLTC2=Ae.LTC_FLOAT_2):(i.rectAreaLTC1=Ae.LTC_HALF_1,i.rectAreaLTC2=Ae.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const P=i.hash;(P.sunLength!==d||P.directionalLength!==p||P.pointLength!==m||P.spotLength!==y||P.rectAreaLength!==w||P.hemiLength!==_||P.numSunShadows!==g||P.numDirectionalShadows!==v||P.numPointShadows!==S||P.numSpotShadows!==x||P.numSpotMaps!==b||P.numLightProbes!==T)&&(i.sun.length=d,i.directional.length=p,i.spot.length=y,i.rectArea.length=w,i.point.length=m,i.hemi.length=_,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=M,i.sunShadowCascade.length=M,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.directionalShadowMatrix.length=v,i.pointShadow.length=S,i.pointShadowMap.length=S,i.pointShadowMatrix.length=S,i.spotShadow.length=x,i.spotShadowMap.length=x,i.spotLightMatrix.length=x+b-E,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=T,P.sunLength=d,P.directionalLength=p,P.pointLength=m,P.spotLength=y,P.rectAreaLength=w,P.hemiLength=_,P.numSunShadows=g,P.numDirectionalShadows=v,P.numPointShadows=S,P.numSpotShadows=x,P.numSpotMaps=b,P.numLightProbes=T,i.version=x_++)}function l(c,u){let f=0,h=0,d=0,g=0,M=0,p=0;const m=u.matrixWorldInverse;for(let y=0,w=c.length;y<w;y++){const _=c[y];if(_.isSunLight){const v=i.sun[f];v.direction.setFromMatrixPosition(_.matrixWorld),v.direction.transformDirection(m),f++}else if(_.isDirectionalLight){const v=i.directional[h];v.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),h++}else if(_.isSpotLight){const v=i.spot[g];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),g++}else if(_.isRectAreaLight){const v=i.rectArea[M];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(m),a.identity(),r.copy(_.matrixWorld),r.premultiply(m),a.extractRotation(r),v.halfWidth.set(_.width*.5,0,0),v.halfHeight.set(0,_.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),M++}else if(_.isPointLight){const v=i.point[d];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(m),d++}else if(_.isHemisphereLight){const v=i.hemi[p];v.direction.setFromMatrixPosition(_.matrixWorld),v.direction.transformDirection(m),p++}}}return{setup:o,setupView:l,state:i}}function nh(n){const e=new __(n),t=[],i=[],s=[];function r(f){u.camera=f,t.length=0,i.length=0,s.length=0}function a(f){f.isLightProbeGrid?s.push(f):t.push(f)}function o(f){i.push(f)}function l(){e.setup(t),s.sort((f,h)=>f.priority-h.priority||f.id-h.id)}function c(f){e.setupView(t,f)}const u={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function M_(n){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new nh(n),e.set(s,[o])):r>=a.length?(o=new nh(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const S_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,y_=`uniform sampler2D shadow_pass;
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
}`,w_=[new G(1,0,0),new G(-1,0,0),new G(0,1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1)],b_=[new G(0,-1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1),new G(0,-1,0),new G(0,-1,0)],ih=new Ve,cr=new G,Ho=new G;function E_(n,e,t){let i=new ji;const s=new Oe,r=new Oe,a=new Mt,o=new Rc,l=new zm,c={},u=t.maxTextureSize,f={[ms]:xn,[xn]:ms,[$n]:$n},h=new _n({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Oe},radius:{value:4}},vertexShader:S_,fragmentShader:y_}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const g=new Dt;g.setAttribute("position",new tt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new gt(g,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Mr;let m=this.type;this.render=function(S,x,b){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||S.length===0)return;this.type===up&&(Ye("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Mr);const E=n.getRenderTarget(),T=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),L=n.state;L.setBlending(Ws),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const D=m!==this.type;D&&x.traverse(function(C){C.material&&(Array.isArray(C.material)?C.material.forEach(I=>I.needsUpdate=!0):C.material.needsUpdate=!0)});for(let C=0,I=S.length;C<I;C++){const O=S[C],U=O.shadow;if(U===void 0){Ye("WebGLShadowMap:",O,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;s.copy(U.mapSize);const $=U.getFrameExtents();s.multiply($),r.copy(U.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/$.x),s.x=r.x*$.x,U.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/$.y),s.y=r.y*$.y,U.mapSize.y=r.y));const k=n.state.buffers.depth.getReversed();if(U.camera._reversedDepth=k,U.map===null||D===!0){if(U.map!==null&&(U.map.depthTexture!==null&&(U.map.depthTexture.dispose(),U.map.depthTexture=null),U.map.dispose()),this.type===xr){if(O.isPointLight){Ye("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}U.map=new $t(s.x,s.y,{format:Yi,type:di,minFilter:kt,magFilter:kt,generateMipmaps:!1}),U.map.texture.name=O.name+".shadowMap",U.map.depthTexture=new Ki(s.x,s.y,Rn),U.map.depthTexture.name=O.name+".shadowMapDepth",U.map.depthTexture.format=$i,U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=bt,U.map.depthTexture.magFilter=bt}else O.isPointLight?(U.map=new Cc(s.x),U.map.depthTexture=new bf(s.x,fi)):(U.map=new $t(s.x,s.y),U.map.depthTexture=new Ki(s.x,s.y,fi)),U.map.depthTexture.name=O.name+".shadowMap",U.map.depthTexture.format=$i,this.type===Mr?(U.map.depthTexture.compareFunction=k?cf:lf,U.map.depthTexture.minFilter=kt,U.map.depthTexture.magFilter=kt):(U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=bt,U.map.depthTexture.magFilter=bt);U.camera.updateProjectionMatrix()}U.map.isWebGLCubeRenderTarget!==!0&&(U.map.width!==s.x||U.map.height!==s.y)&&U.map.setSize(s.x,s.y);const V=U.map.isWebGLCubeRenderTarget?6:U.getViewportCount();O.isPointLight!==!0&&U.updateMatrices(O,b);const X=(U.camera.layers.mask&4294967294)!==0?U.camera.layers:b.layers;for(let te=0;te<V;te++){const le=U.getCamera(te);if(O.isPointLight){const z=U.camera,Z=U.matrix,se=O.distance||z.far;se!==z.far&&(z.far=se,z.updateProjectionMatrix()),cr.setFromMatrixPosition(O.matrixWorld),z.position.copy(cr),Ho.copy(z.position),Ho.add(w_[te]),z.up.copy(b_[te]),z.lookAt(Ho),z.updateMatrixWorld(),Z.makeTranslation(-cr.x,-cr.y,-cr.z),ih.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),U._frustum.setFromProjectionMatrix(ih,z.coordinateSystem,z.reversedDepth)}if(U.map.isWebGLCubeRenderTarget)n.setRenderTarget(U.map,te),n.clear();else{te===0&&(n.setRenderTarget(U.map),n.clear());const z=U.getViewport(te);a.set(r.x*z.x,r.y*z.y,r.x*z.z,r.y*z.w),L.viewport(a)}i=U.getFrustum(te),_(x,b,le,O,X,this.type)}U.isPointLightShadow!==!0&&this.type===xr&&y(U,b),U.needsUpdate=!1}m=this.type,p.needsUpdate=!1,n.setRenderTarget(E,T,P)};function y(S,x){const b=e.update(M);h.defines.VSM_SAMPLES!==S.blurSamples&&(h.defines.VSM_SAMPLES=S.blurSamples,d.defines.VSM_SAMPLES=S.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),S.mapPass===null?S.mapPass=new $t(s.x,s.y,{format:Yi,type:di}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),h.uniforms.shadow_pass.value=S.map.depthTexture,h.uniforms.resolution.value.set(S.map.width,S.map.height),h.uniforms.radius.value=S.radius,n.setRenderTarget(S.mapPass),n.clear(),n.renderBufferDirect(x,null,b,h,M,null),d.uniforms.shadow_pass.value=S.mapPass.texture,d.uniforms.resolution.value.set(S.map.width,S.map.height),d.uniforms.radius.value=S.radius,n.setRenderTarget(S.map),n.clear(),n.renderBufferDirect(x,null,b,d,M,null)}function w(S,x,b,E){let T=null;const P=b.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(P!==void 0)T=P;else if(T=b.isPointLight===!0?l:o,n.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){const L=T.uuid,D=x.uuid;let C=c[L];C===void 0&&(C={},c[L]=C);let I=C[D];I===void 0&&(I=T.clone(),C[D]=I,x.addEventListener("dispose",v)),T=I}if(T.visible=x.visible,T.wireframe=x.wireframe,E===xr?T.side=x.shadowSide!==null?x.shadowSide:x.side:T.side=x.shadowSide!==null?x.shadowSide:f[x.side],T.alphaMap=x.alphaMap,T.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,T.map=x.map,T.clipShadows=x.clipShadows,T.clippingPlanes=x.clippingPlanes,T.clipIntersection=x.clipIntersection,T.displacementMap=x.displacementMap,T.displacementScale=x.displacementScale,T.displacementBias=x.displacementBias,T.wireframeLinewidth=x.wireframeLinewidth,T.linewidth=x.linewidth,b.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const L=n.properties.get(T);L.light=b}return T}function _(S,x,b,E,T,P){if(S.visible===!1)return;if(S.layers.test(T)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&P===xr)&&(!S.frustumCulled||S.intersectsFrustum(i))){S.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,S.matrixWorld);const C=e.update(S),I=S.material;if(Array.isArray(I)){const O=C.groups;for(let U=0,$=O.length;U<$;U++){const k=O[U],V=I[k.materialIndex];if(V&&V.visible){const X=w(S,V,E,P);S.onBeforeShadow(n,S,x,b,C,X,k),n.renderBufferDirect(b,null,C,X,S,k),S.onAfterShadow(n,S,x,b,C,X,k)}}}else if(I.visible){const O=w(S,I,E,P);S.onBeforeShadow(n,S,x,b,C,O,null),n.renderBufferDirect(b,null,C,O,S,null),S.onAfterShadow(n,S,x,b,C,O,null)}}const D=S.children;for(let C=0,I=D.length;C<I;C++)_(D[C],x,b,E,T,P)}function v(S){S.target.removeEventListener("dispose",v);for(const b in c){const E=c[b],T=S.target.uuid;T in E&&(E[T].dispose(),delete E[T])}}}function T_(n,e){function t(){let B=!1;const oe=new Mt;let ne=null;const Se=new Mt(0,0,0,0);return{setMask:function(xe){ne!==xe&&!B&&(n.colorMask(xe,xe,xe,xe),ne=xe)},setLocked:function(xe){B=xe},setClear:function(xe,_e,Ge,at,me){me===!0&&(xe*=at,_e*=at,Ge*=at),oe.set(xe,_e,Ge,at),Se.equals(oe)===!1&&(n.clearColor(xe,_e,Ge,at),Se.copy(oe))},reset:function(){B=!1,ne=null,Se.set(-1,0,0,0)}}}function i(){let B=!1,oe=!1,ne=null,Se=null,xe=null;return{setReversed:function(_e){if(oe!==_e){const Ge=e.get("EXT_clip_control");_e?Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.ZERO_TO_ONE_EXT):Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.NEGATIVE_ONE_TO_ONE_EXT),oe=_e;const at=xe;xe=null,this.setClear(at)}},getReversed:function(){return oe},setTest:function(_e){_e?F(n.DEPTH_TEST):ee(n.DEPTH_TEST)},setMask:function(_e){ne!==_e&&!B&&(n.depthMask(_e),ne=_e)},setFunc:function(_e){if(oe&&(_e=$p[_e]),Se!==_e){switch(_e){case ml:n.depthFunc(n.NEVER);break;case Ba:n.depthFunc(n.ALWAYS);break;case gl:n.depthFunc(n.LESS);break;case Rr:n.depthFunc(n.LEQUAL);break;case xl:n.depthFunc(n.EQUAL);break;case vl:n.depthFunc(n.GEQUAL);break;case _l:n.depthFunc(n.GREATER);break;case Ml:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Se=_e}},setLocked:function(_e){B=_e},setClear:function(_e){xe!==_e&&(xe=_e,oe&&(_e=1-_e),n.clearDepth(_e))},reset:function(){B=!1,ne=null,Se=null,xe=null,oe=!1}}}function s(){let B=!1,oe=null,ne=null,Se=null,xe=null,_e=null,Ge=null,at=null,me=null;return{setTest:function(He){B||(He?F(n.STENCIL_TEST):ee(n.STENCIL_TEST))},setMask:function(He){oe!==He&&!B&&(n.stencilMask(He),oe=He)},setFunc:function(He,rt,Re){(ne!==He||Se!==rt||xe!==Re)&&(n.stencilFunc(He,rt,Re),ne=He,Se=rt,xe=Re)},setOp:function(He,rt,Re){(_e!==He||Ge!==rt||at!==Re)&&(n.stencilOp(He,rt,Re),_e=He,Ge=rt,at=Re)},setLocked:function(He){B=He},setClear:function(He){me!==He&&(n.clearStencil(He),me=He)},reset:function(){B=!1,oe=null,ne=null,Se=null,xe=null,_e=null,Ge=null,at=null,me=null}}}const r=new t,a=new i,o=new s;let l={};const c=new WeakMap;let u={},f={},h={},d=new WeakMap,g=[],M=null,p=!1,m=null,y=null,w=null,_=null,v=null,S=null,x=null,b=new Ue(0,0,0),E=0,T=!1,P=null,L=null,D=null,C=null,I=null;const O=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let U=!1,$=0;const k=n.getParameter(n.VERSION);k.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(k)[1]),U=$>=1):k.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),U=$>=2);let V=null,X={};const te=n.getParameter(n.SCISSOR_BOX),le=n.getParameter(n.VIEWPORT),z=new Mt().fromArray(te),Z=new Mt().fromArray(le);function se(B,oe,ne,Se){const xe=new Uint8Array(4),_e=n.createTexture();n.bindTexture(B,_e),n.texParameteri(B,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(B,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ge=0;Ge<ne;Ge++)B===n.TEXTURE_3D||B===n.TEXTURE_2D_ARRAY?n.texImage3D(oe,0,n.RGBA,1,1,Se,0,n.RGBA,n.UNSIGNED_BYTE,xe):n.texImage2D(oe+Ge,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,xe);return _e}const q={};q[n.TEXTURE_2D]=se(n.TEXTURE_2D,n.TEXTURE_2D,1),q[n.TEXTURE_CUBE_MAP]=se(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[n.TEXTURE_2D_ARRAY]=se(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),q[n.TEXTURE_3D]=se(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),F(n.DEPTH_TEST),a.setFunc(Rr),de(!1),Pe(eu),F(n.CULL_FACE),lt(Ws);function F(B){u[B]!==!0&&(n.enable(B),u[B]=!0)}function ee(B){u[B]!==!1&&(n.disable(B),u[B]=!1)}function fe(B,oe){return h[B]!==oe?(n.bindFramebuffer(B,oe),h[B]=oe,B===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=oe),B===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=oe),!0):!1}function he(B,oe){let ne=g,Se=!1;if(B){ne=d.get(oe),ne===void 0&&(ne=[],d.set(oe,ne));const xe=B.textures;if(ne.length!==xe.length||ne[0]!==n.COLOR_ATTACHMENT0){for(let _e=0,Ge=xe.length;_e<Ge;_e++)ne[_e]=n.COLOR_ATTACHMENT0+_e;ne.length=xe.length,Se=!0}}else ne[0]!==n.BACK&&(ne[0]=n.BACK,Se=!0);Se&&n.drawBuffers(ne)}function ge(B){return M!==B?(n.useProgram(B),M=B,!0):!1}const Le={[zs]:n.FUNC_ADD,[fp]:n.FUNC_SUBTRACT,[dp]:n.FUNC_REVERSE_SUBTRACT};Le[pp]=n.MIN,Le[mp]=n.MAX;const ke={[gp]:n.ZERO,[xp]:n.ONE,[vp]:n.SRC_COLOR,[Xh]:n.SRC_ALPHA,[bp]:n.SRC_ALPHA_SATURATE,[yp]:n.DST_COLOR,[Mp]:n.DST_ALPHA,[_p]:n.ONE_MINUS_SRC_COLOR,[qh]:n.ONE_MINUS_SRC_ALPHA,[wp]:n.ONE_MINUS_DST_COLOR,[Sp]:n.ONE_MINUS_DST_ALPHA,[Ep]:n.CONSTANT_COLOR,[Tp]:n.ONE_MINUS_CONSTANT_COLOR,[Ap]:n.CONSTANT_ALPHA,[Rp]:n.ONE_MINUS_CONSTANT_ALPHA};function lt(B,oe,ne,Se,xe,_e,Ge,at,me,He){if(B===Ws){p===!0&&(ee(n.BLEND),p=!1);return}if(p===!1&&(F(n.BLEND),p=!0),B!==hp){if(B!==m||He!==T){if((y!==zs||v!==zs)&&(n.blendEquation(n.FUNC_ADD),y=zs,v=zs),He)switch(B){case Vs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ka:n.blendFunc(n.ONE,n.ONE);break;case tu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case nu:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:_t("WebGLState: Invalid blending: ",B);break}else switch(B){case Vs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ka:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case tu:_t("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case nu:_t("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:_t("WebGLState: Invalid blending: ",B);break}w=null,_=null,S=null,x=null,b.set(0,0,0),E=0,m=B,T=He}return}xe=xe||oe,_e=_e||ne,Ge=Ge||Se,(oe!==y||xe!==v)&&(n.blendEquationSeparate(Le[oe],Le[xe]),y=oe,v=xe),(ne!==w||Se!==_||_e!==S||Ge!==x)&&(n.blendFuncSeparate(ke[ne],ke[Se],ke[_e],ke[Ge]),w=ne,_=Se,S=_e,x=Ge),(at.equals(b)===!1||me!==E)&&(n.blendColor(at.r,at.g,at.b,me),b.copy(at),E=me),m=B,T=!1}function J(B,oe){B.side===$n?ee(n.CULL_FACE):F(n.CULL_FACE);let ne=B.side===xn;oe&&(ne=!ne),de(ne),B.blending===Vs&&B.transparent===!1?lt(Ws):lt(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),a.setFunc(B.depthFunc),a.setTest(B.depthTest),a.setMask(B.depthWrite),r.setMask(B.colorWrite);const Se=B.stencilWrite;o.setTest(Se),Se&&(o.setMask(B.stencilWriteMask),o.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),o.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),De(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?F(n.SAMPLE_ALPHA_TO_COVERAGE):ee(n.SAMPLE_ALPHA_TO_COVERAGE)}function de(B){P!==B&&(B?n.frontFace(n.CW):n.frontFace(n.CCW),P=B)}function Pe(B){B!==op?(F(n.CULL_FACE),B!==L&&(B===eu?n.cullFace(n.BACK):B===lp?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ee(n.CULL_FACE),L=B}function Ze(B){B!==D&&(U&&n.lineWidth(B),D=B)}function De(B,oe,ne){B?(F(n.POLYGON_OFFSET_FILL),(C!==oe||I!==ne)&&(C=oe,I=ne,a.getReversed()&&(oe=-oe,ne=-ne),n.polygonOffset(oe,ne))):ee(n.POLYGON_OFFSET_FILL)}function Xe(B){B?F(n.SCISSOR_TEST):ee(n.SCISSOR_TEST)}function xt(B){B===void 0&&(B=n.TEXTURE0+O-1),V!==B&&(n.activeTexture(B),V=B)}function St(B,oe,ne){ne===void 0&&(V===null?ne=n.TEXTURE0+O-1:ne=V);let Se=X[ne];Se===void 0&&(Se={type:void 0,texture:void 0},X[ne]=Se),(Se.type!==B||Se.texture!==oe)&&(V!==ne&&(n.activeTexture(ne),V=ne),n.bindTexture(B,oe||q[B]),Se.type=B,Se.texture=oe)}function W(){const B=X[V];B!==void 0&&B.type!==void 0&&(n.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function Mn(){try{n.compressedTexImage2D(...arguments)}catch(B){_t("WebGLState:",B)}}function It(){try{n.compressedTexImage3D(...arguments)}catch(B){_t("WebGLState:",B)}}function Nt(){try{n.texSubImage2D(...arguments)}catch(B){_t("WebGLState:",B)}}function Te(){try{n.texSubImage3D(...arguments)}catch(B){_t("WebGLState:",B)}}function Xt(){try{n.compressedTexSubImage2D(...arguments)}catch(B){_t("WebGLState:",B)}}function qe(){try{n.compressedTexSubImage3D(...arguments)}catch(B){_t("WebGLState:",B)}}function Je(){try{n.texStorage2D(...arguments)}catch(B){_t("WebGLState:",B)}}function N(){try{n.texStorage3D(...arguments)}catch(B){_t("WebGLState:",B)}}function A(){try{n.texImage2D(...arguments)}catch(B){_t("WebGLState:",B)}}function j(){try{n.texImage3D(...arguments)}catch(B){_t("WebGLState:",B)}}function pe(B){return f[B]!==void 0?f[B]:n.getParameter(B)}function ue(B,oe){f[B]!==oe&&(n.pixelStorei(B,oe),f[B]=oe)}function ve(B){z.equals(B)===!1&&(n.scissor(B.x,B.y,B.z,B.w),z.copy(B))}function be(B){Z.equals(B)===!1&&(n.viewport(B.x,B.y,B.z,B.w),Z.copy(B))}function ie(B,oe){let ne=c.get(oe);ne===void 0&&(ne=new WeakMap,c.set(oe,ne));let Se=ne.get(B);Se===void 0&&(Se=n.getUniformBlockIndex(oe,B.name),n.uniformBlockBinding(oe,Se,Se),ne.set(B,Se))}function re(B,oe,ne){const xe=c.get(oe).get(B);l[xe]!==ne&&(n.bindBufferBase(n.UNIFORM_BUFFER,xe,ne),l[xe]=ne)}function Me(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},f={},V=null,X={},h={},l={},d=new WeakMap,g=[],M=null,p=!1,m=null,y=null,w=null,_=null,v=null,S=null,x=null,b=new Ue(0,0,0),E=0,T=!1,P=null,L=null,D=null,C=null,I=null,z.set(0,0,n.canvas.width,n.canvas.height),Z.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:F,disable:ee,bindFramebuffer:fe,drawBuffers:he,useProgram:ge,setBlending:lt,setMaterial:J,setFlipSided:de,setCullFace:Pe,setLineWidth:Ze,setPolygonOffset:De,setScissorTest:Xe,activeTexture:xt,bindTexture:St,unbindTexture:W,compressedTexImage2D:Mn,compressedTexImage3D:It,texImage2D:A,texImage3D:j,pixelStorei:ue,getParameter:pe,updateUBOMapping:ie,uniformBlockBinding:re,texStorage2D:Je,texStorage3D:N,texSubImage2D:Nt,texSubImage3D:Te,compressedTexSubImage2D:Xt,compressedTexSubImage3D:qe,scissor:ve,viewport:be,reset:Me}}function A_(n,e,t,i,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Oe,u=new WeakMap,f=new Set;let h;const d=new WeakMap,g=new Set,M=new FinalizationRegistry(N=>g.delete(N));let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(N,A){return p?new OffscreenCanvas(N,A):Va("canvas")}function y(N,A,j){let pe=1;const ue=Je(N);if((ue.width>j||ue.height>j)&&(pe=j/Math.max(ue.width,ue.height)),pe<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const ve=Math.floor(pe*ue.width),be=Math.floor(pe*ue.height);h===void 0&&(h=m(ve,be));const ie=A?m(ve,be):h;return ie.width=ve,ie.height=be,ie.getContext("2d").drawImage(N,0,0,ve,be),Ye("WebGLRenderer: Texture has been resized from ("+ue.width+"x"+ue.height+") to ("+ve+"x"+be+")."),ie}else return"data"in N&&Ye("WebGLRenderer: Image in DataTexture is too big ("+ue.width+"x"+ue.height+")."),N;return N}function w(N){return N.generateMipmaps}function _(N){n.generateMipmap(N)}function v(N){return N.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?n.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function S(N,A,j,pe,ue,ve=!1){if(N!==null){if(n[N]!==void 0)return n[N];Ye("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let be;pe&&(be=e.get("EXT_texture_norm16"),be||Ye("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ie=A;if(A===n.RED&&(j===n.FLOAT&&(ie=n.R32F),j===n.HALF_FLOAT&&(ie=n.R16F),j===n.UNSIGNED_BYTE&&(ie=n.R8),j===n.UNSIGNED_SHORT&&be&&(ie=be.R16_EXT),j===n.SHORT&&be&&(ie=be.R16_SNORM_EXT)),A===n.RED_INTEGER&&(j===n.UNSIGNED_BYTE&&(ie=n.R8UI),j===n.UNSIGNED_SHORT&&(ie=n.R16UI),j===n.UNSIGNED_INT&&(ie=n.R32UI),j===n.BYTE&&(ie=n.R8I),j===n.SHORT&&(ie=n.R16I),j===n.INT&&(ie=n.R32I)),A===n.RG&&(j===n.FLOAT&&(ie=n.RG32F),j===n.HALF_FLOAT&&(ie=n.RG16F),j===n.UNSIGNED_BYTE&&(ie=n.RG8),j===n.UNSIGNED_SHORT&&be&&(ie=be.RG16_EXT),j===n.SHORT&&be&&(ie=be.RG16_SNORM_EXT)),A===n.RG_INTEGER&&(j===n.UNSIGNED_BYTE&&(ie=n.RG8UI),j===n.UNSIGNED_SHORT&&(ie=n.RG16UI),j===n.UNSIGNED_INT&&(ie=n.RG32UI),j===n.BYTE&&(ie=n.RG8I),j===n.SHORT&&(ie=n.RG16I),j===n.INT&&(ie=n.RG32I)),A===n.RGB_INTEGER&&(j===n.UNSIGNED_BYTE&&(ie=n.RGB8UI),j===n.UNSIGNED_SHORT&&(ie=n.RGB16UI),j===n.UNSIGNED_INT&&(ie=n.RGB32UI),j===n.BYTE&&(ie=n.RGB8I),j===n.SHORT&&(ie=n.RGB16I),j===n.INT&&(ie=n.RGB32I)),A===n.RGBA_INTEGER&&(j===n.UNSIGNED_BYTE&&(ie=n.RGBA8UI),j===n.UNSIGNED_SHORT&&(ie=n.RGBA16UI),j===n.UNSIGNED_INT&&(ie=n.RGBA32UI),j===n.BYTE&&(ie=n.RGBA8I),j===n.SHORT&&(ie=n.RGBA16I),j===n.INT&&(ie=n.RGBA32I)),A===n.RGB&&(j===n.UNSIGNED_SHORT&&be&&(ie=be.RGB16_EXT),j===n.SHORT&&be&&(ie=be.RGB16_SNORM_EXT),j===n.UNSIGNED_INT_5_9_9_9_REV&&(ie=n.RGB9_E5),j===n.UNSIGNED_INT_10F_11F_11F_REV&&(ie=n.R11F_G11F_B10F)),A===n.RGBA){const re=ve?Wa:pt.getTransfer(ue);j===n.FLOAT&&(ie=n.RGBA32F),j===n.HALF_FLOAT&&(ie=n.RGBA16F),j===n.UNSIGNED_BYTE&&(ie=re===wt?n.SRGB8_ALPHA8:n.RGBA8),j===n.UNSIGNED_SHORT&&be&&(ie=be.RGBA16_EXT),j===n.SHORT&&be&&(ie=be.RGBA16_SNORM_EXT),j===n.UNSIGNED_SHORT_4_4_4_4&&(ie=n.RGBA4),j===n.UNSIGNED_SHORT_5_5_5_1&&(ie=n.RGB5_A1)}return(ie===n.R16F||ie===n.R32F||ie===n.RG16F||ie===n.RG32F||ie===n.RGBA16F||ie===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function x(N,A){let j;return N?A===null||A===fi||A===Zs?j=n.DEPTH24_STENCIL8:A===Rn?j=n.DEPTH32F_STENCIL8:A===Pr&&(j=n.DEPTH24_STENCIL8,Ye("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===fi||A===Zs?j=n.DEPTH_COMPONENT24:A===Rn?j=n.DEPTH_COMPONENT32F:A===Pr&&(j=n.DEPTH_COMPONENT16),j}function b(N,A){return w(N)===!0||N.isFramebufferTexture&&N.minFilter!==bt&&N.minFilter!==kt?Math.log2(Math.max(A.width,A.height))+1:N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?A.mipmaps.length:1}function E(N){const A=new WeakRef(N);i.get(N).__ref=A,g.add(A),M.register(N,A,A)}function T(N){const A=i.get(N).__ref;A!==void 0&&(g.delete(A),M.unregister(A))}function P(N){D(N.target)}function L(N){C(N.target)}function D(N){N.removeEventListener("dispose",P),T(N),O(N),N.isVideoTexture&&u.delete(N),N.isHTMLTexture&&f.delete(N)}function C(N){N.removeEventListener("dispose",L),T(N),$(N)}function I(){for(const N of g){const A=N.deref();A!==void 0&&(A.isRenderTarget===!0?C(A):D(A))}g.clear(),f.clear()}function O(N){const A=i.get(N);if(A.__webglInit===void 0)return;const j=N.source,pe=d.get(j);if(pe){const ue=pe[A.__cacheKey];ue.usedTimes--,ue.usedTimes===0&&U(N),Object.keys(pe).length===0&&d.delete(j)}i.remove(N)}function U(N){const A=i.get(N);n.deleteTexture(A.__webglTexture);const j=N.source,pe=d.get(j);delete pe[A.__cacheKey],a.memory.textures--}function $(N){const A=i.get(N);A.__depthDisposeCallback&&A.__depthDisposeCallback();const j=N.depthTexture;if(j&&j.renderTarget===N&&D(j),N.isWebGLCubeRenderTarget)for(let ue=0;ue<6;ue++){if(Array.isArray(A.__webglFramebuffer[ue]))for(let ve=0;ve<A.__webglFramebuffer[ue].length;ve++)n.deleteFramebuffer(A.__webglFramebuffer[ue][ve]);else n.deleteFramebuffer(A.__webglFramebuffer[ue]);A.__webglDepthbuffer&&n.deleteRenderbuffer(A.__webglDepthbuffer[ue])}else{if(Array.isArray(A.__webglFramebuffer))for(let ue=0;ue<A.__webglFramebuffer.length;ue++)n.deleteFramebuffer(A.__webglFramebuffer[ue]);else n.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&n.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&n.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let ue=0;ue<A.__webglColorRenderbuffer.length;ue++)A.__webglColorRenderbuffer[ue]&&n.deleteRenderbuffer(A.__webglColorRenderbuffer[ue]);A.__webglDepthRenderbuffer&&n.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const pe=N.textures;for(let ue=0,ve=pe.length;ue<ve;ue++){const be=i.get(pe[ue]);be.__webglTexture&&(n.deleteTexture(be.__webglTexture),a.memory.textures--),i.remove(pe[ue])}i.remove(N)}let k=0;function V(){k=0}function X(){return k}function te(N){k=N}function le(){const N=k;return N>=s.maxTextures&&Ye("WebGLTextures: Trying to use "+(N+1)+" texture units while this GPU supports only "+s.maxTextures),k+=1,N}function z(N){const A=[];return A.push(N.wrapS),A.push(N.wrapT),A.push(N.wrapR||0),A.push(N.magFilter),A.push(N.minFilter),A.push(N.anisotropy),A.push(N.internalFormat),A.push(N.format),A.push(N.type),A.push(N.generateMipmaps),A.push(N.mipmapsAutoUpdate),A.push(N.premultiplyAlpha),A.push(N.flipY),A.push(N.unpackAlignment),A.push(N.colorSpace),A.join()}function Z(N,A){const j=i.get(N);if(N.isVideoTexture&&Xt(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&j.__version!==N.version){const pe=N.image;if(pe===null)Ye("WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)Ye("WebGLRenderer: Texture marked for update but image is incomplete");else{J(j,N,A);return}}else N.isExternalTexture&&(j.__webglTexture=N.sourceTexture?N.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,j.__webglTexture,n.TEXTURE0+A)}function se(N,A){const j=i.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&j.__version!==N.version){J(j,N,A);return}else N.isExternalTexture&&(j.__webglTexture=N.sourceTexture?N.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,j.__webglTexture,n.TEXTURE0+A)}function q(N,A){const j=i.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&j.__version!==N.version){J(j,N,A);return}t.bindTexture(n.TEXTURE_3D,j.__webglTexture,n.TEXTURE0+A)}function F(N,A){const j=i.get(N);if(N.version>0&&j.__version!==N.version){de(j,N,A);return}t.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture,n.TEXTURE0+A)}const ee={[Ks]:n.REPEAT,[Ai]:n.CLAMP_TO_EDGE,[Sl]:n.MIRRORED_REPEAT},fe={[bt]:n.NEAREST,[Dp]:n.NEAREST_MIPMAP_NEAREST,[Xr]:n.NEAREST_MIPMAP_LINEAR,[kt]:n.LINEAR,[mo]:n.LINEAR_MIPMAP_NEAREST,[Un]:n.LINEAR_MIPMAP_LINEAR},he={[Up]:n.NEVER,[uf]:n.ALWAYS,[Op]:n.LESS,[lf]:n.LEQUAL,[kp]:n.EQUAL,[cf]:n.GEQUAL,[Bp]:n.GREATER,[zp]:n.NOTEQUAL};function ge(N,A){if(A.type===Rn&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===kt||A.magFilter===mo||A.magFilter===Xr||A.magFilter===Un||A.minFilter===kt||A.minFilter===mo||A.minFilter===Xr||A.minFilter===Un)&&Ye("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(N,n.TEXTURE_WRAP_S,ee[A.wrapS]),n.texParameteri(N,n.TEXTURE_WRAP_T,ee[A.wrapT]),(N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY)&&n.texParameteri(N,n.TEXTURE_WRAP_R,ee[A.wrapR]),n.texParameteri(N,n.TEXTURE_MAG_FILTER,fe[A.magFilter]),n.texParameteri(N,n.TEXTURE_MIN_FILTER,fe[A.minFilter]),A.compareFunction&&(n.texParameteri(N,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(N,n.TEXTURE_COMPARE_FUNC,he[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===bt||A.minFilter!==Xr&&A.minFilter!==Un||A.type===Rn&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||i.get(A).__currentAnisotropy){const j=e.get("EXT_texture_filter_anisotropic");n.texParameterf(N,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),i.get(A).__currentAnisotropy=A.anisotropy}}}function Le(N,A){let j=!1;N.__webglInit===void 0&&(N.__webglInit=!0,A.addEventListener("dispose",P),E(A));const pe=A.source;let ue=d.get(pe);ue===void 0&&(ue={},d.set(pe,ue));const ve=z(A);if(ve!==N.__cacheKey){ue[ve]===void 0&&(ue[ve]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,j=!0),ue[ve].usedTimes++;const be=ue[N.__cacheKey];be!==void 0&&(ue[N.__cacheKey].usedTimes--,be.usedTimes===0&&U(A)),N.__cacheKey=ve,N.__webglTexture=ue[ve].texture}return j}function ke(N,A,j){return Math.floor(Math.floor(N/j)/A)}function lt(N,A,j,pe){const ve=N.updateRanges;if(ve.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,A.width,A.height,j,pe,A.data);else{ve.sort((B,oe)=>B.start-oe.start);let be=0;for(let B=1;B<ve.length;B++){const oe=ve[be],ne=ve[B],Se=oe.start+oe.count,xe=ke(ne.start,A.width,4),_e=ke(oe.start,A.width,4);ne.start<=Se+1&&xe===_e&&ke(ne.start+ne.count-1,A.width,4)===xe?oe.count=Math.max(oe.count,ne.start+ne.count-oe.start):(++be,ve[be]=ne)}ve.length=be+1;const ie=t.getParameter(n.UNPACK_ROW_LENGTH),re=t.getParameter(n.UNPACK_SKIP_PIXELS),Me=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,A.width);for(let B=0,oe=ve.length;B<oe;B++){const ne=ve[B],Se=Math.floor(ne.start/4),xe=Math.ceil(ne.count/4),_e=Se%A.width,Ge=Math.floor(Se/A.width),at=xe,me=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,_e),t.pixelStorei(n.UNPACK_SKIP_ROWS,Ge),t.texSubImage2D(n.TEXTURE_2D,0,_e,Ge,at,me,j,pe,A.data)}N.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,ie),t.pixelStorei(n.UNPACK_SKIP_PIXELS,re),t.pixelStorei(n.UNPACK_SKIP_ROWS,Me)}}function J(N,A,j){let pe=n.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(pe=n.TEXTURE_2D_ARRAY),A.isData3DTexture&&(pe=n.TEXTURE_3D);const ue=Le(N,A),ve=A.source;t.bindTexture(pe,N.__webglTexture,n.TEXTURE0+j);const be=i.get(ve);if(ve.version!==be.__version||ue===!0){if(t.activeTexture(n.TEXTURE0+j),(typeof ImageBitmap<"u"&&A.image instanceof ImageBitmap)===!1){const me=pt.getPrimaries(pt.workingColorSpace),He=A.colorSpace===Yn?null:pt.getPrimaries(A.colorSpace),rt=A.colorSpace===Yn||me===He?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,rt)}t.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment);let re=y(A.image,!1,s.maxTextureSize);re=qe(A,re);const Me=r.convert(A.format,A.colorSpace),B=r.convert(A.type);let oe=S(A.internalFormat,Me,B,A.normalized,A.colorSpace,A.isVideoTexture);ge(pe,A);let ne;const Se=A.mipmaps,xe=A.isVideoTexture!==!0,_e=be.__version===void 0||ue===!0,Ge=ve.dataReady,at=b(A,re);if(A.isDepthTexture)oe=x(A.format===qi,A.type),_e&&(xe?t.texStorage2D(n.TEXTURE_2D,1,oe,re.width,re.height):t.texImage2D(n.TEXTURE_2D,0,oe,re.width,re.height,0,Me,B,null));else if(A.isDataTexture)if(Se.length>0){xe&&_e&&t.texStorage2D(n.TEXTURE_2D,at,oe,Se[0].width,Se[0].height);for(let me=0,He=Se.length;me<He;me++)ne=Se[me],xe?Ge&&t.texSubImage2D(n.TEXTURE_2D,me,0,0,ne.width,ne.height,Me,B,ne.data):t.texImage2D(n.TEXTURE_2D,me,oe,ne.width,ne.height,0,Me,B,ne.data);A.generateMipmaps=!1}else xe?(_e&&t.texStorage2D(n.TEXTURE_2D,at,oe,re.width,re.height),Ge&&lt(A,re,Me,B)):t.texImage2D(n.TEXTURE_2D,0,oe,re.width,re.height,0,Me,B,re.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){xe&&_e&&t.texStorage3D(n.TEXTURE_2D_ARRAY,at,oe,Se[0].width,Se[0].height,re.depth);for(let me=0,He=Se.length;me<He;me++)if(ne=Se[me],A.format!==Cn)if(Me!==null)if(xe){if(Ge)if(A.layerUpdates.size>0){const rt=Uu(ne.width,ne.height,A.format,A.type);for(const Re of A.layerUpdates){const yt=ne.data.subarray(Re*rt/ne.data.BYTES_PER_ELEMENT,(Re+1)*rt/ne.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,me,0,0,Re,ne.width,ne.height,1,Me,yt)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,me,0,0,0,ne.width,ne.height,re.depth,Me,ne.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,me,oe,ne.width,ne.height,re.depth,0,ne.data,0,0);else Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else xe?Ge&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,me,0,0,0,ne.width,ne.height,re.depth,Me,B,ne.data):t.texImage3D(n.TEXTURE_2D_ARRAY,me,oe,ne.width,ne.height,re.depth,0,Me,B,ne.data);A.layerUpdates.size>0&&A.clearLayerUpdates()}else{xe&&_e&&t.texStorage2D(n.TEXTURE_2D,at,oe,Se[0].width,Se[0].height);for(let me=0,He=Se.length;me<He;me++)ne=Se[me],A.format!==Cn?Me!==null?xe?Ge&&t.compressedTexSubImage2D(n.TEXTURE_2D,me,0,0,ne.width,ne.height,Me,ne.data):t.compressedTexImage2D(n.TEXTURE_2D,me,oe,ne.width,ne.height,0,ne.data):Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):xe?Ge&&t.texSubImage2D(n.TEXTURE_2D,me,0,0,ne.width,ne.height,Me,B,ne.data):t.texImage2D(n.TEXTURE_2D,me,oe,ne.width,ne.height,0,Me,B,ne.data)}else if(A.isDataArrayTexture)if(xe){if(_e&&t.texStorage3D(n.TEXTURE_2D_ARRAY,at,oe,re.width,re.height,re.depth),Ge)if(A.layerUpdates.size>0){const me=Uu(re.width,re.height,A.format,A.type);for(const He of A.layerUpdates){const rt=re.data.subarray(He*me/re.data.BYTES_PER_ELEMENT,(He+1)*me/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,He,re.width,re.height,1,Me,B,rt)}A.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,Me,B,re.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,oe,re.width,re.height,re.depth,0,Me,B,re.data);else if(A.isData3DTexture)xe?(_e&&t.texStorage3D(n.TEXTURE_3D,at,oe,re.width,re.height,re.depth),Ge&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,Me,B,re.data)):t.texImage3D(n.TEXTURE_3D,0,oe,re.width,re.height,re.depth,0,Me,B,re.data);else if(A.isFramebufferTexture){if(_e)if(xe)t.texStorage2D(n.TEXTURE_2D,at,oe,re.width,re.height);else{let me=re.width,He=re.height;for(let rt=0;rt<at;rt++)t.texImage2D(n.TEXTURE_2D,rt,oe,me,He,0,Me,B,null),me>>=1,He>>=1}}else if(A.isHTMLTexture){if("texElementImage2D"in n){const me=n.canvas;if(me.hasAttribute("layoutsubtree")||me.setAttribute("layoutsubtree","true"),re.parentNode!==me){me.appendChild(re),f.add(A),me.onpaint=He=>{const rt=He.changedElements;for(const Re of f)rt.includes(Re.image)&&(Re.needsUpdate=!0)},me.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,re);else{const rt=n.RGBA,Re=n.RGBA,yt=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,rt,Re,yt,re)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Se.length>0){if(xe&&_e){const me=Je(Se[0]);t.texStorage2D(n.TEXTURE_2D,at,oe,me.width,me.height)}for(let me=0,He=Se.length;me<He;me++)ne=Se[me],xe?Ge&&t.texSubImage2D(n.TEXTURE_2D,me,0,0,Me,B,ne):t.texImage2D(n.TEXTURE_2D,me,oe,Me,B,ne);A.generateMipmaps=!1}else if(xe){if(_e){const me=Je(re);t.texStorage2D(n.TEXTURE_2D,at,oe,me.width,me.height)}Ge&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Me,B,re)}else t.texImage2D(n.TEXTURE_2D,0,oe,Me,B,re);w(A)&&A.mipmapsAutoUpdate===!0&&_(pe),be.__version=ve.version,A.onUpdate&&A.onUpdate(A)}N.__version=A.version}function de(N,A,j){if(A.image.length!==6)return;const pe=Le(N,A),ue=A.source;t.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture,n.TEXTURE0+j);const ve=i.get(ue);if(ue.version!==ve.__version||pe===!0){t.activeTexture(n.TEXTURE0+j);const be=pt.getPrimaries(pt.workingColorSpace),ie=A.colorSpace===Yn?null:pt.getPrimaries(A.colorSpace),re=A.colorSpace===Yn||be===ie?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);const Me=A.isCompressedTexture||A.image[0].isCompressedTexture,B=A.image[0]&&A.image[0].isDataTexture,oe=[];for(let Re=0;Re<6;Re++)!Me&&!B?oe[Re]=y(A.image[Re],!0,s.maxCubemapSize):oe[Re]=B?A.image[Re].image:A.image[Re],oe[Re]=qe(A,oe[Re]);const ne=oe[0],Se=r.convert(A.format,A.colorSpace),xe=r.convert(A.type);let _e=S(A.internalFormat,Se,xe,A.normalized,A.colorSpace);const Ge=A.isVideoTexture!==!0,at=ve.__version===void 0||pe===!0,me=ue.dataReady;let He=b(A,ne);ge(n.TEXTURE_CUBE_MAP,A);let rt;if(A.isDepthTexture){if(_e=x(A.format===qi,A.type),at)if(Ge)t.texStorage2D(n.TEXTURE_CUBE_MAP,1,_e,ne.width,ne.height);else for(let Re=0;Re<6;Re++)t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,_e,ne.width,ne.height,0,Se,xe,null)}else if(Me){Ge&&at&&t.texStorage2D(n.TEXTURE_CUBE_MAP,He,_e,ne.width,ne.height);for(let Re=0;Re<6;Re++){rt=oe[Re].mipmaps;for(let yt=0;yt<rt.length;yt++){const Kt=rt[yt];A.format!==Cn?Se!==null?Ge?me&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Re,yt,0,0,Kt.width,Kt.height,Se,Kt.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Re,yt,_e,Kt.width,Kt.height,0,Kt.data):Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ge?me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Re,yt,0,0,Kt.width,Kt.height,Se,xe,Kt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Re,yt,_e,Kt.width,Kt.height,0,Se,xe,Kt.data)}}}else{if(rt=A.mipmaps,Ge&&at){rt.length>0&&He++;const Re=Je(oe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,He,_e,Re.width,Re.height)}for(let Re=0;Re<6;Re++)if(B){Ge?me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,0,0,oe[Re].width,oe[Re].height,Se,xe,oe[Re].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,_e,oe[Re].width,oe[Re].height,0,Se,xe,oe[Re].data);for(let yt=0;yt<rt.length;yt++){const Ii=rt[yt].image[Re].image;Ge?me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Re,yt+1,0,0,Ii.width,Ii.height,Se,xe,Ii.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Re,yt+1,_e,Ii.width,Ii.height,0,Se,xe,Ii.data)}}else{Ge?me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,0,0,Se,xe,oe[Re]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,_e,Se,xe,oe[Re]);for(let yt=0;yt<rt.length;yt++){const Kt=rt[yt];Ge?me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Re,yt+1,0,0,Se,xe,Kt.image[Re]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Re,yt+1,_e,Se,xe,Kt.image[Re])}}}w(A)&&A.mipmapsAutoUpdate===!0&&_(n.TEXTURE_CUBE_MAP),ve.__version=ue.version,A.onUpdate&&A.onUpdate(A)}N.__version=A.version}function Pe(N,A,j,pe,ue,ve){const be=r.convert(j.format,j.colorSpace),ie=r.convert(j.type),re=S(j.internalFormat,be,ie,j.normalized,j.colorSpace),Me=i.get(A),B=i.get(j);if(B.__renderTarget=A,!Me.__hasExternalTextures){const oe=Math.max(1,A.width>>ve),ne=Math.max(1,A.height>>ve);ue===n.TEXTURE_3D||ue===n.TEXTURE_2D_ARRAY?t.texImage3D(ue,ve,re,oe,ne,A.depth,0,be,ie,null):t.texImage2D(ue,ve,re,oe,ne,0,be,ie,null)}t.bindFramebuffer(n.FRAMEBUFFER,N),Te(A)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,pe,ue,B.__webglTexture,0,Nt(A)):(ue===n.TEXTURE_2D||ue>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ue<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,pe,ue,B.__webglTexture,ve),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ze(N,A,j){if(n.bindRenderbuffer(n.RENDERBUFFER,N),A.depthBuffer){const pe=A.depthTexture,ue=pe&&pe.isDepthTexture?pe.type:null,ve=x(A.stencilBuffer,ue),be=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Te(A)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Nt(A),ve,A.width,A.height):j?n.renderbufferStorageMultisample(n.RENDERBUFFER,Nt(A),ve,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,ve,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,be,n.RENDERBUFFER,N)}else{const pe=A.textures;for(let ue=0;ue<pe.length;ue++){const ve=pe[ue],be=r.convert(ve.format,ve.colorSpace),ie=r.convert(ve.type),re=S(ve.internalFormat,be,ie,ve.normalized,ve.colorSpace);Te(A)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Nt(A),re,A.width,A.height):j?n.renderbufferStorageMultisample(n.RENDERBUFFER,Nt(A),re,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,re,A.width,A.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function De(N,A,j){const pe=A.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,N),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ue=i.get(A.depthTexture);ue.__renderTarget=A;const ve=pe?A.depthTexture.image[0]:A.depthTexture.image;(!ue.__webglTexture||ve.width!==A.width||ve.height!==A.height)&&(ve.width=A.width,ve.height=A.height,A.depthTexture.needsUpdate=!0),pe?F(A.depthTexture,0):Z(A.depthTexture,0);const be=ue.__webglTexture,ie=Nt(A),re=pe?n.TEXTURE_CUBE_MAP_POSITIVE_X+j:n.TEXTURE_2D,Me=A.depthTexture.format===qi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(A.depthTexture.format===$i)Te(A)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Me,re,be,0,ie):n.framebufferTexture2D(n.FRAMEBUFFER,Me,re,be,0);else if(A.depthTexture.format===qi)Te(A)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Me,re,be,0,ie):n.framebufferTexture2D(n.FRAMEBUFFER,Me,re,be,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Xe(N){const A=i.get(N),j=N.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==N.depthTexture){const pe=N.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),pe){const ue=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,pe.removeEventListener("dispose",ue)};pe.addEventListener("dispose",ue),A.__depthDisposeCallback=ue}A.__boundDepthTexture=pe}if(N.depthTexture&&!A.__autoAllocateDepthBuffer)if(j)for(let pe=0;pe<6;pe++)De(A.__webglFramebuffer[pe],N,pe);else N.texture.mipmaps.length>0?De(A.__webglFramebuffer[0],N,0):De(A.__webglFramebuffer,N,0);else if(j){A.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)if(t.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer[pe]),A.__webglDepthbuffer[pe]===void 0)A.__webglDepthbuffer[pe]=n.createRenderbuffer(),Ze(A.__webglDepthbuffer[pe],N,!1);else{const ue=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ve=A.__webglDepthbuffer[pe];n.bindRenderbuffer(n.RENDERBUFFER,ve),n.framebufferRenderbuffer(n.FRAMEBUFFER,ue,n.RENDERBUFFER,ve)}}else if(N.texture.mipmaps.length>0?t.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=n.createRenderbuffer(),Ze(A.__webglDepthbuffer,N,!1);else{const ue=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ve=A.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ve),n.framebufferRenderbuffer(n.FRAMEBUFFER,ue,n.RENDERBUFFER,ve)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function xt(N,A,j){const pe=i.get(N);A!==void 0&&Pe(pe.__webglFramebuffer,N,N.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),j!==void 0&&Xe(N)}function St(N){const A=N.texture,j=i.get(N),pe=i.get(A);N.addEventListener("dispose",L),E(N);const ue=N.textures,ve=N.isWebGLCubeRenderTarget===!0,be=ue.length>1;if(be||(pe.__webglTexture===void 0&&(pe.__webglTexture=n.createTexture()),pe.__version=A.version,a.memory.textures++),ve){j.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)if(A.mipmaps.length>0){j.__webglFramebuffer[ie]=[];for(let re=0;re<A.mipmaps.length;re++)j.__webglFramebuffer[ie][re]=n.createFramebuffer()}else j.__webglFramebuffer[ie]=n.createFramebuffer()}else{if(A.mipmaps.length>0){j.__webglFramebuffer=[];for(let ie=0;ie<A.mipmaps.length;ie++)j.__webglFramebuffer[ie]=n.createFramebuffer()}else j.__webglFramebuffer=n.createFramebuffer();if(be)for(let ie=0,re=ue.length;ie<re;ie++){const Me=i.get(ue[ie]);Me.__webglTexture===void 0&&(Me.__webglTexture=n.createTexture(),a.memory.textures++)}if(N.samples>0&&Te(N)===!1){j.__webglMultisampledFramebuffer=n.createFramebuffer(),j.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let ie=0;ie<ue.length;ie++){const re=ue[ie];j.__webglColorRenderbuffer[ie]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,j.__webglColorRenderbuffer[ie]);const Me=r.convert(re.format,re.colorSpace),B=r.convert(re.type),oe=S(re.internalFormat,Me,B,re.normalized,re.colorSpace,N.isXRRenderTarget===!0),ne=Nt(N);n.renderbufferStorageMultisample(n.RENDERBUFFER,ne,oe,N.width,N.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ie,n.RENDERBUFFER,j.__webglColorRenderbuffer[ie])}n.bindRenderbuffer(n.RENDERBUFFER,null),N.depthBuffer&&(j.__webglDepthRenderbuffer=n.createRenderbuffer(),Ze(j.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ve){t.bindTexture(n.TEXTURE_CUBE_MAP,pe.__webglTexture),ge(n.TEXTURE_CUBE_MAP,A);for(let ie=0;ie<6;ie++)if(A.mipmaps.length>0)for(let re=0;re<A.mipmaps.length;re++)Pe(j.__webglFramebuffer[ie][re],N,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,re);else Pe(j.__webglFramebuffer[ie],N,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0);w(A)?_(n.TEXTURE_CUBE_MAP):A.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,A.mipmaps.length-1),t.unbindTexture()}else if(be){for(let ie=0,re=ue.length;ie<re;ie++){const Me=ue[ie],B=i.get(Me);let oe=n.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(oe=N.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(oe,B.__webglTexture),ge(oe,Me),Pe(j.__webglFramebuffer,N,Me,n.COLOR_ATTACHMENT0+ie,oe,0),w(Me)&&_(oe)}t.unbindTexture()}else{let ie=n.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(ie=N.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ie,pe.__webglTexture),ge(ie,A),A.mipmaps.length>0)for(let re=0;re<A.mipmaps.length;re++)Pe(j.__webglFramebuffer[re],N,A,n.COLOR_ATTACHMENT0,ie,re);else Pe(j.__webglFramebuffer,N,A,n.COLOR_ATTACHMENT0,ie,0);w(A)?_(ie):A.mipmaps.length>0&&n.texParameteri(ie,n.TEXTURE_MAX_LEVEL,A.mipmaps.length-1),t.unbindTexture()}N.depthBuffer&&Xe(N)}function W(N){const A=N.textures;for(let j=0,pe=A.length;j<pe;j++){const ue=A[j];if(w(ue)&&ue.mipmapsAutoUpdate===!0){const ve=v(N),be=i.get(ue).__webglTexture;t.bindTexture(ve,be),_(ve),t.unbindTexture()}}}const Mn=[];function It(N){if(N.samples>0){if(Te(N)===!1){const A=N.textures,j=N.width,pe=N.height;let ue=n.COLOR_BUFFER_BIT;const ve=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,be=i.get(N),ie=A.length>1;if(ie)for(let Me=0;Me<A.length;Me++)t.bindFramebuffer(n.FRAMEBUFFER,be.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,be.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer),N.texture.mipmaps.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,be.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let Me=0;Me<A.length;Me++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(ue|=n.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(ue|=n.STENCIL_BUFFER_BIT)),ie){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,be.__webglColorRenderbuffer[Me]);const B=i.get(A[Me]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,B,0)}n.blitFramebuffer(0,0,j,pe,0,0,j,pe,ue,n.NEAREST),l===!0&&(Mn.length=0,Mn.push(n.COLOR_ATTACHMENT0+Me),N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&Mn.push(ve),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Mn))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ie)for(let Me=0;Me<A.length;Me++){t.bindFramebuffer(n.FRAMEBUFFER,be.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.RENDERBUFFER,be.__webglColorRenderbuffer[Me]);const B=i.get(A[Me]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,be.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.TEXTURE_2D,B,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&l){const A=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[A])}}}function Nt(N){return Math.min(s.maxSamples,N.samples)}function Te(N){const A=i.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Xt(N){const A=a.render.frame;u.get(N)!==A&&(u.set(N,A),N.update())}function qe(N,A){const j=N.colorSpace,pe=N.format,ue=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||j!==Ha&&j!==Yn&&(pt.getTransfer(j)===wt?(pe!==Cn||ue!==tn)&&Ye("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):_t("WebGLTextures: Unsupported texture color space:",j)),A}function Je(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(c.width=N.naturalWidth||N.width,c.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(c.width=N.displayWidth,c.height=N.displayHeight):(c.width=N.width,c.height=N.height),c}this.allocateTextureUnit=le,this.resetTextureUnits=V,this.getTextureUnits=X,this.setTextureUnits=te,this.setTexture2D=Z,this.setTexture2DArray=se,this.setTexture3D=q,this.setTextureCube=F,this.rebindTextures=xt,this.setupRenderTarget=St,this.updateRenderTargetMipmap=W,this.updateMultisampleRenderTarget=It,this.setupDepthRenderbuffer=Xe,this.setupFrameBufferTexture=Pe,this.useMultisampledRTT=Te,this.dispose=I}function R_(n,e){function t(i,s=Yn){let r;const a=pt.getTransfer(s);if(i===tn)return n.UNSIGNED_BYTE;if(i===mc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===gc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===sf)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===rf)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===tf)return n.BYTE;if(i===nf)return n.SHORT;if(i===Pr)return n.UNSIGNED_SHORT;if(i===pc)return n.INT;if(i===fi)return n.UNSIGNED_INT;if(i===Rn)return n.FLOAT;if(i===di)return n.HALF_FLOAT;if(i===af)return n.ALPHA;if(i===of)return n.RGB;if(i===Cn)return n.RGBA;if(i===$i)return n.DEPTH_COMPONENT;if(i===qi)return n.DEPTH_STENCIL;if(i===Qs)return n.RED;if(i===xc)return n.RED_INTEGER;if(i===Yi)return n.RG;if(i===vc)return n.RG_INTEGER;if(i===_c)return n.RGBA_INTEGER;if(i===Aa||i===Ra||i===Ca||i===Pa)if(a===wt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Aa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ra)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ca)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Pa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Aa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ra)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ca)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Pa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===yl||i===wl||i===bl||i===El)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===yl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===wl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===bl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===El)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Tl||i===Al||i===Rl||i===Cl||i===Pl||i===za||i===Ll)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Tl||i===Al)return a===wt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Rl)return a===wt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Cl)return r.COMPRESSED_R11_EAC;if(i===Pl)return r.COMPRESSED_SIGNED_R11_EAC;if(i===za)return r.COMPRESSED_RG11_EAC;if(i===Ll)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Dl||i===Il||i===Nl||i===Fl||i===Ul||i===Ol||i===kl||i===Bl||i===zl||i===Gl||i===Hl||i===Wl||i===Vl||i===Xl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Dl)return a===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Il)return a===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Nl)return a===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Fl)return a===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ul)return a===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ol)return a===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===kl)return a===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Bl)return a===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===zl)return a===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Gl)return a===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Hl)return a===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Wl)return a===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Vl)return a===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Xl)return a===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ql||i===$l||i===Yl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===ql)return a===wt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===$l)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Yl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===jl||i===Kl||i===Ga||i===Zl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===jl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Kl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ga)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Zl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Zs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const C_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,P_=`
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

}`;class L_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Ef(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new _n({vertexShader:C_,fragmentShader:P_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new gt(new xs(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class D_ extends Ms{constructor(e,t){super();const i=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,g=null;const M=typeof XRWebGLBinding<"u",p=new L_,m={},y=t.getContextAttributes();let w=null,_=null;const v=[],S=[],x=new Oe;let b=null,E=null;const T=new Nn;T.viewport=new Mt;const P=new Nn;P.viewport=new Mt;const L=[T,P],D=new Vm;let C=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let Z=v[z];return Z===void 0&&(Z=new yo,v[z]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(z){let Z=v[z];return Z===void 0&&(Z=new yo,v[z]=Z),Z.getGripSpace()},this.getHand=function(z){let Z=v[z];return Z===void 0&&(Z=new yo,v[z]=Z),Z.getHandSpace()};function O(z){const Z=S.indexOf(z.inputSource);if(Z===-1)return;const se=v[Z];se!==void 0&&(se.update(z.inputSource,z.frame,c||a),se.dispatchEvent({type:z.type,data:z.inputSource}))}function U(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",U),s.removeEventListener("inputsourceschange",$);for(let z=0;z<v.length;z++){const Z=S[z];Z!==null&&(S[z]=null,v[z].disconnect(Z))}C=null,I=null,p.reset();for(const z in m)delete m[z];if(e.setRenderTarget(w),d=null,h=null,f=null,s=null,_=null,le.stop(),i.isPresenting=!1,e.setPixelRatio(b),e.setSize(x.width,x.height,!1),E!==null){const z=E.camera;z.fov=E.fov,z.zoom=E.zoom,z.updateProjectionMatrix(),E=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){r=z,i.isPresenting===!0&&Ye("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){o=z,i.isPresenting===!0&&Ye("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(z){c=z},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f===null&&M&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(z){if(s=z,s!==null){if(w=e.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",U),s.addEventListener("inputsourceschange",$),y.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(x),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let se=null,q=null,F=null;y.depth&&(F=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,se=y.stencil?qi:$i,q=y.stencil?Zs:fi);const ee={colorFormat:t.RGBA8,depthFormat:F,scaleFactor:r};f=this.getBinding(),h=f.createProjectionLayer(ee),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),_=new $t(h.textureWidth,h.textureHeight,{format:Cn,type:tn,depthTexture:new Ki(h.textureWidth,h.textureHeight,q,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{const se={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,se),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),_=new $t(d.framebufferWidth,d.framebufferHeight,{format:Cn,type:tn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),le.setContext(s),le.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function $(z){for(let Z=0;Z<z.removed.length;Z++){const se=z.removed[Z],q=S.indexOf(se);q>=0&&(S[q]=null,v[q].disconnect(se))}for(let Z=0;Z<z.added.length;Z++){const se=z.added[Z];let q=S.indexOf(se);if(q===-1){for(let ee=0;ee<v.length;ee++)if(ee>=S.length){S.push(se),q=ee;break}else if(S[ee]===null){S[ee]=se,q=ee;break}if(q===-1)break}const F=v[q];F&&F.connect(se)}}function k(z,Z){Z===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(Z.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(s===null)return;let Z=z.near,se=z.far;p.texture!==null&&(p.depthNear>0&&(Z=p.depthNear),p.depthFar>0&&(se=p.depthFar)),D.near=P.near=T.near=Z,D.far=P.far=T.far=se,(C!==D.near||I!==D.far)&&(s.updateRenderState({depthNear:D.near,depthFar:D.far}),C=D.near,I=D.far),D.layers.mask=z.layers.mask|6,T.layers.mask=D.layers.mask&-5,P.layers.mask=D.layers.mask&-3;const q=z.parent,F=D.cameras;k(D,q);for(let ee=0;ee<F.length;ee++)k(F[ee],q);D.projectionMatrix.copy(T.projectionMatrix),D.projectionMatrixInverse.copy(T.projectionMatrixInverse),E===null&&z.isPerspectiveCamera&&(E={camera:z,fov:z.fov,zoom:z.zoom}),V(z,D,q)};function V(z,Z,se){se===null?z.matrix.copy(Z.matrixWorld):(z.matrix.copy(se.matrixWorld),z.matrix.invert(),z.matrix.multiply(Z.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0),z.projectionMatrix.copy(Z.projectionMatrix),z.projectionMatrixInverse.copy(Z.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=Ir*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(z){l=z,h!==null&&(h.fixedFoveation=z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=z)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(D)},this.getCameraTexture=function(z){return m[z]};let X=null;function te(z,Z){if(u=Z.getViewerPose(c||a),g=Z,u!==null){const se=u.views;d!==null&&(e.setRenderTargetFramebuffer(_,d.framebuffer),e.setRenderTarget(_));let q=!1;se.length!==D.cameras.length&&(D.cameras.length=0,q=!0);for(let he=0;he<se.length;he++){const ge=se[he];let Le=null;if(d!==null)Le=d.getViewport(ge);else{const lt=f.getViewSubImage(h,ge);Le=lt.viewport,he===0&&(e.setRenderTargetTextures(_,lt.colorTexture,lt.depthStencilTexture),e.setRenderTarget(_))}let ke=L[he];ke===void 0&&(ke=new Nn,ke.layers.enable(he),ke.viewport=new Mt,L[he]=ke),ke.matrix.fromArray(ge.transform.matrix),ke.matrix.decompose(ke.position,ke.quaternion,ke.scale),ke.projectionMatrix.fromArray(ge.projectionMatrix),ke.projectionMatrixInverse.copy(ke.projectionMatrix).invert(),ke.viewport.set(Le.x,Le.y,Le.width,Le.height),he===0&&(D.matrix.copy(ke.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),q===!0&&D.cameras.push(ke)}const F=s.enabledFeatures;if(F&&F.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){f=i.getBinding();const he=f.getDepthInformation(se[0]);he&&he.isValid&&he.texture&&p.init(he,s.renderState)}if(F&&F.includes("camera-access")&&M){e.state.unbindTexture(),f=i.getBinding();for(let he=0;he<se.length;he++){const ge=se[he].camera;if(ge){let Le=m[ge];Le||(Le=new Ef,m[ge]=Le);const ke=f.getCameraImage(ge);Le.sourceTexture=ke}}}}for(let se=0;se<v.length;se++){const q=S[se],F=v[se];q!==null&&F!==void 0&&F.update(q,Z,c||a)}X&&X(z,Z),Z.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Z}),g=null}const le=new Lf;le.setAnimationLoop(te),this.setAnimationLoop=function(z){X=z},this.dispose=function(){}}}const I_=new Ve,Gf=new et;Gf.set(-1,0,0,0,1,0,0,0,1);function N_(n,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,Tf(n)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,y,w,_){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(p,m):m.isMeshLambertMaterial?(r(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(p,m),f(p,m)):m.isMeshPhongMaterial?(r(p,m),u(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(p,m),h(p,m),m.isMeshPhysicalMaterial&&d(p,m,_)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),M(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,y,w):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===xn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===xn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const y=e.get(m),w=y.envMap,_=y.envMapRotation;w&&(p.envMap.value=w,p.envMapRotation.value.setFromMatrix4(I_.makeRotationFromEuler(_)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Gf),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,y,w){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*y,p.scale.value=w*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function f(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function h(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,y){p.ior.value=m.ior,m.diffuseRoughness>0&&(p.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=m.diffuseRoughnessMap,t(m.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===xn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function M(p,m){const y=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function F_(n,e,t,i){let s={},r={};function a(y,w){const _=w.program;i.uniformBlockBinding(y,_,s[y.id])}function o(y,w){let _=s[y.id];_===void 0&&(g(y),_=l(y),s[y.id]=_,y.addEventListener("dispose",p));const v=w.program;i.updateUBOMapping(y,v);const S=e.render.frame;r[y.id]!==S&&(c(y),r[y.id]=S)}function l(y){const w=n.createBuffer(),_=y.__size,v=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,w),n.bufferData(n.UNIFORM_BUFFER,_,v),n.bindBuffer(n.UNIFORM_BUFFER,null),w}function c(y){const w=s[y.id],_=y.uniforms,v=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let S=0,x=_.length;S<x;S++){const b=_[S];if(Array.isArray(b))for(let E=0,T=b.length;E<T;E++)u(b[E],S,E,v);else u(b,S,0,v)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function u(y,w,_,v){if(h(y,w,_,v)===!0){const S=y.__offset,x=y.value;if(Array.isArray(x)){let b=0;for(let E=0;E<x.length;E++){const T=x[E],P=M(T,!0);f(T,y.__data,b),b+=P.storage/Float32Array.BYTES_PER_ELEMENT}}else f(x,y.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,S,y.__data)}}function f(y,w,_){typeof y=="number"||typeof y=="boolean"?w[_]=y:y.isMatrix3?(w[_]=y.elements[0],w[_+1]=y.elements[1],w[_+2]=y.elements[2],w[_+3]=0,w[_+4]=y.elements[3],w[_+5]=y.elements[4],w[_+6]=y.elements[5],w[_+7]=0,w[_+8]=y.elements[6],w[_+9]=y.elements[7],w[_+10]=y.elements[8],w[_+11]=0):ArrayBuffer.isView(y)?w.set(y.subarray(0,w.length-_),_):y.toArray(w,_)}function h(y,w,_,v){const S=y.value,x=w+"_"+_;if(Array.isArray(S)){v[x]===void 0&&(v[x]=[]);const b=v[x];let E=!1;for(let T=0;T<S.length;T++)d(S[T],b,T)===!0&&(E=!0);return E}return d(S,v,x)}function d(y,w,_){if(w[_]===void 0)return typeof y=="number"||typeof y=="boolean"?w[_]=y:ArrayBuffer.isView(y)?w[_]=y.slice():w[_]=y.clone(),!0;{const v=w[_];if(typeof y=="number"||typeof y=="boolean"){if(v!==y)return w[_]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(v.equals(y)===!1)return v.copy(y),!0}}return!1}function g(y){const w=y.uniforms;let _=0;const v=16;for(let x=0,b=w.length;x<b;x++){const E=Array.isArray(w[x])?w[x]:[w[x]];for(let T=0,P=E.length;T<P;T++){const L=E[T],D=Array.isArray(L.value)?L.value:[L.value],C=Array.isArray(w[x])||Array.isArray(L.value);let I=_;for(let U=0,$=D.length;U<$;U++){const k=D[U],V=M(k,C),X=_%v,te=X%V.boundary,le=X+te;_+=te,le!==0&&v-le<V.storage&&(_+=v-le),U===0&&(I=_),_+=V.storage}const O=L.type==="int"?Int32Array:L.type==="uint"?Uint32Array:Float32Array;L.__data=new O((_-I)/Float32Array.BYTES_PER_ELEMENT),L.__offset=I}}const S=_%v;return S>0&&(_+=v-S),y.__size=_,y.__cache={},this}function M(y,w){const _={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(_.boundary=4,_.storage=4):y.isVector2?(_.boundary=8,_.storage=8):y.isVector3||y.isColor?(_.boundary=16,_.storage=12):y.isVector4?(_.boundary=16,_.storage=16):y.isMatrix3?(_.boundary=16,_.storage=48):y.isMatrix4?(_.boundary=16,_.storage=64):y.isTexture?Ye("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(_.boundary=16,_.storage=y.byteLength):Ye("WebGLRenderer: Unsupported uniform value type.",y),w===!0&&(_.boundary=16,_.storage=Math.ceil(_.storage/16)*16),_}function p(y){const w=y.target;w.removeEventListener("dispose",p),n.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function m(){for(const y in s)n.deleteBuffer(s[y]);s={},r={}}return{bind:a,update:o,dispose:m}}const U_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ni=null;function O_(){return ni===null&&(ni=new Qn(U_,16,16,Yi,di),ni.name="DFG_LUT",ni.minFilter=kt,ni.magFilter=kt,ni.wrapS=Ai,ni.wrapT=Ai,ni.generateMipmaps=!1,ni.needsUpdate=!0),ni}class k_{constructor(e={}){const{canvas:t=Vp(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:d=tn}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;const M=d,p=new Set([_c,vc,xc]),m=new Set([tn,fi,Pr,Zs,mc,gc]),y=new Uint32Array(4),w=new Int32Array(4),_={textures:[],min:[],max:[],resolution:[]};let v=null,S=null;const x=[],b=[];let E=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ri,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const T=this;let P=!1,L=null,D=null,C=null,I=null;this._outputColorSpace=bn;let O=0,U=0,$=null,k=-1,V=null;const X=new Mt,te=new Mt;let le=null;const z=new Ue(0);let Z=0,se=t.width,q=t.height,F=1,ee=null,fe=null;const he=new Mt(0,0,se,q),ge=new Mt(0,0,se,q);let Le=!1;const ke=new ji,lt=new Ec;let J=!1,de=!1;const Pe=new Ve,Ze=new G,De=new Mt,Xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let xt=!1;function St(){return $===null?F:1}let W=i;function Mn(R,H){return t.getContext(R,H)}let It,Nt,Te,Xt,qe,Je,N,A,j,pe,ue,ve,be,ie,re,Me,B,oe,ne,Se,xe,_e,Ge;try{const R={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${dc}`),t.addEventListener("webglcontextlost",He,!1),t.addEventListener("webglcontextrestored",rt,!1),t.addEventListener("webglcontextcreationerror",Re,!1),W===null){const H="webgl2";if(W=Mn(H,R),W===null)throw Mn(H)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}at()}catch(R){throw t.removeEventListener("webglcontextlost",He,!1),t.removeEventListener("webglcontextrestored",rt,!1),t.removeEventListener("webglcontextcreationerror",Re,!1),_t("WebGLRenderer: "+R.message),R}function at(){It=new Gx(W),It.init(),xe=new R_(W,It),Nt=new Px(W,It,e,xe),Te=new T_(W,It),Nt.reversedDepthBuffer&&h&&Te.buffers.depth.setReversed(!0),D=W.createFramebuffer(),C=W.createFramebuffer(),I=W.createFramebuffer(),Xt=new Vx(W),qe=new f_,Je=new A_(W,It,Te,qe,Nt,xe,Xt),N=new zx(T),A=new qm(W),_e=new Rx(W,A),j=new Hx(W,A,Xt,_e),pe=new qx(W,j,A,_e,Xt),oe=new Xx(W,Nt,Je),re=new Lx(qe),ue=new h_(T,N,It,Nt,_e,re),ve=new N_(T,qe),be=new p_,ie=new M_(It),B=new Ax(T,N,Te,pe,g,l),Me=new E_(T,pe,Nt),Ge=new F_(W,Xt,Nt,Te),ne=new Cx(W,It,Xt),Se=new Wx(W,It,Xt),Xt.programs=ue.programs,T.capabilities=Nt,T.extensions=It,T.properties=qe,T.renderLists=be,T.shadowMap=Me,T.state=Te,T.info=Xt}M!==tn&&(E=new Yx(M,t.width,t.height,o,s,r));const me=new D_(T,W);this.xr=me,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const R=It.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=It.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(R){R!==void 0&&(F=R,this.setSize(se,q,!1))},this.getSize=function(R){return R.set(se,q)},this.setSize=function(R,H,Q=!0){if(me.isPresenting){Ye("WebGLRenderer: Can't change size while VR device is presenting.");return}se=R,q=H,t.width=Math.floor(R*F),t.height=Math.floor(H*F),Q===!0&&(t.style.width=R+"px",t.style.height=H+"px"),E!==null&&E.setSize(t.width,t.height),this.setViewport(0,0,R,H)},this.getDrawingBufferSize=function(R){return R.set(se*F,q*F).floor()},this.setDrawingBufferSize=function(R,H,Q){se=R,q=H,F=Q,t.width=Math.floor(R*Q),t.height=Math.floor(H*Q),this.setViewport(0,0,R,H)},this.setEffects=function(R){if(M===tn){_t("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let H=0;H<R.length;H++)if(R[H].isOutputPass===!0){Ye("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(X)},this.getViewport=function(R){return R.copy(he)},this.setViewport=function(R,H,Q,Y){R.isVector4?he.set(R.x,R.y,R.z,R.w):he.set(R,H,Q,Y),Te.viewport(X.copy(he).multiplyScalar(St()).round())},this.getScissor=function(R){return R.copy(ge)},this.setScissor=function(R,H,Q,Y){R.isVector4?ge.set(R.x,R.y,R.z,R.w):ge.set(R,H,Q,Y),Te.scissor(te.copy(ge).multiplyScalar(St()).round())},this.getScissorTest=function(){return Le},this.setScissorTest=function(R){Te.setScissorTest(Le=R)},this.setOpaqueSort=function(R){ee=R},this.setTransparentSort=function(R){fe=R},this.getClearColor=function(R){return R.copy(B.getClearColor())},this.setClearColor=function(){B.setClearColor(...arguments)},this.getClearAlpha=function(){return B.getClearAlpha()},this.setClearAlpha=function(){B.setClearAlpha(...arguments)},this.clear=function(R=!0,H=!0,Q=!0){let Y=0;if(R){let K=!1;if($!==null){const Ee=$.texture.format;K=p.has(Ee)}if(K){const Ee=$.texture.type,Ie=m.has(Ee),we=B.getClearColor(),Ce=B.getClearAlpha(),Be=we.r,Qe=we.g,ft=we.b;Ie?(y[0]=Be,y[1]=Qe,y[2]=ft,y[3]=Ce,W.clearBufferuiv(W.COLOR,0,y)):(w[0]=Be,w[1]=Qe,w[2]=ft,w[3]=Ce,W.clearBufferiv(W.COLOR,0,w))}else Y|=W.COLOR_BUFFER_BIT}H&&(Y|=W.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Q&&(Y|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y!==0&&W.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),L=R},this.dispose=function(){t.removeEventListener("webglcontextlost",He,!1),t.removeEventListener("webglcontextrestored",rt,!1),t.removeEventListener("webglcontextcreationerror",Re,!1),B.dispose(),be.dispose(),ie.dispose(),Je.dispose(),qe.dispose(),N.dispose(),pe.dispose(),j.dispose(),_e.dispose(),Ge.dispose(),ue.dispose(),me.dispose(),me.removeEventListener("sessionstart",Hc),me.removeEventListener("sessionend",Wc),Ji.stop()};function He(R){R.preventDefault(),au("WebGLRenderer: Context Lost."),P=!0}function rt(){au("WebGLRenderer: Context Restored."),P=!1;const R=Xt.autoReset,H=Me.enabled,Q=Me.autoUpdate,Y=Me.needsUpdate,K=Me.type;at(),Xt.autoReset=R,Me.enabled=H,Me.autoUpdate=Q,Me.needsUpdate=Y,Me.type=K}function Re(R){_t("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function yt(R){const H=R.target;H.removeEventListener("dispose",yt),Kt(H)}function Kt(R){Ii(R),qe.remove(R)}function Ii(R){const H=qe.get(R).programs;H!==void 0&&(H.forEach(function(Q){ue.releaseProgram(Q)}),R.isShaderMaterial&&ue.releaseShaderCache(R))}this.renderBufferDirect=function(R,H,Q,Y,K,Ee){H===null&&(H=Xe);const Ie=K.isMesh&&K.matrixWorld.determinantAffine()<0,we=Nd(R,H,Q,Y,K);Te.setMaterial(Y,Ie);let Ce=Q.index,Be=1;if(Y.wireframe===!0){if(Ce=j.getWireframeAttribute(Q),Ce===void 0)return;Be=2}const Qe=Q.drawRange,ft=Q.attributes.position;let Ne=Qe.start*Be,dt=(Qe.start+Qe.count)*Be;Ee!==null&&(Ne=Math.max(Ne,Ee.start*Be),dt=Math.min(dt,(Ee.start+Ee.count)*Be)),Ce!==null?(Ne=Math.max(Ne,0),dt=Math.min(dt,Ce.count)):ft!=null&&(Ne=Math.max(Ne,0),dt=Math.min(dt,ft.count));const Gt=dt-Ne;if(Gt<0||Gt===1/0)return;_e.setup(K,Y,we,Q,Ce);let At,Tt=ne;if(Ce!==null&&(At=A.get(Ce),Tt=Se,Tt.setIndex(At)),K.isMesh)Y.wireframe===!0?(Te.setLineWidth(Y.wireframeLinewidth*St()),Tt.setMode(W.LINES)):Tt.setMode(W.TRIANGLES);else if(K.isLine){let ln=Y.linewidth;ln===void 0&&(ln=1),Te.setLineWidth(ln*St()),K.isLineSegments?Tt.setMode(W.LINES):K.isLineLoop?Tt.setMode(W.LINE_LOOP):Tt.setMode(W.LINE_STRIP)}else K.isPoints?Tt.setMode(W.POINTS):K.isSprite&&Tt.setMode(W.TRIANGLES);if(K.isBatchedMesh)if(It.get("WEBGL_multi_draw"))Tt.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const ln=K._multiDrawStarts,Fe=K._multiDrawCounts,Sn=K._multiDrawCount,vt=Ce?A.get(Ce).bytesPerElement:1,Qi=qe.get(Y).currentProgram.getUniforms();for(let cn=0;cn<Sn;cn++)Qi.setValue(W,"_gl_DrawID",cn),Tt.render(ln[cn]/vt,Fe[cn])}else if(K.isInstancedMesh)Tt.renderInstances(Ne,Gt,K.count);else if(Q.isInstancedBufferGeometry){const ln=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,Fe=Math.min(Q.instanceCount,ln);Tt.renderInstances(Ne,Gt,Fe)}else Tt.render(Ne,Gt)};function Gc(R,H,Q,Y){L!==null&&R.isNodeMaterial&&L.setObject(Y,R),J===!0&&re.setState(R,Q,!1),R.transparent===!0&&R.side===$n&&R.forceSinglePass===!1?(R.side=xn,R.needsUpdate=!0,tr(R,H,Y),R.side=ms,R.needsUpdate=!0,tr(R,H,Y),R.side=$n):tr(R,H,Y)}this.compile=function(R,H,Q=null){Q===null&&(Q=R),L!==null&&L.renderStart(R,H,Q),S=ie.get(Q),S.init(H),b.push(S),Q.traverseVisible(function(K){K.isLight&&K.layers.test(H.layers)&&(S.pushLight(K),K.castShadow&&S.pushShadow(K))}),R!==Q&&R.traverseVisible(function(K){K.isLight&&K.layers.test(H.layers)&&(S.pushLight(K),K.castShadow&&S.pushShadow(K))}),S.setupLights(),L!==null&&L.updateLights(S.state.lightsArray),de=this.localClippingEnabled,J=re.init(this.clippingPlanes,de),J===!0&&re.setGlobalState(this.clippingPlanes,H),L!==null&&Me.render(S.state.shadowsArray,Q,H);const Y=new Set;return R.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const Ee=K.material;if(Ee)if(Array.isArray(Ee))for(let Ie=0;Ie<Ee.length;Ie++){const we=Ee[Ie];Gc(we,Q,H,K),Y.add(we)}else Gc(Ee,Q,H,K),Y.add(Ee)}),S=b.pop(),L!==null&&L.renderEnd(),Y},this.compileAsync=function(R,H,Q=null){const Y=this.compile(R,H,Q);return new Promise(K=>{function Ee(){if(Y.forEach(function(Ie){const Ce=qe.get(Ie).currentProgram;(Ce===void 0||Ce.isReady())&&Y.delete(Ie)}),Y.size===0){K(R);return}setTimeout(Ee,10)}It.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let oo=null;function Dd(R){oo&&oo(R)}function Hc(){Ji.stop()}function Wc(){Ji.start()}const Ji=new Lf;Ji.setAnimationLoop(Dd),typeof self<"u"&&Ji.setContext(self),this.setAnimationLoop=function(R){oo=R,me.setAnimationLoop(R),R===null?Ji.stop():Ji.start()},me.addEventListener("sessionstart",Hc),me.addEventListener("sessionend",Wc),this.render=function(R,H){if(H!==void 0&&H.isCamera!==!0){_t("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;L!==null&&L.renderStart(R,H);const Q=me.enabled===!0&&me.isPresenting===!0,Y=E!==null&&($===null||Q)&&E.begin(T,$);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),me.enabled===!0&&me.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(me.cameraAutoUpdate===!0&&me.updateCamera(H),H=me.getCamera()),R.isScene===!0&&R.onBeforeRender(T,R,H,$),S=ie.get(R,b.length),S.init(H),S.state.textureUnits=Je.getTextureUnits(),b.push(S),Pe.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),H.isArrayCamera?lt.setFromArrayCamera(H):ke.setFromProjectionMatrix(Pe,Zn,H.reversedDepth),de=this.localClippingEnabled,J=re.init(this.clippingPlanes,de),v=be.get(R,x.length),v.init(),x.push(v),this.info.render.frame++,me.enabled===!0&&me.isPresenting===!0){const Ie=T.xr.getDepthSensingMesh();Ie!==null&&lo(Ie,H,-1/0,T.sortObjects)}lo(R,H,0,T.sortObjects),v.finish(),L!==null&&L.updateLights(S.state.lightsArray),T.sortObjects===!0&&v.sort(ee,fe),xt=me.enabled===!1||me.isPresenting===!1||me.hasDepthSensing()===!1,xt&&B.addToRenderList(v,R),this.info.autoReset===!0&&this.info.reset(),J===!0&&re.beginShadows();const K=S.state.shadowsArray;if(Me.render(K,R,H),J===!0&&re.endShadows(),(Y&&E.hasRenderPass())===!1){const Ie=v.opaque,we=v.transmissive;if(S.setupLights(),H.isArrayCamera){const Ce=H.cameras;if(we.length>0)for(let Be=0,Qe=Ce.length;Be<Qe;Be++){const ft=Ce[Be];Xc(Ie,we,R,ft)}xt&&B.render(R);for(let Be=0,Qe=Ce.length;Be<Qe;Be++){const ft=Ce[Be];Vc(v,R,ft,ft.viewport)}}else we.length>0&&Xc(Ie,we,R,H),xt&&B.render(R),Vc(v,R,H)}$!==null&&U===0&&(Je.updateMultisampleRenderTarget($),Je.updateRenderTargetMipmap($)),Y&&E.end(T),R.isScene===!0&&R.onAfterRender(T,R,H),_e.resetDefaultState(),k=-1,V=null,b.pop(),b.length>0?(S=b[b.length-1],Je.setTextureUnits(S.state.textureUnits),J===!0&&re.setGlobalState(T.clippingPlanes,S.state.camera)):S=null,x.pop(),x.length>0?v=x[x.length-1]:v=null,L!==null&&L.renderEnd()};function lo(R,H,Q,Y){if(R.visible===!1)return;if(R.layers.test(H.layers)){if(R.isGroup)Q=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(H);else if(R.isLight)S.pushLight(R),R.castShadow&&S.pushShadow(R);else if(R.isSprite){const Ie=H.isArrayCamera?lt:ke;if(!R.frustumCulled||R.intersectsFrustum(Ie)){Y&&De.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Pe);const we=pe.update(R),Ce=R.material;Ce.visible&&v.push(R,we,Ce,Q,De.z,null,H)}}else if(R.isMesh||R.isLine||R.isPoints){const Ie=H.isArrayCamera?lt:ke;if(!R.frustumCulled||R.intersectsFrustum(Ie)){const we=pe.update(R),Ce=R.material;if(Y&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),De.copy(R.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),De.copy(we.boundingSphere.center)),De.applyMatrix4(R.matrixWorld).applyMatrix4(Pe)),Array.isArray(Ce)){const Be=we.groups;for(let Qe=0,ft=Be.length;Qe<ft;Qe++){const Ne=Be[Qe],dt=Ce[Ne.materialIndex];dt&&dt.visible&&v.push(R,we,dt,Q,De.z,Ne,H)}}else Ce.visible&&v.push(R,we,Ce,Q,De.z,null,H)}}}const Ee=R.children;for(let Ie=0,we=Ee.length;Ie<we;Ie++)lo(Ee[Ie],H,Q,Y)}function Vc(R,H,Q,Y){const{opaque:K,transmissive:Ee,transparent:Ie}=R;S.setupLightsView(Q),J===!0&&re.setGlobalState(T.clippingPlanes,Q),Y&&Te.viewport(X.copy(Y)),K.length>0&&Hr(K,H,Q),Ee.length>0&&Hr(Ee,H,Q),Ie.length>0&&Hr(Ie,H,Q),Te.buffers.depth.setTest(!0),Te.buffers.depth.setMask(!0),Te.buffers.color.setMask(!0),Te.setPolygonOffset(!1)}function Xc(R,H,Q,Y){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[Y.id]===void 0){const Ne=It.has("EXT_color_buffer_half_float")||It.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[Y.id]=new $t(1,1,{generateMipmaps:!0,type:Ne?di:tn,minFilter:Un,samples:Math.max(4,Nt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:pt.workingColorSpace})}const Ee=S.state.transmissionRenderTarget[Y.id],Ie=Y.viewport||X;Ee.setSize(Ie.z*T.transmissionResolutionScale,Ie.w*T.transmissionResolutionScale);const we=T.getRenderTarget(),Ce=T.getActiveCubeFace(),Be=T.getActiveMipmapLevel();T.setRenderTarget(Ee),T.getClearColor(z),Z=T.getClearAlpha(),Z<1&&T.setClearColor(16777215,.5),T.clear(),xt&&B.render(Q);const Qe=T.toneMapping;T.toneMapping=Ri;const ft=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),S.setupLightsView(Y),J===!0&&re.setGlobalState(T.clippingPlanes,Y),Hr(R,Q,Y),Je.updateMultisampleRenderTarget(Ee),Je.updateRenderTargetMipmap(Ee),It.has("WEBGL_multisampled_render_to_texture")===!1){let Ne=!1;for(let dt=0,Gt=H.length;dt<Gt;dt++){const At=H[dt],{object:Tt,geometry:ln,material:Fe,group:Sn}=At;if(Fe.side===$n&&Tt.layers.test(Y.layers)){const vt=Fe.side;Fe.side=xn,Fe.needsUpdate=!0,qc(Tt,Q,Y,ln,Fe,Sn),Fe.side=vt,Fe.needsUpdate=!0,Ne=!0}}Ne===!0&&(Je.updateMultisampleRenderTarget(Ee),Je.updateRenderTargetMipmap(Ee))}T.setRenderTarget(we,Ce,Be),T.setClearColor(z,Z),ft!==void 0&&(Y.viewport=ft),T.toneMapping=Qe}function Hr(R,H,Q){const Y=H.isScene===!0?H.overrideMaterial:null;for(let K=0,Ee=R.length;K<Ee;K++){const Ie=R[K],{object:we,geometry:Ce,group:Be}=Ie;let Qe=Ie.material;Qe.allowOverride===!0&&Y!==null&&(Qe=Y),we.layers.test(Q.layers)&&qc(we,H,Q,Ce,Qe,Be)}}function qc(R,H,Q,Y,K,Ee){L!==null&&K.isNodeMaterial&&L.setObject(R,K),R.onBeforeRender(T,H,Q,Y,K,Ee),R.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),K.onBeforeRender(T,H,Q,Y,R,Ee),K.transparent===!0&&K.side===$n&&K.forceSinglePass===!1?(K.side=xn,K.needsUpdate=!0,T.renderBufferDirect(Q,H,Y,K,R,Ee),K.side=ms,K.needsUpdate=!0,T.renderBufferDirect(Q,H,Y,K,R,Ee),K.side=$n):T.renderBufferDirect(Q,H,Y,K,R,Ee),R.onAfterRender(T,H,Q,Y,K,Ee)}function $c(R){let H=0;for(const Q of R)Q.texture!==null&&H++;return H}function tr(R,H,Q){H.isScene!==!0&&(H=Xe);const Y=qe.get(R),K=S.state.lights,Ee=S.state.shadowsArray,Ie=K.state.version,we=ue.getParameters(R,K.state,Ee,H,Q,S.state.lightProbeGridArray),Ce=ue.getProgramCacheKey(we);let Be=Y.programs;Y.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?H.environment:null,Y.fog=H.fog;const Qe=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;Y.envMap=N.get(R.envMap||Y.environment,Qe),Y.envMapRotation=Y.environment!==null&&R.envMap===null?H.environmentRotation:R.envMapRotation,Be===void 0&&(R.addEventListener("dispose",yt),Be=new Map,Y.programs=Be,Y.programVariants=new Map);let ft=Be.get(Ce);if(ft!==void 0){if(Y.currentProgram===ft&&Y.lightsStateVersion===Ie)return jc(R,we),ft}else we.uniforms=ue.getUniforms(R),L!==null&&R.isNodeMaterial&&L.build(R,Q,we),R.onBeforeCompile(we,T),ft=ue.acquireProgram(we,Ce),Be.set(Ce,ft),Y.uniforms=we.uniforms;const Ne=Y.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ne.clippingPlanes=re.uniform),jc(R,we),Y.needsLights=Ud(R),Y.lightsStateVersion=Ie,Y.needsLights&&(Ne.ambientLightColor.value=K.state.ambient,Ne.lightProbe.value=K.state.probe,Ne.sunLights.value=K.state.sun,Ne.sunLightShadows.value=K.state.sunShadow,Ne.directionalLights.value=K.state.directional,Ne.directionalLightShadows.value=K.state.directionalShadow,Ne.spotLights.value=K.state.spot,Ne.spotLightShadows.value=K.state.spotShadow,Ne.rectAreaLights.value=K.state.rectArea,Ne.ltc_1.value=K.state.rectAreaLTC1,Ne.ltc_2.value=K.state.rectAreaLTC2,Ne.pointLights.value=K.state.point,Ne.pointLightShadows.value=K.state.pointShadow,Ne.hemisphereLights.value=K.state.hemi,Ne.sunShadowMatrix.value=K.state.sunShadowMatrix,Ne.sunShadowCascade.value=K.state.sunShadowCascade,Ne.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Ne.spotLightMatrix.value=K.state.spotLightMatrix,Ne.spotLightMap.value=K.state.spotLightMap,Ne.pointShadowMatrix.value=K.state.pointShadowMatrix),Y.numLightProbeGrids=$c(S.state.lightProbeGridArray),Y.currentProgram=ft,Y.uniformsList=null,ft}function Id(R,H,Q,Y,K){const Ee=qe.get(R),Ie=Ee.currentProgram.id+","+Y+","+K;let we=Ee.programVariants.get(Ie);return we===void 0?(we=tr(R,H,Q),Ee.programVariants.set(Ie,we)):(Ee.currentProgram=we,Ee.uniformsList=null,Ee.outputColorSpace=Y,Ee.toneMapping=K),we}function Yc(R){if(R.uniformsList===null){const H=R.currentProgram.getUniforms();R.uniformsList=La.seqWithValue(H.seq,R.uniforms)}return R.uniformsList}function jc(R,H){const Q=qe.get(R);Q.outputColorSpace=H.outputColorSpace,Q.batching=H.batching,Q.batchingColor=H.batchingColor,Q.instancing=H.instancing,Q.instancingColor=H.instancingColor,Q.instancingMorph=H.instancingMorph,Q.skinning=H.skinning,Q.morphTargets=H.morphTargets,Q.morphNormals=H.morphNormals,Q.morphColors=H.morphColors,Q.morphTargetsCount=H.morphTargetsCount,Q.numClippingPlanes=H.numClippingPlanes,Q.numIntersection=H.numClipIntersection,Q.vertexAlphas=H.vertexAlphas,Q.vertexTangents=H.vertexTangents,Q.toneMapping=H.toneMapping}function Nd(R,H,Q,Y,K){H.isScene!==!0&&(H=Xe),Je.resetTextureUnits();const Ee=H.fog,Ie=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial?H.environment:null,we=$===null?T.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:pt.workingColorSpace,Ce=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial&&!Y.envMap||Y.isMeshPhongMaterial&&!Y.envMap,Be=N.get(Y.envMap||Ie,Ce),Qe=Y.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,ft=!!Q.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Ne=!!Q.morphAttributes.position,dt=!!Q.morphAttributes.normal,Gt=!!Q.morphAttributes.color;let At=Ri;Y.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(At=T.toneMapping);const Tt=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,ln=Tt!==void 0?Tt.length:0,Fe=qe.get(Y),Sn=S.state.lights;if(J===!0&&(de===!0||R!==V)){const Bt=R===V&&Y.id===k;re.setState(Y,R,Bt)}let vt=!1,Qi=!1;Y.version===Fe.__version?Fe.needsLights&&Fe.lightsStateVersion!==Sn.state.version||K.isBatchedMesh&&Fe.batching===!1||!K.isBatchedMesh&&Fe.batching===!0||K.isBatchedMesh&&Fe.batchingColor===!0&&K._colorsTexture===null||K.isBatchedMesh&&Fe.batchingColor===!1&&K._colorsTexture!==null||K.isInstancedMesh&&Fe.instancing===!1||!K.isInstancedMesh&&Fe.instancing===!0||K.isSkinnedMesh&&Fe.skinning===!1||!K.isSkinnedMesh&&Fe.skinning===!0||K.isInstancedMesh&&Fe.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Fe.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Fe.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Fe.instancingMorph===!1&&K.morphTexture!==null||Fe.envMap!==Be||Y.fog===!0&&Fe.fog!==Ee||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==re.numPlanes||Fe.numIntersection!==re.numIntersection)||Fe.vertexAlphas!==Qe||Fe.vertexTangents!==ft||Fe.morphTargets!==Ne||Fe.morphNormals!==dt||Fe.morphColors!==Gt||Fe.morphTargetsCount!==ln||Fe.numLightProbeGrids!==$c(S.state.lightProbeGridArray)?vt=!0:(Fe.outputColorSpace!==we||Fe.toneMapping!==At)&&(Qi=!0):(vt=!0,Fe.__version=Y.version);let cn=Fe.currentProgram;(vt===!0||Qi===!0)&&(cn=Qi===!0?Id(Y,H,K,we,At):tr(Y,H,K),L&&Y.isNodeMaterial&&L.onUpdateProgram(Y,cn,Fe));let Wr=!1,Ni=!1,es=!1;const mt=cn.getUniforms(),nn=Fe.uniforms;if(Te.useProgram(cn.program)&&(Wr=!0,Ni=!0,es=!0),Y.id!==k&&(k=Y.id,Ni=!0),Wr||V!==R){Te.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),mt.setValue(W,"projectionMatrix",R.projectionMatrix),mt.setValue(W,"viewMatrix",R.matrixWorldInverse);const Zt=mt.map.cameraPosition;Zt!==void 0&&Zt.setValue(W,Ze.setFromMatrixPosition(R.matrixWorld)),Nt.logarithmicDepthBuffer&&mt.setValue(W,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&mt.setValue(W,"isOrthographic",R.isOrthographicCamera===!0),V!==R&&(V=R,Ni=!0,es=!0)}if(Fe.needsLights&&(Sn.state.sunShadowMap.length>0&&mt.setValue(W,"sunShadowMap",Sn.state.sunShadowMap,Je),Sn.state.directionalShadowMap.length>0&&mt.setValue(W,"directionalShadowMap",Sn.state.directionalShadowMap,Je),Sn.state.spotShadowMap.length>0&&mt.setValue(W,"spotShadowMap",Sn.state.spotShadowMap,Je),Sn.state.pointShadowMap.length>0&&mt.setValue(W,"pointShadowMap",Sn.state.pointShadowMap,Je)),K.isSkinnedMesh){mt.setOptional(W,K,"bindMatrix"),mt.setOptional(W,K,"bindMatrixInverse");const Bt=K.skeleton;Bt&&(Bt.boneTexture===null&&Bt.computeBoneTexture(),mt.setValue(W,"boneTexture",Bt.boneTexture,Je))}K.isBatchedMesh&&(mt.setOptional(W,K,"batchingTexture"),mt.setValue(W,"batchingTexture",K._matricesTexture,Je),mt.setOptional(W,K,"batchingIdTexture"),mt.setValue(W,"batchingIdTexture",K._indirectTexture,Je),mt.setOptional(W,K,"batchingColorTexture"),K._colorsTexture!==null&&mt.setValue(W,"batchingColorTexture",K._colorsTexture,Je));const On=Q.morphAttributes;if((On.position!==void 0||On.normal!==void 0||On.color!==void 0)&&oe.update(K,Q,cn),(Ni||Fe.receiveShadow!==K.receiveShadow)&&(Fe.receiveShadow=K.receiveShadow,mt.setValue(W,"receiveShadow",K.receiveShadow)),(Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial)&&Y.envMap===null&&H.environment!==null&&(nn.envMapIntensity.value=H.environmentIntensity),nn.dfgLUT!==void 0&&(nn.dfgLUT.value=O_()),Ni){if(mt.setValue(W,"toneMappingExposure",T.toneMappingExposure),Fe.needsLights&&Fd(nn,es),Ee&&Y.fog===!0&&ve.refreshFogUniforms(nn,Ee),ve.refreshMaterialUniforms(nn,Y,F,q,S.state.transmissionRenderTarget[R.id]),Fe.needsLights&&Fe.numLightProbeGrids>0){const Bt=_;let Zt=0;for(const mi of S.state.lightProbeGridArray)mi.texture!==null&&(Bt.textures[Zt]=mi.texture,Bt.min[Zt]=mi.boundingBox.min,Bt.max[Zt]=mi.boundingBox.max,Bt.resolution[Zt]=mi.resolution,Zt++);for(const mi in Bt)Bt[mi].length=Zt;nn.probesSH.value=Bt.textures,nn.probesMin.value=Bt.min,nn.probesMax.value=Bt.max,nn.probesResolution.value=Bt.resolution}La.upload(W,Yc(Fe),nn,Je)}if(Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(La.upload(W,Yc(Fe),nn,Je),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&mt.setValue(W,"center",K.center),mt.setValue(W,"modelViewMatrix",K.modelViewMatrix),mt.setValue(W,"normalMatrix",K.normalMatrix),mt.setValue(W,"modelMatrix",K.matrixWorld),Y.uniformsGroups!==void 0){const Bt=Y.uniformsGroups;for(let Zt=0,mi=Bt.length;Zt<mi;Zt++){const Zc=Bt[Zt];Ge.update(Zc,cn),Ge.bind(Zc,cn)}}return cn}function Fd(R,H){R.ambientLightColor.needsUpdate=H,R.lightProbe.needsUpdate=H,R.sunLights.needsUpdate=H,R.sunLightShadows.needsUpdate=H,R.directionalLights.needsUpdate=H,R.directionalLightShadows.needsUpdate=H,R.pointLights.needsUpdate=H,R.pointLightShadows.needsUpdate=H,R.spotLights.needsUpdate=H,R.spotLightShadows.needsUpdate=H,R.rectAreaLights.needsUpdate=H,R.hemisphereLights.needsUpdate=H}function Ud(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return $},this.setRenderTargetTextures=function(R,H,Q){const Y=qe.get(R);Y.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),qe.get(R.texture).__webglTexture=H,qe.get(R.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:Q,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,H){const Q=qe.get(R);Q.__webglFramebuffer=H,Q.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(R,H=0,Q=0){$=R,O=H,U=Q;let Y=null,K=!1,Ee=!1;if(R){const we=qe.get(R);if(we.__useDefaultFramebuffer!==void 0){Te.bindFramebuffer(W.FRAMEBUFFER,we.__webglFramebuffer),X.copy(R.viewport),te.copy(R.scissor),le=R.scissorTest,Te.viewport(X),Te.scissor(te),Te.setScissorTest(le),k=-1;return}else if(we.__webglFramebuffer===void 0)Je.setupRenderTarget(R);else if(we.__hasExternalTextures)Je.rebindTextures(R,qe.get(R.texture).__webglTexture,qe.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Qe=R.depthTexture;if(we.__boundDepthTexture!==Qe){if(Qe!==null&&qe.has(Qe)&&(R.width!==Qe.image.width||R.height!==Qe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Je.setupDepthRenderbuffer(R)}}const Ce=R.texture;(Ce.isData3DTexture||Ce.isDataArrayTexture||Ce.isCompressedArrayTexture)&&(Ee=!0);const Be=qe.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Be[H])?Y=Be[H][Q]:Y=Be[H],K=!0):R.samples>0&&Je.useMultisampledRTT(R)===!1?Y=qe.get(R).__webglMultisampledFramebuffer:Array.isArray(Be)?Y=Be[Q]:Y=Be,X.copy(R.viewport),te.copy(R.scissor),le=R.scissorTest}else X.copy(he).multiplyScalar(F).floor(),te.copy(ge).multiplyScalar(F).floor(),le=Le;if(Q!==0&&(Y=D),Te.bindFramebuffer(W.FRAMEBUFFER,Y)&&Te.drawBuffers(R,Y),Te.viewport(X),Te.scissor(te),Te.setScissorTest(le),K){const we=qe.get(R.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+H,we.__webglTexture,Q)}else if(Ee){const we=H;for(let Ce=0;Ce<R.textures.length;Ce++){const Be=qe.get(R.textures[Ce]);W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0+Ce,Be.__webglTexture,Q,we)}}else if(R!==null&&Q!==0){const we=qe.get(R.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,we.__webglTexture,Q)}k=-1};function Kc(R){const H=qe.get(R);return(H.__readFormat!==R.format||H.__readType!==R.type)&&(H.__readFormat=R.format,H.__readType=R.type,H.__formatReadable=Nt.textureFormatReadable(R.format),H.__typeReadable=Nt.textureTypeReadable(R.type)),H}this.readRenderTargetPixels=function(R,H,Q,Y,K,Ee,Ie,we=0){if(!(R&&R.isWebGLRenderTarget)){_t("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=qe.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ie!==void 0&&(Ce=Ce[Ie],Array.isArray(Ce)&&(Ce=Ce[0])),Ce){Te.bindFramebuffer(W.FRAMEBUFFER,Ce);try{const Be=R.textures[we],Qe=Be.format,ft=Be.type;R.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+we);const Ne=Kc(Be);if(Ne.__formatReadable===!1){_t("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ne.__typeReadable===!1){_t("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=R.width-Y&&Q>=0&&Q<=R.height-K&&W.readPixels(H,Q,Y,K,xe.convert(Qe),xe.convert(ft),Ee)}finally{const Be=$!==null?qe.get($).__webglFramebuffer:null;Te.bindFramebuffer(W.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(R,H,Q,Y,K,Ee,Ie,we=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=qe.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ie!==void 0&&(Ce=Ce[Ie],Array.isArray(Ce)&&(Ce=Ce[0])),Ce)if(H>=0&&H<=R.width-Y&&Q>=0&&Q<=R.height-K){Te.bindFramebuffer(W.FRAMEBUFFER,Ce);const Be=R.textures[we],Qe=Be.format,ft=Be.type;R.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+we);const Ne=Kc(Be);if(Ne.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ne.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const dt=W.createBuffer();W.bindBuffer(W.PIXEL_PACK_BUFFER,dt),W.bufferData(W.PIXEL_PACK_BUFFER,Ee.byteLength,W.STREAM_READ),W.readPixels(H,Q,Y,K,xe.convert(Qe),xe.convert(ft),0),W.bindBuffer(W.PIXEL_PACK_BUFFER,null);const Gt=$!==null?qe.get($).__webglFramebuffer:null;Te.bindFramebuffer(W.FRAMEBUFFER,Gt);const At=W.fenceSync(W.SYNC_GPU_COMMANDS_COMPLETE,0);return W.flush(),await qp(W,At,4),W.bindBuffer(W.PIXEL_PACK_BUFFER,dt),W.getBufferSubData(W.PIXEL_PACK_BUFFER,0,Ee),W.bindBuffer(W.PIXEL_PACK_BUFFER,null),W.deleteBuffer(dt),W.deleteSync(At),Ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,H=null,Q=0){const Y=Math.pow(2,-Q),K=Math.floor(R.image.width*Y),Ee=Math.floor(R.image.height*Y),Ie=H!==null?H.x:0,we=H!==null?H.y:0;Je.setTexture2D(R,0),W.copyTexSubImage2D(W.TEXTURE_2D,Q,0,0,Ie,we,K,Ee),Te.unbindTexture()},this.copyTextureToTexture=function(R,H,Q=null,Y=null,K=0,Ee=0){let Ie,we,Ce,Be,Qe,ft,Ne,dt,Gt;const At=R.isCompressedTexture?R.mipmaps[Ee]:R.image;if(Q!==null)Ie=Q.max.x-Q.min.x,we=Q.max.y-Q.min.y,Ce=Q.isBox3?Q.max.z-Q.min.z:1,Be=Q.min.x,Qe=Q.min.y,ft=Q.isBox3?Q.min.z:0;else{const mt=Math.pow(2,-K);Ie=Math.floor(At.width*mt),we=Math.floor(At.height*mt),R.isDataArrayTexture?Ce=At.depth:R.isData3DTexture?Ce=Math.floor(At.depth*mt):Ce=1,Be=0,Qe=0,ft=0}Y!==null?(Ne=Y.x,dt=Y.y,Gt=Y.z):(Ne=0,dt=0,Gt=0);const Tt=xe.convert(H.format),ln=xe.convert(H.type);let Fe;H.isData3DTexture?(Je.setTexture3D(H,0),Fe=W.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(Je.setTexture2DArray(H,0),Fe=W.TEXTURE_2D_ARRAY):(Je.setTexture2D(H,0),Fe=W.TEXTURE_2D),Te.activeTexture(W.TEXTURE0),Te.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,H.flipY),Te.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),Te.pixelStorei(W.UNPACK_ALIGNMENT,H.unpackAlignment);const Sn=Te.getParameter(W.UNPACK_ROW_LENGTH),vt=Te.getParameter(W.UNPACK_IMAGE_HEIGHT),Qi=Te.getParameter(W.UNPACK_SKIP_PIXELS),cn=Te.getParameter(W.UNPACK_SKIP_ROWS),Wr=Te.getParameter(W.UNPACK_SKIP_IMAGES);Te.pixelStorei(W.UNPACK_ROW_LENGTH,At.width),Te.pixelStorei(W.UNPACK_IMAGE_HEIGHT,At.height),Te.pixelStorei(W.UNPACK_SKIP_PIXELS,Be),Te.pixelStorei(W.UNPACK_SKIP_ROWS,Qe),Te.pixelStorei(W.UNPACK_SKIP_IMAGES,ft);const Ni=R.isDataArrayTexture||R.isData3DTexture,es=H.isDataArrayTexture||H.isData3DTexture;if(R.isDepthTexture){const mt=qe.get(R),nn=qe.get(H),On=qe.get(mt.__renderTarget),Bt=qe.get(nn.__renderTarget);Te.bindFramebuffer(W.READ_FRAMEBUFFER,On.__webglFramebuffer),Te.bindFramebuffer(W.DRAW_FRAMEBUFFER,Bt.__webglFramebuffer);for(let Zt=0;Zt<Ce;Zt++)Ni&&(W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,qe.get(R).__webglTexture,K,ft+Zt),W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,qe.get(H).__webglTexture,Ee,Gt+Zt)),W.blitFramebuffer(Be,Qe,Be+Ie,Qe+we,Ne,dt,Ne+Ie,dt+we,W.DEPTH_BUFFER_BIT,W.NEAREST);Te.bindFramebuffer(W.READ_FRAMEBUFFER,null),Te.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else if(K!==0||R.isRenderTargetTexture||qe.has(R)){const mt=qe.get(R),nn=qe.get(H);Te.bindFramebuffer(W.READ_FRAMEBUFFER,C),Te.bindFramebuffer(W.DRAW_FRAMEBUFFER,I);for(let On=0;On<Ce;On++)Ni?W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,mt.__webglTexture,K,ft+On):W.framebufferTexture2D(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,mt.__webglTexture,K),es?W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,nn.__webglTexture,Ee,Gt+On):W.framebufferTexture2D(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,nn.__webglTexture,Ee),K!==0?W.blitFramebuffer(Be,Qe,Be+Ie,Qe+we,Ne,dt,Ne+Ie,dt+we,W.COLOR_BUFFER_BIT,W.NEAREST):es?W.copyTexSubImage3D(Fe,Ee,Ne,dt,Gt+On,Be,Qe,Ie,we):W.copyTexSubImage2D(Fe,Ee,Ne,dt,Be,Qe,Ie,we);Te.bindFramebuffer(W.READ_FRAMEBUFFER,null),Te.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else es?R.isDataTexture||R.isData3DTexture?W.texSubImage3D(Fe,Ee,Ne,dt,Gt,Ie,we,Ce,Tt,ln,At.data):H.isCompressedArrayTexture?W.compressedTexSubImage3D(Fe,Ee,Ne,dt,Gt,Ie,we,Ce,Tt,At.data):W.texSubImage3D(Fe,Ee,Ne,dt,Gt,Ie,we,Ce,Tt,ln,At):R.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,Ee,Ne,dt,Ie,we,Tt,ln,At.data):R.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,Ee,Ne,dt,At.width,At.height,Tt,At.data):W.texSubImage2D(W.TEXTURE_2D,Ee,Ne,dt,Ie,we,Tt,ln,At);Te.pixelStorei(W.UNPACK_ROW_LENGTH,Sn),Te.pixelStorei(W.UNPACK_IMAGE_HEIGHT,vt),Te.pixelStorei(W.UNPACK_SKIP_PIXELS,Qi),Te.pixelStorei(W.UNPACK_SKIP_ROWS,cn),Te.pixelStorei(W.UNPACK_SKIP_IMAGES,Wr),Ee===0&&H.generateMipmaps===!0&&H.mipmapsAutoUpdate===!0&&W.generateMipmap(Fe),Te.unbindTexture()},this.initRenderTarget=function(R){qe.get(R).__webglFramebuffer===void 0&&Je.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?Je.setTextureCube(R,0):R.isData3DTexture?Je.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?Je.setTexture2DArray(R,0):Je.setTexture2D(R,0),Te.unbindTexture()},this.resetState=function(){O=0,U=0,$=null,Te.reset(),_e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=pt._getDrawingBufferColorSpace(e),t.unpackColorSpace=pt._getUnpackColorSpace()}}const Zi={uWarp:{value:new Oe(0,1)},uWarpPlane:{value:new Mt(0,0,0,0)},uWarpOwn:{value:0},uTurn:{value:new Oe(0,0)},uTurnR:{value:new et},uTurnPlace:{value:new Mt(0,0,0,0)}},B_=`
vec2 turnRay(vec2 ab, float share) {
  vec3 q = uTurnR * vec3(ab, 1.0);
  if (!(q.z > 0.0)) return ab;
  return ab + (uTurnPlace.xy + uTurn.y * (q.xy / q.z - uTurnPlace.zw) - ab) * share;
}`,z_=`
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
}`,Hf=`uniform vec2 uWarp; uniform vec4 uWarpPlane; uniform float uWarpOwn; uniform vec2 uTurn; uniform mat3 uTurnR; uniform vec4 uTurnPlace;${B_}`,sh="/* warp step */";function zr(n){return n.includes(sh)||!n.includes("#include <project_vertex>")?n:n.replace("#include <common>",`#include <common>
${sh} ${Hf}`).replace("#include <project_vertex>",`#include <project_vertex>
${z_}`)}const ec=new WeakMap;function $a(n){return ec.get(n)}function Pc(n){if(ec.has(n))return n;const e={value:0},t=n.onBeforeCompile;if(!Object.prototype.hasOwnProperty.call(n,"customProgramCacheKey")){const i=t.toString();n.customProgramCacheKey=()=>i}return n.onBeforeCompile=(i,s)=>{t.call(n,i,s),i.uniforms.uWarpOwn=e},ec.set(n,e),n}function Wf(n){const e=n.clone(),t=n.defines;return t&&(e.defines=t),e.onBeforeCompile=(i,s)=>n.onBeforeCompile(i,s),e.customProgramCacheKey=()=>n.customProgramCacheKey(),Pc(e)}function Di(n){return $e.project.warp&&!n.ortho&&n.cpu.sinP>$e.project.warpMinSinP&&n.cpu.invD>0}function G_(n,e=Zi){if(!Di(n)){e.uWarp.value.set(0,n.near),e.uWarpPlane.value.set(0,0,0,0);return}const t=n.cpu.sinP,i=n.view.elements,s=(n.cpu.zr+n.cpu.tz)*n.cpu.cellMetres;e.uWarp.value.set(t,n.near),e.uWarpPlane.value.set(t*i[4],t*i[5],t*i[6],t*(n.eye.y-s))}function H_(n,e=Zi){const t=n.cpu;if(!t.subOn||n.ortho||!(t.focal>0)){e.uTurn.value.set(0,0);return}const i=t.subR;e.uTurnR.value.set(i[0],i[1],i[2],i[3],i[4],i[5],i[6],i[7],i[8]),e.uTurnPlace.value.set((t.subSX-t.cx)/t.focal,(t.cy-t.subSY)/t.focal,t.subA0,t.subB0),e.uTurn.value.set(1,t.subKF/t.focal)}function Lc(n,e,t,i,s){s.x=e,s.y=t;const r=n.cpu;if(!r.subOn||n.ortho||!(r.focal>0)||!(i>0))return s;const a=r.subR,o=a[6]*e+a[7]*t+a[8];if(!(o>0))return s;const l=r.subKF/r.focal;return s.x=e+((r.subSX-r.cx)/r.focal+l*((a[0]*e+a[1]*t+a[2])/o-r.subA0)-e)*i,s.y=t+((r.cy-r.subSY)/r.focal+l*((a[3]*e+a[4]*t+a[5])/o-r.subB0)-t)*i,s}function W_(n,e,t,i){i.x=e,i.y=t;const s=n.cpu;if(!s.subOn||n.ortho||!(s.focal>0))return i;const r=s.subKF/s.focal,a=(e-(s.subSX-s.cx)/s.focal)/r+s.subA0,o=(t-(s.cy-s.subSY)/s.focal)/r+s.subB0,l=s.subR,c=l[2]*a+l[5]*o+l[8];return c>0&&(i.x=(l[0]*a+l[3]*o+l[6])/c,i.y=(l[1]*a+l[4]*o+l[7])/c),i}function Dc(n){return(n.cpu.zr+n.cpu.tz)*n.cpu.cellMetres}function Ya(n,e,t,i,s){if(!Di(n))return Number.NaN;const r=-i;if(!(r>n.near))return Number.NaN;const a=n.view.elements;return r+n.cpu.sinP*(a[4]*e+a[5]*t+a[6]*i+n.eye.y-Dc(n))*(1-s)}function Vf(n,e,t,i,s){const r=Ya(n,e,t,i,s);return Number.isNaN(r)?1:-i/Math.max(r,n.near)}function rh(n,e,t,i,s){const r=n.view.elements;s.x=n.eye.x+r[0]*e+r[1]*t+r[2]*i,s.y=n.eye.y+r[4]*e+r[5]*t+r[6]*i,s.z=n.eye.z+r[8]*e+r[9]*t+r[10]*i}function Ic(n,e,t,i,s,r,a,o=0){let l=i,c=s,u=1,f=0,h=1;if(Di(n)){const d=n.view.elements,g=n.cpu.sinP*(1-o);if(u=1-g*d[6]+g*d[5]*t,f=g*(n.eye.y-Dc(n)),h=1-e*g*d[4],!(h>0))return!1;const M=(u*l+f)/h,p=(u*c+f)/h,m=n.near;if(M<m&&p<m)return!1;M<m?l+=(c-l)*(m-M)/(p-M):p<m&&(c-=(c-l)*(m-p)/(M-p))}return c>l?(rh(n,e*(u*l+f)/h,t*l,-l,r),rh(n,e*(u*c+f)/h,t*c,-c,a),!0):!1}class Xf{planes=Array.from({length:7},()=>({nx:0,ny:0,nz:0,w:0}));on=!1;set(e){if(this.on=Di(e)&&e.cpu.focal>0,!this.on)return this;const t=e.cpu,i=e.view.elements,s=t.sinP,r=s*i[5],a=s*i[6],o=s*(e.eye.y-Dc(e)),l=-t.cx/t.focal,c=(t.sheetW-t.cx)/t.focal,u=t.cy/t.focal,f=(t.cy-t.sheetH)/t.focal;return this.view(0,1,-l*r,l*(1-a),-l*o,e),this.view(1,-1,c*r,-c*(1-a),c*o,e),this.view(2,0,-1,-u,0,e),this.view(3,0,1,f,0,e),this.view(4,0,0,-1,-e.near,e),this.view(5,0,0,1,e.far,e),this.view(6,0,r,-(1-a),o-e.near,e),this}view(e,t,i,s,r,a){const o=a.view.elements,l=o[0]*t+o[1]*i+o[2]*s,c=o[4]*t+o[5]*i+o[6]*s,u=o[8]*t+o[9]*i+o[10]*s,f=Math.hypot(l,c,u)||1,h=this.planes[e];h.nx=l/f,h.ny=c/f,h.nz=u/f,h.w=(r-(l*a.eye.x+c*a.eye.y+u*a.eye.z))/f}intersectsSphere(e,t,i,s){for(const r of this.planes)if(r.nx*e+r.ny*t+r.nz*i+r.w<-s)return!1;return!0}}const Ys=new Pn;function V_(n){if(n.boundingSphere!==void 0){if(n.boundingSphere===null&&n.computeBoundingSphere?.(),!n.boundingSphere)return!1;Ys.copy(n.boundingSphere)}else{const e=n.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ys.copy(e.boundingSphere)}return Ys.applyMatrix4(n.matrixWorld),!0}class X_{lifted=[];frustum=new ji;vol=null;liftedCount=0;tested=0;lift(e,t,i){this.liftedCount=0,this.tested=0,i.on&&(this.frustum.setFromProjectionMatrix(t.viewProj),this.vol=i,e.traverseVisible(this.visit),this.vol=null,this.liftedCount=this.lifted.length)}visit=e=>{const t=e;if(!e.frustumCulled||t.boundingSphere===void 0&&!t.geometry||(this.tested++,e.matrixWorldAutoUpdate&&e.updateWorldMatrix(!0,!1),!V_(t)||this.frustum.intersectsSphere(Ys)))return;const i=Ys.center;this.vol.intersectsSphere(i.x,i.y,i.z,Ys.radius)&&(e.frustumCulled=!1,this.lifted.push(e))};restore(){for(const e of this.lifted)e.frustumCulled=!0;this.lifted.length=0}}const Wo={x:0,y:0},wn=$e.view,as={up:new G,centre:new G,m:new Ve,roll:new Ve,shear:new Ve,scaled:{target:{x:0,y:0,z:0},heading:0,pitch:0,roll:0,distance:1,fovY:1,orthoScale:1,perspective:0,horizonShift:0}};function q_(n){return{cpu:Od(),outW:0,outH:0,gridW:0,gridH:0,toGridX:1,toGridY:1,view:new Ve,proj:new Ve,viewProj:new Ve,viewProjInverse:new Ve,ortho:!0,eye:new G,nominalEye:new G,target:new G,forward:new G,near:wn.minNearMetres,far:wn.defaultFarMetres,fovY:0,orthoHalfH:0,orthoHalfW:0,metresPerPixel:0,origin:{x:n.x,y:n.y},camera:{target:{x:0,y:0,z:0},heading:0,pitch:0,roll:0,distance:1,fovY:1,orthoScale:1,perspective:0,horizonShift:0}}}function ui(n,e,t,i,s,r){return r.x=t*e-n.x,r.y=s,r.z=i*e-n.y,r}function ah(n,e,t,i,s,r=0,a=t,o=i){const l=n.cpu,c=Gh(s),u=n.camera;u.target.x=e.target.x,u.target.y=e.target.y,u.target.z=e.target.z,u.heading=e.heading,u.pitch=e.pitch,u.roll=e.roll,u.distance=e.distance,u.fovY=e.fovY,u.orthoScale=e.orthoScale,u.perspective=e.perspective,u.horizonShift=e.horizonShift??0;let f=e;if(o>0&&o!==i){const m=as.scaled;m.target.x=e.target.x,m.target.y=e.target.y,m.target.z=e.target.z,m.heading=e.heading,m.pitch=e.pitch,m.roll=e.roll,m.distance=e.distance,m.fovY=e.fovY,m.perspective=e.perspective,m.horizonShift=e.horizonShift,m.orthoScale=Math.max(hi.camera.minOrthoScale,e.orthoScale)*(o/i),f=m}kd(l,f,t,i,c),n.outW=t,n.outH=i,n.gridW=a>0?a:t,n.gridH=o>0?o:i,n.toGridX=n.gridW/t,n.toGridY=n.gridH/i;const h=l.cellMetres,d=n.origin;n.target.set(l.tx*h-d.x,l.tz*h,l.ty*h-d.y),n.forward.set(l.fx*l.cosP,-l.sinP,l.fy*l.cosP).normalize(),n.nominalEye.copy(n.target).addScaledVector(n.forward,-l.distance*h);const g=l.perspective;n.ortho=!(g>=wn.orthoBelowPerspective),n.metresPerPixel=h/l.ppc,as.up.set(l.fx*l.sinP,l.cosP,l.fy*l.sinP).normalize();const M=n.ortho?0:Math.max(0,(l.distance/g-l.distance)*h),p=r>0?Math.min(wn.maxFarMetres+M,r*wn.farHazeMargin):wn.defaultFarMetres+M;if(n.ortho){n.orthoHalfH=i/2*h/l.ppc,n.orthoHalfW=t/2*h/l.ppc,n.fovY=0;const m=Math.max(wn.minOrthoSinPitch,l.sinP),y=l.cosP/m,w=Math.max(0,(c.zMaxCells-l.tz)*h),_=Math.min(0,(c.zMinCells-l.tz)*h),v=n.orthoHalfH*y+w/m+wn.mapNearMarginMetres;n.near=wn.mapNearMarginMetres,n.far=Math.min(wn.maxFarMetres,Math.max(n.near+wn.minDepthRangeMetres,v+n.orthoHalfH*y-_/m)),n.eye.copy(n.target).addScaledVector(n.forward,-v),n.proj.makeOrthographic(-n.orthoHalfW,n.orthoHalfW,n.orthoHalfH,-n.orthoHalfH,n.near,n.far)}else{const m=l.distance/g,y=l.ppc*m;n.fovY=2*Math.atan(i/2/y),n.orthoHalfH=0,n.orthoHalfW=0;const w=l.kMin/l.invD;n.near=Math.max(wn.minNearMetres,w*h);const _=m*h,v=$_(l,c,s);if(_-v>0){const b=i/2/y,E=b*t/i,T=1/Math.sqrt(1+E*E+b*b);n.near=Math.max(n.near,(_-v)*T-wn.slideNearMarginMetres)}n.far=Math.max(n.near+wn.minDepthRangeMetres,p),n.eye.copy(n.target).addScaledVector(n.forward,-m*h);const S=Math.tan(n.fovY/2)*n.near,x=S*t/i;n.proj.makePerspective(-x,x,S,-S,n.near,n.far)}if(l.shift!==0&&(n.ortho?n.proj.elements[13]+=2*l.shift:n.proj.elements[9]-=2*l.shift),l.rolled){const m=t/i,y=l.cosR,w=l.sinR;as.roll.set(y,w/m,0,0,-w*m,y,0,0,0,0,1,0,0,0,0,1),n.proj.premultiply(as.roll)}return as.centre.copy(n.eye).add(n.forward),n.view.lookAt(n.eye,as.centre,as.up),n.view.setPosition(n.eye),n.view.invert(),n.viewProj.multiplyMatrices(n.proj,n.view),n.viewProjInverse.copy(n.viewProj).invert(),n}function $_(n,e,t){const i=n.cellMetres,s=t.size,r=Math.max(Math.abs(n.tx),Math.abs(s-n.tx))*i,a=Math.max(Math.abs(n.ty),Math.abs(s-n.ty))*i,o=n.tz*i,l=Math.max(Math.abs(wn.slideSceneTopMetres-o),Math.abs(o-e.zMinCells*i));return Math.hypot(r,a,l)}function Nc(n,e,t,i,s,r=0,a=0){const o=n.viewProj.elements;let l=o[3]*e+o[7]*t+o[11]*i+o[15];if(!(l>0))return!1;let c=o[0]*e+o[4]*t+o[8]*i+o[12],u=o[1]*e+o[5]*t+o[9]*i+o[13],f=!1;if(r>0&&a>0&&n.cpu.subOn&&!n.ortho){const S=n.view.elements;let x=S[0]*e+S[4]*t+S[8]*i+S[12],b=S[1]*e+S[5]*t+S[9]*i+S[13];const E=S[2]*e+S[6]*t+S[10]*i+S[14],T=-E;if(T>n.near){const P=Ya(n,x,b,E,r);f=P<=n.near,Number.isNaN(P)||(x*=T/Math.max(P,n.near)),Lc(n,x/T,b/T,a,Wo),x=Wo.x*T,b=Wo.y*T;const L=n.proj.elements;c=L[0]*x+L[4]*b+L[8]*E+L[12],u=L[1]*x+L[5]*b+L[9]*E+L[13],l=L[3]*x+L[7]*b+L[11]*E+L[15]}}else if(Di(n)){const S=n.view.elements,x=S[0]*e+S[4]*t+S[8]*i+S[12],b=S[2]*e+S[6]*t+S[10]*i+S[14],E=Ya(n,x,S[1]*e+S[5]*t+S[9]*i+S[13],b,r);f=E<=n.near;const T=Number.isNaN(E)?1:-b/Math.max(E,n.near);if(T!==1){const P=n.proj.elements,L=(T-1)*x;c+=P[0]*L,u+=P[1]*L,l+=P[3]*L}}const h=c/l,d=u/l;s.x=(h+1)/2*n.outW,s.y=(1-d)/2*n.outH;const g=e-n.target.x,M=t-n.target.y,p=i-n.target.z,m=g*n.forward.x+M*n.forward.y+p*n.forward.z;s.depthMetres=m+n.cpu.distance*n.cpu.cellMetres;const y=e-n.eye.x,w=t-n.eye.y,_=i-n.eye.z,v=y*n.forward.x+w*n.forward.y+_*n.forward.z;return s.eyeMetres=v,s.pixelsPerMetre=n.ortho?n.outH/(2*n.orthoHalfH):v>0?n.outH/(2*Math.tan(n.fovY/2)*v):0,!n.ortho&&!(v>=n.near)||f?!1:s.x>=0&&s.y>=0&&s.x<n.outW&&s.y<n.outH}function qf(n,e){return e.x=n.cpu.snapDX,e.y=n.cpu.snapDY,e}function Y_(n){return n.eye.distanceTo(n.target)-n.nominalEye.distanceTo(n.target)}function j_(n,e={x:0,y:0,z:0}){return Bd(n.camera,n.cpu.cellMetres,e)}const oh=new WeakMap,lh={x:0,y:0,depth:0,scale:0};function tc(n){const e=oh.get(n.voxels);if(e&&e.px===n.pivot.x&&e.py===n.pivot.y&&e.pz===n.pivot.z)return e.r;const{sx:t,sy:i,sz:s,voxels:r,pivot:a}=n;let o=0;for(let c=0;c<s;c++)for(let u=0;u<i;u++)for(let f=0;f<t;f++){if(r[f+t*(u+i*c)]===0)continue;const h=f+.5-a.x,d=u+.5-a.y,g=c+.5-a.z,M=h*h+d*d+g*g;M>o&&(o=M)}const l=o>0||r.some(c=>c!==0)?Math.sqrt(o)+1:-1;return oh.set(n.voxels,{px:a.x,py:a.y,pz:a.z,r:l}),l}function K_(n){for(const e of n)tc(e),e.coarse&&tc(e.coarse.model)}function ch(n,e){const t=n.scale*(e.voxelSize??1);return t>0&&Number.isFinite(t)?t:0}function Z_(n,e){const t=n.cpu;if(t.subReach=0,!t.subOn)return 0;const i=e.objects,s=e.followObjects??0;for(let r=0;r<i.length;r++){const a=i[r];if(!(hc(a)>0))continue;const o=r<s,l=a.position.x+(o?t.snapDX:0),c=a.position.y+(o?t.snapDY:0),u=a.position.z/t.cellMetres;if(!Number.isFinite(l+c+u))continue;const f=a.fade;if(f!==void 0&&!(f>0))continue;let h=a.model;const d=h.coarse;d!==void 0&&zd(t,l,c,u,lh)&&ch(a,h)*lh.scale*n.toGridY<d.belowPx&&(h=d.model);const g=ch(a,h);if(!(g>0))continue;const M=tc(h);if(!(M>0))continue;const p=Math.hypot(l-t.subX,c-t.subY,u-t.subZ)+M*g;p>t.subReach&&(t.subReach=p)}return t.subReach}function uh(n){n.matrixAutoUpdate=!1,n.matrixWorldAutoUpdate=!1}function J_(){const n=new Nn,e=new vs;return uh(n),uh(e),{persp:n,ortho:e}}const hh=new G;function fh(n,e){const t=e.ortho?n.ortho:n.persp;if(t.near=e.near,t.far=e.far,t.userData.ported=!0,e.ortho){const i=n.ortho;i.left=-e.orthoHalfW,i.right=e.orthoHalfW,i.top=e.orthoHalfH,i.bottom=-e.orthoHalfH,i.zoom=1,i.userData.texelMetres=e.metresPerPixel,i.userData.focusMetres=e.nominalEye.distanceTo(e.target)}else{const i=n.persp;i.fov=e.fovY*180/Math.PI,i.aspect=e.outW/e.outH,i.userData.focusMetres=e.eye.distanceTo(e.target),i.userData.texelMetres=void 0}return t.projectionMatrix.copy(e.proj),t.projectionMatrixInverse.copy(e.proj).invert(),t.matrixWorldInverse.copy(e.view),t.matrixWorld.copy(e.view).invert(),t.matrix.copy(t.matrixWorld),hh.setFromMatrixPosition(t.matrixWorld),t.position.copy(hh),t.matrixWorld.decompose(t.position,t.quaternion,t.scale),t}const li=$e.project,Et={x:0,y:0,z:0},Ke={ox:0,oy:0,oz:0,dx:0,dy:0,dz:0,len:0,fromEye:!0},Vi={x:0,y:0,z:0},_r={x:0,y:0,z:0};function Q_(n,e,t){if(e<0||t<0||e>=n.size||t>=n.size)return-1/0;const i=t*n.size+e;return n.surface[i]*n.meta.heightUnitMetres}function eM(n,e,t){return e<0||t<0||e>=n.size||t>=n.size?Hh:n.material[t*n.size+e]}function nc(n,e,t,i,s,r){const a=n.ground;if(a&&a.drawnSolid&&a.fine(e,t))return a.drawnSolid(e,t,i,s);const o=Math.floor(e),l=Math.floor(t),c=eM(n.world,o,l);if(c===Hh)return!1;const u=Q_(n.world,o,l);return r&&c<=Wh.Surf?i<u-li.waterSurfaceMetres:i<u}function tM(n,e,t,i,s=0){const r=n.cpu.cellMetres;if(ui(n.origin,r,e,t,i,Et),Ke.fromEye=!0,(Di(n)||s>0&&n.cpu.subOn&&!n.ortho)&&nM(n,s))return Ke.len;if(n.ortho){const u=n.forward,f=(Et.x-n.eye.x)*u.x+(Et.y-n.eye.y)*u.y+(Et.z-n.eye.z)*u.z;return f>0?(Ke.ox=Et.x-u.x*f,Ke.oy=Et.y-u.y*f,Ke.oz=Et.z-u.z*f,Ke.dx=u.x,Ke.dy=u.y,Ke.dz=u.z,Ke.len=f,f):0}Ke.ox=n.eye.x,Ke.oy=n.eye.y,Ke.oz=n.eye.z;let a=Et.x-Ke.ox,o=Et.y-Ke.oy,l=Et.z-Ke.oz;const c=Math.hypot(a,o,l);return c>0?(a/=c,o/=c,l/=c,Ke.dx=a,Ke.dy=o,Ke.dz=l,Ke.len=c,c):0}function nM(n,e){const t=n.view.elements,i=t[0]*Et.x+t[4]*Et.y+t[8]*Et.z+t[12],s=t[1]*Et.x+t[5]*Et.y+t[9]*Et.z+t[13],r=t[2]*Et.x+t[6]*Et.y+t[10]*Et.z+t[14],a=-r;if(!(a>n.near))return!1;let o=i*Vf(n,i,s,r,e)/a,l=s/a;if(e>0&&n.cpu.subOn&&(Lc(n,o,l,1,Pi),o=Pi.x,l=Pi.y),!Ic(n,o,l,n.near,a,Vi,_r))return!1;const c=_r.x-Vi.x,u=_r.y-Vi.y,f=_r.z-Vi.z,h=Math.hypot(c,u,f);return h>0?(Ke.ox=Vi.x,Ke.oy=Vi.y,Ke.oz=Vi.z,Ke.dx=c/h,Ke.dy=u/h,Ke.dz=f/h,Ke.len=h,Ke.fromEye=!1,!0):!1}const ii={x:0,y:0,z:0},ma={x:0,y:0,z:0},Pi={x:0,y:0};function $f(n,e){return n.cpu.subOn&&!n.ortho&&!!e.objects&&e.objects.subjectInFrame()}function Yf(n,e,t,i,s){if(W_(n,t,i,Pi),!Ic(n,Pi.x,Pi.y,n.near,s,ii,ma,n.cpu.subShare))return 1/0;let r=ma.x-ii.x,a=ma.y-ii.y,o=ma.z-ii.z;const l=Math.hypot(r,a,o);if(!(l>0))return 1/0;r/=l,a/=l,o/=l;const c=e.objects.firstHit(ii.x,ii.y,ii.z,r,a,o,l,2);if(!(c<l))return 1/0;const u=n.forward;return(ii.x+r*c-n.eye.x)*u.x+(ii.y+a*c-n.eye.y)*u.y+(ii.z+o*c-n.eye.z)*u.z}function jf(n,e,t,i,s,r,a,o){const l=n.forward,c=r*l.x+a*l.y+o*l.z;return c>0?(e-((t-n.eye.x)*l.x+(i-n.eye.y)*l.y+(s-n.eye.z)*l.z))/c:1/0}function Kf(n,e,t,i){return Math.hypot(e-n.eye.x,t-n.eye.y,i-n.eye.z)}function iM(n,e,t,i,s,r=0){const a=n.cpu.cellMetres,o=tM(n,t,i,s,r);if(!(o>0))return 0;const l=n.origin,c=$f(n,e);let u=e.objects?e.objects.firstHit(Ke.ox,Ke.oy,Ke.oz,Ke.dx,Ke.dy,Ke.dz,o,c?1:0):1/0;if(c){const p=n.view.elements,m=p[0]*Et.x+p[4]*Et.y+p[8]*Et.z+p[12],y=p[1]*Et.x+p[5]*Et.y+p[9]*Et.z+p[13],w=p[2]*Et.x+p[6]*Et.y+p[10]*Et.z+p[14],_=-w;if(_>n.near){let v=m*Vf(n,m,y,w,r)/_,S=y/_;r>0&&(Lc(n,v,S,1,Pi),v=Pi.x,S=Pi.y);const x=jf(n,Yf(n,e,v,S,_),Ke.ox,Ke.oy,Ke.oz,Ke.dx,Ke.dy,Ke.dz);x>=0&&x<u&&(u=x)}}const f=Math.min(o,u),h=Ke.dx*n.forward.x+Ke.dy*n.forward.y+Ke.dz*n.forward.z,d=Ke.fromEye;let g=d?li.rayStartMetres:0,M=0;for(;g<f&&M++<li.rayMaxSteps;){const p=Ke.ox+Ke.dx*g,m=Ke.oy+Ke.dy*g,y=Ke.oz+Ke.dz*g,w=(p+l.x)/a,_=(y+l.y)/a,v=d?g:Kf(n,p,m,y);if(nc(e,w,_,m,v,!0))return(o-g)*h/a;g+=li.rayStepMetres+v*li.rayStepGrowth}return u<o?(o-u)*h/a:0}function sM(n){const e=hi.project;return e.visibleToleranceCells+e.visibleToleranceShare*Math.abs(n)}function rM(n,e,t,i,s){if(!Number.isFinite(t)||!Number.isFinite(i)||!(t>=0&&i>=0&&t<n.outW&&i<n.outH))return null;const r=n.cpu.cellMetres,a=n.viewProjInverse.elements,o=t/n.outW*2-1,l=1-i/n.outH*2,c=(D,C)=>{const I=a[3]*o+a[7]*l+a[11]*D+a[15];return Math.abs(I)>0?(C.x=(a[0]*o+a[4]*l+a[8]*D+a[12])/I,C.y=(a[1]*o+a[5]*l+a[9]*D+a[13])/I,C.z=(a[2]*o+a[6]*l+a[10]*D+a[14])/I,!0):!1},u=Vi,f=_r;if(!c(-1,u)||!c(1,f))return null;const h=Di(n),d=$f(n,e);let g=0,M=0;if(h||d){const D=n.view.elements,C=D[0]*u.x+D[4]*u.y+D[8]*u.z+D[12],I=D[1]*u.x+D[5]*u.y+D[9]*u.z+D[13],O=-(D[2]*u.x+D[6]*u.y+D[10]*u.z+D[14]);if(!(O>0))return null;g=C/O,M=I/O}if(h&&!Ic(n,g,M,n.near,n.far,u,f))return null;let p=f.x-u.x,m=f.y-u.y,y=f.z-u.z;const w=Math.hypot(p,m,y);if(!(w>0))return null;p/=w,m/=w,y/=w;const _=n.origin,v=Math.min(w,n.far-n.near+li.rayStartMetres);let S=e.objects?e.objects.firstHit(u.x,u.y,u.z,p,m,y,v,d?1:0):1/0;if(d){const D=jf(n,Yf(n,e,g,M,n.far),u.x,u.y,u.z,p,m,y);D>=0&&D<S&&(S=D)}const x=Math.min(v,S);let b=0,E=0,T=u.x,P=u.y,L=u.z;for(;b<x&&E++<li.rayMaxSteps;){const D=u.x+p*b,C=u.y+m*b,I=u.z+y*b,O=(D+_.x)/r,U=(I+_.y)/r,$=h?Kf(n,D,C,I):n.near+b;if(nc(e,O,U,C,$,!1)){let k=0,V=1,X=T,te=P,le=L;for(let Z=0;Z<li.bisectSteps;Z++){const se=(k+V)/2,q=X+(D-X)*se,F=te+(C-te)*se,ee=le+(I-le)*se;nc(e,(q+_.x)/r,(ee+_.y)/r,F,$,!1)?V=se:k=se}const z=(k+V)/2;return s.x=(X+(D-X)*z+_.x)/r,s.y=(le+(I-le)*z+_.y)/r,s.z=te+(C-te)*z,s}T=D,P=C,L=I,b+=li.rayStepMetres+$*li.rayStepGrowth}return S<v?(s.x=(u.x+p*S+_.x)/r,s.y=(u.z+y*S+_.y)/r,s.z=u.y+m*S,s):null}const yi=$e.project,zi={x:0,y:0,z:0};class aM{constructor(e,t=()=>performance.now(),i=yi.marchBudgetMs){this.host=e,this.now=t,this.budgetMs=i}frame=0;spentMs=0;marched=0;pendingCount=0;cache=new Map;wanted=[];carryOver(){this.spentMs=0,this.marched=0,this.pendingCount=0;const e=this.wanted;if(e.length>0){e.sort(oM);for(const t of e)t.wanted=!1,!(this.budgetMs>0&&this.spentMs>=this.budgetMs)&&this.marchInto(t);e.length=0}if(this.frame++,this.frame%yi.evictAfterFrames===0)for(const[t,i]of this.cache)this.frame-i.read>yi.evictAfterFrames&&this.cache.delete(t)}point(e,t,i,s,r,a,o,l=!1){return new fM(this,e,t,i,s,r,a,o,l)}resolve(e,t,i,s,r=!1){const a=Math.round(e/yi.keyCells),o=Math.round(t/yi.keyCells),l=Math.round(i/yi.keyMetres);let c=hM(a,o,l),u=this.cache.get(c);for(;u&&(u.kx!==a||u.ky!==o||u.kz!==l||u.subj!==r);)c=c+1|0,u=this.cache.get(c);const f=!!u&&this.valid(u);if(u&&(u.read=this.frame),u&&f&&this.frame-u.frame<yi.refreshAgeFrames){s.behind=u.behind,s.pending=!1;return}if(this.budgetMs<=0||this.spentMs<this.budgetMs){u||(u={x:e,y:t,z:i,subj:r,behind:NaN,ex:0,ey:0,ez:0,frame:-1,read:this.frame,kx:a,ky:o,kz:l,wanted:!1,starved:!1},this.cache.set(c,u)),this.marchInto(u),s.behind=u.behind,s.pending=!1;return}if(u||(u={x:e,y:t,z:i,subj:r,behind:NaN,ex:0,ey:0,ez:0,frame:-1,read:this.frame,kx:a,ky:o,kz:l,wanted:!1,starved:!1},this.cache.set(c,u)),u.wanted||(u.wanted=!0,this.wanted.push(u)),f){u.starved=!1,s.behind=u.behind,s.pending=!1;return}u.starved=!0,this.pendingCount++,s.behind=NaN,s.pending=!0}valid(e){if(e.frame<0||this.frame-e.frame>yi.maxAgeFrames)return!1;this.host.eye(zi);const t=Math.hypot(zi.x-e.ex,zi.y-e.ey,zi.z-e.ez);if(t===0)return!0;const i=this.host.distance(e.x,e.y,e.z);return i>0&&t/i<=yi.maxParallaxRad}marchInto(e){const t=this.now();let i;try{i=this.host.march(e.x,e.y,e.z,e.subj)}catch(s){this.host.fault(`the in-sight march failed: ${s instanceof Error?s.message:String(s)}`),i=NaN}this.spentMs+=this.now()-t,this.marched++,this.host.eye(zi),e.behind=i,e.ex=zi.x,e.ey=zi.y,e.ez=zi.z,e.frame=this.frame,e.starved=!1}}function oM(n,e){return n.starved===e.starved?n.frame-e.frame:n.starved?-1:1}const lM=73856093,cM=19349663,uM=83492791;function hM(n,e,t){return Math.imul(n,lM)^Math.imul(e,cM)^Math.imul(t,uM)|0}const Vo={behind:NaN,pending:!1};class fM{constructor(e,t,i,s,r,a,o,l,c=!1){this.owner=e,this.x=t,this.y=i,this.depth=s,this.pixelsPerCell=r,this.wx=a,this.wy=o,this.wz=l,this.subj=c}done=!1;b=NaN;pend=!1;visSet;resolve(){this.done||(this.done=!0,this.owner.resolve(this.wx,this.wy,this.wz,Vo,this.subj),this.b=Vo.behind,this.pend=Vo.pending)}get behindCells(){return this.resolve(),this.b}set behindCells(e){this.done=!0,this.b=e,this.pend=!1}get visible(){return this.visSet!==void 0?this.visSet:(this.resolve(),!this.pend&&this.b<=sM(this.depth))}set visible(e){this.visSet=e}get pending(){return this.resolve(),this.pend}}const sn=ae.plain,Gn=n=>new Ue().setHex(n),Nr={uNight:{value:0},uLitShare:{value:sn.litShare},uWindowGlow:{value:sn.windowGlow},uEmissiveGain:{value:sn.emissiveGain},uNightLift:{value:sn.actorNightLift},uFarCell:{value:new Oe(sn.farWindowMetres[0],sn.farWindowMetres[1])},uGlassDay:{value:Gn(sn.glassDay)},uGlassSky:{value:Gn(sn.glassSky)},uTrim0:{value:Gn(sn.trimColours[0])},uTrim1:{value:Gn(sn.trimColours[1])},uTrim2:{value:Gn(sn.trimColours[2])},uDoor:{value:Gn(sn.doorColour)},uShopGlass:{value:Gn(sn.shopGlass)},uShopGlow:{value:Gn(sn.shopGlow)},uWin0:{value:Gn(sn.windowColours[0])},uWin1:{value:Gn(sn.windowColours[1])},uWin2:{value:Gn(sn.windowColours[2])}},so=Or(0,0,0),Fc=n=>n-Math.floor(n),dM=Fc(so-Or(-1,0,0)),pM=Fc(so-Or(0,-1,0)),mM=Fc(so-Or(0,0,-1)),ct=ae.facade,si=ae.pixel.masonry,it=n=>Number.isInteger(n)?n.toFixed(1):String(n),Wt=n=>`vec${n.length}(${n.map(it).join(", ")})`,Xo=new Ue().setHex(ct.laceIron),qo=n=>{const e=new Ue().setHex(n);return[e.r,e.g,e.b]},Da=()=>!!ae.smooth.on,gM=()=>[["F_PARAPET_MIX",it(ct.parapetTrimMix)],["F_CORNICE",it(ct.corniceMetres)],["F_MIN_STOREY",it(ct.minStoreyMetres)],["F_MIN_BAY",it(ct.minBayMetres)],["F_WARM",it(ct.warmShare)],["F_PALE",it(ct.paleShare)],["F_SKY_BASE",it(ct.glassSkyBase)],["F_SKY_HASH",it(ct.glassSkyHash)],["F_DOOR_EVERY",it(ct.doorEvery)],["F_SHOP_LIT",it(ct.shopLitShare)],["F_DOOR_GLOW",it(ct.doorGlow)],["F_SHOP_GLOW",it(ct.shopGlow)],["F_HDOOR_MAX",it(ct.houseDoorMaxMetres)],["F_HDOOR_SHARE",it(ct.houseDoorShare)],["F_MULLION",it(ct.mullionMetres)],["F_CURTAIN_MIX",it(ct.curtainTrimMix)],["F_POINT_OFF",it(ct.pointedOffset)],["F_POINT_R",it(ct.pointedRadius)],["F_FRAME",it(ct.frameMetres)],["F_LACE_H",it(ct.laceMetres)],["F_LACE_PER_M",it(ct.lacePerMetre)],["F_LACE_HOLE",it(ct.laceHoleShare)],["F_LOD0",it(Da()?ae.smooth.facadeLod[0]:ct.lodFrom)],["F_LOD1",it(Da()?ae.smooth.facadeLod[1]:ct.lodTo)],["F_LOD_GLASS",it(ct.lodGlass)],["M_BRICK_RG",it(si.brickRedOverGreen)],["M_BRICK_RB",it(si.brickRedOverBlue)],["M_STONE_RB",it(si.stoneRedOverBlue)],["M_STONE_GB",it(si.stoneGreenOverBlue)],["M_JOINT_DARK",it(si.jointDark)],["GF_BAY_STRIDE",it(co.bayStride)],["GF_STOREY_STRIDE",it(co.storeyStride)],["GF_UNIT",it(co.unitMetres)],["GF_DOOR_STEP",it(ts.doorStepMetres)],["GF_MARGIN",it(ts.marginMetres)],["GF_PIER_SPACING",it(ts.pierSpacingMetres)],["GF_PIER_W",it(ts.pierWidthMetres)]].map(([n,e])=>`const float ${n} = ${e};`).join(`
`)+`
`+[["GF_STONE",String(uo.stone)],["GF_WALK_OUT",String(uo.walkOut)],["GF_PIERS",String(uo.piers)]].map(([n,e])=>`const int ${n} = ${e};`).join(`
`)+`
`+[["F_SDOOR",Wt(ct.shopDoor)],["F_SGLASS",Wt(ct.shopGlass)],["F_SFRAME",Wt(ct.shopFrame)],["F_HDOOR",Wt(ct.houseDoor)],["F_FAN",Wt(ct.fanlight)],["F_SPANDREL",Wt(ct.spandrel)],["F_PUNCHED",Wt(ct.punched)],["F_TERRACE",Wt(ct.terrace)],["F_HOUSE",Wt(ct.house)],["F_SILL",Wt(ct.sillMetres)],["F_LACE_OPEN",Wt(ct.laceOpen)],["F_LACE_IRON",Wt([Xo.r,Xo.g,Xo.b])],["GF_PLINTH",Wt(qo(ho[ts.plinthColour]))],["GF_PIER",Wt(qo(ho[ts.pierColour]))],["GF_SUBFLOOR",Wt(qo(ho[ts.subfloorColour]))],["M_BRICK",Wt(si.brickMetres)],["M_STONE",Wt(si.stoneMetres)],["M_RENDER",Wt(si.renderMetres)],["M_VAR",Wt(si.variation)],["M_LOD",Wt(Da()?ae.smooth.masonryLod:si.lodPixels)]].map(([n,e])=>`const ${e.slice(0,4)} ${n} = ${e};`).join(`
`),xM=()=>gM()+`
float fh1(vec3 p) { return fract(sin(dot(p, vec3(12.9898, 78.233, 37.719))) * 43758.5453); }
float box2(vec2 p, vec2 a, vec2 b, vec2 w) {
  vec2 s = smoothstep(a - w, a + w, p) * (1.0 - smoothstep(b - w, b + w, p));
  return s.x * s.y;
}
// Returns the facade's colour over the wall (rgb) and how much glows (a), given the wall's albedo.
vec4 facadeColour(vec3 wall, vec4 f0, vec4 f1) {
  int code = int(f1.w + 0.5);
  int style = (code & 7) - 1;
  // Ground fit (src/street/raster/ground-fit-values.ts GF_KIND, GF_PACK): a wall with a base under its floor level carries
  // its kind in the bay's whole multiples of GF_BAY_STRIDE, its storey and ground floor packed in f1.x, and the pavement
  // under it (metres from the floor level, v's zero) in f0.w. Below the floor: plain stone (a brick wall keeps its
  // brick), piers over a dark subfloor, or walk-out storeys; above it, doors only where the pavement is within
  // GF_DOOR_STEP of the floor. A wall with no base reads as before.
  int baseKind = int(f1.y / GF_BAY_STRIDE);
  float bayRaw = f1.y - float(baseKind) * GF_BAY_STRIDE, gfRaw = f1.x, storeyRaw = f0.w, foot = 0.0;
  if (baseKind > 0) {
    float sq = floor(f1.x / GF_STOREY_STRIDE);
    gfRaw = (f1.x - sq * GF_STOREY_STRIDE) * GF_UNIT;
    storeyRaw = sq * GF_UNIT;
    foot = f0.w;
  }
  bool below = baseKind > 0 && f0.y < 0.0;
  bool walkOut = below && baseKind == GF_WALK_OUT;
  bool plainBase = below && !walkOut;
  if (below && baseKind == GF_PIERS) return vec4(mod(f0.x, GF_PIER_SPACING) < GF_PIER_W ? GF_PIER : GF_SUBFLOOR, 0.0);
  if (below && baseKind == GF_STONE) wall = GF_PLINTH;
  if (style < 0 || (!plainBase && (style == 3 || f1.z <= 0.0))) return vec4(wall, 0.0);
  bool street = ((code >> 3) & 1) == 1;
  int trimCode = (code >> 4) & 3;
  int orn = (code >> 6) & 31;
  float seed = float((code >> 11) & 4095);
  vec3 trim = trimCode == 0 ? uTrim0 : trimCode == 1 ? uTrim1 : uTrim2;
  float u = f0.x, v = f0.y, wallH = f0.z, storey = max(storeyRaw, F_MIN_STOREY), gf = gfRaw, bay = max(bayRaw, F_MIN_BAY), share = f1.z;
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
  if (plainBase) return vec4(wall, 0.0);
  // Above the walls' top: a parapet, with a cornice band at its foot.
  if (v > wallH) return vec4(mix(wall, trim, F_PARAPET_MIX), 0.0);
  float cornice = box2(vec2(0.5, v), vec2(0.0, wallH - F_CORNICE), vec2(1.0, wallH), aa);
  // Walk-out storeys count down from the floor level (fl -1 is the first under it).
  bool ground = v < gf && !walkOut;
  float fl = walkOut ? floor(v / storey) : ground ? 0.0 : 1.0 + floor((v - gf) / storey);
  float fv = walkOut ? v - fl * storey : ground ? v : mod(v - gf, storey);
  float fhh = ground ? gf : storey;
  bool doorOk = foot >= -GF_DOOR_STEP;
  float bi = floor(u / bay);
  vec2 q = vec2(fract(u / bay) * bay, fv);       // metres within the bay and the floor
  bool house = style == 4, terrace = style == 2, curtain = style == 1;
  vec3 col = wall;
  float glow = 0.0;
  float lit = step(fh1(vec3(seed, fl, bi)), uLitShare * uNight);
  vec3 litCol = fh1(vec3(bi, seed, fl)) < F_WARM ? uWin0 : (fh1(vec3(fl, bi, seed)) < F_PALE ? uWin1 : uWin2);
  vec3 glass = mix(uGlassDay, uGlassSky, F_SKY_BASE + F_SKY_HASH * fh1(vec3(seed, bi * 0.37, fl * 0.71)));
${Da()?`  // Smooth B: where the windows have fully given way to the wall's average (by day), stop here; the result is the same.
  if (smoothstep(F_LOD0, F_LOD1, max(aa.x / bay, aa.y / storey)) * (1.0 - uNight) >= 1.0) return vec4(mix(mix(wall, glass, F_LOD_GLASS * share), trim, cornice), 0.0);
`:""}  if (ground && street && !house && !terrace && !curtain) {
    // Shop fronts: wide glass, a door every third bay, a fascia above.
    bool door = doorOk && mod(bi + seed, F_DOOR_EVERY) < 1.0;
    float w = door ? box2(q, vec2(bay * F_SDOOR.x, 0.0), vec2(bay * F_SDOOR.y, fhh * F_SDOOR.z), aa) : box2(q, vec2(bay * F_SGLASS.x, fhh * F_SGLASS.y), vec2(bay * F_SGLASS.z, fhh * F_SGLASS.w), aa);
    float frame = box2(q, vec2(bay * F_SFRAME.x, 0.0), vec2(bay * F_SFRAME.y, fhh * F_SFRAME.z), aa);
    col = mix(col, trim, frame);
    vec3 shop = mix(uShopGlass, uShopGlow, step(fh1(vec3(bi, seed, 3.0)), F_SHOP_LIT * uNight));
    col = mix(col, door ? mix(uDoor, uShopGlow, F_DOOR_GLOW * uNight) : shop, w);
    glow = w * uNight * (door ? F_DOOR_GLOW : F_SHOP_GLOW);
  } else if (ground && street && (house || terrace) && doorOk && mod(bi, 2.0) < 1.0) {
    // A front door, with a round fanlight on heritage terraces.
    float w = box2(q, vec2(bay * F_HDOOR.x, 0.0), vec2(bay * F_HDOOR.y, min(F_HDOOR_MAX, fhh * F_HDOOR_SHARE)), aa);
    if ((orn & 8) != 0) w = max(w, step(length((q - vec2(bay * 0.5, min(F_HDOOR_MAX, fhh * F_HDOOR_SHARE))) / vec2(bay * F_FAN.x, F_FAN.y)), 1.0));
    col = mix(col, uDoor, w);
  } else if (walkOut && fl * storey >= foot - GF_MARGIN && fl * storey <= foot + GF_DOOR_STEP && mod(bi, 2.0) < 1.0) {
    // A walk-out storey's door, where its floor meets the pavement.
    float w = box2(q, vec2(bay * F_HDOOR.x, 0.0), vec2(bay * F_HDOOR.y, min(F_HDOOR_MAX, fhh * F_HDOOR_SHARE)), aa);
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
    // A walk-out storey's window only where its sill is above the pavement.
    float keep = walkOut ? step(foot, fl * storey + a.y) : 1.0;
    float w = box2(q, a, b, aa) * keep;
    if ((orn & 3) != 0) {
      float r = (b.x - a.x) * 0.5;
      float y0 = b.y - r;
      vec2 c = q - vec2(bay * 0.5, y0);
      float inHead = (orn & 1) != 0 ? step(length(c), r) : step(length(c + vec2(r * F_POINT_OFF * sign(c.x), 0.0)), r * F_POINT_R) * step(abs(c.x), r);
      w = q.y > y0 ? inHead * step(a.x, q.x) * step(q.x, b.x) * keep : w;
    }
    float frame = box2(q, a - vec2(F_FRAME), b + vec2(F_FRAME, 0.0), aa) * keep - w;
    float sill = box2(q, vec2(a.x - F_SILL.x, a.y - F_SILL.y), vec2(b.x + F_SILL.x, a.y), aa) * keep;
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
`,Zf=new WeakMap,Uc={uRigInv:{value:new Ve},uRigVoxel:{value:1}};function Jf(n){return Zf.get(n)}function ic(n,e){const t=n.onBeforeCompile,i=e.dissolve?{share:{value:1},seed:{value:0},pivot:{value:new G}}:null;return i&&Zf.set(n,i),n.onBeforeCompile=(s,r)=>{t?.call(n,s,r),Object.assign(s.uniforms,Nr),e.rigCells&&Object.assign(s.uniforms,Uc),i&&(s.uniforms.uDissolveShare=i.share,s.uniforms.uDissolveSeed=i.seed,s.uniforms.uDissolvePivot=i.pivot);let a=s.vertexShader,o=s.fragmentShader;const l=[],c=[],u=[];e.dissolve&&(l.push("varying vec3 vVoxPos; varying vec3 vVoxNrm;"+(e.rigCells?" uniform mat4 uRigInv; uniform float uRigVoxel;":"")),c.push("varying vec3 vVoxPos; varying vec3 vVoxNrm; uniform float uDissolveShare; uniform float uDissolveSeed; uniform vec3 uDissolvePivot;"),u.push(e.rigCells?"{ vec4 rp = uRigInv * (modelMatrix * vec4(position, 1.0)); vVoxPos = vec3(rp.x, -rp.z, rp.y) / uRigVoxel; vVoxNrm = vec3(0.0); }":"vVoxPos = position; vVoxNrm = normal;")),e.ao&&(l.push("attribute float ao; varying float vAo;"),c.push("varying float vAo;"),u.push("vAo = ao;")),e.facade&&(l.push("attribute vec4 fac0; attribute vec4 fac1; varying vec4 vFac0; flat varying vec4 vFac1;"),c.push("varying vec4 vFac0; flat varying vec4 vFac1;"),u.push("vFac0 = fac0; vFac1 = fac1;")),e.dayNight&&(l.push("attribute vec3 col2; attribute float glow; varying float vGlow; uniform float uNight;"),c.push("varying float vGlow;"),u.push("{ float gb = floor(glow * 3.0 + 0.5); float dayG = mod(gb, 2.0); float nightG = floor(gb / 2.0); vColor.rgb = mix(vColor.rgb, col2, step(0.5, uNight)); vGlow = mix(dayG, nightG, step(0.5, uNight)); }")),e.srgbColours&&u.push("vColor.rgb = pow(vColor.rgb, vec3(2.2));"),e.farWindows&&(l.push("varying vec3 vFarPos; varying vec3 vFarN;"),c.push("varying vec3 vFarPos; varying vec3 vFarN; uniform vec2 uFarCell;"),u.push("vFarPos = (modelMatrix * vec4(position, 1.0)).xyz; vFarN = normal;")),c.push("uniform float uNight; uniform float uLitShare; uniform float uWindowGlow; uniform float uEmissiveGain; uniform float uNightLift;","uniform vec3 uGlassDay; uniform vec3 uGlassSky; uniform vec3 uTrim0; uniform vec3 uTrim1; uniform vec3 uTrim2; uniform vec3 uDoor; uniform vec3 uShopGlass; uniform vec3 uShopGlow; uniform vec3 uWin0; uniform vec3 uWin1; uniform vec3 uWin2;"),e.facade&&c.push(xM()),a=a.replace("#include <common>",`#include <common>
`+l.join(`
`)).replace("#include <color_vertex>",`#include <color_vertex>
`+u.join(`
`));const f=[];e.facade&&f.push("vec4 fcd = facadeColour(diffuseColor.rgb, vFac0, vFac1); diffuseColor.rgb = fcd.rgb; float facadeGlow = fcd.a;"),e.ao&&e.aoSteps?f.push(`diffuseColor.rgb *= max(floor(vAo * ${it(e.aoSteps)} + 0.5) / ${it(e.aoSteps)}, ${it(e.aoFloor??0)});`):e.ao&&e.aoFloor!==void 0?f.push(`diffuseColor.rgb *= max(vAo, ${it(e.aoFloor)});`):e.ao&&f.push("diffuseColor.rgb *= vAo;");const h=[];e.facade&&h.push("totalEmissiveRadiance += diffuseColor.rgb * facadeGlow * uWindowGlow;"),e.dayNight&&h.push("totalEmissiveRadiance += diffuseColor.rgb * vGlow * uEmissiveGain;"),e.nightLift&&h.push("totalEmissiveRadiance += diffuseColor.rgb * uNight * uNightLift;"),e.farWindows&&h.push("if (abs(vFarN.y) < 0.5 && uNight > 0.01) { vec2 c = floor(vec2(vFarPos.x + vFarPos.z, vFarPos.y) / uFarCell); float h = fract(sin(dot(c, vec2(12.9898, 78.233))) * 43758.5453); vec2 f = fract(vec2(vFarPos.x + vFarPos.z, vFarPos.y) / uFarCell); float w = step(0.25, f.x) * step(f.x, 0.75) * step(0.3, f.y) * step(f.y, 0.8); totalEmissiveRadiance += uWin0 * w * step(h, uLitShare * uNight) * uWindowGlow; }");const d=e.dissolve?"if (uDissolveShare < 1.0) { vec3 g = floor(vVoxPos + uDissolvePivot - 0.5 * vVoxNrm); float r = fract("+it(so)+" + g.x * "+dM.toPrecision(17)+" + g.y * "+pM.toPrecision(17)+" + g.z * "+mM.toPrecision(17)+"); if (fract(r + uDissolveSeed) >= uDissolveShare) discard;}":"";o=o.replace("#include <common>",`#include <common>
`+c.join(`
`)).replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
`+d).replace("#include <color_fragment>",`#include <color_fragment>
`+f.join(`
`)).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
`+h.join(`
`)),"uWarp"in s.uniforms||Object.assign(s.uniforms,Zi),s.vertexShader=zr(a),s.fragmentShader=o},n.customProgramCacheKey=()=>`surface-${e.srgbColours?1:0}${e.ao?1:0}${e.facade?1:0}${e.dayNight?1:0}${e.nightLift?1:0}${e.farWindows?1:0}${e.dissolve?1:0}${e.rigCells?"r":""}-${e.aoSteps??0}-${n.type}`,n}const _s={far:1,near:2,landmarks:3,actors:4},Qf={skip:!1},sc=5;function os(n){const e=n.onBeforeCompile;return n.onBeforeCompile=(t,i)=>{e?.call(n,t,i),"uWarp"in t.uniforms||Object.assign(t.uniforms,Zi),t.vertexShader=zr(t.vertexShader)},n}class vM{id="plain";mats=new Map;lampHead;lampPool;constructor(e){const t=i=>ic(new dn({vertexColors:i.vertexColors}),{srgbColours:i.srgb,ao:i.ao,facade:i.facade,dayNight:i.dayNight,nightLift:i.nightLift,farWindows:i.farWindows});e.colorSpace=bn,this.mats.set("ground",os(new dn({map:e}))),this.mats.set("building",t({srgb:!0,ao:!0,facade:!0,dayNight:!1,vertexColors:!0})),this.mats.set("road",t({srgb:!0,ao:!0,facade:!1,dayNight:!1,vertexColors:!0})),this.mats.set("farGround",t({srgb:!0,ao:!0,facade:!1,dayNight:!1,vertexColors:!0})),this.mats.set("farBuilding",t({srgb:!0,ao:!0,facade:!1,dayNight:!1,vertexColors:!0,farWindows:!0})),this.mats.set("voxel",t({srgb:!0,ao:!0,facade:!1,dayNight:!0,vertexColors:!0})),this.mats.set("part",t({srgb:!0,ao:!1,facade:!1,dayNight:!1,vertexColors:!0,nightLift:!0})),this.mats.set("walker",this.mats.get("part")),this.mats.set("crown",os(new dn({color:16777215}))),this.mats.set("trunk",os(new dn({color:ae.props.trunkColour}))),this.mats.set("lampPole",os(new dn({color:ae.props.lampPoleColour}))),this.lampHead=os(new dn({color:ae.props.lampHeadColour,emissive:new Ue(ae.props.lampHeadColour)})),this.mats.set("lampHead",this.lampHead),this.lampPool=os(new eo({map:_M(),color:ae.props.lampPoolColour,transparent:!0,blending:ka,depthWrite:!1,fog:!0,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4})),this.mats.set("lampPool",this.lampPool),this.mats.set("water",os(new Bm({color:ae.water.colour,shininess:ae.water.shininess,specular:new Ue(ae.water.specular,ae.water.specular,ae.water.specular)})));for(const i of["road"]){const s=this.mats.get(i);s.polygonOffset=!0,s.polygonOffsetFactor=0,s.polygonOffsetUnits=ae.plain.roadDepthUnits}}material(e){return this.mats.get(e)}update(e){this.lampHead.emissiveIntensity=e,this.lampPool.opacity=e*ae.props.lampPoolStrength,this.lampPool.visible=e>.01}render(e,t,i,s,r){i.layers.mask=r?s|1:s,e.autoClear=r,e.render(t,i)}}function _M(){const e=new Uint8Array(16384);for(let i=0;i<64;i++)for(let s=0;s<64;s++){const r=Math.hypot(s+.5-32,i+.5-32)/32,a=Math.round(255*Math.max(0,1-r)**2);e.set([a,a,a,255],(i*64+s)*4)}const t=new Qn(e,64,64,Cn);return t.needsUpdate=!0,t}const rc=Object.keys(_s),Tn={looks:null,mix:[],has:[],steps:[]};function MM(n){const e=new Map;for(const[t,i]of Object.entries(_s)){const s=n.has(ae.look.mix[t])?ae.look.mix[t]:"plain";e.set(s,(e.get(s)??0)|1<<i)}return[...e].sort((t,i)=>+!!n.get(i[0]).lowRes-+!!n.get(t[0]).lowRes).map(([t,i])=>{const s=n.get(t);return{id:t,look:s,lowRes:!!s.lowRes,mask:i}})}function SM(n){if(Tn.looks!==n)return!1;const e=ae.look.mix;for(let t=0;t<rc.length;t++){const i=e[rc[t]];if(i!==Tn.mix[t]||n.has(i)!==Tn.has[t])return!1}for(let t=0;t<Tn.steps.length;t++){const i=Tn.steps[t];if(n.get(i.id)!==i.look||!!i.look.lowRes!==i.lowRes)return!1}return!0}function yM(n,e){if(SM(n))return Tn.steps;Tn.looks=n,Tn.mix.length=0,Tn.has.length=0;for(const t of rc){const i=ae.look.mix[t];Tn.mix.push(i),Tn.has.push(n.has(i))}return Tn.steps=MM(n),wM(Tn.steps,e),Tn.steps}function wM(n,e){if(!e||n.every(i=>i.lowRes))return;e.getContext?.()?.getContextAttributes?.()?.depth===!1&&console.warn("flyby: the look mix draws a full-resolution look, but the canvas was made without a depth buffer (the mix changed after the context was made); its layers will not sort")}function bM(n,e,t,i){const s=yM(n,e);e.shadowMap.autoUpdate=!1,e.shadowMap.needsUpdate=!Qf.skip;for(let r=0;r<s.length;r++)s[r].look.render(e,t,i,s[r].mask,r===0);i.layers.enableAll()}class EM{constructor(e,t){this.m=e,this.night=t}p=[];n=[];c=[];c2=[];g=[];o=[];i=[];vertex(e,t,i,s,r,a,o,l){const c=this.p.length/3,u=this.m;this.p.push(e-u.pivot.x,t-u.pivot.y,i-u.pivot.z),this.n.push(s,r,a);const f=u.palette[o]??0,h=this.night.palette[o]??f;return this.c.push(f>>16&255,f>>8&255,f&255),this.c2.push(h>>16&255,h>>8&255,h&255),this.g.push((u.emissive[o]?1:0)|(this.night.emissive[o]?2:0)),this.o.push(l),c}done(){return{pos:new Float32Array(this.p),nrm:new Float32Array(this.n),col:new Uint8Array(this.c),col2:new Uint8Array(this.c2),glow:new Uint8Array(this.g),ao:new Uint8Array(this.o),idx:new Uint32Array(this.i)}}}const TM=ae.landmarks.aoBytes;function AM(n,e=n,t){const{sx:i,sy:s,sz:r,voxels:a}=n,o=[i,s,r],l=(d,g,M)=>d<0||g<0||M<0||d>=i||g>=s||M>=r?0:a[d+i*(g+s*M)],c=t?(d,g,M)=>d<0||g<0||M<0||d>=i||g>=s||M>=r?0:t[d+i*(g+s*M)]:l,u=new EM(n,e),f=[0,0,0],h=[0,0,0];for(let d=0;d<3;d++){const g=(d+1)%3,M=(d+2)%3,p=o[g],m=o[M],y=new Int32Array(p*m),w=new Uint8Array(p*m*4);for(const _ of[1,-1])for(let v=0;v<o[d];v++){y.fill(-1);for(let S=0;S<m;S++)for(let x=0;x<p;x++){h[d]=v,h[g]=x,h[M]=S;const b=l(h[0],h[1],h[2]);if(!b||(f[0]=h[0],f[1]=h[1],f[2]=h[2],f[d]+=_,l(f[0],f[1],f[2])))continue;const E=(L,D)=>{const C=[f[0],f[1],f[2]];C[g]+=L;const I=c(C[0],C[1],C[2])?1:0,O=[f[0],f[1],f[2]];O[M]+=D;const U=c(O[0],O[1],O[2])?1:0,$=[f[0],f[1],f[2]];$[g]+=L,$[M]+=D;const k=c($[0],$[1],$[2])?1:0;return I&&U?0:3-(I+U+k)},T=(S*p+x)*4;w[T]=E(-1,-1),w[T+1]=E(1,-1),w[T+2]=E(1,1),w[T+3]=E(-1,1);const P=w[T]===w[T+1]&&w[T]===w[T+2]&&w[T]===w[T+3];y[S*p+x]=P?b|w[T]<<8:b|4096}for(let S=0;S<m;S++)for(let x=0;x<p;){const b=y[S*p+x];if(b<0){x++;continue}const E=(b&4096)===0;let T=1,P=1;if(E){for(;x+T<p&&y[S*p+x+T]===b;)T++;e:for(;S+P<m;){for(let le=0;le<T;le++)if(y[(S+P)*p+x+le]!==b)break e;P++}}const L=b&255,D=(S*p+x)*4,C=[w[D],w[D+1],w[D+2],w[D+3]],I=_>0?v+1:v,O=(le,z)=>{const Z=[0,0,0];return Z[d]=I,Z[g]=le,Z[M]=z,Z},U=[O(x,S),O(x+T,S),O(x+T,S+P),O(x,S+P)],$=[0,0,0];$[d]=_;const k=U.map((le,z)=>u.vertex(le[0],le[1],le[2],$[0],$[1],$[2],L,TM[C[z]])),V=C[0]+C[2]<C[1]+C[3],X=_>0,te=(le,z,Z)=>X?u.i.push(k[le],k[z],k[Z]):u.i.push(k[le],k[Z],k[z]);V?(te(1,2,3),te(1,3,0)):(te(0,1,2),te(0,2,3));for(let le=0;le<P;le++)for(let z=0;z<T;z++)y[(S+le)*p+x+z]=-1;x+=T}}}return u.done()}const Os=8192;function RM(n,e=Number.POSITIVE_INFINITY){const t=n.pos.length/12;if(!(t>=1)||n.idx.length!==t*6)return n;const i=n.pos[0],s=n.pos[1],r=n.pos[2],a=(w,_)=>Math.round(n.pos[w*3+_]-(_===0?i:_===1?s:r)),o=[i,s,r],l=[],c=[],u=[],f=[],h=[0,0,0];for(let w=0;w<t;w++){const _=w*4,v=n.idx[w*6],x=(n.idx[w*6+1]-v+4)%4===1,b=[a(_,0),a(_,1),a(_,2)],E=[a(_+1,0),a(_+1,1),a(_+1,2)],T=[a(_+3,0),a(_+3,1),a(_+3,2)],P=E[0]!==b[0]?0:E[1]!==b[1]?1:2,L=T[0]!==b[0]?0:T[1]!==b[1]?1:2,D=(U,$)=>{const k=[U],V=$>U?1:-1;if(Number.isFinite(e)&&e>=1)for(let X=U+V;X!==$;X+=V)(X%e+e)%e===0&&k.push(X);return k.push($),k},C=D(b[P],E[P]),I=D(b[L],T[L]),O=C.length===2&&I.length===2;for(let U=0;U+1<I.length;U++)for(let $=0;$+1<C.length;$++){O?l.push(_,_+1,_+2,_+3):l.push(_,_,_,_),c.push(x),u.push(O?w:-1);for(const[k,V]of[[$,U],[$+1,U],[$+1,U+1],[$,U+1]])h[0]=b[0],h[1]=b[1],h[2]=b[2],h[P]=C[k],h[L]=I[V],f.push(h[0],h[1],h[2])}}const d=c.length;for(let w=0;w<f.length;w++)if(Math.abs(f[w])>=Os/2)return n;const g=(w,_,v)=>((w+Os/2)*Os+(_+Os/2))*Os+(v+Os/2),M=new Set;for(let w=0;w<f.length;w+=3)M.add(g(f[w],f[w+1],f[w+2]));const p={p:[],n:[],c:[],c2:[],g:[],o:[],i:[]},m=(w,_,v,S)=>{const x=p.p.length/3;return p.p.push(_+o[0],v+o[1],S+o[2]),p.n.push(n.nrm[w*3],n.nrm[w*3+1],n.nrm[w*3+2]),p.c.push(n.col[w*3],n.col[w*3+1],n.col[w*3+2]),p.c2.push(n.col2[w*3],n.col2[w*3+1],n.col2[w*3+2]),p.g.push(n.glow[w]),p.o.push(n.ao[w]),x},y=[];for(let w=0;w<d;w++){const _=l[w*4],v=w*12;y.length=0;let S=!1;for(let b=0;b<4;b++){const E=v+b*3,T=v+(b+1)%4*3,P=f[E],L=f[E+1],D=f[E+2],C=f[T]-P,I=f[T+1]-L,O=f[T+2]-D,U=Math.abs(C)+Math.abs(I)+Math.abs(O);y.push(m(l[w*4+b],P,L,D));for(let $=1;$<U;$++){const k=P+C/U*$,V=L+I/U*$,X=D+O/U*$;M.has(g(k,V,X))&&(y.push(m(_,k,V,X)),S=!0)}}if(!S){const b=u[w];if(b>=0){for(let D=0;D<6;D++)p.i.push(y[n.idx[b*6+D]-b*4]);continue}const[E,T,P,L]=y;c[w]?p.i.push(E,T,P,E,P,L):p.i.push(E,P,T,E,L,P);continue}const x=m(_,(f[v]+f[v+6])/2,(f[v+1]+f[v+7])/2,(f[v+2]+f[v+8])/2);for(let b=0;b<y.length;b++){const E=y[b],T=y[(b+1)%y.length];c[w]?p.i.push(x,E,T):p.i.push(x,T,E)}}return{pos:new Float32Array(p.p),nrm:new Float32Array(p.n),col:new Uint8Array(p.c),col2:new Uint8Array(p.c2),glow:new Uint8Array(p.g),ao:new Uint8Array(p.o),idx:new Uint32Array(p.i)}}const ac=$e.meshes,CM=3,br=255,PM=br/CM,LM=3,ed=new WeakMap,td=new WeakMap,Fr=new WeakSet;let nd=0,id=0,sd=0,rd=0,ad=0,od=0;function DM(n,e){return n.sx===e.sx&&n.sy===e.sy&&n.sz===e.sz&&n.pivot.x===e.pivot.x&&n.pivot.y===e.pivot.y&&n.pivot.z===e.pivot.z&&n.shadeAs===e.shadeAs&&n.shadeHollow===e.shadeHollow}function IM(n){return{sx:n.sx,sy:n.sy,sz:n.sz,pivot:{x:n.pivot.x,y:n.pivot.y,z:n.pivot.z},shadeAs:n.shadeAs,shadeHollow:n.shadeHollow}}function ro(n){const e=ed.get(n.voxels);return e!==void 0&&DM(e.grid,n)&&e.conformed===Fr.has(n.voxels)?e:void 0}function Gr(n){const e=td.get(n);return e!==void 0&&e.voxels===n.voxels&&e.geom.conformed===Fr.has(n.voxels)?e:void 0}function NM(n){for(const e of n)ld(e)}function ld(n){Fr.has(n.voxels)||(Fr.add(n.voxels),nd++)}function FM(n){const{sx:e,sy:t,sz:i,shadeAs:s,shadeHollow:r}=n;if(s===void 0&&r===void 0)return;const a=(s??n.voxels).slice(0,e*t*i);if(r!==void 0)for(let o=0;o<a.length;o++)r[o]!==0&&(a[o]=0);return a}function UM(n){rd++;const e=[];for(let l=0;l<=br;l++)e.push(l);const t=Fr.has(n.voxels),i=AM({...n,palette:e,emissive:[]},void 0,FM(n)),s=t?RM(i,ac.subjectCutVoxels):i,r=s.pos.length/3,a=new Uint8Array(r);let o=0;for(let l=0;l<r;l++){a[l]=s.col[l*3+2];const c=s.pos[l*3],u=s.pos[l*3+1],f=s.pos[l*3+2],h=c*c+u*u+f*f;h>o&&(o=h)}return{pos:s.pos,nrm:s.nrm,ao:s.ao,idx:s.idx,slots:a,radiusVoxels:Math.sqrt(o),conformed:t}}function OM(n,e){const t=new Dt;return t.name=`${e.name} grid`,t.setAttribute("position",new tt(n.pos,3)),t.setAttribute("normal",new tt(n.nrm,3)),t.setAttribute("ao",new tt(n.ao,1,!0)),t.setIndex(new tt(n.idx,1)),n.pos.length>0?t.computeBoundingSphere():t.boundingSphere=new Pn,{geometry:t,tris:n.idx.length/LM,radiusVoxels:n.radiusVoxels,slots:n.slots,grid:IM(e),conformed:n.conformed}}function kM(n,e){const t=n.slots,i=t.length,s=new Uint8Array(i*3),r=new Uint8Array(i*3),a=new Uint8Array(i);for(let c=0;c<i;c++){const u=t[c],f=e.palette[u]??0,h=f>>16&br,d=f>>8&br,g=f&br;s[c*3]=h,s[c*3+1]=d,s[c*3+2]=g,r[c*3]=h,r[c*3+1]=d,r[c*3+2]=g;const M=e.emissive[u]?1:0;a[c]=(M|M<<1)*PM}const o=new Dt;o.name=e.name;const l=n.geometry;return o.setAttribute("position",l.getAttribute("position")),o.setAttribute("normal",l.getAttribute("normal")),o.setAttribute("ao",l.getAttribute("ao")),o.setAttribute("color",new tt(s,3,!0)),o.setAttribute("col2",new tt(r,3,!0)),o.setAttribute("glow",new tt(a,1,!0)),o.setIndex(l.index),o.boundingSphere=l.boundingSphere.clone(),o}function BM(n,e){let t=ro(n);return t===void 0&&(t=OM(e,n),ed.set(n.voxels,t),id++,(n.shadeAs!==void 0||n.shadeHollow!==void 0)&&od++),Oc(t,n)}function Oc(n,e){const t={geom:n,geometry:kM(n,e),voxels:e.voxels};return td.set(e,t),sd++,t}function cd(n){const e=ro(n);return e!==void 0?Oc(e,n):BM(n,UM(n))}function zM(n){const e=Gr(n);if(e)return e;const t=ro(n);if(t!==void 0)return fd(n),hd++,Oc(t,n)}function GM(n){const e=Gr(n);return e||(fd(n),ud++,cd(n))}const gn=[];let ud=0,hd=0;function fd(n){for(let e=0;e<gn.length;e++)if(gn[e].model===n){gn.splice(e,1);return}}let $o=0,Yo=0;function dh(n){if(!n.urgent){gn.push(n);return}let e=0;for(;e<gn.length&&gn[e].urgent;)e++;gn.splice(e,0,n)}function dd(n,e=!1){if(Gr(n)===void 0){for(const t of gn)if(t.model===n){e&&!t.urgent&&(gn.splice(gn.indexOf(t),1),t.urgent=!0,dh(t));return}dh({model:n,urgent:e})}}function HM(n){for(const e of n)dd(e,!1)}function jo(n=ac.sliceBudgetMs){const e=performance.now();let t=0;for(;gn.length>0&&t<ac.maxJobsPerCall;){const i=gn[0],s=ro(i.model)!==void 0;if(t>0&&performance.now()-e+(s?Yo:$o)>n)break;gn.shift();const r=performance.now();cd(i.model);const a=performance.now()-r;ad+=a,s?Yo=Math.max(Yo,a):$o=Math.max($o,a),t++}return gn.length>0}function WM(){return{geometries:id,models:sd,meshed:rd,queued:gn.length,builtMs:ad,shadeGaps:od,forced:ud,forcedColour:hd,conformed:nd}}function VM(){return gn.length}function XM(){const n=new Dt;return n.name="pre-warm (voxel mesh layout)",n.setAttribute("position",new tt(new Float32Array(0),3)),n.setAttribute("normal",new tt(new Float32Array(0),3)),n.setAttribute("ao",new tt(new Uint8Array(0),1,!0)),n.setAttribute("color",new tt(new Uint8Array(0),3,!0)),n.setAttribute("col2",new tt(new Uint8Array(0),3,!0)),n.setAttribute("glow",new tt(new Uint8Array(0),1,!0)),n.setIndex(new tt(new Uint32Array(0),1)),n.boundingSphere=new Pn,n}function ja(n,e){const t=Math.cos(n.roll||0),i=Math.sin(n.roll||0),s=Math.cos(n.pitch||0),r=Math.sin(n.pitch||0),a=Math.cos(n.yaw||0),o=Math.sin(n.yaw||0),l=t,c=0,u=i,f=i*r,h=s,d=-t*r,g=-i*s,M=r,p=t*s,m=a,y=o,w=o,_=-a;return e[0]=m*l+w*f,e[1]=m*c+w*h,e[2]=m*u+w*d,e[3]=y*l+_*f,e[4]=y*c+_*h,e[5]=y*u+_*d,e[6]=g,e[7]=M,e[8]=p,e}function pd(n,e,t,i,s,r){const a=t;return n.set(e[0]*a,e[1]*a,e[2]*a,i,e[6]*a,e[7]*a,e[8]*a,s,e[3]*a,e[4]*a,e[5]*a,r,0,0,0,1),n}function qM(n,e,t){return n.scale*(e.voxelSize??1)*t}function $M(n,e){const t=n.model.coarse;return t&&n.scale*(n.model.voxelSize??1)*e<t.belowPx?t.model:n.model}function YM(n,e,t,i){const s=e?t.pixelsPerMetre*i.cpu.cellMetres*i.toGridY:0;return s>0?$M(n,s):n.model}function jM(n,e,t,i,s,r){s.pixelsPerMetre=0;const a=Nc(n,t.x,t.y,t.z,s,i);return r.model=YM(e,a||n.cpu.subOn&&i>0&&s.pixelsPerMetre>0,s,n),a}function KM(n,e){return n===e||n.voxels===e.voxels||n.coarse?.model===e||e.coarse?.model===n}function md(){const n=new WeakSet,e=new Set([...ae.landmarks.include,...$e.meshes.replacedLandmarks]);for(const[t,i]of Gd())e.has(t)&&(n.add(i.day),n.add(i.night));return n}const ZM=new Float64Array(9),Hn={x:0,y:0,z:0},Ko={x:0,y:0,depthMetres:0,eyeMetres:0,pixelsPerMetre:0},ph={model:null},Zo=new Pn,Jo=new ji,ga=new Xf,mh=new Ve,gh=new G;function JM(n,e,t,i=md){const s=new mn;s.matrixAutoUpdate=!1,s.frustumCulled=!1;const r=[],a=[],o=_=>{if(!t)return null;let v=a[_];if(!v){if(_>=$e.objects.maxFadeMaterials)return null;v=Pc(t()),a[_]=v}return v};for(let _=0;_<$e.prewarm.fadeMaterials&&o(_);_++);const l=[],c=_=>l[_]??=Wf(n);for(let _=0;_<$e.prewarm.subjectMaterials;_++)c(_);let u=0,f=null,h=0,d=new Int32Array($e.objects.maxDrawn);const g=[];let M=new Uint8Array($e.objects.maxDrawn);const p={drawn:0,waiting:0,culled:0,popped:0,fading:0,kept:0,colourPasses:0,forced:0,skipped:0,subject:0},m=new WeakMap;let y=null;const w=_=>{let v=r[_];return v||(v=new gt(void 0,n),v.matrixAutoUpdate=!1,v.frustumCulled=!1,v.layers.set(_s.actors),r[_]=v,s.add(v)),v};return{group:s,stats:p,update(_,v,S,x){p.drawn=0,p.waiting=0,p.culled=0,p.popped=0,p.kept=0,p.colourPasses=0,p.forced=0,p.skipped=0,p.subject=0,h=0,u=0;const b=_.objects;d.length<b.length&&(d=new Int32Array(b.length*2)),d.fill(-1,0,b.length),M.length<b.length&&(M=new Uint8Array(b.length*2)),M.fill(0,0,b.length);const E=v.cpu.cellMetres;mh.copy(v.viewProj),Jo.setFromProjectionMatrix(mh),ga.set(v);const T=ae.opt.actors.cullMarginMetres;let P=0;for(let L=0;L<b.length&&P<$e.objects.maxDrawn;L++){if(x[L])continue;const D=b[L],C=D.position;if(!Number.isFinite(C.x+C.y+C.z)||!((D.fade??1)>0))continue;if(D.static&&(y??=i(),y.has(D.model))){p.skipped++,M[L]=1;continue}const I=L<(_.followObjects??0),O=I?v.cpu.snapDX:0,U=I?v.cpu.snapDY:0;ui(e,E,C.x+O,C.y+U,C.z,Hn);const $=v.cpu.subOn,k=ga.on||$?hc(D):0,V=jM(v,D,Hn,k,Ko,ph);let X=ph.model;D.subject!==void 0&&ld(X);let te=Gr(X);if(!te&&p.colourPasses<$e.meshes.colourPassesPerFrame&&(te=zM(X),te&&p.colourPasses++),te){if(D.static||I){const F=m.get(D);(!F||F.mesh!==te||F.model!==X)&&m.set(D,{mesh:te,model:X})}}else{dd(X,!0);const F=m.get(D);if(F&&(D.static||I&&KM(F.model,X)))te=F.mesh,X=F.model,p.kept++;else if(I&&!D.static)te=GM(X),p.forced++;else{p.waiting++;continue}}const le=qM(D,X,E),z=te.geom.radiusVoxels*le+T+(V&&Ko.pixelsPerMetre>0?2/Ko.pixelsPerMetre:0);if(gh.set(Hn.x,Hn.y,Hn.z),Zo.set(gh,z),!(k>0&&$?!0:ga.on?ga.intersectsSphere(Hn.x,Hn.y,Hn.z,z)||k>0&&Jo.intersectsSphere(Zo):Jo.intersectsSphere(Zo))){p.culled++;continue}const se=w(P);se.geometry=te.geometry,se.visible=!0;const q=D.fade??1;if(k>0&&!(q<1)){const F=c(u);$a(F).value=k,se.material=F,u++,p.subject++}else if(q<1){const F=o(h),ee=F?Jf(F):void 0,fe=F?$a(F):void 0;if(F&&ee&&fe){ee.share.value=q,fe.value=k,k>0&&p.subject++;const he=D.fadeSeed??0;ee.seed.value=he>=0&&he<1?he:0,ee.pivot.value.set(X.pivot.x,X.pivot.y,X.pivot.z),se.material=F,h++}else se.material=n,p.popped++}else se.material=n;pd(se.matrix,ja(D,ZM),le,Hn.x,Hn.y,Hn.z),se.matrixWorld.copy(se.matrix),d[L]=P,g[P]=X,P++,p.drawn++}p.fading=h;for(let L=P;L<r.length;L++)r[L].visible=!1},drawn(_){const v=_>=0&&_<d.length?d[_]:-1;return v>=0?r[v]:null},modelOf(_){const v=_>=0&&_<d.length?d[_]:-1;return v>=0?g[v]??null:null},skippedAt(_){return _>=0&&_<M.length&&M[_]===1},warmMeshes(){if(!f){const _=XM();f=[new gt(_,n)];for(const v of a)v&&f.push(new gt(_,v));for(const v of l)f.push(new gt(_,v))}return f}}}const Gs=$e.sight,Ur=new WeakMap,Er=[];function gd(n){const e=Math.max(1,Math.round(Gs.occupancyBlockVoxels)),t=Math.ceil(n.sx/e),i=Math.ceil(n.sy/e),s=Math.ceil(n.sz/e);return{sx:n.sx,sy:n.sy,sz:n.sz,b:e,bx:t,by:i,bz:s,blocks:new Uint8Array(t*i*s),voxels:n.voxels,x0:n.sx,y0:n.sy,z0:n.sz,x1:0,y1:0,z1:0,done:!1,nextZ:0}}function xd(n){const e=n.nextZ++,{sx:t,sy:i,b:s,bx:r,by:a,voxels:o,blocks:l}=n,c=(e/s|0)*r*a;let u=t*i*e,f=!1;for(let h=0;h<i;h++,u+=t){const d=c+(h/s|0)*r;for(let g=0;g<t;g++)o[u+g]!==0&&(l[d+(g/s|0)]=1,f=!0,g<n.x0&&(n.x0=g),g+1>n.x1&&(n.x1=g+1),h<n.y0&&(n.y0=h),h+1>n.y1&&(n.y1=h+1))}f&&(e<n.z0&&(n.z0=e),e+1>n.z1&&(n.z1=e+1)),n.nextZ>=n.sz&&(n.done=!0)}function QM(n){const e=Ur.get(n.voxels);return e&&e.done&&e.sx===n.sx&&e.sy===n.sy&&e.sz===n.sz?e:void 0}function Qo(n){let e=Ur.get(n.voxels);for((!e||e.sx!==n.sx||e.sy!==n.sy||e.sz!==n.sz)&&(e=gd(n),Ur.set(n.voxels,e));!e.done;)xd(e);return e}function eS(n){if(Ur.has(n.voxels))return;const e=gd(n);Ur.set(n.voxels,e),Er.push(e)}const tS=()=>performance.now();function xh(n=Gs.occupancyBudgetMs,e=tS){const t=e();let i=!0;for(;Er.length>0;){const s=Er[0];for(;!s.done;){if(!i&&e()-t>=n)return!0;xd(s),i=!1}Er.shift()}return!1}function nS(){return Er.length}const ls=1e-7,ci=1e-12,iS=16,el=2;function sS(n,e,t,i,s,r,a,o,l=1,c=0){if(!(n.x1>n.x0&&n.y1>n.y0&&n.z1>n.z0))return 1/0;const u=kc(e,t,i,s,r,a,n.x0,n.y0,n.z0,n.x1,n.y1,n.z1,o);if(!(u<1/0))return 1/0;const f=vd.v,h=u>0,{sx:d,sy:g,b:M,bx:p,by:m,voxels:y,blocks:w}=n,_=s>0?1:-1,v=r>0?1:-1,S=a>0?1:-1,x=Math.abs(s)>ci?Math.abs(1/s):1/0,b=Math.abs(r)>ci?Math.abs(1/r):1/0,E=Math.abs(a)>ci?Math.abs(1/a):1/0;let T=u,P=!1,L=!0,D=0,C=0,I=0,O=0,U=0,$=0,k=!0;for(;T<=f;){if(k){k=!1;const le=e+s*(T+ls),z=t+r*(T+ls),Z=i+a*(T+ls);D=Math.min(n.x1-1,Math.max(n.x0,Math.floor(le))),C=Math.min(n.y1-1,Math.max(n.y0,Math.floor(z))),I=Math.min(n.z1-1,Math.max(n.z0,Math.floor(Z))),O=x===1/0?1/0:((s>0?D+1:D)-e)/s,U=b===1/0?1/0:((r>0?C+1:C)-t)/r,$=E===1/0?1/0:((a>0?I+1:I)-i)/a}const V=D/M|0,X=C/M|0,te=I/M|0;if(w[V+p*(X+m*te)]===0){const le=x===1/0?1/0:((s>0?(V+1)*M:V*M)-e)/s,z=b===1/0?1/0:((r>0?(X+1)*M:X*M)-t)/r,Z=E===1/0?1/0:((a>0?(te+1)*M:te*M)-i)/a;let se=Math.min(le,z,Z);if(se>T||(se=T+ls),P=!1,L=!1,se>f)return 1/0;T=se;const q=e+s*(T+ls),F=t+r*(T+ls),ee=i+a*(T+ls);if(q<n.x0||q>=n.x1||F<n.y0||F>=n.y1||ee<n.z0||ee>=n.z1)return 1/0;k=!0;continue}if(y[D+d*(C+g*I)]!==0){if(L?h:!P){if(l>=1)return T;const le=Or(D,C,I)+c;if(le-Math.floor(le)<l)return T}P=!0}else P=!1;if(L=!1,O<=U&&O<=$){if(T=O,D+=_,O+=x,D<n.x0||D>=n.x1)return 1/0}else if(U<=$){if(T=U,C+=v,U+=b,C<n.y0||C>=n.y1)return 1/0}else if(T=$,I+=S,$+=E,I<n.z0||I>=n.z1)return 1/0}return 1/0}function rS(n,e,t,i,s,r,a,o,l,c,u,f,h){const d=kc(n,e,t,i,s,r,a,o,l,c,u,f,h);return d>0?d:1/0}const vh={yaw:0,pitch:0,roll:0},Wn=new Float64Array(9),cs={x:0,y:0,z:0};class aS{count=0;waiting=0;cap=0;occ=[];xf=new Float64Array(0);box=new Float64Array(0);share=new Float64Array(0);seed=new Float64Array(0);rig=new Uint8Array(0);subj=new Uint8Array(0);anySubject=!1;stamp=new Uint32Array(0);tick=0;gx0=0;gz0=0;cell=1;nx=0;nz=0;cellStart=new Int32Array(1);cellItems=new Int32Array(0);grow(e){if(e<=this.cap)return;const t=Math.max(e,this.cap*el,iS),i=new Float64Array(t*16);i.set(this.xf),this.xf=i;const s=new Float64Array(t*6);s.set(this.box),this.box=s;const r=new Float64Array(t);r.set(this.share),this.share=r;const a=new Float64Array(t);a.set(this.seed),this.seed=a;const o=new Uint8Array(t);o.set(this.rig),this.rig=o;const l=new Uint8Array(t);l.set(this.subj),this.subj=l,this.stamp=new Uint32Array(t),this.cap=t}pending=null;frameIn={objects:[],origin:{x:0,y:0},cellMetres:1,pick:()=>null,mode:()=>0,follow:0,snapX:0,snapY:0};setFrame(e,t,i,s,r,a=0,o=0,l=0){const c=this.frameIn;c.objects=e,c.origin=t,c.cellMetres=i,c.pick=s,c.mode=r,c.follow=a,c.snapX=o,c.snapY=l,this.pending=c,this.count=0,this.waiting=0,this.nx=this.nz=0}subjectInFrame(){return this.ensure(),this.anySubject}ensure(){const e=this.pending;e&&(this.pending=null,this.build(e.objects,e.origin,e.cellMetres,e.pick,e.mode,e.follow,e.snapX,e.snapY))}build(e,t,i,s,r,a,o,l){const c=i;this.grow(e.length),this.count=0,this.waiting=0,this.anySubject=!1;const u=oS;u.length=0;let f=1/0,h=1/0,d=-1/0,g=-1/0;for(let v=0;v<e.length;v++){const S=e[v];this.occ[v]=null;const x=S.position;if(!Number.isFinite(x.x+x.y+x.z))continue;const b=S.fade??1;if(!(b>0))continue;const E=s(S,v);if(!E)continue;const T=QM(E);if(!T){eS(E),this.waiting++;continue}if(!(T.x1>T.x0))continue;const P=S.scale*(E.voxelSize??1)*c;if(!(P>0))continue;const L=v<a;ui(t,c,x.x+(L?o:0),x.y+(L?l:0),x.z,cs);const D=r(v);D===0?ja(S,Wn):(vh.yaw=S.yaw,ja(vh,Wn));const C=this.xf,I=v*16;C[I]=Wn[0],C[I+1]=Wn[1],C[I+2]=Wn[2],C[I+3]=Wn[6],C[I+4]=Wn[7],C[I+5]=Wn[8],C[I+6]=Wn[3],C[I+7]=Wn[4],C[I+8]=Wn[5],C[I+9]=cs.x,C[I+10]=cs.y,C[I+11]=cs.z,C[I+12]=P,C[I+13]=E.pivot.x,C[I+14]=E.pivot.y,C[I+15]=E.pivot.z;const O=D===1?1:0;this.rig[v]=O,this.subj[v]=(S.subject??0)>0?1:0,this.subj[v]&&(this.anySubject=!0);const U=O?Gs.walkerBoxMarginMetres/P:0;let $=1/0,k=1/0,V=1/0,X=-1/0,te=-1/0,le=-1/0;for(let q=0;q<8;q++){const F=(q&1?T.x1+U:T.x0-U)-E.pivot.x,ee=(q&2?T.y1+U:T.y0-U)-E.pivot.y,fe=(q&4?T.z1+U:T.z0-U)-E.pivot.z,he=cs.x+P*(C[I]*F+C[I+1]*ee+C[I+2]*fe),ge=cs.y+P*(C[I+3]*F+C[I+4]*ee+C[I+5]*fe),Le=cs.z+P*(C[I+6]*F+C[I+7]*ee+C[I+8]*fe);he<$&&($=he),he>X&&(X=he),ge<k&&(k=ge),ge>te&&(te=ge),Le<V&&(V=Le),Le>le&&(le=Le)}const z=this.box,Z=v*6;z[Z]=$,z[Z+1]=k,z[Z+2]=V,z[Z+3]=X,z[Z+4]=te,z[Z+5]=le,this.share[v]=O?1:b<1?b:1;const se=S.fadeSeed??0;this.seed[v]=se>=0&&se<1?se:0,this.occ[v]=T,u.push(v),$<f&&(f=$),V<h&&(h=V),X>d&&(d=X),le>g&&(g=le)}for(let v=e.length;v<this.occ.length;v++)this.occ[v]=null;if(this.occ.length=e.length,this.count=u.length,u.length===0){this.nx=this.nz=0;return}const M=Math.max(d-f,g-h),p=Math.max(Gs.boxGridCellMetres,M/Gs.boxGridMaxCells);this.cell=p,this.gx0=f,this.gz0=h,this.nx=Math.max(1,Math.ceil((d-f)/p)),this.nz=Math.max(1,Math.ceil((g-h)/p));const m=this.nx*this.nz;this.cellStart.length<m+1&&(this.cellStart=new Int32Array(m+1));const y=this.cellStart;y.fill(0,0,m+1);let w=0;for(const v of u){this.range(v,En);for(let S=En[1];S<=En[3];S++)for(let x=En[0];x<=En[2];x++)y[S*this.nx+x+1]++;w+=(En[2]-En[0]+1)*(En[3]-En[1]+1)}for(let v=0;v<m;v++)y[v+1]+=y[v];this.cellItems.length<w&&(this.cellItems=new Int32Array(Math.max(w,this.cellItems.length*el)));const _=tl.length>=m?tl:tl=new Int32Array(m*el);_.set(y.subarray(0,m));for(const v of u){this.range(v,En);for(let S=En[1];S<=En[3];S++)for(let x=En[0];x<=En[2];x++)this.cellItems[_[S*this.nx+x]++]=v}}range(e,t){const i=this.box,s=e*6,r=this.cell;t[0]=Math.min(this.nx-1,Math.max(0,Math.floor((i[s]-this.gx0)/r))),t[1]=Math.min(this.nz-1,Math.max(0,Math.floor((i[s+2]-this.gz0)/r))),t[2]=Math.min(this.nx-1,Math.max(0,Math.floor((i[s+3]-this.gx0)/r))),t[3]=Math.min(this.nz-1,Math.max(0,Math.floor((i[s+5]-this.gz0)/r)))}prepareFrame(){this.ensure()}firstHit(e,t,i,s,r,a,o,l=0){if(this.ensure(),this.count===0||this.nx===0||!(o>0))return 1/0;let c=o,u=1/0;++this.tick===4294967295&&(this.stamp.fill(0),this.tick=1);const f=this.tick,h=this.cell,d=this.gx0,g=this.gz0,M=d+this.nx*h,p=g+this.nz*h;let m=0,y=c;if(Math.abs(s)<ci){if(e<d||e>M)return 1/0}else{const C=(d-e)/s,I=(M-e)/s;m=Math.max(m,Math.min(C,I)),y=Math.min(y,Math.max(C,I))}if(Math.abs(a)<ci){if(i<g||i>p)return 1/0}else{const C=(g-i)/a,I=(p-i)/a;m=Math.max(m,Math.min(C,I)),y=Math.min(y,Math.max(C,I))}if(m>y)return 1/0;let w=Math.min(this.nx-1,Math.max(0,Math.floor((e+s*m-d)/h))),_=Math.min(this.nz-1,Math.max(0,Math.floor((i+a*m-g)/h)));const v=s>0?1:-1,S=a>0?1:-1,x=Math.abs(s)>ci?h/Math.abs(s):1/0,b=Math.abs(a)>ci?h/Math.abs(a):1/0;let E=x===1/0?1/0:(d+(s>0?w+1:w)*h-e)/s,T=b===1/0?1/0:(g+(a>0?_+1:_)*h-i)/a,P=m;const L=this.xf,D=this.box;for(;!(P>=c);){const C=_*this.nx+w;for(let I=this.cellStart[C];I<this.cellStart[C+1];I++){const O=this.cellItems[I];if(this.stamp[O]===f||(this.stamp[O]=f,l!==0&&this.subj[O]===1!=(l===2)))continue;const U=O*6;if(!(kc(e,t,i,s,r,a,D[U],D[U+1],D[U+2],D[U+3],D[U+4],D[U+5],c)<c))continue;const k=O*16,V=e-L[k+9],X=t-L[k+10],te=i-L[k+11],le=L[k+12],z=(L[k]*V+L[k+3]*X+L[k+6]*te)/le+L[k+13],Z=(L[k+1]*V+L[k+4]*X+L[k+7]*te)/le+L[k+14],se=(L[k+2]*V+L[k+5]*X+L[k+8]*te)/le+L[k+15],q=L[k]*s+L[k+3]*r+L[k+6]*a,F=L[k+1]*s+L[k+4]*r+L[k+7]*a,ee=L[k+2]*s+L[k+5]*r+L[k+8]*a,fe=this.occ[O];let he;if(this.rig[O]){const Le=Gs.walkerBoxMarginMetres/le;he=rS(z,Z,se,q,F,ee,fe.x0-Le,fe.y0-Le,fe.z0-Le,fe.x1+Le,fe.y1+Le,fe.z1+Le,c/le)}else he=sS(fe,z,Z,se,q,F,ee,c/le,this.share[O],this.seed[O]);const ge=he*le;ge<c&&(c=ge,u=ge)}if(E<=T){if(P=E,w+=v,E+=x,w<0||w>=this.nx)break}else if(P=T,_+=S,T+=b,_<0||_>=this.nz)break;if(P>y)break}return u}}const vd={v:0};function kc(n,e,t,i,s,r,a,o,l,c,u,f,h){let d=0,g=h,M,p;if(Math.abs(i)<ci){if(n<a||n>c)return 1/0}else{if(M=(a-n)/i,p=(c-n)/i,M>p){const m=M;M=p,p=m}M>d&&(d=M),p<g&&(g=p)}if(Math.abs(s)<ci){if(e<o||e>u)return 1/0}else{if(M=(o-e)/s,p=(u-e)/s,M>p){const m=M;M=p,p=m}M>d&&(d=M),p<g&&(g=p)}if(Math.abs(r)<ci){if(t<l||t>f)return 1/0}else{if(M=(l-t)/r,p=(f-t)/r,M>p){const m=M;M=p,p=m}M>d&&(d=M),p<g&&(g=p)}return vd.v=g,d<=g?d:1/0}const oS=[],En=new Int32Array(4);let tl=new Int32Array(64);const Ia=$e.frame,ur=$e.blend,oi=ae.plain,_d=hi.timeOfDay,Ka=hi.buildings,Md=hi.street,nl=hi.clouds;function lS(){return{hour:_d.defaultHour,timeSec:0,haze:[oi.haze.chase[0],oi.haze.chase[1]],hazeFullMetres:oi.haze.chase[1],shadowFocus:{x:0,y:0,z:0},shadowHalf:oi.shadowHalfMetres.chase,litTower:Ka.litTower/Ia.windowShareOutOf,litOther:Ka.litOther/Ia.windowShareOutOf,signLit:Md.signLitShare/Ia.windowShareOutOf,cloudCover:0,cloudShare:0}}function cS(n,e){const t=nl.zoomFadeCellsPerPx,i=1/e.cpu.ppc/e.toGridY,s=1-(1-t.keep)*Hd(t.from,t.to,i),r=Wd(Vd[1],n*s);return r>0?Math.pow(r,nl.coverCurve)*nl.maxCoverage:0}const uS={x:0,y:0,z:0};function il(n,e){const t=n!==void 0&&Number.isFinite(n)?n:e;return Ta(t/Ia.windowShareOutOf)}function hS(n){const e=j_(n,uS);if(Number.isFinite(e.x)&&Number.isFinite(e.y)&&Number.isFinite(e.z))return e;const t=n.cpu;return e.x=t.eyeX,e.y=t.eyeY,e.z=t.eyeZ*t.cellMetres,e}function fS(n,e,t){const i=t.cpu,s=i.cellMetres,r=Gh(e.world);n.hour=Number.isFinite(e.timeOfDay)?e.timeOfDay:_d.defaultHour,n.timeSec=Number.isFinite(e.timeSec)?e.timeSec:0,n.litTower=il(e.windows?.litTower,Ka.litTower),n.litOther=il(e.windows?.litOther,Ka.litOther),n.signLit=il(e.windows?.signLit,Md.signLitShare),e.cloudCover===void 0?(n.cloudCover=Number.NaN,n.cloudShare=Number.NaN):(n.cloudCover=Number.isFinite(e.cloudCover)?Ta(e.cloudCover):0,n.cloudShare=cS(n.cloudCover,t));const[a,o]=ur.mapToChasePerspective,l=Ta((i.perspective-a)/(o-a)),c=hS(t),u=c.z-Jc(r,c.x,c.y)*s,[f,h]=ur.chaseToFootEyeAglMetres,d=Ta((f-u)/(f-h)),g=Y_(t),M=oi.haze.map,p=oi.haze.chase,m=oi.haze.foot;n.haze[0]=Math.max(0,gi(gi(M[0],p[0],l),m[0],d)+g),n.haze[1]=Math.max(0,gi(gi(M[1],p[1],l),m[1],d)+g),n.hazeFullMetres=n.haze[1];const y=Math.max(oi.shadowHalfMetres.map,t.metresPerPixel*t.outW*ur.mapWidthShare);n.shadowHalf=gi(gi(y,oi.shadowHalfMetres.chase,l),oi.shadowHalfMetres.foot,d);const w=gi(ur.aheadEyeShares[0],ur.aheadEyeShares[1],d)*i.distance,_=gi(i.tx-i.snapDX,c.x+i.fx*w,l),v=gi(i.ty-i.snapDY,c.y+i.fy*w,l);return ui(t.origin,s,_,v,Jc(r,_,v)*s,n.shadowFocus),n}const dS=$e.sight,pS=Vh.unitMetres,mS=Vh.offsetMetres,gS=65536;function _h(n,e,t){const i=Math.floor(e/n.cellMetres),s=Math.floor(t/n.cellMetres),r=1<<n.shift;if(i<n.gx0||s<n.gy0||i>=n.gx0+r||s>=n.gy0+r)return-1;const a=n.tileShift,o=(r>>a)-1,l=i>>a,c=s>>a;if(n.slotTile[(c&o)<<n.shift-a|l&o]!==c*gS+l)return-1;const u=r-1;return(s&u)<<n.shift|i&u}function xa(n){throw new Error(`render-gpu/sight.ts: SceneGround answers fine() and drawnSolid() only — ${n}() reads the street layer's own ground (src/street/ground.ts), not the renderer's scene`)}function xS(n){const e=n.meta.cellMetres,t=n.meta.heightUnitMetres,i=n.size;let s=null,r=0,a=0;function o(l,c,u,f){const h=s;if(h){const M=l*e,p=c*e,m=(u+mS)/pS,y=h.levels;for(let w=0;w<y.length;w++){const _=y[w],v=Math.min(_.stopMetres*r,a);if(!(v>0)||!(f<=v))continue;const S=_h(_,M,p);if(!(S<0))return _.top0[S]>m+dS.levelSlackUnits}}if(!(l>=0&&c>=0&&l<i&&c<i))return!1;const d=(c|0)*i+(l|0);return(n.material[d]===Wh.Building?n.surface[d]:n.ground[d])*t>u}return{setScene(l){if(s=l,!l){r=0,a=0;return}const c=l.fade;r=c>0?c<1?c:1:0;const u=l.levels,f=u.length>0?u[u.length-1].stopMetres*r:0,h=l.farStartMetres;a=h>=0&&h<f?h:f},fine(l,c){const u=s;return!u||u.levels.length===0?!1:_h(u.levels[0],l*e,c*e)>=0},drawnSolid:o,standHeight:()=>xa("standHeight"),blocked:()=>xa("blocked"),ceiling:()=>xa("ceiling"),lightAt:()=>xa("lightAt")}}function oc(n,e=!1){const t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},a={},o=n[0].morphTargetsRelative,l=new Dt;l.morphTargetsRelative=o;let c=0;for(let u=0;u<n.length;++u){const f=n[u];let h=0,d=0;if(t!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const g in f.attributes){if(!i.has(g))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+g+'" attribute exists among all geometries, or in none of them.'),null;r[g]===void 0&&(r[g]=[]),r[g].push(f.attributes[g]),h++}if(h!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const g in f.morphAttributes){if(!s.has(g))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;if(f.morphAttributes[g].length!==n[0].morphAttributes[g].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have the same number of morph targets for the "'+g+'" morph attribute.'),null;a[g]===void 0&&(a[g]=[]),a[g].push(f.morphAttributes[g]),d++}if(d!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of morph attributes."),null;if(e){let g;if(t)g=f.index.count;else if(f.attributes.position!==void 0)g=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,g,u),c+=g}}if(t){let u=0;const f=[];for(let h=0;h<n.length;++h){const d=n[h].index;for(let g=0;g<d.count;++g)f.push(d.getX(g)+u);u+=n[h].attributes.position.count}l.setIndex(f)}for(const u in r){const f=Mh(r[u]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,f)}for(const u in a){const f=a[u][0].length;if(f!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let h=0;h<f;++h){const d=[];for(let M=0;M<a[u].length;++M)d.push(a[u][M][h]);const g=Mh(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(g)}}}return l}function Mh(n){let e,t,i,s=-1,r=0;for(let c=0;c<n.length;++c){const u=n[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}const a=new e(r),o=new tt(a,t,i);let l=0;for(let c=0;c<n.length;++c){const u=n[c];if(u.isInterleavedBufferAttribute){const f=l/t;for(let h=0,d=u.count;h<d;h++)for(let g=0;g<t;g++){const M=u.getComponent(h,g);o.setComponent(h+f,g,M)}}else a.set(u.array,l);l+=u.count*t}return s!==void 0&&(o.gpuType=s),o}function Sh(n,e=1e-4){e=Math.max(e,Number.EPSILON);const t={},i=n.getIndex(),s=n.getAttribute("position"),r=i?i.count:s.count;let a=0;const o=Object.keys(n.attributes),l=[],c=new Map,u=[],f=["getX","getY","getZ","getW"],h=e*.5,d=Math.log10(1/e),g=Math.pow(10,d),M=h*g;for(let m=0;m<r;m++){const y=i?i.getX(m):m;let w="";for(let _=0,v=o.length;_<v;_++){const S=o[_],x=n.getAttribute(S),b=x.itemSize;for(let E=0;E<b;E++)w+=`${Math.trunc(x[f[E]](y)*g+M)},`}w in t?u.push(t[w]):(l.push(y),t[w]=a,u.push(a),a++)}const p=n.clone();for(const m in n.attributes)p.setAttribute(m,yh(n.attributes[m],l,c));for(const m in n.morphAttributes)p.morphAttributes[m]=n.morphAttributes[m].map(y=>yh(y,l,c));return p.setIndex(u),p}function yh(n,e,t=new Map){const i=n.isInterleavedBufferAttribute,s=i?n.data:n,r=i?s.stride:n.itemSize;let a=i?t.get(s):void 0;if(a===void 0){const l=new s.array.constructor(e.length*r);for(let c=0;c<e.length;c++)for(let u=0;u<r;u++)l[c*r+u]=s.array[e[c]*r+u];a=i?new s.constructor(l,r,s.meshPerAttribute):new n.constructor(l,n.itemSize,n.normalized,n.meshPerAttribute),a.setUsage(s.usage),i&&t.set(s,a)}const o=i?new n.constructor(a,n.itemSize,n.offset,n.normalized):a;return o.name=n.name,i||(o.gpuType=n.gpuType),o}const Hs=(n,e,t)=>[n,t,-e],fs=(n,e)=>Math.sign(n)*Math.pow(Math.abs(n),e);function ws(n,e,t,i,s,r=!0){const a=[];for(let M=0;M<=e;M++)for(let p=0;p<=n;p++)a.push(t(r?p%n:p,M));const o=(M,p)=>a[Math.min(e,Math.max(0,p))*(n+1)+(r?(M%n+n)%n:Math.min(n,Math.max(0,M)))],l=[];for(let M=0;M<=e;M++)for(let p=0;p<=n;p++){const m=o(p+1,M),y=o(p-1,M),w=o(p,M+1),_=o(p,M-1),v=m[0]-y[0],S=m[1]-y[1],x=m[2]-y[2],b=w[0]-_[0],E=w[1]-_[1],T=w[2]-_[2];let P=S*T-x*E,L=x*b-v*T,D=v*E-S*b;const C=Math.hypot(P,L,D);if(C<1e-9){const I=o(p,Math.round(e/2)),O=o(p,M);P=0,L=0,D=O[2]>I[2]?1:-1}else P/=C,L/=C,D/=C;l.push([P,L,D])}const c=[],u=[],f=[],h=M=>{const p=a[M],m=l[M],y=Hs(p[0],p[1],p[2]),w=Hs(m[0],m[1],m[2]);c.push(y[0],y[1],y[2]),u.push(w[0],w[1],w[2])},d=(M,p,m)=>{const y=a[M],w=a[p],_=a[m],v=(y[0]+w[0]+_[0])/3,S=(y[1]+w[1]+_[1])/3,x=(y[2]+w[2]+_[2])/3;if(s&&!s(v,S,x))return;const b=w[0]-y[0],E=w[1]-y[1],T=w[2]-y[2],P=_[0]-y[0],L=_[1]-y[1],D=_[2]-y[2],C=E*D-T*L,I=T*P-b*D,O=b*L-E*P,U=l[M],k=C*U[0]+I*U[1]+O*U[2]<0?[M,m,p]:[M,p,m];for(const X of k)h(X);const V=i(v,S,x);for(let X=0;X<3;X++)f.push((V>>16&255)/255,(V>>8&255)/255,(V&255)/255)};for(let M=0;M<e;M++)for(let p=0;p<n;p++){const m=M*(n+1)+p,y=m+1,w=m+n+2,_=m+n+1;d(m,y,w),d(m,w,_)}const g=new Dt;return g.setAttribute("position",new tt(new Float32Array(c),3)),g.setAttribute("normal",new tt(new Float32Array(u),3)),g.setAttribute("color",new tt(new Float32Array(f),3)),g}function us(n,e,t,i,s,r,a={}){const o=2/t;return ws(i,s,(l,c)=>{const u=l/i*Math.PI*2,f=-Math.PI/2+c/s*Math.PI,h=Math.cos(f),d=Math.sin(f),g=a.tuck&&d<0?1-a.tuck*d*d:1;return[n[0]+e[0]*g*fs(h,o)*fs(Math.cos(u),o),n[1]+e[1]*fs(h,o)*fs(Math.sin(u),o),n[2]+e[2]*fs(d,o)]},r,a.keep)}function ks(n,e,t,i,s,r,a,o,l={}){const c=2/s,u=l.capBottom??0,f=l.capTop??0,h=ae.walker.capRings,d=[];for(let M=0;M<=h;M++){const p=M/h*(Math.PI/2);d.push({z:n+u*(1-Math.cos(p)),k:u>0?Math.sin(p):1})}const g=[];for(let M=1;M<a;M++)g.push(n+u+(e-f-n-u)*M/a);for(const M of l.breaks??[])M>n+u+1e-4&&M<e-f-1e-4&&g.push(M);g.sort((M,p)=>M-p);for(const M of g)d.push({z:M,k:1});for(let M=0;M<=h;M++){const p=M/h*(Math.PI/2);d.push({z:e-f+f*Math.sin(p),k:f>0?Math.cos(p):1})}return u>0&&(d[0].k=.001),f>0&&(d[d.length-1].k=.001),ws(r,d.length-1,(M,p)=>{const{z:m,k:y}=d[p],w=M/r*Math.PI*2,_=l.cy?l.cy(m):0;return[t(m)*y*fs(Math.cos(w),c),_+i(m)*y*fs(Math.sin(w),c),m]},o)}function va(n,e,t,i,s,r,a){const o=[],l=ae.walker.capRings;for(let u=0;u<=l;u++){const f=u/l*(Math.PI/2);o.push([e*Math.sin(f)+1e-4,-e*Math.cos(f)])}for(let u=1;u<r;u++){const f=u/r;o.push([e+(t-e)*f,n*f])}for(let u=0;u<=l;u++){const f=u/l*(Math.PI/2);o.push([t*Math.cos(f)+1e-4,n+t*Math.sin(f)])}return ws(s,o.length-1,(u,f)=>{const h=-(u/s)*Math.PI*2,[d,g]=o[f];return[Math.cos(h)*d*i,Math.sin(h)*d,-g]},(u,f,h)=>a(-h,u))}function _a(n,e,t,i,s=1){const r=n.length;return ws(t,r-1,(a,o)=>{const l=n[o],c=n[Math.max(0,o-1)],u=n[Math.min(r-1,o+1)];let f=u[0]-c[0],h=u[1]-c[1],d=u[2]-c[2];const g=Math.hypot(f,h,d)||1;f/=g,h/=g,d/=g;let M=h*0-d*0,p=d*1-f*0,m=f*0-h*1;Math.hypot(M,p,m)<.001&&(M=0,p=0,m=1);const y=Math.hypot(M,p,m);M/=y,p/=y,m/=y;const w=p*d-m*h,_=m*f-M*d,v=M*h-p*f,S=a/t*Math.PI*2,x=Math.cos(S)*e,b=Math.sin(S)*e*s;return[l[0]+w*x+M*b,l[1]+_*x+p*b,l[2]+v*x+m*b]},()=>i)}function vS(n,e,t,i){return ws(n,e,(s,r)=>t(s/n,r/e),()=>i,void 0,!1)}const Ut=Oa.model,nt=Ut.palette,on=Ut.body,ps=Ut.widths,ce=Ut.sculpt,Rt=Ut.backpack,rn=Ut.arm,Pt=ae.walker,ye=Pt.detail,Vn=ye.strap,wh=n=>n<=0?0:n>=1?1:n*n*(3-2*n),bh=(n,e,t)=>n+(e-n)*Math.max(0,Math.min(1,t));function _S(n){return on.shoeTopMetres*Math.cos(n)+Math.max(ps.toeMetres*Math.sin(n),-.11000000000000001*Math.sin(n))}function Eh(n,e,t){return Math.cos(n)*Ut.leg.thighMetres+Math.cos(n-e)*Ut.leg.shinMetres+_S(t)}const MS={kl:0,kr:0,kneeL:0,kneeR:0};function SS(n,e){const s=-n/2,r=-n/2,a=Math.hypot(1,r),o=Math.hypot(0,s),l=Math.atan2(s,0),c=Math.atan2(r,1);return e.first=(c+l)/2,e.second=(c-l)/2,e.s1=a+o,e.s2=a-o,e}const hr={first:0,second:0,s1:1,s2:1};class Tr{root=new mn;lift=new mn;leanPivot=new mn;shearTurn=new mn;upper=new mn;parts={};down=new G(0,-1,0);tmp=new G;q=new Jn;triangles;drawParts;constructor(e){this.root.name="walker",this.root.add(this.lift),this.lift.add(this.leanPivot),this.leanPivot.position.y=on.hipMetres,this.leanPivot.add(this.shearTurn),this.shearTurn.add(this.upper),this.upper.position.y=-.9;const t=()=>Uc.uRigInv.value.copy(this.root.matrixWorld).invert(),i=(F,ee,fe=this.root)=>{const he=new gt(ee,e);return he.name=F,he.onBeforeRender=t,he.castShadow=!0,he.receiveShadow=!0,fe.add(he),this.parts[F]=he,he},s=()=>va(Ut.leg.thighMetres,ce.thighRadiusMetres,ce.kneeRadiusMetres,ce.legAcrossShare,Pt.limbSegments,Pt.limbRings,()=>nt.trousers),r=()=>va(Ut.leg.shinMetres,ce.kneeRadiusMetres,ce.ankleRadiusMetres,ce.legAcrossShare,Pt.limbSegments,Pt.limbRings,F=>F>Ut.leg.shinMetres-ce.cuffMetres?nt.trousersCuff:nt.trousers);for(const F of["L","R"])i("thigh"+F,s()),i("shin"+F,r()),i("shoe"+F,wS(F==="L"?-1:1));const a=on.hipMetres,o=on.waistMetres;i("pelvis",ks(a-ce.pelvisDropMetres,o,F=>ps.hipMetres/2*(F<a?1-ce.pelvisTuckShare*(a-F)/ce.pelvisDropMetres:1),()=>ce.waistHalfDepthMetres,ce.roundness,Pt.loftSegments,4,(F,ee,fe)=>{if(fe>o-ce.beltMetres)return ee>0&&Math.abs(F)<ye.buckleHalf?nt.buckle:nt.belt;const he=o-fe;return ee<0&&Math.abs(F)>=ce.backPocketX[0]&&Math.abs(F)<=ce.backPocketX[1]&&he>=ce.backPocketDrop[0]&&he<=ce.backPocketDrop[1]?nt.trousersDark:nt.trousers},{capBottom:ce.pelvisDropMetres*ye.pelvisCapShare,breaks:[o-ce.beltMetres,o-ce.backPocketDrop[1],o-ce.backPocketDrop[0]]}),this.upper);const l=on.shoulderMetres,c=F=>{let ee=bh(ce.waistHalfMetres,ce.chestHalfMetres,wh((F-o)/ce.chestRiseMetres));const fe=F-(l-ce.shoulderRoundMetres);return fe>0&&(ee-=ce.shoulderRoundMetres-Math.sqrt(Math.max(0,ce.shoulderRoundMetres**2-fe*fe))),Math.max(ee,ce.neckRadiusMetres+ye.shoulderOverNeck)},u=F=>bh(ce.waistHalfDepthMetres,ce.chestHalfDepthMetres,wh((F-o)/ce.chestRiseMetres)),f=l-ce.yokeDropMetres,h=o+ce.pocketRiseMetres,d=Pt.seamMetres;i("torso",ks(o-ye.torsoBelow,l+ye.torsoAbove,c,u,ce.roundness,Pt.loftSegments,Pt.loftRings,(F,ee,fe)=>{const he=Math.abs(F),ge=ee>0;return fe<o+ce.hemMetres?nt.jacketTrim:ge&&Math.abs(fe-h)<d&&he>=ce.pocketX[0]&&he<=ce.pocketX[1]||!ge&&Math.abs(fe-f)<d?nt.jacketSeam:nt.jacket},{capTop:Pt.shoulderCapMetres,breaks:[o+ce.hemMetres,h-d,h+d,f-d,f+d]}),this.upper);const g=ce.roundness,M=(F,ee)=>u(ee)*Math.pow(Math.max(0,1-Math.pow(Math.abs(F)/c(ee),g)),1/g),p=F=>ce.openHalfMetres+ce.openWidenMetres*((F-o)/(l-o)),m=l-Pt.teeBelowShoulderMetres,y=(F,ee,fe,he,ge,Le)=>vS(8,Pt.loftRings,(ke,lt)=>{const J=fe+(he-fe)*lt,de=ee(J)+(F(J)-ee(J))*ke;return[de,M(de,J)+Le,J]},ge);i("tee",y(F=>-p(F),F=>p(F),o,m,nt.tee,Pt.panelLiftMetres),this.upper);for(const F of[-1,1]){const ee=he=>F*p(he),fe=he=>F*(p(he)+ce.zipMetres);i("zip"+F,y(F>0?ee:fe,F>0?fe:ee,o+ce.hemMetres,m,nt.zip,Pt.panelLiftMetres*1.5),this.upper)}i("neck",ks(l-ye.neckBelow,on.chinMetres+ye.neckAbove,()=>ce.neckRadiusMetres,()=>ce.neckRadiusMetres,2,ye.neckSegments,3,()=>nt.skinShade),this.upper);const w=[];for(let F=0;F<=ye.collarPoints;F++){const ee=-Math.PI/2+ye.collarOpenRad+F/ye.collarPoints*(Math.PI*2-2*ye.collarOpenRad),fe=(ce.collarRadii[0]+ce.collarRadii[1])/2;w.push([Math.cos(ee)*fe,Math.sin(ee)*fe*ye.collarStretch-ye.collarBack,l+ce.collarMetres/2])}i("collar",_a(w.map(F=>[F[0],-F[1],F[2]]),(ce.collarRadii[1]-ce.collarRadii[0])/2+ye.collarThick,8,nt.jacketTrim,ye.collarFlat),this.upper);const v=Ut.heightMetres-ce.hairMetres,S=(on.chinMetres+v)/2,x=(v-on.chinMetres)/2;i("head",us([0,0,S],[ce.headHalfMetres,ce.headHalfDepthMetres,x],ce.roundness,Pt.headSegments,Pt.headRings,()=>nt.skin,{tuck:ce.jawTuckShare}),this.upper);const b=ce.headHalfMetres+ce.hairMetres*ye.hairOverShare,E=ce.headHalfDepthMetres+ce.hairMetres/2,T=x+ce.hairMetres,P=-.03/2,L=2/ce.roundness,D=F=>{const ee=Math.sin(F),fe=ce.earZ[1];let he=ee>=0?fe+(ce.hairlineMetres-fe)*ee:fe+(-.085-fe)*-ee;return he-=ce.fringeSweepMetres*Math.max(0,Math.min(1,Math.cos(F)*2))*Math.max(0,Math.min(1,ee*2)),he};i("hair",ws(Pt.headSegments,Pt.headRings,(F,ee)=>{const fe=F/Pt.headSegments*Math.PI*2,he=Math.sign(D(fe))*Math.pow(Math.min(1,Math.abs(D(fe)/T)),ce.roundness/2),ge=Math.asin(Math.max(-1,Math.min(1,he))),Le=ge+(Math.PI/2-ge)*ee/Pt.headRings,ke=Math.cos(Le),lt=Math.sin(Le),J=de=>Math.sign(de)*Math.pow(Math.abs(de),L);return[b*J(ke)*J(Math.cos(fe)),P+E*J(ke)*J(Math.sin(fe)),S+ye.hairLift+T*J(lt)]},(F,ee,fe)=>ee<0&&fe-S<-.085+ye.hairDarkBand?nt.hairDark:nt.hair),this.upper);const C=ce.headHalfDepthMetres*ye.faceFrontShare;for(const F of[-1,1])i("eye"+F,us([F*ce.eyeXMetres,C-ye.eyeInset,S+(ce.eyeZ[0]+ce.eyeZ[1])/2],[ye.eye[0],ye.eye[1],(ce.eyeZ[1]-ce.eyeZ[0])/2*ye.eyeHeightShare],2,10,6,()=>nt.eye),this.upper),i("ear"+F,us([F*(ce.headHalfMetres+ye.earOut),(ce.earY[0]+ce.earY[1])/2,S+(ce.earZ[0]+ce.earZ[1])/2],[ye.earDepth,(ce.earY[1]-ce.earY[0])/2,(ce.earZ[1]-ce.earZ[0])/2],ye.earRound,10,8,()=>nt.skinShade),this.upper);i("nose",us([0,C+ye.noseOut,S+ce.eyeZ[0]-ye.noseDrop],ye.nose,2.2,10,8,()=>nt.skin),this.upper),i("mouth",us([0,C-ye.mouthIn,S-ce.mouthDropMetres],[ce.mouthHalfMetres,ye.mouth[0],ye.mouth[1]],2.4,12,6,()=>nt.lip),this.upper);const I=l-Rt.dropMetres,O=I-Rt.heightMetres,U=-.18;i("pack",ks(O,I,F=>Rt.widthMetres/2-(F>I-Rt.roundMetres?ye.packTaper*(F-I+Rt.roundMetres):0),()=>Rt.depthMetres/2,ye.packRound,Pt.loftSegments,8,(F,ee,fe)=>{const he=I-fe;return he<Rt.lidMetres?nt.packLid:he<Rt.lidMetres+ye.lidSeam?nt.packDark:nt.pack},{cy:()=>U,capBottom:Rt.roundMetres*ye.packCapShare,capTop:Rt.roundMetres}),this.upper);const $=O+Rt.pocketZ[0],k=O+Rt.pocketZ[1];i("packPocket",ks($,k,()=>Rt.pocketHalfMetres,()=>ye.pocketDepth,3,24,4,(F,ee,fe)=>fe>k-ye.pocketZip?nt.zip:nt.packPocket,{cy:()=>U-Rt.depthMetres/2,capBottom:ye.pocketCap,capTop:ye.pocketCap}),this.upper);for(const F of[-1,1])i("sidePocket"+F,ks(O+ye.sidePocketInset,O+Rt.sidePocketMetres,()=>ye.sidePocketHalf,()=>Rt.depthMetres*ye.sidePocketDepthShare,3,16,3,()=>nt.strap,{cy:()=>U+ye.sidePocketInset,capBottom:ye.sidePocketInset,capTop:ye.sidePocketInset}),this.upper).position.x=F*(Rt.widthMetres/2+ye.sidePocketOut);const V=[];for(let F=0;F<=ye.handlePoints;F++){const ee=F/ye.handlePoints*Math.PI;V.push([Math.cos(ee)*ye.handle[0],U,I+Math.sin(ee)*ye.handle[1]])}i("handle",_a(V,ye.handleRadius,6,nt.strap),this.upper);for(const F of[-1,1]){const ee=F*(Rt.strapX[0]+Rt.strapX[1])/2,fe=[[ee,U+Rt.depthMetres*Vn.packDepthShare,I-Vn.packDrop],[ee,-.115*Vn.backShare,l+Vn.overShoulder],[ee,0,l+Vn.topRise],[ee,ce.chestHalfDepthMetres*Vn.frontShare,l],[ee,ce.chestHalfDepthMetres+Vn.chestOut,l-Rt.chestStrapDropMetres],[ee*Vn.endSpread,ce.chestHalfDepthMetres*Vn.endShare+Vn.endOut,l-Rt.chestStrapDropMetres-Vn.endDrop]];i("strap"+F,_a(fe,ye.strapRadius,8,nt.strap,ye.strapFlat),this.upper)}const X=[[-.125,ce.chestHalfDepthMetres+ye.chestStrapOut,l-Rt.chestStrapDropMetres],[Rt.strapX[1],ce.chestHalfDepthMetres+ye.chestStrapOut,l-Rt.chestStrapDropMetres]];i("chestStrap",_a(X,ye.chestStrapRadius,6,nt.strap,ye.chestStrapFlat),this.upper),i("buckle",us([0,ce.chestHalfDepthMetres+ye.buckleOut,l-Rt.chestStrapDropMetres],ye.buckle,4,10,6,()=>nt.buckle),this.upper);const te=rn.upperMetres+rn.lowerMetres*ce.sleeveForearmShare,le=rn.upperMetres+rn.lowerMetres-rn.handMetres;for(const F of["L","R"])i("upperArm"+F,va(rn.upperMetres,ce.shoulderRadiusMetres,ce.elbowRadiusMetres,1,Pt.limbSegments,Pt.limbRings,()=>nt.jacket),this.lift),i("foreArm"+F,va(rn.lowerMetres-rn.handMetres*ye.foreArmHandShare,ce.elbowRadiusMetres,ce.wristRadiusMetres,1,Pt.limbSegments,Pt.limbRings,ee=>{const fe=rn.upperMetres+ee;return fe<te-ce.sleeveCuffMetres?nt.jacket:fe<te?nt.jacketTrim:fe<le?nt.skinShade:nt.skin}),this.lift),i("hand"+F,us([0,0,0],[ce.handRadiusMetres*ye.hand[0],ce.handRadiusMetres*ye.hand[1],ce.handRadiusMetres*ye.hand[2]],2.2,14,10,()=>nt.skin),this.lift);const z=this.upper.children.filter(F=>F instanceof gt&&!/^(upperArm|foreArm|hand)[LR]$/.test(F.name)),Z=z.map(F=>(F.updateMatrix(),F.geometry.clone().applyMatrix4(F.matrix))),se=oc(Z);for(const F of z)this.upper.remove(F),F.geometry.dispose(),delete this.parts[F.name];i("body",se,this.upper);let q=0;for(const F of Object.values(this.parts))q+=F.geometry.getAttribute("position").count/3|0;this.triangles=q,this.drawParts=Object.keys(this.parts).length,this.pose(Xd())}warmMeshes(e){const t=this.parts.body;return e.filter(i=>!!i).map(i=>{const s=new gt(t.geometry,i);return s.castShadow=!0,s.receiveShadow=!0,s.layers.mask=t.layers.mask,s})}setMaterial(e){for(const t of Object.values(this.parts))t.material=e}pose(e,t=MS){const i=Math.max(Eh(e.thighL,e.kneeL,e.footL),Eh(e.thighR,e.kneeR,e.footR)),s=i-on.hipMetres,r=e.lean/(Ut.heightMetres-on.hipMetres);this.lift.position.y=s,SS(r,hr),this.leanPivot.rotation.x=hr.first,this.leanPivot.scale.set(1,hr.s1,hr.s2),this.shearTurn.rotation.x=hr.second;const a=Ut.voxelMetres,o=ps.legGapMetres/2+ps.legMetres/2;for(const[f,h,d,g,M,p,m]of[["L",-1,e.thighL,e.kneeL,e.footL,t.kl,t.kneeL],["R",1,e.thighR,e.kneeR,e.footR,t.kr,t.kneeR]]){const y=Math.sin(d)*Ut.leg.thighMetres,w=i-Math.cos(d)*Ut.leg.thighMetres+m*a,_=d-g,v=y+Math.sin(_)*Ut.leg.shinMetres,S=w-m*a-Math.cos(_)*Ut.leg.shinMetres+p*a;this.seg(this.parts["thigh"+f],h*o,0,i,h*o,y,w,m>0?Ut.leg.thighMetres:0),this.seg(this.parts["shin"+f],h*o,y,w,h*o,v,S,p>0||m>0?Ut.leg.shinMetres:0);const x=this.parts["shoe"+f];x.position.set(...Hs(h*o,v,S)),x.rotation.set(-M,0,0)}const l=ce.chestHalfMetres+ce.shoulderRadiusMetres*ye.armOutShare,c=on.shoulderMetres-ye.shoulderDrop,u=r*(on.shoulderMetres-on.hipMetres);for(const[f,h,d,g]of[["L",-1,e.armL,e.elbowL],["R",1,e.armR,e.elbowR]]){const M=u+Math.sin(d)*rn.upperMetres,p=c-Math.cos(d)*rn.upperMetres,m=d+g,y=rn.lowerMetres-rn.handMetres*ye.foreArmHandShare,w=M+Math.sin(m)*y,_=p-Math.cos(m)*y;this.seg(this.parts["upperArm"+f],h*l,u,c,h*l,M,p),this.seg(this.parts["foreArm"+f],h*l,M,p,h*l,w,_);const v=M+Math.sin(m)*(rn.lowerMetres-rn.handMetres*ye.handReach),S=p-Math.cos(m)*(rn.lowerMetres-rn.handMetres*ye.handReach),x=this.parts["hand"+f];x.position.set(...Hs(h*l,v,S)),x.rotation.set(m,0,0)}}seg(e,t,i,s,r,a,o,l=0){const c=Hs(t,i,s),u=Hs(r,a,o);e.position.set(c[0],c[1],c[2]),this.tmp.set(u[0]-c[0],u[1]-c[1],u[2]-c[2]);const f=this.tmp.length();this.tmp.normalize(),this.q.setFromUnitVectors(this.down,this.tmp),e.quaternion.copy(this.q),e.scale.set(1,l>0?f/l:1,1)}static cycle(e,t){return t<=0?Vr(e,!1):t>=1?Vr(e,!0):qd(Vr(e,!1),Vr(e,!0),t)}static strideMetres(e){return Ut.strideMetres*(1+(Ut.runStrideShare-1)*e)}}function yS(n,e=ae.opt.actors.walkerLow){const t=ae.walker,i=[];for(const[s,r]of Object.entries(e)){const a=s in t?t:t.detail;i.push([a,s,a[s]]),a[s]=r}try{return new Tr(n)}finally{for(const[s,r,a]of i)s[r]=a}}function wS(n,e){const t=Ut.voxelMetres,i=t/2,s=$e.walker.cellEps,r=ps.toeMetres,a=ps.legGapMetres/2+ps.legMetres/2,o=[];for(let q=0;q*t<=a+ce.shoeHalfWidthMetres+t;q++){const F=q*t-a;Math.abs(F)<=ce.shoeHalfWidthMetres+s&&o.push(F)}const l=Math.min(...o)-i,c=Math.max(...o)+i,u=n>0?l:-c,f=n>0?c:-l,h=-.15,d=q=>{let F=0;for(;h+(F+.5)*t<q-s;)F++;return h+F*t},g=-.15+on.soleMetres+ce.toeHeightMetres,M=q=>q<=ce.ankleRadiusMetres?i:i+(g-i)*Math.min(1,(q-ce.ankleRadiusMetres)/(r-ce.ankleRadiusMetres)),p=q=>{if(q<=ce.ankleRadiusMetres)return M(q)+i;if(q>=ce.ankleRadiusMetres+t)return M(q);const F=(q-ce.ankleRadiusMetres)/t;return(M(ce.ankleRadiusMetres)+i)*(1-F)+M(ce.ankleRadiusMetres+t)*F},m=(f-u)/2,y=(u+f)/2,w=ce.toeRoundMetres,_=q=>{const F=(q-(r-w))/w;return F<=0?1:ye.shoeToeTipShare+(1-ye.shoeToeTipShare)*Math.sqrt(Math.max(0,1-F*F))},v=d(h+on.soleMetres),S=h+Math.round((on.soleMetres+ce.shoeStripeMetres)/t-.5)*t,x=S+t,b=d(h+on.soleMetres+t),E=o.filter(q=>Math.abs(q)<t*ye.shoeLaceCellShare),T=n>0?Math.min(...E)-i:-(Math.max(...E)+i),P=n>0?Math.max(...E)+i:-(Math.min(...E)-i),L=r-ce.laceFromToeMetres-ce.laceLengthMetres,D=r-ce.laceFromToeMetres,C=-.11000000000000001+t,I=r-ce.toeRoundMetres,O=-.11000000000000001+t,U=ye.shoeEdgeMetres,$=[v,S,x,b].filter(q=>!0).sort((q,F)=>q-F),k=$.filter((q,F)=>F===0||q-$[F-1]>s),V=[-.11000000000000001+U,O,ce.ankleRadiusMetres,ce.ankleRadiusMetres+t,L,D,I,r-w,r-w/2,r-U].sort((q,F)=>q-F).filter((q,F,ee)=>F===0||q-ee[F-1]>s),X=ye.shoeEndCollapse,te=[{u:-.11000000000000001,k:X,inset:U},{u:-.11000000000000001,k:1,inset:U},...V.map(q=>({u:q,k:1,inset:0})),{u:r,k:1,inset:U},{u:r,k:X,inset:U}],le=(q,F)=>{const ee=m*_(q)-F,fe=p(q)-F,he=h,ge=Math.max(ye.shoeEdgeMinMetres,Math.min(U,ee*ye.shoeEdgeWidthShare,(fe-he)*ye.shoeEdgeHeightShare)),Le=y-ee,ke=y+ee,lt=(De,Xe,xt)=>{const St=[];for(let W=1;W<=ye.shoeCornerPoints;W++){const Mn=xt+W/(ye.shoeCornerPoints+1)*(Math.PI/2);St.push([De+ge*Math.cos(Mn),Xe+ge*Math.sin(Mn)])}return St},J=De=>Math.min(fe-ge-ye.shoeWallClampMetres,Math.max(he+ge+ye.shoeWallClampMetres,De)),de=k.map(J),Pe=Math.max(Le+ge,Math.min(ke-ge,T)),Ze=Math.max(Le+ge,Math.min(ke-ge,P));return[[y,he],[ke-ge,he],...lt(ke-ge,he+ge,-Math.PI/2),[ke,he+ge],...de.map(De=>[ke,De]),[ke,fe-ge],...lt(ke-ge,fe-ge,0),[ke-ge,fe],[Math.max(Pe,Ze),fe],[(Pe+Ze)/2,fe],[Math.min(Pe,Ze),fe],[Le+ge,fe],...lt(Le+ge,fe-ge,Math.PI/2),[Le,fe-ge],...de.slice().reverse().map(De=>[Le,De]),[Le,he+ge],...lt(Le+ge,he+ge,Math.PI),[Le+ge,he]]};let z=te.map(q=>le(q.u,q.inset));z=z.map(q=>[q[0],...q.slice(1).reverse()]);const Z=bS(n,{mid:y,soleTop:v,stripeLo:S,stripeHi:x,tabLo:b,tabU1:O,stripeU0:C,stripeU1:I,laceA:T,laceB:P,laceU0:L,laceU1:D,top:p}),se=ws(z[0].length,te.length-1,(q,F)=>{const ee=te[F],fe=z[F][q],he=fe[1];return[y+(fe[0]-y)*ee.k,ee.u,he]},Z);return se.userData={paint:Z,columns:z[0].length,rowGaps:te.length-1,heel:-.11000000000000001,toe:r},se}function bS(n,e){const t=Ut.voxelMetres;return(i,s,r)=>r<e.soleTop?nt.sole:s<e.tabU1&&r>e.tabLo||(i-e.mid)*n>0&&r>e.stripeLo&&r<e.stripeHi&&s>e.stripeU0&&s<e.stripeU1?nt.shoeStripe:r>e.top(s)-t&&i>Math.min(e.laceA,e.laceB)&&i<Math.max(e.laceA,e.laceB)&&s>=e.laceU0&&s<=e.laceU1?nt.lace:nt.shoe}const Ei=Oa.model,Ti={resolved:0,unresolved:0,oddPivot:0,kneeMoved:0,liftedTwice:0},ES=/-lit(\d+)$/,sl=new WeakMap;function TS(n){const e=ES.exec(n.name);return e?Number(e[1]):0}function AS(n){const e=sl.get(n);if(e!==void 0)return e;const t=$d(n),s=Qc(t??n);Qc(s.base).base!==s.base&&Ti.liftedTwice++;const r=Yd(s.base.voxels);if(!r)return Ti.unresolved++,sl.set(n,null),null;(n.pivot.x!==n.sx/2||n.pivot.y!==n.sy/2)&&Ti.oddPivot++;const a=s.kl>0&&Ah(s.base,r,0)?s.kl:0,o=s.kr>0&&Ah(s.base,r,1)?s.kr:0;(a>0||o>0)&&Ti.kneeMoved++;const l={pose:r,kl:s.kl,kr:s.kr,kneeL:a,kneeR:o,level:t?TS(n):0,pivotZ:n.pivot.z};return Ti.resolved++,sl.set(n,l),l}function RS(n){const e=Ei.widths;return Ei.body.shoeTopMetres*Math.cos(n)+Math.max(e.toeMetres*Math.sin(n),-.11000000000000001*Math.sin(n))}function Th(n,e,t){return Math.cos(n)*Ei.leg.thighMetres+Math.cos(n-e)*Ei.leg.shinMetres+RS(t)}function Ah(n,e,t){const i=Ei.voxelMetres,s=(n.sx-1)/2,r=(n.sy-1)/2,a=Math.max(Th(e.thighL,e.kneeL,e.footL),Th(e.thighR,e.kneeR,e.footR)),o=t===0?e.thighL:e.thighR,l=Ei.widths.legGapMetres/2+Ei.widths.legMetres/2,c=(t===0?-1:1)*Math.round(l/i)+s,u=Math.round(Math.sin(o)*Ei.leg.thighMetres/i)+r,f=Math.floor((a-Math.cos(o)*Ei.leg.thighMetres)/i+$e.walker.cellEps),h=Math.min(n.sz,Math.round(jd.handover.footLiftKneeM/i));if(f>=h||c<0||c>=n.sx||u<0||u>=n.sy)return!1;const d=n.sx*n.sy;let g=1/0,M=-1/0,p=-1;for(let v=0;v<n.sz;v++)for(let S=0;S<n.sy;S++)for(let x=0;x<n.sx;x++)Kd.has(n.voxels[x+n.sx*S+d*v])&&(x+.5<n.pivot.x?0:1)===t&&(x<g&&(g=x),x>M&&(M=x),v>p&&(p=v));if(p<0)return!1;const m=Math.ceil(n.pivot.x-.5)-1,y=Math.max(0,t===0?g-1:Math.max(g-1,m+1)),w=Math.min(n.sx-1,t===0?Math.min(M+1,m):M+1);if(c<y||c>w)return!1;const _=c+n.sx*u;for(let v=0;v<h;v++)if(n.voxels[_+d*v])return v<=p;return!1}function Sd(n,e,t){const i=s=>{const r=s,a=r.__watched??={};a[e]||(a[e]=!0,s.addEventListener("childadded",o=>o.child.traverse(i))),t(s)};n.traverse(i)}const ao="void main() { gl_Position = vec4(position.xy, 0.0, 1.0); }",rl=n=>Number.isInteger(n)?n.toFixed(1):String(n);function CS(){const n=ae.smooth.fxaa;return new _n({uniforms:{tIn:{value:null},uRcp:{value:new Oe(1,1)}},vertexShader:ao,fragmentShader:`
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
  if (lMaxM - lMinM < max(${rl(n.edgeThresholdMin)}, lMax * ${rl(n.edgeThreshold)})) { gl_FragColor = vec4(m.rgb, 1.0); return; }
  float sw = lSw - lNe, se = lSe - lNw;
  vec2 dir = vec2(sw + se, sw - se);
  vec2 d1 = normalize(dir + vec2(1e-6));
  vec4 n1 = texture2D(tIn, pos - d1 * 0.5 * uRcp);
  vec4 p1 = texture2D(tIn, pos + d1 * 0.5 * uRcp);
  float dmin = min(abs(d1.x), abs(d1.y)) * ${rl(n.edgeSharpness)};
  vec2 d2 = clamp(d1 / max(dmin, 1e-6), -2.0, 2.0);
  vec4 n2 = texture2D(tIn, pos - d2 * 2.0 * uRcp);
  vec4 p2 = texture2D(tIn, pos + d2 * 2.0 * uRcp);
  vec4 a = n1 + p1;
  vec4 b = (n2 + p2) * 0.25 + a * 0.25;
  // The wide pair crossed another edge: keep the narrow pair.
  if (b.a < lMin || b.a > lMax) b.rgb = a.rgb * 0.5;
  gl_FragColor = vec4(b.rgb, 1.0);
}`,depthTest:!1,depthWrite:!1})}function PS(){return new _n({uniforms:{tIn:{value:null},uInSize:{value:new Oe(1,1)},uOutSize:{value:new Oe(1,1)}},vertexShader:ao,fragmentShader:`
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
}`,depthTest:!1,depthWrite:!1})}function LS(){return new _n({uniforms:{tIn:{value:null},uOutSize:{value:new Oe(1,1)}},vertexShader:ao,fragmentShader:"uniform sampler2D tIn; uniform vec2 uOutSize; void main() { gl_FragColor = vec4(texture2D(tIn, gl_FragCoord.xy / uOutSize).rgb, 1.0); }",depthTest:!1,depthWrite:!1})}function DS(){return new _n({uniforms:{tIn:{value:null},uSize:{value:new Oe(1,1)},uSharp:{value:1}},vertexShader:ao,fragmentShader:`
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
  ${ae.smooth.rcas.denoise?"lobe *= nz;":""}
  float rcpL = rcpMed(4.0 * lobe + 1.0);
  gl_FragColor = vec4((lobe * (b + d + h + f) + e) * rcpL, 1.0);
}`,depthTest:!1,depthWrite:!1})}const ze=ae.pixel,Ot=ze.edge,fn=ze.water,pn=ze.night,ut=ze.clouds,An=()=>ae.smooth,je=n=>Number.isInteger(n)?n.toFixed(1):String(n),yd={object:null},Qt={uAmb:{value:new G(.5,.5,.5)},uSun:{value:new G(.5,.5,.5)},uLevels:{value:ze.shadeLevels.slice()},uBandGain:{value:ze.bandGain},uBandBias:{value:ze.bandBias},uShadowLevel:{value:ze.shadowLevel},uHazeSteps:{value:ze.hazeSteps},uHazeDither:{value:ze.hazeDither},uDitherOrigin:{value:new Oe},uTime:{value:0},uBNight:{value:0},uShadowMix:{value:1},uSunW:{value:new G(0,1,0)},uCloudTex:{value:IS()},uCloudOn:{value:ut.on?1:0},uCloudThresh:{value:ut.fallbackThreshold}};function IS(){const n=ut.noiseSize;let e=ut.noiseSeed>>>0;const t=()=>(e=Math.imul(e^e>>>15,739982445)+2654435769>>>0)/4294967296,i=new Float32Array(n*n);ut.noisePeriods.forEach((l,c)=>{const u=Math.max(1,Math.round(n/l)),f=new Float32Array(u*u).map(()=>t()),h=1/(1<<c);for(let d=0;d<n;d++)for(let g=0;g<n;g++){const M=g/n*u,p=d/n*u,m=Math.floor(M),y=Math.floor(p),w=M-m,_=p-y,v=w*w*(3-2*w),S=_*_*(3-2*_),x=(b,E)=>f[(E+u)%u*u+(b+u)%u];i[d*n+g]+=((x(m,y)*(1-v)+x(m+1,y)*v)*(1-S)+(x(m,y+1)*(1-v)+x(m+1,y+1)*v)*S)*h}});let s=1/0,r=-1/0;for(const l of i)s=Math.min(s,l),r=Math.max(r,l);const a=new Uint8Array(n*n);for(let l=0;l<n*n;l++)a[l]=Math.round((i[l]-s)/(r-s||1)*255);const o=new Qn(a,n,n,Qs,tn);return o.wrapS=o.wrapT=Ks,o.magFilter=o.minFilter=kt,o.needsUpdate=!0,o}const NS=()=>`
float bCloud(vec2 xz) {
  vec2 d = uTime * vec2(${je(ut.driftMps[0])}, ${je(ut.driftMps[1])}) + vec2(${je(ut.offsetMetres[0])}, ${je(ut.offsetMetres[1])});
  float n = texture2D(uCloudTex, (xz + d) / ${je(ut.tileMetres[0])}).r * ${je(ut.weights[0])}
          + texture2D(uCloudTex, (xz + d * ${je(ut.secondDrift)}) / ${je(ut.tileMetres[1])} + vec2(${je(ut.secondOffset[0])}, ${je(ut.secondOffset[1])})).r * ${je(ut.weights[1])};
  return n - uCloudThresh;
}
`,en=()=>!!ae.smooth.on,FS=()=>en()&&ae.smooth.dither==="mean",Bc=()=>`
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
${FS()?`  // Smooth B: the dither's average (the share of the 4 × 4 pattern that takes the upper step is t).
  return (b + t) / n;`:"  return (b + step(bayer4(gl_FragCoord.xy + uDitherOrigin), t)) / n;"}
}
`,Ar=()=>en()&&ae.smooth.shadowSoft,US=()=>`
uniform vec3 uAmb; uniform vec3 uSun; uniform float uLevels[${ze.shadeLevels.length}]; uniform float uBandGain; uniform float uBandBias;
uniform float uShadowLevel; uniform float uHazeSteps; uniform float uHazeDither; uniform vec2 uDitherOrigin; uniform float uTime;
uniform float uEdgeClass; uniform float uMinLevel; uniform float uShadowFloorLvl;
float bMinLvl; float bShFloor;
uniform float uBNight; uniform float uShadowMix; uniform vec3 uSunW; uniform sampler2D uCloudTex; uniform float uCloudOn; uniform float uCloudThresh;
varying vec3 vBWorld;
layout(location = 1) out highp vec4 pc_fragN;
${Bc()}
${NS()}
float bandLevel(float ndl, float sh) {
${Ar()?"":"  if (sh < 0.5) return uLevels[max(int(uShadowLevel), int(bShFloor))];"}
  float v = ndl * uBandGain + uBandBias;
  float best = uLevels[0];
  v = max(v, uLevels[int(bMinLvl)]);
  for (int i = 1; i < ${ze.shadeLevels.length}; i++) if (abs(uLevels[i] - v) < abs(best - v)) best = uLevels[i];
${Ar()?`  // Smooth B: the shadowed level and the lit level blend across the shadow's filtered edge.
  return mix(uLevels[max(int(uShadowLevel), int(bShFloor))], best, sh);`:"  return best;"}
}
${Ar()?`// Smooth B: one hardware-compared, bilinear-filtered tap of the sun shadow (2 × 2 texels).
#if defined(USE_SHADOWMAP) && NUM_DIR_LIGHT_SHADOWS > 0
float bShadow1(sampler2DShadow m, float intensity, float bias, vec4 c) {
  c.xyz /= c.w;
  c.z += bias;
  bool inF = c.x >= 0.0 && c.x <= 1.0 && c.y >= 0.0 && c.y <= 1.0 && c.z <= 1.0;
  return inF ? mix(1.0, texture(m, c.xyz), intensity) : 1.0;
}
#endif`:""}
`,lc={uWalkerGain:{value:1},uWalkerTint:{value:new G(1,1,1)}},Na={uLodEye:{value:new G},uMeshMetres:{value:0},uOverlap:{value:0}},Fa=n=>{const e=Number(n.toPrecision(9));return Number.isInteger(e)?e.toFixed(1):String(e)},Ma=n=>n.map(e=>`vec3(${e.map(Fa).join(", ")})`).join(", ");function OS(n){const e=n.crownPos,t=n.crownIdx,i=e.length/3,s=t.length/3,r=s/n.lobeCentres.length,a=[],o=[],l=[],c=[];for(let v=0;v<i;v++){const S=[e[v*3],e[v*3+1],e[v*3+2]],x=Math.hypot(S[0],S[1],S[2])||1;a.push(S),o.push(S.map(b=>b/x))}const u=(v,S)=>[v[0]-S[0],v[1]-S[1],v[2]-S[2]],f=(v,S)=>[v[1]*S[2]-v[2]*S[1],v[2]*S[0]-v[0]*S[2],v[0]*S[1]-v[1]*S[0]],h=(v,S)=>v[0]*S[0]+v[1]*S[1]+v[2]*S[2],d=(v,S,x,b)=>{let E=f(u(S,v),u(x,v));const T=Math.hypot(E[0],E[1],E[2])||1;return E=E.map(P=>P/T),h(E,u(v,b))<0&&(E=E.map(P=>-P)),[E[0],E[1],E[2],h(E,v)]};for(let v=0;v<s;v++){const S=t[v*3],x=t[v*3+1],b=t[v*3+2];l.push([S,x,b]),c.push(d(a[S],a[x],a[b],n.lobeCentres[Math.floor(v/r)]))}const g=n.trunkSegments,M=[],p=[],m=[];for(let v=0;v<2*(g+1);v++)M.push([n.trunkPos[v*3],n.trunkPos[v*3+1],n.trunkPos[v*3+2]]),v<=g&&p.push([n.trunkNrm[v*3],n.trunkNrm[v*3+1],n.trunkNrm[v*3+2]]);for(let v=0;v<g;v++)m.push(d(M[g+1+v],M[g+2+v],M[v],[0,.5,0]));const y=n.lobeCentres.map((v,S)=>{let x=0;for(let b=S*r;b<(S+1)*r;b++)for(const E of l[b])x=Math.max(x,Math.hypot(a[E][0]-v[0],a[E][1]-v[1],a[E][2]-v[2]));return[v[0],v[1],v[2],x*1.001]}),w=`
uniform vec3 uTrunkCol; uniform mat4 projectionMatrix;
varying vec3 vRayP; flat varying vec4 vIBase; flat varying vec4 vIShape; flat varying vec3 vICol;
#if defined(USE_SHADOWMAP) && NUM_DIR_LIGHT_SHADOWS > 0
uniform mat4 directionalShadowMatrix[NUM_DIR_LIGHT_SHADOWS];
vec4 bHitSC[NUM_DIR_LIGHT_SHADOWS];
#endif
const vec3 B_LV[${i}] = vec3[${i}](${Ma(a)});
const vec3 B_LN[${i}] = vec3[${i}](${Ma(o)});
const ivec3 B_LF[${s}] = ivec3[${s}](${l.map(v=>`ivec3(${v.join(", ")})`).join(", ")});
const vec4 B_LP[${s}] = vec4[${s}](${c.map(v=>`vec4(${v.map(Fa).join(", ")})`).join(", ")});
const vec3 B_TV[${M.length}] = vec3[${M.length}](${Ma(M)});
const vec3 B_TN[${p.length}] = vec3[${p.length}](${Ma(p)});
const vec4 B_TP[${g}] = vec4[${g}](${m.map(v=>`vec4(${v.map(Fa).join(", ")})`).join(", ")});
const vec4 B_LS[${y.length}] = vec4[${y.length}](${y.map(v=>`vec4(${v.map(Fa).join(", ")})`).join(", ")});
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
`,_=`
  float bIsCrown = 1.0;
  {
    vec3 O = vRayP;
    vec3 Dw = isOrthographic ? -vec3(viewMatrix[0][2], viewMatrix[1][2], viewMatrix[2][2]) : normalize(vRayP - cameraPosition);
    float th = vIBase.w, tl = vIShape.w;
    vec3 base = vIBase.xyz, C = base + vec3(0.0, vIShape.z, 0.0), sc = vec3(vIShape.x, vIShape.y, vIShape.x);
    vec3 oc = bRotY(O - C, -th) / sc, uc = bRotY(Dw, -th) / sc;
    float tBest = 1e30; int kind = -1, face = -1;
    for (int L = 0; L < ${n.lobeCentres.length}; L++) {
${en()?`      // Smooth B: a ray that misses the lobe's bounding sphere misses the lobe (the same pixels, fewer plane tests).
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
      for (int i = 0; i < ${g}; i++) {
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
      vec3 tA = B_TV[i], bA = B_TV[${g+1} + i], tB = B_TV[i + 1], bB = B_TV[${g+2} + i];
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
`;return{decl:w,cast:_}}const Rh=n=>!!n.noCloud&&!ut.objectCloudShadows;function kS(n=ut.quantileSeed,e=ut.quantileSamples){const t=Qt.uCloudTex.value,i=t.image.data,s=t.image.width;if((s&s-1)!==0)throw new Error(`cloudTable: the noise must be a power of two texels (${s})`);const r=s-1,[a,o]=ut.tileMetres,[l,c]=ut.weights,[u,f]=ut.offsetMetres,h=(x,b)=>b?h(b,x%b):x,d=a*o/h(Math.round(a),Math.round(o)),g=Math.max(1,Math.round(Math.sqrt(e))),M=ut.quantileBins,p=new Float64Array(M+1);let m=n>>>0;const y=()=>(m=Math.imul(m^m>>>15,739982445)+2654435769>>>0)/4294967296,w=ut.secondDrift,[_,v]=ut.secondOffset;for(let x=0;x<g;x++)for(let b=0;b<g;b++){const E=(b+y())/g*d,T=(x+y())/g*d;let P=(E+u)/a*s-.5,L=(T+f)/a*s-.5,D=Math.floor(P),C=Math.floor(L),I=P-D,O=L-C,U=(C&r)*s,$=(C+1&r)*s,k=D&r,V=D+1&r;const X=(i[U+k]/255*(1-I)+i[U+V]/255*I)*(1-O)+(i[$+k]/255*(1-I)+i[$+V]/255*I)*O;P=((E+u*w)/o+_)*s-.5,L=((T+f*w)/o+v)*s-.5,D=Math.floor(P),C=Math.floor(L),I=P-D,O=L-C,U=(C&r)*s,$=(C+1&r)*s,k=D&r,V=D+1&r;const te=(i[U+k]/255*(1-I)+i[U+V]/255*I)*(1-O)+(i[$+k]/255*(1-I)+i[$+V]/255*I)*O,le=X*l+te*c;p[Math.min(M,Math.max(0,Math.floor(le*M)))]++}const S=new Float64Array(M+2);for(let x=M;x>=0;x--)S[x]=S[x+1]+p[x]/(g*g);return{threshold(x){if(!(x>0))return Number.POSITIVE_INFINITY;if(x>=S[0])return 0;let b=0;for(;b<M&&S[b+1]>=x;)b++;const E=(S[b]-x)/Math.max(1e-12,S[b]-S[b+1]);return(b+E)/M},share(x){const b=Math.min(M,Math.max(0,x*M)),E=Math.floor(b),T=b-E;return S[E]-(S[E]-S[Math.min(M+1,E+1)])*T}}}function BS(n,e,t={on:!1,threshold:0}){const i=Number.isNaN(n);return t.on=ut.on&&(i||n>0),t.threshold=i||!t.on?ut.fallbackThreshold:e.threshold(n),t}function ri(n,e,t={}){const i=n.onBeforeCompile,s=n.customProgramCacheKey.bind(n);return n.onBeforeCompile=(r,a)=>{i?.call(n,r,a),Object.assign(r.uniforms,Qt,t,{uEdgeClass:{value:e.edgeClass},uMinLevel:{value:e.minLevel??0},uShadowFloorLvl:{value:e.shadowFloor??0}}),e.walker&&Object.assign(r.uniforms,lc);let o=r.vertexShader,l=r.fragmentShader;e.walker&&(l=l.replace("#include <common>",`#include <common>
uniform float uWalkerGain; uniform vec3 uWalkerTint;`)),e.worldCells&&(l=l.replace("#include <common>",`#include <common>
uniform sampler2D uFam; uniform vec3 uFamFrame; uniform float uFamN;`).replace("#include <color_fragment>",`#include <color_fragment>
{
  vec2 cell = (vBWorld.xz - uFamFrame.xy) / uFamFrame.z * uFamN;
  // In the map view the camera moves in whole pixels, so the cells stay crisp at every zoom (as the game's map).
  float lod = isOrthographic ? 0.0 : smoothstep(${je(ze.farCellsLod[0])}, ${je(ze.farCellsLod[1])}, max(fwidth(cell).x, fwidth(cell).y));
  vec3 c = pow(${en()?"/* smooth B: filtered between cells, mipmapped far off */ texture2D(uFam, cell / uFamN).rgb":"texelFetch(uFam, clamp(ivec2(floor(cell)), ivec2(0), ivec2(int(uFamN) - 1)), 0).rgb"}, vec3(2.2));
  diffuseColor.rgb = mix(c, diffuseColor.rgb, lod);
}`)),o=o.replace("#include <common>",`#include <common>
varying vec3 vBWorld;`).replace("#include <project_vertex>",`#include <project_vertex>
{ vec4 bw = vec4(transformed, 1.0);
#ifdef USE_INSTANCING
  bw = instanceMatrix * bw;
#endif
  vBWorld = (modelMatrix * bw).xyz; }`);const c=Kn("shadowCoords");if(c){o=o.replace("#include <shadowmap_pars_vertex>",`#if NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || defined(USE_BATCHING)
#error opt.shadowCoords handles directional shadows only (no spot or point lights with shadows or maps, no sun cascades, no BatchedMesh)
#endif`).replace("#include <shadowmap_vertex>","");const f="varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];";if(!st.shadowmap_pars_fragment.includes(f))throw new Error("shadowCoords: three's shadowmap_pars_fragment changed");l=l.replace("#include <shadowmap_pars_fragment>",st.shadowmap_pars_fragment.replace(f,e.impostor?"":`vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];`))}e.actor&&!c&&(o=o.replace("#include <shadowmap_vertex>",`#include <shadowmap_vertex>
#if defined(USE_SHADOWMAP) && NUM_DIR_LIGHT_SHADOWS > 0
  vDirectionalShadowCoord[0] = directionalShadowMatrix[0] * (worldPosition + vec4(shadowWorldNormal * directionalLightShadows[0].shadowNormalBias * ${je(ze.actorShadowBias)}, 0.0));
#endif
#if defined(USE_SHADOWMAP) && NUM_DIR_LIGHT_SHADOWS > 1
  vDirectionalShadowCoord[1] = directionalShadowMatrix[1] * (worldPosition + vec4(shadowWorldNormal * directionalLightShadows[1].shadowNormalBias * ${je(ze.actorShadowBias)}, 0.0));
#endif`)),e.roadNight&&(l=l.replace("#include <common>",`#include <common>
uniform vec3 uRoadNight;`)),e.cloud&&(l=l.replace("#include <common>",`#include <common>
uniform vec3 uCloudShade; uniform vec3 uCloudLight;`),l=l.replace("#include <color_fragment>",`#include <color_fragment>
{
  float cd = bCloud(vBWorld.xz);
  if (cd <= 0.0) discard;
  // The sun side of a cloud (where the pattern thins towards the sun) is light, the far side shade, in dithered steps.
  vec2 sd = normalize(uSunW.xz + vec2(1e-4, 0.0));
  float toward = bCloud(vBWorld.xz + sd * ${je(ut.sunOffsetMetres)});
  float lit = clamp(0.55 + (cd - toward) * 7.0, 0.0, 1.0);
  lit = min(lit, 0.35 + cd * 12.0);
  diffuseColor.rgb = mix(uCloudShade, uCloudLight, bQuant(lit, ${je(ut.steps-1)}, ${je(ut.dither)})) * mix(1.0, ${je(ut.nightDim)}, uBNight);
}`)),e.grain&&(l=l.replace("#include <color_fragment>",`#include <color_fragment>
{
  vec2 gc = vBWorld.xz / ${je(ze.grainMetres)};
  float lod = 1.0 - smoothstep(${en()?`${je(An().grainLod[0])}, ${je(An().grainLod[1])}`:`${je(ze.grainLod[0])}, ${je(ze.grainLod[1])}`}, max(fwidth(gc).x, fwidth(gc).y));
${en()&&An().grainSmooth?`  // Smooth B: the same cells' values, blended between cell centres (value noise; no hard cell edges); nothing to do once faded.
  if (lod > 0.0) {
  vec2 g0 = floor(gc - 0.5), gt = gc - 0.5 - g0;
  gt = gt * gt * (3.0 - 2.0 * gt);
  float h00 = fract(sin(dot(g0, vec2(12.9898, 78.233))) * 43758.5453), h10 = fract(sin(dot(g0 + vec2(1.0, 0.0), vec2(12.9898, 78.233))) * 43758.5453);
  float h01 = fract(sin(dot(g0 + vec2(0.0, 1.0), vec2(12.9898, 78.233))) * 43758.5453), h11 = fract(sin(dot(g0 + vec2(1.0), vec2(12.9898, 78.233))) * 43758.5453);
  float h = mix(mix(h00, h10, gt.x), mix(h01, h11, gt.x), gt.y) - 0.5;
  diffuseColor.rgb *= 1.0 + h * ${je(ze.grainAmp*An().grainSmoothGain)} * 2.0 * lod;
  }`:`  float h = fract(sin(dot(floor(gc), vec2(12.9898, 78.233))) * 43758.5453) - 0.5;
  diffuseColor.rgb *= 1.0 + h * ${je(ze.grainAmp)} * 2.0 * lod;`}
}`)),e.water&&(l=l.replace("#include <common>",`#include <common>
uniform sampler2D uNoise; uniform vec2 uWaveTexel; uniform vec2 uSpeedA; uniform vec2 uSpeedB; uniform float uScaleB;
uniform float uMid; uniform float uHigh; uniform float uSparkleAbove; uniform float uSparkleChance; uniform float uSparkleHz; uniform float uSparkleMetres;
uniform vec3 uTones[9]; uniform vec3 uSparkle; uniform sampler2D uFam; uniform vec3 uFamFrame; uniform float uFamDither;`),l=l.replace("#include <color_fragment>",`#include <color_fragment>
{
  vec2 wp = vBWorld.xz;
  float ns = ${je(fn.noiseSize)};
  float a = texture2D(uNoise, (wp + uTime * uSpeedA) / uWaveTexel / ns).r;
  float b = texture2D(uNoise, ((wp + uTime * uSpeedB) / uWaveTexel * uScaleB) / ns).r;
  float s = a + b;
  // The family (open sea, harbour, shallows) from the 10 m world, its edges dithered; the tone from the waves.
  float fam = texture2D(uFam, (wp - uFamFrame.xy) / uFamFrame.z).a;
${en()?`  // Smooth B: the tones' thresholds softened over a pixel or so, the families blended by the dither's average,
  // and each sparkle a round dot.
  float we = max(fwidth(s), 1e-4) * ${je(An().waterEdgePx)};
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
  float spk = 1.0 - smoothstep(${je(An().sparkleDotShare*.5)} - saa, ${je(An().sparkleDotShare*.5)} + saa, sr);
  tone = mix(tone, uSparkle, spk * step(uSparkleAbove, s) * step(h, uSparkleChance));`:`  int fi = int(bQuant(fam, 2.0, uFamDither) * 2.0 + 0.5);
  int ti = s > uHigh ? 2 : (s > uMid ? 1 : 0);
  vec3 tone = uTones[fi * 3 + ti];
  vec2 cell = floor(wp / uSparkleMetres);
  float tick = floor(uTime * uSparkleHz);
  float h = fract(sin(dot(vec3(cell, tick), vec3(12.9898, 78.233, 37.719))) * 43758.5453);
  if (s > uSparkleAbove && h < uSparkleChance) tone = uSparkle;`}
  diffuseColor.rgb = tone;
}`));const u=e.impostor?"if (bIsCrown > 0.5)":"";if(e.crown&&(o=o.replace("#include <common>",`#include <common>
varying vec3 vCrownP;`).replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
objectNormal = normalize(position);
vCrownP = position;`),l=l.replace("#include <common>",`#include <common>
varying vec3 vCrownP; uniform float uClumps; uniform float uClumpAmp;`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
${u} {
  // The crown's rim breaks into leaves.
  float rim = 1.0 - abs(dot(normal, normalize(vViewPosition)));
  float leaf = fract(sin(dot(floor(vCrownP * ${je(en()?An().crownLeafPerUnit:ze.crownLeafPerUnit)}), vec3(39.346, 11.135, 83.155))) * 43758.5453);
  if (rim + (leaf - 0.5) * ${je(en()?An().crownCutNoise:ze.crownCutNoise)} > ${je(ze.crownCut)}) discard;
}`)),l=l.replace("#include <common>",`#include <common>
`+US()),l=l.replace("#include <lights_fragment_begin>",`
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
    vDirectionalShadowCoord[0] = directionalShadowMatrix[0] * vec4(vBWorld + bSwn * directionalLightShadows[0].shadowNormalBias${e.actor?" * "+je(ze.actorShadowBias):""}, 1.0);
  #if NUM_DIR_LIGHT_SHADOWS > 1
    vDirectionalShadowCoord[1] = directionalShadowMatrix[1] * vec4(vBWorld + bSwn * directionalLightShadows[1].shadowNormalBias${e.actor?" * "+je(ze.actorShadowBias):""}, 1.0);
  #endif
  }
  #endif`:""}
  #if defined(USE_SHADOWMAP) && NUM_DIR_LIGHT_SHADOWS > 0
    bSh = receiveShadow ? ${Ar()?"bShadow1(directionalShadowMap[0], directionalLightShadows[0].shadowIntensity, directionalLightShadows[0].shadowBias, vDirectionalShadowCoord[0])":"getShadow(directionalShadowMap[0], directionalLightShadows[0].shadowMapSize, directionalLightShadows[0].shadowIntensity, directionalLightShadows[0].shadowBias, directionalLightShadows[0].shadowRadius, vDirectionalShadowCoord[0])"} : 1.0;
  #endif
  // S1: the moving things' shadow map beside the cached one (either shades). Shadows fall only inside the moving
  // map's box (the view's own box, as before), never in the cached map's margin, so the edge of the shadowed area
  // moves smoothly with the view and never jumps when the cache redraws.
  #if defined(USE_SHADOWMAP) && NUM_DIR_LIGHT_SHADOWS > 1
    if (receiveShadow) {
      vec3 bDc = vDirectionalShadowCoord[1].xyz / vDirectionalShadowCoord[1].w;
      bool bInD = bDc.x >= 0.0 && bDc.x <= 1.0 && bDc.y >= 0.0 && bDc.y <= 1.0 && bDc.z <= 1.0;
      bSh = bInD ? min(bSh, ${Ar()?"bShadow1(directionalShadowMap[1], directionalLightShadows[1].shadowIntensity, directionalLightShadows[1].shadowBias, vDirectionalShadowCoord[1])":"getShadow(directionalShadowMap[1], directionalLightShadows[1].shadowMapSize, directionalLightShadows[1].shadowIntensity, directionalLightShadows[1].shadowBias, directionalLightShadows[1].shadowRadius, vDirectionalShadowCoord[1])"}) : 1.0;
    }
  #endif
#endif
${e.crown?u+" bNdl += (fract(sin(dot(floor(vCrownP * uClumps), vec3(12.9898, 78.233, 37.719))) * 43758.5453) - 0.5) * uClumpAmp;":""}
// After dusk the sun (moon) shadow fades out; by day clouds shade the ground under them.
bSh = mix(1.0, bSh, uShadowMix);
if (uCloudOn > 0.5 && uSunW.y > 0.05 && ${ut.shadows&&!Rh(e)?"true":"false"}) {
  float cs = bCloud(vBWorld.xz + uSunW.xz / uSunW.y * (${je(ut.heightMetres)} - vBWorld.y));
${en()?"  bSh = min(bSh, mix(1.0, 1.0 - uShadowMix, smoothstep(0.0, max(fwidth(cs), 1e-4), cs)));":"  if (cs > 0.0) bSh = min(bSh, 1.0 - uShadowMix);"}
}
${e.cloud?"bNdl = 1.0; bSh = 1.0;":""}
vec3 bLight = uAmb + uSun * bandLevel(bNdl, bSh);
${e.crown?`${u} bLight += vec3(${pn.crownFill.map(je).join(", ")}) * uBNight;`:""}
${e.roadNight?`{
  vec2 rq = (fract(vBWorld.xz / ${je(pn.roadPoolSpacingMetres)} + 0.5) - 0.5) * ${je(pn.roadPoolSpacingMetres)};
  float pl = pow(max(0.0, 1.0 - length(rq) / ${je(pn.roadPoolMetres)}), 2.0);
  float rm = 1.0;
  ${e.roadMask?`vec3 dc = pow(max(diffuseColor.rgb, vec3(0.0)), vec3(1.0 / 2.2)); rm = 1.0 - step(${je(pn.groundGreyMax)}, max(dc.r, max(dc.g, dc.b)) - min(dc.r, min(dc.g, dc.b)));`:""}
  bLight += rm * uRoadNight * uBNight * (${je(pn.roadGlow)} + ${je(pn.roadPool)} * bQuant(pl, ${je(ze.poolRings)}, 1.0));
}`:""}
`),l=l.replace("#include <lights_fragment_maps>","").replace("#include <lights_fragment_end>",""),l=l.replace("vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;",`vec3 bAlb = pow(max(diffuseColor.rgb, vec3(0.0)), vec3(1.0 / 2.2));
`+(e.walker?`bAlb = min(bAlb * uWalkerGain, vec3(1.0));
`:"")+"vec3 outgoingLight = pow(pow(bAlb * bLight, vec3(2.2)) + totalEmissiveRadiance, vec3(1.0 / 2.2));"+(e.walker?`
outgoingLight *= uWalkerTint;`:"")),l=l.replace("#include <fog_fragment>",`
#ifdef USE_FOG
  float fogFactor = bQuant(smoothstep(fogNear, fogFar, vFogDepth), uHazeSteps - 1.0, uHazeDither);
  gl_FragColor.rgb = mix(gl_FragColor.rgb, pow(fogColor, vec3(1.0 / 2.2)), fogFactor);
#endif
`),l=l.replace("#include <dithering_fragment>",`#include <dithering_fragment>
pc_fragN = vec4(normal * 0.5 + 0.5, uEdgeClass);`),e.impostor){const f=OS(e.impostor);o=o.replace("#include <common>",`#include <common>
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
}`),l=l.replace("#include <common>",`#include <common>
`+f.decl.split("#define")[0]),l=l.replace("void main() {","#define"+f.decl.split("#define").slice(1).join("#define")+`
void main() {
`+f.cast),l=l.replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb = bIsCrown > 0.5 ? vICol : uTrunkCol;`)}"uWarp"in r.uniforms||Object.assign(r.uniforms,Zi),r.vertexShader=zr(o),r.fragmentShader=l},e.masonry&&(n.defines={...n.defines??{},PIXEL_MASONRY:""}),n.customProgramCacheKey=()=>`pixel-${Kn("shadowCoords")?"s":""}${e.water?1:0}${e.crown?1:0}${e.grain?1:0}${e.masonry?1:0}${e.worldCells?1:0}${e.roadNight?1:0}${e.roadMask?1:0}${e.actor?1:0}${e.walker?"w":""}${e.cloud?1:0}${e.impostor?"i":""}${Rh(e)?"n":""}-`+s(),n}function zS(){const n=fn.noiseSize,e=[4,8,16],t=[1,.5,.25];let i=fn.noiseSeed>>>0;const s=()=>(i=Math.imul(i^i>>>15,739982445)+2654435769>>>0)/4294967296,r=new Float32Array(n*n);e.forEach((u,f)=>{const h=n/u,d=new Float32Array(h*h).map(()=>s()),g=t[f];for(let M=0;M<n;M++)for(let p=0;p<n;p++){const m=p/u,y=M/u,w=Math.floor(m),_=Math.floor(y),v=m-w,S=y-_,x=v*v*(3-2*v),b=S*S*(3-2*S),E=(P,L)=>d[(L+h)%h*h+(P+h)%h],T=(E(w,_)*(1-x)+E(w+1,_)*x)*(1-b)+(E(w,_+1)*(1-x)+E(w+1,_+1)*x)*b;r[M*n+p]+=T*g}});let a=1/0,o=-1/0;for(const u of r)a=Math.min(a,u),o=Math.max(o,u);const l=new Uint8Array(n*n);for(let u=0;u<n*n;u++)l[u]=Math.round((r[u]-a)/(o-a||1)*255);const c=new Qn(l,n,n,Qs,tn);return c.wrapS=c.wrapT=Ks,c.magFilter=en()?kt:bt,c.minFilter=en()?Un:bt,c.generateMipmaps=en(),c.needsUpdate=!0,c}function GS(n){const e=new Qn(n.data,n.n,n.n,Cn,tn);return e.magFilter=e.minFilter=kt,en()&&(e.minFilter=Un,e.generateMipmaps=!0),e.flipY=!1,e.needsUpdate=!0,e}const al=(()=>{const n=new Dt;return n.setAttribute("position",new Lt([-1,-1,0,3,-1,0,-1,3,0],3)),n})(),wd="void main() { gl_Position = vec4(position.xy, 0.0, 1.0); }";function HS(){const n=Ot.outline;return new _n({uniforms:{tCol:{value:null},tNrm:{value:null},tDepth:{value:null},uNF:{value:new Oe(1,1e3)},uOrtho:{value:0},uSize:{value:new Oe(1,1)},uOrthoDepth:{value:Ot.orthoDepthMetres},uOrthoTexels:{value:Ot.orthoDepthTexels},uShare:{value:Ot.perspShare},uSoftScale:{value:Ot.softDepthScale},uMinFacing:{value:Ot.minFacing},uTexel:{value:1},uPixelAngle:{value:.001},uTint:{value:new G(...Ot.outlineTint)},uLift:{value:Ot.creaseLift},uConcave:{value:Ot.concaveDark},uCreaseMin:{value:Ot.creaseMin},uFade:{value:new Oe(...Ot.fadeMetres)},uDebug:{value:0},uSoftOutline:{value:1},uC:{value:1},uShiftC:{value:new Oe},uNewStyle:{value:0},uThin:{value:0},uStrength:{value:n.strength},uShade:{value:n.shade},uSat:{value:n.saturation},uConcaveOn:{value:1},uCreaseShare:{value:1},uOrthoFade:{value:new Oe(...n.orthoFadeTexelMetres)},uFadeTexel:{value:1},uAlphaLuma:{value:0},uSharpen:{value:0},uOuter:{value:0}},vertexShader:wd,fragmentShader:`
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
${$e.look.skyEarlyOut?"  bool takesNoEdge = cls < 0.5;  // sky and ground/roads: neither an outline nor a crease (GPU_CONFIG.look.skyEarlyOut)":""}
  for (int i = 0; i < 4; i++) {
    ivec2 q = clamp(p + offs[i], ivec2(0), hi);
    if (uSharpen > 0.0) { vec3 cn = texelFetch(tCol, q, 0).rgb; cSum += cn; cMn = min(cMn, cn); cMx = max(cMx, cn); }
${$e.look.skyEarlyOut?"    if (takesNoEdge) continue;  // the sharpen cross above still runs, so the drawn picture is unchanged":""}
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
}`,depthTest:!1,depthWrite:!1})}function WS(){return new _n({uniforms:{tCol:{value:null},tDepth:{value:null},uOrigin:{value:new Oe},uK:{value:1},uSize:{value:new Oe(1,1)}},vertexShader:wd,fragmentShader:`
uniform sampler2D tCol; uniform sampler2D tDepth; uniform vec2 uOrigin; uniform float uK; uniform vec2 uSize;
void main() {
  ivec2 p = clamp(ivec2(floor((gl_FragCoord.xy - uOrigin) / uK)), ivec2(0), ivec2(uSize) - 1);
  gl_FragColor = vec4(texelFetch(tCol, p, 0).rgb, 1.0);
  gl_FragDepth = texelFetch(tDepth, p, 0).r;
}`,depthTest:!0,depthWrite:!0,depthFunc:Ba})}function Ch(n){return new _n({uniforms:{...n.uniforms,...Qt,uSkySteps:{value:ze.skySteps},uSkyDither:{value:ze.skyDither}},vertexShader:"varying vec3 vDir; void main() { vDir = normalize(position); vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0); gl_Position = p.xyww; }",fragmentShader:`
uniform vec3 uZenith; uniform vec3 uMid; uniform vec3 uHorizon; uniform float uMidShare; uniform float uSkySteps; uniform float uSkyDither;
uniform vec2 uDitherOrigin; uniform float uBNight;
varying vec3 vDir;
layout(location = 1) out highp vec4 pc_fragN;
${Bc()}
void main() {
  float e = bQuant(clamp(vDir.y, 0.0, 1.0), uSkySteps, uSkyDither);
  vec3 c = e < uMidShare ? mix(uHorizon, uMid, e / uMidShare) : mix(uMid, uZenith, (e - uMidShare) / (1.0 - uMidShare));
  // Stars after dark: single cells of the sky's direction.
  vec3 sd = normalize(vDir) * ${je(pn.starCellsPerRadian)};
  vec3 sc = floor(sd);
  float sh = fract(sin(dot(sc, vec3(12.9898, 78.233, 37.719))) * 43758.5453);
${en()?`  // Smooth B: each star a round dot in its cell.
  float saa = max(fwidth(sd.x) + fwidth(sd.y), 1e-4);
  float sdot = 1.0 - smoothstep(${je(An().starDotShare*.5)} - saa, ${je(An().starDotShare*.5)} + saa, length(fract(sd) - 0.5));
  c = mix(c, vec3(0.85, 0.88, 0.95), sdot * step(1.0 - ${je(pn.starShare)}, sh) * step(0.6, uBNight) * smoothstep(0.04, 0.2, vDir.y));`:`  c = mix(c, vec3(0.85, 0.88, 0.95), step(1.0 - ${je(pn.starShare)}, sh) * step(0.6, uBNight) * smoothstep(0.04, 0.2, vDir.y));`}
  gl_FragColor = vec4(pow(c, vec3(1.0 / 2.2)), 1.0);
  pc_fragN = vec4(0.5, 0.5, 1.0, 0.0);
}`,side:n.side,depthWrite:!1,depthTest:!1,fog:!1})}const In={w:1,h:1,dpr:1,baseX:0,baseY:0},hs={hooked:!1,inScene:!1,t0:0,next:1/0,step:1/0,cuts:0,lastSceneTris:0,flushes:0},Ua={scale:ae.smooth.scale},VS=["","depth","normal","edges"],XS=["","depth","normal","edges","grid"],Za={n:0};function Ph(n){n.state.buffers.color.setMask(!0),n.clear(!0,!1,!1)}function Gi(n,e,t){n[0]=e,n[1]=t}function Lh(n,e,t,i){n.length=0,n.push("scene","edges"),e&&n.push("fxaa"),t!==null&&n.push(t),i&&n.push("rcas")}function Dh(n,e){const t=Zd.quality.standard,i=matchMedia("(pointer: coarse)").matches?t.targetBufferPixelsTouch:t.targetBufferPixels,s=Math.max(1,Math.round(Math.sqrt(n*e/i)/ze.fineGrid)),r=ze.marginPixels,a=Math.ceil(n/s)+2*r,o=Math.ceil(e/s)+2*r,l=Math.floor((n-a*s)/2),c=Math.floor((e-o*s)/2);let u=Math.max(1,Math.min(s,ae.opt.canvas.perBufferPixel));for(;s%u;)u--;return{k:s,bw:a,bh:o,lx:l,ly:c,c:u}}class qS{id="pixel";lowRes=!0;mats=new Map;lampHead;pool;poolUniforms={uRings:{value:ze.poolRings},uPoolOpacity:{value:0}};rt=null;post=null;edge=HS();blow=WS();edgeScene=new $s;blowScene=new $s;passCam=new vs(-1,1,1,-1,0,1);sky=null;skyB=null;cloud;cloudIn=!1;cloudShares;cloudNow={on:!1,threshold:0};ortho=new vs;persp=new Nn;layout={buffer:[0,0],scale:1,shift:[0,0],texelMetres:0,mode:"pixel",output:[0,0],canvas:[0,0],upscale:"",passes:[]};aa=null;full=null;sm=null;drawingBuffer=new Oe;camRight=new G;camUp=new G;finish={S:ae.smooth,W:1,H:1,iw:1,ih:1,ow:1,oh:1,none:!1,isOrtho:!1,pxOrtho:0,texel:0,camNear:0,camFar:0,camFov:0,focus:0};constructor(e,t){const i=Ot,s=en()?An().aoSteps:ze.aoSteps,r=GS(t),a=new G(t.e0,t.s0,t.step*t.n),o=(d,g)=>ri(ic(new dn({vertexColors:d.vertexColors}),{srgbColours:d.srgb,ao:d.ao,facade:d.facade,dayNight:d.dayNight,nightLift:d.nightLift,farWindows:d.farWindows,dissolve:d.dissolve,rigCells:d.rigCells,aoSteps:s,aoFloor:ze.aoFloor}),{edgeClass:g,grain:d.grain,masonry:d.facade,roadNight:d.roadNight,actor:d.actor,walker:d.walker,noCloud:d.noCloud},d.roadNight?l:{}),l={uRoadNight:{value:new G((pn.roadColour>>16&255)/255,(pn.roadColour>>8&255)/255,(pn.roadColour&255)/255)}};e.colorSpace=bn,this.mats.set("ground",ri(new dn({map:e}),{edgeClass:i.classGround,grain:!0,roadNight:!0,roadMask:!0},l)),this.mats.set("building",o({srgb:!0,ao:!0,facade:!0,dayNight:!1,vertexColors:!0},i.classObject)),this.mats.set("road",o({srgb:!0,ao:!0,facade:!1,dayNight:!1,vertexColors:!0,grain:!0,roadNight:!0},i.classGround)),this.mats.set("farGround",ri(ic(new dn({vertexColors:!0}),{srgbColours:!0,ao:!0,facade:!1,dayNight:!1,aoSteps:s,aoFloor:ze.aoFloor}),{edgeClass:i.classGround,worldCells:!0},{uFam:{value:r},uFamFrame:{value:a},uFamN:{value:t.n}})),this.mats.set("farBuilding",o({srgb:!0,ao:!0,facade:!1,dayNight:!1,vertexColors:!0,farWindows:!0},i.classSoft)),this.makeVoxel=()=>o({srgb:!0,ao:!0,facade:!1,dayNight:!0,vertexColors:!0,dissolve:!0,noCloud:!0},i.classObject),this.mats.set("voxel",o({srgb:!0,ao:!0,facade:!1,dayNight:!0,vertexColors:!0,noCloud:!0},i.classObject)),this.mats.set("part",o({srgb:!0,ao:!1,facade:!1,dayNight:!1,vertexColors:!0,nightLift:!0,actor:!0,noCloud:!0},i.classObject)),this.mats.set("walker",o({srgb:!0,ao:!1,facade:!1,dayNight:!1,vertexColors:!0,nightLift:!1,actor:!0,walker:!0,noCloud:!0},i.classObject)),this.makeWalkerDissolve=()=>o({srgb:!0,ao:!1,facade:!1,dayNight:!1,vertexColors:!0,nightLift:!1,actor:!0,walker:!0,dissolve:!0,rigCells:!0,noCloud:!0},i.classObject),this.mats.set("crown",ri(new dn({color:16777215}),{edgeClass:i.classSoft,minLevel:ze.crownMinLevel,shadowFloor:ze.crownShadowLevel,crown:!0},{uClumps:{value:ze.crownClumps},uClumpAmp:{value:ze.crownClumpAmp}}));const c=ri(new dn({color:16777215,side:$n}),{edgeClass:i.classNone,cloud:!0},{uCloudShade:{value:new Ue().setHex(ut.shade)},uCloudLight:{value:new Ue().setHex(ut.light)}});this.cloud=new gt(new xs(ut.sizeMetres,ut.sizeMetres).rotateX(-Math.PI/2),c),this.cloud.name="clouds",this.cloud.frustumCulled=!1,this.cloud.castShadow=!1,this.cloud.receiveShadow=!1,this.cloudShares=kS(),this.mats.set("trunk",ri(new dn({color:ae.props.trunkColour}),{edgeClass:i.classSoft})),this.mats.set("lampPole",ri(new dn({color:ae.props.lampPoleColour}),{edgeClass:i.classSoft,noCloud:!0})),this.lampHead=ri(new dn({color:ae.props.lampHeadColour,emissive:new Ue(ae.props.lampHeadColour)}),{edgeClass:i.classSoft,noCloud:!0}),this.mats.set("lampHead",this.lampHead);const u=d=>new Ue().setHex(d);this.mats.set("water",ri(new dn({color:ae.water.colour}),{edgeClass:i.classNone,water:!0},{uNoise:{value:zS()},uWaveTexel:{value:new Oe(...fn.texelMetres)},uSpeedA:{value:new Oe(...fn.speedA)},uSpeedB:{value:new Oe(...fn.speedB)},uScaleB:{value:fn.scaleB},uMid:{value:fn.mid},uHigh:{value:fn.high},uSparkleAbove:{value:fn.sparkleAbove},uSparkleChance:{value:fn.sparkleChance},uSparkleHz:{value:fn.sparkleHz},uSparkleMetres:{value:fn.sparkleMetres},uTones:{value:fn.tones.map(u)},uSparkle:{value:u(fn.sparkle)},uFam:{value:r},uFamFrame:{value:a},uFamDither:{value:fn.familyDither}})),this.pool=new eo({map:$S(),color:ae.props.lampPoolColour,transparent:!0,blending:ka,depthWrite:!1,fog:!1,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4}),this.pool.onBeforeCompile=d=>{Object.assign(d.uniforms,Qt,this.poolUniforms,Zi),d.vertexShader=zr(d.vertexShader),d.fragmentShader=d.fragmentShader.replace("#include <common>",`#include <common>
uniform vec2 uDitherOrigin; uniform float uRings; uniform float uPoolOpacity;
layout(location = 1) out highp vec4 pc_fragN;
${Bc()}`).replace("#include <opaque_fragment>","gl_FragColor = vec4(pow(diffuse, vec3(1.0 / 2.2)) * bQuant(sampledDiffuseColor.r, uRings, 1.0), uPoolOpacity);").replace("#include <colorspace_fragment>","").replace("#include <dithering_fragment>","pc_fragN = vec4(0.0);")},this.pool.customProgramCacheKey=()=>"pixel-pool",this.mats.set("lampPool",this.pool);for(const d of["road"]){const g=this.mats.get(d);g.polygonOffset=!0,g.polygonOffsetFactor=0,g.polygonOffsetUnits=ae.plain.roadDepthUnits}const f=new gt(al,this.edge);f.frustumCulled=!1,this.edgeScene.add(f);const h=new gt(al,this.blow);h.frustumCulled=!1,this.blowScene.add(h)}makeVoxel=()=>{throw new Error("PixelLook.makeVoxel was called before the constructor set it")};makeWalkerDissolve=()=>{throw new Error("PixelLook.makeWalkerDissolve was called before the constructor set it")};material(e){return this.mats.get(e)}treeImpostorMaterial(e){const t=ri(new dn({color:16777215}),{edgeClass:Ot.classSoft,minLevel:ze.crownMinLevel,shadowFloor:ze.crownShadowLevel,crown:!0,impostor:e},{uClumps:{value:ze.crownClumps},uClumpAmp:{value:ze.crownClumpAmp},uTrunkCol:{value:new Ue().setHex(ae.props.trunkColour)},...Na});return this.mats.set("treeImpostor",t),t}update(e){this.lampHead.emissiveIntensity=e,this.poolUniforms.uPoolOpacity.value=e*ae.props.lampPoolStrength,this.pool.visible=e>.01}clouds(e){const t=BS(e,this.cloudShares,this.cloudNow);Qt.uCloudOn.value=t.on?1:0,Qt.uCloudThresh.value=t.threshold,this.cloud.visible=t.on}warmMeshes(){return[this.cloud]}light(e,t){Qt.uAmb.value.set(e.ambient[0],e.ambient[1],e.ambient[2]),Qt.uSun.value.set(e.sun[0],e.sun[1],e.sun[2]),Qt.uTime.value=t,Qt.uBNight.value=e.night;const[i,s]=pn.shadowOffNight,r=Math.min(1,Math.max(0,(e.night-i)/(s-i)));Qt.uShadowMix.value=1-r*r*(3-2*r),Qt.uSunW.value.set(e.lightDir[0],e.lightDir[2],e.lightDir[1]).normalize();const a=Math.max(.001,e.lightDir[2]),[o,l]=ze.bandGainRange;Qt.uBandGain.value=Math.min(l,Math.max(o,ze.shadeLevels[ze.flatLevel]/a))}targets(e,t){if(this.rt&&this.rt.width===e&&this.rt.height===t)return;this.rt?.dispose(),this.post?.dispose();const i=new $t(e,t,{count:2,minFilter:bt,magFilter:bt,generateMipmaps:!1,depthBuffer:!0});i.depthTexture=new Ki(e,t,Rn),i.depthTexture.minFilter=i.depthTexture.magFilter=bt;for(const s of i.textures)s.colorSpace=Yn;this.rt=i,this.post=new $t(e,t,{minFilter:bt,magFilter:bt,generateMipmaps:!1,depthBuffer:!1})}smoothTargets(e,t,i,s){const r=An();if(!this.rt||this.rt.width!==e||this.rt.height!==t){this.rt?.dispose(),this.post?.dispose(),this.aa?.dispose();const o=new $t(e,t,{count:2,minFilter:bt,magFilter:bt,generateMipmaps:!1,depthBuffer:!0});o.depthTexture=new Ki(e,t,Rn),o.depthTexture.minFilter=o.depthTexture.magFilter=bt;for(const l of o.textures)l.colorSpace=Yn;this.rt=o,this.post=new $t(e,t,{minFilter:kt,magFilter:kt,generateMipmaps:!1,depthBuffer:!1}),this.aa=r.fxaa.on?new $t(e,t,{minFilter:kt,magFilter:kt,generateMipmaps:!1,depthBuffer:!1}):null}if(r.rcas.on&&r.upscale!=="none"&&(!this.full||this.full.width!==i||this.full.height!==s)&&(this.full?.dispose(),this.full=new $t(i,s,{minFilter:bt,magFilter:bt,generateMipmaps:!1,depthBuffer:!1})),!this.sm){const o=new gt(al,CS());o.frustumCulled=!1;const l=new $s;l.add(o),this.sm={fxaa:o.material,up:r.upscale==="bilinear"?LS():PS(),rcas:DS(),scene:l,quad:o}}}hookSubmit(e,t){if(hs.hooked)return;hs.hooked=!0;const i=e.getContext(),s=e.shadowMap,r=s.render;s.render=function(...c){const u=e.info.render.calls;r.apply(this,c),hs.inScene&&(hs.t0=e.info.render.triangles);const f=ae.opt.submit;!ae.opt.on||!f.on||!f.flushAfterShadow||e.info.render.calls===u||(i.flush(),hs.flushes++)};const a=()=>{const c=hs;!c.inScene||c.cuts<=0||e.info.render.triangles-c.t0>=c.next&&(i.flush(),c.flushes++,c.next+=c.step,c.cuts--)},o=Object.getPrototypeOf(t).onAfterRender;Sd(t,"submit",c=>{if(!c.isMesh)return;const u=c.onAfterRender;if(u?.__submitHook)return;const f=u&&u!==o?((...h)=>{u.apply(c,h),a()}):()=>a();f.__submitHook=!0,c.onAfterRender=f})}pass(e,t,i){this.sm.quad.material=t,e.setRenderTarget(i),$e.look.clearFinishColour&&(Ph(e),Za.n++),e.autoClear=!1,e.render(this.sm.scene,this.passCam),e.autoClear=!0}renderSmooth(e,t,i,s,r){const a=An(),o=In.w,l=In.h,c=e.getDrawingBufferSize(this.drawingBuffer),u=a.upscale==="none",f=u?c.x:Math.max(1,Math.round(o*Ua.scale)),h=u?c.y:Math.max(1,Math.round(l*Ua.scale));this.smoothTargets(f,h,c.x,c.y);let d,g=0,M=0;const p=i.isOrthographicCamera===!0;if(p){const x=i;if(d=this.ortho.copy(x),x.userData.ported&&$e.view.useGameFrame)d.projectionMatrix.copy(x.projectionMatrix),d.projectionMatrixInverse.copy(x.projectionMatrixInverse),g=x.userData.texelMetres??(x.right-x.left)/o,M=(x.top-x.bottom)/h;else{const{k:b}=Dh(o,l);g=x.userData.texelMetres??(x.right-x.left)/o*b,d.left=-o/b/2*g,d.right=o/b/2*g,d.top=l/b/2*g,d.bottom=-l/b/2*g,d.updateProjectionMatrix(),M=(d.top-d.bottom)/h}}else{const x=i;d=this.persp.copy(x),d.projectionMatrix.copy(x.projectionMatrix),d.projectionMatrixInverse.copy(x.projectionMatrixInverse)}d.layers.mask=r?s|1:s,d.updateMatrixWorld(),Qt.uDitherOrigin.value.set(0,0),ze.clouds.on&&!this.cloudIn&&(t.add(this.cloud),this.cloudIn=!0),this.cloud.position.set(d.position.x,ze.clouds.heightMetres,d.position.z),this.cloud.updateMatrixWorld();const m=ae.plain.windowGlow;Nr.uWindowGlow.value=p?m*pn.mapWindowGain:m,this.sky||(this.sky=t.getObjectByName("sky")??null,this.sky&&(this.skyB=Ch(this.sky.material)));const y=this.sky?.material;this.sky&&this.skyB&&(this.sky.material=this.skyB),e.setRenderTarget(this.rt),e.setClearColor(0,0),e.autoClear=!0;const w=ae.opt.submit,_=ae.opt.on&&w.on,v=hs;_&&this.hookSubmit(e,t),v.t0=e.info.render.triangles,v.inScene=_,v.cuts=_&&w.sceneParts>1&&v.lastSceneTris>0?w.sceneParts-1:0,v.step=v.cuts>0?v.lastSceneTris/w.sceneParts:1/0,v.next=v.step,e.render(t,d),v.lastSceneTris=e.info.render.triangles-v.t0,v.inScene=!1,_&&w.flushAfterScene&&(e.getContext().flush(),v.flushes++),this.sky&&y&&(this.sky.material=y);const S=this.finish;S.S=a,S.W=o,S.H=l,S.iw=f,S.ih=h,S.ow=c.x,S.oh=c.y,S.none=u,S.isOrtho=p,S.pxOrtho=M,S.texel=g,S.camNear=d.near,S.camFar=d.far,S.camFov=p?0:d.fov,S.focus=i.userData?.focusMetres??0,this.finishSmooth(e,S)}finishSmooth(e,t){const{S:i,W:s,H:r,iw:a,ih:o,none:l,isOrtho:c,pxOrtho:u,texel:f}=t,h=this.edge.uniforms,d=Ot.outline,g=Kn("outline");h.tCol.value=this.rt.textures[0],h.tNrm.value=this.rt.textures[1],h.tDepth.value=this.rt.depthTexture,h.uNF.value.set(t.camNear,t.camFar),h.uOrtho.value=c?1:0,h.uSize.value.set(a,o),h.uTexel.value=u,h.uFadeTexel.value=f,h.uAlphaLuma.value=i.fxaa.on?1:0,h.uPixelAngle.value=c?0:2*Math.tan(t.camFov*Math.PI/360)/o,h.uDebug.value=VS.indexOf(ze.debug);const M=c?Ot.orthoOutlineTint:Ot.outlineTint;h.uTint.value.set(M[0],M[1],M[2]),h.uSoftOutline.value=c&&!Ot.orthoSoftOutline?0:1,h.uNewStyle.value=g?1:0,h.uThin.value=0,h.uConcaveOn.value=g&&d.silhouetteOnly?0:1,h.uCreaseShare.value=g?i.outline.creaseShare:1,h.uStrength.value=c?i.outline.orthoStrength:i.outline.strength,h.uOuter.value=i.outline.outerShare,h.uSharpen.value=l?i.sharpen.amount:0;const p=h.uFade.value;g?p.set(Math.max(d.fadeMetres[0],t.focus*d.fadeFocusShare[0]),Math.max(d.fadeMetres[1],t.focus*d.fadeFocusShare[1])):p.set(Ot.fadeMetres[0],Ot.fadeMetres[1]),h.uC.value=1,h.uShiftC.value.set(0,0);const m=i.fxaa.on&&!!this.aa;this.pass(e,this.edge,l&&!m?null:this.post);let y=this.post;if(m&&(this.sm.fxaa.uniforms.tIn.value=this.post.texture,this.sm.fxaa.uniforms.uRcp.value.set(1/a,1/o),this.pass(e,this.sm.fxaa,l?null:this.aa),y=this.aa),l){e.setRenderTarget(null),this.layout.mode="smooth",Gi(this.layout.buffer,a,o),this.layout.scale=s/a,Gi(this.layout.shift,0,0),this.layout.texelMetres=c?u:0,Gi(this.layout.output,s,r),Gi(this.layout.canvas,t.ow,t.oh),this.layout.upscale="compositor (bilinear)",Lh(this.layout.passes,m,null,!1);return}const w=this.sm.up;w.uniforms.tIn.value=y.texture,w.uniforms.uInSize&&w.uniforms.uInSize.value.set(a,o),w.uniforms.uOutSize.value.set(t.ow,t.oh);const _=i.rcas.on&&this.full;if(this.pass(e,w,_?this.full:null),_){const v=this.sm.rcas;v.uniforms.tIn.value=this.full.texture,v.uniforms.uSize.value.set(t.ow,t.oh),v.uniforms.uSharp.value=Math.pow(2,-i.rcas.sharpnessStops),this.pass(e,v,null)}e.setRenderTarget(null),this.layout.mode="smooth",Gi(this.layout.buffer,a,o),this.layout.scale=1/Ua.scale,Gi(this.layout.shift,0,0),this.layout.texelMetres=c?u:0,Gi(this.layout.output,s,r),Gi(this.layout.canvas,t.ow,t.oh),this.layout.upscale=i.upscale+(_?" + RCAS":""),Lh(this.layout.passes,m,i.upscale,!!_)}render(e,t,i,s,r){if(en()){this.renderSmooth(e,t,i,s,r);return}const a=Kn("canvas"),o=a?this.drawingBuffer.set(In.w,In.h):e.getDrawingBufferSize(this.drawingBuffer),l=o.x,c=o.y,{k:u,bw:f,bh:h,lx:d,ly:g,c:M}=Dh(l,c),p=ze.marginPixels;this.targets(f,h);const m=l/(f*u),y=c/(h*u),w=(l-2*d)/(f*u)-1,_=(c-2*g)/(h*u)-1;let v,S;if(i.isOrthographicCamera){const q=i;v=this.ortho.copy(q),q.userData.ported&&$e.view.useGameFrame?(v.projectionMatrix.copy(q.projectionMatrix),v.projectionMatrixInverse.copy(q.projectionMatrixInverse),S=q.userData.texelMetres??(q.right-q.left)/l):(S=q.userData.texelMetres??(q.right-q.left)/l*u,v.left=-l/u/2*S,v.right=l/u/2*S,v.top=c/u/2*S,v.bottom=-c/u/2*S,v.updateProjectionMatrix())}else{const q=i;v=this.persp.copy(q),v.projectionMatrix.copy(q.projectionMatrix),S=2*(q.userData.focusMetres??50)*Math.tan(q.fov*Math.PI/360)/c*u}v.layers.mask=r?s|1:s,v.updateMatrixWorld();const x=this.camRight.setFromMatrixColumn(v.matrixWorld,0),b=this.camUp.setFromMatrixColumn(v.matrixWorld,1);let E=0,T=0,P=0,L=0;if(ze.snap){const q=v.position.dot(x)/S,F=v.position.dot(b)/S;P=Math.round(q),L=Math.round(F),E=q-P,T=F-L,v.position.addScaledVector(x,-E*S).addScaledVector(b,-T*S),v.updateMatrixWorld()}const D=v.projectionMatrix.elements;for(let q=0;q<4;q++){const F=D[q*4],ee=D[q*4+1],fe=D[q*4+3];D[q*4]=m*F+w*fe,D[q*4+1]=y*ee+_*fe}v.projectionMatrixInverse.copy(v.projectionMatrix).invert();const C=q=>(q%4+4)%4;Qt.uDitherOrigin.value.set(C(P),C(L));const I=v.isOrthographicCamera===!0;ze.clouds.on&&!this.cloudIn&&(t.add(this.cloud),this.cloudIn=!0),this.cloud.position.set(v.position.x,ze.clouds.heightMetres,v.position.z),this.cloud.updateMatrixWorld();const O=ae.plain.windowGlow;Nr.uWindowGlow.value=I?O*pn.mapWindowGain:O;const U=yd.object??void 0,$=U&&ze.snapActors&&ze.snap?U.position.clone():null;U&&$&&(U.position.addScaledVector(x,-E*S).addScaledVector(b,-T*S),U.updateMatrixWorld(!0)),this.sky||(this.sky=t.getObjectByName("sky")??null,this.sky&&(this.skyB=Ch(this.sky.material)));const k=this.sky?.material;this.sky&&this.skyB&&(this.sky.material=this.skyB),e.setRenderTarget(this.rt),e.setClearColor(0,0),e.autoClear=!0,e.render(t,v),this.sky&&k&&(this.sky.material=k),U&&$&&(U.position.copy($),U.updateMatrixWorld(!0));const V=this.edge.uniforms;V.tCol.value=this.rt.textures[0],V.tNrm.value=this.rt.textures[1],V.tDepth.value=this.rt.depthTexture,V.uNF.value.set(v.near,v.far),V.uOrtho.value=v.isOrthographicCamera?1:0,V.uSize.value.set(f,h),V.uTexel.value=S,V.uFadeTexel.value=S,V.uAlphaLuma.value=0,V.uPixelAngle.value=v.isPerspectiveCamera?2*Math.tan(v.fov*Math.PI/360)*u/c:0,V.uDebug.value=XS.indexOf(ze.debug),V.uTint.value.set(...I?Ot.orthoOutlineTint:Ot.outlineTint),V.uSoftOutline.value=I&&!Ot.orthoSoftOutline?0:1;const X=Ot.outline,te=Kn("outline");V.uNewStyle.value=te?1:0,V.uThin.value=te&&X.thin?1:0,V.uConcaveOn.value=te&&X.silhouetteOnly?0:1,V.uCreaseShare.value=te?X.creaseShare:1,V.uStrength.value=I?X.orthoStrength:X.strength,V.uOuter.value=0,V.uSharpen.value=0;const le=i.userData?.focusMetres??0;V.uFade.value.set(...te?[Math.max(X.fadeMetres[0],le*X.fadeFocusShare[0]),Math.max(X.fadeMetres[1],le*X.fadeFocusShare[1])]:Ot.fadeMetres);let z=ze.snap?Math.round(-E*u):0,Z=ze.snap?Math.round(-T*u):0;if(ze.debug==="grid"){const q=ze.gridTest,F=Math.round(q.cycleBufferPixels*u),ee=Math.floor(performance.now()/1e3*q.stepsPerSecond)%(2*F);z=ee<F?ee:2*F-ee,Z=Math.floor(z/2)}if(a){const q=u/M,F=Math.round(z/q),ee=Math.round(Z/q),fe=ae.opt.canvas.cssRemainder?z-F*q:0,he=ae.opt.canvas.cssRemainder?Z-ee*q:0;V.uC.value=M,V.uShiftC.value.set(F,ee),e.setRenderTarget(null),$e.look.clearFinishColour&&(Ph(e),Za.n++),e.autoClear=!1,e.render(this.edgeScene,this.passCam),e.autoClear=!0;const ge=e.domElement,Le=`translate(${(In.baseX+fe)/In.dpr}px, ${(In.baseY-he)/In.dpr}px)`;ge.style.transform!==Le&&(ge.style.transform=Le),this.layout.buffer=[f-2*p,h-2*p],this.layout.scale=u,this.layout.shift=[z,Z],this.layout.texelMetres=S,this.layout.output=[In.w,In.h],this.layout.canvas=[e.domElement.width,e.domElement.height],this.layout.upscale="compositor (hard pixels)",this.layout.passes=["scene","edges (to the canvas)"];return}V.uC.value=1,V.uShiftC.value.set(0,0),e.setRenderTarget(this.post),e.render(this.edgeScene,this.passCam);const se=this.blow.uniforms;se.tCol.value=this.post.texture,se.tDepth.value=this.rt.depthTexture,se.uOrigin.value.set(d+z,g+Z),se.uK.value=u,se.uSize.value.set(f,h),e.setRenderTarget(null),e.autoClear=r,e.render(this.blowScene,this.passCam),e.autoClear=!0,this.layout.buffer=[f-2*p,h-2*p],this.layout.scale=u,this.layout.shift=[z,Z],this.layout.texelMetres=S,this.layout.output=[l,c],this.layout.canvas=[e.domElement.width,e.domElement.height],this.layout.upscale="blow-up pass (hard pixels)",this.layout.passes=["scene","edges","blow-up"]}}function $S(){const e=new Uint8Array(16384);for(let i=0;i<64;i++)for(let s=0;s<64;s++){const r=Math.hypot(s+.5-32,i+.5-32)/32,a=Math.round(255*Math.max(0,1-r)**2);e.set([a,a,a,255],(i*64+s)*4)}const t=new Qn(e,64,64);return t.needsUpdate=!0,t}function YS(){ae.actors.ferries=[],ae.actors.carRoads=[]}const Sa={x:0,y:0,z:0};function bd(n,e,t,i,s){n.ok=!1;const r=e.objects[t.object];if(!r)return n;const a=r.position;if(!Number.isFinite(a.x+a.y+a.z))return n;const o=t.object<(e.followObjects??0),l=o?i.cpu.snapDX:0,c=o?i.cpu.snapDY:0;return ui(s,i.cpu.cellMetres,a.x+l,a.y+c,a.z,Sa),n.x=Sa.x,n.y=Sa.y,n.z=Sa.z,n.yaw=-r.yaw,n.ok=!0,n}function jS(n,e){let t=-1,i=-1,s=null,r=0,a=!1,o=null,l=null;Uc.uRigVoxel.value=Oa.model.voxelMetres;const c={x:0,y:0,z:0,yaw:0,ok:!1},u=(f,h,d,g)=>(bd(c,h,d,g,e),c.ok?(f.position.set(c.x,c.y,c.z),f.rotation.y=c.yaw,!0):!1);return{update(f,h,d,g){t=-1,i=-1,a=!1;const M=d?.poses;if(M){for(const p of M)if(!(p.object<0||p.object>=f.objects.length)&&!g[p.object])switch(p.kind){case"walker":{if(!u(n.walker.root,f,p,h))break;const m=f.objects[p.object].model,y=AS(m);if(y)n.walker.root.position.y-=y.pivotZ*Oa.model.voxelMetres,m!==s&&(n.walker.pose(y.pose,y),n.walkerLow?.pose(y.pose,y),s=m);else{r++;const b=Tr.cycle(p.phase??0,p.gait??0);n.walker.pose(b),n.walkerLow?.pose(b),s=null}const w=f.objects[p.object];lc.uWalkerGain.value=y?Jd(y.level):1;const _=w.tint??16777215;lc.uWalkerTint.value.set((_>>16&255)/255,(_>>8&255)/255,(_&255)/255);const v=w.fade??1,S=n.walkerDissolve?Jf(n.walkerDissolve):void 0,x=l??(v<1&&S?n.walkerDissolve:n.walkerMaterial);if(x!==o&&(n.walker.setMaterial(x),n.walkerLow?.setMaterial(x),o=x),x===n.walkerDissolve&&S){S.share.value=v;const b=w.fadeSeed??0;S.seed.value=b>=0&&b<1?b:0,S.pivot.value.set(m.pivot.x,m.pivot.y,0)}a=!(v>0),n.walker.root.visible=!a,t=p.object,g[p.object]=1;break}case"jet":{if(!u(n.jet,f,p,h))break;n.jet.visible=!0,n.jetOwn.value=hc(f.objects[p.object]),i=p.object,g[p.object]=1;break}}}this.hideUnclaimed()},hideUnclaimed(){(t<0||a)&&(n.walker.root.visible=!1,n.walkerLow&&(n.walkerLow.root.visible=!1)),i<0&&(n.jet.visible=!1)},get unresolvedFrames(){return r},setMark(f){l=f},drawn(f){return f===t?n.walkerLow?.root.visible?n.walkerLow.root:n.walker.root:f===i?n.jet:null}}}const bi=hi.particles,KS=hi.haze.emissiveShare,ZS=hi.shadeLevels[hi.flatShade],Ed=$e.particles.max,JS=ae.plain.actorNightLift,Td=n=>Number.isInteger(n)?n.toFixed(1):String(n),QS=[["P_FLAT_SHADE",ZS],["P_DECAL_BIAS_METRES",bi.decalBiasMetres],["P_NIGHT_LIFT",JS]].map(([n,e])=>`const float ${n} = ${Td(e)};`).join(`
`),ey=`
#include <common>
#include <lights_pars_begin>

${QS}

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
${Hf}

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
`,ty=`
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
`,Xn={x:0,y:0,z:0},fr={x:0,y:0,z:0},dr={x:0,y:0,z:0},wi={x:0,y:0,depthMetres:0,eyeMetres:0,pixelsPerMetre:0},ol={x:0,y:0,depthMetres:0,eyeMetres:0,pixelsPerMetre:0},ll={x:0,y:0,depthMetres:0,eyeMetres:0,pixelsPerMetre:0},ny={x:0,y:0},ya=new Ue;function cl(n,e,t,i,s=0){const r=(e.x-n.eye.x)*n.forward.x+(e.y-n.eye.y)*n.forward.y+(e.z-n.eye.z)*n.forward.z;if(!n.ortho&&!(r>=n.near))return!1;if(Di(n)){const a=n.view.elements;if(Ya(n,a[0]*e.x+a[4]*e.y+a[8]*e.z+a[12],a[1]*e.x+a[5]*e.y+a[9]*e.z+a[13],a[2]*e.x+a[6]*e.y+a[10]*e.z+a[14],i)<=n.near)return!1}return Nc(n,e.x,e.y,e.z,t,i,s),t.pixelsPerMetre>0}class Ih{constructor(e=Ed,t="general"){this.capacity=e,this.take=t,this.geometry.setAttribute("position",new Lt([-1,-1,0,1,-1,0,1,1,0,-1,1,0],3)),this.geometry.setIndex([0,1,2,0,2,3]),this.geometry.instanceCount=0;const i=(s,r)=>{const a=new ds(new Float32Array(Math.max(1,this.capacity)*r),r);return a.setUsage(Hp),this.geometry.setAttribute(s,a),this.attributes.push(a),a};this.centre=i("iCentre",3),this.axisU=i("iAxisU",3),this.axisV=i("iAxisV",3),this.half=i("iHalf",2),this.colour=i("iColour",3),this.pool=i("iPool",3),this.look=i("iLook",4),this.shape=i("iShape",4),this.turn=i("iTurn",1),this.uniforms=Af.merge([Ae.lights,Ae.fog,{uNight:{value:0}}]),Object.assign(this.uniforms,Zi),this.material=new _n({name:"particles",uniforms:this.uniforms,vertexShader:ey,fragmentShader:ty,transparent:!0,premultipliedAlpha:!0,blending:Vs,depthWrite:!1,depthTest:!0,side:$n,fog:!0,lights:!0,defines:t==="fixed"&&$e.particles.fixedFarEpsilon>0?{P_FAR_KEEP:Td(1-$e.particles.fixedFarEpsilon)}:{}}),this.object=new gt(this.geometry,this.material),this.object.name=t==="fixed"?"fixed points":"particles",this.object.frustumCulled=!1}object;drawn=0;dropped=0;geometry=new Pf;material;uniforms;centre;axisU;axisV;half;colour;pool;look;shape;turn;attributes=[];update(e,t,i,s,r=0){this.uniforms.uNight.value=s;const a=i.cpu.cellMetres,o=this.centre.array,l=this.axisU.array,c=this.axisV.array,u=this.half.array,f=this.colour.array,h=this.pool.array,d=this.look.array,g=this.shape.array,M=this.turn.array,p=Math.min(r,e.length),m=qf(i,ny);let y=0;this.dropped=0;const w=this.take==="fixed";for(let _=0;_<e.length;_++){const v=e[_],S=v.fixedPx;if(S!==void 0!==w)continue;const x=v.alpha;if(!(x>0))continue;if(y>=this.capacity){this.dropped++;continue}const b=_<p,E=b?v.position.x+m.x:v.position.x,T=b?v.position.y+m.y:v.position.y,P=v.position.z;if(!Number.isFinite(E+T+P+v.size))continue;ui(i.origin,a,E,T,P,Xn);const L=v.subject===!0?i.cpu.subShare:0,D=L>0&&i.cpu.subOn?Qd(i.cpu,E,T,P/a):0;if(!cl(i,Xn,wi,L,D))continue;const C=i.toGridY,I=wi.pixelsPerMetre*a*C,O=wi.pixelsPerMetre*C,U=wi.x*i.toGridX,$=wi.y*i.toGridY,k=i.gridW,V=i.gridH,X=v.axisA,te=v.axisB,le=!!X&&!!te,z=!!v.soft||le;let Z=0,se=0,q=0,F=0,ee=0,fe=0;if(X&&te){if(ui(i.origin,a,E+X.x,T+X.y,P+X.z,fr),ui(i.origin,a,E+te.x,T+te.y,P+te.z,dr),!cl(i,fr,ol,L,D)||!cl(i,dr,ll,L,D))continue;Z=(ol.x-wi.x)*i.toGridX,se=(ol.y-wi.y)*i.toGridY,q=(ll.x-wi.x)*i.toGridX,F=(ll.y-wi.y)*i.toGridY}else if(w){const De=S;if(v.soft){const Xe=Math.min(bi.softMaxPx,De/2);Z=Xe,F=Xe,ee=Xe/O}else{const Xe=De<1?1:De;if(Math.max(0,Math.floor(U-Xe/2))>=Math.min(k,Math.ceil(U+Xe/2))||Math.max(0,Math.floor($-Xe/2))>=Math.min(V,Math.ceil($+Xe/2)))continue;ee=Xe/2/O}fe=ee}else if(v.soft){const De=Math.min(bi.softMaxPx,v.size*I/2);Z=De,F=De,ee=De/O,fe=ee}else{let De=Math.round(v.size*I);De>=1?De>bi.maxPx&&(De=bi.maxPx):De=1;const Xe=Math.round(U-De/2),xt=Math.round($-De/2);if(Math.max(0,Xe)>=Math.min(k,Xe+De)||Math.max(0,xt)>=Math.min(V,xt+De))continue;ee=De/2/O,fe=ee}if(z){const De=Z*F-se*q;if(Math.abs(De)<bi.softMinPx*Math.max(1,Math.hypot(Z,se,q,F)))continue;const Xe=Math.min(bi.softMaxPx,Math.hypot(Z,q)),xt=Math.min(bi.softMaxPx,Math.hypot(se,F));if(Math.max(0,Math.floor(U-Xe))>=Math.min(k,Math.ceil(U+Xe))||Math.max(0,Math.floor($-xt))>=Math.min(V,Math.ceil($+xt)))continue}const he=v.emissive&&v.glowAdd!==void 0,ge=he?1+v.glowAdd:v.emissive?bi.emissiveAdd:1,Le=v.emissive&&!he?0:1;let ke=0,lt=0,J=0;!v.emissive&&t&&P<=t.topZ&&(E-t.x)**2+(T-t.y)**2<=t.r*t.r&&(ke=t.red,lt=t.green,J=t.blue),ya.setHex(v.colour);const de=y*3,Pe=y*2,Ze=y*4;o[de]=Xn.x,o[de+1]=Xn.y,o[de+2]=Xn.z,l[de]=le?fr.x-Xn.x:0,l[de+1]=le?fr.y-Xn.y:0,l[de+2]=le?fr.z-Xn.z:0,c[de]=le?dr.x-Xn.x:0,c[de+1]=le?dr.y-Xn.y:0,c[de+2]=le?dr.z-Xn.z:0,u[Pe]=ee,u[Pe+1]=fe,f[de]=ya.r,f[de+1]=ya.g,f[de+2]=ya.b,h[de]=ke,h[de+1]=lt,h[de+2]=J,d[Ze]=x>1?1:x,d[Ze+1]=ge,d[Ze+2]=Le,d[Ze+3]=v.emissive?KS:1,g[Ze]=z?1:0,g[Ze+1]=le?1:0,g[Ze+2]=v.emissive?0:1,g[Ze+3]=L,M[y]=D,y++}this.drawn=y,this.geometry.instanceCount=y,w&&(this.object.visible=y>0);for(const _ of this.attributes)_.clearUpdateRanges(),y>0&&(_.addUpdateRange(0,y*_.itemSize),_.needsUpdate=!0)}dispose(){this.geometry.dispose(),this.material.dispose()}}function iy(n=0){const e=new Ih(Ed,"general"),t=new Ih(n,"fixed");return t.object.visible=!1,{object:e.object,fixedObject:t.object,update(i,s,r,a,o){e.update(i,s,r,a,o),t.update(i,s,r,a,o)},get drawn(){return e.drawn+t.drawn},get fixedDrawn(){return t.drawn},get dropped(){return e.dropped+t.dropped},dispose(){e.dispose(),t.dispose()}}}ae.props;const wa=7;function sy(n,e){const t=ae.water,i=t.gridCellMetres;let s=(n.eye.x-n.target.x)/2,r=(n.eye.z-n.target.z)/2;const a=Math.hypot(s,r);return a>t.gridTowardEyeMetres&&(s*=t.gridTowardEyeMetres/a,r*=t.gridTowardEyeMetres/a),e.x=Math.round((n.target.x+s)/i)*i,e.z=Math.round((n.target.z+r)/i)*i,e}function ry(n,e,t,i,s=[]){const r=[];let a=0,o=t;for(;a<n;){r.push(a),a>=e&&(o*=i);const c=s.find(([u])=>a<u);a=Math.min(n,a+(c?Math.min(c[1],c[0]-a):o))}return r.push(n),r.slice(1).reverse().map(c=>-c).concat(r)}function ay(){const n=ae.water;return[[n.gridInnermostHalfMetres,n.gridInnermostCellMetres],[n.gridInnerHalfMetres,n.gridInnerCellMetres]]}function oy(){const n=ae.water,e=ry(n.halfSizeMetres,n.gridFineHalfMetres,n.gridCellMetres,n.gridGrowth,ay()),t=e.length,i=new Float32Array(t*t*3),s=new Float32Array(t*t*3),r=new Float32Array(t*t*2),a=2*n.halfSizeMetres;for(let u=0;u<t;u++)for(let f=0;f<t;f++){const h=u*t+f;i[h*3]=e[f],i[h*3+1]=n.levelMetres,i[h*3+2]=e[u],s[h*3+1]=1,r[h*2]=(e[f]+n.halfSizeMetres)/a,r[h*2+1]=1-(e[u]+n.halfSizeMetres)/a}const o=new Uint32Array((t-1)*(t-1)*6);let l=0;for(let u=0;u+1<t;u++)for(let f=0;f+1<t;f++){const h=u*t+f;o[l++]=h,o[l++]=h+t,o[l++]=h+1,o[l++]=h+1,o[l++]=h+t,o[l++]=h+t+1}const c=new Dt;return c.setAttribute("position",new Lt(i,3)),c.setAttribute("normal",new Lt(s,3)),c.setAttribute("uv",new Lt(r,2)),c.setIndex(Array.from(o)),c}const ly={ground:"ground",building:"building",road:"road"},cy={x:0,z:0};function uy(n){const e=new Dt;return e.setAttribute("position",new tt(n.pos,3)),e.setAttribute("normal",new tt(n.nrm,3)),e.setAttribute("color",new tt(n.col,3,!0)),e.setAttribute("ao",new tt(n.ao,1,!0)),n.fac0&&n.fac1&&(e.setAttribute("fac0",new tt(n.fac0,4)),e.setAttribute("fac1",new tt(n.fac1,4))),n.uv&&e.setAttribute("uv",new tt(n.uv,2)),e.setIndex(new tt(n.idx,1)),e.computeBoundingSphere(),e.computeBoundingBox(),e}function Nh(n){const e=new Dt;e.setAttribute("position",new tt(n.pos,3)),e.setAttribute("normal",new tt(n.nrm,3)),e.setAttribute("color",new tt(n.col,3,!0)),e.setAttribute("col2",new tt(n.col2,3,!0));const t=new Uint8Array(n.glow.length);for(let i=0;i<t.length;i++)t[i]=n.glow[i]*85;return e.setAttribute("glow",new tt(t,1,!0)),e.setAttribute("ao",new tt(n.ao,1,!0)),e.setIndex(new tt(n.idx,1)),e.computeBoundingSphere(),e}const zc=new WeakSet;function ul(n,e,t){if(zc.has(n)){n.needsUpdate=!0;return}const i=n.itemSize,s=n.updateRanges;let r=e*i,a=t*i;for(let o=0;o<s.length;o++)r=Math.min(r,s[o].start),a=Math.max(a,s[o].start+s[o].count);n.clearUpdateRanges(),n.addUpdateRange(r,a-r),n.needsUpdate=!0}function ba(n){n.clearUpdateRanges(),zc.add(n),n.needsUpdate=!0}function Ea(n){n.onUpload(()=>{n.clearUpdateRanges(),zc.delete(n)})}function hy(n){n.traverse(e=>{e.matrixAutoUpdate=!1,e.matrixWorldAutoUpdate=!1})}function fy(n,e){const t=n.index.array,i=n.getAttribute("normal").array,s=[],r=[],a=t.length/3;for(let f=0;f<a;f++){const h=t[f*3],d=new G(i[h*3],i[h*3+1],i[h*3+2]);let g=s.findIndex(M=>M.dot(d)>.999);g<0&&(g=s.length,s.push(d.clone().normalize()),r.push([])),r[g].push(t[f*3],t[f*3+1],t[f*3+2])}const o=new Uint32Array(t.length),l=[0];let c=0;for(const f of r)o.set(f,c),c+=f.length,l.push(c);const u=new Dt;for(const[f,h]of Object.entries(n.attributes))u.setAttribute(f,h);return u.setIndex(new tt(o,1)),u.computeBoundingSphere(),u.computeBoundingBox(),u.addGroup(0,o.length,0),e.push({mesh:null,ranges:l,dirs:s,box:u.boundingBox.clone(),shown:new Uint8Array(s.length),built:!1,lo:null}),u}class dy{constructor(e){this.g=e}at(e,t){const i=this.g,s=(e-i.e0)/i.step,r=(t-i.s0)/i.step;if(s<0||r<0||s>=i.nx||r>=i.ny)return 0;const a=Math.floor(s),o=Math.floor(r),l=s-a,c=r-o,u=i.nx+1,f=i.z[o*u+a],h=i.z[o*u+a+1],d=i.z[(o+1)*u+a],g=i.z[(o+1)*u+a+1];return(f*(1-l)+h*l)*(1-c)+(d*(1-l)+g*l)*c}}class py{scene=new $s;looks=new Map;ground;walker;jet;jetOwn;landmarkGroups={voxel:new mn,smooth:new mn,both:new mn};stats;cars=[];voxFaced=[];farFaced=[];facingEye=new G;facingBack=new G;facingCorner=new G;actorCull=Kn("actors");carLevels=new Map;walkerLow=null;walkerMaterial;walkerDissolve=null;waterPlane;waterGrid;frustum=new ji;sph=new Pn;tmpM=new Ve;treeS1=null;carMeshes=[];carSlot=new Map;carCount=new Int32Array(0);still=[];frozen=[];treeBlocks=[];crownNear=new Dt;crownFar=new Dt;tmpO=new Vt;walkerPhase=0;walkerPath=null;walkerDist=0;walkerStart=new G;walkerHeading=0;gait=0;constructor(e,t={}){const i=performance.now(),s=new vn(e.groundTexture);s.flipY=!1,s.needsUpdate=!0,s.anisotropy=4;const r=new vM(s);this.looks.set("plain",r),this.looks.set("pixel",new qS(s,e.waterMap));const a=E=>this.looks.get(ae.look.mix[E]??"plain")??r,o=(E,T)=>a(E).material(T),l=(E,T)=>(E.traverse(P=>P.layers.set(_s[T])),E),c={},u=(E,T)=>c[E]=(c[E]??0)+T;let f=0;for(const E of e.meshes){const T=E.layer,P=T==="far"?E.kind==="ground"?"farGround":"farBuilding":ly[E.kind]??"road",L=uy(E),D=new gt(L,E.ranges?[o(T,P)]:o(T,P));E.ranges&&(L.addGroup(0,E.idx.length,0),this.farFaced.push({mesh:D,ranges:E.ranges,box:L.boundingBox,shown:-1})),D.name=E.name,D.receiveShadow=!0,D.castShadow=T==="near"&&E.kind==="building",this.scene.add(l(D,T)),this.still.push(D),u(T==="far"?"far":E.kind,E.idx.length/3),f++}const h=new gt(new xs(ae.water.halfSizeMetres*2,ae.water.halfSizeMetres*2),o("near","water"));h.rotation.x=-Math.PI/2,h.position.y=ae.water.levelMetres,h.receiveShadow=!0,h.name="water",this.scene.add(l(h,"near")),this.still.push(h),this.waterPlane=h;const d=new gt(oy(),o("near","water"));d.receiveShadow=!0,d.name="water grid",d.visible=!1,this.scene.add(l(d,"near")),this.still.push(d),this.waterGrid=d,f++;for(const E of e.landmarks){const T=Nh(E.mesh),P=Kn("landmarkFacing")&&E.variant!=="smooth",L=new gt(P?fy(T,this.voxFaced):T,P?[o(E.layer,"voxel")]:o(E.layer,"voxel"));if(L.name=`${E.id} ${E.variant}`,L.castShadow=!P,L.receiveShadow=!0,P){this.voxFaced[this.voxFaced.length-1].mesh=L;const D=new gt(T,o(E.layer,"voxel"));D.name=`${E.id} ${E.variant} caster`,D.castShadow=!0,D.layers.set(sc),this.landmarkGroups[E.variant].add(D)}this.landmarkGroups[E.variant].add(l(L,E.layer)),u(`landmarks ${E.variant}`,E.mesh.idx.length/3)}this.scene.add(this.landmarkGroups.voxel,this.landmarkGroups.smooth,this.landmarkGroups.both),this.still.push(this.landmarkGroups.voxel,this.landmarkGroups.smooth,this.landmarkGroups.both),this.setLandmarkVariant(ae.look.landmarkVariant);const g=new Map,M=new Map;for(const E of e.actors)M.set(E.name,E.voxelMetres??0),g.set(E.name,Nh(E.mesh)),u(`actor ${E.name} (each)`,E.mesh.idx.length/3);const p=ae.actors.jet,m=Wf(o("actors","voxel"));this.jetOwn=$a(m),this.jet=new gt(g.get("jet"),m),this.jet.name="jet",this.jet.castShadow=!0,this.jet.position.set(p.x-ae.origin.x,p.heightMetres,p.y-ae.origin.y),this.jet.rotation.y=-p.heading,this.scene.add(l(this.jet,"actors"));for(const E of ae.actors.ferries){const T=new gt(g.get("ferry"),o("actors","voxel"));T.name="ferry",T.castShadow=!0,T.receiveShadow=!0,T.position.set(E.x-ae.origin.x,ae.water.levelMetres,E.y-ae.origin.y),T.rotation.y=-E.heading,this.scene.add(l(T,"actors"))}const y=ae.actors.carModels.map(E=>`car${E}`),w=[];let _=0;for(const E of ae.actors.carRoads){const T=e.carPaths.filter(P=>P.name===E).map(P=>({p:P,len:my(P)})).sort((P,L)=>L.len-P.len).slice(0,ae.actors.carsPerRoad);for(const{p:P}of T)w.push({p:P,model:_++%y.length})}y.forEach((E,T)=>{const P=w.filter(C=>C.model===T);if(!P.length)return;const L=new ei(g.get(E),o("actors","voxel"),P.length);L.name=`cars ${E}`,L.castShadow=!0,L.frustumCulled=!1,this.scene.add(l(L,"actors")),this.carMeshes.push(L);const D=[{im:L,voxel:M.get(E)??0}];for(let C=2;g.has(`${E} L${C}`);C++){const I=new ei(g.get(`${E} L${C}`),o("actors","voxel"),P.length);I.name=`cars ${E} L${C}`,I.castShadow=!0,I.frustumCulled=!1,I.count=0,this.scene.add(l(I,"actors")),this.carMeshes.push(I),D.push({im:I,voxel:M.get(`${E} L${C}`)??0})}D.length>1&&this.carLevels.set(L,D),P.forEach(({p:C},I)=>{const O=hl(C);this.cars.push({obj:L,slot:I,m:new Ve,pos:new G,path:C,cum:O,s:O[O.length-1]*ae.actors.carStartShare})})}),this.carMeshes.forEach((E,T)=>this.carSlot.set(E,T)),this.carCount=new Int32Array(this.carMeshes.length),this.walkerMaterial=o("actors",t.gameWalker?"walker":"part");const v=a("actors");t.gameWalker&&v.makeWalkerDissolve&&(this.walkerDissolve=v.makeWalkerDissolve()),this.walker=new Tr(this.walkerMaterial);const S=ae.actors.walker;this.ground=new dy(e.groundGrid),this.walkerStart.set(S.x-ae.origin.x,0,S.y-ae.origin.y),this.walkerHeading=S.heading;let x=null;for(const E of e.carPaths){if(E.name!==S.street)continue;const T=hl(E);for(let P=0;P+1<E.pts.length/3;P++){const L=E.pts[P*3],D=E.pts[P*3+2],C=E.pts[P*3+3],I=E.pts[P*3+5],O=C-L,U=I-D,$=O*O+U*U||1,k=Math.max(0,Math.min(1,((this.walkerStart.x-L)*O+(this.walkerStart.z-D)*U)/$)),V=Math.hypot(L+O*k-this.walkerStart.x,D+U*k-this.walkerStart.z);(!x||V<x.d)&&(x={p:E,d:V,s:T[P]+k*(T[P+1]-T[P])})}}if(x){const E=hl(x.p),T=new Vt;fl(T,x.p,E,Math.min(E[E.length-1],x.s+.5));const P=Math.cos(-T.rotation.y-S.heading)>0;this.walkerPath={p:x.p,cum:E,s0:x.s,dir:P?1:-1}}this.scene.add(l(this.walker.root,"actors")),u("walker",this.walker.triangles),this.actorCull&&ae.opt.actors.walkerLowOn&&(this.walkerLow=yS(this.walkerMaterial),this.walkerLow.root.name="walker low",this.walkerLow.root.visible=!1,this.scene.add(l(this.walkerLow.root,"actors")),u("walker low",this.walkerLow.triangles));const b={};for(const E of e.instances)b[E.kind]=E.count,E.count&&(E.kind==="tree"&&Kn("trees")&&ae.look.mix.near==="pixel"?this.treesS1(E.data,E.count,o("near","crown"),o("near","trunk"),l,u):E.kind==="tree"?this.trees(E.data,E.count,o("near","crown"),o("near","trunk"),l,u):this.lamps(E.data,E.count,o("near","lampPole"),o("near","lampHead"),o("near","lampPool"),l,u));if(this.stats={meshes:f,triangles:c,instances:b,uploadMs:performance.now()-i},this.update(0),$e.frameWork.freezeStatic){this.scene.updateMatrixWorld();for(const E of this.still)hy(E);this.frozen=this.still}}get stillObjects(){return this.frozen}get frameWorkActs(){return{treeSlots:!!this.treeS1&&this.treeS1.nearCrowns.count>0,facingCache:this.farFaced.length+this.voxFaced.length>0}}setLandmarkVariant(e){this.landmarkGroups.voxel.visible=e==="voxel",this.landmarkGroups.smooth.visible=e==="smooth"}trees(e,t,i,s,r,a){const o=ae.props,l=(w,_,v,S)=>{const x=new Xa(1,o.treeDetail);x.deleteAttribute("normal"),x.deleteAttribute("uv");const b=Sh(x);return b.computeVertexNormals(),b.scale(S,S,S),b.translate(w,_,v),b};this.crownNear=oc(o.treeLobes.map(([w,_,v,S])=>l(w,_,v,S))),this.crownFar=l(0,0,0,1);const c=new wr(o.treeTrunkRadiusMetres*o.trunkTaper,o.treeTrunkRadiusMetres,1,o.trunkSegments,1,!0);c.translate(0,.5,0);const u=ae.blockChunks*320,f=new Map;for(let w=0;w<t;w++){const _=w*wa,v=`${Math.floor((e[_]+ae.origin.x)/u)},${Math.floor((e[_+2]+ae.origin.y)/u)}`;let S=f.get(v);S||f.set(v,S=[]),S.push(w)}const h=new Ve,d=new Jn,g=new G,M=new G,p=new Ue,m=new G(0,1,0);for(const[w,_]of f){const v=new ei(this.crownNear,i,_.length),S=new ei(c,s,_.length);_.forEach((x,b)=>{const E=x*wa,T=e[E+3],P=e[E+4],L=e[E+5],D=e[E+6],C=P*o.treeTrunkShare,I=T/2,O=Math.max(I*o.crownMinHeightShare,(P-C)/2);d.setFromAxisAngle(m,L),h.compose(g.set(e[E],e[E+1]+C+O*o.crownSeat,e[E+2]),d,M.set(I,O,I)),v.setMatrixAt(b,h),v.setColorAt(b,p.setHex(o.treeColours[Math.floor(D*o.treeColours.length)%o.treeColours.length])),h.compose(g.set(e[E],e[E+1],e[E+2]),d,M.set(1,C+O*o.trunkIntoCrown,1)),S.setMatrixAt(b,h)});for(const x of[v,S])x.castShadow=!0,x.receiveShadow=!0,x.computeBoundingSphere(),this.scene.add(r(x,"near")),this.still.push(x);v.name=`tree crowns ${w}`,S.name=`tree trunks ${w}`,this.treeBlocks.push(v)}const y=w=>(w.index?w.index.count:w.getAttribute("position").count)/3;a("trees (near crowns)",t*(y(this.crownNear)+y(c)))}treesS1(e,t,i,s,r,a){const o=ae.props,l=(z,Z,se,q)=>{const F=new Xa(1,o.treeDetail);F.deleteAttribute("normal"),F.deleteAttribute("uv");const ee=Sh(F);return ee.computeVertexNormals(),ee.scale(q,q,q),ee.translate(z,Z,se),ee};this.crownNear=oc(o.treeLobes.map(([z,Z,se,q])=>l(z,Z,se,q)));const c=new wr(o.treeTrunkRadiusMetres*o.trunkTaper,o.treeTrunkRadiusMetres,1,o.trunkSegments,1,!0);c.translate(0,.5,0);const u=new Float32Array(t*16),f=new Float32Array(t*16),h=new Float32Array(t*3),d=new Float32Array(t*3),g=new Float32Array(t),M=new Float32Array(t*4),p=new Float32Array(t*4),m=new Float32Array(t*4),y=new Ve,w=new Jn,_=new G,v=new G,S=new Ue,x=new G(0,1,0),b=Math.max(...o.treeLobes.map(([z,,Z,se])=>Math.hypot(z,Z)+se)),E=Math.max(...o.treeLobes.map(([,z,,Z])=>z+Z));for(let z=0;z<t;z++){const Z=z*wa,se=e[Z+3],q=e[Z+4],F=e[Z+5],ee=e[Z+6],fe=q*o.treeTrunkShare,he=se/2,ge=Math.max(he*o.crownMinHeightShare,(q-fe)/2),Le=fe+ge*o.crownSeat,ke=fe+ge*o.trunkIntoCrown;w.setFromAxisAngle(x,F),y.compose(_.set(e[Z],e[Z+1]+Le,e[Z+2]),w,v.set(he,ge,he)),y.toArray(u,z*16),y.compose(_.set(e[Z],e[Z+1],e[Z+2]),w,v.set(1,ke,1)),y.toArray(f,z*16),S.setHex(o.treeColours[Math.floor(ee*o.treeColours.length)%o.treeColours.length]),h.set([S.r,S.g,S.b],z*3);const lt=Le+ge*E,J=he*b+o.treeTrunkRadiusMetres,de=lt/2,Pe=Math.hypot(lt/2,J);d.set([e[Z],e[Z+1]+de,e[Z+2]],z*3),g[z]=Pe,M.set([e[Z],e[Z+1],e[Z+2],F],z*4),p.set([he,ge,Le,ke],z*4),m.set([de,Pe,0,0],z*4)}const T=(z,Z,se)=>{const q=new ei(z,Z,t);return q.count=0,q.frustumCulled=!1,q.name=se,q.setColorAt(0,S.setRGB(1,1,1)),q},P=T(this.crownNear,i,"tree crowns near"),L=T(c,s,"tree trunks near");Ea(P.instanceMatrix),Ea(P.instanceColor),Ea(L.instanceMatrix),Ea(L.instanceColor);const D=Math.max(1,ae.opt.shadow.spreadOn?ae.opt.shadow.buildFrames:1),C=Math.ceil(t/D)+1,I=[],O=[];for(let z=0;z<D;z++){const Z=new ei(this.crownNear,i,C),se=new ei(c,s,C);Z.name="tree crowns casters",se.name="tree trunks casters";for(const q of[Z,se])q.count=0,q.frustumCulled=!1,q.setColorAt(0,S.setRGB(1,1,1)),q.castShadow=!0,q.receiveShadow=!1,q.visible=!1,q.userData.buildGroup=z,q.layers.set(sc),this.scene.add(q);I.push(Z),O.push(se)}for(const z of[P,L])z.castShadow=!1,z.receiveShadow=!0,this.scene.add(r(z,"near"));const U=new Pf;U.setAttribute("position",new Lt([-1,-1,0,1,-1,0,1,1,0,-1,1,0],3)),U.setAttribute("normal",new Lt([0,0,1,0,0,1,0,0,1,0,0,1],3)),U.setIndex([0,1,2,0,2,3]),U.setAttribute("iBase",new ds(M,4)),U.setAttribute("iShape",new ds(p,4)),U.setAttribute("iSphere",new ds(m,4)),U.setAttribute("iColour",new ds(h,3)),U.instanceCount=t;const $=this.looks.get("pixel"),k=c.getAttribute("position").array,V=c.getAttribute("normal").array,X=$.treeImpostorMaterial({crownPos:this.crownNear.getAttribute("position").array,crownIdx:this.crownNear.index.array,lobeCentres:o.treeLobes.map(([z,Z,se])=>[z,Z,se]),trunkPos:k,trunkNrm:V,trunkSegments:o.trunkSegments}),te=new gt(U,X);te.name="tree impostors",te.frustumCulled=!1,te.castShadow=!1,te.receiveShadow=!0,this.scene.add(r(te,"near")),Na.uMeshMetres.value=ae.opt.trees.meshMetres,Na.uOverlap.value=ae.opt.trees.overlapMetres,this.treeS1={n:t,crownM:u,trunkM:f,colour:h,centre:d,radius:g,nearCrowns:P,nearTrunks:L,castCrowns:I,castTrunks:O,impostor:te,nearSlot:new Int32Array(t).fill(-1)},this.still.push(P,L,...I,...O,te);const le=z=>(z.index?z.index.count:z.getAttribute("position").count)/3;a("trees (mesh, each)",le(this.crownNear)+le(c)),a("trees (impostor, each)",2)}treeInto(e,t,i,s){const r=this.treeS1,a=e.instanceMatrix.array,o=t.instanceMatrix.array,l=e.instanceColor.array,c=i*16,u=s*16;for(let f=0;f<16;f++)a[u+f]=r.crownM[c+f],o[u+f]=r.trunkM[c+f];l[s*3]=r.colour[i*3],l[s*3+1]=r.colour[i*3+1],l[s*3+2]=r.colour[i*3+2]}treeCasters(e){const t=this.treeS1;if(!t)return;const i=new G,s=t.castCrowns.length,r=new Array(s).fill(0);let a=0;for(let o=0;o<t.n;o++){if(i.fromArray(t.centre,o*3),!e(i,t.radius[o]))continue;const l=a++%s;this.treeInto(t.castCrowns[l],t.castTrunks[l],o,r[l]++)}for(let o=0;o<s;o++)for(const l of[t.castCrowns[o],t.castTrunks[o]])l.count=r[o],l.visible=r[o]>0,l.instanceMatrix.needsUpdate=!0,l.instanceColor&&(l.instanceColor.needsUpdate=!0)}farFacings(e){if(this.voxFacings(e),!this.farFaced.length)return;const t=$e.frameWork.facingCache,i=e.isOrthographicCamera===!0;e.updateMatrixWorld();const s=e.matrixWorld.elements,r=s[12],a=s[14],o=-s[8],l=-s[10],c=1;for(const u of this.farFaced){const f=u.box,h=i?(l>-1e-4?1:0)|(o<1e-4?2:0)|(l<1e-4?4:0)|(o>-1e-4?8:0):(a<f.max.z+c?1:0)|(r>f.min.x-c?2:0)|(a>f.min.z-c?4:0)|(r<f.max.x+c?8:0);if(t&&h===u.shown)continue;u.shown=h;const d=u.mesh.geometry;d.clearGroups();const g=u.ranges;let M=g[0],p=g[1];for(let m=0;m<4;m++)h&1<<m&&(g[m+1]===p||(p>M&&d.addGroup(M,p-M,0),M=g[m+1]),p=g[m+2]);p>M&&d.addGroup(M,p-M,0)}}voxFacings(e){if(!this.voxFaced.length)return;const t=$e.frameWork.facingCache,i=e.isOrthographicCamera===!0;e.updateMatrixWorld();const s=e.matrixWorld.elements,r=this.facingEye.set(s[12],s[13],s[14]),a=this.facingBack.set(s[8],s[9],s[10]),o=this.facingCorner;for(const l of this.voxFaced){if(!l.lo){l.lo=new Float64Array(l.dirs.length);for(let d=0;d<l.dirs.length;d++){const g=l.dirs[d];let M=1/0;for(let p=0;p<8;p++)o.set(p&1?l.box.max.x:l.box.min.x,p&2?l.box.max.y:l.box.min.y,p&4?l.box.max.z:l.box.min.z),M=Math.min(M,g.dot(o));l.lo[d]=M}}let c=!l.built||!t;for(let d=0;d<l.dirs.length;d++){const g=l.dirs[d],M=(i?g.dot(a)>-.001:g.dot(r)>l.lo[d]-1)?1:0;l.shown[d]!==M&&(l.shown[d]=M,c=!0)}if(!c)continue;l.built=!0;const u=l.mesh.geometry;u.clearGroups();let f=-1,h=-1;for(let d=0;d<l.dirs.length;d++)!l.shown[d]||l.ranges[d+1]===l.ranges[d]||(l.ranges[d]===h||(h>f&&u.addGroup(f,h-f,0),f=l.ranges[d]),h=l.ranges[d+1]);h>f&&u.addGroup(f,h-f,0)}}setWaterGrid(e,t){if(this.waterGrid.visible=e,this.waterPlane.visible=!e,!e||!t)return;const i=sy(t,cy),s=this.waterGrid;s.position.x===i.x&&s.position.z===i.z||(s.position.set(i.x,0,i.z),s.updateMatrix(),s.matrixWorld.copy(s.matrix))}cullActors(e,t,i,s,r=null){if(!this.actorCull)return;e.updateMatrixWorld(),this.frustum.setFromProjectionMatrix(this.tmpM.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse));const a=this.carCount;a.fill(0);for(const l of this.cars){const c=ae.opt.actors.cullMarginMetres+2*t(l.pos);if(this.sph.center.copy(l.pos),this.sph.radius=c,!(r&&r.on?r.intersectsSphere(l.pos.x,l.pos.y,l.pos.z,c):this.frustum.intersectsSphere(this.sph))&&!(i&&i(l.pos,c)))continue;let f=l.obj;const h=this.carLevels.get(l.obj);if(h&&Kn("carLevels")){const g=ae.opt.carLevels.maxErrorPx*t(l.pos);for(const M of h)M.voxel<=g&&(f=M.im)}const d=this.carSlot.get(f);f.setMatrixAt(a[d],l.m),a[d]++}for(let l=0;l<this.carMeshes.length;l++){const c=this.carMeshes[l];c.count=a[l],c.visible=c.count>0,c.instanceMatrix.needsUpdate=!0}const o=this.walkerLow;if(o){const l=this.walker.root,c=1.8/Math.max(1e-6,t(l.position)),u=!s&&c<ae.opt.actors.walkerLowPx;o.root.visible=u,l.visible=!u,u&&(o.root.position.copy(l.position),o.root.rotation.copy(l.rotation))}}treeLod(e){const t=this.treeS1;if(t){Na.uLodEye.value.copy(e);const i=ae.opt.trees.meshMetres,s=i*i,r=t.nearSlot;if(!$e.frameWork.treeSlots){let c=0;for(let u=0;u<t.n;u++){const f=t.centre[u*3]-e.x,h=t.centre[u*3+1]-e.y,d=t.centre[u*3+2]-e.z;f*f+h*h+d*d>s||(r[c]=u,this.treeInto(t.nearCrowns,t.nearTrunks,u,c++))}ba(t.nearCrowns.instanceMatrix),ba(t.nearCrowns.instanceColor),ba(t.nearTrunks.instanceMatrix),ba(t.nearTrunks.instanceColor),t.nearCrowns.count=c,t.nearCrowns.visible=c>0,t.nearTrunks.count=c,t.nearTrunks.visible=c>0;return}let a=0,o=-1,l=-1;for(let c=0;c<t.n;c++){const u=t.centre[c*3]-e.x,f=t.centre[c*3+1]-e.y,h=t.centre[c*3+2]-e.z;u*u+f*f+h*h>s||(r[a]!==c&&(r[a]=c,this.treeInto(t.nearCrowns,t.nearTrunks,c,a),o<0&&(o=a),l=a+1),a++)}o>=0&&(ul(t.nearCrowns.instanceMatrix,o,l),ul(t.nearTrunks.instanceMatrix,o,l),ul(t.nearCrowns.instanceColor,o,l)),t.nearCrowns.count=a,t.nearCrowns.visible=a>0,t.nearTrunks.count=a,t.nearTrunks.visible=a>0;return}for(const i of this.treeBlocks){const s=i.boundingSphere,a=(s?Math.max(0,s.center.distanceTo(e)-s.radius):0)>ae.props.treeLodMetres;i.geometry=a?this.crownFar:this.crownNear,i.castShadow=!a}}lamps(e,t,i,s,r,a,o){const l=ae.props,c=new wr(l.lampRadiusMetres,l.lampRadiusMetres*l.lampPoleTaper,1,6);c.translate(0,.5,0);const u=new Tc(.5,l.lampHeadDetail),f=new xs(1,1);f.rotateX(-Math.PI/2);const h=new ei(c,i,t),d=new ei(u,s,t),g=new ei(f,r,t),M=new Ve,p=new Jn,m=new G,y=new G;for(let w=0;w<t;w++){const _=w*wa,v=e[_+4],S=e[_+3];M.compose(m.set(e[_],e[_+1],e[_+2]),p,y.set(1,v,1)),h.setMatrixAt(w,M),M.compose(m.set(e[_],e[_+1]+v,e[_+2]),p,y.set(S,S*l.lampHeadSquash,S)),d.setMatrixAt(w,M),M.compose(m.set(e[_],e[_+1]+l.lampPoolLiftMetres,e[_+2]),p,y.set(l.lampPoolMetres*2,1,l.lampPoolMetres*2)),g.setMatrixAt(w,M)}for(const w of[h,d,g])w.computeBoundingSphere(),this.scene.add(a(w,"near")),this.still.push(w);h.castShadow=!0,h.name="lamp poles",d.name="lamp heads",g.name="lamp pools",o("lamps",t*(c.index.count/3+u.getAttribute("position").count/3+2))}update(e){for(const l of this.cars){const c=l.cum[l.cum.length-1],u=(l.s+e*ae.actors.carSpeedMps)%c;fl(this.tmpO,l.path,l.cum,u),this.tmpO.updateMatrix(),l.m.copy(this.tmpO.matrix),l.pos.copy(this.tmpO.position),this.actorCull||l.obj.setMatrixAt(l.slot,this.tmpO.matrix)}if(!this.actorCull)for(const l of this.carMeshes)l.instanceMatrix.needsUpdate=!0;const t=this.gait>ae.actors.runFromGait?ae.actors.runSpeedMps:ae.actors.walkSpeedMps,i=this.walkerPath,s=i?i.dir>0?i.cum[i.cum.length-1]-i.s0:i.s0:ae.actors.walkLoopMetres;this.walkerDist=e*t%Math.max(1,Math.min(ae.actors.walkLoopMetres,s)),this.walkerPhase=this.walkerDist/Tr.strideMetres(this.gait)%1;let r,a;if(i)fl(this.tmpO,i.p,i.cum,i.s0+i.dir*this.walkerDist),r=this.tmpO.position.x,a=this.tmpO.position.z,this.walkerHeading=-this.tmpO.rotation.y+(i.dir>0?0:Math.PI);else{const l=Math.sin(this.walkerHeading),c=-Math.cos(this.walkerHeading);r=this.walkerStart.x+l*this.walkerDist,a=this.walkerStart.z+c*this.walkerDist}this.walker.root.position.set(r,this.ground.at(r,a)+ae.actors.walkerLiftMetres,a),this.walker.root.rotation.y=-this.walkerHeading;const o=Tr.cycle(this.walkerPhase,this.gait);this.walker.pose(o),this.walkerLow?.pose(o)}}function my(n){let e=0;for(let t=3;t<n.pts.length;t+=3)e+=Math.hypot(n.pts[t]-n.pts[t-3],n.pts[t+2]-n.pts[t-1]);return e}function hl(n){const e=n.pts.length/3,t=new Float32Array(e);for(let i=1;i<e;i++)t[i]=t[i-1]+Math.hypot(n.pts[i*3]-n.pts[i*3-3],n.pts[i*3+2]-n.pts[i*3-1]);return t}function fl(n,e,t,i){let s=1;for(;s<t.length-1&&t[s]<i;)s++;const r=s-1,a=(i-t[r])/Math.max(1e-6,t[s]-t[r]),o=e.pts,l=o[r*3]+(o[s*3]-o[r*3])*a,c=o[r*3+1]+(o[s*3+1]-o[r*3+1])*a,u=o[r*3+2]+(o[s*3+2]-o[r*3+2])*a;n.position.set(l,c,u);const f=o[s*3]-o[r*3],h=o[s*3+2]-o[r*3+2];n.rotation.y=Math.atan2(-f,-h)}const zt=ae.plain,Ad=new Set([Mr,cp]),cc=new WeakSet;function Rd(n){const e=n.shadowMap;if(cc.has(e))return;cc.add(e);const t=e.render,i=n.state.buffers.color,s=new Set;let r=n.renderBufferDirect,a=n.clear;const o=f=>{s.delete(f.target)},l=(f,h,d,g,M,p)=>{g.isMeshDepthMaterial===!0&&g!==M.customDepthMaterial&&(g.colorWrite=!1,s.has(g)||(s.add(g),g.addEventListener("dispose",o))),r.call(n,f,h,d,g,M,p)},c=(f=!0,h=!0,d=!0)=>{f&&i.setMask(!0),a.call(n,f,h,d)};let u=0;e.render=function(f,h,d){if(u>0||!e.enabled||!e.autoUpdate&&!e.needsUpdate||f.length===0){t.call(this,f,h,d);return}if(!$e.look.shadowDepthOnly||!Ad.has(e.type)){for(const g of s)g.colorWrite=!0;s.clear(),t.call(this,f,h,d);return}r=n.renderBufferDirect,a=n.clear,i.setMask(!0),n.renderBufferDirect=l,n.clear=c,u++;try{t.call(this,f,h,d)}finally{n.renderBufferDirect=r,n.clear=a,u--}}}const uc=n=>$e.look.shadowDepthOnly&&Ad.has(n.shadowMap.type)&&cc.has(n.shadowMap);class gy{tod=ep();sun=new zo(16777215,1);hemi=new Gm(16777215,16777215,1);fog=new wc(16777215,1e3,1e4);sky;skyMat;lightDir=new G;sunMoving=null;cache={valid:!1,centre:new G,half:0,dir:new G,redraws:0,oneFrame:0,rebuilds:0};sunBuild=null;build=null;casters=null;buildScene=new $s;buildCam=new vs;renderer=null;scene=null;buildTriangles=0;lastFocus=new G;hasLastFocus=!1;prevFocus=new G;onStaticBox=null;lx=new G;ly=new G;lightAxes=[this.lx,this.ly];focusV=new G;offsetV=new G;leadV=new G;stepV=new G;probeV=new G;savedDir=new G;wasCasting=[];ambLinear=[0,0,0];sunLinear=[0,0,0];constructor(e){if(this.sun.castShadow=!0,this.sun.shadow.mapSize.set(zt.shadowMapSize,zt.shadowMapSize),this.sun.shadow.bias=zt.shadowBias,this.sun.shadow.camera.layers.enableAll(),Kn("shadow")){this.sun.shadow.camera.layers.mask=12|1<<sc,this.sun.shadow.autoUpdate=!1;const t=new zo(16777215,0);if(t.castShadow=!0,t.shadow.mapSize.set(zt.shadowMapSize,zt.shadowMapSize),t.shadow.bias=zt.shadowBias,t.shadow.camera.layers.mask=16,t.layers.enableAll(),this.sunMoving=t,ae.opt.shadow.spreadOn){const i=new zo(16777215,0);i.castShadow=!0,i.shadow.mapSize.set(zt.shadowMapSize,zt.shadowMapSize),i.shadow.bias=zt.shadowBias,i.shadow.autoUpdate=!1,i.shadow.camera.layers.mask=this.sun.shadow.camera.layers.mask,this.sunBuild=i,this.buildScene.add(i,i.target)}}this.scene=e,this.sun.layers.enableAll(),this.hemi.layers.enableAll(),e.add(this.sun,this.sun.target,this.hemi),this.sunMoving&&e.add(this.sunMoving,this.sunMoving.target),e.fog=this.fog,this.skyMat=new _n({uniforms:{uZenith:{value:new Ue},uMid:{value:new Ue},uHorizon:{value:new Ue},uMidShare:{value:zt.skyMidShare}},vertexShader:"varying vec3 vDir; void main() { vDir = normalize(position); vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0); gl_Position = p.xyww; }",fragmentShader:`uniform vec3 uZenith; uniform vec3 uMid; uniform vec3 uHorizon; uniform float uMidShare; varying vec3 vDir;
        void main() { float e = clamp(vDir.y, 0.0, 1.0); vec3 c = e < uMidShare ? mix(uHorizon, uMid, e / uMidShare) : mix(uMid, uZenith, (e - uMidShare) / (1.0 - uMidShare));
          gl_FragColor = vec4(c, 1.0);
          #include <colorspace_fragment>
        }`,side:xn,depthWrite:!1,depthTest:!1,fog:!1}),this.sky=new gt(new Ac(1,24,12),this.skyMat),this.sky.name="sky",this.sky.frustumCulled=!1,this.sky.renderOrder=-1e3,e.add(this.sky)}setHour(e,t){const i=this.tod;tp(i,e);const s=zt.gamma;this.lightDir.set(i.lightDir[0],i.lightDir[2],i.lightDir[1]).normalize();const r=this.ambLinear,a=this.sunLinear;for(let c=0;c<r.length;c++)r[c]=Math.pow(i.ambient[c],s)*zt.ambientStrength,a[c]=(Math.pow(i.ambient[c]+i.sun[c],s)-Math.pow(i.ambient[c],s))*zt.sunStrength;this.sun.color.setRGB(a[0],a[1],a[2]),this.sun.intensity=Math.PI,this.hemi.color.setRGB(r[0],r[1],r[2]),this.hemi.groundColor.setRGB(r[0]*zt.hemiGroundShare,r[1]*zt.hemiGroundShare,r[2]*zt.hemiGroundShare),this.hemi.intensity=Math.PI,this.fog.color.setHex(i.haze),this.fog.near=t[0],this.fog.far=t[1],this.skyMat.uniforms.uZenith.value.setHex(i.zenith),this.skyMat.uniforms.uMid.value.setHex(i.skyMid),this.skyMat.uniforms.uHorizon.value.setHex(i.horizon),Nr.uNight.value=i.night;const[o,l]=ae.pixel.night.shadowOffNight;Qf.skip=Kn("shadow")&&ae.opt.shadow.skipWhenFaded&&i.night>=l&&l>o}axes(){const e=this.lightDir;this.lx.set(0,1,0).cross(e),this.lx.lengthSq()<1e-12&&this.lx.set(1,0,0),this.lx.normalize(),this.ly.copy(e).cross(this.lx).normalize()}snapLight(e,t,i){const s=e.dot(this.lx),r=e.dot(this.ly);return i.copy(e).addScaledVector(this.lx,Math.round(s/t)*t-s).addScaledVector(this.ly,Math.round(r/t)*t-r)}place(e,t,i,s){const r=e.shadow.camera;r.left=-i,r.right=i,r.top=i,r.bottom=-i,r.near=1,r.far=i*6,r.updateProjectionMatrix(),e.shadow.mapSize.x!==s&&e.shadow.mapSize.set(s,s),e.shadow.normalBias=zt.shadowNormalBiasTexels*(2*i/s),e.target.position.copy(t),e.position.copy(t).addScaledVector(this.lightDir,i*3),e.target.updateMatrixWorld(),e.updateMatrixWorld()}fitShadow(e,t,i){if(this.sunMoving){this.fitSplit(e,t),this.sky.position.copy(i.position),this.sky.scale.setScalar(zt.skyRadiusMetres);return}const s=this.sun.shadow.camera;s.left=-t,s.right=t,s.top=t,s.bottom=-t,s.near=1,s.far=t*6,s.updateProjectionMatrix();const r=2*t/zt.shadowMapSize;this.sun.shadow.normalBias=zt.shadowNormalBiasTexels*r;const a=Math.round(e.x/r)*r,o=Math.round(e.z/r)*r;if(this.sun.target.position.set(a,e.y,o),this.sun.position.set(a+this.lightDir.x*t*3,e.y+this.lightDir.y*t*3,o+this.lightDir.z*t*3),this.sun.target.updateMatrixWorld(),this.sun.updateMatrixWorld(),this.onStaticBox&&(this.cache.centre.x!==a||this.cache.centre.z!==o||this.cache.half!==t)){this.cache.centre.set(a,e.y,o),this.cache.half=t,this.axes();const l=this.cache.centre.clone(),c=this.lx.clone(),u=this.ly.clone();this.onStaticBox((f,h)=>{const d=f.clone().sub(l);return Math.abs(d.dot(c))<t+h&&Math.abs(d.dot(u))<t+h})}this.sky.position.copy(i.position),this.sky.scale.setScalar(zt.skyRadiusMetres)}attach(e){this.renderer=e,Rd(e)}fitSplit(e,t){const i=ae.opt.shadow,s=zt.shadowMapSize,r=2*t/s;this.axes(),this.buildTriangles=0;const a=i.lightSpaceSnap?this.snapLight(e,r,this.focusV):this.focusV.copy(e),o=this.hasLastFocus;this.prevFocus.copy(this.lastFocus),this.lastFocus.copy(a),this.hasLastFocus=!0,this.place(this.sunMoving,a,t,s);const l=2*Math.round(s*(1+i.marginShare)/2),c=l*r/2,u=this.cache,f=this.offsetV.copy(a).sub(u.centre),h=u.valid&&Math.abs(u.half-c)<1e-6*c,d=u.valid&&u.dir.angleTo(this.lightDir)>i.sunStepRad,g=!!this.sunBuild&&!!this.renderer&&!!this.scene,M=h&&(g||!d)&&Math.abs(f.dot(this.lx))+t<=c&&Math.abs(f.dot(this.ly))+t<=c,p=this.leadV.set(0,0,0);if(h&&(p.copy(this.lx).multiplyScalar(f.dot(this.lx)).addScaledVector(this.ly,f.dot(this.ly)),p.lengthSq()>1e-6?p.normalize().multiplyScalar(Math.min(i.leadShare*t,i.leadMarginShare*Math.max(0,c-t))):p.set(0,0,0)),M){if(g)if(this.build)this.buildStep();else{const y=c-t;let w=y;for(let _=0;_<this.lightAxes.length;_++){const v=this.lightAxes[_],S=f.dot(v),x=o?this.stepV.copy(a).sub(this.prevFocus).dot(v):0;w=Math.min(w,x>1e-9?y-S:x<-1e-9?y+S:y-Math.abs(S))}if(y<=0||w<=(1-i.rebuildAtShare)*y||d){globalThis.__shdbg&&console.log("rebuild",JSON.stringify({f:a.toArray().map(Math.round),c:u.centre.toArray().map(Math.round),left:Math.round(w),margin:Math.round(y),half:t,sunTurned:d,lead:p.toArray().map(Math.round)}));const _=new G().copy(a).add(p);this.build={centre:this.snapLight(_,r,_),dir:this.lightDir.clone(),halfS:c,sizeS:l,chunk:0,group:new Map},this.buildStep()}}return}this.build=null;const m=new G().copy(a).add(p);this.snapLight(m,r,m),this.place(this.sun,m,c,l),this.sun.shadow.needsUpdate=!0,u.valid=!0,u.centre.copy(m),u.half=c,u.dir.copy(this.lightDir),u.redraws++,u.oneFrame++,this.onStaticBox?.(this.boxTest(m,c))}boxTest(e,t){const i=this.lx.clone(),s=this.ly.clone(),r=new G;return(a,o)=>(r.copy(a).sub(e),Math.abs(r.dot(i))<t+o&&Math.abs(r.dot(s))<t+o)}invalidateCasters(){this.casters=null}stillCasters(){if(this.casters)return this.casters;const e=this.sun.shadow.camera.layers,t=[];return this.scene.traverse(i=>{i.isMesh&&i.castShadow&&i.layers.test(e)&&t.push(i)}),this.casters=t}buildStep(){const e=this.build,t=this.sunBuild,i=this.renderer,s=ae.opt.shadow.buildFrames,r=this.stillCasters();if(e.chunk===0){this.savedDir.copy(this.lightDir),this.lightDir.copy(e.dir),this.place(t,e.centre,e.halfS,e.sizeS),this.lightDir.copy(this.savedDir),t.shadow.updateMatrices(t),this.onStaticBox?.(this.boxTest(e.centre,e.halfS));const p=t.shadow.getFrustum(),m=new Array(s).fill(0),y=_=>{const v=_.geometry,S=(v.index?v.index.count:v.getAttribute("position").count)/3,x=_.isInstancedMesh?_.count:1;return S*x},w=[];for(const _ of r){const v=_.visible?_.frustumCulled&&!_.intersectsFrustum(p)?0:y(_):0,S=_.userData.buildGroup;S!==void 0?(e.group.set(_,S%s),m[S%s]+=v):w.push([_,v])}w.sort((_,v)=>v[1]-_[1]);for(const[_,v]of w){let S=0;for(let x=1;x<s;x++)m[x]<m[S]&&(S=x);e.group.set(_,S),m[S]+=v}}const a=this.wasCasting;a.length=r.length;for(let p=0;p<r.length;p++)a[p]=r[p].castShadow,r[p].castShadow=e.group.get(r[p])===e.chunk;const o=i.shadowMap,l=o.needsUpdate,c=i.clear,u=i.autoClear,f=o.render,h=i.info.render.triangles,d=this.scene;o.needsUpdate=!0,t.shadow.needsUpdate=!0,e.chunk>0&&(i.clear=()=>{}),i.autoClear=!1,o.render=(p,m,y)=>f.call(o,p,d,y);try{i.render(this.buildScene,this.buildCam)}finally{o.render=f,i.clear=c,i.autoClear=u,o.needsUpdate=l;for(let p=0;p<r.length;p++)r[p].castShadow=a[p]}if(this.buildTriangles=i.info.render.triangles-h,e.chunk++,e.chunk<s)return;const g=this.sun.shadow.map;this.sun.shadow.map=t.shadow.map,t.shadow.map=g,this.savedDir.copy(this.lightDir),this.lightDir.copy(e.dir),this.place(this.sun,e.centre,e.halfS,e.sizeS),this.lightDir.copy(this.savedDir),this.sun.shadow.updateMatrices(this.sun);const M=this.cache;M.centre.copy(e.centre),M.half=e.halfS,M.dir.copy(e.dir),M.redraws++,M.rebuilds++,this.build=null}inMovingShadow(e,t){const i=this.sunMoving??this.sun;this.axes();const s=i.shadow.camera.right,r=this.probeV.copy(e).sub(i.target.position);return Math.abs(r.dot(this.lx))<s+t&&Math.abs(r.dot(this.ly))<s+t}get shadowRedraws(){return this.cache.redraws}get buildMapBytes(){const e=this.sunBuild?.shadow.map;return e?e.width*e.height*4*2:0}get shadowCounts(){return{redraws:this.cache.redraws,oneFrame:this.cache.oneFrame,background:this.cache.rebuilds,building:!!this.build}}}const an=(n,e,t)=>({name:n,parent:e,pivot:t}),Ct={pack:"jet-hi3d",unitMetres:.45,bones:[an("root",null,[0,0,0]),an("airframe","root",[0,0,0]),an("canopy","airframe",[0,3.15,1.125]),an("nozzles","airframe",[0,1.8765,-6.885]),an("legN","airframe",[0,1.2465,4.05]),an("sliderN","legN",[0,1.2465,4.05]),an("legML","airframe",[.9,1.2465,-1.35]),an("sliderML","legML",[.9,1.2465,-1.35]),an("legMR","airframe",[-.9,1.2465,-1.35]),an("sliderMR","legMR",[-.9,1.2465,-1.35]),an("flapL","airframe",[1.7,1.892,-3.25]),an("flapR","airframe",[-1.7,1.892,-3.25]),an("aileronL","airframe",[3.83,1.808,-3.05]),an("aileronR","airframe",[-3.83,1.808,-3.05]),an("elevatorL","airframe",[1.65,2.535,-5.72]),an("elevatorR","airframe",[-1.65,2.535,-5.72]),an("rudder","airframe",[0,3.4,-6.035])],controls:[],limits:{aileron:.2617993877991494,elevator:.22689280275926285,flap:.3665191429188092,rudder:.2792526803190927},gear:{legs:[{leg:"legN",slider:"sliderN",direction:-1,stroke:[0,-1,0]},{leg:"legML",slider:"sliderML",direction:1,stroke:[.41262946462112043,-.893858577735502,-.1753675224639761]},{leg:"legMR",slider:"sliderMR",direction:1,stroke:[-.41262946462112043,-.893858577735502,-.1753675224639761]}],fold:1.53588974175501,stowedAt:.985,airborneStroke:2.35,extendHeight:8},surface:{tierNames:["close","mid","far"],referenceLines:406,size:15.3,centre:[0,2.5,0],fade:[[56,44],[20,15]],minDither:.001,eps:1e-5,white:16777215,normalScale:[.48,.35,0],glass:[.25,.4],coral:[.7,.9],splits:[0,0,0],nightFill:[.16,.14,.155],cull:{centre:[0,4.8,-.3],radius:9.8}},lamps:{glass:.35,glassColour:2775686},lighting:{accent:.58,lamp:1,dayLamp:.2},engine:{glow:[2893862,16742960,16751164],heatDay:.6,heatNight:1.15,cruiseHeat:.52},roughnessFloor:.06};Ct.controls.push({bone:"flapL",kind:"flap",side:1,axis:[.9948540752093652,-.0392336818392425,.09341352818867286]},{bone:"flapR",kind:"flap",side:-1,axis:[.9948540752093652,.0392336818392425,-.09341352818867286]},{bone:"aileronL",kind:"aileron",side:1,axis:[.9708462198340377,.08387582987681824,-.22454946581195456]},{bone:"aileronR",kind:"aileron",side:-1,axis:[.9708462198340377,-.08387582987681824,.22454946581195456]},{bone:"elevatorL",kind:"elevator",side:1,axis:[.9705817768262737,-.029864054671577673,-.23891243737262138]},{bone:"elevatorR",kind:"elevator",side:-1,axis:[.9705817768262737,.029864054671577673,.23891243737262138]},{bone:"rudder",kind:"rudder",side:1,axis:[0,.9192242548902957,-.39373438917801]});const ot={bareFacade:.88,barePaving:.37,bareSky:1.45,facadeTint:[1.07,1.02,.96],pavingTint:[1.04,1,.96],duskRise:[.15,.57],duskFall:[.77,.99],horizonShare:.475,duskExposure:1.25,duskNeutralShare:.22,lampWallTint:[1,.65,.13],lampWrap:.55,pearlNightNeutral:.65,pearlNightBlueScatter:.543,pearlDuskHorizonTint:[1.08,1,.92],pearlHorizon:.85,pearlNeutralShare:.5,pearlScatter:.25,pearlRadiance:1.65,pearlWrap:.67,polishedTransition:[.13,.2],polishedAmbient:.055,polishedLobe:12,lampBounce:1.15,lampWidth:.63,lampSharpness:3.2,lampGain:1.65},qt={clearcoatRoughness:.065,flakeCellsPerMetre:500,flakeResolve:[.3,1.25],flakeTilt:.18,skyLodPerRoughness:7,sunInSky:.72,skyFill:.32,skyWidth:128,skyHeight:64,probe:{facadeSky:.42,facadeEarth:.55,zenithTint:[.48,.71,1],midTint:[.83,.91,1],pavingSky:.14},coatIor:1.5,coatBend:[0,.4]},We=n=>n.toFixed(4),Hi=n=>`vec3(${n.map(We).join(",")})`,Cd=n=>`if (heroFade < 1.0) {
    vec3 cell = floor(vRigidRest / ${We(n)});
    float rank = fract(sin(dot(cell, vec3(12.9898, 78.233, 37.719))) * 43758.5453);
    if (rank >= heroFade) discard;
  }`,Pd=n=>n.replace("#include <common>",`#include <common>
varying vec3 vRigidRest;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vRigidRest = position;`);function xy(n,e,t){const i=new Rc;return i.onBeforeCompile=s=>{s.uniforms.heroFade=n,s.vertexShader=Pd(s.vertexShader),s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
uniform float heroFade;
varying vec3 vRigidRest;`).replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
${Cd(e)}`)},i.customProgramCacheKey=()=>t,i}function vy(n){const e=[];let t=0;for(let s=qt.skyWidth,r=qt.skyHeight;s>=1;s/=2,r=Math.max(1,r/2)){const a=t+s*r*4;if(a>n.length)throw new Error(`the sky basis map: ${n.length} bytes, too few for its mips`);e.push({data:n.subarray(t,a),width:s,height:r}),t=a}const i=new Qn(e[0].data,qt.skyWidth,qt.skyHeight);return i.mipmaps=e,i.wrapS=Ks,i.minFilter=Un,i.magFilter=kt,i.generateMipmaps=!1,i.needsUpdate=!0,i}const Fh=new WeakMap;function _y(n){const e=new km({color:16777215,map:n.map,roughnessMap:n.roughness,clearcoat:1,clearcoatRoughness:qt.clearcoatRoughness});n.normalMap&&(e.normalMap=n.normalMap,e.normalScale.set(n.normalScale,n.normalScale));const t={value:new Ue},i={value:new Ue},s={value:0};e.onBeforeRender=(c,u)=>{let f=Fh.get(u);f||(f=u.getObjectByName("sky")?.material,f?.uniforms?.uHorizon&&f.uniforms.uMid&&Fh.set(u,f)),s.value=+!!(f?.uniforms?.uHorizon&&f.uniforms.uMid),s.value&&f&&(t.value.copy(f.uniforms.uHorizon.value),i.value.copy(f.uniforms.uMid.value))};const r=n.surface,a=n.variant==="jet",o=`smoothstep(${ot.duskRise.map(We)},rigidNight)*(1.0-smoothstep(${ot.duskFall.map(We)},rigidNight))`,l=en()&&ae.smooth.dither==="mean";return e.onBeforeCompile=c=>{Object.assign(c.uniforms,{citySky:{value:n.sky},cityNight:n.glows.night,cityHorizon:t,cityMid:i,hasCitySky:s,maskRange:n.controls.range,heroFade:n.controls.fade,heroExposure:n.exposure,rigidAux:{value:n.aux},rigidFinish:{value:n.finish},rigidNight:n.glows.night,rigidCoral:n.glows.coral,rigidGlass:n.glows.glass,rigidGlow:{value:n.glows.channels.map(d=>d.value)},uEdgeClass:{value:ae.pixel.edge.classObject},uHazeSteps:Qt.uHazeSteps,uHazeDither:Qt.uHazeDither,uDitherOrigin:Qt.uDitherOrigin}),"uWarp"in c.uniforms||Object.assign(c.uniforms,Zi),c.vertexShader=zr(Pd(c.vertexShader));let u=c.fragmentShader;u=u.replace("#include <common>",`#include <common>
layout(location = 1) out highp vec4 pc_fragN;
uniform float uEdgeClass; uniform float uHazeSteps; uniform float uHazeDither; uniform vec2 uDitherOrigin;
uniform sampler2D citySky; uniform float cityNight, hasCitySky; uniform vec3 cityHorizon, cityMid;
uniform vec2 maskRange; uniform float heroFade; uniform float heroExposure;
varying vec3 vRigidRest;
uniform sampler2D rigidAux; uniform sampler2D rigidFinish; uniform float rigidNight;
uniform vec4 rigidCoral; uniform vec4 rigidGlass; uniform vec4 rigidGlow[6];
float rigidMetal; vec3 finishClass;
float bayer2(vec2 p) { return 2.0*p.x+3.0*p.y-4.0*p.x*p.y; }
float bayer4h(vec2 p) {
  ivec2 q = ivec2(mod(floor(p), 4.0));
  int i = q.x + q.y * 4;
  int m[16] = int[16](0, 8, 2, 10, 12, 4, 14, 6, 3, 11, 1, 9, 15, 7, 13, 5);
  return (float(m[i]) + 0.5) / 16.0;
}
void rigidCoverage() {
  // The levels' cross-fade (the lab's dither), then the hero's own fade on its rest-space cells.
  if (!(maskRange.x <= 0.0 && maskRange.y >= 1.0)) {
    vec2 p = floor(gl_FragCoord.xy);
    float value = (4.0*bayer2(mod(p,2.0))+bayer2(mod(floor(p/2.0),2.0))+0.5)/16.0;
    if (value < maskRange.x || value >= maskRange.y) discard;
  }
  ${Cd(n.fadeCellMetres)}
}
vec3 skyReflection(vec3 ray, float rough, vec3 sky, vec3 earth, float materialMetalCoverage) {
  vec2 uv = vec2(atan(ray.z,ray.x)/6.2831853+0.5, asin(clamp(ray.y,-1.0,1.0))/3.1415927+0.5);
  vec4 basis = textureLod(citySky,uv,rough*${We(qt.skyLodPerRoughness)});
  // The four probe channels represent zenith, mid-sky, facades and paving.
  vec3 facade = ${We(qt.probe.facadeSky)}*sky + ${We(qt.probe.facadeEarth)}*earth;
  vec3 environment = basis.x*sky*${Hi(qt.probe.zenithTint)} + basis.y*sky*${Hi(qt.probe.midTint)} + basis.z*facade + basis.w*(earth + ${We(qt.probe.pavingSky)}*sky);
  ${a?`float bare = materialMetalCoverage;
  vec3 street = sky*((basis.x+basis.y)*${We(ot.bareSky)} + basis.z*${Hi(ot.facadeTint)}*${We(ot.bareFacade)} + basis.w*${Hi(ot.pavingTint)}*${We(ot.barePaving)});
  environment = mix(environment,street,bare);`:""}
  float dusk = smoothstep(${ot.duskRise.map(We)},cityNight)*(1.0-smoothstep(${ot.duskFall.map(We)},cityNight))*hasCitySky;
  vec3 twilight = mix(cityMid,cityHorizon,${We(ot.horizonShare)}) * ((basis.x+basis.y)*${We(ot.bareSky)} + basis.z*${We(ot.bareFacade)} + basis.w*${We(ot.barePaving)});
  twilight = mix(twilight,vec3(luminance(twilight)),${We(ot.duskNeutralShare)});
  return mix(environment, twilight*${We(ot.duskExposure)}, dusk);
}
`),u=u.replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
rigidCoverage();`),u=u.replace("#include <roughnessmap_fragment>",`float roughnessFactor = max(${n.roughnessFloor.toFixed(3)}, texture2D(roughnessMap,vRoughnessMapUv).r);`),u=u.replace("#include <map_fragment>",`vec4 texel = texture2D(map, vMapUv);
rigidMetal = texel.a;
finishClass = texture2D(rigidFinish,vMapUv).rgb;
texel.a = 1.0;
diffuseColor *= texel;`),u=u.replace("#include <metalnessmap_fragment>","float metalnessFactor = rigidMetal;"),u=u.replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
#ifdef USE_NORMALMAP_TANGENTSPACE
  // Two-millimetre flake cells in rest space follow every moving part; unresolved flakes average into the base roughness.
  vec3 cell = vRigidRest * ${We(qt.flakeCellsPerMetre)};
  vec3 footprint = fwidth(cell);
  float resolve = 1.0 - smoothstep(${We(qt.flakeResolve[0])}, ${We(qt.flakeResolve[1])}, max3(footprint));
  vec3 seed = fract(floor(cell) * vec3(.1031, .1030, .0973));
  seed += dot(seed, seed.yxz + 33.33);
  vec2 tilt = fract((seed.xx + seed.yz) * seed.zy) * 2.0 - 1.0;
  normal = normalize(normal + (tbn[0]*tilt.x + tbn[1]*tilt.y) * (${We(qt.flakeTilt)} * resolve * finishClass.g));
#endif`),u=u.replace("#include <lights_physical_fragment>",`#include <lights_physical_fragment>
#ifdef USE_CLEARCOAT
  material.clearcoat = finishClass.g;
#endif`);const f=a?`float nightScatter = smoothstep(${ot.duskFall.map(We)},rigidNight)*finishClass.r*${We(ot.pearlNightNeutral)};
    reflected = mix(reflected,vec3(luminance(reflected)),nightScatter);
    reflected *= mix(vec3(1.0),${Hi(ot.pearlDuskHorizonTint)},(${o})*finishClass.r);`:"";u=u.replace("vec3 totalDiffuse =",`
#if NUM_HEMI_LIGHTS > 0
  vec3 skyLight = hemisphereLights[0].skyColor * RECIPROCAL_PI;
  vec3 earth = hemisphereLights[0].groundColor * RECIPROCAL_PI;
  #if NUM_DIR_LIGHTS > 0
    skyLight += directionalLights[0].color * RECIPROCAL_PI * ${We(qt.sunInSky)};
  #endif
  #ifndef USE_ENVMAP
    vec3 ray = inverseTransformDirection(reflect(-geometryViewDir,normal),viewMatrix);
    float exposedMetal = material.metalness;
    #ifdef USE_CLEARCOAT
      exposedMetal *= 1.0-material.clearcoat;
    #endif
    vec3 reflected = skyReflection(ray,material.roughness,skyLight,earth,exposedMetal);
    ${f}
    #if NUM_POINT_LIGHTS > 0
      for (int i=0; i<NUM_POINT_LIGHTS; i++) {
        vec3 lamp = pointLights[i].position - geometryPosition;
        float facing = saturate((dot(normal,normalize(lamp))+${We(ot.lampWrap)})/(1.0+${We(ot.lampWrap)}));
        float alignment = dot(reflect(-geometryViewDir,normal),normalize(lamp));
        float band = pow(saturate((alignment + ${We(ot.lampWidth)})/(1.0+${We(ot.lampWidth)})),${We(ot.lampSharpness)});
        vec3 lampLight = pointLights[i].color * getDistanceAttenuation(length(lamp),pointLights[i].distance,pointLights[i].decay);
        float brushed = smoothstep(${ot.polishedTransition.map(We)},material.roughness);
        float sharp = ${We(ot.polishedAmbient)}+pow(saturate(alignment),${We(ot.polishedLobe)});
        lampLight *= mix(sharp,1.0,brushed);
        reflected += exposedMetal * lampLight * facing*(${Hi(ot.lampWallTint)}*${We(ot.lampBounce)}+band*${We(ot.lampGain)});
      }
    #endif
    vec3 baseView = geometryViewDir;
    #ifdef USE_CLEARCOAT
      vec3 internalView = -refract(-geometryViewDir,normal,1.0/${We(qt.coatIor)});
      baseView = normalize(mix(baseView,internalView,smoothstep(${qt.coatBend.map(We)},material.clearcoat)));
    #endif
    reflectedLight.indirectSpecular += reflected * EnvironmentBRDF(normal,baseView,material.specularColorBlended,material.specularF90,material.roughness);
    #ifdef USE_CLEARCOAT
      vec3 coatRay = inverseTransformDirection(reflect(-geometryViewDir,geometryClearcoatNormal),viewMatrix);
      clearcoatSpecularIndirect += skyReflection(coatRay, material.clearcoatRoughness,skyLight,earth,0.0)
        * EnvironmentBRDF(geometryClearcoatNormal,geometryViewDir,material.clearcoatF0,material.clearcoatF90,material.clearcoatRoughness);
    #endif
    reflectedLight.indirectDiffuse += material.diffuseColor*(1.0-material.metalness)*skyLight*${We(qt.skyFill)};
  #endif
#endif
vec3 totalDiffuse =`);const h=d=>r.splits[d]===1?"vRigidRest.x > 0.0":r.splits[d]===2?"vRigidRest.z > 0.0":"true";u=u.replace("#include <opaque_fragment>",`vec4 auxv = texture2D(rigidAux, vMapUv);
float coralM = smoothstep(${We(r.coral[0])}, ${We(r.coral[1])}, auxv.a);
float glassM = smoothstep(${We(r.glass[0])}, ${We(r.glass[1])}, auxv.a) * (1.0 - coralM);
outgoingLight = max(outgoingLight, diffuseColor.rgb * ${Hi(r.nightFill)} * rigidNight);
${a?`
#if NUM_DIR_LIGHTS > 0 && NUM_HEMI_LIGHTS > 0
  // Light scattered by a pearl's platelet layer is broader than the outer coat's reflection.
  float wrap = saturate((dot(normal,directionalLights[0].direction)+${We(ot.pearlWrap)})/(1.0+${We(ot.pearlWrap)}));
  vec3 nacre = diffuseColor.rgb * RECIPROCAL_PI * (hemisphereLights[0].skyColor + wrap*directionalLights[0].color);
  float duskP = ${o}*hasCitySky;
  vec3 pearlSky = mix(cityMid,cityHorizon,${We(ot.pearlHorizon)});
  pearlSky = mix(pearlSky,vec3(luminance(pearlSky)),${We(ot.pearlNeutralShare)});
  nacre = mix(nacre,vec3(luminance(nacre)),smoothstep(${ot.duskFall.map(We)},rigidNight)*${We(ot.pearlNightNeutral)});
  nacre = mix(nacre, diffuseColor.rgb*pearlSky*${Hi(ot.pearlDuskHorizonTint)}, duskP);
  outgoingLight = mix(outgoingLight, nacre*${We(ot.pearlRadiance)}, finishClass.r*${We(ot.pearlScatter)});
  float pearlBlue = max(outgoingLight.b - outgoingLight.g, 0.0);
  outgoingLight.b -= pearlBlue * finishClass.r * smoothstep(${ot.duskFall.map(We)},rigidNight) * ${We(ot.pearlNightBlueScatter)};
#endif`:""}
vec4 gR = ${h(0)} ? rigidGlow[0] : rigidGlow[1];
vec4 gG = ${h(1)} ? rigidGlow[2] : rigidGlow[3];
vec4 gB = ${h(2)} ? rigidGlow[4] : rigidGlow[5];
vec3 glow = auxv.r * mix(gR.rgb, gR.rgb * diffuseColor.rgb, gR.a)
  + auxv.g * mix(gG.rgb, gG.rgb * diffuseColor.rgb, gG.a)
  + auxv.b * mix(gB.rgb, gB.rgb * diffuseColor.rgb, gB.a)
  + coralM * mix(rigidCoral.rgb, rigidCoral.rgb * diffuseColor.rgb, rigidCoral.a)
  + glassM * mix(rigidGlass.rgb, rigidGlass.rgb * diffuseColor.rgb, rigidGlass.a);
outgoingLight += glow;
#include <opaque_fragment>`),u=u.replace("#include <fog_fragment>",`
gl_FragColor.rgb = pow(max(gl_FragColor.rgb * heroExposure, vec3(0.0)), vec3(1.0 / 2.2));
#ifdef USE_FOG
{
  float x = smoothstep(fogNear, fogFar, vFogDepth);
  float n = uHazeSteps - 1.0;
  float q = x * n, b = floor(q), t = clamp((q - b - 0.5) / max(uHazeDither, 1e-3) + 0.5, 0.0, 1.0);
  float fogFactor = ${l?"(b + t) / n":"(b + step(bayer4h(gl_FragCoord.xy + uDitherOrigin), t)) / n"};
  gl_FragColor.rgb = mix(gl_FragColor.rgb, pow(fogColor, vec3(1.0 / 2.2)), fogFactor);
}
#endif
`),u=u.replace("#include <dithering_fragment>",`#include <dithering_fragment>
pc_fragN = vec4(normal * 0.5 + 0.5, uEdgeClass);`),c.fragmentShader=u},e.customProgramCacheKey=()=>n.key,Pc(e)}const pr=n=>Math.min(1,Math.max(0,n)),dl=n=>Math.max(-1,Math.min(1,n)),mr=(n,e,t)=>n+(e-n)*t,My=new G(1,0,0),Uh=1e-6;function Sy(n,e){return e.set(-1,0,0,0,0,0,1,0,0,1,0,-n,0,0,0,1)}function yy(){const n=np();return(n.belowPivot+n.gearUnits)*Ct.unitMetres}const pl=n=>n<=.04045?n/12.92:((n+.055)/1.055)**2.4;function Bs(n,e,t,i=0){n.value.set(pl((e>>16&255)/255)*t,pl((e>>8&255)/255)*t,pl((e&255)/255)*t,i)}class wy{root=new mn;frame=new mn;bones=new Map;skins=[];controls=[];glows;surfaces;gear;heroToModel=new Ve;rot=new Float64Array(9);m=new Ve;q=new Jn;centre=new G;object=-1;lastObject=-1;shown={pitch:0,roll:0,yaw:0,flaps:0};stroke=0;strokeStep=1/0;depth;fade={value:1};constructor(e,t,i){this.root.name="hero jet",this.frame.matrixAutoUpdate=!1,this.root.add(this.frame),Sy(yy(),this.heroToModel);const s=new mn;for(const u of Ct.bones){const f=new yf;f.name=u.name;const h=u.parent?this.bones.get(u.parent):null,d=new G(...u.pivot);h&&d.sub(h.getWorldPosition(new G)),f.position.copy(d),(h??s).add(f),f.updateMatrixWorld(!0),this.bones.set(u.name,f)}this.frame.add(s),s.updateMatrixWorld(!0);const r=e.meshes[0],a=new bc(r.bones.map(u=>this.bone(u)));this.glows={channels:Array.from({length:Ct.surface.splits.length*2},()=>({value:new Mt})),coral:{value:new Mt},glass:{value:new Mt},night:{value:0}};const o=e.textures,l=o["colour-1024.bin"],c=[o["normal-512.bin"],o["normal-mid-256.bin"],o["normal-far-128.bin"]];r.levels.forEach((u,f)=>{const h={range:{value:new Oe(0,1)},fade:{value:1}},d=Ct.surface.normalScale[f]??0,g=_y({variant:"jet",map:l,roughness:o["roughness-512.bin"],aux:o["aux-512.bin"],finish:o["finish-512.bin"],normalMap:d>0?c[f]??null:null,normalScale:d,sky:i,roughnessFloor:Ct.roughnessFloor,surface:Ct.surface,glows:this.glows,controls:h,fadeCellMetres:qn.jet.fadeCellMetres,exposure:t,key:`hero-jet-${f}-${d>0?"n":"p"}`}),M=new Sf(u.geometry,g);M.name=`hero jet ${Ct.surface.tierNames[f]}`,M.bind(a,new Ve),M.boundingSphere=new Pn(new G(...Ct.surface.cull.centre),Ct.surface.cull.radius),M.castShadow=f===0,M.receiveShadow=!0,M.layers.set(_s.actors),M.visible=f===0,this.frame.add(M),this.skins.push(M),this.controls.push(h)}),this.depth=xy(this.fade,qn.jet.fadeCellMetres,"hero-jet-depth"),this.surfaces=Ct.controls.map(u=>({joint:this.bone(u.bone),kind:u.kind,side:u.side,axis:new G(...u.axis)})),this.gear=Ct.gear.legs.map(u=>({legBone:this.bone(u.leg),sliderBone:this.bone(u.slider),direction:u.direction,axis:new G(...u.stroke)})),this.root.visible=!1}bone(e){const t=this.bones.get(e);if(!t)throw new Error(`${Ct.pack}: no bone ${e}`);return t}place(e,t,i,s,r,a,o=0,l=!0){const c=e.fade??1;if(this.root.visible=c>0,!this.root.visible)return;this.root.position.set(t.x,t.y,t.z);const u=e.scale*i/Ct.unitMetres;pd(this.m,ja(e,this.rot),u,0,0,0),this.frame.matrix.multiplyMatrices(this.m,this.heroToModel),this.frame.matrixWorldNeedsUpdate=!0;const f=e.subject===void 0||!(e.subject>0)?0:Math.min(1,e.subject);for(let h=0;h<this.skins.length;h++){const d=this.skins[h],g=$a(d.material);g&&(g.value=f),d.frustumCulled=!(a&&f>0),this.controls[h].fade.value=c}this.fade.value=c,this.ease(s,o,l),this.strokeStep=l?1/0:qn.jet.strokeUnitsPerSec*Math.min(Math.max(0,o),qn.jet.easeMaxDtSec),this.pose(s),this.strokeStep=1/0,this.setNight(r,s.heat)}ease(e,t,i){const s=qn.jet,r=this.shown;if(i){r.pitch=e.pitch,r.roll=e.roll,r.yaw=e.yaw,r.flaps=e.flaps;return}const a=Math.min(Math.max(0,t),s.easeMaxDtSec),o=1-Math.exp(-a/Math.max(Uh,s.surfaceSec)),l=1-Math.exp(-a/Math.max(Uh,s.flapSec));r.pitch+=(e.pitch-r.pitch)*o,r.roll+=(e.roll-r.roll)*o,r.yaw+=(e.yaw-r.yaw)*o,r.flaps+=(e.flaps-r.flaps)*l}pose(e){this.bone("canopy").rotation.x=-.9599310885968813*pr(e.canopy),this.bone("nozzles").rotation.x=-e.nozzleRad;const t=1-pr(e.gear),i=Ct.gear,s=i.airborneStroke*(1-t)*pr(e.liftUnits/i.extendHeight);this.stroke+=Math.max(-this.strokeStep,Math.min(this.strokeStep,s-this.stroke)),Number.isFinite(this.stroke)||(this.stroke=s);for(const a of this.gear)a.legBone.quaternion.copy(this.q.setFromAxisAngle(My,-a.direction*i.fold*t)),a.sliderBone.position.copy(a.axis).multiplyScalar(this.stroke*Ct.unitMetres),a.legBone.scale.setScalar(t<i.stowedAt?1:0);const r=this.shown;this.setControls(r.pitch,r.roll,r.yaw,r.flaps)}setControls(e,t,i,s){const r=Ct.limits;for(const a of this.surfaces){let o=0;a.kind==="aileron"?o=-a.side*dl(t)*r.aileron:a.kind==="elevator"?o=dl(e)*r.elevator:a.kind==="flap"?o=-pr(s)*r.flap:a.kind==="rudder"&&(o=dl(i)*r.rudder),a.joint.quaternion.setFromAxisAngle(a.axis,o)}}setNight(e,t){const i=this.glows;i.night.value=e;const s=mr(Ct.lighting.dayLamp,Ct.lighting.lamp,e),r=Ct.surface.white;Bs(i.channels[0],r,s,1),Bs(i.channels[1],r,s,1),Bs(i.coral,r,Ct.lighting.accent*e,1),Bs(i.glass,Ct.lamps.glassColour,Ct.lamps.glass*e);const a=Ct.engine,o=t>a.cruiseHeat,l=pr(o?(t-a.cruiseHeat)/(1-a.cruiseHeat):t/a.cruiseHeat),c=a.glow[o?1:0],u=a.glow[o?2:1],f=Math.round(mr(c>>16&255,u>>16&255,l))<<16|Math.round(mr(c>>8&255,u>>8&255,l))<<8|Math.round(mr(c&255,u&255,l)),h=t*mr(a.heatDay,a.heatNight,e);Bs(i.channels[2],f,h),Bs(i.channels[3],f,h)}lod(e){if(!this.root.visible)return;const t=Ct.surface;this.root.updateMatrixWorld(!0);const i=this.frame.matrixWorld;this.centre.set(t.centre[0],t.centre[1],t.centre[2]).applyMatrix4(i).applyMatrix4(e.matrixWorldInverse);const r=e.projectionMatrix.elements[15]===1?1:Math.max(t.eps,-this.centre.z),a=t.referenceLines*t.size*i.getMaxScaleOnAxis()*e.projectionMatrix.elements[5]/(2*r),o=1-lu.smoothstep(a,t.fade[0][1],t.fade[0][0]),l=1-lu.smoothstep(a,t.fade[1][1],t.fade[1][0]);let c=0,u=-1;for(let h=0;h<this.skins.length;h++){const d=this.controls[h].range.value;h===0?d.set(o,1):h===1?d.set(l,o):d.set(0,l);const g=d.y-d.x;this.skins[h].visible=g>t.minDither,g>u&&(u=g,c=h)}const f=this.fade.value<1;for(let h=0;h<this.skins.length;h++){const d=this.skins[h];d.castShadow=h===c,d.customDepthMaterial=h===c&&f?this.depth:void 0}}dispose(){for(const e of this.skins)e.material.dispose();this.skins[0]?.skeleton.dispose(),this.depth.dispose(),this.root.removeFromParent()}}const by=new Set(["jetCanopy","jetNozzles","jetNoseGear","jetMainGear","jetBodyOpen"]),Ey=new Nn;function Ty(n){const e={jets:0,walkers:0,fallbacks:0,unresolved:0},t={value:qn.jet.exposure};let i=[],s=null,r=null,a=null;const o={x:0,y:0,z:0,yaw:0,ok:!1};let l=Number.NaN;const c=()=>{for(const f of i)f.dispose();i=[],r?.dispose(),r=null,s=null,a?.dispose(),a=null},u=()=>{const f=n.assets.get(Ct.pack);if(!f)return i.length&&c(),!1;if(f!==s){c(),r=vy(f.raw["city-basis.bin"]);for(let h=0;h<qn.jet.instances;h++){const d=new wy(f,t,r);n.ps.scene.add(d.root),i.push(d)}s=f}return!0};return{update(f,h,d,g){e.jets=0,e.fallbacks=0,t.value=qn.jet.exposure;const M=Number.isFinite(f.timeSec)?f.timeSec:Number.NaN,p=Number.isFinite(M)&&Number.isFinite(l)?M-l:0;l=M;for(const v of i)v.lastObject=v.object,v.object=-1,v.root.visible=!1;if(!d)return;const m=qn.heroes==="hi3d",y=Number.isFinite(f.timeOfDay)?Math.max(0,Math.min(1,ip(f.timeOfDay))):0;let w=0,_=!1;for(const v of d.poses)if(!(v.object<0||v.object>=f.objects.length))if(v.kind==="jetBody"&&v.jet){if(_=!1,!m||!u()||w>=i.length){e.fallbacks++;continue}if(bd(o,f,v,h,n.origin),!o.ok){e.fallbacks++;continue}const S=i[w++];S.place(f.objects[v.object],o,h.cpu.cellMetres,v.jet,y,h.cpu.subOn,p,S.lastObject<0),S.object=v.object,g[v.object]=1,e.jets++,_=!0}else _&&by.has(v.kind)?g[v.object]=1:_=!1},prepare(f){const h=!uc(n.three);for(const d of i)d.root.visible&&(d.lod(f),d.depth.colorWrite=h)},drawn(f){for(const h of i)if(h.object===f&&h.root.visible)return h.root;return null},warmMeshes(){if(qn.heroes!=="hi3d"||!u())return[];const f=[],h=(p,m)=>{const y=new Sf(p.geometry,m);return y.bind(p.skeleton,p.bindMatrix),y.castShadow=!0,y.receiveShadow=!0,y.boundingSphere=p.boundingSphere,y.layers.mask=p.layers.mask,y};for(const p of i[0].skins)f.push(h(p,p.material));const d=i[0].skins[0].material;a??=new Rc;const g=n.ps.scene,M=g.fog;g.fog=null;try{for(const p of[a,...i.map(m=>m.depth)])p.side=xn,p.map=d.map;for(const p of[a,i[0].depth])n.three.compileAsync(h(i[0].skins[0],p),Ey,g).catch(()=>{})}finally{g.fog=M}return f},onLost(){c()},onRestored(){},info:e,assets:n.assets,drawnJets(){return i.filter(f=>f.root.visible).map(f=>f.root)},config:qn}}const Ft=1024*1024,Ja={budgets:{lite:{referenceDevices:["Galaxy S9+ (Mali-G72)"],initialDownloadBytes:4*Ft,areaDownloadBytes:14.4*Ft,totalDownloadBytes:40*Ft,residentGpuBytes:48*Ft,pageGpuBytes:192*Ft,cpuHeapBytes:16*Ft,frameMs:2,frameMsByFamily:{trees:1,people:.4,traffic:.3,props:.3},drawCalls:48,triangles:4e5,streamMainThreadMsPerFrame:1},smoothB:{referenceDevices:["iPhone 16 Pro Max","Galaxy Tab S10+"],initialDownloadBytes:6*Ft,areaDownloadBytes:26.4*Ft,totalDownloadBytes:80*Ft,residentGpuBytes:96*Ft,pageGpuBytes:320*Ft,cpuHeapBytes:32*Ft,frameMs:3,frameMsByFamily:{trees:1.5,people:.6,traffic:.5,props:.4},drawCalls:80,triangles:16e5,streamMainThreadMsPerFrame:1.5},cinematic:{referenceDevices:["iPhone 16 Pro Max","Galaxy Tab S10+"],initialDownloadBytes:8*Ft,areaDownloadBytes:26.4*Ft,totalDownloadBytes:80*Ft,residentGpuBytes:128*Ft,pageGpuBytes:448*Ft,cpuHeapBytes:32*Ft,frameMs:4,frameMsByFamily:{trees:2,people:.8,traffic:.7,props:.5},drawCalls:120,triangles:25e5,streamMainThreadMsPerFrame:2}},stream:{lite:{uploadBytesPerFrame:.5*Ft,prefetchLeadSec:24,assumedBytesPerSec:.75*Ft,linkShareForAssets:.8,maxAreasResident:2},smoothB:{uploadBytesPerFrame:1*Ft,prefetchLeadSec:22,assumedBytesPerSec:1.5*Ft,linkShareForAssets:.8,maxAreasResident:2},cinematic:{uploadBytesPerFrame:2*Ft,prefetchLeadSec:22,assumedBytesPerSec:1.5*Ft,linkShareForAssets:.8,maxAreasResident:2}},alwaysSet:["walker-hi3d","car-hi3d","jet-hi3d","people-ernie","people-leo","people-mira","people-tess","hi3d-people","hi3d-static"]};function Ay(n,e=fc.families){for(const[t,i]of e)if(n.startsWith(t))return i;throw new Error(`asset ${n}: no family in ASSETS_RUNTIME.families`)}function Ry(n,e,t,i){return new URL(`${e}${t}/${i.name}?v=${i.hash}`,n).href}function Cy(n){const e=fc;let t=!1,i=null;const s=new Map,r=new Map,a=[],o=new Set,l={loads:0,failures:0,fromCache:0,fetchMs:0,decodeMs:0};let c=[],u=0,f=0,h=null,d=1;const g=new Map,M=w=>{if(t||!i)return;const _=i.packs[w];if(!_)return;h||(h=n.makeWorker(),h.onmessage=S=>p(S.data));const v=d++;g.set(v,w),s.set(w,"loading"),h.postMessage({id:v,name:w,family:_.family,files:_.files.map(S=>({name:S.name,url:Ry(n.base,e.packsPath,w,S)})),cacheName:`${e.cacheName}-${i.build}`,textures:e.textures,raw:Object.keys(e.packExtras[w]??{})})},p=w=>{const _=g.get(w.id);if(g.delete(w.id),t||_===void 0)return;if(w.ok){l.loads++,l.fromCache+=w.fromCache,l.fetchMs+=w.fetchMs,l.decodeMs+=w.decodeMs,s.set(_,"decoded"),c.includes(_)&&(f+=i.packs[_].bytes),a.push(w.pack),y.onDecoded?.();return}l.failures++;const v=(r.get(_)??0)+1;if(r.set(_,v),v>e.retryMax){s.set(_,"failed"),c.includes(_)&&(f+=i.packs[_].bytes),y.onDecoded?.();return}s.set(_,"queued");const S=n.setTimeout(()=>{o.delete(S),M(_)},e.retryFirstMs*2**(v-1));o.add(S)},m=n.fetchManifest(new URL(`${e.packsPath}${e.manifest}`,n.base).href).then(w=>{if(t)return null;i=w,n.clearOldCaches?.(`${e.cacheName}-`,`${e.cacheName}-${w.build}`);const _=x=>x in w.packs;c=(e.gate[n.tier]==="always"?Ja.alwaysSet:e.firstFrame).filter(_),u=c.reduce((x,b)=>x+w.packs[b].bytes,0);const S=Ja.alwaysSet.filter(x=>_(x)&&!c.includes(x));for(const x of[...c,...S])Ay(x),s.set(x,"queued"),M(x);return w}).catch(()=>null),y={share:()=>u>0?Math.min(1,f/u):0,cancel(){t=!0;for(const w of o)n.clearTimeout(w);o.clear(),h?.terminate(),h=null,a.length=0},get gated(){return c},manifestRead:m,take:()=>a.shift()??null,onDecoded:null,state:w=>s.get(w),request(w){for(const _ of w)s.set(_,"queued"),M(_)},stats:l};return y}const Py=new Uint8Array(0),Ly=new Uint16Array(0);function Dy(n,e,t,i){return Math.max(i,Math.min(n,Math.floor(t/Math.max(1,e))))}function Iy(n,e,t,i){let s=n*e*t;if(!i)return s;for(;n>1||e>1;)n=Math.max(1,n>>1),e=Math.max(1,e>>1),s+=n*e*t;return s}function Oh(){this.array=null}class Ny{target=new $t(1,1,{depthBuffer:!1});camera=new vs(-1,1,1,-1,0,1);material=new eo({colorWrite:!1,depthWrite:!1,depthTest:!1});mesh=new gt(new Dt,this.material);constructor(){this.mesh.frustumCulled=!1,this.mesh.matrixAutoUpdate=!1}upload(e,t){const i=e.getRenderTarget();this.mesh.geometry=t,t.setDrawRange(0,0),e.setRenderTarget(this.target);try{e.render(this.mesh,this.camera)}finally{e.setRenderTarget(i),t.setDrawRange(0,1/0)}}dispose(){this.target.dispose(),this.material.dispose()}}class Fy{constructor(e,t,i,s,r){this.pack=e;const a={name:e.name,family:e.family,meshes:[],textures:{},json:e.json,raw:e.raw,gpuBytes:0};this.ready=a;for(const o of e.textures){const l=o.channels===1?Qs:o.channels===2?Yi:Cn,c=new Qn(null,o.width,o.height,l,tn);c.colorSpace=o.srgb?bn:Yn,c.generateMipmaps=o.mips,c.mipmapsAutoUpdate=!1,c.minFilter=o.mips?Un:kt,c.magFilter=kt,c.unpackAlignment=o.channels<4?1:4,c.name=`${e.name} ${o.file}`,c.source.dataReady=!1,c.needsUpdate=!0,a.textures[o.file]=c,a.gpuBytes+=Iy(o.width,o.height,o.channels,o.mips),this.steps.push({bytes:0,run:()=>t.initTexture(c)});const u=o.width*o.channels,f=Dy(o.height,u,s,r);let h=o.data;for(let d=0;d<o.height;d+=f){const g=d,M=Math.min(f,o.height-d),p=d+M>=o.height;this.steps.push({bytes:M*u,run:()=>{const m=new Qn(h.subarray(g*u,(g+M)*u),o.width,M,l,tn);m.unpackAlignment=c.unpackAlignment,m.colorSpace=c.colorSpace,p&&(c.mipmapsAutoUpdate=!0),t.copyTextureToTexture(m,c,null,new Oe(0,g)),p&&(h=null,o.data=Py)}})}}for(const o of e.meshes){const l=[];for(const c of o.levels){const u=new Dt;let f=c.index.byteLength;for(const h of c.attributes)u.setAttribute(h.name,new tt(h.array,h.itemSize,h.normalized).onUpload(Oh)),f+=h.array.byteLength;u.setIndex(new tt(c.index,1).onUpload(Oh)),u.boundingSphere=new Pn,u.boundingBox=new Li,u.computeBoundingBox(),u.computeBoundingSphere(),u.name=`${e.name} ${o.file} ${c.name}`,a.gpuBytes+=f,l.push({name:c.name,geometry:u,scale:c.scale,offset:c.offset}),this.steps.push({bytes:f,run:()=>{i.upload(t,u),c.attributes=[],c.index=Ly}})}a.meshes.push({file:o.file,bones:o.bones,head:o.head,levels:l})}}ready;steps=[];next=0;get bytesLeft(){let e=0;for(let t=this.next;t<this.steps.length;t++)e+=this.steps[t].bytes;return e}get done(){return this.next>=this.steps.length}step(e,t,i){let s=0;for(;this.next<this.steps.length;){const r=this.steps[this.next];if((s>0||!i)&&(s+r.bytes>e||t()))break;r.run(),s+=r.bytes,this.next++}return s}dispose(){for(const e of Object.values(this.ready.textures))e.dispose();for(const e of this.ready.meshes)for(const t of e.levels)t.geometry.dispose()}}function Ld(){return ae.smooth.on?"smoothB":"lite"}function Xy(n){const e=n.host?.tier??Ld(),t=Cy({base:n.base,tier:e,fetchManifest:async i=>{const s=await fetch(i,{cache:"no-cache"});if(!s.ok)throw new Error(`${i}: HTTP ${s.status}`);return await s.json()},makeWorker:()=>new Worker(new URL(""+new URL("worker-CJJ5G_HE.js",import.meta.url).href,import.meta.url),{type:"module"}),setTimeout:(i,s)=>globalThis.setTimeout(i,s),clearTimeout:i=>globalThis.clearTimeout(i),clearOldCaches:(i,s)=>{const r=globalThis.caches;r&&r.keys().then(a=>Promise.all(a.filter(o=>o.startsWith(i)&&o!==s).map(o=>r.delete(o)))).catch(()=>{})},...n.host});return{share:()=>t.share(),cancel:()=>t.cancel(),packs:t,tier:e}}const Uy={now:()=>performance.now(),setTimeout:(n,e)=>globalThis.setTimeout(n,e)};function Oy(n,e,t=Uy){const i={ready:0,residentBytes:0,loads:0,evictions:0,failures:0,mainMs:0,fetchMs:0,decodeMs:0,fromCache:0,uploadMs:0,gateMs:-1},s=fc,r=t.now(),a=e?.tier??Ld(),o=Ja.stream[a],l=Ja.budgets[a].streamMainThreadMsPerFrame,c=new Map,u=[],f=e?new Ny:null;let h=0,d=!1,g=!1,M=!0,p=!1,m=!1;const y=[],w=[];let _=0,v=0;const S=()=>t.now()-_>v,x=()=>{if(!e)return!0;const D=e.packs.gated;for(let C=0;C<D.length;C++)if(!c.has(D[C])&&e.packs.state(D[C])!=="failed")return!1;return!0},b=()=>{if(!(y.length===0&&i.gateMs>=0)&&x())for(i.gateMs<0&&(i.gateMs=t.now()-r);y.length;)y.pop()()},E=(D,C)=>{if(!e||d||g)return;let I=e.packs.take();if(!I&&u.length===0){i.mainMs=0;return}for(_=t.now(),v=C;I;I=e.packs.take())u.push(new Fy(I,n,f,o.uploadBytesPerFrame,s.minBandRows));let O=D;for(;u.length&&O>0&&!S();){const $=u[0],k=$.step(O,S,O===D);if(O-=k,$.done)u.shift(),c.set($.ready.name,$.ready),i.ready=c.size,i.residentBytes+=$.ready.gpuBytes,h++;else if(k===0)break}const U=e.packs.stats;i.loads=U.loads,i.failures=U.failures,i.fetchMs=U.fetchMs,i.decodeMs=U.decodeMs,i.fromCache=U.fromCache,i.mainMs=t.now()-_,i.uploadMs+=i.mainMs,b()},T=()=>{p=!1,!(!M||d||g)&&(E(o.uploadBytesPerFrame,l),u.length&&P())},P=()=>{p||!M||d||g||(p=!0,t.setTimeout(T,s.loadingSliceGapMs))};return e&&(e.packs.onDecoded=()=>{P(),b()}),{ready(){return!e||g?Promise.resolve():new Promise(D=>{let C=!1;const I=()=>{C||(C=!0,D())};t.setTimeout(I,m?s.restoreGateLimitMs:s.gateLimitMs),e.packs.manifestRead.then(O=>{if(!O)return I();y.push(I),b(),P()})})},tick(){M=!1,E(o.uploadBytesPerFrame,l)},get:D=>d?null:c.get(D)??null,get version(){return h},onLost(){if(d||!e){d=!0;return}d=!0,w.length=0;for(const[D,C]of c)w.push(D),kh(C);for(const D of u)w.push(D.pack.name),D.dispose();i.evictions+=c.size,u.length=0,c.clear(),i.residentBytes=0,i.ready=0,h++},onRestored(){!e||g||(d=!1,M=!0,m=!0,h++,e.packs.request(w),w.length=0)},info:i,dispose(){g=!0,e?.cancel();for(const D of c.values())kh(D);for(const D of u)D.dispose();u.length=0,c.clear(),f?.dispose()}}}function kh(n){for(const e of Object.values(n.textures))e.dispose();for(const e of n.meshes)for(const t of e.levels)t.geometry.dispose()}function ky(n){const e=ae.smooth,t=Math.max(1,n.w),i=Math.max(1,n.h),s=Math.round(t*n.dpr),r=Math.round(i*n.dpr);let a=e.scale;e.minPerCss>0&&(a=Math.max(a,e.minPerCss/n.dpr));const o=s*r;e.maxPixels>0&&a*a*o>e.maxPixels&&(a=Math.sqrt(e.maxPixels/o));const l=Math.min(1,a);return{cssW:t,cssH:i,screenW:s,screenH:r,scale:l,drawW:Math.max(1,Math.round(s*l)),drawH:Math.max(1,Math.round(r*l))}}function By(n=()=>performance.now()){const e={prologueMs:0,renderMs:0};let t=0,i=0;return{timings:e,start(){t=n()},mark(){i=n(),e.prologueMs=i-t},end(){e.renderMs=n()-i},idle(){e.prologueMs=0,e.renderMs=0}}}const zy={x:0,y:0,z:0},Wi={x:0,y:0,z:0},gr={x:0,y:0,depthMetres:0,eyeMetres:0,pixelsPerMetre:0},Gy={x:0,y:0},Bh=new G,zh=new G;function Hy(n,e,t){let i=0;for(let s=0;s<t;s++)e[s]&&n.drawn(s)&&i++;return i}function qy(n){YS();let e=!1;const t=J=>{e||(e=!0,n.onFailure?n.onFailure(J):n.log(`flyby: ${J}`))},i=new k_({canvas:n.canvas,context:n.gl,antialias:!1,powerPreference:"high-performance",depth:!1});i.info.autoReset=!1,i.shadowMap.enabled=!0,i.debug.checkShaderErrors=!0,i.debug.onShaderError=(J,de)=>{const Pe=J.getProgramInfoLog(de)??"";t(`a shader did not link${Pe?` (${Pe.trim().slice(0,$e.fallback.shaderLogChars)})`:""}, so the classic renderer is taking over`)};const s=new py(n.build,{gameWalker:!0}),r=new gy(s.scene);r.attach(i),r.onStaticBox=J=>s.treeCasters(J);let a=!1;Sd(s.scene,"casters",()=>{a&&r.invalidateCasters()}),a=!0;const o=J_(),l=q_(ae.origin),c=new Xf,u=new X_,f=lS(),h=jS(s,ae.origin),d=Oy(i,n.assets??null),g=Ty({ps:s,origin:ae.origin,three:i,assets:d}),M=s.looks.get("pixel"),p=JM(M.material("voxel"),ae.origin,M.makeVoxel?.bind(M)),m=iy($e.particles.fixedPerLight*(n.aviationLights??0));s.scene.add(p.group),m.object.layers.set(_s.actors),s.scene.add(m.object),m.fixedObject.layers.set(_s.actors),s.scene.add(m.fixedObject);let y=null;const w=new aS,_={world:n.world,ground:null,objects:w};let v=new Uint8Array($e.objects.maxDrawn),S=!1,x=null,b=0,E=!!n.failSight;const T=new aM({march:(J,de,Pe,Ze)=>{if(E)throw E=!1,new Error("forced (?gpuFail=sight)");return iM(l,_,J,de,Pe,Ze?l.cpu.subShare:0)},eye:J=>{J.x=l.eye.x,J.y=l.eye.y,J.z=l.eye.z},distance:(J,de,Pe)=>(ui(l.origin,l.cpu.cellMetres,J,de,Pe,Wi),Math.hypot(Wi.x-l.eye.x,Wi.y-l.eye.y,Wi.z-l.eye.z)),fault:J=>{b++,x===null&&(x=J,t(J))}}),P=(J,de)=>{const Pe=p.modelOf(de);return Pe||(p.skippedAt(de)||de<v.length&&v[de]!==0?J.model:null)},L=J=>J<v.length?v[J]:0;let D=new Uint8Array($e.objects.maxDrawn),C=0,I=0;const O=new ap(n.now);let U=!1,$=null,k=0,V=!0;n.canvas.addEventListener("webglcontextlost",J=>{J.preventDefault(),d.onLost(),g.onLost(),O.onLost()==="giveUp"&&(U=!0,t(O.reason()))}),n.canvas.addEventListener("webglcontextrestored",()=>{O.onRestored(),V=!1,$=null,r.invalidateCasters(),Rd(i),d.onRestored(),g.onRestored()});let X=1,te=1,le=1,z=1,Z=1,se=1;const q=(J,de)=>{J===X&&de===te||(X=J,te=de,i.setSize(X,te,!1))},F=()=>{const J=n.cssSize(),de=ky(J);Z=de.cssW,se=de.cssH,In.w=de.screenW,In.h=de.screenH,In.dpr=J.dpr,Ua.scale=de.scale,q(de.drawW,de.drawH)};F(),le=X,z=te;const ee=J=>{const de=o.persp;return l.ortho?l.metresPerPixel:(zh.copy(J),l.eye.distanceTo(zh)*2*Math.tan(de.fov*Math.PI/360)/te)},fe=(J,de)=>r.inMovingShadow(J,de),he=J=>{J.update(r.tod.night),J.light?.(r.tod,f.timeSec),J.clouds?.(f.cloudShare)},ge=By();let Le=null,ke;const lt={kind:"gpu",get width(){return le},get height(){return z},get drawWidth(){return X},get drawHeight(){return te},get scaleX(){return Z/le},get scaleY(){return se/z},get failure(){return x},get canvas(){return n.canvas},get gaveUp(){return O.gaveUp||U},get reason(){return O.gaveUp?O.reason():""},resize(J,de){F(),n.gridIsDrawing?(le=X,z=te):(le=Math.max(1,Math.round(J)),z=Math.max(1,Math.round(de)))},render(J,de){if(Le=J,ke=de,O.lost){O.tick()==="giveUp"&&!U&&(U=!0,t(O.reason())),ge.idle(),I=0;return}if(!V){$?n.now()-k>$e.fallback.restoreWarmLimitSeconds&&t(`compiling the shaders again after a lost context took over ${$e.fallback.restoreWarmLimitSeconds} s, so the classic renderer is taking over`):(k=n.now(),$=lt.prewarm().then(()=>V=!0,Xe=>t(`compiling the shaders again after a lost context failed (${Xe instanceof Error?Xe.message:String(Xe)})`))),ge.idle(),I=0;return}ge.start();const Pe=de??n.actors?.()??null;ah(l,J.camera,X,te,J.world,f.hazeFullMetres,le,z),fS(f,J,l),ah(l,J.camera,X,te,J.world,f.hazeFullMetres,le,z),G_(l),s.setWaterGrid(Di(l),l),c.set(l),sp(l.cpu,J.objects),H_(l),Z_(l,J);const Ze=fh(o,l);if(D.length<J.objects.length&&(D=new Uint8Array(J.objects.length*2)),D.fill(0,0,J.objects.length),d.tick(),g.update(J,l,Pe,D),h.update(J,l,Pe,D),C=Hy(h,D,J.objects.length),s.jet.frustumCulled=!l.cpu.subOn,v.length<J.objects.length&&(v=new Uint8Array(J.objects.length*2)),v.fill(0,0,J.objects.length),Pe)for(const Xe of Pe.poses)Xe.object>=0&&Xe.object<J.objects.length&&D[Xe.object]&&(v[Xe.object]=Xe.kind==="walker"?1:2);p.update(J,l,Pe,D),m.update(J.particles,J.lightPool??null,l,r.tod.night,J.followParticles??0),J.street?(y||(y=xS(J.world)),y.setScene(J.street),_.ground=y):(_.ground=null,y?.setScene(null)),_.world=J.world,w.setFrame(J.objects,l.origin,l.cpu.cellMetres,P,L,J.followObjects??0,l.cpu.snapDX,l.cpu.snapDY),S=!0,T.carryOver(),r.setHour(f.hour,f.haze),Nr.uLitShare.value=f.litTower,i.info.reset(),Bh.set(f.shadowFocus.x,f.shadowFocus.y,f.shadowFocus.z),r.fitShadow(Bh,f.shadowHalf,Ze),s.treeLod(Ze.position),s.farFacings(Ze),s.cullActors(Ze,ee,i.shadowMap.enabled?fe:null,!1,c),h.hideUnclaimed(),g.prepare(Ze),yd.object=(J.followObjects??0)>0?g.drawn(0)??h.drawn(0)??p.drawn(0):null,s.looks.forEach(he);const De=Za.n;u.lift(s.scene,l,c),ge.mark();try{bM(s.looks,i,s.scene,Ze)}finally{u.restore()}ge.end(),I=Za.n-De},project(J,de){if(!S)return null;const Pe=l.cpu.cellMetres;return ui(l.origin,Pe,J.x,J.y,J.z,Wi),Nc(l,Wi.x,Wi.y,Wi.z,gr,de?l.cpu.subShare:0,de?1:0)?T.point(gr.x*l.toGridX,gr.y*l.toGridY,gr.depthMetres/Pe,gr.pixelsPerMetre*Pe*l.toGridY,J.x,J.y,J.z,!!de):null},unproject(J,de){return S?rM(l,_,J/l.toGridX,de/l.toGridY,zy):null},warmSight(J){for(const de of J)Qo(de)},warmMeshes(J,de=$e.prewarm.uploadDraws){for(HM(J),K_(J);jo(Number.POSITIVE_INFINITY););for(const St of J)Qo(St);if(!de||O.lost)return 0;const Pe=new $t($e.prewarm.targetPx,$e.prewarm.targetPx,{depthBuffer:!0}),Ze=i.getRenderTarget(),De=new gt(void 0,M.material("voxel"));De.frustumCulled=!1;const Xe=new $s;Xe.add(De);let xt=0;i.setRenderTarget(Pe);try{for(const St of J){const W=Gr(St);W&&(De.geometry=W.geometry,i.render(Xe,o.persp),xt++)}}finally{i.setRenderTarget(Ze),Pe.dispose()}return xt},warmLandmarks(J,de=$e.prewarm.uploadDraws){const Pe=md(),Ze=[];for(const De of J)Pe.has(De)?Qo(De):Ze.push(De);return lt.warmMeshes(Ze,de)},conform(J){NM(J)},capture(){if(!Le||O.lost)return new Uint8Array(0);lt.render(Le,ke);const J=n.gl,de=J.drawingBufferWidth,Pe=J.drawingBufferHeight,Ze=new Uint8Array(de*Pe*4);J.readPixels(0,0,de,Pe,J.RGBA,J.UNSIGNED_BYTE,Ze);const De=new Uint8Array(Ze.length),Xe=de*4;for(let xt=0;xt<Pe;xt++)De.set(Ze.subarray((Pe-1-xt)*Xe,(Pe-xt)*Xe),xt*Xe);return De},linkFailure(){if(O.lost)return null;const J=n.gl;for(const de of i.info.programs??[]){const Pe=de.program;if(!Pe)continue;if(J.getProgramParameter(Pe,J.LINK_STATUS)===!1)return de.name??"a program"}return null},viewEye(J){return S?rp(l.cpu,J):!1},shimmerPlaced(){return null},followOffset(){return qf(l,Gy)},get info(){return{calls:i.info.render.calls,triangles:i.info.render.triangles,objects:p.stats.drawn,fading:p.stats.fading,actors:C,walker:{unresolvedFrames:h.unresolvedFrames,unresolvedModels:Ti.unresolved,oddPivot:Ti.oddPivot,kneeMoved:Ti.kneeMoved,liftedTwice:Ti.liftedTwice},heroes:g.info,assets:d.info,waiting:p.stats.waiting,culled:p.stats.culled,popped:p.stats.popped,particles:m.drawn,fixedPoints:m.fixedDrawn,particlesDropped:m.dropped,shadowHalf:f.shadowHalf,shadowDepthOnly:uc(i),savingsAct:{...s.frameWorkActs,clearFinishColour:I>0,shadowDepthOnly:i.shadowMap.enabled&&uc(i)},timings:{prologueMs:ge.timings.prologueMs,renderMs:ge.timings.renderMs},sight:{marched:T.marched,marchMs:T.spentMs,pending:T.pendingCount,objects:w.count,objectsWaiting:w.waiting,gridsQueued:nS(),faults:b},...n.debug?{meshes:WM()}:{}}},get timings(){return ge.timings},prepare(J=$e.meshes.sliceBudgetMs){const de=jo(J),Pe=xh();return de||Pe},prepareSight(J=$e.sight.occupancyBudgetMs){return xh(J)},prepareMeshes(J=$e.meshes.sliceBudgetMs){return jo(J)},meshesQueued(){return VM()},async prewarm(){if(O.lost)return{programs:0};if(await d.ready(),O.lost)return{programs:0};const J=i.info.programs?.length??0,de=new $t($e.prewarm.targetPx,$e.prewarm.targetPx,{depthBuffer:!1}),Pe=i.getRenderTarget(),Ze=o.persp,De=[];i.setRenderTarget(de);try{De.push(i.compileAsync(s.scene,Ze));for(const St of p.warmMeshes())De.push(i.compileAsync(St,Ze,s.scene));for(const St of s.walker.warmMeshes([s.walkerMaterial,s.walkerDissolve]))De.push(i.compileAsync(St,Ze,s.scene));for(const St of g.warmMeshes())De.push(i.compileAsync(St,Ze,s.scene));s.looks.forEach(St=>St.warmMeshes?.().forEach(W=>De.push(i.compileAsync(W,Ze,s.scene))))}finally{i.setRenderTarget(Pe)}let Xe=()=>{};const xt=new Promise(St=>Xe=St);n.canvas.addEventListener("webglcontextlost",Xe);try{await Promise.race([Promise.all(De),xt])}finally{n.canvas.removeEventListener("webglcontextlost",Xe),de.dispose()}return{programs:(i.info.programs?.length??0)-J}},debugDraw:{three:i,scene:s.scene,camera:()=>fh(o,l),gv:l,objects:p.group,rig:s.jet,particles:m.object,walkerMark:J=>h.setMark(J),heroes:g},dispose(){m.dispose(),d.dispose(),i.dispose()}};return lt}function $y(n,e=console){Xp((t,i,...s)=>{n&&e[t](`three: ${i}`,...s)})}export{By as createFrameClock,qy as createGpuRenderer,ky as drawingSize,Hy as rigsClaimed,$y as routeThreeConsole,Xy as startAssets};
