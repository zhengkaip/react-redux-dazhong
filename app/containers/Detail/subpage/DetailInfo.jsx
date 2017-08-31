import React,{Component} from "react"
import PureRenderMixin from "react-addons-pure-render-mixin"

import {getInfo} from "../../../fetch/detail/detail"

import {getEvaluateList} from "../../../fetch/search/search"

import Info from "../../../components/Info"

export default class DetailInfo extends Component{
	constructor(props) {
		super(props);
		this.shouldComponentUpdate=PureRenderMixin.shouldComponentUpdate.bind(this);

		this.state={

		}
	}

	render(){
		return (
			<div>
				{
					this.state.data?
					<Info detailInfo={this.state.data}/>
					:
					<p>正在加载中</p>
				}
			</div>
		)
	}

	componentDidMount() {
		let id=this.props.detailId;
		let result=getInfo(id);
		result.then((response)=>{
			return response.json();
		}).then((json)=>{
			this.setState({
				data:json
			})
		})
	}
}