System.register(["./index-68ccac70.js","./deprecated-37e42d8f.js","./director-56fe9b8d.js","./node-event-40319828.js","./find-222dc7da.js","./pipeline-state-manager-8f16c5a7.js","./buffer-barrier-d1733967.js","./touch-685512cb.js"],(function(t){"use strict";var e,n,o,i,r,u,a,s,c,d,h,f,l,_,p,y,v,g,E,m,P,T,N;return{setters:[function(t){e=t.bx,n=t.aD,o=t.bJ,i=t.J,r=t.b$,u=t.K,a=t.l,s=t.bD,c=t.bA,d=t.bE,h=t.be,f=t.bg,l=t.bO,_=t.bF,p=t.ag,y=t.ai,v=t.cq},function(t){g=t.g,E=t.G},function(){},function(t){m=t.A,P=t.C},function(t){T=t.am,N=t.aq},function(){},function(){},function(){}],execute:function(){var I,A,S;!function(t){t.PLAYED="play",t.PAUSED="pause",t.STOPPED="stop",t.SEEKED="seeked",t.ENDED="ended",t.INTERRUPTION_BEGIN="interruptionBegin",t.INTERRUPTION_END="interruptionEnd",t.USER_GESTURE="on_gesture"}(I||(I={})),function(t){t[t.DOM_AUDIO=0]="DOM_AUDIO",t[t.WEB_AUDIO=1]="WEB_AUDIO",t[t.MINIGAME_AUDIO=2]="MINIGAME_AUDIO",t[t.NATIVE_AUDIO=3]="NATIVE_AUDIO",t[t.UNKNOWN_AUDIO=4]="UNKNOWN_AUDIO"}(A||(A={})),function(t){t[t.INIT=0]="INIT",t[t.PLAYING=1]="PLAYING",t[t.PAUSED=2]="PAUSED",t[t.STOPPED=3]="STOPPED",t[t.INTERRUPTED=4]="INTERRUPTED"}(S||(S={}));var C,D=t("AudioPCMDataView",function(){function t(){this._bufferView=void 0,this._normalizeFactor=1;for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];if(2===e.length)this._bufferView=e[0],this._normalizeFactor=e[1];else{var o=e[0],i=e[1],r=e[2];this._bufferView=new i(o),this._normalizeFactor=r}}return t.prototype.getData=function(t){return this._bufferView[t]*this._normalizeFactor},e(t,[{key:"length",get:function(){return this._bufferView.length}}]),t}()),O=0;function k(t,e){var n;e.invoking||(e.invoking=!0,(n=e.func).call.apply(n,[t].concat(e.args)).then((function(){e.invoking=!1,t._operationQueue.shift(),t._eventTarget.emit(e.id.toString());var n=t._operationQueue[0];n&&k(t,n)})).catch((function(){})))}function w(t,e,n){var o=n.value;n.value=function(){for(var t=this,e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];return new Promise((function(e){var i=O++,r=t;r._operationQueue.push({id:i,func:o,args:n,invoking:!1}),r._eventTarget.once(i.toString(),e),k(r,r._operationQueue[0])}))}}var b,R,U,B,L,x,M,G=function(){function t(t,e){var n=this;this._innerAudioContext=void 0,this._onPlayCb=void 0,this._onEndCb=void 0,this._innerAudioContext=t,t.volume=e,t.onPlay((function(){var t;null===(t=n._onPlayCb)||void 0===t||t.call(n)})),t.onEnded((function(){var e;null===(e=n._onEndCb)||void 0===e||e.call(n),t.destroy(),n._innerAudioContext=null}))}var n=t.prototype;return n.play=function(){this._innerAudioContext.play()},n.stop=function(){this._innerAudioContext.stop()},e(t,[{key:"onPlay",get:function(){return this._onPlayCb},set:function(t){this._onPlayCb=t}},{key:"onEnd",get:function(){return this._onEndCb},set:function(t){this._onEndCb=t}}]),t}(),j=(C=function(){var t=r.prototype;function r(t){var e=this;this._innerAudioContext=void 0,this._state=S.INIT,this._cacheTime=0,this._needSeek=!1,this._seeking=!1,this._onPlay=void 0,this._onPause=void 0,this._onStop=void 0,this._onSeeked=void 0,this._onEnded=void 0,this._readyToHandleOnShow=!1,this._eventTarget=new n,this._operationQueue=[],this._innerAudioContext=t,this._eventTarget=new n,g.on(E.EVENT_PAUSE,this._onInterruptedBegin,this),g.on(E.EVENT_RESUME,this._onInterruptedEnd,this);var o=this._eventTarget;this._onPlay=function(){e._state=S.PLAYING,o.emit(I.PLAYED),e._needSeek&&e.seek(e._cacheTime).catch((function(){}))},t.onPlay(this._onPlay),this._onPause=function(){e._state=S.PAUSED;try{var t=e._innerAudioContext.currentTime;null!=t&&(e._cacheTime=t)}catch(t){}o.emit(I.PAUSED)},t.onPause(this._onPause),this._onStop=function(){e._state=S.STOPPED,e._resetSeekCache(),o.emit(I.STOPPED),0!==(e._innerAudioContext?e._innerAudioContext.currentTime:0)&&e._innerAudioContext.seek(0)},t.onStop(this._onStop),this._onSeeked=function(){o.emit(I.SEEKED),e._seeking=!1,e._needSeek&&(e._needSeek=!1,e._cacheTime.toFixed(3)!==e._innerAudioContext.currentTime.toFixed(3)?e.seek(e._cacheTime).catch((function(){})):e._needSeek=!1)},t.onSeeked(this._onSeeked),this._onEnded=function(){e._state=S.INIT,e._resetSeekCache(),o.emit(I.ENDED)},t.onEnded(this._onEnded)}return t._resetSeekCache=function(){this._cacheTime=0,this._needSeek=!1,this._seeking=!1},t.destroy=function(){var t=this;g.off(E.EVENT_PAUSE,this._onInterruptedBegin,this),g.off(E.EVENT_RESUME,this._onInterruptedEnd,this),this._innerAudioContext&&(["Play","Pause","Stop","Seeked","Ended"].forEach((function(e){t._offEvent(e)})),this._innerAudioContext.stop(),this._innerAudioContext.destroy(),this._innerAudioContext=null)},t._onInterruptedBegin=function(){var t=this;this._state===S.PLAYING&&this.pause().then((function(){t._state=S.INTERRUPTED,t._readyToHandleOnShow=!0,t._eventTarget.emit(I.INTERRUPTION_BEGIN)})).catch((function(){}))},t._onInterruptedEnd=function(){var t=this;this._readyToHandleOnShow?(this._state===S.INTERRUPTED&&this.play().then((function(){t._eventTarget.emit(I.INTERRUPTION_END)})).catch((function(){})),this._readyToHandleOnShow=!1):this._eventTarget.once(I.INTERRUPTION_BEGIN,this._onInterruptedEnd,this)},t._offEvent=function(t){this["_on"+t]&&(this._innerAudioContext["off"+t](this["_on"+t]),this["_on"+t]=null)},r.load=function(t){return new Promise((function(e){r.loadNative(t).then((function(t){e(new r(t))})).catch((function(){}))}))},r.loadNative=function(t){return new Promise((function(e,n){var i=o.createInnerAudioContext(),r=setTimeout((function(){u(),e(i)}),8e3);function u(){i.offCanplay(a),i.offError(s)}function a(){u(),clearTimeout(r),e(i)}function s(t){u(),clearTimeout(r),console.error("failed to load innerAudioContext"),n(new Error(t))}i.onCanplay(a),i.onError(s),i.src=t}))},r.loadOneShotAudio=function(t,e){return new Promise((function(n,o){r.loadNative(t).then((function(t){n(new G(t,e))})).catch(o)}))},t.getPCMData=function(){},t.seek=function(t){var e=this;return new Promise((function(n){e._state!==S.PLAYING||e._seeking?e._cacheTime!==t&&(e._cacheTime=t,e._needSeek=!0):(t=i(t,0,e.duration),e._seeking=!0,e._innerAudioContext.seek(t)),n()}))},t.play=function(){var t=this;return new Promise((function(e){t._eventTarget.once(I.PLAYED,e),t._innerAudioContext.play()}))},t.pause=function(){var t=this;return new Promise((function(e){t.state!==S.PLAYING?e():(t._eventTarget.once(I.PAUSED,e),t._innerAudioContext.pause())}))},t.stop=function(){var t=this;return new Promise((function(e){t._eventTarget.once(I.STOPPED,e),t._innerAudioContext.stop()}))},t.onInterruptionBegin=function(t){this._eventTarget.on(I.INTERRUPTION_BEGIN,t)},t.offInterruptionBegin=function(t){this._eventTarget.off(I.INTERRUPTION_BEGIN,t)},t.onInterruptionEnd=function(t){this._eventTarget.on(I.INTERRUPTION_END,t)},t.offInterruptionEnd=function(t){this._eventTarget.off(I.INTERRUPTION_END,t)},t.onEnded=function(t){this._eventTarget.on(I.ENDED,t)},t.offEnded=function(t){this._eventTarget.off(I.ENDED,t)},e(r,[{key:"src",get:function(){return this._innerAudioContext?this._innerAudioContext.src:""}},{key:"type",get:function(){return A.MINIGAME_AUDIO}},{key:"state",get:function(){return this._state}},{key:"loop",get:function(){return this._innerAudioContext.loop},set:function(t){this._innerAudioContext.loop=t}},{key:"volume",get:function(){return this._innerAudioContext.volume},set:function(t){t=u(t),this._innerAudioContext.volume=t}},{key:"duration",get:function(){return this._innerAudioContext.duration}},{key:"currentTime",get:function(){return this._state!==S.PLAYING||this._needSeek||this._seeking?this._cacheTime:this._innerAudioContext.currentTime}},{key:"sampleRate",get:function(){return 0}}]),r}(),r(C.prototype,"seek",[w],Object.getOwnPropertyDescriptor(C.prototype,"seek"),C.prototype),r(C.prototype,"play",[w],Object.getOwnPropertyDescriptor(C.prototype,"play"),C.prototype),r(C.prototype,"pause",[w],Object.getOwnPropertyDescriptor(C.prototype,"pause"),C.prototype),r(C.prototype,"stop",[w],Object.getOwnPropertyDescriptor(C.prototype,"stop"),C.prototype),C),V=new(function(){function t(){this._audioBufferDataMap={}}var e=t.prototype;return e.addCache=function(t,e){this._audioBufferDataMap[t]?console.warn("Audio buffer "+t+" has been cached"):this._audioBufferDataMap[t]={usedCount:1,audioBuffer:e}},e.retainCache=function(t){var e=this._audioBufferDataMap[t];e?e.usedCount++:console.warn("Audio buffer cache "+t+" has not been added.")},e.getCache=function(t){var e=this._audioBufferDataMap[t];return null==e?void 0:e.audioBuffer},e.tryReleasingCache=function(t){var e=this._audioBufferDataMap[t];e?--e.usedCount<=0&&delete this._audioBufferDataMap[t]:console.warn("Audio buffer cache "+t+" has not been added.")},t}()),Y=function(){function t(t){this._nativeAudio=void 0,this._startTime=0,this._startOffset=0,this._isPaused=!0,this._nativeAudio=t}var n=t.prototype;return n.destroy=function(){this._nativeAudio=void 0},n._now=function(){return performance.now()/1e3},n._calculateCurrentTime=function(){var t=this._now()-this._startTime,e=this._startOffset+t;return e>=this.duration&&(this._startTime=this._now(),this._startOffset=0),e%this.duration},n.start=function(){this._isPaused=!1,this._startTime=this._now()},n.pause=function(){this._isPaused||(this._isPaused=!0,this._startOffset=this._calculateCurrentTime())},n.stop=function(){this._isPaused=!0,this._startOffset=0},n.seek=function(t){this._startTime=this._now(),this._startOffset=i(t,0,this.duration)},e(t,[{key:"duration",get:function(){return this._nativeAudio.duration}},{key:"currentTime",get:function(){return this._isPaused?this._startOffset:this._calculateCurrentTime()}}]),t}(),H=null===(b=o.tt)||void 0===b||null===(R=b.getAudioContext)||void 0===R?void 0:R.call(b),F=function(){function t(t,e,n){this._bufferSourceNode=void 0,this._onPlayCb=void 0,this._url=void 0,this._onEndCb=void 0,this._bufferSourceNode=H.createBufferSource(),this._bufferSourceNode.buffer=t,this._bufferSourceNode.loop=!1,this._url=n;var o=H.createGain();o.gain.value=e,this._bufferSourceNode.connect(o),o.connect(H.destination)}var n=t.prototype;return n.play=function(){var t,e=this;this._bufferSourceNode.start(),null===(t=this.onPlay)||void 0===t||t.call(this),this._bufferSourceNode.onended=function(){var t;V.tryReleasingCache(e._url),null===(t=e._onEndCb)||void 0===t||t.call(e)}},n.stop=function(){this._bufferSourceNode.onended=null,V.tryReleasingCache(this._url),this._bufferSourceNode.stop(),this._bufferSourceNode.buffer=null},e(t,[{key:"onPlay",get:function(){return this._onPlayCb},set:function(t){this._onPlayCb=t}},{key:"onEnd",get:function(){return this._onEndCb},set:function(t){this._onEndCb=t}}]),t}(),K=(U=function(){function t(t,e){this._src=void 0,this._audioBuffer=void 0,this._sourceNode=void 0,this._gainNode=void 0,this._volume=1,this._loop=!1,this._state=S.INIT,this._audioTimer=void 0,this._readyToHandleOnShow=!1,this._eventTarget=new n,this._operationQueue=[],this._audioBuffer=t,this._audioTimer=new Y(t),this._gainNode=H.createGain(),this._gainNode.connect(H.destination),this._src=e,g.on(E.EVENT_PAUSE,this._onInterruptedBegin,this),g.on(E.EVENT_RESUME,this._onInterruptedEnd,this)}var o=t.prototype;return o.destroy=function(){this._audioTimer.destroy(),this._audioBuffer&&(this._audioBuffer=null),V.tryReleasingCache(this._src),g.off(E.EVENT_PAUSE,this._onInterruptedBegin,this),g.off(E.EVENT_RESUME,this._onInterruptedEnd,this)},o._onInterruptedBegin=function(){var t=this;this._state===S.PLAYING&&this.pause().then((function(){t._state=S.INTERRUPTED,t._readyToHandleOnShow=!0,t._eventTarget.emit(I.INTERRUPTION_BEGIN)})).catch((function(){}))},o._onInterruptedEnd=function(){var t=this;this._readyToHandleOnShow?(this._state===S.INTERRUPTED&&this.play().then((function(){t._eventTarget.emit(I.INTERRUPTION_END)})).catch((function(){})),this._readyToHandleOnShow=!1):this._eventTarget.once(I.INTERRUPTION_BEGIN,this._onInterruptedEnd,this)},t.load=function(e){return new Promise((function(n){t.loadNative(e).then((function(o){n(new t(o,e))})).catch((function(){}))}))},t.loadNative=function(t){return new Promise((function(e,n){var o=V.getCache(t);if(o)return V.retainCache(t),void e(o);fsUtils.readArrayBuffer(t,(function(o,i){o?n(o):H.decodeAudioData(i).then((function(n){V.addCache(t,n),e(n)})).catch((function(){}))}))}))},t.loadOneShotAudio=function(e,n){return new Promise((function(o,i){t.loadNative(e).then((function(t){var i=new F(t,n,e);o(i)})).catch(i)}))},o.getPCMData=function(t){return new D(this._audioBuffer.getChannelData(t),1)},o.seek=function(t){var e=this;return new Promise((function(n){e._audioTimer.seek(t),e._state===S.PLAYING?e._doPlay().then(n).catch((function(){})):n()}))},o.play=function(){return this._doPlay()},o._doPlay=function(){var t=this;return new Promise((function(e){t._stopSourceNode(),t._sourceNode=H.createBufferSource(),t._sourceNode.buffer=t._audioBuffer,t._sourceNode.loop=t._loop,t._sourceNode.connect(t._gainNode),t._sourceNode.start(0,t._audioTimer.currentTime),t._state=S.PLAYING,t._audioTimer.start(),t._sourceNode.onended=function(){t._audioTimer.stop(),t._eventTarget.emit(I.ENDED),t._state=S.INIT},e()}))},o._stopSourceNode=function(){try{this._sourceNode&&(this._sourceNode.onended=null,this._sourceNode.stop(),this._sourceNode.buffer=null)}catch(t){}},o.pause=function(){return this._state===S.PLAYING&&this._sourceNode?(this._audioTimer.pause(),this._state=S.PAUSED,this._stopSourceNode(),Promise.resolve()):Promise.resolve()},o.stop=function(){return this._sourceNode?(this._audioTimer.stop(),this._state=S.STOPPED,this._stopSourceNode(),Promise.resolve()):Promise.resolve()},o.onInterruptionBegin=function(t){this._eventTarget.on(I.INTERRUPTION_BEGIN,t)},o.offInterruptionBegin=function(t){this._eventTarget.off(I.INTERRUPTION_BEGIN,t)},o.onInterruptionEnd=function(t){this._eventTarget.on(I.INTERRUPTION_END,t)},o.offInterruptionEnd=function(t){this._eventTarget.off(I.INTERRUPTION_END,t)},o.onEnded=function(t){this._eventTarget.on(I.ENDED,t)},o.offEnded=function(t){this._eventTarget.off(I.ENDED,t)},e(t,[{key:"src",get:function(){return this._src}},{key:"type",get:function(){return A.WEB_AUDIO}},{key:"state",get:function(){return this._state}},{key:"loop",get:function(){return this._loop},set:function(t){this._loop=t,this._sourceNode&&(this._sourceNode.loop=t)}},{key:"volume",get:function(){return this._volume},set:function(t){t=u(t),this._volume=t,this._gainNode.gain.value=t}},{key:"duration",get:function(){return this._audioBuffer.duration}},{key:"currentTime",get:function(){return this._audioTimer.currentTime}},{key:"sampleRate",get:function(){return this._audioBuffer.sampleRate}}]),t}(),r(U.prototype,"seek",[w],Object.getOwnPropertyDescriptor(U.prototype,"seek"),U.prototype),r(U.prototype,"play",[w],Object.getOwnPropertyDescriptor(U.prototype,"play"),U.prototype),r(U.prototype,"pause",[w],Object.getOwnPropertyDescriptor(U.prototype,"pause"),U.prototype),r(U.prototype,"stop",[w],Object.getOwnPropertyDescriptor(U.prototype,"stop"),U.prototype),U),W=function(){function t(t){this._audio=void 0,this._audio=t}var n=t.prototype;return n.play=function(){this._audio.play()},n.stop=function(){this._audio.stop()},e(t,[{key:"onPlay",get:function(){return this._audio.onPlay},set:function(t){this._audio.onPlay=t}},{key:"onEnd",get:function(){return this._audio.onEnd},set:function(t){this._audio.onEnd=t}}]),t}(),Q=function(){function t(t){this._player=void 0,this._player=t}t.load=function(e){return new Promise((function(n){"object"==typeof o.tt&&void 0!==o.tt.getAudioContext?K.load(e).then((function(e){n(new t(e))})).catch((function(){})):j.load(e).then((function(e){n(new t(e))})).catch((function(){}))}))};var n=t.prototype;return n.destroy=function(){this._player.destroy()},t.loadNative=function(t){return"object"==typeof o.tt&&void 0!==o.tt.getAudioContext?K.loadNative(t):j.loadNative(t)},t.loadOneShotAudio=function(t,e){return new Promise((function(n,i){"object"==typeof o.tt&&void 0!==o.tt.getAudioContext?K.loadOneShotAudio(t,e).then((function(t){n(new W(t))})).catch(i):j.loadOneShotAudio(t,e).then((function(t){n(new W(t))})).catch(i)}))},n.getPCMData=function(t){return this._player.getPCMData(t)},n.seek=function(t){return this._player.seek(t)},n.play=function(){return this._player.play()},n.pause=function(){return this._player.pause()},n.stop=function(){return this._player.stop()},n.onInterruptionBegin=function(t){this._player.onInterruptionBegin(t)},n.offInterruptionBegin=function(t){this._player.offInterruptionBegin(t)},n.onInterruptionEnd=function(t){this._player.onInterruptionEnd(t)},n.offInterruptionEnd=function(t){this._player.offInterruptionEnd(t)},n.onEnded=function(t){this._player.onEnded(t)},n.offEnded=function(t){this._player.offEnded(t)},e(t,[{key:"src",get:function(){return this._player.src}},{key:"type",get:function(){return this._player.type}},{key:"state",get:function(){return this._player.state}},{key:"loop",get:function(){return this._player.loop},set:function(t){this._player.loop=t}},{key:"volume",get:function(){return this._player.volume},set:function(t){this._player.volume=t}},{key:"duration",get:function(){return this._player.duration}},{key:"currentTime",get:function(){return this._player.currentTime}},{key:"sampleRate",get:function(){return this._player.sampleRate}}]),t}();Q.maxAudioChannel=10,a.AudioPlayer=Q;var z=t("AudioClip",s("cc.AudioClip")(((M=function(t){function n(){for(var e,n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))||this)._duration=x&&x(),e._loadMode=A.UNKNOWN_AUDIO,e._meta=null,e._player=null,e}c(n,t);var o=n.prototype;return o.destroy=function(){var e,n=t.prototype.destroy.call(this);return null===(e=this._player)||void 0===e||e.destroy(),this._player=null,this._meta&&(this._meta.player=null),n},o.validate=function(){return!!this._meta},o.getDuration=function(){return this._duration?this._duration:this._meta?this._meta.duration:0},o.getCurrentTime=function(){return this._player?this._player.currentTime:0},o.getVolume=function(){return this._player?this._player.volume:0},o.getLoop=function(){return!!this._player&&this._player.loop},o.setCurrentTime=function(t){var e;null===(e=this._player)||void 0===e||e.seek(t).catch((function(){}))},o.setVolume=function(t){this._player&&(this._player.volume=t)},o.setLoop=function(t){this._player&&(this._player.loop=t)},o.play=function(){var t;null===(t=this._player)||void 0===t||t.play().catch((function(){}))},o.pause=function(){var t;null===(t=this._player)||void 0===t||t.pause().catch((function(){}))},o.stop=function(){var t;null===(t=this._player)||void 0===t||t.stop().catch((function(){}))},o.playOneShot=function(t){void 0===t&&(t=1),this._nativeAsset&&Q.loadOneShotAudio(this._nativeAsset.url,t).then((function(t){t.play()})).catch((function(){}))},e(n,[{key:"duration",set:function(t){this._duration=t}},{key:"_nativeAsset",get:function(){return this._meta},set:function(t){this._meta=t,t?(this._loadMode=t.type,this._player=t.player):(this._meta=null,this._loadMode=A.UNKNOWN_AUDIO,this._duration=0)}},{key:"_nativeDep",get:function(){return{uuid:this._uuid,audioLoadMode:this.loadMode,ext:this._native,__isNative__:!0}}},{key:"loadMode",get:function(){return this._loadMode}},{key:"state",get:function(){return this._player?this._player.state:S.INIT}}]),n}(m)).AudioType=A,x=d((L=M).prototype,"_duration",[f],(function(){return 0})),r(L.prototype,"_nativeDep",[h],Object.getOwnPropertyDescriptor(L.prototype,"_nativeDep"),L.prototype),B=L))||B);function q(t,e,n){Q.load(t,{audioLoadMode:e.audioLoadMode}).then((function(e){var o={player:e,url:t,duration:e.duration,type:e.type};n(null,o)})).catch((function(t){n(t)}))}function J(t,e,n,o){var i=new z;i._nativeUrl=t,i._nativeAsset=e,i.duration=e.duration,o(null,i)}a.AudioClip=z,T.register({".mp3":q,".ogg":q,".wav":q,".m4a":q}),N.register({".mp3":J,".ogg":J,".wav":J,".m4a":J});var $,X,Z,tt,et,nt,ot,it,rt,ut,at,st=new(function(){function t(){this._oneShotAudioInfoList=[],this._audioPlayerInfoList=[]}var e=t.prototype;return e._findIndex=function(t,e){return t.findIndex((function(t){return t.audio===e}))},e._tryAddPlaying=function(t,e){var n=this._findIndex(t,e);return n>-1?(t[n].playTime=performance.now(),!1):(t.push({audio:e,playTime:performance.now()}),!0)},e.addPlaying=function(t){t instanceof Q?this._tryAddPlaying(this._audioPlayerInfoList,t):this._tryAddPlaying(this._oneShotAudioInfoList,t)},e._tryRemovePlaying=function(t,e){var n=this._findIndex(t,e);return-1!==n&&(l(t,n),!0)},e.removePlaying=function(t){t instanceof Q?this._tryRemovePlaying(this._audioPlayerInfoList,t):this._tryRemovePlaying(this._oneShotAudioInfoList,t)},e.discardOnePlayingIfNeeded=function(){var t;this._audioPlayerInfoList.length+this._oneShotAudioInfoList.length<Q.maxAudioChannel||(this._oneShotAudioInfoList.length>0?this._oneShotAudioInfoList.forEach((function(e){(!t||e.playTime<t.playTime)&&(t=e)})):this._audioPlayerInfoList.forEach((function(e){(!t||e.playTime<t.playTime)&&(t=e)})),t&&(t.audio.stop(),this.removePlaying(t.audio)))},e.pause=function(){this._oneShotAudioInfoList.forEach((function(t){t.audio.stop()})),this._audioPlayerInfoList.forEach((function(t){t.audio.pause().catch((function(){}))}))},e.resume=function(){this._audioPlayerInfoList.forEach((function(t){t.audio.play().catch((function(){}))}))},t}()),ct="audiosource-loaded";!function(t){t.STARTED="started",t.ENDED="ended"}(at||(at={}));var dt=($=s("cc.AudioSource"),X=_(z),Z=_(z),$(((ut=function(t){function n(){for(var e,n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))||this)._clip=nt&&nt(),e._player=null,e._loop=ot&&ot(),e._playOnAwake=it&&it(),e._volume=rt&&rt(),e._cachedCurrentTime=0,e._operationsBeforeLoading=[],e._isLoaded=!1,e._lastSetClip=null,e}c(n,t);var o=n.prototype;return o._resetPlayer=function(){this._player&&(st.removePlaying(this._player),this._player.offEnded(),this._player.offInterruptionBegin(),this._player.offInterruptionEnd(),this._player.destroy(),this._player=null)},o._syncPlayer=function(){var t=this,e=this._clip;if(this._lastSetClip!==e)return e?void(e._nativeAsset?(this._isLoaded=!1,this._lastSetClip=e,this._operationsBeforeLoading.length=0,Q.load(e._nativeAsset.url,{audioLoadMode:e.loadMode}).then((function(n){var o;t._lastSetClip===e?(t._isLoaded=!0,t._resetPlayer(),t._player=n,n.onEnded((function(){var e;st.removePlaying(n),null===(e=t.node)||void 0===e||e.emit(at.ENDED,t)})),n.onInterruptionBegin((function(){st.removePlaying(n)})),n.onInterruptionEnd((function(){st.addPlaying(n)})),t._syncStates(),null===(o=t.node)||void 0===o||o.emit(ct)):n.destroy()})).catch((function(){}))):console.error("Invalid audio clip")):(this._lastSetClip=null,void this._resetPlayer())},o.onLoad=function(){this._syncPlayer()},o.onEnable=function(){this._playOnAwake&&!this.playing&&this.play()},o.onDisable=function(){var t=this._getRootNode();null!=t&&t._persistNode||this.pause()},o.onDestroy=function(){var t;this.stop(),null===(t=this._player)||void 0===t||t.destroy(),this._player=null},o.getPCMData=function(t){var e=this;return new Promise((function(n){if(0!==t&&1!==t)return console.warn("Only support channel index 0 or 1 to get buffer"),void n(void 0);var o;e._player?n(e._player.getPCMData(t)):null===(o=e.node)||void 0===o||o.once(ct,(function(){var o;n(null===(o=e._player)||void 0===o?void 0:o.getPCMData(t))}))}))},o.getSampleRate=function(){var t=this;return new Promise((function(e){var n;t._player?e(t._player.sampleRate):null===(n=t.node)||void 0===n||n.once(ct,(function(){e(t._player.sampleRate)}))}))},o._getRootNode=function(){for(var t,e,n=this.node,o=null===(t=n)||void 0===t||null===(e=t.parent)||void 0===e?void 0:e.parent;o;){var i,r,u;o=null===(r=n=null===(i=n)||void 0===i?void 0:i.parent)||void 0===r||null===(u=r.parent)||void 0===u?void 0:u.parent}return n},o.play=function(){var t,e=this;if(this._isLoaded||!this.clip){var n;st.discardOnePlayingIfNeeded(),this.state===S.PLAYING&&(null===(n=this._player)||void 0===n||n.stop().catch((function(){})));var o=this._player;null===(t=this._player)||void 0===t||t.play().then((function(){var t;st.addPlaying(o),null===(t=e.node)||void 0===t||t.emit(at.STARTED,e)})).catch((function(){}))}else this._operationsBeforeLoading.push("play")},o.pause=function(){var t;if(this._isLoaded||!this.clip){var e=this._player;null===(t=this._player)||void 0===t||t.pause().then((function(){st.removePlaying(e)})).catch((function(){}))}else this._operationsBeforeLoading.push("pause")},o.stop=function(){var t;if(this._isLoaded||!this.clip){var e=this._player;null===(t=this._player)||void 0===t||t.stop().then((function(){st.removePlaying(e)})).catch((function(){}))}else this._operationsBeforeLoading.push("stop")},o.playOneShot=function(t,e){void 0===e&&(e=1),t._nativeAsset?Q.loadOneShotAudio(t._nativeAsset.url,this._volume*e,{audioLoadMode:t.loadMode}).then((function(t){st.discardOnePlayingIfNeeded(),t.onPlay=function(){st.addPlaying(t)},t.onEnd=function(){st.removePlaying(t)},t.play()})).catch((function(){})):console.error("Invalid audio clip")},o._syncStates=function(){var t=this;this._player&&this._player.seek(this._cachedCurrentTime).then((function(){t._player&&(t._player.loop=t._loop,t._player.volume=t._volume,t._operationsBeforeLoading.forEach((function(e){var n;null===(n=t[e])||void 0===n||n.call(t)})),t._operationsBeforeLoading.length=0)})).catch((function(){}))},e(n,[{key:"clip",get:function(){return this._clip},set:function(t){t!==this._clip&&(this._clip=t,this._syncPlayer())}},{key:"loop",get:function(){return this._loop},set:function(t){this._loop=t,this._player&&(this._player.loop=t)}},{key:"playOnAwake",get:function(){return this._playOnAwake},set:function(t){this._playOnAwake=t}},{key:"volume",get:function(){return this._volume},set:function(t){Number.isNaN(t)?console.warn("illegal audio volume!"):(t=i(t,0,1),this._player?(this._player.volume=t,this._volume=this._player.volume):this._volume=t)}},{key:"currentTime",get:function(){return this._player?this._player.currentTime:this._cachedCurrentTime},set:function(t){var e;Number.isNaN(t)?console.warn("illegal audio time!"):(t=i(t,0,this.duration),this._cachedCurrentTime=t,null===(e=this._player)||void 0===e||e.seek(this._cachedCurrentTime).catch((function(){})))}},{key:"duration",get:function(){var t,e;return null!==(t=null===(e=this._clip)||void 0===e?void 0:e.getDuration())&&void 0!==t?t:this._player?this._player.duration:0}},{key:"state",get:function(){return this._player?this._player.state:S.INIT}},{key:"playing",get:function(){return this.state===n.AudioState.PLAYING}}],[{key:"maxAudioChannel",get:function(){return Q.maxAudioChannel}}]),n}(P)).AudioState=S,ut.EventType=at,nt=d((et=ut).prototype,"_clip",[X],(function(){return null})),ot=d(et.prototype,"_loop",[f],(function(){return!1})),it=d(et.prototype,"_playOnAwake",[f],(function(){return!0})),rt=d(et.prototype,"_volume",[f],(function(){return 1})),r(et.prototype,"clip",[Z],Object.getOwnPropertyDescriptor(et.prototype,"clip"),et.prototype),tt=et))||tt);t({AudioSource:dt,AudioSourceComponent:dt}),p(z,"AudioClip",[{name:"PlayingState",newName:"AudioState",target:dt,targetName:"AudioSource"}]),y(z.prototype,"AudioClip.prototype",["state","play","pause","stop","playOneShot","setCurrentTime","setVolume","setLoop","getCurrentTime","getVolume","getLoop"].map((function(t){return{name:t,suggest:"please use AudioSource.prototype."+t+" instead"}}))),a.AudioSourceComponent=dt,v(dt,"cc.AudioSourceComponent")}}}));
