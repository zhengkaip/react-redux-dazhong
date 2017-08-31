import React from "react"
import PureRenderMixin from "react-addons-pure-render-mixin"
import {browserHistory} from "react-router"

import "./style.scss"

export default class Header extends React.Component{
	constructor(props) {
	  super(props);
	  this.shouldComponentUpdate=PureRenderMixin.shouldComponentUpdate.bind(this);
	  this.state = {};
	}

	render(){
		return(
			<div className="common-header">
				<span className="back-icon float-left" onClick={this.backClick.bind(this)}>
					<i className="icon-chevron-left"></i>
				</span>
				<h2>{this.props.title}</h2>
			</div>
		)
	}
	backClick(){
		let backRouter=this.props.backRouter;
		if(backRouter){
			browserHistory.push(backRouter)
		}else{
			window.history.back();
		}
	}
}
