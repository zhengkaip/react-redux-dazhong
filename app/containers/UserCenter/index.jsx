import React,{Component} from "react"
import PureRenderMixin from "react-addons-pure-render-mixin"
import {connect} from "react-redux"


import Header from "./subpage/Header"
import UserInfo from "./subpage/UserInfo"
import OrderList from "./subpage/OrderList"

class UserCenter extends Component{
	constructor(props) {
	  super(props);
	  this.shouldComponentUpdate=PureRenderMixin.shouldComponentUpdate.bind(this);
	  this.state = {};
	}

	render(){
		return(
			<div>
				<Header/>
				<UserInfo userName={this.props.userName} cityName={this.props.cityName}/>
				<OrderList/>
			</div>
		)
	}
}

function mapStateToProps(state){
	return {
		userName:state.userInfo.username,
		cityName:state.userInfo.cityName
	}
}

export default connect(
	mapStateToProps
)(UserCenter)

