(()=>{var Wd=0,qu=1,Xd=2;var wr=1,Yd=2,pa=3,Ji=0,cn=1,wn=2,An=0,ma=1,Zi=2,Bu=3,zu=4,$d=5;var As=100,jd=101,Jd=102,Zd=103,Kd=104,Qd=200,ef=201,tf=202,nf=203,ku=204,Vu=205,sf=206,af=207,rf=208,of=209,lf=210,cf=211,uf=212,hf=213,df=214,ko=0,Vo=1,Ho=2,ta=3,Go=4,Wo=5,Xo=6,Yo=7,Hu=0,ff=1,pf=2,Bn=0,Ar=1,Cr=2,Rr=3,Cs=4,Pr=5,Ir=6,Lr=7;var Gu=300,Ki=301,Rs=302,wl=303,Al=304,Nr=306,$o=1e3,Jn=1001,jo=1002,Wt=1003,mf=1004;var Dr=1005;var jt=1006,Cl=1007;var Qi=1008;var dn=1009,Wu=1010,Xu=1011,ga=1012,Rl=1013,zn=1014,kn=1015,Zt=1016,Pl=1017,Il=1018,xa=1020,Yu=35902,$u=35899,ju=1021,Ju=1022,Cn=1023,Zn=1026,es=1027,Zu=1028,Ll=1029,ts=1030,Nl=1031;var Dl=1033,Ur=33776,Fr=33777,Or=33778,qr=33779,Ul=35840,Fl=35841,Ol=35842,ql=35843,Bl=36196,zl=37492,kl=37496,Vl=37488,Hl=37489,Br=37490,Gl=37491,Wl=37808,Xl=37809,Yl=37810,$l=37811,jl=37812,Jl=37813,Zl=37814,Kl=37815,Ql=37816,ec=37817,tc=37818,nc=37819,ic=37820,sc=37821,ac=36492,rc=36494,oc=36495,lc=36283,cc=36284,zr=36285,uc=36286;var Ya=2300,Jo=2301,Bo=2302,Tu=2303,Eu=2400,wu=2401,Au=2402;var gf=3200;var hc=0,xf=1,bi="",Yt="srgb",$a="srgb-linear",ja="linear",ot="srgb";var zo=7680;var _f=519,vf=512,yf=513,bf=514,dc=515,Mf=516,Sf=517,fc=518,Tf=519,Ef=35044;var Ku="300 es",qn=2e3,na=2001;function Tm(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Em(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Ja(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function wf(){let n=Ja("canvas");return n.style.display="block",n}var fd={},ia=null;function Qu(...n){let e="THREE."+n.shift();ia?ia("log",e,...n):console.log(e,...n)}function Af(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Fe(...n){n=Af(n);let e="THREE."+n.shift();if(ia)ia("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function ze(...n){n=Af(n);let e="THREE."+n.shift();if(ia)ia("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function vs(...n){let e=n.join(" ");e in fd||(fd[e]=!0,Fe(...n))}function Cf(n,e,t){return new Promise(function(i,s){function a(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:i()}}setTimeout(a,t)})}var Rf={[ko]:Vo,[Ho]:Xo,[Go]:Yo,[ta]:Wo,[Vo]:ko,[Xo]:Ho,[Yo]:Go,[Wo]:ta},Kn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let a=s.indexOf(t);a!==-1&&s.splice(a,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let a=0,r=s.length;a<r;a++)s[a].call(this,e);e.target=null}}},tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Kc=Math.PI/180,Zo=180/Math.PI;function _a(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(tn[n&255]+tn[n>>8&255]+tn[n>>16&255]+tn[n>>24&255]+"-"+tn[e&255]+tn[e>>8&255]+"-"+tn[e>>16&15|64]+tn[e>>24&255]+"-"+tn[t&63|128]+tn[t>>8&255]+"-"+tn[t>>16&255]+tn[t>>24&255]+tn[i&255]+tn[i>>8&255]+tn[i>>16&255]+tn[i>>24&255]).toLowerCase()}function Qe(n,e,t){return Math.max(e,Math.min(t,n))}function wm(n,e){return(n%e+e)%e}function Qc(n,e,t){return(1-t)*n+t*e}function Ba(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function hn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var ce=class n{static{n.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),a=this.x-e.x,r=this.y-e.y;return this.x=a*i-r*s+e.x,this.y=a*s+r*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Qn=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,a,r,o){let l=i[s+0],c=i[s+1],u=i[s+2],d=i[s+3],h=a[r+0],p=a[r+1],g=a[r+2],v=a[r+3];if(d!==v||l!==h||c!==p||u!==g){let x=l*h+c*p+u*g+d*v;x<0&&(h=-h,p=-p,g=-g,v=-v,x=-x);let f=1-o;if(x<.9995){let S=Math.acos(x),T=Math.sin(S);f=Math.sin(f*S)/T,o=Math.sin(o*S)/T,l=l*f+h*o,c=c*f+p*o,u=u*f+g*o,d=d*f+v*o}else{l=l*f+h*o,c=c*f+p*o,u=u*f+g*o,d=d*f+v*o;let S=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=S,c*=S,u*=S,d*=S}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,a,r){let o=i[s],l=i[s+1],c=i[s+2],u=i[s+3],d=a[r],h=a[r+1],p=a[r+2],g=a[r+3];return e[t]=o*g+u*d+l*p-c*h,e[t+1]=l*g+u*h+c*d-o*p,e[t+2]=c*g+u*p+o*h-l*d,e[t+3]=u*g-o*d-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,a=e._z,r=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(s/2),d=o(a/2),h=l(i/2),p=l(s/2),g=l(a/2);switch(r){case"XYZ":this._x=h*u*d+c*p*g,this._y=c*p*d-h*u*g,this._z=c*u*g+h*p*d,this._w=c*u*d-h*p*g;break;case"YXZ":this._x=h*u*d+c*p*g,this._y=c*p*d-h*u*g,this._z=c*u*g-h*p*d,this._w=c*u*d+h*p*g;break;case"ZXY":this._x=h*u*d-c*p*g,this._y=c*p*d+h*u*g,this._z=c*u*g+h*p*d,this._w=c*u*d-h*p*g;break;case"ZYX":this._x=h*u*d-c*p*g,this._y=c*p*d+h*u*g,this._z=c*u*g-h*p*d,this._w=c*u*d+h*p*g;break;case"YZX":this._x=h*u*d+c*p*g,this._y=c*p*d+h*u*g,this._z=c*u*g-h*p*d,this._w=c*u*d-h*p*g;break;case"XZY":this._x=h*u*d-c*p*g,this._y=c*p*d-h*u*g,this._z=c*u*g+h*p*d,this._w=c*u*d+h*p*g;break;default:Fe("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],a=t[8],r=t[1],o=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=i+o+d;if(h>0){let p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(a-c)*p,this._z=(r-s)*p}else if(i>o&&i>d){let p=2*Math.sqrt(1+i-o-d);this._w=(u-l)/p,this._x=.25*p,this._y=(s+r)/p,this._z=(a+c)/p}else if(o>d){let p=2*Math.sqrt(1+o-i-d);this._w=(a-c)/p,this._x=(s+r)/p,this._y=.25*p,this._z=(l+u)/p}else{let p=2*Math.sqrt(1+d-i-o);this._w=(r-s)/p,this._x=(a+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qe(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,a=e._z,r=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+r*o+s*c-a*l,this._y=s*u+r*l+a*o-i*c,this._z=a*u+r*c+i*l-s*o,this._w=r*u-i*o-s*l-a*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,a=e._z,r=e._w,o=this.dot(e);o<0&&(i=-i,s=-s,a=-a,r=-r,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+a*t,this._w=this._w*l+r*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+a*t,this._w=this._w*l+r*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class n{static{n.prototype.isVector3=!0}constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(pd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(pd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6]*s,this.y=a[1]*t+a[4]*i+a[7]*s,this.z=a[2]*t+a[5]*i+a[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,a=e.elements,r=1/(a[3]*t+a[7]*i+a[11]*s+a[15]);return this.x=(a[0]*t+a[4]*i+a[8]*s+a[12])*r,this.y=(a[1]*t+a[5]*i+a[9]*s+a[13])*r,this.z=(a[2]*t+a[6]*i+a[10]*s+a[14])*r,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,a=e.x,r=e.y,o=e.z,l=e.w,c=2*(r*s-o*i),u=2*(o*t-a*s),d=2*(a*i-r*t);return this.x=t+l*c+r*d-o*u,this.y=i+l*u+o*c-a*d,this.z=s+l*d+a*u-r*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s,this.y=a[1]*t+a[5]*i+a[9]*s,this.z=a[2]*t+a[6]*i+a[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,a=e.z,r=t.x,o=t.y,l=t.z;return this.x=s*l-a*o,this.y=a*r-i*l,this.z=i*o-s*r,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return eu.copy(this).projectOnVector(e),this.sub(eu)}reflect(e){return this.sub(eu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},eu=new I,pd=new Qn,We=class n{static{n.prototype.isMatrix3=!0}constructor(e,t,i,s,a,r,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,a,r,o,l,c)}set(e,t,i,s,a,r,o,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=a,u[5]=l,u[6]=i,u[7]=r,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,a=this.elements,r=i[0],o=i[3],l=i[6],c=i[1],u=i[4],d=i[7],h=i[2],p=i[5],g=i[8],v=s[0],x=s[3],f=s[6],S=s[1],T=s[4],y=s[7],E=s[2],w=s[5],R=s[8];return a[0]=r*v+o*S+l*E,a[3]=r*x+o*T+l*w,a[6]=r*f+o*y+l*R,a[1]=c*v+u*S+d*E,a[4]=c*x+u*T+d*w,a[7]=c*f+u*y+d*R,a[2]=h*v+p*S+g*E,a[5]=h*x+p*T+g*w,a[8]=h*f+p*y+g*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],a=e[3],r=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*r*u-t*o*c-i*a*u+i*o*l+s*a*c-s*r*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],a=e[3],r=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*r-o*c,h=o*l-u*a,p=c*a-r*l,g=t*d+i*h+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return e[0]=d*v,e[1]=(s*c-u*i)*v,e[2]=(o*i-s*r)*v,e[3]=h*v,e[4]=(u*t-s*l)*v,e[5]=(s*a-o*t)*v,e[6]=p*v,e[7]=(i*l-c*t)*v,e[8]=(r*t-i*a)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,a,r,o){let l=Math.cos(a),c=Math.sin(a);return this.set(i*l,i*c,-i*(l*r+c*o)+r+e,-s*c,s*l,-s*(-c*r+l*o)+o+t,0,0,1),this}scale(e,t){return vs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(tu.makeScale(e,t)),this}rotate(e){return vs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(tu.makeRotation(-e)),this}translate(e,t){return vs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(tu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},tu=new We,md=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),gd=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Am(){let n={enabled:!0,workingColorSpace:$a,spaces:{},convert:function(s,a,r){return this.enabled===!1||a===r||!a||!r||(this.spaces[a].transfer===ot&&(s.r=xi(s.r),s.g=xi(s.g),s.b=xi(s.b)),this.spaces[a].primaries!==this.spaces[r].primaries&&(s.applyMatrix3(this.spaces[a].toXYZ),s.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===ot&&(s.r=ea(s.r),s.g=ea(s.g),s.b=ea(s.b))),s},workingToColorSpace:function(s,a){return this.convert(s,this.workingColorSpace,a)},colorSpaceToWorking:function(s,a){return this.convert(s,a,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===bi?ja:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,a=this.workingColorSpace){return s.fromArray(this.spaces[a].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,a,r){return s.copy(this.spaces[a].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,a){return vs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,a)},toWorkingColorSpace:function(s,a){return vs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,a)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[$a]:{primaries:e,whitePoint:i,transfer:ja,toXYZ:md,fromXYZ:gd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Yt},outputColorSpaceConfig:{drawingBufferColorSpace:Yt}},[Yt]:{primaries:e,whitePoint:i,transfer:ot,toXYZ:md,fromXYZ:gd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Yt}}}),n}var Ze=Am();function xi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ea(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var ks,Ko=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ks===void 0&&(ks=Ja("canvas")),ks.width=e.width,ks.height=e.height;let s=ks.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=ks}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ja("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),a=s.data;for(let r=0;r<a.length;r++)a[r]=xi(a[r]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(xi(t[i]/255)*255):t[i]=xi(t[i]);return{data:t,width:e.width,height:e.height}}else return Fe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Cm=0,sa=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Cm++}),this.uuid=_a(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let r=0,o=s.length;r<o;r++)s[r].isDataTexture?a.push(nu(s[r].image)):a.push(nu(s[r]))}else a=nu(s);i.url=a}return t||(e.images[this.uuid]=i),i}};function nu(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ko.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Fe("Texture: Unable to serialize Texture."),{})}var Rm=0,iu=new I,ln=class n extends Kn{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Jn,s=Jn,a=jt,r=Qi,o=Cn,l=dn,c=n.DEFAULT_ANISOTROPY,u=bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Rm++}),this.uuid=_a(),this.name="",this.source=new sa(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=a,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ce(0,0),this.repeat=new ce(1,1),this.center=new ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(iu).x}get height(){return this.source.getSize(iu).y}get depth(){return this.source.getSize(iu).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){Fe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Fe(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Gu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case $o:e.x=e.x-Math.floor(e.x);break;case Jn:e.x=e.x<0?0:1;break;case jo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case $o:e.y=e.y-Math.floor(e.y);break;case Jn:e.y=e.y<0?0:1;break;case jo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};ln.DEFAULT_IMAGE=null;ln.DEFAULT_MAPPING=Gu;ln.DEFAULT_ANISOTROPY=1;var wt=class n{static{n.prototype.isVector4=!0}constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,a=this.w,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s+r[12]*a,this.y=r[1]*t+r[5]*i+r[9]*s+r[13]*a,this.z=r[2]*t+r[6]*i+r[10]*s+r[14]*a,this.w=r[3]*t+r[7]*i+r[11]*s+r[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,a,l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],p=l[5],g=l[9],v=l[2],x=l[6],f=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-v)<.01&&Math.abs(g-x)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+v)<.1&&Math.abs(g+x)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let T=(c+1)/2,y=(p+1)/2,E=(f+1)/2,w=(u+h)/4,R=(d+v)/4,_=(g+x)/4;return T>y&&T>E?T<.01?(i=0,s=.707106781,a=.707106781):(i=Math.sqrt(T),s=w/i,a=R/i):y>E?y<.01?(i=.707106781,s=0,a=.707106781):(s=Math.sqrt(y),i=w/s,a=_/s):E<.01?(i=.707106781,s=.707106781,a=0):(a=Math.sqrt(E),i=R/a,s=_/a),this.set(i,s,a,t),this}let S=Math.sqrt((x-g)*(x-g)+(d-v)*(d-v)+(h-u)*(h-u));return Math.abs(S)<.001&&(S=1),this.x=(x-g)/S,this.y=(d-v)/S,this.z=(h-u)/S,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this.w=Qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this.w=Qe(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Qo=class extends Kn{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:jt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new wt(0,0,e,t),this.scissorTest=!1,this.viewport=new wt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:i.depth},a=new ln(s),r=i.count;for(let o=0;o<r;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:jt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new sa(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ft=class extends Qo{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Za=class extends ln{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var el=class extends ln{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Mt=class n{static{n.prototype.isMatrix4=!0}constructor(e,t,i,s,a,r,o,l,c,u,d,h,p,g,v,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,a,r,o,l,c,u,d,h,p,g,v,x)}set(e,t,i,s,a,r,o,l,c,u,d,h,p,g,v,x){let f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=s,f[1]=a,f[5]=r,f[9]=o,f[13]=l,f[2]=c,f[6]=u,f[10]=d,f[14]=h,f[3]=p,f[7]=g,f[11]=v,f[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,s=1/Vs.setFromMatrixColumn(e,0).length(),a=1/Vs.setFromMatrixColumn(e,1).length(),r=1/Vs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*a,t[5]=i[5]*a,t[6]=i[6]*a,t[7]=0,t[8]=i[8]*r,t[9]=i[9]*r,t[10]=i[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,a=e.z,r=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(a),d=Math.sin(a);if(e.order==="XYZ"){let h=r*u,p=r*d,g=o*u,v=o*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=p+g*c,t[5]=h-v*c,t[9]=-o*l,t[2]=v-h*c,t[6]=g+p*c,t[10]=r*l}else if(e.order==="YXZ"){let h=l*u,p=l*d,g=c*u,v=c*d;t[0]=h+v*o,t[4]=g*o-p,t[8]=r*c,t[1]=r*d,t[5]=r*u,t[9]=-o,t[2]=p*o-g,t[6]=v+h*o,t[10]=r*l}else if(e.order==="ZXY"){let h=l*u,p=l*d,g=c*u,v=c*d;t[0]=h-v*o,t[4]=-r*d,t[8]=g+p*o,t[1]=p+g*o,t[5]=r*u,t[9]=v-h*o,t[2]=-r*c,t[6]=o,t[10]=r*l}else if(e.order==="ZYX"){let h=r*u,p=r*d,g=o*u,v=o*d;t[0]=l*u,t[4]=g*c-p,t[8]=h*c+v,t[1]=l*d,t[5]=v*c+h,t[9]=p*c-g,t[2]=-c,t[6]=o*l,t[10]=r*l}else if(e.order==="YZX"){let h=r*l,p=r*c,g=o*l,v=o*c;t[0]=l*u,t[4]=v-h*d,t[8]=g*d+p,t[1]=d,t[5]=r*u,t[9]=-o*u,t[2]=-c*u,t[6]=p*d+g,t[10]=h-v*d}else if(e.order==="XZY"){let h=r*l,p=r*c,g=o*l,v=o*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+v,t[5]=r*u,t[9]=p*d-g,t[2]=g*d-p,t[6]=o*u,t[10]=v*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Pm,e,Im)}lookAt(e,t,i){let s=this.elements;return mn.subVectors(e,t),mn.lengthSq()===0&&(mn.z=1),mn.normalize(),Oi.crossVectors(i,mn),Oi.lengthSq()===0&&(Math.abs(i.z)===1?mn.x+=1e-4:mn.z+=1e-4,mn.normalize(),Oi.crossVectors(i,mn)),Oi.normalize(),go.crossVectors(mn,Oi),s[0]=Oi.x,s[4]=go.x,s[8]=mn.x,s[1]=Oi.y,s[5]=go.y,s[9]=mn.y,s[2]=Oi.z,s[6]=go.z,s[10]=mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,a=this.elements,r=i[0],o=i[4],l=i[8],c=i[12],u=i[1],d=i[5],h=i[9],p=i[13],g=i[2],v=i[6],x=i[10],f=i[14],S=i[3],T=i[7],y=i[11],E=i[15],w=s[0],R=s[4],_=s[8],A=s[12],C=s[1],F=s[5],B=s[9],H=s[13],L=s[2],G=s[6],J=s[10],K=s[14],ae=s[3],$=s[7],ee=s[11],ne=s[15];return a[0]=r*w+o*C+l*L+c*ae,a[4]=r*R+o*F+l*G+c*$,a[8]=r*_+o*B+l*J+c*ee,a[12]=r*A+o*H+l*K+c*ne,a[1]=u*w+d*C+h*L+p*ae,a[5]=u*R+d*F+h*G+p*$,a[9]=u*_+d*B+h*J+p*ee,a[13]=u*A+d*H+h*K+p*ne,a[2]=g*w+v*C+x*L+f*ae,a[6]=g*R+v*F+x*G+f*$,a[10]=g*_+v*B+x*J+f*ee,a[14]=g*A+v*H+x*K+f*ne,a[3]=S*w+T*C+y*L+E*ae,a[7]=S*R+T*F+y*G+E*$,a[11]=S*_+T*B+y*J+E*ee,a[15]=S*A+T*H+y*K+E*ne,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],a=e[12],r=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],p=e[14],g=e[3],v=e[7],x=e[11],f=e[15],S=l*p-c*h,T=o*p-c*d,y=o*h-l*d,E=r*p-c*u,w=r*h-l*u,R=r*d-o*u;return t*(v*S-x*T+f*y)-i*(g*S-x*E+f*w)+s*(g*T-v*E+f*R)-a*(g*y-v*w+x*R)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],s=e[8],a=e[1],r=e[5],o=e[9],l=e[2],c=e[6],u=e[10];return t*(r*u-o*c)-i*(a*u-o*l)+s*(a*c-r*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],a=e[3],r=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],p=e[11],g=e[12],v=e[13],x=e[14],f=e[15],S=t*o-i*r,T=t*l-s*r,y=t*c-a*r,E=i*l-s*o,w=i*c-a*o,R=s*c-a*l,_=u*v-d*g,A=u*x-h*g,C=u*f-p*g,F=d*x-h*v,B=d*f-p*v,H=h*f-p*x,L=S*H-T*B+y*F+E*C-w*A+R*_;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let G=1/L;return e[0]=(o*H-l*B+c*F)*G,e[1]=(s*B-i*H-a*F)*G,e[2]=(v*R-x*w+f*E)*G,e[3]=(h*w-d*R-p*E)*G,e[4]=(l*C-r*H-c*A)*G,e[5]=(t*H-s*C+a*A)*G,e[6]=(x*y-g*R-f*T)*G,e[7]=(u*R-h*y+p*T)*G,e[8]=(r*B-o*C+c*_)*G,e[9]=(i*C-t*B-a*_)*G,e[10]=(g*w-v*y+f*S)*G,e[11]=(d*y-u*w-p*S)*G,e[12]=(o*A-r*F-l*_)*G,e[13]=(t*F-i*A+s*_)*G,e[14]=(v*T-g*E-x*S)*G,e[15]=(u*E-d*T+h*S)*G,this}scale(e){let t=this.elements,i=e.x,s=e.y,a=e.z;return t[0]*=i,t[4]*=s,t[8]*=a,t[1]*=i,t[5]*=s,t[9]*=a,t[2]*=i,t[6]*=s,t[10]*=a,t[3]*=i,t[7]*=s,t[11]*=a,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),a=1-i,r=e.x,o=e.y,l=e.z,c=a*r,u=a*o;return this.set(c*r+i,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+i,u*l-s*r,0,c*l-s*o,u*l+s*r,a*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,a,r){return this.set(1,i,a,0,e,1,r,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,a=t._x,r=t._y,o=t._z,l=t._w,c=a+a,u=r+r,d=o+o,h=a*c,p=a*u,g=a*d,v=r*u,x=r*d,f=o*d,S=l*c,T=l*u,y=l*d,E=i.x,w=i.y,R=i.z;return s[0]=(1-(v+f))*E,s[1]=(p+y)*E,s[2]=(g-T)*E,s[3]=0,s[4]=(p-y)*w,s[5]=(1-(h+f))*w,s[6]=(x+S)*w,s[7]=0,s[8]=(g+T)*R,s[9]=(x-S)*R,s[10]=(1-(h+v))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let a=this.determinantAffine();if(a===0)return i.set(1,1,1),t.identity(),this;let r=Vs.set(s[0],s[1],s[2]).length(),o=Vs.set(s[4],s[5],s[6]).length(),l=Vs.set(s[8],s[9],s[10]).length();a<0&&(r=-r),Dn.copy(this);let c=1/r,u=1/o,d=1/l;return Dn.elements[0]*=c,Dn.elements[1]*=c,Dn.elements[2]*=c,Dn.elements[4]*=u,Dn.elements[5]*=u,Dn.elements[6]*=u,Dn.elements[8]*=d,Dn.elements[9]*=d,Dn.elements[10]*=d,t.setFromRotationMatrix(Dn),i.x=r,i.y=o,i.z=l,this}makePerspective(e,t,i,s,a,r,o=qn,l=!1){let c=this.elements,u=2*a/(t-e),d=2*a/(i-s),h=(t+e)/(t-e),p=(i+s)/(i-s),g,v;if(l)g=a/(r-a),v=r*a/(r-a);else if(o===qn)g=-(r+a)/(r-a),v=-2*r*a/(r-a);else if(o===na)g=-r/(r-a),v=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,a,r,o=qn,l=!1){let c=this.elements,u=2/(t-e),d=2/(i-s),h=-(t+e)/(t-e),p=-(i+s)/(i-s),g,v;if(l)g=1/(r-a),v=r/(r-a);else if(o===qn)g=-2/(r-a),v=-(r+a)/(r-a);else if(o===na)g=-1/(r-a),v=-a/(r-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Vs=new I,Dn=new Mt,Pm=new I(0,0,0),Im=new I(1,1,1),Oi=new I,go=new I,mn=new I,xd=new Mt,_d=new Qn,_i=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,a=s[0],r=s[4],o=s[8],l=s[1],c=s[5],u=s[9],d=s[2],h=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,a),this._z=0);break;case"ZXY":this._x=Math.asin(Qe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-Qe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(Qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,a)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Qe(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-u,p),this._y=0);break;default:Fe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return xd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(xd,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return _d.setFromEuler(this),this.setFromQuaternion(_d,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};_i.DEFAULT_ORDER="XYZ";var Ka=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Lm=0,vd=new I,Hs=new Qn,hi=new Mt,xo=new I,za=new I,Nm=new I,Dm=new Qn,yd=new I(1,0,0),bd=new I(0,1,0),Md=new I(0,0,1),Sd={type:"added"},Um={type:"removed"},Gs={type:"childadded",child:null},su={type:"childremoved",child:null},Jt=class n extends Kn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Lm++}),this.uuid=_a(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new I,t=new _i,i=new Qn,s=new I(1,1,1);function a(){i.setFromEuler(t,!1)}function r(){t.setFromQuaternion(i,void 0,!1)}t._onChange(a),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Mt},normalMatrix:{value:new We}}),this.matrix=new Mt,this.matrixWorld=new Mt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ka,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Hs.setFromAxisAngle(e,t),this.quaternion.multiply(Hs),this}rotateOnWorldAxis(e,t){return Hs.setFromAxisAngle(e,t),this.quaternion.premultiply(Hs),this}rotateX(e){return this.rotateOnAxis(yd,e)}rotateY(e){return this.rotateOnAxis(bd,e)}rotateZ(e){return this.rotateOnAxis(Md,e)}translateOnAxis(e,t){return vd.copy(e).applyQuaternion(this.quaternion),this.position.add(vd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(yd,e)}translateY(e){return this.translateOnAxis(bd,e)}translateZ(e){return this.translateOnAxis(Md,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(hi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?xo.copy(e):xo.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),za.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hi.lookAt(za,xo,this.up):hi.lookAt(xo,za,this.up),this.quaternion.setFromRotationMatrix(hi),s&&(hi.extractRotation(s.matrixWorld),Hs.setFromRotationMatrix(hi),this.quaternion.premultiply(Hs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ze("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Sd),Gs.child=e,this.dispatchEvent(Gs),Gs.child=null):ze("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Um),su.child=e,this.dispatchEvent(su),su.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),hi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),hi.multiply(e.parent.matrixWorld)),e.applyMatrix4(hi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Sd),Gs.child=e,this.dispatchEvent(Gs),Gs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let r=this.children[i].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(za,e,Nm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(za,Dm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,s=e.z,a=this.matrix.elements;a[12]+=t-a[0]*t-a[4]*i-a[8]*s,a[13]+=i-a[1]*t-a[5]*i-a[9]*s,a[14]+=s-a[2]*t-a[6]*i-a[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let a=this.children;for(let r=0,o=a.length;r<o;r++)a[r].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let d=l[c];a(e.shapes,d)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(e.materials,this.material[l]));s.material=o}else s.material=a(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(a(e.animations,l))}}if(t){let o=r(e.geometries),l=r(e.materials),c=r(e.textures),u=r(e.images),d=r(e.shapes),h=r(e.skeletons),p=r(e.animations),g=r(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function r(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Jt.DEFAULT_UP=new I(0,1,0);Jt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Gt=class extends Jt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Fm={type:"move"},aa=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Gt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Gt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Gt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,a=null,r=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){r=!0;for(let v of e.hand.values()){let x=t.getJointPose(v,i),f=this._getHandJoint(c,v);x!==null&&(f.matrix.fromArray(x.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=x.radius),f.visible=x!==null}let u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),p=.02,g=.005;c.inputState.pinching&&h>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&a!==null&&(s=a),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Fm)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Gt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Pf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qi={h:0,s:0,l:0},_o={h:0,s:0,l:0};function au(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Ue=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Yt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ze.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=Ze.workingColorSpace){if(e=wm(e,1),t=Qe(t,0,1),i=Qe(i,0,1),t===0)this.r=this.g=this.b=i;else{let a=i<=.5?i*(1+t):i+t-i*t,r=2*i-a;this.r=au(r,a,e+1/3),this.g=au(r,a,e),this.b=au(r,a,e-1/3)}return Ze.colorSpaceToWorking(this,s),this}setStyle(e,t=Yt){function i(a){a!==void 0&&parseFloat(a)<1&&Fe("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let a,r=s[1],o=s[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:Fe("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let a=s[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(r===6)return this.setHex(parseInt(a,16),t);Fe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Yt){let i=Pf[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Fe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xi(e.r),this.g=xi(e.g),this.b=xi(e.b),this}copyLinearToSRGB(e){return this.r=ea(e.r),this.g=ea(e.g),this.b=ea(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Yt){return Ze.workingToColorSpace(nn.copy(this),e),Math.round(Qe(nn.r*255,0,255))*65536+Math.round(Qe(nn.g*255,0,255))*256+Math.round(Qe(nn.b*255,0,255))}getHexString(e=Yt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.workingToColorSpace(nn.copy(this),t);let i=nn.r,s=nn.g,a=nn.b,r=Math.max(i,s,a),o=Math.min(i,s,a),l,c,u=(o+r)/2;if(o===r)l=0,c=0;else{let d=r-o;switch(c=u<=.5?d/(r+o):d/(2-r-o),r){case i:l=(s-a)/d+(s<a?6:0);break;case s:l=(a-i)/d+2;break;case a:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ze.workingColorSpace){return Ze.workingToColorSpace(nn.copy(this),t),e.r=nn.r,e.g=nn.g,e.b=nn.b,e}getStyle(e=Yt){Ze.workingToColorSpace(nn.copy(this),e);let t=nn.r,i=nn.g,s=nn.b;return e!==Yt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(qi),this.setHSL(qi.h+e,qi.s+t,qi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(qi),e.getHSL(_o);let i=Qc(qi.h,_o.h,t),s=Qc(qi.s,_o.s,t),a=Qc(qi.l,_o.l,t);return this.setHSL(i,s,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*s,this.g=a[1]*t+a[4]*i+a[7]*s,this.b=a[2]*t+a[5]*i+a[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},nn=new Ue;Ue.NAMES=Pf;var Qa=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ue(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},er=class extends Jt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _i,this.environmentIntensity=1,this.environmentRotation=new _i,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Un=new I,di=new I,ru=new I,fi=new I,Ws=new I,Xs=new I,Td=new I,ou=new I,lu=new I,cu=new I,uu=new wt,hu=new wt,du=new wt,Vi=class n{constructor(e=new I,t=new I,i=new I){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Un.subVectors(e,t),s.cross(Un);let a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(e,t,i,s,a){Un.subVectors(s,t),di.subVectors(i,t),ru.subVectors(e,t);let r=Un.dot(Un),o=Un.dot(di),l=Un.dot(ru),c=di.dot(di),u=di.dot(ru),d=r*c-o*o;if(d===0)return a.set(0,0,0),null;let h=1/d,p=(c*l-o*u)*h,g=(r*u-o*l)*h;return a.set(1-p-g,g,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,fi)===null?!1:fi.x>=0&&fi.y>=0&&fi.x+fi.y<=1}static getInterpolation(e,t,i,s,a,r,o,l){return this.getBarycoord(e,t,i,s,fi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,fi.x),l.addScaledVector(r,fi.y),l.addScaledVector(o,fi.z),l)}static getInterpolatedAttribute(e,t,i,s,a,r){return uu.setScalar(0),hu.setScalar(0),du.setScalar(0),uu.fromBufferAttribute(e,t),hu.fromBufferAttribute(e,i),du.fromBufferAttribute(e,s),r.setScalar(0),r.addScaledVector(uu,a.x),r.addScaledVector(hu,a.y),r.addScaledVector(du,a.z),r}static isFrontFacing(e,t,i,s){return Un.subVectors(i,t),di.subVectors(e,t),Un.cross(di).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Un.subVectors(this.c,this.b),di.subVectors(this.a,this.b),Un.cross(di).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,a){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,a)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,a=this.c,r,o;Ws.subVectors(s,i),Xs.subVectors(a,i),ou.subVectors(e,i);let l=Ws.dot(ou),c=Xs.dot(ou);if(l<=0&&c<=0)return t.copy(i);lu.subVectors(e,s);let u=Ws.dot(lu),d=Xs.dot(lu);if(u>=0&&d<=u)return t.copy(s);let h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return r=l/(l-u),t.copy(i).addScaledVector(Ws,r);cu.subVectors(e,a);let p=Ws.dot(cu),g=Xs.dot(cu);if(g>=0&&p<=g)return t.copy(a);let v=p*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(Xs,o);let x=u*g-p*d;if(x<=0&&d-u>=0&&p-g>=0)return Td.subVectors(a,s),o=(d-u)/(d-u+(p-g)),t.copy(s).addScaledVector(Td,o);let f=1/(x+v+h);return r=v*f,o=h*f,t.copy(i).addScaledVector(Ws,r).addScaledVector(Xs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Hi=class{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Fn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Fn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Fn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let r=0,o=a.count;r<o;r++)e.isMesh===!0?e.getVertexPosition(r,Fn):Fn.fromBufferAttribute(a,r),Fn.applyMatrix4(e.matrixWorld),this.expandByPoint(Fn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),vo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),vo.copy(i.boundingBox)),vo.applyMatrix4(e.matrixWorld),this.union(vo)}let s=e.children;for(let a=0,r=s.length;a<r;a++)this.expandByObject(s[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Fn),Fn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ka),yo.subVectors(this.max,ka),Ys.subVectors(e.a,ka),$s.subVectors(e.b,ka),js.subVectors(e.c,ka),Bi.subVectors($s,Ys),zi.subVectors(js,$s),ms.subVectors(Ys,js);let t=[0,-Bi.z,Bi.y,0,-zi.z,zi.y,0,-ms.z,ms.y,Bi.z,0,-Bi.x,zi.z,0,-zi.x,ms.z,0,-ms.x,-Bi.y,Bi.x,0,-zi.y,zi.x,0,-ms.y,ms.x,0];return!fu(t,Ys,$s,js,yo)||(t=[1,0,0,0,1,0,0,0,1],!fu(t,Ys,$s,js,yo))?!1:(bo.crossVectors(Bi,zi),t=[bo.x,bo.y,bo.z],fu(t,Ys,$s,js,yo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Fn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Fn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(pi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},pi=[new I,new I,new I,new I,new I,new I,new I,new I],Fn=new I,vo=new Hi,Ys=new I,$s=new I,js=new I,Bi=new I,zi=new I,ms=new I,ka=new I,yo=new I,bo=new I,gs=new I;function fu(n,e,t,i,s){for(let a=0,r=n.length-3;a<=r;a+=3){gs.fromArray(n,a);let o=s.x*Math.abs(gs.x)+s.y*Math.abs(gs.y)+s.z*Math.abs(gs.z),l=e.dot(gs),c=t.dot(gs),u=i.dot(gs);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var Ut=new I,Mo=new ce,Om=0,on=class extends Kn{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Om++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Ef,this.updateRanges=[],this.gpuType=kn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Mo.fromBufferAttribute(this,t),Mo.applyMatrix3(e),this.setXY(t,Mo.x,Mo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix3(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix4(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ut.fromBufferAttribute(this,t),Ut.applyNormalMatrix(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ut.fromBufferAttribute(this,t),Ut.transformDirection(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ba(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=hn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ba(t,this.array)),t}setX(e,t){return this.normalized&&(t=hn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ba(t,this.array)),t}setY(e,t){return this.normalized&&(t=hn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ba(t,this.array)),t}setZ(e,t){return this.normalized&&(t=hn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ba(t,this.array)),t}setW(e,t){return this.normalized&&(t=hn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=hn(t,this.array),i=hn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=hn(t,this.array),i=hn(i,this.array),s=hn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,a){return e*=this.itemSize,this.normalized&&(t=hn(t,this.array),i=hn(i,this.array),s=hn(s,this.array),a=hn(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var tr=class extends on{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var nr=class extends on{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var nt=class extends on{constructor(e,t,i){super(new Float32Array(e),t,i)}},qm=new Hi,Va=new I,pu=new I,ys=class{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):qm.setFromPoints(e).getCenter(i);let s=0;for(let a=0,r=e.length;a<r;a++)s=Math.max(s,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Va.subVectors(e,this.center);let t=Va.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Va,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(pu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Va.copy(e.center).add(pu)),this.expandByPoint(Va.copy(e.center).sub(pu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Bm=0,Tn=new Mt,mu=new Jt,Js=new I,gn=new Hi,Ha=new Hi,Ht=new I,Rt=class n extends Kn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Bm++}),this.uuid=_a(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Tm(e)?nr:tr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let a=new We().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Tn.makeRotationFromQuaternion(e),this.applyMatrix4(Tn),this}rotateX(e){return Tn.makeRotationX(e),this.applyMatrix4(Tn),this}rotateY(e){return Tn.makeRotationY(e),this.applyMatrix4(Tn),this}rotateZ(e){return Tn.makeRotationZ(e),this.applyMatrix4(Tn),this}translate(e,t,i){return Tn.makeTranslation(e,t,i),this.applyMatrix4(Tn),this}scale(e,t,i){return Tn.makeScale(e,t,i),this.applyMatrix4(Tn),this}lookAt(e){return mu.lookAt(e),mu.updateMatrix(),this.applyMatrix4(mu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Js).negate(),this.translate(Js.x,Js.y,Js.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,a=e.length;s<a;s++){let r=e[s];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new nt(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let a=e[s];t.setXYZ(s,a.x,a.y,a.z||0)}e.length>t.count&&Fe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Hi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ze("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let a=t[i];gn.setFromBufferAttribute(a),this.morphTargetsRelative?(Ht.addVectors(this.boundingBox.min,gn.min),this.boundingBox.expandByPoint(Ht),Ht.addVectors(this.boundingBox.max,gn.max),this.boundingBox.expandByPoint(Ht)):(this.boundingBox.expandByPoint(gn.min),this.boundingBox.expandByPoint(gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ze('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ys);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ze("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){let i=this.boundingSphere.center;if(gn.setFromBufferAttribute(e),t)for(let a=0,r=t.length;a<r;a++){let o=t[a];Ha.setFromBufferAttribute(o),this.morphTargetsRelative?(Ht.addVectors(gn.min,Ha.min),gn.expandByPoint(Ht),Ht.addVectors(gn.max,Ha.max),gn.expandByPoint(Ht)):(gn.expandByPoint(Ha.min),gn.expandByPoint(Ha.max))}gn.getCenter(i);let s=0;for(let a=0,r=e.count;a<r;a++)Ht.fromBufferAttribute(e,a),s=Math.max(s,i.distanceToSquared(Ht));if(t)for(let a=0,r=t.length;a<r;a++){let o=t[a],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Ht.fromBufferAttribute(o,c),l&&(Js.fromBufferAttribute(e,c),Ht.add(Js)),s=Math.max(s,i.distanceToSquared(Ht))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ze('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ze("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,a=t.uv,r=this.getAttribute("tangent");(r===void 0||r.count!==i.count)&&(r=new on(new Float32Array(4*i.count),4),this.setAttribute("tangent",r));let o=[],l=[];for(let _=0;_<i.count;_++)o[_]=new I,l[_]=new I;let c=new I,u=new I,d=new I,h=new ce,p=new ce,g=new ce,v=new I,x=new I;function f(_,A,C){c.fromBufferAttribute(i,_),u.fromBufferAttribute(i,A),d.fromBufferAttribute(i,C),h.fromBufferAttribute(a,_),p.fromBufferAttribute(a,A),g.fromBufferAttribute(a,C),u.sub(c),d.sub(c),p.sub(h),g.sub(h);let F=1/(p.x*g.y-g.x*p.y);isFinite(F)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(F),x.copy(d).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(F),o[_].add(v),o[A].add(v),o[C].add(v),l[_].add(x),l[A].add(x),l[C].add(x))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let _=0,A=S.length;_<A;++_){let C=S[_],F=C.start,B=C.count;for(let H=F,L=F+B;H<L;H+=3)f(e.getX(H+0),e.getX(H+1),e.getX(H+2))}let T=new I,y=new I,E=new I,w=new I;function R(_){E.fromBufferAttribute(s,_),w.copy(E);let A=o[_];T.copy(A),T.sub(E.multiplyScalar(E.dot(A))).normalize(),y.crossVectors(w,A);let F=y.dot(l[_])<0?-1:1;r.setXYZW(_,T.x,T.y,T.z,F)}for(let _=0,A=S.length;_<A;++_){let C=S[_],F=C.start,B=C.count;for(let H=F,L=F+B;H<L;H+=3)R(e.getX(H+0)),R(e.getX(H+1)),R(e.getX(H+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new on(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);let s=new I,a=new I,r=new I,o=new I,l=new I,c=new I,u=new I,d=new I;if(e)for(let h=0,p=e.count;h<p;h+=3){let g=e.getX(h+0),v=e.getX(h+1),x=e.getX(h+2);s.fromBufferAttribute(t,g),a.fromBufferAttribute(t,v),r.fromBufferAttribute(t,x),u.subVectors(r,a),d.subVectors(s,a),u.cross(d),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,x),o.add(u),l.add(u),c.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(x,c.x,c.y,c.z)}else for(let h=0,p=t.count;h<p;h+=3)s.fromBufferAttribute(t,h+0),a.fromBufferAttribute(t,h+1),r.fromBufferAttribute(t,h+2),u.subVectors(r,a),d.subVectors(s,a),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ht.fromBufferAttribute(e,t),Ht.normalize(),e.setXYZ(t,Ht.x,Ht.y,Ht.z)}toNonIndexed(){function e(o,l){let c=o.array,u=o.itemSize,d=o.normalized,h=new c.constructor(l.length*u),p=0,g=0;for(let v=0,x=l.length;v<x;v++){o.isInterleavedBufferAttribute?p=l[v]*o.data.stride+o.offset:p=l[v]*u;for(let f=0;f<u;f++)h[g++]=c[p++]}return new on(h,u,d)}if(this.index===null)return Fe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,i);t.setAttribute(o,c)}let a=this.morphAttributes;for(let o in a){let l=[],c=a[o];for(let u=0,d=c.length;u<d;u++){let h=c[u],p=e(h,i);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let o=0,l=r.length;o<l;o++){let c=r[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},a=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){let p=c[d];u.push(p.toJSON(e.data))}u.length>0&&(s[l]=u,a=!0)}a&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let a=e.morphAttributes;for(let c in a){let u=[],d=a[c];for(let h=0,p=d.length;h<p;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let r=e.groups;for(let c=0,u=r.length;c<u;c++){let d=r[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var gu=new I,zm=new I,km=new We,On=class{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=gu.subVectors(i,t).cross(zm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let s=e.delta(gu),a=this.normal.dot(s);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/a;return i===!0&&(r<0||r>1)?null:t.copy(e.start).addScaledVector(s,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||km.getNormalMatrix(e),s=this.coplanarPoint(gu).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Vm=0,vi=class extends Kn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Vm++}),this.uuid=_a(),this.name="",this.type="Material",this.blending=ma,this.side=Ji,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ku,this.blendDst=Vu,this.blendEquation=As,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ue(0,0,0),this.blendAlpha=0,this.depthFunc=ta,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_f,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zo,this.stencilZFail=zo,this.stencilZPass=zo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Fe(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Fe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(a=>a.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(a){let r=[];for(let o in a){let l=a[o];delete l.metadata,r.push(l)}return r}if(t){let a=s(e.textures),r=s(e.images);a.length>0&&(i.textures=a),r.length>0&&(i.images=r)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ue().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new On().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new ce().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ce().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let a=0;a!==s;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var mi=new I,xu=new I,So=new I,To=new I,ir=class{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,mi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=mi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(mi.copy(this.origin).addScaledVector(this.direction,t),mi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){xu.copy(e).add(t).multiplyScalar(.5),So.copy(t).sub(e).normalize(),To.copy(this.origin).sub(xu);let a=e.distanceTo(t)*.5,r=-this.direction.dot(So),o=To.dot(this.direction),l=-To.dot(So),c=To.lengthSq(),u=Math.abs(1-r*r),d,h,p,g;if(u>0)if(d=r*l-o,h=r*o-l,g=a*u,d>=0)if(h>=-g)if(h<=g){let v=1/u;d*=v,h*=v,p=d*(d+r*h+2*o)+h*(r*d+h+2*l)+c}else h=a,d=Math.max(0,-(r*h+o)),p=-d*d+h*(h+2*l)+c;else h=-a,d=Math.max(0,-(r*h+o)),p=-d*d+h*(h+2*l)+c;else h<=-g?(d=Math.max(0,-(-r*a+o)),h=d>0?-a:Math.min(Math.max(-a,-l),a),p=-d*d+h*(h+2*l)+c):h<=g?(d=0,h=Math.min(Math.max(-a,-l),a),p=h*(h+2*l)+c):(d=Math.max(0,-(r*a+o)),h=d>0?a:Math.min(Math.max(-a,-l),a),p=-d*d+h*(h+2*l)+c);else h=r>0?-a:a,d=Math.max(0,-(r*h+o)),p=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(xu).addScaledVector(So,h),p}intersectSphere(e,t){if(e.radius<0)return null;mi.subVectors(e.center,this.origin);let i=mi.dot(this.direction),s=mi.dot(mi)-i*i,a=e.radius*e.radius;if(s>a)return null;let r=Math.sqrt(a-s),o=i-r,l=i+r;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,a,r,o,l,c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(a=(e.min.y-h.y)*u,r=(e.max.y-h.y)*u):(a=(e.max.y-h.y)*u,r=(e.min.y-h.y)*u),i>r||a>s||((a>i||isNaN(i))&&(i=a),(r<s||isNaN(s))&&(s=r),d>=0?(o=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(o=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,mi)!==null}intersectTriangle(e,t,i,s,a){let r=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,d=e.x-r.x,h=e.y-r.y,p=e.z-r.z,g=t.x-r.x,v=t.y-r.y,x=t.z-r.z,f=i.x-r.x,S=i.y-r.y,T=i.z-r.z,y=Math.abs(l),E=Math.abs(c),w=Math.abs(u),R,_,A,C,F,B,H,L,G,J,K,ae;if(y>=E&&y>=w?(A=l,B=d,G=g,ae=f,l>=0?(R=c,_=u,C=h,F=p,H=v,L=x,J=S,K=T):(R=u,_=c,C=p,F=h,H=x,L=v,J=T,K=S)):E>=w?(A=c,B=h,G=v,ae=S,c>=0?(R=u,_=l,C=p,F=d,H=x,L=g,J=T,K=f):(R=l,_=u,C=d,F=p,H=g,L=x,J=f,K=T)):(A=u,B=p,G=x,ae=T,u>=0?(R=l,_=c,C=d,F=h,H=g,L=v,J=f,K=S):(R=c,_=l,C=h,F=d,H=v,L=g,J=S,K=f)),A===0)return null;let $=R/A,ee=_/A,ne=1/A,De=C-$*B,Ie=F-ee*B,ht=H-$*G,tt=L-ee*G,it=J-$*ae,j=K-ee*ae,te=it*tt-j*ht,be=De*j-Ie*it,Ve=ht*Ie-tt*De;if(s){if(te<0||be<0||Ve<0)return null}else if((te<0||be<0||Ve<0)&&(te>0||be>0||Ve>0))return null;let ye=te+be+Ve;if(ye===0)return null;let Ye=ne*(te*B+be*G+Ve*ae);return(ye>0?Ye<0:Ye>0)?null:this.at(Ye/ye,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},xn=class extends vi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _i,this.combine=Hu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Ed=new Mt,xs=new ir,Eo=new ys,wd=new I,wo=new I,Ao=new I,Co=new I,_u=new I,Ro=new I,Ad=new I,Po=new I,Oe=class extends Jt{constructor(e=new Rt,t=new xn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){let o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,a=i.morphAttributes.position,r=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(a&&o){Ro.set(0,0,0);for(let l=0,c=a.length;l<c;l++){let u=o[l],d=a[l];u!==0&&(_u.fromBufferAttribute(d,e),r?Ro.addScaledVector(_u,u):Ro.addScaledVector(_u.sub(t),u))}t.add(Ro)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Eo.copy(i.boundingSphere),Eo.applyMatrix4(a),xs.copy(e.ray).recast(e.near),!(Eo.containsPoint(xs.origin)===!1&&(xs.intersectSphere(Eo,wd)===null||xs.origin.distanceToSquared(wd)>(e.far-e.near)**2))&&(Ed.copy(a).invert(),xs.copy(e.ray).applyMatrix4(Ed),!(i.boundingBox!==null&&xs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,xs)))}_computeIntersections(e,t,i){let s,a=this.geometry,r=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,u=a.attributes.uv1,d=a.attributes.normal,h=a.groups,p=a.drawRange;if(o!==null)if(Array.isArray(r))for(let g=0,v=h.length;g<v;g++){let x=h[g],f=r[x.materialIndex],S=Math.max(x.start,p.start),T=Math.min(o.count,Math.min(x.start+x.count,p.start+p.count));for(let y=S,E=T;y<E;y+=3){let w=o.getX(y),R=o.getX(y+1),_=o.getX(y+2);s=Io(this,f,e,i,c,u,d,w,R,_),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=x.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);for(let x=g,f=v;x<f;x+=3){let S=o.getX(x),T=o.getX(x+1),y=o.getX(x+2);s=Io(this,r,e,i,c,u,d,S,T,y),s&&(s.faceIndex=Math.floor(x/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(r))for(let g=0,v=h.length;g<v;g++){let x=h[g],f=r[x.materialIndex],S=Math.max(x.start,p.start),T=Math.min(l.count,Math.min(x.start+x.count,p.start+p.count));for(let y=S,E=T;y<E;y+=3){let w=y,R=y+1,_=y+2;s=Io(this,f,e,i,c,u,d,w,R,_),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=x.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let x=g,f=v;x<f;x+=3){let S=x,T=x+1,y=x+2;s=Io(this,r,e,i,c,u,d,S,T,y),s&&(s.faceIndex=Math.floor(x/3),t.push(s))}}}};function Hm(n,e,t,i,s,a,r,o){let l;if(e.side===cn?l=i.intersectTriangle(r,a,s,!0,o):l=i.intersectTriangle(s,a,r,e.side===Ji,o),l===null)return null;Po.copy(o),Po.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(Po);return c<t.near||c>t.far?null:{distance:c,point:Po.clone(),object:n}}function Io(n,e,t,i,s,a,r,o,l,c){n.getVertexPosition(o,wo),n.getVertexPosition(l,Ao),n.getVertexPosition(c,Co);let u=Hm(n,e,t,i,wo,Ao,Co,Ad);if(u){let d=new I;Vi.getBarycoord(Ad,wo,Ao,Co,d),s&&(u.uv=Vi.getInterpolatedAttribute(s,o,l,c,d,new ce)),a&&(u.uv1=Vi.getInterpolatedAttribute(a,o,l,c,d,new ce)),r&&(u.normal=Vi.getInterpolatedAttribute(r,o,l,c,d,new I),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let h={a:o,b:l,c,normal:new I,materialIndex:0};Vi.getNormal(wo,Ao,Co,h.normal),u.face=h,u.barycoord=d}return u}var tl=class extends ln{constructor(e=null,t=1,i=1,s,a,r,o,l,c=Wt,u=Wt,d,h){super(null,r,o,l,c,u,s,a,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var _s=new ys,Gm=new ce(.5,.5),Lo=new I,ra=class{constructor(e=new On,t=new On,i=new On,s=new On,a=new On,r=new On){this.planes=[e,t,i,s,a,r]}set(e,t,i,s,a,r){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(a),o[5].copy(r),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=qn,i=!1){let s=this.planes,a=e.elements,r=a[0],o=a[1],l=a[2],c=a[3],u=a[4],d=a[5],h=a[6],p=a[7],g=a[8],v=a[9],x=a[10],f=a[11],S=a[12],T=a[13],y=a[14],E=a[15];if(s[0].setComponents(c-r,p-u,f-g,E-S).normalize(),s[1].setComponents(c+r,p+u,f+g,E+S).normalize(),s[2].setComponents(c+o,p+d,f+v,E+T).normalize(),s[3].setComponents(c-o,p-d,f-v,E-T).normalize(),i)s[4].setComponents(l,h,x,y).normalize(),s[5].setComponents(c-l,p-h,f-x,E-y).normalize();else if(s[4].setComponents(c-l,p-h,f-x,E-y).normalize(),t===qn)s[5].setComponents(c+l,p+h,f+x,E+y).normalize();else if(t===na)s[5].setComponents(l,h,x,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),_s.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),_s.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(_s)}intersectsSprite(e){_s.center.set(0,0,0);let t=Gm.distanceTo(e.center);return _s.radius=.7071067811865476+t,_s.applyMatrix4(e.matrixWorld),this.intersectsSphere(_s)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(Lo.x=s.normal.x>0?e.max.x:e.min.x,Lo.y=s.normal.y>0?e.max.y:e.min.y,Lo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Lo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var oa=class extends vi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ue(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Cd=new Mt,Cu=new ir,No=new ys,Do=new I,sr=class extends Jt{constructor(e=new Rt,t=new oa){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.matrixWorld,a=e.params.Points.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),No.copy(i.boundingSphere),No.applyMatrix4(s),No.radius+=a,e.ray.intersectsSphere(No)===!1)return;Cd.copy(s).invert(),Cu.copy(e.ray).applyMatrix4(Cd);let o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,d=i.attributes.position;if(c!==null){let h=Math.max(0,r.start),p=Math.min(c.count,r.start+r.count);for(let g=h,v=p;g<v;g++){let x=c.getX(g);Do.fromBufferAttribute(d,x),Rd(Do,x,l,s,e,t,this)}}else{let h=Math.max(0,r.start),p=Math.min(d.count,r.start+r.count);for(let g=h,v=p;g<v;g++)Do.fromBufferAttribute(d,g),Rd(Do,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){let o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}};function Rd(n,e,t,i,s,a,r){let o=Cu.distanceSqToPoint(n);if(o<t){let l=new I;Cu.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;a.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:r})}}var ar=class extends ln{constructor(e=[],t=Ki,i,s,a,r,o,l,c,u){super(e,t,i,s,a,r,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},bs=class extends ln{constructor(e,t,i,s,a,r,o,l,c){super(e,t,i,s,a,r,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Gi=class extends ln{constructor(e,t,i=zn,s,a,r,o=Wt,l=Wt,c,u=Zn,d=1){if(u!==Zn&&u!==es)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:e,height:t,depth:d};super(h,s,a,r,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new sa(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},nl=class extends Gi{constructor(e,t=zn,i=Ki,s,a,r=Wt,o=Wt,l,c=Zn){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,i,s,a,r,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},rr=class extends ln{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Bt=class n extends Rt{constructor(e=1,t=1,i=1,s=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:a,depthSegments:r};let o=this;s=Math.floor(s),a=Math.floor(a),r=Math.floor(r);let l=[],c=[],u=[],d=[],h=0,p=0;g("z","y","x",-1,-1,i,t,e,r,a,0),g("z","y","x",1,-1,i,t,-e,r,a,1),g("x","z","y",1,1,e,i,t,s,r,2),g("x","z","y",1,-1,e,i,-t,s,r,3),g("x","y","z",1,-1,e,t,i,s,a,4),g("x","y","z",-1,-1,e,t,-i,s,a,5),this.setIndex(l),this.setAttribute("position",new nt(c,3)),this.setAttribute("normal",new nt(u,3)),this.setAttribute("uv",new nt(d,2));function g(v,x,f,S,T,y,E,w,R,_,A){let C=y/R,F=E/_,B=y/2,H=E/2,L=w/2,G=R+1,J=_+1,K=0,ae=0,$=new I;for(let ee=0;ee<J;ee++){let ne=ee*F-H;for(let De=0;De<G;De++){let Ie=De*C-B;$[v]=Ie*S,$[x]=ne*T,$[f]=L,c.push($.x,$.y,$.z),$[v]=0,$[x]=0,$[f]=w>0?1:-1,u.push($.x,$.y,$.z),d.push(De/R),d.push(1-ee/_),K+=1}}for(let ee=0;ee<_;ee++)for(let ne=0;ne<R;ne++){let De=h+ne+G*ee,Ie=h+ne+G*(ee+1),ht=h+(ne+1)+G*(ee+1),tt=h+(ne+1)+G*ee;l.push(De,Ie,tt),l.push(Ie,ht,tt),ae+=6}o.addGroup(p,ae,A),p+=ae,h+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},Ms=class n extends Rt{constructor(e=1,t=1,i=4,s=8,a=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:s,heightSegments:a},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),s=Math.max(3,Math.floor(s)),a=Math.max(1,Math.floor(a));let r=[],o=[],l=[],c=[],u=t/2,d=Math.PI/2*e,h=t,p=2*d+h,g=i*2+a,v=s+1,x=new I,f=new I;for(let S=0;S<=g;S++){let T=0,y=0,E=0,w=0;if(S<=i){let A=S/i,C=A*Math.PI/2;y=-u-e*Math.cos(C),E=e*Math.sin(C),w=-e*Math.cos(C),T=A*d}else if(S<=i+a){let A=(S-i)/a;y=-u+A*t,E=e,w=0,T=d+A*h}else{let A=(S-i-a)/i,C=A*Math.PI/2;y=u+e*Math.sin(C),E=e*Math.cos(C),w=e*Math.sin(C),T=d+h+A*d}let R=Math.max(0,Math.min(1,T/p)),_=0;S===0?_=.5/s:S===g&&(_=-.5/s);for(let A=0;A<=s;A++){let C=A/s,F=C*Math.PI*2,B=Math.sin(F),H=Math.cos(F);f.x=-E*H,f.y=y,f.z=E*B,o.push(f.x,f.y,f.z),x.set(-E*H,w,E*B),x.normalize(),l.push(x.x,x.y,x.z),c.push(C+_,R)}if(S>0){let A=(S-1)*v;for(let C=0;C<s;C++){let F=A+C,B=A+C+1,H=S*v+C,L=S*v+C+1;r.push(F,B,H),r.push(B,L,H)}}}this.setIndex(r),this.setAttribute("position",new nt(o,3)),this.setAttribute("normal",new nt(l,3)),this.setAttribute("uv",new nt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},la=class n extends Rt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let a=[],r=[],o=[],l=[],c=new I,u=new ce;r.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,h=3;d<=t;d++,h+=3){let p=i+d/t*s;c.x=e*Math.cos(p),c.y=e*Math.sin(p),r.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(r[h]/e+1)/2,u.y=(r[h+1]/e+1)/2,l.push(u.x,u.y)}for(let d=1;d<=t;d++)a.push(d,d+1,0);this.setIndex(a),this.setAttribute("position",new nt(r,3)),this.setAttribute("normal",new nt(o,3)),this.setAttribute("uv",new nt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},yi=class n extends Rt{constructor(e=1,t=1,i=1,s=32,a=1,r=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:a,openEnded:r,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),a=Math.floor(a);let u=[],d=[],h=[],p=[],g=0,v=[],x=i/2,f=0;S(),r===!1&&(e>0&&T(!0),t>0&&T(!1)),this.setIndex(u),this.setAttribute("position",new nt(d,3)),this.setAttribute("normal",new nt(h,3)),this.setAttribute("uv",new nt(p,2));function S(){let y=new I,E=new I,w=0,R=(t-e)/i;for(let _=0;_<=a;_++){let A=[],C=_/a,F=C*(t-e)+e;for(let B=0;B<=s;B++){let H=B/s,L=H*l+o,G=Math.sin(L),J=Math.cos(L);E.x=F*G,E.y=-C*i+x,E.z=F*J,d.push(E.x,E.y,E.z),y.set(G,R,J).normalize(),h.push(y.x,y.y,y.z),p.push(H,1-C),A.push(g++)}v.push(A)}for(let _=0;_<s;_++)for(let A=0;A<a;A++){let C=v[A][_],F=v[A+1][_],B=v[A+1][_+1],H=v[A][_+1];(e>0||A!==0)&&(u.push(C,F,H),w+=3),(t>0||A!==a-1)&&(u.push(F,B,H),w+=3)}c.addGroup(f,w,0),f+=w}function T(y){let E=g,w=new ce,R=new I,_=0,A=y===!0?e:t,C=y===!0?1:-1;for(let B=1;B<=s;B++)d.push(0,x*C,0),h.push(0,C,0),p.push(.5,.5),g++;let F=g;for(let B=0;B<=s;B++){let L=B/s*l+o,G=Math.cos(L),J=Math.sin(L);R.x=A*J,R.y=x*C,R.z=A*G,d.push(R.x,R.y,R.z),h.push(0,C,0),w.x=G*.5+.5,w.y=J*.5*C+.5,p.push(w.x,w.y),g++}for(let B=0;B<s;B++){let H=E+B,L=F+B;y===!0?u.push(L,L+1,H):u.push(L+1,L,H),_+=3}c.addGroup(f,_,y===!0?1:2),f+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},or=class n extends yi{constructor(e=1,t=1,i=32,s=1,a=!1,r=0,o=Math.PI*2){super(0,e,t,i,s,a,r,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:r,thetaLength:o}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},il=class n extends Rt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let a=[],r=[];o(s),c(i),u(),this.setAttribute("position",new nt(a,3)),this.setAttribute("normal",new nt(a.slice(),3)),this.setAttribute("uv",new nt(r,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(S){let T=new I,y=new I,E=new I;for(let w=0;w<t.length;w+=3)p(t[w+0],T),p(t[w+1],y),p(t[w+2],E),l(T,y,E,S)}function l(S,T,y,E){let w=E+1,R=[];for(let _=0;_<=w;_++){R[_]=[];let A=S.clone().lerp(y,_/w),C=T.clone().lerp(y,_/w),F=w-_;for(let B=0;B<=F;B++)B===0&&_===w?R[_][B]=A:R[_][B]=A.clone().lerp(C,B/F)}for(let _=0;_<w;_++)for(let A=0;A<2*(w-_)-1;A++){let C=Math.floor(A/2);A%2===0?(h(R[_][C+1]),h(R[_+1][C]),h(R[_][C])):(h(R[_][C+1]),h(R[_+1][C+1]),h(R[_+1][C]))}}function c(S){let T=new I;for(let y=0;y<a.length;y+=3)T.x=a[y+0],T.y=a[y+1],T.z=a[y+2],T.normalize().multiplyScalar(S),a[y+0]=T.x,a[y+1]=T.y,a[y+2]=T.z}function u(){let S=new I;for(let T=0;T<a.length;T+=3){S.x=a[T+0],S.y=a[T+1],S.z=a[T+2];let y=x(S)/2/Math.PI+.5,E=f(S)/Math.PI+.5;r.push(y,1-E)}g(),d()}function d(){for(let S=0;S<r.length;S+=6){let T=r[S+0],y=r[S+2],E=r[S+4],w=Math.max(T,y,E),R=Math.min(T,y,E);w>.9&&R<.1&&(T<.2&&(r[S+0]+=1),y<.2&&(r[S+2]+=1),E<.2&&(r[S+4]+=1))}}function h(S){a.push(S.x,S.y,S.z)}function p(S,T){let y=S*3;T.x=e[y+0],T.y=e[y+1],T.z=e[y+2]}function g(){let S=new I,T=new I,y=new I,E=new I,w=new ce,R=new ce,_=new ce;for(let A=0,C=0;A<a.length;A+=9,C+=6){S.set(a[A+0],a[A+1],a[A+2]),T.set(a[A+3],a[A+4],a[A+5]),y.set(a[A+6],a[A+7],a[A+8]),w.set(r[C+0],r[C+1]),R.set(r[C+2],r[C+3]),_.set(r[C+4],r[C+5]),E.copy(S).add(T).add(y).divideScalar(3);let F=x(E);v(w,C+0,S,F),v(R,C+2,T,F),v(_,C+4,y,F)}}function v(S,T,y,E){E<0&&S.x===1&&(r[T]=S.x-1),y.x===0&&y.z===0&&(r[T]=E/2/Math.PI+.5)}function x(S){return Math.atan2(S.z,-S.x)}function f(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.detail)}};var _n=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Fe("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),a=0;t.push(0);for(let r=1;r<=e;r++)i=this.getPoint(r/e),a+=i.distanceTo(s),t.push(a),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),s=0,a=i.length,r;t?r=t:r=e*i[a-1];let o=0,l=a-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=i[s]-r,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===r)return s/(a-1);let u=i[s],h=i[s+1]-u,p=(r-u)/h;return(s+p)/(a-1)}getTangent(e,t){let s=e-1e-4,a=e+1e-4;s<0&&(s=0),a>1&&(a=1);let r=this.getPoint(s),o=this.getPoint(a),l=t||(r.isVector2?new ce:new I);return l.copy(o).sub(r).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new I,s=[],a=[],r=[],o=new I,l=new Mt;for(let p=0;p<=e;p++){let g=p/e;s[p]=this.getTangentAt(g,new I)}a[0]=new I,r[0]=new I;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),d=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=c&&(c=u,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),h<=c&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),a[0].crossVectors(s[0],o),r[0].crossVectors(s[0],a[0]);for(let p=1;p<=e;p++){if(a[p]=a[p-1].clone(),r[p]=r[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(Qe(s[p-1].dot(s[p]),-1,1));a[p].applyMatrix4(l.makeRotationAxis(o,g))}r[p].crossVectors(s[p],a[p])}if(t===!0){let p=Math.acos(Qe(a[0].dot(a[e]),-1,1));p/=e,s[0].dot(o.crossVectors(a[0],a[e]))>0&&(p=-p);for(let g=1;g<=e;g++)a[g].applyMatrix4(l.makeRotationAxis(s[g],p*g)),r[g].crossVectors(s[g],a[g])}return{tangents:s,normals:a,binormals:r}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},ca=class extends _n{constructor(e=0,t=0,i=1,s=1,a=0,r=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=a,this.aEndAngle=r,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new ce){let i=t,s=Math.PI*2,a=this.aEndAngle-this.aStartAngle,r=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=s;for(;a>s;)a-=s;a<Number.EPSILON&&(r?a=0:a=s),this.aClockwise===!0&&!r&&(a===s?a=-s:a=a-s);let o=this.aStartAngle+e*a,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=l-this.aX,p=c-this.aY;l=h*u-p*d+this.aX,c=h*d+p*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},sl=class extends ca{constructor(e,t,i,s,a,r){super(e,t,i,i,s,a,r),this.isArcCurve=!0,this.type="ArcCurve"}};function eh(){let n=0,e=0,t=0,i=0;function s(a,r,o,l){n=a,e=o,t=-3*a+3*r-2*o-l,i=2*a-2*r+o+l}return{initCatmullRom:function(a,r,o,l,c){s(r,o,c*(o-a),c*(l-r))},initNonuniformCatmullRom:function(a,r,o,l,c,u,d){let h=(r-a)/c-(o-a)/(c+u)+(o-r)/u,p=(o-r)/u-(l-r)/(u+d)+(l-o)/d;h*=u,p*=u,s(r,o,h,p)},calc:function(a){let r=a*a,o=r*a;return n+e*a+t*r+i*o}}}var Pd=new I,Id=new I,vu=new eh,yu=new eh,bu=new eh,al=class extends _n{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new I){let i=t,s=this.points,a=s.length,r=(a-(this.closed?0:1))*e,o=Math.floor(r),l=r-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/a)+1)*a:l===0&&o===a-1&&(o=a-2,l=1);let c,u;this.closed||o>0?c=s[(o-1)%a]:(Id.subVectors(s[0],s[1]).add(s[0]),c=Id);let d=s[o%a],h=s[(o+1)%a];if(this.closed||o+2<a?u=s[(o+2)%a]:(Pd.subVectors(s[a-1],s[a-2]).add(s[a-1]),u=Pd),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(d),p),v=Math.pow(d.distanceToSquared(h),p),x=Math.pow(h.distanceToSquared(u),p);v<1e-4&&(v=1),g<1e-4&&(g=v),x<1e-4&&(x=v),vu.initNonuniformCatmullRom(c.x,d.x,h.x,u.x,g,v,x),yu.initNonuniformCatmullRom(c.y,d.y,h.y,u.y,g,v,x),bu.initNonuniformCatmullRom(c.z,d.z,h.z,u.z,g,v,x)}else this.curveType==="catmullrom"&&(vu.initCatmullRom(c.x,d.x,h.x,u.x,this.tension),yu.initCatmullRom(c.y,d.y,h.y,u.y,this.tension),bu.initCatmullRom(c.z,d.z,h.z,u.z,this.tension));return i.set(vu.calc(l),yu.calc(l),bu.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new I().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Ld(n,e,t,i,s){let a=(i-e)*.5,r=(s-t)*.5,o=n*n,l=n*o;return(2*t-2*i+a+r)*l+(-3*t+3*i-2*a-r)*o+a*n+t}function Wm(n,e){let t=1-n;return t*t*e}function Xm(n,e){return 2*(1-n)*n*e}function Ym(n,e){return n*n*e}function Wa(n,e,t,i){return Wm(n,e)+Xm(n,t)+Ym(n,i)}function $m(n,e){let t=1-n;return t*t*t*e}function jm(n,e){let t=1-n;return 3*t*t*n*e}function Jm(n,e){return 3*(1-n)*n*n*e}function Zm(n,e){return n*n*n*e}function Xa(n,e,t,i,s){return $m(n,e)+jm(n,t)+Jm(n,i)+Zm(n,s)}var lr=class extends _n{constructor(e=new ce,t=new ce,i=new ce,s=new ce){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new ce){let i=t,s=this.v0,a=this.v1,r=this.v2,o=this.v3;return i.set(Xa(e,s.x,a.x,r.x,o.x),Xa(e,s.y,a.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},rl=class extends _n{constructor(e=new I,t=new I,i=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new I){let i=t,s=this.v0,a=this.v1,r=this.v2,o=this.v3;return i.set(Xa(e,s.x,a.x,r.x,o.x),Xa(e,s.y,a.y,r.y,o.y),Xa(e,s.z,a.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},cr=class extends _n{constructor(e=new ce,t=new ce){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ce){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ce){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ol=class extends _n{constructor(e=new I,t=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new I){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new I){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ur=class extends _n{constructor(e=new ce,t=new ce,i=new ce){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ce){let i=t,s=this.v0,a=this.v1,r=this.v2;return i.set(Wa(e,s.x,a.x,r.x),Wa(e,s.y,a.y,r.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ll=class extends _n{constructor(e=new I,t=new I,i=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new I){let i=t,s=this.v0,a=this.v1,r=this.v2;return i.set(Wa(e,s.x,a.x,r.x),Wa(e,s.y,a.y,r.y),Wa(e,s.z,a.z,r.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},hr=class extends _n{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ce){let i=t,s=this.points,a=(s.length-1)*e,r=Math.floor(a),o=a-r,l=s[r===0?r:r-1],c=s[r],u=s[r>s.length-2?s.length-1:r+1],d=s[r>s.length-3?s.length-1:r+2];return i.set(Ld(o,l.x,c.x,u.x,d.x),Ld(o,l.y,c.y,u.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new ce().fromArray(s))}return this}},Nd=Object.freeze({__proto__:null,ArcCurve:sl,CatmullRomCurve3:al,CubicBezierCurve:lr,CubicBezierCurve3:rl,EllipseCurve:ca,LineCurve:cr,LineCurve3:ol,QuadraticBezierCurve:ur,QuadraticBezierCurve3:ll,SplineCurve:hr}),cl=class extends _n{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Nd[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),a=0;for(;a<s.length;){if(s[a]>=i){let r=s[a]-i,o=this.curves[a],l=o.getLength(),c=l===0?0:1-r/l;return o.getPointAt(c,t)}a++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,a=this.curves;s<a.length;s++){let r=a[s],o=r.isEllipseCurve?e*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?e*r.points.length:e,l=r.getPoints(o);for(let c=0;c<l.length;c++){let u=l[c];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new Nd[s.type]().fromJSON(s))}return this}},Ss=class extends cl{constructor(e){super(),this.type="Path",this.currentPoint=new ce,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new cr(this.currentPoint.clone(),new ce(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let a=new ur(this.currentPoint.clone(),new ce(e,t),new ce(i,s));return this.curves.push(a),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,a,r){let o=new lr(this.currentPoint.clone(),new ce(e,t),new ce(i,s),new ce(a,r));return this.curves.push(o),this.currentPoint.set(a,r),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new hr(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,a,r){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,s,a,r),this}absarc(e,t,i,s,a,r){return this.absellipse(e,t,i,i,s,a,r),this}ellipse(e,t,i,s,a,r,o,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,i,s,a,r,o,l),this}absellipse(e,t,i,s,a,r,o,l){let c=new ca(e,t,i,s,a,r,o,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},ul=class extends Ss{constructor(e){super(e),this.uuid=_a(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new Ss().fromJSON(s))}return this}};function Km(n,e,t=2){let i=e&&e.length,s=i?e[0]*t:n.length,a=If(n,0,s,t,!0),r=[];if(!a||a.next===a.prev)return r;let o,l,c;if(i&&(a=i0(n,e,a,t)),n.length>80*t){o=n[0],l=n[1];let u=o,d=l;for(let h=t;h<s;h+=t){let p=n[h],g=n[h+1];p<o&&(o=p),g<l&&(l=g),p>u&&(u=p),g>d&&(d=g)}c=Math.max(u-o,d-l),c=c!==0?32767/c:0}return dr(a,r,t,o,l,c,0),r}function If(n,e,t,i,s){let a;if(s===p0(n,e,t,i)>0)for(let r=e;r<t;r+=i)a=Dd(r/i|0,n[r],n[r+1],a);else for(let r=t-i;r>=e;r-=i)a=Dd(r/i|0,n[r],n[r+1],a);return a&&ua(a,a.next)&&(pr(a),a=a.next),a}function Ts(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(ua(t,t.next)||At(t.prev,t,t.next)===0)){if(pr(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function dr(n,e,t,i,s,a,r){if(!n)return;!r&&a&&l0(n,i,s,a);let o=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(a?e0(n,i,s,a):Qm(n)){e.push(l.i,n.i,c.i),pr(n),n=c.next,o=c.next;continue}if(n=c,n===o){r?r===1?(n=t0(Ts(n),e),dr(n,e,t,i,s,a,2)):r===2&&n0(n,e,t,i,s,a):dr(Ts(n),e,t,i,s,a,1);break}}}function Qm(n){let e=n.prev,t=n,i=n.next;if(At(e,t,i)>=0)return!1;let s=e.x,a=t.x,r=i.x,o=e.y,l=t.y,c=i.y,u=Math.min(s,a,r),d=Math.min(o,l,c),h=Math.max(s,a,r),p=Math.max(o,l,c),g=i.next;for(;g!==e;){if(g.x>=u&&g.x<=h&&g.y>=d&&g.y<=p&&Ga(s,o,a,l,r,c,g.x,g.y)&&At(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function e0(n,e,t,i){let s=n.prev,a=n,r=n.next;if(At(s,a,r)>=0)return!1;let o=s.x,l=a.x,c=r.x,u=s.y,d=a.y,h=r.y,p=Math.min(o,l,c),g=Math.min(u,d,h),v=Math.max(o,l,c),x=Math.max(u,d,h),f=Ru(p,g,e,t,i),S=Ru(v,x,e,t,i),T=n.prevZ,y=n.nextZ;for(;T&&T.z>=f&&y&&y.z<=S;){if(T.x>=p&&T.x<=v&&T.y>=g&&T.y<=x&&T!==s&&T!==r&&Ga(o,u,l,d,c,h,T.x,T.y)&&At(T.prev,T,T.next)>=0||(T=T.prevZ,y.x>=p&&y.x<=v&&y.y>=g&&y.y<=x&&y!==s&&y!==r&&Ga(o,u,l,d,c,h,y.x,y.y)&&At(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;T&&T.z>=f;){if(T.x>=p&&T.x<=v&&T.y>=g&&T.y<=x&&T!==s&&T!==r&&Ga(o,u,l,d,c,h,T.x,T.y)&&At(T.prev,T,T.next)>=0)return!1;T=T.prevZ}for(;y&&y.z<=S;){if(y.x>=p&&y.x<=v&&y.y>=g&&y.y<=x&&y!==s&&y!==r&&Ga(o,u,l,d,c,h,y.x,y.y)&&At(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function t0(n,e){let t=n;do{let i=t.prev,s=t.next.next;!ua(i,s)&&Nf(i,t,t.next,s)&&fr(i,s)&&fr(s,i)&&(e.push(i.i,t.i,s.i),pr(t),pr(t.next),t=n=s),t=t.next}while(t!==n);return Ts(t)}function n0(n,e,t,i,s,a){let r=n;do{let o=r.next.next;for(;o!==r.prev;){if(r.i!==o.i&&h0(r,o)){let l=Df(r,o);r=Ts(r,r.next),l=Ts(l,l.next),dr(r,e,t,i,s,a,0),dr(l,e,t,i,s,a,0);return}o=o.next}r=r.next}while(r!==n)}function i0(n,e,t,i){let s=[];for(let a=0,r=e.length;a<r;a++){let o=e[a]*i,l=a<r-1?e[a+1]*i:n.length,c=If(n,o,l,i,!1);c===c.next&&(c.steiner=!0),s.push(u0(c))}s.sort(s0);for(let a=0;a<s.length;a++)t=a0(s[a],t);return t}function s0(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function a0(n,e){let t=r0(n,e);if(!t)return e;let i=Df(t,n);return Ts(i,i.next),Ts(t,t.next)}function r0(n,e){let t=e,i=n.x,s=n.y,a=-1/0,r;if(ua(n,t))return t;do{if(ua(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let d=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=i&&d>a&&(a=d,r=t.x<t.next.x?t:t.next,d===i))return r}t=t.next}while(t!==e);if(!r)return null;let o=r,l=r.x,c=r.y,u=1/0;t=r;do{if(i>=t.x&&t.x>=l&&i!==t.x&&Lf(s<c?i:a,s,l,c,s<c?a:i,s,t.x,t.y)){let d=Math.abs(s-t.y)/(i-t.x);fr(t,n)&&(d<u||d===u&&(t.x>r.x||t.x===r.x&&o0(r,t)))&&(r=t,u=d)}t=t.next}while(t!==o);return r}function o0(n,e){return At(n.prev,n,e.prev)<0&&At(e.next,n,n.next)<0}function l0(n,e,t,i){let s=n;do s.z===0&&(s.z=Ru(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,c0(s)}function c0(n){let e,t=1;do{let i=n,s;n=null;let a=null;for(e=0;i;){e++;let r=i,o=0;for(let c=0;c<t&&(o++,r=r.nextZ,!!r);c++);let l=t;for(;o>0||l>0&&r;)o!==0&&(l===0||!r||i.z<=r.z)?(s=i,i=i.nextZ,o--):(s=r,r=r.nextZ,l--),a?a.nextZ=s:n=s,s.prevZ=a,a=s;i=r}a.nextZ=null,t*=2}while(e>1);return n}function Ru(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function u0(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Lf(n,e,t,i,s,a,r,o){return(s-r)*(e-o)>=(n-r)*(a-o)&&(n-r)*(i-o)>=(t-r)*(e-o)&&(t-r)*(a-o)>=(s-r)*(i-o)}function Ga(n,e,t,i,s,a,r,o){return!(n===r&&e===o)&&Lf(n,e,t,i,s,a,r,o)}function h0(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!d0(n,e)&&(fr(n,e)&&fr(e,n)&&f0(n,e)&&(At(n.prev,n,e.prev)||At(n,e.prev,e))||ua(n,e)&&At(n.prev,n,n.next)>0&&At(e.prev,e,e.next)>0)}function At(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function ua(n,e){return n.x===e.x&&n.y===e.y}function Nf(n,e,t,i){let s=Fo(At(n,e,t)),a=Fo(At(n,e,i)),r=Fo(At(t,i,n)),o=Fo(At(t,i,e));return!!(s!==a&&r!==o||s===0&&Uo(n,t,e)||a===0&&Uo(n,i,e)||r===0&&Uo(t,n,i)||o===0&&Uo(t,e,i))}function Uo(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Fo(n){return n>0?1:n<0?-1:0}function d0(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Nf(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function fr(n,e){return At(n.prev,n,n.next)<0?At(n,e,n.next)>=0&&At(n,n.prev,e)>=0:At(n,e,n.prev)<0||At(n,n.next,e)<0}function f0(n,e){let t=n,i=!1,s=(n.x+e.x)/2,a=(n.y+e.y)/2;do t.y>a!=t.next.y>a&&t.next.y!==t.y&&s<(t.next.x-t.x)*(a-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Df(n,e){let t=Pu(n.i,n.x,n.y),i=Pu(e.i,e.x,e.y),s=n.next,a=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,a.next=i,i.prev=a,i}function Dd(n,e,t,i){let s=Pu(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function pr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Pu(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function p0(n,e,t,i){let s=0;for(let a=e,r=t-i;a<t;a+=i)s+=(n[r]-n[a])*(n[a+1]+n[r+1]),r=a;return s}var Iu=class{static triangulate(e,t,i=2){return Km(e,t,i)}},hl=class n{static area(e){let t=e.length,i=0;for(let s=t-1,a=0;a<t;s=a++)i+=e[s].x*e[a].y-e[a].x*e[s].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],s=[],a=[];Ud(e),Fd(i,e);let r=e.length;t.forEach(Ud);for(let l=0;l<t.length;l++)s.push(r),r+=t[l].length,Fd(i,t[l]);let o=Iu.triangulate(i,s);for(let l=0;l<o.length;l+=3)a.push(o.slice(l,l+3));return a}};function Ud(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Fd(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var ei=class n extends Rt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let a=e/2,r=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,u=l+1,d=e/o,h=t/l,p=[],g=[],v=[],x=[];for(let f=0;f<u;f++){let S=f*h-r;for(let T=0;T<c;T++){let y=T*d-a;g.push(y,-S,0),v.push(0,0,1),x.push(T/o),x.push(1-f/l)}}for(let f=0;f<l;f++)for(let S=0;S<o;S++){let T=S+c*f,y=S+c*(f+1),E=S+1+c*(f+1),w=S+1+c*f;p.push(T,y,w),p.push(y,E,w)}this.setIndex(p),this.setAttribute("position",new nt(g,3)),this.setAttribute("normal",new nt(v,3)),this.setAttribute("uv",new nt(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},mr=class n extends Rt{constructor(e=.5,t=1,i=32,s=1,a=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:a,thetaLength:r},i=Math.max(3,i),s=Math.max(1,s);let o=[],l=[],c=[],u=[],d=e,h=(t-e)/s,p=new I,g=new ce;for(let v=0;v<=s;v++){for(let x=0;x<=i;x++){let f=a+x/i*r;p.x=d*Math.cos(f),p.y=d*Math.sin(f),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/t+1)/2,g.y=(p.y/t+1)/2,u.push(g.x,g.y)}d+=h}for(let v=0;v<s;v++){let x=v*(i+1);for(let f=0;f<i;f++){let S=f+x,T=S,y=S+i+1,E=S+i+2,w=S+1;o.push(T,y,w),o.push(y,E,w)}}this.setIndex(o),this.setAttribute("position",new nt(l,3)),this.setAttribute("normal",new nt(c,3)),this.setAttribute("uv",new nt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var Wi=class n extends Rt{constructor(e=1,t=32,i=16,s=0,a=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:a,thetaStart:r,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(r+o,Math.PI),c=0,u=[],d=new I,h=new I,p=[],g=[],v=[],x=[];for(let f=0;f<=i;f++){let S=[],T=f/i,y=r+T*o,E=e*Math.cos(y),w=Math.sqrt(e*e-E*E),R=0;f===0&&r===0?R=.5/t:f===i&&l===Math.PI&&(R=-.5/t);for(let _=0;_<=t;_++){let A=_/t,C=s+A*a;d.x=-w*Math.cos(C),d.y=E,d.z=w*Math.sin(C),g.push(d.x,d.y,d.z),h.copy(d).normalize(),v.push(h.x,h.y,h.z),x.push(A+R,1-T),S.push(c++)}u.push(S)}for(let f=0;f<i;f++)for(let S=0;S<t;S++){let T=u[f][S+1],y=u[f][S],E=u[f+1][S],w=u[f+1][S+1];(f!==0||r>0)&&p.push(T,y,w),(f!==i-1||l<Math.PI)&&p.push(y,E,w)}this.setIndex(p),this.setAttribute("position",new nt(g,3)),this.setAttribute("normal",new nt(v,3)),this.setAttribute("uv",new nt(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},gr=class n extends il{constructor(e=1,t=0){let i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,s,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},ha=class n extends Rt{constructor(e=1,t=.4,i=12,s=48,a=Math.PI*2,r=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:a,thetaStart:r,thetaLength:o},i=Math.floor(i),s=Math.floor(s);let l=[],c=[],u=[],d=[],h=new I,p=new I,g=new I;for(let v=0;v<=i;v++){let x=r+v/i*o;for(let f=0;f<=s;f++){let S=f/s*a;p.x=(e+t*Math.cos(x))*Math.cos(S),p.y=(e+t*Math.cos(x))*Math.sin(S),p.z=t*Math.sin(x),c.push(p.x,p.y,p.z),h.x=e*Math.cos(S),h.y=e*Math.sin(S),g.subVectors(p,h).normalize(),u.push(g.x,g.y,g.z),d.push(f/s),d.push(v/i)}}for(let v=1;v<=i;v++)for(let x=1;x<=s;x++){let f=(s+1)*v+x-1,S=(s+1)*(v-1)+x-1,T=(s+1)*(v-1)+x,y=(s+1)*v+x;l.push(f,S,y),l.push(S,T,y)}this.setIndex(l),this.setAttribute("position",new nt(c,3)),this.setAttribute("normal",new nt(u,3)),this.setAttribute("uv",new nt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function Ps(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];if(Od(s))s.isRenderTargetTexture?(Fe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(Od(s[0])){let a=[];for(let r=0,o=s.length;r<o;r++)a[r]=s[r].clone();e[t][i]=a}else e[t][i]=s.slice();else e[t][i]=s}}return e}function sn(n){let e={};for(let t=0;t<n.length;t++){let i=Ps(n[t]);for(let s in i)e[s]=i[s]}return e}function Od(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function m0(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function th(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}var Mi={clone:Ps,merge:sn},g0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,x0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Nt=class extends vi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=g0,this.fragmentShader=x0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ps(e.uniforms),this.uniformsGroups=m0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let r=this.uniforms[s].value;r&&r.isTexture?t.uniforms[s]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[s]={type:"m4",value:r.toArray()}:t.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new Ue().setHex(s.value);break;case"v2":this.uniforms[i].value=new ce().fromArray(s.value);break;case"v3":this.uniforms[i].value=new I().fromArray(s.value);break;case"v4":this.uniforms[i].value=new wt().fromArray(s.value);break;case"m3":this.uniforms[i].value=new We().fromArray(s.value);break;case"m4":this.uniforms[i].value=new Mt().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},da=class extends Nt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},En=class extends vi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ue(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hc,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _i,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var dl=class extends vi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=gf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},fl=class extends vi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Zs(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function Mu(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var Xi=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],a=t[i-1];n:{e:{let r;t:{i:if(!(e<s)){for(let o=i+2;;){if(s===void 0){if(e<a)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(a=s,s=t[++i],e<s)break e}r=t.length;break t}if(!(e>=a)){let o=t[1];e<o&&(i=2,a=o);for(let l=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=a,a=t[--i-1],e>=a)break e}r=i,i=0;break t}break n}for(;i<r;){let o=i+r>>>1;e<t[o]?r=o:i=o+1}if(s=t[i],a=t[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,s)}return this.interpolate_(i,a,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,a=e*s;for(let r=0;r!==s;++r)t[r]=i[a+r];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},pl=class extends Xi{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Eu,endingEnd:Eu}}intervalChanged_(e,t,i){let s=this.parameterPositions,a=e-2,r=e+1,o=s[a],l=s[r];if(o===void 0)switch(this.getSettings_().endingStart){case wu:a=e,o=2*t-i;break;case Au:a=s.length-2,o=t+s[a]-s[a+1];break;default:a=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case wu:r=e,l=2*i-t;break;case Au:r=1,l=i+s[1]-s[0];break;default:r=e-1,l=t}let c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=a*u,this._offsetNext=r*u}interpolate_(e,t,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,p=this._weightNext,g=(i-t)/(s-t),v=g*g,x=v*g,f=-h*x+2*h*v-h*g,S=(1+h)*x+(-1.5-2*h)*v+(-.5+h)*g+1,T=(-1-p)*x+(1.5+p)*v+.5*g,y=p*x-p*v;for(let E=0;E!==o;++E)a[E]=f*r[u+E]+S*r[c+E]+T*r[l+E]+y*r[d+E];return a}},ml=class extends Xi{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(i-t)/(s-t),d=1-u;for(let h=0;h!==o;++h)a[h]=r[c+h]*d+r[l+h]*u;return a}},gl=class extends Xi{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},xl=class extends Xi{interpolate_(e,t,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this.inTangents,d=this.outTangents;if(!u||!d){let g=(i-t)/(s-t),v=1-g;for(let x=0;x!==o;++x)a[x]=r[c+x]*v+r[l+x]*g;return a}let h=o*2,p=e-1;for(let g=0;g!==o;++g){let v=r[c+g],x=r[l+g],f=p*h+g*2,S=d[f],T=d[f+1],y=e*h+g*2,E=u[y],w=u[y+1],R=v0(i,t,S,E,s);a[g]=Uf(R,v,T,w,x)}return a}};function Uf(n,e,t,i,s){let a=1-n;return a*a*a*e+3*a*a*n*t+3*a*n*n*i+n*n*n*s}function _0(n,e,t,i,s){let a=1-n;return 3*a*a*(t-e)+6*a*n*(i-t)+3*n*n*(s-i)}function v0(n,e,t,i,s){let a=(n-e)/(s-e);for(let r=0;r<8;r++){let o=Uf(a,e,t,i,s)-n;if(Math.abs(o)<1e-10)break;let l=_0(a,e,t,i,s);if(Math.abs(l)<1e-10)break;a=Math.max(0,Math.min(1,a-o/l))}return a}var vn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Zs(t,this.TimeBufferType),this.values=Zs(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Zs(e.times,Array),values:Zs(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s),Mu(e.settings)&&(i.settings={inTangents:Zs(e.settings.inTangents,Array),outTangents:Zs(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new gl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ml(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new pl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new xl(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Ya:t=this.InterpolantFactoryMethodDiscrete;break;case Jo:t=this.InterpolantFactoryMethodLinear;break;case Bo:t=this.InterpolantFactoryMethodSmooth;break;case Tu:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Fe("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ya;case this.InterpolantFactoryMethodLinear:return Jo;case this.InterpolantFactoryMethodSmooth:return Bo;case this.InterpolantFactoryMethodBezier:return Tu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e;Mu(this.settings)&&(qd(this.settings.inTangents,e),qd(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,s=i.length,a=0,r=s-1;for(;a!==s&&i[a]<e;)++a;for(;r!==-1&&i[r]>t;)--r;if(++r,a!==0||r!==s){a>=r&&(r=Math.max(r,1),a=r-1);let o=this.getValueSize();this.times=i.slice(a,r),this.values=this.values.slice(a*o,r*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(ze("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,a=i.length;a===0&&(ze("KeyframeTrack: Track is empty.",this),e=!1);let r=null;for(let o=0;o!==a;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){ze("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(r!==null&&r>l){ze("KeyframeTrack: Out of order keys.",this,o,l,r),e=!1;break}r=l}if(s!==void 0&&Em(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){ze("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Bo,a=e.length-1,r=1;for(let o=1;o<a;++o){let l=!1,c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(s)l=!0;else{let d=o*i,h=d-i,p=d+i;for(let g=0;g!==i;++g){let v=t[d+g];if(v!==t[h+g]||v!==t[p+g]){l=!0;break}}}if(l){if(o!==r){e[r]=e[o];let d=o*i,h=r*i;for(let p=0;p!==i;++p)t[h+p]=t[d+p]}++r}}if(a>0){e[r]=e[a];for(let o=a*i,l=r*i,c=0;c!==i;++c)t[l+c]=t[o+c];++r}return r!==e.length?(this.times=e.slice(0,r),this.values=t.slice(0,r*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,Mu(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function qd(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]*=e}vn.prototype.ValueTypeName="";vn.prototype.TimeBufferType=Float32Array;vn.prototype.ValueBufferType=Float32Array;vn.prototype.DefaultInterpolation=Jo;var Yi=class extends vn{constructor(e,t,i){super(e,t,i)}};Yi.prototype.ValueTypeName="bool";Yi.prototype.ValueBufferType=Array;Yi.prototype.DefaultInterpolation=Ya;Yi.prototype.InterpolantFactoryMethodLinear=void 0;Yi.prototype.InterpolantFactoryMethodSmooth=void 0;var _l=class extends vn{constructor(e,t,i,s){super(e,t,i,s)}};_l.prototype.ValueTypeName="color";var vl=class extends vn{constructor(e,t,i,s){super(e,t,i,s)}};vl.prototype.ValueTypeName="number";var yl=class extends Xi{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=(i-t)/(s-t),c=e*o;for(let u=c+o;c!==u;c+=4)Qn.slerpFlat(a,0,r,c-o,r,c,l);return a}},xr=class extends vn{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new yl(this.times,this.values,this.getValueSize(),e)}};xr.prototype.ValueTypeName="quaternion";xr.prototype.InterpolantFactoryMethodSmooth=void 0;var $i=class extends vn{constructor(e,t,i){super(e,t,i)}};$i.prototype.ValueTypeName="string";$i.prototype.ValueBufferType=Array;$i.prototype.DefaultInterpolation=Ya;$i.prototype.InterpolantFactoryMethodLinear=void 0;$i.prototype.InterpolantFactoryMethodSmooth=void 0;var bl=class extends vn{constructor(e,t,i,s){super(e,t,i,s)}};bl.prototype.ValueTypeName="vector";var Lu={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(Bd(n)||(this.files[n]=e))},get:function(n){if(this.enabled!==!1&&!Bd(n))return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};function Bd(n){try{let e=n.slice(n.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Ml=class{constructor(e,t,i){let s=this,a=!1,r=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(u){o++,a===!1&&s.onStart!==void 0&&s.onStart(u,r,o),a=!0},this.itemEnd=function(u){r++,s.onProgress!==void 0&&s.onProgress(u,r,o),r===o&&(a=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){let d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){let p=c[d],g=c[d+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Ff=new Ml,Es=class{constructor(e){this.manager=e!==void 0?e:Ff,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,a){i.load(e,s,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Es.DEFAULT_MATERIAL_NAME="__DEFAULT";var gi={},Nu=class extends Error{constructor(e,t){super(e),this.response=t}},_r=class extends Es{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let a=Lu.get(`file:${e}`);if(a!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(a),this.manager.itemEnd(e)},0);return}if(gi[e]!==void 0){gi[e].push({onLoad:t,onProgress:i,onError:s});return}gi[e]=[],gi[e].push({onLoad:t,onProgress:i,onError:s});let r=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(r).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Fe("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let u=gi[e],d=c.body.getReader(),h=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=h?parseInt(h):0,g=p!==0,v=0,x=new ReadableStream({start(f){S();function S(){d.read().then(({done:T,value:y})=>{if(T)f.close();else{v+=y.byteLength;let E=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:p});for(let w=0,R=u.length;w<R;w++){let _=u[w];_.onProgress&&_.onProgress(E)}f.enqueue(y),S()}},T=>{f.error(T)})}}});return new Response(x)}else throw new Nu(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o==="")return c.text();{let d=/charset="?([^;"\s]*)"?/i.exec(o),h=d&&d[1]?d[1].toLowerCase():void 0,p=new TextDecoder(h);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{Lu.add(`file:${e}`,c);let u=gi[e];delete gi[e];for(let d=0,h=u.length;d<h;d++){let p=u[d];p.onLoad&&p.onLoad(c)}}).catch(c=>{let u=gi[e];if(u===void 0)throw this.manager.itemError(e),c;delete gi[e];for(let d=0,h=u.length;d<h;d++){let p=u[d];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var fa=class extends Jt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ue(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},vr=class extends fa{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Jt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ue(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Su=new Mt,zd=new I,kd=new I,yr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ce(512,512),this.mapType=dn,this.map=null,this.mapPass=null,this.matrix=new Mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ra,this._frameExtents=new ce(1,1),this._viewportCount=1,this._viewports=[new wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;zd.setFromMatrixPosition(e.matrixWorld),t.position.copy(zd),kd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(kd),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){Su.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Su,e.coordinateSystem,e.reversedDepth);let a=this._frameExtents,r=s?s.z/a.x:1,o=s?s.w/a.y:1,l=s?s.x/a.x:0,c=s?s.y/a.y:0;e.coordinateSystem===na||e.reversedDepth?t.set(.5*r,0,0,.5*r+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*r,0,0,.5*r+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Su)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Oo=new I,qo=new Qn,jn=new I,br=class extends Jt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Mt,this.projectionMatrix=new Mt,this.projectionMatrixInverse=new Mt,this.coordinateSystem=qn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Oo,qo,jn),jn.x===1&&jn.y===1&&jn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Oo,qo,jn.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Oo,qo,jn),jn.x===1&&jn.y===1&&jn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Oo,qo,jn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ki=new I,Vd=new ce,Hd=new ce,$t=class extends br{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Zo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Kc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Zo*2*Math.atan(Math.tan(Kc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ki.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ki.x,ki.y).multiplyScalar(-e/ki.z),ki.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ki.x,ki.y).multiplyScalar(-e/ki.z)}getViewSize(e,t){return this.getViewBounds(e,Vd,Hd),t.subVectors(Hd,Vd)}setViewOffset(e,t,i,s,a,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Kc*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,a=-.5*s,r=this.view;if(this.view!==null&&this.view.enabled){let l=r.fullWidth,c=r.fullHeight;a+=r.offsetX*s/l,t-=r.offsetY*i/c,s*=r.width/l,i*=r.height/c}let o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Du=class extends yr{constructor(){super(new $t(90,1,.5,500)),this.isPointLightShadow=!0}},ws=class extends fa{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Du}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},ji=class extends br{constructor(e=-1,t=1,i=1,s=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,a=i-e,r=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,r=a+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(a,r,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Uu=class extends yr{constructor(){super(new ji(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Mr=class extends fa{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Jt.DEFAULT_UP),this.updateMatrix(),this.target=new Jt,this.shadow=new Uu}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Ks=-90,Qs=1,Sl=class extends Jt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new $t(Ks,Qs,e,t);s.layers=this.layers,this.add(s);let a=new $t(Ks,Qs,e,t);a.layers=this.layers,this.add(a);let r=new $t(Ks,Qs,e,t);r.layers=this.layers,this.add(r);let o=new $t(Ks,Qs,e,t);o.layers=this.layers,this.add(o);let l=new $t(Ks,Qs,e,t);l.layers=this.layers,this.add(l);let c=new $t(Ks,Qs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,a,r,o,l]=t;for(let c of t)this.remove(c);if(e===qn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===na)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[a,r,o,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let x=!1;e.isWebGLRenderer===!0?x=e.state.buffers.depth.getReversed():x=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,1,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,2,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(d,h,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Tl=class extends $t{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Sr=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=y0.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function y0(){this._document.hidden===!1&&this.reset()}var nh="\\[\\]\\.:\\/",b0=new RegExp("["+nh+"]","g"),ih="[^"+nh+"]",M0="[^"+nh.replace("\\.","")+"]",S0=/((?:WC+[\/:])*)/.source.replace("WC",ih),T0=/(WCOD+)?/.source.replace("WCOD",M0),E0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ih),w0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ih),A0=new RegExp("^"+S0+T0+E0+w0+"$"),C0=["material","materials","bones","map"],Fu=class{constructor(e,t,i){let s=i||bt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,a=i.length;s!==a;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},bt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(b0,"")}static parseTrackName(e){let t=A0.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let a=i.nodeName.substring(s+1);C0.indexOf(a)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=a)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(a){for(let r=0;r<a.length;r++){let o=a[r];if(o.name===t||o.uuid===t)return o;let l=i(o.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,a=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Fe("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){ze("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){ze("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){ze("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){ze("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){ze("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){ze("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){ze("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let r=e[s];if(r===void 0){let c=t.nodeName;ze("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(a!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){ze("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){ze("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[a]!==void 0&&(a=e.morphTargetDictionary[a])}l=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=a}else r.fromArray!==void 0&&r.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(l=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};bt.Composite=Fu;bt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};bt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};bt.prototype.GetterByBindingType=[bt.prototype._getValue_direct,bt.prototype._getValue_array,bt.prototype._getValue_arrayElement,bt.prototype._getValue_toArray];bt.prototype.SetterByBindingTypeAndVersioning=[[bt.prototype._setValue_direct,bt.prototype._setValue_direct_setNeedsUpdate,bt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[bt.prototype._setValue_array,bt.prototype._setValue_array_setNeedsUpdate,bt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[bt.prototype._setValue_arrayElement,bt.prototype._setValue_arrayElement_setNeedsUpdate,bt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[bt.prototype._setValue_fromArray,bt.prototype._setValue_fromArray_setNeedsUpdate,bt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var fv=new Float32Array(1);var Tr=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Fe("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};var Ou=class n{static{n.prototype.isMatrix2=!0}constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){let a=this.elements;return a[0]=e,a[2]=t,a[1]=i,a[3]=s,this}},Gd=new ce,El=class{constructor(e=new ce(1/0,1/0),t=new ce(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Gd.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Gd).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}};var Er=class{constructor(){this.type="ShapePath",this.color=new Ue,this.subPaths=[],this.currentPath=null,this.userData={}}moveTo(e,t){return this.currentPath=new Ss,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,i,s){return this.currentPath.quadraticCurveTo(e,t,i,s),this}bezierCurveTo(e,t,i,s,a,r){return this.currentPath.bezierCurveTo(e,t,i,s,a,r),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(){function e(l,c){let u=!1,d=c.length;for(let h=0,p=d-1;h<d;p=h++){let g=c[h],v=c[p];g.y>l.y!=v.y>l.y&&l.x<(v.x-g.x)*(l.y-g.y)/(v.y-g.y)+g.x&&(u=!u)}return u}function t(l,c){let u=c.getCenter(new ce);if(e(u,l))return u;let d=u.y,h=[],p=l.length;for(let g=0;g<p;g++){let v=l[g],x=l[(g+1)%p];if(v.y>d!=x.y>d){let f=v.x+(d-v.y)*(x.x-v.x)/(x.y-v.y);h.push(f)}}return h.length>1&&(h.sort((g,v)=>g-v),u.x=(h[0]+h[1])/2),u}let i=this.userData.style&&this.userData.style.fillRule||"nonzero";i!=="nonzero"&&i!=="evenodd"&&(Fe('Fill-rule "'+i+'" is not supported, falling back to "nonzero".'),i="nonzero");let s=i==="nonzero"?(l=>l!==0):(l=>(l&1)!==0),a=[];for(let l of this.subPaths){let c=l.getPoints();if(c.length<3)continue;let u=hl.area(c);if(u===0)continue;let d=new El;for(let h=0;h<c.length;h++)d.expandByPoint(c[h]);a.push({subPath:l,points:c,boundingBox:d,interiorPoint:t(c,d),absArea:Math.abs(u),winding:u<0?-1:1,container:null,exclude:!1,role:null})}a.sort((l,c)=>c.absArea-l.absArea);for(let l=0;l<a.length;l++){let c=a[l],u=0;for(let d=l-1;d>=0;d--){let h=a[d];if(h.boundingBox.containsBox(c.boundingBox)&&e(c.interiorPoint,h.points)){c.container=h.exclude?h.container:h,u=h.winding,c.winding+=u;break}}s(c.winding)===s(u)&&(c.exclude=!0)}for(let l of a)l.exclude||(l.role=l.container===null||l.container.role==="hole"?"outer":"hole");let r=[],o=new Map;for(let l of a){if(l.exclude||l.role!=="outer")continue;let c=new ul;c.curves=l.subPath.curves,r.push(c),o.set(l,c)}for(let l of a){if(l.exclude||l.role!=="hole")continue;let c=o.get(l.container);if(!c)continue;let u=new Ss;u.curves=l.subPath.curves,c.holes.push(u)}return r}};function sh(n,e,t,i){let s=R0(i);switch(t){case ju:return n*e;case Zu:return n*e/s.components*s.byteLength;case Ll:return n*e/s.components*s.byteLength;case ts:return n*e*2/s.components*s.byteLength;case Nl:return n*e*2/s.components*s.byteLength;case Ju:return n*e*3/s.components*s.byteLength;case Cn:return n*e*4/s.components*s.byteLength;case Dl:return n*e*4/s.components*s.byteLength;case Ur:case Fr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Or:case qr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Fl:case ql:return Math.max(n,16)*Math.max(e,8)/4;case Ul:case Ol:return Math.max(n,8)*Math.max(e,8)/2;case Bl:case zl:case Vl:case Hl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case kl:case Br:case Gl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Wl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Xl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Yl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case $l:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case jl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Jl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Zl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Kl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Ql:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case ec:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case tc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case nc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case ic:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case sc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case ac:case rc:case oc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case lc:case cc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case zr:case uc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function R0(n){switch(n){case dn:case Wu:return{byteLength:1,components:1};case ga:case Xu:case Zt:return{byteLength:2,components:1};case Pl:case Il:return{byteLength:2,components:4};case zn:case Rl:case kn:return{byteLength:4,components:1};case Yu:case $u:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Fe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function sp(){let n=null,e=!1,t=null,i=null;function s(a,r){i=n.requestAnimationFrame(s),t(a,r)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){n=a}}}function I0(n){let e=new WeakMap;function t(o,l){let c=o.array,u=o.usage,d=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){let u=l.array,d=l.updateRanges;if(n.bindBuffer(c,o),d.length===0)n.bufferSubData(c,0,u);else{d.sort((p,g)=>p.start-g.start);let h=0;for(let p=1;p<d.length;p++){let g=d[h],v=d[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++h,d[h]=v)}d.length=h+1;for(let p=0,g=d.length;p<g;p++){let v=d[p];n.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:a,update:r}}var L0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,N0=`#ifdef USE_ALPHAHASH
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
#endif`,D0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,U0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,F0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,O0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,q0=`#ifdef USE_AOMAP
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
#endif`,B0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,z0=`#ifdef USE_BATCHING
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
#endif`,k0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,V0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,H0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,G0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,W0=`#ifdef USE_IRIDESCENCE
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
#endif`,X0=`#ifdef USE_BUMPMAP
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
#endif`,Y0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,$0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,j0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,J0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Z0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,K0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Q0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,eg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,tg=`#define PI 3.141592653589793
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
} // validated`,ng=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ig=`vec3 transformedNormal = objectNormal;
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
#endif`,sg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ag=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,rg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,og=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,lg="gl_FragColor = linearToOutputTexel( gl_FragColor );",cg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ug=`#ifdef USE_ENVMAP
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
#endif`,hg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,dg=`#ifdef USE_ENVMAP
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
#endif`,fg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,pg=`#ifdef USE_ENVMAP
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
#endif`,mg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,gg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,xg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_g=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vg=`#ifdef USE_GRADIENTMAP
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
}`,yg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Mg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Sg=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Tg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
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
				#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Eg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ag=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Cg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Rg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
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
#endif`,Pg=`uniform sampler2D dfgLUT;
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
		float roughness = material.clearcoatRoughness;
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
	float roughness = material.roughness;
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
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
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
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
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
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
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
}`,Ig=`
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Lg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
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
#endif`,Ng=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Dg=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
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
#endif`,Ug=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Fg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Og=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Bg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,kg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Vg=`#if defined( USE_POINTS_UV )
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
#endif`,Hg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Gg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Wg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Xg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Yg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$g=`#ifdef USE_MORPHTARGETS
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
#endif`,jg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Zg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Kg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,e1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,t1=`#ifdef USE_NORMALMAP
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
#endif`,n1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,i1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,s1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,a1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,r1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,o1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,l1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,c1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,u1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,h1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,d1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,f1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,p1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
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
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
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
#endif`,m1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,g1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,x1=`float getShadowMask() {
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
}`,_1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,v1=`#ifdef USE_SKINNING
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
#endif`,y1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,b1=`#ifdef USE_SKINNING
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
#endif`,M1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,S1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,T1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,E1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,w1=`#ifdef USE_TRANSMISSION
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
#endif`,A1=`#ifdef USE_TRANSMISSION
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
#endif`,C1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,R1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,P1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,I1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,L1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,N1=`uniform sampler2D t2D;
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
}`,D1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,U1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,F1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,O1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,q1=`#include <common>
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
}`,B1=`#if DEPTH_PACKING == 3200
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
}`,z1=`#define DISTANCE
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
}`,k1=`#define DISTANCE
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
}`,V1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,H1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,G1=`uniform float scale;
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
}`,W1=`uniform vec3 diffuse;
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
}`,X1=`#include <common>
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
}`,Y1=`uniform vec3 diffuse;
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
}`,$1=`#define LAMBERT
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
}`,j1=`#define LAMBERT
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
#include <cube_uv_reflection_fragment>
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
}`,J1=`#define MATCAP
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
}`,Z1=`#define MATCAP
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
}`,K1=`#define NORMAL
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
}`,Q1=`#define NORMAL
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
}`,ex=`#define PHONG
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
}`,tx=`#define PHONG
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
#include <cube_uv_reflection_fragment>
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
}`,nx=`#define STANDARD
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
}`,ix=`#define STANDARD
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
#include <cube_uv_reflection_fragment>
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
}`,sx=`#define TOON
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
}`,ax=`#define TOON
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
}`,rx=`uniform float size;
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
}`,ox=`uniform vec3 diffuse;
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
}`,lx=`#include <common>
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
}`,cx=`uniform vec3 color;
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
}`,ux=`uniform float rotation;
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
}`,hx=`uniform vec3 diffuse;
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
}`,je={alphahash_fragment:L0,alphahash_pars_fragment:N0,alphamap_fragment:D0,alphamap_pars_fragment:U0,alphatest_fragment:F0,alphatest_pars_fragment:O0,aomap_fragment:q0,aomap_pars_fragment:B0,batching_pars_vertex:z0,batching_vertex:k0,begin_vertex:V0,beginnormal_vertex:H0,bsdfs:G0,iridescence_fragment:W0,bumpmap_pars_fragment:X0,clipping_planes_fragment:Y0,clipping_planes_pars_fragment:$0,clipping_planes_pars_vertex:j0,clipping_planes_vertex:J0,color_fragment:Z0,color_pars_fragment:K0,color_pars_vertex:Q0,color_vertex:eg,common:tg,cube_uv_reflection_fragment:ng,defaultnormal_vertex:ig,displacementmap_pars_vertex:sg,displacementmap_vertex:ag,emissivemap_fragment:rg,emissivemap_pars_fragment:og,colorspace_fragment:lg,colorspace_pars_fragment:cg,envmap_fragment:ug,envmap_common_pars_fragment:hg,envmap_pars_fragment:dg,envmap_pars_vertex:fg,envmap_physical_pars_fragment:Tg,envmap_vertex:pg,fog_vertex:mg,fog_pars_vertex:gg,fog_fragment:xg,fog_pars_fragment:_g,gradientmap_pars_fragment:vg,lightmap_pars_fragment:yg,lights_lambert_fragment:bg,lights_lambert_pars_fragment:Mg,lights_pars_begin:Sg,lights_toon_fragment:Eg,lights_toon_pars_fragment:wg,lights_phong_fragment:Ag,lights_phong_pars_fragment:Cg,lights_physical_fragment:Rg,lights_physical_pars_fragment:Pg,lights_fragment_begin:Ig,lights_fragment_maps:Lg,lights_fragment_end:Ng,lightprobes_pars_fragment:Dg,logdepthbuf_fragment:Ug,logdepthbuf_pars_fragment:Fg,logdepthbuf_pars_vertex:Og,logdepthbuf_vertex:qg,map_fragment:Bg,map_pars_fragment:zg,map_particle_fragment:kg,map_particle_pars_fragment:Vg,metalnessmap_fragment:Hg,metalnessmap_pars_fragment:Gg,morphinstance_vertex:Wg,morphcolor_vertex:Xg,morphnormal_vertex:Yg,morphtarget_pars_vertex:$g,morphtarget_vertex:jg,normal_fragment_begin:Jg,normal_fragment_maps:Zg,normal_pars_fragment:Kg,normal_pars_vertex:Qg,normal_vertex:e1,normalmap_pars_fragment:t1,clearcoat_normal_fragment_begin:n1,clearcoat_normal_fragment_maps:i1,clearcoat_pars_fragment:s1,iridescence_pars_fragment:a1,opaque_fragment:r1,packing:o1,premultiplied_alpha_fragment:l1,project_vertex:c1,dithering_fragment:u1,dithering_pars_fragment:h1,roughnessmap_fragment:d1,roughnessmap_pars_fragment:f1,shadowmap_pars_fragment:p1,shadowmap_pars_vertex:m1,shadowmap_vertex:g1,shadowmask_pars_fragment:x1,skinbase_vertex:_1,skinning_pars_vertex:v1,skinning_vertex:y1,skinnormal_vertex:b1,specularmap_fragment:M1,specularmap_pars_fragment:S1,tonemapping_fragment:T1,tonemapping_pars_fragment:E1,transmission_fragment:w1,transmission_pars_fragment:A1,uv_pars_fragment:C1,uv_pars_vertex:R1,uv_vertex:P1,worldpos_vertex:I1,background_vert:L1,background_frag:N1,backgroundCube_vert:D1,backgroundCube_frag:U1,cube_vert:F1,cube_frag:O1,depth_vert:q1,depth_frag:B1,distance_vert:z1,distance_frag:k1,equirect_vert:V1,equirect_frag:H1,linedashed_vert:G1,linedashed_frag:W1,meshbasic_vert:X1,meshbasic_frag:Y1,meshlambert_vert:$1,meshlambert_frag:j1,meshmatcap_vert:J1,meshmatcap_frag:Z1,meshnormal_vert:K1,meshnormal_frag:Q1,meshphong_vert:ex,meshphong_frag:tx,meshphysical_vert:nx,meshphysical_frag:ix,meshtoon_vert:sx,meshtoon_frag:ax,points_vert:rx,points_frag:ox,shadow_vert:lx,shadow_frag:cx,sprite_vert:ux,sprite_frag:hx},me={common:{diffuse:{value:new Ue(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new I},probesMax:{value:new I},probesResolution:{value:new I}},points:{diffuse:{value:new Ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new Ue(16777215)},opacity:{value:1},center:{value:new ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},ni={basic:{uniforms:sn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:sn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Ue(0)},envMapIntensity:{value:1}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:sn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Ue(0)},specular:{value:new Ue(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:sn([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new Ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:sn([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new Ue(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:sn([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:sn([me.points,me.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:sn([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:sn([me.common,me.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:sn([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:sn([me.sprite,me.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distance:{uniforms:sn([me.common,me.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distance_vert,fragmentShader:je.distance_frag},shadow:{uniforms:sn([me.lights,me.fog,{color:{value:new Ue(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};ni.physical={uniforms:sn([ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new Ue(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new Ue(0)},specularColor:{value:new Ue(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};var pc={r:0,b:0,g:0},dx=new Mt,ap=new We;ap.set(-1,0,0,0,1,0,0,0,1);function fx(n,e,t,i,s,a){let r=new Ue(0),o=s===!0?0:1,l,c,u=null,d=0,h=null;function p(S){let T=S.isScene===!0?S.background:null;if(T&&T.isTexture){let y=S.backgroundBlurriness>0;T=e.get(T,y)}return T}function g(S){let T=!1,y=p(S);y===null?x(r,o):y&&y.isColor&&(x(y,1),T=!0);let E=n.xr.getEnvironmentBlendMode();E==="additive"?t.buffers.color.setClear(0,0,0,1,a):E==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,a),(n.autoClear||T)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function v(S,T){let y=p(T);y&&(y.isCubeTexture||y.mapping===Nr)?(c===void 0&&(c=new Oe(new Bt(1,1,1),new Nt({name:"BackgroundCubeMaterial",uniforms:Ps(ni.backgroundCube.uniforms),vertexShader:ni.backgroundCube.vertexShader,fragmentShader:ni.backgroundCube.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,w,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(dx.makeRotationFromEuler(T.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(ap),c.material.toneMapped=Ze.getTransfer(y.colorSpace)!==ot,(u!==y||d!==y.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,u=y,d=y.version,h=n.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Oe(new ei(2,2),new Nt({name:"BackgroundMaterial",uniforms:Ps(ni.background.uniforms),vertexShader:ni.background.vertexShader,fragmentShader:ni.background.fragmentShader,side:Ji,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=Ze.getTransfer(y.colorSpace)!==ot,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,u=y,d=y.version,h=n.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function x(S,T){S.getRGB(pc,th(n)),t.buffers.color.setClear(pc.r,pc.g,pc.b,T,a)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return r},setClearColor:function(S,T=1){r.set(S),o=T,x(r,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,x(r,o)},render:g,addToRenderList:v,dispose:f}}function px(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null),a=s,r=!1;function o(F,B,H,L,G){let J=!1,K=d(F,L,H,B);a!==K&&(a=K,c(a.object)),J=p(F,L,H,G),J&&g(F,L,H,G),G!==null&&e.update(G,n.ELEMENT_ARRAY_BUFFER),(J||r)&&(r=!1,y(F,B,H,L),G!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return n.createVertexArray()}function c(F){return n.bindVertexArray(F)}function u(F){return n.deleteVertexArray(F)}function d(F,B,H,L){let G=L.wireframe===!0,J=i[B.id];J===void 0&&(J={},i[B.id]=J);let K=F.isInstancedMesh===!0?F.id:0,ae=J[K];ae===void 0&&(ae={},J[K]=ae);let $=ae[H.id];$===void 0&&($={},ae[H.id]=$);let ee=$[G];return ee===void 0&&(ee=h(l()),$[G]=ee),ee}function h(F){let B=[],H=[],L=[];for(let G=0;G<t;G++)B[G]=0,H[G]=0,L[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:H,attributeDivisors:L,object:F,attributes:{},index:null}}function p(F,B,H,L){let G=a.attributes,J=B.attributes,K=0,ae=H.getAttributes();for(let $ in ae)if(ae[$].location>=0){let ne=G[$],De=J[$];if(De===void 0&&($==="instanceMatrix"&&F.instanceMatrix&&(De=F.instanceMatrix),$==="instanceColor"&&F.instanceColor&&(De=F.instanceColor)),ne===void 0||ne.attribute!==De||De&&ne.data!==De.data)return!0;K++}return a.attributesNum!==K||a.index!==L}function g(F,B,H,L){let G={},J=B.attributes,K=0,ae=H.getAttributes();for(let $ in ae)if(ae[$].location>=0){let ne=J[$];ne===void 0&&($==="instanceMatrix"&&F.instanceMatrix&&(ne=F.instanceMatrix),$==="instanceColor"&&F.instanceColor&&(ne=F.instanceColor));let De={};De.attribute=ne,ne&&ne.data&&(De.data=ne.data),G[$]=De,K++}a.attributes=G,a.attributesNum=K,a.index=L}function v(){let F=a.newAttributes;for(let B=0,H=F.length;B<H;B++)F[B]=0}function x(F){f(F,0)}function f(F,B){let H=a.newAttributes,L=a.enabledAttributes,G=a.attributeDivisors;H[F]=1,L[F]===0&&(n.enableVertexAttribArray(F),L[F]=1),G[F]!==B&&(n.vertexAttribDivisor(F,B),G[F]=B)}function S(){let F=a.newAttributes,B=a.enabledAttributes;for(let H=0,L=B.length;H<L;H++)B[H]!==F[H]&&(n.disableVertexAttribArray(H),B[H]=0)}function T(F,B,H,L,G,J,K){K===!0?n.vertexAttribIPointer(F,B,H,G,J):n.vertexAttribPointer(F,B,H,L,G,J)}function y(F,B,H,L){v();let G=L.attributes,J=H.getAttributes(),K=B.defaultAttributeValues;for(let ae in J){let $=J[ae];if($.location>=0){let ee=G[ae];if(ee===void 0&&(ae==="instanceMatrix"&&F.instanceMatrix&&(ee=F.instanceMatrix),ae==="instanceColor"&&F.instanceColor&&(ee=F.instanceColor)),ee!==void 0){let ne=ee.normalized,De=ee.itemSize,Ie=e.get(ee);if(Ie===void 0)continue;let ht=Ie.buffer,tt=Ie.type,it=Ie.bytesPerElement,j=tt===n.INT||tt===n.UNSIGNED_INT||ee.gpuType===Rl;if(ee.isInterleavedBufferAttribute){let te=ee.data,be=te.stride,Ve=ee.offset;if(te.isInstancedInterleavedBuffer){for(let ye=0;ye<$.locationSize;ye++)f($.location+ye,te.meshPerAttribute);F.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let ye=0;ye<$.locationSize;ye++)x($.location+ye);n.bindBuffer(n.ARRAY_BUFFER,ht);for(let ye=0;ye<$.locationSize;ye++)T($.location+ye,De/$.locationSize,tt,ne,be*it,(Ve+De/$.locationSize*ye)*it,j)}else{if(ee.isInstancedBufferAttribute){for(let te=0;te<$.locationSize;te++)f($.location+te,ee.meshPerAttribute);F.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let te=0;te<$.locationSize;te++)x($.location+te);n.bindBuffer(n.ARRAY_BUFFER,ht);for(let te=0;te<$.locationSize;te++)T($.location+te,De/$.locationSize,tt,ne,De*it,De/$.locationSize*te*it,j)}}else if(K!==void 0){let ne=K[ae];if(ne!==void 0)switch(ne.length){case 2:n.vertexAttrib2fv($.location,ne);break;case 3:n.vertexAttrib3fv($.location,ne);break;case 4:n.vertexAttrib4fv($.location,ne);break;default:n.vertexAttrib1fv($.location,ne)}}}}S()}function E(){A();for(let F in i){let B=i[F];for(let H in B){let L=B[H];for(let G in L){let J=L[G];for(let K in J)u(J[K].object),delete J[K];delete L[G]}}delete i[F]}}function w(F){if(i[F.id]===void 0)return;let B=i[F.id];for(let H in B){let L=B[H];for(let G in L){let J=L[G];for(let K in J)u(J[K].object),delete J[K];delete L[G]}}delete i[F.id]}function R(F){for(let B in i){let H=i[B];for(let L in H){let G=H[L];if(G[F.id]===void 0)continue;let J=G[F.id];for(let K in J)u(J[K].object),delete J[K];delete G[F.id]}}}function _(F){for(let B in i){let H=i[B],L=F.isInstancedMesh===!0?F.id:0,G=H[L];if(G!==void 0){for(let J in G){let K=G[J];for(let ae in K)u(K[ae].object),delete K[ae];delete G[J]}delete H[L],Object.keys(H).length===0&&delete i[B]}}}function A(){C(),r=!0,a!==s&&(a=s,c(a.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:A,resetDefaultState:C,dispose:E,releaseStatesOfGeometry:w,releaseStatesOfObject:_,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:x,disableUnusedAttributes:S}}function mx(n,e,t){let i;function s(l){i=l}function a(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function r(l,c,u){u!==0&&(n.drawArraysInstanced(i,l,c,u),t.update(c,i,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let h=0;for(let p=0;p<u;p++)h+=c[p];t.update(h,i,1)}this.setMode=s,this.render=a,this.renderInstances=r,this.renderMultiDraw=o}function gx(n,e,t,i){let s;function a(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let R=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(R){return!(R!==Cn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){let _=R===Zt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==dn&&R!==kn&&!_&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(Fe("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let d=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&Fe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),x=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),S=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),T=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),E=n.getParameter(n.MAX_SAMPLES),w=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:x,maxAttributes:f,maxVertexUniforms:S,maxVaryings:T,maxFragmentUniforms:y,maxSamples:E,samples:w}}function xx(n){let e=this,t=null,i=0,s=!1,a=!1,r=new On,o=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let p=d.length!==0||h||i!==0||s;return s=h,i=d.length,p},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,p){let g=d.clippingPlanes,v=d.clipIntersection,x=d.clipShadows,f=n.get(d);if(!s||g===null||g.length===0||a&&!x)a?u(null):c();else{let S=a?0:i,T=S*4,y=f.clippingState||null;l.value=y,y=u(g,h,T,p);for(let E=0;E!==T;++E)y[E]=t[E];f.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,h,p,g){let v=d!==null?d.length:0,x=null;if(v!==0){if(x=l.value,g!==!0||x===null){let f=p+v*4,S=h.matrixWorldInverse;o.getNormalMatrix(S),(x===null||x.length<f)&&(x=new Float32Array(f));for(let T=0,y=p;T!==v;++T,y+=4)r.copy(d[T]).applyMatrix4(S,o),r.normal.toArray(x,y),x[y+3]=r.constant}l.value=x,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,x}}var ya=4,_x=6,vx=20,yx=256,kr=new ji,Of=new Ue,ah=null,rh=0,oh=0,lh=!1,bx=new I,Is=new I,gc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,a={}){let{size:r=256,position:o=bx}=a;ah=this._renderer.getRenderTarget(),rh=this._renderer.getActiveCubeFace(),oh=this._renderer.getActiveMipmapLevel(),lh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ah,rh,oh),this._renderer.xr.enabled=lh,e.scissorTest=!1,va(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ki||e.mapping===Rs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ah=this._renderer.getRenderTarget(),rh=this._renderer.getActiveCubeFace(),oh=this._renderer.getActiveMipmapLevel(),lh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:jt,minFilter:jt,generateMipmaps:!1,type:Zt,format:Cn,colorSpace:$a,depthBuffer:!1},s=qf(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=qf(e,t,i);let{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Mx(a)),this._blurMaterial=Tx(a,e,t),this._ggxMaterial=Sx(a,e,t)}return s}_compileMaterial(e){let t=new Oe(new Rt,e);this._renderer.compile(t,kr)}_sceneToCubeUV(e,t,i,s,a){let l=new $t(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,p=d.toneMapping;d.getClearColor(Of),d.toneMapping=Bn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Oe(new Bt,new xn({name:"PMREM.Background",side:cn,depthWrite:!1,depthTest:!1})));let v=this._backgroundBox,x=v.material,f=!1,S=e.background;S?S.isColor&&(x.color.copy(S),e.background=null,f=!0):(x.color.copy(Of),f=!0);for(let T=0;T<6;T++){let y=T%3;y===0?(l.up.set(0,c[T],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x+u[T],a.y,a.z)):y===1?(l.up.set(0,0,c[T]),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y+u[T],a.z)):(l.up.set(0,c[T],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y,a.z+u[T]));let E=this._cubeSize;va(s,y*E,T>2?E:0,E,E),d.setRenderTarget(s),f&&d.render(v,l),d.render(e,l)}d.toneMapping=p,d.autoClear=h,e.background=S}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===Ki||e.mapping===Rs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=zf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bf());let a=s?this._cubemapMaterial:this._equirectMaterial,r=this._lodMeshes[0];r.material=a;let o=a.uniforms;o.envMap.value=e;let l=this._cubeSize;va(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(r,kr)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let a=1;a<s;a++)this._applyGGXFilter(e,a-1,a);t.autoClear=i}_applyGGXFilter(e,t,i){let s=this._renderer,a=this._pingPongRenderTarget,r=this._ggxMaterial,o=this._lodMeshes[i];o.material=r;let l=r.uniforms,c=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-u*u),h=c*1.25,p=d*h,{_lodMax:g}=this,v=this._sizeLods[i],x=3*v*(i>g-ya?i-g+ya:0),f=4*(this._cubeSize-v);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=g-t,va(a,x,f,3*v,2*v),s.setRenderTarget(a),s.render(o,kr),l.envMap.value=a.texture,l.roughness.value=0,l.mipInt.value=g-i,va(e,x,f,3*v,2*v),s.setRenderTarget(e),s.render(o,kr)}_blur(e,t,i,s){let a=this._pingPongRenderTarget,r=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,a,t,i,r),this._blurPass(a,e,i,i,r)}_blurPass(e,t,i,s,a){let r=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=a,c.mipInt.value=this._lodMax-i;let u=this._sizeLods[s],d=3*u*(s>this._lodMax-ya?s-this._lodMax+ya:0),h=4*(this._cubeSize-u);va(t,d,h,3*u,2*u),r.setRenderTarget(t),r.render(l,kr)}};function Mx(n){let e=[],t=[],i=n,s=n-ya+1+_x;for(let a=0;a<s;a++){let r=Math.pow(2,i);e.push(r);let o=1/(r-2),l=-o,c=1+o,u=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,h=6,p=3,g=new Float32Array(p*h*d),v=new Float32Array(p*h*d);for(let f=0;f<d;f++){let S=f%3*2/3-1,T=f>2?0:-1,y=[S,T,0,S+2/3,T,0,S+2/3,T+1,0,S,T,0,S+2/3,T+1,0,S,T+1,0];g.set(y,p*h*f);for(let E=0;E<h;E++){let w=u[E*2]*2-1,R=u[E*2+1]*2-1;f===0?Is.set(1,R,w):f===1?Is.set(-w,1,-R):f===2?Is.set(-w,R,1):f===3?Is.set(-1,R,-w):f===4?Is.set(-w,-1,R):Is.set(w,R,-1),Is.toArray(v,(f*h+E)*p)}}let x=new Rt;x.setAttribute("position",new on(g,p)),x.setAttribute("outputDirection",new on(v,p)),t.push(new Oe(x,null)),i>ya&&i--}return{lodMeshes:t,sizeLods:e}}function qf(n,e,t){let i=new Ft(n,e,t);return i.texture.mapping=Nr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function va(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function Sx(n,e,t){return new Nt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:yx,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:vc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:An,depthTest:!1,depthWrite:!1})}function Tx(n,e,t){return new Nt({name:"SphericalGaussianBlur",defines:{SAMPLES:vx,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:vc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

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

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:An,depthTest:!1,depthWrite:!1})}function Bf(){return new Nt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:An,depthTest:!1,depthWrite:!1})}function zf(){return new Nt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:An,depthTest:!1,depthWrite:!1})}function vc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var xc=class extends Ft{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new ar(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Bt(5,5,5),a=new Nt({name:"CubemapFromEquirect",uniforms:Ps(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:cn,blending:An});a.uniforms.tEquirect.value=t;let r=new Oe(s,a),o=t.minFilter;return t.minFilter===Qi&&(t.minFilter=jt),new Sl(1,10,this).update(e,r),t.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let a=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,i,s);e.setRenderTarget(a)}};function Ex(n){let e=new WeakMap,t=new WeakMap,i=null;function s(h,p=!1){return h==null?null:p?r(h):a(h)}function a(h){if(h&&h.isTexture){let p=h.mapping;if(p===wl||p===Al)if(e.has(h)){let g=e.get(h).texture;return o(g,h.mapping)}else{let g=h.image;if(g&&g.height>0){let v=new xc(g.height);return v.fromEquirectangularTexture(n,h),e.set(h,v),h.addEventListener("dispose",c),o(v.texture,h.mapping)}else return null}}return h}function r(h){if(h&&h.isTexture){let p=h.mapping,g=p===wl||p===Al,v=p===Ki||p===Rs;if(g||v){let x=t.get(h),f=x!==void 0?x.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==f)return i===null&&(i=new gc(n)),x=g?i.fromEquirectangular(h,x):i.fromCubemap(h,x),x.texture.pmremVersion=h.pmremVersion,t.set(h,x),x.texture;if(x!==void 0)return x.texture;{let S=h.image;return g&&S&&S.height>0||v&&S&&l(S)?(i===null&&(i=new gc(n)),x=g?i.fromEquirectangular(h):i.fromCubemap(h),x.texture.pmremVersion=h.pmremVersion,t.set(h,x),h.addEventListener("dispose",u),x.texture):null}}}return h}function o(h,p){return p===wl?h.mapping=Ki:p===Al&&(h.mapping=Rs),h}function l(h){let p=0,g=6;for(let v=0;v<g;v++)h[v]!==void 0&&p++;return p===g}function c(h){let p=h.target;p.removeEventListener("dispose",c);let g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function u(h){let p=h.target;p.removeEventListener("dispose",u);let g=t.get(p);g!==void 0&&(t.delete(p),g.dispose())}function d(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function wx(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&vs("WebGLRenderer: "+i+" extension not supported."),s}}}function Ax(n,e,t,i){let s={},a=new WeakMap;function r(d){let h=d.target;h.index!==null&&e.remove(h.index);for(let g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",r),delete s[h.id];let p=a.get(h);p&&(e.remove(p),a.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(d,h){return s[h.id]===!0||(h.addEventListener("dispose",r),s[h.id]=!0,t.memory.geometries++),h}function l(d){let h=d.attributes;for(let p in h)e.update(h[p],n.ARRAY_BUFFER)}function c(d){let h=[],p=d.index,g=d.attributes.position,v=0;if(g===void 0)return;if(p!==null){let S=p.array;v=p.version;for(let T=0,y=S.length;T<y;T+=3){let E=S[T+0],w=S[T+1],R=S[T+2];h.push(E,w,w,R,R,E)}}else{let S=g.array;v=g.version;for(let T=0,y=S.length/3-1;T<y;T+=3){let E=T+0,w=T+1,R=T+2;h.push(E,w,w,R,R,E)}}let x=new(g.count>=65535?nr:tr)(h,1);x.version=v;let f=a.get(d);f&&e.remove(f),a.set(d,x)}function u(d){let h=a.get(d);if(h){let p=d.index;p!==null&&h.version<p.version&&c(d)}else c(d);return a.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function Cx(n,e,t){let i;function s(d){i=d}let a,r;function o(d){a=d.type,r=d.bytesPerElement}function l(d,h){n.drawElements(i,h,a,d*r),t.update(h,i,1)}function c(d,h,p){p!==0&&(n.drawElementsInstanced(i,h,a,d*r,p),t.update(h,i,p))}function u(d,h,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,a,d,0,p);let v=0;for(let x=0;x<p;x++)v+=h[x];t.update(v,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function Rx(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,r,o){switch(t.calls++,r){case n.TRIANGLES:t.triangles+=o*(a/3);break;case n.LINES:t.lines+=o*(a/2);break;case n.LINE_STRIP:t.lines+=o*(a-1);break;case n.LINE_LOOP:t.lines+=o*a;break;case n.POINTS:t.points+=o*a;break;default:ze("WebGLInfo: Unknown draw mode:",r);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Px(n,e,t){let i=new WeakMap,s=new wt;function a(r,o,l){let c=r.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0,h=i.get(o);if(h===void 0||h.count!==d){let A=function(){R.dispose(),i.delete(o),o.removeEventListener("dispose",A)};h!==void 0&&h.texture.dispose();let p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,x=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],S=o.morphAttributes.color||[],T=0;p===!0&&(T=1),g===!0&&(T=2),v===!0&&(T=3);let y=o.attributes.position.count*T,E=1;y>e.maxTextureSize&&(E=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let w=new Float32Array(y*E*4*d),R=new Za(w,y,E,d);R.type=kn,R.needsUpdate=!0;let _=T*4;for(let C=0;C<d;C++){let F=x[C],B=f[C],H=S[C],L=y*E*4*C;for(let G=0;G<F.count;G++){let J=G*_;p===!0&&(s.fromBufferAttribute(F,G),w[L+J+0]=s.x,w[L+J+1]=s.y,w[L+J+2]=s.z,w[L+J+3]=0),g===!0&&(s.fromBufferAttribute(B,G),w[L+J+4]=s.x,w[L+J+5]=s.y,w[L+J+6]=s.z,w[L+J+7]=0),v===!0&&(s.fromBufferAttribute(H,G),w[L+J+8]=s.x,w[L+J+9]=s.y,w[L+J+10]=s.z,w[L+J+11]=H.itemSize===4?s.w:1)}}h={count:d,texture:R,size:new ce(y,E)},i.set(o,h),o.addEventListener("dispose",A)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",r.morphTexture,t);else{let p=0;for(let v=0;v<c.length;v++)p+=c[v];let g=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:a}}function Ix(n,e,t,i,s){let a=new WeakMap;function r(c){let u=s.render.frame,d=c.geometry,h=e.get(c,d);if(a.get(h)!==u&&(e.update(h),a.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),a.get(c)!==u&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),a.set(c,u))),c.isSkinnedMesh){let p=c.skeleton;a.get(p)!==u&&(p.update(),a.set(p,u))}return h}function o(){a=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:r,dispose:o}}var Lx={[Ar]:"LINEAR_TONE_MAPPING",[Cr]:"REINHARD_TONE_MAPPING",[Rr]:"CINEON_TONE_MAPPING",[Cs]:"ACES_FILMIC_TONE_MAPPING",[Ir]:"AGX_TONE_MAPPING",[Lr]:"NEUTRAL_TONE_MAPPING",[Pr]:"CUSTOM_TONE_MAPPING"};function Nx(n,e,t,i,s,a){let r=new Ft(e,t,{type:n,depthBuffer:s,stencilBuffer:a,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new Rt;c.setAttribute("position",new nt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new nt([0,2,0,0,2,0],2));let u=new da({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Oe(c,u),h=new ji(-1,1,1,-1,0,1),p=null,g=null,v=!1,x,f=null,S=[],T=!1;this.setSize=function(y,E){r.setSize(y,E),o!==null&&o.setSize(y,E),l!==null&&l.setSize(y,E);for(let w=0;w<S.length;w++){let R=S[w];R.setSize&&R.setSize(y,E)}},this.setEffects=function(y){S=y,T=S.length>0&&S[0].isRenderPass===!0;let E=r.width,w=r.height;S.length>0&&o===null&&(o=new Ft(E,w,{type:Zt,depthBuffer:!1,stencilBuffer:!1}),l=new Ft(E,w,{type:Zt,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<S.length;R++){let _=S[R];_.setSize&&_.setSize(E,w)}},this.begin=function(y,E){if(v||y.toneMapping===Bn&&S.length===0)return!1;if(f=E,E!==null){let w=E.width,R=E.height;(r.width!==w||r.height!==R)&&this.setSize(w,R)}return T===!1&&y.setRenderTarget(r),x=y.toneMapping,y.toneMapping=Bn,!0},this.hasRenderPass=function(){return T},this.end=function(y,E){y.toneMapping=x,v=!0;let w=r,R=o;for(let _=0;_<S.length;_++){let A=S[_];A.enabled!==!1&&(A.render(y,R,w,E),A.needsSwap!==!1&&(w=R,R=R===o?l:o))}if(p!==y.outputColorSpace||g!==y.toneMapping){p=y.outputColorSpace,g=y.toneMapping,u.defines={},Ze.getTransfer(p)===ot&&(u.defines.SRGB_TRANSFER="");let _=Lx[g];_&&(u.defines[_]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=w.texture,y.setRenderTarget(f),y.render(d,h),f=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){r.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}var rp=new ln,hh=new Gi(1,1),op=new Za,lp=new el,cp=new ar,kf=[],Vf=[],Hf=new Float32Array(16),Gf=new Float32Array(9),Wf=new Float32Array(4);function Ma(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,a=kf[s];if(a===void 0&&(a=new Float32Array(s),kf[s]=a),e!==0){i.toArray(a,0);for(let r=1,o=0;r!==e;++r)o+=t,n[r].toArray(a,o)}return a}function zt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function kt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function yc(n,e){let t=Vf[e];t===void 0&&(t=new Int32Array(e),Vf[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Dx(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Ux(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;n.uniform2fv(this.addr,e),kt(t,e)}}function Fx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(zt(t,e))return;n.uniform3fv(this.addr,e),kt(t,e)}}function Ox(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;n.uniform4fv(this.addr,e),kt(t,e)}}function qx(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(zt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),kt(t,e)}else{if(zt(t,i))return;Wf.set(i),n.uniformMatrix2fv(this.addr,!1,Wf),kt(t,i)}}function Bx(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(zt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),kt(t,e)}else{if(zt(t,i))return;Gf.set(i),n.uniformMatrix3fv(this.addr,!1,Gf),kt(t,i)}}function zx(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(zt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),kt(t,e)}else{if(zt(t,i))return;Hf.set(i),n.uniformMatrix4fv(this.addr,!1,Hf),kt(t,i)}}function kx(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Vx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;n.uniform2iv(this.addr,e),kt(t,e)}}function Hx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zt(t,e))return;n.uniform3iv(this.addr,e),kt(t,e)}}function Gx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;n.uniform4iv(this.addr,e),kt(t,e)}}function Wx(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Xx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;n.uniform2uiv(this.addr,e),kt(t,e)}}function Yx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zt(t,e))return;n.uniform3uiv(this.addr,e),kt(t,e)}}function $x(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;n.uniform4uiv(this.addr,e),kt(t,e)}}function jx(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let a;this.type===n.SAMPLER_2D_SHADOW?(hh.compareFunction=t.isReversedDepthBuffer()?fc:dc,a=hh):a=rp,t.setTexture2D(e||a,s)}function Jx(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||lp,s)}function Zx(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||cp,s)}function Kx(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||op,s)}function Qx(n){switch(n){case 5126:return Dx;case 35664:return Ux;case 35665:return Fx;case 35666:return Ox;case 35674:return qx;case 35675:return Bx;case 35676:return zx;case 5124:case 35670:return kx;case 35667:case 35671:return Vx;case 35668:case 35672:return Hx;case 35669:case 35673:return Gx;case 5125:return Wx;case 36294:return Xx;case 36295:return Yx;case 36296:return $x;case 35678:case 36198:case 36298:case 36306:case 35682:return jx;case 35679:case 36299:case 36307:return Jx;case 35680:case 36300:case 36308:case 36293:return Zx;case 36289:case 36303:case 36311:case 36292:return Kx}}function e_(n,e){n.uniform1fv(this.addr,e)}function t_(n,e){let t=Ma(e,this.size,2);n.uniform2fv(this.addr,t)}function n_(n,e){let t=Ma(e,this.size,3);n.uniform3fv(this.addr,t)}function i_(n,e){let t=Ma(e,this.size,4);n.uniform4fv(this.addr,t)}function s_(n,e){let t=Ma(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function a_(n,e){let t=Ma(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function r_(n,e){let t=Ma(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function o_(n,e){n.uniform1iv(this.addr,e)}function l_(n,e){n.uniform2iv(this.addr,e)}function c_(n,e){n.uniform3iv(this.addr,e)}function u_(n,e){n.uniform4iv(this.addr,e)}function h_(n,e){n.uniform1uiv(this.addr,e)}function d_(n,e){n.uniform2uiv(this.addr,e)}function f_(n,e){n.uniform3uiv(this.addr,e)}function p_(n,e){n.uniform4uiv(this.addr,e)}function m_(n,e,t){let i=this.cache,s=e.length,a=yc(t,s);zt(i,a)||(n.uniform1iv(this.addr,a),kt(i,a));let r;this.type===n.SAMPLER_2D_SHADOW?r=hh:r=rp;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||r,a[o])}function g_(n,e,t){let i=this.cache,s=e.length,a=yc(t,s);zt(i,a)||(n.uniform1iv(this.addr,a),kt(i,a));for(let r=0;r!==s;++r)t.setTexture3D(e[r]||lp,a[r])}function x_(n,e,t){let i=this.cache,s=e.length,a=yc(t,s);zt(i,a)||(n.uniform1iv(this.addr,a),kt(i,a));for(let r=0;r!==s;++r)t.setTextureCube(e[r]||cp,a[r])}function __(n,e,t){let i=this.cache,s=e.length,a=yc(t,s);zt(i,a)||(n.uniform1iv(this.addr,a),kt(i,a));for(let r=0;r!==s;++r)t.setTexture2DArray(e[r]||op,a[r])}function v_(n){switch(n){case 5126:return e_;case 35664:return t_;case 35665:return n_;case 35666:return i_;case 35674:return s_;case 35675:return a_;case 35676:return r_;case 5124:case 35670:return o_;case 35667:case 35671:return l_;case 35668:case 35672:return c_;case 35669:case 35673:return u_;case 5125:return h_;case 36294:return d_;case 36295:return f_;case 36296:return p_;case 35678:case 36198:case 36298:case 36306:case 35682:return m_;case 35679:case 36299:case 36307:return g_;case 35680:case 36300:case 36308:case 36293:return x_;case 36289:case 36303:case 36311:case 36292:return __}}var dh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Qx(t.type)}},fh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=v_(t.type)}},ph=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let a=0,r=s.length;a!==r;++a){let o=s[a];o.setValue(e,t[o.id],i)}}},ch=/(\w+)(\])?(\[|\.)?/g;function Xf(n,e){n.seq.push(e),n.map[e.id]=e}function y_(n,e,t){let i=n.name,s=i.length;for(ch.lastIndex=0;;){let a=ch.exec(i),r=ch.lastIndex,o=a[1],l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===s){Xf(t,c===void 0?new dh(o,n,e):new fh(o,n,e));break}else{let d=t.map[o];d===void 0&&(d=new ph(o),Xf(t,d)),t=d}}}var ba=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let o=e.getActiveUniform(t,r),l=e.getUniformLocation(t,o.name);y_(o,l,this)}let s=[],a=[];for(let r of this.seq)r.type===e.SAMPLER_2D_SHADOW||r.type===e.SAMPLER_CUBE_SHADOW||r.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(r):a.push(r);s.length>0&&(this.seq=s.concat(a))}setValue(e,t,i,s){let a=this.map[t];a!==void 0&&a.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let a=0,r=t.length;a!==r;++a){let o=t[a],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,a=e.length;s!==a;++s){let r=e[s];r.id in t&&i.push(r)}return i}};function Yf(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var b_=37297,M_=0;function S_(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let r=s;r<a;r++){let o=r+1;i.push(`${o===e?">":" "} ${o}: ${t[r]}`)}return i.join(`
`)}var $f=new We;function T_(n){Ze._getMatrix($f,Ze.workingColorSpace,n);let e=`mat3( ${$f.elements.map(t=>t.toFixed(4))} )`;switch(Ze.getTransfer(n)){case ja:return[e,"LinearTransferOETF"];case ot:return[e,"sRGBTransferOETF"];default:return Fe("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function jf(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),a=(n.getShaderInfoLog(e)||"").trim();if(i&&a==="")return"";let r=/ERROR: 0:(\d+)/.exec(a);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+a+`

`+S_(n.getShaderSource(e),o)}else return a}function E_(n,e){let t=T_(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var w_={[Ar]:"Linear",[Cr]:"Reinhard",[Rr]:"Cineon",[Cs]:"ACESFilmic",[Ir]:"AgX",[Lr]:"Neutral",[Pr]:"Custom"};function A_(n,e){let t=w_[e];return t===void 0?(Fe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var mc=new I;function C_(){Ze.getLuminanceCoefficients(mc);let n=mc.x.toFixed(4),e=mc.y.toFixed(4),t=mc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function R_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Hr).join(`
`)}function P_(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function I_(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let a=n.getActiveAttrib(e,s),r=a.name,o=1;a.type===n.FLOAT_MAT2&&(o=2),a.type===n.FLOAT_MAT3&&(o=3),a.type===n.FLOAT_MAT4&&(o=4),t[r]={type:a.type,location:n.getAttribLocation(e,r),locationSize:o}}return t}function Hr(n){return n!==""}function Jf(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Zf(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var L_=/^[ \t]*#include +<([\w\d./]+)>/gm;function mh(n){return n.replace(L_,D_)}var N_=new Map;function D_(n,e){let t=je[e];if(t===void 0){let i=N_.get(e);if(i!==void 0)t=je[i],Fe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return mh(t)}var U_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Kf(n){return n.replace(U_,F_)}function F_(n,e,t,i){let s="";for(let a=parseInt(e);a<parseInt(t);a++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function Qf(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}var O_={[wr]:"SHADOWMAP_TYPE_PCF",[pa]:"SHADOWMAP_TYPE_VSM"};function q_(n){return O_[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var B_={[Ki]:"ENVMAP_TYPE_CUBE",[Rs]:"ENVMAP_TYPE_CUBE",[Nr]:"ENVMAP_TYPE_CUBE_UV"};function z_(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":B_[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var k_={[Rs]:"ENVMAP_MODE_REFRACTION"};function V_(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":k_[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var H_={[Hu]:"ENVMAP_BLENDING_MULTIPLY",[ff]:"ENVMAP_BLENDING_MIX",[pf]:"ENVMAP_BLENDING_ADD"};function G_(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":H_[n.combine]||"ENVMAP_BLENDING_NONE"}function W_(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function X_(n,e,t,i){let s=n.getContext(),a=t.defines,r=t.vertexShader,o=t.fragmentShader,l=q_(t),c=z_(t),u=V_(t),d=G_(t),h=W_(t),p=R_(t),g=P_(a),v=s.createProgram(),x,f,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Hr).join(`
`),x.length>0&&(x+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Hr).join(`
`),f.length>0&&(f+=`
`)):(x=[Qf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Hr).join(`
`),f=[Qf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Bn?"#define TONE_MAPPING":"",t.toneMapping!==Bn?je.tonemapping_pars_fragment:"",t.toneMapping!==Bn?A_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,E_("linearToOutputTexel",t.outputColorSpace),C_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Hr).join(`
`)),r=mh(r),r=Jf(r,t),r=Zf(r,t),o=mh(o),o=Jf(o,t),o=Zf(o,t),r=Kf(r),o=Kf(o),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,x=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,f=["#define varying in",t.glslVersion===Ku?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ku?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let T=S+x+r,y=S+f+o,E=Yf(s,s.VERTEX_SHADER,T),w=Yf(s,s.FRAGMENT_SHADER,y);s.attachShader(v,E),s.attachShader(v,w),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function R(F){if(n.debug.checkShaderErrors){let B=s.getProgramInfoLog(v)||"",H=s.getShaderInfoLog(E)||"",L=s.getShaderInfoLog(w)||"",G=B.trim(),J=H.trim(),K=L.trim(),ae=!0,$=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(ae=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,E,w);else{let ee=jf(s,E,"vertex"),ne=jf(s,w,"fragment");ze("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+G+`
`+ee+`
`+ne)}else G!==""?Fe("WebGLProgram: Program Info Log:",G):(J===""||K==="")&&($=!1);$&&(F.diagnostics={runnable:ae,programLog:G,vertexShader:{log:J,prefix:x},fragmentShader:{log:K,prefix:f}})}s.deleteShader(E),s.deleteShader(w),_=new ba(s,v),A=I_(s,v)}let _;this.getUniforms=function(){return _===void 0&&R(this),_};let A;this.getAttributes=function(){return A===void 0&&R(this),A};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(v,b_)),C},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=M_++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=E,this.fragmentShader=w,this}var Y_=0,gh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new xh(e),t.set(e,i)),i}},xh=class{constructor(e){this.id=Y_++,this.code=e,this.usedTimes=0}};function $_(n){return n===ts||n===Br||n===zr}function j_(n,e,t,i,s,a){let r=new Ka,o=new gh,l=new Set,c=[],u=new Map,d=i.logarithmicDepthBuffer,h=i.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(_){return l.add(_),_===0?"uv":`uv${_}`}function v(_,A,C,F,B,H){let L=F.fog,G=B.geometry,J=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?F.environment:null,K=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,ae=e.get(_.envMap||J,K),$=ae&&ae.mapping===Nr?ae.image.height:null,ee=p[_.type];_.precision!==null&&(h=i.getMaxPrecision(_.precision),h!==_.precision&&Fe("WebGLProgram.getParameters:",_.precision,"not supported, using",h,"instead."));let ne=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,De=ne!==void 0?ne.length:0,Ie=0;G.morphAttributes.position!==void 0&&(Ie=1),G.morphAttributes.normal!==void 0&&(Ie=2),G.morphAttributes.color!==void 0&&(Ie=3);let ht,tt,it,j;if(ee){let xt=ni[ee];ht=xt.vertexShader,tt=xt.fragmentShader}else{ht=_.vertexShader,tt=_.fragmentShader;let xt=o.getVertexShaderStage(_),lt=o.getFragmentShaderStage(_);o.update(_,xt,lt),it=xt.id,j=lt.id}let te=n.getRenderTarget(),be=n.state.buffers.depth.getReversed(),Ve=B.isInstancedMesh===!0,ye=B.isBatchedMesh===!0,Ye=!!_.map,Tt=!!_.matcap,Je=!!ae,st=!!_.aoMap,dt=!!_.lightMap,Be=!!_.bumpMap&&_.wireframe===!1,gt=!!_.normalMap,It=!!_.displacementMap,qt=!!_.emissiveMap,vt=!!_.metalnessMap,Et=!!_.roughnessMap,O=_.anisotropy>0,X=_.clearcoat>0,U=_.dispersion>0,M=_.retroreflectivity>0,m=_.iridescence>0,P=_.sheen>0,q=_.transmission>0,z=O&&!!_.anisotropyMap,se=X&&!!_.clearcoatMap,oe=X&&!!_.clearcoatNormalMap,Y=X&&!!_.clearcoatRoughnessMap,Z=m&&!!_.iridescenceMap,le=m&&!!_.iridescenceThicknessMap,Ee=P&&!!_.sheenColorMap,ue=P&&!!_.sheenRoughnessMap,he=!!_.specularMap,Ae=!!_.specularColorMap,Pe=!!_.specularIntensityMap,Ge=q&&!!_.transmissionMap,D=q&&!!_.thicknessMap,de=!!_.gradientMap,Q=!!_.alphaMap,fe=_.alphaTest>0,pe=!!_.alphaHash,ie=!!_.extensions,we=Bn;_.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(we=n.toneMapping);let Te={shaderID:ee,shaderType:_.type,shaderName:_.name,vertexShader:ht,fragmentShader:tt,defines:_.defines,customVertexShaderID:it,customFragmentShaderID:j,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:h,batching:ye,batchingColor:ye&&B._colorsTexture!==null,instancing:Ve,instancingColor:Ve&&B.instanceColor!==null,instancingMorph:Ve&&B.morphTexture!==null,outputColorSpace:te===null?n.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:Ze.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Ye,matcap:Tt,envMap:Je,envMapMode:Je&&ae.mapping,envMapCubeUVHeight:$,aoMap:st,lightMap:dt,bumpMap:Be,normalMap:gt,displacementMap:It,emissiveMap:qt,normalMapObjectSpace:gt&&_.normalMapType===xf,normalMapTangentSpace:gt&&_.normalMapType===hc,packedNormalMap:gt&&_.normalMapType===hc&&$_(_.normalMap.format),metalnessMap:vt,roughnessMap:Et,anisotropy:O,anisotropyMap:z,clearcoat:X,clearcoatMap:se,clearcoatNormalMap:oe,clearcoatRoughnessMap:Y,dispersion:U,retroreflection:M,iridescence:m,iridescenceMap:Z,iridescenceThicknessMap:le,sheen:P,sheenColorMap:Ee,sheenRoughnessMap:ue,specularMap:he,specularColorMap:Ae,specularIntensityMap:Pe,transmission:q,transmissionMap:Ge,thicknessMap:D,gradientMap:de,opaque:_.transparent===!1&&_.blending===ma&&_.alphaToCoverage===!1,alphaMap:Q,alphaTest:fe,alphaHash:pe,combine:_.combine,mapUv:Ye&&g(_.map.channel),aoMapUv:st&&g(_.aoMap.channel),lightMapUv:dt&&g(_.lightMap.channel),bumpMapUv:Be&&g(_.bumpMap.channel),normalMapUv:gt&&g(_.normalMap.channel),displacementMapUv:It&&g(_.displacementMap.channel),emissiveMapUv:qt&&g(_.emissiveMap.channel),metalnessMapUv:vt&&g(_.metalnessMap.channel),roughnessMapUv:Et&&g(_.roughnessMap.channel),anisotropyMapUv:z&&g(_.anisotropyMap.channel),clearcoatMapUv:se&&g(_.clearcoatMap.channel),clearcoatNormalMapUv:oe&&g(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Y&&g(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Z&&g(_.iridescenceMap.channel),iridescenceThicknessMapUv:le&&g(_.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&g(_.sheenColorMap.channel),sheenRoughnessMapUv:ue&&g(_.sheenRoughnessMap.channel),specularMapUv:he&&g(_.specularMap.channel),specularColorMapUv:Ae&&g(_.specularColorMap.channel),specularIntensityMapUv:Pe&&g(_.specularIntensityMap.channel),transmissionMapUv:Ge&&g(_.transmissionMap.channel),thicknessMapUv:D&&g(_.thicknessMap.channel),alphaMapUv:Q&&g(_.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(gt||O),vertexNormals:!!G.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!G.attributes.uv&&(Ye||Q),fog:!!L,useFog:_.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||G.attributes.normal===void 0&&gt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:be,skinning:B.isSkinnedMesh===!0,hasPositionAttribute:G.attributes.position!==void 0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:De,morphTextureStride:Ie,numSunLights:A.sun.length,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numSunLightShadows:A.sunShadowMap.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:H.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&C.length>0,shadowMapType:n.shadowMap.type,toneMapping:we,decodeVideoTexture:Ye&&_.map.isVideoTexture===!0&&Ze.getTransfer(_.map.colorSpace)===ot,decodeVideoTextureEmissive:qt&&_.emissiveMap.isVideoTexture===!0&&Ze.getTransfer(_.emissiveMap.colorSpace)===ot,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===wn,flipSided:_.side===cn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ie&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ie&&_.extensions.multiDraw===!0||ye)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Te.vertexUv1s=l.has(1),Te.vertexUv2s=l.has(2),Te.vertexUv3s=l.has(3),l.clear(),Te}function x(_){let A=[];if(_.shaderID?A.push(_.shaderID):(A.push(_.customVertexShaderID),A.push(_.customFragmentShaderID)),_.defines!==void 0)for(let C in _.defines)A.push(C),A.push(_.defines[C]);return _.isRawShaderMaterial===!1&&(f(A,_),S(A,_),A.push(n.outputColorSpace)),A.push(_.customProgramCacheKey),A.join()}function f(_,A){_.push(A.precision),_.push(A.outputColorSpace),_.push(A.envMapMode),_.push(A.envMapCubeUVHeight),_.push(A.mapUv),_.push(A.alphaMapUv),_.push(A.lightMapUv),_.push(A.aoMapUv),_.push(A.bumpMapUv),_.push(A.normalMapUv),_.push(A.displacementMapUv),_.push(A.emissiveMapUv),_.push(A.metalnessMapUv),_.push(A.roughnessMapUv),_.push(A.anisotropyMapUv),_.push(A.clearcoatMapUv),_.push(A.clearcoatNormalMapUv),_.push(A.clearcoatRoughnessMapUv),_.push(A.iridescenceMapUv),_.push(A.iridescenceThicknessMapUv),_.push(A.sheenColorMapUv),_.push(A.sheenRoughnessMapUv),_.push(A.specularMapUv),_.push(A.specularColorMapUv),_.push(A.specularIntensityMapUv),_.push(A.transmissionMapUv),_.push(A.thicknessMapUv),_.push(A.combine),_.push(A.fogExp2),_.push(A.sizeAttenuation),_.push(A.morphTargetsCount),_.push(A.morphAttributeCount),_.push(A.numSunLights),_.push(A.numDirLights),_.push(A.numPointLights),_.push(A.numSpotLights),_.push(A.numSpotLightMaps),_.push(A.numHemiLights),_.push(A.numRectAreaLights),_.push(A.numSunLightShadows),_.push(A.numDirLightShadows),_.push(A.numPointLightShadows),_.push(A.numSpotLightShadows),_.push(A.numSpotLightShadowsWithMaps),_.push(A.numLightProbes),_.push(A.shadowMapType),_.push(A.toneMapping),_.push(A.numClippingPlanes),_.push(A.numClipIntersection),_.push(A.depthPacking)}function S(_,A){r.disableAll(),A.instancing&&r.enable(0),A.instancingColor&&r.enable(1),A.instancingMorph&&r.enable(2),A.matcap&&r.enable(3),A.envMap&&r.enable(4),A.normalMapObjectSpace&&r.enable(5),A.normalMapTangentSpace&&r.enable(6),A.clearcoat&&r.enable(7),A.iridescence&&r.enable(8),A.alphaTest&&r.enable(9),A.vertexColors&&r.enable(10),A.vertexAlphas&&r.enable(11),A.vertexUv1s&&r.enable(12),A.vertexUv2s&&r.enable(13),A.vertexUv3s&&r.enable(14),A.vertexTangents&&r.enable(15),A.anisotropy&&r.enable(16),A.alphaHash&&r.enable(17),A.batching&&r.enable(18),A.dispersion&&r.enable(19),A.retroreflection&&r.enable(24),A.batchingColor&&r.enable(20),A.gradientMap&&r.enable(21),A.packedNormalMap&&r.enable(22),A.vertexNormals&&r.enable(23),_.push(r.mask),r.disableAll(),A.fog&&r.enable(0),A.useFog&&r.enable(1),A.flatShading&&r.enable(2),A.logarithmicDepthBuffer&&r.enable(3),A.reversedDepthBuffer&&r.enable(4),A.skinning&&r.enable(5),A.morphTargets&&r.enable(6),A.morphNormals&&r.enable(7),A.morphColors&&r.enable(8),A.premultipliedAlpha&&r.enable(9),A.shadowMapEnabled&&r.enable(10),A.doubleSided&&r.enable(11),A.flipSided&&r.enable(12),A.useDepthPacking&&r.enable(13),A.dithering&&r.enable(14),A.transmission&&r.enable(15),A.sheen&&r.enable(16),A.opaque&&r.enable(17),A.pointsUvs&&r.enable(18),A.decodeVideoTexture&&r.enable(19),A.decodeVideoTextureEmissive&&r.enable(20),A.alphaToCoverage&&r.enable(21),A.numLightProbeGrids>0&&r.enable(22),A.hasPositionAttribute&&r.enable(23),_.push(r.mask)}function T(_){let A=p[_.type],C;if(A){let F=ni[A];C=Mi.clone(F.uniforms)}else C=_.uniforms;return C}function y(_,A){let C=u.get(A);return C!==void 0?++C.usedTimes:(C=new X_(n,A,_,s),c.push(C),u.set(A,C)),C}function E(_){if(--_.usedTimes===0){let A=c.indexOf(_);c[A]=c[c.length-1],c.pop(),u.delete(_.cacheKey),_.destroy()}}function w(_){o.remove(_)}function R(){o.dispose()}return{getParameters:v,getProgramCacheKey:x,getUniforms:T,acquireProgram:y,releaseProgram:E,releaseShaderCache:w,programs:c,dispose:R}}function J_(){let n=new WeakMap;function e(r){return n.has(r)}function t(r){let o=n.get(r);return o===void 0&&(o={},n.set(r,o)),o}function i(r){n.delete(r)}function s(r,o,l){n.get(r)[o]=l}function a(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:a}}function Z_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function ep(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function tp(){let n=[],e=0,t=[],i=[],s=[];function a(){e=0,t.length=0,i.length=0,s.length=0}function r(h){let p=0;return h.isInstancedMesh&&(p+=2),h.isSkinnedMesh&&(p+=1),p}function o(h,p,g,v,x,f){let S=n[e];return S===void 0?(S={id:h.id,object:h,geometry:p,material:g,materialVariant:r(h),groupOrder:v,renderOrder:h.renderOrder,z:x,group:f},n[e]=S):(S.id=h.id,S.object=h,S.geometry=p,S.material=g,S.materialVariant=r(h),S.groupOrder=v,S.renderOrder=h.renderOrder,S.z=x,S.group=f),e++,S}function l(h,p,g,v,x,f,S){S.reversedDepth===!0&&(x=-x);let T=o(h,p,g,v,x,f);g.transmission>0?i.push(T):g.transparent===!0?s.push(T):t.push(T)}function c(h,p,g,v,x,f){let S=o(h,p,g,v,x,f);g.transmission>0?i.unshift(S):g.transparent===!0?s.unshift(S):t.unshift(S)}function u(h,p){t.length>1&&t.sort(h||Z_),i.length>1&&i.sort(p||ep),s.length>1&&s.sort(p||ep)}function d(){for(let h=e,p=n.length;h<p;h++){let g=n[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:s,init:a,push:l,unshift:c,finish:d,sort:u}}function K_(){let n=new WeakMap;function e(i,s){let a=n.get(i),r;return a===void 0?(r=new tp,n.set(i,[r])):s>=a.length?(r=new tp,a.push(r)):r=a[s],r}function t(){n=new WeakMap}return{get:e,dispose:t}}function Q_(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new I,color:new Ue};break;case"SpotLight":t={position:new I,direction:new I,color:new Ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Ue,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Ue,groundColor:new Ue};break;case"RectAreaLight":t={color:new Ue,position:new I,halfWidth:new I,halfHeight:new I};break}return n[e.id]=t,t}}}function e2(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var t2=0;function n2(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function i2(n){let e=new Q_,t=e2(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new I);let s=new I,a=new Mt,r=new Mt;function o(c){let u=0,d=0,h=0;for(let B=0;B<9;B++)i.probe[B].set(0,0,0);let p=0,g=0,v=0,x=0,f=0,S=0,T=0,y=0,E=0,w=0,R=0,_=0,A=0,C=0;c.sort(n2);for(let B=0,H=c.length;B<H;B++){let L=c[B],G=L.color,J=L.intensity,K=L.distance,ae=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===ts?ae=L.shadow.map.texture:ae=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)u+=G.r*J,d+=G.g*J,h+=G.b*J;else if(L.isLightProbe){for(let $=0;$<9;$++)i.probe[$].addScaledVector(L.sh.coefficients[$],J);C++}else if(L.isSunLight){let $=e.get(L);if($.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let ee=L.shadow,ne=t.get(L);ne.shadowIntensity=ee.intensity,ne.shadowBias=ee.bias,ne.shadowNormalBias=ee.normalBias,ne.shadowRadius=ee.radius,ne.shadowMapSize.copy(ee.mapSize).multiply(ee.getFrameExtents()),i.sunShadow[g]=ne,i.sunShadowMap[g]=ae;let De=ee.getViewportCount();for(let Ie=0;Ie<De;Ie++)i.sunShadowMatrix[v+Ie]=ee.getMatrix(Ie),i.sunShadowCascade[v+Ie]=ee._cascadeData[Ie];v+=De,g++}i.sun[p]=$,p++}else if(L.isDirectionalLight){let $=e.get(L);if($.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let ee=L.shadow,ne=t.get(L);ne.shadowIntensity=ee.intensity,ne.shadowBias=ee.bias,ne.shadowNormalBias=ee.normalBias,ne.shadowRadius=ee.radius,ne.shadowMapSize=ee.mapSize,i.directionalShadow[x]=ne,i.directionalShadowMap[x]=ae,i.directionalShadowMatrix[x]=L.shadow.matrix,E++}i.directional[x]=$,x++}else if(L.isSpotLight){let $=e.get(L);$.position.setFromMatrixPosition(L.matrixWorld),$.color.copy(G).multiplyScalar(J),$.distance=K,$.coneCos=Math.cos(L.angle),$.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),$.decay=L.decay,i.spot[S]=$;let ee=L.shadow;if(L.map&&(i.spotLightMap[_]=L.map,_++,ee.updateMatrices(L),L.castShadow&&A++),i.spotLightMatrix[S]=ee.matrix,L.castShadow){let ne=t.get(L);ne.shadowIntensity=ee.intensity,ne.shadowBias=ee.bias,ne.shadowNormalBias=ee.normalBias,ne.shadowRadius=ee.radius,ne.shadowMapSize=ee.mapSize,i.spotShadow[S]=ne,i.spotShadowMap[S]=ae,R++}S++}else if(L.isRectAreaLight){let $=e.get(L);$.color.copy(G).multiplyScalar(J),$.halfWidth.set(L.width*.5,0,0),$.halfHeight.set(0,L.height*.5,0),i.rectArea[T]=$,T++}else if(L.isPointLight){let $=e.get(L);if($.color.copy(L.color).multiplyScalar(L.intensity),$.distance=L.distance,$.decay=L.decay,L.castShadow){let ee=L.shadow,ne=t.get(L);ne.shadowIntensity=ee.intensity,ne.shadowBias=ee.bias,ne.shadowNormalBias=ee.normalBias,ne.shadowRadius=ee.radius,ne.shadowMapSize=ee.mapSize,ne.shadowCameraNear=ee.camera.near,ne.shadowCameraFar=ee.camera.far,i.pointShadow[f]=ne,i.pointShadowMap[f]=ae,i.pointShadowMatrix[f]=L.shadow.matrix,w++}i.point[f]=$,f++}else if(L.isHemisphereLight){let $=e.get(L);$.skyColor.copy(L.color).multiplyScalar(J),$.groundColor.copy(L.groundColor).multiplyScalar(J),i.hemi[y]=$,y++}}T>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=me.LTC_FLOAT_1,i.rectAreaLTC2=me.LTC_FLOAT_2):(i.rectAreaLTC1=me.LTC_HALF_1,i.rectAreaLTC2=me.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;let F=i.hash;(F.sunLength!==p||F.directionalLength!==x||F.pointLength!==f||F.spotLength!==S||F.rectAreaLength!==T||F.hemiLength!==y||F.numSunShadows!==g||F.numDirectionalShadows!==E||F.numPointShadows!==w||F.numSpotShadows!==R||F.numSpotMaps!==_||F.numLightProbes!==C)&&(i.sun.length=p,i.directional.length=x,i.spot.length=S,i.rectArea.length=T,i.point.length=f,i.hemi.length=y,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=v,i.sunShadowCascade.length=v,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.directionalShadowMatrix.length=E,i.pointShadow.length=w,i.pointShadowMap.length=w,i.pointShadowMatrix.length=w,i.spotShadow.length=R,i.spotShadowMap.length=R,i.spotLightMatrix.length=R+_-A,i.spotLightMap.length=_,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=C,F.sunLength=p,F.directionalLength=x,F.pointLength=f,F.spotLength=S,F.rectAreaLength=T,F.hemiLength=y,F.numSunShadows=g,F.numDirectionalShadows=E,F.numPointShadows=w,F.numSpotShadows=R,F.numSpotMaps=_,F.numLightProbes=C,i.version=t2++)}function l(c,u){let d=0,h=0,p=0,g=0,v=0,x=0,f=u.matrixWorldInverse;for(let S=0,T=c.length;S<T;S++){let y=c[S];if(y.isSunLight){let E=i.sun[d];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(f),d++}else if(y.isDirectionalLight){let E=i.directional[h];E.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(f),h++}else if(y.isSpotLight){let E=i.spot[g];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(f),E.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(f),g++}else if(y.isRectAreaLight){let E=i.rectArea[v];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(f),r.identity(),a.copy(y.matrixWorld),a.premultiply(f),r.extractRotation(a),E.halfWidth.set(y.width*.5,0,0),E.halfHeight.set(0,y.height*.5,0),E.halfWidth.applyMatrix4(r),E.halfHeight.applyMatrix4(r),v++}else if(y.isPointLight){let E=i.point[p];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(f),p++}else if(y.isHemisphereLight){let E=i.hemi[x];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(f),x++}}}return{setup:o,setupView:l,state:i}}function np(n){let e=new i2(n),t=[],i=[],s=[];function a(h){d.camera=h,t.length=0,i.length=0,s.length=0}function r(h){t.push(h)}function o(h){i.push(h)}function l(h){s.push(h)}function c(){e.setup(t)}function u(h){e.setupView(t,h)}let d={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:c,setupLightsView:u,pushLight:r,pushShadow:o,pushLightProbeGrid:l}}function s2(n){let e=new WeakMap;function t(s,a=0){let r=e.get(s),o;return r===void 0?(o=new np(n),e.set(s,[o])):a>=r.length?(o=new np(n),r.push(o)):o=r[a],o}function i(){e=new WeakMap}return{get:t,dispose:i}}var a2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,r2=`uniform sampler2D shadow_pass;
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
}`,o2=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],l2=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],ip=new Mt,Vr=new I,uh=new I;function c2(n,e,t){let i=new ra,s=new ce,a=new ce,r=new wt,o=new dl,l=new fl,c={},u=t.maxTextureSize,d={[Ji]:cn,[cn]:Ji,[wn]:wn},h=new Nt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ce},radius:{value:4}},vertexShader:a2,fragmentShader:r2}),p=h.clone();p.defines.HORIZONTAL_PASS=1;let g=new Rt;g.setAttribute("position",new on(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Oe(g,h),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wr;let f=this.type;this.render=function(w,R,_){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||w.length===0)return;this.type===Yd&&(Fe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=wr);let A=n.getRenderTarget(),C=n.getActiveCubeFace(),F=n.getActiveMipmapLevel(),B=n.state;B.setBlending(An),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let H=f!==this.type;H&&R.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(G=>G.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,G=w.length;L<G;L++){let J=w[L],K=J.shadow;if(K===void 0){Fe("WebGLShadowMap:",J,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;s.copy(K.mapSize);let ae=K.getFrameExtents();s.multiply(ae),a.copy(K.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(a.x=Math.floor(u/ae.x),s.x=a.x*ae.x,K.mapSize.x=a.x),s.y>u&&(a.y=Math.floor(u/ae.y),s.y=a.y*ae.y,K.mapSize.y=a.y));let $=n.state.buffers.depth.getReversed();if(K.camera._reversedDepth=$,K.map===null||H===!0){if(K.map!==null&&(K.map.depthTexture!==null&&(K.map.depthTexture.dispose(),K.map.depthTexture=null),K.map.dispose()),this.type===pa){if(J.isPointLight){Fe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}K.map=new Ft(s.x,s.y,{format:ts,type:Zt,minFilter:jt,magFilter:jt,generateMipmaps:!1}),K.map.texture.name=J.name+".shadowMap",K.map.depthTexture=new Gi(s.x,s.y,kn),K.map.depthTexture.name=J.name+".shadowMapDepth",K.map.depthTexture.format=Zn,K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=Wt,K.map.depthTexture.magFilter=Wt}else J.isPointLight?(K.map=new xc(s.x),K.map.depthTexture=new nl(s.x,zn)):(K.map=new Ft(s.x,s.y),K.map.depthTexture=new Gi(s.x,s.y,zn)),K.map.depthTexture.name=J.name+".shadowMap",K.map.depthTexture.format=Zn,this.type===wr?(K.map.depthTexture.compareFunction=$?fc:dc,K.map.depthTexture.minFilter=jt,K.map.depthTexture.magFilter=jt):(K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=Wt,K.map.depthTexture.magFilter=Wt);K.camera.updateProjectionMatrix()}K.map.isWebGLCubeRenderTarget!==!0&&(K.map.width!==s.x||K.map.height!==s.y)&&K.map.setSize(s.x,s.y);let ee=K.map.isWebGLCubeRenderTarget?6:K.getViewportCount();J.isPointLight!==!0&&K.updateMatrices(J,_);for(let ne=0;ne<ee;ne++){let De=K.getCamera(ne);if(J.isPointLight){let Ie=K.camera,ht=K.matrix,tt=J.distance||Ie.far;tt!==Ie.far&&(Ie.far=tt,Ie.updateProjectionMatrix()),Vr.setFromMatrixPosition(J.matrixWorld),Ie.position.copy(Vr),uh.copy(Ie.position),uh.add(o2[ne]),Ie.up.copy(l2[ne]),Ie.lookAt(uh),Ie.updateMatrixWorld(),ht.makeTranslation(-Vr.x,-Vr.y,-Vr.z),ip.multiplyMatrices(Ie.projectionMatrix,Ie.matrixWorldInverse),K._frustum.setFromProjectionMatrix(ip,Ie.coordinateSystem,Ie.reversedDepth)}if(K.map.isWebGLCubeRenderTarget)n.setRenderTarget(K.map,ne),n.clear();else{ne===0&&(n.setRenderTarget(K.map),n.clear());let Ie=K.getViewport(ne);r.set(a.x*Ie.x,a.y*Ie.y,a.x*Ie.z,a.y*Ie.w),B.viewport(r)}i=K.getFrustum(ne),y(R,_,De,J,this.type)}K.isPointLightShadow!==!0&&this.type===pa&&S(K,_),K.needsUpdate=!1}f=this.type,x.needsUpdate=!1,n.setRenderTarget(A,C,F)};function S(w,R){let _=e.update(v);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null?w.mapPass=new Ft(s.x,s.y,{format:ts,type:Zt}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),h.uniforms.shadow_pass.value=w.map.depthTexture,h.uniforms.resolution.value.set(w.map.width,w.map.height),h.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(R,null,_,h,v,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value.set(w.map.width,w.map.height),p.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(R,null,_,p,v,null)}function T(w,R,_,A){let C=null,F=_.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(F!==void 0)C=F;else if(C=_.isPointLight===!0?l:o,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let B=C.uuid,H=R.uuid,L=c[B];L===void 0&&(L={},c[B]=L);let G=L[H];G===void 0&&(G=C.clone(),L[H]=G,R.addEventListener("dispose",E)),C=G}if(C.visible=R.visible,C.wireframe=R.wireframe,A===pa?C.side=R.shadowSide!==null?R.shadowSide:R.side:C.side=R.shadowSide!==null?R.shadowSide:d[R.side],C.alphaMap=R.alphaMap,C.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,C.map=R.map,C.clipShadows=R.clipShadows,C.clippingPlanes=R.clippingPlanes,C.clipIntersection=R.clipIntersection,C.displacementMap=R.displacementMap,C.displacementScale=R.displacementScale,C.displacementBias=R.displacementBias,C.wireframeLinewidth=R.wireframeLinewidth,C.linewidth=R.linewidth,_.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let B=n.properties.get(C);B.light=_}return C}function y(w,R,_,A,C){if(w.visible===!1)return;if(w.layers.test(R.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&C===pa)&&(!w.frustumCulled||w.intersectsFrustum(i))){w.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,w.matrixWorld);let H=e.update(w),L=w.material;if(Array.isArray(L)){let G=H.groups;for(let J=0,K=G.length;J<K;J++){let ae=G[J],$=L[ae.materialIndex];if($&&$.visible){let ee=T(w,$,A,C);w.onBeforeShadow(n,w,R,_,H,ee,ae),n.renderBufferDirect(_,null,H,ee,w,ae),w.onAfterShadow(n,w,R,_,H,ee,ae)}}}else if(L.visible){let G=T(w,L,A,C);w.onBeforeShadow(n,w,R,_,H,G,null),n.renderBufferDirect(_,null,H,G,w,null),w.onAfterShadow(n,w,R,_,H,G,null)}}let B=w.children;for(let H=0,L=B.length;H<L;H++)y(B[H],R,_,A,C)}function E(w){w.target.removeEventListener("dispose",E);for(let _ in c){let A=c[_],C=w.target.uuid;C in A&&(A[C].dispose(),delete A[C])}}}function u2(n,e){function t(){let D=!1,de=new wt,Q=null,fe=new wt(0,0,0,0);return{setMask:function(pe){Q!==pe&&!D&&(n.colorMask(pe,pe,pe,pe),Q=pe)},setLocked:function(pe){D=pe},setClear:function(pe,ie,we,Te,xt){xt===!0&&(pe*=Te,ie*=Te,we*=Te),de.set(pe,ie,we,Te),fe.equals(de)===!1&&(n.clearColor(pe,ie,we,Te),fe.copy(de))},reset:function(){D=!1,Q=null,fe.set(-1,0,0,0)}}}function i(){let D=!1,de=!1,Q=null,fe=null,pe=null;return{setReversed:function(ie){if(de!==ie){let we=e.get("EXT_clip_control");ie?we.clipControlEXT(we.LOWER_LEFT_EXT,we.ZERO_TO_ONE_EXT):we.clipControlEXT(we.LOWER_LEFT_EXT,we.NEGATIVE_ONE_TO_ONE_EXT),de=ie;let Te=pe;pe=null,this.setClear(Te)}},getReversed:function(){return de},setTest:function(ie){ie?te(n.DEPTH_TEST):be(n.DEPTH_TEST)},setMask:function(ie){Q!==ie&&!D&&(n.depthMask(ie),Q=ie)},setFunc:function(ie){if(de&&(ie=Rf[ie]),fe!==ie){switch(ie){case ko:n.depthFunc(n.NEVER);break;case Vo:n.depthFunc(n.ALWAYS);break;case Ho:n.depthFunc(n.LESS);break;case ta:n.depthFunc(n.LEQUAL);break;case Go:n.depthFunc(n.EQUAL);break;case Wo:n.depthFunc(n.GEQUAL);break;case Xo:n.depthFunc(n.GREATER);break;case Yo:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}fe=ie}},setLocked:function(ie){D=ie},setClear:function(ie){pe!==ie&&(pe=ie,de&&(ie=1-ie),n.clearDepth(ie))},reset:function(){D=!1,Q=null,fe=null,pe=null,de=!1}}}function s(){let D=!1,de=null,Q=null,fe=null,pe=null,ie=null,we=null,Te=null,xt=null;return{setTest:function(lt){D||(lt?te(n.STENCIL_TEST):be(n.STENCIL_TEST))},setMask:function(lt){de!==lt&&!D&&(n.stencilMask(lt),de=lt)},setFunc:function(lt,Nn,Yn){(Q!==lt||fe!==Nn||pe!==Yn)&&(n.stencilFunc(lt,Nn,Yn),Q=lt,fe=Nn,pe=Yn)},setOp:function(lt,Nn,Yn){(ie!==lt||we!==Nn||Te!==Yn)&&(n.stencilOp(lt,Nn,Yn),ie=lt,we=Nn,Te=Yn)},setLocked:function(lt){D=lt},setClear:function(lt){xt!==lt&&(n.clearStencil(lt),xt=lt)},reset:function(){D=!1,de=null,Q=null,fe=null,pe=null,ie=null,we=null,Te=null,xt=null}}}let a=new t,r=new i,o=new s,l=new WeakMap,c=new WeakMap,u={},d={},h={},p=new WeakMap,g=[],v=null,x=!1,f=null,S=null,T=null,y=null,E=null,w=null,R=null,_=new Ue(0,0,0),A=0,C=!1,F=null,B=null,H=null,L=null,G=null,J=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),K=!1,ae=0,$=n.getParameter(n.VERSION);$.indexOf("WebGL")!==-1?(ae=parseFloat(/^WebGL (\d)/.exec($)[1]),K=ae>=1):$.indexOf("OpenGL ES")!==-1&&(ae=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),K=ae>=2);let ee=null,ne={},De=n.getParameter(n.SCISSOR_BOX),Ie=n.getParameter(n.VIEWPORT),ht=new wt().fromArray(De),tt=new wt().fromArray(Ie);function it(D,de,Q,fe){let pe=new Uint8Array(4),ie=n.createTexture();n.bindTexture(D,ie),n.texParameteri(D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(D,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let we=0;we<Q;we++)D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY?n.texImage3D(de,0,n.RGBA,1,1,fe,0,n.RGBA,n.UNSIGNED_BYTE,pe):n.texImage2D(de+we,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,pe);return ie}let j={};j[n.TEXTURE_2D]=it(n.TEXTURE_2D,n.TEXTURE_2D,1),j[n.TEXTURE_CUBE_MAP]=it(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[n.TEXTURE_2D_ARRAY]=it(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),j[n.TEXTURE_3D]=it(n.TEXTURE_3D,n.TEXTURE_3D,1,1),a.setClear(0,0,0,1),r.setClear(1),o.setClear(0),te(n.DEPTH_TEST),r.setFunc(ta),Be(!1),gt(qu),te(n.CULL_FACE),st(An);function te(D){u[D]!==!0&&(n.enable(D),u[D]=!0)}function be(D){u[D]!==!1&&(n.disable(D),u[D]=!1)}function Ve(D,de){return h[D]!==de?(n.bindFramebuffer(D,de),h[D]=de,D===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=de),D===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=de),!0):!1}function ye(D,de){let Q=g,fe=!1;if(D){Q=p.get(de),Q===void 0&&(Q=[],p.set(de,Q));let pe=D.textures;if(Q.length!==pe.length||Q[0]!==n.COLOR_ATTACHMENT0){for(let ie=0,we=pe.length;ie<we;ie++)Q[ie]=n.COLOR_ATTACHMENT0+ie;Q.length=pe.length,fe=!0}}else Q[0]!==n.BACK&&(Q[0]=n.BACK,fe=!0);fe&&n.drawBuffers(Q)}function Ye(D){return v!==D?(n.useProgram(D),v=D,!0):!1}let Tt={[As]:n.FUNC_ADD,[jd]:n.FUNC_SUBTRACT,[Jd]:n.FUNC_REVERSE_SUBTRACT};Tt[Zd]=n.MIN,Tt[Kd]=n.MAX;let Je={[Qd]:n.ZERO,[ef]:n.ONE,[tf]:n.SRC_COLOR,[ku]:n.SRC_ALPHA,[lf]:n.SRC_ALPHA_SATURATE,[rf]:n.DST_COLOR,[sf]:n.DST_ALPHA,[nf]:n.ONE_MINUS_SRC_COLOR,[Vu]:n.ONE_MINUS_SRC_ALPHA,[of]:n.ONE_MINUS_DST_COLOR,[af]:n.ONE_MINUS_DST_ALPHA,[cf]:n.CONSTANT_COLOR,[uf]:n.ONE_MINUS_CONSTANT_COLOR,[hf]:n.CONSTANT_ALPHA,[df]:n.ONE_MINUS_CONSTANT_ALPHA};function st(D,de,Q,fe,pe,ie,we,Te,xt,lt){if(D===An){x===!0&&(be(n.BLEND),x=!1);return}if(x===!1&&(te(n.BLEND),x=!0),D!==$d){if(D!==f||lt!==C){if((S!==As||E!==As)&&(n.blendEquation(n.FUNC_ADD),S=As,E=As),lt)switch(D){case ma:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Zi:n.blendFunc(n.ONE,n.ONE);break;case Bu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case zu:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:ze("WebGLState: Invalid blending: ",D);break}else switch(D){case ma:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Zi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Bu:ze("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case zu:ze("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ze("WebGLState: Invalid blending: ",D);break}T=null,y=null,w=null,R=null,_.set(0,0,0),A=0,f=D,C=lt}return}pe=pe||de,ie=ie||Q,we=we||fe,(de!==S||pe!==E)&&(n.blendEquationSeparate(Tt[de],Tt[pe]),S=de,E=pe),(Q!==T||fe!==y||ie!==w||we!==R)&&(n.blendFuncSeparate(Je[Q],Je[fe],Je[ie],Je[we]),T=Q,y=fe,w=ie,R=we),(Te.equals(_)===!1||xt!==A)&&(n.blendColor(Te.r,Te.g,Te.b,xt),_.copy(Te),A=xt),f=D,C=!1}function dt(D,de){D.side===wn?be(n.CULL_FACE):te(n.CULL_FACE);let Q=D.side===cn;de&&(Q=!Q),Be(Q),D.blending===ma&&D.transparent===!1?st(An):st(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),r.setFunc(D.depthFunc),r.setTest(D.depthTest),r.setMask(D.depthWrite),a.setMask(D.colorWrite);let fe=D.stencilWrite;o.setTest(fe),fe&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),qt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?te(n.SAMPLE_ALPHA_TO_COVERAGE):be(n.SAMPLE_ALPHA_TO_COVERAGE)}function Be(D){F!==D&&(D?n.frontFace(n.CW):n.frontFace(n.CCW),F=D)}function gt(D){D!==Wd?(te(n.CULL_FACE),D!==B&&(D===qu?n.cullFace(n.BACK):D===Xd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):be(n.CULL_FACE),B=D}function It(D){D!==H&&(K&&n.lineWidth(D),H=D)}function qt(D,de,Q){D?(te(n.POLYGON_OFFSET_FILL),(L!==de||G!==Q)&&(L=de,G=Q,r.getReversed()&&(de=-de),n.polygonOffset(de,Q))):be(n.POLYGON_OFFSET_FILL)}function vt(D){D?te(n.SCISSOR_TEST):be(n.SCISSOR_TEST)}function Et(D){D===void 0&&(D=n.TEXTURE0+J-1),ee!==D&&(n.activeTexture(D),ee=D)}function O(D,de,Q){Q===void 0&&(ee===null?Q=n.TEXTURE0+J-1:Q=ee);let fe=ne[Q];fe===void 0&&(fe={type:void 0,texture:void 0},ne[Q]=fe),(fe.type!==D||fe.texture!==de)&&(ee!==Q&&(n.activeTexture(Q),ee=Q),n.bindTexture(D,de||j[D]),fe.type=D,fe.texture=de)}function X(){let D=ne[ee];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function U(){try{n.compressedTexImage2D(...arguments)}catch(D){ze("WebGLState:",D)}}function M(){try{n.compressedTexImage3D(...arguments)}catch(D){ze("WebGLState:",D)}}function m(){try{n.texSubImage2D(...arguments)}catch(D){ze("WebGLState:",D)}}function P(){try{n.texSubImage3D(...arguments)}catch(D){ze("WebGLState:",D)}}function q(){try{n.compressedTexSubImage2D(...arguments)}catch(D){ze("WebGLState:",D)}}function z(){try{n.compressedTexSubImage3D(...arguments)}catch(D){ze("WebGLState:",D)}}function se(){try{n.texStorage2D(...arguments)}catch(D){ze("WebGLState:",D)}}function oe(){try{n.texStorage3D(...arguments)}catch(D){ze("WebGLState:",D)}}function Y(){try{n.texImage2D(...arguments)}catch(D){ze("WebGLState:",D)}}function Z(){try{n.texImage3D(...arguments)}catch(D){ze("WebGLState:",D)}}function le(D){return d[D]!==void 0?d[D]:n.getParameter(D)}function Ee(D,de){d[D]!==de&&(n.pixelStorei(D,de),d[D]=de)}function ue(D){ht.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),ht.copy(D))}function he(D){tt.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),tt.copy(D))}function Ae(D,de){let Q=c.get(de);Q===void 0&&(Q=new WeakMap,c.set(de,Q));let fe=Q.get(D);fe===void 0&&(fe=n.getUniformBlockIndex(de,D.name),Q.set(D,fe))}function Pe(D,de){let fe=c.get(de).get(D);l.get(de)!==fe&&(n.uniformBlockBinding(de,fe,D.__bindingPointIndex),l.set(de,fe))}function Ge(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),r.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},d={},ee=null,ne={},h={},p=new WeakMap,g=[],v=null,x=!1,f=null,S=null,T=null,y=null,E=null,w=null,R=null,_=new Ue(0,0,0),A=0,C=!1,F=null,B=null,H=null,L=null,G=null,ht.set(0,0,n.canvas.width,n.canvas.height),tt.set(0,0,n.canvas.width,n.canvas.height),a.reset(),r.reset(),o.reset()}return{buffers:{color:a,depth:r,stencil:o},enable:te,disable:be,bindFramebuffer:Ve,drawBuffers:ye,useProgram:Ye,setBlending:st,setMaterial:dt,setFlipSided:Be,setCullFace:gt,setLineWidth:It,setPolygonOffset:qt,setScissorTest:vt,activeTexture:Et,bindTexture:O,unbindTexture:X,compressedTexImage2D:U,compressedTexImage3D:M,texImage2D:Y,texImage3D:Z,pixelStorei:Ee,getParameter:le,updateUBOMapping:Ae,uniformBlockBinding:Pe,texStorage2D:se,texStorage3D:oe,texSubImage2D:m,texSubImage3D:P,compressedTexSubImage2D:q,compressedTexSubImage3D:z,scissor:ue,viewport:he,reset:Ge}}function h2(n,e,t,i,s,a,r){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ce,u=new WeakMap,d=new Set,h,p=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(M,m){return g?new OffscreenCanvas(M,m):Ja("canvas")}function x(M,m,P){let q=1,z=U(M);if((z.width>P||z.height>P)&&(q=P/Math.max(z.width,z.height)),q<1)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap||typeof VideoFrame<"u"&&M instanceof VideoFrame){let se=Math.floor(q*z.width),oe=Math.floor(q*z.height);h===void 0&&(h=v(se,oe));let Y=m?v(se,oe):h;return Y.width=se,Y.height=oe,Y.getContext("2d").drawImage(M,0,0,se,oe),Fe("WebGLRenderer: Texture has been resized from ("+z.width+"x"+z.height+") to ("+se+"x"+oe+")."),Y}else return"data"in M&&Fe("WebGLRenderer: Image in DataTexture is too big ("+z.width+"x"+z.height+")."),M;return M}function f(M){return M.generateMipmaps}function S(M){n.generateMipmap(M)}function T(M){return M.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:M.isWebGL3DRenderTarget?n.TEXTURE_3D:M.isWebGLArrayRenderTarget||M.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(M,m,P,q,z,se=!1){if(M!==null){if(n[M]!==void 0)return n[M];Fe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let oe;q&&(oe=e.get("EXT_texture_norm16"),oe||Fe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Y=m;if(m===n.RED&&(P===n.FLOAT&&(Y=n.R32F),P===n.HALF_FLOAT&&(Y=n.R16F),P===n.UNSIGNED_BYTE&&(Y=n.R8),P===n.UNSIGNED_SHORT&&oe&&(Y=oe.R16_EXT),P===n.SHORT&&oe&&(Y=oe.R16_SNORM_EXT)),m===n.RED_INTEGER&&(P===n.UNSIGNED_BYTE&&(Y=n.R8UI),P===n.UNSIGNED_SHORT&&(Y=n.R16UI),P===n.UNSIGNED_INT&&(Y=n.R32UI),P===n.BYTE&&(Y=n.R8I),P===n.SHORT&&(Y=n.R16I),P===n.INT&&(Y=n.R32I)),m===n.RG&&(P===n.FLOAT&&(Y=n.RG32F),P===n.HALF_FLOAT&&(Y=n.RG16F),P===n.UNSIGNED_BYTE&&(Y=n.RG8),P===n.UNSIGNED_SHORT&&oe&&(Y=oe.RG16_EXT),P===n.SHORT&&oe&&(Y=oe.RG16_SNORM_EXT)),m===n.RG_INTEGER&&(P===n.UNSIGNED_BYTE&&(Y=n.RG8UI),P===n.UNSIGNED_SHORT&&(Y=n.RG16UI),P===n.UNSIGNED_INT&&(Y=n.RG32UI),P===n.BYTE&&(Y=n.RG8I),P===n.SHORT&&(Y=n.RG16I),P===n.INT&&(Y=n.RG32I)),m===n.RGB_INTEGER&&(P===n.UNSIGNED_BYTE&&(Y=n.RGB8UI),P===n.UNSIGNED_SHORT&&(Y=n.RGB16UI),P===n.UNSIGNED_INT&&(Y=n.RGB32UI),P===n.BYTE&&(Y=n.RGB8I),P===n.SHORT&&(Y=n.RGB16I),P===n.INT&&(Y=n.RGB32I)),m===n.RGBA_INTEGER&&(P===n.UNSIGNED_BYTE&&(Y=n.RGBA8UI),P===n.UNSIGNED_SHORT&&(Y=n.RGBA16UI),P===n.UNSIGNED_INT&&(Y=n.RGBA32UI),P===n.BYTE&&(Y=n.RGBA8I),P===n.SHORT&&(Y=n.RGBA16I),P===n.INT&&(Y=n.RGBA32I)),m===n.RGB&&(P===n.UNSIGNED_SHORT&&oe&&(Y=oe.RGB16_EXT),P===n.SHORT&&oe&&(Y=oe.RGB16_SNORM_EXT),P===n.UNSIGNED_INT_5_9_9_9_REV&&(Y=n.RGB9_E5),P===n.UNSIGNED_INT_10F_11F_11F_REV&&(Y=n.R11F_G11F_B10F)),m===n.RGBA){let Z=se?ja:Ze.getTransfer(z);P===n.FLOAT&&(Y=n.RGBA32F),P===n.HALF_FLOAT&&(Y=n.RGBA16F),P===n.UNSIGNED_BYTE&&(Y=Z===ot?n.SRGB8_ALPHA8:n.RGBA8),P===n.UNSIGNED_SHORT&&oe&&(Y=oe.RGBA16_EXT),P===n.SHORT&&oe&&(Y=oe.RGBA16_SNORM_EXT),P===n.UNSIGNED_SHORT_4_4_4_4&&(Y=n.RGBA4),P===n.UNSIGNED_SHORT_5_5_5_1&&(Y=n.RGB5_A1)}return(Y===n.R16F||Y===n.R32F||Y===n.RG16F||Y===n.RG32F||Y===n.RGBA16F||Y===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function E(M,m){let P;return M?m===null||m===zn||m===xa?P=n.DEPTH24_STENCIL8:m===kn?P=n.DEPTH32F_STENCIL8:m===ga&&(P=n.DEPTH24_STENCIL8,Fe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):m===null||m===zn||m===xa?P=n.DEPTH_COMPONENT24:m===kn?P=n.DEPTH_COMPONENT32F:m===ga&&(P=n.DEPTH_COMPONENT16),P}function w(M,m){return f(M)===!0||M.isFramebufferTexture&&M.minFilter!==Wt&&M.minFilter!==jt?Math.log2(Math.max(m.width,m.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?m.mipmaps.length:1}function R(M){let m=M.target;m.removeEventListener("dispose",R),A(m),m.isVideoTexture&&u.delete(m),m.isHTMLTexture&&d.delete(m)}function _(M){let m=M.target;m.removeEventListener("dispose",_),F(m)}function A(M){let m=i.get(M);if(m.__webglInit===void 0)return;let P=M.source,q=p.get(P);if(q){let z=q[m.__cacheKey];z.usedTimes--,z.usedTimes===0&&C(M),Object.keys(q).length===0&&p.delete(P)}i.remove(M)}function C(M){let m=i.get(M);n.deleteTexture(m.__webglTexture);let P=M.source,q=p.get(P);delete q[m.__cacheKey],r.memory.textures--}function F(M){let m=i.get(M);if(M.depthTexture&&(M.depthTexture.dispose(),i.remove(M.depthTexture)),M.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(m.__webglFramebuffer[q]))for(let z=0;z<m.__webglFramebuffer[q].length;z++)n.deleteFramebuffer(m.__webglFramebuffer[q][z]);else n.deleteFramebuffer(m.__webglFramebuffer[q]);m.__webglDepthbuffer&&n.deleteRenderbuffer(m.__webglDepthbuffer[q])}else{if(Array.isArray(m.__webglFramebuffer))for(let q=0;q<m.__webglFramebuffer.length;q++)n.deleteFramebuffer(m.__webglFramebuffer[q]);else n.deleteFramebuffer(m.__webglFramebuffer);if(m.__webglDepthbuffer&&n.deleteRenderbuffer(m.__webglDepthbuffer),m.__webglMultisampledFramebuffer&&n.deleteFramebuffer(m.__webglMultisampledFramebuffer),m.__webglColorRenderbuffer)for(let q=0;q<m.__webglColorRenderbuffer.length;q++)m.__webglColorRenderbuffer[q]&&n.deleteRenderbuffer(m.__webglColorRenderbuffer[q]);m.__webglDepthRenderbuffer&&n.deleteRenderbuffer(m.__webglDepthRenderbuffer)}let P=M.textures;for(let q=0,z=P.length;q<z;q++){let se=i.get(P[q]);se.__webglTexture&&(n.deleteTexture(se.__webglTexture),r.memory.textures--),i.remove(P[q])}i.remove(M)}let B=0;function H(){B=0}function L(){return B}function G(M){B=M}function J(){let M=B;return M>=s.maxTextures&&Fe("WebGLTextures: Trying to use "+(M+1)+" texture units while this GPU supports only "+s.maxTextures),B+=1,M}function K(M){let m=[];return m.push(M.wrapS),m.push(M.wrapT),m.push(M.wrapR||0),m.push(M.magFilter),m.push(M.minFilter),m.push(M.anisotropy),m.push(M.internalFormat),m.push(M.format),m.push(M.type),m.push(M.generateMipmaps),m.push(M.premultiplyAlpha),m.push(M.flipY),m.push(M.unpackAlignment),m.push(M.colorSpace),m.join()}function ae(M,m){let P=i.get(M);if(M.isVideoTexture&&O(M),M.isRenderTargetTexture===!1&&M.isExternalTexture!==!0&&M.version>0&&P.__version!==M.version){let q=M.image;if(q===null)Fe("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)Fe("WebGLRenderer: Texture marked for update but image is incomplete");else{be(P,M,m);return}}else M.isExternalTexture&&(P.__webglTexture=M.sourceTexture?M.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,P.__webglTexture,n.TEXTURE0+m)}function $(M,m){let P=i.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&P.__version!==M.version){be(P,M,m);return}else M.isExternalTexture&&(P.__webglTexture=M.sourceTexture?M.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,P.__webglTexture,n.TEXTURE0+m)}function ee(M,m){let P=i.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&P.__version!==M.version){be(P,M,m);return}t.bindTexture(n.TEXTURE_3D,P.__webglTexture,n.TEXTURE0+m)}function ne(M,m){let P=i.get(M);if(M.isCubeDepthTexture!==!0&&M.version>0&&P.__version!==M.version){Ve(P,M,m);return}t.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+m)}let De={[$o]:n.REPEAT,[Jn]:n.CLAMP_TO_EDGE,[jo]:n.MIRRORED_REPEAT},Ie={[Wt]:n.NEAREST,[mf]:n.NEAREST_MIPMAP_NEAREST,[Dr]:n.NEAREST_MIPMAP_LINEAR,[jt]:n.LINEAR,[Cl]:n.LINEAR_MIPMAP_NEAREST,[Qi]:n.LINEAR_MIPMAP_LINEAR},ht={[vf]:n.NEVER,[Tf]:n.ALWAYS,[yf]:n.LESS,[dc]:n.LEQUAL,[bf]:n.EQUAL,[fc]:n.GEQUAL,[Mf]:n.GREATER,[Sf]:n.NOTEQUAL};function tt(M,m){if(m.type===kn&&e.has("OES_texture_float_linear")===!1&&(m.magFilter===jt||m.magFilter===Cl||m.magFilter===Dr||m.magFilter===Qi||m.minFilter===jt||m.minFilter===Cl||m.minFilter===Dr||m.minFilter===Qi)&&Fe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(M,n.TEXTURE_WRAP_S,De[m.wrapS]),n.texParameteri(M,n.TEXTURE_WRAP_T,De[m.wrapT]),(M===n.TEXTURE_3D||M===n.TEXTURE_2D_ARRAY)&&n.texParameteri(M,n.TEXTURE_WRAP_R,De[m.wrapR]),n.texParameteri(M,n.TEXTURE_MAG_FILTER,Ie[m.magFilter]),n.texParameteri(M,n.TEXTURE_MIN_FILTER,Ie[m.minFilter]),m.compareFunction&&(n.texParameteri(M,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(M,n.TEXTURE_COMPARE_FUNC,ht[m.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(m.magFilter===Wt||m.minFilter!==Dr&&m.minFilter!==Qi||m.type===kn&&e.has("OES_texture_float_linear")===!1)return;if(m.anisotropy>1||i.get(m).__currentAnisotropy){let P=e.get("EXT_texture_filter_anisotropic");n.texParameterf(M,P.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(m.anisotropy,s.getMaxAnisotropy())),i.get(m).__currentAnisotropy=m.anisotropy}}}function it(M,m){let P=!1;M.__webglInit===void 0&&(M.__webglInit=!0,m.addEventListener("dispose",R));let q=m.source,z=p.get(q);z===void 0&&(z={},p.set(q,z));let se=K(m);if(se!==M.__cacheKey){z[se]===void 0&&(z[se]={texture:n.createTexture(),usedTimes:0},r.memory.textures++,P=!0),z[se].usedTimes++;let oe=z[M.__cacheKey];oe!==void 0&&(z[M.__cacheKey].usedTimes--,oe.usedTimes===0&&C(m)),M.__cacheKey=se,M.__webglTexture=z[se].texture}return P}function j(M,m,P){return Math.floor(Math.floor(M/P)/m)}function te(M,m,P,q){let se=M.updateRanges;if(se.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,m.width,m.height,P,q,m.data);else{se.sort((Ee,ue)=>Ee.start-ue.start);let oe=0;for(let Ee=1;Ee<se.length;Ee++){let ue=se[oe],he=se[Ee],Ae=ue.start+ue.count,Pe=j(he.start,m.width,4),Ge=j(ue.start,m.width,4);he.start<=Ae+1&&Pe===Ge&&j(he.start+he.count-1,m.width,4)===Pe?ue.count=Math.max(ue.count,he.start+he.count-ue.start):(++oe,se[oe]=he)}se.length=oe+1;let Y=t.getParameter(n.UNPACK_ROW_LENGTH),Z=t.getParameter(n.UNPACK_SKIP_PIXELS),le=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,m.width);for(let Ee=0,ue=se.length;Ee<ue;Ee++){let he=se[Ee],Ae=Math.floor(he.start/4),Pe=Math.ceil(he.count/4),Ge=Ae%m.width,D=Math.floor(Ae/m.width),de=Pe,Q=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,Ge),t.pixelStorei(n.UNPACK_SKIP_ROWS,D),t.texSubImage2D(n.TEXTURE_2D,0,Ge,D,de,Q,P,q,m.data)}M.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,Y),t.pixelStorei(n.UNPACK_SKIP_PIXELS,Z),t.pixelStorei(n.UNPACK_SKIP_ROWS,le)}}function be(M,m,P){let q=n.TEXTURE_2D;(m.isDataArrayTexture||m.isCompressedArrayTexture)&&(q=n.TEXTURE_2D_ARRAY),m.isData3DTexture&&(q=n.TEXTURE_3D);let z=it(M,m),se=m.source;t.bindTexture(q,M.__webglTexture,n.TEXTURE0+P);let oe=i.get(se);if(se.version!==oe.__version||z===!0){if(t.activeTexture(n.TEXTURE0+P),(typeof ImageBitmap<"u"&&m.image instanceof ImageBitmap)===!1){let Q=Ze.getPrimaries(Ze.workingColorSpace),fe=m.colorSpace===bi?null:Ze.getPrimaries(m.colorSpace),pe=m.colorSpace===bi||Q===fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,m.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe)}t.pixelStorei(n.UNPACK_ALIGNMENT,m.unpackAlignment);let Z=x(m.image,!1,s.maxTextureSize);Z=X(m,Z);let le=a.convert(m.format,m.colorSpace),Ee=a.convert(m.type),ue=y(m.internalFormat,le,Ee,m.normalized,m.colorSpace,m.isVideoTexture);tt(q,m);let he,Ae=m.mipmaps,Pe=m.isVideoTexture!==!0,Ge=oe.__version===void 0||z===!0,D=se.dataReady,de=w(m,Z);if(m.isDepthTexture)ue=E(m.format===es,m.type),Ge&&(Pe?t.texStorage2D(n.TEXTURE_2D,1,ue,Z.width,Z.height):t.texImage2D(n.TEXTURE_2D,0,ue,Z.width,Z.height,0,le,Ee,null));else if(m.isDataTexture)if(Ae.length>0){Pe&&Ge&&t.texStorage2D(n.TEXTURE_2D,de,ue,Ae[0].width,Ae[0].height);for(let Q=0,fe=Ae.length;Q<fe;Q++)he=Ae[Q],Pe?D&&t.texSubImage2D(n.TEXTURE_2D,Q,0,0,he.width,he.height,le,Ee,he.data):t.texImage2D(n.TEXTURE_2D,Q,ue,he.width,he.height,0,le,Ee,he.data);m.generateMipmaps=!1}else Pe?(Ge&&t.texStorage2D(n.TEXTURE_2D,de,ue,Z.width,Z.height),D&&te(m,Z,le,Ee)):t.texImage2D(n.TEXTURE_2D,0,ue,Z.width,Z.height,0,le,Ee,Z.data);else if(m.isCompressedTexture)if(m.isCompressedArrayTexture){Pe&&Ge&&t.texStorage3D(n.TEXTURE_2D_ARRAY,de,ue,Ae[0].width,Ae[0].height,Z.depth);for(let Q=0,fe=Ae.length;Q<fe;Q++)if(he=Ae[Q],m.format!==Cn)if(le!==null)if(Pe){if(D)if(m.layerUpdates.size>0){let pe=sh(he.width,he.height,m.format,m.type);for(let ie of m.layerUpdates){let we=he.data.subarray(ie*pe/he.data.BYTES_PER_ELEMENT,(ie+1)*pe/he.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,ie,he.width,he.height,1,le,we)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,he.width,he.height,Z.depth,le,he.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Q,ue,he.width,he.height,Z.depth,0,he.data,0,0);else Fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Pe?D&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,he.width,he.height,Z.depth,le,Ee,he.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Q,ue,he.width,he.height,Z.depth,0,le,Ee,he.data);m.layerUpdates.size>0&&m.clearLayerUpdates()}else{Pe&&Ge&&t.texStorage2D(n.TEXTURE_2D,de,ue,Ae[0].width,Ae[0].height);for(let Q=0,fe=Ae.length;Q<fe;Q++)he=Ae[Q],m.format!==Cn?le!==null?Pe?D&&t.compressedTexSubImage2D(n.TEXTURE_2D,Q,0,0,he.width,he.height,le,he.data):t.compressedTexImage2D(n.TEXTURE_2D,Q,ue,he.width,he.height,0,he.data):Fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?D&&t.texSubImage2D(n.TEXTURE_2D,Q,0,0,he.width,he.height,le,Ee,he.data):t.texImage2D(n.TEXTURE_2D,Q,ue,he.width,he.height,0,le,Ee,he.data)}else if(m.isDataArrayTexture)if(Pe){if(Ge&&t.texStorage3D(n.TEXTURE_2D_ARRAY,de,ue,Z.width,Z.height,Z.depth),D)if(m.layerUpdates.size>0){let Q=sh(Z.width,Z.height,m.format,m.type);for(let fe of m.layerUpdates){let pe=Z.data.subarray(fe*Q/Z.data.BYTES_PER_ELEMENT,(fe+1)*Q/Z.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,fe,Z.width,Z.height,1,le,Ee,pe)}m.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,le,Ee,Z.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ue,Z.width,Z.height,Z.depth,0,le,Ee,Z.data);else if(m.isData3DTexture)Pe?(Ge&&t.texStorage3D(n.TEXTURE_3D,de,ue,Z.width,Z.height,Z.depth),D&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,le,Ee,Z.data)):t.texImage3D(n.TEXTURE_3D,0,ue,Z.width,Z.height,Z.depth,0,le,Ee,Z.data);else if(m.isFramebufferTexture){if(Ge)if(Pe)t.texStorage2D(n.TEXTURE_2D,de,ue,Z.width,Z.height);else{let Q=Z.width,fe=Z.height;for(let pe=0;pe<de;pe++)t.texImage2D(n.TEXTURE_2D,pe,ue,Q,fe,0,le,Ee,null),Q>>=1,fe>>=1}}else if(m.isHTMLTexture){if("texElementImage2D"in n){let Q=n.canvas;if(Q.hasAttribute("layoutsubtree")||Q.setAttribute("layoutsubtree","true"),Z.parentNode!==Q){Q.appendChild(Z),d.add(m),Q.onpaint=fe=>{let pe=fe.changedElements;for(let ie of d)pe.includes(ie.image)&&(ie.needsUpdate=!0)},Q.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,Z);else{let pe=n.RGBA,ie=n.RGBA,we=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,pe,ie,we,Z)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Ae.length>0){if(Pe&&Ge){let Q=U(Ae[0]);t.texStorage2D(n.TEXTURE_2D,de,ue,Q.width,Q.height)}for(let Q=0,fe=Ae.length;Q<fe;Q++)he=Ae[Q],Pe?D&&t.texSubImage2D(n.TEXTURE_2D,Q,0,0,le,Ee,he):t.texImage2D(n.TEXTURE_2D,Q,ue,le,Ee,he);m.generateMipmaps=!1}else if(Pe){if(Ge){let Q=U(Z);t.texStorage2D(n.TEXTURE_2D,de,ue,Q.width,Q.height)}D&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,le,Ee,Z)}else t.texImage2D(n.TEXTURE_2D,0,ue,le,Ee,Z);f(m)&&S(q),oe.__version=se.version,m.onUpdate&&m.onUpdate(m)}M.__version=m.version}function Ve(M,m,P){if(m.image.length!==6)return;let q=it(M,m),z=m.source;t.bindTexture(n.TEXTURE_CUBE_MAP,M.__webglTexture,n.TEXTURE0+P);let se=i.get(z);if(z.version!==se.__version||q===!0){t.activeTexture(n.TEXTURE0+P);let oe=Ze.getPrimaries(Ze.workingColorSpace),Y=m.colorSpace===bi?null:Ze.getPrimaries(m.colorSpace),Z=m.colorSpace===bi||oe===Y?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,m.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,m.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Z);let le=m.isCompressedTexture||m.image[0].isCompressedTexture,Ee=m.image[0]&&m.image[0].isDataTexture,ue=[];for(let ie=0;ie<6;ie++)!le&&!Ee?ue[ie]=x(m.image[ie],!0,s.maxCubemapSize):ue[ie]=Ee?m.image[ie].image:m.image[ie],ue[ie]=X(m,ue[ie]);let he=ue[0],Ae=a.convert(m.format,m.colorSpace),Pe=a.convert(m.type),Ge=y(m.internalFormat,Ae,Pe,m.normalized,m.colorSpace),D=m.isVideoTexture!==!0,de=se.__version===void 0||q===!0,Q=z.dataReady,fe=w(m,he);tt(n.TEXTURE_CUBE_MAP,m);let pe;if(le){D&&de&&t.texStorage2D(n.TEXTURE_CUBE_MAP,fe,Ge,he.width,he.height);for(let ie=0;ie<6;ie++){pe=ue[ie].mipmaps;for(let we=0;we<pe.length;we++){let Te=pe[we];m.format!==Cn?Ae!==null?D?Q&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,we,0,0,Te.width,Te.height,Ae,Te.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,we,Ge,Te.width,Te.height,0,Te.data):Fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?Q&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,we,0,0,Te.width,Te.height,Ae,Pe,Te.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,we,Ge,Te.width,Te.height,0,Ae,Pe,Te.data)}}}else{if(pe=m.mipmaps,D&&de){pe.length>0&&fe++;let ie=U(ue[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,fe,Ge,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(Ee){D?Q&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,ue[ie].width,ue[ie].height,Ae,Pe,ue[ie].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Ge,ue[ie].width,ue[ie].height,0,Ae,Pe,ue[ie].data);for(let we=0;we<pe.length;we++){let xt=pe[we].image[ie].image;D?Q&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,we+1,0,0,xt.width,xt.height,Ae,Pe,xt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,we+1,Ge,xt.width,xt.height,0,Ae,Pe,xt.data)}}else{D?Q&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Ae,Pe,ue[ie]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Ge,Ae,Pe,ue[ie]);for(let we=0;we<pe.length;we++){let Te=pe[we];D?Q&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,we+1,0,0,Ae,Pe,Te.image[ie]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,we+1,Ge,Ae,Pe,Te.image[ie])}}}f(m)&&S(n.TEXTURE_CUBE_MAP),se.__version=z.version,m.onUpdate&&m.onUpdate(m)}M.__version=m.version}function ye(M,m,P,q,z,se){let oe=a.convert(P.format,P.colorSpace),Y=a.convert(P.type),Z=y(P.internalFormat,oe,Y,P.normalized,P.colorSpace),le=i.get(m),Ee=i.get(P);if(Ee.__renderTarget=m,!le.__hasExternalTextures){let ue=Math.max(1,m.width>>se),he=Math.max(1,m.height>>se);z===n.TEXTURE_3D||z===n.TEXTURE_2D_ARRAY?t.texImage3D(z,se,Z,ue,he,m.depth,0,oe,Y,null):t.texImage2D(z,se,Z,ue,he,0,oe,Y,null)}t.bindFramebuffer(n.FRAMEBUFFER,M),Et(m)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,q,z,Ee.__webglTexture,0,vt(m)):(z===n.TEXTURE_2D||z>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&z<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,q,z,Ee.__webglTexture,se),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ye(M,m,P){if(n.bindRenderbuffer(n.RENDERBUFFER,M),m.depthBuffer){let q=m.depthTexture,z=q&&q.isDepthTexture?q.type:null,se=E(m.stencilBuffer,z),oe=m.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Et(m)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,vt(m),se,m.width,m.height):P?n.renderbufferStorageMultisample(n.RENDERBUFFER,vt(m),se,m.width,m.height):n.renderbufferStorage(n.RENDERBUFFER,se,m.width,m.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,oe,n.RENDERBUFFER,M)}else{let q=m.textures;for(let z=0;z<q.length;z++){let se=q[z],oe=a.convert(se.format,se.colorSpace),Y=a.convert(se.type),Z=y(se.internalFormat,oe,Y,se.normalized,se.colorSpace);Et(m)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,vt(m),Z,m.width,m.height):P?n.renderbufferStorageMultisample(n.RENDERBUFFER,vt(m),Z,m.width,m.height):n.renderbufferStorage(n.RENDERBUFFER,Z,m.width,m.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Tt(M,m,P){let q=m.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,M),!(m.depthTexture&&m.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let z=i.get(m.depthTexture);if(z.__renderTarget=m,(!z.__webglTexture||m.depthTexture.image.width!==m.width||m.depthTexture.image.height!==m.height)&&(m.depthTexture.image.width=m.width,m.depthTexture.image.height=m.height,m.depthTexture.needsUpdate=!0),q){if(z.__webglInit===void 0&&(z.__webglInit=!0,m.depthTexture.addEventListener("dispose",R)),z.__webglTexture===void 0){z.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture),tt(n.TEXTURE_CUBE_MAP,m.depthTexture);let le=a.convert(m.depthTexture.format),Ee=a.convert(m.depthTexture.type),ue;m.depthTexture.format===Zn?ue=n.DEPTH_COMPONENT24:m.depthTexture.format===es&&(ue=n.DEPTH24_STENCIL8);for(let he=0;he<6;he++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,ue,m.width,m.height,0,le,Ee,null)}}else ae(m.depthTexture,0);let se=z.__webglTexture,oe=vt(m),Y=q?n.TEXTURE_CUBE_MAP_POSITIVE_X+P:n.TEXTURE_2D,Z=m.depthTexture.format===es?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(m.depthTexture.format===Zn)Et(m)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Z,Y,se,0,oe):n.framebufferTexture2D(n.FRAMEBUFFER,Z,Y,se,0);else if(m.depthTexture.format===es)Et(m)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Z,Y,se,0,oe):n.framebufferTexture2D(n.FRAMEBUFFER,Z,Y,se,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Je(M){let m=i.get(M),P=M.isWebGLCubeRenderTarget===!0;if(m.__boundDepthTexture!==M.depthTexture){let q=M.depthTexture;if(m.__depthDisposeCallback&&m.__depthDisposeCallback(),q){let z=()=>{delete m.__boundDepthTexture,delete m.__depthDisposeCallback,q.removeEventListener("dispose",z)};q.addEventListener("dispose",z),m.__depthDisposeCallback=z}m.__boundDepthTexture=q}if(M.depthTexture&&!m.__autoAllocateDepthBuffer)if(P)for(let q=0;q<6;q++)Tt(m.__webglFramebuffer[q],M,q);else{let q=M.texture.mipmaps;q&&q.length>0?Tt(m.__webglFramebuffer[0],M,0):Tt(m.__webglFramebuffer,M,0)}else if(P){m.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(n.FRAMEBUFFER,m.__webglFramebuffer[q]),m.__webglDepthbuffer[q]===void 0)m.__webglDepthbuffer[q]=n.createRenderbuffer(),Ye(m.__webglDepthbuffer[q],M,!1);else{let z=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,se=m.__webglDepthbuffer[q];n.bindRenderbuffer(n.RENDERBUFFER,se),n.framebufferRenderbuffer(n.FRAMEBUFFER,z,n.RENDERBUFFER,se)}}else{let q=M.texture.mipmaps;if(q&&q.length>0?t.bindFramebuffer(n.FRAMEBUFFER,m.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,m.__webglFramebuffer),m.__webglDepthbuffer===void 0)m.__webglDepthbuffer=n.createRenderbuffer(),Ye(m.__webglDepthbuffer,M,!1);else{let z=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,se=m.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,se),n.framebufferRenderbuffer(n.FRAMEBUFFER,z,n.RENDERBUFFER,se)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function st(M,m,P){let q=i.get(M);m!==void 0&&ye(q.__webglFramebuffer,M,M.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),P!==void 0&&Je(M)}function dt(M){let m=M.texture,P=i.get(M),q=i.get(m);M.addEventListener("dispose",_);let z=M.textures,se=M.isWebGLCubeRenderTarget===!0,oe=z.length>1;if(oe||(q.__webglTexture===void 0&&(q.__webglTexture=n.createTexture()),q.__version=m.version,r.memory.textures++),se){P.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(m.mipmaps&&m.mipmaps.length>0){P.__webglFramebuffer[Y]=[];for(let Z=0;Z<m.mipmaps.length;Z++)P.__webglFramebuffer[Y][Z]=n.createFramebuffer()}else P.__webglFramebuffer[Y]=n.createFramebuffer()}else{if(m.mipmaps&&m.mipmaps.length>0){P.__webglFramebuffer=[];for(let Y=0;Y<m.mipmaps.length;Y++)P.__webglFramebuffer[Y]=n.createFramebuffer()}else P.__webglFramebuffer=n.createFramebuffer();if(oe)for(let Y=0,Z=z.length;Y<Z;Y++){let le=i.get(z[Y]);le.__webglTexture===void 0&&(le.__webglTexture=n.createTexture(),r.memory.textures++)}if(M.samples>0&&Et(M)===!1){P.__webglMultisampledFramebuffer=n.createFramebuffer(),P.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,P.__webglMultisampledFramebuffer);for(let Y=0;Y<z.length;Y++){let Z=z[Y];P.__webglColorRenderbuffer[Y]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,P.__webglColorRenderbuffer[Y]);let le=a.convert(Z.format,Z.colorSpace),Ee=a.convert(Z.type),ue=y(Z.internalFormat,le,Ee,Z.normalized,Z.colorSpace,M.isXRRenderTarget===!0),he=vt(M);n.renderbufferStorageMultisample(n.RENDERBUFFER,he,ue,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Y,n.RENDERBUFFER,P.__webglColorRenderbuffer[Y])}n.bindRenderbuffer(n.RENDERBUFFER,null),M.depthBuffer&&(P.__webglDepthRenderbuffer=n.createRenderbuffer(),Ye(P.__webglDepthRenderbuffer,M,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(se){t.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture),tt(n.TEXTURE_CUBE_MAP,m);for(let Y=0;Y<6;Y++)if(m.mipmaps&&m.mipmaps.length>0)for(let Z=0;Z<m.mipmaps.length;Z++)ye(P.__webglFramebuffer[Y][Z],M,m,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Z);else ye(P.__webglFramebuffer[Y],M,m,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);f(m)&&S(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(oe){for(let Y=0,Z=z.length;Y<Z;Y++){let le=z[Y],Ee=i.get(le),ue=n.TEXTURE_2D;(M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(ue=M.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ue,Ee.__webglTexture),tt(ue,le),ye(P.__webglFramebuffer,M,le,n.COLOR_ATTACHMENT0+Y,ue,0),f(le)&&S(ue)}t.unbindTexture()}else{let Y=n.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(Y=M.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Y,q.__webglTexture),tt(Y,m),m.mipmaps&&m.mipmaps.length>0)for(let Z=0;Z<m.mipmaps.length;Z++)ye(P.__webglFramebuffer[Z],M,m,n.COLOR_ATTACHMENT0,Y,Z);else ye(P.__webglFramebuffer,M,m,n.COLOR_ATTACHMENT0,Y,0);f(m)&&S(Y),t.unbindTexture()}M.depthBuffer&&Je(M)}function Be(M){let m=M.textures;for(let P=0,q=m.length;P<q;P++){let z=m[P];if(f(z)){let se=T(M),oe=i.get(z).__webglTexture;t.bindTexture(se,oe),S(se),t.unbindTexture()}}}let gt=[],It=[];function qt(M){if(M.samples>0){if(Et(M)===!1){let m=M.textures,P=M.width,q=M.height,z=n.COLOR_BUFFER_BIT,se=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,oe=i.get(M),Y=m.length>1;if(Y)for(let le=0;le<m.length;le++)t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,oe.__webglMultisampledFramebuffer);let Z=M.texture.mipmaps;Z&&Z.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,oe.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,oe.__webglFramebuffer);for(let le=0;le<m.length;le++){if(M.resolveDepthBuffer&&(M.depthBuffer&&(z|=n.DEPTH_BUFFER_BIT),M.stencilBuffer&&M.resolveStencilBuffer&&(z|=n.STENCIL_BUFFER_BIT)),Y){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,oe.__webglColorRenderbuffer[le]);let Ee=i.get(m[le]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ee,0)}n.blitFramebuffer(0,0,P,q,0,0,P,q,z,n.NEAREST),l===!0&&(gt.length=0,It.length=0,gt.push(n.COLOR_ATTACHMENT0+le),M.depthBuffer&&M.storeMultisampledDepthBuffer===!1&&(gt.push(se),It.push(se),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,It)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,gt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Y)for(let le=0;le<m.length;le++){t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.RENDERBUFFER,oe.__webglColorRenderbuffer[le]);let Ee=i.get(m[le]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.TEXTURE_2D,Ee,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,oe.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.storeMultisampledDepthBuffer===!1&&l){let m=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[m])}}}function vt(M){return Math.min(s.maxSamples,M.samples)}function Et(M){let m=i.get(M);return M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&m.__useRenderToTexture!==!1}function O(M){let m=r.render.frame;u.get(M)!==m&&(u.set(M,m),M.update())}function X(M,m){let P=M.colorSpace,q=M.format,z=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||P!==$a&&P!==bi&&(Ze.getTransfer(P)===ot?(q!==Cn||z!==dn)&&Fe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ze("WebGLTextures: Unsupported texture color space:",P)),m}function U(M){return typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement?(c.width=M.naturalWidth||M.width,c.height=M.naturalHeight||M.height):typeof VideoFrame<"u"&&M instanceof VideoFrame?(c.width=M.displayWidth,c.height=M.displayHeight):(c.width=M.width,c.height=M.height),c}this.allocateTextureUnit=J,this.resetTextureUnits=H,this.getTextureUnits=L,this.setTextureUnits=G,this.setTexture2D=ae,this.setTexture2DArray=$,this.setTexture3D=ee,this.setTextureCube=ne,this.rebindTextures=st,this.setupRenderTarget=dt,this.updateRenderTargetMipmap=Be,this.updateMultisampleRenderTarget=qt,this.setupDepthRenderbuffer=Je,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=Et,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function d2(n,e){function t(i,s=bi){let a,r=Ze.getTransfer(s);if(i===dn)return n.UNSIGNED_BYTE;if(i===Pl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Il)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Yu)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===$u)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Wu)return n.BYTE;if(i===Xu)return n.SHORT;if(i===ga)return n.UNSIGNED_SHORT;if(i===Rl)return n.INT;if(i===zn)return n.UNSIGNED_INT;if(i===kn)return n.FLOAT;if(i===Zt)return n.HALF_FLOAT;if(i===ju)return n.ALPHA;if(i===Ju)return n.RGB;if(i===Cn)return n.RGBA;if(i===Zn)return n.DEPTH_COMPONENT;if(i===es)return n.DEPTH_STENCIL;if(i===Zu)return n.RED;if(i===Ll)return n.RED_INTEGER;if(i===ts)return n.RG;if(i===Nl)return n.RG_INTEGER;if(i===Dl)return n.RGBA_INTEGER;if(i===Ur||i===Fr||i===Or||i===qr)if(r===ot)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===Ur)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Fr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Or)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===qr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===Ur)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Fr)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Or)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===qr)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ul||i===Fl||i===Ol||i===ql)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===Ul)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Fl)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ol)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ql)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Bl||i===zl||i===kl||i===Vl||i===Hl||i===Br||i===Gl)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(i===Bl||i===zl)return r===ot?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===kl)return r===ot?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(i===Vl)return a.COMPRESSED_R11_EAC;if(i===Hl)return a.COMPRESSED_SIGNED_R11_EAC;if(i===Br)return a.COMPRESSED_RG11_EAC;if(i===Gl)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Wl||i===Xl||i===Yl||i===$l||i===jl||i===Jl||i===Zl||i===Kl||i===Ql||i===ec||i===tc||i===nc||i===ic||i===sc)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(i===Wl)return r===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Xl)return r===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Yl)return r===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===$l)return r===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===jl)return r===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Jl)return r===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Zl)return r===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Kl)return r===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ql)return r===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ec)return r===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===tc)return r===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===nc)return r===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ic)return r===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===sc)return r===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ac||i===rc||i===oc)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(i===ac)return r===ot?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===rc)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===oc)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===lc||i===cc||i===zr||i===uc)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(i===lc)return a.COMPRESSED_RED_RGTC1_EXT;if(i===cc)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===zr)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===uc)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===xa?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var f2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,p2=`
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

}`,_h=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new rr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Nt({vertexShader:f2,fragmentShader:p2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Oe(new ei(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},vh=class extends Kn{constructor(e,t){super();let i=this,s=null,a=1,r=null,o="local-floor",l=1,c=null,u=null,d=null,h=null,p=null,g=null,v=typeof XRWebGLBinding<"u",x=new _h,f={},S=t.getContextAttributes(),T=null,y=null,E=[],w=[],R=new ce,_=null,A=null,C=new $t;C.viewport=new wt;let F=new $t;F.viewport=new wt;let B=[C,F],H=new Tl,L=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let te=E[j];return te===void 0&&(te=new aa,E[j]=te),te.getTargetRaySpace()},this.getControllerGrip=function(j){let te=E[j];return te===void 0&&(te=new aa,E[j]=te),te.getGripSpace()},this.getHand=function(j){let te=E[j];return te===void 0&&(te=new aa,E[j]=te),te.getHandSpace()};function J(j){let te=w.indexOf(j.inputSource);if(te===-1)return;let be=E[te];be!==void 0&&(be.update(j.inputSource,j.frame,c||r),be.dispatchEvent({type:j.type,data:j.inputSource}))}function K(){s.removeEventListener("select",J),s.removeEventListener("selectstart",J),s.removeEventListener("selectend",J),s.removeEventListener("squeeze",J),s.removeEventListener("squeezestart",J),s.removeEventListener("squeezeend",J),s.removeEventListener("end",K),s.removeEventListener("inputsourceschange",ae);for(let j=0;j<E.length;j++){let te=w[j];te!==null&&(w[j]=null,E[j].disconnect(te))}L=null,G=null,x.reset();for(let j in f)delete f[j];if(e.setRenderTarget(T),p=null,h=null,d=null,s=null,y=null,it.stop(),i.isPresenting=!1,e.setPixelRatio(_),e.setSize(R.width,R.height,!1),A!==null){let j=A.camera;j.fov=A.fov,j.zoom=A.zoom,j.updateProjectionMatrix(),A=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){a=j,i.isPresenting===!0&&Fe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,i.isPresenting===!0&&Fe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(T=e.getRenderTarget(),s.addEventListener("select",J),s.addEventListener("selectstart",J),s.addEventListener("selectend",J),s.addEventListener("squeeze",J),s.addEventListener("squeezestart",J),s.addEventListener("squeezeend",J),s.addEventListener("end",K),s.addEventListener("inputsourceschange",ae),S.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(R),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let be=null,Ve=null,ye=null;S.depth&&(ye=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,be=S.stencil?es:Zn,Ve=S.stencil?xa:zn);let Ye={colorFormat:t.RGBA8,depthFormat:ye,scaleFactor:a};d=this.getBinding(),h=d.createProjectionLayer(Ye),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),y=new Ft(h.textureWidth,h.textureHeight,{format:Cn,type:dn,depthTexture:new Gi(h.textureWidth,h.textureHeight,Ve,void 0,void 0,void 0,void 0,void 0,void 0,be),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let be={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:a};p=new XRWebGLLayer(s,t,be),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new Ft(p.framebufferWidth,p.framebufferHeight,{format:Cn,type:dn,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await s.requestReferenceSpace(o),it.setContext(s),it.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function ae(j){for(let te=0;te<j.removed.length;te++){let be=j.removed[te],Ve=w.indexOf(be);Ve>=0&&(w[Ve]=null,E[Ve].disconnect(be))}for(let te=0;te<j.added.length;te++){let be=j.added[te],Ve=w.indexOf(be);if(Ve===-1){for(let Ye=0;Ye<E.length;Ye++)if(Ye>=w.length){w.push(be),Ve=Ye;break}else if(w[Ye]===null){w[Ye]=be,Ve=Ye;break}if(Ve===-1)break}let ye=E[Ve];ye&&ye.connect(be)}}let $=new I,ee=new I;function ne(j,te,be){$.setFromMatrixPosition(te.matrixWorld),ee.setFromMatrixPosition(be.matrixWorld);let Ve=$.distanceTo(ee),ye=te.projectionMatrix.elements,Ye=be.projectionMatrix.elements,Tt=ye[14]/(ye[10]-1),Je=ye[14]/(ye[10]+1),st=(ye[9]+1)/ye[5],dt=(ye[9]-1)/ye[5],Be=(ye[8]-1)/ye[0],gt=(Ye[8]+1)/Ye[0],It=Tt*Be,qt=Tt*gt,vt=Ve/(-Be+gt),Et=vt*-Be;if(te.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Et),j.translateZ(vt),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),ye[10]===-1)j.projectionMatrix.copy(te.projectionMatrix),j.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{let O=Tt+vt,X=Je+vt,U=It-Et,M=qt+(Ve-Et),m=st*Je/X*O,P=dt*Je/X*O;j.projectionMatrix.makePerspective(U,M,m,P,O,X),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function De(j,te){te===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(te.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let te=j.near,be=j.far;x.texture!==null&&(x.depthNear>0&&(te=x.depthNear),x.depthFar>0&&(be=x.depthFar)),H.near=F.near=C.near=te,H.far=F.far=C.far=be,(L!==H.near||G!==H.far)&&(s.updateRenderState({depthNear:H.near,depthFar:H.far}),L=H.near,G=H.far),H.layers.mask=j.layers.mask|6,C.layers.mask=H.layers.mask&-5,F.layers.mask=H.layers.mask&-3;let Ve=j.parent,ye=H.cameras;De(H,Ve);for(let Ye=0;Ye<ye.length;Ye++)De(ye[Ye],Ve);ye.length===2?ne(H,C,F):H.projectionMatrix.copy(C.projectionMatrix),A===null&&j.isPerspectiveCamera&&(A={camera:j,fov:j.fov,zoom:j.zoom}),Ie(j,H,Ve)};function Ie(j,te,be){be===null?j.matrix.copy(te.matrixWorld):(j.matrix.copy(be.matrixWorld),j.matrix.invert(),j.matrix.multiply(te.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(te.projectionMatrix),j.projectionMatrixInverse.copy(te.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Zo*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(j){l=j,h!==null&&(h.fixedFoveation=j),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=j)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(H)},this.getCameraTexture=function(j){return f[j]};let ht=null;function tt(j,te){if(u=te.getViewerPose(c||r),g=te,u!==null){let be=u.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let Ve=!1;be.length!==H.cameras.length&&(H.cameras.length=0,Ve=!0);for(let Je=0;Je<be.length;Je++){let st=be[Je],dt=null;if(p!==null)dt=p.getViewport(st);else{let gt=d.getViewSubImage(h,st);dt=gt.viewport,Je===0&&(e.setRenderTargetTextures(y,gt.colorTexture,gt.depthStencilTexture),e.setRenderTarget(y))}let Be=B[Je];Be===void 0&&(Be=new $t,Be.layers.enable(Je),Be.viewport=new wt,B[Je]=Be),Be.matrix.fromArray(st.transform.matrix),Be.matrix.decompose(Be.position,Be.quaternion,Be.scale),Be.projectionMatrix.fromArray(st.projectionMatrix),Be.projectionMatrixInverse.copy(Be.projectionMatrix).invert(),Be.viewport.set(dt.x,dt.y,dt.width,dt.height),Je===0&&(H.matrix.copy(Be.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),Ve===!0&&H.cameras.push(Be)}let ye=s.enabledFeatures;if(ye&&ye.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){d=i.getBinding();let Je=d.getDepthInformation(be[0]);Je&&Je.isValid&&Je.texture&&x.init(Je,s.renderState)}if(ye&&ye.includes("camera-access")&&v){e.state.unbindTexture(),d=i.getBinding();for(let Je=0;Je<be.length;Je++){let st=be[Je].camera;if(st){let dt=f[st];dt||(dt=new rr,f[st]=dt);let Be=d.getCameraImage(st);dt.sourceTexture=Be}}}}for(let be=0;be<E.length;be++){let Ve=w[be],ye=E[be];Ve!==null&&ye!==void 0&&ye.update(Ve,te,c||r)}ht&&ht(j,te),te.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:te}),g=null}let it=new sp;it.setAnimationLoop(tt),this.setAnimationLoop=function(j){ht=j},this.dispose=function(){}}},m2=new Mt,up=new We;up.set(-1,0,0,0,1,0,0,0,1);function g2(n,e){function t(x,f){x.matrixAutoUpdate===!0&&x.updateMatrix(),f.value.copy(x.matrix)}function i(x,f){f.color.getRGB(x.fogColor.value,th(n)),f.isFog?(x.fogNear.value=f.near,x.fogFar.value=f.far):f.isFogExp2&&(x.fogDensity.value=f.density)}function s(x,f,S,T,y){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?a(x,f):f.isMeshLambertMaterial?(a(x,f),f.envMap&&(x.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(a(x,f),d(x,f)):f.isMeshPhongMaterial?(a(x,f),u(x,f),f.envMap&&(x.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(a(x,f),h(x,f),f.isMeshPhysicalMaterial&&p(x,f,y)):f.isMeshMatcapMaterial?(a(x,f),g(x,f)):f.isMeshDepthMaterial?a(x,f):f.isMeshDistanceMaterial?(a(x,f),v(x,f)):f.isMeshNormalMaterial?a(x,f):f.isLineBasicMaterial?(r(x,f),f.isLineDashedMaterial&&o(x,f)):f.isPointsMaterial?l(x,f,S,T):f.isSpriteMaterial?c(x,f):f.isShadowMaterial?(x.color.value.copy(f.color),x.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function a(x,f){x.opacity.value=f.opacity,f.color&&x.diffuse.value.copy(f.color),f.emissive&&x.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(x.map.value=f.map,t(f.map,x.mapTransform)),f.alphaMap&&(x.alphaMap.value=f.alphaMap,t(f.alphaMap,x.alphaMapTransform)),f.bumpMap&&(x.bumpMap.value=f.bumpMap,t(f.bumpMap,x.bumpMapTransform),x.bumpScale.value=f.bumpScale,f.side===cn&&(x.bumpScale.value*=-1)),f.normalMap&&(x.normalMap.value=f.normalMap,t(f.normalMap,x.normalMapTransform),x.normalScale.value.copy(f.normalScale),f.side===cn&&x.normalScale.value.negate()),f.displacementMap&&(x.displacementMap.value=f.displacementMap,t(f.displacementMap,x.displacementMapTransform),x.displacementScale.value=f.displacementScale,x.displacementBias.value=f.displacementBias),f.emissiveMap&&(x.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,x.emissiveMapTransform)),f.specularMap&&(x.specularMap.value=f.specularMap,t(f.specularMap,x.specularMapTransform)),f.alphaTest>0&&(x.alphaTest.value=f.alphaTest);let S=e.get(f),T=S.envMap,y=S.envMapRotation;T&&(x.envMap.value=T,x.envMapRotation.value.setFromMatrix4(m2.makeRotationFromEuler(y)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(up),x.reflectivity.value=f.reflectivity,x.ior.value=f.ior,x.refractionRatio.value=f.refractionRatio),f.lightMap&&(x.lightMap.value=f.lightMap,x.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,x.lightMapTransform)),f.aoMap&&(x.aoMap.value=f.aoMap,x.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,x.aoMapTransform))}function r(x,f){x.diffuse.value.copy(f.color),x.opacity.value=f.opacity,f.map&&(x.map.value=f.map,t(f.map,x.mapTransform))}function o(x,f){x.dashSize.value=f.dashSize,x.totalSize.value=f.dashSize+f.gapSize,x.scale.value=f.scale}function l(x,f,S,T){x.diffuse.value.copy(f.color),x.opacity.value=f.opacity,x.size.value=f.size*S,x.scale.value=T*.5,f.map&&(x.map.value=f.map,t(f.map,x.uvTransform)),f.alphaMap&&(x.alphaMap.value=f.alphaMap,t(f.alphaMap,x.alphaMapTransform)),f.alphaTest>0&&(x.alphaTest.value=f.alphaTest)}function c(x,f){x.diffuse.value.copy(f.color),x.opacity.value=f.opacity,x.rotation.value=f.rotation,f.map&&(x.map.value=f.map,t(f.map,x.mapTransform)),f.alphaMap&&(x.alphaMap.value=f.alphaMap,t(f.alphaMap,x.alphaMapTransform)),f.alphaTest>0&&(x.alphaTest.value=f.alphaTest)}function u(x,f){x.specular.value.copy(f.specular),x.shininess.value=Math.max(f.shininess,1e-4)}function d(x,f){f.gradientMap&&(x.gradientMap.value=f.gradientMap)}function h(x,f){x.metalness.value=f.metalness,f.metalnessMap&&(x.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,x.metalnessMapTransform)),x.roughness.value=f.roughness,f.roughnessMap&&(x.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,x.roughnessMapTransform)),f.envMap&&(x.envMapIntensity.value=f.envMapIntensity)}function p(x,f,S){x.ior.value=f.ior,f.sheen>0&&(x.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),x.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(x.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,x.sheenColorMapTransform)),f.sheenRoughnessMap&&(x.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,x.sheenRoughnessMapTransform))),f.clearcoat>0&&(x.clearcoat.value=f.clearcoat,x.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(x.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,x.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(x.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===cn&&x.clearcoatNormalScale.value.negate())),f.dispersion>0&&(x.dispersion.value=f.dispersion),f.retroreflectivity>0&&(x.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(x.iridescence.value=f.iridescence,x.iridescenceIOR.value=f.iridescenceIOR,x.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(x.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,x.iridescenceMapTransform)),f.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),f.transmission>0&&(x.transmission.value=f.transmission,x.transmissionSamplerMap.value=S.texture,x.transmissionSamplerSize.value.set(S.width,S.height),f.transmissionMap&&(x.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,x.transmissionMapTransform)),x.thickness.value=f.thickness,f.thicknessMap&&(x.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=f.attenuationDistance,x.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(x.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(x.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=f.specularIntensity,x.specularColor.value.copy(f.specularColor),f.specularColorMap&&(x.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,x.specularColorMapTransform)),f.specularIntensityMap&&(x.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,x.specularIntensityMapTransform))}function g(x,f){f.matcap&&(x.matcap.value=f.matcap)}function v(x,f){let S=e.get(f).light;x.referencePosition.value.setFromMatrixPosition(S.matrixWorld),x.nearDistance.value=S.shadow.camera.near,x.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function x2(n,e,t,i){let s={},a={},r=[],o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,E){let w=E.program;i.uniformBlockBinding(y,w)}function c(y,E){let w=s[y.id];w===void 0&&(x(y),w=u(y),s[y.id]=w,y.addEventListener("dispose",S));let R=E.program;i.updateUBOMapping(y,R);let _=e.render.frame;a[y.id]!==_&&(h(y),a[y.id]=_)}function u(y){let E=d();y.__bindingPointIndex=E;let w=n.createBuffer(),R=y.__size,_=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,w),n.bufferData(n.UNIFORM_BUFFER,R,_),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,E,w),w}function d(){for(let y=0;y<o;y++)if(r.indexOf(y)===-1)return r.push(y),y;return ze("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){let E=s[y.id],w=y.uniforms,R=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let _=0,A=w.length;_<A;_++){let C=w[_];if(Array.isArray(C))for(let F=0,B=C.length;F<B;F++)p(C[F],_,F,R);else p(C,_,0,R)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(y,E,w,R){if(v(y,E,w,R)===!0){let _=y.__offset,A=y.value;if(Array.isArray(A)){let C=0;for(let F=0;F<A.length;F++){let B=A[F],H=f(B);g(B,y.__data,C),typeof B!="number"&&typeof B!="boolean"&&!B.isMatrix3&&!ArrayBuffer.isView(B)&&(C+=H.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(A,y.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,_,y.__data)}}function g(y,E,w){typeof y=="number"||typeof y=="boolean"?E[0]=y:y.isMatrix3?(E[0]=y.elements[0],E[1]=y.elements[1],E[2]=y.elements[2],E[3]=0,E[4]=y.elements[3],E[5]=y.elements[4],E[6]=y.elements[5],E[7]=0,E[8]=y.elements[6],E[9]=y.elements[7],E[10]=y.elements[8],E[11]=0):ArrayBuffer.isView(y)?E.set(new y.constructor(y.buffer,y.byteOffset,E.length)):y.toArray(E,w)}function v(y,E,w,R){let _=y.value,A=E+"_"+w;if(R[A]===void 0)return typeof _=="number"||typeof _=="boolean"?R[A]=_:ArrayBuffer.isView(_)?R[A]=_.slice():R[A]=_.clone(),!0;{let C=R[A];if(typeof _=="number"||typeof _=="boolean"){if(C!==_)return R[A]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(C.equals(_)===!1)return C.copy(_),!0}}return!1}function x(y){let E=y.uniforms,w=0,R=16;for(let A=0,C=E.length;A<C;A++){let F=Array.isArray(E[A])?E[A]:[E[A]];for(let B=0,H=F.length;B<H;B++){let L=F[B],G=Array.isArray(L.value)?L.value:[L.value];for(let J=0,K=G.length;J<K;J++){let ae=G[J],$=f(ae),ee=w%R,ne=ee%$.boundary,De=ee+ne;w+=ne,De!==0&&R-De<$.storage&&(w+=R-De),L.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=w,w+=$.storage}}}let _=w%R;return _>0&&(w+=R-_),y.__size=w,y.__cache={},this}function f(y){let E={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(E.boundary=4,E.storage=4):y.isVector2?(E.boundary=8,E.storage=8):y.isVector3||y.isColor?(E.boundary=16,E.storage=12):y.isVector4?(E.boundary=16,E.storage=16):y.isMatrix3?(E.boundary=48,E.storage=48):y.isMatrix4?(E.boundary=64,E.storage=64):y.isTexture?Fe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(E.boundary=16,E.storage=y.byteLength):Fe("WebGLRenderer: Unsupported uniform value type.",y),E}function S(y){let E=y.target;E.removeEventListener("dispose",S);let w=r.indexOf(E.__bindingPointIndex);r.splice(w,1),n.deleteBuffer(s[E.id]),delete s[E.id],delete a[E.id]}function T(){for(let y in s)n.deleteBuffer(s[y]);r=[],s={},a={}}return{bind:l,update:c,dispose:T}}var _2=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ti=null;function v2(){return ti===null&&(ti=new tl(_2,16,16,ts,Zt),ti.name="DFG_LUT",ti.minFilter=jt,ti.magFilter=jt,ti.wrapS=Jn,ti.wrapT=Jn,ti.generateMipmaps=!1,ti.needsUpdate=!0),ti}var _c=class{constructor(e={}){let{canvas:t=wf(),context:i=null,depth:s=!0,stencil:a=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:p=dn}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=r;let v=p,x=new Set([Dl,Nl,Ll]),f=new Set([dn,zn,ga,xa,Pl,Il]),S=new Uint32Array(4),T=new Int32Array(4),y=new I,E=null,w=null,R=[],_=[],A=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Bn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,F=!1,B=null,H=null,L=null,G=null;this._outputColorSpace=Yt;let J=0,K=0,ae=null,$=-1,ee=null,ne=new wt,De=new wt,Ie=null,ht=new Ue(0),tt=0,it=t.width,j=t.height,te=1,be=null,Ve=null,ye=new wt(0,0,it,j),Ye=new wt(0,0,it,j),Tt=!1,Je=new ra,st=!1,dt=!1,Be=new Mt,gt=new I,It=new wt,qt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},vt=!1;function Et(){return ae===null?te:1}let O=i;function X(b,N){return t.getContext(b,N)}let U,M,m,P,q,z,se,oe,Y,Z,le,Ee,ue,he,Ae,Pe,Ge,D,de,Q,fe,pe,ie;try{let b={alpha:!0,depth:s,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",xt,!1),t.addEventListener("webglcontextrestored",lt,!1),t.addEventListener("webglcontextcreationerror",Nn,!1),O===null){let N="webgl2";if(O=X(N,b),O===null)throw X(N)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}we()}catch(b){throw t.removeEventListener("webglcontextlost",xt,!1),t.removeEventListener("webglcontextrestored",lt,!1),t.removeEventListener("webglcontextcreationerror",Nn,!1),ze("WebGLRenderer: "+b.message),b}function we(){U=new wx(O),U.init(),fe=new d2(O,U),M=new gx(O,U,e,fe),m=new u2(O,U),M.reversedDepthBuffer&&h&&m.buffers.depth.setReversed(!0),H=O.createFramebuffer(),L=O.createFramebuffer(),G=O.createFramebuffer(),P=new Rx(O),q=new J_,z=new h2(O,U,m,q,M,fe,P),se=new Ex(C),oe=new I0(O),pe=new px(O,oe),Y=new Ax(O,oe,P,pe),Z=new Ix(O,Y,oe,pe,P),D=new Px(O,M,z),Ae=new xx(q),le=new j_(C,se,U,M,pe,Ae),Ee=new g2(C,q),ue=new K_,he=new s2(U),Ge=new fx(C,se,m,Z,g,l),Pe=new c2(C,Z,M),ie=new x2(O,P,M,m),de=new mx(O,U,P),Q=new Cx(O,U,P),P.programs=le.programs,C.capabilities=M,C.extensions=U,C.properties=q,C.renderLists=ue,C.shadowMap=Pe,C.state=m,C.info=P}v!==dn&&(A=new Nx(v,t.width,t.height,o,s,a));let Te=new vh(C,O);this.xr=Te,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let b=U.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=U.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(b){b!==void 0&&(te=b,this.setSize(it,j,!1))},this.getSize=function(b){return b.set(it,j)},this.setSize=function(b,N,W=!0){if(Te.isPresenting){Fe("WebGLRenderer: Can't change size while VR device is presenting.");return}it=b,j=N,t.width=Math.floor(b*te),t.height=Math.floor(N*te),W===!0&&(t.style.width=b+"px",t.style.height=N+"px"),A!==null&&A.setSize(t.width,t.height),this.setViewport(0,0,b,N)},this.getDrawingBufferSize=function(b){return b.set(it*te,j*te).floor()},this.setDrawingBufferSize=function(b,N,W){it=b,j=N,te=W,t.width=Math.floor(b*W),t.height=Math.floor(N*W),this.setViewport(0,0,b,N)},this.setEffects=function(b){if(v===dn){ze("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let N=0;N<b.length;N++)if(b[N].isOutputPass===!0){Fe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(ne)},this.getViewport=function(b){return b.copy(ye)},this.setViewport=function(b,N,W,k){b.isVector4?ye.set(b.x,b.y,b.z,b.w):ye.set(b,N,W,k),m.viewport(ne.copy(ye).multiplyScalar(te).round())},this.getScissor=function(b){return b.copy(Ye)},this.setScissor=function(b,N,W,k){b.isVector4?Ye.set(b.x,b.y,b.z,b.w):Ye.set(b,N,W,k),m.scissor(De.copy(Ye).multiplyScalar(te).round())},this.getScissorTest=function(){return Tt},this.setScissorTest=function(b){m.setScissorTest(Tt=b)},this.setOpaqueSort=function(b){be=b},this.setTransparentSort=function(b){Ve=b},this.getClearColor=function(b){return b.copy(Ge.getClearColor())},this.setClearColor=function(){Ge.setClearColor(...arguments)},this.getClearAlpha=function(){return Ge.getClearAlpha()},this.setClearAlpha=function(){Ge.setClearAlpha(...arguments)},this.clear=function(b=!0,N=!0,W=!0){let k=0;if(b){let V=!1;if(ae!==null){let ve=ae.texture.format;V=x.has(ve)}if(V){let ve=ae.texture.type,Se=f.has(ve),_e=Ge.getClearColor(),Ce=Ge.getClearAlpha(),Le=_e.r,$e=_e.g,Ke=_e.b;Se?(S[0]=Le,S[1]=$e,S[2]=Ke,S[3]=Ce,O.clearBufferuiv(O.COLOR,0,S)):(T[0]=Le,T[1]=$e,T[2]=Ke,T[3]=Ce,O.clearBufferiv(O.COLOR,0,T))}else k|=O.COLOR_BUFFER_BIT}N&&(k|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(k|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k!==0&&O.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),B=b},this.dispose=function(){t.removeEventListener("webglcontextlost",xt,!1),t.removeEventListener("webglcontextrestored",lt,!1),t.removeEventListener("webglcontextcreationerror",Nn,!1),Ge.dispose(),ue.dispose(),he.dispose(),q.dispose(),se.dispose(),Z.dispose(),pe.dispose(),ie.dispose(),le.dispose(),Te.dispose(),Te.removeEventListener("sessionstart",sd),Te.removeEventListener("sessionend",ad),ps.stop()};function xt(b){b.preventDefault(),Qu("WebGLRenderer: Context Lost."),F=!0}function lt(){Qu("WebGLRenderer: Context Restored."),F=!1;let b=P.autoReset,N=Pe.enabled,W=Pe.autoUpdate,k=Pe.needsUpdate,V=Pe.type;we(),P.autoReset=b,Pe.enabled=N,Pe.autoUpdate=W,Pe.needsUpdate=k,Pe.type=V}function Nn(b){ze("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Yn(b){let N=b.target;N.removeEventListener("dispose",Yn),xm(N)}function xm(b){_m(b),q.remove(b)}function _m(b){let N=q.get(b).programs;N!==void 0&&(N.forEach(function(W){le.releaseProgram(W)}),b.isShaderMaterial&&le.releaseShaderCache(b))}this.renderBufferDirect=function(b,N,W,k,V,ve){N===null&&(N=qt);let Se=V.isMesh&&V.matrixWorld.determinantAffine()<0,_e=bm(b,N,W,k,V);m.setMaterial(k,Se);let Ce=W.index,Le=1;if(k.wireframe===!0){if(Ce=Y.getWireframeAttribute(W),Ce===void 0)return;Le=2}let $e=W.drawRange,Ke=W.attributes.position,Re=$e.start*Le,ct=($e.start+$e.count)*Le;ve!==null&&(Re=Math.max(Re,ve.start*Le),ct=Math.min(ct,(ve.start+ve.count)*Le)),Ce!==null?(Re=Math.max(Re,0),ct=Math.min(ct,Ce.count)):Ke!=null&&(Re=Math.max(Re,0),ct=Math.min(ct,Ke.count));let Dt=ct-Re;if(Dt<0||Dt===1/0)return;pe.setup(V,k,_e,W,Ce);let yt,mt=de;if(Ce!==null&&(yt=oe.get(Ce),mt=Q,mt.setIndex(yt)),V.isMesh)k.wireframe===!0?(m.setLineWidth(k.wireframeLinewidth*Et()),mt.setMode(O.LINES)):mt.setMode(O.TRIANGLES);else if(V.isLine){let en=k.linewidth;en===void 0&&(en=1),m.setLineWidth(en*Et()),V.isLineSegments?mt.setMode(O.LINES):V.isLineLoop?mt.setMode(O.LINE_LOOP):mt.setMode(O.LINE_STRIP)}else V.isPoints?mt.setMode(O.POINTS):V.isSprite&&mt.setMode(O.TRIANGLES);if(V.isBatchedMesh)if(U.get("WEBGL_multi_draw"))mt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{let en=V._multiDrawStarts,Me=V._multiDrawCounts,rn=V._multiDrawCount,rt=Ce?oe.get(Ce).bytesPerElement:1,Sn=q.get(k).currentProgram.getUniforms();for(let $n=0;$n<rn;$n++)Sn.setValue(O,"_gl_DrawID",$n),mt.render(en[$n]/rt,Me[$n])}else if(V.isInstancedMesh)mt.renderInstances(Re,Dt,V.count);else if(W.isInstancedBufferGeometry){let en=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Me=Math.min(W.instanceCount,en);mt.renderInstances(Re,Dt,Me)}else mt.render(Re,Dt)};function id(b,N,W,k){B!==null&&b.isNodeMaterial&&B.setObject(k,b),st===!0&&Ae.setState(b,W,!1),b.transparent===!0&&b.side===wn&&b.forceSinglePass===!1?(b.side=cn,b.needsUpdate=!0,mo(b,N,k),b.side=Ji,b.needsUpdate=!0,mo(b,N,k),b.side=wn):mo(b,N,k)}this.compile=function(b,N,W=null){W===null&&(W=b),B!==null&&B.renderStart(b,N,W),w=he.get(W),w.init(N),_.push(w),W.traverseVisible(function(V){V.isLight&&V.layers.test(N.layers)&&(w.pushLight(V),V.castShadow&&w.pushShadow(V))}),b!==W&&b.traverseVisible(function(V){V.isLight&&V.layers.test(N.layers)&&(w.pushLight(V),V.castShadow&&w.pushShadow(V))}),w.setupLights(),B!==null&&B.updateLights(w.state.lightsArray),dt=this.localClippingEnabled,st=Ae.init(this.clippingPlanes,dt),st===!0&&Ae.setGlobalState(this.clippingPlanes,N),B!==null&&Pe.render(w.state.shadowsArray,W,N);let k=new Set;return b.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;let ve=V.material;if(ve)if(Array.isArray(ve))for(let Se=0;Se<ve.length;Se++){let _e=ve[Se];id(_e,W,N,V),k.add(_e)}else id(ve,W,N,V),k.add(ve)}),w=_.pop(),B!==null&&B.renderEnd(),k},this.compileAsync=function(b,N,W=null){let k=this.compile(b,N,W);return new Promise(V=>{function ve(){if(k.forEach(function(Se){let Ce=q.get(Se).currentProgram;(Ce===void 0||Ce.isReady())&&k.delete(Se)}),k.size===0){V(b);return}setTimeout(ve,10)}U.get("KHR_parallel_shader_compile")!==null?ve():setTimeout(ve,10)})};let Jc=null;function vm(b){Jc&&Jc(b)}function sd(){ps.stop()}function ad(){ps.start()}let ps=new sp;ps.setAnimationLoop(vm),typeof self<"u"&&ps.setContext(self),this.setAnimationLoop=function(b){Jc=b,Te.setAnimationLoop(b),b===null?ps.stop():ps.start()},Te.addEventListener("sessionstart",sd),Te.addEventListener("sessionend",ad),this.render=function(b,N){if(N!==void 0&&N.isCamera!==!0){ze("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;B!==null&&B.renderStart(b,N);let W=Te.enabled===!0&&Te.isPresenting===!0,k=A!==null&&(ae===null||W)&&A.begin(C,ae);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Te.enabled===!0&&Te.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(Te.cameraAutoUpdate===!0&&Te.updateCamera(N),N=Te.getCamera()),b.isScene===!0&&b.onBeforeRender(C,b,N,ae),w=he.get(b,_.length),w.init(N),w.state.textureUnits=z.getTextureUnits(),_.push(w),Be.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Je.setFromProjectionMatrix(Be,qn,N.reversedDepth),dt=this.localClippingEnabled,st=Ae.init(this.clippingPlanes,dt),E=ue.get(b,R.length),E.init(),R.push(E),Te.enabled===!0&&Te.isPresenting===!0){let Se=C.xr.getDepthSensingMesh();Se!==null&&Zc(Se,N,-1/0,C.sortObjects)}Zc(b,N,0,C.sortObjects),E.finish(),B!==null&&B.updateLights(w.state.lightsArray),C.sortObjects===!0&&E.sort(be,Ve),vt=Te.enabled===!1||Te.isPresenting===!1||Te.hasDepthSensing()===!1,vt&&Ge.addToRenderList(E,b),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),st===!0&&Ae.beginShadows();let V=w.state.shadowsArray;if(Pe.render(V,b,N),st===!0&&Ae.endShadows(),(k&&A.hasRenderPass())===!1){let Se=E.opaque,_e=E.transmissive;if(w.setupLights(),N.isArrayCamera){let Ce=N.cameras;if(_e.length>0)for(let Le=0,$e=Ce.length;Le<$e;Le++){let Ke=Ce[Le];od(Se,_e,b,Ke)}vt&&Ge.render(b);for(let Le=0,$e=Ce.length;Le<$e;Le++){let Ke=Ce[Le];rd(E,b,Ke,Ke.viewport)}}else _e.length>0&&od(Se,_e,b,N),vt&&Ge.render(b),rd(E,b,N)}ae!==null&&K===0&&(z.updateMultisampleRenderTarget(ae),z.updateRenderTargetMipmap(ae)),k&&A.end(C),b.isScene===!0&&b.onAfterRender(C,b,N),pe.resetDefaultState(),$=-1,ee=null,_.pop(),_.length>0?(w=_[_.length-1],z.setTextureUnits(w.state.textureUnits),st===!0&&Ae.setGlobalState(C.clippingPlanes,w.state.camera)):w=null,R.pop(),R.length>0?E=R[R.length-1]:E=null,B!==null&&B.renderEnd()};function Zc(b,N,W,k){if(b.visible===!1)return;if(b.layers.test(N.layers)){if(b.isGroup)W=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(N);else if(b.isLightProbeGrid)w.pushLightProbeGrid(b);else if(b.isLight)w.pushLight(b),b.castShadow&&w.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||b.intersectsFrustum(Je)){k&&It.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Be);let Se=Z.update(b),_e=b.material;_e.visible&&E.push(b,Se,_e,W,It.z,null,N)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||b.intersectsFrustum(Je))){let Se=Z.update(b),_e=b.material;if(k&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),It.copy(b.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),It.copy(Se.boundingSphere.center)),It.applyMatrix4(b.matrixWorld).applyMatrix4(Be)),Array.isArray(_e)){let Ce=Se.groups;for(let Le=0,$e=Ce.length;Le<$e;Le++){let Ke=Ce[Le],Re=_e[Ke.materialIndex];Re&&Re.visible&&E.push(b,Se,Re,W,It.z,Ke,N)}}else _e.visible&&E.push(b,Se,_e,W,It.z,null,N)}}let ve=b.children;for(let Se=0,_e=ve.length;Se<_e;Se++)Zc(ve[Se],N,W,k)}function rd(b,N,W,k){let{opaque:V,transmissive:ve,transparent:Se}=b;w.setupLightsView(W),st===!0&&Ae.setGlobalState(C.clippingPlanes,W),k&&m.viewport(ne.copy(k)),V.length>0&&po(V,N,W),ve.length>0&&po(ve,N,W),Se.length>0&&po(Se,N,W),m.buffers.depth.setTest(!0),m.buffers.depth.setMask(!0),m.buffers.color.setMask(!0),m.setPolygonOffset(!1)}function od(b,N,W,k){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[k.id]===void 0){let Re=U.has("EXT_color_buffer_half_float")||U.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[k.id]=new Ft(1,1,{generateMipmaps:!0,type:Re?Zt:dn,minFilter:Qi,samples:Math.max(4,M.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ze.workingColorSpace})}let ve=w.state.transmissionRenderTarget[k.id],Se=k.viewport||ne;ve.setSize(Se.z*C.transmissionResolutionScale,Se.w*C.transmissionResolutionScale);let _e=C.getRenderTarget(),Ce=C.getActiveCubeFace(),Le=C.getActiveMipmapLevel();C.setRenderTarget(ve),C.getClearColor(ht),tt=C.getClearAlpha(),tt<1&&C.setClearColor(16777215,.5),C.clear(),vt&&Ge.render(W);let $e=C.toneMapping;C.toneMapping=Bn;let Ke=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),w.setupLightsView(k),st===!0&&Ae.setGlobalState(C.clippingPlanes,k),po(b,W,k),z.updateMultisampleRenderTarget(ve),z.updateRenderTargetMipmap(ve),U.has("WEBGL_multisampled_render_to_texture")===!1){let Re=!1;for(let ct=0,Dt=N.length;ct<Dt;ct++){let yt=N[ct],{object:mt,geometry:en,material:Me,group:rn}=yt;if(Me.side===wn&&mt.layers.test(k.layers)){let rt=Me.side;Me.side=cn,Me.needsUpdate=!0,ld(mt,W,k,en,Me,rn),Me.side=rt,Me.needsUpdate=!0,Re=!0}}Re===!0&&(z.updateMultisampleRenderTarget(ve),z.updateRenderTargetMipmap(ve))}C.setRenderTarget(_e,Ce,Le),C.setClearColor(ht,tt),Ke!==void 0&&(k.viewport=Ke),C.toneMapping=$e}function po(b,N,W){let k=N.isScene===!0?N.overrideMaterial:null;for(let V=0,ve=b.length;V<ve;V++){let Se=b[V],{object:_e,geometry:Ce,group:Le}=Se,$e=Se.material;$e.allowOverride===!0&&k!==null&&($e=k),_e.layers.test(W.layers)&&ld(_e,N,W,Ce,$e,Le)}}function ld(b,N,W,k,V,ve){B!==null&&V.isNodeMaterial&&B.setObject(b,V),b.onBeforeRender(C,N,W,k,V,ve),b.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),V.onBeforeRender(C,N,W,k,b,ve),V.transparent===!0&&V.side===wn&&V.forceSinglePass===!1?(V.side=cn,V.needsUpdate=!0,C.renderBufferDirect(W,N,k,V,b,ve),V.side=Ji,V.needsUpdate=!0,C.renderBufferDirect(W,N,k,V,b,ve),V.side=wn):C.renderBufferDirect(W,N,k,V,b,ve),b.onAfterRender(C,N,W,k,V,ve)}function mo(b,N,W){N.isScene!==!0&&(N=qt);let k=q.get(b),V=w.state.lights,ve=w.state.shadowsArray,Se=V.state.version,_e=le.getParameters(b,V.state,ve,N,W,w.state.lightProbeGridArray),Ce=le.getProgramCacheKey(_e),Le=k.programs;k.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?N.environment:null,k.fog=N.fog;let $e=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;k.envMap=se.get(b.envMap||k.environment,$e),k.envMapRotation=k.environment!==null&&b.envMap===null?N.environmentRotation:b.envMapRotation,Le===void 0&&(b.addEventListener("dispose",Yn),Le=new Map,k.programs=Le);let Ke=Le.get(Ce);if(Ke!==void 0){if(k.currentProgram===Ke&&k.lightsStateVersion===Se)return ud(b,_e),Ke}else _e.uniforms=le.getUniforms(b),B!==null&&b.isNodeMaterial&&B.build(b,W,_e),b.onBeforeCompile(_e,C),Ke=le.acquireProgram(_e,Ce),Le.set(Ce,Ke),k.uniforms=_e.uniforms;let Re=k.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Re.clippingPlanes=Ae.uniform),ud(b,_e),k.needsLights=Sm(b),k.lightsStateVersion=Se,k.needsLights&&(Re.ambientLightColor.value=V.state.ambient,Re.lightProbe.value=V.state.probe,Re.sunLights.value=V.state.sun,Re.sunLightShadows.value=V.state.sunShadow,Re.directionalLights.value=V.state.directional,Re.directionalLightShadows.value=V.state.directionalShadow,Re.spotLights.value=V.state.spot,Re.spotLightShadows.value=V.state.spotShadow,Re.rectAreaLights.value=V.state.rectArea,Re.ltc_1.value=V.state.rectAreaLTC1,Re.ltc_2.value=V.state.rectAreaLTC2,Re.pointLights.value=V.state.point,Re.pointLightShadows.value=V.state.pointShadow,Re.hemisphereLights.value=V.state.hemi,Re.sunShadowMatrix.value=V.state.sunShadowMatrix,Re.sunShadowCascade.value=V.state.sunShadowCascade,Re.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Re.spotLightMatrix.value=V.state.spotLightMatrix,Re.spotLightMap.value=V.state.spotLightMap,Re.pointShadowMatrix.value=V.state.pointShadowMatrix),k.lightProbeGrid=w.state.lightProbeGridArray.length>0,k.currentProgram=Ke,k.uniformsList=null,Ke}function cd(b){if(b.uniformsList===null){let N=b.currentProgram.getUniforms();b.uniformsList=ba.seqWithValue(N.seq,b.uniforms)}return b.uniformsList}function ud(b,N){let W=q.get(b);W.outputColorSpace=N.outputColorSpace,W.batching=N.batching,W.batchingColor=N.batchingColor,W.instancing=N.instancing,W.instancingColor=N.instancingColor,W.instancingMorph=N.instancingMorph,W.skinning=N.skinning,W.morphTargets=N.morphTargets,W.morphNormals=N.morphNormals,W.morphColors=N.morphColors,W.morphTargetsCount=N.morphTargetsCount,W.numClippingPlanes=N.numClippingPlanes,W.numIntersection=N.numClipIntersection,W.vertexAlphas=N.vertexAlphas,W.vertexTangents=N.vertexTangents,W.toneMapping=N.toneMapping}function ym(b,N){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;y.setFromMatrixPosition(N.matrixWorld);for(let W=0,k=b.length;W<k;W++){let V=b[W];if(V.texture!==null&&V.boundingBox.containsPoint(y))return V}return null}function bm(b,N,W,k,V){N.isScene!==!0&&(N=qt),z.resetTextureUnits();let ve=N.fog,Se=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?N.environment:null,_e=ae===null?C.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:Ze.workingColorSpace,Ce=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,Le=se.get(k.envMap||Se,Ce),$e=k.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ke=!!W.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Re=!!W.morphAttributes.position,ct=!!W.morphAttributes.normal,Dt=!!W.morphAttributes.color,yt=Bn;k.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(yt=C.toneMapping);let mt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,en=mt!==void 0?mt.length:0,Me=q.get(k),rn=w.state.lights;if(st===!0&&(dt===!0||b!==ee)){let _t=b===ee&&k.id===$;Ae.setState(k,b,_t)}let rt=!1;k.version===Me.__version?(Me.needsLights&&Me.lightsStateVersion!==rn.state.version||Me.outputColorSpace!==_e||V.isBatchedMesh&&Me.batching===!1||!V.isBatchedMesh&&Me.batching===!0||V.isBatchedMesh&&Me.batchingColor===!0&&V._colorsTexture===null||V.isBatchedMesh&&Me.batchingColor===!1&&V._colorsTexture!==null||V.isInstancedMesh&&Me.instancing===!1||!V.isInstancedMesh&&Me.instancing===!0||V.isSkinnedMesh&&Me.skinning===!1||!V.isSkinnedMesh&&Me.skinning===!0||V.isInstancedMesh&&Me.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Me.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Me.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Me.instancingMorph===!1&&V.morphTexture!==null||Me.envMap!==Le||k.fog===!0&&Me.fog!==ve||Me.numClippingPlanes!==void 0&&(Me.numClippingPlanes!==Ae.numPlanes||Me.numIntersection!==Ae.numIntersection)||Me.vertexAlphas!==$e||Me.vertexTangents!==Ke||Me.morphTargets!==Re||Me.morphNormals!==ct||Me.morphColors!==Dt||Me.toneMapping!==yt||Me.morphTargetsCount!==en||!!Me.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(rt=!0):(rt=!0,Me.__version=k.version);let Sn=Me.currentProgram;rt===!0&&(Sn=mo(k,N,V),B&&k.isNodeMaterial&&B.onUpdateProgram(k,Sn,Me));let $n=!1,Di=!1,Bs=!1,ft=Sn.getUniforms(),Lt=Me.uniforms;if(m.useProgram(Sn.program)&&($n=!0,Di=!0,Bs=!0),k.id!==$&&($=k.id,Di=!0),Me.needsLights){let _t=ym(w.state.lightProbeGridArray,V);Me.lightProbeGrid!==_t&&(Me.lightProbeGrid=_t,Di=!0)}if($n||ee!==b){m.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),ft.setValue(O,"projectionMatrix",b.projectionMatrix),ft.setValue(O,"viewMatrix",b.matrixWorldInverse);let Fi=ft.map.cameraPosition;Fi!==void 0&&Fi.setValue(O,gt.setFromMatrixPosition(b.matrixWorld)),M.logarithmicDepthBuffer&&ft.setValue(O,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&ft.setValue(O,"isOrthographic",b.isOrthographicCamera===!0),ee!==b&&(ee=b,Di=!0,Bs=!0)}if(Me.needsLights&&(rn.state.sunShadowMap.length>0&&ft.setValue(O,"sunShadowMap",rn.state.sunShadowMap,z),rn.state.directionalShadowMap.length>0&&ft.setValue(O,"directionalShadowMap",rn.state.directionalShadowMap,z),rn.state.spotShadowMap.length>0&&ft.setValue(O,"spotShadowMap",rn.state.spotShadowMap,z),rn.state.pointShadowMap.length>0&&ft.setValue(O,"pointShadowMap",rn.state.pointShadowMap,z)),V.isSkinnedMesh){ft.setOptional(O,V,"bindMatrix"),ft.setOptional(O,V,"bindMatrixInverse");let _t=V.skeleton;_t&&(_t.boneTexture===null&&_t.computeBoneTexture(),ft.setValue(O,"boneTexture",_t.boneTexture,z))}V.isBatchedMesh&&(ft.setOptional(O,V,"batchingTexture"),ft.setValue(O,"batchingTexture",V._matricesTexture,z),ft.setOptional(O,V,"batchingIdTexture"),ft.setValue(O,"batchingIdTexture",V._indirectTexture,z),ft.setOptional(O,V,"batchingColorTexture"),V._colorsTexture!==null&&ft.setValue(O,"batchingColorTexture",V._colorsTexture,z));let Ui=W.morphAttributes;if((Ui.position!==void 0||Ui.normal!==void 0||Ui.color!==void 0)&&D.update(V,W,Sn),(Di||Me.receiveShadow!==V.receiveShadow)&&(Me.receiveShadow=V.receiveShadow,ft.setValue(O,"receiveShadow",V.receiveShadow)),(k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial)&&k.envMap===null&&N.environment!==null&&(Lt.envMapIntensity.value=N.environmentIntensity),Lt.dfgLUT!==void 0&&(Lt.dfgLUT.value=v2()),Di){if(ft.setValue(O,"toneMappingExposure",C.toneMappingExposure),Me.needsLights&&Mm(Lt,Bs),ve&&k.fog===!0&&Ee.refreshFogUniforms(Lt,ve),Ee.refreshMaterialUniforms(Lt,k,te,j,w.state.transmissionRenderTarget[b.id]),Me.needsLights&&Me.lightProbeGrid){let _t=Me.lightProbeGrid;Lt.probesSH.value=_t.texture,Lt.probesMin.value.copy(_t.boundingBox.min),Lt.probesMax.value.copy(_t.boundingBox.max),Lt.probesResolution.value.copy(_t.resolution)}ba.upload(O,cd(Me),Lt,z)}if(k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(ba.upload(O,cd(Me),Lt,z),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&ft.setValue(O,"center",V.center),ft.setValue(O,"modelViewMatrix",V.modelViewMatrix),ft.setValue(O,"normalMatrix",V.normalMatrix),ft.setValue(O,"modelMatrix",V.matrixWorld),k.uniformsGroups!==void 0){let _t=k.uniformsGroups;for(let Fi=0,zs=_t.length;Fi<zs;Fi++){let dd=_t[Fi];ie.update(dd,Sn),ie.bind(dd,Sn)}}return Sn}function Mm(b,N){b.ambientLightColor.needsUpdate=N,b.lightProbe.needsUpdate=N,b.sunLights.needsUpdate=N,b.sunLightShadows.needsUpdate=N,b.directionalLights.needsUpdate=N,b.directionalLightShadows.needsUpdate=N,b.pointLights.needsUpdate=N,b.pointLightShadows.needsUpdate=N,b.spotLights.needsUpdate=N,b.spotLightShadows.needsUpdate=N,b.rectAreaLights.needsUpdate=N,b.hemisphereLights.needsUpdate=N}function Sm(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return J},this.getActiveMipmapLevel=function(){return K},this.getRenderTarget=function(){return ae},this.setRenderTargetTextures=function(b,N,W){let k=q.get(b);k.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),q.get(b.texture).__webglTexture=N,q.get(b.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:W,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,N){let W=q.get(b);W.__webglFramebuffer=N,W.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(b,N=0,W=0){ae=b,J=N,K=W;let k=null,V=!1,ve=!1;if(b){let _e=q.get(b);if(_e.__useDefaultFramebuffer!==void 0){m.bindFramebuffer(O.FRAMEBUFFER,_e.__webglFramebuffer),ne.copy(b.viewport),De.copy(b.scissor),Ie=b.scissorTest,m.viewport(ne),m.scissor(De),m.setScissorTest(Ie),$=-1;return}else if(_e.__webglFramebuffer===void 0)z.setupRenderTarget(b);else if(_e.__hasExternalTextures)z.rebindTextures(b,q.get(b.texture).__webglTexture,q.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let $e=b.depthTexture;if(_e.__boundDepthTexture!==$e){if($e!==null&&q.has($e)&&(b.width!==$e.image.width||b.height!==$e.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");z.setupDepthRenderbuffer(b)}}let Ce=b.texture;(Ce.isData3DTexture||Ce.isDataArrayTexture||Ce.isCompressedArrayTexture)&&(ve=!0);let Le=q.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Le[N])?k=Le[N][W]:k=Le[N],V=!0):b.samples>0&&z.useMultisampledRTT(b)===!1?k=q.get(b).__webglMultisampledFramebuffer:Array.isArray(Le)?k=Le[W]:k=Le,ne.copy(b.viewport),De.copy(b.scissor),Ie=b.scissorTest}else ne.copy(ye).multiplyScalar(te).floor(),De.copy(Ye).multiplyScalar(te).floor(),Ie=Tt;if(W!==0&&(k=H),m.bindFramebuffer(O.FRAMEBUFFER,k)&&m.drawBuffers(b,k),m.viewport(ne),m.scissor(De),m.setScissorTest(Ie),V){let _e=q.get(b.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+N,_e.__webglTexture,W)}else if(ve){let _e=N;for(let Ce=0;Ce<b.textures.length;Ce++){let Le=q.get(b.textures[Ce]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+Ce,Le.__webglTexture,W,_e)}}else if(b!==null&&W!==0){let _e=q.get(b.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,_e.__webglTexture,W)}$=-1};function hd(b){let N=q.get(b);return(N.__readFormat!==b.format||N.__readType!==b.type)&&(N.__readFormat=b.format,N.__readType=b.type,N.__formatReadable=M.textureFormatReadable(b.format),N.__typeReadable=M.textureTypeReadable(b.type)),N}this.readRenderTargetPixels=function(b,N,W,k,V,ve,Se,_e=0){if(!(b&&b.isWebGLRenderTarget)){ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=q.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Se!==void 0&&(Ce=Ce[Se]),Ce){m.bindFramebuffer(O.FRAMEBUFFER,Ce);try{let Le=b.textures[_e],$e=Le.format,Ke=Le.type;b.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+_e);let Re=hd(Le);if(Re.__formatReadable===!1){ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Re.__typeReadable===!1){ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=b.width-k&&W>=0&&W<=b.height-V&&O.readPixels(N,W,k,V,fe.convert($e),fe.convert(Ke),ve)}finally{let Le=ae!==null?q.get(ae).__webglFramebuffer:null;m.bindFramebuffer(O.FRAMEBUFFER,Le)}}},this.readRenderTargetPixelsAsync=async function(b,N,W,k,V,ve,Se,_e=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=q.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Se!==void 0&&(Ce=Ce[Se]),Ce)if(N>=0&&N<=b.width-k&&W>=0&&W<=b.height-V){m.bindFramebuffer(O.FRAMEBUFFER,Ce);let Le=b.textures[_e],$e=Le.format,Ke=Le.type;b.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+_e);let Re=hd(Le);if(Re.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Re.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ct=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,ct),O.bufferData(O.PIXEL_PACK_BUFFER,ve.byteLength,O.STREAM_READ),O.readPixels(N,W,k,V,fe.convert($e),fe.convert(Ke),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);let Dt=ae!==null?q.get(ae).__webglFramebuffer:null;m.bindFramebuffer(O.FRAMEBUFFER,Dt);let yt=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Cf(O,yt,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,ct),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,ve),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(ct),O.deleteSync(yt),ve}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,N=null,W=0){let k=Math.pow(2,-W),V=Math.floor(b.image.width*k),ve=Math.floor(b.image.height*k),Se=N!==null?N.x:0,_e=N!==null?N.y:0;z.setTexture2D(b,0),O.copyTexSubImage2D(O.TEXTURE_2D,W,0,0,Se,_e,V,ve),m.unbindTexture()},this.copyTextureToTexture=function(b,N,W=null,k=null,V=0,ve=0){let Se,_e,Ce,Le,$e,Ke,Re,ct,Dt,yt=b.isCompressedTexture?b.mipmaps[ve]:b.image;if(W!==null)Se=W.max.x-W.min.x,_e=W.max.y-W.min.y,Ce=W.isBox3?W.max.z-W.min.z:1,Le=W.min.x,$e=W.min.y,Ke=W.isBox3?W.min.z:0;else{let Lt=Math.pow(2,-V);Se=Math.floor(yt.width*Lt),_e=Math.floor(yt.height*Lt),b.isDataArrayTexture?Ce=yt.depth:b.isData3DTexture?Ce=Math.floor(yt.depth*Lt):Ce=1,Le=0,$e=0,Ke=0}k!==null?(Re=k.x,ct=k.y,Dt=k.z):(Re=0,ct=0,Dt=0);let mt=fe.convert(N.format),en=fe.convert(N.type),Me;N.isData3DTexture?(z.setTexture3D(N,0),Me=O.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(z.setTexture2DArray(N,0),Me=O.TEXTURE_2D_ARRAY):(z.setTexture2D(N,0),Me=O.TEXTURE_2D),m.activeTexture(O.TEXTURE0),m.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,N.flipY),m.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),m.pixelStorei(O.UNPACK_ALIGNMENT,N.unpackAlignment);let rn=m.getParameter(O.UNPACK_ROW_LENGTH),rt=m.getParameter(O.UNPACK_IMAGE_HEIGHT),Sn=m.getParameter(O.UNPACK_SKIP_PIXELS),$n=m.getParameter(O.UNPACK_SKIP_ROWS),Di=m.getParameter(O.UNPACK_SKIP_IMAGES);m.pixelStorei(O.UNPACK_ROW_LENGTH,yt.width),m.pixelStorei(O.UNPACK_IMAGE_HEIGHT,yt.height),m.pixelStorei(O.UNPACK_SKIP_PIXELS,Le),m.pixelStorei(O.UNPACK_SKIP_ROWS,$e),m.pixelStorei(O.UNPACK_SKIP_IMAGES,Ke);let Bs=b.isDataArrayTexture||b.isData3DTexture,ft=N.isDataArrayTexture||N.isData3DTexture;if(b.isDepthTexture){let Lt=q.get(b),Ui=q.get(N),_t=q.get(Lt.__renderTarget),Fi=q.get(Ui.__renderTarget);m.bindFramebuffer(O.READ_FRAMEBUFFER,_t.__webglFramebuffer),m.bindFramebuffer(O.DRAW_FRAMEBUFFER,Fi.__webglFramebuffer);for(let zs=0;zs<Ce;zs++)Bs&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,q.get(b).__webglTexture,V,Ke+zs),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,q.get(N).__webglTexture,ve,Dt+zs)),O.blitFramebuffer(Le,$e,Se,_e,Re,ct,Se,_e,O.DEPTH_BUFFER_BIT,O.NEAREST);m.bindFramebuffer(O.READ_FRAMEBUFFER,null),m.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(V!==0||b.isRenderTargetTexture||q.has(b)){let Lt=q.get(b),Ui=q.get(N);m.bindFramebuffer(O.READ_FRAMEBUFFER,L),m.bindFramebuffer(O.DRAW_FRAMEBUFFER,G);for(let _t=0;_t<Ce;_t++)Bs?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Lt.__webglTexture,V,Ke+_t):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Lt.__webglTexture,V),ft?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ui.__webglTexture,ve,Dt+_t):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Ui.__webglTexture,ve),V!==0?O.blitFramebuffer(Le,$e,Se,_e,Re,ct,Se,_e,O.COLOR_BUFFER_BIT,O.NEAREST):ft?O.copyTexSubImage3D(Me,ve,Re,ct,Dt+_t,Le,$e,Se,_e):O.copyTexSubImage2D(Me,ve,Re,ct,Le,$e,Se,_e);m.bindFramebuffer(O.READ_FRAMEBUFFER,null),m.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else ft?b.isDataTexture||b.isData3DTexture?O.texSubImage3D(Me,ve,Re,ct,Dt,Se,_e,Ce,mt,en,yt.data):N.isCompressedArrayTexture?O.compressedTexSubImage3D(Me,ve,Re,ct,Dt,Se,_e,Ce,mt,yt.data):O.texSubImage3D(Me,ve,Re,ct,Dt,Se,_e,Ce,mt,en,yt):b.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,ve,Re,ct,Se,_e,mt,en,yt.data):b.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,ve,Re,ct,yt.width,yt.height,mt,yt.data):O.texSubImage2D(O.TEXTURE_2D,ve,Re,ct,Se,_e,mt,en,yt);m.pixelStorei(O.UNPACK_ROW_LENGTH,rn),m.pixelStorei(O.UNPACK_IMAGE_HEIGHT,rt),m.pixelStorei(O.UNPACK_SKIP_PIXELS,Sn),m.pixelStorei(O.UNPACK_SKIP_ROWS,$n),m.pixelStorei(O.UNPACK_SKIP_IMAGES,Di),ve===0&&N.generateMipmaps&&O.generateMipmap(Me),m.unbindTexture()},this.initRenderTarget=function(b){q.get(b).__webglFramebuffer===void 0&&z.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?z.setTextureCube(b,0):b.isData3DTexture?z.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?z.setTexture2DArray(b,0):z.setTexture2D(b,0),m.unbindTexture()},this.resetState=function(){J=0,K=0,ae=null,m.reset(),pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Ze._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ze._getUnpackColorSpace()}};var Sa={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var yn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},y2=new ji(-1,1,1,-1,0,1),bh=class extends Rt{constructor(){super(),this.setAttribute("position",new nt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new nt([0,2,0,0,2,0],2))}},b2=new bh,ns=class{constructor(e){this._mesh=new Oe(b2,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,y2)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var bc=class extends yn{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Nt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Mi.clone(e.uniforms),this.material=new Nt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new ns(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Gr=class extends yn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let s=e.getContext(),a=e.state;a.buffers.color.setMask(!1),a.buffers.depth.setMask(!1),a.buffers.color.setLocked(!0),a.buffers.depth.setLocked(!0);let r,o;this.inverse?(r=0,o=1):(r=1,o=0),a.buffers.stencil.setTest(!0),a.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),a.buffers.stencil.setFunc(s.ALWAYS,r,4294967295),a.buffers.stencil.setClear(o),a.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),a.buffers.color.setLocked(!1),a.buffers.depth.setLocked(!1),a.buffers.color.setMask(!0),a.buffers.depth.setMask(!0),a.buffers.stencil.setLocked(!1),a.buffers.stencil.setFunc(s.EQUAL,1,4294967295),a.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),a.buffers.stencil.setLocked(!0)}},Mc=class extends yn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Sc=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let i=e.getSize(new ce);this._width=i.width,this._height=i.height,t=new Ft(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Zt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new bc(Sa),this.copyPass.material.blending=An,this.timer=new Sr}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),i=!1;for(let s=0,a=this.passes.length;s<a;s++){let r=this.passes[s];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),r.needsSwap){if(i){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Gr!==void 0&&(r instanceof Gr?i=!0:r instanceof Mc&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new ce);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let a=0;a<this.passes.length;a++)this.passes[a].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Tc=class extends yn{constructor(e,t,i=null,s=null,a=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=a,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Ue}render(e,t,i){let s=e.autoClear;e.autoClear=!1;let a,r;this.overrideMaterial!==null&&(r=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(a=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(a),this.overrideMaterial!==null&&(this.scene.overrideMaterial=r),e.autoClear=s}};var hp={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ue(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var Ta=class n extends yn{constructor(e,t=1,i,s){super(),this.strength=t,this.radius=i,this.threshold=s,this.resolution=e!==void 0?new ce(e.x,e.y):new ce(256,256),this.clearColor=new Ue(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let a=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);this.renderTargetBright=new Ft(a,r,{type:Zt,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let d=new Ft(a,r,{type:Zt,depthBuffer:!1});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let h=new Ft(a,r,{type:Zt,depthBuffer:!1});h.texture.name="UnrealBloomPass.v"+u,h.texture.generateMipmaps=!1,this.renderTargetsVertical.push(h),a=Math.round(a/2),r=Math.round(r/2)}let o=hp;this.highPassUniforms=Mi.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Nt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];a=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new ce(1/a,1/r),a=Math.round(a/2),r=Math.round(r/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Mi.clone(Sa.uniforms),this.blendMaterial=new Nt({uniforms:this.copyUniforms,vertexShader:Sa.vertexShader,fragmentShader:Sa.fragmentShader,premultipliedAlpha:!0,blending:Zi,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Ue,this._oldClearAlpha=1,this._basic=new xn,this._fsQuad=new ns(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(i,s);for(let a=0;a<this.nMips;a++)this.renderTargetsHorizontal[a].setSize(i,s),this.renderTargetsVertical[a].setSize(i,s),this.separableBlurMaterials[a].uniforms.invSize.value=new ce(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(e,t,i,s,a){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let r=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),a&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(i),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=r}_getSeparableBlurMaterial(e){let t=[],i=e/3;for(let r=0;r<e;r++)t.push(.39894*Math.exp(-.5*r*r/(i*i))/i);let s=[],a=[];for(let r=1;r<e;r+=2){let o=t[r],l=r+1<e?t[r+1]:0,c=o+l;s.push((r*o+(r+1)*l)/c),a.push(c)}return new Nt({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new ce(.5,.5)},direction:{value:new ce(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:s},gaussianWeights:{value:a}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new Nt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};Ta.BlurDirectionX=new ce(1,0);Ta.BlurDirectionY=new ce(0,1);var Wr={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

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

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var Ec=class extends yn{constructor(){super(),this.isOutputPass=!0,this.uniforms=Mi.clone(Wr.uniforms),this.material=new da({name:Wr.name,uniforms:this.uniforms,vertexShader:Wr.vertexShader,fragmentShader:Wr.fragmentShader}),this._fsQuad=new ns(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Ze.getTransfer(this._outputColorSpace)===ot&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Ar?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Cr?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Rr?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Cs?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Ir?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Lr?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Pr&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var wc=class extends Es{constructor(e){super(e)}load(e,t,i,s){let a=this,r=new _r(this.manager);r.setPath(this.path),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(e,function(o){let l=a.parse(JSON.parse(o));t&&t(l)},i,s)}parse(e){return new Mh(e)}},Mh=class{constructor(e){this.isFont=!0,this.type="Font",this.data=e}generateShapes(e,t=100,i="ltr"){let s=[],a=M2(e,t,this.data,i);for(let r=0,o=a.length;r<o;r++)s.push(...a[r].toShapes());return s}};function M2(n,e,t,i){let s=Array.from(n),a=e/t.resolution,r=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*a,o=[],l=0,c=0;(i=="rtl"||i=="tb")&&s.reverse();for(let u=0;u<s.length;u++){let d=s[u];if(d===`
`)l=0,c-=r;else{let h=S2(d,a,l,c,t);i=="tb"?(l=0,c+=t.ascender*a):l+=h.offsetX,o.push(h.path)}}return o}function S2(n,e,t,i,s){let a=s.glyphs[n]||s.glyphs["?"];if(!a){console.error('THREE.Font: character "'+n+'" does not exists in font family '+s.familyName+".");return}let r=new Er,o,l,c,u,d,h,p,g;if(a.o){let v=a._cachedOutline||(a._cachedOutline=a.o.split(" "));for(let x=0,f=v.length;x<f;)switch(v[x++]){case"m":o=v[x++]*e+t,l=v[x++]*e+i,r.moveTo(o,l);break;case"l":o=v[x++]*e+t,l=v[x++]*e+i,r.lineTo(o,l);break;case"q":c=v[x++]*e+t,u=v[x++]*e+i,d=v[x++]*e+t,h=v[x++]*e+i,r.quadraticCurveTo(d,h,c,u);break;case"b":c=v[x++]*e+t,u=v[x++]*e+i,d=v[x++]*e+t,h=v[x++]*e+i,p=v[x++]*e+t,g=v[x++]*e+i,r.bezierCurveTo(d,h,p,g,c,u);break}}return{offsetX:a.ha*e,path:r}}var dp={glyphs:{\u03BF:{x_min:0,x_max:764,ha:863,o:"m 380 -25 q 105 87 211 -25 q 0 372 0 200 q 104 660 0 545 q 380 775 209 775 q 658 659 552 775 q 764 372 764 544 q 658 87 764 200 q 380 -25 552 -25 m 379 142 q 515 216 466 142 q 557 373 557 280 q 515 530 557 465 q 379 607 466 607 q 245 530 294 607 q 204 373 204 465 q 245 218 204 283 q 379 142 294 142 "},S:{x_min:0,x_max:826,ha:915,o:"m 826 306 q 701 55 826 148 q 423 -29 587 -29 q 138 60 255 -29 q 0 318 13 154 l 208 318 q 288 192 216 238 q 437 152 352 152 q 559 181 506 152 q 623 282 623 217 q 466 411 623 372 q 176 487 197 478 q 18 719 18 557 q 136 958 18 869 q 399 1040 244 1040 q 670 956 561 1040 q 791 713 791 864 l 591 713 q 526 826 583 786 q 393 866 469 866 q 277 838 326 866 q 218 742 218 804 q 374 617 218 655 q 667 542 646 552 q 826 306 826 471 "},"\xA6":{x_min:0,x_max:143,ha:240,o:"m 143 462 l 0 462 l 0 984 l 143 984 l 143 462 m 143 -242 l 0 -242 l 0 280 l 143 280 l 143 -242 "},"/":{x_min:196.109375,x_max:632.5625,ha:828,o:"m 632 1040 l 289 -128 l 196 -128 l 538 1040 l 632 1040 "},\u03A4:{x_min:-.609375,x_max:808,ha:878,o:"m 808 831 l 508 831 l 508 0 l 298 0 l 298 831 l 0 831 l 0 1013 l 808 1013 l 808 831 "},y:{x_min:0,x_max:738.890625,ha:828,o:"m 738 749 l 444 -107 q 361 -238 413 -199 q 213 -277 308 -277 q 156 -275 176 -277 q 120 -271 131 -271 l 120 -110 q 147 -113 134 -111 q 179 -116 161 -116 q 247 -91 226 -116 q 269 -17 269 -67 q 206 173 269 -4 q 84 515 162 301 q 0 749 41 632 l 218 749 l 376 207 l 529 749 l 738 749 "},\u03A0:{x_min:0,x_max:809,ha:922,o:"m 809 0 l 598 0 l 598 836 l 208 836 l 208 0 l 0 0 l 0 1012 l 809 1012 l 809 0 "},\u0390:{x_min:-162,x_max:364,ha:364,o:"m 364 810 l 235 810 l 235 952 l 364 952 l 364 810 m 301 1064 l 86 810 l -12 810 l 123 1064 l 301 1064 m -33 810 l -162 810 l -162 952 l -33 952 l -33 810 m 200 0 l 0 0 l 0 748 l 200 748 l 200 0 "},g:{x_min:0,x_max:724,ha:839,o:"m 724 48 q 637 -223 724 -142 q 357 -304 551 -304 q 140 -253 226 -304 q 23 -72 36 -192 l 243 -72 q 290 -127 255 -110 q 368 -144 324 -144 q 504 -82 470 -144 q 530 71 530 -38 l 530 105 q 441 25 496 51 q 319 0 386 0 q 79 115 166 0 q 0 377 0 219 q 77 647 0 534 q 317 775 166 775 q 534 656 456 775 l 534 748 l 724 748 l 724 48 m 368 167 q 492 237 447 167 q 530 382 530 297 q 490 529 530 466 q 364 603 444 603 q 240 532 284 603 q 201 386 201 471 q 240 239 201 300 q 368 167 286 167 "},"\xB2":{x_min:0,x_max:463,ha:560,o:"m 463 791 q 365 627 463 706 q 151 483 258 555 l 455 483 l 455 382 l 0 382 q 84 565 0 488 q 244 672 97 576 q 331 784 331 727 q 299 850 331 824 q 228 876 268 876 q 159 848 187 876 q 132 762 132 820 l 10 762 q 78 924 10 866 q 228 976 137 976 q 392 925 322 976 q 463 791 463 874 "},"\u2013":{x_min:0,x_max:704.171875,ha:801,o:"m 704 297 l 0 297 l 0 450 l 704 450 l 704 297 "},\u039A:{x_min:0,x_max:899.671875,ha:969,o:"m 899 0 l 646 0 l 316 462 l 208 355 l 208 0 l 0 0 l 0 1013 l 208 1013 l 208 596 l 603 1013 l 863 1013 l 460 603 l 899 0 "},\u0192:{x_min:-46,x_max:440,ha:525,o:"m 440 609 l 316 609 l 149 -277 l -46 -277 l 121 609 l 14 609 l 14 749 l 121 749 q 159 949 121 894 q 344 1019 208 1019 l 440 1015 l 440 855 l 377 855 q 326 841 338 855 q 314 797 314 827 q 314 773 314 786 q 314 749 314 761 l 440 749 l 440 609 "},e:{x_min:0,x_max:708,ha:808,o:"m 708 321 l 207 321 q 254 186 207 236 q 362 141 298 141 q 501 227 453 141 l 700 227 q 566 36 662 104 q 362 -26 477 -26 q 112 72 213 -26 q 0 369 0 182 q 95 683 0 573 q 358 793 191 793 q 619 677 531 793 q 708 321 708 561 m 501 453 q 460 571 501 531 q 353 612 420 612 q 247 570 287 612 q 207 453 207 529 l 501 453 "},\u03CC:{x_min:0,x_max:764,ha:863,o:"m 380 -25 q 105 87 211 -25 q 0 372 0 200 q 104 660 0 545 q 380 775 209 775 q 658 659 552 775 q 764 372 764 544 q 658 87 764 200 q 380 -25 552 -25 m 379 142 q 515 216 466 142 q 557 373 557 280 q 515 530 557 465 q 379 607 466 607 q 245 530 294 607 q 204 373 204 465 q 245 218 204 283 q 379 142 294 142 m 593 1039 l 391 823 l 293 823 l 415 1039 l 593 1039 "},J:{x_min:0,x_max:649,ha:760,o:"m 649 294 q 573 48 649 125 q 327 -29 497 -29 q 61 82 136 -29 q 0 375 0 173 l 200 375 l 199 309 q 219 194 199 230 q 321 145 249 145 q 418 193 390 145 q 441 307 441 232 l 441 1013 l 649 1013 l 649 294 "},"\xBB":{x_min:-.234375,x_max:526,ha:624,o:"m 526 286 l 297 87 l 296 250 l 437 373 l 297 495 l 297 660 l 526 461 l 526 286 m 229 286 l 0 87 l 0 250 l 140 373 l 0 495 l 0 660 l 229 461 l 229 286 "},"\xA9":{x_min:3,x_max:1007,ha:1104,o:"m 507 -6 q 129 153 269 -6 q 3 506 3 298 q 127 857 3 713 q 502 1017 266 1017 q 880 855 740 1017 q 1007 502 1007 711 q 882 152 1007 295 q 507 -6 743 -6 m 502 934 q 184 800 302 934 q 79 505 79 680 q 184 210 79 331 q 501 76 302 76 q 819 210 701 76 q 925 507 925 331 q 820 800 925 682 q 502 934 704 934 m 758 410 q 676 255 748 313 q 506 197 605 197 q 298 291 374 197 q 229 499 229 377 q 297 713 229 624 q 494 811 372 811 q 666 760 593 811 q 752 616 739 710 l 621 616 q 587 688 621 658 q 509 719 554 719 q 404 658 441 719 q 368 511 368 598 q 403 362 368 427 q 498 298 438 298 q 624 410 606 298 l 758 410 "},\u03CE:{x_min:0,x_max:945,ha:1051,o:"m 566 528 l 372 528 l 372 323 q 372 298 372 311 q 373 271 372 285 q 360 183 373 211 q 292 142 342 142 q 219 222 243 142 q 203 365 203 279 q 241 565 203 461 q 334 748 273 650 l 130 748 q 36 552 68 650 q 0 337 0 444 q 69 96 0 204 q 276 -29 149 -29 q 390 0 337 -29 q 470 78 444 28 q 551 0 495 30 q 668 -29 608 -29 q 874 96 793 -29 q 945 337 945 205 q 910 547 945 444 q 814 748 876 650 l 610 748 q 703 565 671 650 q 742 365 742 462 q 718 189 742 237 q 651 142 694 142 q 577 190 597 142 q 565 289 565 221 l 565 323 l 566 528 m 718 1039 l 516 823 l 417 823 l 540 1039 l 718 1039 "},"^":{x_min:197.21875,x_max:630.5625,ha:828,o:"m 630 836 l 536 836 l 413 987 l 294 836 l 197 836 l 331 1090 l 493 1090 l 630 836 "},"\xAB":{x_min:0,x_max:526.546875,ha:624,o:"m 526 87 l 297 286 l 297 461 l 526 660 l 526 495 l 385 373 l 526 250 l 526 87 m 229 87 l 0 286 l 0 461 l 229 660 l 229 495 l 88 373 l 229 250 l 229 87 "},D:{x_min:0,x_max:864,ha:968,o:"m 400 1013 q 736 874 608 1013 q 864 523 864 735 q 717 146 864 293 q 340 0 570 0 l 0 0 l 0 1013 l 400 1013 m 398 837 l 206 837 l 206 182 l 372 182 q 584 276 507 182 q 657 504 657 365 q 594 727 657 632 q 398 837 522 837 "},"\u2219":{x_min:0,x_max:207,ha:304,o:"m 207 528 l 0 528 l 0 735 l 207 735 l 207 528 "},\u00FF:{x_min:0,x_max:47,ha:125,o:"m 47 3 q 37 -7 47 -7 q 28 0 30 -7 q 39 -4 32 -4 q 45 3 45 -1 l 37 0 q 28 9 28 0 q 39 19 28 19 l 47 16 l 47 19 l 47 3 m 37 1 q 44 8 44 1 q 37 16 44 16 q 30 8 30 16 q 37 1 30 1 m 26 1 l 23 22 l 14 0 l 3 22 l 3 3 l 0 25 l 13 1 l 22 25 l 26 1 "},w:{x_min:0,x_max:1056.953125,ha:1150,o:"m 1056 749 l 848 0 l 647 0 l 527 536 l 412 0 l 211 0 l 0 749 l 202 749 l 325 226 l 429 748 l 633 748 l 740 229 l 864 749 l 1056 749 "},$:{x_min:0,x_max:704,ha:800,o:"m 682 693 l 495 693 q 468 782 491 749 q 391 831 441 824 l 391 579 q 633 462 562 534 q 704 259 704 389 q 616 57 704 136 q 391 -22 528 -22 l 391 -156 l 308 -156 l 308 -22 q 76 69 152 -7 q 0 300 0 147 l 183 300 q 215 191 190 230 q 308 128 245 143 l 308 414 q 84 505 157 432 q 12 700 12 578 q 89 902 12 824 q 308 981 166 981 l 308 1069 l 391 1069 l 391 981 q 595 905 521 981 q 682 693 670 829 m 308 599 l 308 831 q 228 796 256 831 q 200 712 200 762 q 225 642 200 668 q 308 599 251 617 m 391 128 q 476 174 449 140 q 504 258 504 207 q 391 388 504 354 l 391 128 "},"\\":{x_min:-.03125,x_max:434.765625,ha:532,o:"m 434 -128 l 341 -128 l 0 1039 l 91 1040 l 434 -128 "},\u00B5:{x_min:0,x_max:647,ha:754,o:"m 647 0 l 478 0 l 478 68 q 412 9 448 30 q 330 -11 375 -11 q 261 3 296 -11 q 199 43 226 18 l 199 -277 l 0 -277 l 0 749 l 199 749 l 199 358 q 216 221 199 267 q 322 151 244 151 q 435 240 410 151 q 448 401 448 283 l 448 749 l 647 749 l 647 0 "},\u0399:{x_min:42,x_max:250,ha:413,o:"m 250 0 l 42 0 l 42 1013 l 250 1013 l 250 0 "},\u038E:{x_min:0,x_max:1211.15625,ha:1289,o:"m 1211 1012 l 907 376 l 907 0 l 697 0 l 697 376 l 374 1012 l 583 1012 l 802 576 l 1001 1012 l 1211 1012 m 313 1035 l 98 780 l 0 780 l 136 1035 l 313 1035 "},"\u2019":{x_min:0,x_max:192,ha:289,o:"m 192 834 q 137 692 192 751 q 0 626 83 634 l 0 697 q 101 831 101 723 l 0 831 l 0 1013 l 192 1013 l 192 834 "},\u039D:{x_min:0,x_max:833,ha:946,o:"m 833 0 l 617 0 l 206 696 l 206 0 l 0 0 l 0 1013 l 216 1013 l 629 315 l 629 1013 l 833 1013 l 833 0 "},"-":{x_min:27.78125,x_max:413.890625,ha:525,o:"m 413 279 l 27 279 l 27 468 l 413 468 l 413 279 "},Q:{x_min:0,x_max:995.59375,ha:1096,o:"m 995 49 l 885 -70 l 762 42 q 641 -12 709 4 q 497 -29 572 -29 q 135 123 271 -29 q 0 504 0 276 q 131 881 0 731 q 497 1040 270 1040 q 859 883 719 1040 q 994 506 994 731 q 966 321 994 413 q 884 152 938 229 l 995 49 m 730 299 q 767 395 755 344 q 779 504 779 446 q 713 743 779 644 q 505 857 638 857 q 284 745 366 857 q 210 501 210 644 q 279 265 210 361 q 492 157 357 157 q 615 181 557 157 l 508 287 l 620 405 l 730 299 "},\u03C2:{x_min:0,x_max:731.78125,ha:768,o:"m 731 448 l 547 448 q 485 571 531 533 q 369 610 440 610 q 245 537 292 610 q 204 394 204 473 q 322 186 204 238 q 540 133 430 159 q 659 -15 659 98 q 643 -141 659 -80 q 595 -278 627 -202 l 423 -278 q 458 -186 448 -215 q 474 -88 474 -133 q 352 0 474 -27 q 123 80 181 38 q 0 382 0 170 q 98 660 0 549 q 367 777 202 777 q 622 683 513 777 q 731 448 731 589 "},M:{x_min:0,x_max:1019,ha:1135,o:"m 1019 0 l 823 0 l 823 819 l 618 0 l 402 0 l 194 818 l 194 0 l 0 0 l 0 1013 l 309 1012 l 510 241 l 707 1013 l 1019 1013 l 1019 0 "},\u03A8:{x_min:0,x_max:995,ha:1085,o:"m 995 698 q 924 340 995 437 q 590 200 841 227 l 590 0 l 404 0 l 404 200 q 70 340 152 227 q 0 698 0 437 l 0 1013 l 188 1013 l 188 694 q 212 472 188 525 q 404 383 254 383 l 404 1013 l 590 1013 l 590 383 q 781 472 740 383 q 807 694 807 525 l 807 1013 l 995 1013 l 995 698 "},C:{x_min:0,x_max:970.828125,ha:1043,o:"m 970 345 q 802 70 933 169 q 490 -29 672 -29 q 130 130 268 -29 q 0 506 0 281 q 134 885 0 737 q 502 1040 275 1040 q 802 939 668 1040 q 965 679 936 838 l 745 679 q 649 809 716 761 q 495 857 582 857 q 283 747 361 857 q 214 508 214 648 q 282 267 214 367 q 493 154 359 154 q 651 204 584 154 q 752 345 718 255 l 970 345 "},"!":{x_min:0,x_max:204,ha:307,o:"m 204 739 q 182 515 204 686 q 152 282 167 398 l 52 282 q 13 589 27 473 q 0 739 0 704 l 0 1013 l 204 1013 l 204 739 m 204 0 l 0 0 l 0 203 l 204 203 l 204 0 "},"{":{x_min:0,x_max:501.390625,ha:599,o:"m 501 -285 q 229 -209 301 -285 q 176 -35 176 -155 q 182 47 176 -8 q 189 126 189 103 q 156 245 189 209 q 0 294 112 294 l 0 438 q 154 485 111 438 q 189 603 189 522 q 186 666 189 636 q 176 783 176 772 q 231 945 176 894 q 501 1015 306 1015 l 501 872 q 370 833 408 872 q 340 737 340 801 q 342 677 340 705 q 353 569 353 579 q 326 451 353 496 q 207 366 291 393 q 327 289 294 346 q 353 164 353 246 q 348 79 353 132 q 344 17 344 26 q 372 -95 344 -58 q 501 -141 408 -141 l 501 -285 "},X:{x_min:0,x_max:894.453125,ha:999,o:"m 894 0 l 654 0 l 445 351 l 238 0 l 0 0 l 316 516 l 0 1013 l 238 1013 l 445 659 l 652 1013 l 894 1013 l 577 519 l 894 0 "},"#":{x_min:0,x_max:1019.453125,ha:1117,o:"m 1019 722 l 969 582 l 776 581 l 717 417 l 919 417 l 868 279 l 668 278 l 566 -6 l 413 -5 l 516 279 l 348 279 l 247 -6 l 94 -6 l 196 278 l 0 279 l 49 417 l 245 417 l 304 581 l 98 582 l 150 722 l 354 721 l 455 1006 l 606 1006 l 507 721 l 673 722 l 776 1006 l 927 1006 l 826 721 l 1019 722 m 627 581 l 454 581 l 394 417 l 567 417 l 627 581 "},\u03B9:{x_min:42,x_max:242,ha:389,o:"m 242 0 l 42 0 l 42 749 l 242 749 l 242 0 "},\u0386:{x_min:0,x_max:995.828125,ha:1072,o:"m 313 1035 l 98 780 l 0 780 l 136 1035 l 313 1035 m 995 0 l 776 0 l 708 208 l 315 208 l 247 0 l 29 0 l 390 1012 l 629 1012 l 995 0 m 652 376 l 509 809 l 369 376 l 652 376 "},")":{x_min:0,x_max:389,ha:486,o:"m 389 357 q 319 14 389 187 q 145 -293 259 -134 l 0 -293 q 139 22 90 -142 q 189 358 189 187 q 139 689 189 525 q 0 1013 90 853 l 145 1013 q 319 703 258 857 q 389 357 389 528 "},\u03B5:{x_min:16.671875,x_max:652.78125,ha:742,o:"m 652 259 q 565 49 652 123 q 340 -25 479 -25 q 102 39 188 -25 q 16 197 16 104 q 45 299 16 249 q 134 390 75 348 q 58 456 86 419 q 25 552 25 502 q 120 717 25 653 q 322 776 208 776 q 537 710 456 776 q 625 508 625 639 l 445 508 q 415 585 445 563 q 327 608 386 608 q 254 590 293 608 q 215 544 215 573 q 252 469 215 490 q 336 453 280 453 q 369 455 347 453 q 400 456 391 456 l 400 308 l 329 308 q 247 291 280 308 q 204 223 204 269 q 255 154 204 172 q 345 143 286 143 q 426 174 398 143 q 454 259 454 206 l 652 259 "},\u0394:{x_min:0,x_max:981.953125,ha:1057,o:"m 981 0 l 0 0 l 386 1013 l 594 1013 l 981 0 m 715 175 l 490 765 l 266 175 l 715 175 "},"}":{x_min:0,x_max:500,ha:597,o:"m 500 294 q 348 246 390 294 q 315 128 315 209 q 320 42 315 101 q 326 -48 326 -17 q 270 -214 326 -161 q 0 -285 196 -285 l 0 -141 q 126 -97 90 -141 q 154 8 154 -64 q 150 91 154 37 q 146 157 146 145 q 172 281 146 235 q 294 366 206 339 q 173 451 208 390 q 146 576 146 500 q 150 655 146 603 q 154 731 154 708 q 126 831 154 799 q 0 872 90 872 l 0 1015 q 270 944 196 1015 q 326 777 326 891 q 322 707 326 747 q 313 593 313 612 q 347 482 313 518 q 500 438 390 438 l 500 294 "},"\u2030":{x_min:0,x_max:1681,ha:1775,o:"m 861 484 q 1048 404 979 484 q 1111 228 1111 332 q 1048 51 1111 123 q 859 -29 979 -29 q 672 50 740 -29 q 610 227 610 122 q 672 403 610 331 q 861 484 741 484 m 861 120 q 939 151 911 120 q 967 226 967 183 q 942 299 967 270 q 861 333 912 333 q 783 301 811 333 q 756 226 756 269 q 783 151 756 182 q 861 120 810 120 m 904 984 l 316 -28 l 205 -29 l 793 983 l 904 984 m 250 984 q 436 904 366 984 q 499 730 499 832 q 436 552 499 626 q 248 472 366 472 q 62 552 132 472 q 0 728 0 624 q 62 903 0 831 q 250 984 132 984 m 249 835 q 169 801 198 835 q 140 725 140 768 q 167 652 140 683 q 247 621 195 621 q 327 654 298 621 q 357 730 357 687 q 329 803 357 772 q 249 835 301 835 m 1430 484 q 1618 404 1548 484 q 1681 228 1681 332 q 1618 51 1681 123 q 1429 -29 1548 -29 q 1241 50 1309 -29 q 1179 227 1179 122 q 1241 403 1179 331 q 1430 484 1311 484 m 1431 120 q 1509 151 1481 120 q 1537 226 1537 183 q 1511 299 1537 270 q 1431 333 1482 333 q 1352 301 1380 333 q 1325 226 1325 269 q 1352 151 1325 182 q 1431 120 1379 120 "},a:{x_min:0,x_max:700,ha:786,o:"m 700 0 l 488 0 q 465 93 469 45 q 365 5 427 37 q 233 -26 303 -26 q 65 37 130 -26 q 0 205 0 101 q 120 409 0 355 q 343 452 168 431 q 465 522 465 468 q 424 588 465 565 q 337 611 384 611 q 250 581 285 611 q 215 503 215 552 l 26 503 q 113 707 26 633 q 328 775 194 775 q 538 723 444 775 q 657 554 657 659 l 657 137 q 666 73 657 101 q 700 33 675 45 l 700 0 m 465 297 l 465 367 q 299 322 358 340 q 193 217 193 287 q 223 150 193 174 q 298 127 254 127 q 417 175 370 127 q 465 297 465 224 "},"\u2014":{x_min:0,x_max:941.671875,ha:1039,o:"m 941 297 l 0 297 l 0 450 l 941 450 l 941 297 "},"=":{x_min:29.171875,x_max:798.609375,ha:828,o:"m 798 502 l 29 502 l 29 635 l 798 635 l 798 502 m 798 204 l 29 204 l 29 339 l 798 339 l 798 204 "},N:{x_min:0,x_max:833,ha:949,o:"m 833 0 l 617 0 l 206 695 l 206 0 l 0 0 l 0 1013 l 216 1013 l 629 315 l 629 1013 l 833 1013 l 833 0 "},\u03C1:{x_min:0,x_max:722,ha:810,o:"m 364 -17 q 271 0 313 -17 q 194 48 230 16 l 194 -278 l 0 -278 l 0 370 q 87 656 0 548 q 358 775 183 775 q 626 655 524 775 q 722 372 722 541 q 621 95 722 208 q 364 -17 520 -17 m 360 607 q 237 529 280 607 q 201 377 201 463 q 234 229 201 292 q 355 147 277 147 q 467 210 419 147 q 515 374 515 273 q 471 537 515 468 q 360 607 428 607 "},"2":{x_min:64,x_max:764,ha:828,o:"m 764 685 q 675 452 764 541 q 484 325 637 415 q 307 168 357 250 l 754 168 l 754 0 l 64 0 q 193 301 64 175 q 433 480 202 311 q 564 673 564 576 q 519 780 564 737 q 416 824 475 824 q 318 780 358 824 q 262 633 270 730 l 80 633 q 184 903 80 807 q 415 988 276 988 q 654 907 552 988 q 764 685 764 819 "},"\xAF":{x_min:0,x_max:775,ha:771,o:"m 775 958 l 0 958 l 0 1111 l 775 1111 l 775 958 "},Z:{x_min:0,x_max:804.171875,ha:906,o:"m 804 836 l 251 182 l 793 182 l 793 0 l 0 0 l 0 176 l 551 830 l 11 830 l 11 1013 l 804 1013 l 804 836 "},u:{x_min:0,x_max:668,ha:782,o:"m 668 0 l 474 0 l 474 89 q 363 9 425 37 q 233 -19 301 -19 q 61 53 123 -19 q 0 239 0 126 l 0 749 l 199 749 l 199 296 q 225 193 199 233 q 316 146 257 146 q 424 193 380 146 q 469 304 469 240 l 469 749 l 668 749 l 668 0 "},k:{x_min:0,x_max:688.890625,ha:771,o:"m 688 0 l 450 0 l 270 316 l 196 237 l 196 0 l 0 0 l 0 1013 l 196 1013 l 196 483 l 433 748 l 675 748 l 413 469 l 688 0 "},\u0397:{x_min:0,x_max:837,ha:950,o:"m 837 0 l 627 0 l 627 450 l 210 450 l 210 0 l 0 0 l 0 1013 l 210 1013 l 210 635 l 627 635 l 627 1013 l 837 1013 l 837 0 "},\u0391:{x_min:0,x_max:966.671875,ha:1043,o:"m 966 0 l 747 0 l 679 208 l 286 208 l 218 0 l 0 0 l 361 1013 l 600 1013 l 966 0 m 623 376 l 480 809 l 340 376 l 623 376 "},s:{x_min:0,x_max:681,ha:775,o:"m 681 229 q 568 33 681 105 q 340 -29 471 -29 q 107 39 202 -29 q 0 245 0 114 l 201 245 q 252 155 201 189 q 358 128 295 128 q 436 144 401 128 q 482 205 482 166 q 363 284 482 255 q 143 348 181 329 q 25 533 25 408 q 129 716 25 647 q 340 778 220 778 q 554 710 465 778 q 658 522 643 643 l 463 522 q 419 596 458 570 q 327 622 380 622 q 255 606 290 622 q 221 556 221 590 q 339 473 221 506 q 561 404 528 420 q 681 229 681 344 "},B:{x_min:0,x_max:835,ha:938,o:"m 674 547 q 791 450 747 518 q 835 304 835 383 q 718 75 835 158 q 461 0 612 0 l 0 0 l 0 1013 l 477 1013 q 697 951 609 1013 q 797 754 797 880 q 765 630 797 686 q 674 547 734 575 m 438 621 q 538 646 495 621 q 590 730 590 676 q 537 814 590 785 q 436 838 494 838 l 199 838 l 199 621 l 438 621 m 445 182 q 561 211 513 182 q 618 311 618 247 q 565 410 618 375 q 444 446 512 446 l 199 446 l 199 182 l 445 182 "},"\u2026":{x_min:0,x_max:819,ha:963,o:"m 206 0 l 0 0 l 0 207 l 206 207 l 206 0 m 512 0 l 306 0 l 306 207 l 512 207 l 512 0 m 819 0 l 613 0 l 613 207 l 819 207 l 819 0 "},"?":{x_min:1,x_max:687,ha:785,o:"m 687 734 q 621 563 687 634 q 501 454 560 508 q 436 293 436 386 l 251 293 l 251 391 q 363 557 251 462 q 476 724 476 653 q 432 827 476 788 q 332 866 389 866 q 238 827 275 866 q 195 699 195 781 l 1 699 q 110 955 1 861 q 352 1040 210 1040 q 582 963 489 1040 q 687 734 687 878 m 446 0 l 243 0 l 243 203 l 446 203 l 446 0 "},H:{x_min:0,x_max:838,ha:953,o:"m 838 0 l 628 0 l 628 450 l 210 450 l 210 0 l 0 0 l 0 1013 l 210 1013 l 210 635 l 628 635 l 628 1013 l 838 1013 l 838 0 "},\u03BD:{x_min:0,x_max:740.28125,ha:828,o:"m 740 749 l 473 0 l 266 0 l 0 749 l 222 749 l 373 211 l 529 749 l 740 749 "},c:{x_min:0,x_max:751.390625,ha:828,o:"m 751 282 q 625 58 725 142 q 384 -26 526 -26 q 107 84 215 -26 q 0 366 0 195 q 98 651 0 536 q 370 774 204 774 q 616 700 518 774 q 751 486 715 626 l 536 486 q 477 570 516 538 q 380 607 434 607 q 248 533 298 607 q 204 378 204 466 q 242 219 204 285 q 377 139 290 139 q 483 179 438 139 q 543 282 527 220 l 751 282 "},"\xB6":{x_min:0,x_max:566.671875,ha:678,o:"m 21 892 l 52 892 l 98 761 l 145 892 l 176 892 l 178 741 l 157 741 l 157 867 l 108 741 l 88 741 l 40 871 l 40 741 l 21 741 l 21 892 m 308 854 l 308 731 q 252 691 308 691 q 227 691 240 691 q 207 696 213 695 l 207 712 l 253 706 q 288 733 288 706 l 288 763 q 244 741 279 741 q 193 797 193 741 q 261 860 193 860 q 287 860 273 860 q 308 854 302 855 m 288 842 l 263 843 q 213 796 213 843 q 248 756 213 756 q 288 796 288 756 l 288 842 m 566 988 l 502 988 l 502 -1 l 439 -1 l 439 988 l 317 988 l 317 -1 l 252 -1 l 252 602 q 81 653 155 602 q 0 805 0 711 q 101 989 0 918 q 309 1053 194 1053 l 566 1053 l 566 988 "},\u03B2:{x_min:0,x_max:703,ha:789,o:"m 510 539 q 651 429 600 501 q 703 262 703 357 q 617 53 703 136 q 404 -29 532 -29 q 199 51 279 -29 l 199 -278 l 0 -278 l 0 627 q 77 911 0 812 q 343 1021 163 1021 q 551 957 464 1021 q 649 769 649 886 q 613 638 649 697 q 510 539 577 579 m 344 136 q 452 181 408 136 q 497 291 497 227 q 435 409 497 369 q 299 444 381 444 l 299 600 q 407 634 363 600 q 452 731 452 669 q 417 820 452 784 q 329 857 382 857 q 217 775 246 857 q 199 622 199 725 l 199 393 q 221 226 199 284 q 344 136 254 136 "},\u039C:{x_min:0,x_max:1019,ha:1132,o:"m 1019 0 l 823 0 l 823 818 l 617 0 l 402 0 l 194 818 l 194 0 l 0 0 l 0 1013 l 309 1013 l 509 241 l 708 1013 l 1019 1013 l 1019 0 "},\u038C:{x_min:.15625,x_max:1174,ha:1271,o:"m 676 -29 q 312 127 451 -29 q 179 505 179 277 q 311 883 179 733 q 676 1040 449 1040 q 1040 883 901 1040 q 1174 505 1174 733 q 1041 127 1174 277 q 676 -29 903 -29 m 676 154 q 890 266 811 154 q 961 506 961 366 q 891 745 961 648 q 676 857 812 857 q 462 747 541 857 q 392 506 392 648 q 461 266 392 365 q 676 154 540 154 m 314 1034 l 98 779 l 0 779 l 136 1034 l 314 1034 "},\u0389:{x_min:0,x_max:1248,ha:1361,o:"m 1248 0 l 1038 0 l 1038 450 l 621 450 l 621 0 l 411 0 l 411 1012 l 621 1012 l 621 635 l 1038 635 l 1038 1012 l 1248 1012 l 1248 0 m 313 1035 l 98 780 l 0 780 l 136 1035 l 313 1035 "},"\u2022":{x_min:-27.78125,x_max:691.671875,ha:775,o:"m 691 508 q 588 252 691 358 q 331 147 486 147 q 77 251 183 147 q -27 508 -27 355 q 75 761 -27 655 q 331 868 179 868 q 585 763 479 868 q 691 508 691 658 "},"\xA5":{x_min:0,x_max:836,ha:931,o:"m 195 625 l 0 1013 l 208 1013 l 427 576 l 626 1013 l 836 1013 l 650 625 l 777 625 l 777 472 l 578 472 l 538 389 l 777 389 l 777 236 l 532 236 l 532 0 l 322 0 l 322 236 l 79 236 l 79 389 l 315 389 l 273 472 l 79 472 l 79 625 l 195 625 "},"(":{x_min:0,x_max:388.890625,ha:486,o:"m 388 -293 l 243 -293 q 70 14 130 -134 q 0 357 0 189 q 69 703 0 526 q 243 1013 129 856 l 388 1013 q 248 695 297 860 q 200 358 200 530 q 248 24 200 187 q 388 -293 297 -138 "},U:{x_min:0,x_max:813,ha:926,o:"m 813 362 q 697 79 813 187 q 405 -29 582 -29 q 114 78 229 -29 q 0 362 0 186 l 0 1013 l 210 1013 l 210 387 q 260 226 210 291 q 408 154 315 154 q 554 226 500 154 q 603 387 603 291 l 603 1013 l 813 1013 l 813 362 "},\u03B3:{x_min:.0625,x_max:729.234375,ha:815,o:"m 729 749 l 457 37 l 457 -278 l 257 -278 l 257 37 q 218 155 243 95 q 170 275 194 215 l 0 749 l 207 749 l 363 284 l 522 749 l 729 749 "},\u03B1:{x_min:-1,x_max:722,ha:835,o:"m 722 0 l 531 0 l 530 101 q 433 8 491 41 q 304 -25 375 -25 q 72 104 157 -25 q -1 372 -1 216 q 72 643 -1 530 q 308 775 158 775 q 433 744 375 775 q 528 656 491 713 l 528 749 l 722 749 l 722 0 m 361 601 q 233 527 277 601 q 196 375 196 464 q 232 224 196 288 q 358 144 277 144 q 487 217 441 144 q 528 370 528 281 q 489 523 528 457 q 361 601 443 601 "},F:{x_min:0,x_max:706.953125,ha:778,o:"m 706 837 l 206 837 l 206 606 l 645 606 l 645 431 l 206 431 l 206 0 l 0 0 l 0 1013 l 706 1013 l 706 837 "},"\xAD":{x_min:0,x_max:704.171875,ha:801,o:"m 704 297 l 0 297 l 0 450 l 704 450 l 704 297 "},":":{x_min:0,x_max:207,ha:304,o:"m 207 528 l 0 528 l 0 735 l 207 735 l 207 528 m 207 0 l 0 0 l 0 207 l 207 207 l 207 0 "},\u03A7:{x_min:0,x_max:894.453125,ha:978,o:"m 894 0 l 654 0 l 445 351 l 238 0 l 0 0 l 316 516 l 0 1013 l 238 1013 l 445 660 l 652 1013 l 894 1013 l 577 519 l 894 0 "},"*":{x_min:115,x_max:713,ha:828,o:"m 713 740 l 518 688 l 651 525 l 531 438 l 412 612 l 290 439 l 173 523 l 308 688 l 115 741 l 159 880 l 342 816 l 343 1013 l 482 1013 l 481 816 l 664 880 l 713 740 "},"\u2020":{x_min:0,x_max:809,ha:894,o:"m 509 804 l 809 804 l 809 621 l 509 621 l 509 0 l 299 0 l 299 621 l 0 621 l 0 804 l 299 804 l 299 1011 l 509 1011 l 509 804 "},"\xB0":{x_min:-1,x_max:363,ha:460,o:"m 181 808 q 46 862 94 808 q -1 992 -1 917 q 44 1118 -1 1066 q 181 1175 96 1175 q 317 1118 265 1175 q 363 991 363 1066 q 315 862 363 917 q 181 808 267 808 m 181 908 q 240 933 218 908 q 263 992 263 958 q 242 1051 263 1027 q 181 1075 221 1075 q 120 1050 142 1075 q 99 991 99 1026 q 120 933 99 958 q 181 908 142 908 "},V:{x_min:0,x_max:895.828125,ha:997,o:"m 895 1013 l 550 0 l 347 0 l 0 1013 l 231 1013 l 447 256 l 666 1013 l 895 1013 "},\u039E:{x_min:0,x_max:751.390625,ha:800,o:"m 733 826 l 5 826 l 5 1012 l 733 1012 l 733 826 m 681 432 l 65 432 l 65 617 l 681 617 l 681 432 m 751 0 l 0 0 l 0 183 l 751 183 l 751 0 "},"\xA0":{x_min:0,x_max:0,ha:853},\u03AB:{x_min:-.21875,x_max:836.171875,ha:914,o:"m 610 1046 l 454 1046 l 454 1215 l 610 1215 l 610 1046 m 369 1046 l 212 1046 l 212 1215 l 369 1215 l 369 1046 m 836 1012 l 532 376 l 532 0 l 322 0 l 322 376 l 0 1012 l 208 1012 l 427 576 l 626 1012 l 836 1012 "},"0":{x_min:51,x_max:779,ha:828,o:"m 415 -26 q 142 129 242 -26 q 51 476 51 271 q 141 825 51 683 q 415 984 242 984 q 687 825 585 984 q 779 476 779 682 q 688 131 779 271 q 415 -26 587 -26 m 415 137 q 529 242 485 137 q 568 477 568 338 q 530 713 568 619 q 415 821 488 821 q 303 718 344 821 q 262 477 262 616 q 301 237 262 337 q 415 137 341 137 "},"\u201D":{x_min:0,x_max:469,ha:567,o:"m 192 834 q 137 692 192 751 q 0 626 83 634 l 0 697 q 101 831 101 723 l 0 831 l 0 1013 l 192 1013 l 192 834 m 469 834 q 414 692 469 751 q 277 626 360 634 l 277 697 q 379 831 379 723 l 277 831 l 277 1013 l 469 1013 l 469 834 "},"@":{x_min:0,x_max:1276,ha:1374,o:"m 1115 -52 q 895 -170 1015 -130 q 647 -211 776 -211 q 158 -34 334 -211 q 0 360 0 123 q 179 810 0 621 q 698 1019 377 1019 q 1138 859 981 1019 q 1276 514 1276 720 q 1173 210 1276 335 q 884 75 1062 75 q 784 90 810 75 q 737 186 749 112 q 647 104 698 133 q 532 75 596 75 q 360 144 420 75 q 308 308 308 205 q 398 568 308 451 q 638 696 497 696 q 731 671 690 696 q 805 604 772 647 l 840 673 l 964 673 q 886 373 915 490 q 856 239 856 257 q 876 201 856 214 q 920 188 895 188 q 1084 284 1019 188 q 1150 511 1150 380 q 1051 779 1150 672 q 715 905 934 905 q 272 734 439 905 q 121 363 121 580 q 250 41 121 170 q 647 -103 394 -103 q 863 -67 751 -103 q 1061 26 975 -32 l 1115 -52 m 769 483 q 770 500 770 489 q 733 567 770 539 q 651 596 695 596 q 508 504 566 596 q 457 322 457 422 q 483 215 457 256 q 561 175 509 175 q 671 221 625 175 q 733 333 718 268 l 769 483 "},\u038A:{x_min:0,x_max:619,ha:732,o:"m 313 1035 l 98 780 l 0 780 l 136 1035 l 313 1035 m 619 0 l 411 0 l 411 1012 l 619 1012 l 619 0 "},i:{x_min:14,x_max:214,ha:326,o:"m 214 830 l 14 830 l 14 1013 l 214 1013 l 214 830 m 214 0 l 14 0 l 14 748 l 214 748 l 214 0 "},\u0392:{x_min:0,x_max:835,ha:961,o:"m 675 547 q 791 450 747 518 q 835 304 835 383 q 718 75 835 158 q 461 0 612 0 l 0 0 l 0 1013 l 477 1013 q 697 951 609 1013 q 797 754 797 880 q 766 630 797 686 q 675 547 734 575 m 439 621 q 539 646 496 621 q 590 730 590 676 q 537 814 590 785 q 436 838 494 838 l 199 838 l 199 621 l 439 621 m 445 182 q 561 211 513 182 q 618 311 618 247 q 565 410 618 375 q 444 446 512 446 l 199 446 l 199 182 l 445 182 "},\u03C5:{x_min:0,x_max:656,ha:767,o:"m 656 416 q 568 55 656 145 q 326 -25 490 -25 q 59 97 137 -25 q 0 369 0 191 l 0 749 l 200 749 l 200 369 q 216 222 200 268 q 326 142 245 142 q 440 247 411 142 q 456 422 456 304 l 456 749 l 656 749 l 656 416 "},"]":{x_min:0,x_max:349,ha:446,o:"m 349 -300 l 0 -300 l 0 -154 l 163 -154 l 163 866 l 0 866 l 0 1013 l 349 1013 l 349 -300 "},m:{x_min:0,x_max:1065,ha:1174,o:"m 1065 0 l 866 0 l 866 483 q 836 564 866 532 q 759 596 807 596 q 663 555 700 596 q 627 454 627 514 l 627 0 l 433 0 l 433 481 q 403 563 433 531 q 323 596 374 596 q 231 554 265 596 q 197 453 197 513 l 197 0 l 0 0 l 0 748 l 189 748 l 189 665 q 279 745 226 715 q 392 775 333 775 q 509 744 455 775 q 606 659 563 713 q 695 744 640 713 q 814 775 749 775 q 992 702 920 775 q 1065 523 1065 630 l 1065 0 "},\u03C7:{x_min:0,x_max:759.71875,ha:847,o:"m 759 -299 l 548 -299 l 379 66 l 215 -299 l 0 -299 l 261 233 l 13 749 l 230 749 l 379 400 l 527 749 l 738 749 l 500 238 l 759 -299 "},"8":{x_min:57,x_max:770,ha:828,o:"m 625 516 q 733 416 697 477 q 770 284 770 355 q 675 69 770 161 q 415 -29 574 -29 q 145 65 244 -29 q 57 273 57 150 q 93 413 57 350 q 204 516 130 477 q 112 609 142 556 q 83 718 83 662 q 177 905 83 824 q 414 986 272 986 q 650 904 555 986 q 745 715 745 822 q 716 608 745 658 q 625 516 688 558 m 414 590 q 516 624 479 590 q 553 706 553 659 q 516 791 553 755 q 414 828 480 828 q 311 792 348 828 q 275 706 275 757 q 310 624 275 658 q 414 590 345 590 m 413 135 q 527 179 487 135 q 564 279 564 218 q 525 386 564 341 q 411 436 482 436 q 298 387 341 436 q 261 282 261 344 q 300 178 261 222 q 413 135 340 135 "},\u03AF:{x_min:42,x_max:371.171875,ha:389,o:"m 242 0 l 42 0 l 42 748 l 242 748 l 242 0 m 371 1039 l 169 823 l 71 823 l 193 1039 l 371 1039 "},\u0396:{x_min:0,x_max:804.171875,ha:886,o:"m 804 835 l 251 182 l 793 182 l 793 0 l 0 0 l 0 176 l 551 829 l 11 829 l 11 1012 l 804 1012 l 804 835 "},R:{x_min:0,x_max:836.109375,ha:947,o:"m 836 0 l 608 0 q 588 53 596 20 q 581 144 581 86 q 581 179 581 162 q 581 215 581 197 q 553 345 581 306 q 428 393 518 393 l 208 393 l 208 0 l 0 0 l 0 1013 l 491 1013 q 720 944 630 1013 q 819 734 819 869 q 778 584 819 654 q 664 485 738 513 q 757 415 727 463 q 794 231 794 358 l 794 170 q 800 84 794 116 q 836 31 806 51 l 836 0 m 462 838 l 208 838 l 208 572 l 452 572 q 562 604 517 572 q 612 704 612 640 q 568 801 612 765 q 462 838 525 838 "},o:{x_min:0,x_max:764,ha:871,o:"m 380 -26 q 105 86 211 -26 q 0 371 0 199 q 104 660 0 545 q 380 775 209 775 q 658 659 552 775 q 764 371 764 544 q 658 86 764 199 q 380 -26 552 -26 m 379 141 q 515 216 466 141 q 557 373 557 280 q 515 530 557 465 q 379 607 466 607 q 245 530 294 607 q 204 373 204 465 q 245 217 204 282 q 379 141 294 141 "},"5":{x_min:59,x_max:767,ha:828,o:"m 767 319 q 644 59 767 158 q 382 -29 533 -29 q 158 43 247 -29 q 59 264 59 123 l 252 264 q 295 165 252 201 q 400 129 339 129 q 512 172 466 129 q 564 308 564 220 q 514 437 564 387 q 398 488 464 488 q 329 472 361 488 q 271 420 297 456 l 93 428 l 157 958 l 722 958 l 722 790 l 295 790 l 271 593 q 348 635 306 621 q 431 649 389 649 q 663 551 560 649 q 767 319 767 453 "},"7":{x_min:65.28125,x_max:762.5,ha:828,o:"m 762 808 q 521 435 604 626 q 409 0 438 244 l 205 0 q 313 422 227 234 q 548 789 387 583 l 65 789 l 65 958 l 762 958 l 762 808 "},K:{x_min:0,x_max:900,ha:996,o:"m 900 0 l 647 0 l 316 462 l 208 355 l 208 0 l 0 0 l 0 1013 l 208 1013 l 208 595 l 604 1013 l 863 1013 l 461 603 l 900 0 "},",":{x_min:0,x_max:206,ha:303,o:"m 206 5 q 150 -151 206 -88 q 0 -238 94 -213 l 0 -159 q 84 -100 56 -137 q 111 -2 111 -62 l 0 -2 l 0 205 l 206 205 l 206 5 "},d:{x_min:0,x_max:722,ha:836,o:"m 722 0 l 530 0 l 530 101 q 303 -26 449 -26 q 72 103 155 -26 q 0 373 0 214 q 72 642 0 528 q 305 775 156 775 q 433 743 373 775 q 530 656 492 712 l 530 1013 l 722 1013 l 722 0 m 361 600 q 234 523 280 600 q 196 372 196 458 q 233 220 196 286 q 358 143 278 143 q 489 216 442 143 q 530 369 530 280 q 491 522 530 456 q 361 600 443 600 "},"\xA8":{x_min:212,x_max:609,ha:933,o:"m 609 1046 l 453 1046 l 453 1216 l 609 1216 l 609 1046 m 369 1046 l 212 1046 l 212 1216 l 369 1216 l 369 1046 "},E:{x_min:0,x_max:761.109375,ha:824,o:"m 761 0 l 0 0 l 0 1013 l 734 1013 l 734 837 l 206 837 l 206 621 l 690 621 l 690 446 l 206 446 l 206 186 l 761 186 l 761 0 "},Y:{x_min:0,x_max:836,ha:931,o:"m 836 1013 l 532 376 l 532 0 l 322 0 l 322 376 l 0 1013 l 208 1013 l 427 576 l 626 1013 l 836 1013 "},'"':{x_min:0,x_max:357,ha:454,o:"m 357 604 l 225 604 l 225 988 l 357 988 l 357 604 m 132 604 l 0 604 l 0 988 l 132 988 l 132 604 "},"\u2039":{x_min:35.984375,x_max:791.671875,ha:828,o:"m 791 17 l 36 352 l 35 487 l 791 823 l 791 672 l 229 421 l 791 168 l 791 17 "},"\u201E":{x_min:0,x_max:483,ha:588,o:"m 206 5 q 150 -151 206 -88 q 0 -238 94 -213 l 0 -159 q 84 -100 56 -137 q 111 -2 111 -62 l 0 -2 l 0 205 l 206 205 l 206 5 m 483 5 q 427 -151 483 -88 q 277 -238 371 -213 l 277 -159 q 361 -100 334 -137 q 388 -2 388 -62 l 277 -2 l 277 205 l 483 205 l 483 5 "},\u03B4:{x_min:6,x_max:732,ha:835,o:"m 732 352 q 630 76 732 177 q 354 -25 529 -25 q 101 74 197 -25 q 6 333 6 174 q 89 581 6 480 q 323 690 178 690 q 66 864 201 787 l 66 1013 l 669 1013 l 669 856 l 348 856 q 532 729 461 789 q 673 566 625 651 q 732 352 732 465 m 419 551 q 259 496 321 551 q 198 344 198 441 q 238 208 198 267 q 357 140 283 140 q 484 203 437 140 q 526 344 526 260 q 499 466 526 410 q 419 551 473 521 "},\u03AD:{x_min:16.671875,x_max:652.78125,ha:742,o:"m 652 259 q 565 49 652 123 q 340 -25 479 -25 q 102 39 188 -25 q 16 197 16 104 q 45 299 16 250 q 134 390 75 348 q 58 456 86 419 q 25 552 25 502 q 120 717 25 653 q 322 776 208 776 q 537 710 456 776 q 625 508 625 639 l 445 508 q 415 585 445 563 q 327 608 386 608 q 254 590 293 608 q 215 544 215 573 q 252 469 215 490 q 336 453 280 453 q 369 455 347 453 q 400 456 391 456 l 400 308 l 329 308 q 247 291 280 308 q 204 223 204 269 q 255 154 204 172 q 345 143 286 143 q 426 174 398 143 q 454 259 454 206 l 652 259 m 579 1039 l 377 823 l 279 823 l 401 1039 l 579 1039 "},\u03C9:{x_min:0,x_max:945,ha:1051,o:"m 565 323 l 565 289 q 577 190 565 221 q 651 142 597 142 q 718 189 694 142 q 742 365 742 237 q 703 565 742 462 q 610 749 671 650 l 814 749 q 910 547 876 650 q 945 337 945 444 q 874 96 945 205 q 668 -29 793 -29 q 551 0 608 -29 q 470 78 495 30 q 390 0 444 28 q 276 -29 337 -29 q 69 96 149 -29 q 0 337 0 204 q 36 553 0 444 q 130 749 68 650 l 334 749 q 241 565 273 650 q 203 365 203 461 q 219 222 203 279 q 292 142 243 142 q 360 183 342 142 q 373 271 373 211 q 372 298 372 285 q 372 323 372 311 l 372 528 l 566 528 l 565 323 "},"\xB4":{x_min:0,x_max:132,ha:299,o:"m 132 604 l 0 604 l 0 988 l 132 988 l 132 604 "},"\xB1":{x_min:29,x_max:798,ha:828,o:"m 798 480 l 484 480 l 484 254 l 344 254 l 344 480 l 29 480 l 29 615 l 344 615 l 344 842 l 484 842 l 484 615 l 798 615 l 798 480 m 798 0 l 29 0 l 29 136 l 798 136 l 798 0 "},"|":{x_min:0,x_max:143,ha:240,o:"m 143 462 l 0 462 l 0 984 l 143 984 l 143 462 m 143 -242 l 0 -242 l 0 280 l 143 280 l 143 -242 "},\u03CB:{x_min:0,x_max:656,ha:767,o:"m 535 810 l 406 810 l 406 952 l 535 952 l 535 810 m 271 810 l 142 810 l 142 952 l 271 952 l 271 810 m 656 417 q 568 55 656 146 q 326 -25 490 -25 q 59 97 137 -25 q 0 369 0 192 l 0 748 l 200 748 l 200 369 q 216 222 200 268 q 326 142 245 142 q 440 247 411 142 q 456 422 456 304 l 456 748 l 656 748 l 656 417 "},"\xA7":{x_min:0,x_max:633,ha:731,o:"m 633 469 q 601 356 633 406 q 512 274 569 305 q 570 197 548 242 q 593 105 593 152 q 501 -76 593 -5 q 301 -142 416 -142 q 122 -82 193 -142 q 43 108 43 -15 l 212 108 q 251 27 220 53 q 321 1 283 1 q 389 23 360 1 q 419 83 419 46 q 310 194 419 139 q 108 297 111 295 q 0 476 0 372 q 33 584 0 537 q 120 659 62 626 q 72 720 91 686 q 53 790 53 755 q 133 978 53 908 q 312 1042 207 1042 q 483 984 412 1042 q 574 807 562 921 l 409 807 q 379 875 409 851 q 307 900 349 900 q 244 881 270 900 q 218 829 218 862 q 324 731 218 781 q 524 636 506 647 q 633 469 633 565 m 419 334 q 473 411 473 372 q 451 459 473 436 q 390 502 430 481 l 209 595 q 167 557 182 577 q 153 520 153 537 q 187 461 153 491 q 263 413 212 440 l 419 334 "},b:{x_min:0,x_max:722,ha:822,o:"m 416 -26 q 289 6 346 -26 q 192 101 232 39 l 192 0 l 0 0 l 0 1013 l 192 1013 l 192 656 q 286 743 226 712 q 415 775 346 775 q 649 644 564 775 q 722 374 722 533 q 649 106 722 218 q 416 -26 565 -26 m 361 600 q 232 524 279 600 q 192 371 192 459 q 229 221 192 284 q 357 145 275 145 q 487 221 441 145 q 526 374 526 285 q 488 523 526 460 q 361 600 442 600 "},q:{x_min:0,x_max:722,ha:833,o:"m 722 -298 l 530 -298 l 530 97 q 306 -25 449 -25 q 73 104 159 -25 q 0 372 0 216 q 72 643 0 529 q 305 775 156 775 q 430 742 371 775 q 530 654 488 709 l 530 750 l 722 750 l 722 -298 m 360 601 q 234 527 278 601 q 197 378 197 466 q 233 225 197 291 q 357 144 277 144 q 488 217 441 144 q 530 370 530 282 q 491 523 530 459 q 360 601 443 601 "},\u03A9:{x_min:-.03125,x_max:1008.53125,ha:1108,o:"m 1008 0 l 589 0 l 589 199 q 717 368 670 265 q 764 580 764 471 q 698 778 764 706 q 504 855 629 855 q 311 773 380 855 q 243 563 243 691 q 289 360 243 458 q 419 199 336 262 l 419 0 l 0 0 l 0 176 l 202 176 q 77 355 123 251 q 32 569 32 459 q 165 908 32 776 q 505 1040 298 1040 q 844 912 711 1040 q 977 578 977 785 q 931 362 977 467 q 805 176 886 256 l 1008 176 l 1008 0 "},\u03CD:{x_min:0,x_max:656,ha:767,o:"m 656 417 q 568 55 656 146 q 326 -25 490 -25 q 59 97 137 -25 q 0 369 0 192 l 0 748 l 200 748 l 201 369 q 218 222 201 269 q 326 142 245 142 q 440 247 411 142 q 456 422 456 304 l 456 748 l 656 748 l 656 417 m 579 1039 l 378 823 l 279 823 l 401 1039 l 579 1039 "},z:{x_min:0,x_max:663.890625,ha:753,o:"m 663 0 l 0 0 l 0 154 l 411 591 l 25 591 l 25 749 l 650 749 l 650 584 l 245 165 l 663 165 l 663 0 "},"\u2122":{x_min:0,x_max:951,ha:1063,o:"m 405 921 l 255 921 l 255 506 l 149 506 l 149 921 l 0 921 l 0 1013 l 405 1013 l 405 921 m 951 506 l 852 506 l 852 916 l 750 506 l 643 506 l 539 915 l 539 506 l 442 506 l 442 1013 l 595 1012 l 695 625 l 794 1013 l 951 1013 l 951 506 "},\u03AE:{x_min:0,x_max:669,ha:779,o:"m 669 -278 l 469 -278 l 469 390 q 448 526 469 473 q 348 606 417 606 q 244 553 288 606 q 201 441 201 501 l 201 0 l 0 0 l 0 749 l 201 749 l 201 665 q 301 744 244 715 q 423 774 359 774 q 606 685 538 774 q 669 484 669 603 l 669 -278 m 495 1039 l 293 823 l 195 823 l 317 1039 l 495 1039 "},\u0398:{x_min:0,x_max:993,ha:1092,o:"m 497 -29 q 133 127 272 -29 q 0 505 0 277 q 133 883 0 733 q 497 1040 272 1040 q 861 883 722 1040 q 993 505 993 733 q 861 127 993 277 q 497 -29 722 -29 m 497 154 q 711 266 631 154 q 782 506 782 367 q 712 746 782 648 q 497 858 634 858 q 281 746 361 858 q 211 506 211 648 q 280 266 211 365 q 497 154 359 154 m 676 430 l 316 430 l 316 593 l 676 593 l 676 430 "},"\xAE":{x_min:3,x_max:1007,ha:1104,o:"m 507 -6 q 129 153 269 -6 q 3 506 3 298 q 127 857 3 713 q 502 1017 266 1017 q 880 855 740 1017 q 1007 502 1007 711 q 882 152 1007 295 q 507 -6 743 -6 m 502 934 q 184 800 302 934 q 79 505 79 680 q 184 210 79 331 q 501 76 302 76 q 819 210 701 76 q 925 507 925 331 q 820 800 925 682 q 502 934 704 934 m 782 190 l 639 190 q 627 225 632 202 q 623 285 623 248 l 623 326 q 603 411 623 384 q 527 439 584 439 l 388 439 l 388 190 l 257 190 l 257 829 l 566 829 q 709 787 654 829 q 772 654 772 740 q 746 559 772 604 q 675 497 720 514 q 735 451 714 483 q 756 341 756 419 l 756 299 q 760 244 756 265 q 782 212 764 223 l 782 190 m 546 718 l 388 718 l 388 552 l 541 552 q 612 572 584 552 q 641 635 641 593 q 614 695 641 672 q 546 718 587 718 "},"~":{x_min:0,x_max:851,ha:949,o:"m 851 968 q 795 750 851 831 q 599 656 730 656 q 406 744 506 656 q 259 832 305 832 q 162 775 193 832 q 139 656 139 730 l 0 656 q 58 871 0 787 q 251 968 124 968 q 442 879 341 968 q 596 791 544 791 q 691 849 663 791 q 712 968 712 892 l 851 968 "},\u0395:{x_min:0,x_max:761.546875,ha:824,o:"m 761 0 l 0 0 l 0 1012 l 735 1012 l 735 836 l 206 836 l 206 621 l 690 621 l 690 446 l 206 446 l 206 186 l 761 186 l 761 0 "},"\xB3":{x_min:0,x_max:467,ha:564,o:"m 467 555 q 393 413 467 466 q 229 365 325 365 q 70 413 134 365 q 0 565 0 467 l 123 565 q 163 484 131 512 q 229 461 190 461 q 299 486 269 461 q 329 553 329 512 q 281 627 329 607 q 187 641 248 641 l 187 722 q 268 737 237 722 q 312 804 312 758 q 285 859 312 837 q 224 882 259 882 q 165 858 189 882 q 135 783 140 834 l 12 783 q 86 930 20 878 q 230 976 145 976 q 379 931 314 976 q 444 813 444 887 q 423 744 444 773 q 365 695 402 716 q 439 640 412 676 q 467 555 467 605 "},"[":{x_min:0,x_max:347.21875,ha:444,o:"m 347 -300 l 0 -300 l 0 1013 l 347 1013 l 347 866 l 188 866 l 188 -154 l 347 -154 l 347 -300 "},L:{x_min:0,x_max:704.171875,ha:763,o:"m 704 0 l 0 0 l 0 1013 l 208 1013 l 208 186 l 704 186 l 704 0 "},\u03C3:{x_min:0,x_max:851.3125,ha:940,o:"m 851 594 l 712 594 q 761 369 761 485 q 658 83 761 191 q 379 -25 555 -25 q 104 87 208 -25 q 0 372 0 200 q 103 659 0 544 q 378 775 207 775 q 464 762 407 775 q 549 750 521 750 l 851 750 l 851 594 m 379 142 q 515 216 466 142 q 557 373 557 280 q 515 530 557 465 q 379 608 465 608 q 244 530 293 608 q 203 373 203 465 q 244 218 203 283 q 379 142 293 142 "},\u03B6:{x_min:0,x_max:622,ha:701,o:"m 622 -32 q 604 -158 622 -98 q 551 -278 587 -218 l 373 -278 q 426 -180 406 -229 q 446 -80 446 -131 q 421 -22 446 -37 q 354 -8 397 -8 q 316 -9 341 -8 q 280 -11 291 -11 q 75 69 150 -11 q 0 283 0 150 q 87 596 0 437 q 291 856 162 730 l 47 856 l 47 1013 l 592 1013 l 592 904 q 317 660 422 800 q 197 318 197 497 q 306 141 197 169 q 510 123 408 131 q 622 -32 622 102 "},\u03B8:{x_min:0,x_max:714,ha:817,o:"m 357 1022 q 633 833 534 1022 q 714 486 714 679 q 634 148 714 288 q 354 -25 536 -25 q 79 147 175 -25 q 0 481 0 288 q 79 831 0 679 q 357 1022 177 1022 m 510 590 q 475 763 510 687 q 351 862 430 862 q 233 763 272 862 q 204 590 204 689 l 510 590 m 510 440 l 204 440 q 233 251 204 337 q 355 131 274 131 q 478 248 434 131 q 510 440 510 337 "},\u039F:{x_min:0,x_max:995,ha:1092,o:"m 497 -29 q 133 127 272 -29 q 0 505 0 277 q 132 883 0 733 q 497 1040 270 1040 q 861 883 722 1040 q 995 505 995 733 q 862 127 995 277 q 497 -29 724 -29 m 497 154 q 711 266 632 154 q 781 506 781 365 q 711 745 781 647 q 497 857 632 857 q 283 747 361 857 q 213 506 213 647 q 282 266 213 365 q 497 154 361 154 "},\u0393:{x_min:0,x_max:703.84375,ha:742,o:"m 703 836 l 208 836 l 208 0 l 0 0 l 0 1012 l 703 1012 l 703 836 "}," ":{x_min:0,x_max:0,ha:375},"%":{x_min:0,x_max:1111,ha:1213,o:"m 861 484 q 1048 404 979 484 q 1111 228 1111 332 q 1048 51 1111 123 q 859 -29 979 -29 q 672 50 740 -29 q 610 227 610 122 q 672 403 610 331 q 861 484 741 484 m 861 120 q 939 151 911 120 q 967 226 967 183 q 942 299 967 270 q 861 333 912 333 q 783 301 811 333 q 756 226 756 269 q 783 151 756 182 q 861 120 810 120 m 904 984 l 316 -28 l 205 -29 l 793 983 l 904 984 m 250 984 q 436 904 366 984 q 499 730 499 832 q 436 552 499 626 q 248 472 366 472 q 62 552 132 472 q 0 728 0 624 q 62 903 0 831 q 250 984 132 984 m 249 835 q 169 801 198 835 q 140 725 140 768 q 167 652 140 683 q 247 621 195 621 q 327 654 298 621 q 357 730 357 687 q 329 803 357 772 q 249 835 301 835 "},P:{x_min:0,x_max:771,ha:838,o:"m 208 361 l 208 0 l 0 0 l 0 1013 l 450 1013 q 682 919 593 1013 q 771 682 771 826 q 687 452 771 544 q 466 361 604 361 l 208 361 m 421 837 l 208 837 l 208 544 l 410 544 q 525 579 480 544 q 571 683 571 615 q 527 792 571 747 q 421 837 484 837 "},\u0388:{x_min:0,x_max:1172.546875,ha:1235,o:"m 1172 0 l 411 0 l 411 1012 l 1146 1012 l 1146 836 l 617 836 l 617 621 l 1101 621 l 1101 446 l 617 446 l 617 186 l 1172 186 l 1172 0 m 313 1035 l 98 780 l 0 780 l 136 1035 l 313 1035 "},\u038F:{x_min:.4375,x_max:1189.546875,ha:1289,o:"m 1189 0 l 770 0 l 770 199 q 897 369 849 263 q 945 580 945 474 q 879 778 945 706 q 685 855 810 855 q 492 773 561 855 q 424 563 424 691 q 470 360 424 458 q 600 199 517 262 l 600 0 l 180 0 l 180 176 l 383 176 q 258 355 304 251 q 213 569 213 459 q 346 908 213 776 q 686 1040 479 1040 q 1025 912 892 1040 q 1158 578 1158 785 q 1112 362 1158 467 q 986 176 1067 256 l 1189 176 l 1189 0 m 314 1092 l 99 837 l 0 837 l 136 1092 l 314 1092 "},_:{x_min:61.109375,x_max:766.671875,ha:828,o:"m 766 -333 l 61 -333 l 61 -190 l 766 -190 l 766 -333 "},\u03AA:{x_min:-56,x_max:342,ha:503,o:"m 342 1046 l 186 1046 l 186 1215 l 342 1215 l 342 1046 m 101 1046 l -56 1046 l -56 1215 l 101 1215 l 101 1046 m 249 0 l 41 0 l 41 1012 l 249 1012 l 249 0 "},"+":{x_min:43,x_max:784,ha:828,o:"m 784 353 l 483 353 l 483 0 l 343 0 l 343 353 l 43 353 l 43 489 l 343 489 l 343 840 l 483 840 l 483 489 l 784 489 l 784 353 "},"\xBD":{x_min:0,x_max:1090,ha:1188,o:"m 1090 380 q 992 230 1090 301 q 779 101 886 165 q 822 94 784 95 q 924 93 859 93 l 951 93 l 973 93 l 992 93 l 1009 93 q 1046 93 1027 93 q 1085 93 1066 93 l 1085 0 l 650 0 l 654 38 q 815 233 665 137 q 965 376 965 330 q 936 436 965 412 q 869 461 908 461 q 806 435 831 461 q 774 354 780 409 l 659 354 q 724 505 659 451 q 870 554 783 554 q 1024 506 958 554 q 1090 380 1090 459 m 868 998 l 268 -28 l 154 -27 l 757 999 l 868 998 m 272 422 l 147 422 l 147 799 l 0 799 l 0 875 q 126 900 91 875 q 170 973 162 926 l 272 973 l 272 422 "},\u03A1:{x_min:0,x_max:771,ha:838,o:"m 208 361 l 208 0 l 0 0 l 0 1012 l 450 1012 q 682 919 593 1012 q 771 681 771 826 q 687 452 771 544 q 466 361 604 361 l 208 361 m 422 836 l 209 836 l 209 544 l 410 544 q 525 579 480 544 q 571 683 571 614 q 527 791 571 747 q 422 836 484 836 "},"'":{x_min:0,x_max:192,ha:289,o:"m 192 834 q 137 692 192 751 q 0 626 82 632 l 0 697 q 101 830 101 726 l 0 830 l 0 1013 l 192 1013 l 192 834 "},\u00AA:{x_min:0,x_max:350,ha:393,o:"m 350 625 l 245 625 q 237 648 241 636 q 233 672 233 661 q 117 611 192 611 q 33 643 66 611 q 0 727 0 675 q 116 846 0 828 q 233 886 233 864 q 211 919 233 907 q 168 931 190 931 q 108 877 108 931 l 14 877 q 56 977 14 942 q 165 1013 98 1013 q 270 987 224 1013 q 329 903 329 955 l 329 694 q 332 661 329 675 q 350 641 336 648 l 350 625 m 233 774 l 233 809 q 151 786 180 796 q 97 733 97 768 q 111 700 97 712 q 149 689 126 689 q 210 713 187 689 q 233 774 233 737 "},"\u0385":{x_min:57,x_max:584,ha:753,o:"m 584 810 l 455 810 l 455 952 l 584 952 l 584 810 m 521 1064 l 305 810 l 207 810 l 343 1064 l 521 1064 m 186 810 l 57 810 l 57 952 l 186 952 l 186 810 "},T:{x_min:0,x_max:809,ha:894,o:"m 809 831 l 509 831 l 509 0 l 299 0 l 299 831 l 0 831 l 0 1013 l 809 1013 l 809 831 "},\u03A6:{x_min:0,x_max:949,ha:1032,o:"m 566 0 l 385 0 l 385 121 q 111 230 222 121 q 0 508 0 340 q 112 775 0 669 q 385 892 219 875 l 385 1013 l 566 1013 l 566 892 q 836 776 732 875 q 949 507 949 671 q 838 231 949 341 q 566 121 728 121 l 566 0 m 566 285 q 701 352 650 285 q 753 508 753 419 q 703 658 753 597 q 566 729 653 720 l 566 285 m 385 285 l 385 729 q 245 661 297 717 q 193 516 193 604 q 246 356 193 427 q 385 285 300 285 "},j:{x_min:-45.828125,x_max:242,ha:361,o:"m 242 830 l 42 830 l 42 1013 l 242 1013 l 242 830 m 242 -119 q 180 -267 242 -221 q 20 -308 127 -308 l -45 -308 l -45 -140 l -24 -140 q 25 -130 8 -140 q 42 -88 42 -120 l 42 748 l 242 748 l 242 -119 "},\u03A3:{x_min:0,x_max:772.21875,ha:849,o:"m 772 0 l 0 0 l 0 140 l 368 526 l 18 862 l 18 1012 l 740 1012 l 740 836 l 315 836 l 619 523 l 298 175 l 772 175 l 772 0 "},"1":{x_min:197.609375,x_max:628,ha:828,o:"m 628 0 l 434 0 l 434 674 l 197 674 l 197 810 q 373 837 318 810 q 468 984 450 876 l 628 984 l 628 0 "},"\u203A":{x_min:36.109375,x_max:792,ha:828,o:"m 792 352 l 36 17 l 36 168 l 594 420 l 36 672 l 36 823 l 792 487 l 792 352 "},"<":{x_min:35.984375,x_max:791.671875,ha:828,o:"m 791 17 l 36 352 l 35 487 l 791 823 l 791 672 l 229 421 l 791 168 l 791 17 "},"\xA3":{x_min:0,x_max:716.546875,ha:814,o:"m 716 38 q 603 -9 658 5 q 502 -24 548 -24 q 398 -10 451 -24 q 239 25 266 25 q 161 12 200 25 q 77 -29 122 0 l 0 113 q 110 211 81 174 q 151 315 151 259 q 117 440 151 365 l 0 440 l 0 515 l 73 515 q 35 610 52 560 q 15 710 15 671 q 119 910 15 831 q 349 984 216 984 q 570 910 480 984 q 693 668 674 826 l 501 668 q 455 791 501 746 q 353 830 414 830 q 256 795 298 830 q 215 705 215 760 q 249 583 215 655 q 283 515 266 548 l 479 515 l 479 440 l 309 440 q 316 394 313 413 q 319 355 319 374 q 287 241 319 291 q 188 135 263 205 q 262 160 225 152 q 332 168 298 168 q 455 151 368 168 q 523 143 500 143 q 588 152 558 143 q 654 189 617 162 l 716 38 "},t:{x_min:0,x_max:412,ha:511,o:"m 412 -6 q 349 -8 391 -6 q 287 -11 307 -11 q 137 38 177 -11 q 97 203 97 87 l 97 609 l 0 609 l 0 749 l 97 749 l 97 951 l 297 951 l 297 749 l 412 749 l 412 609 l 297 609 l 297 191 q 315 152 297 162 q 366 143 334 143 q 389 143 378 143 q 412 143 400 143 l 412 -6 "},"\xAC":{x_min:0,x_max:704,ha:801,o:"m 704 93 l 551 93 l 551 297 l 0 297 l 0 450 l 704 450 l 704 93 "},\u03BB:{x_min:0,x_max:701.390625,ha:775,o:"m 701 0 l 491 0 l 345 444 l 195 0 l 0 0 l 238 697 l 131 1013 l 334 1013 l 701 0 "},W:{x_min:0,x_max:1291.671875,ha:1399,o:"m 1291 1013 l 1002 0 l 802 0 l 645 777 l 490 0 l 288 0 l 0 1013 l 215 1013 l 388 298 l 534 1012 l 757 1013 l 904 299 l 1076 1013 l 1291 1013 "},">":{x_min:36.109375,x_max:792,ha:828,o:"m 792 352 l 36 17 l 36 168 l 594 420 l 36 672 l 36 823 l 792 487 l 792 352 "},v:{x_min:0,x_max:740.28125,ha:828,o:"m 740 749 l 473 0 l 266 0 l 0 749 l 222 749 l 373 211 l 529 749 l 740 749 "},\u03C4:{x_min:.28125,x_max:618.734375,ha:699,o:"m 618 593 l 409 593 l 409 0 l 210 0 l 210 593 l 0 593 l 0 749 l 618 749 l 618 593 "},\u03BE:{x_min:0,x_max:640,ha:715,o:"m 640 -14 q 619 -157 640 -84 q 563 -299 599 -230 l 399 -299 q 442 -194 433 -223 q 468 -85 468 -126 q 440 -25 468 -41 q 368 -10 412 -10 q 333 -11 355 -10 q 302 -13 311 -13 q 91 60 179 -13 q 0 259 0 138 q 56 426 0 354 q 201 530 109 493 q 106 594 144 553 q 65 699 65 642 q 94 787 65 747 q 169 856 123 828 l 22 856 l 22 1013 l 597 1013 l 597 856 l 497 857 q 345 840 398 857 q 257 736 257 812 q 366 614 257 642 q 552 602 416 602 l 552 446 l 513 446 q 313 425 379 446 q 199 284 199 389 q 312 162 199 184 q 524 136 418 148 q 640 -14 640 105 "},"&":{x_min:-1,x_max:910.109375,ha:1007,o:"m 910 -1 l 676 -1 l 607 83 q 291 -47 439 -47 q 50 100 135 -47 q -1 273 -1 190 q 51 431 -1 357 q 218 568 104 505 q 151 661 169 629 q 120 769 120 717 q 201 951 120 885 q 382 1013 276 1013 q 555 957 485 1013 q 635 789 635 894 q 584 644 635 709 q 468 539 548 597 l 615 359 q 664 527 654 440 l 844 527 q 725 223 824 359 l 910 -1 m 461 787 q 436 848 461 826 q 381 870 412 870 q 325 849 349 870 q 301 792 301 829 q 324 719 301 757 q 372 660 335 703 q 430 714 405 680 q 461 787 461 753 m 500 214 l 318 441 q 198 286 198 363 q 225 204 198 248 q 347 135 268 135 q 425 153 388 135 q 500 214 462 172 "},\u039B:{x_min:0,x_max:894.453125,ha:974,o:"m 894 0 l 666 0 l 447 757 l 225 0 l 0 0 l 344 1013 l 547 1013 l 894 0 "},I:{x_min:41,x_max:249,ha:365,o:"m 249 0 l 41 0 l 41 1013 l 249 1013 l 249 0 "},G:{x_min:0,x_max:971,ha:1057,o:"m 971 -1 l 829 -1 l 805 118 q 479 -29 670 -29 q 126 133 261 -29 q 0 509 0 286 q 130 884 0 737 q 493 1040 268 1040 q 790 948 659 1040 q 961 698 920 857 l 736 698 q 643 813 709 769 q 500 857 578 857 q 285 746 364 857 q 213 504 213 644 q 285 263 213 361 q 505 154 365 154 q 667 217 598 154 q 761 374 736 280 l 548 374 l 548 548 l 971 548 l 971 -1 "},\u03B0:{x_min:0,x_max:655,ha:767,o:"m 583 810 l 454 810 l 454 952 l 583 952 l 583 810 m 186 810 l 57 809 l 57 952 l 186 952 l 186 810 m 516 1039 l 315 823 l 216 823 l 338 1039 l 516 1039 m 655 417 q 567 55 655 146 q 326 -25 489 -25 q 59 97 137 -25 q 0 369 0 192 l 0 748 l 200 748 l 201 369 q 218 222 201 269 q 326 142 245 142 q 439 247 410 142 q 455 422 455 304 l 455 748 l 655 748 l 655 417 "},"`":{x_min:0,x_max:190,ha:288,o:"m 190 654 l 0 654 l 0 830 q 55 970 0 909 q 190 1040 110 1031 l 190 969 q 111 922 134 952 q 88 836 88 892 l 190 836 l 190 654 "},"\xB7":{x_min:0,x_max:207,ha:304,o:"m 207 528 l 0 528 l 0 735 l 207 735 l 207 528 "},\u03A5:{x_min:-.21875,x_max:836.171875,ha:914,o:"m 836 1013 l 532 376 l 532 0 l 322 0 l 322 376 l 0 1013 l 208 1013 l 427 576 l 626 1013 l 836 1013 "},r:{x_min:0,x_max:431.9375,ha:513,o:"m 431 564 q 269 536 320 564 q 200 395 200 498 l 200 0 l 0 0 l 0 748 l 183 748 l 183 618 q 285 731 224 694 q 431 768 345 768 l 431 564 "},x:{x_min:0,x_max:738.890625,ha:826,o:"m 738 0 l 504 0 l 366 238 l 230 0 l 0 0 l 252 382 l 11 749 l 238 749 l 372 522 l 502 749 l 725 749 l 488 384 l 738 0 "},\u03BC:{x_min:0,x_max:647,ha:754,o:"m 647 0 l 477 0 l 477 68 q 411 9 448 30 q 330 -11 374 -11 q 261 3 295 -11 q 199 43 226 18 l 199 -278 l 0 -278 l 0 749 l 199 749 l 199 358 q 216 222 199 268 q 322 152 244 152 q 435 240 410 152 q 448 401 448 283 l 448 749 l 647 749 l 647 0 "},h:{x_min:0,x_max:669,ha:782,o:"m 669 0 l 469 0 l 469 390 q 449 526 469 472 q 353 607 420 607 q 248 554 295 607 q 201 441 201 501 l 201 0 l 0 0 l 0 1013 l 201 1013 l 201 665 q 303 743 245 715 q 425 772 362 772 q 609 684 542 772 q 669 484 669 605 l 669 0 "},".":{x_min:0,x_max:206,ha:303,o:"m 206 0 l 0 0 l 0 207 l 206 207 l 206 0 "},\u03C6:{x_min:-1,x_max:921,ha:990,o:"m 542 -278 l 367 -278 l 367 -22 q 99 92 200 -22 q -1 376 -1 206 q 72 627 -1 520 q 288 769 151 742 l 288 581 q 222 495 243 550 q 202 378 202 439 q 240 228 202 291 q 367 145 285 157 l 367 776 l 515 776 q 807 667 694 776 q 921 379 921 558 q 815 93 921 209 q 542 -22 709 -22 l 542 -278 m 542 145 q 672 225 625 145 q 713 381 713 291 q 671 536 713 470 q 542 611 624 611 l 542 145 "},";":{x_min:0,x_max:208,ha:306,o:"m 208 528 l 0 528 l 0 735 l 208 735 l 208 528 m 208 6 q 152 -151 208 -89 q 0 -238 96 -212 l 0 -158 q 87 -100 61 -136 q 113 0 113 -65 l 0 0 l 0 207 l 208 207 l 208 6 "},f:{x_min:0,x_max:424,ha:525,o:"m 424 609 l 300 609 l 300 0 l 107 0 l 107 609 l 0 609 l 0 749 l 107 749 q 145 949 107 894 q 328 1019 193 1019 l 424 1015 l 424 855 l 362 855 q 312 841 324 855 q 300 797 300 827 q 300 773 300 786 q 300 749 300 761 l 424 749 l 424 609 "},"\u201C":{x_min:0,x_max:468,ha:567,o:"m 190 631 l 0 631 l 0 807 q 55 947 0 885 q 190 1017 110 1010 l 190 947 q 88 813 88 921 l 190 813 l 190 631 m 468 631 l 278 631 l 278 807 q 333 947 278 885 q 468 1017 388 1010 l 468 947 q 366 813 366 921 l 468 813 l 468 631 "},A:{x_min:0,x_max:966.671875,ha:1069,o:"m 966 0 l 747 0 l 679 208 l 286 208 l 218 0 l 0 0 l 361 1013 l 600 1013 l 966 0 m 623 376 l 480 810 l 340 376 l 623 376 "},"6":{x_min:57,x_max:771,ha:828,o:"m 744 734 l 544 734 q 500 802 533 776 q 425 828 466 828 q 315 769 359 828 q 264 571 264 701 q 451 638 343 638 q 691 537 602 638 q 771 315 771 449 q 683 79 771 176 q 420 -29 586 -29 q 134 123 227 -29 q 57 455 57 250 q 184 865 57 721 q 452 988 293 988 q 657 916 570 988 q 744 734 744 845 m 426 128 q 538 178 498 128 q 578 300 578 229 q 538 422 578 372 q 415 479 493 479 q 303 430 342 479 q 264 313 264 381 q 308 184 264 240 q 426 128 352 128 "},"\u2018":{x_min:0,x_max:190,ha:289,o:"m 190 631 l 0 631 l 0 807 q 55 947 0 885 q 190 1017 110 1010 l 190 947 q 88 813 88 921 l 190 813 l 190 631 "},\u03CA:{x_min:-55,x_max:337,ha:389,o:"m 337 810 l 208 810 l 208 952 l 337 952 l 337 810 m 74 810 l -55 810 l -55 952 l 74 952 l 74 810 m 242 0 l 42 0 l 42 748 l 242 748 l 242 0 "},\u03C0:{x_min:.5,x_max:838.890625,ha:938,o:"m 838 593 l 750 593 l 750 0 l 549 0 l 549 593 l 287 593 l 287 0 l 88 0 l 88 593 l 0 593 l 0 749 l 838 749 l 838 593 "},\u03AC:{x_min:-1,x_max:722,ha:835,o:"m 722 0 l 531 0 l 530 101 q 433 8 491 41 q 304 -25 375 -25 q 72 104 157 -25 q -1 372 -1 216 q 72 643 -1 530 q 308 775 158 775 q 433 744 375 775 q 528 656 491 713 l 528 749 l 722 749 l 722 0 m 361 601 q 233 527 277 601 q 196 375 196 464 q 232 224 196 288 q 358 144 277 144 q 487 217 441 144 q 528 370 528 281 q 489 523 528 457 q 361 601 443 601 m 579 1039 l 377 823 l 279 823 l 401 1039 l 579 1039 "},O:{x_min:0,x_max:994,ha:1094,o:"m 497 -29 q 133 127 272 -29 q 0 505 0 277 q 131 883 0 733 q 497 1040 270 1040 q 860 883 721 1040 q 994 505 994 733 q 862 127 994 277 q 497 -29 723 -29 m 497 154 q 710 266 631 154 q 780 506 780 365 q 710 745 780 647 q 497 857 631 857 q 283 747 361 857 q 213 506 213 647 q 282 266 213 365 q 497 154 361 154 "},n:{x_min:0,x_max:669,ha:782,o:"m 669 0 l 469 0 l 469 452 q 442 553 469 513 q 352 601 412 601 q 245 553 290 601 q 200 441 200 505 l 200 0 l 0 0 l 0 748 l 194 748 l 194 659 q 289 744 230 713 q 416 775 349 775 q 600 700 531 775 q 669 509 669 626 l 669 0 "},"3":{x_min:61,x_max:767,ha:828,o:"m 767 290 q 653 51 767 143 q 402 -32 548 -32 q 168 48 262 -32 q 61 300 61 140 l 250 300 q 298 173 250 219 q 405 132 343 132 q 514 169 471 132 q 563 282 563 211 q 491 405 563 369 q 343 432 439 432 l 343 568 q 472 592 425 568 q 534 701 534 626 q 493 793 534 758 q 398 829 453 829 q 306 789 344 829 q 268 669 268 749 l 80 669 q 182 909 80 823 q 410 986 274 986 q 633 916 540 986 q 735 719 735 840 q 703 608 735 656 q 615 522 672 561 q 727 427 687 486 q 767 290 767 369 "},"9":{x_min:58,x_max:769,ha:828,o:"m 769 492 q 646 90 769 232 q 384 -33 539 -33 q 187 35 271 -33 q 83 224 98 107 l 282 224 q 323 154 286 182 q 404 127 359 127 q 513 182 471 127 q 563 384 563 248 q 475 335 532 355 q 372 315 418 315 q 137 416 224 315 q 58 642 58 507 q 144 877 58 781 q 407 984 239 984 q 694 827 602 984 q 769 492 769 699 m 416 476 q 525 521 488 476 q 563 632 563 566 q 521 764 563 709 q 403 826 474 826 q 297 773 337 826 q 258 649 258 720 q 295 530 258 577 q 416 476 339 476 "},l:{x_min:41,x_max:240,ha:363,o:"m 240 0 l 41 0 l 41 1013 l 240 1013 l 240 0 "},"\xA4":{x_min:40.265625,x_max:727.203125,ha:825,o:"m 727 792 l 594 659 q 620 552 620 609 q 598 459 620 504 l 725 331 l 620 224 l 491 352 q 382 331 443 331 q 273 352 322 331 l 144 224 l 40 330 l 167 459 q 147 552 147 501 q 172 658 147 608 l 40 794 l 147 898 l 283 759 q 383 776 330 776 q 482 759 434 776 l 620 898 l 727 792 m 383 644 q 308 617 334 644 q 283 551 283 590 q 309 489 283 517 q 381 462 335 462 q 456 488 430 462 q 482 554 482 515 q 455 616 482 588 q 383 644 429 644 "},\u03BA:{x_min:0,x_max:691.84375,ha:779,o:"m 691 0 l 479 0 l 284 343 l 196 252 l 196 0 l 0 0 l 0 749 l 196 749 l 196 490 l 440 749 l 677 749 l 416 479 l 691 0 "},"4":{x_min:53,x_max:775.21875,ha:828,o:"m 775 213 l 660 213 l 660 0 l 470 0 l 470 213 l 53 213 l 53 384 l 416 958 l 660 958 l 660 370 l 775 370 l 775 213 m 474 364 l 474 786 l 204 363 l 474 364 "},p:{x_min:0,x_max:722,ha:824,o:"m 415 -26 q 287 4 346 -26 q 192 92 228 34 l 192 -298 l 0 -298 l 0 750 l 192 750 l 192 647 q 289 740 230 706 q 416 775 347 775 q 649 645 566 775 q 722 375 722 534 q 649 106 722 218 q 415 -26 564 -26 m 363 603 q 232 529 278 603 q 192 375 192 465 q 230 222 192 286 q 360 146 276 146 q 487 221 441 146 q 526 371 526 285 q 488 523 526 458 q 363 603 443 603 "},"\u2021":{x_min:0,x_max:809,ha:894,o:"m 299 621 l 0 621 l 0 804 l 299 804 l 299 1011 l 509 1011 l 509 804 l 809 804 l 809 621 l 509 621 l 509 387 l 809 387 l 809 205 l 509 205 l 509 0 l 299 0 l 299 205 l 0 205 l 0 387 l 299 387 l 299 621 "},\u03C8:{x_min:0,x_max:875,ha:979,o:"m 522 142 q 657 274 620 163 q 671 352 671 316 l 671 748 l 875 748 l 875 402 q 806 134 875 240 q 525 -22 719 -1 l 525 -278 l 349 -278 l 349 -22 q 65 135 152 -1 q 0 402 0 238 l 0 748 l 204 748 l 204 352 q 231 240 204 295 q 353 142 272 159 l 353 922 l 524 922 l 522 142 "},\u03B7:{x_min:0,x_max:669,ha:779,o:"m 669 -278 l 469 -278 l 469 390 q 448 526 469 473 q 348 606 417 606 q 244 553 288 606 q 201 441 201 501 l 201 0 l 0 0 l 0 749 l 201 749 l 201 665 q 301 744 244 715 q 423 774 359 774 q 606 685 538 774 q 669 484 669 603 l 669 -278 "}},cssFontWeight:"bold",ascender:1216,underlinePosition:-100,cssFontStyle:"normal",boundingBox:{yMin:-333,xMin:-162,yMax:1216,xMax:1681},resolution:1e3,original_font_information:{postscript_name:"Helvetiker-Bold",version_string:"Version 1.00 2004 initial release",vendor_url:"http://www.magenta.gr",full_font_name:"Helvetiker Bold",font_family_name:"Helvetiker",copyright:"Copyright (c) Magenta ltd, 2004.",description:"",trademark:"",designer:"",designer_url:"",unique_font_identifier:"Magenta ltd:Helvetiker Bold:22-10-104",license_url:"http://www.ellak.gr/fonts/MgOpen/license.html",license_description:`Copyright (c) 2004 by MAGENTA Ltd. All Rights Reserved.\r
\r
Permission is hereby granted, free of charge, to any person obtaining a copy of the fonts accompanying this license ("Fonts") and associated documentation files (the "Font Software"), to reproduce and distribute the Font Software, including without limitation the rights to use, copy, merge, publish, distribute, and/or sell copies of the Font Software, and to permit persons to whom the Font Software is furnished to do so, subject to the following conditions: \r
\r
The above copyright and this permission notice shall be included in all copies of one or more of the Font Software typefaces.\r
\r
The Font Software may be modified, altered, or added to, and in particular the designs of glyphs or characters in the Fonts may be modified and additional glyphs or characters may be added to the Fonts, only if the fonts are renamed to names not containing the word "MgOpen", or if the modifications are accepted for inclusion in the Font Software itself by the each appointed Administrator.\r
\r
This License becomes null and void to the extent applicable to Fonts or Font Software that has been modified and is distributed under the "MgOpen" name.\r
\r
The Font Software may be sold as part of a larger software package but no copy of one or more of the Font Software typefaces may be sold by itself. \r
\r
THE FONT SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT OF COPYRIGHT, PATENT, TRADEMARK, OR OTHER RIGHT. IN NO EVENT SHALL MAGENTA OR PERSONS OR BODIES IN CHARGE OF ADMINISTRATION AND MAINTENANCE OF THE FONT SOFTWARE BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, INCLUDING ANY GENERAL, SPECIAL, INDIRECT, INCIDENTAL, OR CONSEQUENTIAL DAMAGES, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF THE USE OR INABILITY TO USE THE FONT SOFTWARE OR FROM OTHER DEALINGS IN THE FONT SOFTWARE.`,manufacturer_name:"Magenta ltd",font_sub_family_name:"Bold"},descender:-334,familyName:"Helvetiker",lineHeight:1549,underlineThickness:50};var Zb=new wc().parse(dp),Kb="ABCDEFGHIJLMN\xD1OPQRSTUVXYZ".split("");function Ct(n,e={}){return new En({color:n,roughness:.45,metalness:.1,...e})}function Xr(n,e=1.5,t={}){return new En({color:0,emissive:n,emissiveIntensity:e,roughness:.6,...t})}function Yr({body:n=3364266,legs:e=2236979,skin:t=13148282,hair:i=2759184,seated:s=!1,scale:a=1}={}){let r=new Gt,o=Ct(n,{roughness:.7}),l=Ct(e,{roughness:.8}),c=Ct(t,{roughness:.8}),u=Ct(i,{roughness:.9}),d=new Oe(new Ms(.2,.45,4,12),o);d.scale.set(1.05,1,.7);let h=new Oe(new Wi(.13,16,12),c),p=new Oe(new Wi(.138,16,12,0,Math.PI*2,0,Math.PI*.55),u);p.rotation.x=-.35;let g=new Ms(.06,.45,3,8),v=new Oe(g,o),x=new Oe(g,o),f=new Ms(.08,.6,3,8),S=new Oe(f,l),T=new Oe(f,l);return s?(S.position.set(-.1,.05,.25),T.position.set(.1,.05,.25),S.rotation.x=T.rotation.x=Math.PI/2,d.position.y=.4,h.position.y=.86,p.position.y=.88,v.position.set(-.28,.42,.15),x.position.set(.28,.42,.15),v.rotation.x=x.rotation.x=-.9):(S.position.set(-.1,.4,0),T.position.set(.1,.4,0),d.position.y=1.05,h.position.y=1.5,p.position.y=1.52,v.position.set(-.28,1.05,0),x.position.set(.28,1.05,0),v.rotation.z=.12,x.rotation.z=-.12),r.add(d,h,p,v,x,S,T),r.scale.setScalar(a),r.traverse(y=>{y.isMesh&&(y.castShadow=!0)}),r}function Ea(n,e,t,i,s="#33e6ff",a=18,r=null){let o=i/100;r=r??o,n.save(),n.translate(e,t),n.scale(r,o),n.beginPath(),n.moveTo(14,-50),n.lineTo(-22,6),n.lineTo(-2,6),n.lineTo(-16,50),n.lineTo(24,-10),n.lineTo(4,-10),n.lineTo(20,-50),n.closePath(),n.restore(),n.save(),n.shadowColor=s,n.shadowBlur=a,n.fillStyle=s,n.fill(),n.lineWidth=Math.max(1.5,i*.03),n.strokeStyle="#ffffff",n.stroke(),n.restore()}function Ac(n,e,t,i=0,s=["#ff7a00","#ffb000","#ffe066"]){let a=n.createRadialGradient(e*.5,t*.45,10,e*.5,t*.5,Math.max(e,t)*.75);a.addColorStop(0,s[2]),a.addColorStop(.35,s[1]),a.addColorStop(1,s[0]),n.fillStyle=a,n.fillRect(0,0,e,t),n.save(),n.translate(e*.5,t*.45),n.rotate(i*.05);for(let r=0;r<36;r++)n.rotate(Math.PI*2/36),n.fillStyle=r%2?"rgba(255,255,255,0.10)":"rgba(255,90,0,0.10)",n.beginPath(),n.moveTo(0,0),n.lineTo(Math.max(e,t),-40),n.lineTo(Math.max(e,t),40),n.fill();n.restore(),n.save(),n.globalAlpha=.25,n.strokeStyle="#fff";for(let r=0;r<40;r++){let o=r*2.39996+i*.2,l=(.25+r*.137%.4)*e,c=l+.08*e;n.lineWidth=1+r%3,n.beginPath(),n.moveTo(e*.5+Math.cos(o)*l,t*.45+Math.sin(o)*l*.6),n.lineTo(e*.5+Math.cos(o)*c,t*.45+Math.sin(o)*c*.6),n.stroke()}n.restore()}function E2(n,e,t,i,s=1){n.save(),n.globalAlpha=.55*s,n.shadowColor="#ffe680",n.shadowBlur=i*.4;let a=n.createRadialGradient(e,t,i*.1,e,t,i);a.addColorStop(0,"rgba(255,255,220,0.95)"),a.addColorStop(.6,"rgba(255,220,120,0.5)"),a.addColorStop(1,"rgba(255,200,80,0)"),n.fillStyle=a,n.beginPath(),n.arc(e,t,i,0,Math.PI*2),n.fill(),n.globalAlpha=.9*s,n.lineWidth=i*.05,n.strokeStyle="#fff6c0",n.beginPath(),n.arc(e,t,i*.82,Math.PI*.78,Math.PI*2.22),n.lineTo(e+i*.3,t+i*1.05),n.lineTo(e-i*.3,t+i*1.05),n.closePath(),n.stroke();for(let r=0;r<3;r++)n.beginPath(),n.moveTo(e-i*.32,t+i*(1.15+r*.13)),n.lineTo(e+i*.32,t+i*(1.15+r*.13)),n.stroke();n.restore()}function $r(n,e,t,i,s=0,{texto:a="\xA1ALTA",sub:r="TENSI\xD3N!",valenciano:o=!1}={}){o&&(r="TENSI\xD3!");let l=i*.36;{n.save(),n.font=`900 ${l}px "Arial Black", Impact, Arial`;let h=n.measureText(a).width;n.restore(),h>i*1.05&&(l*=i*1.05/h)}E2(n,e,t-l*.35,l*.95,.9+Math.sin(s*3)*.1),n.save(),n.translate(e,t),n.transform(1,0,-.18,1,0,0),n.font=`900 ${l}px "Arial Black", Impact, Arial`,n.textAlign="center",n.textBaseline="middle";let c=n.createLinearGradient(0,-l/2,0,l/2);c.addColorStop(0,"#e8fbff"),c.addColorStop(.5,"#7fdcff"),c.addColorStop(1,"#1a8cff"),n.lineJoin="round",n.lineWidth=l*.16,n.strokeStyle="#06204a",n.strokeText(a,0,0),n.lineWidth=l*.06,n.strokeStyle="#ffffff",n.strokeText(a,0,0),n.fillStyle=c,n.shadowColor="#00d0ff",n.shadowBlur=l*.25,n.fillText(a,0,0),n.restore();let u=(()=>{n.save(),n.font=`900 ${l}px "Arial Black", Impact, Arial`;let h=n.measureText(a).width;return n.restore(),h})();Ea(n,e-u*.3,t+l*.05,l*.62,"#33e6ff",l*.2),Ea(n,e+u*.36,t+l*.05,l*.62,"#33e6ff",l*.2),n.save(),n.translate(e+i*.04,t+l*.72),n.transform(1,0,-.18,1,0,0),n.font=`900 ${l*.42}px "Arial Black", Impact, Arial`,n.textAlign="center",n.textBaseline="middle",n.lineJoin="round",n.lineWidth=l*.09,n.strokeStyle="#06204a",n.strokeText(r,0,0);let d=n.createLinearGradient(0,-l*.2,0,l*.2);d.addColorStop(0,"#fff"),d.addColorStop(1,"#5fd8ff"),n.fillStyle=d,n.shadowColor="#00c8ff",n.shadowBlur=l*.15,n.fillText(r,0,0),n.restore()}var fp={suelo:"#1436c8",suelo2:"#0a1a70",rayos:["#ff6a00","#ff2a2a"],pantalla:["#ff6a00","#ffa000","#ffe066"],columnas:[16747034,16732072,3836927],focos:[16777215,10475775],fondo:329752,celda:["#1f5cff","#0a2a9a"]},gp=["#ffd21a","#ff4fa8","#33e6ff","#7dff5a"];function jr(n,e,t){let i=document.createElement("canvas");i.width=n,i.height=e;let s=i.getContext("2d");t(s,n,e);let a=new bs(i);return a.colorSpace=Yt,a.anisotropy=4,a.userData={c:i,g:s},a}function pp(n){return jr(2048,2048,(e,t,i)=>{let s=e.createRadialGradient(t/2,i/2,50,t/2,i/2,t/2);s.addColorStop(0,n.suelo),s.addColorStop(1,n.suelo2),e.fillStyle=s,e.fillRect(0,0,t,i),e.globalAlpha=.12,e.fillStyle="#9fd0ff";for(let o=0;o<30;o++)e.save(),e.translate(Math.random()*t,Math.random()*i),e.rotate(Math.random()*Math.PI),e.fillRect(-300,-6,600,12),e.restore();e.globalAlpha=1;let a=7,r=()=>(a=(a*9301+49297)%233280)/233280;for(let o=0;o<46;o++){let l=r()*Math.PI*2,c=220+r()*760,u=t/2+Math.cos(l)*c,d=i/2+Math.sin(l)*c;e.save(),e.translate(u,d),e.rotate(r()*Math.PI),Ea(e,0,0,70+r()*50,o%3?n.rayos[0]:n.rayos[1],25,2.2),e.restore()}e.strokeStyle="#ffb347",e.lineWidth=10,e.shadowColor="#ff8a00",e.shadowBlur=30,e.beginPath(),e.arc(t/2,i/2,560,0,Math.PI*2),e.stroke(),e.strokeStyle="#ff3a3a",e.lineWidth=5,e.beginPath(),e.arc(t/2,i/2,900,.2,2.4),e.stroke()})}function mp(n,e){let i="#"+new Ue(n).getHexString();return jr(64,512,(s,a,r)=>{s.fillStyle="#0a0a14",s.fillRect(0,0,a,r);let o=s.createLinearGradient(0,0,a,0);o.addColorStop(0,"rgba(0,0,0,0)"),o.addColorStop(.5,i),o.addColorStop(1,"rgba(0,0,0,0)"),s.fillStyle=o,s.globalAlpha=.55,s.fillRect(0,0,a,r),s.globalAlpha=1;for(let l=8;l<r;l+=16)for(let c=12;c<a;c+=20)s.fillStyle=Math.sin(l*.1+e+c)>-.6?"#fff6e0":i,s.beginPath(),s.arc(c,l,4,0,7),s.fill()})}function xp(n,e,t){let i=new Gt;n.add(i);let s={...fp};n.background=new Ue(s.fondo),n.fog=new Qa(s.fondo,30,80);let a=[],r=new vr(10467583,1052720,.9);i.add(r);let o=new Mr(16777215,1.4);o.position.set(4,14,10),o.castShadow=!0,o.shadow.mapSize.set(1024,1024),Object.assign(o.shadow.camera,{left:-16,right:16,top:16,bottom:-16,near:1,far:40}),i.add(o);let l=new ws(16751162,30,30,1.6);l.position.set(-8,5,-4),i.add(l);let c=new ws(5209087,26,30,1.6);c.position.set(9,6,2),i.add(c);let u=pp(s),d=new En({map:u,roughness:.18,metalness:.35}),h=new Oe(new la(19,72),d);h.rotation.x=-Math.PI/2,h.receiveShadow=!0,i.add(h);let p=new Oe(new mr(19,60,48),Ct(329230,{roughness:.9}));p.rotation.x=-Math.PI/2,p.position.y=-.01,i.add(p);let g=new Oe(new ha(19,.06,6,120),Xr(16742938,2.2));g.rotation.x=Math.PI/2,g.position.y=.03,i.add(g);let v=15,x=7.6,f=document.createElement("canvas");f.width=1600,f.height=810;let S=f.getContext("2d"),T=new bs(f);T.colorSpace=Yt,T.anisotropy=4;let y=new Gt;y.position.set(-7.5,0,-9.5),y.rotation.y=.5,i.add(y);let E=new Oe(new Bt(v+.6,x+.6,.5),Ct(1711402,{metalness:.6,roughness:.4}));E.position.y=1.6+x/2,y.add(E);let w=new Oe(new ei(v,x),new xn({map:T,toneMapped:!1}));w.position.set(0,1.6+x/2,.27),y.add(w);let R=new Oe(new Bt(v+.6,1.6,.9),Ct(14212328,{metalness:.4,roughness:.3}));R.position.y=.8,y.add(R);for(let X=0;X<2;X++){let U=new Oe(new Bt(v+.4,.08,.02),Xr(2784255,3));U.position.set(0,.45+X*.7,.46),y.add(U)}let _={modo:"logo",datos:{},sucio:!0,t:0};function A(X){let U=S,M=f.width,m=f.height,P=_.datos;if(_.modo==="panel"&&P.celdas){let q=U.createLinearGradient(0,0,0,m);q.addColorStop(0,"#0a1450"),q.addColorStop(1,"#1838b0"),U.fillStyle=q,U.fillRect(0,0,M,m);let z=P.celdas.length,se=P.cols||4,oe=Math.ceil(z/se),Y=P.tiempo!=null?150:40,Z=(M-80)/se,le=(m-Y-40)/oe;P.tiempo!=null&&(U.font='900 130px "Arial Black", Arial',U.fillStyle="#fff",U.textAlign="left",U.textBaseline="top",U.shadowColor="#5fd8ff",U.shadowBlur=20,U.fillText(String(P.tiempo),50,6),U.shadowBlur=0),P.cat&&(U.font="900 54px Arial",U.textAlign="right",U.textBaseline="top",U.fillStyle="#ffe066",U.fillText(String(P.cat).toUpperCase().slice(0,34),M-40,50)),P.celdas.forEach((Ee,ue)=>{let he=40+ue%se*Z,Ae=Y+Math.floor(ue/se)*le,Pe=Ee.est||"",Ge=Pe==="ya"?["#fff07a","#e0b000"]:Pe==="yb"?["#ff9ad0","#d02a88"]:Pe==="ok"?["#ffe066","#ff9a00"]:Pe==="ko"?["#ff4a4a","#7a0010"]:Pe==="sel"?["#ffb347","#c45200"]:Pe==="tapada"?["#2a2f50","#10142a"]:s.celda,D=U.createLinearGradient(0,Ae,0,Ae+le);D.addColorStop(0,Ge[0]),D.addColorStop(1,Ge[1]),U.fillStyle=D,U.fillRect(he+8,Ae+8,Z-16,le-16),U.strokeStyle="#bfe4ff",U.lineWidth=5,U.strokeRect(he+8,Ae+8,Z-16,le-16),U.fillStyle=Pe==="ok"?"#3a2000":"#fff",U.textAlign="center",U.textBaseline="middle";let de=Pe==="tapada"?"?":String(Ee.t||"").toUpperCase(),Q=Math.min(58,le*.3);U.font=`900 ${Q}px Arial`;let fe=de.split(" "),pe=[],ie="";for(let we of fe){let Te=ie?ie+" "+we:we;U.measureText(Te).width>Z-40&&ie?(pe.push(ie),ie=we):ie=Te}for(pe.push(ie);pe.some(we=>U.measureText(we).width>Z-30)&&Q>20;)Q-=4,U.font=`900 ${Q}px Arial`;pe.slice(0,3).forEach((we,Te)=>U.fillText(we,he+Z/2,Ae+le/2+(Te-(Math.min(3,pe.length)-1)/2)*Q*1.05))})}else if(_.modo==="bote")Ac(U,M,m,X,s.pantalla),Ea(U,M*.5,m*.48,m*.9,"#33e6ff",40,m*.004),U.font='900 200px "Arial Black", Arial',U.textAlign="center",U.textBaseline="middle",U.lineWidth=16,U.strokeStyle="#5a2a00",U.strokeText(P.texto||"",M/2,m*.5),U.fillStyle="#ffffff",U.shadowColor="#fff2a0",U.shadowBlur=30,U.fillText(P.texto||"",M/2,m*.5),U.shadowBlur=0;else if(_.modo==="info"&&P.title)Ac(U,M,m,X,s.pantalla),U.fillStyle="rgba(6,20,80,0.82)",U.fillRect(90,90,M-180,m-180),U.strokeStyle="#5fd8ff",U.lineWidth=8,U.strokeRect(90,90,M-180,m-180),U.fillStyle="#ffe066",U.font='900 86px "Arial Black", Arial',U.textAlign="center",U.textBaseline="top",U.fillText(P.title,M/2,120),U.font="bold 50px Arial",(P.rows||[]).slice(0,6).forEach(([q,z],se)=>{U.textAlign="right",U.fillStyle="#9fd8ff",U.fillText(q,M/2-20,250+se*72),U.textAlign="left",U.fillStyle="#fff",U.fillText(z,M/2+20,250+se*72)});else{if(Ac(U,M,m,X,s.pantalla),e.logoPantalla&&e.logoPantalla.complete&&e.logoPantalla.naturalWidth){let q=e.logoPantalla,z=Math.min(M*.7/q.naturalWidth,m*.8/q.naturalHeight);U.drawImage(q,(M-q.naturalWidth*z)/2,(m-q.naturalHeight*z)/2,q.naturalWidth*z,q.naturalHeight*z)}else $r(U,M*.5,m*.48,M*.6,X,e.logoOpts||{});e.banner&&(U.font="900 54px Arial",U.textAlign="center",U.fillStyle="#fff",U.strokeStyle="#5a2a00",U.lineWidth=8,U.strokeText(e.banner,M/2,m-60),U.fillText(e.banner,M/2,m-60))}T.needsUpdate=!0}let C=[],F=(X,U,M,m,P)=>{let q=new Gt;q.position.set(X,0,U),q.rotation.y=M;let z=new Oe(new Bt(1.1,m,.5),Ct(13159640,{metalness:.6,roughness:.35}));z.position.y=m/2,q.add(z);let se=mp(s.columnas[P],X*3+U),oe=new En({color:0,emissive:16777215,emissiveMap:se,emissiveIntensity:1.6}),Y=new Oe(new ei(.8,m-.4),oe);Y.position.set(0,m/2,.26),q.add(Y),i.add(q),C.push({g:q,m:oe,ci:P,fase:Math.random()*6})};for(let X=0;X<14;X++)F(1+X*1.25,-12.6+Math.sin(X*.5)*.3,0,6+X%3*1.6+(X%5===0?1.5:0),X%3);for(let X=0;X<9;X++)F(17.8-X*.2,-10.5+X*1.6,-Math.PI/2+.1,6.5+X%3*1.4,(X+1)%3);for(let X=0;X<6;X++)F(-15.5-X*.6,-4+X*1.5,Math.PI/2-.2,5+X%2*1.5,(X+2)%3);let B=Ct(9080992,{metalness:.8,roughness:.3});for(let X=0;X<6;X++){let U=new Oe(new Bt(18,.08,.08),B);U.position.set(9.5,1+X*1.6,-13.1),i.add(U)}let H=jr(256,512,(X,U,M)=>{X.fillStyle="#f4f6fb",X.fillRect(0,0,U,M),X.fillStyle="#d8dce8",X.fillRect(0,M-40,U,40),Ea(X,U/2,M*.45,260,"#2a8bff",20,1.4)}),L=new Gt;L.position.set(5.5,0,-7.6),i.add(L);let G=new Oe(new Bt(1.3,1.25,.7),[Ct(15790840),Ct(15790840),Ct(15790840),Ct(15790840),new En({map:H,roughness:.4}),Ct(15790840)]);G.position.y=.625,G.castShadow=!0,L.add(G);let J=new Oe(new Bt(1.5,.08,.9),Ct(16777215,{roughness:.2}));J.position.y=1.29,L.add(J);let K=jr(1024,640,(X,U,M)=>{X.fillStyle="#1a0b30",X.fillRect(0,0,U,M);let m=X.createLinearGradient(0,0,U,M);m.addColorStop(0,"#ff4fa8"),m.addColorStop(1,"#3a8bff"),X.fillStyle=m,X.globalAlpha=.5,X.fillRect(0,0,U,M),X.globalAlpha=1,$r(X,U/2,M*.48,U*.72)}),ae=new Oe(new ei(3.2,2),new xn({map:K,toneMapped:!1}));ae.position.set(5.5,3.2,-11.2),i.add(ae);let $=Yr({body:1714778,legs:1381663,skin:14266508,hair:2759184});$.position.set(5.5,0,-8.35),i.add($);{let X=new Oe(new Bt(.12,.3,.05),Ct(16777215));X.position.set(0,1.15,.15),$.add(X)}let ee=[],ne=[],De=[[-1.8,1.6],[1,2.6],[3.8,2.8],[6.6,2]],Ie=new I(-7.5,0,-9.5),ht=()=>jr(512,128,()=>{});De.forEach(([X,U],M)=>{let m=new Gt;m.position.set(X,0,U),m.lookAt(Ie.x,0,Ie.z),i.add(m);let P=new Oe(new yi(.45,.55,.08,28),Ct(14212328,{metalness:.5}));P.position.y=.04,m.add(P);let q=new Oe(new yi(.07,.07,1,12),Ct(15264498,{metalness:.6,roughness:.25}));q.position.y=.55,m.add(q);let z=new Oe(new Bt(.75,.32,.5),Ct(16185339,{roughness:.3}));z.position.y=1.18,z.castShadow=!0,m.add(z);let se=ht(),oe=new Oe(new ei(.72,.18),new xn({map:se,toneMapped:!1}));oe.position.set(0,1.18,-.26),oe.rotation.y=Math.PI,m.add(oe);let Y=new Oe(new yi(.11,.12,.07,20),Xr(16718362,1.2));Y.position.set(0,1.37,.05),m.add(Y);let Z=new Oe(new Wi(.17,20,14),new En({color:16775392,emissive:0,transparent:!0,opacity:.85,roughness:.1}));Z.position.set(.3,1.62,.12),m.add(Z);let le=new Oe(new yi(.07,.07,.12,12),Ct(11580608,{metalness:.8}));le.position.set(.3,1.42,.12),m.add(le);let Ee=new ws(16765024,0,4,2);Ee.position.copy(Z.position),m.add(Ee);let ue=Yr({body:[2779962,2105380,15790320,13114938][M],legs:[13154458,2241365,3359863,13114938][M],skin:[13148282,14266508,14727320,13144176][M],hair:[1708040,3811866,5913120,1052688][M]});ue.position.set(0,0,-.75),m.add(ue),ee.push({g:m,bulbo:Z,luz:Ee,rot:oe,rTex:se,boton:Y,est:"off",shards:null}),ne.push(ue)});function tt(X,{nombre:U="",color:M="#fff",dinero:m=""}={}){let P=ee[X];if(!P)return;let{c:q,g:z}=P.rTex.userData;z.clearRect(0,0,512,128),z.fillStyle="#0a1a5a",z.fillRect(0,0,512,128),z.fillStyle=M,z.fillRect(0,0,14,128),z.font="900 54px Arial",z.fillStyle="#fff",z.textAlign="left",z.textBaseline="middle",z.fillText(String(U).toUpperCase().slice(0,12),30,64),z.textAlign="right",z.fillStyle="#ffe066",z.font="900 40px Arial",z.fillText(m,500,64),P.rTex.needsUpdate=!0}function it(X,U){let M=ee[X];if(M&&(M.est=U,M.shards&&(M.g.remove(M.shards),M.shards=null),M.bulbo.visible=U!=="rota",M.bulbo.material.emissive.set(U==="on"?16764992:0),M.bulbo.material.emissiveIntensity=U==="on"?3:0,M.luz.intensity=U==="on"?6:0,U==="rota")){let m=new Gt;for(let P=0;P<14;P++){let q=new Oe(new gr(.04+Math.random()*.04),new En({color:16777215,transparent:!0,opacity:.8,roughness:0}));q.position.copy(M.bulbo.position),q.userData.v=new I((Math.random()-.5)*2,Math.random()*2,(Math.random()-.5)*2),m.add(q)}m.userData.t=0,M.g.add(m),M.shards=m}}let j=[],te=new or(1.4,12,24,1,!0);te.translate(0,-6,0);for(let X=0;X<8;X++){let U=new Gt;U.position.set(-12+X*3.4,12.5,-6+X%2*6),i.add(U);let M=new Oe(new Bt(.5,.4,.5),Ct(2236968));U.add(M);let m=new Oe(te,new xn({color:16777215,transparent:!0,opacity:.045,blending:Zi,depthWrite:!1,side:wn}));U.add(m),j.push({piv:U,cone:m,fase:X*.8})}let be=[],Ve=X=>new xn({color:X,transparent:!0,opacity:.35,blending:Zi,depthWrite:!1});for(let X=0;X<7;X++){let U=new Oe(new la(1.2,32),Ve(X%2?6281471:16777215));U.rotation.x=-Math.PI/2,U.position.y=.02,i.add(U),be.push({m:U,fase:X*1.3})}for(let X=0;X<2;X++){let U=new Oe(new Bt(30,.3,.3),B);U.position.set(0,12.8,-6+X*6),i.add(U)}let ye=new Gt;ye.userData.publico=!0,i.add(ye);for(let X=0;X<3;X++){let U=new Oe(new Bt(16,.5,1.2),Ct(1711406));U.position.set(2,.25+X*.5,15+X*1.2),U.scale.y=1+X,U.position.y=.5*(1+X)/2,ye.add(U);for(let M=0;M<12;M++){let m=Yr({body:[16734810,5933823,16765773,9109386,16747224][(M+X)%5],seated:!0,scale:.9});m.position.set(-5+M*1.3+X%2*.4,.5*(1+X),15+X*1.2),m.rotation.y=Math.PI,ye.add(m)}}let Ye=Yr({body:16742938,legs:2241365});Ye.visible=!1,i.add(Ye);let Tt=new Oe(new ha(.55,.06,8,36),Xr(3407752,3));Tt.rotation.x=Math.PI/2,Tt.visible=!1,i.add(Tt);let Je=X=>{let U=new I;return ne[X].getWorldPosition(U),U};function st(X,U){if(Math.hypot(X,U)>17.5||U<-11.8)return!0;let M=(X+7.5)*Math.cos(-.5)-(U+9.5)*Math.sin(-.5)*-1,m=new I(X,0,U);if(y.worldToLocal(m),Math.abs(m.x)<v/2+.4&&m.z<1&&m.z>-1.5||Math.abs(X-5.5)<.9&&Math.abs(U+7.6)<.6)return!0;for(let P of ee)if(Math.hypot(X-P.g.position.x,U-P.g.position.z)<.5)return!0;return U>13.8}let dt=()=>0,Be=null;function gt(){Be&&i.remove(Be);let X=400,U=new Rt,M=new Float32Array(X*3),m=new Float32Array(X*3),P=[],q=[new Ue(16765466),new Ue(3401471),new Ue(16732072),new Ue(16777215)];for(let z=0;z<X;z++){M.set([(Math.random()-.5)*20,12+Math.random()*6,(Math.random()-.5)*16],z*3);let se=q[z%4];m.set([se.r,se.g,se.b],z*3),P.push(1+Math.random()*2)}U.setAttribute("position",new on(M,3)),U.setAttribute("color",new on(m,3)),Be=new sr(U,new oa({size:.15,vertexColors:!0})),Be.userData={vel:P,t:0},i.add(Be)}function It(X){s={...fp,...X||{}},n.background.set(s.fondo),n.fog.color.set(s.fondo),u.dispose(),u=pp(s),d.map=u,d.needsUpdate=!0,C.forEach(U=>{U.m.emissiveMap.dispose(),U.m.emissiveMap=mp(s.columnas[U.ci],U.fase*10),U.m.needsUpdate=!0}),j.forEach((U,M)=>U.cone.material.color.set(s.focos[M%s.focos.length])),be.forEach((U,M)=>U.m.material.color.set(s.focos[M%s.focos.length])),l.color.set(s.columnas[0]),c.color.set(s.columnas[2]),_.sucio=!0}let qt=new Map;function vt(X,U){let M=ne[X],m=ee[X],P=new I;U?(P.set(0,0,1.2),y.localToWorld(P),m.g.worldToLocal(P)):P.set(0,0,-.75),qt.set(X,{f:M,dest:P,t:0})}let Et=0;function O(X,U){Et+=U,(_.sucio||_.modo!=="panel"&&Et>.12)&&(A(X),_.sucio=!1,Et=0),j.forEach(M=>{M.piv.rotation.z=Math.sin(X*.7+M.fase)*.55,M.piv.rotation.x=Math.cos(X*.5+M.fase*1.3)*.4}),be.forEach(M=>{M.m.position.set(Math.sin(X*.4+M.fase)*9,.02,Math.cos(X*.33+M.fase*2)*7+1)}),C.forEach(M=>{M.m.emissiveIntensity=1.2+Math.sin(X*2.2+M.fase)*.5}),ee.forEach(M=>{M.shards&&(M.shards.userData.t+=U,M.shards.children.forEach(m=>{m.position.addScaledVector(m.userData.v,U),m.userData.v.y-=6*U,m.position.y<.02&&(m.position.y=.02,m.userData.v.set(0,0,0))})),M.est==="on"&&(M.luz.intensity=5+Math.sin(X*20)*1)}),$.rotation.y=Math.sin(X*.6)*.25+.3;for(let[M,m]of qt){m.t+=U;let P=m.dest.clone().sub(m.f.position);P.y=0;let q=P.length();if(q<.08){qt.delete(M),m.f.children.forEach(z=>z.rotation.x=0);continue}P.normalize().multiplyScalar(Math.min(q,U*7)),m.f.position.add(P),m.f.rotation.y=Math.atan2(P.x,P.z),m.f.children.forEach((z,se)=>{se>=5&&(z.rotation.x=Math.sin(m.t*16)*.7*(se%2?1:-1))})}if(Be){let M=Be.geometry.attributes.position;Be.userData.t+=U;for(let m=0;m<M.count;m++){let P=M.getY(m)-Be.userData.vel[m]*U;M.setX(m,M.getX(m)+Math.sin(X*3+m)*U*.5),M.setY(m,P)}M.needsUpdate=!0,Be.userData.t>9&&(i.remove(Be),Be=null)}}return It(null),{root:i,update:O,setTema:It,celebrar:gt,presentador:$,figs:ne,atriles:ee,setAtril:tt,bombilla:it,walker:Ye,marca:Tt,posAtril:Je,bloqueado:st,alturaEn:dt,correr:vt,pantallaObj:y,pantalla(X,U={}){_.modo=X,_.datos=U,_.sucio=!0},refrescarPantalla(){_.sucio=!0},ocultarFig(X,U){ne[X]&&(ne[X].visible=!U)},reset(){ee.forEach((X,U)=>{it(U,"off"),ne[U].position.set(0,0,-.75),ne[U].rotation.y=0,ne[U].visible=!0}),qt.clear(),_.modo="logo",_.sucio=!0}}}var Vn=(n,e,t,i,s,a,r)=>({suelo:n,suelo2:e,rayos:t,pantalla:i,columnas:s,focos:a,fondo:r}),bn={normal:{name:"Normal",emoji:"\u26A1",paleta:null,hashtag:"#AltaTensi\xF3n"},prime:{name:"Especial Prime Time",emoji:"\u{1F31F}",banner:"ESPECIAL PRIME TIME",hashtag:"#AltaTensi\xF3nPrime",festivo:!0,paleta:Vn("#2a1a6a","#0a0420",["#ffd21a","#ffffff"],["#b8860b","#ffd21a","#fff6c0"],[16765466,16777215,16756736],[16777215,16770688],459791),saludo:"\xA1Bienvenidos a esta gala especial de Alta Tensi\xF3n en prime time! Esta noche brillan m\xE1s que nunca las bombillas.",extra:["Y el bote de hoy\u2026 \xA1es doble! As\xED que, mucha concentraci\xF3n."]},halloween:{name:"Halloween",emoji:"\u{1F383}",banner:"ESPECIAL HALLOWEEN",hashtag:"#AltaTensi\xF3nHalloween",paleta:Vn("#2a0a3d","#080210",["#ff7a00","#9b30ff"],["#3a0a5a","#ff7a00","#ffb347"],[16742912,10170623,3211104],[16742912,10170623],328200),saludo:"\xA1Muajaja! Bienvenidos al especial de Halloween de Alta Tensi\xF3n. Esta noche las bombillas parpadean\u2026 solas."},ninos:{name:"Ni\xF1os",emoji:"\u{1F9F8}",banner:"ESPECIAL NI\xD1OS",hashtag:"#AltaTensi\xF3nNi\xF1os",festivo:!0,paleta:Vn("#00a6d6","#00507a",["#ffd60a","#ff5ca8"],["#ff5ca8","#ffd60a","#ffffff"],[16735400,16766474,3401471],[16777215,16766474],135194),saludo:"\xA1Hola, chicos y chicas! Bienvenidos al especial infantil de Alta Tensi\xF3n. \xA1Hoy los m\xE1s listos son los m\xE1s peque\xF1os!"},nochebuena:{name:"Nochebuena",emoji:"\u{1F56F}\uFE0F",banner:"ESPECIAL NOCHEBUENA",hashtag:"#AltaTensi\xF3nNochebuena",festivo:!0,paleta:Vn("#0a3a1a","#021008",["#ffd21a","#ff2a2a"],["#8a0010","#ff2a2a","#ffd21a"],[16722474,2817898,16765466],[16773824,16730698],133124),saludo:"\xA1Feliz Nochebuena! Bienvenidos a un Alta Tensi\xF3n muy especial, con turr\xF3n, villancicos y bombillas de colores."},navidad:{name:"Navidad",emoji:"\u{1F384}",banner:"ESPECIAL NAVIDAD",hashtag:"#AltaTensi\xF3nNavidad",festivo:!0,paleta:Vn("#0a4a2a","#021a0a",["#ff2a2a","#ffffff"],["#0a6a2a","#2aff6a","#ffffff"],[2817898,16722474,16777215],[16777215,16730698],134150),saludo:"\xA1Feliz Navidad! Hoy el plat\xF3 de Alta Tensi\xF3n parece un \xE1rbol: \xA1todo lleno de bombillas!"},carnaval:{name:"Carnaval",emoji:"\u{1F3AD}",banner:"ESPECIAL CARNAVAL",hashtag:"#AltaTensi\xF3nCarnaval",festivo:!0,paleta:Vn("#5a0a8a","#1a0230",["#33e6ff","#ffd21a"],["#ff4fa8","#a040ff","#33e6ff"],[16732072,3401471,16765466],[16732072,3401471],655892),saludo:"\xA1Bienvenidos al especial de Carnaval! Disfraces, confeti y bombillas de todos los colores."},finano:{name:"Fin de A\xF1o",emoji:"\u{1F942}",banner:"ESPECIAL FIN DE A\xD1O",hashtag:"#AltaTensi\xF3nFinDeA\xF1o",festivo:!0,paleta:Vn("#1a1a3a","#05050f",["#ffd21a","#c0c0c0"],["#3a3a6a","#c0c0ff","#ffd21a"],[16765466,12632319,16777215],[16777215,16765466],197384),saludo:"\xA1Bienvenidos a la \xFAltima noche del a\xF1o en Alta Tensi\xF3n! Antes de las uvas, unas cuantas bombillas."},verano:{name:"Verano",emoji:"\u{1F3D6}\uFE0F",banner:"ESPECIAL VERANO",hashtag:"#AltaTensi\xF3nVerano",paleta:Vn("#00b4d8","#005a7a",["#ffd166","#ef476f"],["#ef476f","#ffd166","#fff3b0"],[16765286,15681391,62932],[16777215,16765286],135192),saludo:"\xA1Bienvenidos al especial de verano de Alta Tensi\xF3n! Crema solar, chanclas\u2026 y bombillas al sol."},sanvalentin:{name:"San Valent\xEDn",emoji:"\u{1F498}",banner:"ESPECIAL SAN VALENT\xCDN",hashtag:"#AltaTensi\xF3nSanValent\xEDn",paleta:Vn("#8a0a3a","#2a0210",["#ffccd5","#ff4d6d"],["#c9184a","#ff8fa3","#ffccd5"],[16731501,16764117,16748451],[16764117,16731501],786948),saludo:"\xA1Feliz San Valent\xEDn! Hoy en Alta Tensi\xF3n saltan chispas\u2026 y no solo en las bombillas."},famosos:{name:"Famosos",emoji:"\u{1F3A4}",banner:"ESPECIAL FAMOSOS",hashtag:"#AltaTensi\xF3nFamosos",festivo:!0,paleta:Vn("#3a0a6a","#0a0220",["#ffd21a","#ff4fa8"],["#a040ff","#ff4fa8","#ffd21a"],[16765466,16732072,10502399],[16777215,16765466],393743),saludo:"\xA1Bienvenidos al especial de famosos de Alta Tensi\xF3n! Hoy juegan caras muy conocidas por una buena causa."},especial300:{name:"Especial 300 suscriptores",emoji:"\u{1F3C6}",banner:"ESPECIAL 300 SUSCRIPTORES",hashtag:"#AltaTensi\xF3n300",festivo:!0,paleta:Vn("#3a2a0a","#0f0a02",["#ffd21a","#ffffff"],["#b8860b","#ffd21a","#fff6c0"],[16765466,16777215,16756736],[16777215,16770688],460034),saludo:"\xA1Bienvenidos a este Alta Tensi\xF3n tan especial! Est\xE1 dedicado a los suscriptores del canal de YouTube \xABIkeriano el campe\xF3n 2\xBB.",extra:["\xA1Ya sois trescientos! Muchas gracias por estar ah\xED. \xA1Vamos con el programa!"]}};var w2="at3d",Th="media",A2=["mp3","ogg","wav","m4a"],C2=["png","webp","jpg","jpeg","svg"];function R2(){return new Promise((n,e)=>{if(!("indexedDB"in window))return e(new Error("Sin IndexedDB"));let t=indexedDB.open(w2,1);t.onupgradeneeded=()=>t.result.createObjectStore(Th),t.onsuccess=()=>n(t.result),t.onerror=()=>e(t.error)})}async function Sh(n,e){let t=await R2();return new Promise((i,s)=>{let a=t.transaction(Th,n),r=a.objectStore(Th),o=e(r);a.oncomplete=()=>i(o&&o.result),a.onerror=()=>s(a.error)})}var Hn={get:n=>Sh("readonly",e=>e.get(n)).catch(()=>{}),put:(n,e)=>Sh("readwrite",t=>t.put(e,n)),del:n=>Sh("readwrite",e=>e.delete(n))};function P2(n){return new Promise(e=>{let t=new Audio,i=!1,s=a=>{i||(i=!0,e(a?n:null))};t.preload="metadata",t.onloadedmetadata=()=>s(!0),t.onerror=()=>s(!1),setTimeout(()=>s(!1),2500),t.src=n})}function I2(n){return new Promise(e=>{let t=new Image;t.onload=()=>e(n),t.onerror=()=>e(null),t.src=n,setTimeout(()=>e(null),2500)})}async function _p(n,e,t){for(let i of e){let s=await t(`${n}.${i}`);if(s)return s}return null}var vp={};function Rc(n){return vp["a:"+n]??=_p(`audio/${n}`,A2,P2)}function L2(n){return vp["i:"+n]??=_p(`logos/${n}`,C2,I2)}var Cc={};async function N2(n){let e=await Hn.get(n);return!e||!e.blob?null:(Cc[n]&&URL.revokeObjectURL(Cc[n].url),Cc[n]={url:URL.createObjectURL(e.blob),name:e.name},Cc[n])}async function Ls(n,e){let t=await N2(`${n}:${e.id}`);if(t)return{url:t.url,origen:"subido",nombre:t.name};let i=n==="musica"?e.archivosMusica:e.archivosLogo;for(let s of i||[]){let a=n==="musica"?await Rc(s):await L2(s);if(a)return{url:a,origen:"carpeta",nombre:a}}return null}async function Eh(n,e,t){await Hn.put(`${n}:${e}`,{blob:t,name:t.name,type:t.type,fecha:Date.now()})}async function wh(n,e){await Hn.del(`${n}:${e}`)}var Jr=null;function yp(){return Jr||(Jr=new(window.AudioContext||window.webkitAudioContext)),Jr.state==="suspended"&&Jr.resume(),Jr}var at={tone(n,e,t,i,s,a="sine",r=.2){let o=n.createOscillator(),l=n.createGain();o.type=a,o.frequency.setValueAtTime(i,t),l.gain.setValueAtTime(0,t),l.gain.linearRampToValueAtTime(r,t+.01),l.gain.exponentialRampToValueAtTime(1e-4,t+s),o.connect(l).connect(e),o.start(t),o.stop(t+s+.05)},noiseBuffer(n,e=2){let t=n.createBuffer(1,n.sampleRate*e,n.sampleRate),i=t.getChannelData(0);for(let s=0;s<i.length;s++)i[s]=Math.random()*2-1;return t},whoosh(n,e,t,i=.7,s=-1,a=1,r=.35){let o=n.createBufferSource();o.buffer=at.noiseBuffer(n,i+.1);let l=n.createBiquadFilter();l.type="bandpass",l.Q.value=1.2,l.frequency.setValueAtTime(300,t),l.frequency.exponentialRampToValueAtTime(3500,t+i*.6),l.frequency.exponentialRampToValueAtTime(600,t+i);let c=n.createGain();c.gain.setValueAtTime(1e-4,t),c.gain.exponentialRampToValueAtTime(r,t+i*.55),c.gain.exponentialRampToValueAtTime(1e-4,t+i);let u=n.createStereoPanner?n.createStereoPanner():null;o.connect(l).connect(c),u?(u.pan.setValueAtTime(s,t),u.pan.linearRampToValueAtTime(a,t+i),c.connect(u).connect(e)):c.connect(e),o.start(t),o.stop(t+i+.1)},kick(n,e,t,i=.5){let s=n.createOscillator(),a=n.createGain();s.frequency.setValueAtTime(140,t),s.frequency.exponentialRampToValueAtTime(42,t+.18),a.gain.setValueAtTime(i,t),a.gain.exponentialRampToValueAtTime(1e-4,t+.3),s.connect(a).connect(e),s.start(t),s.stop(t+.35)},hat(n,e,t,i=.06){let s=n.createBufferSource();s.buffer=at.noiseBuffer(n,.06);let a=n.createBiquadFilter();a.type="highpass",a.frequency.value=7e3;let r=n.createGain();r.gain.setValueAtTime(i,t),r.gain.exponentialRampToValueAtTime(1e-4,t+.05),s.connect(a).connect(r).connect(e),s.start(t)},chord(n,e,t,i,s=2.5,a=.09){let r=n.createBiquadFilter();r.type="lowpass",r.frequency.setValueAtTime(400,t),r.frequency.exponentialRampToValueAtTime(4e3,t+.08),r.frequency.exponentialRampToValueAtTime(900,t+s),r.connect(e);for(let o of i)for(let l of[-6,6]){let c=n.createOscillator(),u=n.createGain();c.type="sawtooth",c.frequency.value=o,c.detune.value=l,u.gain.setValueAtTime(0,t),u.gain.linearRampToValueAtTime(a,t+.03),u.gain.setTargetAtTime(0,t+s*.5,s*.25),c.connect(u).connect(r),c.start(t),c.stop(t+s+.5)}},applause(n,e,t,i=3.5,s=.5){let a=at.noiseBuffer(n,.03),r=n.createGain();r.gain.setValueAtTime(1e-4,t),r.gain.exponentialRampToValueAtTime(s,t+.4),r.gain.setValueAtTime(s,t+i-1),r.gain.exponentialRampToValueAtTime(1e-4,t+i),r.connect(e);let o=Math.floor(i*160);for(let l=0;l<o;l++){let c=n.createBufferSource();c.buffer=a;let u=n.createBiquadFilter();u.type="bandpass",u.frequency.value=900+Math.random()*2200,u.Q.value=.8;let d=n.createGain();d.gain.value=.25+Math.random()*.5;let h=n.createStereoPanner?n.createStereoPanner():null;c.connect(u).connect(d),h?(h.pan.value=Math.random()*2-1,d.connect(h).connect(r)):d.connect(r),c.start(t+Math.random()*i)}}};function D2(n,e){let t=new TextEncoder().encode(n+"|"+String(e).trim()),i=2166136261;for(let s of t)i^=s,i=Math.imul(i,16777619)>>>0;return i.toString(16).padStart(8,"0")}var bp={davefx:{id:"davefx",modelo:"es_ES-davefx-medium",licencia:"CC0",sexo:"m"},sharvard:{id:"sharvard",modelo:"es_ES-sharvard-medium",licencia:"CC BY 3.0 (Univ. de Edimburgo)",sexo:"m"},carlfm:{id:"carlfm",modelo:"es_ES-carlfm-x_low",licencia:"dominio p\xFAblico",sexo:"m"},ald:{id:"ald",modelo:"es_MX-ald-medium",licencia:"Unlicense",sexo:"m"},daniela:{id:"daniela",modelo:"es_AR-daniela-high",licencia:"CC BY-SA 4.0 (corpus OpenSLR 61)",sexo:"f"}},Sp=["Voces sint\xE9ticas gen\xE9ricas (Piper TTS)",["Presentador: davefx (CC0)","Concursantes: sharvard (CC BY 3.0, Univ. de Edimburgo),","carlfm (dominio p\xFAblico), ald (Unlicense),","daniela (CC BY-SA 4.0, corpus OpenSLR 61)"]],Mp={p:null,q:null},Ch="./",Ah=n=>Mp[n]||(Mp[n]=fetch(`${Ch}voz/${n==="q"?"q/":""}index.json`).then(e=>e.ok?e.json():{}).catch(()=>({}))),wa=null,Zr=null,is={activo:()=>!0,volumen:()=>1,rapida:()=>!1,velocidad:()=>1};function Tp(n){Object.assign(is,n),n.base&&(Ch=n.base),Ah("p"),Ah("q")}function U2(){if(Zr)return Zr;let n=speechSynthesis.getVoices();if(!n.length)return null;let e=n.filter(a=>/^es(-|_)ES/i.test(a.lang)),t=n.filter(a=>/^es/i.test(a.lang)),i=/(male|hombre|pablo|jorge|[áa]lvaro|diego|enrique|carlos|ra[uú]l|antonio|juan|miguel|manuel|sergio|david|xavier|javier)/i,s=/(female|mujer|helena|laura|lucia|luc[íi]a|m[oó]nica|paulina|elvira|conchita|sabina|marisol|esperanza|dalia|elena)/i;return Zr=e.find(a=>i.test(a.name))||e.find(a=>!s.test(a.name))||t.find(a=>i.test(a.name))||e[0]||t[0]||null,Zr}typeof speechSynthesis<"u"&&(speechSynthesis.onvoiceschanged=()=>{Zr=null});function Rh(){wa&&(wa.pause(),wa=null);try{speechSynthesis.cancel()}catch{}}async function Ep(n,{voz:e="davefx",pregunta:t=!1,pitch:i=1,rate:s=1,minMs:a=0}={}){if(Rh(),!n||!is.activo())return;let r=D2(e,n),o=await Ah(t?"q":"p"),l=is.velocidad();if(o[r]!=null){let c=new Audio(`${Ch}voz/${t?"q/":""}${r}.mp3`);return c.volume=Math.min(1,is.volumen()),c.playbackRate=is.rapida()?1.25:1,wa=c,new Promise(u=>{let d=!1,h=()=>{d||(d=!0,wa===c&&(wa=null),u())};c.onended=h,c.onerror=h,c.onpause=h,c.play().catch(h),setTimeout(h,(o[r]*1e3+1500)/(is.rapida()?1.25:1))})}return typeof speechSynthesis>"u"?new Promise(c=>setTimeout(c,Math.max(a,n.length*55)/l)):new Promise(c=>{let u=new SpeechSynthesisUtterance(n);u.lang="es-ES",u.pitch=i*(bp[e]?.sexo==="f"?1.1:.85),u.rate=s*(is.rapida()?1.25:1),u.volume=Math.min(1,is.volumen());let d=U2();d&&bp[e]?.sexo!=="f"&&(u.voice=d);let h=!1,p=()=>{h||(h=!0,c())};u.onend=p,u.onerror=p,setTimeout(p,Math.max(3e3,n.length*90)),speechSynthesis.speak(u)})}var F2={music:!0,musicVol:.8,sfx:!0,sfxVol:.9,publico:!0,publicoVol:.8,gradas:!0,voz:!0,lee:!0,leeVel:"normal",chistes:!0,monologo:!1,cabecera:"3d",etapa:"t5",quality:"media",nombre:"",profesion:"",presentador:"Tino Voltaje",presentaciones:!0,platoLuz:"auto",comodinLuz:!0},Ph="1.0",ge=Object.assign({},F2,JSON.parse(localStorage.getItem("at3d_cfg")||"{}")),O2=new Set;function Kr(){localStorage.setItem("at3d_cfg",JSON.stringify(ge)),O2.forEach(n=>n(ge))}var q2=new Set(["aplausos","risas","ovacion","ooh"]),Qr=[],Pc=new Set,ss=null,Ic=null,wp=()=>{let n=yp();return Ic||(Ic=n.createGain(),Ic.connect(n.destination)),[n,Ic]};Tp({activo:()=>ge.voz,volumen:()=>1,rapida:()=>ge.leeVel==="rapida",velocidad:()=>window.__VEL||1});var Ap={tecla:(n,e,t)=>at.tone(n,e,t,900,.05,"square",.05),pop:(n,e,t)=>{at.tone(n,e,t,500,.08,"sine",.2),at.tone(n,e,t+.05,900,.1,"sine",.15)},acierto:(n,e,t)=>{at.tone(n,e,t,1046,.18,"triangle",.22),at.tone(n,e,t+.09,1568,.45,"sine",.18),at.hat(n,e,t,.08)},fallo:(n,e,t)=>{at.kick(n,e,t,.35);let i=n.createBufferSource();i.buffer=at.noiseBuffer(n,.6);let s=n.createBiquadFilter();s.type="highpass",s.frequency.value=3500;let a=n.createGain();a.gain.setValueAtTime(.5,t),a.gain.exponentialRampToValueAtTime(1e-4,t+.55),i.connect(s).connect(a).connect(e),i.start(t);for(let r=0;r<8;r++)at.tone(n,e,t+.05+Math.random()*.4,2500+Math.random()*3e3,.08,"sine",.05);at.tone(n,e,t+.1,140,.5,"sawtooth",.06)},rayo:(n,e,t)=>{let i=n.createBufferSource();i.buffer=at.noiseBuffer(n,.5);let s=n.createBiquadFilter();s.type="bandpass",s.frequency.setValueAtTime(5e3,t),s.frequency.exponentialRampToValueAtTime(300,t+.45);let a=n.createGain();a.gain.setValueAtTime(.45,t),a.gain.exponentialRampToValueAtTime(1e-4,t+.5),i.connect(s).connect(a).connect(e),i.start(t),at.tone(n,e,t,60,.4,"sawtooth",.1)},pulsador:(n,e,t)=>{at.tone(n,e,t,330,.25,"square",.12),at.tone(n,e,t,495,.25,"square",.08)},comodin:(n,e,t)=>{[784,988,1175,1568].forEach((i,s)=>at.tone(n,e,t+s*.07,i,.25,"triangle",.15))},tictac:(n,e,t)=>at.tone(n,e,t,1500,.03,"square",.05),aplausos:(n,e,t)=>at.applause(n,e,t,3,.4),ovacion:(n,e,t)=>at.applause(n,e,t,5,.55),ooh:(n,e,t)=>{let i=n.createOscillator(),s=n.createGain(),a=n.createBiquadFilter();a.type="lowpass",a.frequency.value=700,i.type="sawtooth",i.frequency.setValueAtTime(260,t),i.frequency.linearRampToValueAtTime(170,t+1),s.gain.setValueAtTime(1e-4,t),s.gain.exponentialRampToValueAtTime(.12,t+.15),s.gain.exponentialRampToValueAtTime(1e-4,t+1.1),i.connect(a).connect(s).connect(e),i.start(t),i.stop(t+1.2)},risas:(n,e,t)=>{for(let i=0;i<10;i++)at.tone(n,e,t+i*.13,300+Math.random()*200,.1,"sawtooth",.03);at.applause(n,e,t,1.6,.15)},badumtss:(n,e,t)=>{at.kick(n,e,t,.4),at.kick(n,e,t+.16,.4),at.hat(n,e,t+.35,.2)},banner:(n,e,t)=>{at.chord(n,e,t,[392,494,587],.6,.06),Ap.rayo(n,e,t)},bote:(n,e,t)=>{[523,659,784,1046].forEach((i,s)=>at.tone(n,e,t+s*.12,i,.3,"triangle",.15))},tension:(n,e,t)=>{for(let i=0;i<6;i++)at.tone(n,e,t+i*.18,110+i*15,.2,"sawtooth",.05)}},B2={menu:{bpm:118,notas:[220,277,330,277,247,311,370,311],bajo:110},tension:{bpm:138,notas:[110,110,131,110,98,110,147,131],bajo:55},trilha:{bpm:122,notas:[196,247,294,247,220,262,330,262],bajo:98},musical:{bpm:104,notas:[262,330,392,523,392,330,294,349],bajo:131},diabolico:{bpm:160,notas:[147,147,175,147,131,147,196,175],bajo:73}},re={aplicarNiveles(){ss?.a&&(ss.a.volume=ge.music?ge.musicVol:0),ss?.g&&(ss.g.gain.value=ge.music?.5*ge.musicVol:0)},async play(n,{volume:e=1}={}){let t=q2.has(n);if(t?!ge.publico:!ge.sfx)return null;e*=t?ge.publicoVol:ge.sfxVol;let i=await Rc(n);if(i){let s=new Audio(i);return s.volume=Math.min(1,e),Pc.add(s),s.onended=()=>Pc.delete(s),s.play().catch(()=>{}),s}try{let[s,a]=wp(),r=s.createGain();r.gain.value=e,r.connect(a),Ap[n]?.(s,r,s.currentTime+.01),setTimeout(()=>r.disconnect(),7e3)}catch{}return null},async music(n,{etapa:e=null,cancion:t=!1}={}){this.stopMusic();let i={};ss=i;let s=null;if(e){let r=await Ls("musica",e);r&&(s=r.url)}if(!s&&t&&Qr.length&&(s=Qr[Math.floor(Math.random()*Qr.length)]),s||(s=await Rc("musica_"+n)),ss!==i)return;if(s){let r=new Audio(s);r.loop=n!=="cabecera",r.volume=ge.music?ge.musicVol:0,i.a=r,r.play().catch(()=>{});return}let a=B2[n];if(a)try{let[r,o]=wp(),l=r.createGain();l.gain.value=ge.music?.5*ge.musicVol:0,l.connect(o);let c=r.currentTime+.05,u=0,d=60/a.bpm/2;i.iv=setInterval(()=>{for(;c<r.currentTime+.4;)at.tone(r,l,c,a.notas[u%a.notas.length],d*.9,"triangle",.05),u%4===0&&(at.kick(r,l,c,.12),at.tone(r,l,c,a.bajo,d*1.8,"sawtooth",.03)),u%2&&at.hat(r,l,c,.015),c+=d,u++},120),i.g=l}catch{}},hayCanciones:()=>Qr.length>0,setCanciones(n){Qr=n||[]},stopMusic(){let n=ss;if(ss=null,!!n&&(n.a&&n.a.pause(),n.iv)){clearInterval(n.iv);try{n.g.disconnect()}catch{}}},say(n,e="davefx",t={}){return window.__frasesUsadas&&window.__frasesUsadas.add(JSON.stringify({v:e,t:String(n).trim(),q:!!t.pregunta})),Ep(String(n||"").replace(/<[^>]+>/g,""),{voz:e,...t})},stopVoice(){Rh()},stopAll(){Pc.forEach(n=>n.pause()),Pc.clear(),this.stopMusic(),this.stopVoice()}};var xe=n=>document.querySelector(n),Ne=n=>String(n??"").replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),to=()=>window.__VEL||1,Cp="\u20AC",Rp=n=>{Cp=n},z2=n=>{let e=Math.round(Number(n)||0);return(e<0?"-":"")+String(Math.abs(e)).replace(/\B(?=(\d{3})+(?!\d))/g,".")},ut=n=>z2(n)+(Cp==="pts"?" pts":" \u20AC");var un=n=>{n=n.slice();for(let e=n.length-1;e>0;e--){let t=Math.floor(Math.random()*(e+1));[n[e],n[t]]=[n[t],n[e]]}return n},Xt=n=>n[Math.floor(Math.random()*n.length)],Ns={abort:!0},eo=0,Si=new Set;function Lc(){eo++;let n=[...Si];return Si=new Set,n.forEach(e=>e()),eo}function Pp(n){if(n!==eo)throw Ns}var qe=(n,e=eo)=>new Promise((t,i)=>{let s=()=>{clearTimeout(a),i(Ns)},a=setTimeout(()=>{Si.delete(s),e===eo?t():i(Ns)},n/to());Si.add(s)}),an=n=>new Promise((e,t)=>{let i=()=>t(Ns);Si.add(i),n.then(s=>{Si.delete(i),e(s)},s=>{Si.delete(i),t(s)})});addEventListener("unhandledrejection",n=>{n.reason===Ns&&n.preventDefault()});var as=class{constructor(e,t){this.ilimitado=!e||e===1/0,this.rest=this.ilimitado?1/0:e,this.onTick=t,this.corriendo=!1,this.terminado=!1,this.fin=new Promise(s=>this._res=s);let i=Math.ceil(this.rest);this._iv=setInterval(()=>{!this.corriendo||this.terminado||this.ilimitado||(this.rest=Math.max(0,this.rest-.1*to()),this.onTick&&this.onTick(this.rest),Math.ceil(this.rest)!==i&&(i=Math.ceil(this.rest),i<=10&&re.play("tictac")),this.rest<=0&&(this.terminado=!0,clearInterval(this._iv),this._res("TIEMPO")))},100),this._l=()=>this.stop(),Si.add(this._l),t&&t(this.rest)}start(){return this.corriendo=!0,this}pause(){this.corriendo=!1}sumar(e){this.ilimitado||(this.rest=Math.max(.1,this.rest+e)),this.onTick&&this.onTick(this.rest)}stop(){Si.delete(this._l),!this.terminado&&(this.terminado=!0,clearInterval(this._iv),this._res("STOP"))}},k2=n=>n===1/0?"\u221E":String(Math.ceil(n)),Aa=()=>xe("#overlay");function Ds(){Aa().classList.add("hidden"),Aa().innerHTML=""}function Nc(n){Aa().innerHTML=n,Aa().classList.remove("hidden"),Aa().onclick=null}async function Rn(n,e="",t=2600){re.play("banner"),Nc(`<div class="banner-at"><div class="ba-rayo">\u26A1</div><div class="ba-t">${Ne(n)}</div>${e?`<div class="ba-s">${Ne(e)}</div>`:""}</div>`),await qe(t),Ds()}function Ip(n,e="[data-z]"){return Nc(n),an(new Promise(t=>{let i=Aa().querySelectorAll(e);i.forEach(s=>s.onclick=a=>{a.stopPropagation(),re.play("tecla"),t(s.dataset.z)}),window.__AUTO&&i.length&&setTimeout(()=>t(i[Math.min(i.length-1,window.__AUTO_ELIGE||0)].dataset.z),400/to())})).finally(Ds)}async function Pn(n,e="",t=2600){Nc(`<div class="txt">${n}</div>${e?`<div class="sub">${e}</div>`:""}`),await qe(t),Ds()}async function no(n,e="",t=2800){re.play("bote"),Nc(`<div class="bote-at"><span>${ut(n)}</span></div>${e?`<div class="sub">${Ne(e)}</div>`:""}`),await qe(t),Ds()}var ii={hasta:0,nombre:"Presentador",quien:null};function rs(n,e=3500,t=null,i=null){let s=xe("#bubble");s.innerHTML=`<b>${Ne(i||ii.nombre)}:</b> ${Ne(n)}`,s.classList.toggle("conc",!!t),s.classList.remove("hidden"),ii.hasta=performance.now()+e/to(),ii.quien=t}var V2=n=>qe(Math.max(1400,String(n).length*55));async function et(n,e=3800){if(rs(n,e+1500),!ge.voz)return V2(n);await an(re.say(n,"davefx"))}async function Lp(n,e){if(rs(e,2600,n.fig??null,n.nombre),!ge.voz)return qe(1100);await an(Promise.race([re.say(e,n.voz||"sharvard"),new Promise(t=>setTimeout(t,4e3))]))}function Ti(n){return ge.lee&&ge.voz?re.say(n,"davefx",{pregunta:!0}):Promise.resolve()}var pt={show(n){xe("#hud").classList.toggle("hidden",!n)},set(n,e=-1){n&&(xe("#hudConc").innerHTML=n.conc.map((t,i)=>`<div class="hc ${i===e?"act":""} ${t.fuera?"fuera":""} ${t.plantado?"plant":""}" style="--c:${t.color}"><div class="n">${Ne(t.nombre)}${t.humano&&t.nombre!=="T\xFA"?" (T\xDA)":""}</div><div class="d">${ut(t.dinero)}</div><div class="x">${t.ronda?(t.ronda>0?"+":"")+ut(t.ronda):""}${t.comodines?' <i class="cmd">'+"\u26A1".repeat(t.comodines)+"</i>":""}${t.plantado?" \u270B":""}</div></div>`).join(""))},timer(n,e=10){let t=xe("#timer");t.textContent=k2(n),t.classList.toggle("low",n!==1/0&&n<=e)},sinTimer(){xe("#timer").textContent="",xe("#timer").classList.remove("low")},ronda(n){xe("#roundTxt").textContent=n}};function Ei(n){let e=xe("#hashtag");e.textContent=n||"",e.classList.toggle("on",!!n)}async function Dc(n,e="",t=3200){let i=xe("#lower3"),s=document.createElement("div");s.className="l3",s.innerHTML=`<b>${Ne(n)}</b>${e?`<span>${Ne(e)}</span>`:""}`,i.appendChild(s),i.classList.remove("hidden"),await qe(t),s.classList.add("out"),setTimeout(()=>{s.remove(),i.children.length||i.classList.add("hidden")},400)}function Np(){xe("#lower3").innerHTML="",xe("#lower3").classList.add("hidden")}function Ot(n,e=2500){let t=xe("#toast");t.textContent=n,t.classList.remove("hidden"),clearTimeout(Ot._t),Ot._t=setTimeout(()=>t.classList.add("hidden"),e)}function wi(n){let e=xe("#actions");e.innerHTML="",(n||[]).forEach(t=>{let i=document.createElement("button");i.className="abtn "+(t.cls||""),i.textContent=t.label,i.onclick=s=>{s.stopPropagation(),re.play("tecla"),e.innerHTML="",t.fn()},e.appendChild(i)})}async function Dp(n,e=14e3){let t=xe("#credits"),i=xe("#creditsRoll");i.innerHTML=n.map(([a,r])=>`<h4>${Ne(a)}</h4>${r.map(Ne).join("<br>")}`).join(""),t.classList.remove("hidden","fadeout"),i.style.transition="none",i.style.transform="translateY(0)",i.offsetHeight;let s=e/to();i.style.transition=`transform ${s}ms linear`,i.style.transform=`translateY(calc(-100% - ${t.clientHeight}px))`;try{await qe(e)}finally{t.classList.add("hidden")}}function Uc(){xe("#credits").classList.add("hidden")}var Xe={bienvenida:"\xA1Muy buenas y bienvenidos a Alta Tensi\xF3n! El concurso donde cada respuesta enciende una bombilla\u2026 o la hace saltar por los aires.",bienvenidaVal:"\xA1Bona vesprada i benvinguts a Alta tensi\xF3! Bombetes enceses, nervis a flor de pell i un pot que creix cada dia.",presentacion:"Vamos a conocer a los concursantes de hoy.",repesca:"Empezamos con la repesca. El farolillo rojo del \xFAltimo programa se juega su sitio contra un nuevo aspirante. Nueve casillas, siete correctas y dos que funden la bombilla.",repescaGana:"\xA1Ya tenemos a nuestro cuarto concursante! Bienvenido al plat\xF3.",paseo:"\xA1Concursante, ve hasta tu atril, el que tiene la bombilla apagada!",aPorTodas:"\xA1A por todas! Diecis\xE9is casillas, diez correctas y seis incorrectas. Cada acierto vale cien euros. Si fall\xE1is, perd\xE9is lo acumulado en esta prueba. Y cuidado: hay una imagen escondida que regala un comod\xEDn.",imagen:"\xA1Has encontrado la imagen oculta! Si la aciertas, te llevas un comod\xEDn. Si fallas, pierdes cien euros.",imagenOk:"\xA1Comod\xEDn para ti! Ese rayo dorado vale oro en el minuto diab\xF3lico.",imagenKo:"\xA1Uy! No era esa. Te quito cien euros.",todasFuera:"\xA1Han salido todas las incorrectas! Los que no se hab\xEDan plantado se quedan a cero en esta prueba.",esaMeSuena:"\xA1Esa me suena! Ponemos m\xFAsica y un panel de doce canciones: ocho son correctas. Cada concursante contesta seguido hasta que se plante o falle.",fijate:"F\xEDjate bien. Durante unos segundos ver\xE9is diecis\xE9is im\xE1genes. Diez est\xE1n repetidas. Despu\xE9s las tapamos y tendr\xE9is que recordar d\xF3nde estaban.",fijateTapo:"\xA1Tapamos las im\xE1genes! A ver qu\xE9 tal esa memoria.",bombilla:"La bombilla caliente. Duelos cara a cara: el primero contra el cuarto y el segundo contra el tercero. Quien rompa la bombilla, pierde.",bombillaFinal:"\xA1Final de la bombilla caliente! Quinientos euros para el ganador y cien para el finalista.",buscaPareja:"Busca pareja. Diecis\xE9is casillas, ocho parejas escondidas. Las dos primeras valen cuatrocientos euros, las dos siguientes doscientos y el resto cien. Si fallas, pierdes el turno.",farolillo:"Se enciende el farolillo rojo. Ma\xF1ana tendr\xE1 que jugarse su sitio en la repesca.",tercero:"El tercer clasificado se despide con cien euros. \xA1Muchas gracias por jugar!",caraACara:"\xA1Cara a cara! Doce temas en el panel. Bombilla amarilla para uno, bombilla rosa para el otro. Si fallas, hay rebote. El primero que encienda siete bombillas, gana.",jaqueMate:"\xA1Empate a seis! Vamos al jaque mate: pregunta a muerte s\xFAbita.",minuto:"El minuto diab\xF3lico. Tres paneles: dos correctas de cuatro, cinco de nueve y ocho de quince. Hay que correr a la pantalla, marcar y volver a pulsar. \xA1Por el bote!",minutoComodin:"Tus comodines te dan unos segundos m\xE1s. \xA1Aprov\xE9chalos!",minutoError:"\xA1Hay alg\xFAn error! Panel nuevo, \xA1corre!",minutoOk:"\xA1Panel correcto! \xA1Al siguiente!",boteGanado:"\xA1Incre\xEDble! \xA1Se lleva el bote de Alta Tensi\xF3n!",boteNo:"\xA1Casi! El bote se queda para el pr\xF3ximo programa, pero te llevas mil euros.",correcta:"\xA1Correcta!",incorrecta:"\xA1Incorrecta!",rebote:"\xA1Rebote!",tiempo:"\xA1Se acab\xF3 el tiempo!",despedida:"\xA1Esto ha sido todo por hoy! Gracias por acompa\xF1arnos. Ma\xF1ana m\xE1s tensi\xF3n, m\xE1s bombillas y m\xE1s bote. \xA1Hasta ma\xF1ana!",clasica:"Bienvenidos a Alta Tensi\xF3n, la versi\xF3n cl\xE1sica. Tres concursantes, tres paneles, apuestas y un coche esperando al final.",clasicaR1:"Primera ronda: tres paneles de diecis\xE9is casillas. Diez correctas y seis incorrectas. Pod\xE9is plantaros cuando quer\xE1is.",clasicaR2:"Segunda ronda: las apuestas. Cada uno apuesta parte de su dinero y tiene que encontrar cinco correctas en un panel de doce.",clasicaFinal:"Y llegamos a la ronda final. Siete correctas en un panel de doce\u2026 \xA1y ese coche es tuyo!",coche:"\xA1Enhorabuena! \xA1Te llevas el coche!",cocheNo:"\xA1Vaya! El coche se queda en el plat\xF3. Pero te llevas tu dinero.",entreno:"\xA1Bienvenido al entrenamiento! Aqu\xED no se rompe nada de verdad. Practica tranquilo.",explora:"\xA1Bienvenido al plat\xF3 de Alta Tensi\xF3n! Date una vuelta, pero no toques las bombillas.",exploraSaludo:"\xA1Hombre! \xBFVienes a por el bote? Ponte en tu atril, que empezamos enseguida.",planta:"Te plantas. Ese dinero ya es tuyo en esta prueba."},Ca={elijo:["\xA1Esta!","Voy a por esta.","Me la juego.","Esta seguro que s\xED.","A ver esta\u2026"],bien:["\xA1Toma!","\xA1Bien!","\xA1Lo sab\xEDa!","\xA1S\xED se\xF1or!"],mal:["\xA1No puede ser!","\xA1Vaya!","\xA1Qu\xE9 rabia!","\xA1Mi bombilla!"],planto:["Me planto.","Yo me planto aqu\xED."],hola:["\xA1Hola a todos!","\xA1Encantado de estar aqu\xED!","\xA1Hola, hola! \xA1Qu\xE9 nervios!"]},Fc=["\xBFSab\xE9is por qu\xE9 las bombillas nunca van al gimnasio? Porque ya est\xE1n muy encendidas.","Me dijo el electricista: \xABtienes una conexi\xF3n especial con el p\xFAblico\xBB. \xA1Y me cobr\xF3 la visita!","\xBFQu\xE9 le dice un enchufe a otro? \xAB\xA1Qu\xE9 buena corriente hay entre nosotros!\xBB.","En este plat\xF3 tenemos tantas luces que la factura la pagamos a plazos\u2026 de cien a\xF1os.","Mi abuela dec\xEDa: \xABhijo, apaga la luz al salir\xBB. Y m\xEDrame: trabajo en un concurso de bombillas.","\xBFPor qu\xE9 la bombilla suspendi\xF3 el examen? Porque se fundi\xF3 con las preguntas dif\xEDciles.","Un concursante me pregunt\xF3 si el bote era de cristal. \xA1Le dije que no, que es de nervios de acero!","Aqu\xED si os da un calambre, no os preocup\xE9is: \xA1es la emoci\xF3n!"],os=[{nombre:"Paco Chispas",prof:"Probador oficial de enchufes",voz:"carlfm",emoji:"\u{1F9D4}"},{nombre:"Luci Vatios",prof:"Contadora de bombillas fundidas",voz:"daniela",emoji:"\u{1F469}"},{nombre:"Ram\xF3n Ohmio",prof:"Afinador de timbres de portal",voz:"sharvard",emoji:"\u{1F468}\u200D\u{1F9B2}"},{nombre:"Toni Dinamo",prof:"Instructor de siestas en hamaca",voz:"ald",emoji:"\u{1F9D1}"},{nombre:"Rosi Rel\xE1mpago",prof:"Domadora de paraguas rebeldes",voz:"daniela",emoji:"\u{1F469}\u200D\u{1F9B0}"},{nombre:"Juli\xE1n Voltio",prof:"Inspector de colas del supermercado",voz:"ald",emoji:"\u{1F474}"},{nombre:"Encarna Pila",prof:"Campeona regional de lanzamiento de zapatilla",voz:"daniela",emoji:"\u{1F475}"},{nombre:"Ferm\xEDn Cortocircuito",prof:"Repartidor de propaganda en ascensores",voz:"carlfm",emoji:"\u{1F468}"},{nombre:"Lolo Kilovatio",prof:"Coleccionista de tiques de aparcamiento",voz:"sharvard",emoji:"\u{1F9D1}\u200D\u{1F9B1}"},{nombre:"Merche Fusible",prof:"Catadora oficial de churros con chocolate",voz:"daniela",emoji:"\u{1F471}\u200D\u2640\uFE0F"}];var Gn={paneles:[{t:"Son capitales de pa\xEDses europeos",c:["Par\xEDs","Roma","Berl\xEDn","Lisboa","Viena","Atenas","Dubl\xEDn","Varsovia","Praga","Budapest","Oslo"],i:["Barcelona","Mil\xE1n","Oporto","M\xFAnich","Ginebra","Estambul","R\xF3terdam"]},{t:"Son pa\xEDses de Am\xE9rica del Sur",c:["Argentina","Chile","Per\xFA","Colombia","Brasil","Uruguay","Paraguay","Bolivia","Ecuador","Venezuela","Guyana","Surinam"],i:["M\xE9xico","Cuba","Panam\xE1","Honduras","Guatemala","Nicaragua","Costa Rica"]},{t:"Son mam\xEDferos",c:["Delf\xEDn","Murci\xE9lago","Ballena","Ornitorrinco","Canguro","Elefante","Foca","Koala","Jirafa","Topo"],i:["Tibur\xF3n","Ping\xFCino","Cocodrilo","Avestruz","Salm\xF3n","Tortuga","Rana"]},{t:"Son planetas del sistema solar",c:["Mercurio","Venus","Tierra","Marte","J\xFApiter","Saturno","Urano","Neptuno"],i:["Plut\xF3n","Luna","Sol","Ceres","Tit\xE1n","Gan\xEDmedes","Sirio"]},{t:"Las escribi\xF3 Cervantes",c:["Don Quijote","La Galatea","Novelas ejemplares","Los trabajos de Persiles y Sigismunda","Rinconete y Cortadillo","El coloquio de los perros","La Numancia","El licenciado Vidriera","La gitanilla"],i:["La Celestina","El Lazarillo de Tormes","La vida es sue\xF1o","Fuenteovejuna","El burlador de Sevilla","La Regenta","Bodas de sangre"]},{t:"Los pint\xF3 Vel\xE1zquez",c:["Las Meninas","Las hilanderas","La rendici\xF3n de Breda","La fragua de Vulcano","El aguador de Sevilla","Los borrachos","La Venus del espejo","Cristo crucificado","Retrato de Inocencio X","Vieja friendo huevos"],i:["La maja desnuda","El Guernica","La persistencia de la memoria","El jard\xEDn de las delicias","Los fusilamientos del 3 de mayo","La Gioconda","El grito"]},{t:"Son elementos qu\xEDmicos",c:["Oro","Hierro","Helio","Ne\xF3n","Sodio","Cobre","Plata","Carbono","Ox\xEDgeno","Uranio","Zinc"],i:["Bronce","Acero","Agua","Lat\xF3n","Diamante","Sal","Granito"]},{t:"Son comunidades aut\xF3nomas",c:["Andaluc\xEDa","Arag\xF3n","Asturias","Cantabria","Galicia","La Rioja","Murcia","Navarra","Extremadura","Catalu\xF1a","Canarias"],i:["Albacete","Bilbao","Le\xF3n","Almer\xEDa","Toledo","Vigo","Gij\xF3n"]},{t:"Son r\xEDos de Espa\xF1a",c:["Ebro","Tajo","Duero","Guadalquivir","Guadiana","Mi\xF1o","J\xFAcar","Segura","Turia","Genil","Nal\xF3n"],i:["Sena","Danubio","T\xE1mesis","Rin","Po","Loira","Volga"]},{t:"Son deportes ol\xEDmpicos de verano",c:["Atletismo","Nataci\xF3n","Judo","Esgrima","Remo","Tenis","Baloncesto","Balonmano","Halterofilia","Tiro con arco","Gimnasia"],i:["P\xE1del","Ajedrez","Esqu\xED alpino","Curling","Billar","Petanca","Dardos"]},{t:"Son instrumentos de cuerda",c:["Viol\xEDn","Guitarra","Arpa","Violonchelo","Contrabajo","Viola","La\xFAd","Bandurria","Ukelele","Banjo","Mandolina"],i:["Flauta","Trompeta","Clarinete","Tambor","Saxof\xF3n","Xil\xF3fono","Oboe"]},{t:"Las escribi\xF3 Garc\xEDa Lorca",c:["Bodas de sangre","Yerma","La casa de Bernarda Alba","Romancero gitano","Poeta en Nueva York","Mariana Pineda","Do\xF1a Rosita la soltera","Poema del cante jondo","La zapatera prodigiosa","As\xED que pasen cinco a\xF1os"],i:["Platero y yo","Campos de Castilla","Luces de bohemia","Niebla","La colmena","Nada","Cien a\xF1os de soledad"]},{t:"Son pel\xEDculas de Pixar",c:["Toy Story","Buscando a Nemo","Up","Coco","Ratatouille","Wall-E","Cars","Monstruos S.A.","Los Incre\xEDbles","Del rev\xE9s","Brave","Luca"],i:["Shrek","Frozen","El rey le\xF3n","Aladd\xEDn","Madagascar","Kung Fu Panda","Ice Age"]},{t:"Pagan con euros",c:["Espa\xF1a","Francia","Italia","Alemania","Portugal","Grecia","Irlanda","Austria","Finlandia","Croacia","B\xE9lgica","Pa\xEDses Bajos"],i:["Suecia","Dinamarca","Polonia","Reino Unido","Suiza","Noruega","Hungr\xEDa","Rep\xFAblica Checa"]},{t:"Son frutas",c:["Mango","Kiwi","Papaya","Fresa","Cereza","Ciruela","Melocot\xF3n","Pi\xF1a","Higo","Granada","Albaricoque"],i:["Lechuga","Cebolla","Ajo","Espinaca","Puerro","Coliflor","Apio"]},{t:"Han ganado un Mundial de f\xFAtbol",c:["Brasil","Alemania","Italia","Argentina","Francia","Uruguay","Inglaterra","Espa\xF1a"],i:["Pa\xEDses Bajos","Portugal","Croacia","M\xE9xico","B\xE9lgica","Suecia","Hungr\xEDa"]},{t:"Se inventaron en el siglo XX",c:["Televisi\xF3n","Internet","Microondas","Tel\xE9fono m\xF3vil","L\xE1ser","Avi\xF3n","Transistor","Bol\xEDgrafo","Fregona","GPS","Chupa Chups"],i:["Imprenta","Br\xFAjula","Tel\xE9fono","Bombilla","M\xE1quina de vapor","Telescopio","Pararrayos"]},{t:"Son huesos del cuerpo humano",c:["F\xE9mur","Tibia","Peron\xE9","H\xFAmero","C\xFAbito","Radio","Estern\xF3n","Clav\xEDcula","R\xF3tula","Om\xF3plato","Estribo"],i:["B\xEDceps","Tr\xEDceps","Gl\xFAteo","Tend\xF3n de Aquiles","P\xE1ncreas","Diafragma","H\xEDgado"]},{t:"Las ba\xF1a el Mediterr\xE1neo",c:["Barcelona","Valencia","M\xE1laga","Alicante","Marsella","N\xE1poles","Niza","Palma","G\xE9nova","Tarragona","Argel","Beirut"],i:["Lisboa","Bilbao","C\xE1diz","Oporto","Burdeos","Santander","Huelva"]},{t:"Son lenguajes de programaci\xF3n",c:["Python","Java","JavaScript","C++","Ruby","PHP","Swift","Kotlin","Go","Rust"],i:["Photoshop","Linux","Excel","Windows","Android","Chrome","WhatsApp"]},{t:"Son personajes de Harry Potter",c:["Hermione","Ron","Dumbledore","Snape","Hagrid","Voldemort","Draco Malfoy","Sirius Black","Dobby","Neville"],i:["Gandalf","Frodo","Legolas","Aragorn","Gollum","Bilbo","Sauron"]},{t:"Son \xF3peras de Verdi",c:["La traviata","Aida","Rigoletto","Nabucco","Otello","Falstaff","Il trovatore","Don Carlo","Macbeth","La forza del destino"],i:["Carmen","La flauta m\xE1gica","Madama Butterfly","Tosca","La boh\xE8me","El barbero de Sevilla","Turandot"]},{t:"Son superh\xE9roes de Marvel",c:["Spider-Man","Iron Man","Thor","Hulk","Capit\xE1n Am\xE9rica","Lobezno","Viuda Negra","Pantera Negra","Doctor Extra\xF1o","Ojo de Halc\xF3n","Deadpool"],i:["Batman","Superman","Wonder Woman","Flash","Aquaman","Linterna Verde","Robin"]},{t:"Son islas espa\xF1olas",c:["Tenerife","Mallorca","Menorca","Ibiza","Formentera","Lanzarote","Fuerteventura","Gran Canaria","La Gomera","El Hierro","La Palma","Cabrera"],i:["Madeira","C\xF3rcega","Cerde\xF1a","Sicilia","Malta","Creta","Azores"]},{t:"Eran dinosaurios",c:["Tiranosaurio","Velocirraptor","Triceratops","Diplodocus","Estegosaurio","Braquiosaurio","Iguanod\xF3n","Espinosaurio","Anquilosaurio","Parasaurolofus"],i:["Mamut","Tigre dientes de sable","Megalod\xF3n","Dodo","Pterod\xE1ctilo","Plesiosaurio","Ictiosaurio"]},{t:"Ganaron el Nobel de Literatura escribiendo en espa\xF1ol",c:["Garc\xEDa M\xE1rquez","Pablo Neruda","Vargas Llosa","Octavio Paz","Camilo Jos\xE9 Cela","Vicente Aleixandre","Juan Ram\xF3n Jim\xE9nez","Gabriela Mistral","Miguel \xC1ngel Asturias","Jacinto Benavente","Jos\xE9 Echegaray"],i:["Jorge Luis Borges","Julio Cort\xE1zar","Miguel Delibes","P\xE9rez Gald\xF3s","Isabel Allende","Garc\xEDa Lorca","Antonio Machado"]},{t:"Son grupos musicales espa\xF1oles",c:["Mecano","La Oreja de Van Gogh","H\xE9roes del Silencio","Estopa","Amaral","El Canto del Loco","Los Secretos","Hombres G","Jarabe de Palo","Vetusta Morla","Love of Lesbian"],i:["ABBA","Queen","U2","Coldplay","Man\xE1","Soda Stereo","Los Prisioneros"]},{t:"Est\xE1n en Italia",c:["Coliseo","Torre de Pisa","Fontana di Trevi","Pante\xF3n de Agripa","Puente de Rialto","Duomo de Florencia","Arena de Verona","Ponte Vecchio","Plaza de San Marcos","Galer\xEDa Vittorio Emanuele II"],i:["Alhambra","Torre Eiffel","Big Ben","Parten\xF3n","Puerta de Brandeburgo","Sagrada Familia","Atomium"]},{t:"Son monedas en uso hoy",c:["Yen","D\xF3lar","Libra esterlina","Rublo","Rupia","Yuan","Peso mexicano","Franco suizo","Corona sueca","Real brasile\xF1o","Won"],i:["Peseta","Marco alem\xE1n","Franco franc\xE9s","Lira italiana","Escudo portugu\xE9s","Dracma","Flor\xEDn"]},{t:"Son sin\xF3nimos de r\xE1pido",c:["Veloz","Raudo","Ligero","Presto","\xC1gil","Pronto","Vertiginoso","Acelerado","Expedito","Diligente"],i:["Lento","Pausado","Tardo","Calmoso","Parsimonioso","Cachazudo","Pesado"]},{t:"Ponen huevos",c:["Gallina","Ornitorrinco","Cocodrilo","Tortuga","Salm\xF3n","Ping\xFCino","Rana","Avestruz","Equidna","Abeja"],i:["Delf\xEDn","Murci\xE9lago","Canguro","Ballena","Caballo","Vaca","Gato"]},{t:"Las escribi\xF3 Shakespeare",c:["Hamlet","Macbeth","Otelo","El rey Lear","Romeo y Julieta","La tempestad","Julio C\xE9sar","El mercader de Venecia","Sue\xF1o de una noche de verano","Mucho ruido y pocas nueces","Ricardo III"],i:["Fausto","Don Juan Tenorio","La divina comedia","Los miserables","Orgullo y prejuicio","El conde de Montecristo","Moby Dick"]},{t:"Son juegos de mesa",c:["Parch\xEDs","Ajedrez","La oca","Damas","Monopoly","Trivial","Scrabble","Risk","Cluedo","Cat\xE1n","Domin\xF3"],i:["Tetris","Fortnite","Minecraft","Pac-Man","Mario Kart","FIFA","Zelda"]},{t:"Son pa\xEDses de \xC1frica",c:["Marruecos","Egipto","Nigeria","Kenia","Senegal","Ghana","Etiop\xEDa","Angola","Mozambique","Camer\xFAn","T\xFAnez","Argelia"],i:["Jordania","Yemen","Om\xE1n","Ir\xE1n","Siria","L\xEDbano","Pakist\xE1n"]},{t:"Son mares (no oc\xE9anos ni lagos)",c:["Mediterr\xE1neo","Cant\xE1brico","Caribe","B\xE1ltico","Negro","Rojo","Adri\xE1tico","Egeo","J\xF3nico","De Albor\xE1n","Del Norte"],i:["Pac\xEDfico","Atl\xE1ntico","\xCDndico","\xC1rtico","Titicaca","Baikal","Victoria"]},{t:"Son tipos de pasta",c:["Macarrones","Espaguetis","Tallarines","Lasa\xF1a","Raviolis","Fusilli","Penne","Tortellini","Canelones","Farfalle","Fideos"],i:["Cruas\xE1n","Baguette","Churro","Ensaimada","Magdalena","Rosquilla","Brioche"]},{t:"Son consolas de videojuegos",c:["PlayStation","Xbox","Nintendo Switch","Game Boy","Wii","Mega Drive","Nintendo 64","Dreamcast","GameCube","PSP","Nintendo DS"],i:["iPad","Kindle","Walkman","Tamagotchi","Discman","Smartwatch","Chromecast"]},{t:"Son directores de cine espa\xF1oles",c:["Pedro Almod\xF3var","Luis Bu\xF1uel","Alejandro Amen\xE1bar","Isabel Coixet","J. A. Bayona","Carlos Saura","Fernando Trueba","Ic\xEDar Bolla\xEDn","\xC1lex de la Iglesia","Berlanga","Rodrigo Sorogoyen"],i:["Steven Spielberg","Guillermo del Toro","Alfonso Cuar\xF3n","Quentin Tarantino","Martin Scorsese","Federico Fellini","Woody Allen"]},{t:"Son signos del zodiaco",c:["Aries","Tauro","G\xE9minis","C\xE1ncer","Leo","Virgo","Libra","Escorpio","Sagitario","Capricornio","Acuario","Piscis"],i:["Ori\xF3n","Osa Mayor","Casiopea","Pegaso","Andr\xF3meda","Can Mayor","Perseo"]},{t:"Son verduras u hortalizas",c:["Lechuga","Zanahoria","Pimiento","Berenjena","Calabac\xEDn","Puerro","Coliflor","Br\xF3coli","Espinaca","Alcachofa","Pepino"],i:["Pl\xE1tano","Pera","Manzana","Uva","Mel\xF3n","Sand\xEDa","Naranja"]},{t:"Son capitales de pa\xEDses de Am\xE9rica",c:["Buenos Aires","Santiago de Chile","Lima","Bogot\xE1","Caracas","Quito","Montevideo","Asunci\xF3n","Ciudad de M\xE9xico","La Habana","Ottawa","Washington"],i:["R\xEDo de Janeiro","Nueva York","Toronto","Guayaquil","Medell\xEDn","C\xF3rdoba","Valpara\xEDso"]},{t:"Son dioses griegos",c:["Zeus","Hera","Poseid\xF3n","Atenea","Apolo","Artemisa","Ares","Afrodita","Hermes","Hefesto","Dioniso","Dem\xE9ter"],i:["Od\xEDn","Thor","Ra","Anubis","J\xFApiter","Marte","Venus"]},{t:"Han ganado LaLiga",c:["Real Madrid","Barcelona","Atl\xE9tico de Madrid","Athletic Club","Valencia","Real Sociedad","Deportivo de La Coru\xF1a","Sevilla","Real Betis"],i:["Villarreal","Celta de Vigo","Espanyol","Getafe","Osasuna","M\xE1laga","Real Zaragoza"]},{t:"Salen en el Quijote",c:["Sancho Panza","Dulcinea","Rocinante","Rucio","Sans\xF3n Carrasco","Maritornes","Gin\xE9s de Pasamonte","El cura","El barbero","Altisidora"],i:["Lazarillo","Celestina","Melibea","Segismundo","Don Juan Tenorio","Marianela","Fortunata"]},{t:"Viven en la sabana africana",c:["Le\xF3n","Cebra","Jirafa","Hipop\xF3tamo","Rinoceronte","\xD1u","Guepardo","Hiena","Elefante africano","Suricata","Gacela"],i:["Canguro","Koala","Panda","Tigre","Oso polar","Ping\xFCino","Bisonte"]}],musicales:[{t:"Canciones de Mecano",c:["Hijo de la Luna","Cruz de navajas","Me cuesta tanto olvidarte","La fuerza del destino","Mujer contra mujer","Hoy no me puedo levantar","Barco a Venus","Me col\xE9 en una fiesta","El 7 de septiembre","Maquillaje"],i:["Entre dos tierras","La flaca","Rosas","Devu\xE9lveme a mi chica","Sin documentos","Coraz\xF3n part\xEDo","Chiquilla"],musical:!0},{t:"Canciones de los Beatles",c:["Yesterday","Let It Be","Hey Jude","Help!","Yellow Submarine","Something","Come Together","Michelle","Penny Lane","All You Need Is Love","Here Comes the Sun"],i:["Bohemian Rhapsody","Imagine","Satisfaction","Thriller","Like a Rolling Stone","Wonderwall","Hotel California"],musical:!0},{t:"Canciones de ABBA",c:["Dancing Queen","Mamma Mia","Waterloo","Fernando","Chiquitita","Gimme! Gimme! Gimme!","The Winner Takes It All","Super Trouper","SOS","Take a Chance on Me"],i:["I Will Survive","Y.M.C.A.","Like a Prayer","Girls Just Want to Have Fun","Don't Stop Me Now","Billie Jean","Staying Alive"],musical:!0},{t:"Canciones de Queen",c:["Bohemian Rhapsody","We Will Rock You","We Are the Champions","Don't Stop Me Now","Somebody to Love","Radio Ga Ga","I Want to Break Free","Another One Bites the Dust","Killer Queen","The Show Must Go On"],i:["Stairway to Heaven","Smoke on the Water","Highway to Hell","Sweet Child o' Mine","Livin' on a Prayer","Born to Run","Imagine"],musical:!0},{t:"Canciones de Espa\xF1a en Eurovisi\xF3n",c:["La, la, la","Vivo cantando","Eres t\xFA","Bailar pegados","Europe's Living a Celebration","La venda","SloMo","Eaea","Zorra","Tu canci\xF3n","Dile que la quiero"],i:["Waterloo","Euphoria","Fuego","Arcade","Toy","Soldi","Ne partez pas sans moi"],musical:!0},{t:"Canciones de Rosal\xEDa",c:["Malamente","Pienso en tu mir\xE1","Con altura","Despech\xE1","Saoko","Bizcochito","Candy","Motomami","Juro que","Di mi nombre"],i:["Despacito","Gasolina","Bichota","Tusa","Mi gente","La bicicleta","Haw\xE1i"],musical:!0},{t:"Canciones de Alejandro Sanz",c:["Coraz\xF3n part\xEDo","Amiga m\xEDa","Y si fuera ella","Mi soledad y yo","Cuando nadie me ve","Quisiera ser","No es lo mismo","Si hay Dios","Looking for Paradise","Pisando fuerte"],i:["Hijo de la Luna","Buler\xEDa","La flaca","Vivir mi vida","Color esperanza","Entre dos tierras","Princesas"],musical:!0}],parejas:[{t:"Pa\xEDs y su capital",p:[["Francia","Par\xEDs"],["Italia","Roma"],["Portugal","Lisboa"],["Alemania","Berl\xEDn"],["Jap\xF3n","Tokio"],["Egipto","El Cairo"],["Per\xFA","Lima"],["Canad\xE1","Ottawa"],["Grecia","Atenas"]]},{t:"Autor y su obra",p:[["Cervantes","El Quijote"],["Shakespeare","Hamlet"],["Garc\xEDa M\xE1rquez","Cien a\xF1os de soledad"],["Lorca","Bodas de sangre"],["Tolkien","El Se\xF1or de los Anillos"],["Orwell","1984"],["Homero","La Odisea"],["Dante","La divina comedia"],["J. K. Rowling","Harry Potter"]]},{t:"Pintor y su cuadro",p:[["Picasso","Guernica"],["Vel\xE1zquez","Las Meninas"],["Goya","La maja desnuda"],["Leonardo","La Gioconda"],["Munch","El grito"],["Dal\xED","La persistencia de la memoria"],["Van Gogh","La noche estrellada"],["Botticelli","El nacimiento de Venus"],["El Bosco","El jard\xEDn de las delicias"]]},{t:"Elemento y su s\xEDmbolo",p:[["Oro","Au"],["Plata","Ag"],["Hierro","Fe"],["Sodio","Na"],["Potasio","K"],["Plomo","Pb"],["Cobre","Cu"],["Helio","He"],["Mercurio","Hg"]]},{t:"Animal y su cr\xEDa",p:[["Vaca","Ternero"],["Caballo","Potro"],["Oveja","Cordero"],["Perro","Cachorro"],["Cerdo","Lech\xF3n"],["Gallina","Pollito"],["Rana","Renacuajo"],["Cabra","Cabrito"],["Burro","Pollino"]]},{t:"Ciudad y su monumento",p:[["Par\xEDs","Torre Eiffel"],["Granada","Alhambra"],["Roma","Coliseo"],["Londres","Big Ben"],["Agra","Taj Mahal"],["Barcelona","Sagrada Familia"],["Atenas","Parten\xF3n"],["Nueva York","Estatua de la Libertad"],["R\xEDo de Janeiro","Cristo Redentor"]]},{t:"Pa\xEDs y su moneda",p:[["Jap\xF3n","Yen"],["Reino Unido","Libra"],["Rusia","Rublo"],["India","Rupia"],["China","Yuan"],["Suiza","Franco"],["Brasil","Real"],["M\xE9xico","Peso"],["Corea del Sur","Won"]]},{t:"Superh\xE9roe y su identidad",p:[["Batman","Bruce Wayne"],["Superman","Clark Kent"],["Spider-Man","Peter Parker"],["Iron Man","Tony Stark"],["Hulk","Bruce Banner"],["Capit\xE1n Am\xE9rica","Steve Rogers"],["Wonder Woman","Diana Prince"],["Flash","Barry Allen"],["Lobezno","Logan"]]},{t:"Grupo y su cantante",p:[["H\xE9roes del Silencio","Enrique Bunbury"],["Queen","Freddie Mercury"],["U2","Bono"],["Mecano","Ana Torroja"],["La Oreja de Van Gogh","Amaia Montero"],["Jarabe de Palo","Pau Don\xE9s"],["The Police","Sting"],["Nirvana","Kurt Cobain"],["Oasis","Liam Gallagher"]]}],jaque:[{p:"\xBFCu\xE1ntos lados tiene un hex\xE1gono?",op:["Cinco","Seis","Ocho"],r:1},{p:"\xBFQu\xE9 planeta es conocido como el planeta rojo?",op:["Marte","Venus","J\xFApiter"],r:0},{p:"\xBFEn qu\xE9 a\xF1o lleg\xF3 Col\xF3n a Am\xE9rica?",op:["1492","1512","1453"],r:0},{p:"\xBFCu\xE1l es el r\xEDo m\xE1s largo de la pen\xEDnsula ib\xE9rica?",op:["Ebro","Duero","Tajo"],r:2},{p:"\xBFCu\xE1ntos jugadores de un equipo de baloncesto hay en la pista?",op:["Cinco","Seis","Siete"],r:0},{p:"\xBFQui\xE9n pint\xF3 el Guernica?",op:["Dal\xED","Picasso","Mir\xF3"],r:1},{p:"\xBFCu\xE1l es la capital de Australia?",op:["S\xEDdney","Melbourne","Canberra"],r:2},{p:"\xBFCu\xE1l es el oc\xE9ano m\xE1s grande?",op:["Atl\xE1ntico","Pac\xEDfico","\xCDndico"],r:1},{p:"\xBFQu\xE9 instrumento tocaba Paco de Luc\xEDa?",op:["Piano","Guitarra","Viol\xEDn"],r:1},{p:"\xBFCu\xE1ntos minutos son hora y media?",op:["Noventa","Ochenta","Cien"],r:0},{p:"\xBFEn qu\xE9 continente est\xE1 Egipto?",op:["Asia","\xC1frica","Europa"],r:1},{p:"\xBFQu\xE9 metal tiene el s\xEDmbolo Fe?",op:["Hierro","Plata","Plomo"],r:0},{p:"\xBFCu\xE1ntas cuerdas tiene una guitarra espa\xF1ola?",op:["Cuatro","Seis","Doce"],r:1},{p:"\xBFCu\xE1l es el animal terrestre m\xE1s r\xE1pido?",op:["Le\xF3n","Guepardo","Caballo"],r:1},{p:"\xBFQu\xE9 gas necesitamos respirar para vivir?",op:["Ox\xEDgeno","Helio","Nitr\xF3geno"],r:0}],imagenes:[{e:"\u{1F5FC}",op:["Torre Eiffel","Big Ben","Torre de Pisa"],r:0},{e:"\u{1F5FD}",op:["Estatua de la Libertad","Cristo Redentor","La Sirenita"],r:0},{e:"\u{1F3BB}",op:["Guitarra","Viol\xEDn","Arpa"],r:1},{e:"\u{1F992}",op:["Camello","Jirafa","Llama"],r:1},{e:"\u{1F30B}",op:["Monta\xF1a","Glaciar","Volc\xE1n"],r:2},{e:"\u{1F3A1}",op:["Noria","Tiovivo","Monta\xF1a rusa"],r:0},{e:"\u{1F989}",op:["Halc\xF3n","B\xFAho","Loro"],r:1},{e:"\u{1F34D}",op:["Mango","Coco","Pi\xF1a"],r:2},{e:"\u{1F419}",op:["Calamar","Pulpo","Medusa"],r:1},{e:"\u{1F3F0}",op:["Castillo","Iglesia","Faro"],r:0},{e:"\u{1FA90}",op:["Marte","Saturno","Luna"],r:1},{e:"\u{1F9A9}",op:["Flamenco","Cig\xFCe\xF1a","Garza"],r:0},{e:"\u{1F335}",op:["Palmera","Cactus","Helecho"],r:1},{e:"\u{1F9ED}",op:["Reloj","Br\xFAjula","Bar\xF3metro"],r:1},{e:"\u{1F950}",op:["Cruas\xE1n","Ensaimada","Churro"],r:0},{e:"\u{1F3BA}",op:["Tromb\xF3n","Tuba","Trompeta"],r:2}]};var io=null,Fp=n=>{io=n},Oc=null,G2=n=>n<=4?2:n===9?3:n===15?5:4;function si({cat:n="",celdas:e,cols:t=null,lados:i=null,tiempo:s=null,titulo:a="",clase:r=""}){fn();let o=xe("#tablero");t=t||G2(e.length);let l={el:o,celdas:e.map(c=>({...c,est:c.est||""})),cols:t,cat:n,tiempo:s,lados:i,resolver:null};return o.className="tablero "+r+(i?" partida":""),o.innerHTML=`${a?`<div class="tb-tit">${Ne(a)}</div>`:""}<div class="tb-tiempo"></div>
    <div class="tb-cuerpo">${i?'<div class="tb-lado l0"></div>':""}<div class="tb-grid" style="grid-template-columns:repeat(${t},1fr)"></div>${i?'<div class="tb-lado l1"></div>':""}</div>
    <div class="tb-cat"><span>${Ne(n)}</span></div><div class="tb-acc"></div>`,Oc=l,Ra(),o.classList.remove("hidden"),W2(l)}function W2(n){return{T:n,marcar(e,t){n.celdas[e].est=t,Ra()},estado:e=>n.celdas[e].est,tiempo(e){n.tiempo=e;let t=n.el.querySelector(".tb-tiempo");t.textContent=e==null?"":String(Math.ceil(e)),t.classList.toggle("low",e!=null&&e<=10),io?.pantalla("panel",Ih(n))},lados(e){n.lados=e,Op()},revelar(){n.celdas.forEach(e=>{(!e.est||e.est==="sel"||e.est==="tapada")&&(e.est=e.ok?"rev-ok":"rev-ko")}),Ra()},cat(e){n.cat=e,n.el.querySelector(".tb-cat span").textContent=e,io?.pantalla("panel",Ih(n))},elegir(e,t=[]){let i=new Set(e);return n.disp=i,Ra(),an(Promise.race([new Promise(s=>{n.resolver=a=>{n.resolver=null,n.disp=null,re.play("tecla"),s(a)}}),...t])).finally(()=>{n.resolver=null,n.disp=null,Ra()})},botones(e){let t=n.el.querySelector(".tb-acc");return t.innerHTML="",new Promise(i=>{(e||[]).forEach(s=>{let a=document.createElement("button");a.className="tbb "+(s.cls||""),a.innerHTML=s.label,a.onclick=r=>{r.stopPropagation(),re.play("tecla"),i(s.v)},t.appendChild(a)})})},limpiarBotones(){n.el.querySelector(".tb-acc").innerHTML=""},pintar:Ra}}var Up={ok:"\u{1F4A1}",ko:"\u{1F4A5}",ya:"\u{1F4A1}",yb:"\u{1F4A1}"};function Ra(){let n=Oc;if(!n)return;let e=n.el.querySelector(".tb-grid");e.innerHTML="",n.celdas.forEach((t,i)=>{let s=document.createElement("button"),a=t.est||"";s.className="tc "+a+(n.disp&&n.disp.has(i)?" disp":"")+(t.img&&a==="tapada","");let r=a==="tapada"?"?":(t.img&&(a===""||a==="disp")&&t.ocultaImg,t.t);s.innerHTML=`<span class="tt">${Ne(r)}</span>${Up[a]?`<i class="ic">${Up[a]}</i>`:""}${t.badge?`<em class="bd">${Ne(t.badge)}</em>`:""}`,s.disabled=!(n.disp&&n.disp.has(i)),s.onclick=o=>{o.stopPropagation(),n.resolver&&n.disp&&n.disp.has(i)&&n.resolver(i)},e.appendChild(s)}),Op(),io?.pantalla("panel",Ih(n))}function Op(){let n=Oc;!n||!n.lados||n.lados.forEach((e,t)=>{let i=n.el.querySelector(".tb-lado.l"+t);!i||!e||(i.style.setProperty("--c",e.color),i.innerHTML=`<div class="av">${e.emoji||"\u{1F642}"}</div><b>${Ne(e.nombre)}</b><small>${Ne(e.prof||"")}</small><div class="lm">${e.marca!=null?Ne(String(e.marca)):ut(e.dinero)}</div>`,i.classList.toggle("act",!!e.activo))})}function Ih(n){return{cat:n.cat,cols:n.cols,tiempo:n.tiempo==null?null:Math.ceil(n.tiempo),celdas:n.celdas.map(e=>({t:e.t,est:e.est==="rev-ok"||e.est==="rev-ko"?"":e.est}))}}function fn(){let n=xe("#tablero");n&&(n.classList.add("hidden"),n.innerHTML=""),Oc=null,io?.pantalla("logo")}var X2=()=>!!window.__AUTO,ls=n=>n.humano&&!X2(),qp=()=>window.PANELES_EXTRA||{},Bp=(n=!1)=>[...n?Gn.musicales:Gn.paneles,...(qp().paneles||[]).filter(e=>!!e.musical===n&&e.t&&e.c&&e.i)],Y2=()=>[...Gn.parejas,...(qp().parejas||[]).filter(n=>n.t&&n.p&&n.p.length>=8)];function cs(n,e,t,{musical:i=!1}={}){let s=Bp(i).filter(o=>o.c.length>=e&&o.i.length>=t),a=s.filter(o=>!n.usados.has(o.t));a.length||(s.forEach(o=>n.usados.delete(o.t)),a=s);let r=Xt(a);return n.usados.add(r.t),{t:r.t,celdas:un([...un(r.c).slice(0,e).map(o=>({t:o,ok:!0})),...un(r.i).slice(0,t).map(o=>({t:o,ok:!1}))])}}function Pt(n,e=null){let t=e?n.conc.indexOf(e):-1;pt.set(n,t),n.conc.forEach(i=>n.P.setAtril(i.atril,{nombre:i.nombre,color:i.color,dinero:ut(i.dinero+(i.ronda||0))}))}function Mn(n,e,t){n.P.bombilla(e.atril,t?"on":"rota"),re.play(t?"acierto":"fallo"),t||setTimeout(()=>re.play("ooh"),250);let i=e.atril;setTimeout(()=>n.P.bombilla(i,"off"),t?1300:2200)}function ao(n,e,t=.45){if(n.humano||Math.random()>t)return;let i=Xt(Ca[e]);rs(i,1800,n.atril,n.nombre),re.say(i,n.voz)}var Pa=(n,e={})=>({nombre:n.nombre,prof:n.prof,color:n.color,emoji:n.emoji,dinero:n.dinero,...e});function Nh(n,e,t,i="ok",s=null){let a=s??n.habil??.8,r=t.filter(o=>e[o][i]);return r.length&&Math.random()<a?Xt(r):Xt(t)}async function Ia(n,e,t,i,{plantar:s=!1,seg:a=20,prop:r="ok",hab:o=null}={}){if(!ls(e))return await qe(650+Math.random()*650),s&&e.ronda>=200&&Math.random()<Math.min(.75,e.ronda/900)?"PLANTA":Nh(e,t.T.celdas,i,r,o);let l=n.ilimitado?null:new as(a,u=>t.tiempo(u)).start(),c=s&&e.ronda>0?t.botones([{label:"\u270B Me planto",v:"PLANTA",cls:"pl"}]):new Promise(()=>{});try{return await t.elegir(i,[c,l?l.fin.then(()=>"TIEMPO"):new Promise(()=>{})])}finally{l?.stop(),t.tiempo(null),t.limpiarBotones()}}async function so(n,e,t,i,s,a,{hab:r=.72,seg:o=15,pre:l=""}={}){let c=t.T.el.querySelector(".tb-acc");c.innerHTML=l+`<div class="tb-preg"><b>${Ne(e.nombre)}</b> \xB7 ${Ne(i)}</div>`;let u=document.createElement("div");u.className="tb-ops",c.appendChild(u),Ti(i);let d=s.map((p,g)=>{let v=document.createElement("button");return v.className="tbb",v.textContent=p,u.appendChild(v),v}),h;if(!ls(e))await qe(1300),h=Math.random()<r?a:Xt(s.map((p,g)=>g).filter(p=>p!==a));else{let p=n.ilimitado?null:new as(o,g=>t.tiempo(g)).start();h=await an(Promise.race([new Promise(g=>d.forEach((v,x)=>v.onclick=f=>{f.stopPropagation(),re.play("tecla"),g(x)})),p?p.fin.then(()=>-1):new Promise(()=>{})])),p?.stop(),t.tiempo(null)}return d.forEach((p,g)=>{p.disabled=!0,g===a?p.classList.add("okb"):g===h&&p.classList.add("kob")}),await qe(1300),c.innerHTML="",h}async function qc(n,{titulo:e,cat:t,celdas:i,valor:s=100,jugadores:a,imagenIdx:r=-1,seguidas:o=!1,plantar:l=!0}){let c=si({cat:t,celdas:i,titulo:e});n.cam("pantalla"),a.forEach(f=>{f.ronda=0,f.plantado=!1,f.yaJugo=!1});let u=i.filter(f=>f.ok).length,d=i.length-u,h=0,p=0,g=0,v=()=>c.T.celdas.map((f,S)=>!f.est||f.est==="tapada"?S:-1).filter(f=>f>=0),x=()=>a.filter(f=>!f.plantado&&!(o&&f.yaJugo));for(await Ti(t);h<u&&x().length;){if(p>=d){await et(Xe.todasFuera),a.forEach(E=>{E.plantado||(E.ronda=0)});break}let f=a[g%a.length],S=0;for(;(f.plantado||o&&f.yaJugo)&&S++<8;)g++,f=a[g%a.length];Pt(n,f),pt.ronda(`${e} \xB7 turno de ${f.nombre}`);let T=await Ia(n,f,c,v(),{plantar:l});if(T==="PLANTA"){f.plantado=!0,f.dinero+=f.ronda,f.ronda=0,re.play("aplausos"),ao(f,"planto",1),Ot(`\u270B ${f.nombre} se planta`),g++,Pt(n),await qe(700);continue}if(T==="TIEMPO"){Ot(`\u23F0 ${f.nombre}: \xA1se acab\xF3 el tiempo!`),f.ronda=0,o&&(f.yaJugo=!0),g++,Pt(n);continue}c.T.celdas[T].ok?(h++,c.marcar(T,"ok"),Mn(n,f,!0),f.ronda+=s,ao(f,"bien",.3),Pt(n,f),await qe(900),T===r&&await $2(n,f,c),o||g++):(p++,c.marcar(T,"ko"),Mn(n,f,!1),f.ronda=0,ao(f,"mal",.5),Pt(n,f),await qe(1100),o&&(f.yaJugo=!0),g++)}a.forEach(f=>{f.plantado||(f.dinero+=f.ronda),f.ronda=0,f.plantado=!1}),c.revelar(),Pt(n),await qe(1800),fn(),pt.ronda("")}async function $2(n,e,t){let i=Xt(Gn.imagenes);re.play("comodin"),await et(Xe.imagen),await so(n,e,t,"\xBFQu\xE9 es esta imagen?",i.op,i.r,{hab:.75,pre:`<div class="tb-img">${i.e}</div>`})===i.r?(e.comodines=Math.min(2,(e.comodines||0)+1),re.play("comodin"),await et(Xe.imagenOk)):(e.ronda-=100,re.play("fallo"),await et(Xe.imagenKo)),Pt(n,e)}async function Bc(n,e,t){await Rn("LA REPESCA","9 casillas \xB7 7 correctas \xB7 2 incorrectas \xB7 45 s"),await et(Xe.repesca);let i=cs(n,7,2),s=[Pa(e,{marca:"FAROLILLO ROJO"}),Pa(t,{marca:"ASPIRANTE"})],a=si({cat:i.t,celdas:i.celdas,lados:s,titulo:"LA REPESCA"});n.cam("pantalla"),await Ti(i.t);let r=new as(n.ilimitado?0:45,u=>a.tiempo(u)).start(),o=0,l=null;for(;!l;){let u=[e,t][o%2];s.forEach((p,g)=>p.activo=g===o%2),a.lados(s),pt.ronda("Repesca \xB7 turno de "+u.nombre);let d=a.T.celdas.map((p,g)=>p.est?-1:g).filter(p=>p>=0),h=ls(u)?await a.elegir(d,[r.fin.then(()=>"TIEMPO")]):await Promise.race([(async()=>(await qe(800+Math.random()*500),Nh(u,a.T.celdas,d,"ok",.85)))(),r.fin.then(()=>"TIEMPO")]);if(h==="TIEMPO"||r.rest<=0){Ot("\u23F0 \xA1Tiempo!"),l=u;break}a.T.celdas[h].ok?(a.marcar(h,"ok"),re.play("acierto"),o++,await qe(600)):(a.marcar(h,"ko"),re.play("fallo"),l=u,await qe(900))}r.stop(),a.revelar();let c=l===e?t:e;return await qe(1200),fn(),pt.ronda(""),await Pn(`\xA1${Ne(c.nombre)} gana la repesca!`,`${Ne(l.nombre)} se despide`,2400),c}async function Dh(n){await Rn("\xA1A POR TODAS!","16 casillas \xB7 10 correctas \xB7 6 incorrectas \xB7 100 \u20AC por acierto"),await et(Xe.aPorTodas);let e=cs(n,10,6),t=e.celdas.map((i,s)=>i.ok?s:-1).filter(i=>i>=0);await qc(n,{titulo:"\xA1A POR TODAS!",cat:e.t,celdas:e.celdas,valor:100,jugadores:n.conc.filter(i=>!i.fuera),imagenIdx:Xt(t)})}async function Uh(n){await Rn("\xA1ESA ME SUENA!","Panel musical \xB7 12 casillas \xB7 8 correctas"),await et(Xe.esaMeSuena),re.music("musical",{cancion:!0}),re.hayCanciones()||Ot("\u{1F3B5} Sube tus canciones en Opciones \u203A Mis canciones para que suenen aqu\xED",3500);let e=cs(n,8,4,{musical:!0});await qc(n,{titulo:"\xA1ESA ME SUENA!",cat:e.t,celdas:e.celdas,valor:100,jugadores:n.conc.filter(t=>!t.fuera),seguidas:!0}),re.music("tension")}var j2=["\u{1F34E}","\u{1F6B2}","\u{1F3B8}","\u{1F418}","\u26BD","\u{1F302}","\u{1F3A9}","\u{1F680}","\u{1F355}","\u{1F422}","\u{1F4DA}","\u{1F388}","\u{1F98A}","\u{1F344}","\u23F0","\u{1F511}","\u{1F42C}","\u{1F33B}","\u{1F369}","\u{1F9F2}","\u{1F3B2}","\u{1F99C}","\u{1F681}","\u{1F9C0}","\u{1F40C}","\u{1F941}","\u{1F3C0}","\u{1F349}","\u{1F980}","\u{1F576}\uFE0F"];async function Fh(n){await Rn("F\xCDJATE BIEN","16 im\xE1genes \xB7 10 est\xE1n repetidas"),await et(Xe.fijate);let e=un(j2),t=e.slice(0,5),i=e.slice(5,11),s=un([...t,...t].map(r=>({t:r,ok:!0})).concat(i.map(r=>({t:r,ok:!1})))),a=si({cat:"\xA1Memoriza! Diez im\xE1genes est\xE1n repetidas",celdas:s,titulo:"F\xCDJATE BIEN",clase:"emojis"});n.cam("pantalla");for(let r=6;r>0;r--)a.tiempo(r),await qe(1e3);a.tiempo(null),fn(),s.forEach(r=>r.est="tapada"),re.play("rayo"),await et(Xe.fijateTapo),await qc(n,{titulo:"F\xCDJATE BIEN",cat:"Estaban repetidas",celdas:s,valor:100,jugadores:n.conc.filter(r=>!r.fuera)})}async function Lh(n,e,t,i){let s=cs(n,8,4),a=[Pa(e),Pa(t)],r=si({cat:s.t,celdas:s.celdas,lados:a,titulo:i,clase:"caliente"});n.cam("pantalla"),await Ti(s.t);let o=0,l=null;for(;!l;){let u=[e,t][o%2];a.forEach((p,g)=>p.activo=g===o%2),r.lados(a),Pt(n,u),pt.ronda(`${i} \xB7 turno de ${u.nombre}`);let d=r.T.celdas.map((p,g)=>p.est?-1:g).filter(p=>p>=0),h=await Ia(n,u,r,d,{seg:15,hab:.82});if(h==="TIEMPO"){Ot("\u23F0 \xA1Tiempo!"),l=u;break}r.T.celdas[h].ok?(r.marcar(h,"ok"),Mn(n,u,!0),o++,await qe(700)):(r.marcar(h,"ko"),Mn(n,u,!1),l=u,ao(u,"mal",.8),await qe(1100))}r.revelar(),await qe(1400),fn(),pt.ronda("");let c=l===e?t:e;return await Pn(`\xA1${Ne(c.nombre)} gana el duelo!`,"",1800),c}async function Oh(n){await Rn("LA BOMBILLA CALIENTE","Duelos 1.\xBA contra 4.\xBA y 2.\xBA contra 3.\xBA"),await et(Xe.bombilla);let e=La(n),t=await Lh(n,e[0],e[3],"DUELO 1 \xB7 1.\xBA CONTRA 4.\xBA"),i=await Lh(n,e[1],e[2],"DUELO 2 \xB7 2.\xBA CONTRA 3.\xBA");await et(Xe.bombillaFinal);let s=await Lh(n,t,i,"FINAL DE LA BOMBILLA CALIENTE"),a=s===t?i:t;s.dinero+=500,a.dinero+=100,re.play("aplausos"),Pt(n),await Pn(`\u{1F525} ${Ne(s.nombre)} +500 \u20AC`,`${Ne(a.nombre)} +100 \u20AC`,2400)}var La=n=>n.conc.filter(e=>!e.fuera).slice().sort((e,t)=>t.dinero-e.dinero);async function qh(n){await Rn("BUSCA PAREJA","8 parejas \xB7 400/400/200/200/100/100/100/100 \u20AC"),await et(Xe.buscaPareja);let e=Xt(Y2()),t=un(e.p).slice(0,8),i=un(t.flatMap((c,u)=>[{t:c[0],par:u,ok:!0},{t:c[1],par:u,ok:!0}])),s=si({cat:e.t,celdas:i,titulo:"BUSCA PAREJA"});n.cam("pantalla"),await Ti(e.t);let a=[400,400,200,200,100,100,100,100],r=0,o=0,l=La(n).reverse();for(;r<8;){let c=l[o%l.length];Pt(n,c),pt.ronda("Busca pareja \xB7 turno de "+c.nombre);let u=()=>s.T.celdas.map((g,v)=>g.est?-1:v).filter(g=>g>=0),d=await Ia(n,c,s,u(),{hab:0});if(d==="TIEMPO"){o++;continue}s.marcar(d,"sel"),await qe(400);let h,p=s.T.celdas.findIndex((g,v)=>v!==d&&g.par===s.T.celdas[d].par);if(!ls(c))await qe(800),h=Math.random()<(c.habil||.75)*.8?p:Xt(u());else if(h=await Ia(n,c,s,u(),{hab:0}),h==="TIEMPO"){s.marcar(d,""),o++;continue}if(s.marcar(h,"sel"),await qe(700),h===p){let g=a[r++];s.T.celdas[d].badge=s.T.celdas[h].badge=ut(g),s.marcar(d,"ok"),s.marcar(h,"ok"),Mn(n,c,!0),c.dinero+=g,ao(c,"bien",.4),Pt(n,c),await qe(900)}else s.marcar(d,"ko"),s.marcar(h,"ko"),re.play("fallo"),await qe(1100),s.marcar(d,""),s.marcar(h,""),o++}await qe(1200),fn(),pt.ronda(""),Pt(n)}async function Bh(n,e,t){await Rn("CARA A CARA","12 temas \xB7 primero en encender 7 bombillas"),await et(Xe.caraACara);let i=un(Bp().filter(u=>u.c.length>=1&&u.i.length>=2)).slice(0,12);e.color="#ffd21a",t.color="#ff4fa8";let s=i.map(u=>({t:u.t,ok:!0,p:u})),a=[Pa(e,{marca:0}),Pa(t,{marca:0})],r=si({cat:"Elige tema",celdas:s,lados:a,titulo:"CARA A CARA",clase:"temas"});n.cam("pantalla");let o=[0,0],l=0;for(;o[0]<7&&o[1]<7;){let u=r.T.celdas.map((T,y)=>T.est?-1:y).filter(T=>T>=0);if(!u.length)break;let d=l%2,h=[e,t][d],p=[e,t][1-d];a.forEach((T,y)=>{T.activo=y===d,T.marca=o[y]}),r.lados(a),Pt(n,h),pt.ronda(`Cara a cara \xB7 elige tema ${h.nombre}`);let g=await Ia(n,h,r,u,{hab:0});g==="TIEMPO"&&(g=Xt(u)),r.marcar(g,"sel");let v=r.T.celdas[g].p;r.cat(v.t);let x=un([{t:Xt(v.c),ok:!0},...un(v.i).slice(0,2).map(T=>({t:T,ok:!1}))]),f=x.findIndex(T=>T.ok),S=await so(n,h,r,`\xBFCu\xE1l cumple: \xAB${v.t}\xBB?`,x.map(T=>T.t),f);if(S===f)o[d]++,r.marcar(g,d?"yb":"ya"),Mn(n,h,!0);else{re.play("fallo"),Ot("\u21A9\uFE0F \xA1Rebote para "+p.nombre+"!");let T=x.map((E,w)=>w).filter(E=>E!==S),y=await so(n,p,r,`Rebote: \xBFcu\xE1l cumple \xAB${v.t}\xBB?`,T.map(E=>x[E].t),T.indexOf(f),{hab:.65});T[y]===f?(o[1-d]++,r.marcar(g,d?"ya":"yb"),Mn(n,p,!0)):(r.marcar(g,"ko"),re.play("fallo"))}a.forEach((T,y)=>T.marca=o[y]),r.lados(a),r.cat("Elige tema"),l++,await qe(500)}let c;if(o[0]===o[1]){await et(Xe.jaqueMate);let u=0;for(;!c;){let d=Xt(Gn.jaque),h=[e,t][u%2],p=[e,t][1-u%2],g=await so(n,h,r,"JAQUE MATE \xB7 "+d.p,d.op,d.r,{hab:.7});if(g===d.r)c=h;else{let v=d.op.map((f,S)=>S).filter(f=>f!==g),x=await so(n,p,r,"Rebote \xB7 "+d.p,v.map(f=>d.op[f]),v.indexOf(d.r),{hab:.6});v[x]===d.r&&(c=p)}u++}}else c=o[0]>o[1]?e:t;return await qe(800),fn(),pt.ronda(""),re.play("ovacion"),await Pn(`\xA1${Ne(c.nombre)} gana el cara a cara!`,`${o[0]} \u2013 ${o[1]} \xB7 juega El minuto diab\xF3lico`,2600),c}async function zh(n,e,t){await Rn("EL MINUTO DIAB\xD3LICO","3 paneles \xB7 2 de 4 \xB7 5 de 9 \xB7 8 de 15"),await et(Xe.minuto);let i=e.comodines||0,s=60+(i>=2?15:i===1?5:0);i&&(re.play("comodin"),await et(Xe.minutoComodin)),re.music("diabolico"),await no(t,`${e.nombre} juega por el bote \xB7 ${s} segundos`,2400);let a=[[2,2],[5,4],[8,7]],r=0,o=new as(n.ilimitado?0:s,l=>{xe("#tablero .tb-tiempo")&&(xe("#tablero .tb-tiempo").textContent=String(Math.ceil(l))),pt.timer(l)}).start();try{for(;r<3&&!o.terminado;){let[l,c]=a[r],u=cs(n,l,c),d=si({cat:`${u.t} \xB7 marca ${l}`,celdas:u.celdas,titulo:`PANEL ${r+1} DE 3`,clase:"diabolico"});n.cam("pantalla"),Ti(u.t),n.P.correr(e.atril,!0);let h=new Set,p=ls(e)?d.botones([{label:"\u26A1 PULSAR",v:"PULSAR",cls:"pulsar"}]):null;if(ls(e))for(;;){let v=await d.elegir(d.T.celdas.map((x,f)=>f),[p,o.fin.then(()=>"TIEMPO")]);if(v==="PULSAR"||v==="TIEMPO")break;h.has(v)?(h.delete(v),d.marcar(v,"")):(h.add(v),d.marcar(v,"sel"))}else{let v=un(d.T.celdas.map((f,S)=>f.ok?S:-1).filter(f=>f>=0)),x=un(d.T.celdas.map((f,S)=>f.ok?-1:S).filter(f=>f>=0));for(let f of v){if(o.terminado)break;await qe(700+Math.random()*600);let S=Math.random()<.9?f:x.pop();S!=null&&(h.add(S),d.marcar(S,"sel"))}}if(d.limpiarBotones(),o.terminado){fn();break}n.P.correr(e.atril,!1),re.play("pulsador"),await qe(500);let g=h.size===l&&[...h].every(v=>d.T.celdas[v].ok);[...h].forEach(v=>d.marcar(v,d.T.celdas[v].ok?"ok":"ko")),g?(Mn(n,e,!0),r++,Ot(r<3?"\u2705 "+Xe.minutoOk:"\u2705 \xA1Tercer panel!"),await qe(900)):(Mn(n,e,!1),Ot("\u274C "+Xe.minutoError),await qe(1100)),fn()}}finally{o.stop(),pt.sinTimer()}return re.stopMusic(),r>=3}async function kh(n){await Rn("PRIMERA RONDA","3 paneles de 16 casillas \xB7 10 correctas \xB7 6 incorrectas"),await et(Xe.clasicaR1);for(let e=0;e<3;e++){let t=cs(n,10,6);await Pn(`PANEL ${e+1}`,`Cada acierto vale ${ut(n.E.r1[e])}`,1600),await qc(n,{titulo:`PANEL ${e+1} DE 3`,cat:t.t,celdas:t.celdas,valor:n.E.r1[e],jugadores:n.conc})}}async function Vh(n){await Rn("SEGUNDA RONDA","Las apuestas \xB7 panel de 12 \xB7 encuentra 5 correctas"),await et(Xe.clasicaR2);for(let e of La(n).reverse()){if(e.dinero<=0){Ot(`${e.nombre} no tiene dinero para apostar`);continue}let t=[[.25,"25 %"],[.5,"La mitad"],[1,"\xA1Todo!"]],i;ls(e)?i=+await Ip(`<div class="txt">\xBFCU\xC1NTO APUESTAS, ${Ne(e.nombre.toUpperCase())}?</div><div class="sub">Tienes ${ut(e.dinero)}</div><div class="btns ov">${t.map(([c,u])=>`<button data-z="${c}">${u}<br><small>${ut(Math.round(e.dinero*c))}</small></button>`).join("")}</div>`):(i=Xt([.25,.5,.5,1]),await Pn(`${Ne(e.nombre)} apuesta ${ut(Math.round(e.dinero*i))}`,"",1500));let s=Math.round(e.dinero*i),a=cs(n,8,4),r=si({cat:`${a.t} \xB7 encuentra 5`,celdas:a.celdas,titulo:`APUESTA DE ${e.nombre.toUpperCase()}: ${ut(s)}`});n.cam("pantalla"),await Ti(a.t);let o=0,l=!1;for(Pt(n,e);o<5&&!l;){let c=r.T.celdas.map((d,h)=>d.est?-1:h).filter(d=>d>=0),u=await Ia(n,e,r,c,{hab:.84});u==="TIEMPO"||!r.T.celdas[u].ok?(u!=="TIEMPO"&&r.marcar(u,"ko"),Mn(n,e,!1),l=!0):(r.marcar(u,"ok"),Mn(n,e,!0),o++),await qe(600)}e.dinero+=l?-s:s,Pt(n),r.revelar(),await qe(1300),fn(),await Pn(l?`${Ne(e.nombre)} pierde ${ut(s)}`:`${Ne(e.nombre)} gana ${ut(s)}`,"",1600)}}async function Hh(n,e){await Rn("RONDA FINAL","\xA17 correctas de 12 y te llevas un coche!"),await et(Xe.clasicaFinal);let t=cs(n,7,5),i=si({cat:`${t.t} \xB7 encuentra las 7`,celdas:t.celdas,titulo:"\u{1F697} EL PANEL DEL COCHE"});n.cam("pantalla"),await Ti(t.t);let s=0,a=!1;Pt(n,e);let r=new as(n.ilimitado?0:60,o=>i.tiempo(o)).start();for(;s<7&&!a;){let o=i.T.celdas.map((c,u)=>c.est?-1:u).filter(c=>c>=0),l=ls(e)?await i.elegir(o,[r.fin.then(()=>"TIEMPO")]):(await qe(900),Nh(e,i.T.celdas,o,"ok",.9));if(l==="TIEMPO"||r.terminado&&r.rest<=0){a=!0;break}i.T.celdas[l].ok?(i.marcar(l,"ok"),Mn(n,e,!0),s++):(i.marcar(l,"ko"),Mn(n,e,!1),a=!0),await qe(500)}return r.stop(),i.revelar(),await qe(1500),fn(),!a&&s>=7}var pn={a3:{id:"a3",nombre:"Antena 3 (1998-2000)",corto:"Antena 3 \xB7 1998",clasica:!0,moneda:"pts",r1:[5e3,1e4,25e3],archivosMusica:["cabecera_antena3","cabecera"],archivosLogo:["logo_antena3","logo"]},cuatro:{id:"cuatro",nombre:"Cuatro (2006-2008)",corto:"Cuatro \xB7 2006",clasica:!0,moneda:"\u20AC",r1:[30,60,150],archivosMusica:["cabecera_cuatro","cabecera"],archivosLogo:["logo_cuatro","logo"]},veo7:{id:"veo7",nombre:"Veo7 \xB7 \xABTensi\xF3n sin l\xEDmite\xBB (2011)",corto:"Veo7 \xB7 2011",clasica:!0,moneda:"\u20AC",r1:[20,50,100],logo:{texto:"TENSI\xD3N",sub:"SIN L\xCDMITE"},archivosMusica:["cabecera_veo7","cabecera"],archivosLogo:["logo_veo7","logo"]},t5:{id:"t5",nombre:"Telecinco / Cuatro (2021-2022)",corto:"Telecinco \xB7 2021",bote:5e4,sube:1e3,dia:1e3,otros:100,archivosMusica:["cabecera_telecinco","cabecera"],archivosLogo:["logo_telecinco","logo"]},apunt:{id:"apunt",nombre:"\xC0 Punt \xB7 \xABAlta tensi\xF3\xBB (2024)",corto:"\xC0 Punt \xB7 2024",valenciano:!0,bote:1e4,sube:250,dia:500,otros:50,logo:{valenciano:!0},archivosMusica:["cabecera_apunt","cabecera"],archivosLogo:["logo_apunt","logo"]},tm:{id:"tm",nombre:"Telemadrid (2025)",corto:"Telemadrid \xB7 2025",bote:3e4,sube:600,dia:600,otros:60,archivosMusica:["cabecera_telemadrid","cabecera"],archivosLogo:["logo_telemadrid","logo"]}},Gh=n=>"at3d_bote_"+n,Na=n=>+localStorage.getItem(Gh(n))||pn[n].bote||0,zp=()=>pn[ge.etapa]?.clasica?ge.etapa:"cuatro",ro=()=>pn[ge.etapa]?.clasica?"t5":pn[ge.etapa]?ge.etapa:"t5";function Xh({etapa:n="t5",n:e=4,entreno:t=!1,ilimitado:i=!1,tema:s="normal"}={},a){let r=pn[n];Rp(r.moneda||"\u20AC");let o=un(os).slice(0,e-1),l=s==="famosos",c=[{nombre:ge.nombre||"T\xFA",prof:ge.profesion||"Concursante",voz:"sharvard",emoji:"\u{1F60E}",humano:!0},...o.map(d=>({...d,nombre:l?"\u2B50 "+d.nombre:d.nombre,habil:.72+Math.random()*.15}))].map((d,h)=>({...d,color:gp[h],dinero:0,ronda:0,comodines:0,plantado:!1,fuera:!1,atril:h})),u={E:r,etapa:n,conc:c,entreno:t,ilimitado:i,usados:new Set,P:a.P(),cam:a.cam,tema:s};u.P.reset();for(let d=e;d<4;d++)u.P.ocultarFig(d,!0);return Pt(u),u}async function Wh(){ge.chistes&&(await et(Xt(Fc),4e3),re.play("badumtss"),re.play("risas"),await qe(1e3))}var kp=`<p><b>Objetivo:</b> encontrar las respuestas correctas de cada panel y evitar las incorrectas, que <b>rompen la bombilla</b>. El ganador del d\xEDa juega <b>El minuto diab\xF3lico</b> por el bote.</p>
<p><b>Repesca</b> (9 casillas, 7 correctas, 45 s): el farolillo rojo del programa anterior contra un aspirante. Quien rompa la bombilla, se va.</p>
<p><b>\xA1A por todas!</b> (16 casillas, 10 correctas): por turnos, 100 \u20AC por acierto. Si fallas, pierdes lo acumulado en la prueba; puedes plantarte (\u270B). Una casilla esconde una <b>imagen</b>: si la aciertas ganas un <b>comod\xEDn \u26A1</b>; si fallas, \u2212100 \u20AC. Si salen las 6 incorrectas antes, los que no se plantaron se quedan a 0.</p>
<p><b>\xA1Esa me suena!</b> (12 casillas, 8 correctas): panel musical con tus canciones (Opciones \u203A Mis canciones). Cada uno contesta seguido hasta fallar o plantarse.</p>
<p><b>F\xEDjate bien</b> (16 im\xE1genes, 10 repetidas): memoriza, se tapan y por turnos busca las repetidas.</p>
<p><b>La bombilla caliente</b>: duelos 1.\xBA-4.\xBA y 2.\xBA-3.\xBA en paneles de 12 (8 correctas). Final entre ganadores: 500 \u20AC y 100 \u20AC al finalista.</p>
<p><b>Busca pareja</b>: 8 parejas; las dos primeras valen 400 \u20AC, las dos siguientes 200 \u20AC y el resto 100 \u20AC. Si fallas, pierdes el turno. El \xFAltimo es el <b>farolillo rojo</b> (va a la repesca) y el tercero se despide con 100 \u20AC.</p>
<p><b>Cara a cara</b>: 12 temas, bombilla amarilla y rosa, rebote si fallas. Gana el primero en 7; con 6-6, <b>jaque mate</b>.</p>
<p><b>El minuto diab\xF3lico</b>: 3 paneles (2 de 4, 5 de 9, 8 de 15) en 60 s (65 con 1 comod\xEDn, 75 con 2). Marca y pulsa \u26A1. Si los superas, \xA1bote! Si no, 1.000 \u20AC de ganador del d\xEDa.</p>
<p><b>Etapa cl\xE1sica (1998-2011)</b>: 3 concursantes, 3 paneles de 16 con premios por panel, ronda de apuestas en paneles de 12 y ronda final por un <b>coche</b> (7 correctas de 12).</p>
<p><b>Controles:</b> toca las casillas del panel. En el paseo: joystick o WASD y arrastra para mirar. \u2630 men\xFA \xB7 \u{1F441} c\xE1mara \xB7 \u{1F4A1} luces \xB7 \xABSaltar \u23ED\xBB pasa la cabecera, la despedida y los mon\xF3logos.</p>`;function Yh(n){let e=ge.presentador||"Tino Voltaje",t=n?n.conc:[{nombre:ge.nombre||"T\xFA",prof:ge.profesion||"Concursante",humano:!0},...os];return[["Presentado por",[`${e} (presentador virtual)`]],["Concursantes",t.map((i,s)=>`${s+1}. ${i.nombre} \xB7 ${i.prof}`)],["Juego creado por",["Iker"]],["Basado en",["El concurso \xABAlta Tensi\xF3n\xBB (adaptaci\xF3n no oficial)","Formato basado en \xABWipeout\xBB (EE. UU.)"]],["Plat\xF3, logo, cabecera y grafismos",["Creaci\xF3n original en 3D (Three.js), inspirada en el plat\xF3 de 2021"]],["Paneles y preguntas",["Originales del juego (data/paneles_extra.js para a\xF1adir m\xE1s)"]],["M\xFAsica y sonidos",["Los que subas t\xFA desde Opciones (Mis canciones, cabecera)","o efectos y bucles sintetizados por el propio juego"]],Sp,["P\xFAblico de las gradas",["Aplausos, \xABooh\xBB y risas sintetizados (no son grabaciones)"]],["Interfaz",["Basada en el APK \xAB\xA1Ahora Caigo! El juego 3D\xBB de Iker"]],["Programaci\xF3n",["Grok Bot"]]]}async function Vp(n,e,t,i){pt.show(!1),await e.cabecera(),e.cam("presentador"),re.play("aplausos"),re.music("trilha"),await et(t.saludo||(i.valenciano?Xe.bienvenidaVal:Xe.bienvenida));for(let s of t.extra||[])await et(s);t.festivo&&(n.P.celebrar(),re.play("ovacion")),ge.monologo&&await e.monologo(null,!0)}async function Hp(n,e){if(ge.presentaciones){await et(Xe.presentacion),Dc(`Presentado por ${ge.presentador||"Tino Voltaje"}`,"Presentador virtual",2600);for(let t of n.conc)t.fuera||(e.cam("conc",t.atril),await Dc(`${t.nombre}${t.humano?" (T\xDA)":""}`,t.prof,2400),t.humano||await Lp(t,Xt(Ca.hola)))}}async function Gp(n,e){let t=e.tema(),i=bn[t]||bn.normal;return n==="clasico"||n==="programa"&&pn[ge.etapa]?.clasica?K2(e,i,t,n):Z2(e,i,t,n)}async function Wp(n,e,t,i,s=!0){re.stopMusic(),re.play("ovacion"),pt.show(!1),n.orbita(),re.music("trilha"),e.P.celebrar();let a=et(Xe.despedida);await n.saltable(Promise.all([a,Dp(Yh(e),16e3)])),Uc(),await Pn("FIN DEL PROGRAMA",i,3200),n.marcador(i),wi([{label:"Jugar otra vez",cls:"gold",fn:()=>n.iniciar(t)},{label:"Men\xFA",fn:()=>n.menu("play")}]),await an(new Promise(()=>{}))}async function Z2(n,e,t,i){let s=ro(),a=pn[s];n.setEtapa(s);let r=Xh({etapa:s,tema:t},n),o=t==="prime",l=Na(s)*(o?2:1);Ei(e.hashtag||(a.valenciano?"#AltaTensi\xF3":"#AltaTensi\xF3n")),await Vp(r,n,e,a);let c=localStorage.getItem("at3d_farolillo")==="1",u={...Xt(os.filter(T=>!r.conc.some(y=>y.nombre===T.nombre))),color:"#ffffff",dinero:0,atril:3,habil:.8};if(pt.show(!0),c){let T=r.conc[0];await Bc(r,T,u)!==T&&(localStorage.removeItem("at3d_farolillo"),Object.assign(T,{nombre:u.nombre,prof:u.prof,voz:u.voz,emoji:u.emoji,humano:!1,habil:.8}),Ot("Has perdido la repesca: hoy miras desde la grada"))}else{let T=r.conc[3];await Bc(r,{...T,nombre:T.nombre},u)===u&&Object.assign(r.conc[3],{nombre:u.nombre,prof:u.prof,voz:u.voz,emoji:u.emoji})}await et(Xe.repescaGana),Pt(r),await Hp(r,n),r.conc[0].humano&&(pt.show(!1),await n.paseo(0)),pt.show(!0),Pt(r),r.cam("general"),await no(l,"Bote de hoy"),r.P.pantalla("bote",{texto:ut(l)}),await qe(1500),re.music("tension"),await Dh(r),await Wh(),await Uh(r),await Fh(r),await Wh(),await Oh(r),await qh(r);let d=La(r);await Pn("CLASIFICACI\xD3N",d.map((T,y)=>`${y+1}. ${Ne(T.nombre)} \xB7 ${ut(T.dinero)}`).join("<br>"),3e3);let h=d[3],p=d[2];n.cam("conc",h.atril),await et(Xe.farolillo),await Dc("\u{1F3EE} Farolillo rojo: "+h.nombre,"Vuelve ma\xF1ana en la repesca",2600),n.cam("conc",p.atril),await et(Xe.tercero),h.fuera=p.fuera=!0,p.premio=a.otros,Pt(r),localStorage.setItem("at3d_farolillo",h.humano?"1":"0");let g=await Bh(r,d[0],d[1]),v=g===d[0]?d[1]:d[0];v.premio=a.otros;let x=await zh(r,g,l),f;x?(g.premio=l,localStorage.setItem(Gh(s),String(a.bote)),re.play("ovacion"),r.P.celebrar(),await et(Xe.boteGanado),await no(l,`\xA1${g.nombre} se lleva el bote!`,3500)):(g.premio=a.dia,localStorage.setItem(Gh(s),String(Na(s)+a.sube)),await et(Xe.boteNo));let S=r.conc.find(T=>T.humano);f=`${x?"\u{1F3C6} \xA1BOTE!":"\u{1F4A1}"} ${Ne(g.nombre)} gana ${ut(g.premio)}${S?`<br>T\xFA: ${S===g?"ganador del d\xEDa":S===h?"farolillo rojo (ma\xF1ana, repesca)":S.premio?"te llevas "+ut(S.premio):"eliminado"}`:""}<br><small>Bote del pr\xF3ximo programa: ${ut(Na(s))}</small>`,await Wp(n,r,i,f)}async function K2(n,e,t,i){let s=zp(),a=pn[s];n.setEtapa(s);let r=Xh({etapa:s,n:3,tema:t},n);Ei(e.hashtag||(s==="veo7"?"#Tensi\xF3nSinL\xEDmite":"#AltaTensi\xF3nCl\xE1sico")),i==="programa"?await Vp(r,n,e,a):(n.cam("presentador"),re.music("trilha")),await et(Xe.clasica),pt.show(!0),i==="programa"&&(await Hp(r,n),r.conc[0].humano&&(pt.show(!1),await n.paseo(0),pt.show(!0))),Pt(r),re.music("tension"),await kh(r),await Wh(),await Vh(r);let l=La(r)[0];n.cam("conc",l.atril),await Pn(`${Ne(l.nombre)} juega por el coche`,`Lleva ${ut(l.dinero)}`,2200);let c=await Hh(r,l);c?(re.play("ovacion"),r.P.celebrar(),await et(Xe.coche)):await et(Xe.cocheNo);let u=r.conc.find(h=>h.humano),d=`${c?"\u{1F697} \xA1"+Ne(l.nombre)+" se lleva el coche!":Ne(l.nombre)+" gana el programa"}<br>${r.conc.map(h=>`${Ne(h.nombre)}: ${ut(Math.max(0,h.dinero))}`).join(" \xB7 ")}${u?`<br>T\xFA: ${u===l?"ganador":"gracias por jugar"}`:""}`;await Wp(n,r,i,d)}var $h={repesca:["La repesca","9 casillas, 7 correctas, 45 s"],aportodas:["\xA1A por todas!","16 casillas, imagen oculta y comod\xEDn"],esamesuena:["\xA1Esa me suena!","Panel musical con tus canciones"],fijate:["F\xEDjate bien","Memoriza las 10 im\xE1genes repetidas"],bombilla:["La bombilla caliente","Duelo en panel de 12"],pareja:["Busca pareja","8 parejas escondidas"],cara:["Cara a cara","12 temas, primero en 7, jaque mate"],minuto:["El minuto diab\xF3lico","3 paneles contra el reloj"],clasico:["Panel cl\xE1sico","16 casillas con premios (1998-2011)"],apuestas:["Las apuestas","Apuesta y encuentra 5 de 12"],coche:["El panel del coche","7 correctas de 12"]};async function Xp(n,e,{ilimitado:t=!1}={}){for(;;){let i=["clasico","apuestas","coche"].includes(n),s=Xh({etapa:i?zp():ro(),n:i?3:4,entreno:!0,ilimitado:t,tema:e.tema()},e);pt.show(!0),Ei("#AltaTensi\xF3nEntrena"),re.music("tension"),s.cam("general");let a=s.conc[0],r="";n==="repesca"&&(r=await Bc(s,a,s.conc[1])===a?"\xA1Has ganado la repesca!":"Has perdido la repesca"),n==="aportodas"&&(await Dh(s),r=`Tienes ${ut(a.dinero)} \xB7 comodines: ${a.comodines}`),n==="esamesuena"&&(await Uh(s),r=`Tienes ${ut(a.dinero)}`),n==="fijate"&&(await Fh(s),r=`Tienes ${ut(a.dinero)}`),n==="bombilla"&&(a.dinero=300,s.conc[1].dinero=200,s.conc[2].dinero=100,await Oh(s),r=`Tienes ${ut(a.dinero)}`),n==="pareja"&&(await qh(s),r=`Tienes ${ut(a.dinero)}`),n==="cara"&&(r=await Bh(s,a,s.conc[1])===a?"\xA1Ganas el cara a cara!":"Pierdes el cara a cara"),n==="minuto"&&(a.comodines=1,r=await zh(s,a,Na(ro()))?"\xA1Habr\xEDas ganado el bote!":"No ha dado tiempo\u2026 \xA1a seguir entrenando!"),n==="clasico"&&(await kh(s),r=`Tienes ${ut(a.dinero)}`),n==="apuestas"&&(s.conc.forEach(l=>l.dinero=s.E.r1[1]*4),await Vh(s),r=`Tienes ${ut(a.dinero)}`),n==="coche"&&(r=await Hh(s,a)?"\u{1F697} \xA1Te llevas el coche!":"El coche se queda en el plat\xF3"),re.stopMusic(),pt.show(!1),e.marcador(`${Ne($h[n][0])}<br><small>${r}</small>`);let o=await an(new Promise(l=>wi([{label:"Repetir",cls:"gold",fn:()=>l("otra")},{label:"Entrenamiento",fn:()=>l("menu")}])));if(e.marcador(null),o==="menu")return e.menu("train")}}var zc=[{t:"El origen",emoji:"\u{1F30D}",cam:"pantalla",sub:"Alta Tensi\xF3n es la adaptaci\xF3n espa\xF1ola de Wipeout, un concurso estadounidense de los a\xF1os ochenta. La idea es sencilla y diab\xF3lica: en un panel lleno de respuestas hay que encontrar las correctas y esquivar las incorrectas.",rows:[["Formato original","Wipeout (EE. UU.)"],["D\xE9cada","A\xF1os 80"],["G\xE9nero","Cultura general"],["Clave","Paneles de respuestas"]]},{t:"El estreno en Antena 3",emoji:"\u{1F4FA}",cam:"general",sub:"El 14 de septiembre de 1998 Alta Tensi\xF3n se estren\xF3 en Antena 3, presentado por Constantino Romero y producido por Gestmusic.",rows:[["Estreno","14-sep-1998"],["Cadena","Antena 3"],["Presentador","Constantino Romero"],["Productora","Gestmusic"]]},{t:"Llega Pasapalabra",emoji:"\u{1F504}",cam:"publico",sub:"Aguant\xF3 dos temporadas. En el a\xF1o 2000 otro concurso, Pasapalabra, ocup\xF3 su lugar en la parrilla de la cadena.",rows:[["Temporadas","2"],["Relevo","Pasapalabra (2000)"]]},{t:"La vuelta en Cuatro",emoji:"4\uFE0F\u20E3",cam:"atriles",sub:"Seis a\xF1os despu\xE9s, entre 2006 y 2008, el concurso volvi\xF3 en Cuatro con Luis Larrodera al frente, de nuevo producido por Gestmusic.",rows:[["Etapa","2006-2008"],["Cadena","Cuatro"],["Presentador","Luis Larrodera"]]},{t:"Tensi\xF3n sin l\xEDmite",emoji:"\u2696\uFE0F",cam:"pantalla",sub:"En 2011 lleg\xF3 a Veo7 con otro nombre, Tensi\xF3n sin l\xEDmite, presentado por Ivonne Reyes y producido por Coral Europa. Una disputa por los derechos del formato acab\xF3 con su cancelaci\xF3n el 24 de marzo de 2011, con programas grabados sin emitir.",rows:[["A\xF1o","2011"],["Cadena","Veo7"],["Presentadora","Ivonne Reyes"],["Final","24-mar-2011"]]},{t:"La etapa cl\xE1sica",emoji:"\u{1F697}",cam:"atriles",sub:"En sus primeras etapas compet\xEDan tres concursantes. Hab\xEDa paneles de diecis\xE9is respuestas, rondas de apuestas y, al final, el ganador pod\xEDa llevarse un coche.",rows:[["Concursantes","3"],["Paneles","16 casillas"],["Premio final","Un coche"]]},{t:"El regreso de 2021",emoji:"\u{1F4A1}",cam:"pantalla",sub:"Diez a\xF1os despu\xE9s, F\xE9nix Media recuper\xF3 el formato con su nombre original. Se estren\xF3 en Telecinco el 2 de agosto de 2021, primero en prime time y despu\xE9s a las ocho de la tarde, frente a Pasapalabra.",rows:[["Estreno","2-ago-2021"],["Cadena","Telecinco"],["Productora","F\xE9nix Media"],["Presentador","Christian G\xE1lvez"]]},{t:"La mec\xE1nica de 2021",emoji:"\u26A1",cam:"general",sub:"Desde noviembre de 2021 juegan cuatro concursantes por un bote que empieza en cincuenta mil euros. Hay repesca, A por todas, Esa me suena, F\xEDjate bien, la bombilla caliente, Busca pareja, el cara a cara y el minuto diab\xF3lico.",rows:[["Concursantes","4"],["Bote inicial","50.000 \u20AC"],["Ganador del d\xEDa","1.000 \u20AC"],["Final","Minuto diab\xF3lico"]]},{t:"El salto a Cuatro",emoji:"\u{1F4C9}",cam:"publico",sub:"Las audiencias no acompa\xF1aron y el concurso pas\xF3 a Cuatro, a mediod\xEDa. El 30 de mayo de 2022 se movi\xF3 a las tres de la tarde y en oto\xF1o de ese a\xF1o dej\xF3 de emitirse.",rows:[["Cadena","Cuatro"],["Horario","12:45 \u2192 15:00"],["Cambio","30-may-2022"]]},{t:"Alta tensi\xF3 en \xC0 Punt",emoji:"\u{1F34A}",cam:"pantalla",sub:"En 2024 el formato dio el salto a las auton\xF3micas. \xC0 Punt estren\xF3 Alta tensi\xF3 el 12 de febrero de 2024, en valenciano y con Nelo G\xF3mez. Hubo seis especiales con famosos los s\xE1bados y m\xE1s de cien entregas.",rows:[["Estreno","12-feb-2024"],["Cadena","\xC0 Punt"],["Presentador","Nelo G\xF3mez"],["Final","12-jul-2024"]]},{t:"Telemadrid 2025",emoji:"\u{1F3D9}\uFE0F",cam:"atriles",sub:"El 20 de enero de 2025 lleg\xF3 a Telemadrid con I\xF1aki Urrutia, de lunes a jueves a las nueve y media de la noche. Par\xF3 en febrero y volvi\xF3 en abril por la tarde.",rows:[["Estreno","20-ene-2025"],["Cadena","Telemadrid"],["Presentador","I\xF1aki Urrutia"],["Regreso","22-abr-2025"]]},{t:"Siete vidas",emoji:"\u{1F431}",cam:"general",sub:"Antena 3, Cuatro, Veo7, Telecinco, otra vez Cuatro, \xC0 Punt y Telemadrid. Alta Tensi\xF3n es el concurso que siempre vuelve a encenderse.",rows:[["Etapas","7"],["Desde","1998"],["S\xEDmbolo","La bombilla"]]}];var Yp={publico:"\u{1F44F}",telefono:"\u{1F4DE}",normas:"\u{1F4DC}"},$p={publico:"Con el p\xFAblico",telefono:"Al tel\xE9fono",normas:"Las normas"},ai=[{id:"pub-saludo",tipo:"publico",titulo:"Bajando a saludar",cam:"publico",lineas:["\xA1Un momento! Antes de empezar voy a saludar a la gente de las gradas.","Se\xF1ora de la primera fila, \xA1ese vestido brilla m\xE1s que nuestra pantalla!","Caballero, \xBFusted viene todos los d\xEDas? \xA1Si ya tiene hasta su bombilla con nombre!","Y los del fondo, \xA1aplaudid fuerte, que si no se nos apagan las luces!","\xA1Muchas gracias! Me vuelvo al plat\xF3 antes de que alguien toque un enchufe sin m\xED."]},{id:"pub-cumple",tipo:"publico",titulo:"Un cumplea\xF1os en el p\xFAblico",cam:"publico",lineas:["Me dicen que hoy hay alguien de cumplea\xF1os en el p\xFAblico.","\xA1Felicidades! Aqu\xED no tenemos velas\u2026 tenemos bombillas. \xA1Pide un deseo y sopla fuerte!","No, no se apagan. Son de bajo consumo, duran m\xE1s que mis chistes.","\xA1Un aplauso para nuestro cumplea\xF1ero!"]},{id:"tel-madre",tipo:"telefono",titulo:"Llama mi madre",cam:"presentador",lineas:["Perdonad, que me est\xE1 sonando el m\xF3vil\u2026 \xA1Es mi madre!","\xBFS\xED, mam\xE1? S\xED, estoy en directo. No, no me he puesto el jersey de rombos.","\xBFQue si he comido? Mam\xE1, que hay cuatro concursantes esperando.","\xBFQue te diga la respuesta de la casilla tres? \xA1Mam\xE1, eso es trampa!","Vale, vale, un beso. \xA1Os manda recuerdos a todos!"]},{id:"tel-electricista",tipo:"telefono",titulo:"El electricista",cam:"presentador",lineas:["Un segundo, que me llama el electricista del plat\xF3.","\xBFC\xF3mo que hay una bombilla que no se rompe? \xA1Pues ser\xE1 la del pasillo!","\xBFY la factura de la luz de este mes? No, no me la leas en directo, que el p\xFAblico se desmaya.","Gracias, Manolo. \xA1Que no se te funda nada!"]},{id:"nor-nuevas",tipo:"normas",titulo:"Normas nuevas del plat\xF3",cam:"general",lineas:["Atenci\xF3n, que producci\xF3n me pasa unas normas nuevas.","Norma uno: est\xE1 prohibido llamar \xABl\xE1mpara\xBB a una bombilla delante de ella. Se ofenden.","Norma dos: si alguien se planta, el p\xFAblico tiene que decir \xAB\xA1ohhh!\xBB. Probamos\u2026 \xA1Muy bien!","Norma tres: el presentador siempre tiene raz\xF3n. Salvo cuando se equivoca, que es casi siempre.","\xA1Y con estas normas, seguimos con el programa!"]},{id:"nor-bote",tipo:"normas",titulo:"C\xF3mo cuidar el bote",cam:"pantalla",lineas:["Os voy a explicar c\xF3mo cuidamos el bote en Alta Tensi\xF3n.","Cada noche le damos las buenas noches y le cantamos una nana.","Si nadie se lo lleva, crece. Como las plantas, pero con m\xE1s ceros.","\xA1Y alg\xFAn d\xEDa alguien se lo llevar\xE1 a casa! \xBFSer\xE1 hoy?"]}];var In=n=>String(n??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),Ai=()=>{},jp=n=>{Ai=n},Kt=n=>n&&n.stopPropagation();function Jp(n,e,t,i){let s=document.createElement("button");return s.className="mbtn "+(t||""),s.innerHTML=`<span class="fp"></span><span>${n}${e?`<small>${e}</small>`:""}</span>`,s.onclick=a=>{Kt(a),Ai(),i()},s}function Zp(n){let e=document.createElement("button");return e.className="tbtn back",e.textContent="\u27F5 Volver",e.onclick=t=>{Kt(t),Ai(),n()},e}function Ci(n){let e=document.createElement("h2");return e.textContent=n,e}function ri(n,e="onote"){let t=document.createElement("p");return t.className=e,t.textContent=n,t}function Vt(n,...e){let t=document.createElement("div");t.className="orow";let i=document.createElement("label");return i.textContent=n,t.append(i,...e),t}function Kp(n,e,t){let i=document.createElement("button"),s=()=>{i.className="tbtn"+(n[e]?" sel":""),i.textContent=n[e]?"S\xED":"No"};return s(),i.onclick=a=>{Kt(a),n[e]=!n[e],s(),Ai(),t&&t(n[e])},i}function Qp(n,e,t,i){return t.map(([s,a])=>{let r=document.createElement("button");return r.className="tbtn"+(n[e]===s?" sel":""),r.textContent=a,r.dataset.v=s,r.onclick=o=>{Kt(o),n[e]=s,Ai(),r.parentNode.querySelectorAll(".tbtn[data-v]").forEach(l=>l.classList.toggle("sel",l.dataset.v===s)),i&&i(s)},r})}function em(n,e,t,i){let s=document.createElement("input");return s.type="range",s.min=0,s.max=100,s.value=Math.round((n[e]??1)*100),s.oninput=()=>{n[e]=s.value/100,t&&t(n[e])},s.onchange=()=>i&&i(n[e]),s.onpointerdown=Kt,s}function Us(n,...e){let t=document.createElement("div");t.className="ocustom";let i=document.createElement("div");return i.className="olabel",i.textContent=n,t.append(i,...e.filter(Boolean)),t}function Ri(n,e="oname"){let t=document.createElement("div");return t.className=e,t.innerHTML=n,t}function oi(n){let e=document.createElement("div");e.className="obtns";for(let t of n){let i;if(t.file){i=document.createElement("label");let s=document.createElement("input");s.type="file",s.accept=t.file.accept,s.onclick=Kt,s.onchange=()=>s.files[0]&&t.file.onFile(s.files[0]),i.append(document.createTextNode(t.t),s)}else i=document.createElement("button"),i.textContent=t.t,i.disabled=!!t.disabled,i.onclick=s=>{Kt(s),Ai(),t.fn&&t.fn(i)};i.className="tbtn"+(t.sel?" sel":"")+(t.full?" full":""),e.appendChild(i)}return e}function tm(n,e,t,i,s){let a=document.createElement("input");return a.className="otext",a.value=n[e]||"",a.placeholder=t,a.maxLength=i,a.oninput=()=>{n[e]=a.value.trim(),s&&s(n[e])},a.onkeydown=Kt,a.onpointerdown=Kt,a}function nm(n,e,t){let i=document.createElement("div");i.className="themes";for(let[s,a]of Object.entries(n)){let r=document.createElement("button");r.className="tbtn"+(s===e?" sel":""),r.innerHTML=`<span>${a.emoji}</span>${In(a.name)}`,r.onclick=o=>{Kt(o),Ai(),t(s)},i.appendChild(r)}return i}function im(n,{logo:e,sub:t="El juego",tap:i="Toca para empezar",onStart:s}){n.classList.remove("hidden"),n.innerHTML=`<div class="title"><img class="tlogo" src="${e}" alt=""><div class="tsub">${In(t)}</div><div class="ttap">${In(i)}</div></div>`;let a=r=>{Kt(r),n.removeEventListener("pointerup",a),removeEventListener("keydown",a),s()};setTimeout(()=>{n.addEventListener("pointerup",a),addEventListener("keydown",a)},200)}function sm(n,{logo:e,tag:t,version:i,cls:s=""}){n.classList.remove("hidden"),n.innerHTML="";let a=document.createElement("div");a.className="mbox";let r=document.createElement("div");r.className="logo",r.innerHTML=`<img class="mlogo" src="${e}" alt=""><div class="mtag">${In(t)}</div>`;let o=document.createElement("div");o.className="col ui "+s;let l=document.createElement("div");return l.className="mver",l.textContent="v"+i,a.append(l,r,o),n.appendChild(a),o}function am(n,e){let t=document.createElement("div");return t.className="modal ui",t.innerHTML=`<div class="mcard">${e}<button class="tbtn back" data-cerrar>Cerrar</button></div>`,n.appendChild(t),t.querySelector("[data-cerrar]").onclick=i=>{Kt(i),t.remove()},t}function rm({total:n,presentador:e="El presentador",padre:t=document.body}){document.getElementById("historia")?.remove();let i=document.createElement("div");i.id="historia",i.className="ui",i.innerHTML=`<div class="hcard" id="hCard"></div><div class="hsub" id="hSub"><b>${In(e)}</b><span></span></div>
    <div class="hctl"><button class="tbtn" id="hPrev">\u25C4 Anterior</button><button class="tbtn" id="hSkip">\u23ED Saltar</button><button class="tbtn sel" id="hNext">Siguiente \u25BA</button></div>
    <div class="hdots" id="hDots">${Array.from({length:n},(a,r)=>`<i data-i="${r}"></i>`).join("")}</div>`,t.appendChild(i);let s=a=>i.querySelector("#"+a);return{el:i,mostrar(a,r){let o=s("hCard");o.classList.remove("in"),o.innerHTML=`<div class="hhead">${a>=0?`<span class="hnum">${a+1}/${n}</span>`:""}<span class="hemo">${r.emoji||""}</span><b>${In(r.t)}</b></div>`+(r.rows||[]).map(([l,c])=>`<div class="hrow"><small>${In(l)}</small><span>${In(c)}</span></div>`).join(""),o.offsetWidth,o.classList.add("in"),i.querySelectorAll("#hDots i").forEach((l,c)=>l.classList.toggle("on",c===a)),s("hPrev").disabled=a<=0,s("hNext").textContent=a>=n-1?"Terminar \u25BA":"Siguiente \u25BA"},subtitulo(a){s("hSub").querySelector("span").textContent=a,s("hSub").classList.toggle("vacio",!a)},on({prev:a,next:r,skip:o,ir:l}){s("hPrev").onclick=c=>{Kt(c),Ai(),a()},s("hNext").onclick=c=>{Kt(c),Ai(),r()},s("hSkip").onclick=c=>{Kt(c),o()},s("hSub").onclick=c=>{Kt(c),o()},i.querySelectorAll("#hDots i").forEach(c=>c.onclick=u=>{Kt(u),l(+c.dataset.i)})},cerrar(){i.remove()}}}function om(n){return n.map(([e,t])=>`<p><b>${In(e)}</b><br>${t.map(In).join("<br>")}</p>`).join("")}var ui=new URLSearchParams(location.search);ui.get("vel")&&(window.__VEL=+ui.get("vel"));ui.has("auto")&&(window.__AUTO=!0,window.__AUTO_ELIGE=+(ui.get("elige")||0));ii.nombre=ge.presentador||"Tino Voltaje";var Xc=matchMedia("(pointer: coarse)").matches||"ontouchstart"in window,Qt=new _c({antialias:!Xc,preserveDrawingBuffer:ui.has("capture"),powerPreference:"high-performance"});Qt.setPixelRatio(Math.min(devicePixelRatio,Xc?1.25:1.75));Qt.setSize(innerWidth,innerHeight);Qt.toneMapping=Cs;Qt.toneMappingExposure=1;Qt.shadowMap.enabled=!0;xe("#app").appendChild(Qt.domElement);var Yc=new er,Os=new $t(52,innerWidth/innerHeight,.1,220),qa=new Sc(Qt);qa.addPass(new Tc(Yc,Os));var ev=new Ta(new ce(innerWidth,innerHeight),.35,.3,.85);qa.addPass(ev);qa.addPass(new Ec);var cm=ge.quality==="alta",Ii=ui.get("tema")||localStorage.getItem("at3d_theme")||"normal";bn[Ii]||(Ii="normal");var Ln={logoPantalla:null,logoOpts:null,banner:null},ke=xp(Yc,Ln,Qt);Fp(ke);var $c=()=>pn[ge.etapa]||pn.t5;async function Gc(){let n=$c();Ln.logoOpts=n.logo||null;let e=await Ls("logo",n);if(!e)return Ln.logoPantalla=null,ke.refrescarPantalla(),null;let t=new Image;return t.src=e.url,await t.decode().catch(()=>{}),Ln.logoPantalla=t,ke.refrescarPantalla(),e.url}var lm={blanco:{columnas:[16777215,14543103,16777215],focos:[16777215]},naranja:{columnas:[16747034,16756736,16734720],focos:[16757575,16777215]},rosaazul:{columnas:[16732072,3836927,16732072],focos:[16732072,6281471]}};function co(n,e=!0){Ii=n;let t=bn[n]||bn.normal,i=t.paleta?{...t.paleta}:{};lm[ge.platoLuz]&&(i={...i,...lm[ge.platoLuz]}),ke.setTema(i),Ln.banner=t.banner||null,ke.refrescarPantalla(),e&&localStorage.setItem("at3d_theme",n)}var Wc={general:[[3,7.5,17],[-1,3,-5]],pantalla:[[1.5,4.6,4.5],[-7.5,5.2,-9.5]],atriles:[[2.5,3.4,9.5],[2.5,1.4,1]],presentador:[[4.8,2.4,-3.6],[5.5,1.8,-8.4]],publico:[[2,4.5,6],[2,1.5,16]],bote:[[0,4.5,3.5],[-7.5,5.4,-9.5]]},He={mode:"menu",pos:new I(0,9,26),look:new I(0,2,0),tPos:new I(0,9,26),tLook:new I(0,2,0),yaw:0,pitch:.3};function fo(n,e,t=!1){He.mode="show",He.tPos.set(...n),He.tLook.set(...e),t&&(He.pos.copy(He.tPos),He.look.copy(He.tLook))}var ds=n=>{let e=Wc[n]||Wc.general;fo(e[0],e[1])};function tv(n){let e=ke.posAtril(n),t=new I(5,0,6).normalize();fo([e.x+t.x*3.2,2.4,e.z+t.z*3.2],[e.x,1.5,e.z])}var ci=null;Qt.domElement.addEventListener("pointerdown",n=>{ci={id:n.pointerId,x:n.clientX,y:n.clientY}});addEventListener("pointermove",n=>{if(!ci||ci.id!==n.pointerId)return;let e=n.clientX-ci.x,t=n.clientY-ci.y;ci.x=n.clientX,ci.y=n.clientY,He.yaw-=e*.006,He.pitch=Math.max(-.3,Math.min(1.1,He.pitch+t*.004))});addEventListener("pointerup",n=>{ci&&ci.id===n.pointerId&&(ci=null)});var Wn={};addEventListener("keydown",n=>{Wn[n.code]=!0});addEventListener("keyup",n=>{Wn[n.code]=!1});var Ua={x:0,y:0};{let n=xe("#joy"),e=xe("#knob"),t=null,i=a=>{let r=n.getBoundingClientRect(),o=a.clientX-(r.left+r.width/2),l=a.clientY-(r.top+r.height/2),c=Math.hypot(o,l),u=r.width/2-10;c>u&&(o*=u/c,l*=u/c),e.style.transform=`translate(${o}px,${l}px)`,Ua.x=o/u,Ua.y=l/u};n.addEventListener("pointerdown",a=>{t=a.pointerId,n.setPointerCapture(t),i(a),a.stopPropagation()}),n.addEventListener("pointermove",a=>{a.pointerId===t&&i(a)});let s=a=>{a.pointerId===t&&(t=null,Ua.x=Ua.y=0,e.style.transform="")};n.addEventListener("pointerup",s),n.addEventListener("pointercancel",s)}var uo=null;function um(n){He.mode=n?"walk":He.mode,xe("#joy").classList.toggle("hidden",!(n&&Xc)),n&&(ke.walker.visible=!0,He.yaw=0,He.pitch=.3)}function ho(n){let e=xe("#hint");e.textContent=n,e.classList.toggle("hidden",!n)}var fs=null;async function nv(){let n=iv();document.body.classList.add("en-cabecera"),xe("#btnSkip").classList.remove("hidden"),re.stopMusic();let e=null,t=await Ls("musica",$c());t?(e=new Audio(t.url),e.volume=ge.music?ge.musicVol:0,e.play().catch(()=>{})):re.music("menu");let i=xe("#cabLogo");i.src=Zh(1e3,640);let s=[[[-14,1.2,8],[-7.5,5,-9.5],[-2,2,10]],[[12,9,10],[0,1,-4],[6,3,14]],[[2,.6,6],[-7.5,6,-9.5],[1,3.2,3]],[[16,3,-4],[5,-0,-10],[10,6,4]],[[0,12,14],[-2,2,-5],[0,6,9]]],a=!1;fs=()=>{a=!0};try{for(let[r,o,l]of s){if(a)break;xe("#fx-flash").style.opacity=.9,re.play("rayo"),setTimeout(()=>xe("#fx-flash").style.opacity=0,90),fo(r,o,!0),He.tPos.set(...l),He.tLook.set(...o),ke.luces.vel=3;for(let c=0;c<16&&!a;c++)await qe(100)}if(!a){i.classList.add("on"),re.play("banner");for(let r=0;r<28&&!a;r++)await qe(100)}}finally{if(i.classList.remove("on"),ke.luces.vel=1,fs=null,document.body.classList.remove("en-cabecera"),xe("#btnSkip").classList.add("hidden"),e){let r=e.volume,o=setInterval(()=>{r-=.08,e.volume=Math.max(0,r),r<=0&&(e.pause(),clearInterval(o))},80)}re.stopMusic()}}var iv=()=>0;async function sv(){let n=await Hn.get("video:cabecera");if(!n||!n.blob)return!1;let e=URL.createObjectURL(n.blob),t=xe("#video"),i=t.querySelector("video");return an(new Promise(s=>{let a=!1,r=()=>{a||(a=!0,i.pause(),i.removeAttribute("src"),i.load(),t.classList.add("hidden"),xe("#btnSkip").classList.add("hidden"),URL.revokeObjectURL(e),fs=null,s(!0))};i.onended=r,i.onerror=r,fs=r,i.src=e,i.volume=ge.music?ge.musicVol:0,t.classList.remove("hidden"),xe("#btnSkip").classList.remove("hidden"),i.play().catch(()=>{i.muted=!0,i.play().catch(r)})}))}var Fs=null,Li={P:()=>ke,tema:()=>Ii,cam:(n,e)=>{Fs||(n==="conc"?tv(e):ds(n))},setEtapa(n){Ln.logoOpts=pn[n]?.logo||null,ke.refrescarPantalla()},async cabecera(){if(!(ge.cabecera==="video"&&await sv()))return nv()},paseo(n){ke.ocultarFig(n,!0),ke.walker.position.set(0,0,11),ke.walker.rotation.y=Math.PI;let e=ke.posAtril(n);return ke.marca.position.set(e.x,.05,e.z),ke.marca.visible=!0,He.pos.set(0,3.5,16),um(!0),rs(Xe.paseo,6e3),re.say(Xe.paseo),ho("\u{1F579}\uFE0F Camina hasta el aro verde de tu atril \xB7 PC: WASD + rat\xF3n"),wi([{label:"Ir a mi atril \u25B6",fn:()=>{ke.walker.position.set(e.x,0,e.z)}}]),an(new Promise(t=>{uo=()=>{Math.hypot(ke.walker.position.x-e.x,ke.walker.position.z-e.z)<.9&&(uo=null,t())},(ui.has("autopaseo")||window.__AUTO)&&setTimeout(()=>{ke.walker.position.set(e.x,0,e.z)},300)})).finally(()=>{ho(""),wi([]),ke.marca.visible=!1,ke.walker.visible=!1,Fa=!1,ke.ocultarFig(n,!1),xe("#joy").classList.add("hidden"),ds("general")})},orbita(){He.mode="menu"},saltable(n){return xe("#btnSkip").classList.remove("hidden"),an(Promise.race([n,new Promise(e=>{fs=()=>e("skip")})])).finally(()=>{fs=null,xe("#btnSkip").classList.add("hidden"),re.stopVoice()})},marcador(n){let e=xe("#marcador");if(!n){e.classList.add("hidden");return}e.innerHTML=n,e.classList.remove("hidden")},monologo:(n,e=!1)=>hm(n,e),iniciar:n=>Xn(n),menu:(n="main")=>Ni(n)},qs="title",av={title:null,main:"title",play:"main",train:"play",options:"main",help:"main",credits:"main",concursantes:"options",canciones:"options",monologos:"play"};jp(()=>re.play("tecla"));function Zh(n=900,e=560){let t=document.createElement("canvas");t.width=n,t.height=e;let i=t.getContext("2d");if(Ln.logoPantalla&&Ln.logoPantalla.complete&&Ln.logoPantalla.naturalWidth){let s=Ln.logoPantalla,a=Math.min((n-40)/s.naturalWidth,(e-20)/s.naturalHeight);i.drawImage(s,(n-s.naturalWidth*a)/2,(e-s.naturalHeight*a)/2,s.naturalWidth*a,s.naturalHeight*a)}else $r(i,n*.5,e*.5,n*.78,.3,Ln.logoOpts||{});return t.toDataURL("image/png")}var jc=()=>{Kr(),re.aplicarNiveles()},Pi=(n,e)=>Kp(ge,n,t=>{jc(),e&&e(t)}),kc=(n,e,t)=>Qp(ge,n,e,i=>{jc(),t&&t(i)}),jh=n=>em(ge,n,jc,()=>re.play(n==="publicoVol"?"aplausos":"tecla")),Da="",us=null,Oa=!1;function Ni(n="main"){Lc(),re.stopAll(),Ds(),fn(),pt.show(!1),ho(""),xe("#bubble").classList.add("hidden"),li?.cerrar(),li=null,uo=null,ke.walker.visible=!1,ke.marca.visible=!1,xe("#joy").classList.add("hidden"),Fa=!1,Fs=null,Np(),wi([]),Uc(),Ei(""),Li.marcador(null),xe("#video").classList.add("hidden"),xe("#topbar").classList.add("hidden"),xe("#glights").classList.add("hidden"),document.body.classList.remove("en-cabecera"),xe("#cabLogo").classList.remove("on"),ke.reset(),pt.sinTimer(),He.mode="menu",Oa||(re.music("menu"),Oa=!0),St(n)}function St(n){qs=n;let e=xe("#menu"),t=bn[Ii]||bn.normal,i=$c();if(n==="title")return im(e,{logo:Zh(900,640),sub:"El juego",onStart:()=>{re.play("banner"),Ni("main")}});let s=sm(e,{logo:Zh(),tag:Ii==="normal"?"EL JUEGO \xB7 3D \xB7 "+i.corto:t.emoji+" "+(t.banner||"Especial "+t.name),version:Ph,cls:["options","concursantes","canciones"].includes(n)?"opts":["help","credits"].includes(n)?"text":""}),a=Jp,r=o=>Zp(()=>St(o));if(n==="main"){s.append(a("Jugar","Programa completo, entrenamiento, cl\xE1sico\u2026","gold",()=>St("play")),a("Opciones","Sonido, etapa, calidad gr\xE1fica, pantalla completa","",()=>St("options")),a("La historia de Alta Tensi\xF3n",`${Ne(ge.presentador)} te cuenta la historia del programa`,"",()=>Xn("historia")),a("C\xF3mo se juega","Las reglas del concurso","",()=>St("help")),a("Cr\xE9ditos","","",()=>St("credits")));let o=location.hostname==="appassets.androidplatform.net";!o&&!matchMedia("(display-mode: standalone), (display-mode: fullscreen)").matches&&s.append(a("Instalar app","Juega sin conexi\xF3n desde tu pantalla de inicio","inst",ov)),o||s.append(a("Descargar APK","Instala el juego en tu m\xF3vil Android","inst",()=>window.open("https://github.com/ikeriano/altatension-grok-bot/releases/latest","_blank")))}else if(n==="play"){let o=i.clasica;s.append(a("Programa completo",o?`Etapa ${Ne(i.nombre)}: paneles, apuestas y coche`:`Cabecera, repesca, 7 pruebas, minuto diab\xF3lico y despedida \xB7 bote ${In(Vc(Na(ro())))}`,"gold",()=>Xn("programa")),a("Entrenamiento","Practica cada prueba por separado","",()=>St("train")),a("Cl\xE1sico","La etapa de 1998-2011: 3 concursantes, apuestas y un coche","",()=>Xn("clasico")),a("Explorar el plat\xF3","Pasea libremente por el plat\xF3 3D","",()=>Xn("explorar")),a("Mon\xF3logos del presentador","Con el p\xFAblico, al tel\xE9fono y las normas","",()=>St("monologos")),Ci("Programa especial"),nm(bn,Ii,l=>{co(l),St("play")}),r("main"))}else if(n==="train"){s.append(Ci("Entrenamiento (sin presi\xF3n)")),Object.entries($h).forEach(([u,[d,h]],p)=>s.append(a(d,h,p===0?"gold":"",()=>Xn("entreno:"+u))));let o=document.createElement("div");o.className="mrow";let l=document.createElement("button"),c=()=>{l.className="tbtn"+(lo?" sel":""),l.innerHTML=lo?"<span>\u267E\uFE0F</span>Tiempo ilimitado":"<span>\u23F1\uFE0F</span>Con reloj"};c(),l.onclick=u=>{u.stopPropagation(),lo=!lo,c(),re.play("tecla")},o.append(l,r("play")),s.append(o)}else if(n==="options"){s.append(Ci("Opciones")),s.append(Vt("\u{1F4FA} Etapa",...kc("etapa",Object.values(pn).map(h=>[h.id,h.corto]),()=>{Gc().then(()=>St("options"))}))),s.append(ri(`${i.nombre}: ${i.clasica?"3 concursantes, 3 paneles de 16, apuestas y coche final (mec\xE1nica cl\xE1sica).":`4 concursantes, bote inicial de ${Vc(i.bote)}, ganador del d\xEDa ${Vc(i.dia)} y ${Vc(i.otros)} para los otros dos.`}`,"mtext")),s.append(Vt("\u{1F3B5} M\xFAsica",Pi("music"),jh("musicVol"))),s.append(Vt("\u{1F3AC} Cabecera",...kc("cabecera",[["video","Mi v\xEDdeo"],["3d","Plat\xF3 3D"]])));let o=Us("\u{1F3B6} M\xFAsica de la cabecera");s.append(o),rv(o),s.append(Vt("\u{1F50A} Efectos",Pi("sfx"),jh("sfxVol")));let l=Us("",Vt("\u{1F44F} P\xFAblico",Pi("publico"),jh("publicoVol")),Vt("\u{1F465} P\xFAblico en las gradas",Pi("gradas",pm)),ri("Aplausos, \xABooh\xBB y risas del p\xFAblico. Son sonidos sintetizados por el propio juego (no son grabaciones)."));l.querySelector(".olabel").remove(),s.append(l),s.append(Vt("\u{1F3A4} Voz del presentador",Pi("voz")),Vt("\u{1F4D6} El presentador lee las preguntas",Pi("lee")),Vt("\u23E9 Velocidad de lectura",...kc("leeVel",[["normal","Normal"],["rapida","R\xE1pida"]])),Vt("\u{1F604} Chistes del presentador",Pi("chistes")),Vt("\u{1F3AD} Mon\xF3logo del presentador",Pi("monologo"))),s.append(Us("\u{1F465} Concursantes",Ri(`${ge.nombre?"T\xFA: "+Ne(ge.nombre)+(ge.profesion?" \xB7 "+Ne(ge.profesion):""):"T\xFA: sin nombre"} \xB7 Rivales: ${os.slice(0,3).map(h=>Ne(h.nombre)).join(", ")}\u2026 \xB7 Presenta: ${Ne(ge.presentador)}`),oi([{t:"\u270F\uFE0F Nombres y profesiones",sel:!0,full:!0,fn:()=>St("concursantes")}]))),s.append(Us("\u{1F4A1} Luces del plat\xF3",oi([["auto","Auto"],["blanco","Blanco"],["naranja","Naranja"],["rosaazul","Rosa+azul"]].map(([h,p])=>({t:p,sel:ge.platoLuz===h,fn:()=>{ge.platoLuz=h,jc(),co(Ii),St("options")}}))))),s.append(ri("Plat\xF3 de 2021: pantalla gigante con rayos, columnas de luces naranja, rosa y azul, suelo azul con rayos y atriles blancos con bombilla. "+(ge.platoLuz==="auto"?"Las luces autom\xE1ticas siguen los colores de cada especial.":"Las luces fijas se mantienen en todos los especiales."),"mtext"));let c=Vt("\u2728 Calidad gr\xE1fica",...kc("quality",[["baja","Baja"],["media","Media"],["alta","Alta"]],fm));s.append(c),Kh().then(h=>{let p=Us("\u{1F3B5} Mis canciones",Ri(h.length?`${h.length} ${h.length===1?"canci\xF3n":"canciones"}: ${Ne(h.map(g=>g.name).join(", "))}`:"Sin canciones: suena la m\xFAsica del juego"),oi([{t:"\u{1F3B5} Gestionar mis canciones",sel:!0,full:!0,fn:()=>St("canciones")}]),ri("Sube canciones desde tu dispositivo (se quedan solo en \xE9l). Suenan en \xAB\xA1Esa me suena!\xBB."));s.insertBefore(p,c)});let u=matchMedia("(display-mode: standalone), (display-mode: fullscreen)").matches,d=oi([{t:u?"Siempre (app)":document.fullscreenElement?"Salir":"Activar",sel:!!document.fullscreenElement,disabled:u,fn:async()=>{try{if(document.fullscreenElement)await document.exitFullscreen();else{await document.documentElement.requestFullscreen({navigationUI:"hide"});try{await screen.orientation.lock("landscape")}catch{}}}catch{Ot("Tu navegador no permite pantalla completa aqu\xED")}setTimeout(()=>St("options"),300)}}]);s.append(Vt("\u26F6 Pantalla completa",d),ri(`Rendimiento actual: ${Math.round(ed)} fps. Si el juego va lento en tu m\xF3vil, elige calidad \xABBaja\xBB.`,"mtext"),r("main"))}else if(n==="canciones"){s.append(Ci("Mis canciones"));let o=document.createElement("div");o.className="ocustom",s.append(o),Kh().then(l=>{o.innerHTML="",l.length||o.append(Ri("Todav\xEDa no has subido ninguna canci\xF3n.")),l.forEach((c,u)=>o.append(Vt("\u{1F3B5} "+c.name,...oi([{t:"\u25B6 Probar",fn:d=>td(URL.createObjectURL(c.blob),d)},{t:"\u{1F5D1} Quitar",fn:async()=>{l.splice(u,1),await Hn.put("canciones",l),await Qh(),St("canciones")}}]).children))),o.append(oi([{t:"\u{1F4C2} Subir canci\xF3n de mi dispositivo",sel:!0,full:!0,file:{accept:"audio/*",onFile:async c=>{l.push({name:c.name.replace(/\.[^.]+$/,""),blob:c}),await Hn.put("canciones",l),await Qh(),Ot("\u2705 \xA1Canci\xF3n guardada en este dispositivo!"),St("canciones")}}}]))}),s.append(ri("Las canciones se quedan solo en este dispositivo; no se suben ni se comparten. Suenan durante \xAB\xA1Esa me suena!\xBB."),r("options"))}else if(n==="concursantes"){s.append(Ci("Concursantes"));let o=(l,c,u)=>tm(ge,l,c,u,()=>{Kr(),l==="presentador"&&(ii.nombre=ge.presentador||"Tino Voltaje")});s.append(Vt("\u{1F64B} Tu nombre",o("nombre","Ej.: Iker",18)),Vt("\u{1F4BC} Profesi\xF3n",o("profesion","Ej.: estudiante",24)),Vt("\u{1F399}\uFE0F Presentador",o("presentador","Tino Voltaje",22)),Vt("\u{1FAAA} Presentar a los concursantes",Pi("presentaciones"))),s.append(Us("Tus rivales virtuales",...os.map(l=>Ri(`${l.emoji} <b>${Ne(l.nombre)}</b> \xB7 ${Ne(l.prof)}`)))),s.append(ri(`${ge.presentador||"Tino Voltaje"} te presentar\xE1 al empezar el Programa completo. Tu nombre sale en el marcador, en tu atril y en los cr\xE9ditos.`),r("options"))}else if(n==="monologos"){s.append(Ci("Mon\xF3logos del presentador"),a("\u{1F3B2} Al azar","Uno cualquiera (y luego \xABSiguiente\xBB)","gold",()=>Xn("mono:azar")));let o=document.createElement("div");o.className="monolist",ai.forEach(l=>{let c=document.createElement("button");c.className="tbtn",c.innerHTML=`<span>${Yp[l.tipo]}</span><b>${Ne(l.titulo)}</b><small>${$p[l.tipo]}</small>`,c.onclick=u=>{u.stopPropagation(),re.play("tecla"),Xn("mono:"+l.id)},o.appendChild(c)}),s.append(o,ri(`${ge.presentador} es un presentador virtual inventado, con voz sint\xE9tica de Piper (davefx). Pulsa \xABSaltar \u23ED\xBB para terminar el mon\xF3logo.`,"mtext"),r("play"))}else if(n==="help"){s.append(r("main"),Ci("C\xF3mo se juega"));let o=document.createElement("div");o.className="mtext",o.innerHTML=kp,s.append(o)}else if(n==="credits"){s.append(r("main"),Ci("Cr\xE9ditos"));let o=document.createElement("div");o.className="mtext creditos",o.innerHTML=om(Yh(null))+`<p><b>Especial 300 suscriptores</b><br>Dedicado a los suscriptores del canal de YouTube \xABIkeriano el campe\xF3n 2\xBB</p><p class="small">Versi\xF3n ${Ph}</p><p class="small">Juego de fans sin \xE1nimo de lucro. \xABAlta Tensi\xF3n\xBB es un formato de televisi\xF3n de sus respectivos due\xF1os; este juego no est\xE1 afiliado a ninguna cadena ni productora. El presentador y los concursantes son personajes virtuales inventados. Interfaz basada en el APK \xAB\xA1Ahora Caigo! El juego 3D\xBB de Iker.</p>`,s.append(o)}}var Vc=n=>String(Math.round(n||0)).replace(/\B(?=(\d{3})+(?!\d))/g,".")+" \u20AC";function td(n,e){if(us){us.pause(),us=null,e&&(e.textContent="\u25B6 Probar"),Oa=!1,re.music("menu"),Oa=!0;return}re.stopMusic(),us=new Audio(n),us.volume=ge.musicVol,us.play().catch(()=>{}),e&&(e.textContent="\u23F9 Parar");let t=us;setTimeout(()=>{us===t&&td(null,e)},12e3)}async function rv(n){let e=$c(),t=await Ls("musica",e),i=await Ls("logo",e),s=await Hn.get("video:cabecera");n.append(Ri(t?`\u{1F3B5} <b>${Ne(t.nombre)}</b> (${Ne(e.corto)})`:"Sin audio propio: suena la m\xFAsica del juego"),oi([{t:"\u{1F4C2} Elegir audio de mi dispositivo",sel:!0,full:!0,file:{accept:"audio/*",onFile:async a=>{n.querySelector(".oname").textContent="\u23F3 Cargando \xAB"+a.name+"\xBB\u2026",await Eh("musica",e.id,a),Da="\u2705 \xA1Audio guardado en este dispositivo!",St("options")}}},{t:"\u25B6 Probar",disabled:!t,fn:a=>td(t.url,a)},{t:"\u{1F5D1} Quitar",disabled:!t||t.origen!=="subido",fn:async()=>{await wh("musica",e.id),Da="Audio quitado: vuelve la m\xFAsica del juego",St("options")}}])),Da&&(n.append(Ri(Da,"omsg")),Da=""),n.append(ri("El audio se queda solo en este dispositivo; no se sube ni se comparte. Cada etapa puede tener su propia cabecera.")),n.append(Ri(`\u{1F39E}\uFE0F Mi v\xEDdeo de cabecera: ${s?"<b>"+Ne(s.name)+"</b>":"ninguno"}`),oi([{t:"\u{1F4C2} Elegir v\xEDdeo",file:{accept:"video/*",onFile:async a=>{await Hn.put("video:cabecera",{blob:a,name:a.name,type:a.type}),ge.cabecera="video",Kr(),Da="\u2705 \xA1V\xEDdeo guardado!",St("options")}}},{t:"\u{1F5D1} Quitar v\xEDdeo",disabled:!s,fn:async()=>{await Hn.del("video:cabecera"),ge.cabecera="3d",Kr(),St("options")}},{t:"\u25B6 Ver cabecera",fn:async()=>{xe("#menu").classList.add("hidden"),Lc(),Oa=!1;try{await Li.cabecera()}catch{}Ni("options")}}])),n.append(Ri(`\u{1F5BC}\uFE0F Logo propio (${Ne(e.corto)}): ${i&&i.origen==="subido"?"<b>"+Ne(i.nombre)+"</b>":"el del juego"}`),oi([{t:"\u{1F4C2} Elegir imagen",file:{accept:"image/*",onFile:async a=>{await Eh("logo",e.id,a),await Gc(),St("options")}}},{t:"\u{1F5D1} Quitar logo",disabled:!i||i.origen!=="subido",fn:async()=>{await wh("logo",e.id),await Gc(),St("options")}}]))}var Kh=async()=>await Hn.get("canciones")||[];async function Qh(){let n=await Kh();re.setCanciones(n.map(e=>URL.createObjectURL(e.blob)))}var lo=!1;function ov(){let n=am(xe("#menu"),`<h2>Instalar Alta Tensi\xF3n</h2>${Hc?'<p><button class="mbtn gold" id="instNow">\u{1F4F2} Instalar ahora</button></p>':""}<p><b>Android (Chrome):</b> men\xFA \u22EE \u2192 \xABInstalar aplicaci\xF3n\xBB o \xABA\xF1adir a pantalla de inicio\xBB.</p><p><b>iPhone/iPad (Safari):</b> bot\xF3n Compartir \u2192 \xABA\xF1adir a pantalla de inicio\xBB.</p><p><b>PC (Chrome/Edge):</b> icono de instalar \u2295 en la barra de direcciones.</p><p>Una vez instalada funciona <b>sin conexi\xF3n</b>.</p>`),e=n.querySelector("#instNow");e&&(e.onclick=async t=>{t.stopPropagation();let i=Hc;Hc=null,i.prompt(),n.remove()})}var Hc=null;addEventListener("beforeinstallprompt",n=>{n.preventDefault(),Hc=n});async function Xn(n){let e=Lc();qs="juego",re.stopAll(),Oa=!1,Ds(),xe("#menu").classList.add("hidden"),xe("#topbar").classList.remove("hidden"),wi([]),Li.marcador(null);try{if(n==="historia")return await uv(e),Ni("main");if(n==="explorar")return await lv(e);if(n.startsWith("mono:"))return await hm(n.slice(5));if(n.startsWith("entreno:"))return await et(Xe.entreno),await Xp(n.slice(8),Li,{ilimitado:lo});await Gp(n,Li)}catch(t){t!==Ns&&(console.error(t),Ot("Error: "+t.message,5e3),Ni("play"))}}async function lv(n){ke.walker.position.set(0,0,10.5),um(!0),re.music("trilha"),Ei("#AltaTensi\xF3n"),ho("\u{1F579}\uFE0F Joystick / WASD para andar \xB7 arrastra para mirar \xB7 \u{1F441} cambia de c\xE1mara"),setTimeout(()=>ho(""),6e3),rs(Xe.explora,4500),re.say(Xe.explora);let e=!1,t=new I;for(;;){await qe(300,n),ke.presentador.getWorldPosition(t);let i=Math.hypot(t.x-ke.walker.position.x,t.z-ke.walker.position.z);i<2.6&&!e&&(e=!0,rs(Xe.exploraSaludo,3500),re.say(Xe.exploraSaludo)),i>4&&(e=!1)}}async function hm(n,e=!1){let t=!n||n==="azar"?ai[Math.floor(Math.random()*ai.length)]:ai.find(r=>r.id===n)||ai[0];e||(re.play("aplausos"),Ei("#AltaTensi\xF3n")),ds(t.cam);let i=(async()=>{for(let r of t.lineas)await et(r,3500),await qe(400);re.play("badumtss"),re.play("aplausos")})();if(await Li.saltable(i),xe("#bubble").classList.add("hidden"),e)return;let s=ai.indexOf(t),a=n==="azar"?"azar":ai[(s+1)%ai.length].id;Li.marcador(`\u{1F3AD} \xAB${Ne(t.titulo)}\xBB`),Li.orbita(),wi([{label:"Siguiente \u25B6",cls:"gold",fn:()=>Xn("mono:"+a)},{label:"Repetir",fn:()=>Xn("mono:"+t.id)},{label:"Lista",fn:()=>Ni("monologos")}]),await an(new Promise(()=>{}))}var Fa=!1,Jh=[null,"general","pantalla","atriles","presentador","publico"];xe("#btnMenu").onclick=n=>{n.stopPropagation(),re.play("tecla"),Ni(qs==="juego"?"play":"main")};xe("#btnCam").onclick=n=>{if(n.stopPropagation(),re.play("tecla"),He.mode==="walk"){Fa=!Fa,Ot(Fa?"\u{1F441} Primera persona":"\u{1F441} Tercera persona",1200);return}Fs=Jh[(Jh.indexOf(Fs)+1)%Jh.length],Fs&&ds(Fs),Ot("\u{1F441} C\xE1mara: "+(Fs||"autom\xE1tica"),1200)};xe("#btnSkip").onclick=n=>{n.stopPropagation(),fs&&fs()};xe("#btnLuces").onclick=n=>{n.stopPropagation(),xe("#glights").classList.toggle("hidden")};function dm(){if(xe("#menu .modal"))return xe("#menu .modal").remove(),!0;if(xe("#menu").classList.contains("hidden"))return xe("#btnMenu").click(),!0;let n=av[qs];return n?(re.play("tecla"),St(n),!0):!1}window.__back=dm;addEventListener("keydown",n=>{n.key==="Escape"&&dm()});var nd={vel:1};ke.luces=nd;xe("#glights").innerHTML=`<div class="gl-head"><b>\u{1F4A1} Luces del plat\xF3</b><button data-close>\u2715</button></div>
  <label>Velocidad focos <input type="range" min="0" max="3" step="0.1" value="1" id="glVel"></label>
  <label>Exposici\xF3n <input type="range" min="0.4" max="1.6" step="0.05" value="1" id="glInt"></label>
  <div class="chips">${Object.entries(bn).map(([n,e])=>`<button data-gl="${n}">${e.emoji} ${Ne(e.name)}</button>`).join("")}<button data-gl="flash">\u26A1 Fogonazo</button><button data-gl="bombillas">\u{1F4A1} Bombillas</button></div>`;xe("#glights").addEventListener("click",n=>{n.stopPropagation(),n.target.closest("[data-close]")&&xe("#glights").classList.add("hidden");let e=n.target.closest("[data-gl]");if(!e)return;let t=e.dataset.gl;bn[t]?co(t,!1):t==="flash"?(re.play("rayo"),xe("#fx-flash").style.opacity=.8,setTimeout(()=>xe("#fx-flash").style.opacity=0,120)):([0,1,2,3].forEach(i=>{ke.bombilla(i,"on"),setTimeout(()=>ke.bombilla(i,"off"),1500)}),re.play("acierto"))});xe("#glVel").oninput=n=>{nd.vel=+n.target.value};xe("#glInt").oninput=n=>{Qt.toneMappingExposure=+n.target.value};function fm(){let n=ge.quality;Qt.setPixelRatio(n==="baja"?.75:n==="media"?Math.min(devicePixelRatio,Xc?1:1.25):Math.min(devicePixelRatio,1.75)),Qt.shadowMap.enabled=n!=="baja",cm=n==="alta",Qt.setSize(innerWidth,innerHeight),qa.setSize(innerWidth,innerHeight)}function pm(){ke.root.traverse(n=>{n.userData&&n.userData.publico&&(n.visible=ge.gradas)})}var li=null,cv=()=>`\xA1Hola! Soy ${ge.presentador||"Tino Voltaje"}. Bienvenidos a la historia de Alta Tensi\xF3n. Empecemos por el principio.`,mm="\xA1Hola! Bienvenidos a la historia de Alta Tensi\xF3n. Empecemos por el principio.",gm="Y esta ha sido la historia de Alta Tensi\xF3n. \xA1Gracias por acompa\xF1arme!";async function uv(n){re.music("trilha"),Ei("#AltaTensi\xF3nHistoria");let e=zc.length;li=rm({total:e,presentador:ge.presentador||"El presentador"});let t=0,i=null;li.on({prev:()=>i&&i(Math.max(0,t-1)),next:()=>i&&i(t+1),skip:()=>i&&i("skip"),ir:r=>i&&i(r)});let s=async(r,o=r)=>{li.subtitulo(r);let l=null,c=new Promise(d=>{i=h=>{l=h,d()}}),u=ge.voz?re.say(o).then(()=>qe(1500,n)):qe(Math.max(3500,r.length*60),n);return await an(Promise.race([u,c])),re.stopVoice(),Pp(n),l};ds("presentador"),ke.pantalla("info",{title:"LA HISTORIA",rows:[["Cap\xEDtulos",String(e)],["Desde","1998"]]}),li.mostrar(-1,{emoji:"\u{1F4D6}",t:"La historia de Alta Tensi\xF3n",rows:[["Cap\xEDtulos",String(e)],["Presenta",ge.presentador||"Tino Voltaje"]]});let a=await s(cv(),mm);for(t=typeof a=="number"?a:0;t<e;){let r=zc[t];ds(r.cam),ke.pantalla("info",{title:r.t.toUpperCase(),rows:r.rows}),li.mostrar(t,{emoji:r.emoji,t:r.t,rows:r.rows}),a=await s(r.sub),t=a==="skip"||a==null?t+1:a}ke.pantalla("logo"),ds("presentador"),re.play("aplausos"),li.mostrar(e-1,{emoji:"\u26A1",t:"\xA1Fin!",rows:[]}),await s(gm),li.cerrar(),li=null}window.__frases=()=>{let n=[],e=(i,s="davefx",a=!1)=>{i&&typeof i=="string"&&n.push({v:s,t:i.trim(),q:a})};Object.values(Xe).forEach(i=>e(i)),Fc.forEach(i=>e(i)),ai.forEach(i=>i.lineas.forEach(s=>e(s))),zc.forEach(i=>e(i.sub)),[mm,gm].forEach(i=>e(i)),Object.values(bn).forEach(i=>{e(i.saludo),(i.extra||[]).forEach(s=>e(s))});let t=[...new Set(os.map(i=>i.voz))];return Object.values(Ca).flat().forEach(i=>t.forEach(s=>e(i,s))),[...Gn.paneles,...Gn.musicales].forEach(i=>{e(i.t,"davefx",!0),e(`\xBFCu\xE1l cumple: \xAB${i.t}\xBB?`,"davefx",!0),e(`Rebote: \xBFcu\xE1l cumple \xAB${i.t}\xBB?`,"davefx",!0)}),Gn.parejas.forEach(i=>e(i.t,"davefx",!0)),Gn.jaque.forEach(i=>{e("JAQUE MATE \xB7 "+i.p,"davefx",!0),e("Rebote \xB7 "+i.p,"davefx",!0)}),e("\xBFQu\xE9 es esta imagen?","davefx",!0),e("Estaban repetidas","davefx",!0),n};addEventListener("resize",()=>{Os.aspect=innerWidth/innerHeight,Os.updateProjectionMatrix(),Qt.setSize(innerWidth,innerHeight),qa.setSize(innerWidth,innerHeight)});var hv=new Tr,oo=0,ed=60,hs=new I;function dv(){let n=Math.min(hv.getDelta(),.05);oo+=n,ed=ed*.95+1/Math.max(n,.001)*.05;let e=ke.walker;if(He.mode==="walk"){let s=Ua.x,a=Ua.y;(Wn.KeyW||Wn.ArrowUp)&&(a-=1),(Wn.KeyS||Wn.ArrowDown)&&(a+=1),(Wn.KeyA||Wn.ArrowLeft)&&(s-=1),(Wn.KeyD||Wn.ArrowRight)&&(s+=1);let r=Math.hypot(s,a);if(r>.1){let o=(Wn.ShiftLeft?6:3.6)*Math.min(1,r)*n;s/=Math.max(1,r),a/=Math.max(1,r);let l=-Math.sin(He.yaw),c=-Math.cos(He.yaw),u=Math.cos(He.yaw),d=-Math.sin(He.yaw),h=(l*-a+u*s)*o,p=(c*-a+d*s)*o,g=e.position.x+h,v=e.position.z+p;ke.bloqueado(g,v)?ke.bloqueado(g,e.position.z)?ke.bloqueado(e.position.x,v)||(e.position.z=v):e.position.x=g:(e.position.x=g,e.position.z=v),e.rotation.y=Math.atan2(h,p),e.children.forEach((x,f)=>{f>=5&&(x.rotation.x=Math.sin(oo*10)*.5*(f%2?1:-1))})}if(Fa)e.visible=!1,He.tPos.set(e.position.x,1.65,e.position.z),He.tLook.set(e.position.x-Math.sin(He.yaw)*5,1.65-He.pitch*3,e.position.z-Math.cos(He.yaw)*5);else{e.visible=!0;let o=4.4*Math.cos(He.pitch*.6);He.tPos.set(e.position.x+Math.sin(He.yaw)*o,1.8+He.pitch*2.6,e.position.z+Math.cos(He.yaw)*o),He.tLook.set(e.position.x,1.4,e.position.z)}uo&&uo()}else if(He.mode==="menu"){let s=Math.sin(oo*.06)*.75;He.tPos.set(Math.sin(s)*15,6.5+Math.sin(oo*.2)*1.2,Math.cos(s)*15+3),He.tLook.set(0,3,-5)}let t=He.mode==="walk"?10:2.2;He.pos.lerp(He.tPos,Math.min(1,n*t)),He.look.lerp(He.tLook,Math.min(1,n*t)),Os.position.copy(He.pos),Os.lookAt(He.look),ke.update(oo*nd.vel,n);let i=xe("#bubble");if(!i.classList.contains("hidden"))if(performance.now()>ii.hasta)i.classList.add("hidden");else{(ii.quien!=null&&ke.figs[ii.quien]?ke.figs[ii.quien]:ke.presentador).getWorldPosition(hs),hs.y+=2,hs.project(Os);let a=hs.z<1&&Math.abs(hs.x)<1.1&&Math.abs(hs.y)<1.1;i.style.left=Math.max(160,Math.min(innerWidth-160,(hs.x*.5+.5)*innerWidth))+"px",i.style.top=Math.max(80,a?(-hs.y*.5+.5)*innerHeight:90)+"px"}cm?qa.render():Qt.render(Yc,Os)}Qt.setAnimationLoop(dv);co(Ii,!1);fm();pm();Qh();Gc().then(()=>{(qs==="title"||qs==="main")&&!xe("#menu").classList.contains("hidden")&&St(qs)});Ni(ui.has("main")?"main":"title");document.addEventListener("visibilitychange",()=>{document.hidden?re.stopMusic():xe("#menu").classList.contains("hidden")||re.music("menu")});addEventListener("pointerdown",function n(){xe("#menu").classList.contains("hidden")||re.music("menu"),removeEventListener("pointerdown",n)});setTimeout(()=>xe("#loading").classList.add("hidden"),600);ui.get("cam")&&(xe("#menu").classList.add("hidden"),fo(...Wc[ui.get("cam")],!0));"serviceWorker"in navigator&&location.protocol==="https:"&&navigator.serviceWorker.register("sw.js").catch(()=>{});window.__at={P:ke,api:Li,iniciar:Xn,irMenu:Ni,Lt:St,camara:ds,show:fo,CAMS:Wc,aplicarTema:co,ETAPAS:pn,ctx:Ln,cfg:ge};window.__plato={ok:!0,scene:Yc,renderer:Qt};})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
