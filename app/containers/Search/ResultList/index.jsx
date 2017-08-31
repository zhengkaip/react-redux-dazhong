import React,{Component} from "react"
import {connect} from "react-redux"
import PureRenderMixin from "react-addons-pure-render-mixin"
import ResultItem from "../../../components/ListItem"
import {getList} from "../../../fetch/search/search"

import "./style.scss"

const initialState = {
	  		page:0,
	  		hasMore:true,
	  		ifLoad:true,
	  		data:[],
	  }

class ResultList extends Component{
	constructor(props) {
	  super(props);
	  this.shouldComponentUpdate=PureRenderMixin.shouldComponentUpdate.bind(this);
	  this.state = initialState;
	}

	render(){
		let hasMore=this.state.hasMore
		let ifLoad=this.state.ifLoad
		return (
			<div>
				<ul className="sreach-list">
					{
						this.state.data.map(function(item, index) {
							return <ResultItem data={item} key={index}/>;
						})
					}
				</ul>
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
	componentDidMount() {
		this.reloadPage()
	}

	reloadPage(){
		let page=this.state.page;
		let city=this.props.cityName;
		let category=this.props.paramsCategor;
		let keyWord= this.props.paramsKeyWord?this.props.paramsKeyWord:"";
		this.getListHandle(page,city,category,keyWord);
		this.scrollLoad(city,category,keyWord)
	}

	componentWillUpdate(prevProps,prevState){
		let category=this.props.paramsCategor;
		let keyWord= this.props.paramsKeyWord?this.props.paramsKeyWord:"";
		if(category==prevProps.paramsCategor&&keyWord==prevProps.paramsKeyWord){
			return 
		}

		this.setState(initialState);
		this.reloadPage();
	}

	scrollLoad(city,category,keyWord){
		let moreWrap=this.refs.moreWrap;
		let screenHeight=window.screen.height;
		let top=0;
		window.addEventListener("scroll",()=>{
			if(!this.state.ifLoad){
				top=moreWrap.getBoundingClientRect().top
				if(top&&top<screenHeight){
					this.setState({
						page:this.state.page+1
					});
					let page=this.state.page;
					this.getListHandle(page,city,category,keyWord)
				}
			}
		})
	}

	getListHandle(page,city,category,keyword){
		 var result=getList(page,city,category,keyword);
		 result.then((response)=>{
		 	return response.json();
		 }).then((json)=>{
		 	this.setState({
		 		hasMore:json.hasMore,
		 		ifLoad:false,
		 		data:this.state.data.concat(json.data)
		 	})
		 })
	}
}


function mapStateToProps(state){
	return{
		cityName:state.userInfo.cityName
	}
}

export default connect(
	mapStateToProps
)(ResultList)