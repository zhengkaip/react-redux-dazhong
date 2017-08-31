import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import "./style.scss"

export default class Home extends React.Component{
	constructor(props) {
	  super(props);
	  this.shouldComponentUpdate=PureRenderMixin.shouldComponentUpdate.bind(this);
	  this.state = {};
	}

	render(){
		return (
			<li className="adLi float-left">
				<a href={this.props.ad.link}>
					<img src="../../../app/static/images/1.jpg" height="140" width="115" />
				</a>
			</li>
		)
	}
}