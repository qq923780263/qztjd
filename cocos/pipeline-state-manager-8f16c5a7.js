System.register(["./index-68ccac70.js","./buffer-barrier-d1733967.js"],(function(e){"use strict";var _,E,T,t,O,F,n,A,a,S,R,N,i,I,r,L,c,o,s,M,P,u,C,B,D,G,U,l,d,m,g,w,f,p,H,X,v,b,h,W,y,V,x,k,J,Y,j,Z,z,K,Q,q,$,ee,_e,Ee,Te,te,Oe,Fe;return{setters:[function(e){_=e.l,E=e.ag,T=e.ah,t=e.a$,O=e.a_,F=e.aM,n=e.cl,A=e.e,a=e.aL,S=e.aJ,R=e.bx,N=e.aa,i=e.a9,I=e.c9,r=e.i,L=e.bu,c=e.bV,o=e.cm},function(e){s=e.bl,M=e.b0,P=e.b2,u=e.B,C=e.bh,B=e.bf,D=e.bg,G=e.b4,U=e.be,l=e.b3,d=e.D,m=e.b5,g=e.b6,w=e.bc,f=e.C,p=e.bd,H=e.bi,X=e.bj,v=e.bm,b=e.b9,h=e.b7,W=e.b8,y=e.ba,V=e.bb,x=e.F,k=e.at,J=e.au,Y=e.a8,j=e.a7,Z=e.aC,z=e.G,K=e.s,Q=e.ai,q=e.ah,$=e.T,ee=e.aj,_e=e.am,Ee=e.a6,Te=e.b,te=e.j,Oe=e.A,Fe=e.aG}],execute:function(){e({H:O_,i:$_,q:q_,s:Q_});var ne={Device:M,Swapchain:P,Buffer:u,Texture:C,Sampler:B,Shader:D,InputAssembler:G,RenderPass:U,Framebuffer:l,DescriptorSet:d,DescriptorSetLayout:m,PipelineLayout:g,PipelineState:w,CommandBuffer:f,Queue:p,GeneralBarrier:H,TextureBarrier:X,BufferBarrier:v,RasterizerState:b,BlendState:h,BlendTarget:W,DepthStencilState:y,PipelineStateInfo:V};Object.assign(ne,s),_.gfx=ne;var Ae,ae,Se={GFXDevice:!0,GFXBuffer:!0,GFXTexture:!0,GFXSampler:!0,GFXShader:!0,GFXInputAssembler:!0,GFXRenderPass:!0,GFXFramebuffer:!0,GFXPipelineState:!0,GFXCommandBuffer:!0,GFXQueue:!0,GFXObjectType:!0,GFXObject:!1,GFXAttributeName:!0,GFXType:!0,GFXFormat:!0,GFXBufferUsageBit:!0,GFXMemoryUsageBit:!0,GFXBufferFlagBit:!0,GFXBufferAccessBit:"MemoryAccessBit",GFXPrimitiveMode:!0,GFXPolygonMode:!0,GFXShadeModel:!0,GFXCullMode:!0,GFXComparisonFunc:!0,GFXStencilOp:!0,GFXBlendOp:!0,GFXBlendFactor:!0,GFXColorMask:!0,GFXFilter:!0,GFXAddress:!0,GFXTextureType:!0,GFXTextureUsageBit:!0,GFXSampleCount:!0,GFXTextureFlagBit:!0,GFXShaderStageFlagBit:!0,GFXDescriptorType:!0,GFXCommandBufferType:!0,GFXLoadOp:!0,GFXStoreOp:!0,GFXPipelineBindPoint:!0,GFXDynamicStateFlagBit:!0,GFXStencilFace:!0,GFXQueueType:!0,GFXRect:!0,GFXViewport:!0,GFXColor:!0,GFXClearFlag:!0,GFXOffset:!0,GFXExtent:!0,GFXTextureSubres:"TextureSubresLayers",GFXTextureCopy:!0,GFXBufferTextureCopy:!0,GFXFormatType:!0,GFXFormatInfo:!0,GFXMemoryStatus:!0,GFXFormatInfos:!0,GFXFormatSize:!0,GFXFormatSurfaceSize:!0,GFXGetTypeSize:!0,getTypedArrayConstructor:!1};for(var Re in Se){var Ne=Se[Re];!0===Ne?Ne=Re.slice(3):!1===Ne&&(Ne=Re),E(_,"cc",[{name:Re,newName:Ne,target:_.gfx,targetName:"cc.gfx"}])}T(_,"cc",[{name:"GFX_MAX_VERTEX_ATTRIBUTES"},{name:"GFX_MAX_TEXTURE_UNITS"},{name:"GFX_MAX_ATTACHMENTS"},{name:"GFX_MAX_BUFFER_BINDINGS"},{name:"GFXTextureLayout"}]),T(x,"Feature",[{name:"COLOR_FLOAT",suggest:"Please use device.getFormatFeatures() instead, like: \nlet isSupported = device.getFormatFeatures(Format.R32F) & FormatFeatureBit.RENDER_TARGET;"},{name:"COLOR_HALF_FLOAT",suggest:"Please use device.getFormatFeatures() instead, like: \nlet isSupported = device.getFormatFeatures(Format.R16F) & FormatFeatureBit.RENDER_TARGET;"},{name:"TEXTURE_FLOAT",suggest:"Please use device.getFormatFeatures() instead, like: \nlet isSupported = (device.getFormatFeatures(Format.R32F) & (FormatFeatureBit.RENDER_TARGET | FormatFeatureBit.SAMPLED_TEXTURE)) === (FormatFeatureBit.RENDER_TARGET | FormatFeatureBit.SAMPLED_TEXTURE);"},{name:"TEXTURE_HALF_FLOAT",suggest:"Please use device.getFormatFeatures() instead, like: \nlet isSupported = (device.getFormatFeatures(Format.R16F) & (FormatFeatureBit.RENDER_TARGET | FormatFeatureBit.SAMPLED_TEXTURE)) === (FormatFeatureBit.RENDER_TARGET | FormatFeatureBit.SAMPLED_TEXTURE);"},{name:"TEXTURE_FLOAT_LINEAR",suggest:"Please use device.getFormatFeatures() instead, like: \nlet isSupported = device.getFormatFeatures(Format.R32F) & FormatFeatureBit.LINEAR_FILTER;"},{name:"TEXTURE_HALF_FLOAT_LINEAR",suggest:"Please use device.getFormatFeatures() instead, like: \nlet isSupported = device.getFormatFeatures(Format.R16F) & FormatFeatureBit.LINEAR_FILTER;"},{name:"FORMAT_R11G11B10F",suggest:"Please use device.getFormatFeatures() instead, like: \nlet isSupported = device.getFormatFeatures(Format.R11G11B10F) !== FormatFeatureBit.NONE;"},{name:"FORMAT_SRGB",suggest:"Please use device.getFormatFeatures() instead, like: \nlet isSupported = device.getFormatFeatures(Format.SRGB8) !== FormatFeatureBit.NONE;"},{name:"FORMAT_ETC1",suggest:"Please use device.getFormatFeatures() instead, like: \nlet isSupported = device.getFormatFeatures(Format.ETC_RGB8) !== FormatFeatureBit.NONE;"},{name:"FORMAT_ETC2",suggest:"Please use device.getFormatFeatures() instead, like: \nlet isSupported = device.getFormatFeatures(Format.ETC2_RGB8) !== FormatFeatureBit.NONE;"},{name:"FORMAT_DXT",suggest:"Please use device.getFormatFeatures() instead, like: \nlet isSupported = device.getFormatFeatures(Format.BC1) !== FormatFeatureBit.NONE;"},{name:"FORMAT_PVRTC",suggest:"Please use device.getFormatFeatures() instead, like: \nlet isSupported = device.getFormatFeatures(Format.PVRTC_RGB2) !== FormatFeatureBit.NONE;"},{name:"FORMAT_ASTC",suggest:"Please use device.getFormatFeatures() instead, like: \nlet isSupported = device.getFormatFeatures(Format.ASTC_RGBA_4x4) !== FormatFeatureBit.NONE;"},{name:"FORMAT_RGB8",suggest:"Please use device.getFormatFeatures() instead, like: \nlet isSupported = device.getFormatFeatures(Format.RGB8) !== FormatFeatureBit.NONE;"}]),T(k.prototype,"ColorAttachment",[{name:"beginAccesses",suggest:"Please assign to ColorAttachment.barrier instead"},{name:"endAccesses",suggest:"Please assign to ColorAttachment.barrier instead"}]),T(J.prototype,"DepthStencilAttachment",[{name:"beginAccesses",suggest:"Please assign to DepthStencilAttachment.barrier instead"},{name:"endAccesses",suggest:"Please assign to DepthStencilAttachment.barrier instead"}]),E(M.prototype,"Device",[{name:"getGlobalBarrier",newName:"getGeneralBarrier"}]),e("L",Ae),function(e){e[e.AUTO=0]="AUTO",e[e.CANVAS=1]="CANVAS",e[e.WEBGL=2]="WEBGL",e[e.HEADLESS=3]="HEADLESS"}(Ae||e("L",Ae={})),e("R",ae),function(e){e[e.UNKNOWN=-1]="UNKNOWN",e[e.CANVAS=0]="CANVAS",e[e.WEBGL=1]="WEBGL",e[e.OPENGL=2]="OPENGL",e[e.HEADLESS=3]="HEADLESS"}(ae||e("R",ae={}));var ie=e("D",function(){function e(){this.initialized=!1,this._gfxDevice=void 0,this._canvas=null,this._swapchain=void 0,this._renderType=ae.UNKNOWN}var E=e.prototype;return E.init=function(e,E){if(!this.initialized){var T=t.querySettings(O.Category.RENDERING,"renderMode");if(this._canvas=e,this._renderType=this._determineRenderType(T),this._renderType===ae.WEBGL){var a=new Y(E),S=!!globalThis.WebGL2RenderingContext;globalThis.navigator.userAgent.toLowerCase(),F.browserType===n.UC&&(S=!1);var R=[];S&&_.WebGL2Device&&R.push(_.WebGL2Device),_.WebGLDevice&&R.push(_.WebGLDevice),_.EmptyDevice&&R.push(_.EmptyDevice),M.canvas=e;for(var N=0;N<R.length&&(this._gfxDevice=new R[N],!this._gfxDevice.initialize(a));N++);this._initSwapchain()}else this._renderType===ae.HEADLESS&&_.EmptyDevice&&(this._gfxDevice=new _.EmptyDevice,this._gfxDevice.initialize(new Y(E)),this._initSwapchain());if(!this._gfxDevice)return A("can not support canvas rendering in 3D"),void(this._renderType=ae.UNKNOWN);this._canvas&&(this._canvas.oncontextmenu=function(){return!1})}},E._initSwapchain=function(){var e=new j(1,this._canvas),_=a.windowSize;e.width=_.width,e.height=_.height,this._swapchain=this._gfxDevice.createSwapchain(e)},E._determineRenderType=function(e){("number"!=typeof e||e>ae.HEADLESS||e<Ae.AUTO)&&(e=Ae.AUTO);var _=ae.CANVAS,E=!1;if(e===Ae.CANVAS?(_=ae.CANVAS,E=!0):e===Ae.AUTO||e===Ae.WEBGL?(_=ae.WEBGL,E=!0):e===Ae.HEADLESS&&(_=ae.HEADLESS,E=!0),!E)throw new Error(S(3820,e));return _},R(e,[{key:"gfxDevice",get:function(){return this._gfxDevice}},{key:"swapchain",get:function(){return this._swapchain}}]),e}()),Ie=(e("d",new ie),{NONE:0,IGNORE_RAYCAST:1<<20,GIZMOS:1<<21,EDITOR:1<<22,UI_3D:1<<23,SCENE_GIZMO:1<<24,UI_2D:1<<25,PROFILER:1<<28,DEFAULT:1<<30,ALL:4294967295}),re=e("b",function(){function e(){}return e.init=function(){var _=t.querySettings(O.Category.ENGINE,"customLayers");if(_)for(var E=0;E<_.length;E++){var T=_[E];e.addLayer(T.name,T.bit)}},e.makeMaskInclude=function(e){for(var _,E=0,T=r(e);!(_=T()).done;)E|=_.value;return E},e.makeMaskExclude=function(_){return~e.makeMaskInclude(_)},e.addLayer=function(_,E){if(void 0!==E)if(E>19||E<0)console.warn("maximum layers reached.");else{var T=1<<E;L(!e.Enum[_],S(2104,_)),e.Enum[_]=T,c(e.Enum,String(T),_),e.BitMask[_]=T,c(e.BitMask,String(T),_),i.update(e.BitMask),N.update(e.Enum)}else console.warn("bitNum can't be undefined")},e.deleteLayer=function(_){if(_>19||_<0)console.warn("do not change buildin layers.");else{var E=1<<_;delete e.Enum[e.Enum[E]],delete e.Enum[E],delete e.BitMask[e.BitMask[E]],delete e.BitMask[E],i.update(e.BitMask),N.update(e.Enum)}},e.nameToLayer=function(_){return void 0===_?(console.warn("name can't be undefined"),-1):o(e.Enum[_])},e.layerToName=function(_){return _>31||_<0?(console.warn("Unable to access unknown layer."),""):e.Enum[1<<_]},e}());re.Enum=N(Ie),re.BitMask=i(I({},Ie)),_.Layers=re;var Le,ce,oe=e("G","MainFlow"),se=e("B","ForwardFlow"),Me=e("E","ShadowFlow");e("K",Le),function(e){e[e.DEFAULT=100]="DEFAULT",e[e.UI=200]="UI"}(Le||e("K",Le={})),_.RenderPassStage=Le,e("c",ce),function(e){e[e.MIN=0]="MIN",e[e.MAX=255]="MAX",e[e.DEFAULT=128]="DEFAULT"}(ce||e("c",ce={}));var Pe,ue=e("t",{bindings:[],layouts:{}}),Ce=e("J",{bindings:[],layouts:{}});e("r",Pe),function(e){e[e.UBO_GLOBAL=0]="UBO_GLOBAL",e[e.UBO_CAMERA=1]="UBO_CAMERA",e[e.UBO_SHADOW=2]="UBO_SHADOW",e[e.UBO_CSM=3]="UBO_CSM",e[e.SAMPLER_SHADOWMAP=4]="SAMPLER_SHADOWMAP",e[e.SAMPLER_ENVIRONMENT=5]="SAMPLER_ENVIRONMENT",e[e.SAMPLER_SPOT_SHADOW_MAP=6]="SAMPLER_SPOT_SHADOW_MAP",e[e.SAMPLER_DIFFUSEMAP=7]="SAMPLER_DIFFUSEMAP",e[e.COUNT=8]="COUNT"}(Pe||e("r",Pe={}));var Be,De=Pe.SAMPLER_SHADOWMAP,Ge=Pe.COUNT-De;e("a0",Be),function(e){e[e.UBO_LOCAL=0]="UBO_LOCAL",e[e.UBO_FORWARD_LIGHTS=1]="UBO_FORWARD_LIGHTS",e[e.UBO_SKINNING_ANIMATION=2]="UBO_SKINNING_ANIMATION",e[e.UBO_SKINNING_TEXTURE=3]="UBO_SKINNING_TEXTURE",e[e.UBO_MORPH=4]="UBO_MORPH",e[e.UBO_UI_LOCAL=5]="UBO_UI_LOCAL",e[e.UBO_SH=6]="UBO_SH",e[e.SAMPLER_JOINTS=7]="SAMPLER_JOINTS",e[e.SAMPLER_MORPH_POSITION=8]="SAMPLER_MORPH_POSITION",e[e.SAMPLER_MORPH_NORMAL=9]="SAMPLER_MORPH_NORMAL",e[e.SAMPLER_MORPH_TANGENT=10]="SAMPLER_MORPH_TANGENT",e[e.SAMPLER_LIGHTMAP=11]="SAMPLER_LIGHTMAP",e[e.SAMPLER_SPRITE=12]="SAMPLER_SPRITE",e[e.SAMPLER_REFLECTION=13]="SAMPLER_REFLECTION",e[e.STORAGE_REFLECTION=14]="STORAGE_REFLECTION",e[e.SAMPLER_REFLECTION_PROBE_CUBE=15]="SAMPLER_REFLECTION_PROBE_CUBE",e[e.SAMPLER_REFLECTION_PROBE_PLANAR=16]="SAMPLER_REFLECTION_PROBE_PLANAR",e[e.SAMPLER_REFLECTION_PROBE_DATA_MAP=17]="SAMPLER_REFLECTION_PROBE_DATA_MAP",e[e.SAMPLER_REFLECTION_PROBE_BLEND_CUBE=18]="SAMPLER_REFLECTION_PROBE_BLEND_CUBE",e[e.COUNT=19]="COUNT"}(Be||e("a0",Be={}));var Ue,le=Be.SAMPLER_JOINTS,de=Be.STORAGE_REFLECTION-le,me=Be.COUNT-le-de;e("S",Ue),function(e){e[e.GLOBAL=0]="GLOBAL",e[e.MATERIAL=1]="MATERIAL",e[e.LOCAL=2]="LOCAL",e[e.COUNT=3]="COUNT"}(Ue||e("S",Ue={}));var ge=e("O",new Ee([De,0,le,0],[Ge,0,de,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,me,0],[0,0,0,0],[0,2,1,3])),we=e("u",(function(){}));we.TIME_OFFSET=0,we.SCREEN_SIZE_OFFSET=we.TIME_OFFSET+4,we.NATIVE_SIZE_OFFSET=we.SCREEN_SIZE_OFFSET+4,we.PROBE_INFO_OFFSET=we.NATIVE_SIZE_OFFSET+4,we.DEBUG_VIEW_MODE_OFFSET=we.PROBE_INFO_OFFSET+4,we.COUNT=we.DEBUG_VIEW_MODE_OFFSET+4,we.SIZE=4*we.COUNT,we.NAME="CCGlobal",we.BINDING=Pe.UBO_GLOBAL,we.DESCRIPTOR=new Z(we.BINDING,z.UNIFORM_BUFFER,1,K.ALL),we.LAYOUT=new Q(Ue.GLOBAL,we.BINDING,we.NAME,[new q("cc_time",$.FLOAT4,1),new q("cc_screenSize",$.FLOAT4,1),new q("cc_nativeSize",$.FLOAT4,1),new q("cc_probeInfo",$.FLOAT4,1),new q("cc_debug_view_mode",$.FLOAT4,1)],1),ue.layouts[we.NAME]=we.LAYOUT,ue.bindings[we.BINDING]=we.DESCRIPTOR;var fe=e("v",(function(){}));fe.MAT_VIEW_OFFSET=0,fe.MAT_VIEW_INV_OFFSET=fe.MAT_VIEW_OFFSET+16,fe.MAT_PROJ_OFFSET=fe.MAT_VIEW_INV_OFFSET+16,fe.MAT_PROJ_INV_OFFSET=fe.MAT_PROJ_OFFSET+16,fe.MAT_VIEW_PROJ_OFFSET=fe.MAT_PROJ_INV_OFFSET+16,fe.MAT_VIEW_PROJ_INV_OFFSET=fe.MAT_VIEW_PROJ_OFFSET+16,fe.CAMERA_POS_OFFSET=fe.MAT_VIEW_PROJ_INV_OFFSET+16,fe.SURFACE_TRANSFORM_OFFSET=fe.CAMERA_POS_OFFSET+4,fe.SCREEN_SCALE_OFFSET=fe.SURFACE_TRANSFORM_OFFSET+4,fe.EXPOSURE_OFFSET=fe.SCREEN_SCALE_OFFSET+4,fe.MAIN_LIT_DIR_OFFSET=fe.EXPOSURE_OFFSET+4,fe.MAIN_LIT_COLOR_OFFSET=fe.MAIN_LIT_DIR_OFFSET+4,fe.AMBIENT_SKY_OFFSET=fe.MAIN_LIT_COLOR_OFFSET+4,fe.AMBIENT_GROUND_OFFSET=fe.AMBIENT_SKY_OFFSET+4,fe.GLOBAL_FOG_COLOR_OFFSET=fe.AMBIENT_GROUND_OFFSET+4,fe.GLOBAL_FOG_BASE_OFFSET=fe.GLOBAL_FOG_COLOR_OFFSET+4,fe.GLOBAL_FOG_ADD_OFFSET=fe.GLOBAL_FOG_BASE_OFFSET+4,fe.NEAR_FAR_OFFSET=fe.GLOBAL_FOG_ADD_OFFSET+4,fe.VIEW_PORT_OFFSET=fe.NEAR_FAR_OFFSET+4,fe.COUNT=fe.VIEW_PORT_OFFSET+4,fe.SIZE=4*fe.COUNT,fe.NAME="CCCamera",fe.BINDING=Pe.UBO_CAMERA,fe.DESCRIPTOR=new Z(fe.BINDING,z.UNIFORM_BUFFER,1,K.ALL),fe.LAYOUT=new Q(Ue.GLOBAL,fe.BINDING,fe.NAME,[new q("cc_matView",$.MAT4,1),new q("cc_matViewInv",$.MAT4,1),new q("cc_matProj",$.MAT4,1),new q("cc_matProjInv",$.MAT4,1),new q("cc_matViewProj",$.MAT4,1),new q("cc_matViewProjInv",$.MAT4,1),new q("cc_cameraPos",$.FLOAT4,1),new q("cc_surfaceTransform",$.FLOAT4,1),new q("cc_screenScale",$.FLOAT4,1),new q("cc_exposure",$.FLOAT4,1),new q("cc_mainLitDir",$.FLOAT4,1),new q("cc_mainLitColor",$.FLOAT4,1),new q("cc_ambientSky",$.FLOAT4,1),new q("cc_ambientGround",$.FLOAT4,1),new q("cc_fogColor",$.FLOAT4,1),new q("cc_fogBase",$.FLOAT4,1),new q("cc_fogAdd",$.FLOAT4,1),new q("cc_nearFar",$.FLOAT4,1),new q("cc_viewPort",$.FLOAT4,1)],1),ue.layouts[fe.NAME]=fe.LAYOUT,ue.bindings[fe.BINDING]=fe.DESCRIPTOR;var pe=e("p",(function(){}));pe.MAT_LIGHT_VIEW_OFFSET=0,pe.MAT_LIGHT_VIEW_PROJ_OFFSET=pe.MAT_LIGHT_VIEW_OFFSET+16,pe.SHADOW_INV_PROJ_DEPTH_INFO_OFFSET=pe.MAT_LIGHT_VIEW_PROJ_OFFSET+16,pe.SHADOW_PROJ_DEPTH_INFO_OFFSET=pe.SHADOW_INV_PROJ_DEPTH_INFO_OFFSET+4,pe.SHADOW_PROJ_INFO_OFFSET=pe.SHADOW_PROJ_DEPTH_INFO_OFFSET+4,pe.SHADOW_NEAR_FAR_LINEAR_SATURATION_INFO_OFFSET=pe.SHADOW_PROJ_INFO_OFFSET+4,pe.SHADOW_WIDTH_HEIGHT_PCF_BIAS_INFO_OFFSET=pe.SHADOW_NEAR_FAR_LINEAR_SATURATION_INFO_OFFSET+4,pe.SHADOW_LIGHT_PACKING_NBIAS_NULL_INFO_OFFSET=pe.SHADOW_WIDTH_HEIGHT_PCF_BIAS_INFO_OFFSET+4,pe.SHADOW_COLOR_OFFSET=pe.SHADOW_LIGHT_PACKING_NBIAS_NULL_INFO_OFFSET+4,pe.PLANAR_NORMAL_DISTANCE_INFO_OFFSET=pe.SHADOW_COLOR_OFFSET+4,pe.COUNT=pe.PLANAR_NORMAL_DISTANCE_INFO_OFFSET+4,pe.SIZE=4*pe.COUNT,pe.NAME="CCShadow",pe.BINDING=Pe.UBO_SHADOW,pe.DESCRIPTOR=new Z(pe.BINDING,z.UNIFORM_BUFFER,1,K.ALL),pe.LAYOUT=new Q(Ue.GLOBAL,pe.BINDING,pe.NAME,[new q("cc_matLightView",$.MAT4,1),new q("cc_matLightViewProj",$.MAT4,1),new q("cc_shadowInvProjDepthInfo",$.FLOAT4,1),new q("cc_shadowProjDepthInfo",$.FLOAT4,1),new q("cc_shadowProjInfo",$.FLOAT4,1),new q("cc_shadowNFLSInfo",$.FLOAT4,1),new q("cc_shadowWHPBInfo",$.FLOAT4,1),new q("cc_shadowLPNNInfo",$.FLOAT4,1),new q("cc_shadowColor",$.FLOAT4,1),new q("cc_planarNDInfo",$.FLOAT4,1)],1),ue.layouts[pe.NAME]=pe.LAYOUT,ue.bindings[pe.BINDING]=pe.DESCRIPTOR;var He=e("w",(function(){}));He.CSM_LEVEL_COUNT=4,He.CSM_VIEW_DIR_0_OFFSET=0,He.CSM_VIEW_DIR_1_OFFSET=He.CSM_VIEW_DIR_0_OFFSET+4*He.CSM_LEVEL_COUNT,He.CSM_VIEW_DIR_2_OFFSET=He.CSM_VIEW_DIR_1_OFFSET+4*He.CSM_LEVEL_COUNT,He.CSM_ATLAS_OFFSET=He.CSM_VIEW_DIR_2_OFFSET+4*He.CSM_LEVEL_COUNT,He.MAT_CSM_VIEW_PROJ_OFFSET=He.CSM_ATLAS_OFFSET+4*He.CSM_LEVEL_COUNT,He.CSM_PROJ_DEPTH_INFO_OFFSET=He.MAT_CSM_VIEW_PROJ_OFFSET+16*He.CSM_LEVEL_COUNT,He.CSM_PROJ_INFO_OFFSET=He.CSM_PROJ_DEPTH_INFO_OFFSET+4*He.CSM_LEVEL_COUNT,He.CSM_SPLITS_INFO_OFFSET=He.CSM_PROJ_INFO_OFFSET+4*He.CSM_LEVEL_COUNT,He.COUNT=He.CSM_SPLITS_INFO_OFFSET+4,He.SIZE=4*He.COUNT,He.NAME="CCCSM",He.BINDING=Pe.UBO_CSM,He.DESCRIPTOR=new Z(He.BINDING,z.UNIFORM_BUFFER,1,K.FRAGMENT),He.LAYOUT=new Q(Ue.GLOBAL,He.BINDING,He.NAME,[new q("cc_csmViewDir0",$.FLOAT4,He.CSM_LEVEL_COUNT),new q("cc_csmViewDir1",$.FLOAT4,He.CSM_LEVEL_COUNT),new q("cc_csmViewDir2",$.FLOAT4,He.CSM_LEVEL_COUNT),new q("cc_csmAtlas",$.FLOAT4,He.CSM_LEVEL_COUNT),new q("cc_matCSMViewProj",$.MAT4,He.CSM_LEVEL_COUNT),new q("cc_csmProjDepthInfo",$.FLOAT4,He.CSM_LEVEL_COUNT),new q("cc_csmProjInfo",$.FLOAT4,He.CSM_LEVEL_COUNT),new q("cc_csmSplitsInfo",$.FLOAT4,1)],1),ue.layouts[He.NAME]=He.LAYOUT,ue.bindings[He.BINDING]=He.DESCRIPTOR;var Xe=e("x",Pe.SAMPLER_SHADOWMAP),ve=new Z(Xe,z.SAMPLER_TEXTURE,1,K.FRAGMENT),be=new ee(Ue.GLOBAL,Xe,"cc_shadowMap",$.SAMPLER2D,1);ue.layouts.cc_shadowMap=be,ue.bindings[Xe]=ve;var he=e("M",Pe.SAMPLER_ENVIRONMENT),We=new Z(he,z.SAMPLER_TEXTURE,1,K.FRAGMENT),ye=new ee(Ue.GLOBAL,he,"cc_environment",$.SAMPLER_CUBE,1);ue.layouts.cc_environment=ye,ue.bindings[he]=We;var Ve=e("N",Pe.SAMPLER_DIFFUSEMAP),xe=new Z(Ve,z.SAMPLER_TEXTURE,1,K.FRAGMENT),ke=new ee(Ue.GLOBAL,Ve,"cc_diffuseMap",$.SAMPLER_CUBE,1);ue.layouts.cc_diffuseMap=ke,ue.bindings[Ve]=xe;var Je=e("y",Pe.SAMPLER_SPOT_SHADOW_MAP),Ye=new Z(Je,z.SAMPLER_TEXTURE,1,K.FRAGMENT),je=new ee(Ue.GLOBAL,Je,"cc_spotShadowMap",$.SAMPLER2D,1);ue.layouts.cc_spotShadowMap=je,ue.bindings[Je]=Ye;var Ze=e("h",(function(){}));Ze.MAT_WORLD_OFFSET=0,Ze.MAT_WORLD_IT_OFFSET=Ze.MAT_WORLD_OFFSET+16,Ze.LIGHTINGMAP_UVPARAM=Ze.MAT_WORLD_IT_OFFSET+16,Ze.LOCAL_SHADOW_BIAS=Ze.LIGHTINGMAP_UVPARAM+4,Ze.REFLECTION_PROBE_DATA1=Ze.LOCAL_SHADOW_BIAS+4,Ze.REFLECTION_PROBE_DATA2=Ze.REFLECTION_PROBE_DATA1+4,Ze.REFLECTION_PROBE_BLEND_DATA1=Ze.REFLECTION_PROBE_DATA2+4,Ze.REFLECTION_PROBE_BLEND_DATA2=Ze.REFLECTION_PROBE_BLEND_DATA1+4,Ze.COUNT=Ze.REFLECTION_PROBE_BLEND_DATA2+4,Ze.SIZE=4*Ze.COUNT,Ze.NAME="CCLocal",Ze.BINDING=Be.UBO_LOCAL,Ze.DESCRIPTOR=new Z(Ze.BINDING,z.UNIFORM_BUFFER,1,K.VERTEX|K.COMPUTE),Ze.LAYOUT=new Q(Ue.LOCAL,Ze.BINDING,Ze.NAME,[new q("cc_matWorld",$.MAT4,1),new q("cc_matWorldIT",$.MAT4,1),new q("cc_lightingMapUVParam",$.FLOAT4,1),new q("cc_localShadowBias",$.FLOAT4,1),new q("cc_reflectionProbeData1",$.FLOAT4,1),new q("cc_reflectionProbeData2",$.FLOAT4,1),new q("cc_reflectionProbeBlendData1",$.FLOAT4,1),new q("cc_reflectionProbeBlendData2",$.FLOAT4,1)],1),Ce.layouts[Ze.NAME]=Ze.LAYOUT,Ce.bindings[Ze.BINDING]=Ze.DESCRIPTOR;var ze=e("o",(function(){}));ze.WORLD_BOUND_CENTER=0,ze.WORLD_BOUND_HALF_EXTENTS=ze.WORLD_BOUND_CENTER+4,ze.COUNT=ze.WORLD_BOUND_HALF_EXTENTS+4,ze.SIZE=4*ze.COUNT,ze.NAME="CCWorldBound",ze.BINDING=Be.UBO_LOCAL,ze.DESCRIPTOR=new Z(ze.BINDING,z.UNIFORM_BUFFER,1,K.VERTEX|K.COMPUTE),ze.LAYOUT=new Q(Ue.LOCAL,ze.BINDING,ze.NAME,[new q("cc_worldBoundCenter",$.FLOAT4,1),new q("cc_worldBoundHalfExtents",$.FLOAT4,1)],1),Ce.layouts[ze.NAME]=ze.LAYOUT,Ce.bindings[ze.BINDING]=ze.DESCRIPTOR;var Ke=e("I","a_matWorld0"),Qe=e("f","a_sh_linear_const_r"),qe=function(){};qe.BATCHING_COUNT=10,qe.MAT_WORLDS_OFFSET=0,qe.SIZE=4*(qe.COUNT=16*qe.BATCHING_COUNT),qe.NAME="CCLocalBatched",qe.BINDING=Be.UBO_LOCAL,qe.DESCRIPTOR=new Z(qe.BINDING,z.UNIFORM_BUFFER,1,K.VERTEX|K.COMPUTE),qe.LAYOUT=new Q(Ue.LOCAL,qe.BINDING,qe.NAME,[new q("cc_matWorlds",$.MAT4,qe.BATCHING_COUNT)],1),Ce.layouts[qe.NAME]=qe.LAYOUT,Ce.bindings[qe.BINDING]=qe.DESCRIPTOR;var $e=e("A",(function(){}));$e.LIGHTS_PER_PASS=1,$e.LIGHT_POS_OFFSET=0,$e.LIGHT_COLOR_OFFSET=$e.LIGHT_POS_OFFSET+4*$e.LIGHTS_PER_PASS,$e.LIGHT_SIZE_RANGE_ANGLE_OFFSET=$e.LIGHT_COLOR_OFFSET+4*$e.LIGHTS_PER_PASS,$e.LIGHT_DIR_OFFSET=$e.LIGHT_SIZE_RANGE_ANGLE_OFFSET+4*$e.LIGHTS_PER_PASS,$e.LIGHT_BOUNDING_SIZE_VS_OFFSET=$e.LIGHT_DIR_OFFSET+4*$e.LIGHTS_PER_PASS,$e.COUNT=$e.LIGHT_BOUNDING_SIZE_VS_OFFSET+4*$e.LIGHTS_PER_PASS,$e.SIZE=4*$e.COUNT,$e.NAME="CCForwardLight",$e.BINDING=Be.UBO_FORWARD_LIGHTS,$e.DESCRIPTOR=new Z($e.BINDING,z.DYNAMIC_UNIFORM_BUFFER,1,K.FRAGMENT),$e.LAYOUT=new Q(Ue.LOCAL,$e.BINDING,$e.NAME,[new q("cc_lightPos",$.FLOAT4,$e.LIGHTS_PER_PASS),new q("cc_lightColor",$.FLOAT4,$e.LIGHTS_PER_PASS),new q("cc_lightSizeRangeAngle",$.FLOAT4,$e.LIGHTS_PER_PASS),new q("cc_lightDir",$.FLOAT4,$e.LIGHTS_PER_PASS),new q("cc_lightBoundingSizeVS",$.FLOAT4,$e.LIGHTS_PER_PASS)],1),Ce.layouts[$e.NAME]=$e.LAYOUT,Ce.bindings[$e.BINDING]=$e.DESCRIPTOR;var e_=e("F",(function(){}));e_.LIGHTS_PER_PASS=10;var __=e("Z",(function(){}));__.JOINTS_TEXTURE_INFO_OFFSET=0,__.COUNT=__.JOINTS_TEXTURE_INFO_OFFSET+4,__.SIZE=4*__.COUNT,__.NAME="CCSkinningTexture",__.BINDING=Be.UBO_SKINNING_TEXTURE,__.DESCRIPTOR=new Z(__.BINDING,z.UNIFORM_BUFFER,1,K.VERTEX),__.LAYOUT=new Q(Ue.LOCAL,__.BINDING,__.NAME,[new q("cc_jointTextureInfo",$.FLOAT4,1)],1),Ce.layouts[__.NAME]=__.LAYOUT,Ce.bindings[__.BINDING]=__.DESCRIPTOR;var E_=e("X",(function(){}));E_.JOINTS_ANIM_INFO_OFFSET=0,E_.COUNT=E_.JOINTS_ANIM_INFO_OFFSET+4,E_.SIZE=4*E_.COUNT,E_.NAME="CCSkinningAnimation",E_.BINDING=Be.UBO_SKINNING_ANIMATION,E_.DESCRIPTOR=new Z(E_.BINDING,z.UNIFORM_BUFFER,1,K.VERTEX),E_.LAYOUT=new Q(Ue.LOCAL,E_.BINDING,E_.NAME,[new q("cc_jointAnimInfo",$.FLOAT4,1)],1),Ce.layouts[E_.NAME]=E_.LAYOUT,Ce.bindings[E_.BINDING]=E_.DESCRIPTOR;var T_=e("$","a_jointAnimInfo"),t_=e("z",function(){function e(){}return e.initLayout=function(_){e._jointUniformCapacity=_,e._count=12*_,e._size=4*e._count,e.LAYOUT.members[0].count=3*_},R(e,null,[{key:"JOINT_UNIFORM_CAPACITY",get:function(){return e._jointUniformCapacity}},{key:"COUNT",get:function(){return e._count}},{key:"SIZE",get:function(){return e._size}}]),e}());function O_(e){t_.initLayout(e),Ce.layouts[t_.NAME]=t_.LAYOUT,Ce.bindings[t_.BINDING]=t_.DESCRIPTOR}t_._jointUniformCapacity=0,t_._count=0,t_._size=0,t_.NAME="CCSkinning",t_.BINDING=Be.UBO_SKINNING_TEXTURE,t_.DESCRIPTOR=new Z(t_.BINDING,z.UNIFORM_BUFFER,1,K.VERTEX),t_.LAYOUT=new Q(Ue.LOCAL,t_.BINDING,t_.NAME,[new q("cc_joints",$.FLOAT4,1)],1);var F_=e("Q",(function(){}));F_.MAX_MORPH_TARGET_COUNT=60,F_.OFFSET_OF_WEIGHTS=0,F_.OFFSET_OF_DISPLACEMENT_TEXTURE_WIDTH=4*F_.MAX_MORPH_TARGET_COUNT,F_.OFFSET_OF_DISPLACEMENT_TEXTURE_HEIGHT=F_.OFFSET_OF_DISPLACEMENT_TEXTURE_WIDTH+4,F_.OFFSET_OF_VERTICES_COUNT=F_.OFFSET_OF_DISPLACEMENT_TEXTURE_HEIGHT+4,F_.COUNT_BASE_4_BYTES=4*Math.ceil(F_.MAX_MORPH_TARGET_COUNT/4)+4,F_.SIZE=4*F_.COUNT_BASE_4_BYTES,F_.NAME="CCMorph",F_.BINDING=Be.UBO_MORPH,F_.DESCRIPTOR=new Z(F_.BINDING,z.UNIFORM_BUFFER,1,K.VERTEX),F_.LAYOUT=new Q(Ue.LOCAL,F_.BINDING,F_.NAME,[new q("cc_displacementWeights",$.FLOAT4,F_.MAX_MORPH_TARGET_COUNT/4),new q("cc_displacementTextureInfo",$.FLOAT4,1)],1),Ce.layouts[F_.NAME]=F_.LAYOUT,Ce.bindings[F_.BINDING]=F_.DESCRIPTOR;var n_=function(){};n_.NAME="CCUILocal",n_.BINDING=Be.UBO_UI_LOCAL,n_.DESCRIPTOR=new Z(n_.BINDING,z.DYNAMIC_UNIFORM_BUFFER,1,K.VERTEX),n_.LAYOUT=new Q(Ue.LOCAL,n_.BINDING,n_.NAME,[new q("cc_local_data",$.FLOAT4,1)],1),Ce.layouts[n_.NAME]=n_.LAYOUT,Ce.bindings[n_.BINDING]=n_.DESCRIPTOR;var A_=e("g",(function(){}));A_.SH_LINEAR_CONST_R_OFFSET=0,A_.SH_LINEAR_CONST_G_OFFSET=A_.SH_LINEAR_CONST_R_OFFSET+4,A_.SH_LINEAR_CONST_B_OFFSET=A_.SH_LINEAR_CONST_G_OFFSET+4,A_.SH_QUADRATIC_R_OFFSET=A_.SH_LINEAR_CONST_B_OFFSET+4,A_.SH_QUADRATIC_G_OFFSET=A_.SH_QUADRATIC_R_OFFSET+4,A_.SH_QUADRATIC_B_OFFSET=A_.SH_QUADRATIC_G_OFFSET+4,A_.SH_QUADRATIC_A_OFFSET=A_.SH_QUADRATIC_B_OFFSET+4,A_.COUNT=A_.SH_QUADRATIC_A_OFFSET+4,A_.SIZE=4*A_.COUNT,A_.NAME="CCSH",A_.BINDING=Be.UBO_SH,A_.DESCRIPTOR=new Z(A_.BINDING,z.UNIFORM_BUFFER,1,K.FRAGMENT),A_.LAYOUT=new Q(Ue.LOCAL,A_.BINDING,A_.NAME,[new q("cc_sh_linear_const_r",$.FLOAT4,1),new q("cc_sh_linear_const_g",$.FLOAT4,1),new q("cc_sh_linear_const_b",$.FLOAT4,1),new q("cc_sh_quadratic_r",$.FLOAT4,1),new q("cc_sh_quadratic_g",$.FLOAT4,1),new q("cc_sh_quadratic_b",$.FLOAT4,1),new q("cc_sh_quadratic_a",$.FLOAT4,1)],1),Ce.layouts[A_.NAME]=A_.LAYOUT,Ce.bindings[A_.BINDING]=A_.DESCRIPTOR;var a_=e("_",Be.SAMPLER_JOINTS),S_=new Z(a_,z.SAMPLER_TEXTURE,1,K.VERTEX),R_=new ee(Ue.LOCAL,a_,"cc_jointTexture",$.SAMPLER2D,1);Ce.layouts.cc_jointTexture=R_,Ce.bindings[a_]=S_;var N_=e("Y",Be.SAMPLER_JOINTS),i_=new Z(N_,z.SAMPLER_TEXTURE,1,K.VERTEX),I_=new ee(Ue.LOCAL,N_,"cc_realtimeJoint",$.SAMPLER2D,1);Ce.layouts.cc_realtimeJoint=I_,Ce.bindings[N_]=i_;var r_=e("W",Be.SAMPLER_MORPH_POSITION),L_=new Z(r_,z.SAMPLER_TEXTURE,1,K.VERTEX),c_=new ee(Ue.LOCAL,r_,"cc_PositionDisplacements",$.SAMPLER2D,1);Ce.layouts.cc_PositionDisplacements=c_,Ce.bindings[r_]=L_;var o_=e("V",Be.SAMPLER_MORPH_NORMAL),s_=new Z(o_,z.SAMPLER_TEXTURE,1,K.VERTEX),M_=new ee(Ue.LOCAL,o_,"cc_NormalDisplacements",$.SAMPLER2D,1);Ce.layouts.cc_NormalDisplacements=M_,Ce.bindings[o_]=s_;var P_=e("T",Be.SAMPLER_MORPH_TANGENT),u_=new Z(P_,z.SAMPLER_TEXTURE,1,K.VERTEX),C_=new ee(Ue.LOCAL,P_,"cc_TangentDisplacements",$.SAMPLER2D,1);Ce.layouts.cc_TangentDisplacements=C_,Ce.bindings[P_]=u_;var B_=e("j",Be.SAMPLER_LIGHTMAP),D_=new Z(B_,z.SAMPLER_TEXTURE,1,K.FRAGMENT),G_=new ee(Ue.LOCAL,B_,"cc_lightingMap",$.SAMPLER2D,1);Ce.layouts.cc_lightingMap=G_,Ce.bindings[B_]=D_;var U_=Be.SAMPLER_SPRITE,l_=new Z(U_,z.SAMPLER_TEXTURE,1,K.FRAGMENT),d_=new ee(Ue.LOCAL,U_,"cc_spriteTexture",$.SAMPLER2D,1);Ce.layouts.cc_spriteTexture=d_,Ce.bindings[U_]=l_;var m_=e("U",Be.SAMPLER_REFLECTION),g_=new Z(m_,z.SAMPLER_TEXTURE,1,K.FRAGMENT),w_=new ee(Ue.LOCAL,m_,"cc_reflectionTexture",$.SAMPLER2D,1);Ce.layouts.cc_reflectionTexture=w_,Ce.bindings[m_]=g_;var f_=e("e",Be.STORAGE_REFLECTION),p_=new Z(f_,z.STORAGE_IMAGE,1,K.COMPUTE),H_=new _e(Ue.LOCAL,f_,"cc_reflectionStorage",$.IMAGE2D,1);Ce.layouts.cc_reflectionStorage=H_,Ce.bindings[f_]=p_;var X_=e("k",Be.SAMPLER_REFLECTION_PROBE_CUBE),v_=new Z(X_,z.SAMPLER_TEXTURE,1,K.FRAGMENT),b_=new ee(Ue.LOCAL,X_,"cc_reflectionProbeCubemap",$.SAMPLER_CUBE,1);Ce.layouts.cc_reflectionProbeCubemap=b_,Ce.bindings[X_]=v_;var h_=e("m",Be.SAMPLER_REFLECTION_PROBE_PLANAR),W_=new Z(h_,z.SAMPLER_TEXTURE,1,K.FRAGMENT),y_=new ee(Ue.LOCAL,h_,"cc_reflectionProbePlanarMap",$.SAMPLER2D,1);Ce.layouts.cc_reflectionProbePlanarMap=y_,Ce.bindings[h_]=W_;var V_=e("n",Be.SAMPLER_REFLECTION_PROBE_DATA_MAP),x_=new Z(V_,z.SAMPLER_TEXTURE,1,K.FRAGMENT),k_=new ee(Ue.LOCAL,V_,"cc_reflectionProbeDataMap",$.SAMPLER2D,1);Ce.layouts.cc_reflectionProbeDataMap=k_,Ce.bindings[V_]=x_;var J_=e("l",Be.SAMPLER_REFLECTION_PROBE_BLEND_CUBE),Y_=new Z(J_,z.SAMPLER_TEXTURE,1,K.FRAGMENT),j_=new ee(Ue.LOCAL,J_,"cc_reflectionProbeBlendCubemap",$.SAMPLER_CUBE,1);Ce.layouts.cc_reflectionProbeBlendCubemap=j_,Ce.bindings[J_]=Y_;var Z_=e("C",re.makeMaskExclude([re.BitMask.UI_2D,re.BitMask.GIZMOS,re.BitMask.EDITOR,re.BitMask.SCENE_GIZMO,re.BitMask.PROFILER])),z_=re.makeMaskExclude([re.BitMask.UI_2D,re.BitMask.PROFILER]),K_=re.Enum.ALL;function Q_(e){return(e.getFormatFeatures(Te.R32F)&(te.RENDER_TARGET|te.SAMPLED_TEXTURE))==(te.RENDER_TARGET|te.SAMPLED_TEXTURE)&&!(e.gfxAPI===Oe.WEBGL)}function q_(e){return(e.getFormatFeatures(Te.RGBA16F)&(te.RENDER_TARGET|te.SAMPLED_TEXTURE))==(te.RENDER_TARGET|te.SAMPLED_TEXTURE)&&!(e.gfxAPI===Oe.WEBGL)}function $_(){return!(!_.rendering||!_.rendering.enableEffectImport)}e("a",Object.freeze({__proto__:null,PIPELINE_FLOW_MAIN:oe,PIPELINE_FLOW_FORWARD:se,PIPELINE_FLOW_SHADOW:Me,PIPELINE_FLOW_SMAA:"SMAAFlow",PIPELINE_FLOW_TONEMAP:"ToneMapFlow",get RenderPassStage(){return Le},get RenderPriority(){return ce},globalDescriptorSetLayout:ue,localDescriptorSetLayout:Ce,get PipelineGlobalBindings(){return Pe},get ModelLocalBindings(){return Be},get SetIndex(){return Ue},bindingMappingInfo:ge,UBOGlobal:we,UBOCamera:fe,UBOShadow:pe,UBOCSM:He,UNIFORM_SHADOWMAP_BINDING:Xe,UNIFORM_ENVIRONMENT_BINDING:he,UNIFORM_DIFFUSEMAP_BINDING:Ve,UNIFORM_SPOT_SHADOW_MAP_TEXTURE_BINDING:Je,UBOLocal:Ze,UBOWorldBound:ze,INST_MAT_WORLD:Ke,INST_SH:Qe,UBOLocalBatched:qe,UBOForwardLight:$e,UBODeferredLight:e_,JOINT_UNIFORM_CAPACITY:30,UBOSkinningTexture:__,UBOSkinningAnimation:E_,INST_JOINT_ANIM_INFO:T_,UBOSkinning:t_,localDescriptorSetLayout_ResizeMaxJoints:O_,UBOMorph:F_,UBOUILocal:n_,UBOSH:A_,UNIFORM_JOINT_TEXTURE_BINDING:a_,UNIFORM_REALTIME_JOINT_TEXTURE_BINDING:N_,UNIFORM_POSITION_MORPH_TEXTURE_BINDING:r_,UNIFORM_NORMAL_MORPH_TEXTURE_BINDING:o_,UNIFORM_TANGENT_MORPH_TEXTURE_BINDING:P_,UNIFORM_LIGHTMAP_TEXTURE_BINDING:B_,UNIFORM_SPRITE_TEXTURE_BINDING:U_,UNIFORM_REFLECTION_TEXTURE_BINDING:m_,UNIFORM_REFLECTION_STORAGE_BINDING:f_,UNIFORM_REFLECTION_PROBE_CUBEMAP_BINDING:X_,UNIFORM_REFLECTION_PROBE_TEXTURE_BINDING:h_,UNIFORM_REFLECTION_PROBE_DATA_MAP_BINDING:V_,UNIFORM_REFLECTION_PROBE_BLEND_CUBEMAP_BINDING:J_,CAMERA_DEFAULT_MASK:Z_,CAMERA_EDITOR_MASK:z_,MODEL_ALWAYS_MASK:K_,supportsR16HalfFloatTexture:function(e){return(e.getFormatFeatures(Te.R16F)&(te.RENDER_TARGET|te.SAMPLED_TEXTURE))==(te.RENDER_TARGET|te.SAMPLED_TEXTURE)},supportsR32FloatTexture:Q_,supportsRGBA16HalfFloatTexture:q_,supportsRGBA32FloatTexture:function(e){return(e.getFormatFeatures(Te.RGBA32F)&(te.RENDER_TARGET|te.SAMPLED_TEXTURE))==(te.RENDER_TARGET|te.SAMPLED_TEXTURE)&&!(e.gfxAPI===Oe.WEBGL)},isEnableEffect:$_})),e("P",function(){function e(){}return e.getOrCreatePipelineState=function(e,_,E,T,t){var O=_.hash^T.hash^t.attributesHash^E.typedID,F=this._PSOHashMap.get(O);if(!F){var n=_.pipelineLayout,A=new Fe(t.attributes),a=new V(E,n,T,A,_.rasterizerState,_.depthStencilState,_.blendState,_.primitive,_.dynamicStates);F=e.createPipelineState(a),this._PSOHashMap.set(O,F)}return F},e}())._PSOHashMap=new Map}}}));
