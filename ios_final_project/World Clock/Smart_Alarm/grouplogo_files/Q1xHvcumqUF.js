if (self.CavalryLogger) { CavalryLogger.start_js(["2Loi7"]); }

__d("messengerInitialDataTransformerRe",["bs_array","bs_caml_array","MercuryThreadlistConstants","messengerGraphQLThreadFetcherRe","messengerGraphQLThreadlistFetcherRe"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();function h(i){__p&&__p();var j=i.viewer,k=i.is_page,l=i.additional_participant,m;if(l==null)m=[];else{var n=[];c("bs_array").iter(function(y){if(y==null)return 0;else{n.push(c("messengerGraphQLThreadlistFetcherRe").transformParticipant(y));return 0}},l.nodes);m=n}var o=i.thread_list,p=o==null?null:c("messengerGraphQLThreadlistFetcherRe").transform(j,[{limit:c("MercuryThreadlistConstants").WEBMESSENGER_THREAD_COUNT+1|0,folder:"inbox",timestamp:null,offset:0,filter:null}],+k,[o]),q=i.current_thread,r;if(q==null)r=null;else{var s=q.message_thread;r=s==null?null:c("messengerGraphQLThreadFetcherRe").transformThread(j,s,+k)}var t=p==null?[[],[],{},[],[]]:[p.ordered_threadlists,p.threads,p.roger,p.participants,p.delivery_receipts],u=t[1],v=i.thread_key,w=v==null?u.filter(function(y){return+(y.unread_count===0)}):[],x=w.length?c("bs_caml_array").caml_array_get(w,0).thread_fbid:null;if(!(r==null))u.push(r);return[{ordered_threadlists:t[0],threads:u,roger:t[2],participants:t[3].concat(m),delivery_receipts:t[4],payload_source:"server_initial_data"},x]}g.transform=h}),null);