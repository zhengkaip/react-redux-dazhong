import React,{Component} from "react"
import PureRenderMixin from "react-addons-pure-render-mixin"

import "./style.scss"

export default class BuyAndStore extends Component{
	constructor(props) {
	  super(props);
	  this.shouldComponentUpdate=PureRenderMixin.shouldComponentUpdate.bind(this);
	  this.state = {};
	}

	render(){
		let ifSelect=this.props.ifSelect;
		return (
			<div className="buy-and-store">
				<div className="clear-fix wrap">
					<button className={ifSelect?"float-left collect active":"float-left collect"} onClick={this.props.clickCollect.bind(this)}>{ifSelect?"已收藏":"收藏"}</button>
					<button className="float-left" onClick={this.props.buyStore.bind(this)}>购买</button>
				</div>
			</div>
		)
	}
}