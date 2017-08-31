import React,{Component} from "react"
import PureRenderMixin from "react-addons-pure-render-mixin"

import Star from "../Star"

import "./style.scss"

export default class EvaluateItem extends Component{
	constructor(props) {
	  super(props);
	  this.shouldComponentUpdate=PureRenderMixin.shouldComponentUpdate.bind(this);
	  this.state = {};
	}

	render(){
		return (
			<div className="comment-item">
				<h3>
					<i className="icon-user"></i>
					{this.props.itemData.username}
				</h3>
				<div className="star-container">
					{
						[1,2,3,4,5].map((item,index)=>{
							return <Star  starClass={index<this.props.itemData.star?'icon-star light':'icon-star'} key={index}/>
						})
					}
				</div>
				<p>{this.props.itemData.comment}</p>
			</div>
		)
	}
}