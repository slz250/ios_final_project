if (self.CavalryLogger) { CavalryLogger.start_js(["1+4Wd"]); }

__d("messengerThreadlistRowActionsReact",["cx","fbt","bs_block","bs_curry","React","keysRe","gkx","utilsRe","MercuryIDs","AsyncDialog","CurrentUser","ReasonReact","joinClasses","AsyncRequest","bs_js_primitive","MercuryThreadIDMap","messengerDialogsRe","messengerMenuReact","messengerBlockDialogReact","messengerPopoverMenuReact","messengerIgnoreDialogReact","messengerMuteDialogBootloaderReact","XNFXStartForMessageThreadController","messengerDeleteDialogBootloaderReact","messengerMarkSpamDialogBootloaderReact","mNCommerceReportConversationDialogReact"],(function aa(ba,a,ca,da,ea,b,fa,c){"use strict";__p&&__p();function d(k){if(k)return 0;else return a("messengerDialogsRe").removeDialog(0)}function e(k){k.preventDefault();k.stopPropagation();return 0}var f=a("ReasonReact").reducerComponentWithRetainedProps("MessengerThreadlistRowActionsReact"),g="_5blh _4-0h",h="_5blh _4-0h _4-0i";function i(k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,ga,ha,E,F,G,H,ia,I,ja){__p&&__p();var J=k?k[0]:"",K=function K(){return a("messengerDialogsRe").showDialog(function(){return a("ReasonReact").element(0,0,a("messengerDeleteDialogBootloaderReact").make(s,t,d,[]))})},L=function L(){if(o)return a("bs_curry")._1(B,0);else return a("messengerDialogsRe").showDialog(function(){return a("ReasonReact").element(0,0,a("messengerMuteDialogBootloaderReact").make(y,d,[]))})},M=function M(){if(q)return a("bs_curry")._1(v,0);else return a("bs_curry")._1(x,0)},N=function N(){return a("messengerDialogsRe").showDialog(function(){return a("ReasonReact").element(0,0,a("messengerMarkSpamDialogBootloaderReact").make(w,d,[]))})},O=function O(){return a("messengerDialogsRe").showDialog(function(){return a("ReasonReact").element(0,0,a("messengerIgnoreDialogReact").make(C,d,l,I.thread_fbid,+a("MercuryIDs").isGroupChat(I.thread_id),[]))})},P=function P(){if(r)return a("bs_curry")._1(ga,0);else return a("messengerDialogsRe").showDialog(function(){return a("ReasonReact").element(0,0,a("messengerBlockDialogReact").make(D,d,l,I.thread_fbid,[]))})},Q=function Q(){var Y=a("MercuryThreadIDMap").get();Y.getServerIDFromClientID(I.thread_id,function(Z){a("AsyncDialog").send(new(a("AsyncRequest"))(a("XNFXStartForMessageThreadController").getURIBuilder().setString("thread_fbid",Z).getURI()));return 0});return 0},R=function R(){var Y=I.other_user_fbid;if(Y==null)return 0;else return a("messengerDialogsRe").showDialog(function(){return a("ReasonReact").element(0,0,a("mNCommerceReportConversationDialogReact").make(Y,[]))})},S=function S(){return[O,P,K,M,N,L,R,Q]},T=function T(){return 0},U=function U(Y){var Z=+(Y.keyCode===a("keysRe").$$return);if(Z!==0)return 0;else return 2},V=function V(){return 1},W=function W(Y){return[Y==null?0:[Y]]},X=f.slice();X[8]=function(Y){var Z=Y[1],$=Y[0];if(Z[3]||Z[3]!==$[3])return 1;else return+(Z[2]!==$[2])};X[9]=function(Y){var Z=Y[2],$=Y[1];if(p){var ka=n!==0?m!==0?c._("Leave Chat"):c._("Leave Room"):c._("Leave Group"),la=c._("Ignore Messages"),ma=r!==0?c._("Unblock Messages"):c._("Block Messages"),na=a("utilsRe").isSomeTrue(G),oa=E||a("utilsRe").isSomeTrue(G),pa=a("utilsRe").isSomeTrue(H),qa=a("utilsRe").isSomeTrue(H),ra=1-+a("CurrentUser").isWorkUser()&&1-r&&(F||+(I.folder==="inbox"&&a("MercuryIDs").isGroupChat(I.thread_id)&&a("gkx")("AT4mycXtTvfXJMAqrd_BSmI0_EEB-8pOs_AaNI2VArui1ThGLeffrrAudIg_2uctK6Ji6Zom3olu5BpcCU5_nD4U"))),sa=1-+a("CurrentUser").isWorkUser()&&F,ta=a("ReasonReact").element(0,0,a("messengerMenuReact").Menu[0]([E!==0?a("ReasonReact").element(0,0,a("messengerMenuReact").MenuItem[0](0,o!==0?c._("Unmute"):c._("Mute"),[Z[5]],0,[])):null,na!==0?a("ReasonReact").element(0,0,a("messengerMenuReact").MenuItem[0](0,c._("Rename"),z,0,[])):null,oa!==0?a("ReasonReact").element(0,0,a("messengerMenuReact").MenuSeparator[0]([])):null,ha!==0?a("ReasonReact").element(0,0,a("messengerMenuReact").MenuItem[0](0,ka,u,0,[])):null,a("ReasonReact").element(0,0,a("messengerMenuReact").MenuItem[0](0,c._("Archive"),[s],0,[])),a("ReasonReact").element(0,0,a("messengerMenuReact").MenuItem[0](0,c._("Delete"),[Z[2]],0,[])),a("ReasonReact").element(0,0,a("messengerMenuReact").MenuSeparator[0]([])),a("ReasonReact").element(0,0,a("messengerMenuReact").MenuItem[0](0,q!==0?c._("Mark as Read"):c._("Mark as Unread"),[Z[3]],0,[])),pa!==0?null:a("ReasonReact").element(0,0,a("messengerMenuReact").MenuItem[0](0,c._("Mark as Spam"),[Z[4]],0,[])),qa!==0?a("ReasonReact").element(0,0,a("messengerMenuReact").MenuItem[0](0,c._("Report..."),[Z[6]],0,[])):a("ReasonReact").element(0,0,a("messengerMenuReact").MenuItem[0](0,c._("Report Spam or Abuse..."),[Z[7]],0,[])),ra!==0?a("ReasonReact").element(0,0,a("messengerMenuReact").MenuItem[0](0,la,[Z[0]],0,[])):null,sa!==0?a("ReasonReact").element(0,0,a("messengerMenuReact").MenuItem[0](0,ma,[Z[1]],0,[])):null])),ua=+(J===""),va=ua!==0?h:a("joinClasses")(J,h);return a("React").createElement("div",{className:"_3d85"},a("ReasonReact").element(0,[a("bs_curry")._1($,W)],a("messengerPopoverMenuReact").make([1],[p],ta,[a("bs_curry")._1($,V)],0,[a("React").cloneElement(a("React").createElement("div",{ref:"button",className:va,role:"button",tabIndex:0,onClick:e}),{"aria-label":c._("Conversation actions")})])))}else{var wa=+(J===""),xa=wa!==0?g:a("joinClasses")(J,g);return a("React").createElement("div",{className:"_3d85"},a("React").cloneElement(a("React").createElement("div",undefined),{"aria-label":c._("Conversation actions"),className:xa,onClick:a("bs_curry")._1($,T),onKeyUp:a("bs_curry")._1($,U),role:"button",ref:"button",tabIndex:ia}))}};X[10]=S;X[11]=p;X[12]=function(Y,ja){__p&&__p();if(typeof Y==="number")switch(Y){case 0:return a("bs_block").__(4,[[O,P,K,M,N,L,R,Q],function(){return a("bs_curry")._1(A,true)}]);case 1:return a("bs_block").__(2,[function(){return a("bs_curry")._1(A,false)}]);case 2:return 0}else{var Z=Y[0];if(Z){var $=Z[0];return a("bs_block").__(2,[function(){return $.showPopover()}])}else return 0}};return X}var j=a("ReasonReact").wrapReasonForJs(f,function(k){return i(a("bs_js_primitive").null_undefined_to_opt(k.className),a("bs_js_primitive").null_undefined_to_opt(k.contact),+k.isGroupChat,+k.isJoinableThread,+k.isMuted,+k.isOpen,+k.isUnread,+k.isBlocked,k.onArchive,k.onDelete,a("bs_js_primitive").null_undefined_to_opt(k.onLeaveGroup),k.onMarkRead,k.onMarkSpam,k.onMarkUnread,k.onMute,a("bs_js_primitive").null_undefined_to_opt(k.onRename),k.onToggle,k.onUnmute,k.onIgnore,k.onBlock,k.onUnblock,+k.showLeaveGroup,+k.showMute,+k.showBlock,a("utilsRe").nullUndefinedBooleanToOptionBool(k.showRename),a("utilsRe").nullUndefinedBooleanToOptionBool(k.showReport),k.tabIndex,k.thread,[])});b.handleReasonDialogToggle=d;b.handleClick=e;b.component=f;b.actionButtonClassesClosed=g;b.actionButtonClassesOpen=h;b.make=i;b.jsComponent=j}),null);