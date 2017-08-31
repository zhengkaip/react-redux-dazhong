import React,{Component} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import "./style.scss"

export default class OrderItem extends Component{
	constructor(props) {
	  super(props);
	  this.shouldComponentUpdate=PureRenderMixin.shouldComponentUpdate.bind(this)
	  this.state = {
	  	 commentState:this.props.itemData.commentState
	  };
	}

	render(){
		return (
			<div className="order-item-container">
				<div className="clear-fix">
					<div className="order-item-img float-left">
						<img src={this.props.itemData.img}/>
					</div>
					<div className="order-item-comment float-right">
						{
							this.state.commentState==2?
							<button className="btn unseleted-btn">已评价</button>
							:
							(
								this.state.commentState==1?
								""
								:
								<button className="btn" onClick={this.clickComment.bind(this)}>评价</button>
							)
						}
					</div>
					<div className="order-item-content">
						<span>商户：{this.props.itemData.title}</span>
						<span>数量：{this.props.itemData.count}</span>
						<span>价格：{this.props.itemData.price}</span>
					</div>
				</div>
				{
					this.state.commentState==1?
					<div className="comment-text-container">
						<textarea className="comment-text"></textarea>
						<button className="btn" onClick={this.commentSubmit.bind(this)}>提交</button>
						<button className="btn unseleted-btn" onClick={this.clickCancel.bind(this)}>取消</button>
					</div>
					:""
				}
				
			</div>
		)
	}
	clickComment(){
		this.setState({
			commentState:1
		})
	}

	clickCancel(){
		this.setState({
			commentState:0
		})
	}
	commentSubmit(){
		this.props.clickSubmit();
		this.setState({
			commentState:2
		})
	}
}
