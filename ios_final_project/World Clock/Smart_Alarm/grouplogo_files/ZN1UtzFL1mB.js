if (self.CavalryLogger) { CavalryLogger.start_js(["xc7yC"]); }

__d("OmniMLogHelpers",["OmniMEventTypedLogger","MNOmniMConstants","OmniMLoggerEvents","CurrentUser"],(function a(b,c,d,e,f,g){__p&&__p();function h(s){return c("MNOmniMConstants").SUGGESTION_MODES[s]}function i(s,t,u,v){new(c("OmniMEventTypedLogger"))().setEventName(s).setPosition(u+"").setMessageID(t.messageID).setPigeonID(t.suggestionID).setSuggestionMode(h(v)).setContextUserID(c("CurrentUser").getID()).setConfidence(Math.round(t.confidence*1e4)).log()}function j(s,t,u){new(c("OmniMEventTypedLogger"))().setEventName(s).setSuggestionMode(h(u)).setContextUserID(c("CurrentUser").getID()).setSuggestionIds(t.map(function(v){return v.suggestionID})).log()}function k(s,t,u){i(c("OmniMLoggerEvents").SUGGESTION_DISPLAYED,s,t,u)}function l(s,t,u){i(c("OmniMLoggerEvents").SUGGESTION_DISAPPEARED,s,t,u)}function m(s,t,u){i(c("OmniMLoggerEvents").SUGGESTION_DISMISSED,s,t,u)}function n(s,t,u){i(c("OmniMLoggerEvents").SUGGESTION_CLICKED,s,t,u)}function o(s,t,u){i(c("OmniMLoggerEvents").SUGGESTION_COMPLETED,s,t,u)}function p(s,t){j(c("OmniMLoggerEvents").BAR_DISAPPEARED,s,t)}function q(s,t){j(c("OmniMLoggerEvents").BAR_DISMISSED,s,t)}function r(s,t){j(c("OmniMLoggerEvents").BAR_DISPLAYED,s,t)}f.exports={barDisappeared:p,barDisplayed:r,barDismissed:q,suggestionDisplayed:k,suggestionDisappeared:l,suggestionDismissed:m,suggestionClicked:n,suggestionCompleted:o}}),null);