(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{1291:function(e,t,n){"use strict";var i=n(3),r=n(22),a=n.n(r),s=n(17),h=n(13),l=Math.pow(2,-52),o=function(){function e(t){Object(s.a)(this,e);var n=1/0,i=1/0,r=-1/0,a=-1/0,h=t.length>>1,o=this.ids=new Uint32Array(h);if(h>0&&"number"!==typeof t[0])throw new Error("Expected coords to contain numbers.");this.coords=t;for(var g=0;g<h;g++){var _=t[2*g],m=t[2*g+1];_<n&&(n=_),m<i&&(i=m),_>r&&(r=_),m>a&&(a=m),o[g]=g}for(var p,k,w,b=(n+r)/2,T=(i+a)/2,M=1/0,j=0;j<h;j++){var O=u(b,T,t[2*j],t[2*j+1]);O<M&&(p=j,M=O)}var A=t[2*p],P=t[2*p+1];M=1/0;for(var S=0;S<h;S++)if(S!==p){var z=u(A,P,t[2*S],t[2*S+1]);z<M&&z>0&&(k=S,M=z)}for(var E=t[2*k],F=t[2*k+1],L=1/0,I=0;I<h;I++)if(I!==p&&I!==k){var H=v(A,P,E,F,t[2*I],t[2*I+1]);H<L&&(w=I,L=H)}var K=t[2*w],C=t[2*w+1];if(L===1/0)throw new Error("No Delaunay triangulation exists for this input.");if(c(A,P,E,F,K,C)){var J=k,U=E,Z=F;k=w,E=K,F=C,w=J,K=U,C=Z}var q=function(e,t,n,i,r,a){var s=n-e,h=i-t,l=r-e,o=a-t,u=s*s+h*h,c=l*l+o*o,v=s*o-h*l;return{x:e+.5*(o*u-h*c)/v,y:t+.5*(s*c-l*u)/v}}(A,P,E,F,K,C);this._cx=q.x,this._cy=q.y,function e(t,n,i,r,a,s){var h,l,o;if(r-i<=20)for(h=i+1;h<=r;h++){for(o=t[h],l=h-1;l>=i&&y(n,t[l],o,a,s)>0;)t[l+1]=t[l--];t[l+1]=o}else{var u=i+r>>1;for(l=r,d(t,u,h=i+1),y(n,t[i],t[r],a,s)>0&&d(t,i,r),y(n,t[h],t[r],a,s)>0&&d(t,h,r),y(n,t[i],t[h],a,s)>0&&d(t,i,h),o=t[h];;){do{h++}while(y(n,t[h],o,a,s)<0);do{l--}while(y(n,t[l],o,a,s)>0);if(l<h)break;d(t,h,l)}t[i+1]=t[l],t[l]=o,r-h+1>=l-i?(e(t,n,h,r,a,s),e(t,n,i,l-1,a,s)):(e(t,n,i,l-1,a,s),e(t,n,h,r,a,s))}}(o,t,0,o.length-1,q.x,q.y),this._hashSize=Math.ceil(Math.sqrt(h)),this._hash=new Array(this._hashSize);var B=this.hull=f(t,p);this._hashEdge(B),B.t=0,B=f(t,k,B),this._hashEdge(B),B.t=1,B=f(t,w,B),this._hashEdge(B),B.t=2;var D=2*h-5,N=this.triangles=new Uint32Array(3*D),G=this.halfedges=new Int32Array(3*D);this.trianglesLen=0,this._addTriangle(p,k,w,-1,-1,-1);for(var Q,R,V=0;V<o.length;V++){var W=o[V],X=t[2*W],Y=t[2*W+1];if(!(V>0&&Math.abs(X-Q)<=l&&Math.abs(Y-R)<=l)&&(Q=X,R=Y,W!==p&&W!==k&&W!==w)){var $=this._hashKey(X,Y),ee=$,te=void 0;do{te=this._hash[ee],ee=(ee+1)%this._hashSize}while((!te||te.removed)&&ee!==$);for(B=te=te.prev;!c(X,Y,B.x,B.y,B.next.x,B.next.y);)if((B=B.next)===te){B=null;break}if(B){var ne=B===te,ie=this._addTriangle(B.i,W,B.next.i,-1,-1,B.t);B.t=ie,(B=f(t,W,B)).t=this._legalize(ie+2);for(var re=B.next;c(X,Y,re.x,re.y,re.next.x,re.next.y);)ie=this._addTriangle(re.i,W,re.next.i,re.prev.t,-1,re.t),re.prev.t=this._legalize(ie+2),this.hull=x(re),re=re.next;if(ne)for(re=B.prev;c(X,Y,re.prev.x,re.prev.y,re.x,re.y);)ie=this._addTriangle(re.prev.i,W,re.i,-1,re.t,re.prev.t),this._legalize(ie+2),re.prev.t=ie,this.hull=x(re),re=re.prev;this._hashEdge(B),this._hashEdge(B.prev)}}}this.triangles=N.subarray(0,this.trianglesLen),this.halfedges=G.subarray(0,this.trianglesLen)}return Object(h.a)(e,null,[{key:"from",value:function(t,n,i){n||(n=g),i||(i=_);for(var r=t.length,a=new Float64Array(2*r),s=0;s<r;s++){var h=t[s];a[2*s]=n(h),a[2*s+1]=i(h)}return new e(a)}}]),Object(h.a)(e,[{key:"_hashEdge",value:function(e){this._hash[this._hashKey(e.x,e.y)]=e}},{key:"_hashKey",value:function(e,t){return Math.floor(function(e,t){var n=e/(Math.abs(e)+Math.abs(t));return(t>0?3-n:1+n)/4}(e-this._cx,t-this._cy)*this._hashSize)%this._hashSize}},{key:"_legalize",value:function(e){var t=this.triangles,n=this.coords,i=this.halfedges,r=i[e],a=e-e%3,s=r-r%3,h=a+(e+1)%3,l=a+(e+2)%3,o=s+(r+2)%3;if(-1===r)return l;var u=t[l],c=t[e],v=t[h],f=t[o];if(function(e,t,n,i,r,a,s,h){var l=e-s,o=t-h,u=n-s,c=i-h,v=r-s,f=a-h,x=u*u+c*c,y=v*v+f*f;return l*(c*y-x*f)-o*(u*y-x*v)+(l*l+o*o)*(u*f-c*v)<0}(n[2*u],n[2*u+1],n[2*c],n[2*c+1],n[2*v],n[2*v+1],n[2*f],n[2*f+1])){t[e]=f,t[r]=u;var x=i[o];if(-1===x){var y=this.hull;do{if(y.t===o){y.t=e;break}y=y.next}while(y!==this.hull)}this._link(e,x),this._link(r,i[l]),this._link(l,o);var d=s+(r+1)%3;return this._legalize(e),this._legalize(d)}return l}},{key:"_link",value:function(e,t){this.halfedges[e]=t,-1!==t&&(this.halfedges[t]=e)}},{key:"_addTriangle",value:function(e,t,n,i,r,a){var s=this.trianglesLen;return this.triangles[s]=e,this.triangles[s+1]=t,this.triangles[s+2]=n,this._link(s,i),this._link(s+1,r),this._link(s+2,a),this.trianglesLen+=3,s}}]),e}();function u(e,t,n,i){var r=e-n,a=t-i;return r*r+a*a}function c(e,t,n,i,r,a){return(i-t)*(r-n)-(n-e)*(a-i)<0}function v(e,t,n,i,r,a){var s=n-e,h=i-t,l=r-e,o=a-t,u=s*s+h*h,c=l*l+o*o,v=s*o-h*l,f=.5*(o*u-h*c)/v,x=.5*(s*c-l*u)/v;return u&&c&&v&&f*f+x*x||1/0}function f(e,t,n){var i={i:t,x:e[2*t],y:e[2*t+1],t:0,prev:null,next:null,removed:!1};return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function x(e){return e.prev.next=e.next,e.next.prev=e.prev,e.removed=!0,e.prev}function y(e,t,n,i,r){return u(e[2*t],e[2*t+1],i,r)-u(e[2*n],e[2*n+1],i,r)||e[2*t]-e[2*n]||e[2*t+1]-e[2*n+1]}function d(e,t,n){var i=e[t];e[t]=e[n],e[n]=i}function g(e){return e[0]}function _(e){return e[1]}var m=function(){function e(){Object(s.a)(this,e),this._x0=this._y0=this._x1=this._y1=null,this._=""}return Object(h.a)(e,[{key:"moveTo",value:function(e,t){this._+="M".concat(this._x0=this._x1=+e,",").concat(this._y0=this._y1=+t)}},{key:"closePath",value:function(){null!==this._x1&&(this._x1=this._x0,this._y1=this._y0,this._+="Z")}},{key:"lineTo",value:function(e,t){this._+="L".concat(this._x1=+e,",").concat(this._y1=+t)}},{key:"arc",value:function(e,t,n){var i=(e=+e)+(n=+n),r=t=+t;if(n<0)throw new Error("negative radius");null===this._x1?this._+="M".concat(i,",").concat(r):(Math.abs(this._x1-i)>1e-6||Math.abs(this._y1-r)>1e-6)&&(this._+="L"+i+","+r),n&&(this._+="A".concat(n,",").concat(n,",0,1,1,").concat(e-n,",").concat(t,"A").concat(n,",").concat(n,",0,1,1,").concat(this._x1=i,",").concat(this._y1=r))}},{key:"rect",value:function(e,t,n,i){this._+="M".concat(this._x0=this._x1=+e,",").concat(this._y0=this._y1=+t,"h").concat(+n,"v").concat(+i,"h").concat(-n,"Z")}},{key:"value",value:function(){return this._||null}}]),e}(),p=function(){function e(){Object(s.a)(this,e),this._=[]}return Object(h.a)(e,[{key:"moveTo",value:function(e,t){this._.push([e,t])}},{key:"closePath",value:function(){this._.push(this._[0].slice())}},{key:"lineTo",value:function(e,t){this._.push([e,t])}},{key:"value",value:function(){return this._.length?this._:null}}]),e}(),k=n(6),w=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[0,0,960,500],i=Object(k.a)(n,4),r=i[0],a=i[1],h=i[2],l=i[3];if(Object(s.a)(this,e),!((h=+h)>=(r=+r))||!((l=+l)>=(a=+a)))throw new Error("invalid bounds");var o=this.delaunay=t,u=o.points,c=o.hull,v=o.triangles,f=this.circumcenters=new Float64Array(v.length/3*2),x=this.vectors=new Float64Array(2*u.length);this.xmax=h,this.xmin=r,this.ymax=l,this.ymin=a;for(var y=0,d=0,g=v.length;y<g;y+=3,d+=2){var _=2*v[y],m=2*v[y+1],p=2*v[y+2],w=u[_],b=u[_+1],T=u[m],M=u[m+1],j=u[p],O=u[p+1],A=w-T,P=w-j,S=b-M,z=b-O,E=w*w+b*b,F=E-T*T-M*M,L=E-j*j-O*O,I=2*(P*S-A*z);f[d]=(S*L-z*F)/I,f[d+1]=(P*F-A*L)/I}var H,K,C,J=c,U=4*J.i,Z=J.x,q=J.y;do{H=U,K=Z,C=q,U=4*(J=J.next).i,Z=J.x,q=J.y,x[H+2]=x[U]=C-q,x[H+3]=x[U+1]=Z-K}while(J!==c)}return Object(h.a)(e,[{key:"render",value:function(e){for(var t=null==e?e=new m:void 0,n=this.delaunay,i=n.halfedges,r=n.hull,a=this.circumcenters,s=this.vectors,h=0,l=i.length;h<l;++h){var o=i[h];if(!(o<h)){var u=2*Math.floor(h/3),c=2*Math.floor(o/3),v=a[u],f=a[u+1],x=a[c],y=a[c+1];this._renderSegment(v,f,x,y,e)}}var d=r;do{d=d.next;var g=2*Math.floor(d.t/3),_=a[g],p=a[g+1],k=4*d.i,w=this._project(_,p,s[k+2],s[k+3]);w&&this._renderSegment(_,p,w[0],w[1],e)}while(d!==r);return t&&t.value()}},{key:"renderBounds",value:function(e){var t=null==e?e=new m:void 0;return e.rect(this.xmin,this.ymin,this.xmax-this.xmin,this.ymax-this.ymin),t&&t.value()}},{key:"renderCell",value:function(e,t){var n=null==t?t=new m:void 0,i=this._clip(e);if(null!==i){t.moveTo(i[0],i[1]);for(var r=2,a=i.length;r<a;r+=2)t.lineTo(i[r],i[r+1]);return t.closePath(),n&&n.value()}}},{key:"cellPolygons",value:a.a.mark(function e(){var t,n,i,r;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=this.delaunay.points,n=0,i=t.length/2;case 2:if(!(n<i)){e.next=10;break}if(!(r=this.cellPolygon(n))){e.next=7;break}return e.next=7,r;case 7:++n,e.next=2;break;case 10:case"end":return e.stop()}},e,this)})},{key:"cellPolygon",value:function(e){var t=new p;return this.renderCell(e,t),t.value()}},{key:"_renderSegment",value:function(e,t,n,i,r){var a,s=this._regioncode(e,t),h=this._regioncode(n,i);0===s&&0===h?(r.moveTo(e,t),r.lineTo(n,i)):(a=this._clipSegment(e,t,n,i,s,h))&&(r.moveTo(a[0],a[1]),r.lineTo(a[2],a[3]))}},{key:"contains",value:function(e,t,n){return(t=+t)===t&&(n=+n)===n&&this.delaunay._step(e,t,n)===e}},{key:"_cell",value:function(e){var t=this.circumcenters,n=this.delaunay,i=n.inedges,r=n.halfedges,a=n.triangles,s=i[e];if(-1===s)return null;var h=[],l=s;do{var o=Math.floor(l/3);if(h.push(t[2*o],t[2*o+1]),a[l=l%3===2?l-2:l+1]!==e)break;l=r[l]}while(l!==s&&-1!==l);return h}},{key:"_clip",value:function(e){var t=this._cell(e);if(null===t)return null;var n=this.vectors,i=4*e;return n[i]||n[i+1]?this._clipInfinite(e,t,n[i],n[i+1],n[i+2],n[i+3]):this._clipFinite(e,t)}},{key:"_clipFinite",value:function(e,t){for(var n,i,r,a,s,h=t.length,l=null,o=t[h-2],u=t[h-1],c=this._regioncode(o,u),v=0;v<h;v+=2)if(n=o,i=u,o=t[v],u=t[v+1],r=c,c=this._regioncode(o,u),0===r&&0===c)a=s,s=0,l?l.push(o,u):l=[o,u];else{var f=void 0,x=void 0,y=void 0,d=void 0,g=void 0;if(0===r){if(null===(f=this._clipSegment(n,i,o,u,r,c)))continue;var _=f,m=Object(k.a)(_,4);x=m[0],y=m[1],d=m[2],g=m[3]}else{if(null===(f=this._clipSegment(o,u,n,i,c,r)))continue;var p=f,w=Object(k.a)(p,4);d=w[0],g=w[1],x=w[2],y=w[3],a=s,s=this._edgecode(x,y),a&&s&&this._edge(e,a,s,l,l.length),l?l.push(x,y):l=[x,y]}a=s,s=this._edgecode(d,g),a&&s&&this._edge(e,a,s,l,l.length),l?l.push(d,g):l=[d,g]}if(l)a=s,s=this._edgecode(l[0],l[1]),a&&s&&this._edge(e,a,s,l,l.length);else if(this.contains(e,(this.xmin+this.xmax)/2,(this.ymin+this.ymax)/2))return[this.xmax,this.ymin,this.xmax,this.ymax,this.xmin,this.ymax,this.xmin,this.ymin];return l}},{key:"_clipSegment",value:function(e,t,n,i,r,a){for(;;){if(0===r&&0===a)return[e,t,n,i];if(r&a)return null;var s=void 0,h=void 0,l=r||a;8&l?(s=e+(n-e)*(this.ymax-t)/(i-t),h=this.ymax):4&l?(s=e+(n-e)*(this.ymin-t)/(i-t),h=this.ymin):2&l?(h=t+(i-t)*(this.xmax-e)/(n-e),s=this.xmax):(h=t+(i-t)*(this.xmin-e)/(n-e),s=this.xmin),r?(e=s,t=h,r=this._regioncode(e,t)):(n=s,i=h,a=this._regioncode(n,i))}}},{key:"_clipInfinite",value:function(e,t,n,i,r,a){var s,h=Array.from(t);if((s=this._project(h[0],h[1],n,i))&&h.unshift(s[0],s[1]),(s=this._project(h[h.length-2],h[h.length-1],r,a))&&h.push(s[0],s[1]),h=this._clipFinite(e,h))for(var l,o=0,u=h.length,c=this._edgecode(h[u-2],h[u-1]);o<u;o+=2)l=c,c=this._edgecode(h[o],h[o+1]),l&&c&&(o=this._edge(e,l,c,h,o),u=h.length);else this.contains(e,(this.xmin+this.xmax)/2,(this.ymin+this.ymax)/2)&&(h=[this.xmin,this.ymin,this.xmax,this.ymin,this.xmax,this.ymax,this.xmin,this.ymax]);return h}},{key:"_edge",value:function(e,t,n,i,r){for(;t!==n;){var a=void 0,s=void 0;switch(t){case 5:t=4;continue;case 4:t=6,a=this.xmax,s=this.ymin;break;case 6:t=2;continue;case 2:t=10,a=this.xmax,s=this.ymax;break;case 10:t=8;continue;case 8:t=9,a=this.xmin,s=this.ymax;break;case 9:t=1;continue;case 1:t=5,a=this.xmin,s=this.ymin}i[r]===a&&i[r+1]===s||!this.contains(e,a,s)||(i.splice(r,0,a,s),r+=2)}return r}},{key:"_project",value:function(e,t,n,i){var r,a,s,h=1/0;if(i<0){if(t<=this.ymin)return null;(r=(this.ymin-t)/i)<h&&(s=this.ymin,a=e+(h=r)*n)}else if(i>0){if(t>=this.ymax)return null;(r=(this.ymax-t)/i)<h&&(s=this.ymax,a=e+(h=r)*n)}if(n>0){if(e>=this.xmax)return null;(r=(this.xmax-e)/n)<h&&(a=this.xmax,s=t+(h=r)*i)}else if(n<0){if(e<=this.xmin)return null;(r=(this.xmin-e)/n)<h&&(a=this.xmin,s=t+(h=r)*i)}return[a,s]}},{key:"_edgecode",value:function(e,t){return(e===this.xmin?1:e===this.xmax?2:0)|(t===this.ymin?4:t===this.ymax?8:0)}},{key:"_regioncode",value:function(e,t){return(e<this.xmin?1:e>this.xmax?2:0)|(t<this.ymin?4:t>this.ymax?8:0)}}]),e}(),b=a.a.mark(A),T=2*Math.PI;function M(e){return e[0]}function j(e){return e[1]}var O=function(){function e(t){Object(s.a)(this,e);var n=new o(t),i=n.halfedges,r=n.hull,a=n.triangles;this.points=t,this.halfedges=i,this.hull=r,this.triangles=a;for(var h=this.inedges=new Int32Array(t.length/2).fill(-1),l=this.outedges=new Int32Array(t.length/2).fill(-1),u=0,c=i.length;u<c;++u)h[a[u%3===2?u-2:u+1]]=u;var v,f=r;do{v=f,h[(f=f.next).i]=v.t,l[v.i]=f.t}while(f!==r)}return Object(h.a)(e,[{key:"voronoi",value:function(e){return new w(this,e)}},{key:"neighbors",value:a.a.mark(function e(t){var n,i,r,s,h,l;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=this.inedges,i=this.outedges,r=this.halfedges,s=this.triangles,-1!==(h=n[t])){e.next=4;break}return e.abrupt("return");case 4:l=h;case 5:return e.next=7,s[l];case 7:if(s[l=l%3===2?l-2:l+1]===t){e.next=10;break}return e.abrupt("return");case 10:if(-1!==(l=r[l])){e.next=15;break}return e.next=14,s[i[t]];case 14:return e.abrupt("return",e.sent);case 15:if(l!==h){e.next=5;break}case 16:case"end":return e.stop()}},e,this)})},{key:"find",value:function(e,t){var n,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;if((e=+e)!==e||(t=+t)!==t)return-1;for(;(n=this._step(i,e,t))>=0&&n!==i;)i=n;return n}},{key:"_step",value:function(e,t,n){var r=this.inedges,a=this.points;if(-1===r[e])return-1;var s,h=e,l=Math.pow(t-a[2*e],2)+Math.pow(n-a[2*e+1],2),o=Object(i.a)(this.neighbors(e));try{for(o.s();!(s=o.n()).done;){var u=s.value,c=Math.pow(t-a[2*u],2)+Math.pow(n-a[2*u+1],2);c<l&&(l=c,h=u)}}catch(v){o.e(v)}finally{o.f()}return h}},{key:"render",value:function(e){for(var t=null==e?e=new m:void 0,n=this.points,i=this.halfedges,r=this.triangles,a=0,s=i.length;a<s;++a){var h=i[a];if(!(h<a)){var l=2*r[a],o=2*r[h];e.moveTo(n[l],n[l+1]),e.lineTo(n[o],n[o+1])}}return this.renderHull(e),t&&t.value()}},{key:"renderPoints",value:function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,n=null==e?e=new m:void 0,i=this.points,r=0,a=i.length;r<a;r+=2){var s=i[r],h=i[r+1];e.moveTo(s+t,h),e.arc(s,h,t,0,T)}return n&&n.value()}},{key:"renderHull",value:function(e){var t=null==e?e=new m:void 0,n=this.hull,i=n;for(e.moveTo(i.x,i.y);(i=i.next)!==n;)e.lineTo(i.x,i.y);return e.closePath(),t&&t.value()}},{key:"hullPolygon",value:function(){var e=new p;return this.renderHull(e),e.value()}},{key:"renderTriangle",value:function(e,t){var n=null==t?t=new m:void 0,i=this.points,r=this.triangles,a=2*r[e*=3],s=2*r[e+1],h=2*r[e+2];return t.moveTo(i[a],i[a+1]),t.lineTo(i[s],i[s+1]),t.lineTo(i[h],i[h+1]),t.closePath(),n&&n.value()}},{key:"trianglePolygons",value:a.a.mark(function e(){var t,n,i;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=this.triangles,n=0,i=t.length/3;case 2:if(!(n<i)){e.next=8;break}return e.next=5,this.trianglePolygon(n);case 5:++n,e.next=2;break;case 8:case"end":return e.stop()}},e,this)})},{key:"trianglePolygon",value:function(e){var t=new p;return this.renderTriangle(e,t),t.value()}}]),e}();function A(e,t,n,r){var s,h,l,o;return a.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:s=0,h=Object(i.a)(e),a.prev=2,h.s();case 4:if((l=h.n()).done){a.next=13;break}return o=l.value,a.next=8,t.call(r,o,s,e);case 8:return a.next=10,n.call(r,o,s,e);case 10:++s;case 11:a.next=4;break;case 13:a.next=18;break;case 15:a.prev=15,a.t0=a.catch(2),h.e(a.t0);case 18:return a.prev=18,h.f(),a.finish(18);case 21:case"end":return a.stop()}},b,null,[[2,15,18,21]])}O.from=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:M,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:j,i=arguments.length>3?arguments[3]:void 0;return new O("length"in e?function(e,t,n,i){for(var r=e.length,a=new Float64Array(2*r),s=0;s<r;++s){var h=e[s];a[2*s]=t.call(i,h,s,e),a[2*s+1]=n.call(i,h,s,e)}return a}(e,t,n,i):Float64Array.from(A(e,t,n,i)))},n.d(t,"a",function(){return O})}}]);
//# sourceMappingURL=86.31d016c4.chunk.js.map