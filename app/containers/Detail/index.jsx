import React,{Component} from 'react'
import PureRenderMixin from "react-addons-pure-render-mixin"

import DetailHeader from "./subpage/DetailHeader"
import DetailInfo from "./subpage/DetailInfo"
import EvaluateList from "./subpage/EvaluateList"
import BuyAndStore from "./subpage/BuyAndStore"

export default class Detail extends Component{
	constructor(props) {
		super(props);
		this.shouldComponentUpdate=PureRenderMixin.shouldComponentUpdate.bind(this)
	}
	render(){
		return (
			<div>
				<DetailHeader/>
				<DetailInfo detailId={this.props.params.id}/>
				<BuyAndStore detailId={this.props.params.id} pathname={this.props.params.router}/>
				<EvaluateList detailId={this.props.params.id}/>
			</div>
		)
	}
}