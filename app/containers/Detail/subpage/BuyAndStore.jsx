import React,{Component} from "react"
import {browserHistory} from "react-router"
import PureRenderMixin from "react-addons-pure-render-mixin"
import {connect} from 'react-redux'
import {bindActionCreators} from "redux"
import BuyAndStoreComponent from "../../../components/BuyAndStore"

import * as storeAction from "../../../actions/store"

class BuyAndStore extends Component{
	constructor(props) {
	  super(props);
	  this.shouldComponentUpdate=PureRenderMixin.shouldComponentUpdate.bind(this);
	  this.state = {
	  	 	ifCollect:false,
	  	 	ifSelect:false
	  };
	}

	render(){
		return (
			<BuyAndStoreComponent clickCollect={this.clickCollect.bind(this)} ifSelect={this.state.ifSelect} buyStore={this.buyStore}/>
		)
	}

	componentDidMount() {
		let store=this.props.store;
		let detailId=this.props.detailId;
		store.some((item)=>{
			if(item.id==detailId){
				this.setState({
					ifCollect:true
				})
				return true
			}
		})
		console.log(this.state.ifCollect)
	}

	clickCollect(){
		this.ifLogin();
	}

	ifLogin(){
		let detailId=this.props.detailId;
		let store=this.props.store;
		let ifCollect=this.state.ifCollect;
		if(!this.props.username){
			browserHistory.push("/login/"+encodeURIComponent("/detail/"+detailId));
		}else{
			console.log(this.props.storeAction)
			if(ifCollect){
				this.props.storeAction.storeMv({
					id:detailId,
					collect:false
				})
			}else{
				this.props.storeAction.storeAdd({
					id:detailId,
					collect:true
				})
			}
			this.setState({
				ifCollect:!this.state.ifCollect,
				ifSelect:!this.state.ifSelect
			})
		}
	}

	buyStore(){
		browserHistory.push("/userCenter")
	}
}
function mapStateToProps(state){
	return {
		username:state.userInfo.username,
		store:state.store
	}
}
function mapDispatchToProps(dispatch){
	return {
		storeAction:bindActionCreators(storeAction,dispatch)
	}
}
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(BuyAndStore)