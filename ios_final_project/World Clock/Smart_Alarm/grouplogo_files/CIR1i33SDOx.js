if (self.CavalryLogger) { CavalryLogger.start_js(["8C+gO"]); }

__d("MessengerMessage.react",["cssVar","cx","fbt","EmojiLikeUtils","MercuryDisplayTimeFilterMessageRenderer","FluxContainer","ifRequired","immutable","ImmutableObject","MercuryAttachment","MercuryMessageDeliveryState","MercuryMessageError.react","MercuryMessageInfo","MercuryTimestamp","MessengerAttachmentAttribution.react","MessengerAttachmentRenderer","MessengerBubble.react","MessengerBubbleBlock.react","MessengerCodeBubble.react","MessengerCodePasteUtils","MessengerDecorator","MessengerInnerDecorators.react","MessengerMessageActionsWrapper.react","messengerMessageSeenHeadsReact","messengerURIUtilsRe","MessengerVideoAutoplayStore","MNCommerceMessageType","React","TooltipData","emptyFunction","getViewportDimensions","joinClasses","messengerRTLClasses"],(function a(b,c,d,e,f,g,h,i,j){"use strict";__p&&__p();var k,l,m=c("messengerMessageSeenHeadsReact").jsComponent,n=c("React").PropTypes;function o(r){switch(r){case c("MercuryMessageDeliveryState").SENDING:return j._("Sending");case c("MercuryMessageDeliveryState").SENT:return j._("Sent");case c("MercuryMessageDeliveryState").DELIVERED:return j._("Delivered");case c("MercuryMessageDeliveryState").ERROR:return j._("Error")}return null}k=babelHelpers.inherits(p,c("React").Component);l=k&&k.prototype;function p(){__p&&__p();var r,s;for(var t=arguments.length,u=Array(t),v=0;v<t;v++)u[v]=arguments[v];return s=(r=l.constructor).call.apply(r,[this].concat(u)),this.state={isVisible:false,plainText:false,shown:{}},this.$MessengerMessage14=function(w){w.stopPropagation();this.props.onSelect(this.props.message.message_id)}.bind(this),this.$MessengerMessage4=function(w,x){var y;this.setState({shown:babelHelpers["extends"]({},this.state.shown,(y={},y[w]=x,y))})}.bind(this),this.$MessengerMessage5=function(){this.setState({plainText:!this.state.plainText})}.bind(this),this.$MessengerMessage12=function(){this.props.onSelect(this.props.message.message_id)}.bind(this),this.$MessengerMessage6=function(){return c("MessengerCodePasteUtils").containsCodeBlock(this.props.message.body)||!!this.messageBody&&this.messageBody.hasFormatting()}.bind(this),s}p.getStores=function(){var r=[c("MessengerVideoAutoplayStore")],s=c("ifRequired")("MessengerSphericalRendererStore",function(t){return t},function(){return null});if(s)r.push(s);return r};p.calculateState=function(r,s){return{isVisible:c("MessengerVideoAutoplayStore").isVisible(s.message.thread_id,s.message.message_id)||c("ifRequired")("MessengerSphericalRendererStore",function(t){return t.isVisible(s.message.thread_id,s.message.message_id)},function(){return false})}};p.prototype.shouldComponentUpdate=function(r,s){return r.isActive!==this.props.isActive||r.isFromViewer!==this.props.isFromViewer||r.message!==this.props.message||r.nextTimestamp!==this.props.nextTimestamp||r.showDeliveryState!==this.props.showDeliveryState||r.deliveryTimestamp!==this.props.deliveryTimestamp||!c("immutable").is(r.readReceipts,this.props.readReceipts)||!c("immutable").is(r.participants,this.props.participants)||r.customColor!==this.props.customColor||s.isVisible!==this.state.isVisible};p.prototype.render=function(){__p&&__p();var r=this.props,s=r.isActive,t=r.isFromViewer,u=r.isPageMessage,v=r.message,w=j._("{time}",[j.param("time",c("MercuryTimestamp").getPreciseTimestamp(v.timestamp))]),x=c("TooltipData").propsFor(w,q(t)),y=[],z=[],A=this.props.message,B=t||false;if(A&&!this.props.hideBeforeDecorator){c("MessengerDecorator").getBeforeDecorators().forEach(function(F){if(F.check(A))y.push(F.render(A,B))});c("MessengerDecorator").getInnerDecorators().forEach(function(F){if(F.check(A))z.push(F.getAdditionalClassNames())})}var C=this.$MessengerMessage1(x,false),D=this.$MessengerMessage2(x,null);if(D)C=this.$MessengerMessage1(x,true);var E=!!D&&this.$MessengerMessage3();return c("React").createElement(c("MessengerMessageActionsWrapper.react"),{className:c("joinClasses").apply(undefined,["clearfix _o46 _3erg"+(s?" _-5k":"")+(t?" _3i_m":"")+(t?" _nd_":"")+(!t?" _29_7":"")+(v.isSelected?" _3xsz":"")+(E?" _q4a":""),c("messengerRTLClasses")(v.body)].concat(z)),message:v,onShowMenu:this.$MessengerMessage4},y,C,D||u?null:c("React").createElement(c("MessengerInnerDecorators.react"),{message:A,isFromViewer:t,hovered:this.state.shown[A.message_id],messageProps:babelHelpers["extends"]({},this.props,{handleToggleOriginal:this.$MessengerMessage5,hasFormatting:this.$MessengerMessage6,isShowingOriginal:this.state.plainText})}),D,this.$MessengerMessage7(A,B),this.$MessengerMessage8(),this.$MessengerMessage9(),c("React").createElement(m,{className:"_4jzq",isFromViewer:t,message:v,nextTimestamp:this.props.nextTimestamp,participants:this.props.participants,readReceipts:this.props.readReceipts}))};p.prototype.$MessengerMessage7=function(r,s){__p&&__p();var t,u=this;if(r&&!this.props.hideAfterExternalDecorator){var t=function(){__p&&__p();var v=[],w=[];c("MessengerDecorator").getAfterExternalDecorators().forEach(function(y){if(r&&y.check(r)){v.push(y.render(r,s,this.props));w.push(y.getAdditionalClassNames())}},u);var x=w.join(" ");if(v.length===0)return{v:null};return{v:c("React").createElement("span",{className:c("joinClasses")(x,"_31gm"+(!s?" isFromOther":""))},v)}}();if(typeof t==="object")return t.v}return null};p.prototype.$MessengerMessage10=function(r){return r.every(function(s){return!s||!c("MessengerAttachmentRenderer").isRenderedShareAttachment(s)})};p.prototype.$MessengerMessage11=function(){return this.props.message.attachments.length===1&&c("MercuryAttachment").hasAttribution(this.props.message.attachments[0])};p.prototype.$MessengerMessage2=function(r,s){__p&&__p();if(this.props.message.is_filtered_content)return null;if(this.props.message.commerce_message_type===c("MNCommerceMessageType").RIDE_INTENT)return null;var t=[],u=[],v=this.props.message,w=this.props.isFromViewer||false;if(v)c("MessengerDecorator").getAfterDecorators().forEach(function(B){if(B.check(v,w)){t.push(B.render(v,w,this.props));u.push(B.getAdditionalClassNames())}}.bind(this));var x=c("MessengerAttachmentRenderer").getAttachmentsOutsideBubble(this.props.message,this.props.onAttachmentLoad,{customColor:this.props.customColor,isFromViewer:this.props.isFromViewer,isPageMessage:this.props.isPageMessage,isVisible:this.state.isVisible,onSelect:this.$MessengerMessage12,onUnwrap:null,pageID:this.props.pageID},t);if(!x||!x.length)return null;if(r){var y=x.some(function(B){return!!B&&c("MessengerAttachmentRenderer").isPhotosGroupAttachment(B)});if(this.$MessengerMessage11())x=[c("React").createElement("span",{key:"AttachmentWithAttribution"},x[0],c("React").createElement(c("MessengerAttachmentAttribution.react"),{attachment:new(c("ImmutableObject"))(this.props.message.attachments[0])}))];x=this.$MessengerMessage10(x)?c("React").createElement("div",babelHelpers["extends"]({},r,{className:c("joinClasses").apply(undefined,["_3zvs"+(y?" _2-x3":"")].concat(u))}),x,t):x.map(function(B){return B&&c("React").cloneElement(B,r)})}var z=c("MessengerAttachmentRenderer").isSharedVideoAttachmentMessage(this.props.message),A=c("React").createElement("div",{key:"renderedAttachments",className:"_3058 _15gf"+(z?" _3duc":"")},x,this.props.isPageMessage?null:c("React").createElement(c("MessengerInnerDecorators.react"),{message:this.props.message,isFromViewer:this.props.isFromViewer||false,hovered:this.state.shown[this.props.message.message_id],messageProps:this.props}));if(this.$MessengerMessage11())return c("React").createElement(c("MessengerBubbleBlock.react"),null,A);return A};p.prototype.$MessengerMessage13=function(){return c("MessengerAttachmentRenderer").isP2PAttachment(this.props.message)};p.prototype.$MessengerMessage1=function(r,s){__p&&__p();var t=this.props.message,u=c("immutable").List(c("MessengerAttachmentRenderer").getAttachmentsInsideBubble(t,this.props.onAttachmentLoad)),v=t.ranges;if(t.profile_ranges&&t.profile_ranges.length)v=(v||[]).concat(t.profile_ranges.map(function(x){return babelHelpers["extends"]({},x,{url:c("messengerURIUtilsRe").getURIForUserID(x.id)})}));if(c("MessengerCodePasteUtils").containsCodeBlock(t.body)&&!this.state.plainText)return c("React").createElement(c("MessengerCodeBubble.react"),{attachments:u,body:t.body,customColor:this.props.isFromViewer?this.props.customColor:"",className:(this.props.isFromViewer?"_3uhm":"")+(!this.props.isFromViewer?" _3uhn":""),isFromViewer:this.props.isFromViewer,ranges:v||[],threadID:t.thread_id||""});if(t.is_filtered_content)return c("React").createElement("div",{className:"_3058 _wiu _52mr uiBoxYellow clearfix"},c("MercuryDisplayTimeFilterMessageRenderer").renderFilteredContent(t));var w=t.body&&!c("EmojiLikeUtils").isEmojiLike(t);if(w||!u.isEmpty())return c("React").createElement(c("MessengerBubble.react"),babelHelpers["extends"]({attachments:u,body:t.body,bodyRef:function(x){this.messageBody=x}.bind(this),className:"_3058 _ui9",customColor:this.props.isFromViewer?this.props.customColor:"",customLike:t.customLike,excludeAfterDecorators:s,isFromViewer:this.props.isFromViewer,isP2PAttachment:this.$MessengerMessage13(),ranges:v,message:t,metaRanges:t.meta_ranges,plainText:this.state.plainText,threadCustomColor:this.props.threadCustomColor||"#0084ff",threadID:t.thread_id,participants:this.props.participants},r||{}));return null};p.prototype.$MessengerMessage9=function(){if(!this.props.isFromViewer||!this.props.showDeliveryState||this.props.message.is_like_preview)return null;var r=c("MercuryMessageInfo").getDeliveryState(this.props.message,this.props.deliveryTimestamp);if(r===c("MercuryMessageDeliveryState").UNKNOWN)return null;var s={};if(this.props.customColor&&(r===c("MercuryMessageDeliveryState").SENT||r===c("MercuryMessageDeliveryState").SENDING||r===c("MercuryMessageDeliveryState").DELIVERED))s.color=this.props.customColor;return c("React").createElement("span",{className:"_2her"+(r===c("MercuryMessageDeliveryState").SENDING?" _4jzp":"")+(r===c("MercuryMessageDeliveryState").SENT?" _3zzf":"")+(r===c("MercuryMessageDeliveryState").DELIVERED?" _9ah":"")+(r===c("MercuryMessageDeliveryState").ERROR?" _5ei9":""),onClick:this.$MessengerMessage14,role:"checkbox",style:s,tabIndex:"0",title:o(r)},c("React").createElement("i",{className:"_57e_"}))};p.prototype.$MessengerMessage8=function(){var r=this.props.message;if(!c("MercuryMessageInfo").hasError(r))return null;return c("React").createElement(c("MercuryMessageError.react"),{className:"_3058 _2ygi",message:r,authorFBID:this.props.authorFBID})};p.prototype.$MessengerMessage3=function(){var r=this.props.message,s=false;if(r)s=!!(r.reactions&&Object.keys(r.reactions).length>0);return s};p.propTypes={customColor:n.string,deliveryTimestamp:n.number.isRequired,hideAfterExternalDecorator:n.bool,hideBeforeDecorator:n.bool,isActive:n.bool,isFromViewer:n.bool,isPageMessage:n.bool,message:n.instanceOf(c("ImmutableObject")).isRequired,nextTimestamp:n.number.isRequired,onAttachmentLoad:n.func.isRequired,onDeselect:n.func.isRequired,onSelect:n.func.isRequired,participants:n.instanceOf(c("immutable").Map).isRequired,readReceipts:n.instanceOf(c("immutable").OrderedMap).isRequired,showDeliveryState:n.bool,authorFBID:n.string,threadCustomColor:n.string,pageID:n.string};p.defaultProps={onAttachmentLoad:c("emptyFunction"),threadCustomColor:"#0084ff"};function q(r){if(c("getViewportDimensions")().width<=parseInt("700px".replace("px",""),10))return"above";return r?"right":"left"}f.exports=c("FluxContainer").create(p,{withProps:true})}),null);