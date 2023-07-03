(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{1110:function(e,t,n){},1341:function(e,t,n){"use strict";n.r(t);var a=n(34),o=n(7),r=n(55),i=n(6),c=n(0),s=n.n(c),m=n(1331),l=n(694),u=n(623),h=function(e,t){this.object=e,this.domElement=void 0!==t?t:document,this.enabled=!0,this.target=new u.Vector3,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.25,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!1,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.enableKeys=!0,this.keys={LEFT:37,UP:38,RIGHT:39,BOTTOM:40},this.mouseButtons={LEFT:u.MOUSE.LEFT,MIDDLE:u.MOUSE.MIDDLE,RIGHT:u.MOUSE.RIGHT},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this.getPolarAngle=function(){return m.phi},this.getAzimuthalAngle=function(){return m.theta},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(a),n.update(),c=i.NONE},this.update=function(){var t=new u.Vector3,o=(new u.Quaternion).setFromUnitVectors(e.up,new u.Vector3(0,1,0)),r=o.clone().inverse(),b=new u.Vector3,f=new u.Quaternion;return function(){var e=n.object.position;return t.copy(e).sub(n.target),t.applyQuaternion(o),m.setFromVector3(t),n.autoRotate&&c===i.NONE&&P(2*Math.PI/60/60*n.autoRotateSpeed),m.theta+=l.theta,m.phi+=l.phi,m.theta=Math.max(n.minAzimuthAngle,Math.min(n.maxAzimuthAngle,m.theta)),m.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,m.phi)),m.makeSafe(),m.radius*=h,m.radius=Math.max(n.minDistance,Math.min(n.maxDistance,m.radius)),n.target.add(d),t.setFromSpherical(m),t.applyQuaternion(r),e.copy(n.target).add(t),n.object.lookAt(n.target),!0===n.enableDamping?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,d.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),d.set(0,0,0)),h=1,!!(p||b.distanceToSquared(n.object.position)>s||8*(1-f.dot(n.object.quaternion))>s)&&(n.dispatchEvent(a),b.copy(n.object.position),f.copy(n.object.quaternion),p=!1,!0)}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",U,!1),n.domElement.removeEventListener("mousedown",R,!1),n.domElement.removeEventListener("wheel",F,!1),n.domElement.removeEventListener("touchstart",B,!1),n.domElement.removeEventListener("touchend",G,!1),n.domElement.removeEventListener("touchmove",V,!1),document.removeEventListener("mousemove",A,!1),document.removeEventListener("mouseup",x,!1),window.removeEventListener("keydown",z,!1)};var n=this,a={type:"change"},o={type:"start"},r={type:"end"},i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_DOLLY_PAN:4},c=i.NONE,s=1e-6,m=new u.Spherical,l=new u.Spherical,h=1,d=new u.Vector3,p=!1,b=new u.Vector2,f=new u.Vector2,E=new u.Vector2,g=new u.Vector2,y=new u.Vector2,v=new u.Vector2,w=new u.Vector2,O=new u.Vector2,M=new u.Vector2;function j(){return Math.pow(.95,n.zoomSpeed)}function P(e){l.theta-=e}function N(e){l.phi-=e}var L=function(){var e=new u.Vector3;return function(t,n){e.setFromMatrixColumn(n,0),e.multiplyScalar(-t),d.add(e)}}(),S=function(){var e=new u.Vector3;return function(t,a){!0===n.screenSpacePanning?e.setFromMatrixColumn(a,1):(e.setFromMatrixColumn(a,0),e.crossVectors(n.object.up,e)),e.multiplyScalar(t),d.add(e)}}(),C=function(){var e=new u.Vector3;return function(t,a){var o=n.domElement===document?n.domElement.body:n.domElement;if(n.object.isPerspectiveCamera){var r=n.object.position;e.copy(r).sub(n.target);var i=e.length();i*=Math.tan(n.object.fov/2*Math.PI/180),L(2*t*i/o.clientHeight,n.object.matrix),S(2*a*i/o.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(L(t*(n.object.right-n.object.left)/n.object.zoom/o.clientWidth,n.object.matrix),S(a*(n.object.top-n.object.bottom)/n.object.zoom/o.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function T(e){n.object.isPerspectiveCamera?h/=e:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*e)),n.object.updateProjectionMatrix(),p=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function k(e){n.object.isPerspectiveCamera?h*=e:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/e)),n.object.updateProjectionMatrix(),p=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function D(e){g.set(e.clientX,e.clientY)}function R(e){if(!1!==n.enabled){switch(e.preventDefault(),n.domElement.focus?n.domElement.focus():window.focus(),e.button){case n.mouseButtons.LEFT:if(e.ctrlKey||e.metaKey||e.shiftKey){if(!1===n.enablePan)return;D(e),c=i.PAN}else{if(!1===n.enableRotate)return;!function(e){b.set(e.clientX,e.clientY)}(e),c=i.ROTATE}break;case n.mouseButtons.MIDDLE:if(!1===n.enableZoom)return;!function(e){w.set(e.clientX,e.clientY)}(e),c=i.DOLLY;break;case n.mouseButtons.RIGHT:if(!1===n.enablePan)return;D(e),c=i.PAN}c!==i.NONE&&(document.addEventListener("mousemove",A,!1),document.addEventListener("mouseup",x,!1),n.dispatchEvent(o))}}function A(e){if(!1!==n.enabled)switch(e.preventDefault(),c){case i.ROTATE:if(!1===n.enableRotate)return;!function(e){f.set(e.clientX,e.clientY),E.subVectors(f,b).multiplyScalar(n.rotateSpeed);var t=n.domElement===document?n.domElement.body:n.domElement;P(2*Math.PI*E.x/t.clientHeight),N(2*Math.PI*E.y/t.clientHeight),b.copy(f),n.update()}(e);break;case i.DOLLY:if(!1===n.enableZoom)return;!function(e){O.set(e.clientX,e.clientY),M.subVectors(O,w),M.y>0?T(j()):M.y<0&&k(j()),w.copy(O),n.update()}(e);break;case i.PAN:if(!1===n.enablePan)return;!function(e){y.set(e.clientX,e.clientY),v.subVectors(y,g).multiplyScalar(n.panSpeed),C(v.x,v.y),g.copy(y),n.update()}(e)}}function x(e){!1!==n.enabled&&(document.removeEventListener("mousemove",A,!1),document.removeEventListener("mouseup",x,!1),n.dispatchEvent(r),c=i.NONE)}function F(e){!1===n.enabled||!1===n.enableZoom||c!==i.NONE&&c!==i.ROTATE||(e.preventDefault(),e.stopPropagation(),n.dispatchEvent(o),function(e){e.deltaY<0?k(j()):e.deltaY>0&&T(j()),n.update()}(e),n.dispatchEvent(r))}function z(e){!1!==n.enabled&&!1!==n.enableKeys&&!1!==n.enablePan&&function(e){var t=!1;switch(e.keyCode){case n.keys.UP:C(0,n.keyPanSpeed),t=!0;break;case n.keys.BOTTOM:C(0,-n.keyPanSpeed),t=!0;break;case n.keys.LEFT:C(n.keyPanSpeed,0),t=!0;break;case n.keys.RIGHT:C(-n.keyPanSpeed,0),t=!0}t&&(e.preventDefault(),n.update())}(e)}function B(e){if(!1!==n.enabled){switch(e.preventDefault(),e.touches.length){case 1:if(!1===n.enableRotate)return;!function(e){b.set(e.touches[0].pageX,e.touches[0].pageY)}(e),c=i.TOUCH_ROTATE;break;case 2:if(!1===n.enableZoom&&!1===n.enablePan)return;!function(e){if(n.enableZoom){var t=e.touches[0].pageX-e.touches[1].pageX,a=e.touches[0].pageY-e.touches[1].pageY,o=Math.sqrt(t*t+a*a);w.set(0,o)}if(n.enablePan){var r=.5*(e.touches[0].pageX+e.touches[1].pageX),i=.5*(e.touches[0].pageY+e.touches[1].pageY);g.set(r,i)}}(e),c=i.TOUCH_DOLLY_PAN;break;default:c=i.NONE}c!==i.NONE&&n.dispatchEvent(o)}}function V(e){if(!1!==n.enabled)switch(e.preventDefault(),e.stopPropagation(),e.touches.length){case 1:if(!1===n.enableRotate)return;if(c!==i.TOUCH_ROTATE)return;!function(e){f.set(e.touches[0].pageX,e.touches[0].pageY),E.subVectors(f,b).multiplyScalar(n.rotateSpeed);var t=n.domElement===document?n.domElement.body:n.domElement;P(2*Math.PI*E.x/t.clientHeight),N(2*Math.PI*E.y/t.clientHeight),b.copy(f),n.update()}(e);break;case 2:if(!1===n.enableZoom&&!1===n.enablePan)return;if(c!==i.TOUCH_DOLLY_PAN)return;!function(e){if(n.enableZoom){var t=e.touches[0].pageX-e.touches[1].pageX,a=e.touches[0].pageY-e.touches[1].pageY,o=Math.sqrt(t*t+a*a);O.set(0,o),M.set(0,Math.pow(O.y/w.y,n.zoomSpeed)),T(M.y),w.copy(O)}if(n.enablePan){var r=.5*(e.touches[0].pageX+e.touches[1].pageX),i=.5*(e.touches[0].pageY+e.touches[1].pageY);y.set(r,i),v.subVectors(y,g).multiplyScalar(n.panSpeed),C(v.x,v.y),g.copy(y)}n.update()}(e);break;default:c=i.NONE}}function G(e){!1!==n.enabled&&(n.dispatchEvent(r),c=i.NONE)}function U(e){!1!==n.enabled&&e.preventDefault()}n.domElement.addEventListener("contextmenu",U,!1),n.domElement.addEventListener("mousedown",R,!1),n.domElement.addEventListener("wheel",F,!1),n.domElement.addEventListener("touchstart",B,!1),n.domElement.addEventListener("touchend",G,!1),n.domElement.addEventListener("touchmove",V,!1),window.addEventListener("keydown",z,!1),this.update()};(h.prototype=Object.create(u.EventDispatcher.prototype)).constructor=h,Object.defineProperties(h.prototype,{center:{get:function(){return console.warn("OrbitControls: .center has been renamed to .target"),this.target}},noZoom:{get:function(){return console.warn("OrbitControls: .noZoom has been deprecated. Use .enableZoom instead."),!this.enableZoom},set:function(e){console.warn("OrbitControls: .noZoom has been deprecated. Use .enableZoom instead."),this.enableZoom=!e}},noRotate:{get:function(){return console.warn("OrbitControls: .noRotate has been deprecated. Use .enableRotate instead."),!this.enableRotate},set:function(e){console.warn("OrbitControls: .noRotate has been deprecated. Use .enableRotate instead."),this.enableRotate=!e}},noPan:{get:function(){return console.warn("OrbitControls: .noPan has been deprecated. Use .enablePan instead."),!this.enablePan},set:function(e){console.warn("OrbitControls: .noPan has been deprecated. Use .enablePan instead."),this.enablePan=!e}},noKeys:{get:function(){return console.warn("OrbitControls: .noKeys has been deprecated. Use .enableKeys instead."),!this.enableKeys},set:function(e){console.warn("OrbitControls: .noKeys has been deprecated. Use .enableKeys instead."),this.enableKeys=!e}},staticMoving:{get:function(){return console.warn("OrbitControls: .staticMoving has been deprecated. Use .enableDamping instead."),!this.enableDamping},set:function(e){console.warn("OrbitControls: .staticMoving has been deprecated. Use .enableDamping instead."),this.enableDamping=!e}},dynamicDampingFactor:{get:function(){return console.warn("OrbitControls: .dynamicDampingFactor has been renamed. Use .dampingFactor instead."),this.dampingFactor},set:function(e){console.warn("OrbitControls: .dynamicDampingFactor has been renamed. Use .dampingFactor instead."),this.dampingFactor=e}}});var d=h,p=n(4),b=n(16),f=n.n(b);n(1110);Object(m.d)({OrbitControls:d});t.default=function(){return s.a.createElement("div",{className:"Playground"},s.a.createElement("div",{className:"Playground__contents"},s.a.createElement(v,null)))};function E(e){var t=Object(c.useRef)(),n=Object(m.g)(),a=n.camera;return n.scene.fog=new u.Fog(new u.Color("#e1eeed"),0,20),s.a.createElement("orbitControls",Object.assign({ref:t,args:[a]},e))}var g={fov:75,near:.1,far:1e3},y=p.scaleLinear().domain([0,1]).range(["#e1b12c","#40739e"]);function v(e){var t=Object.assign({},e);new u.SphereBufferGeometry(100,50,50);return s.a.createElement(m.a,Object.assign({camera:g},t),s.a.createElement(E,null),s.a.createElement("group",null,s.a.createElement("pointLight",{position:[0,0,5],color:"#fafaff",intensity:.5}),s.a.createElement("pointLight",{position:[0,0,3],color:"#f7f3ce",intensity:.1}),s.a.createElement("ambientLight",{color:"#fff",intensity:.7}),s.a.createElement(M,null),s.a.createElement(w,null)))}var w=function(){var e=new u.SphereBufferGeometry(30,50,50);return s.a.createElement("mesh",{geometry:e,position:[0,-31,0]},s.a.createElement("meshBasicMaterial",{side:u.DoubleSide,attach:"material",color:"#228c7b"}))},O=f.a.times(27,{}),M=function(){var e=Object(c.useState)(0),t=Object(i.a)(e,2),n=(t[0],t[1],Object(c.useRef)());O=f.a.map(O,function(e,t){return Object(r.a)(Object(r.a)({},e),{},{position:[.9*(t%9-4.5),0,.45*(-5+Math.floor(t/3))],rate:p.randomNormal(5e-4,.005)(),y:-2})});Object(m.f)(function(){0,O.forEach(function(e,t){(e.y>1&&Math.random()<.03||e.y>2.3&&e.rate>0||e.y<1&&e.rate<0)&&(e.rate=-e.rate),e.y+=e.rate,f.a.get(e,"ref.current")&&e.ref.current.position.set(e.position[0],e.y,e.position[2])})}),Object(c.useEffect)(function(){O.forEach(function(e,t){var n;f.a.get(e,"ref.current")&&e.ref.current.applyMatrix((n=new u.Matrix4).makeTranslation.apply(n,Object(o.a)(e.position)))})},[]);var a=new u.SphereBufferGeometry(6,50,50),l=new u.SphereBufferGeometry(25,50,50);return s.a.createElement("group",{ref:n},s.a.createElement("mesh",{geometry:a,"position-z":-8},s.a.createElement("meshBasicMaterial",{attach:"material",color:"#ffca61",side:u.BackSide})),s.a.createElement("mesh",{geometry:l,"position-z":10},s.a.createElement("meshLambertMaterial",{attach:"material",color:"#fe5f55",side:u.BackSide})),f.a.map(O,function(e,t){return s.a.createElement("group",{ref:e.ref,key:t,scale:[.8,.8,.8]},s.a.createElement(P,{position:e.position}))}))},j=p.interpolateHcl("#FDA7DF","#FFC312"),P=function(e){var t=e.position,n=(Object(l.c)({from:{rotation:[u.Math.degToRad(180),0,u.Math.degToRad(45)]},to:{rotation:[0,0,0]},config:{mass:10,tension:1e3,friction:300,precision:1e-5}}).rotation,y(Math.random())),a=new u.EllipseCurve(0,0,10,10,0,2*Math.PI,!1,0).getPoints(50),o=((new u.BufferGeometry).setFromPoints(a),j(p.randomNormal(.5,.2)()));return s.a.createElement(l.b.group,{position:t,scale:f.a.times(3,function(e){return.5})},s.a.createElement(N,{color:n}),s.a.createElement(L,{color:n}),s.a.createElement(S,{color:n}),s.a.createElement(C,{color:n}),f.a.times(6,function(e){return s.a.createElement(k,{color:o,"rotation-z":e*(2*Math.PI/6)})}),s.a.createElement(T,null))},N=function(e){var t=e.color,n=new u.SphereBufferGeometry(1,50,50);return s.a.createElement("mesh",{geometry:n,scale:[p.randomNormal(1.2,.2)(),1,1.3]},s.a.createElement("meshLambertMaterial",{attach:"material",color:t}))},L=function(e){var t=e.color,n=Object(c.useMemo)(function(){var e=p.randomNormal(.7,.1)();return[e,new u.SphereBufferGeometry(e,20,20),new u.SphereBufferGeometry(p.randomNormal(.3,.05)(),20,20)]},[]),a=Object(i.a)(n,3),o=a[0],r=a[1],m=a[2],l=new u.EllipseCurve(0,0,.35,.35,0,Math.PI,!0,0).getPoints(50),h=(new u.BufferGeometry).setFromPoints(l);return s.a.createElement("group",{position:[0,p.randomNormal(-.3,.1)(),p.randomNormal(.7,.1)()]},s.a.createElement("mesh",{geometry:r,scale:[1,1,1.3]},s.a.createElement("meshLambertMaterial",{attach:"material",color:t})),s.a.createElement("mesh",{geometry:m,position:[0,.1,1.3*o]},s.a.createElement("meshLambertMaterial",{attach:"material",color:"#2f3640"})),s.a.createElement("line",{geometry:h,position:[0,-.1,o]},s.a.createElement("lineBasicMaterial",{attach:"material",color:"#2f3640"})))},S=function(e){var t=e.color,n=Object(c.useMemo)(function(){var e=p.randomNormal(.25,.05)(),t=new u.SphereBufferGeometry(e,20,20),n=new u.SphereBufferGeometry(e*p.randomNormal(.5,.1)(),20,20),a=new u.SphereBufferGeometry(p.randomNormal(.02,.005)(),20,20),o=new u.SphereBufferGeometry(p.randomNormal(.16,.1)(),20,20),r=p.randomNormal(0,.6)(),i=p.randomNormal(.55,.05)(),c=p.randomNormal(0,.05)(),s=p.randomNormal(0,.05)(),m=p.randomNormal(.36,.1)(),l=p.randomNormal(1,.05)();return[e,t,n,a,o,r,i,c,s,m,l,m,l]},[]),a=Object(i.a)(n,11),o=a[0],r=a[1],m=a[2],l=a[3],h=a[4],d=a[5],b=a[6],E=a[7],g=a[8],y=a[9],v=a[10];return s.a.createElement("group",{position:[0,y,v]},f.a.times(2,function(e){return s.a.createElement("group",{key:e,position:[b*(e?1:-1),0,0]},s.a.createElement("mesh",{geometry:h,scale:[2,1,2],position:[(d>0?.3:-.3)*(e?1:-1),.2,d>0?-.4:-.2],"rotation-z":d*(e?-1:1)},s.a.createElement("meshLambertMaterial",{attach:"material",color:t})),s.a.createElement("mesh",{geometry:r},s.a.createElement("meshLambertMaterial",{attach:"material",color:"#ffffff"})),s.a.createElement("mesh",{geometry:m,position:[E,g,o-(Math.abs(E)+Math.abs(g))/2]},s.a.createElement("meshLambertMaterial",{attach:"material",color:"#353b48"})),s.a.createElement("mesh",{geometry:l,position:[E,g,o-(Math.abs(E)+Math.abs(g))/2+.15]},s.a.createElement("meshLambertMaterial",{attach:"material",color:"white"})))}))},C=function(e){var t=e.color,n=Object(c.useMemo)(function(){var e=!!Math.round(Math.random()),t=p.randomNormal(e?.39:.2,.1)();return[e,t,new u.SphereBufferGeometry(t,20,20),p.randomNormal(0,2)(),p.randomNormal(e?1.1:.9,.1)(),p.randomNormal(.5,.1)(),p.randomNormal(-.2,.05)()]},[]),a=Object(i.a)(n,7),o=a[0],r=(a[1],a[2]),m=a[3],l=a[4],h=a[5],d=a[6];return s.a.createElement("group",{position:[0,h,d]},f.a.times(2,function(e){return s.a.createElement("mesh",{key:e,geometry:r,scale:[2,o?.5:1,1.3],position:[l*(e?-1:1),o?-.8:0,0],"rotation-z":o?m*e?1:-1:m*e?-1:1},s.a.createElement("meshLambertMaterial",{attach:"material",color:t}))}))},T=function(){var e=new u.CylinderGeometry(.1,.1,10,32);return s.a.createElement("mesh",{position:[0,-4.3,0],geometry:e},s.a.createElement("meshLambertMaterial",{attach:"material",color:"#228c7b"}))},k=function(e){var t=e.color,n=Object(a.a)(e,["color"]),o=p.randomNormal(1.5,.3)(),r=f.a.times(45,function(e){var t=Math.PI*(2*e)/90;return new u.Vector3((1.72+.08*Math.cos(t))*(1.6*Math.sin(t)),-Math.cos(t)*o,1.01)}),i=new u.LatheBufferGeometry(r,32);return s.a.createElement("mesh",Object.assign({},n,{geometry:i,scale:[1,1,.2],"rotation-x":-.2,"position-z":-.7}),s.a.createElement("meshLambertMaterial",{side:u.DoubleSide,attach:"material",color:t,opacity:.9,transparent:!0}))}}}]);
//# sourceMappingURL=80.71dfe46d.chunk.js.map