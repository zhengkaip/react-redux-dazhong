import React,{Component} from 'react'
import PureRenderMixin from "react-addons-pure-render-mixin"

import Header from "../../../components/Header"

export default class DetailHeader extends Component{
	constructor(props) {
		super(props);
		this.shouldComponentUpdate=PureRenderMixin.shouldComponentUpdate.bind(this);
	}
	render(){
		return (
			<Header title="商品详情" backRouter="/userCenter"/>
		)
	}
}