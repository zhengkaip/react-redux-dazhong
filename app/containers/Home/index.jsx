import React from 'react'
import {connect} from "react-redux"
import PureRenderMixin from "react-addons-pure-render-mixin"


import Header from "./subpage/Header.jsx"
import Category from "../../components/Category"
import Ad from "./subpage/Ad"
import LoveList from "./subpage/LoveList.jsx"

console.log(React.Component)

class Home extends React.Component{
	constructor(props) {
	  super(props);
	  console.log("this.props:",this.props)
	  this.shouldComponentUpdate=PureRenderMixin.shouldComponentUpdate.bind(this)
	  this.state = {};
	}

	componentDidMount() {
		
	}
	render(){
		return (
			<div>
				<Header></Header>
				<Category></Category>
				<Ad></Ad>
				<LoveList currentCity={this.props.userInfo} pathname={this.props.location.pathname}></LoveList>
			</div>
		)
	}
}

function mapStateToProps(state){
	return {
		 userinfo: state.userinfo
	}
}

function mapDispatchToProps(dispatch){
	return {

	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Home)