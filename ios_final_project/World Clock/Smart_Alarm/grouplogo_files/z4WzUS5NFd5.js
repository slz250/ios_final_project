if (self.CavalryLogger) { CavalryLogger.start_js(["kN4\/K"]); }

__d("messengerEditNicknamesDialogReact",["cx","fbt","bs_curry","immutable","MercuryIDs","ReasonReact","bs_js_primitive","ImmutableObject","messengerDialogsRe","messengerDialogReact","MessengerAdminGroupUtils","messengerDialogBodyReact","messengerContactListReact","messengerScrollableAreaReact","messengerEditNicknameDialogReact"],(function a(b,c,d,e,f,g,h,i){"use strict";__p&&__p();function j(m,n){var o=c("MercuryIDs").getUserIDFromParticipantID(n.id),p;if(o==null)p=[n.name,""];else if(m==null)p=[n.name,""];else{var q=m[o];p=q!==undefined?[q,n.name]:[n.name,""]}return new(c("ImmutableObject"))({alias:n.alias,uid:n.id,photo:n.image_src,title:p[0],subtitle:p[1],type:n.type,isMessengerUser:n.is_messenger_user,href:n.href,isWorkUser:undefined,timezone:undefined,participants:undefined,thread:undefined})}var k=c("ReasonReact").statelessComponent("MessengerEditNicknamesDialogReact");function l(m,n,o,p,q,r){__p&&__p();var s=function s(v){if(v)return 0;else{c("bs_curry")._1(p,0);return c("messengerDialogsRe").removeAllDialogs(0)}},t=function t(v,r){var w=c("MercuryIDs").getUserIDFromParticipantID(v.id),x=n.custom_nickname,y=!(w==null)&&!(x==null)?c("bs_js_primitive").undefined_to_opt(x[w]):0;return c("messengerDialogsRe").showDialog(function(){return c("ReasonReact").element(0,0,c("messengerEditNicknameDialogReact").make(v,y,o,s,q,[]))})},u=k.slice();u[9]=function(){__p&&__p();var v=m.filter(function(x,r,y){if(x==null)return false;else{var z=+c("MessengerAdminGroupUtils").isJoinableThread(n),A=c("MercuryIDs").getUserIDFromParticipantID(x.id);if(z!==0&&!(!(A==null)&&A===q))return false;else return true}}).toArray(),w=n.custom_nickname;return c("ReasonReact").element(0,0,c("messengerDialogReact").Dialog[0](["_4h9n"],s,0,0,0,["default"],[350],[c("ReasonReact").element(0,0,c("messengerDialogReact").Header[0](0,0,[c("ReasonReact").element(0,0,c("messengerDialogReact").CancelButton[0](0,[])),c("ReasonReact").element(0,0,c("messengerDialogReact").Title[0](0,[i._("Edit Nicknames")]))])),c("ReasonReact").element(0,0,c("messengerDialogBodyReact").make(["_4h9o"],[c("ReasonReact").element(0,0,c("messengerScrollableAreaReact").make(["100%"],[c("ReasonReact").element(0,0,c("messengerContactListReact").make([function(x){return j(w,x)}],[1],c("immutable").OrderedMap([[null,v]]),t,["_44kr"],q,[n],[]))]))]))]))};return u}g.fromMercuryParticipant=j;g.component=k;g.make=l}),null);