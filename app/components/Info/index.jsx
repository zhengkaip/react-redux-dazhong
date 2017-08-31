import React,{Component} from 'react'
import PureRenderMixin from "react-addons-pure-render-mixin"

import Star from "../Star"

import "./style.scss"

export default class Info extends Component{
	constructor(props) {
	  super(props);
	  this.shouldComponentUpdate=PureRenderMixin.shouldComponentUpdate.bind(this);
	  this.state = {};
	}
	componentDidMount() {
		console.log(this.props.detailInfo)
	}

	render(){
		return (
			<div id="detail-info-container">
				<div className="info-container clear-fix">
					<div className="info-img-container float-left">
						<img src={this.props.detailInfo.img}/>
					</div>
					<div className="info-content">
						<h1>{this.props.detailInfo.title}</h1>
						<div className="star-container">
							<div className="star-container">
								{
									[1,2,3,4,5].map((item, index)=>{
										return <Star  starClass={index<this.props.detailInfo.star?'icon-star light':'icon-star'} key={index}/>
									})									
								}
							</div>
							<span className="price">￥{this.props.detailInfo.price}</span>
						</div>
						<p className="sub-title">{this.props.detailInfo.subTitle}</p>
					</div>
				</div>
				<p className="info-desc" dangerouslySetInnerHTML={{__html:this.props.detailInfo.desc}}></p>
			</div>
		)
	}
}



