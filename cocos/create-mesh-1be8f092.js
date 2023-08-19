System.register(["./index-68ccac70.js","./pipeline-state-manager-8f16c5a7.js","./buffer-barrier-d1733967.js","./find-222dc7da.js","./mesh-97b1b18c.js"],(function(e){"use strict";var t,a,n,r,s,i,u,o,f,l,v;return{setters:[function(e){t=e.i,a=e.o},function(){},function(e){n=e.aP,r=e.aQ,s=e.b,i=e.aq,u=e.v},function(e){o=e.as,f=e.at},function(e){l=e.M,v=e.B}],execute:function(){var h;e({_:m,r:function(e,a){void 0===a&&(a=0);for(var n,i={positions:[]},u=new DataView(e.data.buffer,e.data.byteOffset,e.data.byteLength),f=e.struct,l=f.primitives[a],v=t(l.vertexBundelIndices);!(n=v()).done;)for(var c,d=n.value,m=f.vertexBundles[d],b=m.view.offset,T=m.view,g=T.length,R=T.stride,A=t(m.attributes);!(c=A()).done;){var x=c.value,M=h[x.name];M&&(i[M]=(i[M]||[]).concat(o(u,x.format,b,g,R))),b+=r[x.format].size}var p=l.indexView;return i.indices=o(u,s["R"+8*p.stride+"UI"],p.offset,p.length),i}}),function(e){e[e.positions=n.ATTR_POSITION]="positions",e[e.normals=n.ATTR_NORMAL]="normals",e[e.uvs=n.ATTR_TEX_COORD]="uvs",e[e.colors=n.ATTR_COLOR]="colors"}(h||(h={}));var c=[new i(n.ATTR_POSITION,s.RGB32F),new i(n.ATTR_NORMAL,s.RGB32F),new i(n.ATTR_TEX_COORD,s.RG32F),new i(n.ATTR_TANGENT,s.RGBA32F),new i(n.ATTR_COLOR,s.RGBA32F)],d=new a;function m(e,i,o){o=o||{};var h,m=[],b=0,T=[],g=0,R=e.positions.slice();if(R.length>0){if(h=null,e.attributes)for(var A,x=t(e.attributes);!(A=x()).done;){var M=A.value;if(M.name===n.ATTR_POSITION){h=M;break}}h||(h=c[0]),m.push(h);var p=r[h.format];g=Math.max(g,Math.floor(R.length/p.count)),T.push({offset:b,data:R,attribute:h}),b+=p.size}if(e.normals&&e.normals.length>0){if(h=null,e.attributes)for(var w,O=t(e.attributes);!(w=O()).done;){var _=w.value;if(_.name===n.ATTR_NORMAL){h=_;break}}h||(h=c[1]);var B=r[h.format];m.push(h),g=Math.max(g,Math.floor(e.normals.length/B.count)),T.push({offset:b,data:e.normals,attribute:h}),b+=B.size}if(e.uvs&&e.uvs.length>0){if(h=null,e.attributes)for(var I,S=t(e.attributes);!(I=S()).done;){var N=I.value;if(N.name===n.ATTR_TEX_COORD){h=N;break}}h||(h=c[2]);var L=r[h.format];m.push(h),g=Math.max(g,Math.floor(e.uvs.length/L.count)),T.push({offset:b,data:e.uvs,attribute:h}),b+=L.size}if(e.tangents&&e.tangents.length>0){if(h=null,e.attributes)for(var G,y=t(e.attributes);!(G=y()).done;){var z=G.value;if(z.name===n.ATTR_TANGENT){h=z;break}}h||(h=c[3]);var F=r[h.format];m.push(h),g=Math.max(g,Math.floor(e.tangents.length/F.count)),T.push({offset:b,data:e.tangents,attribute:h}),b+=F.size}if(e.colors&&e.colors.length>0){if(h=null,e.attributes)for(var V,C=t(e.attributes);!(V=C()).done;){var E=V.value;if(E.name===n.ATTR_COLOR){h=E;break}}h||(h=c[4]);var P=r[h.format];m.push(h),g=Math.max(g,Math.floor(e.colors.length/P.count)),T.push({offset:b,data:e.colors,attribute:h}),b+=P.size}if(e.customAttributes)for(var D=0;D<e.customAttributes.length;D++){var j=e.customAttributes[D],k=r[j.attr.format];m.push(j.attr),g=Math.max(g,Math.floor(j.values.length/k.count)),T.push({offset:b,data:j.values,attribute:j.attr}),b+=k.size}for(var U=new v,X=new ArrayBuffer(g*b),q=new DataView(X),Q=0,H=T;Q<H.length;Q++){var J=H[Q];f(q,J.data,J.attribute.format,J.offset,b)}U.setNextAlignment(0);var K={attributes:m,view:{offset:U.getLength(),length:X.byteLength,count:g,stride:b}};U.addBuffer(X);var W=null,Y=0;if(e.indices){var Z=e.indices;Y=Z.length,W=new ArrayBuffer(2*Y);var $=new DataView(W);f($,Z,s.R16UI)}var ee={primitiveMode:e.primitiveMode||u.TRIANGLE_LIST,vertexBundelIndices:[0]};W&&(U.setNextAlignment(2),ee.indexView={offset:U.getLength(),length:W.byteLength,count:Y,stride:2},U.addBuffer(W));var te=e.minPos;if(!te&&o.calculateBounds){te=a.set(new a,1/0,1/0,1/0);for(var ae=0;ae<g;++ae)a.set(d,R[3*ae+0],R[3*ae+1],R[3*ae+2]),a.min(te,te,d)}var ne=e.maxPos;if(!ne&&o.calculateBounds){ne=a.set(new a,-1/0,-1/0,-1/0);for(var re=0;re<g;++re)a.set(d,R[3*re+0],R[3*re+1],R[3*re+2]),a.max(ne,ne,d)}var se={vertexBundles:[K],primitives:[ee]};return te&&(se.minPosition=new a(te.x,te.y,te.z)),ne&&(se.maxPosition=new a(ne.x,ne.y,ne.z)),i||(i=new l),i.reset({struct:se,data:new Uint8Array(U.getCombined())}),i}function b(e,t){if(t>0){var a=e%t;if(0!==a)return t-a}return 0}e("M",function(){function e(){}return e.createMesh=function(e,t,a){return m(e,t,a)},e.createDynamicMesh=function(e,a,o,f){return function(e,a,o,f){f=f||{maxSubMeshes:1,maxSubMeshVertices:1024,maxSubMeshIndices:1024};var v=[],h=0;if(a.positions.length>0&&v.push(new i(n.ATTR_POSITION,s.RGB32F,!1,h++,!1,0)),a.normals&&a.normals.length>0&&v.push(new i(n.ATTR_NORMAL,s.RGB32F,!1,h++,!1,0)),a.uvs&&a.uvs.length>0&&v.push(new i(n.ATTR_TEX_COORD,s.RG32F,!1,h++,!1,0)),a.tangents&&a.tangents.length>0&&v.push(new i(n.ATTR_TANGENT,s.RGBA32F,!1,h++,!1,0)),a.colors&&a.colors.length>0&&v.push(new i(n.ATTR_COLOR,s.RGBA32F,!1,h++,!1,0)),a.customAttributes)for(var c=0;c<a.customAttributes.length;c++){var d=a.customAttributes[c],m=new i;m.copy(d.attr),m.stream=h++,v.push(m)}for(var T=[],g=[],R=0,A=0;A<f.maxSubMeshes;A++){for(var x,M={vertexBundelIndices:[],primitiveMode:a.primitiveMode||u.TRIANGLE_LIST},p=t(v);!(x=p()).done;){var w=x.value,O=r[w.format],_=f.maxSubMeshVertices*O.size,B={view:{offset:R,length:_,count:0,stride:O.size},attributes:[w]},I=T.length;M.vertexBundelIndices.push(I),T.push(B),R+=_}var S=0;if(a.indices16&&a.indices16.length>0?S=2:a.indices32&&a.indices32.length>0&&(S=4),S>0){R+=b(R,S);var N=f.maxSubMeshIndices*S,L={offset:R,length:N,count:0,stride:S};M.indexView=L,R+=N}g.push(M)}var G={info:{maxSubMeshes:f.maxSubMeshes,maxSubMeshVertices:f.maxSubMeshVertices,maxSubMeshIndices:f.maxSubMeshIndices},bounds:[]};G.bounds.length=f.maxSubMeshes;var y={struct:{vertexBundles:T,primitives:g,dynamic:G},data:new Uint8Array(R)};return o||(o=new l),o.reset(y),o.initialize(),o.updateSubMesh(e,a),o}(e,a,o,f)},e}())}}}));
