if (self.CavalryLogger) { CavalryLogger.start_js(["+2ELO"]); }

__d("messengerRTCVoiceCallButtonReact",["fbt","React","ReasonReact"],(function a(b,c,d,e,f,g,h){"use strict";__p&&__p();var i={height:"32px",width:"32px"};function j(o,p){return{clipRule:"evenodd",fill:"none",fillRule:"evenodd",stroke:o,strokeMiterlimit:"10",strokeWidth:"2"}}var k=j("#888888",0),l=c("ReasonReact").statelessComponent("MessengerRTCVoiceCallButtonReact");function m(o,p,q,r){var s=l.slice();s[9]=function(){var t=q!==0?h._("Start a group call"):h._("Start a voice call"),u=p!==0?j(o,0):k;return c("React").createElement("div",{style:i,title:t},c("React").createElement("svg",{style:u,viewBox:"0 0 64 64"},c("React").createElement("title",undefined,t),c("React").createElement("path",{d:"M48.3,50.5c-7.7,6.5-24.2-10-24.5-10.3C23.5,39.9,7,23.4,13.5,15.7c4.8-5.7,6.3-3.4,7-2.7\nc0.6,0.5,5.7,7.8,6,9.2c0.3,1.4-2.4,4.6-2.2,5.9c0.2,1.2,3.6,5,5.1,6.5c1.5,1.5,5.3,4.9,6.5,5.1c1.2,0.2,4.4-2.5,5.9-2.2\nc1.4,0.3,8.7,5.4,9.2,6C51.6,44.2,54,45.7,48.3,50.5z"})))};return s}var n=c("ReasonReact").wrapReasonForJs(l,function(o){return m(o.customColor,+o.isAvailable,+o.isGroupChat,[])});g.svgWrapperStyle=i;g.svgStyle=j;g.unavailable=k;g.component=l;g.make=m;g.jsComponent=n}),null);