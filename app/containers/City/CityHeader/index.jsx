import React from "react"

import {connect} from "react-redux"
import PureRenderMixin from "react-addons-pure-render-mixin"

import Header from "../../../components/Header"

class CityHeader extends React.Component{
	constructor(props) {
	  super(props);
	  this.shouldComponentUpdate=PureRenderMixin.shouldComponentUpdate.bind(this);
	  this.state = {};
	}

	render(){
		return (
			<div>
				<Header title="选择城市"></Header>
			</div>
		)
	}

	
}
function mapStateToProps(state){
	return {
		cityName:state.userInfo.cityName
	}
}

export default connect(
	mapStateToProps
)(CityHeader)