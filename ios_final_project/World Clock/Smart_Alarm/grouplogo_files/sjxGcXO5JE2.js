if (self.CavalryLogger) { CavalryLogger.start_js(["TOHXn"]); }

__d("MercuryBootloadOnInteraction.react",["BootloadOnRender.react","React"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();var h,i;h=babelHelpers.inherits(j,c("React").PureComponent);i=h&&h.prototype;function j(k){i.constructor.call(this,k);this.$MercuryBootloadOnInteraction1=function(l){this.setState({hadUserInteraction:true,interactionType:l.type})}.bind(this);this.$MercuryBootloadOnInteraction2=function(l){this.setState({interactionType:undefined})}.bind(this);this.state={hadUserInteraction:false}}j.prototype.render=function(){__p&&__p();if(!this.state.hadUserInteraction)return c("React").cloneElement(this.props.placeholder,{onFocus:this.$MercuryBootloadOnInteraction1,onMouseOver:this.$MercuryBootloadOnInteraction1,onClick:this.$MercuryBootloadOnInteraction1,onBlur:this.$MercuryBootloadOnInteraction2});var k=this.props,l=k.loader,m=k.component,n=k.placeholder,o={};switch(this.state.interactionType){case"focus":o.autoFocus=true;break;case"click":o.clicked=true;break}m=c("React").cloneElement(m,o);n=c("React").cloneElement(n,o);return c("React").createElement(c("BootloadOnRender.react"),{placeholder:n,loader:l,component:m})};f.exports=j}),null);