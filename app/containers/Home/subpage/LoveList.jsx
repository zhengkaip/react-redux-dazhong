import React from "react"
import PureRenderMixin from "react-addons-pure-render-mixin"
import {connect} from "react-redux"

import HomeLove from "../../../components/ListItem"

import {getListData} from "../../../fetch/home/home"

class LoveList extends React.Component{
	constructor(props) {
		super(props);
		// this.shouldComponentUpdate=PureRenderMixin.shouldComponentUpdate.bind(this)
	  	this.state = {
	  		data:[],
	  		page:1,
	  		hasMore:true,
	  		ifLoad:false,
	  		scrollTime:null
	  	};
	}

	componentDidMount() {
		this.loadMore();
		window.addEventListener("scroll",this.scrollCallback.bind(this),false)
	}

	componentWillUnmount() {
		clearTimeout(this.state.scrollTime)
		window.removeEventListener("scroll",this.scrollCallback.bind(this),false)
	}

	scrollCallback(){
		if(this.state.scrollTime){
			clearTimeout(this.state.scrollTime)
		}

		if(this.ifLoad){
			return ;
		}

		this.state.scrollTime=setTimeout(()=>{
			let moreWrap=this.refs.moreWrap;
			let screenHeight=window.screen.height
			let top=moreWrap.getBoundingClientRect().top;
			if( top && top<screenHeight){
				this.loadMore()
			}
		},50)
	}

	loadMore(){
		let page=this.state.page;
		this.getLoveList(page);
		this.setState({
			page:this.state.page+1,
			ifLoad:true
		})
	}

	getLoveList(page){
		let city=this.props.city;
		let result =getListData(city,page);
		result.then((response)=>{
			return response.json()
		}).then((json)=>{
			this.setState({
				data:this.state.data.concat(json.data),
				hasMore:json.hasMore,
				ifLoad:false
			})
		}).catch((ex)=>{
			if(__DEV__){
				console.log("加载数据异常,",ex.message)
			}
		})
	}

	render(){
		var resultData=this.state.data
		var ifLoad=this.state.ifLoad
		var hasMore=this.state.hasMore
		return (
			<div>
				<h4 className="home-love-title">猜你喜欢</h4>
				<div className="love-container">
					{
						resultData ? resultData.map((item, index)=>{
							return <HomeLove data={item} key={index}></HomeLove>;
						}):""
					
					}
				</div>
				{
					hasMore?(
						<div className="load-more" ref="moreWrap" onClick={()=>this.loadMore()}>
							<pan>
								{
									ifLoad?"正在加载中....":"加载更多"
								}
							</pan>
						</div>
					):""
				}
				
			</div>
		)
	}
}
function mapStateToProps(store){
	return {
		city:store.userInfo.cityName
	}
}

export default connect(
    mapStateToProps
)(LoveList)