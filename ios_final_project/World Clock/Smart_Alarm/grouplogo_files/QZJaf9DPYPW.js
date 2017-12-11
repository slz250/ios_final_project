if (self.CavalryLogger) { CavalryLogger.start_js(["G5jTF"]); }

__d("MessengerFormattingUtils",["React","UnicodeUtils"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();function h(p){return{offset:p[1].length,length:c("UnicodeUtils").strlen(p[2])+2,innerOffset:1,innerText:p[2]}}var i={pattern:/([\s_~\'\"(]|^)\*(\S(?:.*?\S)??)\*(?=[\s_~,.;:!?\'\")]|$)/g,nonCapturingPattern:/(?:[\s_~\'\"(]|^)\*(?:\S(?:.*?\S)??)\*(?=[\s_~,.;:!?\'\")]|$)/,formatter:function p(q){return c("React").createElement("b",null,q)},getRangeInMatch:h,recursivelyFormat:true},j={pattern:/([\s*~\'\"(]|^)_(\S(?:.*?\S)??)_(?=[\s*~,.;:!?\'\")]|$)/g,nonCapturingPattern:/(?:[\s*~\'\"(]|^)_(?:\S(?:.*?\S)??)_(?=[\s*~,.;:!?\'\")]|$)/,formatter:function p(q){return c("React").createElement("i",null,q)},getRangeInMatch:h,recursivelyFormat:true},k={pattern:/([\s*_\'\"(]|^)~(\S(?:.*?\S)??)~(?=[\s*_,.;:!?\'\")]|$)/g,nonCapturingPattern:/(?:[\s*_\'\"(]|^)~(?:\S(?:.*?\S)??)~(?=[\s*_,.;:!?\'\")]|$)/,formatter:function p(q){return c("React").createElement("s",null,q)},getRangeInMatch:h,recursivelyFormat:true},l={pattern:/([\s*_~\'\"(]|^)`(\S(?:.*?\S)??)`(?=[\s\w*_~,.;:!?\'\")]|$)/g,nonCapturingPattern:/(?:[\s*_~\'\"(]|^)`(?:\S(?:.*?\S)??)`(?=[\s\w*_~,.;:!?\'\")]|$)/,formatter:function p(q){return c("React").createElement("code",null,q)},getRangeInMatch:h,recursivelyFormat:false},m=[i,j,k,l];function n(p){var q=arguments.length<=1||arguments[1]===undefined?m:arguments[1];for(var r=0;r<q.length;r++){var s=q[r].nonCapturingPattern;if(s.test(p))return true}return false}function o(p){__p&&__p();var q=arguments.length<=1||arguments[1]===undefined?m:arguments[1],r=[];for(var s=0;s<q.length;s++){var t=q[s];t.pattern.lastIndex=0;var u=void 0;while((u=t.pattern.exec(p))!=null){var v=t.getRangeInMatch(u),w=p.substr(0,u.index+v.offset),x=c("UnicodeUtils").strlen(w);r.push({offset:x,length:v.length,innerText:v.innerText,innerOffset:x+v.innerOffset,formatter:t.formatter,recursivelyFormat:t.recursivelyFormat})}}return r}f.exports={defaultFormatConfigs:m,hasMatch:n,getRanges:o,formatConfigs:{bold:i,italic:j,strikethrough:k,code:l}}}),null);