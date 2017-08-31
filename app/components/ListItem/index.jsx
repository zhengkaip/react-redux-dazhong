import React from 'react'
import {Link} from "react-router"
import PureRenderMixin from "react-addons-pure-render-mixin"

import "./style.scss"

export default class HomeLove extends React.Component{
	constructor(props) {
	  super(props);
	  this.shouldComponentUpdate=PureRenderMixin.shouldComponentUpdate.bind(this);
	  this.state = {};
	}
    
    componentDidMount() {
    	
    }

	componentWillUpdate(){
		
	}
	render(){
		return (
			<div className="list-item clear-fix">
				<Link to={"/detail/"+this.props.data.id}>
					<div className="item-img-container float-left">
						<img src={this.props.data.img} alt={this.props.data.title}/>
					</div>
					<div className="item-content">	
						<div className="item-title-container clear-fix">
							<h3 className="float-left">{this.props.data.title}</h3>
							<span className="float-right">{this.props.data.distance}</span>
						</div>
						<p className="item-sub-title">{this.props.data.subTitle}</p>
						<div className="item-price-container clear-fix">
							<span className="price float-left">￥{this.props.data.price}</span>
							<span className="mumber float-right">已售{this.props.data.mumber}</span>
						</div>
					</div>
				</Link>
			</div>
		)
	}
}