if (self.CavalryLogger) { CavalryLogger.start_js(["80nxI"]); }

__d("MercuryMessageList",["immutable","Map","setTimeoutAcrossTransitions"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();function h(i){this.$MercuryMessageList1=c("immutable").List(i||[]);this.$MercuryMessageList2()}h.prototype.append=function(i){var j;this.$MercuryMessageList1=(j=this.$MercuryMessageList1).push.apply(j,i);this.$MercuryMessageList2()};h.prototype.prepend=function(i){var j;this.$MercuryMessageList1=(j=this.$MercuryMessageList1).unshift.apply(j,i);this.$MercuryMessageList2()};h.prototype.update=function(i){var j=i.filter(function(k){return this.contains(k)}.bind(this));if(j.length===0)return;this.$MercuryMessageList1=this.$MercuryMessageList1.withMutations(function(k){j.forEach(function(l){var m=this.$MercuryMessageList3.get(l.message_id);if(m!==undefined)k.set(m,l)}.bind(this))}.bind(this))};h.prototype.reorder=function(i){this.$MercuryMessageList1=c("immutable").List(i.filter(Boolean));this.$MercuryMessageList2()};h.prototype.at=function(i){return this.$MercuryMessageList1.get(i)};h.prototype.contains=function(i){return this.$MercuryMessageList3.has(i.message_id)};h.prototype.toArray=function(){return this.$MercuryMessageList1.toArray()};h.prototype.toMap=function(){return new(c("Map"))(c("immutable").Seq(this.$MercuryMessageList1).map(function(i){return[i.message_id,i]}))};h.prototype.$MercuryMessageList2=function(){this.$MercuryMessageList3=new(c("Map"))(c("immutable").Seq(this.$MercuryMessageList1).map(function(i,j){return[i.message_id,j]}))};f.exports=h}),null);