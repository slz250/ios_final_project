if (self.CavalryLogger) { CavalryLogger.start_js(["KUdw7"]); }

__d("MessengerLiveLocationETAQueryWebGraphQLQuery",["WebGraphQLQueryBase"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();f.exports=function(){__p&&__p();var h,i;h=babelHelpers.inherits(j,c("WebGraphQLQueryBase"));i=h&&h.prototype;j.__getDocID=function(){"use strict";return"557024247754605"};j.getQueryID=function(){"use strict";return"1414244725326295"};function j(){"use strict";h.apply(this,arguments)}return j}()}),null);
__d("MercuryMessageLiveLocationETAFetcher",["Promise","DateConsts","Map","MessengerLiveLocationETAQueryWebGraphQLQuery","WebGraphQL","idx","nullthrows"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();var h=60,i=new(c("Map"))();function j(m){if(!i.has(m))return false;var n=c("nullthrows")(i.get(m)),o=Date.now()-n.timestamp.getTime();return o<=c("DateConsts").MS_PER_SEC*h}function k(m){__p&&__p();return new(c("Promise"))(function(n,o){var p=c("nullthrows")(m.coordinate),q=c("nullthrows")(m.sender_destination);c("WebGraphQL").exec(new(c("MessengerLiveLocationETAQueryWebGraphQLQuery"))({queryParams:{gps_points:[{latitude:p.latitude,longitude:p.longitude},{latitude:q.latitude,longitude:q.longitude}],transportation:"CAR",traffic:true}})).done(function(r){var s,t=((s=r)!=null?(s=s.routing_eta)!=null?(s=s.routing_eta_data)!=null?(s=s.nodes)!=null?(s=s[0])!=null?s.eta_traffic:s:s:s:s:s)||null;if(t===null){o();return}var u=Math.ceil(t/c("DateConsts").SEC_PER_MIN);n(u)})})}var l={isLiveLocationEligibleForETA:function m(n){return!!n.coordinate&&!!n.sender_destination&&!n.is_expired},fetchETAToDestination:function m(n){__p&&__p();if(!l.isLiveLocationEligibleForETA(n))throw new Error("Cannot fetch ETA for live location");return new(c("Promise"))(function(o,p){__p&&__p();var q=n.live_location_id;if(j(q)){var r=c("nullthrows")(i.get(q));o(r.etaInMinutes);return}i.set(q,{timestamp:new Date(),etaInMinutes:null});k(n).done(function(s){i.set(q,{timestamp:new Date(),etaInMinutes:s});o(s)})})}};f.exports=l}),null);
__d("GeoMarkerIcon",["ImmutableObject"],(function a(b,c,d,e,f,g){"use strict";var h,i;h=babelHelpers.inherits(j,c("ImmutableObject"));i=h&&h.prototype;function j(k,l,m){i.constructor.call(this,{iconPath:k,anchorU:l,anchorV:m})}f.exports=j}),null);
__d("GeoMarker",["GeoCoordinates","GeoMarkerIcon","ImmutableObject"],(function a(b,c,d,e,f,g){"use strict";var h,i;h=babelHelpers.inherits(j,c("ImmutableObject"));i=h&&h.prototype;function j(k){var l=arguments.length<=1||arguments[1]===undefined?null:arguments[1];i.constructor.call(this,{position:k,icon:l})}f.exports=j}),null);
__d("LiveLocationStopReason",[],(function a(b,c,d,e,f,g){f.exports=Object.freeze({EXPIRED:1,CANCELED:2,ARRIVED:3})}),null);
__d("GeoPath",["GeoCoordinates","ImmutableObject"],(function a(b,c,d,e,f,g){"use strict";var h,i;h=babelHelpers.inherits(j,c("ImmutableObject"));i=h&&h.prototype;function j(k){var l=arguments.length<=1||arguments[1]===undefined?null:arguments[1],m=arguments.length<=2||arguments[2]===undefined?null:arguments[2],n=arguments.length<=3||arguments[3]===undefined?null:arguments[3],o=arguments.length<=4||arguments[4]===undefined?null:arguments[4],p=arguments.length<=5||arguments[5]===undefined?null:arguments[5];i.constructor.call(this,{points:k,weightPx:l,color:m,fillColor:n,route:o,dashed:p})}f.exports=j}),null);
__d("MeasuredComponent.react",["EventListener","React","ReactDOM","SubscriptionsHandler","emptyFunction","requestAnimationFrame"],(function a(b,c,d,e,f,g){__p&&__p();var h,i,j=c("React").PropTypes;h=babelHelpers.inherits(k,c("React").Component);i=h&&h.prototype;function k(){__p&&__p();var l,m;"use strict";for(var n=arguments.length,o=Array(n),p=0;p<n;p++)o[p]=arguments[p];return m=(l=i.constructor).call.apply(l,[this].concat(o)),this.attachEventListeners=function(q){this.$MeasuredComponent1.engage();c("SubscriptionsHandler").prototype.addSubscriptions.apply(this.$MeasuredComponent1,q.map(function(r){return c("EventListener").listen(b,r,this.measure)}.bind(this)))}.bind(this),this.detachEventListeners=function(){this.$MeasuredComponent1.release()}.bind(this),this.measure=function(){var q=c("ReactDOM").findDOMNode(this).getBoundingClientRect();this.props.onMeasure(q)}.bind(this),m}k.prototype.componentWillReceiveProps=function(l){"use strict";if(l.measureOnEvents!==this.props.measureOnEvents){this.detachEventListeners();this.attachEventListeners(l.measureOnEvents)}};k.prototype.componentDidUpdate=function(l,m){"use strict";if(this.props.shouldRemeasure(l.children,this.props.children))this.measure()};k.prototype.componentDidMount=function(){"use strict";this.$MeasuredComponent1=new(c("SubscriptionsHandler"))();this.attachEventListeners(this.props.measureOnEvents);c("requestAnimationFrame")(this.measure)};k.prototype.componentWillUnmount=function(){"use strict";this.detachEventListeners();this.$MeasuredComponent1=null};k.prototype.render=function(){"use strict";return c("React").Children.only(this.props.children)};k.propTypes={onMeasure:j.func.isRequired,measureOnEvents:j.array,shouldRemeasure:j.func};k.defaultProps={onMeasure:c("emptyFunction"),measureOnEvents:["resize","orientationchange"],shouldRemeasure:c("emptyFunction").thatReturnsFalse};f.exports=k}),null);
__d("StaticGeoMapBase.react",["cx","CurrentLocale","GeoCoordinates","GeoMarker","GeoPath","GeoRectangle","MeasuredComponent.react","React","TilesMapConfig","URI","joinClasses"],(function a(b,c,d,e,f,g,h){"use strict";__p&&__p();var i,j,k=c("React").PropTypes,l=1.5,m=1,n=2;i=babelHelpers.inherits(o,c("React").Component);j=i&&i.prototype;function o(){var p,q;for(var r=arguments.length,s=Array(r),t=0;t<r;t++)s[t]=arguments[t];return q=(p=j.constructor).call.apply(p,[this].concat(s)),this.state={size:{width:0,height:0}},this.$StaticGeoMapBase1=function(u){this.setState({size:this.$StaticGeoMapBase3(u)});if(this.props.onMapSizeChanged)this.props.onMapSizeChanged(this.state.size)}.bind(this),this.$StaticGeoMapBase2=function(u,v){return u!=null&&v!=null&&(u.props.style.width!==v.props.style.width||u.props.style.height!==v.props.style.height)},q}o.getMapImageURI=function(p){__p&&__p();if(p.size.width===0||p.size.height===0)return null;var q=new(c("URI"))(c("TilesMapConfig").STATIC_MAP_URL_TEMPLATE).addQueryData("size",p.size.width+"x"+p.size.height).addQueryData("language",c("CurrentLocale").get()),r=window.devicePixelRatio||c("TilesMapConfig").DEVICE_PIXEL_RATIO,s=r<l?m:n;q.addQueryData("scale",s);if(p.zoom!=null)q.addQueryData("zoom",p.zoom);if(p.boundingBox!=null)q.addQueryData("visible",p.boundingBox.n+","+p.boundingBox.w+"|"+p.boundingBox.s+","+p.boundingBox.e);else if(p.center!=null)q.addQueryData("center",p.center.latitude+","+p.center.longitude);if(p.markers!=null&&p.markers.length>0)q.addQueryData("marker_list",p.markers.map(function(t){return(t.icon==null?"":"icon:"+t.icon.iconPath+"|anchor:"+t.icon.anchorU+","+t.icon.anchorV+"|")+t.position.latitude+","+t.position.longitude}));if(p.paths!=null&&p.paths.length>0)q.addQueryData("paths",p.paths.map(function(t){__p&&__p();var u=[];if(t.color!==null){var v=t.color.toString(16).toUpperCase();v="0".repeat(8-v.length)+v;u.push("color:0x"+v)}if(t.fillColor!==null){var w=t.fillColor.toString(16).toUpperCase();w="0".repeat(8-w.length)+w;u.push("fillcolor:0x"+w)}if(t.weightPx!==null)u.push("weight:"+t.weightPx);if(t.route!==null)u.push("route:"+t.route);for(var x=0;x<t.points.length;x++){var y=t.points[x];u.push(y.latitude+","+y.longitude)}return u.join("|")}));return q};o.prototype.render=function(){var p=o.getMapImageURI({size:this.state.size,zoom:this.props.zoom,boundingBox:this.props.boundingBox,center:this.props.center,markers:this.props.markers,paths:this.props.paths}),q=this.props,r=q.width,s=q.height,t=q.center,u=q.zoom,v=q.boundingBox,w=q.markers,x=q.paths,y=babelHelpers.objectWithoutProperties(q,["width","height","center","zoom","boundingBox","markers","paths"]),z=babelHelpers["extends"]({width:this.props.width,height:this.props.height,backgroundRepeat:"no-repeat",backgroundSize:"100% 100%",backgroundImage:p==null?"none":"url("+p.toString()+")"},this.props.borderRadius?{borderRadius:this.props.borderRadius}:{});return c("React").createElement(c("MeasuredComponent.react"),{onMeasure:this.$StaticGeoMapBase1,shouldRemeasure:this.$StaticGeoMapBase2},c("React").createElement("div",babelHelpers["extends"]({},y,{className:c("joinClasses")(this.props.className,"_56x5"),style:z}),this.props.children))};o.prototype.$StaticGeoMapBase3=function(p){var q=this.props.width.endsWith("px")?Number(this.props.width.replace(/px/,"")):0,r=this.props.height.endsWith("px")?Number(this.props.height.replace(/px/,"")):0;return{width:p.width||q,height:p.height||r}};o.propTypes={width:k.any.isRequired,height:k.any.isRequired,source:k.string.isRequired,center:k.instanceOf(c("GeoCoordinates")),zoom:k.number,boundingBox:k.instanceOf(c("GeoRectangle")),markers:k.arrayOf(k.instanceOf(c("GeoMarker"))),paths:k.arrayOf(k.instanceOf(c("GeoPath"))),borderRadius:k.number};f.exports=o}),null);
__d("MercuryMessageLiveLocationShareAttachmentGenerator",["fbt","DateConsts","GeoCoordinates","GeoMarker","LiveLocationStopReason","MercuryIDs","MercuryParticipants","MercuryViewer","StaticGeoMapBase.react","URI","formatDate","keyMirror"],(function a(b,c,d,e,f,g,h){"use strict";__p&&__p();var i=c("keyMirror")(c("LiveLocationStopReason")),j=545,k=280,l=15,m={generateShareAttachment:function B(C,D,E){var F=A(C);return babelHelpers["extends"]({},D,{target:C,title:n(C).toString(),description:s(C,E).toString(),media:babelHelpers["extends"]({},D.media,{image:F&&F.toString()||"",image_size:{width:j,height:k}}),uri:""})}};function n(B){if(B.is_expired)return p(B);else return o(B)}function o(B){if(B.location_title)return B.location_title;else return h._("Live Location")}function p(B){var C=B.sender_destination;if(C&&B.stop_reason===i.ARRIVED)return q(C,B.sender.id);return h._("Location sharing ended")}function q(B,C){__p&&__p();var D=B.label,E=c("MercuryIDs").getParticipantIDFromUserID(C);if(c("MercuryViewer").isViewer(E))if(D)return h._("You arrived at {destination}",[h.param("destination",D)]);else return h._("You arrived at the destination");else{var F=r(E);if(D!=null)if(F!=null)return h._("{user} arrived at {destination}",[h.param("user",F),h.param("destination",D)]);else return h._("Arrived at {destination}",[h.param("destination",D)]);else if(F!=null)return h._("{user} arrived at the destination",[h.param("user",F)]);else return h._("Arrived at the destination")}}function r(B){var C=c("MercuryParticipants").getNow(B);return C&&C.short_name}function s(B,C){if(B.is_expired)return w(B);else{var D=B.sender_destination;if(D)return z(D,C);else return y(B.expiration_time)}}function t(B,C){return B.getDate()==B.getDate()&&B.getMonth()===C.getMonth()&&B.getFullYear()===C.getFullYear()}function u(B){return new Date(B*c("DateConsts").MS_PER_SEC)}function v(B){var C=new Date(),D=u(B),E=C.getTime()-D.getTime();if(t(C,D))return"g:ia";else if(E<c("DateConsts").MS_PER_WEEK)return"D g:ia";else return"M j"}function w(B){var C=B.expiration_time,D=c("formatDate")(C,v(C));return h._("Last update {date}",[h.param("date",D)])}function x(B){var C=u(B).getTime()-Date.now();return Math.ceil(C/(c("DateConsts").MS_PER_SEC*c("DateConsts").SEC_PER_MIN))}function y(B){var C=x(B);return h._({"*":"Sharing for {number} minutes.","_1":"Sharing for 1 minute."},[h.plural(C,"number")])}function z(B,C){if(C)if(B.label)return h._("{eta_in_minutes} minute drive to {destination}.",[h.param("eta_in_minutes",C),h.param("destination",B.label)]);else return h._("{eta_in_minutes} minute drive to the destination.",[h.param("eta_in_minutes",C)]);else if(B.label)return h._("Sharing until {destination}.",[h.param("destination",B.label)]);else return h._("Sharing until destination.")}function A(B){var C=B.coordinate;if(!C)return null;var D=new(c("GeoMarker"))(new(c("GeoCoordinates"))(C.latitude,C.longitude));return c("StaticGeoMapBase.react").getMapImageURI({size:{width:j,height:k},zoom:l,markers:[D],boundingBox:null,center:null,paths:null})}f.exports=m}),null);
__d("MercuryMessageLiveLocationShareAttachment.react",["cx","Link.react","MercuryFallbackShareAttachmentContent.react","MercuryMessageLiveLocationETAFetcher","MercuryMessageLiveLocationShareAttachmentGenerator","MercuryShareAttachmentRenderLocations","MercuryShareAttachmentReactShape","React","XPlacesMapController","nullthrows"],(function a(b,c,d,e,f,g,h){"use strict";__p&&__p();var i,j,k=c("React").PropTypes;i=babelHelpers.inherits(l,c("React").Component);j=i&&i.prototype;function l(){var m,n;for(var o=arguments.length,p=Array(o),q=0;q<o;q++)p[q]=arguments[q];return n=(m=j.constructor).call.apply(m,[this].concat(p)),this.state={etaInMinutes:null},n}l.prototype.componentDidMount=function(){this.$MercuryMessageLiveLocationShareAttachment1(this.state.etaInMinutes)};l.prototype.componentDidUpdate=function(m,n){this.$MercuryMessageLiveLocationShareAttachment1(n.etaInMinutes)};l.prototype.render=function(){var m=this.props.attachment,n=c("MercuryMessageLiveLocationShareAttachmentGenerator").generateShareAttachment(this.$MercuryMessageLiveLocationShareAttachment2(m),m,this.state.etaInMinutes),o=this.$MercuryMessageLiveLocationShareAttachment3(n),p=this.$MercuryMessageLiveLocationShareAttachment2(n);if(c("MercuryShareAttachmentRenderLocations").isPreview(this.props.location)||p.is_expired)return o;var q=c("XPlacesMapController").getURIBuilder().setInt("message_live_location_id",p.live_location_id).getURI();return c("React").createElement(c("Link.react"),{className:"_5rw4",href:n.uri,ajaxify:q,rel:"dialog",target:"_blank"},o)};l.prototype.$MercuryMessageLiveLocationShareAttachment3=function(m){var n=babelHelpers["extends"]({},this.props,{attachment:m});return c("React").createElement(c("MercuryFallbackShareAttachmentContent.react"),n)};l.prototype.$MercuryMessageLiveLocationShareAttachment2=function(m){return c("nullthrows")(m.target)};l.prototype.$MercuryMessageLiveLocationShareAttachment1=function(m){var n=this.$MercuryMessageLiveLocationShareAttachment2(this.props.attachment);if(!c("MercuryMessageLiveLocationETAFetcher").isLiveLocationEligibleForETA(n))return;c("MercuryMessageLiveLocationETAFetcher").fetchETAToDestination(n).done(function(o){if(o&&m!=o)this.setState({etaInMinutes:o})}.bind(this))};l.propTypes={attachment:c("MercuryShareAttachmentReactShape"),location:k.oneOf(c("MercuryShareAttachmentRenderLocations").getValues())};f.exports=l}),null);