import React,{Component} from "react"
import PureRenderMixin from "react-addons-pure-render-mixin"

import HeaderComponent from "../../../components/Header"

export default class Header extends Component{
	constructor(props) {
	  super(props);
	  this.shouldComponentUpdate=PureRenderMixin.shouldComponentUpdate.bind(this);
	  this.state = {};
	}

	render(){
		return (
			<HeaderComponent title="用户主页" backRouter="/"/>
		)
	}
}