import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {Link} from "react-router"

import ReactSwipe from "react-swipe"

import "./style.scss"

export default class Category extends React.Component{
	constructor(props) {
	  super(props);
	  this.shouldComponentUpdate=PureRenderMixin.shouldComponentUpdate.bind(this);
	  this.state = {
	  	currentIndex:0,
	  };
	}
	swipeCallBack(index){
		this.setState({
			currentIndex:index
		})
	}
	render(){
		return (
            <div className="header-carousel">
    			<ReactSwipe className="carousel" swipeOptions={{auto:10000,callback:this.swipeCallBack.bind(this)}}>
                    <div className="carousel-item">
                        <ul className="clear-fix" style={{width:'10rem !importan'}}>
                        	<li className="float-left">
                        		<Link href="/search/jingdian">景点</Link>
                        	</li>
                        	<li className="float-left">
                        		<Link href="/search/ktv">KTV</Link>
                        	</li>
                        	<li className="float-left">
                        		<Link href="/search/gouwu">购物</Link>
                        	</li>
                        	<li className="float-left">
                        		<Link href="/search/shenghuofuwu">生活服务</Link>
                        	</li>
                        	<li className="float-left">
                        		<Link href="/search/jianshenyundong">健身运动</Link>
                        	</li>
                        	<li className="float-left">
                        		<Link href="/search/meifa">美发</Link>
                        	</li>
                        	<li className="float-left">
                        		<Link href="/search/qinzi">亲子</Link>
                        	</li>
                        	<li className="float-left">
                        		<Link href="/search/xiaochikuaican">小吃快餐</Link>
                        	</li>
                        	<li className="float-left">
                        		<Link href="/search/zizhucan">自助餐</Link>
                        	</li>
                        	<li className="float-left">
                        		<Link href="/search/jiuba">酒吧</Link>
                        	</li>
                        </ul>
                    </div>
                    <div className="carousel-item">
                        <ul className="clear-fix">
                        	<li className="float-left">
                        		<Link href="/search/meishi">美食</Link>
                        	</li>
                        	<li className="float-left">
                        		<Link href="/search/dianying">电影</Link>
                        	</li>
                        	<li className="float-left">
                        		<Link href="/search/jiudian">酒店</Link>
                        	</li>
                        	<li className="float-left">
                        		<Link href="/search/xuixianyule">休闲娱乐</Link>
                        	</li>
                        	<li className="float-left">
                        		<Link href="/search/waimai">外卖</Link>
                        	</li>
                        	<li className="float-left">
                        		<Link href="/search/huoguo">火锅</Link>
                        	</li>
                        	<li className="float-left">
                        		<Link href="/search/liren">丽人</Link>
                        	</li>
                        	<li className="float-left">
                        		<Link href="/search/dujiachuxing">度假出行</Link>
                        	</li>
                        	<li className="float-left">
                        		<Link href="/search/zuliaoanmo">足疗按摩</Link>
                        	</li>
                        	<li className="float-left">
                        		<Link href="/search/zhoubianyou">周边游</Link>
                        	</li>
                        </ul>
                    </div>
                    <div className="carousel-item">
                        <ul className="clear-fix">
                        	<li className="float-left">
                        		<Link href="/search/ribencai">日本菜</Link>
                        	</li>
                        	<li className="float-left">
                        		<Link href="/search/spa">SPA</Link>
                        	</li>
                        	<li className="float-left">
                        		<Link href="/search/jiehun">结婚</Link>
                        	</li>
                        	<li className="float-left">
                        		<Link href="/search/xuexipeixun">学习培训</Link>
                        	</li>
                        	<li className="float-left">
                        		<Link href="/search/xican">西餐</Link>
                        	</li>
                        	<li className="float-left">
                        		<Link href="/search/huochejipiao">火车机票</Link>
                        	</li>
                        	<li className="float-left">
                        		<Link href="/search/shaokao">烧烤</Link>
                        	</li>
                        	<li className="float-left">
                        		<Link href="/search/jiazhuang">家装</Link>
                        	</li>
                        	<li className="float-left">
                        		<Link href="/search/chongwu">宠物</Link>
                        	</li>
                        	<li className="float-left">
                        		<Link href="/search/all">全部分类</Link>
                        	</li>
                        </ul>
                    </div>
                </ReactSwipe>
                <div className="index-container">
                    <ul className="clear-fix">
                        <li className={this.state.currentIndex === 0 ? "selected" : ''}></li>
                        <li className={this.state.currentIndex === 1 ? "selected" : ''}></li>
                        <li className={this.state.currentIndex === 2 ? "selected" : ''}></li>
                    </ul>
                </div>
            </div>
		)
	}
}