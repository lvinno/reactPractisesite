import React, { PureComponent } from 'react'
import { connect } from "react-redux"
import {HomeWrapper,HomeLeft,HomeRight,BackTop} from './style'
import Topic from './components/Topic'
import Writer from './components/Writer'
import List from './components/List'
import Recommend from './components/Recommend'
import { actionCreators } from './store'

class Home extends PureComponent {

    handleScrollTop(){
        window.scrollTo(0,0);
    }
    render(){
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className="banner-img" src="//upload.jianshu.io/admin_banners/web_images/4592/2cbadf9347d69cfc140daf64de887fda0e361bcc.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt="540" />
                <Topic></Topic>
                <List></List>
                </HomeLeft>
                <HomeRight>
                    <Recommend></Recommend>
                    <Writer></Writer>
                </HomeRight>
                {this.props.showScroll? <BackTop onClick={this.handleScrollTop}>顶部</BackTop>:null}
               
            </HomeWrapper>
        )
    }

    componentDidMount(){
        this.props.changeHomeData();
        this.bindEvents();
    }

    componentWillUnmount(){
        this.props.changeHomeData();
        window.removeEventListener("scroll",this.props.changeScrollTopShow);
    }

    bindEvents(){
        window.addEventListener("scroll",this.props.changeScrollTopShow);
    }
}

const mapState = (state) => {
    return {
        showScroll: state.getIn(['home','showScroll'])
    }
}

const mapDispacth = (dispatch) => {
    return {
        changeHomeData(){
            dispatch(actionCreators.getHomeInfo());
        },
        changeScrollTopShow(){
            console.log(document.documentElement.scrollTop)
            if(document.documentElement.scrollTop > 100){
                dispatch(actionCreators.toggleTopShow(true))
            }else{
                dispatch(actionCreators.toggleTopShow(false))
            }
        }
    }
}

export default connect(mapState,mapDispacth)(Home);