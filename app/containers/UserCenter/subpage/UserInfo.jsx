import React,{Component} from "react"
import PureRenderMixin from "react-addons-pure-render-mixin"

import "./style.scss"

export default class UserInfo extends Component{
	constructor(props) {
	  super(props);
	  this.shouldComponentUpdate=PureRenderMixin.shouldComponentUpdate.bind(this);
	  this.state = {};
	}

	render(){
		return (
			<div className="userinfo-container">
				<p>
					<i className="icon-user"></i>
					<span>{this.props.userName}</span>
				</p>
				<p>
					<i className="icon-map-marker"></i>
					<span>{this.props.cityName}</span>
				</p>
			</div>
		)
	}
}