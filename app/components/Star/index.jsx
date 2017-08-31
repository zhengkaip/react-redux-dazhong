import React,{Component} from "react"
import PureRenderMxin from "react-addons-pure-render-mixin"

import "./style.scss"

export default class Star extends Component{
	constructor(props) {
	  super(props);
	  this.shouldComponentUpdate=PureRenderMxin.shouldComponentUpdate.bind(this);
	  this.state = {};
	}

	render(){
		return (
			<i className={this.props.starClass}></i>
		)
	}
}
