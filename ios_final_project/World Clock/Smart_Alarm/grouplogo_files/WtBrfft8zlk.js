if (self.CavalryLogger) { CavalryLogger.start_js(["8JP\/x"]); }

__d("MessengerPageAdminNoteList.react",["cx","fbt","LeftRight.react","MessengerBubble.react","PagesMessengerCreatorInfo.react","ReactComponentWithPureRenderMixin","React","enumerate","classWithMixins","immutable","mixin"],(function a(b,c,d,e,f,g,h,i){"use strict";__p&&__p();var j,k,l=c("React").PropTypes;j=babelHelpers.inherits(m,c("classWithMixins")(c("React").Component,c("mixin")(c("ReactComponentWithPureRenderMixin"))));k=j&&j.prototype;m.prototype.render=function(){var n=[],o=this.calculateGroups(this.props.notes);o.forEach(function(p,q){n.push(c("React").createElement("li",{className:"_4kd2",key:"group:"+q},this.$MessengerPageAdminNoteList1(p)))}.bind(this));return c("React").createElement("ul",{className:"_4kd3"},n)};m.prototype.$MessengerPageAdminNoteList1=function(n){var o=[];n.forEach(function(p,q){o.push(c("React").createElement("div",{className:"_4kd4",key:"note:"+q},this.$MessengerPageAdminNoteList2(p,n)))}.bind(this));return o};m.prototype.$MessengerPageAdminNoteList2=function(n,o){var p=c("immutable").List([c("React").createElement(c("LeftRight.react"),{className:"_561k"},c("React").createElement("div",{className:"_561l"},i._("Private Note")),c("React").createElement(c("PagesMessengerCreatorInfo.react"),{key:"creator_info",creator_info:o[0].creator_info,isNote:true}))]);return c("React").createElement("div",{className:"_o46 _3i_m _nd_"},c("React").createElement("div",{className:"clearfix"},c("React").createElement(c("MessengerBubble.react"),{body:n.body.text,attachments:p,className:"_3058 _4kd5"})))};m.prototype.calculateGroups=function(n){__p&&__p();var o=[],p=null,q=null,r=c("enumerate")(n),s=void 0;while(!(s=r.next()).done){var t=q&&q.value.creator_info.creatorID===s.value.creator_info.creatorID;if(!t){p=[];o.push(p)}if(p)p.push(s.value);q=s}return o};function m(){j.apply(this,arguments)}m.propTypes={notes:l.arrayOf(l.shape({id:l.string,body:l.object.isRequired,creator_info:l.shape({creatorID:l.string.isRequired,creatorName:l.string.isRequired,creatorType:l.string.isRequired,labelType:l.string.isRequired,pageID:l.string.isRequired,profileURI:l.string}),timestamp:l.number.isRequired})).isRequired};f.exports=m}),null);