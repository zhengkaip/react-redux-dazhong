import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {connect} from "react-redux"
import {bindActionCreators} from 'redux'
import localStore from '../util/localStore'
import * as userInfoActionsFromOtherFile from "../actions/userInfo"
import * as localStoreKey from "../config/localStoreKey"


import "../static/js/flexible1"
import "../static/css/common.scss"
import "../static/css/font.css"

class App extends React.Component{
	constructor(props) {
	   super(props);
	   this.shouldComponentUpdate=PureRenderMixin.shouldComponentUpdate.bind(this);
	   this.state = {
	   		initDone:false
	   };
	}
	componentDidMount() {
		let cityName=localStore.getItem(localStoreKey.CITYNAME)
		if(cityName==null){
			cityName="武汉"
		}
		this.props.userInfoActions.update({
			cityName
		})
		// 更改状态
        this.setState({
            initDone: true
        })
	}

	render(){
		return (
			<div>
				{
					this.state.initDone
                    ? this.props.children
                    : <div>正在加载....</div>
				}
			</div>
		)
	}
}

function mapStateToProps(state){
	return {
	}
}
function mapDispatchToProps(dispatch){
	return {
		userInfoActions:bindActionCreators(userInfoActionsFromOtherFile,dispatch)
	}
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
