import React from 'react'
import {connect} from "react-redux"
import PureRenderMixin from 'react-addons-pure-render-mixin'

import HomeHeader from '../../../components/HomeHeader'

class Header extends React.Component{
	constructor(props) {
	  super(props);
	  this.shouldComponentUpdate=PureRenderMixin.shouldComponentUpdate.bind(this)
	  this.state = {};
	}

	componentDidMount() {
	
	}

	render(){
		return (
			<HomeHeader cityName={this.props.cityName}></HomeHeader>
		)
	}
}
function mapStateToProps(store){
	return {
		cityName:store.userInfo.cityName
	}
}
export default connect(
	mapStateToProps
)(Header)