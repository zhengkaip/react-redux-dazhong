import React from 'react'
import {connect} from 'react-redux'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {bindActionCreators} from "redux"

import {browserHistory} from "react-router"

import * as userInfoAction from "../../../actions/userInfo"

import {CITYNAME} from "../../../config/localStoreKey"
import localStore from "../../../util/localStore"

import CityList from "../../../components/CityList"

import "./style.scss"

class CitySelect extends React.Component{
	constructor(props) {
	  super(props);
	  this.shouldComponentUpdate=PureRenderMixin.shouldComponentUpdate.bind(this);
	  this.state = {};
	}

	render(){
		return (
			<div>
				<div className="current-city"><h2>{this.props.cityName}</h2></div>
				<CityList clickChange={(cityName)=>this.clickChange(cityName)}></CityList>
			</div>
		)
	}

	clickChange(cityName){
		this.props.setCityName.update({
			cityName
		})
		localStore.setItem(CITYNAME,cityName)
		browserHistory.push('');
	}

}
function mapStateToProps(state){
	return{
		cityName:state.userInfo.cityName
	}
}

function mapDispatchToProps(dispatch){
	console.log(userInfoAction)
	return {
		setCityName:bindActionCreators(userInfoAction,dispatch)
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CitySelect)