if (self.CavalryLogger) { CavalryLogger.start_js(["UhhA3"]); }

__d("P2PPendingRecipientNUXJewelBanner.react",["fbt","P2PAcceptMoneyDialog.react","P2PActions","P2PCreditCardStore","P2PJewelBanner.react","P2PTimeBasedAcceptMessage.react","React"],(function a(b,c,d,e,f,g,h){"use strict";__p&&__p();var i=c("React").PropTypes,j=c("React").createClass({displayName:"P2PPendingRecipientNUXJewelBanner",propTypes:{transfer:i.object.isRequired},getInitialState:function k(){return{creditCards:c("P2PCreditCardStore").getAll()}},creditCardStoreSub:null,componentDidMount:function k(){this.creditCardStoreSub=c("P2PCreditCardStore").addListener("change",this.onCreditCardStoreChange)},componentWillUnmount:function k(){if(this.creditCardStoreSub){this.creditCardStoreSub.remove();this.creditCardStoreSub=null}},onCreditCardStoreChange:function k(){var l={creditCards:c("P2PCreditCardStore").getAll()};if(this.isMounted())this.setState(l)},handleClick:function k(){this.showAcceptMoneyDialog()},showAcceptMoneyDialog:function k(){c("P2PActions").showDialog(c("P2PAcceptMoneyDialog.react"),{creditCards:this.state.creditCards,onClose:c("P2PActions").hideDialog,transfer:this.props.transfer})},renderTimeBasedMessage:function k(){return c("React").createElement(c("P2PTimeBasedAcceptMessage.react"),{transfer:this.props.transfer})},render:function k(){var l=this.props.transfer;if(!c("P2PCreditCardStore").isCreditCardsFetchComplete())return null;return c("React").createElement(c("P2PJewelBanner.react"),{bodyText:this.renderTimeBasedMessage(),primaryActionConfig:{onClick:this.handleClick,text:h._("Add Card")},titleText:h._("Accept {currency}{amount} from {sender_name}.",[h.param("currency",l.currency),h.param("amount",l.amount),h.param("sender_name",l.sender.name)])})}});f.exports=j}),null);