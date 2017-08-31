import React,{Component} from "react"
import {connect} from 'react-redux'
import {browserHistory} from "react-router"
import PureRenderMixin from "react-addons-pure-render-mixin"
import {bindActionCreators} from 'redux'

import * as userAction from "../../actions/userInfo"
import localStore from '../../util/localStore'
import * as localStoreKey from "../../config/localStoreKey"

import Header from "../../components/Header"
import LoginComponent from "../../components/Login"

class Login extends Component{
	constructor(props) {
	  super(props);
	  this.shouldComponentUpdate=PureRenderMixin.shouldComponentUpdate;
	  this.state = {
	  	ifLogin:true
	  };
	}
	render(){
		let ifLogin=this.state.ifLogin
		return (
			<div>
				{
					ifLogin?
					<p>校验中..</p>
					:
					<div>
						<Header title="登录"/>
						<LoginComponent loginHandle={this.loginHandle.bind(this)}/>
					</div>
				}
			</div>
		)
	}
	componentDidMount() {
		this.checkLogin();
	}

	checkLogin(){
		// let username=localStore.getItem(localStoreKey.USERNAME);
		let username=this.props.username;
		if(username){
			this.props.userAction.update({
				username
			})
			this.toUserCenter();
		}else{
			this.setState({
				ifLogin:false
			})
		}
	}

	loginHandle(username){
		// localStore.setItem(localStoreKey.USERNAME,username)
		this.props.userAction.update({
			username
		})
		this.toUserCenter()
	}

	toUserCenter(){
		let router=this.props.params.router;
		if(router){
			browserHistory.replace(router);
		}else{
			browserHistory.replace("/userCenter")
		}
	}

}

function mapStateToProps(state){
	return {
		username:state.userInfo.username
	}
}

function mapDispatchToProps(dispatch){
	return {
		userAction:bindActionCreators(userAction,dispatch)
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Login)