import React,{Component} from 'react'
import PureRenderMixin from "react-addons-pure-render-mixin"

import {getEvaluateList} from "../../../fetch/detail/detail"

import EvaluateItem from "../../../components/EvaluateItem"

import "./style.scss"

export default class EvaluateList extends Component{
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	page:0,
	  	hasMore:true,
	  	ifLoad:false,
	  	data:[]
	  };
	}

	render(){
		return (
			<div className="detail-comment-subpage">
				<h2>用户点评</h2>
				<div className="comment-list">
					{
						this.state.data.map(function(item, index) {
							return <EvaluateItem key={index} itemData={item}/>;
						})
					}
				</div>
				{
					this.state.hasMore?(
						<div className="load-more" ref="moreWrap" onClick={()=>this.loadMore()}>
							<pan>
								{
									this.state.ifLoad?"正在加载中....":"加载更多"
								}
							</pan>
						</div>
					):""
				}
			</div>
		)
	}

	componentDidMount() {
		this.loadMore();

		window.addEventListener("scroll",this.srcollCallBack.bind(this),false)
	}

	componentWillUnmount() {
		clearTimeout(this.state.scrollTime)
		window.removeEventListener("scroll",this.srcollCallBack.bind(this),false)
	}

	srcollCallBack(){
		if(this.state.scrollTime){
			clearTimeout(this.state.scrollTime)
		}

		if(this.state.ifLoad){
			return;
		}
		this.state.scrollTime=setTimeout(()=>{
			let moreWrap=this.refs.moreWrap;
			let wH=window.screen.height;
			let top=moreWrap.getBoundingClientRect().top;
			if(top&&top<wH){
				this.loadMore();
			}
		},50)
	}

	loadMore(){
		let id=this.props.detailId;
		this.getEvaluate(id);
		this.setState({
			page:this.state.page+1,
			ifLoad:true
		})
	}

	getEvaluate(id){
		let page=this.state.page;
		let result=getEvaluateList(id,page);
		result.then((response)=>{
			return response.json()
		}).then((json)=>{
			this.setState({
				hasMore:json.hasMore,
				ifLoad:false,
				data:this.state.data.concat(json.data)
			})
		})
	}
}