if (self.CavalryLogger) { CavalryLogger.start_js(["X8ikj"]); }

__d("MessengerSharedFilesContainerRoute",["react-relay/classic/route/RelayRoute","react-relay/classic/query/RelayQL"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();var h,i;h=babelHelpers.inherits(j,c("react-relay/classic/route/RelayRoute"));i=h&&h.prototype;function j(){h.apply(this,arguments)}j.routeName="MessengerSharedFilesContainerRoute";j.paramDefinitions={threadFBID:{type:"String",required:true}};j.queries={sharedFiles:function k(l){return function(m){return{calls:[{kind:"Call",metadata:{type:"ID!"},name:"id",value:{kind:"CallVariable",callVariableName:"threadFBID"}}],children:[].concat.apply([],[{fieldName:"id",kind:"Field",metadata:{isGenerated:true,isRequisite:true},type:"ID"},c("react-relay/classic/query/RelayQL").__frag(m)]),fieldName:"message_thread",kind:"Query",metadata:{identifyingArgName:"id",identifyingArgType:"ID!"},name:"MessengerSharedFilesContainerRoute",type:"MessageThread"}}(l.getFragment("sharedFiles"))}};f.exports=j}),null);