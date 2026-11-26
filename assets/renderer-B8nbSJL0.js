import{aD as Pm,aE as Ld,aF as Dn,aG as Lm,aH as Dm,aI as Ru,aJ as Im,aK as Dd,aL as ds,aM as Qi,aN as gl,aO as Hi,aP as xl,aQ as vl,aR as Fm,aS as Nm,T as Um,aT as xo,aU as mh,aV as Fi,aW as Om,aa as km,ab as Bm,aX as Id,C as _r,aY as zm,aZ as Pa,a_ as Gm,a$ as Hm,b0 as gh,b1 as Wm,a8 as Vm,b2 as $m,G as Ti,A as Xm,b3 as qm,b4 as La,b5 as xh,b6 as Ym,b7 as Fd,F as jm,b8 as Nd,b9 as Km,ba as Zm,j as Ud,n as vo,bb as Jm,bc as Qm,bd as vh,be as Mh,bf as e0,bg as t0,bh as _h,bi as Sh,bj as yh,bk as wh,bl as n0,bm as i0,bn as bh,bo as Eh,bp as s0,bq as Ah,br as r0,r as a0,bs as o0,bt as l0,bu as c0,bv as u0,bw as h0,bx as f0,by as d0,bz as Rc,bA as p0,bB as m0,bC as g0}from"./index-Wc1K-LHb.js";import{G as Ge,P as re,o as mi,f as Od,E as At,A as Hn,p as Th,O as Cc,h as x0,v as v0,s as M0,c as _0,a as S0,b as Yo,C as y0}from"./game-C62C9xKs.js";/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Cu="187",w0=0,Rh=1,b0=2,E0=0,ia=1,A0=2,Qr=3,Ji=0,yn=1,jn=2,Sr=0,Os=1,Co=2,Ch=3,Ph=4,Pu=5,gr=100,T0=101,R0=102,C0=103,P0=104,L0=200,da=201,D0=202,I0=203,kd=204,Tr=205,F0=206,N0=207,U0=208,O0=209,k0=210,B0=211,z0=212,G0=213,H0=214,Pc=0,Po=1,Lc=2,pa=3,Dc=4,Ic=5,Fc=6,Nc=7,jo=0,W0=1,V0=2,ji=0,Bd=1,zd=2,Gd=3,Hd=4,Wd=5,Vd=6,$d=7,Lh="attached",$0="detached",Xd=300,Rr=301,ma=302,Ml=303,_l=304,Cr=1e3,qi=1001,Uc=1002,Tt=1003,X0=1004,Da=1005,Xt=1006,Sl=1007,ti=1008,ln=1009,qd=1010,Yd=1011,ga=1012,Lu=1013,Ci=1014,Un=1015,Pi=1016,Du=1017,Iu=1018,Pr=1020,jd=35902,Kd=35899,Zd=1021,Jd=1022,On=1023,gs=1026,ms=1027,$s=1028,Fu=1029,xs=1030,Nu=1031,Uu=1033,Mo=33776,_o=33777,So=33778,yo=33779,Oc=35840,kc=35841,Bc=35842,zc=35843,Gc=36196,Hc=37492,Wc=37496,Vc=37488,$c=37489,Lo=37490,Xc=37491,qc=37808,Yc=37809,jc=37810,Kc=37811,Zc=37812,Jc=37813,Qc=37814,eu=37815,tu=37816,nu=37817,iu=37818,su=37819,ru=37820,au=37821,ou=36492,lu=36494,cu=36495,uu=36283,hu=36284,Do=36285,fu=36286,q0=3200,xa=0,Y0=1,di="",Sn="srgb",Io="srgb-linear",Fo="linear",Ut="srgb",yl=7680,j0=519,K0=512,Z0=513,J0=514,Qd=515,Q0=516,eg=517,ep=518,tp=519,tg=35044,ng=35048,Dh="300 es",gi=2e3,va=2001;function ig(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function No(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function sg(){const n=No("canvas");return n.style.display="block",n}const Ih={};let Gs=null;function rg(n){Gs=n}function Fh(...n){const e="THREE."+n.shift();Gs?Gs("log",e,...n):console.log(e,...n)}function np(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function at(...n){n=np(n);const e="THREE."+n.shift();if(Gs)Gs("warn",e,...n);else{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Lt(...n){n=np(n);const e="THREE."+n.shift();if(Gs)Gs("error",e,...n);else{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function yr(...n){const e=n.join(" ");e in Ih||(Ih[e]=!0,at(...n))}function ag(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const og={[Pc]:Pc,[Lc]:Fc,[Dc]:Dc,[pa]:Ic,[Po]:Po,[Fc]:Lc,[Nc]:Nc,[Ic]:pa};class Xs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const An=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Nh=1234567;const sa=Math.PI/180,Ma=180/Math.PI;function qs(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(An[n&255]+An[n>>8&255]+An[n>>16&255]+An[n>>24&255]+"-"+An[e&255]+An[e>>8&255]+"-"+An[e>>16&15|64]+An[e>>24&255]+"-"+An[t&63|128]+An[t>>8&255]+"-"+An[t>>16&255]+An[t>>24&255]+An[i&255]+An[i>>8&255]+An[i>>16&255]+An[i>>24&255]).toLowerCase()}function St(n,e,t){return Math.max(e,Math.min(t,n))}function Ou(n,e){return(n%e+e)%e}function lg(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function cg(n,e,t){return n!==e?(t-n)/(e-n):0}function ra(n,e,t){return(1-t)*n+t*e}function ug(n,e,t,i){return ra(n,e,1-Math.exp(-t*i))}function hg(n,e=1){return e-Math.abs(Ou(n,e*2)-e)}function fg(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function dg(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function pg(n,e){return n+Math.floor(Math.random()*(e-n+1))}function mg(n,e){return n+Math.random()*(e-n)}function gg(n){return n*(.5-Math.random())}function xg(n){n!==void 0&&(Nh=n);let e=Nh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function vg(n){return n*sa}function Mg(n){return n*Ma}function _g(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function Sg(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function ip(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function yg(n,e,t,i,s){const r=Math.cos,a=Math.sin,l=r(t/2),o=a(t/2),u=r((e+i)/2),c=a((e+i)/2),f=r((e-i)/2),h=a((e-i)/2),d=r((i-e)/2),g=a((i-e)/2);switch(s){case"XYX":n.set(l*c,o*f,o*h,l*u);break;case"YZY":n.set(o*h,l*c,o*f,l*u);break;case"ZXZ":n.set(o*f,o*h,l*c,l*u);break;case"XZX":n.set(l*c,o*g,o*d,l*u);break;case"YXY":n.set(o*d,l*c,o*g,l*u);break;case"ZYZ":n.set(o*g,o*d,l*c,l*u);break;default:at("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ku(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function sp(n,e){if(e.constructor===Float32Array)return n;const t=ku(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/t,-1)}function rp(n,e){if(e.constructor===Float32Array)return n;const t=ku(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*t)}const Uh={DEG2RAD:sa,RAD2DEG:Ma,generateUUID:qs,clamp:St,euclideanModulo:Ou,mapLinear:lg,inverseLerp:cg,lerp:ra,damp:ug,pingpong:hg,smoothstep:fg,smootherstep:dg,randInt:pg,randFloat:mg,randFloatSpread:gg,seededRandom:xg,degToRad:vg,radToDeg:Mg,isPowerOfTwo:_g,ceilPowerOfTwo:Sg,floorPowerOfTwo:ip,setQuaternionFromProperEuler:yg,normalize:rp,denormalize:sp};class qe{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=St(this.x,e.x,t.x),this.y=St(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=St(this.x,e,t),this.y=St(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(St(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(St(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class vi{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,l){let o=i[s+0],u=i[s+1],c=i[s+2],f=i[s+3],h=r[a+0],d=r[a+1],g=r[a+2],v=r[a+3];if(f!==v||o!==h||u!==d||c!==g){let p=o*h+u*d+c*g+f*v;p<0&&(h=-h,d=-d,g=-g,v=-v,p=-p);let m=1-l;if(p<.9995){const y=Math.acos(p),_=Math.sin(y);m=Math.sin(m*y)/_,l=Math.sin(l*y)/_,o=o*m+h*l,u=u*m+d*l,c=c*m+g*l,f=f*m+v*l}else{o=o*m+h*l,u=u*m+d*l,c=c*m+g*l,f=f*m+v*l;const y=1/Math.sqrt(o*o+u*u+c*c+f*f);o*=y,u*=y,c*=y,f*=y}}e[t]=o,e[t+1]=u,e[t+2]=c,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,s,r,a){const l=i[s],o=i[s+1],u=i[s+2],c=i[s+3],f=r[a],h=r[a+1],d=r[a+2],g=r[a+3];return e[t]=l*g+c*f+o*d-u*h,e[t+1]=o*g+c*h+u*f-l*d,e[t+2]=u*g+c*d+l*h-o*f,e[t+3]=c*g-l*f-o*h-u*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,a=e._order,l=Math.cos,o=Math.sin,u=l(i/2),c=l(s/2),f=l(r/2),h=o(i/2),d=o(s/2),g=o(r/2);switch(a){case"XYZ":this._x=h*c*f+u*d*g,this._y=u*d*f-h*c*g,this._z=u*c*g+h*d*f,this._w=u*c*f-h*d*g;break;case"YXZ":this._x=h*c*f+u*d*g,this._y=u*d*f-h*c*g,this._z=u*c*g-h*d*f,this._w=u*c*f+h*d*g;break;case"ZXY":this._x=h*c*f-u*d*g,this._y=u*d*f+h*c*g,this._z=u*c*g+h*d*f,this._w=u*c*f-h*d*g;break;case"ZYX":this._x=h*c*f-u*d*g,this._y=u*d*f+h*c*g,this._z=u*c*g-h*d*f,this._w=u*c*f+h*d*g;break;case"YZX":this._x=h*c*f+u*d*g,this._y=u*d*f+h*c*g,this._z=u*c*g-h*d*f,this._w=u*c*f-h*d*g;break;case"XZY":this._x=h*c*f-u*d*g,this._y=u*d*f-h*c*g,this._z=u*c*g+h*d*f,this._w=u*c*f+h*d*g;break;default:at("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],l=t[5],o=t[9],u=t[2],c=t[6],f=t[10],h=i+l+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(c-o)*d,this._y=(r-u)*d,this._z=(a-s)*d}else if(i>l&&i>f){const d=2*Math.sqrt(1+i-l-f);this._w=(c-o)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+u)/d}else if(l>f){const d=2*Math.sqrt(1+l-i-f);this._w=(r-u)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(o+c)/d}else{const d=2*Math.sqrt(1+f-i-l);this._w=(a-s)/d,this._x=(r+u)/d,this._y=(o+c)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(St(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,a=e._w,l=t._x,o=t._y,u=t._z,c=t._w;return this._x=i*c+a*l+s*u-r*o,this._y=s*c+a*o+r*l-i*u,this._z=r*c+a*u+i*o-s*l,this._w=a*c-i*l-s*o-r*u,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,l=this.dot(e);l<0&&(i=-i,s=-s,r=-r,a=-a,l=-l);let o=1-t;if(l<.9995){const u=Math.acos(l),c=Math.sin(u);o=Math.sin(o*u)/c,t=Math.sin(t*u)/c,this._x=this._x*o+i*t,this._y=this._y*o+s*t,this._z=this._z*o+r*t,this._w=this._w*o+a*t,this._onChangeCallback()}else this._x=this._x*o+i*t,this._y=this._y*o+s*t,this._z=this._z*o+r*t,this._w=this._w*o+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{static{this.prototype.isVector3=!0}constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Oh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Oh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,l=e.z,o=e.w,u=2*(a*s-l*i),c=2*(l*t-r*s),f=2*(r*i-a*t);return this.x=t+o*u+a*f-l*c,this.y=i+o*c+l*u-r*f,this.z=s+o*f+r*c-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=St(this.x,e.x,t.x),this.y=St(this.y,e.y,t.y),this.z=St(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=St(this.x,e,t),this.y=St(this.y,e,t),this.z=St(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(St(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,a=t.x,l=t.y,o=t.z;return this.x=s*o-r*l,this.y=r*a-i*o,this.z=i*l-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return wl.copy(this).projectOnVector(e),this.sub(wl)}reflect(e){return this.sub(wl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(St(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const wl=new z,Oh=new vi;class pt{static{this.prototype.isMatrix3=!0}constructor(e,t,i,s,r,a,l,o,u){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,l,o,u)}set(e,t,i,s,r,a,l,o,u){const c=this.elements;return c[0]=e,c[1]=s,c[2]=l,c[3]=t,c[4]=r,c[5]=o,c[6]=i,c[7]=a,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],l=i[3],o=i[6],u=i[1],c=i[4],f=i[7],h=i[2],d=i[5],g=i[8],v=s[0],p=s[3],m=s[6],y=s[1],_=s[4],w=s[7],S=s[2],M=s[5],x=s[8];return r[0]=a*v+l*y+o*S,r[3]=a*p+l*_+o*M,r[6]=a*m+l*w+o*x,r[1]=u*v+c*y+f*S,r[4]=u*p+c*_+f*M,r[7]=u*m+c*w+f*x,r[2]=h*v+d*y+g*S,r[5]=h*p+d*_+g*M,r[8]=h*m+d*w+g*x,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],l=e[5],o=e[6],u=e[7],c=e[8];return t*a*c-t*l*u-i*r*c+i*l*o+s*r*u-s*a*o}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],l=e[5],o=e[6],u=e[7],c=e[8],f=c*a-l*u,h=l*o-c*r,d=u*r-a*o,g=t*f+i*h+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=f*v,e[1]=(s*u-c*i)*v,e[2]=(l*i-s*a)*v,e[3]=h*v,e[4]=(c*t-s*o)*v,e[5]=(s*r-l*t)*v,e[6]=d*v,e[7]=(i*o-u*t)*v,e[8]=(a*t-i*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,l){const o=Math.cos(r),u=Math.sin(r);return this.set(i*o,i*u,-i*(o*a+u*l)+a+e,-s*u,s*o,-s*(-u*a+o*l)+l+t,0,0,1),this}scale(e,t){return yr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(bl.makeScale(e,t)),this}rotate(e){return yr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(bl.makeRotation(-e)),this}translate(e,t){return yr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(bl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const bl=new pt,kh=new pt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Bh=new pt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function wg(){const n={enabled:!0,workingColorSpace:Io,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Ut&&(s.r=Ki(s.r),s.g=Ki(s.g),s.b=Ki(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Ut&&(s.r=wr(s.r),s.g=wr(s.g),s.b=wr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===di?Fo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Io]:{primaries:e,whitePoint:i,transfer:Fo,toXYZ:kh,fromXYZ:Bh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Sn},outputColorSpaceConfig:{drawingBufferColorSpace:Sn}},[Sn]:{primaries:e,whitePoint:i,transfer:Ut,toXYZ:kh,fromXYZ:Bh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Sn}}}),n}const bt=wg();function Ki(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function wr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Zs;class bg{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Zs===void 0&&(Zs=No("canvas")),Zs.width=e.width,Zs.height=e.height;const s=Zs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Zs}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=No("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ki(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ki(t[i]/255)*255):t[i]=Ki(t[i]);return{data:t,width:e.width,height:e.height}}else return at("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Eg=0;class Bu{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Eg++}),this.uuid=qs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,l=s.length;a<l;a++)s[a].isDataTexture?r.push(El(s[a].image)):r.push(El(s[a]))}else r=El(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function El(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?bg.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(at("Texture: Unable to serialize Texture."),{})}let Ag=0;const Al=new z;class wn extends Xs{constructor(e=wn.DEFAULT_IMAGE,t=wn.DEFAULT_MAPPING,i=qi,s=qi,r=Xt,a=ti,l=On,o=ln,u=wn.DEFAULT_ANISOTROPY,c=di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ag++}),this.uuid=qs(),this.name="",this.source=new Bu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=u,this.format=l,this.internalFormat=null,this.type=o,this.offset=new qe(0,0),this.repeat=new qe(1,1),this.center=new qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Al).x}get height(){return this.source.getSize(Al).y}get depth(){return this.source.getSize(Al).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){at(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){at(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Xd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Cr:e.x=e.x-Math.floor(e.x);break;case qi:e.x=e.x<0?0:1;break;case Uc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Cr:e.y=e.y-Math.floor(e.y);break;case qi:e.y=e.y<0?0:1;break;case Uc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}wn.DEFAULT_IMAGE=null;wn.DEFAULT_MAPPING=Xd;wn.DEFAULT_ANISOTROPY=1;class ct{static{this.prototype.isVector4=!0}constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const o=e.elements,u=o[0],c=o[4],f=o[8],h=o[1],d=o[5],g=o[9],v=o[2],p=o[6],m=o[10];if(Math.abs(c-h)<.01&&Math.abs(f-v)<.01&&Math.abs(g-p)<.01){if(Math.abs(c+h)<.1&&Math.abs(f+v)<.1&&Math.abs(g+p)<.1&&Math.abs(u+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(u+1)/2,w=(d+1)/2,S=(m+1)/2,M=(c+h)/4,x=(f+v)/4,b=(g+p)/4;return _>w&&_>S?_<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(_),s=M/i,r=x/i):w>S?w<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(w),i=M/s,r=b/s):S<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),i=x/r,s=b/r),this.set(i,s,r,t),this}let y=Math.sqrt((p-g)*(p-g)+(f-v)*(f-v)+(h-c)*(h-c));return Math.abs(y)<.001&&(y=1),this.x=(p-g)/y,this.y=(f-v)/y,this.z=(h-c)/y,this.w=Math.acos((u+d+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=St(this.x,e.x,t.x),this.y=St(this.y,e.y,t.y),this.z=St(this.z,e.z,t.z),this.w=St(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=St(this.x,e,t),this.y=St(this.y,e,t),this.z=St(this.z,e,t),this.w=St(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(St(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Tg extends Xs{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new ct(0,0,e,t),this.scissorTest=!1,this.viewport=new ct(0,0,e,t),this.textures=[];const s=i.count;for(let r=0;r<s;r++)this.textures[r]=new wn({width:e,height:t,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Xt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Bu(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class on extends Tg{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class ap extends wn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Tt,this.minFilter=Tt,this.wrapR=qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Rg extends wn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Tt,this.minFilter=Tt,this.wrapR=qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}class et{static{this.prototype.isMatrix4=!0}constructor(e,t,i,s,r,a,l,o,u,c,f,h,d,g,v,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,l,o,u,c,f,h,d,g,v,p)}set(e,t,i,s,r,a,l,o,u,c,f,h,d,g,v,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=s,m[1]=r,m[5]=a,m[9]=l,m[13]=o,m[2]=u,m[6]=c,m[10]=f,m[14]=h,m[3]=d,m[7]=g,m[11]=v,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new et().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,s=1/Js.setFromMatrixColumn(e,0).length(),r=1/Js.setFromMatrixColumn(e,1).length(),a=1/Js.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),l=Math.sin(i),o=Math.cos(s),u=Math.sin(s),c=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const h=a*c,d=a*f,g=l*c,v=l*f;t[0]=o*c,t[4]=-o*f,t[8]=u,t[1]=d+g*u,t[5]=h-v*u,t[9]=-l*o,t[2]=v-h*u,t[6]=g+d*u,t[10]=a*o}else if(e.order==="YXZ"){const h=o*c,d=o*f,g=u*c,v=u*f;t[0]=h+v*l,t[4]=g*l-d,t[8]=a*u,t[1]=a*f,t[5]=a*c,t[9]=-l,t[2]=d*l-g,t[6]=v+h*l,t[10]=a*o}else if(e.order==="ZXY"){const h=o*c,d=o*f,g=u*c,v=u*f;t[0]=h-v*l,t[4]=-a*f,t[8]=g+d*l,t[1]=d+g*l,t[5]=a*c,t[9]=v-h*l,t[2]=-a*u,t[6]=l,t[10]=a*o}else if(e.order==="ZYX"){const h=a*c,d=a*f,g=l*c,v=l*f;t[0]=o*c,t[4]=g*u-d,t[8]=h*u+v,t[1]=o*f,t[5]=v*u+h,t[9]=d*u-g,t[2]=-u,t[6]=l*o,t[10]=a*o}else if(e.order==="YZX"){const h=a*o,d=a*u,g=l*o,v=l*u;t[0]=o*c,t[4]=v-h*f,t[8]=g*f+d,t[1]=f,t[5]=a*c,t[9]=-l*c,t[2]=-u*c,t[6]=d*f+g,t[10]=h-v*f}else if(e.order==="XZY"){const h=a*o,d=a*u,g=l*o,v=l*u;t[0]=o*c,t[4]=-f,t[8]=u*c,t[1]=h*f+v,t[5]=a*c,t[9]=d*f-g,t[2]=g*f-d,t[6]=l*c,t[10]=v*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Cg,e,Pg)}lookAt(e,t,i){const s=this.elements;return $n.subVectors(e,t),$n.lengthSq()===0&&($n.z=1),$n.normalize(),is.crossVectors(i,$n),is.lengthSq()===0&&(Math.abs(i.z)===1?$n.x+=1e-4:$n.z+=1e-4,$n.normalize(),is.crossVectors(i,$n)),is.normalize(),Ia.crossVectors($n,is),s[0]=is.x,s[4]=Ia.x,s[8]=$n.x,s[1]=is.y,s[5]=Ia.y,s[9]=$n.y,s[2]=is.z,s[6]=Ia.z,s[10]=$n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],l=i[4],o=i[8],u=i[12],c=i[1],f=i[5],h=i[9],d=i[13],g=i[2],v=i[6],p=i[10],m=i[14],y=i[3],_=i[7],w=i[11],S=i[15],M=s[0],x=s[4],b=s[8],A=s[12],E=s[1],P=s[5],R=s[9],D=s[13],C=s[2],I=s[6],U=s[10],O=s[14],W=s[3],k=s[7],G=s[11],Z=s[15];return r[0]=a*M+l*E+o*C+u*W,r[4]=a*x+l*P+o*I+u*k,r[8]=a*b+l*R+o*U+u*G,r[12]=a*A+l*D+o*O+u*Z,r[1]=c*M+f*E+h*C+d*W,r[5]=c*x+f*P+h*I+d*k,r[9]=c*b+f*R+h*U+d*G,r[13]=c*A+f*D+h*O+d*Z,r[2]=g*M+v*E+p*C+m*W,r[6]=g*x+v*P+p*I+m*k,r[10]=g*b+v*R+p*U+m*G,r[14]=g*A+v*D+p*O+m*Z,r[3]=y*M+_*E+w*C+S*W,r[7]=y*x+_*P+w*I+S*k,r[11]=y*b+_*R+w*U+S*G,r[15]=y*A+_*D+w*O+S*Z,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],l=e[5],o=e[9],u=e[13],c=e[2],f=e[6],h=e[10],d=e[14],g=e[3],v=e[7],p=e[11],m=e[15],y=o*d-u*h,_=l*d-u*f,w=l*h-o*f,S=a*d-u*c,M=a*h-o*c,x=a*f-l*c;return t*(v*y-p*_+m*w)-i*(g*y-p*S+m*M)+s*(g*_-v*S+m*x)-r*(g*w-v*M+p*x)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],a=e[5],l=e[9],o=e[2],u=e[6],c=e[10];return t*(a*c-l*u)-i*(r*c-l*o)+s*(r*u-a*o)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],l=e[5],o=e[6],u=e[7],c=e[8],f=e[9],h=e[10],d=e[11],g=e[12],v=e[13],p=e[14],m=e[15],y=t*l-i*a,_=t*o-s*a,w=t*u-r*a,S=i*o-s*l,M=i*u-r*l,x=s*u-r*o,b=c*v-f*g,A=c*p-h*g,E=c*m-d*g,P=f*p-h*v,R=f*m-d*v,D=h*m-d*p,C=y*D-_*R+w*P+S*E-M*A+x*b;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/C;return e[0]=(l*D-o*R+u*P)*I,e[1]=(s*R-i*D-r*P)*I,e[2]=(v*x-p*M+m*S)*I,e[3]=(h*M-f*x-d*S)*I,e[4]=(o*E-a*D-u*A)*I,e[5]=(t*D-s*E+r*A)*I,e[6]=(p*w-g*x-m*_)*I,e[7]=(c*x-h*w+d*_)*I,e[8]=(a*R-l*E+u*b)*I,e[9]=(i*E-t*R-r*b)*I,e[10]=(g*M-v*w+m*y)*I,e[11]=(f*w-c*M-d*y)*I,e[12]=(l*A-a*P-o*b)*I,e[13]=(t*P-i*A+s*b)*I,e[14]=(v*_-g*S-p*y)*I,e[15]=(c*S-f*_+h*y)*I,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,l=e.y,o=e.z,u=r*a,c=r*l;return this.set(u*a+i,u*l-s*o,u*o+s*l,0,u*l+s*o,c*l+i,c*o-s*a,0,u*o-s*l,c*o+s*a,r*o*o+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,a=t._y,l=t._z,o=t._w,u=r+r,c=a+a,f=l+l,h=r*u,d=r*c,g=r*f,v=a*c,p=a*f,m=l*f,y=o*u,_=o*c,w=o*f,S=i.x,M=i.y,x=i.z;return s[0]=(1-(v+m))*S,s[1]=(d+w)*S,s[2]=(g-_)*S,s[3]=0,s[4]=(d-w)*M,s[5]=(1-(h+m))*M,s[6]=(p+y)*M,s[7]=0,s[8]=(g+_)*x,s[9]=(p-y)*x,s[10]=(1-(h+v))*x,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let a=Js.set(s[0],s[1],s[2]).length();const l=Js.set(s[4],s[5],s[6]).length(),o=Js.set(s[8],s[9],s[10]).length();r<0&&(a=-a),ri.copy(this);const u=1/a,c=1/l,f=1/o;return ri.elements[0]*=u,ri.elements[1]*=u,ri.elements[2]*=u,ri.elements[4]*=c,ri.elements[5]*=c,ri.elements[6]*=c,ri.elements[8]*=f,ri.elements[9]*=f,ri.elements[10]*=f,t.setFromRotationMatrix(ri),i.x=a,i.y=l,i.z=o,this}makePerspective(e,t,i,s,r,a,l=gi,o=!1){const u=this.elements,c=2*r/(t-e),f=2*r/(i-s),h=(t+e)/(t-e),d=(i+s)/(i-s);let g,v;if(o)g=r/(a-r),v=a*r/(a-r);else if(l===gi)g=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(l===va)g=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return u[0]=c,u[4]=0,u[8]=h,u[12]=0,u[1]=0,u[5]=f,u[9]=d,u[13]=0,u[2]=0,u[6]=0,u[10]=g,u[14]=v,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,t,i,s,r,a,l=gi,o=!1){const u=this.elements,c=2/(t-e),f=2/(i-s),h=-(t+e)/(t-e),d=-(i+s)/(i-s);let g,v;if(o)g=1/(a-r),v=a/(a-r);else if(l===gi)g=-2/(a-r),v=-(a+r)/(a-r);else if(l===va)g=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return u[0]=c,u[4]=0,u[8]=0,u[12]=h,u[1]=0,u[5]=f,u[9]=0,u[13]=d,u[2]=0,u[6]=0,u[10]=g,u[14]=v,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Js=new z,ri=new et,Cg=new z(0,0,0),Pg=new z(1,1,1),is=new z,Ia=new z,$n=new z,zh=new et,Gh=new vi;class Li{constructor(e=0,t=0,i=0,s=Li.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],a=s[4],l=s[8],o=s[1],u=s[5],c=s[9],f=s[2],h=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(St(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-St(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(l,d),this._z=Math.atan2(o,u)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(St(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(o,r));break;case"ZYX":this._y=Math.asin(-St(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(o,r)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(St(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(l,d));break;case"XZY":this._z=Math.asin(-St(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(l,r)):(this._x=Math.atan2(-c,d),this._y=0);break;default:at("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return zh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(zh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Gh.setFromEuler(this),this.setFromQuaternion(Gh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Li.DEFAULT_ORDER="XYZ";class op{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Lg=0;const Hh=new z,Qs=new vi,Ni=new et,Fa=new z,Or=new z,Dg=new z,Ig=new vi,Wh=new z(1,0,0),Vh=new z(0,1,0),$h=new z(0,0,1),Xh={type:"added"},Fg={type:"removed"},er={type:"childadded",child:null},Tl={type:"childremoved",child:null};class nn extends Xs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Lg++}),this.uuid=qs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=nn.DEFAULT_UP.clone();const e=new z,t=new Li,i=new vi,s=new z(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new et},normalMatrix:{value:new pt}}),this.matrix=new et,this.matrixWorld=new et,this.matrixAutoUpdate=nn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new op,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Qs.setFromAxisAngle(e,t),this.quaternion.multiply(Qs),this}rotateOnWorldAxis(e,t){return Qs.setFromAxisAngle(e,t),this.quaternion.premultiply(Qs),this}rotateX(e){return this.rotateOnAxis(Wh,e)}rotateY(e){return this.rotateOnAxis(Vh,e)}rotateZ(e){return this.rotateOnAxis($h,e)}translateOnAxis(e,t){return Hh.copy(e).applyQuaternion(this.quaternion),this.position.add(Hh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Wh,e)}translateY(e){return this.translateOnAxis(Vh,e)}translateZ(e){return this.translateOnAxis($h,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ni.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Fa.copy(e):Fa.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Or.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ni.lookAt(Or,Fa,this.up):Ni.lookAt(Fa,Or,this.up),this.quaternion.setFromRotationMatrix(Ni),s&&(Ni.extractRotation(s.matrixWorld),Qs.setFromRotationMatrix(Ni),this.quaternion.premultiply(Qs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Lt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Xh),er.child=e,this.dispatchEvent(er),er.child=null):Lt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Fg),Tl.child=e,this.dispatchEvent(Tl),Tl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ni.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ni.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ni),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Xh),er.child=e,this.dispatchEvent(er),er.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Or,e,Dg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Or,Ig,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const r=this.children;for(let a=0,l=r.length;a<l;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(l=>({...l,boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(l=>({...l})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(l,o){return l[o.uuid]===void 0&&(l[o.uuid]=o.toJSON(e)),o.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const o=l.shapes;if(Array.isArray(o))for(let u=0,c=o.length;u<c;u++){const f=o[u];r(e.shapes,f)}else r(e.shapes,o)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let o=0,u=this.material.length;o<u;o++)l.push(r(e.materials,this.material[o]));s.material=l}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let l=0;l<this.children.length;l++)s.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let l=0;l<this.animations.length;l++){const o=this.animations[l];s.animations.push(r(e.animations,o))}}if(t){const l=a(e.geometries),o=a(e.materials),u=a(e.textures),c=a(e.images),f=a(e.shapes),h=a(e.skeletons),d=a(e.animations),g=a(e.nodes);l.length>0&&(i.geometries=l),o.length>0&&(i.materials=o),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(l){const o=[];for(const u in l){const c=l[u];delete c.metadata,o.push(c)}return o}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}nn.DEFAULT_UP=new z(0,1,0);nn.DEFAULT_MATRIX_AUTO_UPDATE=!0;nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class mn extends nn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ng={type:"move"};class Rl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new mn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new mn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new mn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null;const l=this._targetRay,o=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(const v of e.hand.values()){const p=t.getJointPose(v,i),m=this._getHandJoint(u,v);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const c=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],h=c.position.distanceTo(f.position),d=.02,g=.005;u.inputState.pinching&&h>d+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=d-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else o!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,o.eventsEnabled&&o.dispatchEvent({type:"gripUpdated",data:e,target:this})));l!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(Ng)))}return l!==null&&(l.visible=s!==null),o!==null&&(o.visible=r!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new mn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const lp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ss={h:0,s:0,l:0},Na={h:0,s:0,l:0};function Cl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ke{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Sn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,bt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=bt.workingColorSpace){return this.r=e,this.g=t,this.b=i,bt.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=bt.workingColorSpace){if(e=Ou(e,1),t=St(t,0,1),i=St(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=Cl(a,r,e+1/3),this.g=Cl(a,r,e),this.b=Cl(a,r,e-1/3)}return bt.colorSpaceToWorking(this,s),this}setStyle(e,t=Sn){function i(r){r!==void 0&&parseFloat(r)<1&&at("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],l=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(l))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(l))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(l))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:at("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);at("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Sn){const i=lp[e.toLowerCase()];return i!==void 0?this.setHex(i,t):at("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ki(e.r),this.g=Ki(e.g),this.b=Ki(e.b),this}copyLinearToSRGB(e){return this.r=wr(e.r),this.g=wr(e.g),this.b=wr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Sn){return bt.workingToColorSpace(Tn.copy(this),e),Math.round(St(Tn.r*255,0,255))*65536+Math.round(St(Tn.g*255,0,255))*256+Math.round(St(Tn.b*255,0,255))}getHexString(e=Sn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=bt.workingColorSpace){bt.workingToColorSpace(Tn.copy(this),t);const i=Tn.r,s=Tn.g,r=Tn.b,a=Math.max(i,s,r),l=Math.min(i,s,r);let o,u;const c=(l+a)/2;if(l===a)o=0,u=0;else{const f=a-l;switch(u=c<=.5?f/(a+l):f/(2-a-l),a){case i:o=(s-r)/f+(s<r?6:0);break;case s:o=(r-i)/f+2;break;case r:o=(i-s)/f+4;break}o/=6}return e.h=o,e.s=u,e.l=c,e}getRGB(e,t=bt.workingColorSpace){return bt.workingToColorSpace(Tn.copy(this),t),e.r=Tn.r,e.g=Tn.g,e.b=Tn.b,e}getStyle(e=Sn){bt.workingToColorSpace(Tn.copy(this),e);const t=Tn.r,i=Tn.g,s=Tn.b;return e!==Sn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(ss),this.setHSL(ss.h+e,ss.s+t,ss.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ss),e.getHSL(Na);const i=ra(ss.h,Na.h,t),s=ra(ss.s,Na.s,t),r=ra(ss.l,Na.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Tn=new Ke;Ke.NAMES=lp;class zu{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ke(e),this.near=t,this.far=i}clone(){return new zu(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class br extends nn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Li,this.environmentIntensity=1,this.environmentRotation=new Li,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const ai=new z,Ui=new z,Pl=new z,Oi=new z,tr=new z,nr=new z,qh=new z,Ll=new z,Dl=new z,Il=new z,Fl=new ct,Nl=new ct,Ul=new ct;class pi{constructor(e=new z,t=new z,i=new z){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),ai.subVectors(e,t),s.cross(ai);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){ai.subVectors(s,t),Ui.subVectors(i,t),Pl.subVectors(e,t);const a=ai.dot(ai),l=ai.dot(Ui),o=ai.dot(Pl),u=Ui.dot(Ui),c=Ui.dot(Pl),f=a*u-l*l;if(f===0)return r.set(0,0,0),null;const h=1/f,d=(u*o-l*c)*h,g=(a*c-l*o)*h;return r.set(1-d-g,g,d)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Oi)===null?!1:Oi.x>=0&&Oi.y>=0&&Oi.x+Oi.y<=1}static getInterpolation(e,t,i,s,r,a,l,o){return this.getBarycoord(e,t,i,s,Oi)===null?(o.x=0,o.y=0,"z"in o&&(o.z=0),"w"in o&&(o.w=0),null):(o.setScalar(0),o.addScaledVector(r,Oi.x),o.addScaledVector(a,Oi.y),o.addScaledVector(l,Oi.z),o)}static getInterpolatedAttribute(e,t,i,s,r,a){return Fl.setScalar(0),Nl.setScalar(0),Ul.setScalar(0),Fl.fromBufferAttribute(e,t),Nl.fromBufferAttribute(e,i),Ul.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Fl,r.x),a.addScaledVector(Nl,r.y),a.addScaledVector(Ul,r.z),a}static isFrontFacing(e,t,i,s){return ai.subVectors(i,t),Ui.subVectors(e,t),ai.cross(Ui).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ai.subVectors(this.c,this.b),Ui.subVectors(this.a,this.b),ai.cross(Ui).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return pi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return pi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return pi.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return pi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return pi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let a,l;tr.subVectors(s,i),nr.subVectors(r,i),Ll.subVectors(e,i);const o=tr.dot(Ll),u=nr.dot(Ll);if(o<=0&&u<=0)return t.copy(i);Dl.subVectors(e,s);const c=tr.dot(Dl),f=nr.dot(Dl);if(c>=0&&f<=c)return t.copy(s);const h=o*f-c*u;if(h<=0&&o>=0&&c<=0&&o-c>0)return a=o/(o-c),t.copy(i).addScaledVector(tr,a);Il.subVectors(e,r);const d=tr.dot(Il),g=nr.dot(Il);if(g>=0&&d<=g)return t.copy(r);const v=d*u-o*g;if(v<=0&&u>=0&&g<=0)return l=u/(u-g),t.copy(i).addScaledVector(nr,l);const p=c*g-d*f;if(p<=0&&f-c>=0&&d-g>=0)return qh.subVectors(r,s),l=(f-c)/(f-c+(d-g)),t.copy(s).addScaledVector(qh,l);const m=1/(p+v+h);return a=v*m,l=h*m,t.copy(i).addScaledVector(tr,a).addScaledVector(nr,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class es{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(oi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(oi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=oi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,l=r.count;a<l;a++)e.isMesh===!0?e.getVertexPosition(a,oi):oi.fromBufferAttribute(r,a),oi.applyMatrix4(e.matrixWorld),this.expandByPoint(oi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ua.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ua.copy(i.boundingBox)),Ua.applyMatrix4(e.matrixWorld),this.union(Ua)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,oi),oi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(kr),Oa.subVectors(this.max,kr),ir.subVectors(e.a,kr),sr.subVectors(e.b,kr),rr.subVectors(e.c,kr),rs.subVectors(sr,ir),as.subVectors(rr,sr),ws.subVectors(ir,rr);let t=[0,-rs.z,rs.y,0,-as.z,as.y,0,-ws.z,ws.y,rs.z,0,-rs.x,as.z,0,-as.x,ws.z,0,-ws.x,-rs.y,rs.x,0,-as.y,as.x,0,-ws.y,ws.x,0];return!Ol(t,ir,sr,rr,Oa)||(t=[1,0,0,0,1,0,0,0,1],!Ol(t,ir,sr,rr,Oa))?!1:(ka.crossVectors(rs,as),t=[ka.x,ka.y,ka.z],Ol(t,ir,sr,rr,Oa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,oi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(oi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ki[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ki[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ki[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ki[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ki[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ki[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ki[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ki[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ki),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ki=[new z,new z,new z,new z,new z,new z,new z,new z],oi=new z,Ua=new es,ir=new z,sr=new z,rr=new z,rs=new z,as=new z,ws=new z,kr=new z,Oa=new z,ka=new z,bs=new z;function Ol(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){bs.fromArray(n,r);const l=s.x*Math.abs(bs.x)+s.y*Math.abs(bs.y)+s.z*Math.abs(bs.z),o=e.dot(bs),u=t.dot(bs),c=i.dot(bs);if(Math.max(-Math.max(o,u,c),Math.min(o,u,c))>l)return!1}return!0}const Jt=new z,Ba=new qe;let Ug=0;class nt extends Xs{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ug++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=tg,this.updateRanges=[],this.gpuType=Un,this.version=0,this._normalizationScale=e!==void 0?ku(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ba.fromBufferAttribute(this,t),Ba.applyMatrix3(e),this.setXY(t,Ba.x,Ba.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix3(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix4(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.applyNormalMatrix(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.transformDirection(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):sp(e,this.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):rp(e,this.array)}}class cp extends nt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class up extends nt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Ft extends nt{constructor(e,t,i){super(new Float32Array(e),t,i)}}const Og=new es,Br=new z,kl=new z;class kn{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Og.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Br.subVectors(e,this.center);const t=Br.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Br,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(kl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Br.copy(e.center).add(kl)),this.expandByPoint(Br.copy(e.center).sub(kl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let kg=0;const Zn=new et,Bl=new nn,ar=new z,Xn=new es,zr=new es,dn=new z;class Nt extends Xs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:kg++}),this.uuid=qs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ig(e)?up:cp)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new pt().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Zn.makeRotationFromQuaternion(e),this.applyMatrix4(Zn),this}rotateX(e){return Zn.makeRotationX(e),this.applyMatrix4(Zn),this}rotateY(e){return Zn.makeRotationY(e),this.applyMatrix4(Zn),this}rotateZ(e){return Zn.makeRotationZ(e),this.applyMatrix4(Zn),this}translate(e,t,i){return Zn.makeTranslation(e,t,i),this.applyMatrix4(Zn),this}scale(e,t,i){return Zn.makeScale(e,t,i),this.applyMatrix4(Zn),this}lookAt(e){return Bl.lookAt(e),Bl.updateMatrix(),this.applyMatrix4(Bl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ar).negate(),this.translate(ar.x,ar.y,ar.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ft(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&at("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new es);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Lt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];Xn.setFromBufferAttribute(r),this.morphTargetsRelative?(dn.addVectors(this.boundingBox.min,Xn.min),this.boundingBox.expandByPoint(dn),dn.addVectors(this.boundingBox.max,Xn.max),this.boundingBox.expandByPoint(dn)):(this.boundingBox.expandByPoint(Xn.min),this.boundingBox.expandByPoint(Xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Lt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new kn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Lt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){const i=this.boundingSphere.center;if(Xn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const l=t[r];zr.setFromBufferAttribute(l),this.morphTargetsRelative?(dn.addVectors(Xn.min,zr.min),Xn.expandByPoint(dn),dn.addVectors(Xn.max,zr.max),Xn.expandByPoint(dn)):(Xn.expandByPoint(zr.min),Xn.expandByPoint(zr.max))}Xn.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)dn.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(dn));if(t)for(let r=0,a=t.length;r<a;r++){const l=t[r],o=this.morphTargetsRelative;for(let u=0,c=l.count;u<c;u++)dn.fromBufferAttribute(l,u),o&&(ar.fromBufferAttribute(e,u),dn.add(ar)),s=Math.max(s,i.distanceToSquared(dn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Lt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Lt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new nt(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const l=[],o=[],u=new Uint8Array(i.count);for(let A=0;A<i.count;A++)l[A]=new z,o[A]=new z;const c=new z,f=new z,h=new z,d=new qe,g=new qe,v=new qe,p=new z,m=new z;function y(A,E,P){u[A]=u[E]=u[P]=1,c.fromBufferAttribute(i,A),f.fromBufferAttribute(i,E),h.fromBufferAttribute(i,P),d.fromBufferAttribute(r,A),g.fromBufferAttribute(r,E),v.fromBufferAttribute(r,P),f.sub(c),h.sub(c),g.sub(d),v.sub(d);const R=1/(g.x*v.y-v.x*g.y);isFinite(R)&&(p.copy(f).multiplyScalar(v.y).addScaledVector(h,-g.y).multiplyScalar(R),m.copy(h).multiplyScalar(g.x).addScaledVector(f,-v.x).multiplyScalar(R),l[A].add(p),l[E].add(p),l[P].add(p),o[A].add(m),o[E].add(m),o[P].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let A=0,E=_.length;A<E;++A){const P=_[A],R=P.start,D=P.count;for(let C=R,I=R+D;C<I;C+=3)y(e.getX(C+0),e.getX(C+1),e.getX(C+2))}const w=new z,S=new z,M=new z,x=new z;function b(A){M.fromBufferAttribute(s,A),x.copy(M);const E=l[A];w.copy(E),w.sub(M.multiplyScalar(M.dot(E))).normalize(),S.crossVectors(x,E);const R=S.dot(o[A])<0?-1:1;a.setXYZW(A,w.x,w.y,w.z,R)}for(let A=0,E=i.count;A<E;++A)u[A]&&b(A);this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new nt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,d=i.count;h<d;h++)i.setXYZ(h,0,0,0);const s=new z,r=new z,a=new z,l=new z,o=new z,u=new z,c=new z,f=new z;if(e)for(let h=0,d=e.count;h<d;h+=3){const g=e.getX(h+0),v=e.getX(h+1),p=e.getX(h+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,p),c.subVectors(a,r),f.subVectors(s,r),c.cross(f),l.fromBufferAttribute(i,g),o.fromBufferAttribute(i,v),u.fromBufferAttribute(i,p),l.add(c),o.add(c),u.add(c),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(p,u.x,u.y,u.z)}else for(let h=0,d=t.count;h<d;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),c.subVectors(a,r),f.subVectors(s,r),c.cross(f),i.setXYZ(h+0,c.x,c.y,c.z),i.setXYZ(h+1,c.x,c.y,c.z),i.setXYZ(h+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)dn.fromBufferAttribute(e,t),dn.normalize(),e.setXYZ(t,dn.x,dn.y,dn.z)}toNonIndexed(){function e(l,o){const u=l.array,c=l.itemSize,f=l.normalized,h=new u.constructor(o.length*c);let d=0,g=0;for(let v=0,p=o.length;v<p;v++){l.isInterleavedBufferAttribute?d=o[v]*l.data.stride+l.offset:d=o[v]*c;for(let m=0;m<c;m++)h[g++]=u[d++]}return new nt(h,c,f)}if(this.index===null)return at("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Nt,i=this.index.array,s=this.attributes;for(const l in s){const o=s[l],u=e(o,i);t.setAttribute(l,u)}const r=this.morphAttributes;for(const l in r){const o=[],u=r[l];for(let c=0,f=u.length;c<f;c++){const h=u[c],d=e(h,i);o.push(d)}t.morphAttributes[l]=o}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let l=0,o=a.length;l<o;l++){const u=a[l];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const o=this.parameters;for(const u in o)o[u]!==void 0&&(e[u]=o[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const o in i){const u=i[o];e.data.attributes[o]=u.toJSON(e.data)}const s={};let r=!1;for(const o in this.morphAttributes){const u=this.morphAttributes[o],c=[];for(let f=0,h=u.length;f<h;f++){const d=u[f];c.push(d.toJSON(e.data))}c.length>0&&(s[o]=c,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const l=this.boundingSphere;return l!==null&&(e.data.boundingSphere=l.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const u in s){const c=s[u];this.setAttribute(u,c.clone(t))}const r=e.morphAttributes;for(const u in r){const c=[],f=r[u];for(let h=0,d=f.length;h<d;h++)c.push(f[h].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let u=0,c=a.length;u<c;u++){const f=a[u];this.addGroup(f.start,f.count,f.materialIndex)}const l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());const o=e.boundingSphere;return o!==null&&(this.boundingSphere=o.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const zl=new z,Bg=new z,zg=new pt;class ps{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=zl.subVectors(i,t).cross(Bg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const s=e.delta(zl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||zg.getNormalMatrix(e),s=this.coplanarPoint(zl).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let Gg=0;class Ys extends Xs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Gg++}),this.uuid=qs(),this.name="",this.type="Material",this.blending=Os,this.side=Ji,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=kd,this.blendDst=Tr,this.blendEquation=gr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ke(0,0,0),this.blendAlpha=0,this.depthFunc=pa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=j0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=yl,this.stencilZFail=yl,this.stencilZPass=yl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){at(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){at(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const l in r){const o=r[l];delete o.metadata,a.push(o)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ke().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new ps().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new qe().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new qe().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Bi=new z,Gl=new z,za=new z,Ga=new z;class hp{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Bi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Bi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Bi.copy(this.origin).addScaledVector(this.direction,t),Bi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Gl.copy(e).add(t).multiplyScalar(.5),za.copy(t).sub(e).normalize(),Ga.copy(this.origin).sub(Gl);const r=e.distanceTo(t)*.5,a=-this.direction.dot(za),l=Ga.dot(this.direction),o=-Ga.dot(za),u=Ga.lengthSq(),c=Math.abs(1-a*a);let f,h,d,g;if(c>0)if(f=a*o-l,h=a*l-o,g=r*c,f>=0)if(h>=-g)if(h<=g){const v=1/c;f*=v,h*=v,d=f*(f+a*h+2*l)+h*(a*f+h+2*o)+u}else h=r,f=Math.max(0,-(a*h+l)),d=-f*f+h*(h+2*o)+u;else h=-r,f=Math.max(0,-(a*h+l)),d=-f*f+h*(h+2*o)+u;else h<=-g?(f=Math.max(0,-(-a*r+l)),h=f>0?-r:Math.min(Math.max(-r,-o),r),d=-f*f+h*(h+2*o)+u):h<=g?(f=0,h=Math.min(Math.max(-r,-o),r),d=h*(h+2*o)+u):(f=Math.max(0,-(a*r+l)),h=f>0?r:Math.min(Math.max(-r,-o),r),d=-f*f+h*(h+2*o)+u);else h=a>0?-r:r,f=Math.max(0,-(a*h+l)),d=-f*f+h*(h+2*o)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Gl).addScaledVector(za,h),d}intersectSphere(e,t){if(e.radius<0)return null;Bi.subVectors(e.center,this.origin);const i=Bi.dot(this.direction),s=Bi.dot(Bi)-i*i,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),l=i-a,o=i+a;return o<0?null:l<0?this.at(o,t):this.at(l,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,l,o;const u=1/this.direction.x,c=1/this.direction.y,f=1/this.direction.z,h=this.origin;return u>=0?(i=(e.min.x-h.x)*u,s=(e.max.x-h.x)*u):(i=(e.max.x-h.x)*u,s=(e.min.x-h.x)*u),c>=0?(r=(e.min.y-h.y)*c,a=(e.max.y-h.y)*c):(r=(e.max.y-h.y)*c,a=(e.min.y-h.y)*c),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),f>=0?(l=(e.min.z-h.z)*f,o=(e.max.z-h.z)*f):(l=(e.max.z-h.z)*f,o=(e.min.z-h.z)*f),i>o||l>s)||((l>i||i!==i)&&(i=l),(o<s||s!==s)&&(s=o),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Bi)!==null}intersectTriangle(e,t,i,s,r){const a=this.origin,l=this.direction,o=l.x,u=l.y,c=l.z,f=e.x-a.x,h=e.y-a.y,d=e.z-a.z,g=t.x-a.x,v=t.y-a.y,p=t.z-a.z,m=i.x-a.x,y=i.y-a.y,_=i.z-a.z,w=Math.abs(o),S=Math.abs(u),M=Math.abs(c);let x,b,A,E,P,R,D,C,I,U,O,W;if(w>=S&&w>=M?(A=o,R=f,I=g,W=m,o>=0?(x=u,b=c,E=h,P=d,D=v,C=p,U=y,O=_):(x=c,b=u,E=d,P=h,D=p,C=v,U=_,O=y)):S>=M?(A=u,R=h,I=v,W=y,u>=0?(x=c,b=o,E=d,P=f,D=p,C=g,U=_,O=m):(x=o,b=c,E=f,P=d,D=g,C=p,U=m,O=_)):(A=c,R=d,I=p,W=_,c>=0?(x=o,b=u,E=f,P=h,D=g,C=v,U=m,O=y):(x=u,b=o,E=h,P=f,D=v,C=g,U=y,O=m)),A===0)return null;const k=x/A,G=b/A,Z=1/A,me=E-k*R,le=P-G*R,q=D-k*I,$=C-G*I,K=U-k*W,j=O-G*W,V=K*$-j*q,B=me*j-le*K,te=q*le-$*me;if(s){if(V<0||B<0||te<0)return null}else if((V<0||B<0||te<0)&&(V>0||B>0||te>0))return null;const ee=V+B+te;if(ee===0)return null;const ce=Z*(V*R+B*I+te*W);return(ee>0?ce<0:ce>0)?null:this.at(ce/ee,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ko extends Ys{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Li,this.combine=jo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Yh=new et,Es=new hp,Ha=new kn,jh=new z,Wa=new z,Va=new z,$a=new z,Hl=new z,Xa=new z,Kh=new z,qa=new z;class vt extends nn{constructor(e=new Nt,t=new Ko){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const l=this.morphTargetInfluences;if(r&&l){Xa.set(0,0,0);for(let o=0,u=r.length;o<u;o++){const c=l[o],f=r[o];c!==0&&(Hl.fromBufferAttribute(f,e),a?Xa.addScaledVector(Hl,c):Xa.addScaledVector(Hl.sub(t),c))}t.add(Xa)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ha.copy(i.boundingSphere),Ha.applyMatrix4(r),Es.copy(e.ray).recast(e.near),!(Ha.containsPoint(Es.origin)===!1&&(Es.intersectSphere(Ha,jh)===null||Es.origin.distanceToSquared(jh)>(e.far-e.near)**2))&&(Yh.copy(r).invert(),Es.copy(e.ray).applyMatrix4(Yh),!(i.boundingBox!==null&&Es.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Es)))}_computeIntersections(e,t,i){let s;const r=this.geometry,a=this.material,l=r.index,o=r.attributes.position,u=r.attributes.uv,c=r.attributes.uv1,f=r.attributes.normal,h=r.groups,d=r.drawRange;if(l!==null)if(Array.isArray(a))for(let g=0,v=h.length;g<v;g++){const p=h[g],m=a[p.materialIndex],y=Math.max(p.start,d.start),_=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let w=y,S=_;w<S;w+=3){const M=l.getX(w),x=l.getX(w+1),b=l.getX(w+2);s=Ya(this,m,e,i,u,c,f,M,x,b),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const g=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(let p=g,m=v;p<m;p+=3){const y=l.getX(p),_=l.getX(p+1),w=l.getX(p+2);s=Ya(this,a,e,i,u,c,f,y,_,w),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(o!==void 0)if(Array.isArray(a))for(let g=0,v=h.length;g<v;g++){const p=h[g],m=a[p.materialIndex],y=Math.max(p.start,d.start),_=Math.min(o.count,Math.min(p.start+p.count,d.start+d.count));for(let w=y,S=_;w<S;w+=3){const M=w,x=w+1,b=w+2;s=Ya(this,m,e,i,u,c,f,M,x,b),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const g=Math.max(0,d.start),v=Math.min(o.count,d.start+d.count);for(let p=g,m=v;p<m;p+=3){const y=p,_=p+1,w=p+2;s=Ya(this,a,e,i,u,c,f,y,_,w),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}}function Hg(n,e,t,i,s,r,a,l){let o;if(e.side===yn?o=i.intersectTriangle(a,r,s,!0,l):o=i.intersectTriangle(s,r,a,e.side===Ji,l),o===null)return null;qa.copy(l),qa.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(qa);return u<t.near||u>t.far?null:{distance:u,point:qa.clone(),object:n}}function Ya(n,e,t,i,s,r,a,l,o,u){n.getVertexPosition(l,Wa),n.getVertexPosition(o,Va),n.getVertexPosition(u,$a);const c=Hg(n,e,t,i,Wa,Va,$a,Kh);if(c){const f=new z;pi.getBarycoord(Kh,Wa,Va,$a,f),s&&(c.uv=pi.getInterpolatedAttribute(s,l,o,u,f,new qe)),r&&(c.uv1=pi.getInterpolatedAttribute(r,l,o,u,f,new qe)),a&&(c.normal=pi.getInterpolatedAttribute(a,l,o,u,f,new z),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const h={a:l,b:o,c:u,normal:new z,materialIndex:0};pi.getNormal(Wa,Va,$a,h.normal),c.face=h,c.barycoord=f}return c}const Gr=new ct,Zh=new ct,Jh=new ct,Wg=new ct,Qh=new et,ja=new z,Wl=new kn,ef=new et,Vl=new hp;class Uo extends vt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Lh,this.bindMatrix=new et,this.bindMatrixInverse=new et,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new es),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,ja),this.boundingBox.expandByPoint(ja)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new kn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,ja),this.boundingSphere.expandByPoint(ja)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}raycast(e,t){const i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Wl.copy(this.boundingSphere),Wl.applyMatrix4(s),e.ray.intersectsSphere(Wl)!==!1&&(ef.copy(s).invert(),Vl.copy(e.ray).applyMatrix4(ef),!(this.boundingBox!==null&&Vl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Vl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new ct,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Lh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===$0?this.bindMatrixInverse.copy(this.bindMatrix).invert():at("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,s=this.geometry;Zh.fromBufferAttribute(s.attributes.skinIndex,e),Jh.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(Gr.copy(t),t.set(0,0,0,0)):(Gr.set(t.x,t.y,t.z,1),t.set(0,0,0)),Gr.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){const a=Jh.getComponent(r);if(a!==0){const l=Zh.getComponent(r);Qh.multiplyMatrices(i.bones[l].matrixWorld,i.boneInverses[l]),t.addScaledVector(Wg.copy(Gr).applyMatrix4(Qh),a)}}return t.isVector4&&(t.w=Gr.w),t.applyMatrix4(this.bindMatrixInverse)}}class Zo extends nn{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Kn extends wn{constructor(e=null,t=1,i=1,s,r,a,l,o,u=Tt,c=Tt,f,h){super(null,a,l,o,u,c,s,r,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const tf=new et,Vg=new et;class Jo{constructor(e=[],t=[]){this.uuid=qs(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){at("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new et)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new et;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const l=e[r]?e[r].matrixWorld:Vg;tf.multiplyMatrices(l,t[r]),tf.toArray(i,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Jo(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new Kn(t,e,e,On,Un);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){const r=e.bones[i];let a=t[r];a===void 0&&(at("Skeleton: No bone found with UUID:",r),a=new Zo),this.bones.push(a),this.boneInverses.push(new et().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const a=t[s];e.bones.push(a.uuid);const l=i[s];e.boneInverses.push(l.toArray())}return e}}class Us extends nt{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const or=new et,nf=new et,Ka=[],sf=new es,$g=new et,Hr=new vt,Wr=new kn;class ei extends vt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Us(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,$g)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new es),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,or),sf.copy(e.boundingBox).applyMatrix4(or),this.boundingBox.union(sf)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new kn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,or),Wr.copy(e.boundingSphere).applyMatrix4(or),this.boundingSphere.union(Wr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=e*r+1;for(let l=0;l<i.length;l++)i[l]=s[a+l]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(Hr.geometry=this.geometry,Hr.material=this.material,Hr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Wr.copy(this.boundingSphere),Wr.applyMatrix4(i),e.ray.intersectsSphere(Wr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,or),nf.multiplyMatrices(i,or),Hr.matrixWorld=nf,Hr.raycast(e,Ka);for(let a=0,l=Ka.length;a<l;a++){const o=Ka[a];o.instanceId=r,o.object=this,t.push(o)}Ka.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Us(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Kn(new Float32Array(s*this.count),s,this.count,$s,Un));const r=this.morphTexture.source.data.data;let a=0;for(let u=0;u<i.length;u++)a+=i[u];const l=this.geometry.morphTargetsRelative?1:1-a,o=s*e;return r[o]=l,r.set(i,o+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const As=new kn,Xg=new qe(.5,.5),Za=new z;class vs{constructor(e=new ps,t=new ps,i=new ps,s=new ps,r=new ps,a=new ps){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){const l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(i),l[3].copy(s),l[4].copy(r),l[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=gi,i=!1){const s=this.planes,r=e.elements,a=r[0],l=r[1],o=r[2],u=r[3],c=r[4],f=r[5],h=r[6],d=r[7],g=r[8],v=r[9],p=r[10],m=r[11],y=r[12],_=r[13],w=r[14],S=r[15];if(s[0].setComponents(u-a,d-c,m-g,S-y).normalize(),s[1].setComponents(u+a,d+c,m+g,S+y).normalize(),s[2].setComponents(u+l,d+f,m+v,S+_).normalize(),s[3].setComponents(u-l,d-f,m-v,S-_).normalize(),i)s[4].setComponents(o,h,p,w).normalize(),s[5].setComponents(u-o,d-h,m-p,S-w).normalize();else if(s[4].setComponents(u-o,d-h,m-p,S-w).normalize(),t===gi)s[5].setComponents(u+o,d+h,m+p,S+w).normalize();else if(t===va)s[5].setComponents(o,h,p,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),As.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),As.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(As)}intersectsSprite(e){As.center.set(0,0,0);const t=Xg.distanceTo(e.center);return As.radius=.7071067811865476+t,As.applyMatrix4(e.matrixWorld),this.intersectsSphere(As)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Za.x=s.normal.x>0?e.max.x:e.min.x,Za.y=s.normal.y>0?e.max.y:e.min.y,Za.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Za)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const rf=new et;class Gu{constructor(){this.coordinateSystem=gi,this._frustums=[],this._count=0}setFromArrayCamera(e){const t=e.cameras,i=this._frustums;for(let s=0;s<t.length;s++){const r=t[s];rf.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new vs),i[s].setFromProjectionMatrix(rf,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,i=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new vs),t[s].copy(i[s]);return this._count=e._count,this}clone(){return new Gu().copy(this)}}class fp extends wn{constructor(e=[],t=Rr,i,s,r,a,l,o,u,c){super(e,t,i,s,r,a,l,o,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ms extends wn{constructor(e,t,i=Ci,s,r,a,l=Tt,o=Tt,u,c=gs,f=1){if(c!==gs&&c!==ms)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:f};super(h,s,r,a,l,o,c,i,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Bu(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class dp extends Ms{constructor(e,t=Ci,i=Rr,s,r,a=Tt,l=Tt,o,u=gs){const c={width:e,height:e,depth:1},f=[c,c,c,c,c,c];super(e,e,t,i,s,r,a,l,o,u),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class pp extends wn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ea extends Nt{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const l=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const o=[],u=[],c=[],f=[];let h=0,d=0;g("z","y","x",-1,-1,i,t,e,a,r,0),g("z","y","x",1,-1,i,t,-e,a,r,1),g("x","z","y",1,1,e,i,t,s,a,2),g("x","z","y",1,-1,e,i,-t,s,a,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(o),this.setAttribute("position",new Ft(u,3)),this.setAttribute("normal",new Ft(c,3)),this.setAttribute("uv",new Ft(f,2));function g(v,p,m,y,_,w,S,M,x,b,A){const E=w/x,P=S/b,R=w/2,D=S/2,C=M/2,I=x+1,U=b+1;let O=0,W=0;const k=new z;for(let G=0;G<U;G++){const Z=G*P-D;for(let me=0;me<I;me++){const le=me*E-R;k[v]=le*y,k[p]=Z*_,k[m]=C,u.push(k.x,k.y,k.z),k[v]=0,k[p]=0,k[m]=M>0?1:-1,c.push(k.x,k.y,k.z),f.push(me/x),f.push(1-G/b),O+=1}}for(let G=0;G<b;G++)for(let Z=0;Z<x;Z++){const me=h+Z+I*G,le=h+Z+I*(G+1),q=h+(Z+1)+I*(G+1),$=h+(Z+1)+I*G;o.push(me,le,$),o.push(le,q,$),W+=6}l.addGroup(d,W,A),d+=W,h+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ea(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class aa extends Nt{constructor(e=1,t=1,i=1,s=32,r=1,a=!1,l=0,o=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:l,thetaLength:o};const u=this;s=Math.floor(s),r=Math.floor(r);const c=[],f=[],h=[],d=[];let g=0;const v=[],p=i/2;let m=0;y(),a===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(c),this.setAttribute("position",new Ft(f,3)),this.setAttribute("normal",new Ft(h,3)),this.setAttribute("uv",new Ft(d,2));function y(){const w=new z,S=new z;let M=0;const x=(t-e)/i;for(let b=0;b<=r;b++){const A=[],E=b/r,P=E*(t-e)+e;for(let R=0;R<=s;R++){const D=R/s,C=D*o+l,I=Math.sin(C),U=Math.cos(C);S.x=P*I,S.y=-E*i+p,S.z=P*U,f.push(S.x,S.y,S.z),w.set(I,x,U).normalize(),h.push(w.x,w.y,w.z),d.push(D,1-E),A.push(g++)}v.push(A)}for(let b=0;b<s;b++)for(let A=0;A<r;A++){const E=v[A][b],P=v[A+1][b],R=v[A+1][b+1],D=v[A][b+1];(e>0||A!==0)&&(c.push(E,P,D),M+=3),(t>0||A!==r-1)&&(c.push(P,R,D),M+=3)}u.addGroup(m,M,0),m+=M}function _(w){const S=g,M=new qe,x=new z;let b=0;const A=w===!0?e:t,E=w===!0?1:-1;for(let R=1;R<=s;R++)f.push(0,p*E,0),h.push(0,E,0),d.push(.5,.5),g++;const P=g;for(let R=0;R<=s;R++){const C=R/s*o+l,I=Math.cos(C),U=Math.sin(C);x.x=A*U,x.y=p*E,x.z=A*I,f.push(x.x,x.y,x.z),h.push(0,E,0),M.x=I*.5+.5,M.y=U*.5*E+.5,d.push(M.x,M.y),g++}for(let R=0;R<s;R++){const D=S+R,C=P+R;w===!0?c.push(C,C+1,D):c.push(C+1,C,D),b+=3}u.addGroup(m,b,w===!0?1:2),m+=b}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new aa(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Qo extends Nt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};const r=[],a=[];l(s),u(i),c(),this.setAttribute("position",new Ft(r,3)),this.setAttribute("normal",new Ft(r.slice(),3)),this.setAttribute("uv",new Ft(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function l(y){const _=new z,w=new z,S=new z;for(let M=0;M<t.length;M+=3)d(t[M+0],_),d(t[M+1],w),d(t[M+2],S),o(_,w,S,y)}function o(y,_,w,S){const M=S+1,x=[];for(let b=0;b<=M;b++){x[b]=[];const A=y.clone().lerp(w,b/M),E=_.clone().lerp(w,b/M),P=M-b;for(let R=0;R<=P;R++)R===0&&b===M?x[b][R]=A:x[b][R]=A.clone().lerp(E,R/P)}for(let b=0;b<M;b++)for(let A=0;A<2*(M-b)-1;A++){const E=Math.floor(A/2);A%2===0?(h(x[b][E+1]),h(x[b+1][E]),h(x[b][E])):(h(x[b][E+1]),h(x[b+1][E+1]),h(x[b+1][E]))}}function u(y){const _=new z;for(let w=0;w<r.length;w+=3)_.x=r[w+0],_.y=r[w+1],_.z=r[w+2],_.normalize().multiplyScalar(y),r[w+0]=_.x,r[w+1]=_.y,r[w+2]=_.z}function c(){const y=new z;for(let _=0;_<r.length;_+=3){y.x=r[_+0],y.y=r[_+1],y.z=r[_+2];const w=p(y)/2/Math.PI+.5,S=m(y)/Math.PI+.5;a.push(w,1-S)}g(),f()}function f(){for(let y=0;y<a.length;y+=6){const _=a[y+0],w=a[y+2],S=a[y+4],M=Math.max(_,w,S),x=Math.min(_,w,S);M>.9&&x<.1&&(_<.2&&(a[y+0]+=1),w<.2&&(a[y+2]+=1),S<.2&&(a[y+4]+=1))}}function h(y){r.push(y.x,y.y,y.z)}function d(y,_){const w=y*3;_.x=e[w+0],_.y=e[w+1],_.z=e[w+2]}function g(){const y=new z,_=new z,w=new z,S=new z,M=new qe,x=new qe,b=new qe;for(let A=0,E=0;A<r.length;A+=9,E+=6){y.set(r[A+0],r[A+1],r[A+2]),_.set(r[A+3],r[A+4],r[A+5]),w.set(r[A+6],r[A+7],r[A+8]),M.set(a[E+0],a[E+1]),x.set(a[E+2],a[E+3]),b.set(a[E+4],a[E+5]),S.copy(y).add(_).add(w).divideScalar(3);const P=p(S);v(M,E+0,y,P),v(x,E+2,_,P),v(b,E+4,w,P)}}function v(y,_,w,S){S<0&&y.x===1&&(a[_]=y.x-1),w.x===0&&w.z===0&&(a[_]=S/2/Math.PI+.5)}function p(y){return Math.atan2(y.z,-y.x)}function m(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qo(e.vertices,e.indices,e.radius,e.detail)}}class Oo extends Qo{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Oo(e.radius,e.detail)}}class Hu extends Qo{constructor(e=1,t=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Hu(e.radius,e.detail)}}class Hs extends Nt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,a=t/2,l=Math.floor(i),o=Math.floor(s),u=l+1,c=o+1,f=e/l,h=t/o,d=[],g=[],v=[],p=[];for(let m=0;m<c;m++){const y=m*h-a;for(let _=0;_<u;_++){const w=_*f-r;g.push(w,-y,0),v.push(0,0,1),p.push(_/l),p.push(1-m/o)}}for(let m=0;m<o;m++)for(let y=0;y<l;y++){const _=y+u*m,w=y+u*(m+1),S=y+1+u*(m+1),M=y+1+u*m;d.push(_,w,M),d.push(w,S,M)}this.setIndex(d),this.setAttribute("position",new Ft(g,3)),this.setAttribute("normal",new Ft(v,3)),this.setAttribute("uv",new Ft(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hs(e.width,e.height,e.widthSegments,e.heightSegments)}}class Wu extends Nt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:l},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const o=Math.min(a+l,Math.PI);let u=0;const c=[],f=new z,h=new z,d=[],g=[],v=[],p=[];for(let m=0;m<=i;m++){const y=[],_=m/i,w=a+_*l,S=e*Math.cos(w),M=Math.sqrt(e*e-S*S);let x=0;m===0&&a===0?x=.5/t:m===i&&o===Math.PI&&(x=-.5/t);for(let b=0;b<=t;b++){const A=b/t,E=s+A*r;f.x=-M*Math.cos(E),f.y=S,f.z=M*Math.sin(E),g.push(f.x,f.y,f.z),h.copy(f).normalize(),v.push(h.x,h.y,h.z),p.push(A+x,1-_),y.push(u++)}c.push(y)}for(let m=0;m<i;m++)for(let y=0;y<t;y++){const _=c[m][y+1],w=c[m][y],S=c[m+1][y],M=c[m+1][y+1];(m!==0||a>0)&&d.push(_,w,M),(m!==i-1||o<Math.PI)&&d.push(w,S,M)}this.setIndex(d),this.setAttribute("position",new Ft(g,3)),this.setAttribute("normal",new Ft(v,3)),this.setAttribute("uv",new Ft(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wu(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function Lr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];if(af(s))s.isRenderTargetTexture?(at("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(af(s[0])){const r=[];for(let a=0,l=s.length;a<l;a++)r[a]=s[a].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function Fn(n){const e={};for(let t=0;t<n.length;t++){const i=Lr(n[t]);for(const s in i)e[s]=i[s]}return e}function af(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function qg(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function mp(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:bt.workingColorSpace}const el={clone:Lr,merge:Fn};var Yg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,jg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class cn extends Ys{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Yg,this.fragmentShader=jg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Lr(e.uniforms),this.uniformsGroups=qg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new Ke().setHex(s.value);break;case"v2":this.uniforms[i].value=new qe().fromArray(s.value);break;case"v3":this.uniforms[i].value=new z().fromArray(s.value);break;case"v4":this.uniforms[i].value=new ct().fromArray(s.value);break;case"m3":this.uniforms[i].value=new pt().fromArray(s.value);break;case"m4":this.uniforms[i].value=new et().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Kg extends cn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Zg extends Ys{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xa,this.normalScale=new qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Li,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Jg extends Zg{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new qe(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return St(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Ke(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ke(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ke(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return yr('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){yr('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Qg extends Ys{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ke(16777215),this.specular=new Ke(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xa,this.normalScale=new qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Li,this.combine=jo,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Cn extends Ys{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xa,this.normalScale=new qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Li,this.combine=jo,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class tl extends Ys{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=q0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ex extends Ys{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class gp extends nn{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ke(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class tx extends gp{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(nn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ke(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const $l=new et,of=new z,lf=new z;class nx{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new qe(512,512),this.mapType=ln,this.map=null,this.mapPass=null,this.matrix=new et,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new vs,this._frameExtents=new qe(1,1),this._viewportCount=1,this._viewports=[new ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;of.setFromMatrixPosition(e.matrixWorld),t.position.copy(of),lf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(lf),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){$l.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix($l,e.coordinateSystem,e.reversedDepth);const r=this._frameExtents,a=s?s.z/r.x:1,l=s?s.w/r.y:1,o=s?s.x/r.x:0,u=s?s.y/r.y:0;e.coordinateSystem===va||e.reversedDepth?t.set(.5*a,0,0,.5*a+o,0,.5*l,0,.5*l+u,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+o,0,.5*l,0,.5*l+u,0,0,.5,.5,0,0,0,1),t.multiply($l)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Ja=new z,Qa=new vi,Mi=new z;class xp extends nn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new et,this.projectionMatrix=new et,this.projectionMatrixInverse=new et,this.coordinateSystem=gi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ja,Qa,Mi),Mi.x===1&&Mi.y===1&&Mi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ja,Qa,Mi.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Ja,Qa,Mi),Mi.x===1&&Mi.y===1&&Mi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ja,Qa,Mi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const os=new z,cf=new qe,uf=new qe;class Yn extends xp{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ma*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(sa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ma*2*Math.atan(Math.tan(sa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){os.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(os.x,os.y).multiplyScalar(-e/os.z),os.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(os.x,os.y).multiplyScalar(-e/os.z)}getViewSize(e,t){return this.getViewBounds(e,cf,uf),t.subVectors(uf,cf)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(sa*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const o=a.fullWidth,u=a.fullHeight;r+=a.offsetX*s/o,t-=a.offsetY*i/u,s*=a.width/o,i*=a.height/u}const l=this.filmOffset;l!==0&&(r+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Ws extends xp{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,a=i+e,l=s+t,o=s-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=u*this.view.offsetX,a=r+u*this.view.width,l-=c*this.view.offsetY,o=l-c*this.view.height}this.projectionMatrix.makeOrthographic(r,a,l,o,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class ix extends nx{constructor(){super(new Ws(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Xl extends gp{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(nn.DEFAULT_UP),this.updateMatrix(),this.target=new nn,this.shadow=new ix}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class nl extends Nt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}const lr=-90,cr=1;class du extends nn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Yn(lr,cr,e,t);s.layers=this.layers,this.add(s);const r=new Yn(lr,cr,e,t);r.layers=this.layers,this.add(r);const a=new Yn(lr,cr,e,t);a.layers=this.layers,this.add(a);const l=new Yn(lr,cr,e,t);l.layers=this.layers,this.add(l);const o=new Yn(lr,cr,e,t);o.layers=this.layers,this.add(o);const u=new Yn(lr,cr,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,l,o]=t;for(const u of t)this.remove(u);if(e===gi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(e===va)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,l,o,u,c]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,3,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,4,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),i.texture.mipmapsAutoUpdate=v,e.setRenderTarget(i,5,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(f,h,d),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class sx extends Yn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}function hf(n,e,t,i){const s=rx(i);switch(t){case Zd:return n*e;case $s:return n*e/s.components*s.byteLength;case Fu:return n*e/s.components*s.byteLength;case xs:return n*e*2/s.components*s.byteLength;case Nu:return n*e*2/s.components*s.byteLength;case Jd:return n*e*3/s.components*s.byteLength;case On:return n*e*4/s.components*s.byteLength;case Uu:return n*e*4/s.components*s.byteLength;case Mo:case _o:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case So:case yo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case kc:case zc:return Math.max(n,16)*Math.max(e,8)/4;case Oc:case Bc:return Math.max(n,8)*Math.max(e,8)/2;case Gc:case Hc:case Vc:case $c:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Wc:case Lo:case Xc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case qc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Yc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case jc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Kc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Zc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Jc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Qc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case eu:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case tu:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case nu:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case iu:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case su:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case ru:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case au:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case ou:case lu:case cu:return Math.ceil(n/4)*Math.ceil(e/4)*16;case uu:case hu:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Do:case fu:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function rx(n){switch(n){case ln:case qd:return{byteLength:1,components:1};case ga:case Yd:case Pi:return{byteLength:2,components:1};case Du:case Iu:return{byteLength:2,components:4};case Ci:case Lu:case Un:return{byteLength:4,components:1};case jd:case Kd:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Cu}}));typeof window<"u"&&(window.__THREE__?at("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Cu);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function vp(){let n=null,e=!1,t=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function ax(n){const e=new WeakMap;function t(l,o){const u=l.array,c=l.usage,f=u.byteLength,h=n.createBuffer();n.bindBuffer(o,h),n.bufferData(o,u,c),l.onUploadCallback();let d;if(u instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)d=n.HALF_FLOAT;else if(u instanceof Uint16Array)l.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)d=n.SHORT;else if(u instanceof Uint32Array)d=n.UNSIGNED_INT;else if(u instanceof Int32Array)d=n.INT;else if(u instanceof Int8Array)d=n.BYTE;else if(u instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:h,type:d,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:f}}function i(l,o,u){const c=o.array,f=o.updateRanges;if(n.bindBuffer(u,l),f.length===0)n.bufferSubData(u,0,c);else{f.sort((d,g)=>d.start-g.start);let h=0;for(let d=1;d<f.length;d++){const g=f[h],v=f[d];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++h,f[h]=v)}f.length=h+1;for(let d=0,g=f.length;d<g;d++){const v=f[d];n.bufferSubData(u,v.start*c.BYTES_PER_ELEMENT,c,v.start,v.count)}o.clearUpdateRanges()}o.onUploadCallback()}function s(l){return l.isInterleavedBufferAttribute&&(l=l.data),e.get(l)}function r(l){l.isInterleavedBufferAttribute&&(l=l.data);const o=e.get(l);o&&(n.deleteBuffer(o.buffer),e.delete(l))}function a(l,o){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){const c=e.get(l);(!c||c.version<l.version)&&e.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}const u=e.get(l);if(u===void 0)e.set(l,t(l,o));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,l,o),u.version=l.version}}return{get:s,remove:r,update:a}}var ox=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,lx=`#ifdef USE_ALPHAHASH
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
#endif`,cx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ux=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,fx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,dx=`#ifdef USE_AOMAP
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
#endif`,px=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,mx=`#ifdef USE_BATCHING
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
#endif`,gx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,xx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Mx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,_x=`#ifdef USE_IRIDESCENCE
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
#endif`,Sx=`#ifdef USE_BUMPMAP
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
#endif`,yx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,wx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ex=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ax=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Tx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Rx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Cx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Px=`#define PI 3.141592653589793
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
} // validated`,Lx=`vec3 transformedNormal = objectNormal;
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
#endif`,Dx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ix=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Fx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Nx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ux="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ox=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,kx=`#ifdef USE_ENVMAP
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
#endif`,Bx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,zx=`#ifdef USE_ENVMAP
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
#endif`,Gx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Hx=`#ifdef USE_ENVMAP
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
#endif`,Wx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Vx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$x=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Xx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qx=`#ifdef USE_GRADIENTMAP
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
}`,Yx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Kx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Zx=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Jx=`#ifdef USE_ENVMAP
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
#endif`,Qx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ev=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,tv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,nv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,iv=`PhysicalMaterial material;
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
#endif`,sv=`uniform sampler2D dfgLUT;
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
}`,rv=`
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
#endif`,av=`#if defined( RE_IndirectDiffuse )
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
#endif`,ov=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lv=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,cv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,uv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,dv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,pv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,mv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,gv=`#if defined( USE_POINTS_UV )
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
#endif`,xv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Mv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_v=`#if defined( USE_MORPHCOLORS )
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
#endif`,Sv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yv=`#ifdef USE_MORPHTARGETS
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
#endif`,wv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ev=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Av=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Cv=`#ifdef USE_NORMALMAP
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
#endif`,Pv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Lv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Dv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Iv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Fv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Nv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Uv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ov=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,kv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Bv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,zv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Gv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Hv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Wv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Vv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,$v=`float getShadowMask() {
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
}`,Xv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qv=`#ifdef USE_SKINNING
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
#endif`,Yv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,jv=`#ifdef USE_SKINNING
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
#endif`,Kv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Zv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Jv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Qv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,eM=`#ifdef USE_TRANSMISSION
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
#endif`,tM=`#ifdef USE_TRANSMISSION
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
#endif`,nM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,iM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const aM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,oM=`uniform sampler2D t2D;
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
}`,lM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cM=`uniform float backgroundBlurriness;
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
}`,uM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fM=`#include <common>
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
}`,dM=`#if DEPTH_PACKING == 3200
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
}`,pM=`#define DISTANCE
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
}`,mM=`#define DISTANCE
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
}`,gM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vM=`uniform float scale;
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
}`,MM=`uniform vec3 diffuse;
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
}`,_M=`#include <common>
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
}`,SM=`uniform vec3 diffuse;
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
}`,yM=`#define LAMBERT
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
}`,wM=`#define LAMBERT
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
}`,bM=`#define MATCAP
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
}`,EM=`#define MATCAP
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
}`,AM=`#define NORMAL
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
}`,TM=`#define NORMAL
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
}`,RM=`#define PHONG
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
}`,CM=`#define PHONG
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
}`,PM=`#define STANDARD
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
}`,LM=`#define STANDARD
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
}`,DM=`#define TOON
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
}`,IM=`#define TOON
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
}`,FM=`uniform float size;
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
}`,NM=`uniform vec3 diffuse;
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
}`,UM=`#include <common>
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
}`,OM=`uniform vec3 color;
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
}`,kM=`uniform float rotation;
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
}`,BM=`uniform vec3 diffuse;
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
}`,gt={alphahash_fragment:ox,alphahash_pars_fragment:lx,alphamap_fragment:cx,alphamap_pars_fragment:ux,alphatest_fragment:hx,alphatest_pars_fragment:fx,aomap_fragment:dx,aomap_pars_fragment:px,batching_pars_vertex:mx,batching_vertex:gx,begin_vertex:xx,beginnormal_vertex:vx,bsdfs:Mx,iridescence_fragment:_x,bumpmap_pars_fragment:Sx,clipping_planes_fragment:yx,clipping_planes_pars_fragment:wx,clipping_planes_pars_vertex:bx,clipping_planes_vertex:Ex,color_fragment:Ax,color_pars_fragment:Tx,color_pars_vertex:Rx,color_vertex:Cx,common:Px,defaultnormal_vertex:Lx,displacementmap_pars_vertex:Dx,displacementmap_vertex:Ix,emissivemap_fragment:Fx,emissivemap_pars_fragment:Nx,colorspace_fragment:Ux,colorspace_pars_fragment:Ox,envmap_fragment:kx,envmap_common_pars_fragment:Bx,envmap_pars_fragment:zx,envmap_pars_vertex:Gx,envmap_physical_pars_fragment:Jx,envmap_vertex:Hx,fog_vertex:Wx,fog_pars_vertex:Vx,fog_fragment:$x,fog_pars_fragment:Xx,gradientmap_pars_fragment:qx,lightmap_pars_fragment:Yx,lights_lambert_fragment:jx,lights_lambert_pars_fragment:Kx,lights_pars_begin:Zx,lights_toon_fragment:Qx,lights_toon_pars_fragment:ev,lights_phong_fragment:tv,lights_phong_pars_fragment:nv,lights_physical_fragment:iv,lights_physical_pars_fragment:sv,lights_fragment_begin:rv,lights_fragment_maps:av,lights_fragment_end:ov,lightprobes_pars_fragment:lv,logdepthbuf_fragment:cv,logdepthbuf_pars_fragment:uv,logdepthbuf_pars_vertex:hv,logdepthbuf_vertex:fv,map_fragment:dv,map_pars_fragment:pv,map_particle_fragment:mv,map_particle_pars_fragment:gv,metalnessmap_fragment:xv,metalnessmap_pars_fragment:vv,morphinstance_vertex:Mv,morphcolor_vertex:_v,morphnormal_vertex:Sv,morphtarget_pars_vertex:yv,morphtarget_vertex:wv,normal_fragment_begin:bv,normal_fragment_maps:Ev,normal_pars_fragment:Av,normal_pars_vertex:Tv,normal_vertex:Rv,normalmap_pars_fragment:Cv,clearcoat_normal_fragment_begin:Pv,clearcoat_normal_fragment_maps:Lv,clearcoat_pars_fragment:Dv,iridescence_pars_fragment:Iv,opaque_fragment:Fv,packing:Nv,premultiplied_alpha_fragment:Uv,project_vertex:Ov,dithering_fragment:kv,dithering_pars_fragment:Bv,roughnessmap_fragment:zv,roughnessmap_pars_fragment:Gv,shadowmap_pars_fragment:Hv,shadowmap_pars_vertex:Wv,shadowmap_vertex:Vv,shadowmask_pars_fragment:$v,skinbase_vertex:Xv,skinning_pars_vertex:qv,skinning_vertex:Yv,skinnormal_vertex:jv,specularmap_fragment:Kv,specularmap_pars_fragment:Zv,tonemapping_fragment:Jv,tonemapping_pars_fragment:Qv,transmission_fragment:eM,transmission_pars_fragment:tM,uv_pars_fragment:nM,uv_pars_vertex:iM,uv_vertex:sM,worldpos_vertex:rM,background_vert:aM,background_frag:oM,backgroundCube_vert:lM,backgroundCube_frag:cM,cube_vert:uM,cube_frag:hM,depth_vert:fM,depth_frag:dM,distance_vert:pM,distance_frag:mM,equirect_vert:gM,equirect_frag:xM,linedashed_vert:vM,linedashed_frag:MM,meshbasic_vert:_M,meshbasic_frag:SM,meshlambert_vert:yM,meshlambert_frag:wM,meshmatcap_vert:bM,meshmatcap_frag:EM,meshnormal_vert:AM,meshnormal_frag:TM,meshphong_vert:RM,meshphong_frag:CM,meshphysical_vert:PM,meshphysical_frag:LM,meshtoon_vert:DM,meshtoon_frag:IM,points_vert:FM,points_frag:NM,shadow_vert:UM,shadow_frag:OM,sprite_vert:kM,sprite_frag:BM},ke={common:{diffuse:{value:new Ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pt}},envmap:{envMap:{value:null},envMapRotation:{value:new pt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pt},normalScale:{value:new qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0},uvTransform:{value:new pt}},sprite:{diffuse:{value:new Ke(16777215)},opacity:{value:1},center:{value:new qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}}},bi={basic:{uniforms:Fn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.fog]),vertexShader:gt.meshbasic_vert,fragmentShader:gt.meshbasic_frag},lambert:{uniforms:Fn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,ke.lights,{emissive:{value:new Ke(0)},envMapIntensity:{value:1}}]),vertexShader:gt.meshlambert_vert,fragmentShader:gt.meshlambert_frag},phong:{uniforms:Fn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,ke.lights,{emissive:{value:new Ke(0)},specular:{value:new Ke(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:gt.meshphong_vert,fragmentShader:gt.meshphong_frag},standard:{uniforms:Fn([ke.common,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.roughnessmap,ke.metalnessmap,ke.fog,ke.lights,{emissive:{value:new Ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag},toon:{uniforms:Fn([ke.common,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.gradientmap,ke.fog,ke.lights,{emissive:{value:new Ke(0)}}]),vertexShader:gt.meshtoon_vert,fragmentShader:gt.meshtoon_frag},matcap:{uniforms:Fn([ke.common,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,{matcap:{value:null}}]),vertexShader:gt.meshmatcap_vert,fragmentShader:gt.meshmatcap_frag},points:{uniforms:Fn([ke.points,ke.fog]),vertexShader:gt.points_vert,fragmentShader:gt.points_frag},dashed:{uniforms:Fn([ke.common,ke.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:gt.linedashed_vert,fragmentShader:gt.linedashed_frag},depth:{uniforms:Fn([ke.common,ke.displacementmap]),vertexShader:gt.depth_vert,fragmentShader:gt.depth_frag},normal:{uniforms:Fn([ke.common,ke.bumpmap,ke.normalmap,ke.displacementmap,{opacity:{value:1}}]),vertexShader:gt.meshnormal_vert,fragmentShader:gt.meshnormal_frag},sprite:{uniforms:Fn([ke.sprite,ke.fog]),vertexShader:gt.sprite_vert,fragmentShader:gt.sprite_frag},background:{uniforms:{uvTransform:{value:new pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:gt.background_vert,fragmentShader:gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pt}},vertexShader:gt.backgroundCube_vert,fragmentShader:gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:gt.cube_vert,fragmentShader:gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:gt.equirect_vert,fragmentShader:gt.equirect_frag},distance:{uniforms:Fn([ke.common,ke.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:gt.distance_vert,fragmentShader:gt.distance_frag},shadow:{uniforms:Fn([ke.lights,ke.fog,{color:{value:new Ke(0)},opacity:{value:1}}]),vertexShader:gt.shadow_vert,fragmentShader:gt.shadow_frag}};bi.physical={uniforms:Fn([bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pt},clearcoatNormalScale:{value:new qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new pt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pt},sheen:{value:0},sheenColor:{value:new Ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pt},transmissionSamplerSize:{value:new qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pt},attenuationDistance:{value:0},attenuationColor:{value:new Ke(0)},specularColor:{value:new Ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pt},anisotropyVector:{value:new qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pt}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag};const eo={r:0,b:0,g:0},zM=new et,Mp=new pt;Mp.set(-1,0,0,0,1,0,0,0,1);function GM(n,e,t,i,s,r){const a=new Ke(0);let l=s===!0?0:1,o,u,c=null,f=0,h=null;function d(y){let _=y.isScene===!0?y.background:null;if(_&&_.isTexture){const w=y.backgroundBlurriness>0;_=e.get(_,w)}return _}function g(y){let _=!1;const w=d(y);w===null?p(a,l):w&&w.isColor&&(p(w,1),_=!0);const S=n.xr.getEnvironmentBlendMode();S==="additive"?t.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||_)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function v(y,_){const w=d(_);w&&w.isCubeTexture?(u===void 0&&(u=new vt(new Ea(1,1,1),new cn({name:"BackgroundCubeMaterial",uniforms:Lr(bi.backgroundCube.uniforms),vertexShader:bi.backgroundCube.vertexShader,fragmentShader:bi.backgroundCube.fragmentShader,side:yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(S,M,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=w,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(zM.makeRotationFromEuler(_.backgroundRotation)).transpose(),w.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply(Mp),u.material.toneMapped=bt.getTransfer(w.colorSpace)!==Ut,(c!==w||f!==w.version||h!==n.toneMapping)&&(u.material.needsUpdate=!0,c=w,f=w.version,h=n.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):w&&w.isTexture&&(o===void 0&&(o=new vt(new Hs(2,2),new cn({name:"BackgroundMaterial",uniforms:Lr(bi.background.uniforms),vertexShader:bi.background.vertexShader,fragmentShader:bi.background.fragmentShader,side:Ji,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),o.geometry.deleteAttribute("normal"),Object.defineProperty(o.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(o)),o.material.uniforms.t2D.value=w,o.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,o.material.toneMapped=bt.getTransfer(w.colorSpace)!==Ut,w.matrixAutoUpdate===!0&&w.updateMatrix(),o.material.uniforms.uvTransform.value.copy(w.matrix),(c!==w||f!==w.version||h!==n.toneMapping)&&(o.material.needsUpdate=!0,c=w,f=w.version,h=n.toneMapping),o.layers.enableAll(),y.unshift(o,o.geometry,o.material,0,0,null))}function p(y,_){y.getRGB(eo,mp(n)),t.buffers.color.setClear(eo.r,eo.g,eo.b,_,r)}function m(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),o!==void 0&&(o.geometry.dispose(),o.material.dispose(),o=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,_=1){a.set(y),l=_,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,p(a,l)},render:g,addToRenderList:v,dispose:m}}function HM(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null);let r=s,a=!1;function l(P,R,D,C,I){let U=!1;const O=f(P,C,D,R);r!==O&&(r=O,u(r.object)),U=d(P,C,D,I),U&&g(P,C,D,I),I!==null&&e.update(I,n.ELEMENT_ARRAY_BUFFER),(U||a)&&(a=!1,w(P,R,D,C),I!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(I).buffer))}function o(){return n.createVertexArray()}function u(P){return n.bindVertexArray(P)}function c(P){return n.deleteVertexArray(P)}function f(P,R,D,C){const I=C.wireframe===!0;let U=i[R.id];U===void 0&&(U={},i[R.id]=U);const O=P.isInstancedMesh===!0?P.id:0;let W=U[O];W===void 0&&(W={},U[O]=W);let k=W[D.id];k===void 0&&(k={},W[D.id]=k);let G=k[I];return G===void 0&&(G=h(o()),k[I]=G),G}function h(P){const R=[],D=[],C=[];for(let I=0;I<t;I++)R[I]=0,D[I]=0,C[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:D,attributeDivisors:C,object:P,attributes:{},index:null}}function d(P,R,D,C){const I=r.attributes,U=R.attributes;let O=0;const W=D.getAttributes();for(const k in W)if(W[k].location>=0){const Z=I[k];let me=U[k];if(me===void 0&&(k==="instanceMatrix"&&P.instanceMatrix&&(me=P.instanceMatrix),k==="instanceColor"&&P.instanceColor&&(me=P.instanceColor)),Z===void 0||Z.attribute!==me||me&&Z.data!==me.data)return!0;O++}return r.attributesNum!==O||r.index!==C}function g(P,R,D,C){const I={},U=R.attributes;let O=0;const W=D.getAttributes();for(const k in W)if(W[k].location>=0){let Z=U[k];Z===void 0&&(k==="instanceMatrix"&&P.instanceMatrix&&(Z=P.instanceMatrix),k==="instanceColor"&&P.instanceColor&&(Z=P.instanceColor));const me={};me.attribute=Z,Z&&Z.data&&(me.data=Z.data),I[k]=me,O++}r.attributes=I,r.attributesNum=O,r.index=C}function v(){const P=r.newAttributes;for(let R=0,D=P.length;R<D;R++)P[R]=0}function p(P){m(P,0)}function m(P,R){const D=r.newAttributes,C=r.enabledAttributes,I=r.attributeDivisors;D[P]=1,C[P]===0&&(n.enableVertexAttribArray(P),C[P]=1),I[P]!==R&&(n.vertexAttribDivisor(P,R),I[P]=R)}function y(){const P=r.newAttributes,R=r.enabledAttributes;for(let D=0,C=R.length;D<C;D++)R[D]!==P[D]&&(n.disableVertexAttribArray(D),R[D]=0)}function _(P,R,D,C,I,U,O){O===!0?n.vertexAttribIPointer(P,R,D,I,U):n.vertexAttribPointer(P,R,D,C,I,U)}function w(P,R,D,C){v();const I=C.attributes,U=D.getAttributes(),O=R.defaultAttributeValues;for(const W in U){const k=U[W];if(k.location>=0){let G=I[W];if(G===void 0&&(W==="instanceMatrix"&&P.instanceMatrix&&(G=P.instanceMatrix),W==="instanceColor"&&P.instanceColor&&(G=P.instanceColor)),G!==void 0){const Z=G.normalized,me=G.itemSize,le=e.get(G);if(le===void 0)continue;const q=le.buffer,$=le.type,K=le.bytesPerElement,j=$===n.INT||$===n.UNSIGNED_INT||G.gpuType===Lu;if(G.isInterleavedBufferAttribute){const V=G.data,B=V.isInterleavedBuffer===!0?V.stride:V.itemSize,te=G.offset;if(V.isInstancedInterleavedBuffer||V.isInstancedBufferAttribute){for(let ee=0;ee<k.locationSize;ee++)m(k.location+ee,V.meshPerAttribute);P.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let ee=0;ee<k.locationSize;ee++)p(k.location+ee);n.bindBuffer(n.ARRAY_BUFFER,q);for(let ee=0;ee<k.locationSize;ee++)_(k.location+ee,me/k.locationSize,$,Z,B*K,(te+me/k.locationSize*ee)*K,j)}else{if(G.isInstancedBufferAttribute){for(let V=0;V<k.locationSize;V++)m(k.location+V,G.meshPerAttribute);P.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let V=0;V<k.locationSize;V++)p(k.location+V);n.bindBuffer(n.ARRAY_BUFFER,q);for(let V=0;V<k.locationSize;V++)_(k.location+V,me/k.locationSize,$,Z,me*K,me/k.locationSize*V*K,j)}}else if(O!==void 0){const Z=O[W];if(Z!==void 0)switch(Z.length){case 2:n.vertexAttrib2fv(k.location,Z);break;case 3:n.vertexAttrib3fv(k.location,Z);break;case 4:n.vertexAttrib4fv(k.location,Z);break;default:n.vertexAttrib1fv(k.location,Z)}}}}y()}function S(){A();for(const P in i){const R=i[P];for(const D in R){const C=R[D];for(const I in C){const U=C[I];for(const O in U)c(U[O].object),delete U[O];delete C[I]}}delete i[P]}}function M(P){if(i[P.id]===void 0)return;const R=i[P.id];for(const D in R){const C=R[D];for(const I in C){const U=C[I];for(const O in U)c(U[O].object),delete U[O];delete C[I]}}delete i[P.id]}function x(P){for(const R in i){const D=i[R];for(const C in D){const I=D[C];if(I[P.id]===void 0)continue;const U=I[P.id];for(const O in U)c(U[O].object),delete U[O];delete I[P.id]}}}function b(P){for(const R in i){const D=i[R],C=P.isInstancedMesh===!0?P.id:0,I=D[C];if(I!==void 0){for(const U in I){const O=I[U];for(const W in O)c(O[W].object),delete O[W];delete I[U]}delete D[C],Object.keys(D).length===0&&delete i[R]}}}function A(){E(),a=!0,r!==s&&(r=s,u(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:l,reset:A,resetDefaultState:E,dispose:S,releaseStatesOfGeometry:M,releaseStatesOfObject:b,releaseStatesOfProgram:x,initAttributes:v,enableAttribute:p,disableUnusedAttributes:y}}function WM(n,e,t){let i;function s(o){i=o}function r(o,u){n.drawArrays(i,o,u),t.update(u,i,1)}function a(o,u,c){c!==0&&(n.drawArraysInstanced(i,o,u,c),t.update(u,i,c))}function l(o,u,c){if(c===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,o,0,u,0,c);let h=0;for(let d=0;d<c;d++)h+=u[d];t.update(h,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=l}function VM(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const x=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(x){return!(x!==On&&i.convert(x)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(x){const b=x===Pi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(x!==ln&&x!==Un&&!b&&i.convert(x)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function o(x){if(x==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp";const c=o(u);c!==u&&(at("WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);const f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=t.logarithmicDepthBuffer===!0&&f===!1;t.reversedDepthBuffer===!0&&f===!1&&at("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&f===!0&&at("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),_=n.getParameter(n.MAX_VARYING_VECTORS),w=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),S=n.getParameter(n.MAX_SAMPLES),M=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:o,textureFormatReadable:a,textureTypeReadable:l,precision:u,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:y,maxVaryings:_,maxFragmentUniforms:w,maxSamples:S,samples:M}}function $M(n){const e=this;let t=null,i=0,s=!1,r=!1;const a=new ps,l=new pt,o={value:null,needsUpdate:!1};this.uniform=o,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||i!==0||s;return s=h,i=f.length,d},this.beginShadows=function(){r=!0,c(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){t=c(f,h,0)},this.setState=function(f,h,d){const g=f.clippingPlanes,v=f.clipIntersection,p=f.clipShadows,m=n.get(f);if(!s||g===null||g.length===0||r&&!p)r?c(null):u();else{const y=r?0:i,_=y*4;let w=m.clippingState||null;o.value=w,w=c(g,h,_,d);for(let S=0;S!==_;++S)w[S]=t[S];m.clippingState=w,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function u(){o.value!==t&&(o.value=t,o.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(f,h,d,g){const v=f!==null?f.length:0;let p=null;if(v!==0){if(p=o.value,g!==!0||p===null){const m=d+v*4,y=h.matrixWorldInverse;l.getNormalMatrix(y),(p===null||p.length<m)&&(p=new Float32Array(m));for(let _=0,w=d;_!==v;++_,w+=4)a.copy(f[_]).applyMatrix4(y,l),a.normal.toArray(p,w),p[w+3]=a.constant}o.value=p,o.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}class Vu extends on{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new fp(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ea(5,5,5),r=new cn({name:"CubemapFromEquirect",uniforms:Lr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:yn,blending:Sr});r.uniforms.tEquirect.value=t;const a=new vt(s,r),l=t.minFilter;return t.minFilter===ti&&(t.minFilter=Xt),new du(1,10,this).update(e,a),t.minFilter=l,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}}const ff=256,XM=3,qM=20,_p=256,Sp=16,YM=3,jM=new z,KM=new Ke;class ko{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new du(1,10,null),this._boxMesh=new vt(new Ea(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){const{size:a=256,position:l=jM}=r,o=this._renderer;this._setSize(a);const u=this._allocateTarget(),c=this._getSourceTarget(!0);t>0&&(c.texture.mipmapsAutoUpdate=!1);const f=o.autoClear,h=o.autoClearColor,d=o.autoClearDepth,g=o.autoClearStencil,v=e.background;o.autoClear=!0,o.autoClearColor=!0,o.autoClearDepth=!0,o.autoClearStencil=!0,v===null&&(e.background=o.getClearColor(KM));const p=new du(i,s,c);return p.position.copy(l),p.update(o,e),o.autoClear=f,o.autoClearColor=h,o.autoClearDepth=d,o.autoClearStencil=g,e.background=v,t>0&&(c.texture.mipmapsAutoUpdate=!0,this._blur(u,t)),this._applyPMREM(u),u}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=mf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=pf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(ff,ip(e))}_fromTexture(e,t){e.mapping===Rr||e.mapping===ma?this._setSize(e.image.length===0?ff:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const i=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){const e=this._cubeSize,t=df(e,!1,!1),i=Math.log2(e)-XM;for(let s=0;s<=i;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){const t=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==t||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=df(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,i){const s=this._boxMesh,r=this._cubeCamera;s.material=i,r.renderTarget=e,r.activeMipmapLevel=t;const a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Rr||e.mapping===ma?(this._cubemapMaterial===null&&(this._cubemapMaterial=mf()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=pf()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=ZM(),this._integrationMaterial=JM());const t=this._cubeSize,i=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;const r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/Sp);for(let a=0;a<=i;a++){const l=ko.lodToRoughness(a,i);if(a>i-YM)r.roughness.value=l,this._renderCube(e,a,this._integrationMaterial);else{const o=l>0?Math.log2(t)+.5*Math.log2(6/(_p*Math.pow(l,4)))+.5:0;s.roughness.value=l,s.lodBias.value=o,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=QM());const i=this._blurMaterial,s=i.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,i),s.envMap.value=e.texture,this._renderCube(r,0,i)}}function df(n,e,t){return new Vu(n,{minFilter:ti,generateMipmaps:e,type:Pi,colorSpace:Io,depthBuffer:t})}function Aa(n,e,t){return new cn({name:n,uniforms:e,vertexShader:gt.cube_vert,fragmentShader:t,side:yn,blending:Sr,depthTest:!1,depthWrite:!1})}function ZM(){return Aa("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${_p}u

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
	`)}function JM(){return Aa("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Sp}},`

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
	`)}function QM(){return Aa("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${qM}
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
	`)}function pf(){return Aa("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function mf(){return Aa("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function e_(n){let e=new WeakMap,t=new WeakMap,i=null;function s(h,d=!1){return h==null?null:d?a(h):r(h)}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===Ml||d===_l)if(e.has(h)){const g=e.get(h).texture;return l(g,h.mapping)}else{const g=h.image;if(g&&g.height>0){const v=new Vu(g.height);return v.fromEquirectangularTexture(n,h),e.set(h,v),h.addEventListener("dispose",u),l(v.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture&&h.isPMREMTexture!==!0){const d=h.mapping,g=d===Ml||d===_l,v=d===Rr||d===ma;if(g||v){let p=t.get(h);const m=p!==void 0?p.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==m)return i===null&&(i=new ko(n)),p=g?i.fromEquirectangular(h,p):i.fromCubemap(h,p),p.texture.pmremVersion=h.pmremVersion,t.set(h,p),p.texture;if(p!==void 0)return p.texture;{const y=h.image;return g&&y&&y.height>0||v&&y&&o(y)?(i===null&&(i=new ko(n)),p=g?i.fromEquirectangular(h):i.fromCubemap(h),p.texture.pmremVersion=h.pmremVersion,t.set(h,p),h.addEventListener("dispose",c),p.texture):null}}}return h}function l(h,d){return d===Ml?h.mapping=Rr:d===_l&&(h.mapping=ma),h}function o(h){let d=0;const g=6;for(let v=0;v<g;v++)h[v]!==void 0&&d++;return d===g}function u(h){const d=h.target;d.removeEventListener("dispose",u);const g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function c(h){const d=h.target;d.removeEventListener("dispose",c);const g=t.get(d);g!==void 0&&(t.delete(d),g.dispose())}function f(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function t_(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&yr("WebGLRenderer: "+i+" extension not supported."),s}}}function n_(n,e,t,i){const s={},r=new WeakMap,a=new FinalizationRegistry(g=>delete s[g]);function l(g){o(g.target)}function o(g){g.index!==null&&e.remove(g.index);for(const p in g.attributes)e.remove(g.attributes[p]);g.removeEventListener("dispose",l),delete s[g.id],a.unregister(g);const v=r.get(g);v&&(e.remove(v),r.delete(g)),i.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function u(g,v){return s[v.id]!==void 0||(v.addEventListener("dispose",l),s[v.id]=new WeakRef(v),a.register(v,v.id,v),t.memory.geometries++),v}function c(g){const v=g.attributes;for(const p in v)e.update(v[p],n.ARRAY_BUFFER)}function f(g){const v=g.index,p=g.attributes.position;let m=0;if(p===void 0)return;const y=v!==null?v.array.length:p.array.length/3-1,_=p.count>=65535?up:cp,w=new _(Math.ceil(y/3)*6,1),S=w.array;if(v!==null){const x=v.array;m=v.version;for(let b=0,A=0;b<y;b+=3){const E=x[b+0],P=x[b+1],R=x[b+2];S[A++]=E,S[A++]=P,S[A++]=P,S[A++]=R,S[A++]=R,S[A++]=E}}else{m=p.version;for(let x=0,b=0;x<y;x+=3){const A=x+0,E=x+1,P=x+2;S[b++]=A,S[b++]=E,S[b++]=E,S[b++]=P,S[b++]=P,S[b++]=A}}w.version=m;const M=r.get(g);M&&e.remove(M),r.set(g,w)}function h(g){const v=r.get(g);if(v){const p=g.index;p!==null&&v.version<p.version&&f(g)}else f(g);return r.get(g)}function d(){for(const g in s){const v=s[g].deref();v!==void 0&&o(v)}}return{get:u,update:c,getWireframeAttribute:h,dispose:d}}function i_(n,e,t){let i;function s(f){i=f}let r,a;function l(f){r=f.type,a=f.bytesPerElement}function o(f,h){n.drawElements(i,h,r,f*a),t.update(h,i,1)}function u(f,h,d){d!==0&&(n.drawElementsInstanced(i,h,r,f*a,d),t.update(h,i,d))}function c(f,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,f,0,d);let v=0;for(let p=0;p<d;p++)v+=h[p];t.update(v,i,1)}this.setMode=s,this.setIndex=l,this.render=o,this.renderInstances=u,this.renderMultiDraw=c}function s_(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,l){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=l*(r/3);break;case n.LINES:t.lines+=l*(r/2);break;case n.LINE_STRIP:t.lines+=l*(r-1);break;case n.LINE_LOOP:t.lines+=l*r;break;case n.POINTS:t.points+=l*r;break;default:Lt("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function r_(n,e,t){const i=new WeakMap,s=new ct;function r(a,l,o){const u=a.morphTargetInfluences,c=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,f=c!==void 0?c.length:0;let h=i.get(l);if(h===void 0||h.count!==f){let A=function(){x.dispose(),i.delete(l),l.removeEventListener("dispose",A)};h!==void 0&&h.texture.dispose();const d=l.morphAttributes.position!==void 0,g=l.morphAttributes.normal!==void 0,v=l.morphAttributes.color!==void 0,p=l.morphAttributes.position||[],m=l.morphAttributes.normal||[],y=l.morphAttributes.color||[];let _=0;d===!0&&(_=1),g===!0&&(_=2),v===!0&&(_=3);let w=l.attributes.position.count*_,S=1;w>e.maxTextureSize&&(S=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const M=new Float32Array(w*S*4*f),x=new ap(M,w,S,f);x.type=Un,x.needsUpdate=!0;const b=_*4;for(let E=0;E<f;E++){const P=p[E],R=m[E],D=y[E],C=w*S*4*E;for(let I=0;I<P.count;I++){const U=I*b;d===!0&&(s.fromBufferAttribute(P,I),M[C+U+0]=s.x,M[C+U+1]=s.y,M[C+U+2]=s.z,M[C+U+3]=0),g===!0&&(s.fromBufferAttribute(R,I),M[C+U+4]=s.x,M[C+U+5]=s.y,M[C+U+6]=s.z,M[C+U+7]=0),v===!0&&(s.fromBufferAttribute(D,I),M[C+U+8]=s.x,M[C+U+9]=s.y,M[C+U+10]=s.z,M[C+U+11]=D.itemSize===4?s.w:1)}}h={count:f,texture:x,size:new qe(w,S)},i.set(l,h),l.addEventListener("dispose",A)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)o.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let d=0;for(let v=0;v<u.length;v++)d+=u[v];const g=l.morphTargetsRelative?1:1-d;o.getUniforms().setValue(n,"morphTargetBaseInfluence",g),o.getUniforms().setValue(n,"morphTargetInfluences",u)}o.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),o.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:r}}function a_(n,e,t,i,s){let r=new WeakMap;function a(u){const c=s.render.frame,f=u.geometry,h=e.get(u,f);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),u.isInstancedMesh&&(u.hasEventListener("dispose",o)===!1&&u.addEventListener("dispose",o),r.get(u)!==c&&(t.update(u.instanceMatrix,n.ARRAY_BUFFER),u.instanceColor!==null&&t.update(u.instanceColor,n.ARRAY_BUFFER),r.set(u,c))),u.isSkinnedMesh){const d=u.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return h}function l(){r=new WeakMap}function o(u){const c=u.target;c.removeEventListener("dispose",o),i.releaseStatesOfObject(c),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:a,dispose:l}}const o_={[Bd]:"LINEAR_TONE_MAPPING",[zd]:"REINHARD_TONE_MAPPING",[Gd]:"CINEON_TONE_MAPPING",[Hd]:"ACES_FILMIC_TONE_MAPPING",[Vd]:"AGX_TONE_MAPPING",[$d]:"NEUTRAL_TONE_MAPPING",[Wd]:"CUSTOM_TONE_MAPPING"};function l_(n,e,t,i,s,r){const a=new on(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let l=null,o=null,u=null;const c=new Nt;c.setAttribute("position",new Ft([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Ft([0,2,0,0,2,0],2));const f=new Kg({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new vt(c,f),d=new Ws(-1,1,1,-1,0,1);let g=null,v=null,p=!1,m,y=null,_=[],w=!1;this.setSize=function(S,M){a.setSize(S,M),l!==null&&l.setSize(S,M),o!==null&&o.setSize(S,M);for(let x=0;x<_.length;x++){const b=_[x];b.setSize&&b.setSize(S,M)}},this.setEffects=function(S){_=S,w=_.length>0&&_[0].isRenderPass===!0;const M=a.width,x=a.height;_.length>0&&l===null&&(l=new on(M,x,{type:Pi,depthBuffer:!1,stencilBuffer:!1}),o=new on(M,x,{type:Pi,depthBuffer:!1,stencilBuffer:!1}));const b=s===!0&&_.some(A=>A.needsDepthTexture===!0);b!==(a.depthTexture!==null)&&(b===!0&&u===null&&(u=new Ms(M,x),r===!0&&(u.format=ms,u.type=Pr)),a.dispose(),a.depthTexture=b?u:null,a.resolveDepthBuffer=b,a.storeMultisampledDepthBuffer=b);for(let A=0;A<_.length;A++){const E=_[A];E.setSize&&E.setSize(M,x),b&&E.needsDepthTexture===!0&&E.setDepthTexture&&E.setDepthTexture(u)}},this.begin=function(S,M){if(p||S.toneMapping===ji&&_.length===0)return!1;if(y=M,M!==null){const x=M.width,b=M.height;(a.width!==x||a.height!==b)&&this.setSize(x,b)}return w===!1&&S.setRenderTarget(a),m=S.toneMapping,S.toneMapping=ji,!0},this.hasRenderPass=function(){return w},this.end=function(S,M){S.toneMapping=m,p=!0;let x=a,b=l;for(let A=0;A<_.length;A++){const E=_[A];E.enabled!==!1&&(E.render(S,b,x,M),E.needsSwap!==!1&&(x=b,b=b===l?o:l))}if(g!==S.outputColorSpace||v!==S.toneMapping){g=S.outputColorSpace,v=S.toneMapping,f.defines={},bt.getTransfer(g)===Ut&&(f.defines.SRGB_TRANSFER="");const A=o_[v];A&&(f.defines[A]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=x.texture,S.setRenderTarget(y),S.render(h,d),y=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.dispose(),l!==null&&l.dispose(),o!==null&&o.dispose(),c.dispose(),f.dispose()}}const yp=new wn,wp=new Ms(1,1),bp=new dp(1),Ep=new ap,Ap=new Rg,Tp=new fp,gf=[],xf=[],vf=new Float32Array(16),Mf=new Float32Array(9),_f=new Float32Array(4);function Fr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=gf[s];if(r===void 0&&(r=new Float32Array(s),gf[s]=r),e!==0){i.toArray(r,0);for(let a=1,l=0;a!==e;++a)l+=t,n[a].toArray(r,l)}return r}function un(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function hn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function il(n,e){let t=xf[e];t===void 0&&(t=new Int32Array(e),xf[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function c_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function u_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(un(t,e))return;n.uniform2fv(this.addr,e),hn(t,e)}}function h_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(un(t,e))return;n.uniform3fv(this.addr,e),hn(t,e)}}function f_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(un(t,e))return;n.uniform4fv(this.addr,e),hn(t,e)}}function d_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(un(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),hn(t,e)}else{if(un(t,i))return;_f.set(i),n.uniformMatrix2fv(this.addr,!1,_f),hn(t,i)}}function p_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(un(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),hn(t,e)}else{if(un(t,i))return;Mf.set(i),n.uniformMatrix3fv(this.addr,!1,Mf),hn(t,i)}}function m_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(un(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),hn(t,e)}else{if(un(t,i))return;vf.set(i),n.uniformMatrix4fv(this.addr,!1,vf),hn(t,i)}}function g_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function x_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(un(t,e))return;n.uniform2iv(this.addr,e),hn(t,e)}}function v_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(un(t,e))return;n.uniform3iv(this.addr,e),hn(t,e)}}function M_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(un(t,e))return;n.uniform4iv(this.addr,e),hn(t,e)}}function __(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function S_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(un(t,e))return;n.uniform2uiv(this.addr,e),hn(t,e)}}function y_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(un(t,e))return;n.uniform3uiv(this.addr,e),hn(t,e)}}function w_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(un(t,e))return;n.uniform4uiv(this.addr,e),hn(t,e)}}function sl(n){return n.version===0&&(n.compareFunction=tp,n.needsUpdate=!0),n}function b_(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?r=sl(wp):r=yp,t.setTexture2D(e||r,s)}function E_(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Ap,s)}function A_(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_CUBE_SHADOW?r=sl(bp):r=Tp,t.setTextureCube(e||r,s)}function T_(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Ep,s)}function R_(n){switch(n){case 5126:return c_;case 35664:return u_;case 35665:return h_;case 35666:return f_;case 35674:return d_;case 35675:return p_;case 35676:return m_;case 5124:case 35670:return g_;case 35667:case 35671:return x_;case 35668:case 35672:return v_;case 35669:case 35673:return M_;case 5125:return __;case 36294:return S_;case 36295:return y_;case 36296:return w_;case 35678:case 36198:case 36298:case 36306:case 35682:return b_;case 35679:case 36299:case 36307:return E_;case 35680:case 36300:case 36308:case 36293:return A_;case 36289:case 36303:case 36311:case 36292:return T_}}function C_(n,e){n.uniform1fv(this.addr,e)}function P_(n,e){const t=Fr(e,this.size,2);n.uniform2fv(this.addr,t)}function L_(n,e){const t=Fr(e,this.size,3);n.uniform3fv(this.addr,t)}function D_(n,e){const t=Fr(e,this.size,4);n.uniform4fv(this.addr,t)}function I_(n,e){const t=Fr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function F_(n,e){const t=Fr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function N_(n,e){const t=Fr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function U_(n,e){n.uniform1iv(this.addr,e)}function O_(n,e){n.uniform2iv(this.addr,e)}function k_(n,e){n.uniform3iv(this.addr,e)}function B_(n,e){n.uniform4iv(this.addr,e)}function z_(n,e){n.uniform1uiv(this.addr,e)}function G_(n,e){n.uniform2uiv(this.addr,e)}function H_(n,e){n.uniform3uiv(this.addr,e)}function W_(n,e){n.uniform4uiv(this.addr,e)}function V_(n,e,t){const i=this.cache,s=e.length,r=il(t,s);un(i,r)||(n.uniform1iv(this.addr,r),hn(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=sl(wp):a=yp;for(let l=0;l!==s;++l)t.setTexture2D(e[l]||a,r[l])}function $_(n,e,t){const i=this.cache,s=e.length,r=il(t,s);un(i,r)||(n.uniform1iv(this.addr,r),hn(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Ap,r[a])}function X_(n,e,t){const i=this.cache,s=e.length,r=il(t,s);un(i,r)||(n.uniform1iv(this.addr,r),hn(i,r));let a;this.type===n.SAMPLER_CUBE_SHADOW?a=sl(bp):a=Tp;for(let l=0;l!==s;++l)t.setTextureCube(e[l]||a,r[l])}function q_(n,e,t){const i=this.cache,s=e.length,r=il(t,s);un(i,r)||(n.uniform1iv(this.addr,r),hn(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Ep,r[a])}function Y_(n){switch(n){case 5126:return C_;case 35664:return P_;case 35665:return L_;case 35666:return D_;case 35674:return I_;case 35675:return F_;case 35676:return N_;case 5124:case 35670:return U_;case 35667:case 35671:return O_;case 35668:case 35672:return k_;case 35669:case 35673:return B_;case 5125:return z_;case 36294:return G_;case 36295:return H_;case 36296:return W_;case 35678:case 36198:case 36298:case 36306:case 35682:return V_;case 35679:case 36299:case 36307:return $_;case 35680:case 36300:case 36308:case 36293:return X_;case 36289:case 36303:case 36311:case 36292:return q_}}class j_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=R_(t.type)}}class K_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Y_(t.type)}}class Z_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const l=s[r];l.setValue(e,t[l.id],i)}}}const ql=/(\w+)(\])?(\[|\.)?/g;function Sf(n,e){n.seq.push(e),n.map[e.id]=e}function J_(n,e,t){const i=n.name,s=i.length;for(ql.lastIndex=0;;){const r=ql.exec(i),a=ql.lastIndex;let l=r[1];const o=r[2]==="]",u=r[3];if(o&&(l=l|0),u===void 0||u==="["&&a+2===s){Sf(t,u===void 0?new j_(l,n,e):new K_(l,n,e));break}else{let f=t.map[l];f===void 0&&(f=new Z_(l),Sf(t,f)),t=f}}}class wo{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const l=e.getActiveUniform(t,a),o=e.getUniformLocation(t,l.name);J_(l,o,this)}const s=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){const l=t[r],o=i[l.id];o.needsUpdate!==!1&&l.setValue(e,o.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&i.push(a)}return i}}function yf(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Q_=37297;let eS=0;function tS(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const l=a+1;i.push(`${l===e?">":" "} ${l}: ${t[a]}`)}return i.join(`
`)}const wf=new pt;function nS(n){bt._getMatrix(wf,bt.workingColorSpace,n);const e=`mat3( ${wf.elements.map(t=>t.toFixed(4))} )`;switch(bt.getTransfer(n)){case Fo:return[e,"LinearTransferOETF"];case Ut:return[e,"sRGBTransferOETF"];default:return at("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function bf(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const l=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+tS(n.getShaderSource(e),l)}else return r}function iS(n,e){const t=nS(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const sS={[Bd]:"Linear",[zd]:"Reinhard",[Gd]:"Cineon",[Hd]:"ACESFilmic",[Vd]:"AgX",[$d]:"Neutral",[Wd]:"Custom"};function rS(n,e){const t=sS[e];return t===void 0?(at("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const to=new z;function aS(){bt.getLuminanceCoefficients(to);const n=to.x.toFixed(4),e=to.y.toFixed(4),t=to.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function oS(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ea).join(`
`)}function lS(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function cS(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),a=r.name;let l=1;r.type===n.FLOAT_MAT2&&(l=2),r.type===n.FLOAT_MAT3&&(l=3),r.type===n.FLOAT_MAT4&&(l=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:l}}return t}function ea(n){return n!==""}function Ef(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Af(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const uS=/^[ \t]*#include +<([\w\d./]+)>/gm;function pu(n){return n.replace(uS,hS)}function hS(n,e){const t=gt[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return pu(t)}const fS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Tf(n){return n.replace(fS,dS)}function dS(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Rf(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}const pS={[ia]:"SHADOWMAP_TYPE_PCF",[Qr]:"SHADOWMAP_TYPE_VSM"};function mS(n){return pS[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const gS={[ma]:"ENVMAP_MODE_REFRACTION"};function xS(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":gS[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const vS={[jo]:"ENVMAP_BLENDING_MULTIPLY",[W0]:"ENVMAP_BLENDING_MIX",[V0]:"ENVMAP_BLENDING_ADD"};function MS(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":vS[n.combine]||"ENVMAP_BLENDING_NONE"}function _S(n,e,t,i){const s=n.getContext(),r=t.defines;let a=t.vertexShader,l=t.fragmentShader;const o=mS(t),u=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",c=xS(t),f=MS(t),h=oS(t),d=lS(r),g=s.createProgram();let v,p,m=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(ea).join(`
`),v.length>0&&(v+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(ea).join(`
`),p.length>0&&(p+=`
`)):(v=[Rf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+o:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ea).join(`
`),p=[Rf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+f:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+o:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ji?"#define TONE_MAPPING":"",t.toneMapping!==ji?gt.tonemapping_pars_fragment:"",t.toneMapping!==ji?rS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",gt.colorspace_pars_fragment,iS("linearToOutputTexel",t.outputColorSpace),aS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ea).join(`
`)),a=pu(a),a=Ef(a,t),a=Af(a,t),l=pu(l),l=Ef(l,t),l=Af(l,t),a=Tf(a),l=Tf(l),t.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,v=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,p=["#define varying in",t.glslVersion===Dh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Dh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=m+v+a,_=m+p+l,w=yf(s,s.VERTEX_SHADER,y),S=yf(s,s.FRAGMENT_SHADER,_);s.attachShader(g,w),s.attachShader(g,S),t.index0AttributeName!==void 0?s.bindAttribLocation(g,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function M(E){if(n.debug.checkShaderErrors){const P=s.getProgramInfoLog(g)||"",R=s.getShaderInfoLog(w)||"",D=s.getShaderInfoLog(S)||"",C=P.trim(),I=R.trim(),U=D.trim();let O=!0,W=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(O=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,g,w,S);else{const k=bf(s,w,"vertex"),G=bf(s,S,"fragment");Lt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+C+`
`+k+`
`+G)}else C!==""?at("WebGLProgram: Program Info Log:",C):(I===""||U==="")&&(W=!1);W&&(E.diagnostics={runnable:O,programLog:C,vertexShader:{log:I,prefix:v},fragmentShader:{log:U,prefix:p}})}s.deleteShader(w),s.deleteShader(S),x=new wo(s,g),b=cS(s,g)}let x;this.getUniforms=function(){return x===void 0&&M(this),x};let b;this.getAttributes=function(){return b===void 0&&M(this),b};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=s.getProgramParameter(g,Q_)),A},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=eS++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=w,this.fragmentShader=S,this}let SS=0;class yS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new wS(e),t.set(e,i)),i}}class wS{constructor(e){this.id=SS++,this.code=e,this.usedTimes=0}}function bS(n){return n===xs||n===Lo||n===Do}function ES(n,e,t,i,s,r){const a=new op,l=new yS,o=new Set,u=[],c=new Map,f=i.logarithmicDepthBuffer,h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(x){return o.add(x),x===0?"uv":`uv${x}`}function g(x,b,A,E,P,R){const D=E.fog,C=P.geometry,I=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?E.environment:null,U=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,O=e.get(x.envMap||I,U),W=h[x.type];let k=i.precision;x.precision!==null&&(k=i.getMaxPrecision(x.precision),k!==x.precision&&at("WebGLProgram.getParameters:",x.precision,"not supported, using",k,"instead."));const G=C.morphAttributes.position||C.morphAttributes.normal||C.morphAttributes.color,Z=G!==void 0?G.length:0;let me=0;C.morphAttributes.position!==void 0&&(me=1),C.morphAttributes.normal!==void 0&&(me=2),C.morphAttributes.color!==void 0&&(me=3);let le,q,$,K;if(W){const Fe=bi[W];le=Fe.vertexShader,q=Fe.fragmentShader}else{le=x.vertexShader,q=x.fragmentShader;const Fe=l.getVertexShaderStage(x),Rt=l.getFragmentShaderStage(x);l.update(x,Fe,Rt),$=Fe.id,K=Rt.id}const j=n.getRenderTarget(),V=n.state.buffers.depth.getReversed(),B=P.isInstancedMesh===!0,te=P.isBatchedMesh===!0,ee=!!x.map,ce=!!x.matcap,Ce=!!O,oe=Ce&&O.isPMREMTexture===!0,ye=!!x.aoMap,pe=!!x.lightMap,ne=!!x.bumpMap&&x.wireframe===!1,Ie=!!x.normalMap,De=!!x.displacementMap,Me=!!x.emissiveMap,We=!!x.metalnessMap,Ve=!!x.roughnessMap,Y=x.anisotropy>0,N=x.clearcoat>0,Te=x.diffuseRoughness>0,Ee=x.dispersion>0,Be=x.retroreflectivity>0,xe=x.iridescence>0,rt=x.sheen>0,Le=x.transmission>0,ze=Y&&!!x.anisotropyMap,F=N&&!!x.clearcoatMap,T=N&&!!x.clearcoatNormalMap,J=N&&!!x.clearcoatRoughnessMap,ve=Te&&!!x.diffuseRoughnessMap,de=xe&&!!x.iridescenceMap,be=xe&&!!x.iridescenceThicknessMap,Ae=rt&&!!x.sheenColorMap,ue=rt&&!!x.sheenRoughnessMap,he=!!x.specularMap,Se=!!x.specularColorMap,H=!!x.specularIntensityMap,fe=Le&&!!x.transmissionMap,ae=Le&&!!x.thicknessMap,Re=!!x.gradientMap,we=!!x.alphaMap,Pe=x.alphaTest>0,$e=!!x.alphaHash,ht=!!x.extensions;let _e=ji;x.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(_e=n.toneMapping);const Ze=oe?O.isCompressedCubeTexture?O.image[0].mipmaps:O.mipmaps:null,ut={shaderID:W,shaderType:x.type,shaderName:x.name,vertexShader:le,fragmentShader:q,defines:x.defines,customVertexShaderID:$,customFragmentShaderID:K,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:k,batching:te,batchingColor:te&&P._colorsTexture!==null,instancing:B,instancingColor:B&&P.instanceColor!==null,instancingMorph:B&&P.morphTexture!==null,outputColorSpace:j===null?n.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:bt.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:ee,matcap:ce,envMap:Ce,envMapMode:Ce&&O.mapping,envMapPMREM:oe,envMapMaxLod:oe?Ze.length-1:null,envMapSize:oe?Ze[0].width:null,aoMap:ye,lightMap:pe,bumpMap:ne,normalMap:Ie,displacementMap:De,emissiveMap:Me,normalMapObjectSpace:Ie&&x.normalMapType===Y0,normalMapTangentSpace:Ie&&x.normalMapType===xa,packedNormalMap:Ie&&x.normalMapType===xa&&bS(x.normalMap.format),metalnessMap:We,roughnessMap:Ve,anisotropy:Y,anisotropyMap:ze,clearcoat:N,clearcoatMap:F,clearcoatNormalMap:T,clearcoatRoughnessMap:J,diffuseRoughness:Te,diffuseRoughnessMap:ve,dispersion:Ee,retroreflection:Be,iridescence:xe,iridescenceMap:de,iridescenceThicknessMap:be,sheen:rt,sheenColorMap:Ae,sheenRoughnessMap:ue,specularMap:he,specularColorMap:Se,specularIntensityMap:H,transmission:Le,transmissionMap:fe,thicknessMap:ae,gradientMap:Re,opaque:x.transparent===!1&&x.blending===Os&&x.alphaToCoverage===!1,alphaMap:we,alphaTest:Pe,alphaHash:$e,combine:x.combine,mapUv:ee&&d(x.map.channel),aoMapUv:ye&&d(x.aoMap.channel),lightMapUv:pe&&d(x.lightMap.channel),bumpMapUv:ne&&d(x.bumpMap.channel),normalMapUv:Ie&&d(x.normalMap.channel),displacementMapUv:De&&d(x.displacementMap.channel),emissiveMapUv:Me&&d(x.emissiveMap.channel),metalnessMapUv:We&&d(x.metalnessMap.channel),roughnessMapUv:Ve&&d(x.roughnessMap.channel),anisotropyMapUv:ze&&d(x.anisotropyMap.channel),clearcoatMapUv:F&&d(x.clearcoatMap.channel),clearcoatNormalMapUv:T&&d(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&d(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ve&&d(x.diffuseRoughnessMap.channel),iridescenceMapUv:de&&d(x.iridescenceMap.channel),iridescenceThicknessMapUv:be&&d(x.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&d(x.sheenColorMap.channel),sheenRoughnessMapUv:ue&&d(x.sheenRoughnessMap.channel),specularMapUv:he&&d(x.specularMap.channel),specularColorMapUv:Se&&d(x.specularColorMap.channel),specularIntensityMapUv:H&&d(x.specularIntensityMap.channel),transmissionMapUv:fe&&d(x.transmissionMap.channel),thicknessMapUv:ae&&d(x.thicknessMap.channel),alphaMapUv:we&&d(x.alphaMap.channel),vertexTangents:!!C.attributes.tangent&&(Ie||Y),vertexNormals:!!C.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!C.attributes.color&&C.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!C.attributes.uv&&(ee||we),fog:!!D,useFog:x.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||C.attributes.normal===void 0&&Ie===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:V,skinning:P.isSkinnedMesh===!0,hasPositionAttribute:C.attributes.position!==void 0,morphTargets:C.morphAttributes.position!==void 0,morphNormals:C.morphAttributes.normal!==void 0,morphColors:C.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:me,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:R.filter(Fe=>Fe.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&A.length>0,shadowMapType:n.shadowMap.type,toneMapping:_e,decodeVideoTexture:ee&&x.map.isVideoTexture===!0&&bt.getTransfer(x.map.colorSpace)===Ut,decodeVideoTextureEmissive:Me&&x.emissiveMap.isVideoTexture===!0&&bt.getTransfer(x.emissiveMap.colorSpace)===Ut,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===jn,flipSided:x.side===yn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ht&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ht&&x.extensions.multiDraw===!0||te)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return ut.vertexUv1s=o.has(1),ut.vertexUv2s=o.has(2),ut.vertexUv3s=o.has(3),o.clear(),ut}function v(x){const b=[];if(x.shaderID?b.push(x.shaderID):(b.push(x.customVertexShaderID),b.push(x.customFragmentShaderID)),x.defines!==void 0)for(const A in x.defines)b.push(A),b.push(x.defines[A]);return x.isRawShaderMaterial===!1&&(p(b,x),m(b,x),b.push(n.outputColorSpace)),b.push(x.customProgramCacheKey),b.join()}function p(x,b){x.push(b.precision),x.push(b.outputColorSpace),x.push(b.envMapMode),x.push(b.envMapPMREM),x.push(b.envMapMaxLod),x.push(b.envMapSize),x.push(b.mapUv),x.push(b.alphaMapUv),x.push(b.lightMapUv),x.push(b.aoMapUv),x.push(b.bumpMapUv),x.push(b.normalMapUv),x.push(b.displacementMapUv),x.push(b.emissiveMapUv),x.push(b.metalnessMapUv),x.push(b.roughnessMapUv),x.push(b.anisotropyMapUv),x.push(b.clearcoatMapUv),x.push(b.clearcoatNormalMapUv),x.push(b.clearcoatRoughnessMapUv),x.push(b.diffuseRoughnessMapUv),x.push(b.iridescenceMapUv),x.push(b.iridescenceThicknessMapUv),x.push(b.sheenColorMapUv),x.push(b.sheenRoughnessMapUv),x.push(b.specularMapUv),x.push(b.specularColorMapUv),x.push(b.specularIntensityMapUv),x.push(b.transmissionMapUv),x.push(b.thicknessMapUv),x.push(b.combine),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.numSunLights),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numSpotLightMaps),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numSunLightShadows),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.numSpotLightShadowsWithMaps),x.push(b.numLightProbes),x.push(b.numLightProbeGrids),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking)}function m(x,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.retroreflection&&a.enable(24),b.diffuseRoughness&&a.enable(25),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),b.packedNormalMap&&a.enable(22),b.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),b.numLightProbeGrids>0&&a.enable(22),b.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function y(x){const b=h[x.type];let A;if(b){const E=bi[b];A=el.clone(E.uniforms)}else A=x.uniforms;return A}function _(x,b){let A=c.get(b);return A!==void 0?++A.usedTimes:(A=new _S(n,b,x,s),u.push(A),c.set(b,A)),A}function w(x){if(--x.usedTimes===0){const b=u.indexOf(x);u[b]=u[u.length-1],u.pop(),c.delete(x.cacheKey),x.destroy()}}function S(x){l.remove(x)}function M(){l.dispose()}return{getParameters:g,getProgramCacheKey:v,getUniforms:y,acquireProgram:_,releaseProgram:w,releaseShaderCache:S,programs:u,dispose:M}}function AS(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let l=n.get(a);return l===void 0&&(l={},n.set(a,l)),l}function i(a){n.delete(a)}function s(a,l,o){n.get(a)[l]=o}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function TS(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function Cf(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Pf(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(h){let d=0;return h.isInstancedMesh&&(d+=2),h.isSkinnedMesh&&(d+=1),d}function l(h,d,g,v,p,m){let y=n[e];return y===void 0?(y={id:h.id,object:h,geometry:d,material:g,materialVariant:a(h),groupOrder:v,renderOrder:h.renderOrder,z:p,group:m},n[e]=y):(y.id=h.id,y.object=h,y.geometry=d,y.material=g,y.materialVariant=a(h),y.groupOrder=v,y.renderOrder=h.renderOrder,y.z=p,y.group=m),e++,y}function o(h,d,g,v,p,m,y){y.reversedDepth===!0&&(p=-p);const _=l(h,d,g,v,p,m);g.transmission>0?i.push(_):g.transparent===!0?s.push(_):t.push(_)}function u(h,d,g,v,p,m){const y=l(h,d,g,v,p,m);g.transmission>0?i.unshift(y):g.transparent===!0?s.unshift(y):t.unshift(y)}function c(h,d){t.length>1&&t.sort(h||TS),i.length>1&&i.sort(d||Cf),s.length>1&&s.sort(d||Cf)}function f(){for(let h=e,d=n.length;h<d;h++){const g=n[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:o,unshift:u,finish:f,sort:c}}function RS(){let n=new WeakMap;function e(i,s){const r=n.get(i);let a;return r===void 0?(a=new Pf,n.set(i,[a])):s>=r.length?(a=new Pf,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function CS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new z,color:new Ke};break;case"SpotLight":t={position:new z,direction:new z,color:new Ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new Ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new Ke,groundColor:new Ke};break;case"RectAreaLight":t={color:new Ke,position:new z,halfWidth:new z,halfHeight:new z};break}return n[e.id]=t,t}}}function PS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let LS=0;function DS(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function IS(n){const e=new CS,t=PS(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new z);const s=new z,r=new et,a=new et;function l(u){let c=0,f=0,h=0;for(let R=0;R<9;R++)i.probe[R].set(0,0,0);let d=0,g=0,v=0,p=0,m=0,y=0,_=0,w=0,S=0,M=0,x=0,b=0,A=0,E=0;u.sort(DS);for(let R=0,D=u.length;R<D;R++){const C=u[R],I=C.color,U=C.intensity,O=C.distance;let W=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===xs?W=C.shadow.map.texture:W=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)c+=I.r*U,f+=I.g*U,h+=I.b*U;else if(C.isLightProbe){for(let k=0;k<9;k++)i.probe[k].addScaledVector(C.sh.coefficients[k],U);E++}else if(C.isSunLight){const k=e.get(C);if(k.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const G=C.shadow,Z=t.get(C);Z.shadowIntensity=G.intensity,Z.shadowBias=G.bias,Z.shadowNormalBias=G.normalBias,Z.shadowRadius=G.radius,Z.shadowMapSize.copy(G.mapSize).multiply(G.getFrameExtents()),i.sunShadow[g]=Z,i.sunShadowMap[g]=W;const me=G.getViewportCount();for(let le=0;le<me;le++)i.sunShadowMatrix[v+le]=G.getMatrix(le),i.sunShadowCascade[v+le]=G._cascadeData[le];v+=me,g++}i.sun[d]=k,d++}else if(C.isDirectionalLight){const k=e.get(C);if(k.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const G=C.shadow,Z=t.get(C);Z.shadowIntensity=G.intensity,Z.shadowBias=G.bias,Z.shadowNormalBias=G.normalBias,Z.shadowRadius=G.radius,Z.shadowMapSize=G.mapSize,i.directionalShadow[p]=Z,i.directionalShadowMap[p]=W,i.directionalShadowMatrix[p]=C.shadow.matrix,S++}i.directional[p]=k,p++}else if(C.isSpotLight){const k=e.get(C);k.position.setFromMatrixPosition(C.matrixWorld),k.color.copy(I).multiplyScalar(U),k.distance=O,k.coneCos=Math.cos(C.angle),k.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),k.decay=C.decay,i.spot[y]=k;const G=C.shadow;if(C.map&&(i.spotLightMap[b]=C.map,b++,G.updateMatrices(C),C.castShadow&&A++),i.spotLightMatrix[y]=G.matrix,C.castShadow){const Z=t.get(C);Z.shadowIntensity=G.intensity,Z.shadowBias=G.bias,Z.shadowNormalBias=G.normalBias,Z.shadowRadius=G.radius,Z.shadowMapSize=G.mapSize,i.spotShadow[y]=Z,i.spotShadowMap[y]=W,x++}y++}else if(C.isRectAreaLight){const k=e.get(C);k.color.copy(I).multiplyScalar(U),k.halfWidth.set(C.width*.5,0,0),k.halfHeight.set(0,C.height*.5,0),i.rectArea[_]=k,_++}else if(C.isPointLight){const k=e.get(C);if(k.color.copy(C.color).multiplyScalar(C.intensity),k.distance=C.distance,k.decay=C.decay,C.castShadow){const G=C.shadow,Z=t.get(C);Z.shadowIntensity=G.intensity,Z.shadowBias=G.bias,Z.shadowNormalBias=G.normalBias,Z.shadowRadius=G.radius,Z.shadowMapSize=G.mapSize,Z.shadowCameraNear=G.camera.near,Z.shadowCameraFar=G.camera.far,i.pointShadow[m]=Z,i.pointShadowMap[m]=W,i.pointShadowMatrix[m]=C.shadow.matrix,M++}i.point[m]=k,m++}else if(C.isHemisphereLight){const k=e.get(C);k.skyColor.copy(C.color).multiplyScalar(U),k.groundColor.copy(C.groundColor).multiplyScalar(U),i.hemi[w]=k,w++}}_>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ke.LTC_FLOAT_1,i.rectAreaLTC2=ke.LTC_FLOAT_2):(i.rectAreaLTC1=ke.LTC_HALF_1,i.rectAreaLTC2=ke.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=f,i.ambient[2]=h;const P=i.hash;(P.sunLength!==d||P.directionalLength!==p||P.pointLength!==m||P.spotLength!==y||P.rectAreaLength!==_||P.hemiLength!==w||P.numSunShadows!==g||P.numDirectionalShadows!==S||P.numPointShadows!==M||P.numSpotShadows!==x||P.numSpotMaps!==b||P.numLightProbes!==E)&&(i.sun.length=d,i.directional.length=p,i.spot.length=y,i.rectArea.length=_,i.point.length=m,i.hemi.length=w,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=v,i.sunShadowCascade.length=v,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.directionalShadowMatrix.length=S,i.pointShadow.length=M,i.pointShadowMap.length=M,i.pointShadowMatrix.length=M,i.spotShadow.length=x,i.spotShadowMap.length=x,i.spotLightMatrix.length=x+b-A,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=E,P.sunLength=d,P.directionalLength=p,P.pointLength=m,P.spotLength=y,P.rectAreaLength=_,P.hemiLength=w,P.numSunShadows=g,P.numDirectionalShadows=S,P.numPointShadows=M,P.numSpotShadows=x,P.numSpotMaps=b,P.numLightProbes=E,i.version=LS++)}function o(u,c){let f=0,h=0,d=0,g=0,v=0,p=0;const m=c.matrixWorldInverse;for(let y=0,_=u.length;y<_;y++){const w=u[y];if(w.isSunLight){const S=i.sun[f];S.direction.setFromMatrixPosition(w.matrixWorld),S.direction.transformDirection(m),f++}else if(w.isDirectionalLight){const S=i.directional[h];S.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),h++}else if(w.isSpotLight){const S=i.spot[g];S.position.setFromMatrixPosition(w.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),g++}else if(w.isRectAreaLight){const S=i.rectArea[v];S.position.setFromMatrixPosition(w.matrixWorld),S.position.applyMatrix4(m),a.identity(),r.copy(w.matrixWorld),r.premultiply(m),a.extractRotation(r),S.halfWidth.set(w.width*.5,0,0),S.halfHeight.set(0,w.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),v++}else if(w.isPointLight){const S=i.point[d];S.position.setFromMatrixPosition(w.matrixWorld),S.position.applyMatrix4(m),d++}else if(w.isHemisphereLight){const S=i.hemi[p];S.direction.setFromMatrixPosition(w.matrixWorld),S.direction.transformDirection(m),p++}}}return{setup:l,setupView:o,state:i}}function Lf(n){const e=new IS(n),t=[],i=[],s=[];function r(f){c.camera=f,t.length=0,i.length=0,s.length=0}function a(f){f.isLightProbeGrid?s.push(f):t.push(f)}function l(f){i.push(f)}function o(){e.setup(t),s.sort((f,h)=>f.priority-h.priority||f.id-h.id)}function u(f){e.setupView(t,f)}const c={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:c,setupLights:o,setupLightsView:u,pushLight:a,pushShadow:l}}function FS(n){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let l;return a===void 0?(l=new Lf(n),e.set(s,[l])):r>=a.length?(l=new Lf(n),a.push(l)):l=a[r],l}function i(){e=new WeakMap}return{get:t,dispose:i}}const NS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,US=`uniform sampler2D shadow_pass;
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
}`,OS=[new z(1,0,0),new z(-1,0,0),new z(0,1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1)],kS=[new z(0,-1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1),new z(0,-1,0),new z(0,-1,0)],Df=new et,Vr=new z,Yl=new z;function BS(n,e,t){let i=new vs;const s=new qe,r=new qe,a=new ct,l=new tl,o=new ex,u={},c=t.maxTextureSize,f={[Ji]:yn,[yn]:Ji,[jn]:jn},h=new cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qe},radius:{value:4}},vertexShader:NS,fragmentShader:US}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const g=new Nt;g.setAttribute("position",new nt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new vt(g,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ia;let m=this.type;this.render=function(M,x,b){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||M.length===0)return;this.type===A0&&(at("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ia);const A=n.getRenderTarget(),E=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),R=n.state;R.setBlending(Sr),R.buffers.depth.getReversed()===!0?R.buffers.color.setClear(0,0,0,0):R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);const D=m!==this.type;D&&x.traverse(function(C){C.material&&(Array.isArray(C.material)?C.material.forEach(I=>I.needsUpdate=!0):C.material.needsUpdate=!0)});for(let C=0,I=M.length;C<I;C++){const U=M[C],O=U.shadow;if(O===void 0){at("WebGLShadowMap:",U,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;s.copy(O.mapSize);const W=O.getFrameExtents();s.multiply(W),r.copy(O.mapSize),(s.x>c||s.y>c)&&(s.x>c&&(r.x=Math.floor(c/W.x),s.x=r.x*W.x,O.mapSize.x=r.x),s.y>c&&(r.y=Math.floor(c/W.y),s.y=r.y*W.y,O.mapSize.y=r.y));const k=n.state.buffers.depth.getReversed();if(O.camera._reversedDepth=k,O.map===null||D===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===Qr){if(U.isPointLight){at("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new on(s.x,s.y,{format:xs,type:Pi,minFilter:Xt,magFilter:Xt,generateMipmaps:!1}),O.map.texture.name=U.name+".shadowMap",O.map.depthTexture=new Ms(s.x,s.y,Un),O.map.depthTexture.name=U.name+".shadowMapDepth",O.map.depthTexture.format=gs,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Tt,O.map.depthTexture.magFilter=Tt}else U.isPointLight?(O.map=new Vu(s.x),O.map.depthTexture=new dp(s.x,Ci)):(O.map=new on(s.x,s.y),O.map.depthTexture=new Ms(s.x,s.y,Ci)),O.map.depthTexture.name=U.name+".shadowMap",O.map.depthTexture.format=gs,this.type===ia?(O.map.depthTexture.compareFunction=k?ep:Qd,O.map.depthTexture.minFilter=Xt,O.map.depthTexture.magFilter=Xt):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Tt,O.map.depthTexture.magFilter=Tt);O.camera.updateProjectionMatrix()}O.map.isWebGLCubeRenderTarget!==!0&&(O.map.width!==s.x||O.map.height!==s.y)&&O.map.setSize(s.x,s.y);const G=O.map.isWebGLCubeRenderTarget?6:O.getViewportCount();U.isPointLight!==!0&&O.updateMatrices(U,b);const Z=(O.camera.layers.mask&4294967294)!==0?O.camera.layers:b.layers;for(let me=0;me<G;me++){const le=O.getCamera(me);if(U.isPointLight){const q=O.camera,$=O.matrix,K=U.distance||q.far;K!==q.far&&(q.far=K,q.updateProjectionMatrix()),Vr.setFromMatrixPosition(U.matrixWorld),q.position.copy(Vr),Yl.copy(q.position),Yl.add(OS[me]),q.up.copy(kS[me]),q.lookAt(Yl),q.updateMatrixWorld(),$.makeTranslation(-Vr.x,-Vr.y,-Vr.z),Df.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),O._frustum.setFromProjectionMatrix(Df,q.coordinateSystem,q.reversedDepth)}if(O.map.isWebGLCubeRenderTarget)n.setRenderTarget(O.map,me),n.clear();else{me===0&&(n.setRenderTarget(O.map),n.clear());const q=O.getViewport(me);a.set(r.x*q.x,r.y*q.y,r.x*q.z,r.y*q.w),R.viewport(a)}i=O.getFrustum(me),w(x,b,le,U,Z,this.type)}O.isPointLightShadow!==!0&&this.type===Qr&&y(O,b),O.needsUpdate=!1}m=this.type,p.needsUpdate=!1,n.setRenderTarget(A,E,P)};function y(M,x){const b=e.update(v);h.defines.VSM_SAMPLES!==M.blurSamples&&(h.defines.VSM_SAMPLES=M.blurSamples,d.defines.VSM_SAMPLES=M.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),M.mapPass===null?M.mapPass=new on(s.x,s.y,{format:xs,type:Pi}):(M.mapPass.width!==M.map.width||M.mapPass.height!==M.map.height)&&M.mapPass.setSize(M.map.width,M.map.height),h.uniforms.shadow_pass.value=M.map.depthTexture,h.uniforms.resolution.value.set(M.map.width,M.map.height),h.uniforms.radius.value=M.radius,n.setRenderTarget(M.mapPass),n.clear(),n.renderBufferDirect(x,null,b,h,v,null),d.uniforms.shadow_pass.value=M.mapPass.texture,d.uniforms.resolution.value.set(M.map.width,M.map.height),d.uniforms.radius.value=M.radius,n.setRenderTarget(M.map),n.clear(),n.renderBufferDirect(x,null,b,d,v,null)}function _(M,x,b,A){let E=null;const P=b.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(P!==void 0)E=P;else if(E=b.isPointLight===!0?o:l,n.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){const R=E.uuid,D=x.uuid;let C=u[R];C===void 0&&(C={},u[R]=C);let I=C[D];I===void 0&&(I=E.clone(),C[D]=I,x.addEventListener("dispose",S)),E=I}if(E.visible=x.visible,E.wireframe=x.wireframe,A===Qr?E.side=x.shadowSide!==null?x.shadowSide:x.side:E.side=x.shadowSide!==null?x.shadowSide:f[x.side],E.alphaMap=x.alphaMap,E.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,E.map=x.map,E.clipShadows=x.clipShadows,E.clippingPlanes=x.clippingPlanes,E.clipIntersection=x.clipIntersection,E.displacementMap=x.displacementMap,E.displacementScale=x.displacementScale,E.displacementBias=x.displacementBias,E.wireframeLinewidth=x.wireframeLinewidth,E.linewidth=x.linewidth,b.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const R=n.properties.get(E);R.light=b}return E}function w(M,x,b,A,E,P){if(M.visible===!1)return;if(M.layers.test(E)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&P===Qr)&&(!M.frustumCulled||M.intersectsFrustum(i))){M.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,M.matrixWorld);const C=e.update(M),I=M.material;if(Array.isArray(I)){const U=C.groups;for(let O=0,W=U.length;O<W;O++){const k=U[O],G=I[k.materialIndex];if(G&&G.visible){const Z=_(M,G,A,P);M.onBeforeShadow(n,M,x,b,C,Z,k),n.renderBufferDirect(b,null,C,Z,M,k),M.onAfterShadow(n,M,x,b,C,Z,k)}}}else if(I.visible){const U=_(M,I,A,P);M.onBeforeShadow(n,M,x,b,C,U,null),n.renderBufferDirect(b,null,C,U,M,null),M.onAfterShadow(n,M,x,b,C,U,null)}}const D=M.children;for(let C=0,I=D.length;C<I;C++)w(D[C],x,b,A,E,P)}function S(M){M.target.removeEventListener("dispose",S);for(const b in u){const A=u[b],E=M.target.uuid;E in A&&(A[E].dispose(),delete A[E])}}}function zS(n,e){function t(){let H=!1;const fe=new ct;let ae=null;const Re=new ct(0,0,0,0);return{setMask:function(we){ae!==we&&!H&&(n.colorMask(we,we,we,we),ae=we)},setLocked:function(we){H=we},setClear:function(we,Pe,$e,ht,_e){_e===!0&&(we*=ht,Pe*=ht,$e*=ht),fe.set(we,Pe,$e,ht),Re.equals(fe)===!1&&(n.clearColor(we,Pe,$e,ht),Re.copy(fe))},reset:function(){H=!1,ae=null,Re.set(-1,0,0,0)}}}function i(){let H=!1,fe=!1,ae=null,Re=null,we=null;return{setReversed:function(Pe){if(fe!==Pe){const $e=e.get("EXT_clip_control");Pe?$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.ZERO_TO_ONE_EXT):$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.NEGATIVE_ONE_TO_ONE_EXT),fe=Pe;const ht=we;we=null,this.setClear(ht)}},getReversed:function(){return fe},setTest:function(Pe){Pe?V(n.DEPTH_TEST):B(n.DEPTH_TEST)},setMask:function(Pe){ae!==Pe&&!H&&(n.depthMask(Pe),ae=Pe)},setFunc:function(Pe){if(fe&&(Pe=og[Pe]),Re!==Pe){switch(Pe){case Pc:n.depthFunc(n.NEVER);break;case Po:n.depthFunc(n.ALWAYS);break;case Lc:n.depthFunc(n.LESS);break;case pa:n.depthFunc(n.LEQUAL);break;case Dc:n.depthFunc(n.EQUAL);break;case Ic:n.depthFunc(n.GEQUAL);break;case Fc:n.depthFunc(n.GREATER);break;case Nc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Re=Pe}},setLocked:function(Pe){H=Pe},setClear:function(Pe){we!==Pe&&(we=Pe,fe&&(Pe=1-Pe),n.clearDepth(Pe))},reset:function(){H=!1,ae=null,Re=null,we=null,fe=!1}}}function s(){let H=!1,fe=null,ae=null,Re=null,we=null,Pe=null,$e=null,ht=null,_e=null;return{setTest:function(Ze){H||(Ze?V(n.STENCIL_TEST):B(n.STENCIL_TEST))},setMask:function(Ze){fe!==Ze&&!H&&(n.stencilMask(Ze),fe=Ze)},setFunc:function(Ze,ut,Fe){(ae!==Ze||Re!==ut||we!==Fe)&&(n.stencilFunc(Ze,ut,Fe),ae=Ze,Re=ut,we=Fe)},setOp:function(Ze,ut,Fe){(Pe!==Ze||$e!==ut||ht!==Fe)&&(n.stencilOp(Ze,ut,Fe),Pe=Ze,$e=ut,ht=Fe)},setLocked:function(Ze){H=Ze},setClear:function(Ze){_e!==Ze&&(n.clearStencil(Ze),_e=Ze)},reset:function(){H=!1,fe=null,ae=null,Re=null,we=null,Pe=null,$e=null,ht=null,_e=null}}}const r=new t,a=new i,l=new s;let o={};const u=new WeakMap;let c={},f={},h={},d=new WeakMap,g=[],v=null,p=!1,m=null,y=null,_=null,w=null,S=null,M=null,x=null,b=new Ke(0,0,0),A=0,E=!1,P=null,R=null,D=null,C=null,I=null;const U=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,W=0;const k=n.getParameter(n.VERSION);k.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(k)[1]),O=W>=1):k.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),O=W>=2);let G=null,Z={};const me=n.getParameter(n.SCISSOR_BOX),le=n.getParameter(n.VIEWPORT),q=new ct().fromArray(me),$=new ct().fromArray(le);function K(H,fe,ae,Re){const we=new Uint8Array(4),Pe=n.createTexture();n.bindTexture(H,Pe),n.texParameteri(H,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(H,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let $e=0;$e<ae;$e++)H===n.TEXTURE_3D||H===n.TEXTURE_2D_ARRAY?n.texImage3D(fe,0,n.RGBA,1,1,Re,0,n.RGBA,n.UNSIGNED_BYTE,we):n.texImage2D(fe+$e,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,we);return Pe}const j={};j[n.TEXTURE_2D]=K(n.TEXTURE_2D,n.TEXTURE_2D,1),j[n.TEXTURE_CUBE_MAP]=K(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[n.TEXTURE_2D_ARRAY]=K(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),j[n.TEXTURE_3D]=K(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),l.setClear(0),V(n.DEPTH_TEST),a.setFunc(pa),ne(!1),Ie(Rh),V(n.CULL_FACE),ye(Sr);function V(H){c[H]!==!0&&(n.enable(H),c[H]=!0)}function B(H){c[H]!==!1&&(n.disable(H),c[H]=!1)}function te(H,fe){return h[H]!==fe?(n.bindFramebuffer(H,fe),h[H]=fe,H===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=fe),H===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=fe),!0):!1}function ee(H,fe){let ae=g,Re=!1;if(H){ae=d.get(fe),ae===void 0&&(ae=[],d.set(fe,ae));const we=H.textures;if(ae.length!==we.length||ae[0]!==n.COLOR_ATTACHMENT0){for(let Pe=0,$e=we.length;Pe<$e;Pe++)ae[Pe]=n.COLOR_ATTACHMENT0+Pe;ae.length=we.length,Re=!0}}else ae[0]!==n.BACK&&(ae[0]=n.BACK,Re=!0);Re&&n.drawBuffers(ae)}function ce(H){return v!==H?(n.useProgram(H),v=H,!0):!1}const Ce={[gr]:n.FUNC_ADD,[T0]:n.FUNC_SUBTRACT,[R0]:n.FUNC_REVERSE_SUBTRACT};Ce[C0]=n.MIN,Ce[P0]=n.MAX;const oe={[L0]:n.ZERO,[da]:n.ONE,[D0]:n.SRC_COLOR,[kd]:n.SRC_ALPHA,[k0]:n.SRC_ALPHA_SATURATE,[U0]:n.DST_COLOR,[F0]:n.DST_ALPHA,[I0]:n.ONE_MINUS_SRC_COLOR,[Tr]:n.ONE_MINUS_SRC_ALPHA,[O0]:n.ONE_MINUS_DST_COLOR,[N0]:n.ONE_MINUS_DST_ALPHA,[B0]:n.CONSTANT_COLOR,[z0]:n.ONE_MINUS_CONSTANT_COLOR,[G0]:n.CONSTANT_ALPHA,[H0]:n.ONE_MINUS_CONSTANT_ALPHA};function ye(H,fe,ae,Re,we,Pe,$e,ht,_e,Ze){if(H===Sr){p===!0&&(B(n.BLEND),p=!1);return}if(p===!1&&(V(n.BLEND),p=!0),H!==Pu){if(H!==m||Ze!==E){if((y!==gr||S!==gr)&&(n.blendEquation(n.FUNC_ADD),y=gr,S=gr),Ze)switch(H){case Os:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Co:n.blendFunc(n.ONE,n.ONE);break;case Ch:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ph:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Lt("WebGLState: Invalid blending: ",H);break}else switch(H){case Os:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Co:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Ch:Lt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ph:Lt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Lt("WebGLState: Invalid blending: ",H);break}_=null,w=null,M=null,x=null,b.set(0,0,0),A=0,m=H,E=Ze}return}we=we||fe,Pe=Pe||ae,$e=$e||Re,(fe!==y||we!==S)&&(n.blendEquationSeparate(Ce[fe],Ce[we]),y=fe,S=we),(ae!==_||Re!==w||Pe!==M||$e!==x)&&(n.blendFuncSeparate(oe[ae],oe[Re],oe[Pe],oe[$e]),_=ae,w=Re,M=Pe,x=$e),(ht.equals(b)===!1||_e!==A)&&(n.blendColor(ht.r,ht.g,ht.b,_e),b.copy(ht),A=_e),m=H,E=!1}function pe(H,fe){H.side===jn?B(n.CULL_FACE):V(n.CULL_FACE);let ae=H.side===yn;fe&&(ae=!ae),ne(ae),H.blending===Os&&H.transparent===!1?ye(Sr):ye(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),a.setFunc(H.depthFunc),a.setTest(H.depthTest),a.setMask(H.depthWrite),r.setMask(H.colorWrite);const Re=H.stencilWrite;l.setTest(Re),Re&&(l.setMask(H.stencilWriteMask),l.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),l.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),Me(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?V(n.SAMPLE_ALPHA_TO_COVERAGE):B(n.SAMPLE_ALPHA_TO_COVERAGE)}function ne(H){P!==H&&(H?n.frontFace(n.CW):n.frontFace(n.CCW),P=H)}function Ie(H){H!==w0?(V(n.CULL_FACE),H!==R&&(H===Rh?n.cullFace(n.BACK):H===b0?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):B(n.CULL_FACE),R=H}function De(H){H!==D&&(O&&n.lineWidth(H),D=H)}function Me(H,fe,ae){H?(V(n.POLYGON_OFFSET_FILL),(C!==fe||I!==ae)&&(C=fe,I=ae,a.getReversed()&&(fe=-fe,ae=-ae),n.polygonOffset(fe,ae))):B(n.POLYGON_OFFSET_FILL)}function We(H){H?V(n.SCISSOR_TEST):B(n.SCISSOR_TEST)}function Ve(H){H===void 0&&(H=n.TEXTURE0+U-1),G!==H&&(n.activeTexture(H),G=H)}function Y(H,fe,ae){ae===void 0&&(G===null?ae=n.TEXTURE0+U-1:ae=G);let Re=Z[ae];Re===void 0&&(Re={type:void 0,texture:void 0},Z[ae]=Re),(Re.type!==H||Re.texture!==fe)&&(G!==ae&&(n.activeTexture(ae),G=ae),n.bindTexture(H,fe||j[H]),Re.type=H,Re.texture=fe)}function N(){const H=Z[G];H!==void 0&&H.type!==void 0&&(n.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function Te(){try{n.compressedTexImage2D(...arguments)}catch(H){Lt("WebGLState:",H)}}function Ee(){try{n.compressedTexImage3D(...arguments)}catch(H){Lt("WebGLState:",H)}}function Be(){try{n.texSubImage2D(...arguments)}catch(H){Lt("WebGLState:",H)}}function xe(){try{n.texSubImage3D(...arguments)}catch(H){Lt("WebGLState:",H)}}function rt(){try{n.compressedTexSubImage2D(...arguments)}catch(H){Lt("WebGLState:",H)}}function Le(){try{n.compressedTexSubImage3D(...arguments)}catch(H){Lt("WebGLState:",H)}}function ze(){try{n.texStorage2D(...arguments)}catch(H){Lt("WebGLState:",H)}}function F(){try{n.texStorage3D(...arguments)}catch(H){Lt("WebGLState:",H)}}function T(){try{n.texImage2D(...arguments)}catch(H){Lt("WebGLState:",H)}}function J(){try{n.texImage3D(...arguments)}catch(H){Lt("WebGLState:",H)}}function ve(H){return f[H]!==void 0?f[H]:n.getParameter(H)}function de(H,fe){f[H]!==fe&&(n.pixelStorei(H,fe),f[H]=fe)}function be(H){q.equals(H)===!1&&(n.scissor(H.x,H.y,H.z,H.w),q.copy(H))}function Ae(H){$.equals(H)===!1&&(n.viewport(H.x,H.y,H.z,H.w),$.copy(H))}function ue(H,fe){let ae=u.get(fe);ae===void 0&&(ae=new WeakMap,u.set(fe,ae));let Re=ae.get(H);Re===void 0&&(Re=n.getUniformBlockIndex(fe,H.name),n.uniformBlockBinding(fe,Re,Re),ae.set(H,Re))}function he(H,fe,ae){const we=u.get(fe).get(H);o[we]!==ae&&(n.bindBufferBase(n.UNIFORM_BUFFER,we,ae),o[we]=ae)}function Se(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),c={},f={},G=null,Z={},h={},o={},d=new WeakMap,g=[],v=null,p=!1,m=null,y=null,_=null,w=null,S=null,M=null,x=null,b=new Ke(0,0,0),A=0,E=!1,P=null,R=null,D=null,C=null,I=null,q.set(0,0,n.canvas.width,n.canvas.height),$.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),l.reset()}return{buffers:{color:r,depth:a,stencil:l},enable:V,disable:B,bindFramebuffer:te,drawBuffers:ee,useProgram:ce,setBlending:ye,setMaterial:pe,setFlipSided:ne,setCullFace:Ie,setLineWidth:De,setPolygonOffset:Me,setScissorTest:We,activeTexture:Ve,bindTexture:Y,unbindTexture:N,compressedTexImage2D:Te,compressedTexImage3D:Ee,texImage2D:T,texImage3D:J,pixelStorei:de,getParameter:ve,updateUBOMapping:ue,uniformBlockBinding:he,texStorage2D:ze,texStorage3D:F,texSubImage2D:Be,texSubImage3D:xe,compressedTexSubImage2D:rt,compressedTexSubImage3D:Le,scissor:be,viewport:Ae,reset:Se}}function GS(n,e,t,i,s,r,a){const l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,o=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new qe,c=new WeakMap,f=new Set;let h;const d=new WeakMap,g=new Set,v=new FinalizationRegistry(F=>g.delete(F));let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(F,T){return p?new OffscreenCanvas(F,T):No("canvas")}function y(F,T,J){let ve=1;const de=ze(F);if((de.width>J||de.height>J)&&(ve=J/Math.max(de.width,de.height)),ve<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){const be=Math.floor(ve*de.width),Ae=Math.floor(ve*de.height);h===void 0&&(h=m(be,Ae));const ue=T?m(be,Ae):h;return ue.width=be,ue.height=Ae,ue.getContext("2d").drawImage(F,0,0,be,Ae),at("WebGLRenderer: Texture has been resized from ("+de.width+"x"+de.height+") to ("+be+"x"+Ae+")."),ue}else return"data"in F&&at("WebGLRenderer: Image in DataTexture is too big ("+de.width+"x"+de.height+")."),F;return F}function _(F){return F.generateMipmaps}function w(F){n.generateMipmap(F)}function S(F){return F.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:F.isWebGL3DRenderTarget?n.TEXTURE_3D:F.isWebGLArrayRenderTarget||F.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function M(F,T,J,ve,de,be=!1){if(F!==null){if(n[F]!==void 0)return n[F];at("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let Ae;ve&&(Ae=e.get("EXT_texture_norm16"),Ae||at("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ue=T;if(T===n.RED&&(J===n.FLOAT&&(ue=n.R32F),J===n.HALF_FLOAT&&(ue=n.R16F),J===n.UNSIGNED_BYTE&&(ue=n.R8),J===n.UNSIGNED_SHORT&&Ae&&(ue=Ae.R16_EXT),J===n.SHORT&&Ae&&(ue=Ae.R16_SNORM_EXT)),T===n.RED_INTEGER&&(J===n.UNSIGNED_BYTE&&(ue=n.R8UI),J===n.UNSIGNED_SHORT&&(ue=n.R16UI),J===n.UNSIGNED_INT&&(ue=n.R32UI),J===n.BYTE&&(ue=n.R8I),J===n.SHORT&&(ue=n.R16I),J===n.INT&&(ue=n.R32I)),T===n.RG&&(J===n.FLOAT&&(ue=n.RG32F),J===n.HALF_FLOAT&&(ue=n.RG16F),J===n.UNSIGNED_BYTE&&(ue=n.RG8),J===n.UNSIGNED_SHORT&&Ae&&(ue=Ae.RG16_EXT),J===n.SHORT&&Ae&&(ue=Ae.RG16_SNORM_EXT)),T===n.RG_INTEGER&&(J===n.UNSIGNED_BYTE&&(ue=n.RG8UI),J===n.UNSIGNED_SHORT&&(ue=n.RG16UI),J===n.UNSIGNED_INT&&(ue=n.RG32UI),J===n.BYTE&&(ue=n.RG8I),J===n.SHORT&&(ue=n.RG16I),J===n.INT&&(ue=n.RG32I)),T===n.RGB_INTEGER&&(J===n.UNSIGNED_BYTE&&(ue=n.RGB8UI),J===n.UNSIGNED_SHORT&&(ue=n.RGB16UI),J===n.UNSIGNED_INT&&(ue=n.RGB32UI),J===n.BYTE&&(ue=n.RGB8I),J===n.SHORT&&(ue=n.RGB16I),J===n.INT&&(ue=n.RGB32I)),T===n.RGBA_INTEGER&&(J===n.UNSIGNED_BYTE&&(ue=n.RGBA8UI),J===n.UNSIGNED_SHORT&&(ue=n.RGBA16UI),J===n.UNSIGNED_INT&&(ue=n.RGBA32UI),J===n.BYTE&&(ue=n.RGBA8I),J===n.SHORT&&(ue=n.RGBA16I),J===n.INT&&(ue=n.RGBA32I)),T===n.RGB&&(J===n.UNSIGNED_SHORT&&Ae&&(ue=Ae.RGB16_EXT),J===n.SHORT&&Ae&&(ue=Ae.RGB16_SNORM_EXT),J===n.UNSIGNED_INT_5_9_9_9_REV&&(ue=n.RGB9_E5),J===n.UNSIGNED_INT_10F_11F_11F_REV&&(ue=n.R11F_G11F_B10F)),T===n.RGBA){const he=be?Fo:bt.getTransfer(de);J===n.FLOAT&&(ue=n.RGBA32F),J===n.HALF_FLOAT&&(ue=n.RGBA16F),J===n.UNSIGNED_BYTE&&(ue=he===Ut?n.SRGB8_ALPHA8:n.RGBA8),J===n.UNSIGNED_SHORT&&Ae&&(ue=Ae.RGBA16_EXT),J===n.SHORT&&Ae&&(ue=Ae.RGBA16_SNORM_EXT),J===n.UNSIGNED_SHORT_4_4_4_4&&(ue=n.RGBA4),J===n.UNSIGNED_SHORT_5_5_5_1&&(ue=n.RGB5_A1)}return(ue===n.R16F||ue===n.R32F||ue===n.RG16F||ue===n.RG32F||ue===n.RGBA16F||ue===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function x(F,T){let J;return F?T===null||T===Ci||T===Pr?J=n.DEPTH24_STENCIL8:T===Un?J=n.DEPTH32F_STENCIL8:T===ga&&(J=n.DEPTH24_STENCIL8,at("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Ci||T===Pr?J=n.DEPTH_COMPONENT24:T===Un?J=n.DEPTH_COMPONENT32F:T===ga&&(J=n.DEPTH_COMPONENT16),J}function b(F,T){return _(F)===!0||F.isFramebufferTexture&&F.minFilter!==Tt&&F.minFilter!==Xt?Math.log2(Math.max(T.width,T.height))+1:F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?T.mipmaps.length:1}function A(F){const T=new WeakRef(F);i.get(F).__ref=T,g.add(T),v.register(F,T,T)}function E(F){const T=i.get(F).__ref;T!==void 0&&(g.delete(T),v.unregister(T))}function P(F){D(F.target)}function R(F){C(F.target)}function D(F){F.removeEventListener("dispose",P),E(F),U(F),F.isVideoTexture&&c.delete(F),F.isHTMLTexture&&f.delete(F)}function C(F){F.removeEventListener("dispose",R),E(F),W(F)}function I(){for(const F of g){const T=F.deref();T!==void 0&&(T.isRenderTarget===!0?C(T):D(T))}g.clear(),f.clear()}function U(F){const T=i.get(F);if(T.__webglInit===void 0)return;const J=F.source,ve=d.get(J);if(ve){const de=ve[T.__cacheKey];de.usedTimes--,de.usedTimes===0&&O(F),Object.keys(ve).length===0&&d.delete(J)}i.remove(F)}function O(F){const T=i.get(F);n.deleteTexture(T.__webglTexture);const J=F.source,ve=d.get(J);delete ve[T.__cacheKey],a.memory.textures--}function W(F){const T=i.get(F);T.__depthDisposeCallback&&T.__depthDisposeCallback();const J=F.depthTexture;if(J&&J.renderTarget===F&&D(J),F.isWebGLCubeRenderTarget)for(let de=0;de<6;de++){if(Array.isArray(T.__webglFramebuffer[de]))for(let be=0;be<T.__webglFramebuffer[de].length;be++)n.deleteFramebuffer(T.__webglFramebuffer[de][be]);else n.deleteFramebuffer(T.__webglFramebuffer[de]);T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer[de])}else{if(Array.isArray(T.__webglFramebuffer))for(let de=0;de<T.__webglFramebuffer.length;de++)n.deleteFramebuffer(T.__webglFramebuffer[de]);else n.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&n.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let de=0;de<T.__webglColorRenderbuffer.length;de++)T.__webglColorRenderbuffer[de]&&n.deleteRenderbuffer(T.__webglColorRenderbuffer[de]);T.__webglDepthRenderbuffer&&n.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const ve=F.textures;for(let de=0,be=ve.length;de<be;de++){const Ae=i.get(ve[de]);Ae.__webglTexture&&(n.deleteTexture(Ae.__webglTexture),a.memory.textures--),i.remove(ve[de])}i.remove(F)}let k=0;function G(){k=0}function Z(){return k}function me(F){k=F}function le(){const F=k;return F>=s.maxTextures&&at("WebGLTextures: Trying to use "+(F+1)+" texture units while this GPU supports only "+s.maxTextures),k+=1,F}function q(F){const T=[];return T.push(F.wrapS),T.push(F.wrapT),T.push(F.wrapR||0),T.push(F.magFilter),T.push(F.minFilter),T.push(F.anisotropy),T.push(F.internalFormat),T.push(F.format),T.push(F.type),T.push(F.generateMipmaps),T.push(F.mipmapsAutoUpdate),T.push(F.premultiplyAlpha),T.push(F.flipY),T.push(F.unpackAlignment),T.push(F.colorSpace),T.join()}function $(F,T){const J=i.get(F);if(F.isVideoTexture&&rt(F),F.isRenderTargetTexture===!1&&F.isExternalTexture!==!0&&F.version>0&&J.__version!==F.version){const ve=F.image;if(ve===null)at("WebGLRenderer: Texture marked for update but no image data found.");else if(ve.complete===!1)at("WebGLRenderer: Texture marked for update but image is incomplete");else{pe(J,F,T);return}}else F.isExternalTexture&&(J.__webglTexture=F.sourceTexture?F.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,J.__webglTexture,n.TEXTURE0+T)}function K(F,T){const J=i.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&J.__version!==F.version){pe(J,F,T);return}else F.isExternalTexture&&(J.__webglTexture=F.sourceTexture?F.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,J.__webglTexture,n.TEXTURE0+T)}function j(F,T){const J=i.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&J.__version!==F.version){pe(J,F,T);return}t.bindTexture(n.TEXTURE_3D,J.__webglTexture,n.TEXTURE0+T)}function V(F,T){const J=i.get(F);if(F.version>0&&J.__version!==F.version){ne(J,F,T);return}t.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture,n.TEXTURE0+T)}const B={[Cr]:n.REPEAT,[qi]:n.CLAMP_TO_EDGE,[Uc]:n.MIRRORED_REPEAT},te={[Tt]:n.NEAREST,[X0]:n.NEAREST_MIPMAP_NEAREST,[Da]:n.NEAREST_MIPMAP_LINEAR,[Xt]:n.LINEAR,[Sl]:n.LINEAR_MIPMAP_NEAREST,[ti]:n.LINEAR_MIPMAP_LINEAR},ee={[K0]:n.NEVER,[tp]:n.ALWAYS,[Z0]:n.LESS,[Qd]:n.LEQUAL,[J0]:n.EQUAL,[ep]:n.GEQUAL,[Q0]:n.GREATER,[eg]:n.NOTEQUAL};function ce(F,T){if(T.type===Un&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Xt||T.magFilter===Sl||T.magFilter===Da||T.magFilter===ti||T.minFilter===Xt||T.minFilter===Sl||T.minFilter===Da||T.minFilter===ti)&&at("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(F,n.TEXTURE_WRAP_S,B[T.wrapS]),n.texParameteri(F,n.TEXTURE_WRAP_T,B[T.wrapT]),(F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY)&&n.texParameteri(F,n.TEXTURE_WRAP_R,B[T.wrapR]),n.texParameteri(F,n.TEXTURE_MAG_FILTER,te[T.magFilter]),n.texParameteri(F,n.TEXTURE_MIN_FILTER,te[T.minFilter]),T.compareFunction&&(n.texParameteri(F,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(F,n.TEXTURE_COMPARE_FUNC,ee[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Tt||T.minFilter!==Da&&T.minFilter!==ti||T.type===Un&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||i.get(T).__currentAnisotropy){const J=e.get("EXT_texture_filter_anisotropic");n.texParameterf(F,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy}}}function Ce(F,T){let J=!1;F.__webglInit===void 0&&(F.__webglInit=!0,T.addEventListener("dispose",P),A(T));const ve=T.source;let de=d.get(ve);de===void 0&&(de={},d.set(ve,de));const be=q(T);if(be!==F.__cacheKey){de[be]===void 0&&(de[be]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,J=!0),de[be].usedTimes++;const Ae=de[F.__cacheKey];Ae!==void 0&&(de[F.__cacheKey].usedTimes--,Ae.usedTimes===0&&O(T)),F.__cacheKey=be,F.__webglTexture=de[be].texture}return J}function oe(F,T,J){return Math.floor(Math.floor(F/J)/T)}function ye(F,T,J,ve){const be=F.updateRanges;if(be.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,T.width,T.height,J,ve,T.data);else{be.sort((H,fe)=>H.start-fe.start);let Ae=0;for(let H=1;H<be.length;H++){const fe=be[Ae],ae=be[H],Re=fe.start+fe.count,we=oe(ae.start,T.width,4),Pe=oe(fe.start,T.width,4);ae.start<=Re+1&&we===Pe&&oe(ae.start+ae.count-1,T.width,4)===we?fe.count=Math.max(fe.count,ae.start+ae.count-fe.start):(++Ae,be[Ae]=ae)}be.length=Ae+1;const ue=t.getParameter(n.UNPACK_ROW_LENGTH),he=t.getParameter(n.UNPACK_SKIP_PIXELS),Se=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,T.width);for(let H=0,fe=be.length;H<fe;H++){const ae=be[H],Re=Math.floor(ae.start/4),we=Math.ceil(ae.count/4),Pe=Re%T.width,$e=Math.floor(Re/T.width),ht=we,_e=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,Pe),t.pixelStorei(n.UNPACK_SKIP_ROWS,$e),t.texSubImage2D(n.TEXTURE_2D,0,Pe,$e,ht,_e,J,ve,T.data)}F.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,ue),t.pixelStorei(n.UNPACK_SKIP_PIXELS,he),t.pixelStorei(n.UNPACK_SKIP_ROWS,Se)}}function pe(F,T,J){let ve=n.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ve=n.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ve=n.TEXTURE_3D);const de=Ce(F,T),be=T.source;t.bindTexture(ve,F.__webglTexture,n.TEXTURE0+J);const Ae=i.get(be);if(be.version!==Ae.__version||de===!0){if(t.activeTexture(n.TEXTURE0+J),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){const _e=bt.getPrimaries(bt.workingColorSpace),Ze=T.colorSpace===di?null:bt.getPrimaries(T.colorSpace),ut=T.colorSpace===di||_e===Ze?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut)}t.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment);let he=y(T.image,!1,s.maxTextureSize);he=Le(T,he);const Se=r.convert(T.format,T.colorSpace),H=r.convert(T.type);let fe=M(T.internalFormat,Se,H,T.normalized,T.colorSpace,T.isVideoTexture);ce(ve,T);let ae;const Re=T.mipmaps,we=T.isVideoTexture!==!0,Pe=Ae.__version===void 0||de===!0,$e=be.dataReady,ht=b(T,he);if(T.isDepthTexture)fe=x(T.format===ms,T.type),Pe&&(we?t.texStorage2D(n.TEXTURE_2D,1,fe,he.width,he.height):t.texImage2D(n.TEXTURE_2D,0,fe,he.width,he.height,0,Se,H,null));else if(T.isDataTexture)if(Re.length>0){we&&Pe&&t.texStorage2D(n.TEXTURE_2D,ht,fe,Re[0].width,Re[0].height);for(let _e=0,Ze=Re.length;_e<Ze;_e++)ae=Re[_e],we?$e&&t.texSubImage2D(n.TEXTURE_2D,_e,0,0,ae.width,ae.height,Se,H,ae.data):t.texImage2D(n.TEXTURE_2D,_e,fe,ae.width,ae.height,0,Se,H,ae.data);T.generateMipmaps=!1}else we?(Pe&&t.texStorage2D(n.TEXTURE_2D,ht,fe,he.width,he.height),$e&&ye(T,he,Se,H)):t.texImage2D(n.TEXTURE_2D,0,fe,he.width,he.height,0,Se,H,he.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){we&&Pe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ht,fe,Re[0].width,Re[0].height,he.depth);for(let _e=0,Ze=Re.length;_e<Ze;_e++)if(ae=Re[_e],T.format!==On)if(Se!==null)if(we){if($e)if(T.layerUpdates.size>0){const ut=hf(ae.width,ae.height,T.format,T.type);for(const Fe of T.layerUpdates){const Rt=ae.data.subarray(Fe*ut/ae.data.BYTES_PER_ELEMENT,(Fe+1)*ut/ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,_e,0,0,Fe,ae.width,ae.height,1,Se,Rt)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,_e,0,0,0,ae.width,ae.height,he.depth,Se,ae.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,_e,fe,ae.width,ae.height,he.depth,0,ae.data,0,0);else at("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else we?$e&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,_e,0,0,0,ae.width,ae.height,he.depth,Se,H,ae.data):t.texImage3D(n.TEXTURE_2D_ARRAY,_e,fe,ae.width,ae.height,he.depth,0,Se,H,ae.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{we&&Pe&&t.texStorage2D(n.TEXTURE_2D,ht,fe,Re[0].width,Re[0].height);for(let _e=0,Ze=Re.length;_e<Ze;_e++)ae=Re[_e],T.format!==On?Se!==null?we?$e&&t.compressedTexSubImage2D(n.TEXTURE_2D,_e,0,0,ae.width,ae.height,Se,ae.data):t.compressedTexImage2D(n.TEXTURE_2D,_e,fe,ae.width,ae.height,0,ae.data):at("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):we?$e&&t.texSubImage2D(n.TEXTURE_2D,_e,0,0,ae.width,ae.height,Se,H,ae.data):t.texImage2D(n.TEXTURE_2D,_e,fe,ae.width,ae.height,0,Se,H,ae.data)}else if(T.isDataArrayTexture)if(we){if(Pe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ht,fe,he.width,he.height,he.depth),$e)if(T.layerUpdates.size>0){const _e=hf(he.width,he.height,T.format,T.type);for(const Ze of T.layerUpdates){const ut=he.data.subarray(Ze*_e/he.data.BYTES_PER_ELEMENT,(Ze+1)*_e/he.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Ze,he.width,he.height,1,Se,H,ut)}T.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,he.width,he.height,he.depth,Se,H,he.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,fe,he.width,he.height,he.depth,0,Se,H,he.data);else if(T.isData3DTexture)we?(Pe&&t.texStorage3D(n.TEXTURE_3D,ht,fe,he.width,he.height,he.depth),$e&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,he.width,he.height,he.depth,Se,H,he.data)):t.texImage3D(n.TEXTURE_3D,0,fe,he.width,he.height,he.depth,0,Se,H,he.data);else if(T.isFramebufferTexture){if(Pe)if(we)t.texStorage2D(n.TEXTURE_2D,ht,fe,he.width,he.height);else{let _e=he.width,Ze=he.height;for(let ut=0;ut<ht;ut++)t.texImage2D(n.TEXTURE_2D,ut,fe,_e,Ze,0,Se,H,null),_e>>=1,Ze>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in n){const _e=n.canvas;if(_e.hasAttribute("layoutsubtree")||_e.setAttribute("layoutsubtree","true"),he.parentNode!==_e){_e.appendChild(he),f.add(T),_e.onpaint=Ze=>{const ut=Ze.changedElements;for(const Fe of f)ut.includes(Fe.image)&&(Fe.needsUpdate=!0)},_e.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,he);else{const ut=n.RGBA,Fe=n.RGBA,Rt=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,ut,Fe,Rt,he)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Re.length>0){if(we&&Pe){const _e=ze(Re[0]);t.texStorage2D(n.TEXTURE_2D,ht,fe,_e.width,_e.height)}for(let _e=0,Ze=Re.length;_e<Ze;_e++)ae=Re[_e],we?$e&&t.texSubImage2D(n.TEXTURE_2D,_e,0,0,Se,H,ae):t.texImage2D(n.TEXTURE_2D,_e,fe,Se,H,ae);T.generateMipmaps=!1}else if(we){if(Pe){const _e=ze(he);t.texStorage2D(n.TEXTURE_2D,ht,fe,_e.width,_e.height)}$e&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Se,H,he)}else t.texImage2D(n.TEXTURE_2D,0,fe,Se,H,he);_(T)&&T.mipmapsAutoUpdate===!0&&w(ve),Ae.__version=be.version,T.onUpdate&&T.onUpdate(T)}F.__version=T.version}function ne(F,T,J){if(T.image.length!==6)return;const ve=Ce(F,T),de=T.source;t.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+J);const be=i.get(de);if(de.version!==be.__version||ve===!0){t.activeTexture(n.TEXTURE0+J);const Ae=bt.getPrimaries(bt.workingColorSpace),ue=T.colorSpace===di?null:bt.getPrimaries(T.colorSpace),he=T.colorSpace===di||Ae===ue?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);const Se=T.isCompressedTexture||T.image[0].isCompressedTexture,H=T.image[0]&&T.image[0].isDataTexture,fe=[];for(let Fe=0;Fe<6;Fe++)!Se&&!H?fe[Fe]=y(T.image[Fe],!0,s.maxCubemapSize):fe[Fe]=H?T.image[Fe].image:T.image[Fe],fe[Fe]=Le(T,fe[Fe]);const ae=fe[0],Re=r.convert(T.format,T.colorSpace),we=r.convert(T.type);let Pe=M(T.internalFormat,Re,we,T.normalized,T.colorSpace);const $e=T.isVideoTexture!==!0,ht=be.__version===void 0||ve===!0,_e=de.dataReady;let Ze=b(T,ae);ce(n.TEXTURE_CUBE_MAP,T);let ut;if(T.isDepthTexture){if(Pe=x(T.format===ms,T.type),ht)if($e)t.texStorage2D(n.TEXTURE_CUBE_MAP,1,Pe,ae.width,ae.height);else for(let Fe=0;Fe<6;Fe++)t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,0,Pe,ae.width,ae.height,0,Re,we,null)}else if(Se){$e&&ht&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ze,Pe,ae.width,ae.height);for(let Fe=0;Fe<6;Fe++){ut=fe[Fe].mipmaps;for(let Rt=0;Rt<ut.length;Rt++){const qt=ut[Rt];T.format!==On?Re!==null?$e?_e&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,Rt,0,0,qt.width,qt.height,Re,qt.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,Rt,Pe,qt.width,qt.height,0,qt.data):at("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$e?_e&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,Rt,0,0,qt.width,qt.height,Re,we,qt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,Rt,Pe,qt.width,qt.height,0,Re,we,qt.data)}}}else{if(ut=T.mipmaps,$e&&ht){ut.length>0&&Ze++;const Fe=ze(fe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ze,Pe,Fe.width,Fe.height)}for(let Fe=0;Fe<6;Fe++)if(H){$e?_e&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,0,0,0,fe[Fe].width,fe[Fe].height,Re,we,fe[Fe].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,0,Pe,fe[Fe].width,fe[Fe].height,0,Re,we,fe[Fe].data);for(let Rt=0;Rt<ut.length;Rt++){const Vn=ut[Rt].image[Fe].image;$e?_e&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,Rt+1,0,0,Vn.width,Vn.height,Re,we,Vn.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,Rt+1,Pe,Vn.width,Vn.height,0,Re,we,Vn.data)}}else{$e?_e&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,0,0,0,Re,we,fe[Fe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,0,Pe,Re,we,fe[Fe]);for(let Rt=0;Rt<ut.length;Rt++){const qt=ut[Rt];$e?_e&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,Rt+1,0,0,Re,we,qt.image[Fe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,Rt+1,Pe,Re,we,qt.image[Fe])}}}_(T)&&T.mipmapsAutoUpdate===!0&&w(n.TEXTURE_CUBE_MAP),be.__version=de.version,T.onUpdate&&T.onUpdate(T)}F.__version=T.version}function Ie(F,T,J,ve,de,be){const Ae=r.convert(J.format,J.colorSpace),ue=r.convert(J.type),he=M(J.internalFormat,Ae,ue,J.normalized,J.colorSpace),Se=i.get(T),H=i.get(J);if(H.__renderTarget=T,!Se.__hasExternalTextures){const fe=Math.max(1,T.width>>be),ae=Math.max(1,T.height>>be);de===n.TEXTURE_3D||de===n.TEXTURE_2D_ARRAY?t.texImage3D(de,be,he,fe,ae,T.depth,0,Ae,ue,null):t.texImage2D(de,be,he,fe,ae,0,Ae,ue,null)}t.bindFramebuffer(n.FRAMEBUFFER,F),xe(T)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ve,de,H.__webglTexture,0,Be(T)):(de===n.TEXTURE_2D||de>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&de<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ve,de,H.__webglTexture,be),t.bindFramebuffer(n.FRAMEBUFFER,null)}function De(F,T,J){if(n.bindRenderbuffer(n.RENDERBUFFER,F),T.depthBuffer){const ve=T.depthTexture,de=ve&&ve.isDepthTexture?ve.type:null,be=x(T.stencilBuffer,de),Ae=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;xe(T)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Be(T),be,T.width,T.height):J?n.renderbufferStorageMultisample(n.RENDERBUFFER,Be(T),be,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,be,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ae,n.RENDERBUFFER,F)}else{const ve=T.textures;for(let de=0;de<ve.length;de++){const be=ve[de],Ae=r.convert(be.format,be.colorSpace),ue=r.convert(be.type),he=M(be.internalFormat,Ae,ue,be.normalized,be.colorSpace);xe(T)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Be(T),he,T.width,T.height):J?n.renderbufferStorageMultisample(n.RENDERBUFFER,Be(T),he,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,he,T.width,T.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Me(F,T,J){const ve=T.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,F),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const de=i.get(T.depthTexture);de.__renderTarget=T;const be=ve?T.depthTexture.image[0]:T.depthTexture.image;(!de.__webglTexture||be.width!==T.width||be.height!==T.height)&&(be.width=T.width,be.height=T.height,T.depthTexture.needsUpdate=!0),ve?V(T.depthTexture,0):$(T.depthTexture,0);const Ae=de.__webglTexture,ue=Be(T),he=ve?n.TEXTURE_CUBE_MAP_POSITIVE_X+J:n.TEXTURE_2D,Se=T.depthTexture.format===ms?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(T.depthTexture.format===gs)xe(T)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Se,he,Ae,0,ue):n.framebufferTexture2D(n.FRAMEBUFFER,Se,he,Ae,0);else if(T.depthTexture.format===ms)xe(T)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Se,he,Ae,0,ue):n.framebufferTexture2D(n.FRAMEBUFFER,Se,he,Ae,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function We(F){const T=i.get(F),J=F.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==F.depthTexture){const ve=F.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),ve){const de=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,ve.removeEventListener("dispose",de)};ve.addEventListener("dispose",de),T.__depthDisposeCallback=de}T.__boundDepthTexture=ve}if(F.depthTexture&&!T.__autoAllocateDepthBuffer)if(J)for(let ve=0;ve<6;ve++)Me(T.__webglFramebuffer[ve],F,ve);else F.texture.mipmaps.length>0?Me(T.__webglFramebuffer[0],F,0):Me(T.__webglFramebuffer,F,0);else if(J){T.__webglDepthbuffer=[];for(let ve=0;ve<6;ve++)if(t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[ve]),T.__webglDepthbuffer[ve]===void 0)T.__webglDepthbuffer[ve]=n.createRenderbuffer(),De(T.__webglDepthbuffer[ve],F,!1);else{const de=F.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,be=T.__webglDepthbuffer[ve];n.bindRenderbuffer(n.RENDERBUFFER,be),n.framebufferRenderbuffer(n.FRAMEBUFFER,de,n.RENDERBUFFER,be)}}else if(F.texture.mipmaps.length>0?t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=n.createRenderbuffer(),De(T.__webglDepthbuffer,F,!1);else{const de=F.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,be=T.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,be),n.framebufferRenderbuffer(n.FRAMEBUFFER,de,n.RENDERBUFFER,be)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ve(F,T,J){const ve=i.get(F);T!==void 0&&Ie(ve.__webglFramebuffer,F,F.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),J!==void 0&&We(F)}function Y(F){const T=F.texture,J=i.get(F),ve=i.get(T);F.addEventListener("dispose",R),A(F);const de=F.textures,be=F.isWebGLCubeRenderTarget===!0,Ae=de.length>1;if(Ae||(ve.__webglTexture===void 0&&(ve.__webglTexture=n.createTexture()),ve.__version=T.version,a.memory.textures++),be){J.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(T.mipmaps.length>0){J.__webglFramebuffer[ue]=[];for(let he=0;he<T.mipmaps.length;he++)J.__webglFramebuffer[ue][he]=n.createFramebuffer()}else J.__webglFramebuffer[ue]=n.createFramebuffer()}else{if(T.mipmaps.length>0){J.__webglFramebuffer=[];for(let ue=0;ue<T.mipmaps.length;ue++)J.__webglFramebuffer[ue]=n.createFramebuffer()}else J.__webglFramebuffer=n.createFramebuffer();if(Ae)for(let ue=0,he=de.length;ue<he;ue++){const Se=i.get(de[ue]);Se.__webglTexture===void 0&&(Se.__webglTexture=n.createTexture(),a.memory.textures++)}if(F.samples>0&&xe(F)===!1){J.__webglMultisampledFramebuffer=n.createFramebuffer(),J.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let ue=0;ue<de.length;ue++){const he=de[ue];J.__webglColorRenderbuffer[ue]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,J.__webglColorRenderbuffer[ue]);const Se=r.convert(he.format,he.colorSpace),H=r.convert(he.type),fe=M(he.internalFormat,Se,H,he.normalized,he.colorSpace,F.isXRRenderTarget===!0),ae=Be(F);n.renderbufferStorageMultisample(n.RENDERBUFFER,ae,fe,F.width,F.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.RENDERBUFFER,J.__webglColorRenderbuffer[ue])}n.bindRenderbuffer(n.RENDERBUFFER,null),F.depthBuffer&&(J.__webglDepthRenderbuffer=n.createRenderbuffer(),De(J.__webglDepthRenderbuffer,F,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(be){t.bindTexture(n.TEXTURE_CUBE_MAP,ve.__webglTexture),ce(n.TEXTURE_CUBE_MAP,T);for(let ue=0;ue<6;ue++)if(T.mipmaps.length>0)for(let he=0;he<T.mipmaps.length;he++)Ie(J.__webglFramebuffer[ue][he],F,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,he);else Ie(J.__webglFramebuffer[ue],F,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);_(T)?w(n.TEXTURE_CUBE_MAP):T.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),t.unbindTexture()}else if(Ae){for(let ue=0,he=de.length;ue<he;ue++){const Se=de[ue],H=i.get(Se);let fe=n.TEXTURE_2D;(F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(fe=F.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(fe,H.__webglTexture),ce(fe,Se),Ie(J.__webglFramebuffer,F,Se,n.COLOR_ATTACHMENT0+ue,fe,0),_(Se)&&w(fe)}t.unbindTexture()}else{let ue=n.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(ue=F.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ue,ve.__webglTexture),ce(ue,T),T.mipmaps.length>0)for(let he=0;he<T.mipmaps.length;he++)Ie(J.__webglFramebuffer[he],F,T,n.COLOR_ATTACHMENT0,ue,he);else Ie(J.__webglFramebuffer,F,T,n.COLOR_ATTACHMENT0,ue,0);_(T)?w(ue):T.mipmaps.length>0&&n.texParameteri(ue,n.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),t.unbindTexture()}F.depthBuffer&&We(F)}function N(F){const T=F.textures;for(let J=0,ve=T.length;J<ve;J++){const de=T[J];if(_(de)&&de.mipmapsAutoUpdate===!0){const be=S(F),Ae=i.get(de).__webglTexture;t.bindTexture(be,Ae),w(be),t.unbindTexture()}}}const Te=[];function Ee(F){if(F.samples>0){if(xe(F)===!1){const T=F.textures,J=F.width,ve=F.height;let de=n.COLOR_BUFFER_BIT;const be=F.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ae=i.get(F),ue=T.length>1;if(ue)for(let Se=0;Se<T.length;Se++)t.bindFramebuffer(n.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ae.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),F.texture.mipmaps.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let Se=0;Se<T.length;Se++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(de|=n.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(de|=n.STENCIL_BUFFER_BIT)),ue){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ae.__webglColorRenderbuffer[Se]);const H=i.get(T[Se]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,H,0)}n.blitFramebuffer(0,0,J,ve,0,0,J,ve,de,n.NEAREST),o===!0&&(Te.length=0,Te.push(n.COLOR_ATTACHMENT0+Se),F.depthBuffer&&F.storeMultisampledDepthBuffer===!1&&Te.push(be),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Te))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ue)for(let Se=0;Se<T.length;Se++){t.bindFramebuffer(n.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.RENDERBUFFER,Ae.__webglColorRenderbuffer[Se]);const H=i.get(T[Se]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ae.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.TEXTURE_2D,H,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.storeMultisampledDepthBuffer===!1&&o){const T=F.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[T])}}}function Be(F){return Math.min(s.maxSamples,F.samples)}function xe(F){const T=i.get(F);return F.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function rt(F){const T=a.render.frame;c.get(F)!==T&&(c.set(F,T),F.update())}function Le(F,T){const J=F.colorSpace,ve=F.format,de=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||J!==Io&&J!==di&&(bt.getTransfer(J)===Ut?(ve!==On||de!==ln)&&at("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Lt("WebGLTextures: Unsupported texture color space:",J)),T}function ze(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(u.width=F.naturalWidth||F.width,u.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(u.width=F.displayWidth,u.height=F.displayHeight):(u.width=F.width,u.height=F.height),u}this.allocateTextureUnit=le,this.resetTextureUnits=G,this.getTextureUnits=Z,this.setTextureUnits=me,this.setTexture2D=$,this.setTexture2DArray=K,this.setTexture3D=j,this.setTextureCube=V,this.rebindTextures=Ve,this.setupRenderTarget=Y,this.updateRenderTargetMipmap=N,this.updateMultisampleRenderTarget=Ee,this.setupDepthRenderbuffer=We,this.setupFrameBufferTexture=Ie,this.useMultisampledRTT=xe,this.dispose=I}function HS(n,e){function t(i,s=di){let r;const a=bt.getTransfer(s);if(i===ln)return n.UNSIGNED_BYTE;if(i===Du)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Iu)return n.UNSIGNED_SHORT_5_5_5_1;if(i===jd)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Kd)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===qd)return n.BYTE;if(i===Yd)return n.SHORT;if(i===ga)return n.UNSIGNED_SHORT;if(i===Lu)return n.INT;if(i===Ci)return n.UNSIGNED_INT;if(i===Un)return n.FLOAT;if(i===Pi)return n.HALF_FLOAT;if(i===Zd)return n.ALPHA;if(i===Jd)return n.RGB;if(i===On)return n.RGBA;if(i===gs)return n.DEPTH_COMPONENT;if(i===ms)return n.DEPTH_STENCIL;if(i===$s)return n.RED;if(i===Fu)return n.RED_INTEGER;if(i===xs)return n.RG;if(i===Nu)return n.RG_INTEGER;if(i===Uu)return n.RGBA_INTEGER;if(i===Mo||i===_o||i===So||i===yo)if(a===Ut)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Mo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===_o)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===So)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===yo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Mo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===_o)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===So)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===yo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Oc||i===kc||i===Bc||i===zc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Oc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===kc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Bc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===zc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Gc||i===Hc||i===Wc||i===Vc||i===$c||i===Lo||i===Xc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Gc||i===Hc)return a===Ut?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Wc)return a===Ut?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Vc)return r.COMPRESSED_R11_EAC;if(i===$c)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Lo)return r.COMPRESSED_RG11_EAC;if(i===Xc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===qc||i===Yc||i===jc||i===Kc||i===Zc||i===Jc||i===Qc||i===eu||i===tu||i===nu||i===iu||i===su||i===ru||i===au)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===qc)return a===Ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Yc)return a===Ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===jc)return a===Ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Kc)return a===Ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Zc)return a===Ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Jc)return a===Ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Qc)return a===Ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===eu)return a===Ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===tu)return a===Ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===nu)return a===Ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===iu)return a===Ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===su)return a===Ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ru)return a===Ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===au)return a===Ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ou||i===lu||i===cu)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===ou)return a===Ut?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===lu)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===cu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===uu||i===hu||i===Do||i===fu)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===uu)return r.COMPRESSED_RED_RGTC1_EXT;if(i===hu)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Do)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===fu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Pr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const WS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,VS=`
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

}`;class $S{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new pp(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new cn({vertexShader:WS,fragmentShader:VS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new vt(new Hs(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class XS extends Xs{constructor(e,t){super();const i=this;let s=null,r=1,a=null,l="local-floor",o=1,u=null,c=null,f=null,h=null,d=null,g=null;const v=typeof XRWebGLBinding<"u",p=new $S,m={},y=t.getContextAttributes();let _=null,w=null;const S=[],M=[],x=new qe;let b=null,A=null;const E=new Yn;E.viewport=new ct;const P=new Yn;P.viewport=new ct;const R=[E,P],D=new sx;let C=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let $=S[q];return $===void 0&&($=new Rl,S[q]=$),$.getTargetRaySpace()},this.getControllerGrip=function(q){let $=S[q];return $===void 0&&($=new Rl,S[q]=$),$.getGripSpace()},this.getHand=function(q){let $=S[q];return $===void 0&&($=new Rl,S[q]=$),$.getHandSpace()};function U(q){const $=M.indexOf(q.inputSource);if($===-1)return;const K=S[$];K!==void 0&&(K.update(q.inputSource,q.frame,u||a),K.dispatchEvent({type:q.type,data:q.inputSource}))}function O(){s.removeEventListener("select",U),s.removeEventListener("selectstart",U),s.removeEventListener("selectend",U),s.removeEventListener("squeeze",U),s.removeEventListener("squeezestart",U),s.removeEventListener("squeezeend",U),s.removeEventListener("end",O),s.removeEventListener("inputsourceschange",W);for(let q=0;q<S.length;q++){const $=M[q];$!==null&&(M[q]=null,S[q].disconnect($))}C=null,I=null,p.reset();for(const q in m)delete m[q];if(e.setRenderTarget(_),d=null,h=null,f=null,s=null,w=null,le.stop(),i.isPresenting=!1,e.setPixelRatio(b),e.setSize(x.width,x.height,!1),A!==null){const q=A.camera;q.fov=A.fov,q.zoom=A.zoom,q.updateProjectionMatrix(),A=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,i.isPresenting===!0&&at("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){l=q,i.isPresenting===!0&&at("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(q){u=q},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f===null&&v&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(_=e.getRenderTarget(),s.addEventListener("select",U),s.addEventListener("selectstart",U),s.addEventListener("selectend",U),s.addEventListener("squeeze",U),s.addEventListener("squeezestart",U),s.addEventListener("squeezeend",U),s.addEventListener("end",O),s.addEventListener("inputsourceschange",W),y.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(x),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let K=null,j=null,V=null;y.depth&&(V=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,K=y.stencil?ms:gs,j=y.stencil?Pr:Ci);const B={colorFormat:t.RGBA8,depthFormat:V,scaleFactor:r};f=this.getBinding(),h=f.createProjectionLayer(B),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),w=new on(h.textureWidth,h.textureHeight,{format:On,type:ln,depthTexture:new Ms(h.textureWidth,h.textureHeight,j,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{const K={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,K),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),w=new on(d.framebufferWidth,d.framebufferHeight,{format:On,type:ln,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(o),u=null,a=await s.requestReferenceSpace(l),le.setContext(s),le.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function W(q){for(let $=0;$<q.removed.length;$++){const K=q.removed[$],j=M.indexOf(K);j>=0&&(M[j]=null,S[j].disconnect(K))}for(let $=0;$<q.added.length;$++){const K=q.added[$];let j=M.indexOf(K);if(j===-1){for(let B=0;B<S.length;B++)if(B>=M.length){M.push(K),j=B;break}else if(M[B]===null){M[B]=K,j=B;break}if(j===-1)break}const V=S[j];V&&V.connect(K)}}function k(q,$){$===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices($.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let $=q.near,K=q.far;p.texture!==null&&(p.depthNear>0&&($=p.depthNear),p.depthFar>0&&(K=p.depthFar)),D.near=P.near=E.near=$,D.far=P.far=E.far=K,(C!==D.near||I!==D.far)&&(s.updateRenderState({depthNear:D.near,depthFar:D.far}),C=D.near,I=D.far),D.layers.mask=q.layers.mask|6,E.layers.mask=D.layers.mask&-5,P.layers.mask=D.layers.mask&-3;const j=q.parent,V=D.cameras;k(D,j);for(let B=0;B<V.length;B++)k(V[B],j);D.projectionMatrix.copy(E.projectionMatrix),D.projectionMatrixInverse.copy(E.projectionMatrixInverse),A===null&&q.isPerspectiveCamera&&(A={camera:q,fov:q.fov,zoom:q.zoom}),G(q,D,j)};function G(q,$,K){K===null?q.matrix.copy($.matrixWorld):(q.matrix.copy(K.matrixWorld),q.matrix.invert(),q.matrix.multiply($.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy($.projectionMatrix),q.projectionMatrixInverse.copy($.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Ma*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(h===null&&d===null))return o},this.setFoveation=function(q){o=q,h!==null&&(h.fixedFoveation=q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=q)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(D)},this.getCameraTexture=function(q){return m[q]};let Z=null;function me(q,$){if(c=$.getViewerPose(u||a),g=$,c!==null){const K=c.views;d!==null&&(e.setRenderTargetFramebuffer(w,d.framebuffer),e.setRenderTarget(w));let j=!1;K.length!==D.cameras.length&&(D.cameras.length=0,j=!0);for(let ee=0;ee<K.length;ee++){const ce=K[ee];let Ce=null;if(d!==null)Ce=d.getViewport(ce);else{const ye=f.getViewSubImage(h,ce);Ce=ye.viewport,ee===0&&(e.setRenderTargetTextures(w,ye.colorTexture,ye.depthStencilTexture),e.setRenderTarget(w))}let oe=R[ee];oe===void 0&&(oe=new Yn,oe.layers.enable(ee),oe.viewport=new ct,R[ee]=oe),oe.matrix.fromArray(ce.transform.matrix),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.projectionMatrix.fromArray(ce.projectionMatrix),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert(),oe.viewport.set(Ce.x,Ce.y,Ce.width,Ce.height),ee===0&&(D.matrix.copy(oe.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),j===!0&&D.cameras.push(oe)}const V=s.enabledFeatures;if(V&&V.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){f=i.getBinding();const ee=f.getDepthInformation(K[0]);ee&&ee.isValid&&ee.texture&&p.init(ee,s.renderState)}if(V&&V.includes("camera-access")&&v){e.state.unbindTexture(),f=i.getBinding();for(let ee=0;ee<K.length;ee++){const ce=K[ee].camera;if(ce){let Ce=m[ce];Ce||(Ce=new pp,m[ce]=Ce);const oe=f.getCameraImage(ce);Ce.sourceTexture=oe}}}}for(let K=0;K<S.length;K++){const j=M[K],V=S[K];j!==null&&V!==void 0&&V.update(j,$,u||a)}Z&&Z(q,$),$.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:$}),g=null}const le=new vp;le.setAnimationLoop(me),this.setAnimationLoop=function(q){Z=q},this.dispose=function(){}}}const qS=new et,Rp=new pt;Rp.set(-1,0,0,0,1,0,0,0,1);function YS(n,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,mp(n)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,y,_,w){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(p,m):m.isMeshLambertMaterial?(r(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(p,m),f(p,m)):m.isMeshPhongMaterial?(r(p,m),c(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(p,m),h(p,m),m.isMeshPhysicalMaterial&&d(p,m,w)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),v(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&l(p,m)):m.isPointsMaterial?o(p,m,y,_):m.isSpriteMaterial?u(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===yn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===yn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const y=e.get(m),_=y.envMap,w=y.envMapRotation;_&&(p.envMap.value=_,p.envMapRotation.value.setFromMatrix4(qS.makeRotationFromEuler(w)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Rp),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function l(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function o(p,m,y,_){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*y,p.scale.value=_*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function f(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function h(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,y){p.ior.value=m.ior,m.diffuseRoughness>0&&(p.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=m.diffuseRoughnessMap,t(m.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===yn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function v(p,m){const y=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function jS(n,e,t,i){let s={},r={};function a(y,_){const w=_.program;i.uniformBlockBinding(y,w,s[y.id])}function l(y,_){let w=s[y.id];w===void 0&&(g(y),w=o(y),s[y.id]=w,y.addEventListener("dispose",p));const S=_.program;i.updateUBOMapping(y,S);const M=e.render.frame;r[y.id]!==M&&(u(y),r[y.id]=M)}function o(y){const _=n.createBuffer(),w=y.__size,S=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,_),n.bufferData(n.UNIFORM_BUFFER,w,S),n.bindBuffer(n.UNIFORM_BUFFER,null),_}function u(y){const _=s[y.id],w=y.uniforms,S=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,_);for(let M=0,x=w.length;M<x;M++){const b=w[M];if(Array.isArray(b))for(let A=0,E=b.length;A<E;A++)c(b[A],M,A,S);else c(b,M,0,S)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function c(y,_,w,S){if(h(y,_,w,S)===!0){const M=y.__offset,x=y.value;if(Array.isArray(x)){let b=0;for(let A=0;A<x.length;A++){const E=x[A],P=v(E,!0);f(E,y.__data,b),b+=P.storage/Float32Array.BYTES_PER_ELEMENT}}else f(x,y.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,M,y.__data)}}function f(y,_,w){typeof y=="number"||typeof y=="boolean"?_[w]=y:y.isMatrix3?(_[w]=y.elements[0],_[w+1]=y.elements[1],_[w+2]=y.elements[2],_[w+3]=0,_[w+4]=y.elements[3],_[w+5]=y.elements[4],_[w+6]=y.elements[5],_[w+7]=0,_[w+8]=y.elements[6],_[w+9]=y.elements[7],_[w+10]=y.elements[8],_[w+11]=0):ArrayBuffer.isView(y)?_.set(y.subarray(0,_.length-w),w):y.toArray(_,w)}function h(y,_,w,S){const M=y.value,x=_+"_"+w;if(Array.isArray(M)){S[x]===void 0&&(S[x]=[]);const b=S[x];let A=!1;for(let E=0;E<M.length;E++)d(M[E],b,E)===!0&&(A=!0);return A}return d(M,S,x)}function d(y,_,w){if(_[w]===void 0)return typeof y=="number"||typeof y=="boolean"?_[w]=y:ArrayBuffer.isView(y)?_[w]=y.slice():_[w]=y.clone(),!0;{const S=_[w];if(typeof y=="number"||typeof y=="boolean"){if(S!==y)return _[w]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(S.equals(y)===!1)return S.copy(y),!0}}return!1}function g(y){const _=y.uniforms;let w=0;const S=16;for(let x=0,b=_.length;x<b;x++){const A=Array.isArray(_[x])?_[x]:[_[x]];for(let E=0,P=A.length;E<P;E++){const R=A[E],D=Array.isArray(R.value)?R.value:[R.value],C=Array.isArray(_[x])||Array.isArray(R.value);let I=w;for(let O=0,W=D.length;O<W;O++){const k=D[O],G=v(k,C),Z=w%S,me=Z%G.boundary,le=Z+me;w+=me,le!==0&&S-le<G.storage&&(w+=S-le),O===0&&(I=w),w+=G.storage}const U=R.type==="int"?Int32Array:R.type==="uint"?Uint32Array:Float32Array;R.__data=new U((w-I)/Float32Array.BYTES_PER_ELEMENT),R.__offset=I}}const M=w%S;return M>0&&(w+=S-M),y.__size=w,y.__cache={},this}function v(y,_){const w={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(w.boundary=4,w.storage=4):y.isVector2?(w.boundary=8,w.storage=8):y.isVector3||y.isColor?(w.boundary=16,w.storage=12):y.isVector4?(w.boundary=16,w.storage=16):y.isMatrix3?(w.boundary=16,w.storage=48):y.isMatrix4?(w.boundary=16,w.storage=64):y.isTexture?at("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(w.boundary=16,w.storage=y.byteLength):at("WebGLRenderer: Unsupported uniform value type.",y),_===!0&&(w.boundary=16,w.storage=Math.ceil(w.storage/16)*16),w}function p(y){const _=y.target;_.removeEventListener("dispose",p),n.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function m(){for(const y in s)n.deleteBuffer(s[y]);s={},r={}}return{bind:a,update:l,dispose:m}}const KS=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let _i=null;function ZS(){return _i===null&&(_i=new Kn(KS,16,16,xs,Pi),_i.name="DFG_LUT",_i.minFilter=Xt,_i.magFilter=Xt,_i.wrapS=qi,_i.wrapT=qi,_i.generateMipmaps=!1,_i.needsUpdate=!0),_i}class JS{constructor(e={}){const{canvas:t=sg(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:l=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:d=ln}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;const v=d,p=new Set([Uu,Nu,Fu]),m=new Set([ln,Ci,ga,Pr,Du,Iu]),y=new Uint32Array(4),_=new Int32Array(4),w={textures:[],min:[],max:[],resolution:[]};let S=null,M=null;const x=[],b=[];let A=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ji,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const E=this;let P=!1,R=null,D=null,C=null,I=null;this._outputColorSpace=Sn;let U=0,O=0,W=null,k=-1,G=null;const Z=new ct,me=new ct;let le=null;const q=new Ke(0);let $=0,K=t.width,j=t.height,V=1,B=null,te=null;const ee=new ct(0,0,K,j),ce=new ct(0,0,K,j);let Ce=!1;const oe=new vs,ye=new Gu;let pe=!1,ne=!1;const Ie=new et,De=new z,Me=new ct,We={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ve=!1;function Y(){return W===null?V:1}let N=i;function Te(L,X){return t.getContext(L,X)}let Ee,Be,xe,rt,Le,ze,F,T,J,ve,de,be,Ae,ue,he,Se,H,fe,ae,Re,we,Pe,$e;try{const L={alpha:!0,depth:s,stencil:r,antialias:l,premultipliedAlpha:o,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Cu}`),t.addEventListener("webglcontextlost",Ze,!1),t.addEventListener("webglcontextrestored",ut,!1),t.addEventListener("webglcontextcreationerror",Fe,!1),N===null){const X="webgl2";if(N=Te(X,L),N===null)throw Te(X)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ht()}catch(L){throw t.removeEventListener("webglcontextlost",Ze,!1),t.removeEventListener("webglcontextrestored",ut,!1),t.removeEventListener("webglcontextcreationerror",Fe,!1),Lt("WebGLRenderer: "+L.message),L}function ht(){Ee=new t_(N),Ee.init(),we=new HS(N,Ee),Be=new VM(N,Ee,e,we),xe=new zS(N,Ee),Be.reversedDepthBuffer&&h&&xe.buffers.depth.setReversed(!0),D=N.createFramebuffer(),C=N.createFramebuffer(),I=N.createFramebuffer(),rt=new s_(N),Le=new AS,ze=new GS(N,Ee,xe,Le,Be,we,rt),F=new e_(E),T=new ax(N),Pe=new HM(N,T),J=new n_(N,T,rt,Pe),ve=new a_(N,J,T,Pe,rt),fe=new r_(N,Be,ze),he=new $M(Le),de=new ES(E,F,Ee,Be,Pe,he),be=new YS(E,Le),Ae=new RS,ue=new FS(Ee),H=new GM(E,F,xe,ve,g,o),Se=new BS(E,ve,Be),$e=new jS(N,rt,Be,xe),ae=new WM(N,Ee,rt),Re=new i_(N,Ee,rt),rt.programs=de.programs,E.capabilities=Be,E.extensions=Ee,E.properties=Le,E.renderLists=Ae,E.shadowMap=Se,E.state=xe,E.info=rt}v!==ln&&(A=new l_(v,t.width,t.height,l,s,r));const _e=new XS(E,N);this.xr=_e,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const L=Ee.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=Ee.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(L){L!==void 0&&(V=L,this.setSize(K,j,!1))},this.getSize=function(L){return L.set(K,j)},this.setSize=function(L,X,se=!0){if(_e.isPresenting){at("WebGLRenderer: Can't change size while VR device is presenting.");return}K=L,j=X,t.width=Math.floor(L*V),t.height=Math.floor(X*V),se===!0&&(t.style.width=L+"px",t.style.height=X+"px"),A!==null&&A.setSize(t.width,t.height),this.setViewport(0,0,L,X)},this.getDrawingBufferSize=function(L){return L.set(K*V,j*V).floor()},this.setDrawingBufferSize=function(L,X,se){K=L,j=X,V=se,t.width=Math.floor(L*se),t.height=Math.floor(X*se),this.setViewport(0,0,L,X)},this.setEffects=function(L){if(v===ln){Lt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(L){for(let X=0;X<L.length;X++)if(L[X].isOutputPass===!0){at("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(L||[])},this.getCurrentViewport=function(L){return L.copy(Z)},this.getViewport=function(L){return L.copy(ee)},this.setViewport=function(L,X,se,Q){L.isVector4?ee.set(L.x,L.y,L.z,L.w):ee.set(L,X,se,Q),xe.viewport(Z.copy(ee).multiplyScalar(Y()).round())},this.getScissor=function(L){return L.copy(ce)},this.setScissor=function(L,X,se,Q){L.isVector4?ce.set(L.x,L.y,L.z,L.w):ce.set(L,X,se,Q),xe.scissor(me.copy(ce).multiplyScalar(Y()).round())},this.getScissorTest=function(){return Ce},this.setScissorTest=function(L){xe.setScissorTest(Ce=L)},this.setOpaqueSort=function(L){B=L},this.setTransparentSort=function(L){te=L},this.getClearColor=function(L){return L.copy(H.getClearColor())},this.setClearColor=function(){H.setClearColor(...arguments)},this.getClearAlpha=function(){return H.getClearAlpha()},this.setClearAlpha=function(){H.setClearAlpha(...arguments)},this.clear=function(L=!0,X=!0,se=!0){let Q=0;if(L){let ie=!1;if(W!==null){const Oe=W.texture.format;ie=p.has(Oe)}if(ie){const Oe=W.texture.type,Xe=m.has(Oe),Ue=H.getClearColor(),He=H.getClearAlpha(),Je=Ue.r,dt=Ue.g,yt=Ue.b;Xe?(y[0]=Je,y[1]=dt,y[2]=yt,y[3]=He,N.clearBufferuiv(N.COLOR,0,y)):(_[0]=Je,_[1]=dt,_[2]=yt,_[3]=He,N.clearBufferiv(N.COLOR,0,_))}else Q|=N.COLOR_BUFFER_BIT}X&&(Q|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),se&&(Q|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Q!==0&&N.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(L){L.setRenderer(this),R=L},this.dispose=function(){t.removeEventListener("webglcontextlost",Ze,!1),t.removeEventListener("webglcontextrestored",ut,!1),t.removeEventListener("webglcontextcreationerror",Fe,!1),H.dispose(),Ae.dispose(),ue.dispose(),ze.dispose(),Le.dispose(),F.dispose(),ve.dispose(),J.dispose(),Pe.dispose(),$e.dispose(),de.dispose(),_e.dispose(),_e.removeEventListener("sessionstart",rh),_e.removeEventListener("sessionend",ah),_s.stop()};function Ze(L){L.preventDefault(),Fh("WebGLRenderer: Context Lost."),P=!0}function ut(){Fh("WebGLRenderer: Context Restored."),P=!1;const L=rt.autoReset,X=Se.enabled,se=Se.autoUpdate,Q=Se.needsUpdate,ie=Se.type;ht(),rt.autoReset=L,Se.enabled=X,Se.autoUpdate=se,Se.needsUpdate=Q,Se.type=ie}function Fe(L){Lt("WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function Rt(L){const X=L.target;X.removeEventListener("dispose",Rt),qt(X)}function qt(L){Vn(L),Le.remove(L)}function Vn(L){const X=Le.get(L).programs;X!==void 0&&(X.forEach(function(se){de.releaseProgram(se)}),L.isShaderMaterial&&de.releaseShaderCache(L))}this.renderBufferDirect=function(L,X,se,Q,ie,Oe){X===null&&(X=We);const Xe=ie.isMesh&&ie.matrixWorld.determinantAffine()<0,Ue=Tm(L,X,se,Q,ie);xe.setMaterial(Q,Xe);let He=se.index,Je=1;if(Q.wireframe===!0){if(He=J.getWireframeAttribute(se),He===void 0)return;Je=2}const dt=se.drawRange,yt=se.attributes.position;let Ye=dt.start*Je,wt=(dt.start+dt.count)*Je;Oe!==null&&(Ye=Math.max(Ye,Oe.start*Je),wt=Math.min(wt,(Oe.start+Oe.count)*Je)),He!==null?(Ye=Math.max(Ye,0),wt=Math.min(wt,He.count)):yt!=null&&(Ye=Math.max(Ye,0),wt=Math.min(wt,yt.count));const Zt=wt-Ye;if(Zt<0||Zt===1/0)return;Pe.setup(ie,Q,Ue,se,He);let Bt,kt=ae;if(He!==null&&(Bt=T.get(He),kt=Re,kt.setIndex(Bt)),ie.isMesh)Q.wireframe===!0?(xe.setLineWidth(Q.wireframeLinewidth*Y()),kt.setMode(N.LINES)):kt.setMode(N.TRIANGLES);else if(ie.isLine){let bn=Q.linewidth;bn===void 0&&(bn=1),xe.setLineWidth(bn*Y()),ie.isLineSegments?kt.setMode(N.LINES):ie.isLineLoop?kt.setMode(N.LINE_LOOP):kt.setMode(N.LINE_STRIP)}else ie.isPoints?kt.setMode(N.POINTS):ie.isSprite&&kt.setMode(N.TRIANGLES);if(ie.isBatchedMesh)if(Ee.get("WEBGL_multi_draw"))kt.renderMultiDraw(ie._multiDrawStarts,ie._multiDrawCounts,ie._multiDrawCount);else{const bn=ie._multiDrawStarts,je=ie._multiDrawCounts,In=ie._multiDrawCount,Ct=He?T.get(He).bytesPerElement:1,Ss=Le.get(Q).currentProgram.getUniforms();for(let En=0;En<In;En++)Ss.setValue(N,"_gl_DrawID",En),kt.render(bn[En]/Ct,je[En])}else if(ie.isInstancedMesh)kt.renderInstances(Ye,Zt,ie.count);else if(se.isInstancedBufferGeometry){const bn=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,je=Math.min(se.instanceCount,bn);kt.renderInstances(Ye,Zt,je)}else kt.render(Ye,Zt)};function ii(L,X,se,Q){R!==null&&L.isNodeMaterial&&R.setObject(Q,L),pe===!0&&he.setState(L,se,!1),L.transparent===!0&&L.side===jn&&L.forceSinglePass===!1?(L.side=yn,L.needsUpdate=!0,Ur(L,X,Q),L.side=Ji,L.needsUpdate=!0,Ur(L,X,Q),L.side=jn):Ur(L,X,Q)}this.compile=function(L,X,se=null){se===null&&(se=L),R!==null&&R.renderStart(L,X,se),M=ue.get(se),M.init(X),b.push(M),se.traverseVisible(function(ie){ie.isLight&&ie.layers.test(X.layers)&&(M.pushLight(ie),ie.castShadow&&M.pushShadow(ie))}),L!==se&&L.traverseVisible(function(ie){ie.isLight&&ie.layers.test(X.layers)&&(M.pushLight(ie),ie.castShadow&&M.pushShadow(ie))}),M.setupLights(),R!==null&&R.updateLights(M.state.lightsArray),ne=this.localClippingEnabled,pe=he.init(this.clippingPlanes,ne),pe===!0&&he.setGlobalState(this.clippingPlanes,X),R!==null&&Se.render(M.state.shadowsArray,se,X);const Q=new Set;return L.traverse(function(ie){if(!(ie.isMesh||ie.isPoints||ie.isLine||ie.isSprite))return;const Oe=ie.material;if(Oe)if(Array.isArray(Oe))for(let Xe=0;Xe<Oe.length;Xe++){const Ue=Oe[Xe];ii(Ue,se,X,ie),Q.add(Ue)}else ii(Oe,se,X,ie),Q.add(Oe)}),M=b.pop(),R!==null&&R.renderEnd(),Q},this.compileAsync=function(L,X,se=null){const Q=this.compile(L,X,se);return new Promise(ie=>{function Oe(){if(Q.forEach(function(Xe){const He=Le.get(Xe).currentProgram;(He===void 0||He.isReady())&&Q.delete(Xe)}),Q.size===0){ie(L);return}setTimeout(Oe,10)}Ee.get("KHR_parallel_shader_compile")!==null?Oe():setTimeout(Oe,10)})};let Nr=null;function pl(L){Nr&&Nr(L)}function rh(){_s.stop()}function ah(){_s.start()}const _s=new vp;_s.setAnimationLoop(pl),typeof self<"u"&&_s.setContext(self),this.setAnimationLoop=function(L){Nr=L,_e.setAnimationLoop(L),L===null?_s.stop():_s.start()},_e.addEventListener("sessionstart",rh),_e.addEventListener("sessionend",ah),this.render=function(L,X){if(X!==void 0&&X.isCamera!==!0){Lt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;R!==null&&R.renderStart(L,X);const se=_e.enabled===!0&&_e.isPresenting===!0,Q=A!==null&&(W===null||se)&&A.begin(E,W);if(L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),_e.enabled===!0&&_e.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(_e.cameraAutoUpdate===!0&&_e.updateCamera(X),X=_e.getCamera()),L.isScene===!0&&L.onBeforeRender(E,L,X,W),M=ue.get(L,b.length),M.init(X),M.state.textureUnits=ze.getTextureUnits(),b.push(M),Ie.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),X.isArrayCamera?ye.setFromArrayCamera(X):oe.setFromProjectionMatrix(Ie,gi,X.reversedDepth),ne=this.localClippingEnabled,pe=he.init(this.clippingPlanes,ne),S=Ae.get(L,x.length),S.init(),x.push(S),this.info.render.frame++,_e.enabled===!0&&_e.isPresenting===!0){const Xe=E.xr.getDepthSensingMesh();Xe!==null&&ml(Xe,X,-1/0,E.sortObjects)}ml(L,X,0,E.sortObjects),S.finish(),R!==null&&R.updateLights(M.state.lightsArray),E.sortObjects===!0&&S.sort(B,te),Ve=_e.enabled===!1||_e.isPresenting===!1||_e.hasDepthSensing()===!1,Ve&&H.addToRenderList(S,L),this.info.autoReset===!0&&this.info.reset(),pe===!0&&he.beginShadows();const ie=M.state.shadowsArray;if(Se.render(ie,L,X),pe===!0&&he.endShadows(),(Q&&A.hasRenderPass())===!1){const Xe=S.opaque,Ue=S.transmissive;if(M.setupLights(),X.isArrayCamera){const He=X.cameras;if(Ue.length>0)for(let Je=0,dt=He.length;Je<dt;Je++){const yt=He[Je];lh(Xe,Ue,L,yt)}Ve&&H.render(L);for(let Je=0,dt=He.length;Je<dt;Je++){const yt=He[Je];oh(S,L,yt,yt.viewport)}}else Ue.length>0&&lh(Xe,Ue,L,X),Ve&&H.render(L),oh(S,L,X)}W!==null&&O===0&&(ze.updateMultisampleRenderTarget(W),ze.updateRenderTargetMipmap(W)),Q&&A.end(E),L.isScene===!0&&L.onAfterRender(E,L,X),Pe.resetDefaultState(),k=-1,G=null,b.pop(),b.length>0?(M=b[b.length-1],ze.setTextureUnits(M.state.textureUnits),pe===!0&&he.setGlobalState(E.clippingPlanes,M.state.camera)):M=null,x.pop(),x.length>0?S=x[x.length-1]:S=null,R!==null&&R.renderEnd()};function ml(L,X,se,Q){if(L.visible===!1)return;if(L.layers.test(X.layers)){if(L.isGroup)se=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(X);else if(L.isLight)M.pushLight(L),L.castShadow&&M.pushShadow(L);else if(L.isSprite){const Xe=X.isArrayCamera?ye:oe;if(!L.frustumCulled||L.intersectsFrustum(Xe)){Q&&Me.setFromMatrixPosition(L.matrixWorld).applyMatrix4(Ie);const Ue=ve.update(L),He=L.material;He.visible&&S.push(L,Ue,He,se,Me.z,null,X)}}else if(L.isMesh||L.isLine||L.isPoints){const Xe=X.isArrayCamera?ye:oe;if(!L.frustumCulled||L.intersectsFrustum(Xe)){const Ue=ve.update(L),He=L.material;if(Q&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),Me.copy(L.boundingSphere.center)):(Ue.boundingSphere===null&&Ue.computeBoundingSphere(),Me.copy(Ue.boundingSphere.center)),Me.applyMatrix4(L.matrixWorld).applyMatrix4(Ie)),Array.isArray(He)){const Je=Ue.groups;for(let dt=0,yt=Je.length;dt<yt;dt++){const Ye=Je[dt],wt=He[Ye.materialIndex];wt&&wt.visible&&S.push(L,Ue,wt,se,Me.z,Ye,X)}}else He.visible&&S.push(L,Ue,He,se,Me.z,null,X)}}}const Oe=L.children;for(let Xe=0,Ue=Oe.length;Xe<Ue;Xe++)ml(Oe[Xe],X,se,Q)}function oh(L,X,se,Q){const{opaque:ie,transmissive:Oe,transparent:Xe}=L;M.setupLightsView(se),pe===!0&&he.setGlobalState(E.clippingPlanes,se),Q&&xe.viewport(Z.copy(Q)),ie.length>0&&Ra(ie,X,se),Oe.length>0&&Ra(Oe,X,se),Xe.length>0&&Ra(Xe,X,se),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function lh(L,X,se,Q){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[Q.id]===void 0){const Ye=Ee.has("EXT_color_buffer_half_float")||Ee.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[Q.id]=new on(1,1,{generateMipmaps:!0,type:Ye?Pi:ln,minFilter:ti,samples:Math.max(4,Be.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:bt.workingColorSpace})}const Oe=M.state.transmissionRenderTarget[Q.id],Xe=Q.viewport||Z;Oe.setSize(Xe.z*E.transmissionResolutionScale,Xe.w*E.transmissionResolutionScale);const Ue=E.getRenderTarget(),He=E.getActiveCubeFace(),Je=E.getActiveMipmapLevel();E.setRenderTarget(Oe),E.getClearColor(q),$=E.getClearAlpha(),$<1&&E.setClearColor(16777215,.5),E.clear(),Ve&&H.render(se);const dt=E.toneMapping;E.toneMapping=ji;const yt=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),M.setupLightsView(Q),pe===!0&&he.setGlobalState(E.clippingPlanes,Q),Ra(L,se,Q),ze.updateMultisampleRenderTarget(Oe),ze.updateRenderTargetMipmap(Oe),Ee.has("WEBGL_multisampled_render_to_texture")===!1){let Ye=!1;for(let wt=0,Zt=X.length;wt<Zt;wt++){const Bt=X[wt],{object:kt,geometry:bn,material:je,group:In}=Bt;if(je.side===jn&&kt.layers.test(Q.layers)){const Ct=je.side;je.side=yn,je.needsUpdate=!0,ch(kt,se,Q,bn,je,In),je.side=Ct,je.needsUpdate=!0,Ye=!0}}Ye===!0&&(ze.updateMultisampleRenderTarget(Oe),ze.updateRenderTargetMipmap(Oe))}E.setRenderTarget(Ue,He,Je),E.setClearColor(q,$),yt!==void 0&&(Q.viewport=yt),E.toneMapping=dt}function Ra(L,X,se){const Q=X.isScene===!0?X.overrideMaterial:null;for(let ie=0,Oe=L.length;ie<Oe;ie++){const Xe=L[ie],{object:Ue,geometry:He,group:Je}=Xe;let dt=Xe.material;dt.allowOverride===!0&&Q!==null&&(dt=Q),Ue.layers.test(se.layers)&&ch(Ue,X,se,He,dt,Je)}}function ch(L,X,se,Q,ie,Oe){R!==null&&ie.isNodeMaterial&&R.setObject(L,ie),L.onBeforeRender(E,X,se,Q,ie,Oe),L.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),ie.onBeforeRender(E,X,se,Q,L,Oe),ie.transparent===!0&&ie.side===jn&&ie.forceSinglePass===!1?(ie.side=yn,ie.needsUpdate=!0,E.renderBufferDirect(se,X,Q,ie,L,Oe),ie.side=Ji,ie.needsUpdate=!0,E.renderBufferDirect(se,X,Q,ie,L,Oe),ie.side=jn):E.renderBufferDirect(se,X,Q,ie,L,Oe),L.onAfterRender(E,X,se,Q,ie,Oe)}function uh(L){let X=0;for(const se of L)se.texture!==null&&X++;return X}function Ur(L,X,se){X.isScene!==!0&&(X=We);const Q=Le.get(L),ie=M.state.lights,Oe=M.state.shadowsArray,Xe=ie.state.version,Ue=de.getParameters(L,ie.state,Oe,X,se,M.state.lightProbeGridArray),He=de.getProgramCacheKey(Ue);let Je=Q.programs;Q.environment=L.isMeshStandardMaterial||L.isMeshLambertMaterial||L.isMeshPhongMaterial?X.environment:null,Q.fog=X.fog;const dt=L.isMeshStandardMaterial||L.isMeshLambertMaterial&&!L.envMap||L.isMeshPhongMaterial&&!L.envMap;Q.envMap=F.get(L.envMap||Q.environment,dt),Q.envMapRotation=Q.environment!==null&&L.envMap===null?X.environmentRotation:L.envMapRotation,Je===void 0&&(L.addEventListener("dispose",Rt),Je=new Map,Q.programs=Je,Q.programVariants=new Map);let yt=Je.get(He);if(yt!==void 0){if(Q.currentProgram===yt&&Q.lightsStateVersion===Xe)return fh(L,Ue),yt}else Ue.uniforms=de.getUniforms(L),R!==null&&L.isNodeMaterial&&R.build(L,se,Ue),L.onBeforeCompile(Ue,E),yt=de.acquireProgram(Ue,He),Je.set(He,yt),Q.uniforms=Ue.uniforms;const Ye=Q.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(Ye.clippingPlanes=he.uniform),fh(L,Ue),Q.needsLights=Cm(L),Q.lightsStateVersion=Xe,Q.needsLights&&(Ye.ambientLightColor.value=ie.state.ambient,Ye.lightProbe.value=ie.state.probe,Ye.sunLights.value=ie.state.sun,Ye.sunLightShadows.value=ie.state.sunShadow,Ye.directionalLights.value=ie.state.directional,Ye.directionalLightShadows.value=ie.state.directionalShadow,Ye.spotLights.value=ie.state.spot,Ye.spotLightShadows.value=ie.state.spotShadow,Ye.rectAreaLights.value=ie.state.rectArea,Ye.ltc_1.value=ie.state.rectAreaLTC1,Ye.ltc_2.value=ie.state.rectAreaLTC2,Ye.pointLights.value=ie.state.point,Ye.pointLightShadows.value=ie.state.pointShadow,Ye.hemisphereLights.value=ie.state.hemi,Ye.sunShadowMatrix.value=ie.state.sunShadowMatrix,Ye.sunShadowCascade.value=ie.state.sunShadowCascade,Ye.directionalShadowMatrix.value=ie.state.directionalShadowMatrix,Ye.spotLightMatrix.value=ie.state.spotLightMatrix,Ye.spotLightMap.value=ie.state.spotLightMap,Ye.pointShadowMatrix.value=ie.state.pointShadowMatrix),Q.numLightProbeGrids=uh(M.state.lightProbeGridArray),Q.currentProgram=yt,Q.uniformsList=null,yt}function Am(L,X,se,Q,ie){const Oe=Le.get(L),Xe=Oe.currentProgram.id+","+Q+","+ie;let Ue=Oe.programVariants.get(Xe);return Ue===void 0?(Ue=Ur(L,X,se),Oe.programVariants.set(Xe,Ue)):(Oe.currentProgram=Ue,Oe.uniformsList=null,Oe.outputColorSpace=Q,Oe.toneMapping=ie),Ue}function hh(L){if(L.uniformsList===null){const X=L.currentProgram.getUniforms();L.uniformsList=wo.seqWithValue(X.seq,L.uniforms)}return L.uniformsList}function fh(L,X){const se=Le.get(L);se.outputColorSpace=X.outputColorSpace,se.batching=X.batching,se.batchingColor=X.batchingColor,se.instancing=X.instancing,se.instancingColor=X.instancingColor,se.instancingMorph=X.instancingMorph,se.skinning=X.skinning,se.morphTargets=X.morphTargets,se.morphNormals=X.morphNormals,se.morphColors=X.morphColors,se.morphTargetsCount=X.morphTargetsCount,se.numClippingPlanes=X.numClippingPlanes,se.numIntersection=X.numClipIntersection,se.vertexAlphas=X.vertexAlphas,se.vertexTangents=X.vertexTangents,se.toneMapping=X.toneMapping}function Tm(L,X,se,Q,ie){X.isScene!==!0&&(X=We),ze.resetTextureUnits();const Oe=X.fog,Xe=Q.isMeshStandardMaterial||Q.isMeshLambertMaterial||Q.isMeshPhongMaterial?X.environment:null,Ue=W===null?E.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:bt.workingColorSpace,He=Q.isMeshStandardMaterial||Q.isMeshLambertMaterial&&!Q.envMap||Q.isMeshPhongMaterial&&!Q.envMap,Je=F.get(Q.envMap||Xe,He),dt=Q.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,yt=!!se.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),Ye=!!se.morphAttributes.position,wt=!!se.morphAttributes.normal,Zt=!!se.morphAttributes.color;let Bt=ji;Q.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(Bt=E.toneMapping);const kt=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,bn=kt!==void 0?kt.length:0,je=Le.get(Q),In=M.state.lights;if(pe===!0&&(ne===!0||L!==G)){const Yt=L===G&&Q.id===k;he.setState(Q,L,Yt)}let Ct=!1,Ss=!1;Q.version===je.__version?je.needsLights&&je.lightsStateVersion!==In.state.version||ie.isBatchedMesh&&je.batching===!1||!ie.isBatchedMesh&&je.batching===!0||ie.isBatchedMesh&&je.batchingColor===!0&&ie._colorsTexture===null||ie.isBatchedMesh&&je.batchingColor===!1&&ie._colorsTexture!==null||ie.isInstancedMesh&&je.instancing===!1||!ie.isInstancedMesh&&je.instancing===!0||ie.isSkinnedMesh&&je.skinning===!1||!ie.isSkinnedMesh&&je.skinning===!0||ie.isInstancedMesh&&je.instancingColor===!0&&ie.instanceColor===null||ie.isInstancedMesh&&je.instancingColor===!1&&ie.instanceColor!==null||ie.isInstancedMesh&&je.instancingMorph===!0&&ie.morphTexture===null||ie.isInstancedMesh&&je.instancingMorph===!1&&ie.morphTexture!==null||je.envMap!==Je||Q.fog===!0&&je.fog!==Oe||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==he.numPlanes||je.numIntersection!==he.numIntersection)||je.vertexAlphas!==dt||je.vertexTangents!==yt||je.morphTargets!==Ye||je.morphNormals!==wt||je.morphColors!==Zt||je.morphTargetsCount!==bn||je.numLightProbeGrids!==uh(M.state.lightProbeGridArray)?Ct=!0:(je.outputColorSpace!==Ue||je.toneMapping!==Bt)&&(Ss=!0):(Ct=!0,je.__version=Q.version);let En=je.currentProgram;(Ct===!0||Ss===!0)&&(En=Ss===!0?Am(Q,X,ie,Ue,Bt):Ur(Q,X,ie),R&&Q.isNodeMaterial&&R.onUpdateProgram(Q,En,je));let Ca=!1,ns=!1,ys=!1;const Et=En.getUniforms(),gn=je.uniforms;if(xe.useProgram(En.program)&&(Ca=!0,ns=!0,ys=!0),Q.id!==k&&(k=Q.id,ns=!0),Ca||G!==L){xe.buffers.depth.getReversed()&&L.reversedDepth!==!0&&(L._reversedDepth=!0,L.updateProjectionMatrix()),Et.setValue(N,"projectionMatrix",L.projectionMatrix),Et.setValue(N,"viewMatrix",L.matrixWorldInverse);const fn=Et.map.cameraPosition;fn!==void 0&&fn.setValue(N,De.setFromMatrixPosition(L.matrixWorld)),Be.logarithmicDepthBuffer&&Et.setValue(N,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&Et.setValue(N,"isOrthographic",L.isOrthographicCamera===!0),G!==L&&(G=L,ns=!0,ys=!0)}if(je.needsLights&&(In.state.sunShadowMap.length>0&&Et.setValue(N,"sunShadowMap",In.state.sunShadowMap,ze),In.state.directionalShadowMap.length>0&&Et.setValue(N,"directionalShadowMap",In.state.directionalShadowMap,ze),In.state.spotShadowMap.length>0&&Et.setValue(N,"spotShadowMap",In.state.spotShadowMap,ze),In.state.pointShadowMap.length>0&&Et.setValue(N,"pointShadowMap",In.state.pointShadowMap,ze)),ie.isSkinnedMesh){Et.setOptional(N,ie,"bindMatrix"),Et.setOptional(N,ie,"bindMatrixInverse");const Yt=ie.skeleton;Yt&&(Yt.boneTexture===null&&Yt.computeBoneTexture(),Et.setValue(N,"boneTexture",Yt.boneTexture,ze))}ie.isBatchedMesh&&(Et.setOptional(N,ie,"batchingTexture"),Et.setValue(N,"batchingTexture",ie._matricesTexture,ze),Et.setOptional(N,ie,"batchingIdTexture"),Et.setValue(N,"batchingIdTexture",ie._indirectTexture,ze),Et.setOptional(N,ie,"batchingColorTexture"),ie._colorsTexture!==null&&Et.setValue(N,"batchingColorTexture",ie._colorsTexture,ze));const si=se.morphAttributes;if((si.position!==void 0||si.normal!==void 0||si.color!==void 0)&&fe.update(ie,se,En),(ns||je.receiveShadow!==ie.receiveShadow)&&(je.receiveShadow=ie.receiveShadow,Et.setValue(N,"receiveShadow",ie.receiveShadow)),(Q.isMeshStandardMaterial||Q.isMeshLambertMaterial||Q.isMeshPhongMaterial)&&Q.envMap===null&&X.environment!==null&&(gn.envMapIntensity.value=X.environmentIntensity),gn.dfgLUT!==void 0&&(gn.dfgLUT.value=ZS()),ns){if(Et.setValue(N,"toneMappingExposure",E.toneMappingExposure),je.needsLights&&Rm(gn,ys),Oe&&Q.fog===!0&&be.refreshFogUniforms(gn,Oe),be.refreshMaterialUniforms(gn,Q,V,j,M.state.transmissionRenderTarget[L.id]),je.needsLights&&je.numLightProbeGrids>0){const Yt=w;let fn=0;for(const Ii of M.state.lightProbeGridArray)Ii.texture!==null&&(Yt.textures[fn]=Ii.texture,Yt.min[fn]=Ii.boundingBox.min,Yt.max[fn]=Ii.boundingBox.max,Yt.resolution[fn]=Ii.resolution,fn++);for(const Ii in Yt)Yt[Ii].length=fn;gn.probesSH.value=Yt.textures,gn.probesMin.value=Yt.min,gn.probesMax.value=Yt.max,gn.probesResolution.value=Yt.resolution}wo.upload(N,hh(je),gn,ze)}if(Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(wo.upload(N,hh(je),gn,ze),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&Et.setValue(N,"center",ie.center),Et.setValue(N,"modelViewMatrix",ie.modelViewMatrix),Et.setValue(N,"normalMatrix",ie.normalMatrix),Et.setValue(N,"modelMatrix",ie.matrixWorld),Q.uniformsGroups!==void 0){const Yt=Q.uniformsGroups;for(let fn=0,Ii=Yt.length;fn<Ii;fn++){const ph=Yt[fn];$e.update(ph,En),$e.bind(ph,En)}}return En}function Rm(L,X){L.ambientLightColor.needsUpdate=X,L.lightProbe.needsUpdate=X,L.sunLights.needsUpdate=X,L.sunLightShadows.needsUpdate=X,L.directionalLights.needsUpdate=X,L.directionalLightShadows.needsUpdate=X,L.pointLights.needsUpdate=X,L.pointLightShadows.needsUpdate=X,L.spotLights.needsUpdate=X,L.spotLightShadows.needsUpdate=X,L.rectAreaLights.needsUpdate=X,L.hemisphereLights.needsUpdate=X}function Cm(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(L,X,se){const Q=Le.get(L);Q.__autoAllocateDepthBuffer=L.resolveDepthBuffer===!1,Q.__autoAllocateDepthBuffer===!1&&(Q.__useRenderToTexture=!1),Le.get(L.texture).__webglTexture=X,Le.get(L.depthTexture).__webglTexture=Q.__autoAllocateDepthBuffer?void 0:se,Q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(L,X){const se=Le.get(L);se.__webglFramebuffer=X,se.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(L,X=0,se=0){W=L,U=X,O=se;let Q=null,ie=!1,Oe=!1;if(L){const Ue=Le.get(L);if(Ue.__useDefaultFramebuffer!==void 0){xe.bindFramebuffer(N.FRAMEBUFFER,Ue.__webglFramebuffer),Z.copy(L.viewport),me.copy(L.scissor),le=L.scissorTest,xe.viewport(Z),xe.scissor(me),xe.setScissorTest(le),k=-1;return}else if(Ue.__webglFramebuffer===void 0)ze.setupRenderTarget(L);else if(Ue.__hasExternalTextures)ze.rebindTextures(L,Le.get(L.texture).__webglTexture,Le.get(L.depthTexture).__webglTexture);else if(L.depthBuffer){const dt=L.depthTexture;if(Ue.__boundDepthTexture!==dt){if(dt!==null&&Le.has(dt)&&(L.width!==dt.image.width||L.height!==dt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ze.setupDepthRenderbuffer(L)}}const He=L.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(Oe=!0);const Je=Le.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(Je[X])?Q=Je[X][se]:Q=Je[X],ie=!0):L.samples>0&&ze.useMultisampledRTT(L)===!1?Q=Le.get(L).__webglMultisampledFramebuffer:Array.isArray(Je)?Q=Je[se]:Q=Je,Z.copy(L.viewport),me.copy(L.scissor),le=L.scissorTest}else Z.copy(ee).multiplyScalar(V).floor(),me.copy(ce).multiplyScalar(V).floor(),le=Ce;if(se!==0&&(Q=D),xe.bindFramebuffer(N.FRAMEBUFFER,Q)&&xe.drawBuffers(L,Q),xe.viewport(Z),xe.scissor(me),xe.setScissorTest(le),ie){const Ue=Le.get(L.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+X,Ue.__webglTexture,se)}else if(Oe){const Ue=X;for(let He=0;He<L.textures.length;He++){const Je=Le.get(L.textures[He]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+He,Je.__webglTexture,se,Ue)}}else if(L!==null&&se!==0){const Ue=Le.get(L.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Ue.__webglTexture,se)}k=-1};function dh(L){const X=Le.get(L);return(X.__readFormat!==L.format||X.__readType!==L.type)&&(X.__readFormat=L.format,X.__readType=L.type,X.__formatReadable=Be.textureFormatReadable(L.format),X.__typeReadable=Be.textureTypeReadable(L.type)),X}this.readRenderTargetPixels=function(L,X,se,Q,ie,Oe,Xe,Ue=0){if(!(L&&L.isWebGLRenderTarget)){Lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let He=Le.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Xe!==void 0&&(He=He[Xe],Array.isArray(He)&&(He=He[0])),He){xe.bindFramebuffer(N.FRAMEBUFFER,He);try{const Je=L.textures[Ue],dt=Je.format,yt=Je.type;L.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Ue);const Ye=dh(Je);if(Ye.__formatReadable===!1){Lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ye.__typeReadable===!1){Lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=L.width-Q&&se>=0&&se<=L.height-ie&&N.readPixels(X,se,Q,ie,we.convert(dt),we.convert(yt),Oe)}finally{const Je=W!==null?Le.get(W).__webglFramebuffer:null;xe.bindFramebuffer(N.FRAMEBUFFER,Je)}}},this.readRenderTargetPixelsAsync=async function(L,X,se,Q,ie,Oe,Xe,Ue=0){if(!(L&&L.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let He=Le.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Xe!==void 0&&(He=He[Xe],Array.isArray(He)&&(He=He[0])),He)if(X>=0&&X<=L.width-Q&&se>=0&&se<=L.height-ie){xe.bindFramebuffer(N.FRAMEBUFFER,He);const Je=L.textures[Ue],dt=Je.format,yt=Je.type;L.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Ue);const Ye=dh(Je);if(Ye.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ye.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const wt=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,wt),N.bufferData(N.PIXEL_PACK_BUFFER,Oe.byteLength,N.STREAM_READ),N.readPixels(X,se,Q,ie,we.convert(dt),we.convert(yt),0),N.bindBuffer(N.PIXEL_PACK_BUFFER,null);const Zt=W!==null?Le.get(W).__webglFramebuffer:null;xe.bindFramebuffer(N.FRAMEBUFFER,Zt);const Bt=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await ag(N,Bt,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,wt),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,Oe),N.bindBuffer(N.PIXEL_PACK_BUFFER,null),N.deleteBuffer(wt),N.deleteSync(Bt),Oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(L,X=null,se=0){const Q=Math.pow(2,-se),ie=Math.floor(L.image.width*Q),Oe=Math.floor(L.image.height*Q),Xe=X!==null?X.x:0,Ue=X!==null?X.y:0;ze.setTexture2D(L,0),N.copyTexSubImage2D(N.TEXTURE_2D,se,0,0,Xe,Ue,ie,Oe),xe.unbindTexture()},this.copyTextureToTexture=function(L,X,se=null,Q=null,ie=0,Oe=0){let Xe,Ue,He,Je,dt,yt,Ye,wt,Zt;const Bt=L.isCompressedTexture?L.mipmaps[Oe]:L.image;if(se!==null)Xe=se.max.x-se.min.x,Ue=se.max.y-se.min.y,He=se.isBox3?se.max.z-se.min.z:1,Je=se.min.x,dt=se.min.y,yt=se.isBox3?se.min.z:0;else{const Et=Math.pow(2,-ie);Xe=Math.floor(Bt.width*Et),Ue=Math.floor(Bt.height*Et),L.isDataArrayTexture?He=Bt.depth:L.isData3DTexture?He=Math.floor(Bt.depth*Et):He=1,Je=0,dt=0,yt=0}Q!==null?(Ye=Q.x,wt=Q.y,Zt=Q.z):(Ye=0,wt=0,Zt=0);const kt=we.convert(X.format),bn=we.convert(X.type);let je;X.isData3DTexture?(ze.setTexture3D(X,0),je=N.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(ze.setTexture2DArray(X,0),je=N.TEXTURE_2D_ARRAY):(ze.setTexture2D(X,0),je=N.TEXTURE_2D),xe.activeTexture(N.TEXTURE0),xe.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,X.flipY),xe.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),xe.pixelStorei(N.UNPACK_ALIGNMENT,X.unpackAlignment);const In=xe.getParameter(N.UNPACK_ROW_LENGTH),Ct=xe.getParameter(N.UNPACK_IMAGE_HEIGHT),Ss=xe.getParameter(N.UNPACK_SKIP_PIXELS),En=xe.getParameter(N.UNPACK_SKIP_ROWS),Ca=xe.getParameter(N.UNPACK_SKIP_IMAGES);xe.pixelStorei(N.UNPACK_ROW_LENGTH,Bt.width),xe.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Bt.height),xe.pixelStorei(N.UNPACK_SKIP_PIXELS,Je),xe.pixelStorei(N.UNPACK_SKIP_ROWS,dt),xe.pixelStorei(N.UNPACK_SKIP_IMAGES,yt);const ns=L.isDataArrayTexture||L.isData3DTexture,ys=X.isDataArrayTexture||X.isData3DTexture;if(L.isDepthTexture){const Et=Le.get(L),gn=Le.get(X),si=Le.get(Et.__renderTarget),Yt=Le.get(gn.__renderTarget);xe.bindFramebuffer(N.READ_FRAMEBUFFER,si.__webglFramebuffer),xe.bindFramebuffer(N.DRAW_FRAMEBUFFER,Yt.__webglFramebuffer);for(let fn=0;fn<He;fn++)ns&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Le.get(L).__webglTexture,ie,yt+fn),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Le.get(X).__webglTexture,Oe,Zt+fn)),N.blitFramebuffer(Je,dt,Je+Xe,dt+Ue,Ye,wt,Ye+Xe,wt+Ue,N.DEPTH_BUFFER_BIT,N.NEAREST);xe.bindFramebuffer(N.READ_FRAMEBUFFER,null),xe.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(ie!==0||L.isRenderTargetTexture||Le.has(L)){const Et=Le.get(L),gn=Le.get(X);xe.bindFramebuffer(N.READ_FRAMEBUFFER,C),xe.bindFramebuffer(N.DRAW_FRAMEBUFFER,I);for(let si=0;si<He;si++)ns?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Et.__webglTexture,ie,yt+si):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Et.__webglTexture,ie),ys?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,gn.__webglTexture,Oe,Zt+si):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,gn.__webglTexture,Oe),ie!==0?N.blitFramebuffer(Je,dt,Je+Xe,dt+Ue,Ye,wt,Ye+Xe,wt+Ue,N.COLOR_BUFFER_BIT,N.NEAREST):ys?N.copyTexSubImage3D(je,Oe,Ye,wt,Zt+si,Je,dt,Xe,Ue):N.copyTexSubImage2D(je,Oe,Ye,wt,Je,dt,Xe,Ue);xe.bindFramebuffer(N.READ_FRAMEBUFFER,null),xe.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else ys?L.isDataTexture||L.isData3DTexture?N.texSubImage3D(je,Oe,Ye,wt,Zt,Xe,Ue,He,kt,bn,Bt.data):X.isCompressedArrayTexture?N.compressedTexSubImage3D(je,Oe,Ye,wt,Zt,Xe,Ue,He,kt,Bt.data):N.texSubImage3D(je,Oe,Ye,wt,Zt,Xe,Ue,He,kt,bn,Bt):L.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,Oe,Ye,wt,Xe,Ue,kt,bn,Bt.data):L.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,Oe,Ye,wt,Bt.width,Bt.height,kt,Bt.data):N.texSubImage2D(N.TEXTURE_2D,Oe,Ye,wt,Xe,Ue,kt,bn,Bt);xe.pixelStorei(N.UNPACK_ROW_LENGTH,In),xe.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Ct),xe.pixelStorei(N.UNPACK_SKIP_PIXELS,Ss),xe.pixelStorei(N.UNPACK_SKIP_ROWS,En),xe.pixelStorei(N.UNPACK_SKIP_IMAGES,Ca),Oe===0&&X.generateMipmaps===!0&&X.mipmapsAutoUpdate===!0&&N.generateMipmap(je),xe.unbindTexture()},this.initRenderTarget=function(L){Le.get(L).__webglFramebuffer===void 0&&ze.setupRenderTarget(L)},this.initTexture=function(L){L.isCubeTexture?ze.setTextureCube(L,0):L.isData3DTexture?ze.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?ze.setTexture2DArray(L,0):ze.setTexture2D(L,0),xe.unbindTexture()},this.resetState=function(){U=0,O=0,W=null,xe.reset(),Pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=bt._getDrawingBufferColorSpace(e),t.unpackColorSpace=bt._getUnpackColorSpace()}}const ni={uWarp:{value:new qe(0,1)},uWarpPlane:{value:new ct(0,0,0,0)},uWarpOwn:{value:0},uTurn:{value:new qe(0,0)},uTurnR:{value:new pt},uTurnPlace:{value:new ct(0,0,0,0)}},QS=`
vec2 turnRay(vec2 ab, float share) {
  vec3 q = uTurnR * vec3(ab, 1.0);
  if (!(q.z > 0.0)) return ab;
  return ab + (uTurnPlace.xy + uTurn.y * (q.xy / q.z - uTurnPlace.zw) - ab) * share;
}`,ey=`
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
}`,Cp=`uniform vec2 uWarp; uniform vec4 uWarpPlane; uniform float uWarpOwn; uniform vec2 uTurn; uniform mat3 uTurnR; uniform vec4 uTurnPlace;${QS}`,If="/* warp step */";function js(n){return n.includes(If)||!n.includes("#include <project_vertex>")?n:n.replace("#include <common>",`#include <common>
${If} ${Cp}`).replace("#include <project_vertex>",`#include <project_vertex>
${ey}`)}const mu=new WeakMap;function _a(n){return mu.get(n)}function rl(n){if(mu.has(n))return n;const e={value:0},t=n.onBeforeCompile;if(!Object.prototype.hasOwnProperty.call(n,"customProgramCacheKey")){const i=t.toString();n.customProgramCacheKey=()=>i}return n.onBeforeCompile=(i,s)=>{t.call(n,i,s),i.uniforms.uWarpOwn=e},mu.set(n,e),n}function Pp(n){const e=n.clone(),t=n.defines;return t&&(e.defines=t),e.onBeforeCompile=(i,s)=>n.onBeforeCompile(i,s),e.customProgramCacheKey=()=>n.customProgramCacheKey(),rl(e)}function ts(n){return Ge.project.warp&&!n.ortho&&n.cpu.sinP>Ge.project.warpMinSinP&&n.cpu.invD>0}function ty(n,e=ni){if(!ts(n)){e.uWarp.value.set(0,n.near),e.uWarpPlane.value.set(0,0,0,0);return}const t=n.cpu.sinP,i=n.view.elements,s=(n.cpu.zr+n.cpu.tz)*n.cpu.cellMetres;e.uWarp.value.set(t,n.near),e.uWarpPlane.value.set(t*i[4],t*i[5],t*i[6],t*(n.eye.y-s))}function ny(n,e=ni){const t=n.cpu;if(!t.subOn||n.ortho||!(t.focal>0)){e.uTurn.value.set(0,0);return}const i=t.subR;e.uTurnR.value.set(i[0],i[1],i[2],i[3],i[4],i[5],i[6],i[7],i[8]),e.uTurnPlace.value.set((t.subSX-t.cx)/t.focal,(t.cy-t.subSY)/t.focal,t.subA0,t.subB0),e.uTurn.value.set(1,t.subKF/t.focal)}function $u(n,e,t,i,s){s.x=e,s.y=t;const r=n.cpu;if(!r.subOn||n.ortho||!(r.focal>0)||!(i>0))return s;const a=r.subR,l=a[6]*e+a[7]*t+a[8];if(!(l>0))return s;const o=r.subKF/r.focal;return s.x=e+((r.subSX-r.cx)/r.focal+o*((a[0]*e+a[1]*t+a[2])/l-r.subA0)-e)*i,s.y=t+((r.cy-r.subSY)/r.focal+o*((a[3]*e+a[4]*t+a[5])/l-r.subB0)-t)*i,s}function iy(n,e,t,i){i.x=e,i.y=t;const s=n.cpu;if(!s.subOn||n.ortho||!(s.focal>0))return i;const r=s.subKF/s.focal,a=(e-(s.subSX-s.cx)/s.focal)/r+s.subA0,l=(t-(s.cy-s.subSY)/s.focal)/r+s.subB0,o=s.subR,u=o[2]*a+o[5]*l+o[8];return u>0&&(i.x=(o[0]*a+o[3]*l+o[6])/u,i.y=(o[1]*a+o[4]*l+o[7])/u),i}function sy(n,e,t,i,s=ni){i.x=n,i.y=e;const r=s.uTurnR.value.elements,a=r[2]*n+r[5]*e+r[8];if(!(a>0))return i;const l=s.uTurnPlace.value,o=s.uTurn.value.y;return i.x=n+(l.x+o*((r[0]*n+r[3]*e+r[6])/a-l.z)-n)*t,i.y=e+(l.y+o*((r[1]*n+r[4]*e+r[7])/a-l.w)-e)*t,i}function Xu(n){return(n.cpu.zr+n.cpu.tz)*n.cpu.cellMetres}function Bo(n,e,t,i,s){if(!ts(n))return Number.NaN;const r=-i;if(!(r>n.near))return Number.NaN;const a=n.view.elements;return r+n.cpu.sinP*(a[4]*e+a[5]*t+a[6]*i+n.eye.y-Xu(n))*(1-s)}function Lp(n,e,t,i,s){const r=Bo(n,e,t,i,s);return Number.isNaN(r)?1:-i/Math.max(r,n.near)}function Ff(n,e,t,i,s){const r=n.view.elements;s.x=n.eye.x+r[0]*e+r[1]*t+r[2]*i,s.y=n.eye.y+r[4]*e+r[5]*t+r[6]*i,s.z=n.eye.z+r[8]*e+r[9]*t+r[10]*i}function qu(n,e,t,i,s,r,a,l=0){let o=i,u=s,c=1,f=0,h=1;if(ts(n)){const d=n.view.elements,g=n.cpu.sinP*(1-l);if(c=1-g*d[6]+g*d[5]*t,f=g*(n.eye.y-Xu(n)),h=1-e*g*d[4],!(h>0))return!1;const v=(c*o+f)/h,p=(c*u+f)/h,m=n.near;if(v<m&&p<m)return!1;v<m?o+=(u-o)*(m-v)/(p-v):p<m&&(u-=(u-o)*(m-p)/(v-p))}return u>o?(Ff(n,e*(c*o+f)/h,t*o,-o,r),Ff(n,e*(c*u+f)/h,t*u,-u,a),!0):!1}class Dp{planes=Array.from({length:7},()=>({nx:0,ny:0,nz:0,w:0}));on=!1;set(e){if(this.on=ts(e)&&e.cpu.focal>0,!this.on)return this;const t=e.cpu,i=e.view.elements,s=t.sinP,r=s*i[5],a=s*i[6],l=s*(e.eye.y-Xu(e)),o=-t.cx/t.focal,u=(t.sheetW-t.cx)/t.focal,c=t.cy/t.focal,f=(t.cy-t.sheetH)/t.focal;return this.view(0,1,-o*r,o*(1-a),-o*l,e),this.view(1,-1,u*r,-u*(1-a),u*l,e),this.view(2,0,-1,-c,0,e),this.view(3,0,1,f,0,e),this.view(4,0,0,-1,-e.near,e),this.view(5,0,0,1,e.far,e),this.view(6,0,r,-(1-a),l-e.near,e),this}view(e,t,i,s,r,a){const l=a.view.elements,o=l[0]*t+l[1]*i+l[2]*s,u=l[4]*t+l[5]*i+l[6]*s,c=l[8]*t+l[9]*i+l[10]*s,f=Math.hypot(o,u,c)||1,h=this.planes[e];h.nx=o/f,h.ny=u/f,h.nz=c/f,h.w=(r-(o*a.eye.x+u*a.eye.y+c*a.eye.z))/f}intersectsSphere(e,t,i,s){for(const r of this.planes)if(r.nx*e+r.ny*t+r.nz*i+r.w<-s)return!1;return!0}}const Er=new kn;function ry(n){if(n.boundingSphere!==void 0){if(n.boundingSphere===null&&n.computeBoundingSphere?.(),!n.boundingSphere)return!1;Er.copy(n.boundingSphere)}else{const e=n.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Er.copy(e.boundingSphere)}return Er.applyMatrix4(n.matrixWorld),!0}class ay{lifted=[];frustum=new vs;vol=null;liftedCount=0;tested=0;lift(e,t,i){this.liftedCount=0,this.tested=0,i.on&&(this.frustum.setFromProjectionMatrix(t.viewProj),this.vol=i,e.traverseVisible(this.visit),this.vol=null,this.liftedCount=this.lifted.length)}visit=e=>{const t=e;if(!e.frustumCulled||t.boundingSphere===void 0&&!t.geometry||(this.tested++,e.matrixWorldAutoUpdate&&e.updateWorldMatrix(!0,!1),!ry(t)||this.frustum.intersectsSphere(Er)))return;const i=Er.center;this.vol.intersectsSphere(i.x,i.y,i.z,Er.radius)&&(e.frustumCulled=!1,this.lifted.push(e))};restore(){for(const e of this.lifted)e.frustumCulled=!0;this.lifted.length=0}}const jl={x:0,y:0};function Kl(n,e,t,i,s,r,a=ni,l=1){const o=n.view.elements;let u=o[0]*e+o[4]*t+o[8]*i+o[12];const c=o[1]*e+o[5]*t+o[9]*i+o[13],f=o[2]*e+o[6]*t+o[10]*i+o[14];let h=c;if(a.uWarp.value.x>0&&-f>a.uWarp.value.y){const m=-f,y=a.uWarpPlane.value,_=m+(y.x*u+y.y*c+y.z*f+y.w)*(1-s);u*=m/Math.max(_,a.uWarp.value.y)}if(a.uTurn.value.x>0&&s>0&&l>0&&-f>a.uWarp.value.y){const m=-f;sy(u/m,c/m,l,jl,a),u=jl.x*m,h=jl.y*m}const d=n.proj.elements,g=d[3]*u+d[7]*h+d[11]*f+d[15],v=d[0]*u+d[4]*h+d[8]*f+d[12],p=d[1]*u+d[5]*h+d[9]*f+d[13];return r.x=(v/g+1)/2*n.outW,r.y=(1-p/g)/2*n.outH,r.inFront=n.ortho?!0:-f>=n.near,r}const Zl={x:0,y:0},Nn=Ge.view,Ts={up:new z,centre:new z,m:new et,roll:new et,shear:new et,scaled:{target:{x:0,y:0,z:0},heading:0,pitch:0,roll:0,distance:1,fovY:1,orthoScale:1,perspective:0,horizonShift:0}};function oy(n){return{cpu:Pm(),outW:0,outH:0,gridW:0,gridH:0,toGridX:1,toGridY:1,view:new et,proj:new et,viewProj:new et,viewProjInverse:new et,ortho:!0,eye:new z,nominalEye:new z,target:new z,forward:new z,near:Nn.minNearMetres,far:Nn.defaultFarMetres,fovY:0,orthoHalfH:0,orthoHalfW:0,metresPerPixel:0,origin:{x:n.x,y:n.y},camera:{target:{x:0,y:0,z:0},heading:0,pitch:0,roll:0,distance:1,fovY:1,orthoScale:1,perspective:0,horizonShift:0}}}function an(n,e,t,i,s,r){return r.x=t*e-n.x,r.y=s,r.z=i*e-n.y,r}function ly(n,e,t,i,s,r){r.x=(t+n.x)/e,r.y=(s+n.y)/e,r.z=i}function Nf(n,e,t,i,s,r=0,a=t,l=i){const o=n.cpu,u=Ld(s),c=n.camera;c.target.x=e.target.x,c.target.y=e.target.y,c.target.z=e.target.z,c.heading=e.heading,c.pitch=e.pitch,c.roll=e.roll,c.distance=e.distance,c.fovY=e.fovY,c.orthoScale=e.orthoScale,c.perspective=e.perspective,c.horizonShift=e.horizonShift??0;let f=e;if(l>0&&l!==i){const m=Ts.scaled;m.target.x=e.target.x,m.target.y=e.target.y,m.target.z=e.target.z,m.heading=e.heading,m.pitch=e.pitch,m.roll=e.roll,m.distance=e.distance,m.fovY=e.fovY,m.perspective=e.perspective,m.horizonShift=e.horizonShift,m.orthoScale=Math.max(Dn.camera.minOrthoScale,e.orthoScale)*(l/i),f=m}Lm(o,f,t,i,u),n.outW=t,n.outH=i,n.gridW=a>0?a:t,n.gridH=l>0?l:i,n.toGridX=n.gridW/t,n.toGridY=n.gridH/i;const h=o.cellMetres,d=n.origin;n.target.set(o.tx*h-d.x,o.tz*h,o.ty*h-d.y),n.forward.set(o.fx*o.cosP,-o.sinP,o.fy*o.cosP).normalize(),n.nominalEye.copy(n.target).addScaledVector(n.forward,-o.distance*h);const g=o.perspective;n.ortho=!(g>=Nn.orthoBelowPerspective),n.metresPerPixel=h/o.ppc,Ts.up.set(o.fx*o.sinP,o.cosP,o.fy*o.sinP).normalize();const v=n.ortho?0:Math.max(0,(o.distance/g-o.distance)*h),p=r>0?Math.min(Nn.maxFarMetres+v,r*Nn.farHazeMargin):Nn.defaultFarMetres+v;if(n.ortho){n.orthoHalfH=i/2*h/o.ppc,n.orthoHalfW=t/2*h/o.ppc,n.fovY=0;const m=Math.max(Nn.minOrthoSinPitch,o.sinP),y=o.cosP/m,_=Math.max(0,(u.zMaxCells-o.tz)*h),w=Math.min(0,(u.zMinCells-o.tz)*h),S=n.orthoHalfH*y+_/m+Nn.mapNearMarginMetres;n.near=Nn.mapNearMarginMetres,n.far=Math.min(Nn.maxFarMetres,Math.max(n.near+Nn.minDepthRangeMetres,S+n.orthoHalfH*y-w/m)),n.eye.copy(n.target).addScaledVector(n.forward,-S),n.proj.makeOrthographic(-n.orthoHalfW,n.orthoHalfW,n.orthoHalfH,-n.orthoHalfH,n.near,n.far)}else{const m=o.distance/g,y=o.ppc*m;n.fovY=2*Math.atan(i/2/y),n.orthoHalfH=0,n.orthoHalfW=0;const _=o.kMin/o.invD;n.near=Math.max(Nn.minNearMetres,_*h);const w=m*h,S=cy(o,u,s);if(w-S>0){const b=i/2/y,A=b*t/i,E=1/Math.sqrt(1+A*A+b*b);n.near=Math.max(n.near,(w-S)*E-Nn.slideNearMarginMetres)}n.far=Math.max(n.near+Nn.minDepthRangeMetres,p),n.eye.copy(n.target).addScaledVector(n.forward,-m*h);const M=Math.tan(n.fovY/2)*n.near,x=M*t/i;n.proj.makePerspective(-x,x,M,-M,n.near,n.far)}if(o.shift!==0&&(n.ortho?n.proj.elements[13]+=2*o.shift:n.proj.elements[9]-=2*o.shift),o.rolled){const m=t/i,y=o.cosR,_=o.sinR;Ts.roll.set(y,_/m,0,0,-_*m,y,0,0,0,0,1,0,0,0,0,1),n.proj.premultiply(Ts.roll)}return Ts.centre.copy(n.eye).add(n.forward),n.view.lookAt(n.eye,Ts.centre,Ts.up),n.view.setPosition(n.eye),n.view.invert(),n.viewProj.multiplyMatrices(n.proj,n.view),n.viewProjInverse.copy(n.viewProj).invert(),n}function cy(n,e,t){const i=n.cellMetres,s=t.size,r=Math.max(Math.abs(n.tx),Math.abs(s-n.tx))*i,a=Math.max(Math.abs(n.ty),Math.abs(s-n.ty))*i,l=n.tz*i,o=Math.max(Math.abs(Nn.slideSceneTopMetres-l),Math.abs(l-e.zMinCells*i));return Math.hypot(r,a,o)}function al(n,e,t,i,s,r=0,a=0){const l=n.viewProj.elements;let o=l[3]*e+l[7]*t+l[11]*i+l[15];if(!(o>0))return!1;let u=l[0]*e+l[4]*t+l[8]*i+l[12],c=l[1]*e+l[5]*t+l[9]*i+l[13],f=!1;if(r>0&&a>0&&n.cpu.subOn&&!n.ortho){const M=n.view.elements;let x=M[0]*e+M[4]*t+M[8]*i+M[12],b=M[1]*e+M[5]*t+M[9]*i+M[13];const A=M[2]*e+M[6]*t+M[10]*i+M[14],E=-A;if(E>n.near){const P=Bo(n,x,b,A,r);f=P<=n.near,Number.isNaN(P)||(x*=E/Math.max(P,n.near)),$u(n,x/E,b/E,a,Zl),x=Zl.x*E,b=Zl.y*E;const R=n.proj.elements;u=R[0]*x+R[4]*b+R[8]*A+R[12],c=R[1]*x+R[5]*b+R[9]*A+R[13],o=R[3]*x+R[7]*b+R[11]*A+R[15]}}else if(ts(n)){const M=n.view.elements,x=M[0]*e+M[4]*t+M[8]*i+M[12],b=M[2]*e+M[6]*t+M[10]*i+M[14],A=Bo(n,x,M[1]*e+M[5]*t+M[9]*i+M[13],b,r);f=A<=n.near;const E=Number.isNaN(A)?1:-b/Math.max(A,n.near);if(E!==1){const P=n.proj.elements,R=(E-1)*x;u+=P[0]*R,c+=P[1]*R,o+=P[3]*R}}const h=u/o,d=c/o;s.x=(h+1)/2*n.outW,s.y=(1-d)/2*n.outH;const g=e-n.target.x,v=t-n.target.y,p=i-n.target.z,m=g*n.forward.x+v*n.forward.y+p*n.forward.z;s.depthMetres=m+n.cpu.distance*n.cpu.cellMetres;const y=e-n.eye.x,_=t-n.eye.y,w=i-n.eye.z,S=y*n.forward.x+_*n.forward.y+w*n.forward.z;return s.eyeMetres=S,s.pixelsPerMetre=n.ortho?n.outH/(2*n.orthoHalfH):S>0?n.outH/(2*Math.tan(n.fovY/2)*S):0,!n.ortho&&!(S>=n.near)||f?!1:s.x>=0&&s.y>=0&&s.x<n.outW&&s.y<n.outH}function zo(n,e){return e.x=n.cpu.snapDX,e.y=n.cpu.snapDY,e}function uy(n){return n.eye.distanceTo(n.target)-n.nominalEye.distanceTo(n.target)}function hy(n,e={x:0,y:0,z:0}){return Dm(n.camera,n.cpu.cellMetres,e)}const Uf=new WeakMap,Of={x:0,y:0,depth:0,scale:0};function gu(n){const e=Uf.get(n.voxels);if(e&&e.px===n.pivot.x&&e.py===n.pivot.y&&e.pz===n.pivot.z)return e.r;const{sx:t,sy:i,sz:s,voxels:r,pivot:a}=n;let l=0;for(let u=0;u<s;u++)for(let c=0;c<i;c++)for(let f=0;f<t;f++){if(r[f+t*(c+i*u)]===0)continue;const h=f+.5-a.x,d=c+.5-a.y,g=u+.5-a.z,v=h*h+d*d+g*g;v>l&&(l=v)}const o=l>0||r.some(u=>u!==0)?Math.sqrt(l)+1:-1;return Uf.set(n.voxels,{px:a.x,py:a.y,pz:a.z,r:o}),o}function fy(n){for(const e of n)gu(e),e.coarse&&gu(e.coarse.model)}function kf(n,e){const t=n.scale*(e.voxelSize??1);return t>0&&Number.isFinite(t)?t:0}function dy(n,e){const t=n.cpu;if(t.subReach=0,!t.subOn)return 0;const i=e.objects,s=e.followObjects??0;for(let r=0;r<i.length;r++){const a=i[r];if(!(Ru(a)>0))continue;const l=r<s,o=a.position.x+(l?t.snapDX:0),u=a.position.y+(l?t.snapDY:0),c=a.position.z/t.cellMetres;if(!Number.isFinite(o+u+c))continue;const f=a.fade;if(f!==void 0&&!(f>0))continue;let h=a.model;const d=h.coarse;d!==void 0&&Im(t,o,u,c,Of)&&kf(a,h)*Of.scale*n.toGridY<d.belowPx&&(h=d.model);const g=kf(a,h);if(!(g>0))continue;const v=gu(h);if(!(v>0))continue;const p=Math.hypot(o-t.subX,u-t.subY,c-t.subZ)+v*g;p>t.subReach&&(t.subReach=p)}return t.subReach}function Bf(n){n.matrixAutoUpdate=!1,n.matrixWorldAutoUpdate=!1}function py(){const n=new Yn,e=new Ws;return Bf(n),Bf(e),{persp:n,ortho:e}}const zf=new z;function Gf(n,e){const t=e.ortho?n.ortho:n.persp;if(t.near=e.near,t.far=e.far,t.userData.ported=!0,e.ortho){const i=n.ortho;i.left=-e.orthoHalfW,i.right=e.orthoHalfW,i.top=e.orthoHalfH,i.bottom=-e.orthoHalfH,i.zoom=1,i.userData.texelMetres=e.metresPerPixel,i.userData.focusMetres=e.nominalEye.distanceTo(e.target)}else{const i=n.persp;i.fov=e.fovY*180/Math.PI,i.aspect=e.outW/e.outH,i.userData.focusMetres=e.eye.distanceTo(e.target),i.userData.texelMetres=void 0}return t.projectionMatrix.copy(e.proj),t.projectionMatrixInverse.copy(e.proj).invert(),t.matrixWorldInverse.copy(e.view),t.matrixWorld.copy(e.view).invert(),t.matrix.copy(t.matrixWorld),zf.setFromMatrixPosition(t.matrixWorld),t.position.copy(zf),t.matrixWorld.decompose(t.position,t.quaternion,t.scale),t}const Ai=Ge.project,Ot={x:0,y:0,z:0},lt={ox:0,oy:0,oz:0,dx:0,dy:0,dz:0,len:0,fromEye:!0},fs={x:0,y:0,z:0},ta={x:0,y:0,z:0};function my(n,e,t){if(e<0||t<0||e>=n.size||t>=n.size)return-1/0;const i=t*n.size+e;return n.surface[i]*n.meta.heightUnitMetres}function gy(n,e,t){return e<0||t<0||e>=n.size||t>=n.size?Dd:n.material[t*n.size+e]}function xu(n,e,t,i,s,r){const a=n.ground;if(a&&a.drawnSolid&&a.fine(e,t))return a.drawnSolid(e,t,i,s);const l=Math.floor(e),o=Math.floor(t),u=gy(n.world,l,o);if(u===Dd)return!1;const c=my(n.world,l,o);return r&&u<=ds.Surf?i<c-Ai.waterSurfaceMetres:i<c}function xy(n,e,t,i,s=0){const r=n.cpu.cellMetres;if(an(n.origin,r,e,t,i,Ot),lt.fromEye=!0,(ts(n)||s>0&&n.cpu.subOn&&!n.ortho)&&vy(n,s))return lt.len;if(n.ortho){const c=n.forward,f=(Ot.x-n.eye.x)*c.x+(Ot.y-n.eye.y)*c.y+(Ot.z-n.eye.z)*c.z;return f>0?(lt.ox=Ot.x-c.x*f,lt.oy=Ot.y-c.y*f,lt.oz=Ot.z-c.z*f,lt.dx=c.x,lt.dy=c.y,lt.dz=c.z,lt.len=f,f):0}lt.ox=n.eye.x,lt.oy=n.eye.y,lt.oz=n.eye.z;let a=Ot.x-lt.ox,l=Ot.y-lt.oy,o=Ot.z-lt.oz;const u=Math.hypot(a,l,o);return u>0?(a/=u,l/=u,o/=u,lt.dx=a,lt.dy=l,lt.dz=o,lt.len=u,u):0}function vy(n,e){const t=n.view.elements,i=t[0]*Ot.x+t[4]*Ot.y+t[8]*Ot.z+t[12],s=t[1]*Ot.x+t[5]*Ot.y+t[9]*Ot.z+t[13],r=t[2]*Ot.x+t[6]*Ot.y+t[10]*Ot.z+t[14],a=-r;if(!(a>n.near))return!1;let l=i*Lp(n,i,s,r,e)/a,o=s/a;if(e>0&&n.cpu.subOn&&($u(n,l,o,1,Zi),l=Zi.x,o=Zi.y),!qu(n,l,o,n.near,a,fs,ta))return!1;const u=ta.x-fs.x,c=ta.y-fs.y,f=ta.z-fs.z,h=Math.hypot(u,c,f);return h>0?(lt.ox=fs.x,lt.oy=fs.y,lt.oz=fs.z,lt.dx=u/h,lt.dy=c/h,lt.dz=f/h,lt.len=h,lt.fromEye=!1,!0):!1}const Si={x:0,y:0,z:0},no={x:0,y:0,z:0},Zi={x:0,y:0};function Ip(n,e){return n.cpu.subOn&&!n.ortho&&!!e.objects&&e.objects.subjectInFrame()}function Fp(n,e,t,i,s){if(iy(n,t,i,Zi),!qu(n,Zi.x,Zi.y,n.near,s,Si,no,n.cpu.subShare))return 1/0;let r=no.x-Si.x,a=no.y-Si.y,l=no.z-Si.z;const o=Math.hypot(r,a,l);if(!(o>0))return 1/0;r/=o,a/=o,l/=o;const u=e.objects.firstHit(Si.x,Si.y,Si.z,r,a,l,o,2);if(!(u<o))return 1/0;const c=n.forward;return(Si.x+r*u-n.eye.x)*c.x+(Si.y+a*u-n.eye.y)*c.y+(Si.z+l*u-n.eye.z)*c.z}function Np(n,e,t,i,s,r,a,l){const o=n.forward,u=r*o.x+a*o.y+l*o.z;return u>0?(e-((t-n.eye.x)*o.x+(i-n.eye.y)*o.y+(s-n.eye.z)*o.z))/u:1/0}function Up(n,e,t,i){return Math.hypot(e-n.eye.x,t-n.eye.y,i-n.eye.z)}function My(n,e,t,i,s,r=0){const a=n.cpu.cellMetres,l=xy(n,t,i,s,r);if(!(l>0))return 0;const o=n.origin,u=Ip(n,e);let c=e.objects?e.objects.firstHit(lt.ox,lt.oy,lt.oz,lt.dx,lt.dy,lt.dz,l,u?1:0):1/0;if(u){const p=n.view.elements,m=p[0]*Ot.x+p[4]*Ot.y+p[8]*Ot.z+p[12],y=p[1]*Ot.x+p[5]*Ot.y+p[9]*Ot.z+p[13],_=p[2]*Ot.x+p[6]*Ot.y+p[10]*Ot.z+p[14],w=-_;if(w>n.near){let S=m*Lp(n,m,y,_,r)/w,M=y/w;r>0&&($u(n,S,M,1,Zi),S=Zi.x,M=Zi.y);const x=Np(n,Fp(n,e,S,M,w),lt.ox,lt.oy,lt.oz,lt.dx,lt.dy,lt.dz);x>=0&&x<c&&(c=x)}}const f=Math.min(l,c),h=lt.dx*n.forward.x+lt.dy*n.forward.y+lt.dz*n.forward.z,d=lt.fromEye;let g=d?Ai.rayStartMetres:0,v=0;for(;g<f&&v++<Ai.rayMaxSteps;){const p=lt.ox+lt.dx*g,m=lt.oy+lt.dy*g,y=lt.oz+lt.dz*g,_=(p+o.x)/a,w=(y+o.y)/a,S=d?g:Up(n,p,m,y);if(xu(e,_,w,m,S,!0))return(l-g)*h/a;g+=Ai.rayStepMetres+S*Ai.rayStepGrowth}return c<l?(l-c)*h/a:0}function _y(n){const e=Dn.project;return e.visibleToleranceCells+e.visibleToleranceShare*Math.abs(n)}function Sy(n,e,t,i,s){if(!Number.isFinite(t)||!Number.isFinite(i)||!(t>=0&&i>=0&&t<n.outW&&i<n.outH))return null;const r=n.cpu.cellMetres,a=n.viewProjInverse.elements,l=t/n.outW*2-1,o=1-i/n.outH*2,u=(D,C)=>{const I=a[3]*l+a[7]*o+a[11]*D+a[15];return Math.abs(I)>0?(C.x=(a[0]*l+a[4]*o+a[8]*D+a[12])/I,C.y=(a[1]*l+a[5]*o+a[9]*D+a[13])/I,C.z=(a[2]*l+a[6]*o+a[10]*D+a[14])/I,!0):!1},c=fs,f=ta;if(!u(-1,c)||!u(1,f))return null;const h=ts(n),d=Ip(n,e);let g=0,v=0;if(h||d){const D=n.view.elements,C=D[0]*c.x+D[4]*c.y+D[8]*c.z+D[12],I=D[1]*c.x+D[5]*c.y+D[9]*c.z+D[13],U=-(D[2]*c.x+D[6]*c.y+D[10]*c.z+D[14]);if(!(U>0))return null;g=C/U,v=I/U}if(h&&!qu(n,g,v,n.near,n.far,c,f))return null;let p=f.x-c.x,m=f.y-c.y,y=f.z-c.z;const _=Math.hypot(p,m,y);if(!(_>0))return null;p/=_,m/=_,y/=_;const w=n.origin,S=Math.min(_,n.far-n.near+Ai.rayStartMetres);let M=e.objects?e.objects.firstHit(c.x,c.y,c.z,p,m,y,S,d?1:0):1/0;if(d){const D=Np(n,Fp(n,e,g,v,n.far),c.x,c.y,c.z,p,m,y);D>=0&&D<M&&(M=D)}const x=Math.min(S,M);let b=0,A=0,E=c.x,P=c.y,R=c.z;for(;b<x&&A++<Ai.rayMaxSteps;){const D=c.x+p*b,C=c.y+m*b,I=c.z+y*b,U=(D+w.x)/r,O=(I+w.y)/r,W=h?Up(n,D,C,I):n.near+b;if(xu(e,U,O,C,W,!1)){let k=0,G=1,Z=E,me=P,le=R;for(let $=0;$<Ai.bisectSteps;$++){const K=(k+G)/2,j=Z+(D-Z)*K,V=me+(C-me)*K,B=le+(I-le)*K;xu(e,(j+w.x)/r,(B+w.y)/r,V,W,!1)?G=K:k=K}const q=(k+G)/2;return s.x=(Z+(D-Z)*q+w.x)/r,s.y=(le+(I-le)*q+w.y)/r,s.z=me+(C-me)*q,s}E=D,P=C,R=I,b+=Ai.rayStepMetres+W*Ai.rayStepGrowth}return M<S?(s.x=(c.x+p*M+w.x)/r,s.y=(c.z+y*M+w.y)/r,s.z=c.y+m*M,s):null}const zi=Ge.project,ls={x:0,y:0,z:0};class yy{constructor(e,t=()=>performance.now(),i=zi.marchBudgetMs){this.host=e,this.now=t,this.budgetMs=i}frame=0;spentMs=0;marched=0;pendingCount=0;cache=new Map;wanted=[];carryOver(){this.spentMs=0,this.marched=0,this.pendingCount=0;const e=this.wanted;if(e.length>0){e.sort(wy);for(const t of e)t.wanted=!1,!(this.budgetMs>0&&this.spentMs>=this.budgetMs)&&this.marchInto(t);e.length=0}if(this.frame++,this.frame%zi.evictAfterFrames===0)for(const[t,i]of this.cache)this.frame-i.read>zi.evictAfterFrames&&this.cache.delete(t)}point(e,t,i,s,r,a,l,o=!1){return new Ry(this,e,t,i,s,r,a,l,o)}resolve(e,t,i,s,r=!1){const a=Math.round(e/zi.keyCells),l=Math.round(t/zi.keyCells),o=Math.round(i/zi.keyMetres);let u=Ty(a,l,o),c=this.cache.get(u);for(;c&&(c.kx!==a||c.ky!==l||c.kz!==o||c.subj!==r);)u=u+1|0,c=this.cache.get(u);const f=!!c&&this.valid(c);if(c&&(c.read=this.frame),c&&f&&this.frame-c.frame<zi.refreshAgeFrames){s.behind=c.behind,s.pending=!1;return}if(this.budgetMs<=0||this.spentMs<this.budgetMs){c||(c={x:e,y:t,z:i,subj:r,behind:NaN,ex:0,ey:0,ez:0,frame:-1,read:this.frame,kx:a,ky:l,kz:o,wanted:!1,starved:!1},this.cache.set(u,c)),this.marchInto(c),s.behind=c.behind,s.pending=!1;return}if(c||(c={x:e,y:t,z:i,subj:r,behind:NaN,ex:0,ey:0,ez:0,frame:-1,read:this.frame,kx:a,ky:l,kz:o,wanted:!1,starved:!1},this.cache.set(u,c)),c.wanted||(c.wanted=!0,this.wanted.push(c)),f){c.starved=!1,s.behind=c.behind,s.pending=!1;return}c.starved=!0,this.pendingCount++,s.behind=NaN,s.pending=!0}valid(e){if(e.frame<0||this.frame-e.frame>zi.maxAgeFrames)return!1;this.host.eye(ls);const t=Math.hypot(ls.x-e.ex,ls.y-e.ey,ls.z-e.ez);if(t===0)return!0;const i=this.host.distance(e.x,e.y,e.z);return i>0&&t/i<=zi.maxParallaxRad}marchInto(e){const t=this.now();let i;try{i=this.host.march(e.x,e.y,e.z,e.subj)}catch(s){this.host.fault(`the in-sight march failed: ${s instanceof Error?s.message:String(s)}`),i=NaN}this.spentMs+=this.now()-t,this.marched++,this.host.eye(ls),e.behind=i,e.ex=ls.x,e.ey=ls.y,e.ez=ls.z,e.frame=this.frame,e.starved=!1}}function wy(n,e){return n.starved===e.starved?n.frame-e.frame:n.starved?-1:1}const by=73856093,Ey=19349663,Ay=83492791;function Ty(n,e,t){return Math.imul(n,by)^Math.imul(e,Ey)^Math.imul(t,Ay)|0}const Jl={behind:NaN,pending:!1};class Ry{constructor(e,t,i,s,r,a,l,o,u=!1){this.owner=e,this.x=t,this.y=i,this.depth=s,this.pixelsPerCell=r,this.wx=a,this.wy=l,this.wz=o,this.subj=u}done=!1;b=NaN;pend=!1;visSet;resolve(){this.done||(this.done=!0,this.owner.resolve(this.wx,this.wy,this.wz,Jl,this.subj),this.b=Jl.behind,this.pend=Jl.pending)}get behindCells(){return this.resolve(),this.b}set behindCells(e){this.done=!0,this.b=e,this.pend=!1}get visible(){return this.visSet!==void 0?this.visSet:(this.resolve(),!this.pend&&this.b<=_y(this.depth))}set visible(e){this.visSet=e}get pending(){return this.resolve(),this.pend}}function Sa(){return re.data.chunkMetres*re.blockChunks}function Ar(){return Math.min(Ge.stream.maskSide,Cy)}function Op(n,e){const t=Sa(),i=Ar();return{bx:Math.min(i-1,Math.max(0,Math.floor(n/t))),by:Math.min(i-1,Math.max(0,Math.floor(e/t)))}}const Dr=5,Cy=1<<Dr;function Qn(n,e){return n|e<<Dr}function Py(n){const e=(1<<Dr)-1;return{bx:n&e,by:n>>Dr&e}}function Ly(){const n=(1<<Dr)-1;return`{
  int bc = int(aBlock + 0.5);
  if (texelFetch(uResident, ivec2(bc & ${n}, (bc >> ${Dr}) & ${n}), 0).r > 0.5) gl_Position = vec4(0.0, 0.0, 2.0, 1.0);
}`}function kp(){const n=re.data.window,e=re.blockChunks;return{bx0:Math.floor(n.cx0/e),bx1:Math.floor(n.cx1/e),by0:Math.floor(n.cy0/e),by1:Math.floor(n.cy1/e)}}const Yi=Ar(),Vs=new Uint8Array(Yi*Yi),Di=new Kn(Vs,Yi,Yi,$s,ln);Di.minFilter=Tt;Di.magFilter=Tt;Di.generateMipmaps=!1;Di.flipY=!1;Di.unpackAlignment=1;Di.needsUpdate=!0;const Dy={uResident:{value:Di}};let ol=0;function Iy(){return ol}function Fy(){return Vs}function Ny(){Vs.fill(0);const n=kp();for(let e=n.by0;e<=n.by1;e++)for(let t=n.bx0;t<=n.bx1;t++)Vs[e*Yi+t]=255;Di.needsUpdate=!0,ol++}function Hf(n,e,t){if(n<0||e<0||n>=Yi||e>=Yi)return;const i=t?255:0;Vs[e*Yi+n]!==i&&(Vs[e*Yi+n]=i,Di.needsUpdate=!0,ol++)}function Uy(){Vs.fill(0),Di.needsUpdate=!0,ol++}Ny();const Oy=Hi,pn=re.plain,li=n=>new Ke().setHex(n),Ir={uNight:{value:0},uLitShare:{value:pn.litShare},uLitOther:{value:pn.litShare},uWindowGlow:{value:pn.windowGlow},uEmissiveGain:{value:pn.emissiveGain},uNightLift:{value:pn.actorNightLift},uFarCell:{value:new qe(pn.farWindowMetres[0],pn.farWindowMetres[1])},uGlassDay:{value:li(pn.glassDay)},uGlassSky:{value:li(pn.glassSky)},uTrim0:{value:li(pn.trimColours[0])},uTrim1:{value:li(pn.trimColours[1])},uTrim2:{value:li(pn.trimColours[2])},uDoor:{value:li(pn.doorColour)},uShopGlass:{value:li(pn.shopGlass)},uShopGlow:{value:li(pn.shopGlow)},uWin0:{value:li(pn.windowColours[0])},uWin1:{value:li(pn.windowColours[1])},uWin2:{value:li(pn.windowColours[2])}},ll=Qi(0,0,0),Yu=n=>n-Math.floor(n),ky=Yu(ll-Qi(-1,0,0)),By=Yu(ll-Qi(0,-1,0)),zy=Yu(ll-Qi(0,0,-1)),Mt=re.facade,yi=re.pixel.masonry,ft=n=>Number.isInteger(n)?n.toFixed(1):String(n),Qt=n=>`vec${n.length}(${n.map(ft).join(", ")})`,Ql=new Ke().setHex(Mt.laceIron),ec=n=>{const e=new Ke().setHex(n);return[e.r,e.g,e.b]},bo=()=>!!re.smooth.on,Gy=()=>[["F_PARAPET_MIX",ft(Mt.parapetTrimMix)],["F_CORNICE",ft(Mt.corniceMetres)],["F_MIN_STOREY",ft(Mt.minStoreyMetres)],["F_MIN_BAY",ft(Mt.minBayMetres)],["F_WARM",ft(Mt.warmShare)],["F_PALE",ft(Mt.paleShare)],["F_SKY_BASE",ft(Mt.glassSkyBase)],["F_SKY_HASH",ft(Mt.glassSkyHash)],["F_DOOR_EVERY",ft(Mt.doorEvery)],["F_SHOP_LIT",ft(Mt.shopLitShare)],["F_DOOR_GLOW",ft(Mt.doorGlow)],["F_SHOP_GLOW",ft(Mt.shopGlow)],["F_HDOOR_MAX",ft(Mt.houseDoorMaxMetres)],["F_HDOOR_SHARE",ft(Mt.houseDoorShare)],["F_MULLION",ft(Mt.mullionMetres)],["F_CURTAIN_MIX",ft(Mt.curtainTrimMix)],["F_POINT_OFF",ft(Mt.pointedOffset)],["F_POINT_R",ft(Mt.pointedRadius)],["F_FRAME",ft(Mt.frameMetres)],["F_LACE_H",ft(Mt.laceMetres)],["F_LACE_PER_M",ft(Mt.lacePerMetre)],["F_LACE_HOLE",ft(Mt.laceHoleShare)],["F_LOD0",ft(bo()?re.smooth.facadeLod[0]:Mt.lodFrom)],["F_LOD1",ft(bo()?re.smooth.facadeLod[1]:Mt.lodTo)],["F_LOD_GLASS",ft(Mt.lodGlass)],["M_BRICK_RG",ft(yi.brickRedOverGreen)],["M_BRICK_RB",ft(yi.brickRedOverBlue)],["M_STONE_RB",ft(yi.stoneRedOverBlue)],["M_STONE_GB",ft(yi.stoneGreenOverBlue)],["M_JOINT_DARK",ft(yi.jointDark)],["GF_BAY_STRIDE",ft(gl.bayStride)],["GF_STOREY_STRIDE",ft(gl.storeyStride)],["GF_UNIT",ft(gl.unitMetres)],["GF_DOOR_STEP",ft(Hi.doorStepMetres)],["GF_MARGIN",ft(Hi.marginMetres)],["GF_PIER_SPACING",ft(Hi.pierSpacingMetres)],["GF_PIER_W",ft(Hi.pierWidthMetres)],["GF_STRETCH",ft(1)],["GF_WALK_DOOR_H",ft(Oy.walkOutDoorMetres)],["GF_SLOPE_MAX",ft(Hi.doorSlopeMax)]].map(([n,e])=>`const float ${n} = ${e};`).join(`
`)+`
`+[["GF_STONE",String(xl.stone)],["GF_WALK_OUT",String(xl.walkOut)],["GF_PIERS",String(xl.piers)]].map(([n,e])=>`const int ${n} = ${e};`).join(`
`)+`
`+[["F_SDOOR",Qt(Mt.shopDoor)],["F_SGLASS",Qt(Mt.shopGlass)],["F_SFRAME",Qt(Mt.shopFrame)],["F_HDOOR",Qt(Mt.houseDoor)],["F_FAN",Qt(Mt.fanlight)],["F_SPANDREL",Qt(Mt.spandrel)],["F_PUNCHED",Qt(Mt.punched)],["F_TERRACE",Qt(Mt.terrace)],["F_HOUSE",Qt(Mt.house)],["F_SILL",Qt(Mt.sillMetres)],["F_LACE_OPEN",Qt(Mt.laceOpen)],["F_LACE_IRON",Qt([Ql.r,Ql.g,Ql.b])],["GF_PLINTH",Qt(ec(vl[Hi.plinthColour]))],["GF_PIER",Qt(ec(vl[Hi.pierColour]))],["GF_SUBFLOOR",Qt(ec(vl[Hi.subfloorColour]))],["M_BRICK",Qt(yi.brickMetres)],["M_STONE",Qt(yi.stoneMetres)],["M_RENDER",Qt(yi.renderMetres)],["M_VAR",Qt(yi.variation)],["M_LOD",Qt(bo()?re.smooth.masonryLod:yi.lodPixels)]].map(([n,e])=>`const ${e.slice(0,4)} ${n} = ${e};`).join(`
`),Hy=()=>Gy()+`
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
  // The pavement's rise along the wall, metres a metre of u (the pavement in f0.w is interpolated along the wall), so the
  // walk-out stretch's door can stand level from its bay centre's pavement, as Classic reads a door bay's once. Taken
  // here with the wall's other derivatives; held to the ground fit's door slope. GF_STRETCH is a constant, so with the
  // switch off the compiler drops it (about ten operations a facade pixel with it on).
  float footRise = 0.0;
  if (GF_STRETCH > 0.5) {
    vec2 duS = vec2(dFdx(u), dFdy(u));
    footRise = clamp(dot(vec2(dFdx(foot), dFdy(foot)), duS) / max(dot(duS, duS), 1e-8), -GF_SLOPE_MAX, GF_SLOPE_MAX);
  }
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
  float bi = floor(u / bay);
  // A bay's doors decide from the pavement at its centre (footC), once, as Classic reads a door bay's: so no door is cut
  // part-way across a bay where the pavement slopes. With walkOutStretch off, footRise is 0 and footC is the pixel's own.
  float footC = foot + footRise * ((bi + 0.5) * bay - u);
  bool doorOk = footC >= -GF_DOOR_STEP;
  vec2 q = vec2(fract(u / bay) * bay, fv);       // metres within the bay and the floor
  bool house = style == 4, terrace = style == 2, curtain = style == 1;
  bool shopWall = street && !house && !terrace && !curtain;
  // walkOutStretch (the owner's choice, 25 Nov): on a walk-out wall whose pavement is more than GF_DOOR_STEP under the
  // floor and where no storey line meets it within the step, the lowest storey stretches down to the pavement, its door
  // there, GF_WALK_DOOR_H tall from the pavement up, every other bay. As Classic's at the building fix's head (3cf7216a3:
  // ad7e4dd8, 3716456e6, 2eec42570), the door crosses the floor line on every wall but a curtain wall, which has none.
  // On a shop-front wall, above the floor line it takes only the door's own columns, and the shop glass stays on either
  // side. Its top stands level at footC + GF_WALK_DOOR_H, and its foot follows the pavement.
  bool doorCols = q.x >= bay * F_HDOOR.x - aa.x && q.x < bay * F_HDOOR.y + aa.x;
  bool sdoor = GF_STRETCH > 0.5 && baseKind == GF_WALK_OUT && footC < -GF_DOOR_STEP && !curtain && (v < 0.0 || !shopWall || doorCols) && ceil((footC - GF_MARGIN) / storey) * storey - footC > GF_DOOR_STEP && v >= foot && v < footC + GF_WALK_DOOR_H && mod(bi, 2.0) < 1.0;
  vec3 col = wall;
  float glow = 0.0;
  // Curtain walls light on the towers' curve, punched windows on the homes' (today's renderer's split: towers and banded
  // offices on litTower, other buildings on litOther).
  float lit = step(fh1(vec3(seed, fl, bi)), (curtain ? uLitShare : uLitOther) * uNight);
  vec3 litCol = fh1(vec3(bi, seed, fl)) < F_WARM ? uWin0 : (fh1(vec3(fl, bi, seed)) < F_PALE ? uWin1 : uWin2);
  vec3 glass = mix(uGlassDay, uGlassSky, F_SKY_BASE + F_SKY_HASH * fh1(vec3(seed, bi * 0.37, fl * 0.71)));
${bo()?`  // Smooth B: where the windows have fully given way to the wall's average (by day), stop here; the result is the same.
  if (smoothstep(F_LOD0, F_LOD1, max(aa.x / bay, aa.y / storey)) * (1.0 - uNight) >= 1.0) return vec4(mix(mix(wall, glass, F_LOD_GLASS * share), trim, cornice), 0.0);
`:""}  if (sdoor) {
    // The stretched door first: above the floor line it stands where the shop front or the front door would.
    float w = box2(vec2(q.x, v), vec2(bay * F_HDOOR.x, foot), vec2(bay * F_HDOOR.y, footC + GF_WALK_DOOR_H), aa);
    col = mix(col, uDoor, w);
  } else if (ground && shopWall) {
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
  } else if (walkOut && fl * storey >= footC - GF_MARGIN && fl * storey <= footC + GF_DOOR_STEP && mod(bi, 2.0) < 1.0) {
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
`,Bp=new WeakMap,cl={uRigInv:{value:new et},uRigVoxel:{value:1}};function oa(n){return Bp.get(n)}function vu(n,e){const t=n.onBeforeCompile,i=e.dissolve?{share:{value:1},seed:{value:0},pivot:{value:new z}}:null;return i&&Bp.set(n,i),n.onBeforeCompile=(s,r)=>{t?.call(n,s,r),Object.assign(s.uniforms,Ir),e.blockMask&&Object.assign(s.uniforms,Dy),e.rigCells&&Object.assign(s.uniforms,cl),i&&(s.uniforms.uDissolveShare=i.share,s.uniforms.uDissolveSeed=i.seed,s.uniforms.uDissolvePivot=i.pivot);let a=s.vertexShader,l=s.fragmentShader;const o=[],u=[],c=[];e.dissolve&&(o.push("varying vec3 vVoxPos; varying vec3 vVoxNrm;"+(e.rigCells?" uniform mat4 uRigInv; uniform float uRigVoxel;":"")),u.push("varying vec3 vVoxPos; varying vec3 vVoxNrm; uniform float uDissolveShare; uniform float uDissolveSeed; uniform vec3 uDissolvePivot;"),c.push(e.rigCells?"{ vec4 rp = uRigInv * (modelMatrix * vec4(position, 1.0)); vVoxPos = vec3(rp.x, -rp.z, rp.y) / uRigVoxel; vVoxNrm = vec3(0.0); }":"vVoxPos = position; vVoxNrm = normal;")),e.ao&&(o.push("attribute float ao; varying float vAo;"),u.push("varying float vAo;"),c.push("vAo = ao;")),e.facade&&(o.push("attribute vec4 fac0; attribute vec4 fac1; varying vec4 vFac0; flat varying vec4 vFac1;"),u.push("varying vec4 vFac0; flat varying vec4 vFac1;"),c.push("vFac0 = fac0; vFac1 = fac1;")),e.dayNight&&(o.push("attribute vec3 col2; attribute float glow; varying float vGlow; uniform float uNight;"),u.push("varying float vGlow;"),c.push("{ float gb = floor(glow * 3.0 + 0.5); float dayG = mod(gb, 2.0); float nightG = floor(gb / 2.0); vColor.rgb = mix(vColor.rgb, col2, step(0.5, uNight)); vGlow = mix(dayG, nightG, step(0.5, uNight)); }")),e.srgbColours&&c.push("vColor.rgb = pow(vColor.rgb, vec3(2.2));"),e.blockMask&&o.push("attribute float aBlock; uniform sampler2D uResident;"),e.farWindows&&(o.push("varying vec3 vFarPos; varying vec3 vFarN;"),u.push("varying vec3 vFarPos; varying vec3 vFarN; uniform vec2 uFarCell;"),c.push("vFarPos = (modelMatrix * vec4(position, 1.0)).xyz; vFarN = normal;")),u.push("uniform float uNight; uniform float uLitShare; uniform float uLitOther; uniform float uWindowGlow; uniform float uEmissiveGain; uniform float uNightLift;","uniform vec3 uGlassDay; uniform vec3 uGlassSky; uniform vec3 uTrim0; uniform vec3 uTrim1; uniform vec3 uTrim2; uniform vec3 uDoor; uniform vec3 uShopGlass; uniform vec3 uShopGlow; uniform vec3 uWin0; uniform vec3 uWin1; uniform vec3 uWin2;"),e.facade&&u.push(Hy()),a=a.replace("#include <common>",`#include <common>
`+o.join(`
`)).replace("#include <color_vertex>",`#include <color_vertex>
`+c.join(`
`));const f=[];e.facade&&f.push("vec4 fcd = facadeColour(diffuseColor.rgb, vFac0, vFac1); diffuseColor.rgb = fcd.rgb; float facadeGlow = fcd.a;"),e.ao&&e.aoSteps?f.push(`diffuseColor.rgb *= max(floor(vAo * ${ft(e.aoSteps)} + 0.5) / ${ft(e.aoSteps)}, ${ft(e.aoFloor??0)});`):e.ao&&e.aoFloor!==void 0?f.push(`diffuseColor.rgb *= max(vAo, ${ft(e.aoFloor)});`):e.ao&&f.push("diffuseColor.rgb *= vAo;");const h=[];e.facade&&h.push("totalEmissiveRadiance += diffuseColor.rgb * facadeGlow * uWindowGlow;"),e.dayNight&&h.push("totalEmissiveRadiance += diffuseColor.rgb * vGlow * uEmissiveGain;"),e.nightLift&&h.push("totalEmissiveRadiance += diffuseColor.rgb * uNight * uNightLift;"),e.farWindows&&h.push("if (abs(vFarN.y) < 0.5 && uNight > 0.01) { vec2 c = floor(vec2(vFarPos.x + vFarPos.z, vFarPos.y) / uFarCell); float h = fract(sin(dot(c, vec2(12.9898, 78.233))) * 43758.5453); vec2 f = fract(vec2(vFarPos.x + vFarPos.z, vFarPos.y) / uFarCell); float w = step(0.25, f.x) * step(f.x, 0.75) * step(0.3, f.y) * step(f.y, 0.8); totalEmissiveRadiance += uWin0 * w * step(h, uLitShare * uNight) * uWindowGlow; }");const d=e.dissolve?"if (uDissolveShare < 1.0) { vec3 g = floor(vVoxPos + uDissolvePivot - 0.5 * vVoxNrm); float r = fract("+ft(ll)+" + g.x * "+ky.toPrecision(17)+" + g.y * "+By.toPrecision(17)+" + g.z * "+zy.toPrecision(17)+"); if (fract(r + uDissolveSeed) >= uDissolveShare) discard;}":"";l=l.replace("#include <common>",`#include <common>
`+u.join(`
`)).replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
`+d).replace("#include <color_fragment>",`#include <color_fragment>
`+f.join(`
`)).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
`+h.join(`
`)),"uWarp"in s.uniforms||Object.assign(s.uniforms,ni),a=js(a),e.blockMask&&(a=a.replace("#include <fog_vertex>",`#include <fog_vertex>
`+Ly())),s.vertexShader=a,s.fragmentShader=l},n.customProgramCacheKey=()=>`surface-${e.srgbColours?1:0}${e.ao?1:0}${e.facade?1:0}${e.dayNight?1:0}${e.nightLift?1:0}${e.farWindows?1:0}${e.dissolve?1:0}${e.rigCells?"r":""}${e.blockMask?"k":""}-${e.aoSteps??0}-${n.type}`,n}const Wn={far:1,near:2,landmarks:3,actors:4},zp={skip:!1},Mu=5;function Rs(n){const e=n.onBeforeCompile;return n.onBeforeCompile=(t,i)=>{e?.call(n,t,i),"uWarp"in t.uniforms||Object.assign(t.uniforms,ni),t.vertexShader=js(t.vertexShader)},n}class Wy{id="plain";mats=new Map;lampHead;lampPool;constructor(e){const t=i=>vu(new Cn({vertexColors:i.vertexColors}),{srgbColours:i.srgb,ao:i.ao,facade:i.facade,dayNight:i.dayNight,nightLift:i.nightLift,farWindows:i.farWindows,blockMask:i.blockMask});e.colorSpace=Sn,this.mats.set("ground",this.groundMaterial(e)),this.mats.set("building",t({srgb:!0,ao:!0,facade:!0,dayNight:!1,vertexColors:!0})),this.mats.set("road",t({srgb:!0,ao:!0,facade:!1,dayNight:!1,vertexColors:!0})),this.mats.set("farGround",t({srgb:!0,ao:!0,facade:!1,dayNight:!1,vertexColors:!0,blockMask:!0})),this.mats.set("farBuilding",t({srgb:!0,ao:!0,facade:!1,dayNight:!1,vertexColors:!0,farWindows:!0,blockMask:!0})),this.mats.set("voxel",t({srgb:!0,ao:!0,facade:!1,dayNight:!0,vertexColors:!0})),this.mats.set("part",t({srgb:!0,ao:!1,facade:!1,dayNight:!1,vertexColors:!0,nightLift:!0})),this.mats.set("walker",this.mats.get("part")),this.mats.set("crown",Rs(new Cn({color:16777215}))),this.mats.set("trunk",Rs(new Cn({color:re.props.trunkColour}))),this.mats.set("lampPole",Rs(new Cn({color:re.props.lampPoleColour}))),this.lampHead=Rs(new Cn({color:re.props.lampHeadColour,emissive:new Ke(re.props.lampHeadColour)})),this.mats.set("lampHead",this.lampHead),this.lampPool=Rs(new Ko({map:Vy(),color:re.props.lampPoolColour,transparent:!0,blending:Co,depthWrite:!1,fog:!0,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4})),this.mats.set("lampPool",this.lampPool),this.mats.set("water",Rs(new Qg({color:re.water.colour,shininess:re.water.shininess,specular:new Ke(re.water.specular,re.water.specular,re.water.specular)})));for(const i of["road"]){const s=this.mats.get(i);s.polygonOffset=!0,s.polygonOffsetFactor=0,s.polygonOffsetUnits=re.plain.roadDepthUnits}}groundMaterial(e){return e.colorSpace=Sn,Rs(new Cn({map:e}))}material(e){return this.mats.get(e)}update(e){this.lampHead.emissiveIntensity=e,this.lampPool.opacity=e*re.props.lampPoolStrength,this.lampPool.visible=e>.01}render(e,t,i,s,r){i.layers.mask=r?s|1:s,e.autoClear=r,e.render(t,i)}}function Vy(){const e=new Uint8Array(16384);for(let i=0;i<64;i++)for(let s=0;s<64;s++){const r=Math.hypot(s+.5-32,i+.5-32)/32,a=Math.round(255*Math.max(0,1-r)**2);e.set([a,a,a,255],(i*64+s)*4)}const t=new Kn(e,64,64,On);return t.needsUpdate=!0,t}const _u=Object.keys(Wn),zn={looks:null,mix:[],has:[],steps:[]};function $y(n){const e=new Map;for(const[t,i]of Object.entries(Wn)){const s=n.has(re.look.mix[t])?re.look.mix[t]:"plain";e.set(s,(e.get(s)??0)|1<<i)}return[...e].sort((t,i)=>+!!n.get(i[0]).lowRes-+!!n.get(t[0]).lowRes).map(([t,i])=>{const s=n.get(t);return{id:t,look:s,lowRes:!!s.lowRes,mask:i}})}function Xy(n){if(zn.looks!==n)return!1;const e=re.look.mix;for(let t=0;t<_u.length;t++){const i=e[_u[t]];if(i!==zn.mix[t]||n.has(i)!==zn.has[t])return!1}for(let t=0;t<zn.steps.length;t++){const i=zn.steps[t];if(n.get(i.id)!==i.look||!!i.look.lowRes!==i.lowRes)return!1}return!0}function qy(n,e){if(Xy(n))return zn.steps;zn.looks=n,zn.mix.length=0,zn.has.length=0;for(const t of _u){const i=re.look.mix[t];zn.mix.push(i),zn.has.push(n.has(i))}return zn.steps=$y(n),Yy(zn.steps,e),zn.steps}function Yy(n,e){if(!e||n.every(i=>i.lowRes))return;e.getContext?.()?.getContextAttributes?.()?.depth===!1&&console.warn("flyby: the look mix draws a full-resolution look, but the canvas was made without a depth buffer (the mix changed after the context was made); its layers will not sort")}function jy(n,e,t,i){const s=qy(n,e);e.shadowMap.autoUpdate=!1,e.shadowMap.needsUpdate=!zp.skip;for(let r=0;r<s.length;r++)s[r].look.render(e,t,i,s[r].mask,r===0);i.layers.enableAll()}class Ky{constructor(e,t){this.m=e,this.night=t}p=[];n=[];c=[];c2=[];g=[];o=[];i=[];vertex(e,t,i,s,r,a,l,o){const u=this.p.length/3,c=this.m;this.p.push(e-c.pivot.x,t-c.pivot.y,i-c.pivot.z),this.n.push(s,r,a);const f=c.palette[l]??0,h=this.night.palette[l]??f;return this.c.push(f>>16&255,f>>8&255,f&255),this.c2.push(h>>16&255,h>>8&255,h&255),this.g.push((c.emissive[l]?1:0)|(this.night.emissive[l]?2:0)),this.o.push(o),u}done(){return{pos:new Float32Array(this.p),nrm:new Float32Array(this.n),col:new Uint8Array(this.c),col2:new Uint8Array(this.c2),glow:new Uint8Array(this.g),ao:new Uint8Array(this.o),idx:new Uint32Array(this.i)}}}const Zy=re.landmarks.aoBytes;function Jy(n,e=n,t){const{sx:i,sy:s,sz:r,voxels:a}=n,l=[i,s,r],o=(d,g,v)=>d<0||g<0||v<0||d>=i||g>=s||v>=r?0:a[d+i*(g+s*v)],u=t?(d,g,v)=>d<0||g<0||v<0||d>=i||g>=s||v>=r?0:t[d+i*(g+s*v)]:o,c=new Ky(n,e),f=[0,0,0],h=[0,0,0];for(let d=0;d<3;d++){const g=(d+1)%3,v=(d+2)%3,p=l[g],m=l[v],y=new Int32Array(p*m),_=new Uint8Array(p*m*4);for(const w of[1,-1])for(let S=0;S<l[d];S++){y.fill(-1);for(let M=0;M<m;M++)for(let x=0;x<p;x++){h[d]=S,h[g]=x,h[v]=M;const b=o(h[0],h[1],h[2]);if(!b||(f[0]=h[0],f[1]=h[1],f[2]=h[2],f[d]+=w,o(f[0],f[1],f[2])))continue;const A=(R,D)=>{const C=[f[0],f[1],f[2]];C[g]+=R;const I=u(C[0],C[1],C[2])?1:0,U=[f[0],f[1],f[2]];U[v]+=D;const O=u(U[0],U[1],U[2])?1:0,W=[f[0],f[1],f[2]];W[g]+=R,W[v]+=D;const k=u(W[0],W[1],W[2])?1:0;return I&&O?0:3-(I+O+k)},E=(M*p+x)*4;_[E]=A(-1,-1),_[E+1]=A(1,-1),_[E+2]=A(1,1),_[E+3]=A(-1,1);const P=_[E]===_[E+1]&&_[E]===_[E+2]&&_[E]===_[E+3];y[M*p+x]=P?b|_[E]<<8:b|4096}for(let M=0;M<m;M++)for(let x=0;x<p;){const b=y[M*p+x];if(b<0){x++;continue}const A=(b&4096)===0;let E=1,P=1;if(A){for(;x+E<p&&y[M*p+x+E]===b;)E++;e:for(;M+P<m;){for(let le=0;le<E;le++)if(y[(M+P)*p+x+le]!==b)break e;P++}}const R=b&255,D=(M*p+x)*4,C=[_[D],_[D+1],_[D+2],_[D+3]],I=w>0?S+1:S,U=(le,q)=>{const $=[0,0,0];return $[d]=I,$[g]=le,$[v]=q,$},O=[U(x,M),U(x+E,M),U(x+E,M+P),U(x,M+P)],W=[0,0,0];W[d]=w;const k=O.map((le,q)=>c.vertex(le[0],le[1],le[2],W[0],W[1],W[2],R,Zy[C[q]])),G=C[0]+C[2]<C[1]+C[3],Z=w>0,me=(le,q,$)=>Z?c.i.push(k[le],k[q],k[$]):c.i.push(k[le],k[$],k[q]);G?(me(1,2,3),me(1,3,0)):(me(0,1,2),me(0,2,3));for(let le=0;le<P;le++)for(let q=0;q<E;q++)y[(M+le)*p+x+q]=-1;x+=E}}}return c.done()}const ur=8192;function Qy(n,e=Number.POSITIVE_INFINITY){const t=n.pos.length/12;if(!(t>=1)||n.idx.length!==t*6)return n;const i=n.pos[0],s=n.pos[1],r=n.pos[2],a=(_,w)=>Math.round(n.pos[_*3+w]-(w===0?i:w===1?s:r)),l=[i,s,r],o=[],u=[],c=[],f=[],h=[0,0,0];for(let _=0;_<t;_++){const w=_*4,S=n.idx[_*6],x=(n.idx[_*6+1]-S+4)%4===1,b=[a(w,0),a(w,1),a(w,2)],A=[a(w+1,0),a(w+1,1),a(w+1,2)],E=[a(w+3,0),a(w+3,1),a(w+3,2)],P=A[0]!==b[0]?0:A[1]!==b[1]?1:2,R=E[0]!==b[0]?0:E[1]!==b[1]?1:2,D=(O,W)=>{const k=[O],G=W>O?1:-1;if(Number.isFinite(e)&&e>=1)for(let Z=O+G;Z!==W;Z+=G)(Z%e+e)%e===0&&k.push(Z);return k.push(W),k},C=D(b[P],A[P]),I=D(b[R],E[R]),U=C.length===2&&I.length===2;for(let O=0;O+1<I.length;O++)for(let W=0;W+1<C.length;W++){U?o.push(w,w+1,w+2,w+3):o.push(w,w,w,w),u.push(x),c.push(U?_:-1);for(const[k,G]of[[W,O],[W+1,O],[W+1,O+1],[W,O+1]])h[0]=b[0],h[1]=b[1],h[2]=b[2],h[P]=C[k],h[R]=I[G],f.push(h[0],h[1],h[2])}}const d=u.length;for(let _=0;_<f.length;_++)if(Math.abs(f[_])>=ur/2)return n;const g=(_,w,S)=>((_+ur/2)*ur+(w+ur/2))*ur+(S+ur/2),v=new Set;for(let _=0;_<f.length;_+=3)v.add(g(f[_],f[_+1],f[_+2]));const p={p:[],n:[],c:[],c2:[],g:[],o:[],i:[]},m=(_,w,S,M)=>{const x=p.p.length/3;return p.p.push(w+l[0],S+l[1],M+l[2]),p.n.push(n.nrm[_*3],n.nrm[_*3+1],n.nrm[_*3+2]),p.c.push(n.col[_*3],n.col[_*3+1],n.col[_*3+2]),p.c2.push(n.col2[_*3],n.col2[_*3+1],n.col2[_*3+2]),p.g.push(n.glow[_]),p.o.push(n.ao[_]),x},y=[];for(let _=0;_<d;_++){const w=o[_*4],S=_*12;y.length=0;let M=!1;for(let b=0;b<4;b++){const A=S+b*3,E=S+(b+1)%4*3,P=f[A],R=f[A+1],D=f[A+2],C=f[E]-P,I=f[E+1]-R,U=f[E+2]-D,O=Math.abs(C)+Math.abs(I)+Math.abs(U);y.push(m(o[_*4+b],P,R,D));for(let W=1;W<O;W++){const k=P+C/O*W,G=R+I/O*W,Z=D+U/O*W;v.has(g(k,G,Z))&&(y.push(m(w,k,G,Z)),M=!0)}}if(!M){const b=c[_];if(b>=0){for(let D=0;D<6;D++)p.i.push(y[n.idx[b*6+D]-b*4]);continue}const[A,E,P,R]=y;u[_]?p.i.push(A,E,P,A,P,R):p.i.push(A,P,E,A,R,P);continue}const x=m(w,(f[S]+f[S+6])/2,(f[S+1]+f[S+7])/2,(f[S+2]+f[S+8])/2);for(let b=0;b<y.length;b++){const A=y[b],E=y[(b+1)%y.length];u[_]?p.i.push(x,A,E):p.i.push(x,E,A)}}return{pos:new Float32Array(p.p),nrm:new Float32Array(p.n),col:new Uint8Array(p.c),col2:new Uint8Array(p.c2),glow:new Uint8Array(p.g),ao:new Uint8Array(p.o),idx:new Uint32Array(p.i)}}const Su=Ge.meshes,ew=3,la=255,tw=la/ew,nw=3,Gp=new WeakMap,Hp=new WeakMap,ya=new WeakSet;let Wp=0,Vp=0,$p=0,Xp=0,qp=0,Yp=0;function iw(n,e){return n.sx===e.sx&&n.sy===e.sy&&n.sz===e.sz&&n.pivot.x===e.pivot.x&&n.pivot.y===e.pivot.y&&n.pivot.z===e.pivot.z&&n.shadeAs===e.shadeAs&&n.shadeHollow===e.shadeHollow}function sw(n){return{sx:n.sx,sy:n.sy,sz:n.sz,pivot:{x:n.pivot.x,y:n.pivot.y,z:n.pivot.z},shadeAs:n.shadeAs,shadeHollow:n.shadeHollow}}function ul(n){const e=Gp.get(n.voxels);return e!==void 0&&iw(e.grid,n)&&e.conformed===ya.has(n.voxels)?e:void 0}function Ta(n){const e=Hp.get(n);return e!==void 0&&e.voxels===n.voxels&&e.geom.conformed===ya.has(n.voxels)?e:void 0}function rw(n){for(const e of n)jp(e)}function jp(n){ya.has(n.voxels)||(ya.add(n.voxels),Wp++)}function aw(n){const{sx:e,sy:t,sz:i,shadeAs:s,shadeHollow:r}=n;if(s===void 0&&r===void 0)return;const a=(s??n.voxels).slice(0,e*t*i);if(r!==void 0)for(let l=0;l<a.length;l++)r[l]!==0&&(a[l]=0);return a}function Kp(n){Xp++;const e=[];for(let o=0;o<=la;o++)e.push(o);const t=ya.has(n.voxels),i=Jy({...n,palette:e,emissive:[]},void 0,aw(n)),s=t?Qy(i,Su.subjectCutVoxels):i,r=s.pos.length/3,a=new Uint8Array(r);let l=0;for(let o=0;o<r;o++){a[o]=s.col[o*3+2];const u=s.pos[o*3],c=s.pos[o*3+1],f=s.pos[o*3+2],h=u*u+c*c+f*f;h>l&&(l=h)}return{pos:s.pos,nrm:s.nrm,ao:s.ao,idx:s.idx,slots:a,radiusVoxels:Math.sqrt(l),conformed:t}}function ow(n,e){const t=new Nt;return t.name=`${e.name} grid`,t.setAttribute("position",new nt(n.pos,3)),t.setAttribute("normal",new nt(n.nrm,3)),t.setAttribute("ao",new nt(n.ao,1,!0)),t.setIndex(new nt(n.idx,1)),n.pos.length>0?t.computeBoundingSphere():t.boundingSphere=new kn,{geometry:t,tris:n.idx.length/nw,radiusVoxels:n.radiusVoxels,slots:n.slots,grid:sw(e),conformed:n.conformed}}function lw(n,e){const t=n.slots,i=t.length,s=new Uint8Array(i*3),r=new Uint8Array(i*3),a=new Uint8Array(i);for(let u=0;u<i;u++){const c=t[u],f=e.palette[c]??0,h=f>>16&la,d=f>>8&la,g=f&la;s[u*3]=h,s[u*3+1]=d,s[u*3+2]=g,r[u*3]=h,r[u*3+1]=d,r[u*3+2]=g;const v=e.emissive[c]?1:0;a[u]=(v|v<<1)*tw}const l=new Nt;l.name=e.name;const o=n.geometry;return l.setAttribute("position",o.getAttribute("position")),l.setAttribute("normal",o.getAttribute("normal")),l.setAttribute("ao",o.getAttribute("ao")),l.setAttribute("color",new nt(s,3,!0)),l.setAttribute("col2",new nt(r,3,!0)),l.setAttribute("glow",new nt(a,1,!0)),l.setIndex(o.index),l.boundingSphere=o.boundingSphere.clone(),l}function cw(n,e){let t=ul(n);return t===void 0&&(t=ow(e,n),Gp.set(n.voxels,t),Vp++,(n.shadeAs!==void 0||n.shadeHollow!==void 0)&&Yp++),ju(t,n)}function ju(n,e){const t={geom:n,geometry:lw(n,e),voxels:e.voxels};return Hp.set(e,t),$p++,t}function Zp(n){const e=ul(n);return e!==void 0?ju(e,n):cw(n,Kp(n))}function uw(n){const e=Ta(n);if(e)return e;const t=ul(n);if(t!==void 0)return em(n),Qp++,ju(t,n)}function hw(n){const e=Ta(n);return e||(em(n),Jp++,Zp(n))}const Ln=[];let Jp=0,Qp=0;function em(n){for(let e=0;e<Ln.length;e++)if(Ln[e].model===n){Ln.splice(e,1);return}}let tc=0,nc=0;function Wf(n){if(!n.urgent){Ln.push(n);return}let e=0;for(;e<Ln.length&&Ln[e].urgent;)e++;Ln.splice(e,0,n)}function tm(n,e=!1){if(Ta(n)===void 0){for(const t of Ln)if(t.model===n){e&&!t.urgent&&(Ln.splice(Ln.indexOf(t),1),t.urgent=!0,Wf(t));return}Wf({model:n,urgent:e})}}function fw(n){for(const e of n)tm(e,!1)}function ic(n=Su.sliceBudgetMs){const e=performance.now();let t=0;for(;Ln.length>0&&t<Su.maxJobsPerCall;){const i=Ln[0],s=ul(i.model)!==void 0;if(t>0&&performance.now()-e+(s?nc:tc)>n)break;Ln.shift();const r=performance.now();Zp(i.model);const a=performance.now()-r;qp+=a,s?nc=Math.max(nc,a):tc=Math.max(tc,a),t++}return Ln.length>0}function dw(){return{geometries:Vp,models:$p,meshed:Xp,queued:Ln.length,builtMs:qp,shadeGaps:Yp,forced:Jp,forcedColour:Qp,conformed:Wp}}function pw(){return Ln.length}const jt=re.plain,nm=new Set([ia,E0]),yu=new WeakSet;function im(n){const e=n.shadowMap;if(yu.has(e))return;yu.add(e);const t=e.render,i=n.state.buffers.color,s=new Set;let r=n.renderBufferDirect,a=n.clear;const l=f=>{s.delete(f.target)},o=(f,h,d,g,v,p)=>{g.isMeshDepthMaterial===!0&&g!==v.customDepthMaterial&&(g.colorWrite=!1,s.has(g)||(s.add(g),g.addEventListener("dispose",l))),r.call(n,f,h,d,g,v,p)},u=(f=!0,h=!0,d=!0)=>{f&&i.setMask(!0),a.call(n,f,h,d)};let c=0;e.render=function(f,h,d){if(c>0||!e.enabled||!e.autoUpdate&&!e.needsUpdate||f.length===0){t.call(this,f,h,d);return}if(!Ge.look.shadowDepthOnly||!nm.has(e.type)){for(const g of s)g.colorWrite=!0;s.clear(),t.call(this,f,h,d);return}r=n.renderBufferDirect,a=n.clear,i.setMask(!0),n.renderBufferDirect=o,n.clear=u,c++;try{t.call(this,f,h,d)}finally{n.renderBufferDirect=r,n.clear=a,c--}}}const Go=n=>Ge.look.shadowDepthOnly&&nm.has(n.shadowMap.type)&&yu.has(n.shadowMap);class mw{tod=Fm();sun=new Xl(16777215,1);hemi=new tx(16777215,16777215,1);fog=new zu(16777215,1e3,1e4);sky;skyMat;lightDir=new z;sunMoving=null;cache={valid:!1,centre:new z,half:0,dir:new z,redraws:0,oneFrame:0,rebuilds:0};sunBuild=null;build=null;casters=null;buildScene=new br;buildCam=new Ws;renderer=null;scene=null;buildTriangles=0;lastFocus=new z;hasLastFocus=!1;prevFocus=new z;onStaticBox=null;rebuildWanted=!1;lx=new z;ly=new z;lightAxes=[this.lx,this.ly];focusV=new z;offsetV=new z;leadV=new z;stepV=new z;probeV=new z;savedDir=new z;wasCasting=[];ambLinear=[0,0,0];sunLinear=[0,0,0];constructor(e){if(this.sun.castShadow=!0,this.sun.shadow.mapSize.set(jt.shadowMapSize,jt.shadowMapSize),this.sun.shadow.bias=jt.shadowBias,this.sun.shadow.camera.layers.enableAll(),mi("shadow")){this.sun.shadow.camera.layers.mask=12|1<<Mu,this.sun.shadow.autoUpdate=!1;const t=new Xl(16777215,0);if(t.castShadow=!0,t.shadow.mapSize.set(jt.shadowMapSize,jt.shadowMapSize),t.shadow.bias=jt.shadowBias,t.shadow.camera.layers.mask=16,t.layers.enableAll(),this.sunMoving=t,re.opt.shadow.spreadOn){const i=new Xl(16777215,0);i.castShadow=!0,i.shadow.mapSize.set(jt.shadowMapSize,jt.shadowMapSize),i.shadow.bias=jt.shadowBias,i.shadow.autoUpdate=!1,i.shadow.camera.layers.mask=this.sun.shadow.camera.layers.mask,this.sunBuild=i,this.buildScene.add(i,i.target)}}this.scene=e,this.sun.layers.enableAll(),this.hemi.layers.enableAll(),e.add(this.sun,this.sun.target,this.hemi),this.sunMoving&&e.add(this.sunMoving,this.sunMoving.target),e.fog=this.fog,this.skyMat=new cn({uniforms:{uZenith:{value:new Ke},uMid:{value:new Ke},uHorizon:{value:new Ke},uMidShare:{value:jt.skyMidShare}},vertexShader:"varying vec3 vDir; void main() { vDir = normalize(position); vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0); gl_Position = p.xyww; }",fragmentShader:`uniform vec3 uZenith; uniform vec3 uMid; uniform vec3 uHorizon; uniform float uMidShare; varying vec3 vDir;
        void main() { float e = clamp(vDir.y, 0.0, 1.0); vec3 c = e < uMidShare ? mix(uHorizon, uMid, e / uMidShare) : mix(uMid, uZenith, (e - uMidShare) / (1.0 - uMidShare));
          gl_FragColor = vec4(c, 1.0);
          #include <colorspace_fragment>
        }`,side:yn,depthWrite:!1,depthTest:!1,fog:!1}),this.sky=new vt(new Wu(1,24,12),this.skyMat),this.sky.name="sky",this.sky.frustumCulled=!1,this.sky.renderOrder=-1e3,e.add(this.sky)}setHour(e,t){const i=this.tod;Nm(i,e);const s=jt.gamma;this.lightDir.set(i.lightDir[0],i.lightDir[2],i.lightDir[1]).normalize();const r=this.ambLinear,a=this.sunLinear;for(let u=0;u<r.length;u++)r[u]=Math.pow(i.ambient[u],s)*jt.ambientStrength,a[u]=(Math.pow(i.ambient[u]+i.sun[u],s)-Math.pow(i.ambient[u],s))*jt.sunStrength;this.sun.color.setRGB(a[0],a[1],a[2]),this.sun.intensity=Math.PI,this.hemi.color.setRGB(r[0],r[1],r[2]),this.hemi.groundColor.setRGB(r[0]*jt.hemiGroundShare,r[1]*jt.hemiGroundShare,r[2]*jt.hemiGroundShare),this.hemi.intensity=Math.PI,this.fog.color.setHex(i.haze),this.fog.near=t[0],this.fog.far=t[1],this.skyMat.uniforms.uZenith.value.setHex(i.zenith),this.skyMat.uniforms.uMid.value.setHex(i.skyMid),this.skyMat.uniforms.uHorizon.value.setHex(i.horizon),Ir.uNight.value=i.night;const[l,o]=re.pixel.night.shadowOffNight;zp.skip=mi("shadow")&&re.opt.shadow.skipWhenFaded&&i.night>=o&&o>l}axes(){const e=this.lightDir;this.lx.set(0,1,0).cross(e),this.lx.lengthSq()<1e-12&&this.lx.set(1,0,0),this.lx.normalize(),this.ly.copy(e).cross(this.lx).normalize()}snapLight(e,t,i){const s=e.dot(this.lx),r=e.dot(this.ly);return i.copy(e).addScaledVector(this.lx,Math.round(s/t)*t-s).addScaledVector(this.ly,Math.round(r/t)*t-r)}place(e,t,i,s){const r=e.shadow.camera;r.left=-i,r.right=i,r.top=i,r.bottom=-i,r.near=1,r.far=i*6,r.updateProjectionMatrix(),e.shadow.mapSize.x!==s&&e.shadow.mapSize.set(s,s),e.shadow.normalBias=jt.shadowNormalBiasTexels*(2*i/s),e.target.position.copy(t),e.position.copy(t).addScaledVector(this.lightDir,i*3),e.target.updateMatrixWorld(),e.updateMatrixWorld()}fitShadow(e,t,i){if(this.sunMoving){this.fitSplit(e,t),this.sky.position.copy(i.position),this.sky.scale.setScalar(jt.skyRadiusMetres);return}const s=this.sun.shadow.camera;s.left=-t,s.right=t,s.top=t,s.bottom=-t,s.near=1,s.far=t*6,s.updateProjectionMatrix();const r=2*t/jt.shadowMapSize;this.sun.shadow.normalBias=jt.shadowNormalBiasTexels*r;const a=Math.round(e.x/r)*r,l=Math.round(e.z/r)*r;if(this.sun.target.position.set(a,e.y,l),this.sun.position.set(a+this.lightDir.x*t*3,e.y+this.lightDir.y*t*3,l+this.lightDir.z*t*3),this.sun.target.updateMatrixWorld(),this.sun.updateMatrixWorld(),this.onStaticBox&&(this.cache.centre.x!==a||this.cache.centre.z!==l||this.cache.half!==t)){this.cache.centre.set(a,e.y,l),this.cache.half=t,this.axes();const o=this.cache.centre.clone(),u=this.lx.clone(),c=this.ly.clone();this.onStaticBox((f,h)=>{const d=f.clone().sub(o);return Math.abs(d.dot(u))<t+h&&Math.abs(d.dot(c))<t+h})}this.sky.position.copy(i.position),this.sky.scale.setScalar(jt.skyRadiusMetres)}attach(e){this.renderer=e,im(e)}fitSplit(e,t){const i=re.opt.shadow,s=jt.shadowMapSize,r=2*t/s;this.axes(),this.buildTriangles=0;const a=i.lightSpaceSnap?this.snapLight(e,r,this.focusV):this.focusV.copy(e),l=this.hasLastFocus;this.prevFocus.copy(this.lastFocus),this.lastFocus.copy(a),this.hasLastFocus=!0,this.place(this.sunMoving,a,t,s);const o=2*Math.round(s*(1+i.marginShare)/2),u=o*r/2,c=this.cache,f=this.offsetV.copy(a).sub(c.centre),h=c.valid&&Math.abs(c.half-u)<1e-6*u,d=c.valid&&c.dir.angleTo(this.lightDir)>i.sunStepRad,g=!!this.sunBuild&&!!this.renderer&&!!this.scene,v=h&&(g||!d)&&Math.abs(f.dot(this.lx))+t<=u&&Math.abs(f.dot(this.ly))+t<=u,p=this.leadV.set(0,0,0);if(h&&(p.copy(this.lx).multiplyScalar(f.dot(this.lx)).addScaledVector(this.ly,f.dot(this.ly)),p.lengthSq()>1e-6?p.normalize().multiplyScalar(Math.min(i.leadShare*t,i.leadMarginShare*Math.max(0,u-t))):p.set(0,0,0)),v&&(g||!this.rebuildWanted)){if(g)if(this.build)this.buildStep();else{const y=u-t;let _=y;for(let w=0;w<this.lightAxes.length;w++){const S=this.lightAxes[w],M=f.dot(S),x=l?this.stepV.copy(a).sub(this.prevFocus).dot(S):0;_=Math.min(_,x>1e-9?y-M:x<-1e-9?y+M:y-Math.abs(M))}if(y<=0||_<=(1-i.rebuildAtShare)*y||d||this.rebuildWanted){this.rebuildWanted=!1,globalThis.__shdbg&&console.log("rebuild",JSON.stringify({f:a.toArray().map(Math.round),c:c.centre.toArray().map(Math.round),left:Math.round(_),margin:Math.round(y),half:t,sunTurned:d,lead:p.toArray().map(Math.round)}));const w=new z().copy(a).add(p);this.build={centre:this.snapLight(w,r,w),dir:this.lightDir.clone(),halfS:u,sizeS:o,chunk:0,group:new Map},this.buildStep()}}return}this.build=null,this.rebuildWanted=!1;const m=new z().copy(a).add(p);this.snapLight(m,r,m),this.place(this.sun,m,u,o),this.sun.shadow.needsUpdate=!0,c.valid=!0,c.centre.copy(m),c.half=u,c.dir.copy(this.lightDir),c.redraws++,c.oneFrame++,this.onStaticBox?.(this.boxTest(m,u))}boxTest(e,t){const i=this.lx.clone(),s=this.ly.clone(),r=new z;return(a,l)=>(r.copy(a).sub(e),Math.abs(r.dot(i))<t+l&&Math.abs(r.dot(s))<t+l)}invalidateCasters(){this.casters=null}requestRebuild(){this.rebuildWanted=!0}inCachedBox(e,t){return this.cache.valid&&this.boxTest(this.cache.centre,this.cache.half)(e,t)}stillCasters(){if(this.casters)return this.casters;const e=this.sun.shadow.camera.layers,t=[];return this.scene.traverse(i=>{i.isMesh&&i.castShadow&&i.layers.test(e)&&t.push(i)}),this.casters=t}buildStep(){const e=this.build,t=this.sunBuild,i=this.renderer,s=re.opt.shadow.buildFrames,r=this.stillCasters();if(e.chunk===0){this.savedDir.copy(this.lightDir),this.lightDir.copy(e.dir),this.place(t,e.centre,e.halfS,e.sizeS),this.lightDir.copy(this.savedDir),t.shadow.updateMatrices(t),this.onStaticBox?.(this.boxTest(e.centre,e.halfS));const p=t.shadow.getFrustum(),m=new Array(s).fill(0),y=w=>{const S=w.geometry,M=(S.index?S.index.count:S.getAttribute("position").count)/3,x=w.isInstancedMesh?w.count:1;return M*x},_=[];for(const w of r){const S=w.visible?w.frustumCulled&&!w.intersectsFrustum(p)?0:y(w):0,M=w.userData.buildGroup;M!==void 0?(e.group.set(w,M%s),m[M%s]+=S):_.push([w,S])}_.sort((w,S)=>S[1]-w[1]);for(const[w,S]of _){let M=0;for(let x=1;x<s;x++)m[x]<m[M]&&(M=x);e.group.set(w,M),m[M]+=S}}const a=this.wasCasting;a.length=r.length;for(let p=0;p<r.length;p++)a[p]=r[p].castShadow,r[p].castShadow=e.group.get(r[p])===e.chunk;const l=i.shadowMap,o=l.needsUpdate,u=i.clear,c=i.autoClear,f=l.render,h=i.info.render.triangles,d=this.scene;l.needsUpdate=!0,t.shadow.needsUpdate=!0,e.chunk>0&&(i.clear=()=>{}),i.autoClear=!1,l.render=(p,m,y)=>f.call(l,p,d,y);try{i.render(this.buildScene,this.buildCam)}finally{l.render=f,i.clear=u,i.autoClear=c,l.needsUpdate=o;for(let p=0;p<r.length;p++)r[p].castShadow=a[p]}if(this.buildTriangles=i.info.render.triangles-h,e.chunk++,e.chunk<s)return;const g=this.sun.shadow.map;this.sun.shadow.map=t.shadow.map,t.shadow.map=g,this.savedDir.copy(this.lightDir),this.lightDir.copy(e.dir),this.place(this.sun,e.centre,e.halfS,e.sizeS),this.lightDir.copy(this.savedDir),this.sun.shadow.updateMatrices(this.sun);const v=this.cache;v.centre.copy(e.centre),v.half=e.halfS,v.dir.copy(e.dir),v.redraws++,v.rebuilds++,this.build=null}inMovingShadow(e,t){const i=this.sunMoving??this.sun;this.axes();const s=i.shadow.camera.right,r=this.probeV.copy(e).sub(i.target.position);return Math.abs(r.dot(this.lx))<s+t&&Math.abs(r.dot(this.ly))<s+t}get shadowRedraws(){return this.cache.redraws}get buildMapBytes(){const e=this.sunBuild?.shadow.map;return e?e.width*e.height*4*2:0}get shadowCounts(){return{redraws:this.cache.redraws,oneFrame:this.cache.oneFrame,background:this.cache.rebuilds,building:!!this.build}}}const Ku=n=>n-Math.floor(n),hl=Qi(0,0,0),gw=Ku(hl-Qi(-1,0,0)),xw=Ku(hl-Qi(0,-1,0)),vw=Ku(hl-Qi(0,0,-1)),Mw=n=>Number.isInteger(n)?n.toFixed(1):String(n),_w="if (uDissolveShare < 1.0) { vec3 g = floor(vVoxPos + uDissolvePivot - 0.5 * vVoxNrm); float r = fract("+Mw(hl)+" + g.x * "+gw.toPrecision(17)+" + g.y * "+xw.toPrecision(17)+" + g.z * "+vw.toPrecision(17)+"); if (fract(r + uDissolveSeed) >= uDissolveShare) discard;}",sm=new WeakMap;function wu(n){return n?sm.get(n):void 0}function bu(n,e=!1){const t=new tl;rm.add(t);const i={value:1};return sm.set(t,i),t.onBeforeCompile=s=>{e&&Object.assign(s.uniforms,cl),s.uniforms.uDissolveShare=i,s.uniforms.uDissolveSeed=n.seed,s.uniforms.uDissolvePivot=n.pivot,s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vVoxPos; varying vec3 vVoxNrm;`+(e?" uniform mat4 uRigInv; uniform float uRigVoxel;":"")).replace("#include <begin_vertex>",`#include <begin_vertex>
`+(e?"{ vec4 rp = uRigInv * (modelMatrix * vec4(position, 1.0)); vVoxPos = vec3(rp.x, -rp.z, rp.y) / uRigVoxel; vVoxNrm = vec3(0.0); }":"vVoxPos = position; vVoxNrm = normal;")),s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vVoxPos; varying vec3 vVoxNrm; uniform float uDissolveShare; uniform float uDissolveSeed; uniform vec3 uDissolvePivot;`).replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
`+_w)},t.customProgramCacheKey=()=>`fade-depth-${e?"rig":"voxel"}`,t}const rm=new WeakSet;function am(n,e,t,i,s,r){rm.has(r)&&(r.colorWrite=!Go(n))}function Sw(n,e,t,i,s,r){r.side=Ji,am(n,e,t,i,s,r)}function Vf(){const n=new Nt;return n.name="pre-warm (voxel mesh layout)",n.setAttribute("position",new nt(new Float32Array(0),3)),n.setAttribute("normal",new nt(new Float32Array(0),3)),n.setAttribute("ao",new nt(new Uint8Array(0),1,!0)),n.setAttribute("color",new nt(new Uint8Array(0),3,!0)),n.setAttribute("col2",new nt(new Uint8Array(0),3,!0)),n.setAttribute("glow",new nt(new Uint8Array(0),1,!0)),n.setIndex(new nt(new Uint32Array(0),1)),n.boundingSphere=new kn,n}function Ho(n,e){const t=Math.cos(n.roll||0),i=Math.sin(n.roll||0),s=Math.cos(n.pitch||0),r=Math.sin(n.pitch||0),a=Math.cos(n.yaw||0),l=Math.sin(n.yaw||0),o=t,u=0,c=i,f=i*r,h=s,d=-t*r,g=-i*s,v=r,p=t*s,m=a,y=l,_=l,w=-a;return e[0]=m*o+_*f,e[1]=m*u+_*h,e[2]=m*c+_*d,e[3]=y*o+w*f,e[4]=y*u+w*h,e[5]=y*c+w*d,e[6]=g,e[7]=v,e[8]=p,e}function om(n,e,t,i,s,r){const a=t;return n.set(e[0]*a,e[1]*a,e[2]*a,i,e[6]*a,e[7]*a,e[8]*a,s,e[3]*a,e[4]*a,e[5]*a,r,0,0,0,1),n}function yw(n,e,t){return n.scale*(e.voxelSize??1)*t}function ww(n,e){const t=n.model.coarse;return t&&n.scale*(n.model.voxelSize??1)*e<t.belowPx?t.model:n.model}function bw(n,e,t,i){const s=e?t.pixelsPerMetre*i.cpu.cellMetres*i.toGridY:0;return s>0?ww(n,s):n.model}function Ew(n,e,t,i,s,r){s.pixelsPerMetre=0;const a=al(n,t.x,t.y,t.z,s,i);return r.model=bw(e,a||n.cpu.subOn&&i>0&&s.pixelsPerMetre>0,s,n),a}function Aw(n,e){return n===e||n.voxels===e.voxels||n.coarse?.model===e||e.coarse?.model===n}function lm(){const n=new WeakSet,e=new Set([...re.landmarks.include,...Ge.meshes.replacedLandmarks]);for(const[t,i]of Um())e.has(t)&&(n.add(i.day),n.add(i.night));return n}const Tw=new Float64Array(9),xn={x:0,y:0,z:0},$r={x:0,y:0,depthMetres:0,eyeMetres:0,pixelsPerMetre:0},$f={model:null},sc=new kn,rc=new vs,io=new Dp,Xf=new et,so=new z,ac=new z,ro={x:0,y:0,z:0};function Rw(n,e,t,i=lm){const s=new mn;s.matrixAutoUpdate=!1,s.frustumCulled=!1;const r=[],a=[],l=$=>{if(!t)return null;let K=a[$];if(!K){if($>=Ge.objects.maxFadeMaterials)return null;K=rl(t()),a[$]=K}return K};for(let $=0;$<Ge.prewarm.fadeMaterials&&l($);$++);const o=[],u=$=>{let K=o[$];if(!K){const j=a[$]?oa(a[$]):void 0;if(!j)return;K=o[$]=bu(j)}return K};let c=null;const f=[],h=$=>f[$]??=Pp(n);for(let $=0;$<Ge.prewarm.subjectMaterials;$++)h($);let d=0,g=null,v=null,p=0,m=new Int32Array(Ge.objects.maxDrawn);const y=[],_=[];let w=new Uint8Array(Ge.objects.maxDrawn);const S={drawn:0,waiting:0,culled:0,popped:0,fading:0,kept:0,colourPasses:0,forced:0,skipped:0,subject:0,shadowOnly:0,casterThinned:0},M=new WeakMap;let x=null;const b=$=>{let K=r[$];return K||(K=new vt(void 0,n),K.matrixAutoUpdate=!1,K.frustumCulled=!1,K.layers.set(Wn.actors),K.onBeforeShadow=Sw,r[$]=K,s.add(K)),K},A=[],E=[],P=[],R=[],D=[],C=[],I=[],U=[],O=$=>{const K=Ge.objects.casterMaxMetres,j=Ge.objects.casterFadeMetres;return j<=0?$<K?1:0:Math.min(1,Math.max(0,(K-$)/j))},W=$=>{const K=$.streetFocus;if(!K||!K.ground)return 0;const j=Ge.objects,V=$.camera.perspective??1,B=Math.min(1,Math.max(0,(V-j.casterPerspectiveFrom)/Math.max(1e-6,1-j.casterPerspectiveFrom))),te=Number.isFinite(K.aglMetres)?K.aglMetres:Number.MAX_VALUE,ee=Math.min(1,Math.max(0,(j.casterAglNoneMetres-te)/Math.max(1e-6,j.casterAglNoneMetres-j.casterAglFullMetres)));return B*ee};let k=0,G=!1,Z=Number.NaN;const me=$=>{const K=W($),j=$.timeSec,V=j-Z;if(!(V>=0)||V>Ge.objects.casterWeightSnapSec)k=K;else{const B=Ge.objects.casterWeightPerSec*V;k+=Math.min(B,Math.max(-B,K-k))}return Z=j,k};let le=0;const q=($,K,j,V,B,te,ee,ce,Ce,oe,ye)=>{const pe=b($);pe.geometry=V.geometry,pe.visible=!0,pe.frustumCulled=!ee,ee||S.shadowOnly++;const ne=j.fade??1;pe.castShadow=ce,pe.customDepthMaterial=void 0;let Ie=1;if(Ce>0&&!(ne<1)){const De=h(d);_a(De).value=Ce,pe.material=De,d++,S.subject++}else if(ne<1){const De=l(p),Me=De?oa(De):void 0,We=De?_a(De):void 0;if(De&&Me&&We){if(Ie=Od(ne,te*oe,Ge.objects.fadeCurve),Me.share.value=Ie,pe.castShadow){const Y=u(p);pe.customDepthMaterial=Y;const N=wu(Y);N&&(N.value=ne*ye)}We.value=Ce,Ce>0&&S.subject++;const Ve=j.fadeSeed??0;Me.seed.value=Ve>=0&&Ve<1?Ve:0,Me.pivot.value.set(B.pivot.x,B.pivot.y,B.pivot.z),pe.material=De,p++,le++}else pe.material=n,S.popped++}else pe.material=n;if(pe.castShadow&&ye<1&&!pe.customDepthMaterial&&Ge.objects.maxFadeMaterials>=Ge.objects.maxDrawn){const De=l(p),Me=De?oa(De):void 0,We=Me?u(p):void 0,Ve=We?wu(We):void 0;if(Me&&We&&Ve){const Y=j.fadeSeed??0;Me.seed.value=Y>=0&&Y<1?Y:0,Me.pivot.value.set(B.pivot.x,B.pivot.y,B.pivot.z),Ve.value=ye,pe.customDepthMaterial=We,p++,S.casterThinned++}}om(pe.matrix,Ho(j,Tw),te,xn.x,xn.y,xn.z),pe.matrixWorld.copy(pe.matrix),m[K]=$,y[$]=B,_[$]=Ie,S.drawn++};return{group:s,stats:S,update($,K,j,V){S.drawn=0,S.waiting=0,S.culled=0,S.shadowOnly=0,S.casterThinned=0,S.popped=0,S.kept=0,S.colourPasses=0,S.forced=0,S.skipped=0,S.subject=0,p=0,le=0,d=0;const B=$.objects;m.length<B.length&&(m=new Int32Array(B.length*2)),m.fill(-1,0,B.length),w.length<B.length&&(w=new Uint8Array(B.length*2)),w.fill(0,0,B.length);const te=K.cpu.cellMetres,ee=me($),ce=$.streetFocus;ce&&ce.ground&&Number.isFinite(ce.x)&&Number.isFinite(ce.y)&&Number.isFinite(ce.z)?(an(e,te,ce.x,ce.y,ce.z,ro),ac.set(ro.x,ro.y,ro.z),G=!0):G||ac.copy(K.target),Xf.copy(K.viewProj),rc.setFromProjectionMatrix(Xf),io.set(K);const Ce=re.opt.actors.cullMarginMetres;let oe=0,ye=0;for(let pe=0;pe<B.length&&oe<Ge.objects.maxDrawn;pe++){if(V[pe])continue;const ne=B[pe],Ie=ne.position;if(!Number.isFinite(Ie.x+Ie.y+Ie.z)||!((ne.fade??1)>0))continue;if(ne.static&&(x??=i(),x.has(ne.model))){S.skipped++,w[pe]=1;continue}const De=pe<($.followObjects??0),Me=De?K.cpu.snapDX:0,We=De?K.cpu.snapDY:0;an(e,te,Ie.x+Me,Ie.y+We,Ie.z,xn);const Ve=K.cpu.subOn,Y=io.on||Ve?Ru(ne):0,N=Ew(K,ne,xn,Y,$r,$f);let Te=$f.model;ne.subject!==void 0&&jp(Te);let Ee=Ta(Te);if(!Ee&&S.colourPasses<Ge.meshes.colourPassesPerFrame&&(Ee=uw(Te),Ee&&S.colourPasses++),Ee){if(ne.static||De){const F=M.get(ne);(!F||F.mesh!==Ee||F.model!==Te)&&M.set(ne,{mesh:Ee,model:Te})}}else{tm(Te,!0);const F=M.get(ne);if(F&&(ne.static||De&&Aw(F.model,Te)))Ee=F.mesh,Te=F.model,S.kept++;else if(De&&!ne.static)Ee=hw(Te),S.forced++;else{S.waiting++;continue}}const Be=yw(ne,Te,te),xe=Ee.geom.radiusVoxels*Be+Ce+(N&&$r.pixelsPerMetre>0?2/$r.pixelsPerMetre:0);so.set(xn.x,xn.y,xn.z),sc.set(so,xe);const rt=Y>0&&Ve?!0:io.on?io.intersectsSphere(xn.x,xn.y,xn.z,xe)||Y>0&&rc.intersectsSphere(sc):rc.intersectsSphere(sc),Le=c!==null&&!ne.static?1-ee*(1-(ee>0?O(so.distanceTo(ac)):1)):0,ze=Le>0&&c!==null&&c(so,xe);if(!rt&&!ze){S.culled++;continue}if(!rt){const F=ye++;A[F]=pe,E[F]=Ee,P[F]=Te,R[F]=Be,D[F]=Y,C[F]=$r.pixelsPerMetre,I[3*F]=xn.x,I[3*F+1]=xn.y,I[3*F+2]=xn.z,U[F]=Le;continue}q(oe,pe,ne,Ee,Te,Be,!0,ze,Y,$r.pixelsPerMetre,Le),oe++}for(let pe=0;pe<ye;pe++){if(oe>=Ge.objects.maxDrawn){S.culled+=ye-pe;break}xn.x=I[3*pe],xn.y=I[3*pe+1],xn.z=I[3*pe+2];const ne=A[pe];q(oe,ne,B[ne],E[pe],P[pe],R[pe],!1,!0,D[pe],C[pe],U[pe]),oe++}S.fading=le;for(let pe=oe;pe<r.length;pe++)r[pe].visible=!1},drawn($){const K=$>=0&&$<m.length?m[$]:-1;return K>=0?r[K]:null},modelOf($){const K=$>=0&&$<m.length?m[$]:-1;return K>=0?y[K]??null:null},shareOf($){const K=$>=0&&$<m.length?m[$]:-1;return K>=0?_[K]??1:1},setShadowTest($){c=$},skippedAt($){return $>=0&&$<w.length&&w[$]===1},warmDepthMeshes(){if(!v){const $=u(0);v=[],$&&($.side=Ji,v.push(new vt(Vf(),$)))}return v},warmMeshes(){if(!g){const $=Vf();g=[new vt($,n)];for(const K of a)K&&g.push(new vt($,K));for(const K of f)g.push(new vt($,K))}return g}}}const xr=Ge.sight,wa=new WeakMap,ca=[];function cm(n){const e=Math.max(1,Math.round(xr.occupancyBlockVoxels)),t=Math.ceil(n.sx/e),i=Math.ceil(n.sy/e),s=Math.ceil(n.sz/e);return{sx:n.sx,sy:n.sy,sz:n.sz,b:e,bx:t,by:i,bz:s,blocks:new Uint8Array(t*i*s),voxels:n.voxels,x0:n.sx,y0:n.sy,z0:n.sz,x1:0,y1:0,z1:0,done:!1,nextZ:0}}function um(n){const e=n.nextZ++,{sx:t,sy:i,b:s,bx:r,by:a,voxels:l,blocks:o}=n,u=(e/s|0)*r*a;let c=t*i*e,f=!1;for(let h=0;h<i;h++,c+=t){const d=u+(h/s|0)*r;for(let g=0;g<t;g++)l[c+g]!==0&&(o[d+(g/s|0)]=1,f=!0,g<n.x0&&(n.x0=g),g+1>n.x1&&(n.x1=g+1),h<n.y0&&(n.y0=h),h+1>n.y1&&(n.y1=h+1))}f&&(e<n.z0&&(n.z0=e),e+1>n.z1&&(n.z1=e+1)),n.nextZ>=n.sz&&(n.done=!0)}function Cw(n){const e=wa.get(n.voxels);return e&&e.done&&e.sx===n.sx&&e.sy===n.sy&&e.sz===n.sz?e:void 0}function oc(n){let e=wa.get(n.voxels);for((!e||e.sx!==n.sx||e.sy!==n.sy||e.sz!==n.sz)&&(e=cm(n),wa.set(n.voxels,e));!e.done;)um(e);return e}function Pw(n){if(wa.has(n.voxels))return;const e=cm(n);wa.set(n.voxels,e),ca.push(e)}const Lw=()=>performance.now();function qf(n=xr.occupancyBudgetMs,e=Lw){const t=e();let i=!0;for(;ca.length>0;){const s=ca[0];for(;!s.done;){if(!i&&e()-t>=n)return!0;um(s),i=!1}ca.shift()}return!1}function Dw(){return ca.length}const Cs=1e-7,Ri=1e-12,Iw=16,lc=2;function Fw(n,e,t,i,s,r,a,l,o=1,u=0){if(!(n.x1>n.x0&&n.y1>n.y0&&n.z1>n.z0))return 1/0;const c=Zu(e,t,i,s,r,a,n.x0,n.y0,n.z0,n.x1,n.y1,n.z1,l);if(!(c<1/0))return 1/0;const f=hm.v,h=c>0,{sx:d,sy:g,b:v,bx:p,by:m,voxels:y,blocks:_}=n,w=s>0?1:-1,S=r>0?1:-1,M=a>0?1:-1,x=Math.abs(s)>Ri?Math.abs(1/s):1/0,b=Math.abs(r)>Ri?Math.abs(1/r):1/0,A=Math.abs(a)>Ri?Math.abs(1/a):1/0;let E=c,P=!1,R=!0,D=0,C=0,I=0,U=0,O=0,W=0,k=!0;for(;E<=f;){if(k){k=!1;const le=e+s*(E+Cs),q=t+r*(E+Cs),$=i+a*(E+Cs);D=Math.min(n.x1-1,Math.max(n.x0,Math.floor(le))),C=Math.min(n.y1-1,Math.max(n.y0,Math.floor(q))),I=Math.min(n.z1-1,Math.max(n.z0,Math.floor($))),U=x===1/0?1/0:((s>0?D+1:D)-e)/s,O=b===1/0?1/0:((r>0?C+1:C)-t)/r,W=A===1/0?1/0:((a>0?I+1:I)-i)/a}const G=D/v|0,Z=C/v|0,me=I/v|0;if(_[G+p*(Z+m*me)]===0){const le=x===1/0?1/0:((s>0?(G+1)*v:G*v)-e)/s,q=b===1/0?1/0:((r>0?(Z+1)*v:Z*v)-t)/r,$=A===1/0?1/0:((a>0?(me+1)*v:me*v)-i)/a;let K=Math.min(le,q,$);if(K>E||(K=E+Cs),P=!1,R=!1,K>f)return 1/0;E=K;const j=e+s*(E+Cs),V=t+r*(E+Cs),B=i+a*(E+Cs);if(j<n.x0||j>=n.x1||V<n.y0||V>=n.y1||B<n.z0||B>=n.z1)return 1/0;k=!0;continue}if(y[D+d*(C+g*I)]!==0){if(R?h:!P){if(o>=1)return E;const le=Qi(D,C,I)+u;if(le-Math.floor(le)<o)return E}P=!0}else P=!1;if(R=!1,U<=O&&U<=W){if(E=U,D+=w,U+=x,D<n.x0||D>=n.x1)return 1/0}else if(O<=W){if(E=O,C+=S,O+=b,C<n.y0||C>=n.y1)return 1/0}else if(E=W,I+=M,W+=A,I<n.z0||I>=n.z1)return 1/0}return 1/0}function Nw(n,e,t,i,s,r,a,l,o,u,c,f,h){const d=Zu(n,e,t,i,s,r,a,l,o,u,c,f,h);return d>0?d:1/0}const Yf={yaw:0,pitch:0,roll:0},ci=new Float64Array(9),Ps={x:0,y:0,z:0};class Uw{count=0;waiting=0;cap=0;occ=[];xf=new Float64Array(0);box=new Float64Array(0);share=new Float64Array(0);seed=new Float64Array(0);rig=new Uint8Array(0);subj=new Uint8Array(0);anySubject=!1;stamp=new Uint32Array(0);tick=0;gx0=0;gz0=0;cell=1;nx=0;nz=0;cellStart=new Int32Array(1);cellItems=new Int32Array(0);grow(e){if(e<=this.cap)return;const t=Math.max(e,this.cap*lc,Iw),i=new Float64Array(t*16);i.set(this.xf),this.xf=i;const s=new Float64Array(t*6);s.set(this.box),this.box=s;const r=new Float64Array(t);r.set(this.share),this.share=r;const a=new Float64Array(t);a.set(this.seed),this.seed=a;const l=new Uint8Array(t);l.set(this.rig),this.rig=l;const o=new Uint8Array(t);o.set(this.subj),this.subj=o,this.stamp=new Uint32Array(t),this.cap=t}pending=null;frameIn={objects:[],origin:{x:0,y:0},cellMetres:1,pick:()=>null,mode:()=>0,follow:0,snapX:0,snapY:0,share:null};setFrame(e,t,i,s,r,a=0,l=0,o=0,u=null){const c=this.frameIn;c.objects=e,c.origin=t,c.cellMetres=i,c.pick=s,c.mode=r,c.follow=a,c.snapX=l,c.snapY=o,c.share=u,this.pending=c,this.count=0,this.waiting=0,this.nx=this.nz=0}subjectInFrame(){return this.ensure(),this.anySubject}ensure(){const e=this.pending;e&&(this.pending=null,this.build(e.objects,e.origin,e.cellMetres,e.pick,e.mode,e.follow,e.snapX,e.snapY,e.share))}build(e,t,i,s,r,a,l,o,u){const c=i;this.grow(e.length),this.count=0,this.waiting=0,this.anySubject=!1;const f=Ow;f.length=0;let h=1/0,d=1/0,g=-1/0,v=-1/0;for(let M=0;M<e.length;M++){const x=e[M];this.occ[M]=null;const b=x.position;if(!Number.isFinite(b.x+b.y+b.z))continue;const A=x.fade??1;if(!(A>0))continue;const E=s(x,M);if(!E)continue;const P=Cw(E);if(!P){Pw(E),this.waiting++;continue}if(!(P.x1>P.x0))continue;const R=x.scale*(E.voxelSize??1)*c;if(!(R>0))continue;const D=M<a;an(t,c,b.x+(D?l:0),b.y+(D?o:0),b.z,Ps);const C=r(M);C===0?Ho(x,ci):(Yf.yaw=x.yaw,Ho(Yf,ci));const I=this.xf,U=M*16;I[U]=ci[0],I[U+1]=ci[1],I[U+2]=ci[2],I[U+3]=ci[6],I[U+4]=ci[7],I[U+5]=ci[8],I[U+6]=ci[3],I[U+7]=ci[4],I[U+8]=ci[5],I[U+9]=Ps.x,I[U+10]=Ps.y,I[U+11]=Ps.z,I[U+12]=R,I[U+13]=E.pivot.x,I[U+14]=E.pivot.y,I[U+15]=E.pivot.z;const O=C===1?1:0;this.rig[M]=O,this.subj[M]=(x.subject??0)>0?1:0,this.subj[M]&&(this.anySubject=!0);const W=O?xr.walkerBoxMarginMetres/R:0;let k=1/0,G=1/0,Z=1/0,me=-1/0,le=-1/0,q=-1/0;for(let V=0;V<8;V++){const B=(V&1?P.x1+W:P.x0-W)-E.pivot.x,te=(V&2?P.y1+W:P.y0-W)-E.pivot.y,ee=(V&4?P.z1+W:P.z0-W)-E.pivot.z,ce=Ps.x+R*(I[U]*B+I[U+1]*te+I[U+2]*ee),Ce=Ps.y+R*(I[U+3]*B+I[U+4]*te+I[U+5]*ee),oe=Ps.z+R*(I[U+6]*B+I[U+7]*te+I[U+8]*ee);ce<k&&(k=ce),ce>me&&(me=ce),Ce<G&&(G=Ce),Ce>le&&(le=Ce),oe<Z&&(Z=oe),oe>q&&(q=oe)}const $=this.box,K=M*6;$[K]=k,$[K+1]=G,$[K+2]=Z,$[K+3]=me,$[K+4]=le,$[K+5]=q,this.share[M]=O?1:A<1?u?u(M):A:1;const j=x.fadeSeed??0;this.seed[M]=j>=0&&j<1?j:0,this.occ[M]=P,f.push(M),k<h&&(h=k),Z<d&&(d=Z),me>g&&(g=me),q>v&&(v=q)}for(let M=e.length;M<this.occ.length;M++)this.occ[M]=null;if(this.occ.length=e.length,this.count=f.length,f.length===0){this.nx=this.nz=0;return}const p=Math.max(g-h,v-d),m=Math.max(xr.boxGridCellMetres,p/xr.boxGridMaxCells);this.cell=m,this.gx0=h,this.gz0=d,this.nx=Math.max(1,Math.ceil((g-h)/m)),this.nz=Math.max(1,Math.ceil((v-d)/m));const y=this.nx*this.nz;this.cellStart.length<y+1&&(this.cellStart=new Int32Array(y+1));const _=this.cellStart;_.fill(0,0,y+1);let w=0;for(const M of f){this.range(M,Bn);for(let x=Bn[1];x<=Bn[3];x++)for(let b=Bn[0];b<=Bn[2];b++)_[x*this.nx+b+1]++;w+=(Bn[2]-Bn[0]+1)*(Bn[3]-Bn[1]+1)}for(let M=0;M<y;M++)_[M+1]+=_[M];this.cellItems.length<w&&(this.cellItems=new Int32Array(Math.max(w,this.cellItems.length*lc)));const S=cc.length>=y?cc:cc=new Int32Array(y*lc);S.set(_.subarray(0,y));for(const M of f){this.range(M,Bn);for(let x=Bn[1];x<=Bn[3];x++)for(let b=Bn[0];b<=Bn[2];b++)this.cellItems[S[x*this.nx+b]++]=M}}range(e,t){const i=this.box,s=e*6,r=this.cell;t[0]=Math.min(this.nx-1,Math.max(0,Math.floor((i[s]-this.gx0)/r))),t[1]=Math.min(this.nz-1,Math.max(0,Math.floor((i[s+2]-this.gz0)/r))),t[2]=Math.min(this.nx-1,Math.max(0,Math.floor((i[s+3]-this.gx0)/r))),t[3]=Math.min(this.nz-1,Math.max(0,Math.floor((i[s+5]-this.gz0)/r)))}prepareFrame(){this.ensure()}firstHit(e,t,i,s,r,a,l,o=0){if(this.ensure(),this.count===0||this.nx===0||!(l>0))return 1/0;let u=l,c=1/0;++this.tick===4294967295&&(this.stamp.fill(0),this.tick=1);const f=this.tick,h=this.cell,d=this.gx0,g=this.gz0,v=d+this.nx*h,p=g+this.nz*h;let m=0,y=u;if(Math.abs(s)<Ri){if(e<d||e>v)return 1/0}else{const C=(d-e)/s,I=(v-e)/s;m=Math.max(m,Math.min(C,I)),y=Math.min(y,Math.max(C,I))}if(Math.abs(a)<Ri){if(i<g||i>p)return 1/0}else{const C=(g-i)/a,I=(p-i)/a;m=Math.max(m,Math.min(C,I)),y=Math.min(y,Math.max(C,I))}if(m>y)return 1/0;let _=Math.min(this.nx-1,Math.max(0,Math.floor((e+s*m-d)/h))),w=Math.min(this.nz-1,Math.max(0,Math.floor((i+a*m-g)/h)));const S=s>0?1:-1,M=a>0?1:-1,x=Math.abs(s)>Ri?h/Math.abs(s):1/0,b=Math.abs(a)>Ri?h/Math.abs(a):1/0;let A=x===1/0?1/0:(d+(s>0?_+1:_)*h-e)/s,E=b===1/0?1/0:(g+(a>0?w+1:w)*h-i)/a,P=m;const R=this.xf,D=this.box;for(;!(P>=u);){const C=w*this.nx+_;for(let I=this.cellStart[C];I<this.cellStart[C+1];I++){const U=this.cellItems[I];if(this.stamp[U]===f||(this.stamp[U]=f,o!==0&&this.subj[U]===1!=(o===2)))continue;const O=U*6;if(!(Zu(e,t,i,s,r,a,D[O],D[O+1],D[O+2],D[O+3],D[O+4],D[O+5],u)<u))continue;const k=U*16,G=e-R[k+9],Z=t-R[k+10],me=i-R[k+11],le=R[k+12],q=(R[k]*G+R[k+3]*Z+R[k+6]*me)/le+R[k+13],$=(R[k+1]*G+R[k+4]*Z+R[k+7]*me)/le+R[k+14],K=(R[k+2]*G+R[k+5]*Z+R[k+8]*me)/le+R[k+15],j=R[k]*s+R[k+3]*r+R[k+6]*a,V=R[k+1]*s+R[k+4]*r+R[k+7]*a,B=R[k+2]*s+R[k+5]*r+R[k+8]*a,te=this.occ[U];let ee;if(this.rig[U]){const Ce=xr.walkerBoxMarginMetres/le;ee=Nw(q,$,K,j,V,B,te.x0-Ce,te.y0-Ce,te.z0-Ce,te.x1+Ce,te.y1+Ce,te.z1+Ce,u/le)}else ee=Fw(te,q,$,K,j,V,B,u/le,this.share[U],this.seed[U]);const ce=ee*le;ce<u&&(u=ce,c=ce)}if(A<=E){if(P=A,_+=S,A+=x,_<0||_>=this.nx)break}else if(P=E,w+=M,E+=b,w<0||w>=this.nz)break;if(P>y)break}return c}}const hm={v:0};function Zu(n,e,t,i,s,r,a,l,o,u,c,f,h){let d=0,g=h,v,p;if(Math.abs(i)<Ri){if(n<a||n>u)return 1/0}else{if(v=(a-n)/i,p=(u-n)/i,v>p){const m=v;v=p,p=m}v>d&&(d=v),p<g&&(g=p)}if(Math.abs(s)<Ri){if(e<l||e>c)return 1/0}else{if(v=(l-e)/s,p=(c-e)/s,v>p){const m=v;v=p,p=m}v>d&&(d=v),p<g&&(g=p)}if(Math.abs(r)<Ri){if(t<o||t>f)return 1/0}else{if(v=(o-t)/r,p=(f-t)/r,v>p){const m=v;v=p,p=m}v>d&&(d=v),p<g&&(g=p)}return hm.v=g,d<=g?d:1/0}const Ow=[],Bn=new Int32Array(4);let cc=new Int32Array(64);const Eo=Ge.frame,Xr=Ge.blend,Ei=re.plain,fm=Dn.timeOfDay,Wo=Dn.buildings,dm=Dn.street,uc=Dn.clouds;function kw(){return{hour:fm.defaultHour,timeSec:0,haze:[Ei.haze.chase[0],Ei.haze.chase[1]],hazeFullMetres:Ei.haze.chase[1],shadowFocus:{x:0,y:0,z:0},shadowHalf:Ei.shadowHalfMetres.chase,litTower:Wo.litTower/Eo.windowShareOutOf,litOther:Wo.litOther/Eo.windowShareOutOf,signLit:dm.signLitShare/Eo.windowShareOutOf,cloudCover:0,cloudShare:0}}function Bw(n,e){const t=uc.zoomFadeCellsPerPx,i=1/e.cpu.ppc/e.toGridY,s=1-(1-t.keep)*Om(t.from,t.to,i),r=km(Bm[1],n*s);return r>0?Math.pow(r,uc.coverCurve)*uc.maxCoverage:0}const zw={x:0,y:0,z:0};function hc(n,e){const t=n!==void 0&&Number.isFinite(n)?n:e;return xo(t/Eo.windowShareOutOf)}function Gw(n){const e=hy(n,zw);if(Number.isFinite(e.x)&&Number.isFinite(e.y)&&Number.isFinite(e.z))return e;const t=n.cpu;return e.x=t.eyeX,e.y=t.eyeY,e.z=t.eyeZ*t.cellMetres,e}function Hw(n,e,t){const i=t.cpu,s=i.cellMetres,r=Ld(e.world);n.hour=Number.isFinite(e.timeOfDay)?e.timeOfDay:fm.defaultHour,n.timeSec=Number.isFinite(e.timeSec)?e.timeSec:0,n.litTower=hc(e.windows?.litTower,Wo.litTower),n.litOther=hc(e.windows?.litOther,Wo.litOther),n.signLit=hc(e.windows?.signLit,dm.signLitShare),e.cloudCover===void 0?(n.cloudCover=Number.NaN,n.cloudShare=Number.NaN):(n.cloudCover=Number.isFinite(e.cloudCover)?xo(e.cloudCover):0,n.cloudShare=Bw(n.cloudCover,t));const[a,l]=Xr.mapToChasePerspective,o=xo((i.perspective-a)/(l-a)),u=Gw(t),c=u.z-mh(r,u.x,u.y)*s,[f,h]=Xr.chaseToFootEyeAglMetres,d=xo((f-c)/(f-h)),g=uy(t),v=Ei.haze.map,p=Ei.haze.chase,m=Ei.haze.foot;n.haze[0]=Math.max(0,Fi(Fi(v[0],p[0],o),m[0],d)+g),n.haze[1]=Math.max(0,Fi(Fi(v[1],p[1],o),m[1],d)+g),n.hazeFullMetres=n.haze[1];const y=Math.max(Ei.shadowHalfMetres.map,t.metresPerPixel*t.outW*Xr.mapWidthShare);n.shadowHalf=Fi(Fi(y,Ei.shadowHalfMetres.chase,o),Ei.shadowHalfMetres.foot,d);const _=Fi(Xr.aheadEyeShares[0],Xr.aheadEyeShares[1],d)*i.distance,w=Fi(i.tx-i.snapDX,u.x+i.fx*_,o),S=Fi(i.ty-i.snapDY,u.y+i.fy*_,o);return an(t.origin,s,w,S,mh(r,w,S)*s,n.shadowFocus),n}const Ww=Ge.sight,Vw=Id.unitMetres,$w=Id.offsetMetres,Xw=65536;function jf(n,e,t){const i=Math.floor(e/n.cellMetres),s=Math.floor(t/n.cellMetres),r=1<<n.shift;if(i<n.gx0||s<n.gy0||i>=n.gx0+r||s>=n.gy0+r)return-1;const a=n.tileShift,l=(r>>a)-1,o=i>>a,u=s>>a;if(n.slotTile[(u&l)<<n.shift-a|o&l]!==u*Xw+o)return-1;const c=r-1;return(s&c)<<n.shift|i&c}function ao(n){throw new Error(`render-gpu/sight.ts: SceneGround answers fine() and drawnSolid() only — ${n}() reads the street layer's own ground (src/street/ground.ts), not the renderer's scene`)}function qw(n){const e=n.meta.cellMetres,t=n.meta.heightUnitMetres,i=n.size;let s=null,r=0,a=0;function l(o,u,c,f){const h=s;if(h){const v=o*e,p=u*e,m=(c+$w)/Vw,y=h.levels;for(let _=0;_<y.length;_++){const w=y[_],S=Math.min(w.stopMetres*r,a);if(!(S>0)||!(f<=S))continue;const M=jf(w,v,p);if(!(M<0))return w.top0[M]>m+Ww.levelSlackUnits}}if(!(o>=0&&u>=0&&o<i&&u<i))return!1;const d=(u|0)*i+(o|0);return(n.material[d]===ds.Building?n.surface[d]:n.ground[d])*t>c}return{setScene(o){if(s=o,!o){r=0,a=0;return}const u=o.fade;r=u>0?u<1?u:1:0;const c=o.levels,f=c.length>0?c[c.length-1].stopMetres*r:0,h=o.farStartMetres;a=h>=0&&h<f?h:f},fine(o,u){const c=s;return!c||c.levels.length===0?!1:jf(c.levels[0],o*e,u*e)>=0},drawnSolid:l,standHeight:()=>ao("standHeight"),blocked:()=>ao("blocked"),ceiling:()=>ao("ceiling"),lightAt:()=>ao("lightAt")}}function Eu(n,e=!1){const t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},a={},l=n[0].morphTargetsRelative,o=new Nt;o.morphTargetsRelative=l;let u=0;for(let c=0;c<n.length;++c){const f=n[c];let h=0,d=0;if(t!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const g in f.attributes){if(!i.has(g))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+'. All geometries must have compatible attributes; make sure "'+g+'" attribute exists among all geometries, or in none of them.'),null;r[g]===void 0&&(r[g]=[]),r[g].push(f.attributes[g]),h++}if(h!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". Make sure all geometries have the same number of attributes."),null;if(l!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const g in f.morphAttributes){if(!s.has(g))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+".  .morphAttributes must be consistent throughout all geometries."),null;if(f.morphAttributes[g].length!==n[0].morphAttributes[g].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+'. All geometries must have the same number of morph targets for the "'+g+'" morph attribute.'),null;a[g]===void 0&&(a[g]=[]),a[g].push(f.morphAttributes[g]),d++}if(d!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". Make sure all geometries have the same number of morph attributes."),null;if(e){let g;if(t)g=f.index.count;else if(f.attributes.position!==void 0)g=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". The geometry must have either an index or a position attribute"),null;o.addGroup(u,g,c),u+=g}}if(t){let c=0;const f=[];for(let h=0;h<n.length;++h){const d=n[h].index;for(let g=0;g<d.count;++g)f.push(d.getX(g)+c);c+=n[h].attributes.position.count}o.setIndex(f)}for(const c in r){const f=Kf(r[c]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" attribute."),null;o.setAttribute(c,f)}for(const c in a){const f=a[c][0].length;if(f!==0){o.morphAttributes=o.morphAttributes||{},o.morphAttributes[c]=[];for(let h=0;h<f;++h){const d=[];for(let v=0;v<a[c].length;++v)d.push(a[c][v][h]);const g=Kf(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" morphAttribute."),null;o.morphAttributes[c].push(g)}}}return o}function Kf(n){let e,t,i,s=-1,r=0;for(let u=0;u<n.length;++u){const c=n[u];if(e===void 0&&(e=c.array.constructor),e!==c.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=c.itemSize),t!==c.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=c.normalized),i!==c.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=c.gpuType),s!==c.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=c.count*t}const a=new e(r),l=new nt(a,t,i);let o=0;for(let u=0;u<n.length;++u){const c=n[u];if(c.isInterleavedBufferAttribute){const f=o/t;for(let h=0,d=c.count;h<d;h++)for(let g=0;g<t;g++){const v=c.getComponent(h,g);l.setComponent(h+f,g,v)}}else a.set(c.array,o);o+=c.count*t}return s!==void 0&&(l.gpuType=s),l}function Zf(n,e=1e-4){e=Math.max(e,Number.EPSILON);const t={},i=n.getIndex(),s=n.getAttribute("position"),r=i?i.count:s.count;let a=0;const l=Object.keys(n.attributes),o=[],u=new Map,c=[],f=["getX","getY","getZ","getW"],h=e*.5,d=Math.log10(1/e),g=Math.pow(10,d),v=h*g;for(let m=0;m<r;m++){const y=i?i.getX(m):m;let _="";for(let w=0,S=l.length;w<S;w++){const M=l[w],x=n.getAttribute(M),b=x.itemSize;for(let A=0;A<b;A++)_+=`${Math.trunc(x[f[A]](y)*g+v)},`}_ in t?c.push(t[_]):(o.push(y),t[_]=a,c.push(a),a++)}const p=n.clone();for(const m in n.attributes)p.setAttribute(m,Jf(n.attributes[m],o,u));for(const m in n.morphAttributes)p.morphAttributes[m]=n.morphAttributes[m].map(y=>Jf(y,o,u));return p.setIndex(c),p}function Jf(n,e,t=new Map){const i=n.isInterleavedBufferAttribute,s=i?n.data:n,r=i?s.stride:n.itemSize;let a=i?t.get(s):void 0;if(a===void 0){const o=new s.array.constructor(e.length*r);for(let u=0;u<e.length;u++)for(let c=0;c<r;c++)o[u*r+c]=s.array[e[u]*r+c];a=i?new s.constructor(o,r,s.meshPerAttribute):new n.constructor(o,n.itemSize,n.normalized,n.meshPerAttribute),a.setUsage(s.usage),i&&t.set(s,a)}const l=i?new n.constructor(a,n.itemSize,n.offset,n.normalized):a;return l.name=n.name,i||(l.gpuType=n.gpuType),l}const vr=(n,e,t)=>[n,t,-e],Fs=(n,e)=>Math.sign(n)*Math.pow(Math.abs(n),e);function Ks(n,e,t,i,s,r=!0){const a=[];for(let v=0;v<=e;v++)for(let p=0;p<=n;p++)a.push(t(r?p%n:p,v));const l=(v,p)=>a[Math.min(e,Math.max(0,p))*(n+1)+(r?(v%n+n)%n:Math.min(n,Math.max(0,v)))],o=[];for(let v=0;v<=e;v++)for(let p=0;p<=n;p++){const m=l(p+1,v),y=l(p-1,v),_=l(p,v+1),w=l(p,v-1),S=m[0]-y[0],M=m[1]-y[1],x=m[2]-y[2],b=_[0]-w[0],A=_[1]-w[1],E=_[2]-w[2];let P=M*E-x*A,R=x*b-S*E,D=S*A-M*b;const C=Math.hypot(P,R,D);if(C<1e-9){const I=l(p,Math.round(e/2)),U=l(p,v);P=0,R=0,D=U[2]>I[2]?1:-1}else P/=C,R/=C,D/=C;o.push([P,R,D])}const u=[],c=[],f=[],h=v=>{const p=a[v],m=o[v],y=vr(p[0],p[1],p[2]),_=vr(m[0],m[1],m[2]);u.push(y[0],y[1],y[2]),c.push(_[0],_[1],_[2])},d=(v,p,m)=>{const y=a[v],_=a[p],w=a[m],S=(y[0]+_[0]+w[0])/3,M=(y[1]+_[1]+w[1])/3,x=(y[2]+_[2]+w[2])/3;if(s&&!s(S,M,x))return;const b=_[0]-y[0],A=_[1]-y[1],E=_[2]-y[2],P=w[0]-y[0],R=w[1]-y[1],D=w[2]-y[2],C=A*D-E*R,I=E*P-b*D,U=b*R-A*P,O=o[v],k=C*O[0]+I*O[1]+U*O[2]<0?[v,m,p]:[v,p,m];for(const Z of k)h(Z);const G=i(S,M,x);for(let Z=0;Z<3;Z++)f.push((G>>16&255)/255,(G>>8&255)/255,(G&255)/255)};for(let v=0;v<e;v++)for(let p=0;p<n;p++){const m=v*(n+1)+p,y=m+1,_=m+n+2,w=m+n+1;d(m,y,_),d(m,_,w)}const g=new Nt;return g.setAttribute("position",new nt(new Float32Array(u),3)),g.setAttribute("normal",new nt(new Float32Array(c),3)),g.setAttribute("color",new nt(new Float32Array(f),3)),g}function Ls(n,e,t,i,s,r,a={}){const l=2/t;return Ks(i,s,(o,u)=>{const c=o/i*Math.PI*2,f=-Math.PI/2+u/s*Math.PI,h=Math.cos(f),d=Math.sin(f),g=a.tuck&&d<0?1-a.tuck*d*d:1;return[n[0]+e[0]*g*Fs(h,l)*Fs(Math.cos(c),l),n[1]+e[1]*Fs(h,l)*Fs(Math.sin(c),l),n[2]+e[2]*Fs(d,l)]},r,a.keep)}function hr(n,e,t,i,s,r,a,l,o={}){const u=2/s,c=o.capBottom??0,f=o.capTop??0,h=re.walker.capRings,d=[];for(let v=0;v<=h;v++){const p=v/h*(Math.PI/2);d.push({z:n+c*(1-Math.cos(p)),k:c>0?Math.sin(p):1})}const g=[];for(let v=1;v<a;v++)g.push(n+c+(e-f-n-c)*v/a);for(const v of o.breaks??[])v>n+c+1e-4&&v<e-f-1e-4&&g.push(v);g.sort((v,p)=>v-p);for(const v of g)d.push({z:v,k:1});for(let v=0;v<=h;v++){const p=v/h*(Math.PI/2);d.push({z:e-f+f*Math.sin(p),k:f>0?Math.cos(p):1})}return c>0&&(d[0].k=.001),f>0&&(d[d.length-1].k=.001),Ks(r,d.length-1,(v,p)=>{const{z:m,k:y}=d[p],_=v/r*Math.PI*2,w=o.cy?o.cy(m):0;return[t(m)*y*Fs(Math.cos(_),u),w+i(m)*y*Fs(Math.sin(_),u),m]},l)}function oo(n,e,t,i,s,r,a){const l=[],o=re.walker.capRings;for(let c=0;c<=o;c++){const f=c/o*(Math.PI/2);l.push([e*Math.sin(f)+1e-4,-e*Math.cos(f)])}for(let c=1;c<r;c++){const f=c/r;l.push([e+(t-e)*f,n*f])}for(let c=0;c<=o;c++){const f=c/o*(Math.PI/2);l.push([t*Math.cos(f)+1e-4,n+t*Math.sin(f)])}return Ks(s,l.length-1,(c,f)=>{const h=-(c/s)*Math.PI*2,[d,g]=l[f];return[Math.cos(h)*d*i,Math.sin(h)*d,-g]},(c,f,h)=>a(-h,c))}function lo(n,e,t,i,s=1){const r=n.length;return Ks(t,r-1,(a,l)=>{const o=n[l],u=n[Math.max(0,l-1)],c=n[Math.min(r-1,l+1)];let f=c[0]-u[0],h=c[1]-u[1],d=c[2]-u[2];const g=Math.hypot(f,h,d)||1;f/=g,h/=g,d/=g;let v=h*0-d*0,p=d*1-f*0,m=f*0-h*1;Math.hypot(v,p,m)<.001&&(v=0,p=0,m=1);const y=Math.hypot(v,p,m);v/=y,p/=y,m/=y;const _=p*d-m*h,w=m*f-v*d,S=v*h-p*f,M=a/t*Math.PI*2,x=Math.cos(M)*e,b=Math.sin(M)*e*s;return[o[0]+_*x+v*b,o[1]+w*x+p*b,o[2]+S*x+m*b]},()=>i)}function Yw(n,e,t,i){return Ks(n,e,(s,r)=>t(s/n,r/e),()=>i,void 0,!1)}const Vt=_r.model,mt=Vt.palette,_n=Vt.body,ks=Vt.widths,ge=Vt.sculpt,zt=Vt.backpack,vn=Vt.arm,Gt=re.walker,Ne=Gt.detail,ui=Ne.strap,Qf=n=>n<=0?0:n>=1?1:n*n*(3-2*n),ed=(n,e,t)=>n+(e-n)*Math.max(0,Math.min(1,t));function jw(n){return _n.shoeTopMetres*Math.cos(n)+Math.max(ks.toeMetres*Math.sin(n),-.11000000000000001*Math.sin(n))}function td(n,e,t){return Math.cos(n)*Vt.leg.thighMetres+Math.cos(n-e)*Vt.leg.shinMetres+jw(t)}const Kw={kl:0,kr:0,kneeL:0,kneeR:0};function Zw(n,e){const s=-n/2,r=-n/2,a=Math.hypot(1,r),l=Math.hypot(0,s),o=Math.atan2(s,0),u=Math.atan2(r,1);return e.first=(u+o)/2,e.second=(u-o)/2,e.s1=a+l,e.s2=a-l,e}const qr={first:0,second:0,s1:1,s2:1};class ua{root=new mn;lift=new mn;leanPivot=new mn;shearTurn=new mn;upper=new mn;parts={};down=new z(0,-1,0);tmp=new z;q=new vi;triangles;drawParts;constructor(e){this.root.name="walker",this.root.add(this.lift),this.lift.add(this.leanPivot),this.leanPivot.position.y=_n.hipMetres,this.leanPivot.add(this.shearTurn),this.shearTurn.add(this.upper),this.upper.position.y=-.9;const t=()=>cl.uRigInv.value.copy(this.root.matrixWorld).invert(),i=(B,te,ee,ce,Ce,oe,ye)=>{t(),am(B,te,ee,ce,Ce,oe)},s=(B,te,ee=this.root)=>{const ce=new vt(te,e);return ce.name=B,ce.onBeforeRender=t,ce.onBeforeShadow=i,ce.castShadow=!0,ce.receiveShadow=!0,ee.add(ce),this.parts[B]=ce,ce},r=()=>oo(Vt.leg.thighMetres,ge.thighRadiusMetres,ge.kneeRadiusMetres,ge.legAcrossShare,Gt.limbSegments,Gt.limbRings,()=>mt.trousers),a=()=>oo(Vt.leg.shinMetres,ge.kneeRadiusMetres,ge.ankleRadiusMetres,ge.legAcrossShare,Gt.limbSegments,Gt.limbRings,B=>B>Vt.leg.shinMetres-ge.cuffMetres?mt.trousersCuff:mt.trousers);for(const B of["L","R"])s("thigh"+B,r()),s("shin"+B,a()),s("shoe"+B,Qw(B==="L"?-1:1));const l=_n.hipMetres,o=_n.waistMetres;s("pelvis",hr(l-ge.pelvisDropMetres,o,B=>ks.hipMetres/2*(B<l?1-ge.pelvisTuckShare*(l-B)/ge.pelvisDropMetres:1),()=>ge.waistHalfDepthMetres,ge.roundness,Gt.loftSegments,4,(B,te,ee)=>{if(ee>o-ge.beltMetres)return te>0&&Math.abs(B)<Ne.buckleHalf?mt.buckle:mt.belt;const ce=o-ee;return te<0&&Math.abs(B)>=ge.backPocketX[0]&&Math.abs(B)<=ge.backPocketX[1]&&ce>=ge.backPocketDrop[0]&&ce<=ge.backPocketDrop[1]?mt.trousersDark:mt.trousers},{capBottom:ge.pelvisDropMetres*Ne.pelvisCapShare,breaks:[o-ge.beltMetres,o-ge.backPocketDrop[1],o-ge.backPocketDrop[0]]}),this.upper);const u=_n.shoulderMetres,c=B=>{let te=ed(ge.waistHalfMetres,ge.chestHalfMetres,Qf((B-o)/ge.chestRiseMetres));const ee=B-(u-ge.shoulderRoundMetres);return ee>0&&(te-=ge.shoulderRoundMetres-Math.sqrt(Math.max(0,ge.shoulderRoundMetres**2-ee*ee))),Math.max(te,ge.neckRadiusMetres+Ne.shoulderOverNeck)},f=B=>ed(ge.waistHalfDepthMetres,ge.chestHalfDepthMetres,Qf((B-o)/ge.chestRiseMetres)),h=u-ge.yokeDropMetres,d=o+ge.pocketRiseMetres,g=Gt.seamMetres;s("torso",hr(o-Ne.torsoBelow,u+Ne.torsoAbove,c,f,ge.roundness,Gt.loftSegments,Gt.loftRings,(B,te,ee)=>{const ce=Math.abs(B),Ce=te>0;return ee<o+ge.hemMetres?mt.jacketTrim:Ce&&Math.abs(ee-d)<g&&ce>=ge.pocketX[0]&&ce<=ge.pocketX[1]||!Ce&&Math.abs(ee-h)<g?mt.jacketSeam:mt.jacket},{capTop:Gt.shoulderCapMetres,breaks:[o+ge.hemMetres,d-g,d+g,h-g,h+g]}),this.upper);const v=ge.roundness,p=(B,te)=>f(te)*Math.pow(Math.max(0,1-Math.pow(Math.abs(B)/c(te),v)),1/v),m=B=>ge.openHalfMetres+ge.openWidenMetres*((B-o)/(u-o)),y=u-Gt.teeBelowShoulderMetres,_=(B,te,ee,ce,Ce,oe)=>Yw(8,Gt.loftRings,(ye,pe)=>{const ne=ee+(ce-ee)*pe,Ie=te(ne)+(B(ne)-te(ne))*ye;return[Ie,p(Ie,ne)+oe,ne]},Ce);s("tee",_(B=>-m(B),B=>m(B),o,y,mt.tee,Gt.panelLiftMetres),this.upper);for(const B of[-1,1]){const te=ce=>B*m(ce),ee=ce=>B*(m(ce)+ge.zipMetres);s("zip"+B,_(B>0?te:ee,B>0?ee:te,o+ge.hemMetres,y,mt.zip,Gt.panelLiftMetres*1.5),this.upper)}s("neck",hr(u-Ne.neckBelow,_n.chinMetres+Ne.neckAbove,()=>ge.neckRadiusMetres,()=>ge.neckRadiusMetres,2,Ne.neckSegments,3,()=>mt.skinShade),this.upper);const w=[];for(let B=0;B<=Ne.collarPoints;B++){const te=-Math.PI/2+Ne.collarOpenRad+B/Ne.collarPoints*(Math.PI*2-2*Ne.collarOpenRad),ee=(ge.collarRadii[0]+ge.collarRadii[1])/2;w.push([Math.cos(te)*ee,Math.sin(te)*ee*Ne.collarStretch-Ne.collarBack,u+ge.collarMetres/2])}s("collar",lo(w.map(B=>[B[0],-B[1],B[2]]),(ge.collarRadii[1]-ge.collarRadii[0])/2+Ne.collarThick,8,mt.jacketTrim,Ne.collarFlat),this.upper);const M=Vt.heightMetres-ge.hairMetres,x=(_n.chinMetres+M)/2,b=(M-_n.chinMetres)/2;s("head",Ls([0,0,x],[ge.headHalfMetres,ge.headHalfDepthMetres,b],ge.roundness,Gt.headSegments,Gt.headRings,()=>mt.skin,{tuck:ge.jawTuckShare}),this.upper);const A=ge.headHalfMetres+ge.hairMetres*Ne.hairOverShare,E=ge.headHalfDepthMetres+ge.hairMetres/2,P=b+ge.hairMetres,R=-.03/2,D=2/ge.roundness,C=B=>{const te=Math.sin(B),ee=ge.earZ[1];let ce=te>=0?ee+(ge.hairlineMetres-ee)*te:ee+(-.085-ee)*-te;return ce-=ge.fringeSweepMetres*Math.max(0,Math.min(1,Math.cos(B)*2))*Math.max(0,Math.min(1,te*2)),ce};s("hair",Ks(Gt.headSegments,Gt.headRings,(B,te)=>{const ee=B/Gt.headSegments*Math.PI*2,ce=Math.sign(C(ee))*Math.pow(Math.min(1,Math.abs(C(ee)/P)),ge.roundness/2),Ce=Math.asin(Math.max(-1,Math.min(1,ce))),oe=Ce+(Math.PI/2-Ce)*te/Gt.headRings,ye=Math.cos(oe),pe=Math.sin(oe),ne=Ie=>Math.sign(Ie)*Math.pow(Math.abs(Ie),D);return[A*ne(ye)*ne(Math.cos(ee)),R+E*ne(ye)*ne(Math.sin(ee)),x+Ne.hairLift+P*ne(pe)]},(B,te,ee)=>te<0&&ee-x<-.085+Ne.hairDarkBand?mt.hairDark:mt.hair),this.upper);const I=ge.headHalfDepthMetres*Ne.faceFrontShare;for(const B of[-1,1])s("eye"+B,Ls([B*ge.eyeXMetres,I-Ne.eyeInset,x+(ge.eyeZ[0]+ge.eyeZ[1])/2],[Ne.eye[0],Ne.eye[1],(ge.eyeZ[1]-ge.eyeZ[0])/2*Ne.eyeHeightShare],2,10,6,()=>mt.eye),this.upper),s("ear"+B,Ls([B*(ge.headHalfMetres+Ne.earOut),(ge.earY[0]+ge.earY[1])/2,x+(ge.earZ[0]+ge.earZ[1])/2],[Ne.earDepth,(ge.earY[1]-ge.earY[0])/2,(ge.earZ[1]-ge.earZ[0])/2],Ne.earRound,10,8,()=>mt.skinShade),this.upper);s("nose",Ls([0,I+Ne.noseOut,x+ge.eyeZ[0]-Ne.noseDrop],Ne.nose,2.2,10,8,()=>mt.skin),this.upper),s("mouth",Ls([0,I-Ne.mouthIn,x-ge.mouthDropMetres],[ge.mouthHalfMetres,Ne.mouth[0],Ne.mouth[1]],2.4,12,6,()=>mt.lip),this.upper);const U=u-zt.dropMetres,O=U-zt.heightMetres,W=-.18;s("pack",hr(O,U,B=>zt.widthMetres/2-(B>U-zt.roundMetres?Ne.packTaper*(B-U+zt.roundMetres):0),()=>zt.depthMetres/2,Ne.packRound,Gt.loftSegments,8,(B,te,ee)=>{const ce=U-ee;return ce<zt.lidMetres?mt.packLid:ce<zt.lidMetres+Ne.lidSeam?mt.packDark:mt.pack},{cy:()=>W,capBottom:zt.roundMetres*Ne.packCapShare,capTop:zt.roundMetres}),this.upper);const k=O+zt.pocketZ[0],G=O+zt.pocketZ[1];s("packPocket",hr(k,G,()=>zt.pocketHalfMetres,()=>Ne.pocketDepth,3,24,4,(B,te,ee)=>ee>G-Ne.pocketZip?mt.zip:mt.packPocket,{cy:()=>W-zt.depthMetres/2,capBottom:Ne.pocketCap,capTop:Ne.pocketCap}),this.upper);for(const B of[-1,1])s("sidePocket"+B,hr(O+Ne.sidePocketInset,O+zt.sidePocketMetres,()=>Ne.sidePocketHalf,()=>zt.depthMetres*Ne.sidePocketDepthShare,3,16,3,()=>mt.strap,{cy:()=>W+Ne.sidePocketInset,capBottom:Ne.sidePocketInset,capTop:Ne.sidePocketInset}),this.upper).position.x=B*(zt.widthMetres/2+Ne.sidePocketOut);const Z=[];for(let B=0;B<=Ne.handlePoints;B++){const te=B/Ne.handlePoints*Math.PI;Z.push([Math.cos(te)*Ne.handle[0],W,U+Math.sin(te)*Ne.handle[1]])}s("handle",lo(Z,Ne.handleRadius,6,mt.strap),this.upper);for(const B of[-1,1]){const te=B*(zt.strapX[0]+zt.strapX[1])/2,ee=[[te,W+zt.depthMetres*ui.packDepthShare,U-ui.packDrop],[te,-.115*ui.backShare,u+ui.overShoulder],[te,0,u+ui.topRise],[te,ge.chestHalfDepthMetres*ui.frontShare,u],[te,ge.chestHalfDepthMetres+ui.chestOut,u-zt.chestStrapDropMetres],[te*ui.endSpread,ge.chestHalfDepthMetres*ui.endShare+ui.endOut,u-zt.chestStrapDropMetres-ui.endDrop]];s("strap"+B,lo(ee,Ne.strapRadius,8,mt.strap,Ne.strapFlat),this.upper)}const me=[[-.125,ge.chestHalfDepthMetres+Ne.chestStrapOut,u-zt.chestStrapDropMetres],[zt.strapX[1],ge.chestHalfDepthMetres+Ne.chestStrapOut,u-zt.chestStrapDropMetres]];s("chestStrap",lo(me,Ne.chestStrapRadius,6,mt.strap,Ne.chestStrapFlat),this.upper),s("buckle",Ls([0,ge.chestHalfDepthMetres+Ne.buckleOut,u-zt.chestStrapDropMetres],Ne.buckle,4,10,6,()=>mt.buckle),this.upper);const le=vn.upperMetres+vn.lowerMetres*ge.sleeveForearmShare,q=vn.upperMetres+vn.lowerMetres-vn.handMetres;for(const B of["L","R"])s("upperArm"+B,oo(vn.upperMetres,ge.shoulderRadiusMetres,ge.elbowRadiusMetres,1,Gt.limbSegments,Gt.limbRings,()=>mt.jacket),this.lift),s("foreArm"+B,oo(vn.lowerMetres-vn.handMetres*Ne.foreArmHandShare,ge.elbowRadiusMetres,ge.wristRadiusMetres,1,Gt.limbSegments,Gt.limbRings,te=>{const ee=vn.upperMetres+te;return ee<le-ge.sleeveCuffMetres?mt.jacket:ee<le?mt.jacketTrim:ee<q?mt.skinShade:mt.skin}),this.lift),s("hand"+B,Ls([0,0,0],[ge.handRadiusMetres*Ne.hand[0],ge.handRadiusMetres*Ne.hand[1],ge.handRadiusMetres*Ne.hand[2]],2.2,14,10,()=>mt.skin),this.lift);const $=this.upper.children.filter(B=>B instanceof vt&&!/^(upperArm|foreArm|hand)[LR]$/.test(B.name)),K=$.map(B=>(B.updateMatrix(),B.geometry.clone().applyMatrix4(B.matrix))),j=Eu(K);for(const B of $)this.upper.remove(B),B.geometry.dispose(),delete this.parts[B.name];s("body",j,this.upper);let V=0;for(const B of Object.values(this.parts))V+=B.geometry.getAttribute("position").count/3|0;this.triangles=V,this.drawParts=Object.keys(this.parts).length,this.pose(zm())}warmMeshes(e){const t=this.parts.body;return e.filter(i=>!!i).map(i=>{const s=new vt(t.geometry,i);return s.castShadow=!0,s.receiveShadow=!0,s.layers.mask=t.layers.mask,s})}setMaterial(e){for(const t of Object.values(this.parts))t.material=e}setDepthMaterial(e){for(const t of Object.values(this.parts))t.customDepthMaterial=e}pose(e,t=Kw){const i=Math.max(td(e.thighL,e.kneeL,e.footL),td(e.thighR,e.kneeR,e.footR)),s=i-_n.hipMetres,r=e.lean/(Vt.heightMetres-_n.hipMetres);this.lift.position.y=s,Zw(r,qr),this.leanPivot.rotation.x=qr.first,this.leanPivot.scale.set(1,qr.s1,qr.s2),this.shearTurn.rotation.x=qr.second;const a=Vt.voxelMetres,l=ks.legGapMetres/2+ks.legMetres/2;for(const[f,h,d,g,v,p,m]of[["L",-1,e.thighL,e.kneeL,e.footL,t.kl,t.kneeL],["R",1,e.thighR,e.kneeR,e.footR,t.kr,t.kneeR]]){const y=Math.sin(d)*Vt.leg.thighMetres,_=i-Math.cos(d)*Vt.leg.thighMetres+m*a,w=d-g,S=y+Math.sin(w)*Vt.leg.shinMetres,M=_-m*a-Math.cos(w)*Vt.leg.shinMetres+p*a;this.seg(this.parts["thigh"+f],h*l,0,i,h*l,y,_,m>0?Vt.leg.thighMetres:0),this.seg(this.parts["shin"+f],h*l,y,_,h*l,S,M,p>0||m>0?Vt.leg.shinMetres:0);const x=this.parts["shoe"+f];x.position.set(...vr(h*l,S,M)),x.rotation.set(-v,0,0)}const o=ge.chestHalfMetres+ge.shoulderRadiusMetres*Ne.armOutShare,u=_n.shoulderMetres-Ne.shoulderDrop,c=r*(_n.shoulderMetres-_n.hipMetres);for(const[f,h,d,g]of[["L",-1,e.armL,e.elbowL],["R",1,e.armR,e.elbowR]]){const v=c+Math.sin(d)*vn.upperMetres,p=u-Math.cos(d)*vn.upperMetres,m=d+g,y=vn.lowerMetres-vn.handMetres*Ne.foreArmHandShare,_=v+Math.sin(m)*y,w=p-Math.cos(m)*y;this.seg(this.parts["upperArm"+f],h*o,c,u,h*o,v,p),this.seg(this.parts["foreArm"+f],h*o,v,p,h*o,_,w);const S=v+Math.sin(m)*(vn.lowerMetres-vn.handMetres*Ne.handReach),M=p-Math.cos(m)*(vn.lowerMetres-vn.handMetres*Ne.handReach),x=this.parts["hand"+f];x.position.set(...vr(h*o,S,M)),x.rotation.set(m,0,0)}}seg(e,t,i,s,r,a,l,o=0){const u=vr(t,i,s),c=vr(r,a,l);e.position.set(u[0],u[1],u[2]),this.tmp.set(c[0]-u[0],c[1]-u[1],c[2]-u[2]);const f=this.tmp.length();this.tmp.normalize(),this.q.setFromUnitVectors(this.down,this.tmp),e.quaternion.copy(this.q),e.scale.set(1,o>0?f/o:1,1)}static cycle(e,t){return t<=0?Pa(e,!1):t>=1?Pa(e,!0):Gm(Pa(e,!1),Pa(e,!0),t)}static strideMetres(e){return Vt.strideMetres*(1+(Vt.runStrideShare-1)*e)}}function Jw(n,e=re.opt.actors.walkerLow){const t=re.walker,i=[];for(const[s,r]of Object.entries(e)){const a=s in t?t:t.detail;i.push([a,s,a[s]]),a[s]=r}try{return new ua(n)}finally{for(const[s,r,a]of i)s[r]=a}}function Qw(n,e){const t=Vt.voxelMetres,i=t/2,s=Ge.walker.cellEps,r=ks.toeMetres,a=ks.legGapMetres/2+ks.legMetres/2,l=[];for(let j=0;j*t<=a+ge.shoeHalfWidthMetres+t;j++){const V=j*t-a;Math.abs(V)<=ge.shoeHalfWidthMetres+s&&l.push(V)}const o=Math.min(...l)-i,u=Math.max(...l)+i,c=n>0?o:-u,f=n>0?u:-o,h=-.15,d=j=>{let V=0;for(;h+(V+.5)*t<j-s;)V++;return h+V*t},g=-.15+_n.soleMetres+ge.toeHeightMetres,v=j=>j<=ge.ankleRadiusMetres?i:i+(g-i)*Math.min(1,(j-ge.ankleRadiusMetres)/(r-ge.ankleRadiusMetres)),p=j=>{if(j<=ge.ankleRadiusMetres)return v(j)+i;if(j>=ge.ankleRadiusMetres+t)return v(j);const V=(j-ge.ankleRadiusMetres)/t;return(v(ge.ankleRadiusMetres)+i)*(1-V)+v(ge.ankleRadiusMetres+t)*V},m=(f-c)/2,y=(c+f)/2,_=ge.toeRoundMetres,w=j=>{const V=(j-(r-_))/_;return V<=0?1:Ne.shoeToeTipShare+(1-Ne.shoeToeTipShare)*Math.sqrt(Math.max(0,1-V*V))},S=d(h+_n.soleMetres),M=h+Math.round((_n.soleMetres+ge.shoeStripeMetres)/t-.5)*t,x=M+t,b=d(h+_n.soleMetres+t),A=l.filter(j=>Math.abs(j)<t*Ne.shoeLaceCellShare),E=n>0?Math.min(...A)-i:-(Math.max(...A)+i),P=n>0?Math.max(...A)+i:-(Math.min(...A)-i),R=r-ge.laceFromToeMetres-ge.laceLengthMetres,D=r-ge.laceFromToeMetres,C=-.11000000000000001+t,I=r-ge.toeRoundMetres,U=-.11000000000000001+t,O=Ne.shoeEdgeMetres,W=[S,M,x,b].filter(j=>!0).sort((j,V)=>j-V),k=W.filter((j,V)=>V===0||j-W[V-1]>s),G=[-.11000000000000001+O,U,ge.ankleRadiusMetres,ge.ankleRadiusMetres+t,R,D,I,r-_,r-_/2,r-O].sort((j,V)=>j-V).filter((j,V,B)=>V===0||j-B[V-1]>s),Z=Ne.shoeEndCollapse,me=[{u:-.11000000000000001,k:Z,inset:O},{u:-.11000000000000001,k:1,inset:O},...G.map(j=>({u:j,k:1,inset:0})),{u:r,k:1,inset:O},{u:r,k:Z,inset:O}],le=(j,V)=>{const B=m*w(j)-V,te=p(j)-V,ee=h,ce=Math.max(Ne.shoeEdgeMinMetres,Math.min(O,B*Ne.shoeEdgeWidthShare,(te-ee)*Ne.shoeEdgeHeightShare)),Ce=y-B,oe=y+B,ye=(Me,We,Ve)=>{const Y=[];for(let N=1;N<=Ne.shoeCornerPoints;N++){const Te=Ve+N/(Ne.shoeCornerPoints+1)*(Math.PI/2);Y.push([Me+ce*Math.cos(Te),We+ce*Math.sin(Te)])}return Y},pe=Me=>Math.min(te-ce-Ne.shoeWallClampMetres,Math.max(ee+ce+Ne.shoeWallClampMetres,Me)),ne=k.map(pe),Ie=Math.max(Ce+ce,Math.min(oe-ce,E)),De=Math.max(Ce+ce,Math.min(oe-ce,P));return[[y,ee],[oe-ce,ee],...ye(oe-ce,ee+ce,-Math.PI/2),[oe,ee+ce],...ne.map(Me=>[oe,Me]),[oe,te-ce],...ye(oe-ce,te-ce,0),[oe-ce,te],[Math.max(Ie,De),te],[(Ie+De)/2,te],[Math.min(Ie,De),te],[Ce+ce,te],...ye(Ce+ce,te-ce,Math.PI/2),[Ce,te-ce],...ne.slice().reverse().map(Me=>[Ce,Me]),[Ce,ee+ce],...ye(Ce+ce,ee+ce,Math.PI),[Ce+ce,ee]]};let q=me.map(j=>le(j.u,j.inset));q=q.map(j=>[j[0],...j.slice(1).reverse()]);const $=eb(n,{mid:y,soleTop:S,stripeLo:M,stripeHi:x,tabLo:b,tabU1:U,stripeU0:C,stripeU1:I,laceA:E,laceB:P,laceU0:R,laceU1:D,top:p}),K=Ks(q[0].length,me.length-1,(j,V)=>{const B=me[V],te=q[V][j],ee=te[1];return[y+(te[0]-y)*B.k,B.u,ee]},$);return K.userData={paint:$,columns:q[0].length,rowGaps:me.length-1,heel:-.11000000000000001,toe:r},K}function eb(n,e){const t=Vt.voxelMetres;return(i,s,r)=>r<e.soleTop?mt.sole:s<e.tabU1&&r>e.tabLo||(i-e.mid)*n>0&&r>e.stripeLo&&r<e.stripeHi&&s>e.stripeU0&&s<e.stripeU1?mt.shoeStripe:r>e.top(s)-t&&i>Math.min(e.laceA,e.laceB)&&i<Math.max(e.laceA,e.laceB)&&s>=e.laceU0&&s<=e.laceU1?mt.lace:mt.shoe}const $i=_r.model,Xi={resolved:0,unresolved:0,oddPivot:0,kneeMoved:0,liftedTwice:0},tb=/-lit(\d+)$/,fc=new WeakMap;function nb(n){const e=tb.exec(n.name);return e?Number(e[1]):0}function ib(n){const e=fc.get(n);if(e!==void 0)return e;const t=Hm(n),s=gh(t??n);gh(s.base).base!==s.base&&Xi.liftedTwice++;const r=Wm(s.base.voxels);if(!r)return Xi.unresolved++,fc.set(n,null),null;(n.pivot.x!==n.sx/2||n.pivot.y!==n.sy/2)&&Xi.oddPivot++;const a=s.kl>0&&id(s.base,r,0)?s.kl:0,l=s.kr>0&&id(s.base,r,1)?s.kr:0;(a>0||l>0)&&Xi.kneeMoved++;const o={pose:r,kl:s.kl,kr:s.kr,kneeL:a,kneeR:l,level:t?nb(n):0,pivotZ:n.pivot.z};return Xi.resolved++,fc.set(n,o),o}function sb(n){const e=$i.widths;return $i.body.shoeTopMetres*Math.cos(n)+Math.max(e.toeMetres*Math.sin(n),-.11000000000000001*Math.sin(n))}function nd(n,e,t){return Math.cos(n)*$i.leg.thighMetres+Math.cos(n-e)*$i.leg.shinMetres+sb(t)}function id(n,e,t){const i=$i.voxelMetres,s=(n.sx-1)/2,r=(n.sy-1)/2,a=Math.max(nd(e.thighL,e.kneeL,e.footL),nd(e.thighR,e.kneeR,e.footR)),l=t===0?e.thighL:e.thighR,o=$i.widths.legGapMetres/2+$i.widths.legMetres/2,u=(t===0?-1:1)*Math.round(o/i)+s,c=Math.round(Math.sin(l)*$i.leg.thighMetres/i)+r,f=Math.floor((a-Math.cos(l)*$i.leg.thighMetres)/i+Ge.walker.cellEps),h=Math.min(n.sz,Math.round(Vm.handover.footLiftKneeM/i));if(f>=h||u<0||u>=n.sx||c<0||c>=n.sy)return!1;const d=n.sx*n.sy;let g=1/0,v=-1/0,p=-1;for(let S=0;S<n.sz;S++)for(let M=0;M<n.sy;M++)for(let x=0;x<n.sx;x++)$m.has(n.voxels[x+n.sx*M+d*S])&&(x+.5<n.pivot.x?0:1)===t&&(x<g&&(g=x),x>v&&(v=x),S>p&&(p=S));if(p<0)return!1;const m=Math.ceil(n.pivot.x-.5)-1,y=Math.max(0,t===0?g-1:Math.max(g-1,m+1)),_=Math.min(n.sx-1,t===0?Math.min(v+1,m):v+1);if(u<y||u>_)return!1;const w=u+n.sx*c;for(let S=0;S<h;S++)if(n.voxels[w+d*S])return S<=p;return!1}function pm(n,e,t){const i=s=>{const r=s,a=r.__watched??={};a[e]||(a[e]=!0,s.addEventListener("childadded",l=>l.child.traverse(i))),t(s)};n.traverse(i)}const fl="void main() { gl_Position = vec4(position.xy, 0.0, 1.0); }",dc=n=>Number.isInteger(n)?n.toFixed(1):String(n);function rb(){const n=re.smooth.fxaa;return new cn({uniforms:{tIn:{value:null},uRcp:{value:new qe(1,1)}},vertexShader:fl,fragmentShader:`
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
  if (lMaxM - lMinM < max(${dc(n.edgeThresholdMin)}, lMax * ${dc(n.edgeThreshold)})) { gl_FragColor = vec4(m.rgb, 1.0); return; }
  float sw = lSw - lNe, se = lSe - lNw;
  vec2 dir = vec2(sw + se, sw - se);
  vec2 d1 = normalize(dir + vec2(1e-6));
  vec4 n1 = texture2D(tIn, pos - d1 * 0.5 * uRcp);
  vec4 p1 = texture2D(tIn, pos + d1 * 0.5 * uRcp);
  float dmin = min(abs(d1.x), abs(d1.y)) * ${dc(n.edgeSharpness)};
  vec2 d2 = clamp(d1 / max(dmin, 1e-6), -2.0, 2.0);
  vec4 n2 = texture2D(tIn, pos - d2 * 2.0 * uRcp);
  vec4 p2 = texture2D(tIn, pos + d2 * 2.0 * uRcp);
  vec4 a = n1 + p1;
  vec4 b = (n2 + p2) * 0.25 + a * 0.25;
  // The wide pair crossed another edge: keep the narrow pair.
  if (b.a < lMin || b.a > lMax) b.rgb = a.rgb * 0.5;
  gl_FragColor = vec4(b.rgb, 1.0);
}`,depthTest:!1,depthWrite:!1})}function ab(){return new cn({uniforms:{tIn:{value:null},uInSize:{value:new qe(1,1)},uOutSize:{value:new qe(1,1)}},vertexShader:fl,fragmentShader:`
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
}`,depthTest:!1,depthWrite:!1})}function ob(){return new cn({uniforms:{tIn:{value:null},uOutSize:{value:new qe(1,1)}},vertexShader:fl,fragmentShader:"uniform sampler2D tIn; uniform vec2 uOutSize; void main() { gl_FragColor = vec4(texture2D(tIn, gl_FragCoord.xy / uOutSize).rgb, 1.0); }",depthTest:!1,depthWrite:!1})}function lb(){return new cn({uniforms:{tIn:{value:null},uSize:{value:new qe(1,1)},uSharp:{value:1}},vertexShader:fl,fragmentShader:`
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
  ${re.smooth.rcas.denoise?"lobe *= nz;":""}
  float rcpL = rcpMed(4.0 * lobe + 1.0);
  gl_FragColor = vec4((lobe * (b + d + h + f) + e) * rcpL, 1.0);
}`,depthTest:!1,depthWrite:!1})}const tt=n=>Number.isInteger(n)?n.toFixed(1):String(n),Is=n=>`vec3(${tt((n>>16&255)/255)}, ${tt((n>>8&255)/255)}, ${tt((n&255)/255)})`;function Ju(){return`
float exHaze() {
#ifdef USE_FOG
  float x = smoothstep(fogNear, fogFar, vFogDepth);
  float n = uHazeSteps - 1.0;
  float q = x * n, b = floor(q), t = clamp((q - b - 0.5) / max(uHazeDither, 1e-3) + 0.5, 0.0, 1.0);
  ${tn()&&re.smooth.dither==="mean"?"return (b + t) / n;":"ivec2 g = ivec2(mod(floor(gl_FragCoord.xy + uDitherOrigin), 4.0)); int m[16] = int[16](0, 8, 2, 10, 12, 4, 14, 6, 3, 11, 1, 9, 15, 7, 13, 5); return (b + step((float(m[g.x + g.y * 4]) + 0.5) / 16.0, t)) / n;"}
#else
  return 0.0;
#endif
}`}const Bs=64,dl=`
float exHash(vec2 p) {
  vec3 q = fract(vec3(p.xyx) * 0.1031);
  q += dot(q, q.yzx + 33.33);
  return fract((q.x + q.y) * q.z);
}
float exNoise(vec2 p, vec2 period) {
  vec2 i = floor(p);
  vec2 u = p - i;
  u = u * u * (3.0 - 2.0 * u);
  vec2 a = mod(i, period), b = mod(i + 1.0, period);
  float n00 = exHash(a), n10 = exHash(vec2(b.x, a.y)), n01 = exHash(vec2(a.x, b.y)), n11 = exHash(b);
  return mix(mix(n00, n10, u.x), mix(n01, n11, u.x), u.y);
}`,en=At.shimmer,cb=Ti.shimmer,xi={uShim:{value:new ct},uShimRect:{value:new ct},uShimAxis:{value:new ct},uShimDepth:{value:new ct},uShimRamp:{value:1},uShimMap:{value:new ct(1,-1,0,1)},uShimRow:{value:4}},zs=["uShim","uShimRect","uShimAxis","uShimDepth"],ub=zs.length*4+1;function hb(){return{v:new Float32Array(ub)}}function fb(n){for(let e=0;e<zs.length;e++)xi[zs[e]].value.toArray(n.v,e*4);return n.v[zs.length*4]=xi.uShimRamp.value,n}function db(n){for(let e=0;e<zs.length;e++)xi[zs[e]].value.fromArray(n.v,e*4);xi.uShimRamp.value=n.v[zs.length*4]}function pb(n,e){const t=Math.max(1,e);xi.uShimMap.value.set(1/t,-1/t,0,1),xi.uShimRow.value=Math.max(1,en.rowShare*t);const i=xi.uShim.value;i.x=en.ampShare*t,i.w=0}function mb(n,e,t,i,s,r){const a=n*t/(e*i);xi.uShimMap.value.set(a/(n*t),-1/(e*i),(1-(1+s)/t)/2*a,(1+(1+r)/i)/2);const l=xi.uShim.value;l.x=en.crispAmpPx,l.w=1}const gb=`
uniform vec4 uShim; uniform vec4 uShimRect; uniform vec4 uShimAxis; uniform vec4 uShimDepth; uniform float uShimRamp; uniform vec4 uShimMap; uniform float uShimRow;
${dl}
float exShimmer(ivec2 p, float d, float cls) {
  float thr = cls > 0.9 ? uShimDepth.w : uShimDepth.x;
  if (uShim.z < 0.5 || d <= thr) return 0.0;
  vec2 fr = (vec2(p) + 0.5) * uShimMap.xy + uShimMap.zw;
  if (fr.x <= uShimRect.x || fr.x >= uShimRect.z || fr.y <= uShimRect.y || fr.y >= uShimRect.w) return 0.0;
  // To 0 at the rectangle's sides; along the plume from the lip as far as its level, fading past it.
  vec2 e = min(fr - uShimRect.xy, uShimRect.zw - fr) / max(uShimRect.zw - uShimRect.xy, vec2(1e-6));
  float win = smoothstep(0.0, ${tt(en.edgeShare)}, e.x) * smoothstep(0.0, ${tt(en.edgeShare)}, e.y);
  vec2 ax = uShimAxis.zw - uShimAxis.xy;
  float t = dot(fr - uShimAxis.xy, ax) / max(dot(ax, ax), 1e-8);
  float reach = uShimDepth.y * ${tt(1+en.tipFadeShare)};
  win *= smoothstep(0.0, ${tt(en.lipShare)}, t) * (1.0 - smoothstep(reach - ${tt(en.tipFadeShare)}, reach, t));
  if (!(win > 0.0)) return 0.0;
  // (Ramping in past the depth threshold: no line where the ground crosses it.)
  win *= uShimDepth.z * smoothstep(thr, thr + uShimRamp, d);
  float row = float(p.y);
  if (uShim.w > 0.5) {
    // Pixel B: −1, 0 or +1 whole pixels a row at the game's tick, where the window is more than half in.
    if (win < ${tt(en.crispFrom)}) return 0.0;
    return (floor(exHash(vec2(row, floor(uShim.y * ${tt(cb.hz)}))) * 2.999) - 1.0) * uShim.x;
  }
  // Smooth B: two octaves of value noise down the rows, flowing at flowHz.
  float tt = uShim.y * ${tt(en.flowHz)};
  float n = exNoise(vec2(row / uShimRow, tt), vec2(${tt(en.rowPeriod)}, ${tt(At.motion.wrapSec*en.flowHz)})) * ${tt(1-en.octave.weight)}
    + exNoise(vec2(row / (uShimRow * ${tt(en.octave.cell)}) + ${tt(en.octave.offset)}, tt * ${tt(en.octave.speed)}), vec2(${tt(en.rowPeriod*2)}, ${tt(At.motion.wrapSec*en.flowHz*en.octave.speed)})) * ${tt(en.octave.weight)};
  return (n * 2.0 - 1.0) * uShim.x * win;
}
vec4 exShimFetch(sampler2D t, ivec2 p, float s, ivec2 hi) {
  if (s == 0.0) return texelFetch(t, p, 0);
  float fl = floor(s);
  ivec2 a = clamp(p + ivec2(int(fl), 0), ivec2(0), hi);
  // Only from where the scene behind the plume is (beyond its depth, not an object's): else the pixel keeps its own.
  if (lin(a) <= (texelFetch(tNrm, a, 0).a > 0.9 ? uShimDepth.w : uShimDepth.x)) return texelFetch(t, p, 0);
  float w = s - fl;
  if (w < 1e-3) return texelFetch(t, a, 0);
  ivec2 b = clamp(a + ivec2(1, 0), ivec2(0), hi);
  if (lin(b) <= (texelFetch(tNrm, b, 0).a > 0.9 ? uShimDepth.w : uShimDepth.x)) return texelFetch(t, p, 0);
  return mix(texelFetch(t, a, 0), texelFetch(t, b, 0), w);
}`,Qe=re.pixel,$t=Qe.edge,Rn=Qe.water,Pn=Qe.night,_t=Qe.clouds,Gn=()=>re.smooth,ot=n=>Number.isInteger(n)?n.toFixed(1):String(n),mm={object:null},It={uAmb:{value:new z(.5,.5,.5)},uSun:{value:new z(.5,.5,.5)},uLevels:{value:Qe.shadeLevels.slice()},uBandGain:{value:Qe.bandGain},uBandBias:{value:Qe.bandBias},uShadowLevel:{value:Qe.shadowLevel},uHazeSteps:{value:Qe.hazeSteps},uHazeDither:{value:Qe.hazeDither},uDitherOrigin:{value:new qe},uTime:{value:0},uBNight:{value:0},uShadowMix:{value:1},uSunW:{value:new z(0,1,0)},uCloudTex:{value:xb()},uCloudOn:{value:_t.on?1:0},uCloudThresh:{value:_t.fallbackThreshold}};function xb(){const n=_t.noiseSize;let e=_t.noiseSeed>>>0;const t=()=>(e=Math.imul(e^e>>>15,739982445)+2654435769>>>0)/4294967296,i=new Float32Array(n*n);_t.noisePeriods.forEach((o,u)=>{const c=Math.max(1,Math.round(n/o)),f=new Float32Array(c*c).map(()=>t()),h=1/(1<<u);for(let d=0;d<n;d++)for(let g=0;g<n;g++){const v=g/n*c,p=d/n*c,m=Math.floor(v),y=Math.floor(p),_=v-m,w=p-y,S=_*_*(3-2*_),M=w*w*(3-2*w),x=(b,A)=>f[(A+c)%c*c+(b+c)%c];i[d*n+g]+=((x(m,y)*(1-S)+x(m+1,y)*S)*(1-M)+(x(m,y+1)*(1-S)+x(m+1,y+1)*S)*M)*h}});let s=1/0,r=-1/0;for(const o of i)s=Math.min(s,o),r=Math.max(r,o);const a=new Uint8Array(n*n);for(let o=0;o<n*n;o++)a[o]=Math.round((i[o]-s)/(r-s||1)*255);const l=new Kn(a,n,n,$s,ln);return l.wrapS=l.wrapT=Cr,l.magFilter=l.minFilter=Xt,l.needsUpdate=!0,l}const vb=()=>`
float bCloud(vec2 xz) {
  vec2 d = uTime * vec2(${ot(_t.driftMps[0])}, ${ot(_t.driftMps[1])}) + vec2(${ot(_t.offsetMetres[0])}, ${ot(_t.offsetMetres[1])});
  float n = texture2D(uCloudTex, (xz + d) / ${ot(_t.tileMetres[0])}).r * ${ot(_t.weights[0])}
          + texture2D(uCloudTex, (xz + d * ${ot(_t.secondDrift)}) / ${ot(_t.tileMetres[1])} + vec2(${ot(_t.secondOffset[0])}, ${ot(_t.secondOffset[1])})).r * ${ot(_t.weights[1])};
  return n - uCloudThresh;
}
`,tn=()=>!!re.smooth.on,Mb=()=>tn()&&re.smooth.dither==="mean",Qu=()=>`
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
${Mb()?`  // Smooth B: the dither's average (the share of the 4 × 4 pattern that takes the upper step is t).
  return (b + t) / n;`:"  return (b + step(bayer4(gl_FragCoord.xy + uDitherOrigin), t)) / n;"}
}
`,ha=()=>tn()&&re.smooth.shadowSoft,_b=()=>`
uniform vec3 uAmb; uniform vec3 uSun; uniform float uLevels[${Qe.shadeLevels.length}]; uniform float uBandGain; uniform float uBandBias;
uniform float uShadowLevel; uniform float uHazeSteps; uniform float uHazeDither; uniform vec2 uDitherOrigin; uniform float uTime;
uniform float uEdgeClass; uniform float uMinLevel; uniform float uShadowFloorLvl;
float bMinLvl; float bShFloor;
uniform float uBNight; uniform float uShadowMix; uniform vec3 uSunW; uniform sampler2D uCloudTex; uniform float uCloudOn; uniform float uCloudThresh;
varying vec3 vBWorld;
layout(location = 1) out highp vec4 pc_fragN;
${Qu()}
${vb()}
float bandLevel(float ndl, float sh) {
${ha()?"":"  if (sh < 0.5) return uLevels[max(int(uShadowLevel), int(bShFloor))];"}
  float v = ndl * uBandGain + uBandBias;
  float best = uLevels[0];
  v = max(v, uLevels[int(bMinLvl)]);
  for (int i = 1; i < ${Qe.shadeLevels.length}; i++) if (abs(uLevels[i] - v) < abs(best - v)) best = uLevels[i];
${ha()?`  // Smooth B: the shadowed level and the lit level blend across the shadow's filtered edge.
  return mix(uLevels[max(int(uShadowLevel), int(bShFloor))], best, sh);`:"  return best;"}
}
${ha()?`// Smooth B: one hardware-compared, bilinear-filtered tap of the sun shadow (2 × 2 texels).
#if defined(USE_SHADOWMAP) && NUM_DIR_LIGHT_SHADOWS > 0
float bShadow1(sampler2DShadow m, float intensity, float bias, vec4 c) {
  c.xyz /= c.w;
  c.z += bias;
  bool inF = c.x >= 0.0 && c.x <= 1.0 && c.y >= 0.0 && c.y <= 1.0 && c.z <= 1.0;
  return inF ? mix(1.0, texture(m, c.xyz), intensity) : 1.0;
}
#endif`:""}
`,Au={uWalkerGain:{value:1},uWalkerTint:{value:new z(1,1,1)}},Ao={uLodEye:{value:new z},uMeshMetres:{value:0},uOverlap:{value:0}},To=n=>{const e=Number(n.toPrecision(9));return Number.isInteger(e)?e.toFixed(1):String(e)},co=n=>n.map(e=>`vec3(${e.map(To).join(", ")})`).join(", ");function Sb(n){const e=n.crownPos,t=n.crownIdx,i=e.length/3,s=t.length/3,r=s/n.lobeCentres.length,a=[],l=[],o=[],u=[];for(let S=0;S<i;S++){const M=[e[S*3],e[S*3+1],e[S*3+2]],x=Math.hypot(M[0],M[1],M[2])||1;a.push(M),l.push(M.map(b=>b/x))}const c=(S,M)=>[S[0]-M[0],S[1]-M[1],S[2]-M[2]],f=(S,M)=>[S[1]*M[2]-S[2]*M[1],S[2]*M[0]-S[0]*M[2],S[0]*M[1]-S[1]*M[0]],h=(S,M)=>S[0]*M[0]+S[1]*M[1]+S[2]*M[2],d=(S,M,x,b)=>{let A=f(c(M,S),c(x,S));const E=Math.hypot(A[0],A[1],A[2])||1;return A=A.map(P=>P/E),h(A,c(S,b))<0&&(A=A.map(P=>-P)),[A[0],A[1],A[2],h(A,S)]};for(let S=0;S<s;S++){const M=t[S*3],x=t[S*3+1],b=t[S*3+2];o.push([M,x,b]),u.push(d(a[M],a[x],a[b],n.lobeCentres[Math.floor(S/r)]))}const g=n.trunkSegments,v=[],p=[],m=[];for(let S=0;S<2*(g+1);S++)v.push([n.trunkPos[S*3],n.trunkPos[S*3+1],n.trunkPos[S*3+2]]),S<=g&&p.push([n.trunkNrm[S*3],n.trunkNrm[S*3+1],n.trunkNrm[S*3+2]]);for(let S=0;S<g;S++)m.push(d(v[g+1+S],v[g+2+S],v[S],[0,.5,0]));const y=n.lobeCentres.map((S,M)=>{let x=0;for(let b=M*r;b<(M+1)*r;b++)for(const A of o[b])x=Math.max(x,Math.hypot(a[A][0]-S[0],a[A][1]-S[1],a[A][2]-S[2]));return[S[0],S[1],S[2],x*1.001]}),_=`
uniform vec3 uTrunkCol; uniform mat4 projectionMatrix;
varying vec3 vRayP; flat varying vec4 vIBase; flat varying vec4 vIShape; flat varying vec3 vICol;
#if defined(USE_SHADOWMAP) && NUM_DIR_LIGHT_SHADOWS > 0
uniform mat4 directionalShadowMatrix[NUM_DIR_LIGHT_SHADOWS];
vec4 bHitSC[NUM_DIR_LIGHT_SHADOWS];
#endif
const vec3 B_LV[${i}] = vec3[${i}](${co(a)});
const vec3 B_LN[${i}] = vec3[${i}](${co(l)});
const ivec3 B_LF[${s}] = ivec3[${s}](${o.map(S=>`ivec3(${S.join(", ")})`).join(", ")});
const vec4 B_LP[${s}] = vec4[${s}](${u.map(S=>`vec4(${S.map(To).join(", ")})`).join(", ")});
const vec3 B_TV[${v.length}] = vec3[${v.length}](${co(v)});
const vec3 B_TN[${p.length}] = vec3[${p.length}](${co(p)});
const vec4 B_TP[${g}] = vec4[${g}](${m.map(S=>`vec4(${S.map(To).join(", ")})`).join(", ")});
const vec4 B_LS[${y.length}] = vec4[${y.length}](${y.map(S=>`vec4(${S.map(To).join(", ")})`).join(", ")});
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
`,w=`
  float bIsCrown = 1.0;
  {
    vec3 O = vRayP;
    vec3 Dw = isOrthographic ? -vec3(viewMatrix[0][2], viewMatrix[1][2], viewMatrix[2][2]) : normalize(vRayP - cameraPosition);
    float th = vIBase.w, tl = vIShape.w;
    vec3 base = vIBase.xyz, C = base + vec3(0.0, vIShape.z, 0.0), sc = vec3(vIShape.x, vIShape.y, vIShape.x);
    vec3 oc = bRotY(O - C, -th) / sc, uc = bRotY(Dw, -th) / sc;
    float tBest = 1e30; int kind = -1, face = -1;
    for (int L = 0; L < ${n.lobeCentres.length}; L++) {
${tn()?`      // Smooth B: a ray that misses the lobe's bounding sphere misses the lobe (the same pixels, fewer plane tests).
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
`;return{decl:_,cast:w}}const sd=n=>!!n.noCloud&&!_t.objectCloudShadows;function yb(n=_t.quantileSeed,e=_t.quantileSamples){const t=It.uCloudTex.value,i=t.image.data,s=t.image.width;if((s&s-1)!==0)throw new Error(`cloudTable: the noise must be a power of two texels (${s})`);const r=s-1,[a,l]=_t.tileMetres,[o,u]=_t.weights,[c,f]=_t.offsetMetres,h=(x,b)=>b?h(b,x%b):x,d=a*l/h(Math.round(a),Math.round(l)),g=Math.max(1,Math.round(Math.sqrt(e))),v=_t.quantileBins,p=new Float64Array(v+1);let m=n>>>0;const y=()=>(m=Math.imul(m^m>>>15,739982445)+2654435769>>>0)/4294967296,_=_t.secondDrift,[w,S]=_t.secondOffset;for(let x=0;x<g;x++)for(let b=0;b<g;b++){const A=(b+y())/g*d,E=(x+y())/g*d;let P=(A+c)/a*s-.5,R=(E+f)/a*s-.5,D=Math.floor(P),C=Math.floor(R),I=P-D,U=R-C,O=(C&r)*s,W=(C+1&r)*s,k=D&r,G=D+1&r;const Z=(i[O+k]/255*(1-I)+i[O+G]/255*I)*(1-U)+(i[W+k]/255*(1-I)+i[W+G]/255*I)*U;P=((A+c*_)/l+w)*s-.5,R=((E+f*_)/l+S)*s-.5,D=Math.floor(P),C=Math.floor(R),I=P-D,U=R-C,O=(C&r)*s,W=(C+1&r)*s,k=D&r,G=D+1&r;const me=(i[O+k]/255*(1-I)+i[O+G]/255*I)*(1-U)+(i[W+k]/255*(1-I)+i[W+G]/255*I)*U,le=Z*o+me*u;p[Math.min(v,Math.max(0,Math.floor(le*v)))]++}const M=new Float64Array(v+2);for(let x=v;x>=0;x--)M[x]=M[x+1]+p[x]/(g*g);return{threshold(x){if(!(x>0))return Number.POSITIVE_INFINITY;if(x>=M[0])return 0;let b=0;for(;b<v&&M[b+1]>=x;)b++;const A=(M[b]-x)/Math.max(1e-12,M[b]-M[b+1]);return(b+A)/v},share(x){const b=Math.min(v,Math.max(0,x*v)),A=Math.floor(b),E=b-A;return M[A]-(M[A]-M[Math.min(v+1,A+1)])*E}}}function wb(n,e,t={on:!1,threshold:0}){const i=Number.isNaN(n);return t.on=_t.on&&(i||n>0),t.threshold=i||!t.on?_t.fallbackThreshold:e.threshold(n),t}function wi(n,e,t={}){const i=n.onBeforeCompile,s=n.customProgramCacheKey.bind(n);return n.onBeforeCompile=(r,a)=>{i?.call(n,r,a),Object.assign(r.uniforms,It,t,{uEdgeClass:{value:e.edgeClass},uMinLevel:{value:e.minLevel??0},uShadowFloorLvl:{value:e.shadowFloor??0}}),e.walker&&Object.assign(r.uniforms,Au);let l=r.vertexShader,o=r.fragmentShader;e.walker&&(o=o.replace("#include <common>",`#include <common>
uniform float uWalkerGain; uniform vec3 uWalkerTint;`)),e.worldCells&&(o=o.replace("#include <common>",`#include <common>
uniform sampler2D uFam; uniform vec3 uFamFrame; uniform float uFamN;`).replace("#include <color_fragment>",`#include <color_fragment>
{
  vec2 cell = (vBWorld.xz - uFamFrame.xy) / uFamFrame.z * uFamN;
  // In the map view the camera moves in whole pixels, so the cells stay crisp at every zoom (as the game's map).
  float lod = isOrthographic ? 0.0 : smoothstep(${ot(Qe.farCellsLod[0])}, ${ot(Qe.farCellsLod[1])}, max(fwidth(cell).x, fwidth(cell).y));
  vec3 c = pow(${tn()?"/* smooth B: filtered between cells, mipmapped far off */ texture2D(uFam, cell / uFamN).rgb":"texelFetch(uFam, clamp(ivec2(floor(cell)), ivec2(0), ivec2(int(uFamN) - 1)), 0).rgb"}, vec3(2.2));
  diffuseColor.rgb = mix(c, diffuseColor.rgb, lod);
}`)),l=l.replace("#include <common>",`#include <common>
varying vec3 vBWorld;`).replace("#include <project_vertex>",`#include <project_vertex>
{ vec4 bw = vec4(transformed, 1.0);
#ifdef USE_INSTANCING
  bw = instanceMatrix * bw;
#endif
  vBWorld = (modelMatrix * bw).xyz; }`);const u=mi("shadowCoords");if(u){l=l.replace("#include <shadowmap_pars_vertex>",`#if NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || defined(USE_BATCHING)
#error opt.shadowCoords handles directional shadows only (no spot or point lights with shadows or maps, no sun cascades, no BatchedMesh)
#endif`).replace("#include <shadowmap_vertex>","");const f="varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];";if(!gt.shadowmap_pars_fragment.includes(f))throw new Error("shadowCoords: three's shadowmap_pars_fragment changed");o=o.replace("#include <shadowmap_pars_fragment>",gt.shadowmap_pars_fragment.replace(f,e.impostor?"":`vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];`))}e.actor&&!u&&(l=l.replace("#include <shadowmap_vertex>",`#include <shadowmap_vertex>
#if defined(USE_SHADOWMAP) && NUM_DIR_LIGHT_SHADOWS > 0
  vDirectionalShadowCoord[0] = directionalShadowMatrix[0] * (worldPosition + vec4(shadowWorldNormal * directionalLightShadows[0].shadowNormalBias * ${ot(Qe.actorShadowBias)}, 0.0));
#endif
#if defined(USE_SHADOWMAP) && NUM_DIR_LIGHT_SHADOWS > 1
  vDirectionalShadowCoord[1] = directionalShadowMatrix[1] * (worldPosition + vec4(shadowWorldNormal * directionalLightShadows[1].shadowNormalBias * ${ot(Qe.actorShadowBias)}, 0.0));
#endif`)),e.roadNight&&(o=o.replace("#include <common>",`#include <common>
uniform vec3 uRoadNight;`)),e.cloud&&(o=o.replace("#include <common>",`#include <common>
uniform vec3 uCloudShade; uniform vec3 uCloudLight;`),o=o.replace("#include <color_fragment>",`#include <color_fragment>
{
  float cd = bCloud(vBWorld.xz);
  if (cd <= 0.0) discard;
  // The sun side of a cloud (where the pattern thins towards the sun) is light, the far side shade, in dithered steps.
  vec2 sd = normalize(uSunW.xz + vec2(1e-4, 0.0));
  float toward = bCloud(vBWorld.xz + sd * ${ot(_t.sunOffsetMetres)});
  float lit = clamp(0.55 + (cd - toward) * 7.0, 0.0, 1.0);
  lit = min(lit, 0.35 + cd * 12.0);
  diffuseColor.rgb = mix(uCloudShade, uCloudLight, bQuant(lit, ${ot(_t.steps-1)}, ${ot(_t.dither)})) * mix(1.0, ${ot(_t.nightDim)}, uBNight);
}`)),e.grain&&(o=o.replace("#include <color_fragment>",`#include <color_fragment>
{
  vec2 gc = vBWorld.xz / ${ot(Qe.grainMetres)};
  float lod = 1.0 - smoothstep(${tn()?`${ot(Gn().grainLod[0])}, ${ot(Gn().grainLod[1])}`:`${ot(Qe.grainLod[0])}, ${ot(Qe.grainLod[1])}`}, max(fwidth(gc).x, fwidth(gc).y));
${tn()&&Gn().grainSmooth?`  // Smooth B: the same cells' values, blended between cell centres (value noise; no hard cell edges); nothing to do once faded.
  if (lod > 0.0) {
  vec2 g0 = floor(gc - 0.5), gt = gc - 0.5 - g0;
  gt = gt * gt * (3.0 - 2.0 * gt);
  float h00 = fract(sin(dot(g0, vec2(12.9898, 78.233))) * 43758.5453), h10 = fract(sin(dot(g0 + vec2(1.0, 0.0), vec2(12.9898, 78.233))) * 43758.5453);
  float h01 = fract(sin(dot(g0 + vec2(0.0, 1.0), vec2(12.9898, 78.233))) * 43758.5453), h11 = fract(sin(dot(g0 + vec2(1.0), vec2(12.9898, 78.233))) * 43758.5453);
  float h = mix(mix(h00, h10, gt.x), mix(h01, h11, gt.x), gt.y) - 0.5;
  diffuseColor.rgb *= 1.0 + h * ${ot(Qe.grainAmp*Gn().grainSmoothGain)} * 2.0 * lod;
  }`:`  float h = fract(sin(dot(floor(gc), vec2(12.9898, 78.233))) * 43758.5453) - 0.5;
  diffuseColor.rgb *= 1.0 + h * ${ot(Qe.grainAmp)} * 2.0 * lod;`}
}`)),e.water&&(o=o.replace("#include <common>",`#include <common>
uniform sampler2D uNoise; uniform vec2 uWaveTexel; uniform vec2 uSpeedA; uniform vec2 uSpeedB; uniform float uScaleB;
uniform float uMid; uniform float uHigh; uniform float uSparkleAbove; uniform float uSparkleChance; uniform float uSparkleHz; uniform float uSparkleMetres;
uniform vec3 uTones[9]; uniform vec3 uSparkle; uniform sampler2D uFam; uniform vec3 uFamFrame; uniform float uFamDither;`),o=o.replace("#include <color_fragment>",`#include <color_fragment>
{
  vec2 wp = vBWorld.xz;
  float ns = ${ot(Rn.noiseSize)};
  float a = texture2D(uNoise, (wp + uTime * uSpeedA) / uWaveTexel / ns).r;
  float b = texture2D(uNoise, ((wp + uTime * uSpeedB) / uWaveTexel * uScaleB) / ns).r;
  float s = a + b;
  // The family (open sea, harbour, shallows) from the 10 m world, its edges dithered; the tone from the waves.
  float fam = texture2D(uFam, (wp - uFamFrame.xy) / uFamFrame.z).a;
${tn()?`  // Smooth B: the tones' thresholds softened over a pixel or so, the families blended by the dither's average,
  // and each sparkle a round dot.
  float we = max(fwidth(s), 1e-4) * ${ot(Gn().waterEdgePx)};
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
  float spk = 1.0 - smoothstep(${ot(Gn().sparkleDotShare*.5)} - saa, ${ot(Gn().sparkleDotShare*.5)} + saa, sr);
  tone = mix(tone, uSparkle, spk * step(uSparkleAbove, s) * step(h, uSparkleChance));`:`  int fi = int(bQuant(fam, 2.0, uFamDither) * 2.0 + 0.5);
  int ti = s > uHigh ? 2 : (s > uMid ? 1 : 0);
  vec3 tone = uTones[fi * 3 + ti];
  vec2 cell = floor(wp / uSparkleMetres);
  float tick = floor(uTime * uSparkleHz);
  float h = fract(sin(dot(vec3(cell, tick), vec3(12.9898, 78.233, 37.719))) * 43758.5453);
  if (s > uSparkleAbove && h < uSparkleChance) tone = uSparkle;`}
  diffuseColor.rgb = tone;
}`));const c=e.impostor?"if (bIsCrown > 0.5)":"";if(e.crown&&(l=l.replace("#include <common>",`#include <common>
varying vec3 vCrownP;`).replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
objectNormal = normalize(position);
vCrownP = position;`),o=o.replace("#include <common>",`#include <common>
varying vec3 vCrownP; uniform float uClumps; uniform float uClumpAmp;`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
${c} {
  // The crown's rim breaks into leaves.
  float rim = 1.0 - abs(dot(normal, normalize(vViewPosition)));
  float leaf = fract(sin(dot(floor(vCrownP * ${ot(tn()?Gn().crownLeafPerUnit:Qe.crownLeafPerUnit)}), vec3(39.346, 11.135, 83.155))) * 43758.5453);
  if (rim + (leaf - 0.5) * ${ot(tn()?Gn().crownCutNoise:Qe.crownCutNoise)} > ${ot(Qe.crownCut)}) discard;
}`)),o=o.replace("#include <common>",`#include <common>
`+_b()),o=o.replace("#include <lights_fragment_begin>",`
float bNdl = 0.0, bSh = 1.0;
bMinLvl = uMinLevel; bShFloor = uShadowFloorLvl;
${e.impostor?"if (bIsCrown < 0.5) { bMinLvl = 0.0; bShFloor = 0.0; }":""}
#if NUM_DIR_LIGHTS > 0
  bNdl = max(dot(normal, directionalLights[0].direction), 0.0);
${u&&!e.impostor?`  // S1 shadowCoords: three's shadowmap_vertex, per pixel. World normal = transpose(view) × the interpolated vNormal
  // (vNormal is normalize(transformedNormal) at each vertex, so this is three's shadowWorldNormal, interpolated;
  // every B geometry has a normal attribute, crowns included, so three's HAS_NORMAL path is the one matched).
  #if defined(USE_SHADOWMAP) && NUM_DIR_LIGHT_SHADOWS > 0
  if (receiveShadow) {
    vec3 bSwn = (vec4(vNormal, 0.0) * viewMatrix).xyz;
    vDirectionalShadowCoord[0] = directionalShadowMatrix[0] * vec4(vBWorld + bSwn * directionalLightShadows[0].shadowNormalBias${e.actor?" * "+ot(Qe.actorShadowBias):""}, 1.0);
  #if NUM_DIR_LIGHT_SHADOWS > 1
    vDirectionalShadowCoord[1] = directionalShadowMatrix[1] * vec4(vBWorld + bSwn * directionalLightShadows[1].shadowNormalBias${e.actor?" * "+ot(Qe.actorShadowBias):""}, 1.0);
  #endif
  }
  #endif`:""}
  #if defined(USE_SHADOWMAP) && NUM_DIR_LIGHT_SHADOWS > 0
    bSh = receiveShadow ? ${ha()?"bShadow1(directionalShadowMap[0], directionalLightShadows[0].shadowIntensity, directionalLightShadows[0].shadowBias, vDirectionalShadowCoord[0])":"getShadow(directionalShadowMap[0], directionalLightShadows[0].shadowMapSize, directionalLightShadows[0].shadowIntensity, directionalLightShadows[0].shadowBias, directionalLightShadows[0].shadowRadius, vDirectionalShadowCoord[0])"} : 1.0;
  #endif
  // S1: the moving things' shadow map beside the cached one (either shades). Shadows fall only inside the moving
  // map's box (the view's own box, as before), never in the cached map's margin, so the edge of the shadowed area
  // moves smoothly with the view and never jumps when the cache redraws.
  #if defined(USE_SHADOWMAP) && NUM_DIR_LIGHT_SHADOWS > 1
    if (receiveShadow) {
      vec3 bDc = vDirectionalShadowCoord[1].xyz / vDirectionalShadowCoord[1].w;
      bool bInD = bDc.x >= 0.0 && bDc.x <= 1.0 && bDc.y >= 0.0 && bDc.y <= 1.0 && bDc.z <= 1.0;
      bSh = bInD ? min(bSh, ${ha()?"bShadow1(directionalShadowMap[1], directionalLightShadows[1].shadowIntensity, directionalLightShadows[1].shadowBias, vDirectionalShadowCoord[1])":"getShadow(directionalShadowMap[1], directionalLightShadows[1].shadowMapSize, directionalLightShadows[1].shadowIntensity, directionalLightShadows[1].shadowBias, directionalLightShadows[1].shadowRadius, vDirectionalShadowCoord[1])"}) : 1.0;
    }
  #endif
#endif
${e.crown?c+" bNdl += (fract(sin(dot(floor(vCrownP * uClumps), vec3(12.9898, 78.233, 37.719))) * 43758.5453) - 0.5) * uClumpAmp;":""}
// After dusk the sun (moon) shadow fades out; by day clouds shade the ground under them.
bSh = mix(1.0, bSh, uShadowMix);
if (uCloudOn > 0.5 && uSunW.y > 0.05 && ${_t.shadows&&!sd(e)?"true":"false"}) {
  float cs = bCloud(vBWorld.xz + uSunW.xz / uSunW.y * (${ot(_t.heightMetres)} - vBWorld.y));
${tn()?"  bSh = min(bSh, mix(1.0, 1.0 - uShadowMix, smoothstep(0.0, max(fwidth(cs), 1e-4), cs)));":"  if (cs > 0.0) bSh = min(bSh, 1.0 - uShadowMix);"}
}
${e.cloud?"bNdl = 1.0; bSh = 1.0;":""}
vec3 bLight = uAmb + uSun * bandLevel(bNdl, bSh);
${e.crown?`${c} bLight += vec3(${Pn.crownFill.map(ot).join(", ")}) * uBNight;`:""}
${e.roadNight?`{
  vec2 rq = (fract(vBWorld.xz / ${ot(Pn.roadPoolSpacingMetres)} + 0.5) - 0.5) * ${ot(Pn.roadPoolSpacingMetres)};
  float pl = pow(max(0.0, 1.0 - length(rq) / ${ot(Pn.roadPoolMetres)}), 2.0);
  float rm = 1.0;
  ${e.roadMask?`vec3 dc = pow(max(diffuseColor.rgb, vec3(0.0)), vec3(1.0 / 2.2)); rm = 1.0 - step(${ot(Pn.groundGreyMax)}, max(dc.r, max(dc.g, dc.b)) - min(dc.r, min(dc.g, dc.b)));`:""}
  bLight += rm * uRoadNight * uBNight * (${ot(Pn.roadGlow)} + ${ot(Pn.roadPool)} * bQuant(pl, ${ot(Qe.poolRings)}, 1.0));
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
pc_fragN = vec4(normal * 0.5 + 0.5, uEdgeClass);`),e.impostor){const f=Sb(e.impostor);l=l.replace("#include <common>",`#include <common>
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
diffuseColor.rgb = bIsCrown > 0.5 ? vICol : uTrunkCol;`)}"uWarp"in r.uniforms||Object.assign(r.uniforms,ni),r.vertexShader=js(l),r.fragmentShader=o},e.masonry&&(n.defines={...n.defines??{},PIXEL_MASONRY:""}),n.customProgramCacheKey=()=>`pixel-${mi("shadowCoords")?"s":""}${e.water?1:0}${e.crown?1:0}${e.grain?1:0}${e.masonry?1:0}${e.worldCells?1:0}${e.roadNight?1:0}${e.roadMask?1:0}${e.actor?1:0}${e.walker?"w":""}${e.cloud?1:0}${e.impostor?"i":""}${sd(e)?"n":""}-`+s(),n}function bb(){const n=Rn.noiseSize,e=[4,8,16],t=[1,.5,.25];let i=Rn.noiseSeed>>>0;const s=()=>(i=Math.imul(i^i>>>15,739982445)+2654435769>>>0)/4294967296,r=new Float32Array(n*n);e.forEach((c,f)=>{const h=n/c,d=new Float32Array(h*h).map(()=>s()),g=t[f];for(let v=0;v<n;v++)for(let p=0;p<n;p++){const m=p/c,y=v/c,_=Math.floor(m),w=Math.floor(y),S=m-_,M=y-w,x=S*S*(3-2*S),b=M*M*(3-2*M),A=(P,R)=>d[(R+h)%h*h+(P+h)%h],E=(A(_,w)*(1-x)+A(_+1,w)*x)*(1-b)+(A(_,w+1)*(1-x)+A(_+1,w+1)*x)*b;r[v*n+p]+=E*g}});let a=1/0,l=-1/0;for(const c of r)a=Math.min(a,c),l=Math.max(l,c);const o=new Uint8Array(n*n);for(let c=0;c<n*n;c++)o[c]=Math.round((r[c]-a)/(l-a||1)*255);const u=new Kn(o,n,n,$s,ln);return u.wrapS=u.wrapT=Cr,u.magFilter=tn()?Xt:Tt,u.minFilter=tn()?ti:Tt,u.generateMipmaps=tn(),u.needsUpdate=!0,u}function Eb(n){const e=new Kn(n.data,n.n,n.n,On,ln);return e.magFilter=e.minFilter=Xt,tn()&&(e.minFilter=ti,e.generateMipmaps=!0),e.flipY=!1,e.needsUpdate=!0,e}const pc=(()=>{const n=new Nt;return n.setAttribute("position",new Ft([-1,-1,0,3,-1,0,-1,3,0],3)),n})(),gm="void main() { gl_Position = vec4(position.xy, 0.0, 1.0); }";function Ab(){const n=$t.outline;return new cn({uniforms:{tCol:{value:null},tNrm:{value:null},tDepth:{value:null},uNF:{value:new qe(1,1e3)},uOrtho:{value:0},uSize:{value:new qe(1,1)},uOrthoDepth:{value:$t.orthoDepthMetres},uOrthoTexels:{value:$t.orthoDepthTexels},uShare:{value:$t.perspShare},uSoftScale:{value:$t.softDepthScale},uMinFacing:{value:$t.minFacing},uTexel:{value:1},uPixelAngle:{value:.001},uTint:{value:new z(...$t.outlineTint)},uLift:{value:$t.creaseLift},uConcave:{value:$t.concaveDark},uCreaseMin:{value:$t.creaseMin},uFade:{value:new qe(...$t.fadeMetres)},uDebug:{value:0},uSoftOutline:{value:1},uC:{value:1},uShiftC:{value:new qe},uNewStyle:{value:0},uThin:{value:0},uStrength:{value:n.strength},uShade:{value:n.shade},uSat:{value:n.saturation},uConcaveOn:{value:1},uCreaseShare:{value:1},uOrthoFade:{value:new qe(...n.orthoFadeTexelMetres)},uFadeTexel:{value:1},uAlphaLuma:{value:0},uSharpen:{value:0},uOuter:{value:0},...xi},vertexShader:gm,fragmentShader:`
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
${gb}
void main() {
  // The buffer pixel under this canvas pixel, and where in it this canvas pixel sits (−0.5 … 0.5 each way).
  vec2 qc = floor(gl_FragCoord.xy) - uShiftC;
  vec2 pb = floor(qc / uC);
  vec2 sub = (qc - pb * uC + 0.5) / uC - 0.5;
  bool thin = uThin > 0.5 && uC > 1.5;
  ivec2 hi = ivec2(uSize) - 1;
  ivec2 p = clamp(ivec2(pb), ivec2(0), hi);
  vec4 nc = texelFetch(tNrm, p, 0);
  float cls = nc.a;
  float d = lin(p);
  // The heat shimmer (exhaust/shimmer.ts): the colour fetched from a little to the side behind a hot plume.
  float shim = exShimmer(p, d, cls);
  vec4 c = exShimFetch(tCol, p, shim, hi);
  vec3 n = normalize(nc.rgb * 2.0 - 1.0);
  // A buffer pixel's size at this depth, metres; the threshold for a depth step that is not this face going on.
  float px = uOrtho > 0.5 ? uTexel : d * uPixelAngle;
  float thr = (uOrtho > 0.5 ? max(uOrthoDepth, px * uOrthoTexels) : d * uShare) * (cls < 0.9 ? uSoftScale : 1.0);
  float outline = 0.0, convex = 0.0, concave = 0.0;
  vec3 cSum = vec3(0.0), cMn = c.rgb, cMx = c.rgb;
  ivec2 offs[4] = ivec2[4](ivec2(1, 0), ivec2(-1, 0), ivec2(0, 1), ivec2(0, -1));
${Ge.look.skyEarlyOut?"  bool takesNoEdge = cls < 0.5;  // sky and ground/roads: neither an outline nor a crease (GPU_CONFIG.look.skyEarlyOut)":""}
  for (int i = 0; i < 4; i++) {
    ivec2 q = clamp(p + offs[i], ivec2(0), hi);
    if (uSharpen > 0.0) { vec3 cn = exShimFetch(tCol, q, shim, hi).rgb; cSum += cn; cMn = min(cMn, cn); cMx = max(cMx, cn); }
${Ge.look.skyEarlyOut?"    if (takesNoEdge) continue;  // the sharpen cross above still runs, so the drawn picture is unchanged":""}
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
  // (Where the shimmer moves the colour, the outline and crease found at p fade, so no line stands still over a moving fill.)
  float still = 1.0 - min(1.0, abs(shim));
  outline *= still; convex *= still; concave *= still;
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
}`,depthTest:!1,depthWrite:!1})}function Tb(){return new cn({uniforms:{tCol:{value:null},tDepth:{value:null},uOrigin:{value:new qe},uK:{value:1},uSize:{value:new qe(1,1)}},vertexShader:gm,fragmentShader:`
uniform sampler2D tCol; uniform sampler2D tDepth; uniform vec2 uOrigin; uniform float uK; uniform vec2 uSize;
void main() {
  ivec2 p = clamp(ivec2(floor((gl_FragCoord.xy - uOrigin) / uK)), ivec2(0), ivec2(uSize) - 1);
  gl_FragColor = vec4(texelFetch(tCol, p, 0).rgb, 1.0);
  gl_FragDepth = texelFetch(tDepth, p, 0).r;
}`,depthTest:!0,depthWrite:!0,depthFunc:Po})}function rd(n){return new cn({uniforms:{...n.uniforms,...It,uSkySteps:{value:Qe.skySteps},uSkyDither:{value:Qe.skyDither}},vertexShader:"varying vec3 vDir; void main() { vDir = normalize(position); vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0); gl_Position = p.xyww; }",fragmentShader:`
uniform vec3 uZenith; uniform vec3 uMid; uniform vec3 uHorizon; uniform float uMidShare; uniform float uSkySteps; uniform float uSkyDither;
uniform vec2 uDitherOrigin; uniform float uBNight;
varying vec3 vDir;
layout(location = 1) out highp vec4 pc_fragN;
${Qu()}
void main() {
  float e = bQuant(clamp(vDir.y, 0.0, 1.0), uSkySteps, uSkyDither);
  vec3 c = e < uMidShare ? mix(uHorizon, uMid, e / uMidShare) : mix(uMid, uZenith, (e - uMidShare) / (1.0 - uMidShare));
  // Stars after dark: single cells of the sky's direction.
  vec3 sd = normalize(vDir) * ${ot(Pn.starCellsPerRadian)};
  vec3 sc = floor(sd);
  float sh = fract(sin(dot(sc, vec3(12.9898, 78.233, 37.719))) * 43758.5453);
${tn()?`  // Smooth B: each star a round dot in its cell.
  float saa = max(fwidth(sd.x) + fwidth(sd.y), 1e-4);
  float sdot = 1.0 - smoothstep(${ot(Gn().starDotShare*.5)} - saa, ${ot(Gn().starDotShare*.5)} + saa, length(fract(sd) - 0.5));
  c = mix(c, vec3(0.85, 0.88, 0.95), sdot * step(1.0 - ${ot(Pn.starShare)}, sh) * step(0.6, uBNight) * smoothstep(0.04, 0.2, vDir.y));`:`  c = mix(c, vec3(0.85, 0.88, 0.95), step(1.0 - ${ot(Pn.starShare)}, sh) * step(0.6, uBNight) * smoothstep(0.04, 0.2, vDir.y));`}
  gl_FragColor = vec4(pow(c, vec3(1.0 / 2.2)), 1.0);
  pc_fragN = vec4(0.5, 0.5, 1.0, 0.0);
}`,side:n.side,depthWrite:!1,depthTest:!1,fog:!1})}const qn={w:1,h:1,dpr:1,baseX:0,baseY:0},Ds={hooked:!1,inScene:!1,t0:0,next:1/0,step:1/0,cuts:0,lastSceneTris:0,flushes:0},Ro={scale:re.smooth.scale},Rb=["","depth","normal","edges"],Cb=["","depth","normal","edges","grid"],Vo={n:0};function ad(n){n.state.buffers.color.setMask(!0),n.clear(!0,!1,!1)}function cs(n,e,t){n[0]=e,n[1]=t}function od(n,e,t,i){n.length=0,n.push("scene","edges"),e&&n.push("fxaa"),t!==null&&n.push(t),i&&n.push("rcas")}function ld(n,e){const t=Xm.quality.standard,i=matchMedia("(pointer: coarse)").matches?t.targetBufferPixelsTouch:t.targetBufferPixels,s=Math.max(1,Math.round(Math.sqrt(n*e/i)/Qe.fineGrid)),r=Qe.marginPixels,a=Math.ceil(n/s)+2*r,l=Math.ceil(e/s)+2*r,o=Math.floor((n-a*s)/2),u=Math.floor((e-l*s)/2);let c=Math.max(1,Math.min(s,re.opt.canvas.perBufferPixel));for(;s%c;)c--;return{k:s,bw:a,bh:l,lx:o,ly:u,c}}class Pb{id="pixel";lowRes=!0;mats=new Map;lampHead;pool;poolUniforms={uRings:{value:Qe.poolRings},uPoolOpacity:{value:0}};rt=null;post=null;edge=Ab();blow=Tb();edgeScene=new br;blowScene=new br;passCam=new Ws(-1,1,1,-1,0,1);sky=null;skyB=null;cloud;cloudIn=!1;cloudShares;cloudNow={on:!1,threshold:0};ortho=new Ws;persp=new Yn;layout={buffer:[0,0],scale:1,shift:[0,0],texelMetres:0,mode:"pixel",output:[0,0],canvas:[0,0],upscale:"",passes:[]};aa=null;full=null;sm=null;drawingBuffer=new qe;camRight=new z;camUp=new z;finish={S:re.smooth,W:1,H:1,iw:1,ih:1,ow:1,oh:1,none:!1,isOrtho:!1,pxOrtho:0,texel:0,camNear:0,camFar:0,camFov:0,focus:0,shim:hb()};groundOf;groundMaterial(e){return this.groundOf(e)}constructor(e,t){const i=$t,s=tn()?Gn().aoSteps:Qe.aoSteps,r=Eb(t),a=new z(t.e0,t.s0,t.step*t.n),l=(d,g)=>wi(vu(new Cn({vertexColors:d.vertexColors}),{srgbColours:d.srgb,ao:d.ao,facade:d.facade,dayNight:d.dayNight,nightLift:d.nightLift,farWindows:d.farWindows,dissolve:d.dissolve,rigCells:d.rigCells,aoSteps:s,aoFloor:Qe.aoFloor,blockMask:d.blockMask}),{edgeClass:g,grain:d.grain,masonry:d.facade,roadNight:d.roadNight,actor:d.actor,walker:d.walker,noCloud:d.noCloud},d.roadNight?o:{}),o={uRoadNight:{value:new z((Pn.roadColour>>16&255)/255,(Pn.roadColour>>8&255)/255,(Pn.roadColour&255)/255)}};this.groundOf=d=>(d.colorSpace=Sn,wi(new Cn({map:d}),{edgeClass:i.classGround,grain:!0,roadNight:!0,roadMask:!0},o)),this.mats.set("ground",this.groundOf(e)),this.mats.set("building",l({srgb:!0,ao:!0,facade:!0,dayNight:!1,vertexColors:!0},i.classObject)),this.mats.set("road",l({srgb:!0,ao:!0,facade:!1,dayNight:!1,vertexColors:!0,grain:!0,roadNight:!0},i.classGround)),this.mats.set("farGround",wi(vu(new Cn({vertexColors:!0}),{srgbColours:!0,ao:!0,facade:!1,dayNight:!1,aoSteps:s,aoFloor:Qe.aoFloor,blockMask:!0}),{edgeClass:i.classGround,worldCells:!0},{uFam:{value:r},uFamFrame:{value:a},uFamN:{value:t.n}})),this.mats.set("farBuilding",l({srgb:!0,ao:!0,facade:!1,dayNight:!1,vertexColors:!0,farWindows:!0,blockMask:!0},i.classSoft)),this.makeVoxel=()=>l({srgb:!0,ao:!0,facade:!1,dayNight:!0,vertexColors:!0,dissolve:!0,noCloud:!0},i.classObject),this.mats.set("voxel",l({srgb:!0,ao:!0,facade:!1,dayNight:!0,vertexColors:!0,noCloud:!0},i.classObject)),this.mats.set("part",l({srgb:!0,ao:!1,facade:!1,dayNight:!1,vertexColors:!0,nightLift:!0,actor:!0,noCloud:!0},i.classObject)),this.mats.set("walker",l({srgb:!0,ao:!1,facade:!1,dayNight:!1,vertexColors:!0,nightLift:!1,actor:!0,walker:!0,noCloud:!0},i.classObject)),this.makeWalkerDissolve=()=>l({srgb:!0,ao:!1,facade:!1,dayNight:!1,vertexColors:!0,nightLift:!1,actor:!0,walker:!0,dissolve:!0,rigCells:!0,noCloud:!0},i.classObject),this.mats.set("crown",wi(new Cn({color:16777215}),{edgeClass:i.classSoft,minLevel:Qe.crownMinLevel,shadowFloor:Qe.crownShadowLevel,crown:!0},{uClumps:{value:Qe.crownClumps},uClumpAmp:{value:Qe.crownClumpAmp}}));const u=wi(new Cn({color:16777215,side:jn}),{edgeClass:i.classNone,cloud:!0},{uCloudShade:{value:new Ke().setHex(_t.shade)},uCloudLight:{value:new Ke().setHex(_t.light)}});this.cloud=new vt(new Hs(_t.sizeMetres,_t.sizeMetres).rotateX(-Math.PI/2),u),this.cloud.name="clouds",this.cloud.frustumCulled=!1,this.cloud.castShadow=!1,this.cloud.receiveShadow=!1,this.cloudShares=yb(),this.mats.set("trunk",wi(new Cn({color:re.props.trunkColour}),{edgeClass:i.classSoft})),this.mats.set("lampPole",wi(new Cn({color:re.props.lampPoleColour}),{edgeClass:i.classSoft,noCloud:!0})),this.lampHead=wi(new Cn({color:re.props.lampHeadColour,emissive:new Ke(re.props.lampHeadColour)}),{edgeClass:i.classSoft,noCloud:!0}),this.mats.set("lampHead",this.lampHead);const c=d=>new Ke().setHex(d);this.mats.set("water",wi(new Cn({color:re.water.colour}),{edgeClass:i.classNone,water:!0},{uNoise:{value:bb()},uWaveTexel:{value:new qe(...Rn.texelMetres)},uSpeedA:{value:new qe(...Rn.speedA)},uSpeedB:{value:new qe(...Rn.speedB)},uScaleB:{value:Rn.scaleB},uMid:{value:Rn.mid},uHigh:{value:Rn.high},uSparkleAbove:{value:Rn.sparkleAbove},uSparkleChance:{value:Rn.sparkleChance},uSparkleHz:{value:Rn.sparkleHz},uSparkleMetres:{value:Rn.sparkleMetres},uTones:{value:Rn.tones.map(c)},uSparkle:{value:c(Rn.sparkle)},uFam:{value:r},uFamFrame:{value:a},uFamDither:{value:Rn.familyDither}})),this.pool=new Ko({map:Lb(),color:re.props.lampPoolColour,transparent:!0,blending:Co,depthWrite:!1,fog:!1,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4}),this.pool.onBeforeCompile=d=>{Object.assign(d.uniforms,It,this.poolUniforms,ni),d.vertexShader=js(d.vertexShader),d.fragmentShader=d.fragmentShader.replace("#include <common>",`#include <common>
uniform vec2 uDitherOrigin; uniform float uRings; uniform float uPoolOpacity;
layout(location = 1) out highp vec4 pc_fragN;
${Qu()}`).replace("#include <opaque_fragment>","gl_FragColor = vec4(pow(diffuse, vec3(1.0 / 2.2)) * bQuant(sampledDiffuseColor.r, uRings, 1.0), uPoolOpacity);").replace("#include <colorspace_fragment>","").replace("#include <dithering_fragment>","pc_fragN = vec4(0.0);")},this.pool.customProgramCacheKey=()=>"pixel-pool",this.mats.set("lampPool",this.pool);for(const d of["road"]){const g=this.mats.get(d);g.polygonOffset=!0,g.polygonOffsetFactor=0,g.polygonOffsetUnits=re.plain.roadDepthUnits}const f=new vt(pc,this.edge);f.frustumCulled=!1,this.edgeScene.add(f);const h=new vt(pc,this.blow);h.frustumCulled=!1,this.blowScene.add(h)}makeVoxel=()=>{throw new Error("PixelLook.makeVoxel was called before the constructor set it")};makeWalkerDissolve=()=>{throw new Error("PixelLook.makeWalkerDissolve was called before the constructor set it")};material(e){return this.mats.get(e)}treeImpostorMaterial(e){const t=wi(new Cn({color:16777215}),{edgeClass:$t.classSoft,minLevel:Qe.crownMinLevel,shadowFloor:Qe.crownShadowLevel,crown:!0,impostor:e},{uClumps:{value:Qe.crownClumps},uClumpAmp:{value:Qe.crownClumpAmp},uTrunkCol:{value:new Ke().setHex(re.props.trunkColour)},...Ao});return this.mats.set("treeImpostor",t),t}update(e){this.lampHead.emissiveIntensity=e,this.poolUniforms.uPoolOpacity.value=e*re.props.lampPoolStrength,this.pool.visible=e>.01}clouds(e){const t=wb(e,this.cloudShares,this.cloudNow);It.uCloudOn.value=t.on?1:0,It.uCloudThresh.value=t.threshold,this.cloud.visible=t.on}warmMeshes(){return[this.cloud]}light(e,t){It.uAmb.value.set(e.ambient[0],e.ambient[1],e.ambient[2]),It.uSun.value.set(e.sun[0],e.sun[1],e.sun[2]),It.uTime.value=t,It.uBNight.value=e.night;const[i,s]=Pn.shadowOffNight,r=Math.min(1,Math.max(0,(e.night-i)/(s-i)));It.uShadowMix.value=1-r*r*(3-2*r),It.uSunW.value.set(e.lightDir[0],e.lightDir[2],e.lightDir[1]).normalize();const a=Math.max(.001,e.lightDir[2]),[l,o]=Qe.bandGainRange;It.uBandGain.value=Math.min(o,Math.max(l,Qe.shadeLevels[Qe.flatLevel]/a))}targets(e,t){if(this.rt&&this.rt.width===e&&this.rt.height===t)return;this.rt?.dispose(),this.post?.dispose();const i=new on(e,t,{count:2,minFilter:Tt,magFilter:Tt,generateMipmaps:!1,depthBuffer:!0});i.depthTexture=new Ms(e,t,Un),i.depthTexture.minFilter=i.depthTexture.magFilter=Tt;for(const s of i.textures)s.colorSpace=di;this.rt=i,this.post=new on(e,t,{minFilter:Tt,magFilter:Tt,generateMipmaps:!1,depthBuffer:!1})}smoothTargets(e,t,i,s){const r=Gn();if(!this.rt||this.rt.width!==e||this.rt.height!==t){this.rt?.dispose(),this.post?.dispose(),this.aa?.dispose();const l=new on(e,t,{count:2,minFilter:Tt,magFilter:Tt,generateMipmaps:!1,depthBuffer:!0});l.depthTexture=new Ms(e,t,Un),l.depthTexture.minFilter=l.depthTexture.magFilter=Tt;for(const o of l.textures)o.colorSpace=di;this.rt=l,this.post=new on(e,t,{minFilter:Xt,magFilter:Xt,generateMipmaps:!1,depthBuffer:!1}),this.aa=r.fxaa.on?new on(e,t,{minFilter:Xt,magFilter:Xt,generateMipmaps:!1,depthBuffer:!1}):null}if(r.rcas.on&&r.upscale!=="none"&&(!this.full||this.full.width!==i||this.full.height!==s)&&(this.full?.dispose(),this.full=new on(i,s,{minFilter:Tt,magFilter:Tt,generateMipmaps:!1,depthBuffer:!1})),!this.sm){const l=new vt(pc,rb());l.frustumCulled=!1;const o=new br;o.add(l),this.sm={fxaa:l.material,up:r.upscale==="bilinear"?ob():ab(),rcas:lb(),scene:o,quad:l}}}hookSubmit(e,t){if(Ds.hooked)return;Ds.hooked=!0;const i=e.getContext(),s=e.shadowMap,r=s.render;s.render=function(...u){const c=e.info.render.calls;r.apply(this,u),Ds.inScene&&(Ds.t0=e.info.render.triangles);const f=re.opt.submit;!re.opt.on||!f.on||!f.flushAfterShadow||e.info.render.calls===c||(i.flush(),Ds.flushes++)};const a=()=>{const u=Ds;!u.inScene||u.cuts<=0||e.info.render.triangles-u.t0>=u.next&&(i.flush(),u.flushes++,u.next+=u.step,u.cuts--)},l=Object.getPrototypeOf(t).onAfterRender;pm(t,"submit",u=>{if(!u.isMesh)return;const c=u.onAfterRender;if(c?.__submitHook)return;const f=c&&c!==l?((...h)=>{c.apply(u,h),a()}):()=>a();f.__submitHook=!0,u.onAfterRender=f})}pass(e,t,i){this.sm.quad.material=t,e.setRenderTarget(i),Ge.look.clearFinishColour&&(ad(e),Vo.n++),e.autoClear=!1,e.render(this.sm.scene,this.passCam),e.autoClear=!0}renderSmooth(e,t,i,s,r){const a=Gn(),l=qn.w,o=qn.h,u=e.getDrawingBufferSize(this.drawingBuffer),c=a.upscale==="none",f=c?u.x:Math.max(1,Math.round(l*Ro.scale)),h=c?u.y:Math.max(1,Math.round(o*Ro.scale));this.smoothTargets(f,h,u.x,u.y);let d,g=0,v=0;const p=i.isOrthographicCamera===!0;if(p){const x=i;if(d=this.ortho.copy(x),x.userData.ported&&Ge.view.useGameFrame)d.projectionMatrix.copy(x.projectionMatrix),d.projectionMatrixInverse.copy(x.projectionMatrixInverse),g=x.userData.texelMetres??(x.right-x.left)/l,v=(x.top-x.bottom)/h;else{const{k:b}=ld(l,o);g=x.userData.texelMetres??(x.right-x.left)/l*b,d.left=-l/b/2*g,d.right=l/b/2*g,d.top=o/b/2*g,d.bottom=-o/b/2*g,d.updateProjectionMatrix(),v=(d.top-d.bottom)/h}}else{const x=i;d=this.persp.copy(x),d.projectionMatrix.copy(x.projectionMatrix),d.projectionMatrixInverse.copy(x.projectionMatrixInverse)}d.layers.mask=r?s|1:s,d.updateMatrixWorld(),It.uDitherOrigin.value.set(0,0),Qe.clouds.on&&!this.cloudIn&&(t.add(this.cloud),this.cloudIn=!0),this.cloud.position.set(d.position.x,Qe.clouds.heightMetres,d.position.z),this.cloud.updateMatrixWorld();const m=re.plain.windowGlow;Ir.uWindowGlow.value=p?m*Pn.mapWindowGain:m,this.sky||(this.sky=t.getObjectByName("sky")??null,this.sky&&(this.skyB=rd(this.sky.material)));const y=this.sky?.material;this.sky&&this.skyB&&(this.sky.material=this.skyB),e.setRenderTarget(this.rt),e.setClearColor(0,0),e.autoClear=!0;const _=re.opt.submit,w=re.opt.on&&_.on,S=Ds;w&&this.hookSubmit(e,t),S.t0=e.info.render.triangles,S.inScene=w,S.cuts=w&&_.sceneParts>1&&S.lastSceneTris>0?_.sceneParts-1:0,S.step=S.cuts>0?S.lastSceneTris/_.sceneParts:1/0,S.next=S.step,e.render(t,d),S.lastSceneTris=e.info.render.triangles-S.t0,S.inScene=!1,w&&_.flushAfterScene&&(e.getContext().flush(),S.flushes++),this.sky&&y&&(this.sky.material=y);const M=this.finish;M.S=a,M.W=l,M.H=o,M.iw=f,M.ih=h,M.ow=u.x,M.oh=u.y,M.none=c,M.isOrtho=p,M.pxOrtho=v,M.texel=g,M.camNear=d.near,M.camFar=d.far,M.camFov=p?0:d.fov,M.focus=i.userData?.focusMetres??0,pb(f,h),fb(M.shim),this.finishSmooth(e,M)}finishSmooth(e,t){const{S:i,W:s,H:r,iw:a,ih:l,none:o,isOrtho:u,pxOrtho:c,texel:f}=t,h=this.edge.uniforms;db(t.shim);const d=$t.outline,g=mi("outline");h.tCol.value=this.rt.textures[0],h.tNrm.value=this.rt.textures[1],h.tDepth.value=this.rt.depthTexture,h.uNF.value.set(t.camNear,t.camFar),h.uOrtho.value=u?1:0,h.uSize.value.set(a,l),h.uTexel.value=c,h.uFadeTexel.value=f,h.uAlphaLuma.value=i.fxaa.on?1:0,h.uPixelAngle.value=u?0:2*Math.tan(t.camFov*Math.PI/360)/l,h.uDebug.value=Rb.indexOf(Qe.debug);const v=u?$t.orthoOutlineTint:$t.outlineTint;h.uTint.value.set(v[0],v[1],v[2]),h.uSoftOutline.value=u&&!$t.orthoSoftOutline?0:1,h.uNewStyle.value=g?1:0,h.uThin.value=0,h.uConcaveOn.value=g&&d.silhouetteOnly?0:1,h.uCreaseShare.value=g?i.outline.creaseShare:1,h.uStrength.value=u?i.outline.orthoStrength:i.outline.strength,h.uOuter.value=i.outline.outerShare,h.uSharpen.value=o?i.sharpen.amount:0;const p=h.uFade.value;g?p.set(Math.max(d.fadeMetres[0],t.focus*d.fadeFocusShare[0]),Math.max(d.fadeMetres[1],t.focus*d.fadeFocusShare[1])):p.set($t.fadeMetres[0],$t.fadeMetres[1]),h.uC.value=1,h.uShiftC.value.set(0,0);const m=i.fxaa.on&&!!this.aa;this.pass(e,this.edge,o&&!m?null:this.post);let y=this.post;if(m&&(this.sm.fxaa.uniforms.tIn.value=this.post.texture,this.sm.fxaa.uniforms.uRcp.value.set(1/a,1/l),this.pass(e,this.sm.fxaa,o?null:this.aa),y=this.aa),o){e.setRenderTarget(null),this.layout.mode="smooth",cs(this.layout.buffer,a,l),this.layout.scale=s/a,cs(this.layout.shift,0,0),this.layout.texelMetres=u?c:0,cs(this.layout.output,s,r),cs(this.layout.canvas,t.ow,t.oh),this.layout.upscale="compositor (bilinear)",od(this.layout.passes,m,null,!1);return}const _=this.sm.up;_.uniforms.tIn.value=y.texture,_.uniforms.uInSize&&_.uniforms.uInSize.value.set(a,l),_.uniforms.uOutSize.value.set(t.ow,t.oh);const w=i.rcas.on&&this.full;if(this.pass(e,_,w?this.full:null),w){const S=this.sm.rcas;S.uniforms.tIn.value=this.full.texture,S.uniforms.uSize.value.set(t.ow,t.oh),S.uniforms.uSharp.value=Math.pow(2,-i.rcas.sharpnessStops),this.pass(e,S,null)}e.setRenderTarget(null),this.layout.mode="smooth",cs(this.layout.buffer,a,l),this.layout.scale=1/Ro.scale,cs(this.layout.shift,0,0),this.layout.texelMetres=u?c:0,cs(this.layout.output,s,r),cs(this.layout.canvas,t.ow,t.oh),this.layout.upscale=i.upscale+(w?" + RCAS":""),od(this.layout.passes,m,i.upscale,!!w)}render(e,t,i,s,r){if(tn()){this.renderSmooth(e,t,i,s,r);return}const a=mi("canvas"),l=a?this.drawingBuffer.set(qn.w,qn.h):e.getDrawingBufferSize(this.drawingBuffer),o=l.x,u=l.y,{k:c,bw:f,bh:h,lx:d,ly:g,c:v}=ld(o,u),p=Qe.marginPixels;this.targets(f,h);const m=o/(f*c),y=u/(h*c),_=(o-2*d)/(f*c)-1,w=(u-2*g)/(h*c)-1;let S,M;if(i.isOrthographicCamera){const j=i;S=this.ortho.copy(j),j.userData.ported&&Ge.view.useGameFrame?(S.projectionMatrix.copy(j.projectionMatrix),S.projectionMatrixInverse.copy(j.projectionMatrixInverse),M=j.userData.texelMetres??(j.right-j.left)/o):(M=j.userData.texelMetres??(j.right-j.left)/o*c,S.left=-o/c/2*M,S.right=o/c/2*M,S.top=u/c/2*M,S.bottom=-u/c/2*M,S.updateProjectionMatrix())}else{const j=i;S=this.persp.copy(j),S.projectionMatrix.copy(j.projectionMatrix),M=2*(j.userData.focusMetres??50)*Math.tan(j.fov*Math.PI/360)/u*c}S.layers.mask=r?s|1:s,S.updateMatrixWorld();const x=this.camRight.setFromMatrixColumn(S.matrixWorld,0),b=this.camUp.setFromMatrixColumn(S.matrixWorld,1);let A=0,E=0,P=0,R=0;if(Qe.snap){const j=S.position.dot(x)/M,V=S.position.dot(b)/M;P=Math.round(j),R=Math.round(V),A=j-P,E=V-R,S.position.addScaledVector(x,-A*M).addScaledVector(b,-E*M),S.updateMatrixWorld()}const D=S.projectionMatrix.elements;for(let j=0;j<4;j++){const V=D[j*4],B=D[j*4+1],te=D[j*4+3];D[j*4]=m*V+_*te,D[j*4+1]=y*B+w*te}S.projectionMatrixInverse.copy(S.projectionMatrix).invert();const C=j=>(j%4+4)%4;It.uDitherOrigin.value.set(C(P),C(R));const I=S.isOrthographicCamera===!0;Qe.clouds.on&&!this.cloudIn&&(t.add(this.cloud),this.cloudIn=!0),this.cloud.position.set(S.position.x,Qe.clouds.heightMetres,S.position.z),this.cloud.updateMatrixWorld();const U=re.plain.windowGlow;Ir.uWindowGlow.value=I?U*Pn.mapWindowGain:U;const O=mm.object??void 0,W=O&&Qe.snapActors&&Qe.snap?O.position.clone():null;O&&W&&(O.position.addScaledVector(x,-A*M).addScaledVector(b,-E*M),O.updateMatrixWorld(!0)),this.sky||(this.sky=t.getObjectByName("sky")??null,this.sky&&(this.skyB=rd(this.sky.material)));const k=this.sky?.material;this.sky&&this.skyB&&(this.sky.material=this.skyB),e.setRenderTarget(this.rt),e.setClearColor(0,0),e.autoClear=!0,e.render(t,S),this.sky&&k&&(this.sky.material=k),O&&W&&(O.position.copy(W),O.updateMatrixWorld(!0));const G=this.edge.uniforms;mb(f,h,m,y,_,w),G.tCol.value=this.rt.textures[0],G.tNrm.value=this.rt.textures[1],G.tDepth.value=this.rt.depthTexture,G.uNF.value.set(S.near,S.far),G.uOrtho.value=S.isOrthographicCamera?1:0,G.uSize.value.set(f,h),G.uTexel.value=M,G.uFadeTexel.value=M,G.uAlphaLuma.value=0,G.uPixelAngle.value=S.isPerspectiveCamera?2*Math.tan(S.fov*Math.PI/360)*c/u:0,G.uDebug.value=Cb.indexOf(Qe.debug),G.uTint.value.set(...I?$t.orthoOutlineTint:$t.outlineTint),G.uSoftOutline.value=I&&!$t.orthoSoftOutline?0:1;const Z=$t.outline,me=mi("outline");G.uNewStyle.value=me?1:0,G.uThin.value=me&&Z.thin?1:0,G.uConcaveOn.value=me&&Z.silhouetteOnly?0:1,G.uCreaseShare.value=me?Z.creaseShare:1,G.uStrength.value=I?Z.orthoStrength:Z.strength,G.uOuter.value=0,G.uSharpen.value=0;const le=i.userData?.focusMetres??0;G.uFade.value.set(...me?[Math.max(Z.fadeMetres[0],le*Z.fadeFocusShare[0]),Math.max(Z.fadeMetres[1],le*Z.fadeFocusShare[1])]:$t.fadeMetres);let q=Qe.snap?Math.round(-A*c):0,$=Qe.snap?Math.round(-E*c):0;if(Qe.debug==="grid"){const j=Qe.gridTest,V=Math.round(j.cycleBufferPixels*c),B=Math.floor(performance.now()/1e3*j.stepsPerSecond)%(2*V);q=B<V?B:2*V-B,$=Math.floor(q/2)}if(a){const j=c/v,V=Math.round(q/j),B=Math.round($/j),te=re.opt.canvas.cssRemainder?q-V*j:0,ee=re.opt.canvas.cssRemainder?$-B*j:0;G.uC.value=v,G.uShiftC.value.set(V,B),e.setRenderTarget(null),Ge.look.clearFinishColour&&(ad(e),Vo.n++),e.autoClear=!1,e.render(this.edgeScene,this.passCam),e.autoClear=!0;const ce=e.domElement,Ce=`translate(${(qn.baseX+te)/qn.dpr}px, ${(qn.baseY-ee)/qn.dpr}px)`;ce.style.transform!==Ce&&(ce.style.transform=Ce),this.layout.buffer=[f-2*p,h-2*p],this.layout.scale=c,this.layout.shift=[q,$],this.layout.texelMetres=M,this.layout.output=[qn.w,qn.h],this.layout.canvas=[e.domElement.width,e.domElement.height],this.layout.upscale="compositor (hard pixels)",this.layout.passes=["scene","edges (to the canvas)"];return}G.uC.value=1,G.uShiftC.value.set(0,0),e.setRenderTarget(this.post),e.render(this.edgeScene,this.passCam);const K=this.blow.uniforms;K.tCol.value=this.post.texture,K.tDepth.value=this.rt.depthTexture,K.uOrigin.value.set(d+q,g+$),K.uK.value=c,K.uSize.value.set(f,h),e.setRenderTarget(null),e.autoClear=r,e.render(this.blowScene,this.passCam),e.autoClear=!0,this.layout.buffer=[f-2*p,h-2*p],this.layout.scale=c,this.layout.shift=[q,$],this.layout.texelMetres=M,this.layout.output=[o,u],this.layout.canvas=[e.domElement.width,e.domElement.height],this.layout.upscale="blow-up pass (hard pixels)",this.layout.passes=["scene","edges","blow-up"]}}function Lb(){const e=new Uint8Array(16384);for(let i=0;i<64;i++)for(let s=0;s<64;s++){const r=Math.hypot(s+.5-32,i+.5-32)/32,a=Math.round(255*Math.max(0,1-r)**2);e.set([a,a,a,255],(i*64+s)*4)}const t=new Kn(e,64,64);return t.needsUpdate=!0,t}function Db(){re.actors.ferries=[],re.actors.carRoads=[]}const uo={x:0,y:0,z:0};function xm(n,e,t,i,s){n.ok=!1;const r=e.objects[t.object];if(!r)return n;const a=r.position;if(!Number.isFinite(a.x+a.y+a.z))return n;const l=t.object<(e.followObjects??0),o=l?i.cpu.snapDX:0,u=l?i.cpu.snapDY:0;return an(s,i.cpu.cellMetres,a.x+o,a.y+u,a.z,uo),n.x=uo.x,n.y=uo.y,n.z=uo.z,n.yaw=-r.yaw,n.ok=!0,n}function Ib(n,e){let t=-1,i=-1,s=null,r=0,a=!1,l=null,o=null;cl.uRigVoxel.value=_r.model.voxelMetres;let u,c;const f={x:0,y:0,depthMetres:0,eyeMetres:0,pixelsPerMetre:0},h={x:0,y:0,z:0,yaw:0,ok:!1},d=(g,v,p,m)=>(xm(h,v,p,m,e),h.ok?(g.position.set(h.x,h.y,h.z),g.rotation.y=h.yaw,!0):!1);return{update(g,v,p,m){t=-1,i=-1,a=!1;const y=p?.poses;if(y){for(const _ of y)if(!(_.object<0||_.object>=g.objects.length)&&!m[_.object])switch(_.kind){case"walker":{if(!d(n.walker.root,g,_,v))break;const w=g.objects[_.object].model,S=ib(w);if(S)n.walker.root.position.y-=S.pivotZ*_r.model.voxelMetres,w!==s&&(n.walker.pose(S.pose,S),n.walkerLow?.pose(S.pose,S),s=w);else{r++;const D=ua.cycle(_.phase??0,_.gait??0);n.walker.pose(D),n.walkerLow?.pose(D),s=null}const M=g.objects[_.object];Au.uWalkerGain.value=S?qm(S.level):1;const x=M.tint??16777215;Au.uWalkerTint.value.set((x>>16&255)/255,(x>>8&255)/255,(x&255)/255);const b=M.fade??1,A=n.walkerDissolve?oa(n.walkerDissolve):void 0,E=o??(b<1&&A?n.walkerDissolve:n.walkerMaterial);if(E!==l&&(n.walker.setMaterial(E),n.walkerLow?.setMaterial(E),l=E),E===n.walkerDissolve&&A){const D=n.walker.root.position;f.pixelsPerMetre=0,al(v,D.x,D.y,D.z,f),A.share.value=Od(b,f.pixelsPerMetre>0?_r.model.voxelMetres*f.pixelsPerMetre:0,Ge.objects.fadeCurve);const C=M.fadeSeed??0;A.seed.value=C>=0&&C<1?C:0,A.pivot.value.set(w.pivot.x,w.pivot.y,0)}const P=E===n.walkerDissolve&&A?u??=bu(A,!0):void 0,R=wu(P);R&&(R.value=b),P!==c&&(n.walker.setDepthMaterial(P),n.walkerLow?.setDepthMaterial(P),c=P),a=!(b>0),n.walker.root.visible=!a,t=_.object,m[_.object]=1;break}case"jet":{if(!d(n.jet,g,_,v))break;n.jet.visible=!0,n.jetOwn.value=Ru(g.objects[_.object]),i=_.object,m[_.object]=1;break}}}this.hideUnclaimed()},hideUnclaimed(){(t<0||a)&&(n.walker.root.visible=!1,n.walkerLow&&(n.walkerLow.root.visible=!1)),i<0&&(n.jet.visible=!1)},warmDepthMeshes(){const g=n.walkerDissolve?oa(n.walkerDissolve):void 0;return g?(u??=bu(g,!0),u.side=yn,n.walker.warmMeshes([u])):[]},get unresolvedFrames(){return r},setMark(g){o=g},drawn(g){return g===t?n.walkerLow?.root.visible?n.walkerLow.root:n.walker.root:g===i?n.jet:null}}}const $o=0,Wi=1,na=2;class Fb{action=new Uint8Array(La);scale=new Float32Array(La).fill(1);kind(e){const t=xh(e);return t>0&&t<La?this.action[t]:$o}softScale(e){const t=xh(e);return t>0&&t<La?this.scale[t]:1}clear(){this.action.fill($o),this.scale.fill(1)}}const Vi=Dn.particles,Nb=Dn.haze.emissiveShare,Ub=Dn.shadeLevels[Dn.flatShade],vm=Ge.particles.max,Ob=re.plain.actorNightLift,Mm=n=>Number.isInteger(n)?n.toFixed(1):String(n),kb=[["P_FLAT_SHADE",Ub],["P_DECAL_BIAS_METRES",Vi.decalBiasMetres],["P_NIGHT_LIFT",Ob]].map(([n,e])=>`const float ${n} = ${Mm(e)};`).join(`
`),Bb=`
#include <common>
#include <lights_pars_begin>

${kb}

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
${Cp}

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
`,zb=`
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
`,hi={x:0,y:0,z:0},Yr={x:0,y:0,z:0},jr={x:0,y:0,z:0},Gi={x:0,y:0,depthMetres:0,eyeMetres:0,pixelsPerMetre:0},mc={x:0,y:0,depthMetres:0,eyeMetres:0,pixelsPerMetre:0},gc={x:0,y:0,depthMetres:0,eyeMetres:0,pixelsPerMetre:0},Gb={x:0,y:0},ho=new Ke;function xc(n,e,t,i,s=0){const r=(e.x-n.eye.x)*n.forward.x+(e.y-n.eye.y)*n.forward.y+(e.z-n.eye.z)*n.forward.z;if(!n.ortho&&!(r>=n.near))return!1;if(ts(n)){const a=n.view.elements;if(Bo(n,a[0]*e.x+a[4]*e.y+a[8]*e.z+a[12],a[1]*e.x+a[5]*e.y+a[9]*e.z+a[13],a[2]*e.x+a[6]*e.y+a[10]*e.z+a[14],i)<=n.near)return!1}return al(n,e.x,e.y,e.z,t,i,s),t.pixelsPerMetre>0}class cd{constructor(e=vm,t="general"){this.capacity=e,this.take=t,this.geometry.setAttribute("position",new Ft([-1,-1,0,1,-1,0,1,1,0,-1,1,0],3)),this.geometry.setIndex([0,1,2,0,2,3]),this.geometry.instanceCount=0;const i=(s,r)=>{const a=new Us(new Float32Array(Math.max(1,this.capacity)*r),r);return a.setUsage(ng),this.geometry.setAttribute(s,a),this.attributes.push(a),a};this.centre=i("iCentre",3),this.axisU=i("iAxisU",3),this.axisV=i("iAxisV",3),this.half=i("iHalf",2),this.colour=i("iColour",3),this.pool=i("iPool",3),this.look=i("iLook",4),this.shape=i("iShape",4),this.turn=i("iTurn",1),this.uniforms=el.merge([ke.lights,ke.fog,{uNight:{value:0}}]),Object.assign(this.uniforms,ni),this.material=new cn({name:"particles",uniforms:this.uniforms,vertexShader:Bb,fragmentShader:zb,transparent:!0,premultipliedAlpha:!0,blending:Os,depthWrite:!1,depthTest:!0,side:jn,fog:!0,lights:!0,defines:t==="fixed"&&Ge.particles.fixedFarEpsilon>0?{P_FAR_KEEP:Mm(1-Ge.particles.fixedFarEpsilon)}:{}}),this.object=new vt(this.geometry,this.material),this.object.name=t==="fixed"?"fixed points":"particles",this.object.frustumCulled=!1}object;drawn=0;dropped=0;geometry=new nl;material;uniforms;centre;axisU;axisV;half;colour;pool;look;shape;turn;attributes=[];update(e,t,i,s,r=0,a=null){this.uniforms.uNight.value=s;const l=i.cpu.cellMetres,o=this.centre.array,u=this.axisU.array,c=this.axisV.array,f=this.half.array,h=this.colour.array,d=this.pool.array,g=this.look.array,v=this.shape.array,p=this.turn.array,m=Math.min(r,e.length),y=zo(i,Gb);let _=0;this.dropped=0;const w=this.take==="fixed";for(let S=0;S<e.length;S++){const M=e[S],x=M.fixedPx;if(x!==void 0!==w)continue;const b=M.alpha;if(!(b>0))continue;const A=a?a.kind(M):$o;if(A===Wi)continue;const E=A===na;if(_>=this.capacity){this.dropped++;continue}const P=S<m,R=P?M.position.x+y.x:M.position.x,D=P?M.position.y+y.y:M.position.y,C=M.position.z;if(!Number.isFinite(R+D+C+M.size))continue;an(i.origin,l,R,D,C,hi);const I=M.subject===!0?i.cpu.subShare:0,U=I>0&&i.cpu.subOn?Ym(i.cpu,R,D,C/l):0;if(!xc(i,hi,Gi,I,U))continue;const O=i.toGridY,W=Gi.pixelsPerMetre*l*O,k=Gi.pixelsPerMetre*O,G=Gi.x*i.toGridX,Z=Gi.y*i.toGridY,me=i.gridW,le=i.gridH,q=M.axisA,$=M.axisB,K=!!q&&!!$,j=!!M.soft||K||E;let V=0,B=0,te=0,ee=0,ce=0,Ce=0;if(q&&$){if(an(i.origin,l,R+q.x,D+q.y,C+q.z,Yr),an(i.origin,l,R+$.x,D+$.y,C+$.z,jr),!xc(i,Yr,mc,I,U)||!xc(i,jr,gc,I,U))continue;V=(mc.x-Gi.x)*i.toGridX,B=(mc.y-Gi.y)*i.toGridY,te=(gc.x-Gi.x)*i.toGridX,ee=(gc.y-Gi.y)*i.toGridY}else if(w){const Y=x;if(M.soft){const N=Math.min(Vi.softMaxPx,Y/2);V=N,ee=N,ce=N/k}else{const N=Y<1?1:Y;if(Math.max(0,Math.floor(G-N/2))>=Math.min(me,Math.ceil(G+N/2))||Math.max(0,Math.floor(Z-N/2))>=Math.min(le,Math.ceil(Z+N/2)))continue;ce=N/2/k}Ce=ce}else if(M.soft||E){const Y=Math.min(Vi.softMaxPx,M.size*W*(E?a.softScale(M):1)/2);V=Y,ee=Y,ce=Y/k,Ce=ce}else{let Y=Math.round(M.size*W);Y>=1?Y>Vi.maxPx&&(Y=Vi.maxPx):Y=1;const N=Math.round(G-Y/2),Te=Math.round(Z-Y/2);if(Math.max(0,N)>=Math.min(me,N+Y)||Math.max(0,Te)>=Math.min(le,Te+Y))continue;ce=Y/2/k,Ce=ce}if(j){const Y=V*ee-B*te;if(Math.abs(Y)<Vi.softMinPx*Math.max(1,Math.hypot(V,B,te,ee)))continue;const N=Math.min(Vi.softMaxPx,Math.hypot(V,te)),Te=Math.min(Vi.softMaxPx,Math.hypot(B,ee));if(Math.max(0,Math.floor(G-N))>=Math.min(me,Math.ceil(G+N))||Math.max(0,Math.floor(Z-Te))>=Math.min(le,Math.ceil(Z+Te)))continue}const oe=M.emissive&&M.glowAdd!==void 0,ye=oe?1+M.glowAdd:M.emissive?Vi.emissiveAdd:1,pe=M.emissive&&!oe?0:1;let ne=0,Ie=0,De=0;!M.emissive&&t&&C<=t.topZ&&(R-t.x)**2+(D-t.y)**2<=t.r*t.r&&(ne=t.red,Ie=t.green,De=t.blue),ho.setHex(M.colour);const Me=_*3,We=_*2,Ve=_*4;o[Me]=hi.x,o[Me+1]=hi.y,o[Me+2]=hi.z,u[Me]=K?Yr.x-hi.x:0,u[Me+1]=K?Yr.y-hi.y:0,u[Me+2]=K?Yr.z-hi.z:0,c[Me]=K?jr.x-hi.x:0,c[Me+1]=K?jr.y-hi.y:0,c[Me+2]=K?jr.z-hi.z:0,f[We]=ce,f[We+1]=Ce,h[Me]=ho.r,h[Me+1]=ho.g,h[Me+2]=ho.b,d[Me]=ne,d[Me+1]=Ie,d[Me+2]=De,g[Ve]=b>1?1:b,g[Ve+1]=ye,g[Ve+2]=pe,g[Ve+3]=M.emissive?Nb:1,v[Ve]=j?1:0,v[Ve+1]=K?1:0,v[Ve+2]=M.emissive?0:1,v[Ve+3]=I,p[_]=U,_++}this.drawn=_,this.geometry.instanceCount=_,w&&(this.object.visible=_>0);for(const S of this.attributes)S.clearUpdateRanges(),_>0&&(S.addUpdateRange(0,_*S.itemSize),S.needsUpdate=!0)}dispose(){this.geometry.dispose(),this.material.dispose()}}function Hb(n=0){const e=new cd(vm,"general"),t=new cd(n,"fixed");return t.object.visible=!1,{object:e.object,fixedObject:t.object,update(i,s,r,a,l,o){e.update(i,s,r,a,l,o),t.update(i,s,r,a,l,o)},get drawn(){return e.drawn+t.drawn},get fixedDrawn(){return t.drawn},get dropped(){return e.dropped+t.dropped},dispose(){e.dispose(),t.dispose()}}}const eh=jm,fi=eh.burst,ud=eh.caps.desktop.bursts,Wb=Fd/4,_m=Zm+1,Vb=Nd*_m,$b=`
precision highp float;
precision highp int;
uniform sampler2D uTable;
uniform float uG, uJitter, uColourB, uChangeAt, uOnShare, uTrailShare, uPxAngle, uMinStep, uMinWidth, uSpread, uMapScale, uAdd;
uniform vec3 uSteps;
uniform vec2 uGrid;
varying vec3 vColour;
const int STARS = ${Nd};
const int PER_STAR = ${_m};

// bursts.ts hash3, in 32-bit unsigned arithmetic (multiplication wraps as Math.imul does).
float hash3(uint a, uint b, uint c) {
  uint h = (a * 0x27d4eb2du) ^ (b * 0x165667b1u) ^ (c * 0x9e3779b1u);
  h = (h ^ (h >> 15u)) * 0x85ebca6bu;
  h = (h ^ (h >> 13u)) * 0xc2b2ae35u;
  return float(h ^ (h >> 16u)) / 4294967296.0;
}
vec4 T(int row, int texel) { return texelFetch(uTable, ivec2(texel, row), 0); }
int stepOf(float a) { return a < uSteps.x ? 0 : a < uSteps.y ? 1 : a < uSteps.z ? 2 : 3; }
vec3 toLinear(vec3 c) { return mix(c / 12.92, pow((c + 0.055) / 1.055, vec3(2.4)), step(vec3(0.04045), c)); }

void main() {
  vColour = vec3(0.0);
  gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
  int id = gl_InstanceID;
  int row = id / (STARS * PER_STAR);
  int rem = id - row * STARS * PER_STAR;
  int i = rem / PER_STAR;
  int d = rem - i * PER_STAR;
  vec4 t0 = T(row, 0);
  vec4 t1 = T(row, 1);
  vec4 t2 = T(row, 2);
  vec4 t3 = T(row, 3);
  vec4 t4 = T(row, 4);
  int n = int(t2.z);
  int dots = int(t3.x);
  if (i >= n || d > dots) return;
  vec3 c = t0.xyz;
  float age = t0.w;
  float k = t1.x;
  uint seed = (uint(t2.x) << 16u) | uint(t2.y);
  uint ui = uint(i);
  float trail = t2.w;
  int flags = int(t3.w);
  bool willow = (flags & 2) != 0;
  float life = t1.z + (t1.w - t1.z) * hash3(seed, ui, 22u);
  if (age >= life + float(dots) * trail) return;
  float onAt = (flags & 8) != 0 ? max(0.0, life - t4.y) * hash3(seed, ui, 24u) * uOnShare : 0.0;
  if (age < onAt) return;
  // Its direction (x east, y south, z up): a ring in one tilted plane, or the golden spiral over the sphere.
  vec3 dir;
  if ((flags & 1) != 0) {
    float a = float(i) / float(n) * 6.28318530718 + t3.y;
    dir = vec3(cos(a), sin(a) * cos(t3.z), sin(a) * sin(t3.z));
  } else {
    float z = 1.0 - 2.0 * (float(i) + 0.5) / float(n);
    float r = sqrt(max(0.0, 1.0 - z * z));
    float a = float(i) * 2.39996322973 + t3.y;
    dir = vec3(cos(a) * r, sin(a) * r, z);
  }
  float v = t1.y * (1.0 + uJitter * (2.0 * hash3(seed, ui, 21u) - 1.0));
  bool alive = age < life;
  int st = stepOf(alive ? age / life : 1.0);
  bool useB = (flags & 4) != 0 ? age >= life * uChangeAt : hash3(seed, ui, 23u) < uColourB;
  float e = exp(-k * age);
  float sd = (1.0 - e) / k;
  float fall = uG * (age - sd) / k;
  vec3 head = vec3(dir.x * v * sd * uSpread, dir.y * v * sd * uSpread, dir.z * v * sd - fall);
  float pxM = distance(cameraPosition, c) * uPxAngle;
  float headM = max(t4.x, pxM * uMinWidth);
  vec3 off;
  int s;
  float size;
  if (d == 0) {
    if (!alive) return;
    off = head;
    s = st;
    size = headM;
  } else if (willow) {
    // A willow's dot hangs along its drooping path, trail seconds further back each.
    float ta = age - float(d) * trail;
    if (ta <= 0.0 || ta >= life) return;
    float e2 = exp(-k * ta);
    float sd2 = (1.0 - e2) / k;
    off = vec3(dir.x * v * sd2 * uSpread, dir.y * v * sd2 * uSpread, dir.z * v * sd2 - uG * (ta - sd2) / k);
    s = min(3, st + d);
    size = headM * uTrailShare;
  } else {
    // A radial streak: straight back towards the centre, the inner half a step brighter; never past the centre.
    if (!alive) return;
    float len = length(head);
    float stepM = max(pxM * uMinStep, v * e * trail);
    float back = float(d) * stepM;
    if (back >= len) return;
    off = head * (1.0 - back / len);
    s = d * 2 > dots ? max(st - 1, 0) : st;
    size = headM * uTrailShare;
  }
  vColour = toLinear(T(row, (useB ? 9 : 5) + s).rgb) * uAdd;
  vec4 clip = projectionMatrix * viewMatrix * vec4(c + vec3(off.x, off.z, off.y), 1.0);
  // A square of its size in metres, at least one buffer pixel (pixels per metre at this depth: P11 · rows / 2w).
  float ppm = projectionMatrix[1][1] * uGrid.y / (2.0 * clip.w);
  float halfPx = max(0.5 * size * uMapScale * ppm, 0.5);
  clip.xy += position.xy * vec2(2.0 * halfPx / uGrid.x, 2.0 * halfPx / uGrid.y) * clip.w;
  gl_Position = clip;
}
`,Xb=`
precision highp float;
varying vec3 vColour;
layout(location = 1) out highp vec4 pc_fragN;
void main() {
  if (vColour.r + vColour.g + vColour.b <= 0.0) discard;
  // Emissive: encoded first, alpha 0 under premultiplied blending adds it (look B's particles, the emissive mode).
  gl_FragColor = vec4(linearToOutputTexel(vec4(vColour, 1.0)).rgb, 0.0);
  pc_fragN = vec4(0.0);
}
`;function qb(){const n=new Float32Array(ud*Fd),e=new Kn(n,Wb,ud,On,Un);e.minFilter=e.magFilter=Tt,e.needsUpdate=!0;const t=new nl;t.setAttribute("position",new Ft([-1,-1,0,1,-1,0,1,1,0,-1,1,0],3)),t.setIndex([0,1,2,0,2,3]),t.instanceCount=0;const i={uTable:{value:e},uG:{value:eh.gravity},uJitter:{value:fi.speedJitter},uColourB:{value:fi.colourBShare},uChangeAt:{value:fi.changeAtShare},uOnShare:{value:fi.crackleOnShare},uTrailShare:{value:fi.trailSizeShare},uPxAngle:{value:fi.streak.pxAngleRad},uMinStep:{value:fi.streak.minStepPx},uMinWidth:{value:fi.streak.minWidthPx},uSpread:{value:1},uMapScale:{value:1},uAdd:{value:Dn.particles.emissiveAdd},uSteps:{value:[fi.stepShares[0],fi.stepShares[1],fi.stepShares[2]]},uGrid:{value:[1,1]}},s=new cn({name:"fireworks-stars",uniforms:i,vertexShader:$b,fragmentShader:Xb,transparent:!0,premultipliedAlpha:!0,blending:Os,depthWrite:!1,depthTest:!0}),r=new vt(t,s);r.frustumCulled=!1,r.renderOrder=1;let a=0,l=0;return{object:r,get drawn(){return a},get rows(){return l},update(o){const u=Km.sky;l=u?u.writeGpuTable(n,re.origin.x,re.origin.y):0,a=l*Vb,t.instanceCount=a,r.visible=a>0,!(!u||l===0)&&(e.needsUpdate=!0,i.uSpread.value=u.spreadNow,i.uMapScale.value=u.mapScaleNow,i.uGrid.value[0]=o.gridW,i.uGrid.value[1]=o.gridH)},dispose(){t.dispose(),s.dispose(),e.dispose()}}}re.props;const fr=7;function Yb(n,e){const t=re.water,i=t.gridCellMetres;let s=(n.eye.x-n.target.x)/2,r=(n.eye.z-n.target.z)/2;const a=Math.hypot(s,r);return a>t.gridTowardEyeMetres&&(s*=t.gridTowardEyeMetres/a,r*=t.gridTowardEyeMetres/a),e.x=Math.round((n.target.x+s)/i)*i,e.z=Math.round((n.target.z+r)/i)*i,e}function jb(n,e,t,i,s=[]){const r=[];let a=0,l=t;for(;a<n;){r.push(a),a>=e&&(l*=i);const u=s.find(([c])=>a<c);a=Math.min(n,a+(u?Math.min(u[1],u[0]-a):l))}return r.push(n),r.slice(1).reverse().map(u=>-u).concat(r)}function Kb(){const n=re.water;return[[n.gridInnermostHalfMetres,n.gridInnermostCellMetres],[n.gridInnerHalfMetres,n.gridInnerCellMetres]]}function Zb(){const n=re.water,e=jb(n.halfSizeMetres,n.gridFineHalfMetres,n.gridCellMetres,n.gridGrowth,Kb()),t=e.length,i=new Float32Array(t*t*3),s=new Float32Array(t*t*3),r=new Float32Array(t*t*2),a=2*n.halfSizeMetres;for(let c=0;c<t;c++)for(let f=0;f<t;f++){const h=c*t+f;i[h*3]=e[f],i[h*3+1]=n.levelMetres,i[h*3+2]=e[c],s[h*3+1]=1,r[h*2]=(e[f]+n.halfSizeMetres)/a,r[h*2+1]=1-(e[c]+n.halfSizeMetres)/a}const l=new Uint32Array((t-1)*(t-1)*6);let o=0;for(let c=0;c+1<t;c++)for(let f=0;f+1<t;f++){const h=c*t+f;l[o++]=h,l[o++]=h+t,l[o++]=h+1,l[o++]=h+1,l[o++]=h+t,l[o++]=h+t+1}const u=new Nt;return u.setAttribute("position",new Ft(i,3)),u.setAttribute("normal",new Ft(s,3)),u.setAttribute("uv",new Ft(r,2)),u.setIndex(Array.from(l)),u}const hd={ground:"ground",building:"building",road:"road"},vc=1e9,fd=4,Jb=new et,Qb=new vi,e1=new z,t1=new z,n1={x:0,z:0};function dd(n){const e=new Nt;return e.setAttribute("position",new nt(n.pos,3)),e.setAttribute("normal",new nt(n.nrm,3)),e.setAttribute("color",new nt(n.col,3,!0)),e.setAttribute("ao",new nt(n.ao,1,!0)),n.fac0&&n.fac1&&(e.setAttribute("fac0",new nt(n.fac0,4)),e.setAttribute("fac1",new nt(n.fac1,4))),n.uv&&e.setAttribute("uv",new nt(n.uv,2)),n.blk&&e.setAttribute("aBlock",new nt(n.blk,1)),e.setIndex(new nt(n.idx,1)),e.computeBoundingSphere(),e.computeBoundingBox(),e}function pd(n){const e=new Nt;e.setAttribute("position",new nt(n.pos,3)),e.setAttribute("normal",new nt(n.nrm,3)),e.setAttribute("color",new nt(n.col,3,!0)),e.setAttribute("col2",new nt(n.col2,3,!0));const t=new Uint8Array(n.glow.length);for(let i=0;i<t.length;i++)t[i]=n.glow[i]*85;return e.setAttribute("glow",new nt(t,1,!0)),e.setAttribute("ao",new nt(n.ao,1,!0)),e.setIndex(new nt(n.idx,1)),e.computeBoundingSphere(),e}const th=new WeakSet;function Mc(n,e,t){if(th.has(n)){n.needsUpdate=!0;return}const i=n.itemSize,s=n.updateRanges;let r=e*i,a=t*i;for(let l=0;l<s.length;l++)r=Math.min(r,s[l].start),a=Math.max(a,s[l].start+s[l].count);n.clearUpdateRanges(),n.addUpdateRange(r,a-r),n.needsUpdate=!0}function fo(n){n.clearUpdateRanges(),th.add(n),n.needsUpdate=!0}function po(n){n.onUpload(()=>{n.clearUpdateRanges(),th.delete(n)})}function md(n){n.traverse(e=>{e.matrixAutoUpdate=!1,e.matrixWorldAutoUpdate=!1})}function i1(n,e){const t=n.index.array,i=n.getAttribute("normal").array,s=[],r=[],a=t.length/3;for(let f=0;f<a;f++){const h=t[f*3],d=new z(i[h*3],i[h*3+1],i[h*3+2]);let g=s.findIndex(v=>v.dot(d)>.999);g<0&&(g=s.length,s.push(d.clone().normalize()),r.push([])),r[g].push(t[f*3],t[f*3+1],t[f*3+2])}const l=new Uint32Array(t.length),o=[0];let u=0;for(const f of r)l.set(f,u),u+=f.length,o.push(u);const c=new Nt;for(const[f,h]of Object.entries(n.attributes))c.setAttribute(f,h);return c.setIndex(new nt(l,1)),c.computeBoundingSphere(),c.computeBoundingBox(),c.addGroup(0,l.length,0),e.push({mesh:null,ranges:o,dirs:s,box:c.boundingBox.clone(),shown:new Uint8Array(s.length),built:!1,lo:null}),c}class s1{constructor(e){this.g=e}at(e,t){const i=this.g,s=(e-i.e0)/i.step,r=(t-i.s0)/i.step;if(s<0||r<0||s>=i.nx||r>=i.ny)return 0;const a=Math.floor(s),l=Math.floor(r),o=s-a,u=r-l,c=i.nx+1,f=i.z[l*c+a],h=i.z[l*c+a+1],d=i.z[(l+1)*c+a],g=i.z[(l+1)*c+a+1];return(f*(1-o)+h*o)*(1-u)+(d*(1-o)+g*o)*u}}class r1{scene=new br;looks=new Map;ground;walker;jet;jetOwn;landmarkGroups={voxel:new mn,smooth:new mn,both:new mn};stats;cars=[];voxFaced=[];farFaced=[];farTris=[];farVersion=-1;farSeen=new Uint8Array(Ar()*Ar());farChanged=[];facingEye=new z;facingBack=new z;facingCorner=new z;actorCull=mi("actors");carLevels=new Map;walkerLow=null;walkerMaterial;walkerDissolve=null;waterPlane;waterGrid;frustum=new vs;sph=new kn;tmpM=new et;treeS1=null;lampMeshes=[];streamed;carMeshes=[];carSlot=new Map;carCount=new Int32Array(0);still=[];frozen=[];treeBlocks=[];crownNear=new Nt;crownFar=new Nt;tmpO=new nn;walkerPhase=0;walkerPath=null;walkerDist=0;walkerStart=new z;walkerHeading=0;gait=0;constructor(e,t={}){const i=performance.now();this.streamed=!!e.blocks;const s=new wn(e.groundTexture);s.flipY=!1,s.needsUpdate=!0,s.anisotropy=fd;const r=new Wy(s);this.looks.set("plain",r),this.looks.set("pixel",new Pb(s,e.waterMap));const a=E=>this.looks.get(re.look.mix[E]??"plain")??r,l=(E,P)=>a(E).material(P),o=(E,P)=>(E.traverse(R=>R.layers.set(Wn[P])),E),u={},c=(E,P)=>u[E]=(u[E]??0)+P;let f=0;for(const E of e.meshes){const P=E.layer,R=P==="far"?E.kind==="ground"?"farGround":"farBuilding":hd[E.kind]??"road",D=dd(E),C=new vt(D,E.ranges?[l(P,R)]:l(P,R));let I=null;if(E.ranges&&(D.addGroup(0,E.idx.length,0),I={mesh:C,ranges:E.ranges,box:D.boundingBox,shown:-1},this.farFaced.push(I)),P==="far"&&E.blk&&Ge.stream.farCompact&&(!E.ranges||E.ranges[0]===0&&E.ranges[E.ranges.length-1]===E.idx.length)){const U=E.idx.length/3,O=new Uint16Array(U),W=new Uint8Array(this.farSeen.length),k=Ar();for(let G=0;G<U;G++){const Z=Py(E.blk[E.idx[3*G]]),me=Z.by*k+Z.bx;O[G]=me,W[me]=1}this.farTris.push({mesh:C,idx0:E.idx.slice(),tri:O,has:W,faced:I,ranges0:E.ranges?E.ranges.slice():null})}C.name=E.name,C.receiveShadow=!0,C.castShadow=P==="near"&&E.kind==="building",this.scene.add(o(C,P)),this.still.push(C),c(P==="far"?"far":E.kind,E.idx.length/3),f++}const h=new vt(new Hs(re.water.halfSizeMetres*2,re.water.halfSizeMetres*2),l("near","water"));h.rotation.x=-Math.PI/2,h.position.y=re.water.levelMetres,h.receiveShadow=!0,h.name="water",this.scene.add(o(h,"near")),this.still.push(h),this.waterPlane=h;const d=new vt(Zb(),l("near","water"));d.receiveShadow=!0,d.name="water grid",d.visible=!1,this.scene.add(o(d,"near")),this.still.push(d),this.waterGrid=d,f++;for(const E of e.landmarks){const P=pd(E.mesh),R=mi("landmarkFacing")&&E.variant!=="smooth",D=new vt(R?i1(P,this.voxFaced):P,R?[l(E.layer,"voxel")]:l(E.layer,"voxel"));if(D.name=`${E.id} ${E.variant}`,D.castShadow=!R,D.receiveShadow=!0,R){this.voxFaced[this.voxFaced.length-1].mesh=D;const C=new vt(P,l(E.layer,"voxel"));C.name=`${E.id} ${E.variant} caster`,C.castShadow=!0,C.layers.set(Mu),this.landmarkGroups[E.variant].add(C)}this.landmarkGroups[E.variant].add(o(D,E.layer)),c(`landmarks ${E.variant}`,E.mesh.idx.length/3)}this.scene.add(this.landmarkGroups.voxel,this.landmarkGroups.smooth,this.landmarkGroups.both),this.still.push(this.landmarkGroups.voxel,this.landmarkGroups.smooth,this.landmarkGroups.both),this.setLandmarkVariant(re.look.landmarkVariant);const g=new Map,v=new Map;for(const E of e.actors)v.set(E.name,E.voxelMetres??0),g.set(E.name,pd(E.mesh)),c(`actor ${E.name} (each)`,E.mesh.idx.length/3);const p=re.actors.jet,m=Pp(l("actors","voxel"));this.jetOwn=_a(m),this.jet=new vt(g.get("jet"),m),this.jet.name="jet",this.jet.castShadow=!0,this.jet.position.set(p.x-re.origin.x,p.heightMetres,p.y-re.origin.y),this.jet.rotation.y=-p.heading,this.scene.add(o(this.jet,"actors"));for(const E of re.actors.ferries){const P=new vt(g.get("ferry"),l("actors","voxel"));P.name="ferry",P.castShadow=!0,P.receiveShadow=!0,P.position.set(E.x-re.origin.x,re.water.levelMetres,E.y-re.origin.y),P.rotation.y=-E.heading,this.scene.add(o(P,"actors"))}const y=re.actors.carModels.map(E=>`car${E}`),_=[];let w=0;for(const E of re.actors.carRoads){const P=e.carPaths.filter(R=>R.name===E).map(R=>({p:R,len:a1(R)})).sort((R,D)=>D.len-R.len).slice(0,re.actors.carsPerRoad);for(const{p:R}of P)_.push({p:R,model:w++%y.length})}y.forEach((E,P)=>{const R=_.filter(I=>I.model===P);if(!R.length)return;const D=new ei(g.get(E),l("actors","voxel"),R.length);D.name=`cars ${E}`,D.castShadow=!0,D.frustumCulled=!1,this.scene.add(o(D,"actors")),this.carMeshes.push(D);const C=[{im:D,voxel:v.get(E)??0}];for(let I=2;g.has(`${E} L${I}`);I++){const U=new ei(g.get(`${E} L${I}`),l("actors","voxel"),R.length);U.name=`cars ${E} L${I}`,U.castShadow=!0,U.frustumCulled=!1,U.count=0,this.scene.add(o(U,"actors")),this.carMeshes.push(U),C.push({im:U,voxel:v.get(`${E} L${I}`)??0})}C.length>1&&this.carLevels.set(D,C),R.forEach(({p:I},U)=>{const O=_c(I);this.cars.push({obj:D,slot:U,m:new et,pos:new z,path:I,cum:O,s:O[O.length-1]*re.actors.carStartShare})})}),this.carMeshes.forEach((E,P)=>this.carSlot.set(E,P)),this.carCount=new Int32Array(this.carMeshes.length),this.walkerMaterial=l("actors",t.gameWalker?"walker":"part");const S=a("actors");t.gameWalker&&S.makeWalkerDissolve&&(this.walkerDissolve=S.makeWalkerDissolve()),this.walker=new ua(this.walkerMaterial);const M=re.actors.walker;this.ground=new s1(e.groundGrid),this.walkerStart.set(M.x-re.origin.x,0,M.y-re.origin.y),this.walkerHeading=M.heading;let x=null;for(const E of e.carPaths){if(E.name!==M.street)continue;const P=_c(E);for(let R=0;R+1<E.pts.length/3;R++){const D=E.pts[R*3],C=E.pts[R*3+2],I=E.pts[R*3+3],U=E.pts[R*3+5],O=I-D,W=U-C,k=O*O+W*W||1,G=Math.max(0,Math.min(1,((this.walkerStart.x-D)*O+(this.walkerStart.z-C)*W)/k)),Z=Math.hypot(D+O*G-this.walkerStart.x,C+W*G-this.walkerStart.z);(!x||Z<x.d)&&(x={p:E,d:Z,s:P[R]+G*(P[R+1]-P[R])})}}if(x){const E=_c(x.p),P=new nn;Sc(P,x.p,E,Math.min(E[E.length-1],x.s+.5));const R=Math.cos(-P.rotation.y-M.heading)>0;this.walkerPath={p:x.p,cum:E,s0:x.s,dir:R?1:-1}}this.scene.add(o(this.walker.root,"actors")),c("walker",this.walker.triangles),this.actorCull&&re.opt.actors.walkerLowOn&&(this.walkerLow=Jw(this.walkerMaterial),this.walkerLow.root.name="walker low",this.walkerLow.root.visible=!1,this.scene.add(o(this.walkerLow.root,"actors")),c("walker low",this.walkerLow.triangles));const b={},A=Ge.stream;for(const E of e.instances)b[E.kind]=E.count,!(!E.count&&!this.streamed)&&(E.kind==="tree"&&mi("trees")&&re.look.mix.near==="pixel"?this.treesS1(E.data,E.count,this.streamed?Math.max(E.count,A.treeSlots):E.count,l("near","crown"),l("near","trunk"),o,c):E.kind==="tree"?E.count&&this.trees(E.data,E.count,l("near","crown"),l("near","trunk"),o,c):this.lamps(E.data,E.count,this.streamed?Math.max(E.count,A.lampSlots):E.count,l("near","lampPole"),l("near","lampHead"),l("near","lampPool"),o,c));if(this.lookFor=a,this.stats={meshes:f,triangles:u,instances:b,uploadMs:performance.now()-i},this.update(0),Ge.frameWork.freezeStatic){this.scene.updateMatrixWorld();for(const E of this.still)md(E);this.frozen=this.still}}get stillObjects(){return this.frozen}get frameWorkActs(){return{treeSlots:!!this.treeS1&&this.treeS1.nearCrowns.count>0,facingCache:this.farFaced.length+this.voxFaced.length>0}}setLandmarkVariant(e){this.landmarkGroups.voxel.visible=e==="voxel",this.landmarkGroups.smooth.visible=e==="smooth"}trees(e,t,i,s,r,a){const l=re.props,o=(_,w,S,M)=>{const x=new Oo(1,l.treeDetail);x.deleteAttribute("normal"),x.deleteAttribute("uv");const b=Zf(x);return b.computeVertexNormals(),b.scale(M,M,M),b.translate(_,w,S),b};this.crownNear=Eu(l.treeLobes.map(([_,w,S,M])=>o(_,w,S,M))),this.crownFar=o(0,0,0,1);const u=new aa(l.treeTrunkRadiusMetres*l.trunkTaper,l.treeTrunkRadiusMetres,1,l.trunkSegments,1,!0);u.translate(0,.5,0);const c=re.blockChunks*320,f=new Map;for(let _=0;_<t;_++){const w=_*fr,S=`${Math.floor((e[w]+re.origin.x)/c)},${Math.floor((e[w+2]+re.origin.y)/c)}`;let M=f.get(S);M||f.set(S,M=[]),M.push(_)}const h=new et,d=new vi,g=new z,v=new z,p=new Ke,m=new z(0,1,0);for(const[_,w]of f){const S=new ei(this.crownNear,i,w.length),M=new ei(u,s,w.length);w.forEach((x,b)=>{const A=x*fr,E=e[A+3],P=e[A+4],R=e[A+5],D=e[A+6],C=P*l.treeTrunkShare,I=E/2,U=Math.max(I*l.crownMinHeightShare,(P-C)/2);d.setFromAxisAngle(m,R),h.compose(g.set(e[A],e[A+1]+C+U*l.crownSeat,e[A+2]),d,v.set(I,U,I)),S.setMatrixAt(b,h),S.setColorAt(b,p.setHex(l.treeColours[Math.floor(D*l.treeColours.length)%l.treeColours.length])),h.compose(g.set(e[A],e[A+1],e[A+2]),d,v.set(1,C+U*l.trunkIntoCrown,1)),M.setMatrixAt(b,h)});for(const x of[S,M])x.castShadow=!0,x.receiveShadow=!0,x.computeBoundingSphere(),this.scene.add(r(x,"near")),this.still.push(x);S.name=`tree crowns ${_}`,M.name=`tree trunks ${_}`,this.treeBlocks.push(S)}const y=_=>(_.index?_.index.count:_.getAttribute("position").count)/3;a("trees (near crowns)",t*(y(this.crownNear)+y(u)))}treesS1(e,t,i,s,r,a,l){const o=re.props,u=(V,B,te,ee)=>{const ce=new Oo(1,o.treeDetail);ce.deleteAttribute("normal"),ce.deleteAttribute("uv");const Ce=Zf(ce);return Ce.computeVertexNormals(),Ce.scale(ee,ee,ee),Ce.translate(V,B,te),Ce};this.crownNear=Eu(o.treeLobes.map(([V,B,te,ee])=>u(V,B,te,ee)));const c=new aa(o.treeTrunkRadiusMetres*o.trunkTaper,o.treeTrunkRadiusMetres,1,o.trunkSegments,1,!0);c.translate(0,.5,0);const f=new Float32Array(i*16),h=new Float32Array(i*16),d=new Float32Array(i*3),g=new Float32Array(i*3),v=new Float32Array(i),p=new Float32Array(i*4),m=new Float32Array(i*4),y=new Float32Array(i*4),_=new et,w=new vi,S=new z,M=new z,x=new Ke,b=new z(0,1,0),A=Math.max(...o.treeLobes.map(([V,,B,te])=>Math.hypot(V,B)+te)),E=Math.max(...o.treeLobes.map(([,V,,B])=>V+B)),P=(V,B,te)=>{const ee=B[te+3],ce=B[te+4],Ce=B[te+5],oe=B[te+6],ye=ce*o.treeTrunkShare,pe=ee/2,ne=Math.max(pe*o.crownMinHeightShare,(ce-ye)/2),Ie=ye+ne*o.crownSeat,De=ye+ne*o.trunkIntoCrown;w.setFromAxisAngle(b,Ce),_.compose(S.set(B[te],B[te+1]+Ie,B[te+2]),w,M.set(pe,ne,pe)),_.toArray(f,V*16),_.compose(S.set(B[te],B[te+1],B[te+2]),w,M.set(1,De,1)),_.toArray(h,V*16),x.setHex(o.treeColours[Math.floor(oe*o.treeColours.length)%o.treeColours.length]),d.set([x.r,x.g,x.b],V*3);const Me=Ie+ne*E,We=pe*A+o.treeTrunkRadiusMetres,Ve=Me/2,Y=Math.hypot(Me/2,We);g.set([B[te],B[te+1]+Ve,B[te+2]],V*3),v[V]=Y,p.set([B[te],B[te+1],B[te+2],Ce],V*4),m.set([pe,ne,Ie,De],V*4),y.set([Ve,Y,0,0],V*4)},R=V=>{g.set([vc,vc,vc],V*3),v[V]=0,y.set([0,0,0,0],V*4)};for(let V=0;V<t;V++)P(V,e,V*fr);for(let V=t;V<i;V++)R(V);const D=(V,B,te,ee)=>{const ce=new ei(V,B,Math.max(1,ee));return ce.count=0,ce.frustumCulled=!1,ce.name=te,ce.setColorAt(0,x.setRGB(1,1,1)),ce},C=D(this.crownNear,s,"tree crowns near",i),I=D(c,r,"tree trunks near",i);po(C.instanceMatrix),po(C.instanceColor),po(I.instanceMatrix),po(I.instanceColor);const U=Math.max(1,re.opt.shadow.spreadOn?re.opt.shadow.buildFrames:1),O=Math.ceil(i/U)+1,W=[],k=[];for(let V=0;V<U;V++){const B=new ei(this.crownNear,s,O),te=new ei(c,r,O);B.name="tree crowns casters",te.name="tree trunks casters";for(const ee of[B,te])ee.count=0,ee.frustumCulled=!1,ee.setColorAt(0,x.setRGB(1,1,1)),ee.castShadow=!0,ee.receiveShadow=!1,ee.visible=!1,ee.userData.buildGroup=V,ee.layers.set(Mu),this.scene.add(ee);W.push(B),k.push(te)}for(const V of[C,I])V.castShadow=!1,V.receiveShadow=!0,this.scene.add(a(V,"near"));const G=new nl;G.setAttribute("position",new Ft([-1,-1,0,1,-1,0,1,1,0,-1,1,0],3)),G.setAttribute("normal",new Ft([0,0,1,0,0,1,0,0,1,0,0,1],3)),G.setIndex([0,1,2,0,2,3]);const Z=[new Us(p,4),new Us(m,4),new Us(y,4),new Us(d,3)];G.setAttribute("iBase",Z[0]),G.setAttribute("iShape",Z[1]),G.setAttribute("iSphere",Z[2]),G.setAttribute("iColour",Z[3]),G.instanceCount=t;const me=this.looks.get("pixel"),le=c.getAttribute("position").array,q=c.getAttribute("normal").array,$=me.treeImpostorMaterial({crownPos:this.crownNear.getAttribute("position").array,crownIdx:this.crownNear.index.array,lobeCentres:o.treeLobes.map(([V,B,te])=>[V,B,te]),trunkPos:le,trunkNrm:q,trunkSegments:o.trunkSegments}),K=new vt(G,$);K.name="tree impostors",K.frustumCulled=!1,K.castShadow=!1,K.receiveShadow=!0,this.scene.add(a(K,"near")),Ao.uMeshMetres.value=re.opt.trees.meshMetres,Ao.uOverlap.value=re.opt.trees.overlapMetres,this.treeS1={n:t,crownM:f,trunkM:h,colour:d,centre:g,radius:v,nearCrowns:C,nearTrunks:I,castCrowns:W,castTrunks:k,impostor:K,nearSlot:new Int32Array(i).fill(-1),fill:P,clear:R,attrs:Z},this.still.push(C,I,...W,...k,K);const j=V=>(V.index?V.index.count:V.getAttribute("position").count)/3;l("trees (mesh, each)",j(this.crownNear)+j(c)),l("trees (impostor, each)",2)}treeInto(e,t,i,s){const r=this.treeS1,a=e.instanceMatrix.array,l=t.instanceMatrix.array,o=e.instanceColor.array,u=i*16,c=s*16;for(let f=0;f<16;f++)a[c+f]=r.crownM[u+f],l[c+f]=r.trunkM[u+f];o[s*3]=r.colour[i*3],o[s*3+1]=r.colour[i*3+1],o[s*3+2]=r.colour[i*3+2]}treeCasters(e){const t=this.treeS1;if(!t)return;const i=new z,s=t.castCrowns.length,r=new Array(s).fill(0);let a=0;for(let l=0;l<t.n;l++){if(i.fromArray(t.centre,l*3),!e(i,t.radius[l]))continue;const o=a++%s;this.treeInto(t.castCrowns[o],t.castTrunks[o],l,r[o]++)}for(let l=0;l<s;l++)for(const o of[t.castCrowns[l],t.castTrunks[l]])o.count=r[l],o.visible=r[l]>0,o.instanceMatrix.needsUpdate=!0,o.instanceColor&&(o.instanceColor.needsUpdate=!0)}farResidency(){if(!this.farTris.length)return;const e=Iy();if(e===this.farVersion)return;this.farVersion=e;const t=Fy(),i=this.farSeen,s=this.farChanged;s.length=0;for(let r=0;r<t.length;r++){const a=t[r]!==0?1:0;a!==i[r]&&(i[r]=a,s.push(r))}if(s.length)for(const r of this.farTris){let a=!1;for(let v=0;v<s.length&&!a;v++)a=r.has[s[v]]===1;if(!a)continue;const l=r.mesh.geometry,o=l.index,u=o.array,c=r.idx0,f=r.tri;let h=0;const d=v=>{if(i[f[v]])return;const p=3*v;u[h]=c[p],u[h+1]=c[p+1],u[h+2]=c[p+2],h+=3};if(r.ranges0&&r.faced){const v=r.ranges0,p=[0];for(let m=0;m+1<v.length;m++){for(let y=v[m];y<v[m+1];y+=3)d(y/3);p.push(h)}r.faced.ranges=p,r.faced.shown=-1}else{for(let v=0;v<f.length;v++)d(v);l.setDrawRange(0,h)}let g=0;for(const v of o.updateRanges)g=Math.max(g,v.start+v.count);o.clearUpdateRanges(),Math.max(g,h)>0&&o.addUpdateRange(0,Math.max(g,h)),o.needsUpdate=!0}}farFacings(e){if(this.farResidency(),this.voxFacings(e),!this.farFaced.length)return;const t=Ge.frameWork.facingCache,i=e.isOrthographicCamera===!0;e.updateMatrixWorld();const s=e.matrixWorld.elements,r=s[12],a=s[14],l=-s[8],o=-s[10],u=1;for(const c of this.farFaced){const f=c.box,h=i?(o>-1e-4?1:0)|(l<1e-4?2:0)|(o<1e-4?4:0)|(l>-1e-4?8:0):(a<f.max.z+u?1:0)|(r>f.min.x-u?2:0)|(a>f.min.z-u?4:0)|(r<f.max.x+u?8:0);if(t&&h===c.shown)continue;c.shown=h;const d=c.mesh.geometry;d.clearGroups();const g=c.ranges;let v=g[0],p=g[1];for(let m=0;m<4;m++)h&1<<m&&(g[m+1]===p||(p>v&&d.addGroup(v,p-v,0),v=g[m+1]),p=g[m+2]);p>v&&d.addGroup(v,p-v,0)}}voxFacings(e){if(!this.voxFaced.length)return;const t=Ge.frameWork.facingCache,i=e.isOrthographicCamera===!0;e.updateMatrixWorld();const s=e.matrixWorld.elements,r=this.facingEye.set(s[12],s[13],s[14]),a=this.facingBack.set(s[8],s[9],s[10]),l=this.facingCorner;for(const o of this.voxFaced){if(!o.lo){o.lo=new Float64Array(o.dirs.length);for(let d=0;d<o.dirs.length;d++){const g=o.dirs[d];let v=1/0;for(let p=0;p<8;p++)l.set(p&1?o.box.max.x:o.box.min.x,p&2?o.box.max.y:o.box.min.y,p&4?o.box.max.z:o.box.min.z),v=Math.min(v,g.dot(l));o.lo[d]=v}}let u=!o.built||!t;for(let d=0;d<o.dirs.length;d++){const g=o.dirs[d],v=(i?g.dot(a)>-.001:g.dot(r)>o.lo[d]-1)?1:0;o.shown[d]!==v&&(o.shown[d]=v,u=!0)}if(!u)continue;o.built=!0;const c=o.mesh.geometry;c.clearGroups();let f=-1,h=-1;for(let d=0;d<o.dirs.length;d++)!o.shown[d]||o.ranges[d+1]===o.ranges[d]||(o.ranges[d]===h||(h>f&&c.addGroup(f,h-f,0),f=o.ranges[d]),h=o.ranges[d+1]);h>f&&c.addGroup(f,h-f,0)}}setWaterGrid(e,t){if(this.waterGrid.visible=e,this.waterPlane.visible=!e,!e||!t)return;const i=Yb(t,n1),s=this.waterGrid;s.position.x===i.x&&s.position.z===i.z||(s.position.set(i.x,0,i.z),s.updateMatrix(),s.matrixWorld.copy(s.matrix))}cullActors(e,t,i,s,r=null){if(!this.actorCull)return;e.updateMatrixWorld(),this.frustum.setFromProjectionMatrix(this.tmpM.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse));const a=this.carCount;a.fill(0);for(const o of this.cars){const u=re.opt.actors.cullMarginMetres+2*t(o.pos);if(this.sph.center.copy(o.pos),this.sph.radius=u,!(r&&r.on?r.intersectsSphere(o.pos.x,o.pos.y,o.pos.z,u):this.frustum.intersectsSphere(this.sph))&&!(i&&i(o.pos,u)))continue;let f=o.obj;const h=this.carLevels.get(o.obj);if(h&&mi("carLevels")){const g=re.opt.carLevels.maxErrorPx*t(o.pos);for(const v of h)v.voxel<=g&&(f=v.im)}const d=this.carSlot.get(f);f.setMatrixAt(a[d],o.m),a[d]++}for(let o=0;o<this.carMeshes.length;o++){const u=this.carMeshes[o];u.count=a[o],u.visible=u.count>0,u.instanceMatrix.needsUpdate=!0}const l=this.walkerLow;if(l){const o=this.walker.root,u=1.8/Math.max(1e-6,t(o.position)),c=!s&&u<re.opt.actors.walkerLowPx;l.root.visible=c,o.visible=!c,c&&(l.root.position.copy(o.position),l.root.rotation.copy(o.rotation))}}treeLod(e){const t=this.treeS1;if(t){Ao.uLodEye.value.copy(e);const i=re.opt.trees.meshMetres,s=i*i,r=t.nearSlot;if(!Ge.frameWork.treeSlots){let u=0;for(let c=0;c<t.n;c++){const f=t.centre[c*3]-e.x,h=t.centre[c*3+1]-e.y,d=t.centre[c*3+2]-e.z;f*f+h*h+d*d>s||(r[u]=c,this.treeInto(t.nearCrowns,t.nearTrunks,c,u++))}fo(t.nearCrowns.instanceMatrix),fo(t.nearCrowns.instanceColor),fo(t.nearTrunks.instanceMatrix),fo(t.nearTrunks.instanceColor),t.nearCrowns.count=u,t.nearCrowns.visible=u>0,t.nearTrunks.count=u,t.nearTrunks.visible=u>0;return}let a=0,l=-1,o=-1;for(let u=0;u<t.n;u++){const c=t.centre[u*3]-e.x,f=t.centre[u*3+1]-e.y,h=t.centre[u*3+2]-e.z;c*c+f*f+h*h>s||(r[a]!==u&&(r[a]=u,this.treeInto(t.nearCrowns,t.nearTrunks,u,a),l<0&&(l=a),o=a+1),a++)}l>=0&&(Mc(t.nearCrowns.instanceMatrix,l,o),Mc(t.nearTrunks.instanceMatrix,l,o),Mc(t.nearCrowns.instanceColor,l,o)),t.nearCrowns.count=a,t.nearCrowns.visible=a>0,t.nearTrunks.count=a,t.nearTrunks.visible=a>0;return}for(const i of this.treeBlocks){const s=i.boundingSphere,a=(s?Math.max(0,s.center.distanceTo(e)-s.radius):0)>re.props.treeLodMetres;i.geometry=a?this.crownFar:this.crownNear,i.castShadow=!a}}lamps(e,t,i,s,r,a,l,o){const u=re.props,c=new aa(u.lampRadiusMetres,u.lampRadiusMetres*u.lampPoleTaper,1,6);c.translate(0,.5,0);const f=new Hu(.5,u.lampHeadDetail),h=new Hs(1,1);h.rotateX(-Math.PI/2);const d=Math.max(1,i),g=new ei(c,s,d),v=new ei(f,r,d),p=new ei(h,a,d);this.lampMeshes=[g,v,p];for(let m=0;m<t;m++)this.lampInto(m,e,m*fr);for(const m of[g,v,p])m.count=t,this.streamed?m.frustumCulled=!1:m.computeBoundingSphere(),this.scene.add(l(m,"near")),this.still.push(m);g.castShadow=!0,g.name="lamp poles",v.name="lamp heads",p.name="lamp pools",o("lamps",t*(c.index.count/3+f.getAttribute("position").count/3+2))}lampInto(e,t,i){const s=re.props,[r,a,l]=this.lampMeshes,o=Jb,u=Qb,c=e1,f=t1;if(!t){o.makeScale(0,0,0),r.setMatrixAt(e,o),a.setMatrixAt(e,o),l.setMatrixAt(e,o);return}const h=t[i+4],d=t[i+3];o.compose(c.set(t[i],t[i+1],t[i+2]),u,f.set(1,h,1)),r.setMatrixAt(e,o),o.compose(c.set(t[i],t[i+1]+h,t[i+2]),u,f.set(d,d*s.lampHeadSquash,d)),a.setMatrixAt(e,o),o.compose(c.set(t[i],t[i+1]+s.lampPoolLiftMetres,t[i+2]),u,f.set(s.lampPoolMetres*2,1,s.lampPoolMetres*2)),l.setMatrixAt(e,o)}lookFor=()=>this.looks.get("plain");blockGroup(e,t,i){const s=new mn;s.name=e;let r=null,a=null;for(const l of t){let o;if(l.kind==="ground"){r=new wn(i),r.flipY=!1,r.anisotropy=fd,r.colorSpace=Sn,r.needsUpdate=!0;const c=this.lookFor("near");a=c.groundMaterial?c.groundMaterial(r):c.material("ground"),o=a}else o=this.lookFor("near").material(hd[l.kind]??"road");const u=new vt(dd(l),o);u.name=l.name,u.receiveShadow=!0,u.castShadow=l.kind==="building",u.layers.set(Wn.near),s.add(u)}return s.layers.set(Wn.near),s.updateMatrixWorld(!0),Ge.frameWork.freezeStatic&&md(s),{group:s,texture:r,material:a}}treeWrite(e,t,i,s){const r=this.treeS1;if(!(!r||i<=0)){for(let a=0;a<i;a++)r.fill(e+a,t,a*fr);this.treeSlotsChanged(e,i,s)}}treeFree(e,t,i){const s=this.treeS1;if(!(!s||t<=0)){for(let r=0;r<t;r++)s.clear(e+r);this.treeSlotsChanged(e,t,i)}}treeSlotsChanged(e,t,i){const s=this.treeS1;for(const r of s.attrs)r.addUpdateRange(e*r.itemSize,t*r.itemSize),r.needsUpdate=!0;for(let r=0;r<s.nearSlot.length;r++)s.nearSlot[r]>=e&&s.nearSlot[r]<e+t&&(s.nearSlot[r]=-1);s.n=i,s.impostor.geometry.instanceCount=i}lampWrite(e,t,i,s){if(!(!this.lampMeshes.length||i<=0)){for(let r=0;r<i;r++)this.lampInto(e+r,t,r*fr);this.lampSlotsChanged(e,i,s)}}lampFree(e,t,i){if(!(!this.lampMeshes.length||t<=0)){for(let s=0;s<t;s++)this.lampInto(e+s,null,0);this.lampSlotsChanged(e,t,i)}}lampSlotsChanged(e,t,i){for(const s of this.lampMeshes)s.instanceMatrix.addUpdateRange(e*16,t*16),s.instanceMatrix.needsUpdate=!0,s.count=i}update(e){for(const o of this.cars){const u=o.cum[o.cum.length-1],c=(o.s+e*re.actors.carSpeedMps)%u;Sc(this.tmpO,o.path,o.cum,c),this.tmpO.updateMatrix(),o.m.copy(this.tmpO.matrix),o.pos.copy(this.tmpO.position),this.actorCull||o.obj.setMatrixAt(o.slot,this.tmpO.matrix)}if(!this.actorCull)for(const o of this.carMeshes)o.instanceMatrix.needsUpdate=!0;const t=this.gait>re.actors.runFromGait?re.actors.runSpeedMps:re.actors.walkSpeedMps,i=this.walkerPath,s=i?i.dir>0?i.cum[i.cum.length-1]-i.s0:i.s0:re.actors.walkLoopMetres;this.walkerDist=e*t%Math.max(1,Math.min(re.actors.walkLoopMetres,s)),this.walkerPhase=this.walkerDist/ua.strideMetres(this.gait)%1;let r,a;if(i)Sc(this.tmpO,i.p,i.cum,i.s0+i.dir*this.walkerDist),r=this.tmpO.position.x,a=this.tmpO.position.z,this.walkerHeading=-this.tmpO.rotation.y+(i.dir>0?0:Math.PI);else{const o=Math.sin(this.walkerHeading),u=-Math.cos(this.walkerHeading);r=this.walkerStart.x+o*this.walkerDist,a=this.walkerStart.z+u*this.walkerDist}this.walker.root.position.set(r,this.ground.at(r,a)+re.actors.walkerLiftMetres,a),this.walker.root.rotation.y=-this.walkerHeading;const l=ua.cycle(this.walkerPhase,this.gait);this.walker.pose(l),this.walkerLow?.pose(l)}}function a1(n){let e=0;for(let t=3;t<n.pts.length;t+=3)e+=Math.hypot(n.pts[t]-n.pts[t-3],n.pts[t+2]-n.pts[t-1]);return e}function _c(n){const e=n.pts.length/3,t=new Float32Array(e);for(let i=1;i<e;i++)t[i]=t[i-1]+Math.hypot(n.pts[i*3]-n.pts[i*3-3],n.pts[i*3+2]-n.pts[i*3-1]);return t}function Sc(n,e,t,i){let s=1;for(;s<t.length-1&&t[s]<i;)s++;const r=s-1,a=(i-t[r])/Math.max(1e-6,t[s]-t[r]),l=e.pts,o=l[r*3]+(l[s*3]-l[r*3])*a,u=l[r*3+1]+(l[s*3+1]-l[r*3+1])*a,c=l[r*3+2]+(l[s*3+2]-l[r*3+2])*a;n.position.set(o,u,c);const f=l[s*3]-l[r*3],h=l[s*3+2]-l[r*3+2];n.rotation.y=Math.atan2(-f,-h)}function Xo(){return Ge.stream.caps[re.smooth.on?"smoothB":"lite"]}function ba(n,e,t,i){const s=Sa(),r=Math.max(t*s-n,0,n-(t+1)*s),a=Math.max(i*s-e,0,e-(i+1)*s);return Math.hypot(r,a)}function o1(n){const e=Ge.stream;let t=n.ve*e.prefetchLeadSec,i=n.vs*e.prefetchLeadSec;const s=Math.hypot(t,i);return s>e.leadMaxMetres&&(t*=e.leadMaxMetres/s,i*=e.leadMaxMetres/s),{e:n.e+t,s:n.s+i}}function l1(n){const e=Ge.stream;return n.ground||n.aglMetres<=e.flyAglMetres&&Math.hypot(n.ve,n.vs)<=e.hoverSpeedMps}function c1(n){const e=Ge.stream,t=Ar(),i=Sa(),s=new Set,r=[],a=n.landing??{e:n.e,s:n.s},l=Math.hypot(n.ve,n.vs),o=(f,h)=>{if(f<0||h<0||f>=t||h>=t||s.has(h*t+f))return;s.add(h*t+f);const d=ba(a.e,a.s,f,h);let g=0;if(l>0&&!n.landing){const v=(f+.5)*i-a.e,p=(h+.5)*i-a.s,m=Math.hypot(v,p)||1;g=(v*n.ve+p*n.vs)/(m*l)}r.push({bx:f,by:h,rank:Math.max(0,d-g*e.aheadTieMetres)})},u=(f,h)=>{const d=Op(f,h);for(let g=-e.ring;g<=e.ring;g++)for(let v=-e.ring;v<=e.ring;v++)o(d.bx+v,d.by+g)};let c;if(n.landing)c="landing",u(n.landing.e,n.landing.s);else if(l1(n)&&Number.isFinite(n.e)&&Number.isFinite(n.s)){c="street",u(n.e,n.s);const f=o1(n);u(f.e,f.s)}else{c="flight";const f=kp();for(let h=f.by0;h<=f.by1;h++)for(let d=f.bx0;d<=f.bx1;d++)o(d,h)}return r.sort((f,h)=>f.rank-h.rank||f.by-h.by||f.bx-h.bx),{anchor:a,blocks:r.slice(0,Xo().maxBlocks),rule:c}}class gd{constructor(e){this.capacity=e,this.free=e>0?[{start:0,count:e}]:[]}free;take(e){if(e<=0)return{start:0,count:0};for(let t=0;t<this.free.length;t++){const i=this.free[t];if(i.count<e)continue;const s={start:i.start,count:e};return i.count===e?this.free.splice(t,1):this.free[t]={start:i.start+e,count:i.count-e},s}return null}give(e){if(e.count<=0)return;let t=0;for(;t<this.free.length&&this.free[t].start<e.start;)t++;this.free.splice(t,0,{start:e.start,count:e.count}),t+1<this.free.length&&this.free[t].start+this.free[t].count===this.free[t+1].start&&(this.free[t].count+=this.free[t+1].count,this.free.splice(t+1,1)),t>0&&this.free[t-1].start+this.free[t-1].count===this.free[t].start&&(this.free[t-1].count+=this.free[t].count,this.free.splice(t,1))}get highWater(){const e=this.free[this.free.length-1];return e?e.start+e.count===this.capacity?e.start:this.capacity:this.capacity}get used(){return this.capacity-this.free.reduce((e,t)=>e+t.count,0)}}function u1(n,e,t,i){const s=typeof i=="number"?()=>i:i,r=Xo(),a=(d,g)=>Qn(d,g),l=new Set(e.map(d=>a(d.bx,d.by)));let o=r.maxBlocks-e.length,u=r.maxNearBytes-e.reduce((d,g)=>d+g.bytes,0);const c=e.map(d=>({r:d,d:ba(n.anchor.e,n.anchor.s,d.bx,d.by)})).sort((d,g)=>g.d-d.d);let f=0;const h=[];e:for(const d of n.blocks){const g=a(d.bx,d.by);if(l.has(g))continue;const v=s(d.bx,d.by),p=ba(n.anchor.e,n.anchor.s,d.bx,d.by);for(;o<=0||u<v;){const m=c[f];if(!m||m.d<=p)break e;f++,o++,u+=m.r.bytes}o--,u-=v,h.push(d)}return h}class h1{constructor(e){this.o=e;const t=new Nt;t.setDrawRange(0,0),this.uploader=new vt(t,e.uploadMaterial),this.uploader.name="stream upload",this.uploader.frustumCulled=!1,this.uploader.castShadow=!1,this.uploader.receiveShadow=!1,this.uploader.visible=!1,this.uploader.layers.set(Wn.near),e.scene.scene.add(this.uploader),e.channel.onBlock=o=>this.arrived(o),e.channel.onBlockError=o=>{this.asked.delete(Qn(o.bx,o.by)),this.stats.failed++},Uy();const i=Xo(),s=Sa(),r=o=>Math.hypot((o.bx+.5)*s-re.origin.x,(o.by+.5)*s-re.origin.y);let a=0,l=0;for(const o of[...e.initial].sort((u,c)=>r(u)-r(c))){if(a+1>i.maxBlocks||l+o.gpuBytes>i.maxNearBytes){o.groundTexture?.close();continue}a++,l+=o.gpuBytes,this.join(o,e.scene.blockGroup(`block ${o.bx},${o.by}`,o.meshes,o.groundTexture),[])}this.bytesGuess=this.resident.size?this.bytesTotal/this.resident.size:i.maxNearBytes/i.maxBlocks}resident=new Map;asked=new Set;arrivals=[];trees=new gd(Ge.stream.treeSlots);lamps=new gd(Ge.stream.lampSlots);uploader;plan=null;wantedIds=new Set;planBlock=-1;planLanding="";planAt=-1/0;bytesTotal=0;bytesGuess;knownBytes=new Map;stats={resident:0,residentBytes:0,asked:0,arrivals:0,joined:0,evicted:0,dropped:0,failed:0,forced:0,treesDropped:0,lampsDropped:0,rule:"start"};tmp=new z;get idle(){return this.asked.size===0&&this.arrivals.length===0}get queued(){return this.arrivals.length}update(e,t,i){if(e){const r=e.x*t,a=e.y*t,l=Op(r,a),o=Qn(l.bx,l.by),u=e.landing?`${Math.round(e.landing.x)},${Math.round(e.landing.y)}`:"";(o!==this.planBlock||u!==this.planLanding||i-this.planAt>=Ge.stream.scheduleSec)&&(this.planBlock=o,this.planLanding=u,this.planAt=i,this.replan({e:r,s:a,aglMetres:e.aglMetres,ve:e.vx*t,vs:e.vy*t,ground:!!e.ground,landing:e.landing?{e:e.landing.x*t,s:e.landing.y*t}:null}))}const s=this.arrivals[0];s&&++s.waited>Ge.stream.forceAfterFrames&&(this.stats.forced++,this.step())}replan(e){const t=c1(e);this.plan=t,this.stats.rule=t.rule,this.wantedIds=new Set(t.blocks.map(o=>Qn(o.bx,o.by)));const i=[...this.resident.values()],s=new Set(this.arrivals.map(o=>Qn(o.data.bx,o.data.by))),r=u1(t,i,this.asked,(o,u)=>this.knownBytes.get(Qn(o,u))??this.bytesGuess).filter(o=>!s.has(Qn(o.bx,o.by))),a=r.map(o=>Qn(o.bx,o.by));if(!(a.length===this.asked.size&&a.every(o=>this.asked.has(o)))){this.asked.clear();for(const o of a)this.asked.add(o);this.stats.asked=this.asked.size,this.o.channel.want(r)}}arrived(e){const t=Qn(e.bx,e.by);this.asked.delete(t),this.stats.asked=this.asked.size,this.knownBytes.set(t,e.gpuBytes);const i=this.arrivals.some(s=>s.data.bx===e.bx&&s.data.by===e.by);if(this.resident.has(t)||i||this.plan&&!this.wantedIds.has(t)){e.groundTexture?.close(),this.stats.dropped++;return}this.stats.arrivals++,this.arrivals.push({data:e,stage:"make",made:null,steps:[],waited:0})}step(){const e=this.arrivals[0];if(!e)return!1;e.waited=0;const t=Qn(e.data.bx,e.data.by);if(e.stage==="make")return this.plan&&!this.wantedIds.has(t)?this.drop(e):this.resident.has(t)||!this.roomFor(e.data)?this.drop(e):(e.made=this.o.scene.blockGroup(`block ${e.data.bx},${e.data.by}`,e.data.meshes,e.data.groundTexture),e.steps=this.uploadSteps(e.made.group),e.stage=e.steps.length?"upload":"texture",!0);if(e.stage==="upload"){const s=e.steps.shift(),r=this.uploader.geometry;for(const a of Object.keys(r.attributes))r.deleteAttribute(a);for(const[a,l]of s.attrs)r.setAttribute(a,l);return r.setIndex(s.index),r.setDrawRange(0,0),this.uploader.visible=!0,e.steps.length||(e.stage="texture"),!0}if(this.uploader.visible=!1,e.stage==="texture")return e.made.texture&&this.o.three.initTexture(e.made.texture),e.stage="join",!0;if(this.plan&&!this.wantedIds.has(t)||this.resident.has(t))return this.drop(e);const i=this.roomFor(e.data);return i?(this.arrivals.shift(),this.join(e.data,e.made,i),this.releaseUploader(),!0):this.drop(e)}releaseUploader(){this.uploader.visible=!1;const e=this.uploader.geometry;for(const t of Object.keys(e.attributes))e.deleteAttribute(t);e.setIndex(null)}drop(e){return this.arrivals.shift(),this.releaseUploader(),e.made?this.disposeGroup(e.made.group,e.made.texture,e.made.material):e.data.groundTexture?.close(),this.stats.dropped++,!0}uploadSteps(e){const t=Ge.stream.uploadBytesPerFrame,i=[];for(const s of e.children){const r=s.geometry;let a={attrs:[],index:null},l=0;const o=()=>{(a.attrs.length||a.index)&&i.push(a),a={attrs:[],index:null},l=0};for(const[u,c]of Object.entries(r.attributes)){const f=c.array.byteLength;l&&l+f>t&&o(),a.attrs.push([u,c]),l+=f}r.index&&(l&&l+r.index.array.byteLength>t&&o(),a.index=r.index),o()}return i}roomFor(e){const t=Xo(),i=this.plan?.anchor,s=i?ba(i.e,i.s,e.bx,e.by):0,r=[];let a=this.resident.size+1,l=this.bytesTotal+e.gpuBytes;const o=[...this.resident.values()].map(u=>({r:u,d:i?ba(i.e,i.s,u.bx,u.by):0})).sort((u,c)=>c.d-u.d);for(const u of o){if(a<=t.maxBlocks&&l<=t.maxNearBytes)break;if(u.d<=s)return null;r.push(u.r),a--,l-=u.r.bytes}return a<=t.maxBlocks&&l<=t.maxNearBytes?r:null}join(e,t,i){const s=this.o.scene;for(const o of i)this.evict(o);s.scene.add(t.group),Hf(e.bx,e.by,!0);const r=this.trees.take(e.trees.count);r?s.treeWrite(r.start,e.trees.data,r.count,this.trees.highWater):this.stats.treesDropped+=e.trees.count;const a=this.lamps.take(e.lamps.count);a?s.lampWrite(a.start,e.lamps.data,a.count,this.lamps.highWater):this.stats.lampsDropped+=e.lamps.count;const l={bx:e.bx,by:e.by,group:t.group,texture:t.texture,material:t.material,bytes:e.gpuBytes,trees:r,lamps:a};this.resident.set(Qn(e.bx,e.by),l),this.bytesTotal+=e.gpuBytes,this.stats.joined++,this.counts(),this.shadowsFor(e.bx,e.by)}evict(e){const t=this.o.scene;t.scene.remove(e.group),Hf(e.bx,e.by,!1),e.trees&&(this.trees.give(e.trees),t.treeFree(e.trees.start,e.trees.count,this.trees.highWater)),e.lamps&&(this.lamps.give(e.lamps),t.lampFree(e.lamps.start,e.lamps.count,this.lamps.highWater)),this.disposeGroup(e.group,e.texture,e.material),this.resident.delete(Qn(e.bx,e.by)),this.bytesTotal-=e.bytes,this.stats.evicted++,this.counts(),this.o.shadows.invalidateCasters(),this.shadowsFor(e.bx,e.by)}shadowsFor(e,t){const i=Sa();this.tmp.set((e+.5)*i-re.origin.x,0,(t+.5)*i-re.origin.y),this.o.shadows.inCachedBox(this.tmp,i*Math.SQRT2/2)&&this.o.shadows.requestRebuild()}disposeGroup(e,t,i){for(const s of e.children)s.geometry.dispose();t?.dispose(),t?.image?.close?.(),i?.dispose()}counts(){this.stats.resident=this.resident.size,this.stats.residentBytes=this.bytesTotal}residentBlocks(){return[...this.resident.values()].map(e=>({bx:e.bx,by:e.by,bytes:e.bytes}))}close(){this.o.channel.onBlock=null,this.o.channel.onBlockError=null,this.o.channel.close()}}const Mn=(n,e,t)=>({name:n,parent:e,pivot:t}),Dt={pack:"jet-hi3d",unitMetres:.45,bones:[Mn("root",null,[0,0,0]),Mn("airframe","root",[0,0,0]),Mn("canopy","airframe",[0,3.15,1.125]),Mn("nozzles","airframe",[0,1.8765,-6.885]),Mn("legN","airframe",[0,1.2465,4.05]),Mn("sliderN","legN",[0,1.2465,4.05]),Mn("legML","airframe",[.9,1.2465,-1.35]),Mn("sliderML","legML",[.9,1.2465,-1.35]),Mn("legMR","airframe",[-.9,1.2465,-1.35]),Mn("sliderMR","legMR",[-.9,1.2465,-1.35]),Mn("flapL","airframe",[1.7,1.892,-3.25]),Mn("flapR","airframe",[-1.7,1.892,-3.25]),Mn("aileronL","airframe",[3.83,1.808,-3.05]),Mn("aileronR","airframe",[-3.83,1.808,-3.05]),Mn("elevatorL","airframe",[1.65,2.535,-5.72]),Mn("elevatorR","airframe",[-1.65,2.535,-5.72]),Mn("rudder","airframe",[0,3.4,-6.035])],controls:[],limits:{aileron:.2617993877991494,elevator:.22689280275926285,flap:.3665191429188092,rudder:.2792526803190927},gear:{legs:[{leg:"legN",slider:"sliderN",direction:-1,stroke:[0,-1,0]},{leg:"legML",slider:"sliderML",direction:1,stroke:[.41262946462112043,-.893858577735502,-.1753675224639761]},{leg:"legMR",slider:"sliderMR",direction:1,stroke:[-.41262946462112043,-.893858577735502,-.1753675224639761]}],fold:1.53588974175501,stowedAt:.985,airborneStroke:2.35,extendHeight:8},exits:[[-.657,0,-.765],[.657,0,-.765]],surface:{tierNames:["close","mid","far"],referenceLines:406,size:15.3,centre:[0,2.5,0],fade:[[56,44],[20,15]],minDither:.001,eps:1e-5,white:16777215,normalScale:[.48,.35,0],glass:[.25,.4],coral:[.7,.9],splits:[0,0,0],nightFill:[.16,.14,.155],cull:{centre:[0,4.8,-.3],radius:9.8}},lamps:{glass:.35,glassColour:2775686},lighting:{accent:.58,lamp:1,dayLamp:.2},engine:{glow:[2893862,16742960,16751164],heatDay:.6,heatNight:1.15,cruiseHeat:.52},roughnessFloor:.06};Dt.controls.push({bone:"flapL",kind:"flap",side:1,axis:[.9948540752093652,-.0392336818392425,.09341352818867286]},{bone:"flapR",kind:"flap",side:-1,axis:[.9948540752093652,.0392336818392425,-.09341352818867286]},{bone:"aileronL",kind:"aileron",side:1,axis:[.9708462198340377,.08387582987681824,-.22454946581195456]},{bone:"aileronR",kind:"aileron",side:-1,axis:[.9708462198340377,-.08387582987681824,.22454946581195456]},{bone:"elevatorL",kind:"elevator",side:1,axis:[.9705817768262737,-.029864054671577673,-.23891243737262138]},{bone:"elevatorR",kind:"elevator",side:-1,axis:[.9705817768262737,.029864054671577673,.23891243737262138]},{bone:"rudder",kind:"rudder",side:1,axis:[0,.9192242548902957,-.39373438917801]});function f1(n,e,t=2){const i=n.attributes.find(M=>M.name==="position");if(!i)throw new Error("the volume: the level has no positions");const s=i.array,r=n.index;let a=1/0,l=1/0,o=1/0,u=-1/0,c=-1/0,f=-1/0;for(let M=0;M<s.length;M+=3)a=Math.min(a,s[M]),u=Math.max(u,s[M]),l=Math.min(l,s[M+1]),c=Math.max(c,s[M+1]),o=Math.min(o,s[M+2]),f=Math.max(f,s[M+2]);const h=a-t*e,d=l-t*e,g=o-t*e,v=Math.ceil((u-a)/e)+2*t+1,p=Math.ceil((c-l)/e)+2*t+1,m=Math.ceil((f-o)/e)+2*t+1,y=new Uint8Array(v*p*m),_={x0:h,y0:d,z0:g,cell:e,nx:v,ny:p,nz:m,cells:y},w=(M,x,b)=>{const A=Math.floor((M-h)/e),E=Math.floor((x-d)/e),P=Math.floor((b-g)/e);A>=0&&E>=0&&P>=0&&A<v&&E<p&&P<m&&(y[A+v*(E+p*P)]=1)},S=Array.from({length:v*m},()=>[]);for(let M=0;M<r.length;M+=3){const x=r[M]*3,b=r[M+1]*3,A=r[M+2]*3,E=s[x],P=s[x+2],R=s[b],D=s[b+2],C=s[A],I=s[A+2],U=Math.hypot(R-E,s[b+1]-s[x+1],D-P),O=Math.hypot(C-E,s[A+1]-s[x+1],I-P),W=Math.max(1,Math.ceil(Math.max(U,O)/e));for(let q=0;q<=W;q++)for(let $=0;q+$<=W;$++){const K=q/W,j=$/W;w(s[x]+(s[b]-s[x])*K+(s[A]-s[x])*j,s[x+1]+(s[b+1]-s[x+1])*K+(s[A+1]-s[x+1])*j,s[x+2]+(s[b+2]-s[x+2])*K+(s[A+2]-s[x+2])*j)}const k=(D-I)*(E-C)+(C-R)*(P-I);if(Math.abs(k)<1e-12)continue;const G=Math.max(0,Math.floor((Math.min(E,R,C)-h)/e)),Z=Math.min(v-1,Math.floor((Math.max(E,R,C)-h)/e)),me=Math.max(0,Math.floor((Math.min(P,D,I)-g)/e)),le=Math.min(m-1,Math.floor((Math.max(P,D,I)-g)/e));for(let q=me;q<=le;q++)for(let $=G;$<=Z;$++){const K=h+($+.5)*e,j=g+(q+.5)*e,V=((D-I)*(K-C)+(C-R)*(j-I))/k,B=((I-P)*(K-C)+(E-C)*(j-I))/k,te=1-V-B;V<0||B<0||te<0||S[$+v*q].push(V*s[x+1]+B*s[b+1]+te*s[A+1])}}for(let M=0;M<m;M++)for(let x=0;x<v;x++){const b=S[x+v*M];if(!(b.length<2)){b.sort((A,E)=>A-E);for(let A=0;A+1<b.length;A+=2){const E=Math.max(0,Math.floor((b[A]-d)/e)),P=Math.min(p-1,Math.floor((b[A+1]-d)/e));for(let R=E;R<=P;R++)y[x+v*(R+p*M)]=1}}}return _}function d1(n,e,t,i){const s=Math.ceil(i/t),r=n.z0-(s+1)*t,a=-(n.x0+n.nx*n.cell)-(s+1)*t,l=n.y0-e-(s+1)*t,o=Math.ceil(n.nz*n.cell/t)+2*(s+1),u=Math.ceil(n.nx*n.cell/t)+2*(s+1),c=Math.ceil(n.ny*n.cell/t)+2*(s+1),f=new Int32Array(o),h=new Int32Array(u),d=new Int32Array(c);for(let y=0;y<o;y++)f[y]=yc(r+(y+.5)*t,n.z0,n.cell,n.nz);for(let y=0;y<u;y++)h[y]=yc(-(a+(y+.5)*t),n.x0,n.cell,n.nx);for(let y=0;y<c;y++)d[y]=yc(l+(y+.5)*t+e,n.y0,n.cell,n.ny);const g=new Uint8Array(o*u*c);for(let y=0;y<c;y++)if(!(d[y]<0))for(let _=0;_<u;_++){if(h[_]<0)continue;const w=h[_]+n.nx*d[y];for(let S=0;S<o;S++)f[S]>=0&&n.cells[w+n.nx*n.ny*f[S]]&&(g[S+o*(_+u*y)]=1)}const v=[],p=y=>Math.max(0,Math.abs(y)-.5)*t;for(let y=-s;y<=s;y++)for(let _=-s;_<=s;_++)for(let w=-s;w<=s;w++)p(w)**2+p(_)**2+p(y)**2<=i*i&&v.push(w,_,y);const m=g.slice();for(let y=1;y<c-1;y++)for(let _=1;_<u-1;_++)for(let w=1;w<o-1;w++){const S=w+o*(_+u*y);if(!(!g[S]||g[S-1]&&g[S+1]&&g[S-o]&&g[S+o]&&g[S-o*u]&&g[S+o*u]))for(let M=0;M<v.length;M+=3){const x=w+v[M],b=_+v[M+1],A=y+v[M+2];x>=0&&b>=0&&A>=0&&x<o&&b<u&&A<c&&(m[x+o*(b+u*A)]=1)}}return{step:t,a0:r,c0:a,u0:l,na:o,nc:u,nu:c,cells:m}}function yc(n,e,t,i){const s=Math.floor((n-e)/t);return s>=0&&s<i?s:-1}function p1(n,e,t,i,s){const r=Math.ceil(s/n.cell),a=Math.floor((e-n.x0)/n.cell),l=Math.floor((t-n.y0)/n.cell),o=Math.floor((i-n.z0)/n.cell);if(a<-r||l<-r||o<-r||a>=n.nx+r||l>=n.ny+r||o>=n.nz+r)return!1;for(let u=Math.max(0,o-r);u<=Math.min(n.nz-1,o+r);u++)for(let c=Math.max(0,l-r);c<=Math.min(n.ny-1,l+r);c++)for(let f=Math.max(0,a-r);f<=Math.min(n.nx-1,a+r);f++)if(n.cells[f+n.nx*(c+n.ny*u)])return!0;return!1}const xt={bareFacade:.88,barePaving:.37,bareSky:1.45,facadeTint:[1.07,1.02,.96],pavingTint:[1.04,1,.96],duskRise:[.15,.57],duskFall:[.77,.99],horizonShare:.475,duskExposure:1.25,duskNeutralShare:.22,lampWallTint:[1,.65,.13],lampWrap:.55,pearlNightNeutral:.65,pearlNightBlueScatter:.543,pearlDuskHorizonTint:[1.08,1,.92],pearlHorizon:.85,pearlNeutralShare:.5,pearlScatter:.25,pearlRadiance:1.65,pearlWrap:.67,polishedTransition:[.13,.2],polishedAmbient:.055,polishedLobe:12,lampBounce:1.15,lampWidth:.63,lampSharpness:3.2,lampGain:1.65},rn={clearcoatRoughness:.065,flakeCellsPerMetre:500,flakeResolve:[.3,1.25],flakeTilt:.18,skyLodPerRoughness:7,sunInSky:.72,skyFill:.32,skyWidth:128,skyHeight:64,probe:{facadeSky:.42,facadeEarth:.55,zenithTint:[.48,.71,1],midTint:[.83,.91,1],pavingSky:.14},coatIor:1.5,coatBend:[0,.4]},it=n=>n.toFixed(4),us=n=>`vec3(${n.map(it).join(",")})`,Sm=n=>`if (heroFade < 1.0) {
    vec3 cell = floor(vRigidRest / ${it(n)});
    float rank = fract(sin(dot(cell, vec3(12.9898, 78.233, 37.719))) * 43758.5453);
    if (rank >= heroFade) discard;
  }`,ym=n=>n.replace("#include <common>",`#include <common>
varying vec3 vRigidRest;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vRigidRest = position;`);function m1(n,e,t){const i=new tl;return i.onBeforeCompile=s=>{s.uniforms.heroFade=n,s.vertexShader=ym(s.vertexShader),s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
uniform float heroFade;
varying vec3 vRigidRest;`).replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
${Sm(e)}`)},i.customProgramCacheKey=()=>t,i}function g1(n){const e=[];let t=0;for(let s=rn.skyWidth,r=rn.skyHeight;s>=1;s/=2,r=Math.max(1,r/2)){const a=t+s*r*4;if(a>n.length)throw new Error(`the sky basis map: ${n.length} bytes, too few for its mips`);e.push({data:n.subarray(t,a),width:s,height:r}),t=a}const i=new Kn(e[0].data,rn.skyWidth,rn.skyHeight);return i.mipmaps=e,i.wrapS=Cr,i.minFilter=ti,i.magFilter=Xt,i.generateMipmaps=!1,i.needsUpdate=!0,i}const xd=new WeakMap;function x1(n){const e=new Jg({color:16777215,map:n.map,roughnessMap:n.roughness,clearcoat:1,clearcoatRoughness:rn.clearcoatRoughness});n.normalMap&&(e.normalMap=n.normalMap,e.normalScale.set(n.normalScale,n.normalScale));const t={value:new Ke},i={value:new Ke},s={value:0};e.onBeforeRender=(u,c)=>{let f=xd.get(c);f||(f=c.getObjectByName("sky")?.material,f?.uniforms?.uHorizon&&f.uniforms.uMid&&xd.set(c,f)),s.value=+!!(f?.uniforms?.uHorizon&&f.uniforms.uMid),s.value&&f&&(t.value.copy(f.uniforms.uHorizon.value),i.value.copy(f.uniforms.uMid.value))};const r=n.surface,a=n.variant==="jet",l=`smoothstep(${xt.duskRise.map(it)},rigidNight)*(1.0-smoothstep(${xt.duskFall.map(it)},rigidNight))`,o=tn()&&re.smooth.dither==="mean";return e.onBeforeCompile=u=>{Object.assign(u.uniforms,{citySky:{value:n.sky},cityNight:n.glows.night,cityHorizon:t,cityMid:i,hasCitySky:s,maskRange:n.controls.range,heroFade:n.controls.fade,heroExposure:n.exposure,rigidAux:{value:n.aux},rigidFinish:{value:n.finish},rigidNight:n.glows.night,rigidCoral:n.glows.coral,rigidGlass:n.glows.glass,rigidGlow:{value:n.glows.channels.map(d=>d.value)},uEdgeClass:{value:re.pixel.edge.classObject},uHazeSteps:It.uHazeSteps,uHazeDither:It.uHazeDither,uDitherOrigin:It.uDitherOrigin}),"uWarp"in u.uniforms||Object.assign(u.uniforms,ni),u.vertexShader=js(ym(u.vertexShader));let c=u.fragmentShader;c=c.replace("#include <common>",`#include <common>
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
  ${Sm(n.fadeCellMetres)}
}
vec3 skyReflection(vec3 ray, float rough, vec3 sky, vec3 earth, float materialMetalCoverage) {
  vec2 uv = vec2(atan(ray.z,ray.x)/6.2831853+0.5, asin(clamp(ray.y,-1.0,1.0))/3.1415927+0.5);
  vec4 basis = textureLod(citySky,uv,rough*${it(rn.skyLodPerRoughness)});
  // The four probe channels represent zenith, mid-sky, facades and paving.
  vec3 facade = ${it(rn.probe.facadeSky)}*sky + ${it(rn.probe.facadeEarth)}*earth;
  vec3 environment = basis.x*sky*${us(rn.probe.zenithTint)} + basis.y*sky*${us(rn.probe.midTint)} + basis.z*facade + basis.w*(earth + ${it(rn.probe.pavingSky)}*sky);
  ${a?`float bare = materialMetalCoverage;
  vec3 street = sky*((basis.x+basis.y)*${it(xt.bareSky)} + basis.z*${us(xt.facadeTint)}*${it(xt.bareFacade)} + basis.w*${us(xt.pavingTint)}*${it(xt.barePaving)});
  environment = mix(environment,street,bare);`:""}
  float dusk = smoothstep(${xt.duskRise.map(it)},cityNight)*(1.0-smoothstep(${xt.duskFall.map(it)},cityNight))*hasCitySky;
  vec3 twilight = mix(cityMid,cityHorizon,${it(xt.horizonShare)}) * ((basis.x+basis.y)*${it(xt.bareSky)} + basis.z*${it(xt.bareFacade)} + basis.w*${it(xt.barePaving)});
  twilight = mix(twilight,vec3(luminance(twilight)),${it(xt.duskNeutralShare)});
  return mix(environment, twilight*${it(xt.duskExposure)}, dusk);
}
`),c=c.replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
rigidCoverage();`),c=c.replace("#include <roughnessmap_fragment>",`float roughnessFactor = max(${n.roughnessFloor.toFixed(3)}, texture2D(roughnessMap,vRoughnessMapUv).r);`),c=c.replace("#include <map_fragment>",`vec4 texel = texture2D(map, vMapUv);
rigidMetal = texel.a;
finishClass = texture2D(rigidFinish,vMapUv).rgb;
texel.a = 1.0;
diffuseColor *= texel;`),c=c.replace("#include <metalnessmap_fragment>","float metalnessFactor = rigidMetal;"),c=c.replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
#ifdef USE_NORMALMAP_TANGENTSPACE
  // Two-millimetre flake cells in rest space follow every moving part; unresolved flakes average into the base roughness.
  vec3 cell = vRigidRest * ${it(rn.flakeCellsPerMetre)};
  vec3 footprint = fwidth(cell);
  float resolve = 1.0 - smoothstep(${it(rn.flakeResolve[0])}, ${it(rn.flakeResolve[1])}, max3(footprint));
  vec3 seed = fract(floor(cell) * vec3(.1031, .1030, .0973));
  seed += dot(seed, seed.yxz + 33.33);
  vec2 tilt = fract((seed.xx + seed.yz) * seed.zy) * 2.0 - 1.0;
  normal = normalize(normal + (tbn[0]*tilt.x + tbn[1]*tilt.y) * (${it(rn.flakeTilt)} * resolve * finishClass.g));
#endif`),c=c.replace("#include <lights_physical_fragment>",`#include <lights_physical_fragment>
#ifdef USE_CLEARCOAT
  material.clearcoat = finishClass.g;
#endif`);const f=a?`float nightScatter = smoothstep(${xt.duskFall.map(it)},rigidNight)*finishClass.r*${it(xt.pearlNightNeutral)};
    reflected = mix(reflected,vec3(luminance(reflected)),nightScatter);
    reflected *= mix(vec3(1.0),${us(xt.pearlDuskHorizonTint)},(${l})*finishClass.r);`:"";c=c.replace("vec3 totalDiffuse =",`
#if NUM_HEMI_LIGHTS > 0
  vec3 skyLight = hemisphereLights[0].skyColor * RECIPROCAL_PI;
  vec3 earth = hemisphereLights[0].groundColor * RECIPROCAL_PI;
  #if NUM_DIR_LIGHTS > 0
    skyLight += directionalLights[0].color * RECIPROCAL_PI * ${it(rn.sunInSky)};
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
        float facing = saturate((dot(normal,normalize(lamp))+${it(xt.lampWrap)})/(1.0+${it(xt.lampWrap)}));
        float alignment = dot(reflect(-geometryViewDir,normal),normalize(lamp));
        float band = pow(saturate((alignment + ${it(xt.lampWidth)})/(1.0+${it(xt.lampWidth)})),${it(xt.lampSharpness)});
        vec3 lampLight = pointLights[i].color * getDistanceAttenuation(length(lamp),pointLights[i].distance,pointLights[i].decay);
        float brushed = smoothstep(${xt.polishedTransition.map(it)},material.roughness);
        float sharp = ${it(xt.polishedAmbient)}+pow(saturate(alignment),${it(xt.polishedLobe)});
        lampLight *= mix(sharp,1.0,brushed);
        reflected += exposedMetal * lampLight * facing*(${us(xt.lampWallTint)}*${it(xt.lampBounce)}+band*${it(xt.lampGain)});
      }
    #endif
    vec3 baseView = geometryViewDir;
    #ifdef USE_CLEARCOAT
      vec3 internalView = -refract(-geometryViewDir,normal,1.0/${it(rn.coatIor)});
      baseView = normalize(mix(baseView,internalView,smoothstep(${rn.coatBend.map(it)},material.clearcoat)));
    #endif
    reflectedLight.indirectSpecular += reflected * EnvironmentBRDF(normal,baseView,material.specularColorBlended,material.specularF90,material.roughness);
    #ifdef USE_CLEARCOAT
      vec3 coatRay = inverseTransformDirection(reflect(-geometryViewDir,geometryClearcoatNormal),viewMatrix);
      clearcoatSpecularIndirect += skyReflection(coatRay, material.clearcoatRoughness,skyLight,earth,0.0)
        * EnvironmentBRDF(geometryClearcoatNormal,geometryViewDir,material.clearcoatF0,material.clearcoatF90,material.clearcoatRoughness);
    #endif
    reflectedLight.indirectDiffuse += material.diffuseColor*(1.0-material.metalness)*skyLight*${it(rn.skyFill)};
  #endif
#endif
vec3 totalDiffuse =`);const h=d=>r.splits[d]===1?"vRigidRest.x > 0.0":r.splits[d]===2?"vRigidRest.z > 0.0":"true";c=c.replace("#include <opaque_fragment>",`vec4 auxv = texture2D(rigidAux, vMapUv);
float coralM = smoothstep(${it(r.coral[0])}, ${it(r.coral[1])}, auxv.a);
float glassM = smoothstep(${it(r.glass[0])}, ${it(r.glass[1])}, auxv.a) * (1.0 - coralM);
outgoingLight = max(outgoingLight, diffuseColor.rgb * ${us(r.nightFill)} * rigidNight);
${a?`
#if NUM_DIR_LIGHTS > 0 && NUM_HEMI_LIGHTS > 0
  // Light scattered by a pearl's platelet layer is broader than the outer coat's reflection.
  float wrap = saturate((dot(normal,directionalLights[0].direction)+${it(xt.pearlWrap)})/(1.0+${it(xt.pearlWrap)}));
  vec3 nacre = diffuseColor.rgb * RECIPROCAL_PI * (hemisphereLights[0].skyColor + wrap*directionalLights[0].color);
  float duskP = ${l}*hasCitySky;
  vec3 pearlSky = mix(cityMid,cityHorizon,${it(xt.pearlHorizon)});
  pearlSky = mix(pearlSky,vec3(luminance(pearlSky)),${it(xt.pearlNeutralShare)});
  nacre = mix(nacre,vec3(luminance(nacre)),smoothstep(${xt.duskFall.map(it)},rigidNight)*${it(xt.pearlNightNeutral)});
  nacre = mix(nacre, diffuseColor.rgb*pearlSky*${us(xt.pearlDuskHorizonTint)}, duskP);
  outgoingLight = mix(outgoingLight, nacre*${it(xt.pearlRadiance)}, finishClass.r*${it(xt.pearlScatter)});
  float pearlBlue = max(outgoingLight.b - outgoingLight.g, 0.0);
  outgoingLight.b -= pearlBlue * finishClass.r * smoothstep(${xt.duskFall.map(it)},rigidNight) * ${it(xt.pearlNightBlueScatter)};
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
#include <opaque_fragment>`),c=c.replace("#include <fog_fragment>",`
gl_FragColor.rgb = pow(max(gl_FragColor.rgb * heroExposure, vec3(0.0)), vec3(1.0 / 2.2));
#ifdef USE_FOG
{
  float x = smoothstep(fogNear, fogFar, vFogDepth);
  float n = uHazeSteps - 1.0;
  float q = x * n, b = floor(q), t = clamp((q - b - 0.5) / max(uHazeDither, 1e-3) + 0.5, 0.0, 1.0);
  float fogFactor = ${o?"(b + t) / n":"(b + step(bayer4h(gl_FragCoord.xy + uDitherOrigin), t)) / n"};
  gl_FragColor.rgb = mix(gl_FragColor.rgb, pow(fogColor, vec3(1.0 / 2.2)), fogFactor);
}
#endif
`),c=c.replace("#include <dithering_fragment>",`#include <dithering_fragment>
pc_fragN = vec4(normal * 0.5 + 0.5, uEdgeClass);`),u.fragmentShader=c},e.customProgramCacheKey=()=>n.key,rl(e)}const Kr=n=>Math.min(1,Math.max(0,n)),wc=n=>Math.max(-1,Math.min(1,n)),Zr=(n,e,t)=>n+(e-n)*t,v1=new z(1,0,0),vd=1e-6;function M1(n,e){return e.set(-1,0,0,0,0,0,1,0,0,1,0,-n,0,0,0,1)}function nh(){const n=Ud();return(n.belowPivot+n.gearUnits)*Dt.unitMetres}const bc=n=>n<=.04045?n/12.92:((n+.055)/1.055)**2.4;function dr(n,e,t,i=0){n.value.set(bc((e>>16&255)/255)*t,bc((e>>8&255)/255)*t,bc((e&255)/255)*t,i)}class _1{root=new mn;frame=new mn;bones=new Map;skins=[];controls=[];glows;surfaces;gear;heroToModel=new et;rot=new Float64Array(9);m=new et;q=new vi;centre=new z;object=-1;lastObject=-1;shown={pitch:0,roll:0,yaw:0,flaps:0};stroke=0;strokeStep=1/0;depth;fade={value:1};objectFade=1;eyeFade=1;eyeInside=!1;eyeLocal=new z;inverse=new et;constructor(e,t,i){this.root.name="hero jet",this.frame.matrixAutoUpdate=!1,this.root.add(this.frame),M1(nh(),this.heroToModel);const s=new mn;for(const c of Dt.bones){const f=new Zo;f.name=c.name;const h=c.parent?this.bones.get(c.parent):null,d=new z(...c.pivot);h&&d.sub(h.getWorldPosition(new z)),f.position.copy(d),(h??s).add(f),f.updateMatrixWorld(!0),this.bones.set(c.name,f)}this.frame.add(s),s.updateMatrixWorld(!0);const r=e.meshes[0],a=new Jo(r.bones.map(c=>this.bone(c)));this.glows={channels:Array.from({length:Dt.surface.splits.length*2},()=>({value:new ct})),coral:{value:new ct},glass:{value:new ct},night:{value:0}};const l=e.textures,o=l["colour-1024.bin"],u=[l["normal-512.bin"],l["normal-mid-256.bin"],l["normal-far-128.bin"]];r.levels.forEach((c,f)=>{const h={range:{value:new qe(0,1)},fade:{value:1}},d=Dt.surface.normalScale[f]??0,g=x1({variant:"jet",map:o,roughness:l["roughness-512.bin"],aux:l["aux-512.bin"],finish:l["finish-512.bin"],normalMap:d>0?u[f]??null:null,normalScale:d,sky:i,roughnessFloor:Dt.roughnessFloor,surface:Dt.surface,glows:this.glows,controls:h,fadeCellMetres:Hn.jet.fadeCellMetres,exposure:t,key:`hero-jet-${f}-${d>0?"n":"p"}`}),v=new Uo(c.geometry,g);v.name=`hero jet ${Dt.surface.tierNames[f]}`,v.bind(a,new et),v.boundingSphere=new kn(new z(...Dt.surface.cull.centre),Dt.surface.cull.radius),v.castShadow=f===0,v.receiveShadow=!0,v.layers.set(Wn.actors),v.visible=f===0,this.frame.add(v),this.skins.push(v),this.controls.push(h)}),this.depth=m1(this.fade,Hn.jet.fadeCellMetres,"hero-jet-depth"),this.surfaces=Dt.controls.map(c=>({joint:this.bone(c.bone),kind:c.kind,side:c.side,axis:new z(...c.axis)})),this.gear=Dt.gear.legs.map(c=>({legBone:this.bone(c.leg),sliderBone:this.bone(c.slider),direction:c.direction,axis:new z(...c.stroke)})),this.root.visible=!1}bone(e){const t=this.bones.get(e);if(!t)throw new Error(`${Dt.pack}: no bone ${e}`);return t}place(e,t,i,s,r,a,l=0,o=!0){const u=e.fade??1;if(this.objectFade=u,this.root.visible=u>0,!this.root.visible)return;this.root.position.set(t.x,t.y,t.z);const c=e.scale*i/Dt.unitMetres;om(this.m,Ho(e,this.rot),c,0,0,0),this.frame.matrix.multiplyMatrices(this.m,this.heroToModel),this.frame.matrixWorldNeedsUpdate=!0;const f=e.subject===void 0||!(e.subject>0)?0:Math.min(1,e.subject);for(let h=0;h<this.skins.length;h++){const d=this.skins[h],g=_a(d.material);g&&(g.value=f),d.frustumCulled=!(a&&f>0),this.controls[h].fade.value=u}this.fade.value=u,this.ease(s,l,o),this.strokeStep=o?1/0:Hn.jet.strokeUnitsPerSec*Math.min(Math.max(0,l),Hn.jet.easeMaxDtSec),this.pose(s),this.strokeStep=1/0,this.setNight(r,s.heat,s.exhaust?.throat??null)}ease(e,t,i){const s=Hn.jet,r=this.shown;if(i){r.pitch=e.pitch,r.roll=e.roll,r.yaw=e.yaw,r.flaps=e.flaps;return}const a=Math.min(Math.max(0,t),s.easeMaxDtSec),l=1-Math.exp(-a/Math.max(vd,s.surfaceSec)),o=1-Math.exp(-a/Math.max(vd,s.flapSec));r.pitch+=(e.pitch-r.pitch)*l,r.roll+=(e.roll-r.roll)*l,r.yaw+=(e.yaw-r.yaw)*l,r.flaps+=(e.flaps-r.flaps)*o}pose(e){this.bone("canopy").rotation.x=-.9599310885968813*Kr(e.canopy),this.bone("nozzles").rotation.x=-e.nozzleRad;const t=1-Kr(e.gear),i=Dt.gear,s=i.airborneStroke*(1-t)*Kr(e.liftUnits/i.extendHeight);this.stroke+=Math.max(-this.strokeStep,Math.min(this.strokeStep,s-this.stroke)),Number.isFinite(this.stroke)||(this.stroke=s);for(const a of this.gear)a.legBone.quaternion.copy(this.q.setFromAxisAngle(v1,-a.direction*i.fold*t)),a.sliderBone.position.copy(a.axis).multiplyScalar(this.stroke*Dt.unitMetres),a.legBone.scale.setScalar(t<i.stowedAt?1:0);const r=this.shown;this.setControls(r.pitch,r.roll,r.yaw,r.flaps)}setControls(e,t,i,s){const r=Dt.limits;for(const a of this.surfaces){let l=0;a.kind==="aileron"?l=-a.side*wc(t)*r.aileron:a.kind==="elevator"?l=wc(e)*r.elevator:a.kind==="flap"?l=-Kr(s)*r.flap:a.kind==="rudder"&&(l=wc(i)*r.rudder),a.joint.quaternion.setFromAxisAngle(a.axis,l)}}setNight(e,t,i=null){const s=this.glows;s.night.value=e;const r=Zr(Dt.lighting.dayLamp,Dt.lighting.lamp,e),a=Dt.surface.white;dr(s.channels[0],a,r,1),dr(s.channels[1],a,r,1),dr(s.coral,a,Dt.lighting.accent*e,1),dr(s.glass,Dt.lamps.glassColour,Dt.lamps.glass*e);const l=Dt.engine,o=t>l.cruiseHeat,u=Kr(o?(t-l.cruiseHeat)/(1-l.cruiseHeat):t/l.cruiseHeat),c=l.glow[o?1:0],f=l.glow[o?2:1],h=Math.round(Zr(c>>16&255,f>>16&255,u))<<16|Math.round(Zr(c>>8&255,f>>8&255,u))<<8|Math.round(Zr(c&255,f&255,u)),d=t*Zr(l.heatDay,l.heatNight,e);dr(s.channels[2],i?i.hex:h,i?i.strength:d),dr(s.channels[3],i?i.hex:h,i?i.strength:d)}eye(e,t,i,s,r,a,l=!0){if(!this.root.visible)return;if(this.eyeInside=!1,t){this.root.updateMatrixWorld(!0);const c=this.frame.matrixWorld;this.eyeLocal.copy(e).applyMatrix4(this.inverse.copy(c).invert()),this.eyeInside=p1(t,this.eyeLocal.x,this.eyeLocal.y,this.eyeLocal.z,i/Math.max(1e-9,c.getMaxScaleOnAxis()))}const o=this.eyeInside&&l?0:1;this.eyeFade=a?o:Math.max(0,Math.min(1,this.eyeFade+Math.sign(o-this.eyeFade)*Math.min(Math.abs(o-this.eyeFade),Math.max(0,r)/Math.max(1e-6,s))));const u=Math.min(this.objectFade,this.eyeFade);this.fade.value=u;for(const c of this.controls)c.fade.value=u;this.root.visible=u>0}lod(e){if(!this.root.visible)return;const t=Dt.surface;this.root.updateMatrixWorld(!0);const i=this.frame.matrixWorld;this.centre.set(t.centre[0],t.centre[1],t.centre[2]).applyMatrix4(i).applyMatrix4(e.matrixWorldInverse);const r=e.projectionMatrix.elements[15]===1?1:Math.max(t.eps,-this.centre.z),a=t.referenceLines*t.size*i.getMaxScaleOnAxis()*e.projectionMatrix.elements[5]/(2*r),l=1-Uh.smoothstep(a,t.fade[0][1],t.fade[0][0]),o=1-Uh.smoothstep(a,t.fade[1][1],t.fade[1][0]);let u=0,c=-1;for(let h=0;h<this.skins.length;h++){const d=this.controls[h].range.value;h===0?d.set(l,1):h===1?d.set(o,l):d.set(0,o);const g=d.y-d.x;this.skins[h].visible=g>t.minDither,g>c&&(c=g,u=h)}const f=this.fade.value<1;for(let h=0;h<this.skins.length;h++){const d=this.skins[h];d.castShadow=h===u,d.customDepthMaterial=h===u&&f?this.depth:void 0}}dispose(){for(const e of this.skins)e.material.dispose();this.skins[0]?.skeleton.dispose(),this.depth.dispose(),this.root.removeFromParent()}}const S1=new Set(["jetCanopy","jetNozzles","jetNoseGear","jetMainGear","jetBodyOpen"]),y1=new Yn;function w1(n){const e={jets:0,walkers:0,fallbacks:0,unresolved:0,eyeInside:0,eyeInNow:!1};let t=null,i=0;const s=new z,r={value:Hn.jet.exposure};let a=[],l=null,o=null,u=null;const c={x:0,y:0,z:0,yaw:0,ok:!1};let f=Number.NaN;const h=()=>{for(const g of a)g.dispose();a=[],o?.dispose(),o=null,l=null,t=null,Th(null),u?.dispose(),u=null},d=()=>{const g=n.assets.get(Dt.pack);if(!g)return a.length&&h(),!1;if(g!==l){h();const v=g.meshes[0]?.levels[0];if(v?.cpu){t=f1(v.cpu,Hn.jet.eyeCellMetres),delete v.cpu;const p=_r.walk;Th(d1(t,nh(),p.parkedJetVolumeStepMetres,p.parkedJetHideInsideMetres))}o=g1(g.raw["city-basis.bin"]);for(let p=0;p<Hn.jet.instances;p++){const m=new _1(g,r,o);n.ps.scene.add(m.root),a.push(m)}l=g}return!0};return{update(g,v,p,m){e.jets=0,e.fallbacks=0,r.value=Hn.jet.exposure;const y=Number.isFinite(g.timeSec)?g.timeSec:Number.NaN,_=Number.isFinite(y)&&Number.isFinite(f)?y-f:0;f=y,i=_;for(const b of a)b.lastObject=b.object,b.object=-1,b.root.visible=!1;const w=Hn.heroes==="hi3d";if(!w){const b=n.assets.get(Dt.pack)?.meshes[0]?.levels[0];b?.cpu&&delete b.cpu}if(!p)return;const S=Number.isFinite(g.timeOfDay)?Math.max(0,Math.min(1,vo(g.timeOfDay))):0;let M=0,x=!1;for(const b of p.poses)if(!(b.object<0||b.object>=g.objects.length))if(b.kind==="jetBody"&&b.jet){if(x=!1,!w||!d()||M>=a.length){e.fallbacks++;continue}if(xm(c,g,b,v,n.origin),!c.ok){e.fallbacks++;continue}const A=a[M++];A.place(g.objects[b.object],c,v.cpu.cellMetres,b.jet,S,v.cpu.subOn,_,A.lastObject<0),A.object=b.object,m[b.object]=1,e.jets++,x=!0}else x&&S1.has(b.kind)?m[b.object]=1:x=!1},prepare(g){g.getWorldPosition(s);const v=Hn.jet;e.eyeInNow=!1;for(const m of a)m.root.visible&&(m.eye(s,t,v.eyeMarginMetres,v.eyeFadeSec,i,m.lastObject<0,v.eyeFade),m.eyeInside&&(e.eyeInNow=!0));e.eyeInNow&&e.eyeInside++;const p=!Go(n.three);for(const m of a)m.root.visible&&(m.lod(g),m.depth.colorWrite=p)},drawn(g){for(const v of a)if(v.object===g&&v.root.visible)return v.root;return null},warmMeshes(){if(Hn.heroes!=="hi3d"||!d())return[];const g=[],v=(_,w)=>{const S=new Uo(_.geometry,w);return S.bind(_.skeleton,_.bindMatrix),S.castShadow=!0,S.receiveShadow=!0,S.boundingSphere=_.boundingSphere,S.layers.mask=_.layers.mask,S};for(const _ of a[0].skins)g.push(v(_,_.material));const p=a[0].skins[0].material;u??=new tl;const m=n.ps.scene,y=m.fog;m.fog=null;try{for(const _ of[u,...a.map(w=>w.depth)])_.side=yn,_.map=p.map;for(const _ of[u,a[0].depth])n.three.compileAsync(v(a[0].skins[0],_),y1,m).catch(()=>{})}finally{m.fog=y}return g},onLost(){h()},onRestored(){},info:e,assets:n.assets,drawnJets(){return a.filter(g=>g.root.visible).map(g=>g.root)},config:Hn}}const Ht=At.ground,b1=Ti.particles.ring,fa=Ti.particles.light,E1=Ti.particles.outwash,Md=Dn.shadeLevels[Dn.flatShade],_d=re.plain.actorNightLift,A1=Dn.particles.decalBiasMetres,T1=["dust","paving","sand","grass","water"],mo=40,Ec=6,Ns=Ht.terrainNodes,wm=Ns*Ns,ih=`
uniform float uH[${wm}];
uniform vec4 uTer;
uniform vec4 uPool;
// The night landing pool's light on the dust and spray inside it (scene x, z: the pool's centre; its radius; its level),
// as the game's plain particles take it (light.particleShare of its inner colour), with the decal pool's soft edge.
float exPool(vec2 p) {
  if (!(uPool.w > 0.0)) return 0.0;
  return uPool.w * (1.0 - smoothstep(0.82, 1.02, length(p - uPool.xy) / max(uPool.z, 1e-3)));
}
float exTerrain(vec2 p, float flatY) {
  if (uTer.w < 0.5) return flatY;
  vec2 g = clamp((p - uTer.xy) / (2.0 * uTer.z) + 0.5, 0.0, 1.0) * ${tt(Ns-1)};
  vec2 c = min(floor(g), vec2(${tt(Ns-2)}));
  vec2 t = g - c;
  int k = int(c.y) * ${Ns} + int(c.x);
  return mix(mix(uH[k], uH[k + 1], t.x), mix(uH[k + ${Ns}], uH[k + ${Ns+1}], t.x), t.y) + ${tt(Ht.terrainLiftM)};
}`,sh=`
uniform vec3 uAmb; uniform vec3 uSun; uniform float uBNight;
uniform float uHazeSteps; uniform float uHazeDither; uniform vec2 uDitherOrigin;
vec3 exLit(vec3 c) { return c * min(uAmb + uSun * ${tt(Md)} + uBNight * ${tt(_d)}, vec3(1.0)); }
vec3 exLitPool(vec3 c, float pool) { return c * min(uAmb + uSun * ${tt(Md)} + uBNight * ${tt(_d)} + ${Is(fa.inner)} * ${tt(fa.particleShare)} * pool, vec3(1.0)); }`;function R1(n){return{...n,...el.clone(ke.fog),uAmb:It.uAmb,uSun:It.uSun,uBNight:It.uBNight,uHazeSteps:It.uHazeSteps,uHazeDither:It.uHazeDither,uDitherOrigin:It.uDitherOrigin,...ni}}function Ac(n,e,t,i,s,r){const a=new cn({name:n,uniforms:{...R1(t),...i},vertexShader:js(s),fragmentShader:r,fog:!0,transparent:!0,depthWrite:!1,depthTest:!0,side:jn,forceSinglePass:!0,blending:Pu,blendSrc:da,blendDst:Tr,blendSrcAlpha:da,blendDstAlpha:Tr});return a.customProgramCacheKey=()=>e,a}function Tc(n,e,t){const i=new vt(n,e);return i.name=t,i.layers.set(Wn.actors),i.frustumCulled=!1,i.castShadow=!1,i.receiveShadow=!1,i.visible=!1,i.renderOrder=1,i}const C1=`
#include <common>
${ih}
uniform vec3 uCentre;
uniform vec2 uHalf;
uniform vec2 uAxis;
varying vec2 vLocal;
varying float vFogDepth;
void main() {
  // The quad in the decal's own metres (x across, y along uAxis: the jet's heading, or the plume's way for the reflection),
  // on the drawn ground.
  vLocal = position.xy * uHalf;
  vec3 w = uCentre + vec3(uAxis.y, 0.0, -uAxis.x) * vLocal.x + vec3(uAxis.x, 0.0, uAxis.y) * vLocal.y;
  w.y = exTerrain(w.xz, uCentre.y);
  // Nearer the eye by the particle layer's decal bias, along the line of sight (a bias in metres in every view).
  w += normalize(cameraPosition - w) * ${tt(A1)};
  vec3 transformed = w;
  #include <project_vertex>
  vFogDepth = -mvPosition.z;
}`,P1=()=>`
#include <common>
#include <fog_pars_fragment>
layout(location = 1) out highp vec4 pc_fragN;
${sh}
${Ju()}
${dl}
uniform vec4 uRing;    // ring radius m, ring level, band half-width m, scour strength
uniform float uKind;   // the surface (SURFACES' order)
uniform vec3 uScourA;
uniform vec3 uScourB;
uniform vec4 uLight;   // the pool's centre (m, decal space), its radius m, its level
uniform vec4 uGlint;   // radius m, strength, -, -
uniform vec4 uWave;    // ripple phase 0 … 1, ripple spacing m, calm core share, clock (s, wrapped)
uniform vec4 uStreak;  // the reflection: length m, half-width m, strength, mode (1: the reflection, 0: the hover's ground)
varying vec2 vLocal;
void main() {
  vec2 q = vLocal;
  float r = length(q);
  vec3 col = vec3(0.0);
  float a = 0.0;
  vec3 emit = vec3(0.0);
  if (uStreak.w > 0.5) {
    // ── the night reflection of the plume on the water below it: broken crests, warm by the mouths to periwinkle.
    float u = q.y / max(uStreak.x, 1e-3);
    float across = exp(-(q.x * q.x) / max(uStreak.y * uStreak.y, 1e-6));
    float wob = exNoise(vec2(q.x * 0.35, q.y / uWave.y * 0.6), vec2(${tt(Bs)})) * 2.0;
    float crest = smoothstep(0.55, 0.92, 0.5 + 0.5 * sin(6.2831853 * (q.y / uWave.y * 1.3 + wob - uWave.x)));
    float along = smoothstep(-0.05, 0.05, u) * exp(-max(u, 0.0) * ${tt(Ht.reflect.decay)});
    emit = mix(${Is(At.colour.mouth)}, ${Is(At.colour.falloff)}, smoothstep(0.0, 0.5, u)) * across * crest * along * uStreak.z;
  } else {
    float R = uRing.x;
    if (uRing.y > 0.0 && R > 0.0) {
      float ang = atan(q.y, q.x) / 6.2831853 + 0.5;
      if (uKind > 3.5) {
        // ── water: the ripple disc, scaled cells moving out, brightest in the ring, a calm darker core, mist at the rim.
        float er = (r - R * 0.8) / (R * 0.55);
        float ring = exp(-er * er);
        float core = smoothstep(uWave.z * R * 0.6, uWave.z * R * 1.3, r);
        float scales = exNoise(vec2(ang * ${tt(Ht.streaks)}, r / uWave.y * 0.8), vec2(${tt(Ht.streaks)}, ${tt(Bs)}));
        float ripple = 0.5 + 0.5 * sin(6.2831853 * (r / uWave.y - uWave.x) + scales * 2.4);
        float w = smoothstep(0.62, 0.95, ripple * 0.75 + scales * 0.35);
        float em = (r - R * ${tt(Ht.mist.at)}) / (R * ${tt(Ht.mist.width)});
        float mist = exp(-em * em) * ${tt(Ht.mist.alpha)};
        a = ${tt(Ht.rippleAlpha)} * uRing.y * (ring * core * w + mist * (0.6 + 0.4 * scales));
        col = mix(uScourA, uScourB, scales);
        // (The calm core: the churned surface reads a little darker right under the impact.)
        float calm = (1.0 - core) * exp(-r * r / (R * R * 0.3)) * ${tt(Ht.calmDark)} * uRing.y;
        a += calm;
        col = a > 1e-4 ? col * (a - calm) / a : col;
      } else {
        // ── the scour band: scoured dust or sand, flattened pale grass, fine radial streaks; paving barely marked.
        float eb = (r - R * ${tt((1+b1.innerShare)/2)}) / max(uRing.z, 1e-3);
        float band = exp(-eb * eb);
        float streak = exNoise(vec2(ang * ${tt(Ht.streaks)}, r * 0.25), vec2(${tt(Ht.streaks)}, ${tt(Bs)}));
        a = uRing.w * uRing.y * band * (0.55 + 0.45 * streak);
        if (uKind > 2.5) {
          // Grass: the whole disc under the downwash lies flattened, palest in the ring, gusts of sheen running out
          // through it (their fronts broken by the streaks).
          float disc = 1.0 - smoothstep(R * 0.9, R * 1.25, r);
          float wave = 0.5 + 0.5 * sin(6.2831853 * (r / uWave.y - uWave.x) + streak * 2.6);
          a = uRing.w * uRing.y * (max(band, disc * 0.45) * (0.55 + 0.45 * streak)) * (1.0 - ${tt(Ht.grassWaveShare)} + ${tt(Ht.grassWaveShare)} * wave * 1.4);
        }
        col = mix(uScourA, uScourB, streak);
      }
    }
    // ── the impact's glint: small and warm at the foot of the plume, fading to a cool blue-grey.
    float gr = r / max(uGlint.x, 1e-3);
    emit += mix(${Is(Ht.glintCool)}, ${Is(Ht.glintWarm)}, exp(-gr * gr * 6.0)) * exp(-gr * gr) * uGlint.y;
    // ── the night landing light: a soft warm pool, the game's inner colour fading to its outer one.
    if (uLight.w > 0.0) {
      float rl = length(q - uLight.xy) / max(uLight.z, 1e-3);
      float pool = 1.0 - smoothstep(0.82, 1.02, rl);
      emit += mix(${Is(fa.inner)}, ${Is(fa.outer)}, smoothstep(${tt(fa.innerShare*.7)}, 1.0, rl)) * pool * uLight.w * ${tt(Ht.poolAlpha)};
    }
  }
  float keep = 1.0 - exHaze();
  a = clamp(a, 0.0, 1.0);
  gl_FragColor = vec4((exLit(col) * a + emit) * keep, a * keep);
  pc_fragN = vec4(0.0);
}`,L1=`
#include <common>
${ih}
uniform vec3 uCentre;
uniform vec4 uRadii;   // inner m, outer m, lip height m, fountain height m
uniform vec2 uAxis;    // the jet's heading (x, y on the ground)
varying vec2 vD;       // the unit direction from the impact (its angle is taken per pixel: no seam)
varying float vT;      // radial share 0 … 1
varying float vR;
varying float vPool;
varying float vFogDepth;
void main() {
  float t = position.z;
  float r = mix(uRadii.x, uRadii.y, t);
  vec2 d = position.xy;
  // The rolled lip: the outer rings rise; the fountain: a low ridge along the jet's own line between its nozzles' footprints.
  float across = dot(d, vec2(uAxis.y, -uAxis.x));
  float lip = uRadii.z * pow(smoothstep(0.4, 1.0, t), 1.5);
  float ea = across * r / max(uRadii.x * 1.2, 1e-3);
  float ridge = uRadii.w * exp(-ea * ea) * (1.0 - smoothstep(0.0, 0.6, t));
  vec3 transformed = uCentre + vec3(d.x * r, 0.0, d.y * r);
  transformed.y = exTerrain(transformed.xz, uCentre.y) + lip + ridge;
  vD = d;
  vT = t;
  vR = r;
  vPool = exPool(transformed.xz);
  #include <project_vertex>
  vFogDepth = -mvPosition.z;
}`,D1=()=>`
#include <common>
#include <fog_pars_fragment>
layout(location = 1) out highp vec4 pc_fragN;
${sh}
${Ju()}
${dl}
uniform vec4 uSheet;   // alpha, scroll (noise cells, wrapped), the noise's cells along a radius, -
uniform vec3 uColA;
uniform vec3 uColB;
varying vec2 vD;
varying float vT;
varying float vR;
varying float vPool;
void main() {
  float t = vT;
  float ang = atan(vD.y, vD.x) / 6.2831853 + 0.5;
  // Thin at the impact, densest at the lip, gone past it.
  float et = (t - 0.72) / 0.2;
  float env = smoothstep(0.0, 0.3, t) * (1.0 - smoothstep(0.82, 1.0, t)) * (0.45 + 0.85 * exp(-et * et));
  vec2 p = vec2(ang * ${tt(Ht.noiseAround)}, t * uSheet.z - uSheet.y);
  float n = exNoise(p, vec2(${tt(Ht.noiseAround)}, ${tt(Bs)})) * 0.65 + exNoise(p * 2.0 + 7.1, vec2(${tt(Ht.noiseAround*2)}, ${tt(Bs*2)})) * 0.35;
  float a = uSheet.x * env * smoothstep(0.3, 0.75, n);
  vec3 col = exLitPool(mix(uColA, uColB, n), vPool);
  float keep = 1.0 - exHaze();
  gl_FragColor = vec4(col * a * keep, a * keep);
  pc_fragN = vec4(0.0);
}`,I1=`
#include <common>
${dl}
${ih}
uniform vec3 uCentre;  // the impact now (scene metres)
uniform vec3 uVel;     // the jet's velocity (scene metres a second): a puff's birth place is where the impact was
uniform vec4 uB;       // born radius m, wall-jet speed m/s, drag /s, outer radius m
uniform vec4 uB2;      // life s, rise m, size born m, size grown m
uniform vec4 uB3;      // clock s (wrapped at a whole number of lives), alpha, puffs drawn, water (spray falls back)
uniform float uCap;    // the highest a puff rises over the ground, m
varying vec2 vQuad;
varying float vAlpha;
varying float vShade;
varying float vPool;
varying float vFogDepth;
void main() {
  float i = float(gl_InstanceID);
  float life = uB2.x;
  float tt = uB3.x + exHash(vec2(i, 3.7)) * life;
  float cyc = floor(tt / life);
  float age = tt - cyc * life;
  // (The hashes take the cycle wrapped at the clock's wrap: whole lives, so no puff jumps when the clock wraps.)
  cyc = mod(cyc, floor(${tt(Ht.clockWrapSec)} / life + 0.5));
  float k = age / life;
  float ang = exHash(vec2(i, cyc + 11.0)) * 6.2831853;
  float dist = min(uB.x + uB.y * (1.0 - exp(-uB.z * age)) / max(uB.z, 1e-3), uB.w);
  float h;
  if (uB3.w > 0.5) {
    // Spray: thrown up and falling back under gravity, never under the water.
    float v0 = uB2.y * ${tt(Ht.sprayThrow)};
    h = max(0.0, v0 * age - 0.5 * ${tt(E1.gravity)} * age * age);
  } else h = uB2.y * smoothstep(0.35, 1.0, dist / max(uB.w, 1e-3)) * sqrt(k);
  vec3 c = uCentre - uVel * age + vec3(cos(ang) * dist, 0.0, sin(ang) * dist);
  float size = mix(uB2.z, uB2.w, sqrt(k)) * (0.75 + 0.5 * exHash(vec2(i, cyc + 5.0)));
  // (The cap is on the puff's top: a grown puff never covers the jet's belly.)
  c.y = exTerrain(c.xz, c.y) + min(h, max(0.0, uCap - size));
  // Camera-facing in the world (the view's right and up), so the warp step bends it as it bends the ground.
  vec3 right = vec3(viewMatrix[0][0], viewMatrix[1][0], viewMatrix[2][0]);
  vec3 up = vec3(viewMatrix[0][1], viewMatrix[1][1], viewMatrix[2][1]);
  vec3 transformed = c + (right * position.x + up * position.y) * size;
  vQuad = position.xy;
  vAlpha = (i < uB3.z ? 1.0 : 0.0) * sin(3.14159265 * k) * uB3.y;
  vShade = exHash(vec2(i, cyc + 9.0));
  vPool = exPool(c.xz);
  #include <project_vertex>
  vFogDepth = -mvPosition.z;
}`,F1=()=>`
#include <common>
#include <fog_pars_fragment>
layout(location = 1) out highp vec4 pc_fragN;
${sh}
${Ju()}
uniform vec3 uColA;
uniform vec3 uColB;
varying vec2 vQuad;
varying float vAlpha;
varying float vShade;
varying float vPool;
void main() {
  float q2 = dot(vQuad, vQuad);
  if (q2 >= 1.0 || vAlpha <= 0.0) discard;
  float s = 1.0 - q2;
  float a = vAlpha * s * s;
  vec3 col = exLitPool(mix(uColA, uColB, vShade), vPool);
  float keep = 1.0 - exHaze();
  gl_FragColor = vec4(col * a * keep, a * keep);
  pc_fragN = vec4(0.0);
}`;class N1{decal;sheet;billows;materials;geometries;terrain={uH:{value:new Float32Array(wm)},uTer:{value:new ct},uPool:{value:new ct}};constructor(){const e=this.terrain,t=new Nt,i=Ht.decalSegments,s=[],r=[];for(let g=0;g<=i;g++)for(let v=0;v<=i;v++)s.push(v/i*2-1,g/i*2-1,0);for(let g=0;g<i;g++)for(let v=0;v<i;v++){const p=g*(i+1)+v;r.push(p,p+1,p+i+2,p,p+i+2,p+i+1)}t.setAttribute("position",new Ft(s,3)),t.setIndex(r);const a=Ac("jet exhaust ground","jet-exhaust-ground-1",e,{uCentre:{value:new z},uHalf:{value:new qe(1,1)},uAxis:{value:new qe(0,1)},uRing:{value:new ct},uKind:{value:0},uScourA:{value:new z},uScourB:{value:new z},uLight:{value:new ct},uGlint:{value:new ct},uWave:{value:new ct(0,1,Ht.calmCore,0)},uStreak:{value:new ct}},C1,P1());this.decal=Tc(t,a,"jet exhaust ground");const l=[],o=[];for(let g=0;g<=Ec;g++)for(let v=0;v<=mo;v++){const p=v/mo*Math.PI*2;l.push(Math.cos(p),Math.sin(p),g/Ec)}const u=mo+1;for(let g=0;g<Ec;g++)for(let v=0;v<mo;v++){const p=g*u+v;o.push(p,p+u,p+1,p+1,p+u,p+u+1)}const c=new Nt;c.setAttribute("position",new Ft(l,3)),c.setIndex(o);const f=Ac("jet exhaust outwash","jet-exhaust-sheet-1",e,{uCentre:{value:new z},uRadii:{value:new ct},uAxis:{value:new qe(0,1)},uSheet:{value:new ct},uColA:{value:new z},uColB:{value:new z}},L1,D1());this.sheet=Tc(c,f,"jet exhaust outwash");const h=new nl;h.setAttribute("position",new Ft([-1,-1,0,1,-1,0,1,1,0,-1,1,0],3)),h.setIndex([0,1,2,0,2,3]),h.instanceCount=Ht.billows;const d=Ac("jet exhaust billows","jet-exhaust-billows-1",e,{uCentre:{value:new z},uVel:{value:new z},uB:{value:new ct},uB2:{value:new ct},uB3:{value:new ct},uCap:{value:1e6},uColA:{value:new z},uColB:{value:new z}},I1,F1());this.billows=Tc(h,d,"jet exhaust billows"),this.materials=[a,f,d],this.geometries=[t,c,h]}hide(){this.decal.visible=!1,this.sheet.visible=!1,this.billows.visible=!1}dispose(){for(const e of this.materials)e.dispose();for(const e of this.geometries)e.dispose();this.decal.removeFromParent(),this.sheet.removeFromParent(),this.billows.removeFromParent()}}function pr(n,e){return n.set((e>>16&255)/255,(e>>8&255)/255,(e&255)/255)}const Mr=4,mr=16,st=n=>Number.isInteger(n)?n.toFixed(1):String(n),Kt=n=>`vec3(${st((n>>16&255)/255)}, ${st((n>>8&255)/255)}, ${st((n&255)/255)})`;function U1(){const n=[],e=[];for(let r=0;r<2;r++)for(let a=0;a<mr;a++){const l=a/mr*Math.PI*2;n.push(Math.cos(l),Math.sin(l),r)}const t=n.length/3;n.push(0,0,0);const i=n.length/3;n.push(0,0,1);for(let r=0;r<mr;r++){const a=(r+1)%mr,l=r,o=a,u=mr+r,c=mr+a;e.push(l,u,o,o,u,c),e.push(t,l,o),e.push(i,c,u)}const s=new Nt;return s.setAttribute("position",new Ft(n,3)),s.setIndex(e),s}const Pt=At.shape,Jn=At.gain,sn=At.colour,O1=Dn.shadeLevels[Dn.flatShade],k1=`
#include <common>
uniform vec4 uP[${Mr*6}];
flat varying vec4 vP0;
flat varying vec4 vP1;
flat varying vec4 vP2;
flat varying vec4 vP3;
flat varying vec4 vP4;
flat varying vec4 vP5;
flat varying vec3 vEye;
flat varying vec3 vDir;
flat varying float vOrtho;
flat varying float vInside;
varying vec3 vPos;
varying float vFogDepth;
void main() {
  int b = gl_InstanceID * 6;
  vP0 = uP[b]; vP1 = uP[b + 1]; vP2 = uP[b + 2]; vP3 = uP[b + 3]; vP4 = uP[b + 4]; vP5 = uP[b + 5];
  // The hull in the outlet's space (metres of the model; the flow runs to −z from the lip at 0).
  float zu = position.z;
  float r = mix(vP5.z, vP5.w, zu);
  vec3 h = vec3(position.xy * r, mix(vP5.x, -vP5.y, zu));
  // (An outlet with nothing to draw collapses to a point: no fragment.)
  if (!(vP0.x > 0.0)) h = vec3(0.0);
  vPos = h;
  vec3 transformed = h;
  #include <project_vertex>
  vFogDepth = -mvPosition.z;
  // The eye and the view's direction in the outlet's space (the instance matrix is a rotation and a move; the model
  // matrix carries the jet's drawn scale). A handful of vertices per instance: the inverse costs nothing here.
  mat4 toOutlet = inverse(modelMatrix * instanceMatrix);
  vEye = (toOutlet * vec4(cameraPosition, 1.0)).xyz;
  vec3 fwd = -vec3(viewMatrix[0][2], viewMatrix[1][2], viewMatrix[2][2]);
  vDir = normalize(mat3(toOutlet) * fwd);
  vOrtho = projectionMatrix[3][3] > 0.5 ? 1.0 : 0.0;
  // The eye inside this outlet's hull (its bounding cylinder): the far faces are drawn, else the near ones only.
  vInside = vOrtho < 0.5 && vEye.z < vP5.x && vEye.z > -vP5.y && length(vEye.xy) < max(vP5.z, vP5.w) ? 1.0 : 0.0;
}
`;function B1(){return`
float exHaze() {
#ifdef USE_FOG
  float x = smoothstep(fogNear, fogFar, vFogDepth);
  float n = uHazeSteps - 1.0;
  float q = x * n, b = floor(q), t = clamp((q - b - 0.5) / max(uHazeDither, 1e-3) + 0.5, 0.0, 1.0);
  ${tn()&&re.smooth.dither==="mean"?"return (b + t) / n;":"ivec2 g = ivec2(mod(floor(gl_FragCoord.xy + uDitherOrigin), 4.0)); int m[16] = int[16](0, 8, 2, 10, 12, 4, 14, 6, 3, 11, 1, 9, 15, 7, 13, 5); return (b + step((float(m[g.x + g.y * 4]) + 0.5) / 16.0, t)) / n;"}
#else
  return 0.0;
#endif
}`}const Tu=(Pt.cellTo-Pt.cellFrom)/3,Sd=(n,e,t)=>{const i=Math.min(1,Math.max(0,(t-n)/(e-n)));return i*i*(3-2*i)};function z1(){return["x","y","z","w"].map((e,t)=>{const i=Pt.cellFrom+Tu*t;return`    if (vP1.${e} > 0.0) { float c = vP1.${e} * exBlob(o, d, vec3(0.0, 0.0, -${st(i)} * L), ${st(Pt.cellAlong)} * L * vP2.${e}, ${st(Pt.cellAcross)} * R * vP2.${e}, ta, tb); eB += ${Kt(sn.cells)} * c; dB += c; }`}).join(`
`)}function G1(){const n=[];for(let e=0;e<6;e++){const t=e===0?Pt.cellFrom*.5:Pt.cellFrom+Tu*(e-.5),i=1-Sd(Pt.fadeFrom,1,t);if(!(i>0))continue;const s=Pt.sheathAcross+Pt.sheathGrow*t,r=Pt.sheathAlong*Tu*(e===0?1.4:1),a=Sd(.4,.9,t),l=e===0?"R":"B";n.push(`    {
      float i = exBlob(o, d, vec3(0.0, bend * L * ${st(t*t)}, -${st(t)} * L), ${st(r)} * L, ${st(s)} * R * (1.0 + widen), ta, tb) * ${st(i)}${e>=4?" * tail":""};
      vec3 col = ${e===0?"cCore1":`mix(cBody, cFall, ${st(a)})`};
      e${l} += col * (sheath * idleGain) * i;
      d${l} += (sheath * idleGain) * i;
    }`)}return n.join(`
`)}const H1=()=>`
#include <common>
#include <fog_pars_fragment>
layout(location = 1) out highp vec4 pc_fragN;
uniform float uHazeSteps; uniform float uHazeDither; uniform vec2 uDitherOrigin;
uniform vec3 uAmb; uniform vec3 uSun; uniform float uBNight;
uniform float uGlow;
flat varying vec4 vP0;
flat varying vec4 vP1;
flat varying vec4 vP2;
flat varying vec4 vP3;
flat varying vec4 vP4;
flat varying vec4 vP5;
flat varying vec3 vEye;
flat varying vec3 vDir;
flat varying float vOrtho;
flat varying float vInside;
varying vec3 vPos;
// (vFogDepth is fog_pars_fragment's, with the fog on.)
${B1()}

// erf, to about 5e-4 (Abramowitz and Stegun 7.1.27): smooth, monotonic, a reciprocal and a few multiplies (no exp, no
// sqrt: the special-function units are the scarce ones on a phone's GPU).
float exErf(float x) {
  float ax = abs(x);
  float p = 1.0 + ax * (0.278393 + ax * (0.230389 + ax * (0.000972 + ax * 0.078108)));
  p *= p;
  p *= p;
  return sign(x) * (1.0 - 1.0 / p);
}

// The integral along o + t d, t in [ta, tb], of a Gaussian blob centred at c (on or near the axis): exp(−(dz²/sa² + dr²/sr²)),
// over the longest such integral along this direction (√(π / A)): a ray through the blob's middle gives 1 from any angle, so
// a part reads as a soft shape of its own brightness whether seen across the plume or down it (the chase looks down it;
// the optically thin sum would make every part sa / sr times brighter end-on and wash it to white).
float exBlobAt(vec3 o, vec3 d, vec3 c, float sa, float sr, float ta, float tb, float skipAt) {
  vec3 q = o - c;
  float ia = 1.0 / (sa * sa), ir = 1.0 / (sr * sr);
  float A = d.z * d.z * ia + dot(d.xy, d.xy) * ir;
  float B = 2.0 * (q.z * d.z * ia + dot(q.xy, d.xy) * ir);
  float Cq = q.z * q.z * ia + dot(q.xy, q.xy) * ir;
  float h = B / (2.0 * A);
  // (The ray's least exponent: a part this faint along the whole ray adds nothing, so its two erf calls are skipped.)
  float least = Cq - h * h * A;
  if (least > skipAt) return 0.0;
  float peak = exp(-max(0.0, least));
  float sA = sqrt(A);
  float u0 = sA * (ta + h), u1 = sA * (tb + h);
  float span;
  // (A short stretch of a wide blob: the erf difference would cancel; the middle value times the length instead.)
  if (u1 - u0 < 0.05) span = exp(-0.25 * (u0 + u1) * (u0 + u1)) * (tb - ta);
  else span = 0.8862269 / sA * (exErf(u1) - exErf(u0));
  return peak * span * sA / 1.7724539;
}
float exBlob(vec3 o, vec3 d, vec3 c, float sa, float sr, float ta, float tb) {
  return exBlobAt(o, d, c, sa, sr, ta, tb, ${st(At.shape.skipExponent)});
}

void main() {
  float L = vP0.x;
  if (!(L > 0.0)) discard;
  // Outside the hull only its near faces are drawn, inside only its far ones: the others go before any work.
  bool inside = vInside > 0.5;
  if (gl_FrontFacing == inside) discard;
  vec3 o = vPos;
  vec3 d = vOrtho > 0.5 ? normalize(vDir) : normalize(vPos - vEye);
  // The chord through the hull's bounding cylinder and its ends, from this point (t = 0 here).
  float Rb = max(vP5.z, vP5.w) * 1.002;
  float ta = -1e6, tb = 1e6;
  float a = dot(d.xy, d.xy);
  float bq = 2.0 * dot(o.xy, d.xy);
  float cq = dot(o.xy, o.xy) - Rb * Rb;
  if (a > 1e-8) {
    float disc = bq * bq - 4.0 * a * cq;
    if (disc < 0.0) discard;
    float sq = sqrt(disc);
    ta = (-bq - sq) / (2.0 * a);
    tb = (-bq + sq) / (2.0 * a);
  } else if (cq > 0.0) discard;
  float zUp = vP5.x + 1e-3, zTail = -vP5.y - 1e-3;
  if (abs(d.z) > 1e-6) {
    float z0 = (zUp - o.z) / d.z, z1 = (zTail - o.z) / d.z;
    ta = max(ta, min(z0, z1));
    tb = min(tb, max(z0, z1));
  }
  // The eye: the chord starts no nearer than it. Inside the hull the far faces are drawn, outside the near ones only.
  float tEye = vOrtho > 0.5 ? -1e6 : -length(vPos - vEye);
  ta = max(ta, tEye);
  // The ground cut (a hover, a landing): only the gas upstream of the plane z = −cut.
  float cut = vP3.w;
  if (cut < 1e5 && abs(d.z) > 1e-6) {
    float tc = (-cut - o.z) / d.z;
    if (d.z < 0.0) tb = min(tb, tc); else ta = max(ta, tc);
  } else if (cut < 1e5 && o.z < -cut) discard;
  if (!(tb > ta)) discard;

  float R = vP0.y;
  vec3 light = vec3(0.0);
  if (vP0.w < 0.5) {
    // ── A hot outlet: the mouth, the glint, the core, the four cells and the sheath's lobes.
    float hov = vP0.z;
    float mouth = vP4.z;
    // (The colours' warmth: the mouth without the root's throttle share.)
    float warm = min(1.0, mouth / ${st(Jn.mouthCruise)});
    float widen = vP3.z;
    // Colours by the hover share (warmer, amber roots and smoky blue ends) and by idle (only the cool breath).
    vec3 cMouth = mix(${Kt(sn.mouth)}, ${Kt(sn.hoverRoot)}, hov);
    vec3 cCore0 = mix(${Kt(sn.idle)}, mix(${Kt(sn.coreHot)}, ${Kt(sn.hoverRoot)}, hov * 0.6), warm);
    vec3 cCore1 = mix(${Kt(sn.idle)}, mix(${Kt(sn.coreWarm)}, ${Kt(sn.hoverRoot)}, hov * 0.5), warm);
    vec3 cCore2 = mix(${Kt(sn.idle)}, mix(${Kt(sn.corePale)}, ${Kt(sn.hoverBody)}, hov), warm);
    vec3 cBody = mix(${Kt(sn.body)}, ${Kt(sn.hoverBody)}, hov);
    vec3 cFall = mix(${Kt(sn.falloff)}, ${Kt(sn.hoverBody)}, hov);
    float idleGain = mix(${st(Jn.idle)}, 1.0, warm);
    vec3 cLip = mix(${Kt(sn.lip)}, ${Kt(sn.hoverRoot)}, hov);
    // ── The hot root: the mouth, the lip ring (the hot liner: a wide blob less a narrow one, nothing on the axis), the
    // glint and the amber core. eR its light, dR its brightness (its colour is eR / dR).
    vec3 eR = vec3(0.0);
    float dR = 0.0;
    float pa = (${st(Jn.mouth)} * mouth) * exBlob(o, d, vec3(0.0, 0.0, ${st(Pt.mouthInset)} * R), ${st(Pt.mouthAlong)} * R, ${st(Pt.mouthAcross)} * R, ta, tb);
    eR += cMouth * pa; dR += pa;
    float lw = exBlobAt(o, d, vec3(0.0, 0.0, ${st(Pt.mouthInset)} * R), ${st(Pt.mouthAlong)} * R, ${st(Pt.lipOuter)} * R, ta, tb, ${st(Pt.skipExponent+Math.log(Jn.lip))});
    float ln = lw > 0.0 ? exBlobAt(o, d, vec3(0.0, 0.0, ${st(Pt.mouthInset)} * R), ${st(Pt.mouthAlong)} * R, ${st(Pt.lipInner)} * R, ta, tb, 1e6) : 0.0;
    pa = ${st(Jn.lip)} * mouth * max(0.0, lw - ln);
    eR += cLip * pa; dR += pa;
    pa = (${st(Jn.glint)} * mouth) * exBlob(o, d, vec3(0.0, 0.0, -0.05 * R), ${st(Pt.glintAlong)} * R, ${st(Pt.glintAcross)} * R, ta, tb);
    eR += ${Kt(sn.glint)} * pa; dR += pa;
    float coreA = ${st(Pt.coreAlong)} * L;
    float coreR = ${st(Pt.coreAcross)} * R;
    pa = (${st(Jn.core)} * 0.75 * idleGain) * exBlob(o, d, vec3(0.0, 0.0, -${st(Pt.coreAt[1])} * L), coreA, coreR * 1.1, ta, tb);
    eR += cCore1 * pa; dR += pa;
    // ── The white-hot centre: tight, added on top (it carries the glow).
    vec3 hot = cCore0 * (${st(Jn.hot)} * idleGain) * exBlob(o, d, vec3(0.0, 0.0, -${st(Pt.coreAt[0])} * L), coreA, ${st(Pt.coreHotAcross)} * R, ta, tb);
    // ── The body: the pale core, the four cells (standing, evenly spaced; their brightness and width from the CPU:
    // zones, decay, the pulse) and the sheath's lobes below. eB its light, dB its brightness.
    vec3 eB = vec3(0.0);
    float dB = 0.0;
    pa = (${st(Jn.core)} * 0.45 * idleGain) * exBlob(o, d, vec3(0.0, 0.0, -${st(Pt.coreAt[2])} * L), coreA * 1.3, coreR * 1.25, ta, tb);
    eB += cCore2 * pa; dB += pa;
${z1()}
    // The sheath: lobes round and between the cells (it pinches at each cell and swells between), blue to blue-violet,
    // brightening with throttle, widening with the bloom, feathering out over the last stretch; the tip bends with the
    // pulse, and its outer third flickers (smooth noise in u and t: undulations run along it).
    float sheath = vP3.x;
    float bend = vP4.x;
    float ft = vP4.y;
    // (The ray's nearest point to the axis, for the flicker's place.)
    float tn = a > 1e-8 ? clamp(-dot(o.xy, d.xy) / a, ta, tb) : 0.5 * (ta + tb);
    float un = clamp(-(o.z + tn * d.z) / L, 0.0, 1.2);
    float fl = (sin(6.2831853 * (3.0 * un - ${st(At.motion.flickerHz)} * ft)) * 0.6 + sin(6.2831853 * (5.3 * un - ${st(At.motion.flickerHz*1.37)} * ft + 0.37)) * 0.4);
    float tail = 1.0 + ${st(At.motion.flickerAcross)} * fl * smoothstep(0.62, 0.9, un);
${G1()}
    // Each group: its own colour, covering by its density; the nearer covers the farther (the eye downstream of the
    // mouth sees the body first). Glow of their own colour on top; the white-hot centre added.
    float aR = 1.0 - exp(-dR * vP3.y * ${st(Jn.rootDensityShare)});
    float aB = 1.0 - exp(-dB * vP3.y);
    vec3 cR = dR > 1e-5 ? eR / dR : vec3(0.0);
    vec3 cB = dB > 1e-5 ? eB / dB : vec3(0.0);
    float wB = smoothstep(-${st(Pt.orderBlend)}, ${st(Pt.orderBlend)}, d.z);
    vec3 col = mix(cR * aR + cB * aB * (1.0 - aR), cB * aB + cR * aR * (1.0 - aB), wB);
    float alpha = aR + aB - aR * aB;
    light = col * (1.0 + uGlow) + hot;
    // The light's largest channel through a knee (hue kept: the others follow in proportion), then the haze and the gains.
    float m = max(max(light.r, light.g), light.b);
    float k0 = ${st(Jn.knee)};
    float fm = m <= k0 ? m : k0 + (1.0 - k0) * (1.0 - exp(-(m - k0) / (1.0 - k0)));
    light *= m > 1e-5 ? fm / m : 0.0;
    float keep = 1.0 - exHaze() * ${st(Jn.hazeShare)};
    float gain = vP4.w;
    gl_FragColor = vec4(light * keep * gain, alpha * keep * gain);
  } else {
    // ── A cold vent: pale air, lit by the hour, no glow; one blob at the exit and one longer one down the flow.
    float i0 = exBlob(o, d, vec3(0.0, 0.0, -0.2 * L), 0.25 * L, R, ta, tb);
    float i1 = exBlob(o, d, vec3(0.0, 0.0, -0.6 * L), 0.35 * L, R * 1.6, ta, tb);
    float ft = vP4.y;
    float fl = 1.0 + ${st(At.vents.flickerShare)} * sin(6.2831853 * ${st(At.motion.flickerHz)} * ft);
    float t2 = (i0 + i1 * 0.7) * fl;
    float alpha = (1.0 - exp(-t2)) * vP3.y;
    vec3 col = mix(${Kt(At.vents.colourNear)}, ${Kt(At.vents.colourFar)}, i1 / max(i0 + i1, 1e-5));
    vec3 lit = col * min(uAmb + uSun * ${st(O1)} + uBNight * ${st(re.plain.actorNightLift)}, vec3(1.0));
    float keep = 1.0 - exHaze();
    gl_FragColor = vec4(lit * alpha * keep, alpha * keep);
  }
  pc_fragN = vec4(0.0);
}
`;class W1{mesh;material;params;vecs;constructor(e,t){this.params=new Float32Array(Mr*Cc),this.vecs=Array.from({length:Mr*6},()=>new ct);const i={...el.clone(ke.fog),uP:{value:this.vecs},uGlow:{value:0},uHazeSteps:It.uHazeSteps,uHazeDither:It.uHazeDither,uDitherOrigin:It.uDitherOrigin,uAmb:It.uAmb,uSun:It.uSun,uBNight:It.uBNight,...ni},s=new cn({name:"jet exhaust",uniforms:i,vertexShader:js(k1),fragmentShader:H1(),fog:!0,transparent:!0,depthWrite:!1,depthTest:!0,side:jn,forceSinglePass:!0,blending:Pu,blendSrc:da,blendDst:Tr,blendSrcAlpha:da,blendDstAlpha:Tr});s.customProgramCacheKey=()=>t,this.material=rl(s),this.mesh=new ei(e,this.material,Mr),this.mesh.name="jet exhaust",this.mesh.layers.set(Wn.actors),this.mesh.castShadow=!1,this.mesh.receiveShadow=!1,this.mesh.frustumCulled=!1,this.mesh.visible=!1,this.mesh.count=Mr}commit(){const e=this.params;for(let t=0;t<this.vecs.length;t++)this.vecs[t].set(e[t*4],e[t*4+1],e[t*4+2],e[t*4+3]);this.mesh.instanceMatrix.needsUpdate=!0,this.material.uniformsNeedUpdate=!0}setMatrix(e,t){this.mesh.setMatrixAt(e,t)}dispose(){this.material.dispose(),this.mesh.removeFromParent(),this.mesh.dispose()}}const V1="jet-exhaust-plume-1";function bm(n,e,t){const i=n.size,s=Math.min(i-1.001,Math.max(0,e-.5)),r=Math.min(i-1.001,Math.max(0,t-.5)),a=Math.floor(s),l=Math.floor(r),o=s-a,u=r-l,c=n.ground,f=l*i+a,h=c[f]+(c[f+1]-c[f])*o,d=c[f+i]+(c[f+i+1]-c[f+i])*o;return(h+(d-h)*u)*n.meta.heightUnitMetres}const $1=new Set([ds.Paved,ds.RoadMinor,ds.RoadMajor,ds.Runway,ds.Pier,ds.Urban]),X1=1e6,q1=Math.max(Ti.particles.outwash.lifeMaxSec,Ti.particles.outwash.rippleLifeSec);function yd(n,e){return e.z-bm(n,e.x,e.y)>At.ground.roofAboveM}const go=new z(1,0,0),wd=new z(0,0,1),bd=new z(0,0,-1);function Y1(n){const e={plumes:0,outlets:0,vents:0,ground:0,surface:null,billows:0,reflection:!1,groundX:NaN,groundY:NaN,heightM:NaN},t=U1(),i=Array.from({length:Hn.jet.instances},()=>({plume:new W1(t,V1),bone:null,pose:null,nozzleRad:0,fade:1,own:0,night:0})),s=new Fb;let r=!1;const a=new WeakMap,l=oe=>{let ye=a.get(oe);if(ye===void 0){const pe=oe.getObjectByName("airframe");ye=pe instanceof Zo?pe:null,a.set(oe,ye)}return ye},o=Dt.bones.find(oe=>oe.name==="nozzles"),u=new z(...o.pivot),c=Dt.exits.map(oe=>new z(oe[0],oe[1],oe[2])),f=Ud(),h=Dt.unitMetres,d=nh(),g=f.coldVents.map(oe=>new z(-(oe.x-f.pivot.x)*h,(oe.z-f.pivot.z)*h+d,(oe.y-f.pivot.y)*h)),v=c.map(oe=>oe.x<0),p=new et,m=new et,y=new et,_=new et,w=new z,S=new z,M=_0(),x=S0(),b=new ei(t,i[0].plume.material,Mr);b.frustumCulled=!1,b.layers.mask=i[0].plume.mesh.layers.mask;const A=At.ground,E=Ti.particles.ring,P=Ti.particles.outwash,R=new N1;n.scene&&n.scene.add(R.decal,R.sheet,R.billows);const D={x:0,y:0},C={x:0,y:0,z:0},I={x:0,y:0,z:0};let U=null;const O={ex:null,bone:null,gv:null,frame:null},W=new z,k=new z,G=At.shimmer;let Z=null,me=null;const le={on:!1,x:0,y:0,w:0,h:0,exitX:0,exitY:0,tipX:0,tipY:0},q=new z,$=new z,K={x:0,y:0,inFront:!1},j={x:0,y:0,inFront:!1},V={x:0,y:0,inFront:!1},B=()=>{const oe=xi;oe.uShim.value.z=0,le.on=!1;const ye=Z,pe=me;if(Z=null,me=null,!G.on||!ye||!pe||!ye.world||!(pe.outW>0)||!(pe.outH>0))return;const ne=i[0],Ie=ne.bone?ne.pose:null;if(Ie&&Ie.calm)return;const De=ye.world.meta.cellMetres,Me=Ie?ne.own:0,We=ye.shimmer;let Ve,Y,N,Te,Ee,Be;if(!!Ie&&!!ne.bone&&ne.plume.mesh.visible&&ne.plume.params[0]>0&&Ie&&ne.bone){const Se=Ie.hover>=G.hoverFrom,H=Math.min(1,Math.max(0,(Ie.stage-G.boost.fromStage)/(1-G.boost.fromStage)));if(Ve=Se?We?Math.min(1,We.level):0:1,Y=Se?1:Math.max(H,We?Math.min(1,We.level):0),!(Ve>0&&Y>0))return;const fe=ne.bone,ae=fe.matrixWorld.getMaxScaleOnAxis(),Re=ne.plume.params,we=Re[0];m.makeRotationAxis(go,-ne.nozzleRad),y.makeRotationAxis(wd,-Ie.nozzleYawRad),w.copy(c[0]).add(c[1]).multiplyScalar(.5).applyMatrix4(m).add(u),p.multiplyMatrices(y,m).setPosition(w),_.multiplyMatrices(fe.matrixWorld,p),q.set(0,0,-we*(Se?0:G.boost.fromShare)).applyMatrix4(_),$.set(0,0,-we*(1+G.boost.pastShare)).applyMatrix4(_),N=(Re[23]*G.boost.widthShare+Math.abs(c[0].x-c[1].x)/2)*ae,Ee=At.lengthMetres*ae,Te=Ee*G.depthMarginShare,Be=-(pe.view.elements[2]*fe.matrixWorld.elements[12]+pe.view.elements[6]*fe.matrixWorld.elements[13]+pe.view.elements[10]*fe.matrixWorld.elements[14]+pe.view.elements[14])+Ee*G.jetFarShare}else if(We&&We.level>0)zo(pe,D),an(pe.origin,De,We.exit.x+D.x,We.exit.y+D.y,We.exit.z,C),q.set(C.x,C.y,C.z),an(pe.origin,De,We.tip.x+D.x,We.tip.y+D.y,We.tip.z,C),$.set(C.x,C.y,C.z),Ve=Math.min(1,We.level),Y=1,N=We.halfWidthCells*De,Ee=2*We.halfWidthCells/Ti.shimmer.widthSpans*De,Te=Ee*G.depthMarginShare,Be=0;else return;if(Kl(pe,q.x,q.y,q.z,Me,K),Kl(pe,$.x,$.y,$.z,Me,j),!K.inFront||!j.inFront)return;const rt=pe.view.elements;Kl(pe,q.x+rt[0]*N,q.y+rt[4]*N,q.z+rt[8]*N,Me,V);const Le=Math.max(1,Math.hypot(V.x-K.x,V.y-K.y)),ze=pe.outW,F=pe.outH;let T=Math.min(K.x,j.x)-Le,J=Math.max(K.x,j.x)+Le,ve=Math.min(K.y,j.y)-Le,de=Math.max(K.y,j.y)+Le;if(J-T>ze*G.maxFrameShare){const Se=(T+J)/2;T=Se-ze*G.maxFrameShare/2,J=Se+ze*G.maxFrameShare/2}if(de-ve>F*G.maxFrameShare){const Se=(ve+de)/2;ve=Se-F*G.maxFrameShare/2,de=Se+F*G.maxFrameShare/2}if(J<=0||de<=0||T>=ze||ve>=F)return;const be=-(rt[2]*q.x+rt[6]*q.y+rt[10]*q.z+rt[14]),Ae=-(rt[2]*$.x+rt[6]*$.y+rt[10]*$.z+rt[14]);oe.uShimRect.value.set(T/F,ve/F,J/F,de/F),oe.uShimAxis.value.set(K.x/F,K.y/F,j.x/F,j.y/F),oe.uShimDepth.value.set(Math.min(be,Ae)+Te,Ve,Y,Math.max(Math.min(be,Ae)+Ee*G.objectsBeyondLengths,Be)),oe.uShimRamp.value=Ee*G.depthRampShare,oe.uShim.value.y=M0(Ie?Ie.timeSec:ye.timeSec),oe.uShim.value.z=1;const ue=pe.toGridX,he=pe.toGridY;le.on=!0,le.x=T*ue,le.y=ve*he,le.w=(J-T)*ue,le.h=(de-ve)*he,le.exitX=K.x*ue,le.exitY=K.y*he,le.tipX=j.x*ue,le.tipY=j.y*he};let te=Number.NEGATIVE_INFINITY;const ee=(oe,ye)=>{const pe=oe.world;if(yd(pe,ye))return"paving";const ne=bh(pe,ye.x,ye.y),Ie=Ah(ne);return Ie==="spray"?"water":ye.street===Eh.road||ye.street===Eh.foot?"paving":Ie==="sand"?"sand":Ie==="grass"?"grass":$1.has(ne)?"paving":s0(ne)==="dust"?"dust":"paving"},ce=(oe,ye,pe)=>{const ne=pe.ground;if(!(ne.ring>0||ne.light>0||ne.outwash>0))return;const Ie=oe.world,De=Ie.meta.cellMetres,Me=ee(oe,ne),We=A.surfaces[Me];e.surface=Me,e.groundX=ne.x,e.groundY=ne.y,e.heightM=ne.heightM,zo(ye,D);const Ve=ne.mapShare,Y=n0(ne.heightM,ne.sizeK,De)*De,N=(Y/De+(ne.spanCells/2*E.mapSpanShare-Y/De)*Ve)*De,Te=i0(ne.heightM,ne.sizeK,De)*De*ne.light,Ee=A.glintMetres*ne.sizeK,Be=pe.calm?0:pe.timeSec,xe=Number.isFinite(oe.timeOfDay)?Math.max(0,Math.min(1,vo(oe.timeOfDay))):0,Le=R.decal.material.uniforms;an(ye.origin,De,ne.x+D.x,ne.y+D.y,ne.z+E.liftM+Math.max(0,ne.heightM-E.mapBelowM)*Ve,C),Le.uCentre.value.set(C.x,C.y,C.z);const ze=Math.sin(ne.heading),F=-Math.cos(ne.heading);Le.uAxis.value.set(ze,F);const T=A.decalReach,J=Math.max(ne.ring>0||Ve>0?N*T.ring:0,Te*T.light+Math.hypot(ne.lightX-ne.x,ne.lightY-ne.y)*De,Ee*T.glint);Le.uHalf.value.set(J,J);const ve=ne.outwash>0&&!(Ve>0),de=Math.min(1,ne.blowSec/Math.max(.001,A.sprayBuildSec)),be=Me==="water"?Math.max(A.sheetOuter*Y,A.sprayReachSpans*ne.spanCells*De*de):A.sheetOuter*Y,Ae=R.terrain;if(Me==="water"||Ve>0||yd(Ie,ne))Ae.uTer.value.set(0,0,1,0);else{const $e=Math.max(J*Math.SQRT2,ve?be:0),ht=A.terrainNodes,_e=2*$e/(ht-1)/De,Ze=Ae.uH.value;for(let ut=0;ut<ht;ut++)for(let Fe=0;Fe<ht;Fe++)Ze[ut*ht+Fe]=bm(Ie,ne.x+D.x-$e/De+Fe*_e,ne.y+D.y-$e/De+ut*_e)+E.liftM;an(ye.origin,De,ne.x+D.x,ne.y+D.y,0,I),Ae.uTer.value.set(I.x,I.z,$e,1)}Le.uRing.value.set(N,ne.ring,A.bandWidth*N,A.scourAlpha*We.scour);const he=Me==="paving"?"dust":Me;Le.uKind.value=T1.indexOf(Me);const Se=E[he];pr(Le.uScourA.value,Se[0]),pr(Le.uScourB.value,Se[1]);const H=(ne.lightX-ne.x)*De,fe=(ne.lightY-ne.y)*De,ae=ne.light>0?Math.min(1,ne.light):0;Le.uLight.value.set(H*F-fe*ze,H*ze+fe*F,Te,ae),an(ye.origin,De,ne.lightX+D.x,ne.lightY+D.y,0,I),Ae.uPool.value.set(I.x,I.z,Te,ae);const Re=(ne.outwash>0?ne.outwash:ne.ring*A.glintRingShare)*(A.glintDay+(A.glintNight-A.glintDay)*xe);Le.uGlint.value.set(Ee,Re,0,0);const we=(Me==="grass"?A.grassWaveMetres:A.rippleMetres)*ne.sizeK,Pe=Be*P.rippleSpeedMps*ne.sizeK/we;if(Le.uWave.value.set(Pe-Math.floor(Pe),we,A.calmCore,0),Le.uStreak.value.set(0,0,0,0),R.decal.visible=!0,e.ground++,ve){const $e=R.sheet.material.uniforms,ht=A.sheetInner*Y,_e=Number.isFinite(ne.capZ)?Math.max(0,ne.capZ-ne.z):X1,Ze=Math.min(A.lipMetres*ne.sizeK*We.rise,_e);an(ye.origin,De,ne.x+D.x,ne.y+D.y,ne.z+E.liftM,C),$e.uCentre.value.set(C.x,C.y,C.z),$e.uRadii.value.set(ht,be,Ze,Ze*A.fountain),$e.uAxis.value.set(ze,F);const ut=A.noiseAlong*Math.max(1,be/Math.max(Y,.001)),Fe=Be*P.speedMps*ne.sizeK*A.noiseAlong/Math.max(Y,.001),Rt=Fe-Math.floor(Fe/Bs)*Bs;$e.uSheet.value.set(A.sheetAlpha*ne.outwash*We.sheet,Rt,ut,0);const qt=Me==="grass"?A.grassColours:P[Me==="water"?"spray":Me==="sand"?"sand":"dust"].colours;pr($e.uColA.value,qt[0]),pr($e.uColB.value,qt[1]),R.sheet.visible=!0,e.ground++;const Vn=Math.round(A.billows*We.billows*Math.min(1,ne.outwash*A.countGain));if(Vn>0){const ii=R.billows.material.uniforms;ii.uCentre.value.set(C.x,C.y,C.z),ii.uVel.value.set(ne.vx*De,0,ne.vy*De);const Nr=Me==="water"?A.waterLifeSec:A.lifeSec;ii.uB.value.set(E.innerShare*Y,P.speedMps*ne.sizeK,P.dragPerSec,be),ii.uB2.value.set(Nr,Math.max(Ze*A.riseShare,A.minRiseM*ne.sizeK),A.bornMetres*ne.sizeK,A.grownMetres*ne.sizeK);const pl=Be-Math.floor(Be/A.clockWrapSec)*A.clockWrapSec;ii.uB3.value.set(pl,A.billowAlpha*ne.outwash,Vn,Me==="water"?1:0),ii.uCap.value=_e,pr(ii.uColA.value,qt[0]),pr(ii.uColB.value,qt[1]),R.billows.geometry.instanceCount=Vn,R.billows.visible=!0,e.ground++,e.billows=Vn}}},Ce=()=>{if(!U)return;const{ex:oe,bone:ye,gv:pe,frame:ne}=U;if(U=null,R.decal.visible||pe.ortho||!(oe.thrust>0)||oe.hover>A.reflect.maxHover)return;const Ie=Number.isFinite(ne.timeOfDay)?Math.max(0,Math.min(1,vo(ne.timeOfDay))):0;if(!(Ie>Ti.particles.light.fromDark))return;const De=ne.world,Me=De.meta.cellMetres,We=ye.matrixWorld.getMaxScaleOnAxis();_.multiplyMatrices(ye.matrixWorld,p.copy(m.makeRotationAxis(go,-oe.nozzleRad)).setPosition(u)),W.set(0,0,0).applyMatrix4(_),k.copy(bd).transformDirection(_);const Ve=i[0].plume.params[0]*We;if(!(Ve>0)||(W.addScaledVector(k,Ve*.5),ly(pe.origin,Me,W.x,W.y,W.z,I),Ah(bh(De,I.x,I.y))!=="spray"))return;const Y=r0(De,I.x,I.y),N=At.lengthMetres*We,Te=(W.y-Y)/Math.max(N,.001),Ee=1-Math.min(1,Math.max(0,(Te-A.reflectFullLengths)/Math.max(.001,A.reflectFromLengths-A.reflectFullLengths)));if(!(Ee>0))return;const Be=R.decal.material.uniforms,xe=k.x,rt=k.z,Le=Math.hypot(xe,rt);if(!(Le>.001))return;an(pe.origin,Me,I.x,I.y,Y+E.liftM,C);const ze=C.x-xe/Le*Ve*.5,F=C.z-rt/Le*Ve*.5,T=A.reflect;Be.uCentre.value.set(ze,C.y,F),Be.uAxis.value.set(xe/Le,rt/Le),Be.uHalf.value.set(Math.max(Ve*T.width,T.widthMinM),Ve*T.length);const J=A.rippleMetres*Math.max(1,We),ve=(oe.calm?0:oe.timeSec)*P.rippleSpeedMps/J;Be.uWave.value.set(ve-Math.floor(ve),J,A.calmCore,0),Be.uStreak.value.set(Ve,Math.max(Ve*T.streak,T.streakMinM),A.reflectAlpha*Ee*Ie*Math.max(oe.stage,T.stageFloor),1),R.terrain.uTer.value.set(0,0,1,0),R.terrain.uPool.value.set(0,0,1,0),Be.uRing.value.set(0,0,0,0),Be.uLight.value.set(0,0,0,0),Be.uGlint.value.set(1,0,0,0),R.decal.visible=!0,e.reflection=!0};return{update(oe,ye,pe){e.plumes=0,e.outlets=0,e.vents=0,e.ground=0,e.surface=null,e.billows=0,e.reflection=!1,e.groundX=NaN,e.groundY=NaN,e.heightM=NaN,r=!1,U=null,Z=At.on?oe:null,me=ye,R.hide(),s.clear();for(const Me of i)Me.pose=null,Me.bone=null,Me.plume.mesh.visible=!1;if(!At.on||!pe)return;const ne=Number.isFinite(oe.timeOfDay)?Math.max(0,Math.min(1,vo(oe.timeOfDay))):0;let Ie=0;const De=pe.poses;for(let Me=0;Me<De.length;Me++){const We=De[Me];if(We.kind!=="jetBody"||!We.jet)continue;const Ve=We.jet,Y=Ve.exhaust;if(!Y||Ie>=i.length)continue;const N=n.heroes.drawn(We.object);if(!N||!N.visible)continue;const Te=l(N);if(!Te)continue;const Ee=i[Ie++],Be=oe.objects[We.object];Ee.bone=Te,Ee.pose=Y,Ee.nozzleRad=Number.isFinite(Ve.nozzleRad)?Ve.nozzleRad:Y.nozzleRad,Ee.fade=Be&&Be.fade!==void 0?Math.max(0,Math.min(1,Be.fade)):1,Ee.own=Be&&Be.subject!==void 0&&Be.subject>0?Math.min(1,Be.subject):0,Ee.night=ne,Ee.plume.material.uniforms.uGlow.value=At.gain.glowDay+(At.gain.glowNight-At.gain.glowDay)*ne,Ee.plume.mesh.parent!==Te&&Te.add(Ee.plume.mesh),Ee.plume.mesh.visible=!At.proof.hide;const xe=_a(Ee.plume.material);xe&&(xe.value=Ee.own),e.plumes++}if(Ie>0){let Me=!1;for(let Y=0;Y<Ie;Y++)(i[Y].pose?.vents??0)>0&&(Me=!0);s.action[Jm]=Wi,s.action[Qm]=Me?Wi:$o;const We=i[0].pose;oe.world&&n.scene&&ce(oe,ye,We),e.ground>0?(s.action[vh]=Wi,s.action[Mh]=Wi,s.action[e0]=Wi,s.action[t0]=Wi,te=We.timeSec,At.proof.hideGround&&R.hide()):We.timeSec-te>=0&&We.timeSec-te<q1&&(s.action[vh]=Wi,s.action[Mh]=Wi);const Ve=At.soft;s.action[_h]=na,s.scale[_h]=Ve.trail,s.action[Sh]=na,s.scale[Sh]=Ve.vapour,s.action[yh]=na,s.scale[yh]=Ve.puff,s.action[wh]=na,s.scale[wh]=Ve.burst,e.ground===0&&oe.world&&n.scene&&(O.ex=We,O.bone=i[0].bone,O.gv=ye,O.frame=oe,U=O),r=!0}},prepare(){for(const oe of i){const ye=oe.pose,pe=oe.bone;if(!ye||!pe||!oe.plume.mesh.visible)continue;const ne=oe.plume,Ie=ne.params,De=pe.matrixWorld.getMaxScaleOnAxis();m.makeRotationAxis(go,-oe.nozzleRad),y.makeRotationAxis(wd,-ye.nozzleYawRad);for(let Me=0;Me<2;Me++){w.copy(c[Me]).applyMatrix4(m).add(u),p.multiplyMatrices(y,m).setPosition(w),ne.setMatrix(Me,p);let We=1/0;Number.isFinite(ye.groundZ)&&(_.multiplyMatrices(pe.matrixWorld,p),w.setFromMatrixPosition(_),S.copy(bd).transformDirection(_),S.y<-.001&&De>0&&(We=Math.max(0,(w.y-ye.groundZ)/-S.y/De/At.lengthMetres))),M.thrust=ye.thrust,M.stage=ye.stage,M.hover=ye.hover,M.surge=ye.surge,M.bloom=ye.bloom,M.cutShare=We,M.pulseSec=ye.timeSec,M.flickerSec=ye.timeSec-(v[Me]?At.motion.rightOffsetMs/1e3:0),M.night=oe.night,M.fade=oe.fade,M.calm=ye.calm,x0(M,Ie,Me*Cc)>0&&e.outlets++}m.makeRotationAxis(go,ye.ventLeanRad-Math.PI/2);for(let Me=0;Me<2;Me++)p.copy(m).setPosition(g[Me]),ne.setMatrix(2+Me,p),x.on=ye.vents,x.swell=ye.ventSwell,x.flickerSec=ye.timeSec+Me*.071,x.fade=oe.fade,x.calm=ye.calm,v0(x,Ie,(2+Me)*Cc)>0&&e.vents++;ne.commit()}Ce(),B()},shimmerPlaced(){return le.on?le:null},get particleLook(){return r?s:null},warmMeshes(){if(!At.on)return[];const oe=[b];for(const ye of[R.decal,R.sheet,R.billows]){const pe=ye.clone();pe.visible=!0,oe.push(pe)}return oe},onLost(){},onRestored(){},dispose(){for(const oe of i)oe.plume.dispose();R.dispose(),b.dispose(),t.dispose()},info:e}}const Wt=1024*1024,qo={budgets:{lite:{referenceDevices:["Galaxy S9+ (Mali-G72)"],initialDownloadBytes:4*Wt,areaDownloadBytes:14.4*Wt,totalDownloadBytes:40*Wt,residentGpuBytes:48*Wt,pageGpuBytes:192*Wt,cpuHeapBytes:16*Wt,frameMs:2,frameMsByFamily:{trees:1,people:.4,traffic:.3,props:.3},drawCalls:48,triangles:4e5,streamMainThreadMsPerFrame:1},smoothB:{referenceDevices:["iPhone 16 Pro Max","Galaxy Tab S10+"],initialDownloadBytes:6*Wt,areaDownloadBytes:26.4*Wt,totalDownloadBytes:80*Wt,residentGpuBytes:96*Wt,pageGpuBytes:320*Wt,cpuHeapBytes:32*Wt,frameMs:3,frameMsByFamily:{trees:1.5,people:.6,traffic:.5,props:.4},drawCalls:80,triangles:16e5,streamMainThreadMsPerFrame:1.5},cinematic:{referenceDevices:["iPhone 16 Pro Max","Galaxy Tab S10+"],initialDownloadBytes:8*Wt,areaDownloadBytes:26.4*Wt,totalDownloadBytes:80*Wt,residentGpuBytes:128*Wt,pageGpuBytes:448*Wt,cpuHeapBytes:32*Wt,frameMs:4,frameMsByFamily:{trees:2,people:.8,traffic:.7,props:.5},drawCalls:120,triangles:25e5,streamMainThreadMsPerFrame:2}},stream:{lite:{uploadBytesPerFrame:.5*Wt,prefetchLeadSec:24,assumedBytesPerSec:.75*Wt,linkShareForAssets:.8,maxAreasResident:2},smoothB:{uploadBytesPerFrame:1*Wt,prefetchLeadSec:22,assumedBytesPerSec:1.5*Wt,linkShareForAssets:.8,maxAreasResident:2},cinematic:{uploadBytesPerFrame:2*Wt,prefetchLeadSec:22,assumedBytesPerSec:1.5*Wt,linkShareForAssets:.8,maxAreasResident:2}},alwaysSet:["walker-hi3d","car-hi3d","jet-hi3d","people-ernie","people-leo","people-mira","people-tess","hi3d-people","hi3d-static"]};function j1(n,e=Yo.families){for(const[t,i]of e)if(n.startsWith(t))return i;throw new Error(`asset ${n}: no family in ASSETS_RUNTIME.families`)}function K1(n,e,t,i){return new URL(`${e}${t}/${i.name}?v=${i.hash}`,n).href}function Z1(n){const e=Yo;let t=!1,i=null;const s=new Map,r=new Map,a=[],l=new Set,o={loads:0,failures:0,fromCache:0,fetchMs:0,decodeMs:0};let u=[],c=0,f=0,h=null,d=1;const g=new Map,v=_=>{if(t||!i)return;const w=i.packs[_];if(!w)return;h||(h=n.makeWorker(),h.onmessage=M=>p(M.data));const S=d++;g.set(S,_),s.set(_,"loading"),h.postMessage({id:S,name:_,family:w.family,files:w.files.map(M=>({name:M.name,url:K1(n.base,e.packsPath,_,M)})),cacheName:`${e.cacheName}-${i.build}`,textures:e.textures,raw:Object.keys(e.packExtras[_]??{})})},p=_=>{const w=g.get(_.id);if(g.delete(_.id),t||w===void 0)return;if(_.ok){o.loads++,o.fromCache+=_.fromCache,o.fetchMs+=_.fetchMs,o.decodeMs+=_.decodeMs,s.set(w,"decoded"),u.includes(w)&&(f+=i.packs[w].bytes),a.push(_.pack),y.onDecoded?.();return}o.failures++;const S=(r.get(w)??0)+1;if(r.set(w,S),S>e.retryMax){s.set(w,"failed"),u.includes(w)&&(f+=i.packs[w].bytes),y.onDecoded?.();return}s.set(w,"queued");const M=n.setTimeout(()=>{l.delete(M),v(w)},e.retryFirstMs*2**(S-1));l.add(M)},m=n.fetchManifest(new URL(`${e.packsPath}${e.manifest}`,n.base).href).then(_=>{if(t)return null;i=_,n.clearOldCaches?.(`${e.cacheName}-`,`${e.cacheName}-${_.build}`);const w=x=>x in _.packs;u=(e.gate[n.tier]==="always"?qo.alwaysSet:e.firstFrame).filter(w),c=u.reduce((x,b)=>x+_.packs[b].bytes,0);const M=qo.alwaysSet.filter(x=>w(x)&&!u.includes(x));for(const x of[...u,...M])j1(x),s.set(x,"queued"),v(x);return _}).catch(()=>null),y={share:()=>c>0?Math.min(1,f/c):0,cancel(){t=!0;for(const _ of l)n.clearTimeout(_);l.clear(),h?.terminate(),h=null,a.length=0},get gated(){return u},manifestRead:m,take:()=>a.shift()??null,onDecoded:null,state:_=>s.get(_),request(_){for(const w of _)s.set(w,"queued"),v(w)},stats:o};return y}const J1=new Uint8Array(0),Q1=new Uint16Array(0);function eE(n,e,t,i){return Math.max(i,Math.min(n,Math.floor(t/Math.max(1,e))))}function tE(n,e,t,i){let s=n*e*t;if(!i)return s;for(;n>1||e>1;)n=Math.max(1,n>>1),e=Math.max(1,e>>1),s+=n*e*t;return s}function Ed(){this.array=null}class nE{target=new on(1,1,{depthBuffer:!1});camera=new Ws(-1,1,1,-1,0,1);material=new Ko({colorWrite:!1,depthWrite:!1,depthTest:!1});mesh=new vt(new Nt,this.material);constructor(){this.mesh.frustumCulled=!1,this.mesh.matrixAutoUpdate=!1}upload(e,t){const i=e.getRenderTarget();this.mesh.geometry=t,t.setDrawRange(0,0),e.setRenderTarget(this.target);try{e.render(this.mesh,this.camera)}finally{e.setRenderTarget(i),t.setDrawRange(0,1/0)}}dispose(){this.target.dispose(),this.material.dispose()}}class iE{constructor(e,t,i,s,r){this.pack=e;const a={name:e.name,family:e.family,meshes:[],textures:{},json:e.json,raw:e.raw,gpuBytes:0};this.ready=a;for(const l of e.textures){const o=l.channels===1?$s:l.channels===2?xs:On,u=new Kn(null,l.width,l.height,o,ln);u.colorSpace=l.srgb?Sn:di,u.generateMipmaps=l.mips,u.mipmapsAutoUpdate=!1,u.minFilter=l.mips?ti:Xt,u.magFilter=Xt,u.unpackAlignment=l.channels<4?1:4,u.name=`${e.name} ${l.file}`,u.source.dataReady=!1,u.needsUpdate=!0,a.textures[l.file]=u,a.gpuBytes+=tE(l.width,l.height,l.channels,l.mips),this.steps.push({bytes:0,run:()=>t.initTexture(u)});const c=l.width*l.channels,f=eE(l.height,c,s,r);let h=l.data;for(let d=0;d<l.height;d+=f){const g=d,v=Math.min(f,l.height-d),p=d+v>=l.height;this.steps.push({bytes:v*c,run:()=>{const m=new Kn(h.subarray(g*c,(g+v)*c),l.width,v,o,ln);m.unpackAlignment=u.unpackAlignment,m.colorSpace=u.colorSpace,p&&(u.mipmapsAutoUpdate=!0),t.copyTextureToTexture(m,u,null,new qe(0,g)),p&&(h=null,l.data=J1)}})}}for(const l of e.meshes){const o=[];for(const u of l.levels){const c=new Nt;let f=u.index.byteLength;for(const d of u.attributes)c.setAttribute(d.name,new nt(d.array,d.itemSize,d.normalized).onUpload(Ed)),f+=d.array.byteLength;c.setIndex(new nt(u.index,1).onUpload(Ed)),c.boundingSphere=new kn,c.boundingBox=new es,c.computeBoundingBox(),c.computeBoundingSphere(),c.name=`${e.name} ${l.file} ${u.name}`,a.gpuBytes+=f;const h=Yo.keepCpu[e.name]?.includes(u.name)===!0;o.push({name:u.name,geometry:c,scale:u.scale,offset:u.offset,cpu:h?{attributes:u.attributes.map(d=>({name:d.name,array:d.array,itemSize:d.itemSize,normalized:d.normalized})),index:u.index}:void 0}),this.steps.push({bytes:f,run:()=>{i.upload(t,c),u.attributes=[],u.index=Q1}})}a.meshes.push({file:l.file,bones:l.bones,head:l.head,levels:o})}}ready;steps=[];next=0;get bytesLeft(){let e=0;for(let t=this.next;t<this.steps.length;t++)e+=this.steps[t].bytes;return e}get done(){return this.next>=this.steps.length}step(e,t,i){let s=0;for(;this.next<this.steps.length;){const r=this.steps[this.next];if((s>0||!i)&&(s+r.bytes>e||t()))break;r.run(),s+=r.bytes,this.next++}return s}dispose(){for(const e of Object.values(this.ready.textures))e.dispose();for(const e of this.ready.meshes)for(const t of e.levels)t.geometry.dispose()}}function Em(){return re.smooth.on?"smoothB":"lite"}function gE(n){const e=n.host?.tier??Em(),t=Z1({base:n.base,tier:e,fetchManifest:async i=>{const s=await fetch(i,{cache:"no-cache"});if(!s.ok)throw new Error(`${i}: HTTP ${s.status}`);return await s.json()},makeWorker:()=>new Worker(new URL(""+new URL("worker-CJJ5G_HE.js",import.meta.url).href,import.meta.url),{type:"module"}),setTimeout:(i,s)=>globalThis.setTimeout(i,s),clearTimeout:i=>globalThis.clearTimeout(i),clearOldCaches:(i,s)=>{const r=globalThis.caches;r&&r.keys().then(a=>Promise.all(a.filter(l=>l.startsWith(i)&&l!==s).map(l=>r.delete(l)))).catch(()=>{})},...n.host});return{share:()=>t.share(),cancel:()=>t.cancel(),packs:t,tier:e}}const sE={now:()=>performance.now(),setTimeout:(n,e)=>globalThis.setTimeout(n,e)};function rE(n,e,t=sE){const i={ready:0,residentBytes:0,loads:0,evictions:0,failures:0,mainMs:0,fetchMs:0,decodeMs:0,fromCache:0,uploadMs:0,gateMs:-1},s=Yo,r=t.now(),a=e?.tier??Em(),l=qo.stream[a],o=qo.budgets[a].streamMainThreadMsPerFrame,u=new Map,c=[],f=e?new nE:null;let h=0,d=!1,g=!1,v=!0,p=!1,m=!1;const y=[],_=[];let w=0,S=0;const M=()=>t.now()-w>S,x=()=>{if(!e)return!0;const D=e.packs.gated;for(let C=0;C<D.length;C++)if(!u.has(D[C])&&e.packs.state(D[C])!=="failed")return!1;return!0},b=()=>{if(!(y.length===0&&i.gateMs>=0)&&x())for(i.gateMs<0&&(i.gateMs=t.now()-r);y.length;)y.pop()()},A=(D,C)=>{if(!e||d||g)return;let I=e.packs.take();if(!I&&c.length===0){i.mainMs=0;return}for(w=t.now(),S=C;I;I=e.packs.take())c.push(new iE(I,n,f,l.uploadBytesPerFrame,s.minBandRows));let U=D;for(;c.length&&U>0&&!M();){const W=c[0],k=W.step(U,M,U===D);if(U-=k,W.done)c.shift(),u.set(W.ready.name,W.ready),i.ready=u.size,i.residentBytes+=W.ready.gpuBytes,h++;else if(k===0)break}const O=e.packs.stats;i.loads=O.loads,i.failures=O.failures,i.fetchMs=O.fetchMs,i.decodeMs=O.decodeMs,i.fromCache=O.fromCache,i.mainMs=t.now()-w,i.uploadMs+=i.mainMs,b()},E=()=>{p=!1,!(!v||d||g)&&(A(l.uploadBytesPerFrame,o),c.length&&P())},P=()=>{p||!v||d||g||(p=!0,t.setTimeout(E,s.loadingSliceGapMs))};return e&&(e.packs.onDecoded=()=>{P(),b()}),{ready(){return!e||g?Promise.resolve():new Promise(D=>{let C=!1;const I=()=>{C||(C=!0,D())};t.setTimeout(I,m?s.restoreGateLimitMs:s.gateLimitMs),e.packs.manifestRead.then(U=>{if(!U)return I();y.push(I),b(),P()})})},tick(){v=!1,A(l.uploadBytesPerFrame,o)},get:D=>d?null:u.get(D)??null,get version(){return h},onLost(){if(d||!e){d=!0;return}d=!0,_.length=0;for(const[D,C]of u)_.push(D),Ad(C);for(const D of c)_.push(D.pack.name),D.dispose();i.evictions+=u.size,c.length=0,u.clear(),i.residentBytes=0,i.ready=0,h++},onRestored(){!e||g||(d=!1,v=!0,m=!0,h++,e.packs.request(_),_.length=0)},info:i,dispose(){g=!0,e?.cancel();for(const D of u.values())Ad(D);for(const D of c)D.dispose();c.length=0,u.clear(),f?.dispose()}}}function Ad(n){for(const e of Object.values(n.textures))e.dispose();for(const e of n.meshes)for(const t of e.levels)t.geometry.dispose()}const Td=255/3,aE=Rc.gpu.boundMarginMetres;function oE(n){const e=[],t=new Map,i=y=>{let _=t.get(y.voxels);return _||(_=Kp(y),t.set(y.voxels,_)),_};let s=0,r=0;for(const y of n){const _=i(y.part.day);s+=_.pos.length/3,r+=_.idx.length}const a=new Float32Array(s*3),l=new Float32Array(s*3),o=new Uint8Array(s),u=new Uint8Array(s*3),c=new Uint8Array(s*3),f=new Uint8Array(s),h=new Uint16Array(s*4),d=new Uint8Array(s*4),g=new Uint32Array(r);let v=0,p=0;n.forEach((y,_)=>{const w=y.part.variants[y.variant],S=i(y.part.day),M=S.pos.length/3,x=y.part.voxelMetres;for(let b=0;b<M;b++){const A=v+b;a[A*3]=S.pos[b*3]*x,a[A*3+1]=S.pos[b*3+1]*x,a[A*3+2]=S.pos[b*3+2]*x,l[A*3]=S.nrm[b*3],l[A*3+1]=S.nrm[b*3+1],l[A*3+2]=S.nrm[b*3+2],o[A]=S.ao[b];const E=S.slots[b],P=w.day.palette[E]??0,R=w.night.palette[E]??0;u[A*3]=P>>16&255,u[A*3+1]=P>>8&255,u[A*3+2]=P&255,c[A*3]=R>>16&255,c[A*3+1]=R>>8&255,c[A*3+2]=R&255;const D=(w.day.emissive[E]?1:0)|(w.night.emissive[E]?2:0);f[A]=Math.round(D*Td),h[A*4]=_,d[A*4]=255}for(let b=0;b<S.idx.length;b++)g[p+b]=S.idx[b]+v;if(w.nightSteps){const b=w.nightSteps.map(A=>A.map(E=>{const P=new Uint8Array(M*3),R=new Uint8Array(M);for(let D=0;D<M;D++){const C=S.slots[D],I=E.palette[C]??0;P[D*3]=I>>16&255,P[D*3+1]=I>>8&255,P[D*3+2]=I&255,R[D]=Math.round(((w.day.emissive[C]?1:0)|(E.emissive[C]?2:0))*Td)}return{col2:P,glow:R}}));e.push({start:v,count:M,steps:b})}v+=M,p+=S.idx.length});const m=new Nt;return m.name="luna-park rides (skinned)",m.setAttribute("position",new nt(a,3)),m.setAttribute("normal",new nt(l,3)),m.setAttribute("ao",new nt(o,1,!0)),m.setAttribute("color",new nt(u,3,!0)),m.setAttribute("col2",new nt(c,3,!0)),m.setAttribute("glow",new nt(f,1,!0)),m.setAttribute("skinIndex",new nt(h,4)),m.setAttribute("skinWeight",new nt(d,4,!0)),m.setIndex(new nt(g,1)),{geometry:m,chased:e}}function Rd(n,e,t,i,s,r,a,l,o,u){const c=Math.cos(a),f=Math.sin(a),h=c*e[0]+f*e[3],d=c*e[1]+f*e[4],g=c*e[2]+f*e[5],v=f*e[0]-c*e[3],p=f*e[1]-c*e[4],m=f*e[2]-c*e[5],y=e[6],_=e[7],w=e[8];return an(o,l,r.x+(t*c+i*f)/l,r.y+(t*f-i*c)/l,r.z+s,u),n.set(h,d,g,u.x,y,_,w,u.y,v,p,m,u.z,0,0,0,1),n}function lE(n,e){const t=new mn;t.name="luna-park rides",t.matrixAutoUpdate=!1;const i={bones:0,vertices:0,triangles:0};if(!a0())return{group:t,mesh:null,update(){},warmMeshes:()=>[],stats:i};const s=o0(),r=new l0(s),{geometry:a,chased:l}=oE(s),o=a.getAttribute("col2"),u=a.getAttribute("glow");let c=-1;const f=s.map(()=>{const R=new Zo;return R.matrixAutoUpdate=!1,R.matrixWorldAutoUpdate=!1,R}),h=new Jo(f,s.map(()=>new et)),d=new Uo(a,n);d.name="luna-park rides",d.matrixAutoUpdate=!1,d.layers.set(Wn.actors),d.castShadow=!0,d.receiveShadow=!0,d.bind(h,new et),t.add(d),i.bones=f.length,i.vertices=a.getAttribute("position").count,i.triangles=(a.index?.count??0)/3;let g=0,v=0,p=0;for(const R of s)g+=R.rest.x/s.length,v+=R.rest.y/s.length,p+=R.rest.z/s.length;let m=0;const y=(R,D,C)=>m=Math.max(m,Math.hypot(R-g,D-v,C-p));for(const R of s)y(R.rest.x,R.rest.y,R.rest.z);const _=p0();for(const R of Object.values(c0()))for(let D=0;D<R.length;D+=2)y(u0(R,D,_).x,_.y,_.z);const w=Rc.hairRaiser;y(w.x,w.y,w.base+w.height);const S=new kn(new z,m+aE);a.boundingSphere=S,d.boundingSphere=S;let M=null,x=null,b=!1;const A={x:0,y:0,z:0},E=new et,P=[1,0,0,0,1,0,0,0,1];return{group:t,mesh:d,stats:i,update(R,D,C){if(x!==D){const{pivot:W,heading:k}=h0(D);M={pivot:W,heading:k,cellMetres:D.meta.cellMetres},x=D,Rd(E,P,g,v,p,W,k,M.cellMetres,e,A),S.center.set(A.x,A.y,A.z)}const I=M;if(b&&C&&C.isPerspectiveCamera&&C.position.distanceTo(S.center)>S.radius+Rc.motion.updateMetres)return;b=!0,f0(r.sway,I.pivot,I.heading,I.cellMetres),r.update(R/1e3);const U=d0(R/1e3),O=U.programme*3+U.step;if(O!==c){c=O;for(const W of l){const k=W.steps[U.programme%W.steps.length][U.step];o.array.set(k.col2,W.start*3),u.array.set(k.glow,W.start),o.addUpdateRange(W.start*3,W.count*3),u.addUpdateRange(W.start,W.count)}o.needsUpdate=!0,u.needsUpdate=!0}for(let W=0;W<f.length;W++){const k=r.poses[W];Rd(f[W].matrixWorld,k.m,k.x,k.y,k.z,I.pivot,I.heading,I.cellMetres,e,A)}},warmMeshes(){const R=new Uo(a,n);return R.bind(h,d.bindMatrix),R.castShadow=!0,R.receiveShadow=!0,R.boundingSphere=S,R.layers.mask=d.layers.mask,[R]}}}function cE(n){const e=re.smooth,t=Math.max(1,n.w),i=Math.max(1,n.h),s=Math.round(t*n.dpr),r=Math.round(i*n.dpr);let a=e.scale;e.minPerCss>0&&(a=Math.max(a,e.minPerCss/n.dpr));const l=s*r;e.maxPixels>0&&a*a*l>e.maxPixels&&(a=Math.sqrt(e.maxPixels/l));const o=Math.min(1,a);return{cssW:t,cssH:i,screenW:s,screenH:r,scale:o,drawW:Math.max(1,Math.round(s*o)),drawH:Math.max(1,Math.round(r*o))}}function uE(n=()=>performance.now()){const e={prologueMs:0,renderMs:0};let t=0,i=0;return{timings:e,start(){t=n()},mark(){i=n(),e.prologueMs=i-t},end(){e.renderMs=n()-i},idle(){e.prologueMs=0,e.renderMs=0}}}const hE={x:0,y:0,z:0},hs={x:0,y:0,z:0},Jr={x:0,y:0,depthMetres:0,eyeMetres:0,pixelsPerMetre:0},fE={x:0,y:0},Cd=new z,Pd=new z;function dE(n,e,t){let i=0;for(let s=0;s<t;s++)e[s]&&n.drawn(s)&&i++;return i}function xE(n){Db();let e=!1;const t=Y=>{e||(e=!0,n.onFailure?n.onFailure(Y):n.log(`flyby: ${Y}`))},i=new JS({canvas:n.canvas,context:n.gl,antialias:!1,powerPreference:"high-performance",depth:!1});i.info.autoReset=!1,i.shadowMap.enabled=!0,i.debug.checkShaderErrors=!0,i.debug.onShaderError=(Y,N)=>{const Te=Y.getProgramInfoLog(N)??"";t(`a shader did not link${Te?` (${Te.trim().slice(0,Ge.fallback.shaderLogChars)})`:""}, so the classic renderer is taking over`)};const s=new r1(n.build,{gameWalker:!0}),r=new mw(s.scene);r.attach(i),r.onStaticBox=Y=>s.treeCasters(Y);let a=!1;pm(s.scene,"casters",()=>{a&&r.invalidateCasters()}),a=!0;const l=s.looks.get(re.look.mix.near??"plain")??s.looks.get("plain"),o=n.build.blocks?new h1({scene:s,channel:n.stream??{want:()=>{},onBlock:null,onBlockError:null,close:()=>{}},three:i,shadows:r,uploadMaterial:l.material("building"),initial:n.build.blocks}):null,u=py(),c=oy(re.origin),f=new Dp,h=new ay,d=kw(),g=Ib(s,re.origin),v=rE(i,n.assets??null),p=w1({ps:s,origin:re.origin,three:i,assets:v}),m=Y1({heroes:p,scene:s.scene}),y=s.looks.get("pixel"),_=Rw(y.material("voxel"),re.origin,y.makeVoxel?.bind(y)),w=Hb(Ge.particles.fixedPerLight*(n.aviationLights??0));s.scene.add(_.group);const S=lE(y.material("voxel"),re.origin);s.scene.add(S.group),w.object.layers.set(Wn.actors),s.scene.add(w.object),w.fixedObject.layers.set(Wn.actors),s.scene.add(w.fixedObject);const M=qb();M.object.layers.set(Wn.actors),s.scene.add(M.object);let x=null;const b=new Uw,A={world:n.world,ground:null,objects:b};let E=new Uint8Array(Ge.objects.maxDrawn),P=!1,R=null,D=0,C=!!n.failSight;const I=new yy({march:(Y,N,Te,Ee)=>{if(C)throw C=!1,new Error("forced (?gpuFail=sight)");return My(c,A,Y,N,Te,Ee?c.cpu.subShare:0)},eye:Y=>{Y.x=c.eye.x,Y.y=c.eye.y,Y.z=c.eye.z},distance:(Y,N,Te)=>(an(c.origin,c.cpu.cellMetres,Y,N,Te,hs),Math.hypot(hs.x-c.eye.x,hs.y-c.eye.y,hs.z-c.eye.z)),fault:Y=>{D++,R===null&&(R=Y,t(Y))}}),U=(Y,N)=>{const Te=_.modelOf(N);return Te?_.drawn(N)?.frustumCulled?null:Te:_.skippedAt(N)||N<E.length&&E[N]!==0?Y.model:null},O=Y=>Y<E.length?E[Y]:0;let W=[];const k=Y=>_.modelOf(Y)?_.shareOf(Y):W[Y]?.fade??1;let G=new Uint8Array(Ge.objects.maxDrawn),Z=0,me=0;const le=new y0(n.now);let q=!1,$=null,K=0,j=!0;n.canvas.addEventListener("webglcontextlost",Y=>{Y.preventDefault(),v.onLost(),p.onLost(),le.onLost()==="giveUp"&&(q=!0,t(le.reason()))}),n.canvas.addEventListener("webglcontextrestored",()=>{le.onRestored(),j=!1,$=null,r.invalidateCasters(),im(i),v.onRestored(),p.onRestored()});let V=1,B=1,te=1,ee=1,ce=1,Ce=1;const oe=(Y,N)=>{Y===V&&N===B||(V=Y,B=N,i.setSize(V,B,!1))},ye=()=>{const Y=n.cssSize(),N=cE(Y);ce=N.cssW,Ce=N.cssH,qn.w=N.screenW,qn.h=N.screenH,qn.dpr=Y.dpr,Ro.scale=N.scale,oe(N.drawW,N.drawH)};ye(),te=V,ee=B;const pe=Y=>{const N=u.persp;return c.ortho?c.metresPerPixel:(Pd.copy(Y),c.eye.distanceTo(Pd)*2*Math.tan(N.fov*Math.PI/360)/B)},ne=(Y,N)=>r.inMovingShadow(Y,N),Ie=Y=>{Y.update(r.tod.night),Y.light?.(r.tod,d.timeSec),Y.clouds?.(d.cloudShare)},De=uE();let Me=null,We;const Ve={kind:"gpu",get width(){return te},get height(){return ee},get drawWidth(){return V},get drawHeight(){return B},get scaleX(){return ce/te},get scaleY(){return Ce/ee},get failure(){return R},get canvas(){return n.canvas},get gaveUp(){return le.gaveUp||q},get reason(){return le.gaveUp?le.reason():""},resize(Y,N){ye(),n.gridIsDrawing?(te=V,ee=B):(te=Math.max(1,Math.round(Y)),ee=Math.max(1,Math.round(N)))},render(Y,N){if(Me=Y,We=N,le.lost){le.tick()==="giveUp"&&!q&&(q=!0,t(le.reason())),De.idle(),me=0;return}if(!j){$?n.now()-K>Ge.fallback.restoreWarmLimitSeconds&&t(`compiling the shaders again after a lost context took over ${Ge.fallback.restoreWarmLimitSeconds} s, so the classic renderer is taking over`):(K=n.now(),$=Ve.prewarm().then(()=>j=!0,xe=>t(`compiling the shaders again after a lost context failed (${xe instanceof Error?xe.message:String(xe)})`))),De.idle(),me=0;return}De.start();const Te=N??n.actors?.()??null;Nf(c,Y.camera,V,B,Y.world,d.hazeFullMetres,te,ee),Hw(d,Y,c),Nf(c,Y.camera,V,B,Y.world,d.hazeFullMetres,te,ee),ty(c),s.setWaterGrid(ts(c),c),f.set(c),m0(c.cpu,Y.objects),ny(c),dy(c,Y);const Ee=Gf(u,c);if(G.length<Y.objects.length&&(G=new Uint8Array(Y.objects.length*2)),G.fill(0,0,Y.objects.length),v.tick(),p.update(Y,c,Te,G),m.update(Y,c,Te),g.update(Y,c,Te,G),Z=dE(g,G,Y.objects.length),s.jet.frustumCulled=!c.cpu.subOn,E.length<Y.objects.length&&(E=new Uint8Array(Y.objects.length*2)),E.fill(0,0,Y.objects.length),Te)for(const xe of Te.poses)xe.object>=0&&xe.object<Y.objects.length&&G[xe.object]&&(E[xe.object]=xe.kind==="walker"?1:2);_.setShadowTest(i.shadowMap.enabled&&Ge.objects.castShadows?ne:null),_.update(Y,c,Te,G),o?.update(Y.streetFocus,Y.world.meta.cellMetres,Y.timeSec),S.update(Date.now(),Y.world,Ee),w.update(Y.particles,Y.lightPool??null,c,r.tod.night,Y.followParticles??0,m.particleLook),M.update(c),Y.street?(x||(x=qw(Y.world)),x.setScene(Y.street),A.ground=x):(A.ground=null,x?.setScene(null)),A.world=Y.world,W=Y.objects,b.setFrame(Y.objects,c.origin,c.cpu.cellMetres,U,O,Y.followObjects??0,c.cpu.snapDX,c.cpu.snapDY,k),P=!0,I.carryOver(),r.setHour(d.hour,d.haze),Ir.uLitShare.value=d.litTower,Ir.uLitOther.value=d.litOther,i.info.reset(),Cd.set(d.shadowFocus.x,d.shadowFocus.y,d.shadowFocus.z),r.fitShadow(Cd,d.shadowHalf,Ee),s.treeLod(Ee.position),s.farFacings(Ee),s.cullActors(Ee,pe,i.shadowMap.enabled?ne:null,!1,f),g.hideUnclaimed(),p.prepare(Ee),m.prepare(),mm.object=(Y.followObjects??0)>0?p.drawn(0)??g.drawn(0)??_.drawn(0):null,s.looks.forEach(Ie);const Be=Vo.n;h.lift(s.scene,c,f),De.mark();try{jy(s.looks,i,s.scene,Ee)}finally{h.restore()}De.end(),me=Vo.n-Be},project(Y,N){if(!P)return null;const Te=c.cpu.cellMetres;return an(c.origin,Te,Y.x,Y.y,Y.z,hs),al(c,hs.x,hs.y,hs.z,Jr,N?c.cpu.subShare:0,N?1:0)?I.point(Jr.x*c.toGridX,Jr.y*c.toGridY,Jr.depthMetres/Te,Jr.pixelsPerMetre*Te*c.toGridY,Y.x,Y.y,Y.z,!!N):null},unproject(Y,N){return P?Sy(c,A,Y/c.toGridX,N/c.toGridY,hE):null},warmSight(Y){for(const N of Y)oc(N)},warmMeshes(Y,N=Ge.prewarm.uploadDraws){for(fw(Y),fy(Y);ic(Number.POSITIVE_INFINITY););for(const Le of Y)oc(Le);if(!N||le.lost)return 0;const Te=new on(Ge.prewarm.targetPx,Ge.prewarm.targetPx,{depthBuffer:!0}),Ee=i.getRenderTarget(),Be=new vt(void 0,y.material("voxel"));Be.frustumCulled=!1;const xe=new br;xe.add(Be);let rt=0;i.setRenderTarget(Te);try{for(const Le of Y){const ze=Ta(Le);ze&&(Be.geometry=ze.geometry,i.render(xe,u.persp),rt++)}}finally{i.setRenderTarget(Ee),Te.dispose()}return rt},warmLandmarks(Y,N=Ge.prewarm.uploadDraws){const Te=lm(),Ee=[];for(const Be of Y)Te.has(Be)?oc(Be):Ee.push(Be);return Ve.warmMeshes(Ee,N)},conform(Y){rw(Y)},capture(){if(!Me||le.lost)return new Uint8Array(0);Ve.render(Me,We);const Y=n.gl,N=Y.drawingBufferWidth,Te=Y.drawingBufferHeight,Ee=new Uint8Array(N*Te*4);Y.readPixels(0,0,N,Te,Y.RGBA,Y.UNSIGNED_BYTE,Ee);const Be=new Uint8Array(Ee.length),xe=N*4;for(let rt=0;rt<Te;rt++)Be.set(Ee.subarray((Te-1-rt)*xe,(Te-rt)*xe),rt*xe);return Be},linkFailure(){if(le.lost)return null;const Y=n.gl;for(const N of i.info.programs??[]){const Te=N.program;if(!Te)continue;if(Y.getProgramParameter(Te,Y.LINK_STATUS)===!1)return N.name??"a program"}return null},viewEye(Y){return P?g0(c.cpu,Y):!1},shimmerPlaced(){return m.shimmerPlaced()},followOffset(){return zo(c,fE)},get info(){return{calls:i.info.render.calls,triangles:i.info.render.triangles,objects:_.stats.drawn,fading:_.stats.fading,casterThinned:_.stats.casterThinned,actors:Z,walker:{unresolvedFrames:g.unresolvedFrames,unresolvedModels:Xi.unresolved,oddPivot:Xi.oddPivot,kneeMoved:Xi.kneeMoved,liftedTwice:Xi.liftedTwice},heroes:p.info,exhaust:m.info,assets:v.info,stream:o?{...o.stats}:null,waiting:_.stats.waiting,culled:_.stats.culled,popped:_.stats.popped,particles:w.drawn,fixedPoints:w.fixedDrawn,particlesDropped:w.dropped,shadowHalf:d.shadowHalf,shadowDepthOnly:Go(i),savingsAct:{...s.frameWorkActs,clearFinishColour:me>0,shadowDepthOnly:i.shadowMap.enabled&&Go(i)},timings:{prologueMs:De.timings.prologueMs,renderMs:De.timings.renderMs},sight:{marched:I.marched,marchMs:I.spentMs,pending:I.pendingCount,objects:b.count,objectsWaiting:b.waiting,gridsQueued:Dw(),faults:D},...n.debug?{meshes:dw()}:{}}},get timings(){return De.timings},prepare(Y=Ge.meshes.sliceBudgetMs){const N=ic(Y),Te=qf();return N||Te},prepareSight(Y=Ge.sight.occupancyBudgetMs){return qf(Y)},prepareMeshes(Y=Ge.meshes.sliceBudgetMs){const N=ic(Y);return(o?.step()??!1)||N},meshesQueued(){return pw()+(o?.queued??0)},streamIdle(){return o?.idle??!0},async prewarm(){if(le.lost)return{programs:0};if(await v.ready(),le.lost)return{programs:0};const Y=i.info.programs?.length??0,N=new on(Ge.prewarm.targetPx,Ge.prewarm.targetPx,{depthBuffer:!1}),Te=i.getRenderTarget(),Ee=u.persp,Be=[];i.setRenderTarget(N);try{Be.push(i.compileAsync(s.scene,Ee));for(const ze of _.warmMeshes())Be.push(i.compileAsync(ze,Ee,s.scene));for(const ze of s.walker.warmMeshes([s.walkerMaterial,s.walkerDissolve]))Be.push(i.compileAsync(ze,Ee,s.scene));for(const ze of p.warmMeshes())Be.push(i.compileAsync(ze,Ee,s.scene));for(const ze of m.warmMeshes())Be.push(i.compileAsync(ze,Ee,s.scene));s.looks.forEach(ze=>ze.warmMeshes?.().forEach(F=>Be.push(i.compileAsync(F,Ee,s.scene))));const Le=s.scene.fog;s.scene.fog=null;try{for(const ze of[..._.warmDepthMeshes(),...g.warmDepthMeshes()])Be.push(i.compileAsync(ze,Ee,s.scene))}finally{s.scene.fog=Le}}finally{i.setRenderTarget(Te)}let xe=()=>{};const rt=new Promise(Le=>xe=Le);n.canvas.addEventListener("webglcontextlost",xe);try{await Promise.race([Promise.all(Be),rt])}finally{n.canvas.removeEventListener("webglcontextlost",xe),N.dispose()}return{programs:(i.info.programs?.length??0)-Y}},debugDraw:{three:i,scene:s.scene,camera:()=>Gf(u,c),gv:c,objects:_.group,rig:s.jet,particles:w.object,walkerMark:Y=>g.setMark(Y),heroes:p,ps:s,shadowBuildBytes:()=>r.buildMapBytes},dispose(){o?.close(),w.dispose(),M.dispose(),m.dispose(),v.dispose(),i.dispose()}};return Ve}function vE(n,e=console){rg((t,i,...s)=>{n&&e[t](`three: ${i}`,...s)})}export{uE as createFrameClock,xE as createGpuRenderer,cE as drawingSize,dE as rigsClaimed,vE as routeThreeConsole,gE as startAssets};
