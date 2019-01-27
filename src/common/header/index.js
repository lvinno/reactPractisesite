import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import { 
    HeaderWrapper,Logo,Nav,NavItem,
    NavSearch,Addition,Button,SearchWrapper,
    SearchInfo,SearchInfoTitle,SearchInfoSwitch,
    SearchInfoItem, SearchInfoList
} from './style.js'
import { actionCreators } from './store'

class Header extends Component{

    getListArea() {
    if(this.props.focused){
        return ( 
            <SearchInfo>
           <SearchInfoTitle>
               热门搜索
               <SearchInfoSwitch>换一批</SearchInfoSwitch>
           </SearchInfoTitle>
            <SearchInfoList>
                {this.props.list.map((item) => {
                    return  <SearchInfoItem key={item}>{item}</SearchInfoItem>
                })}
           </SearchInfoList>
       </SearchInfo>
       )
    }else{
        return null;
    }
}
        render(){
            return (
                <HeaderWrapper>
                  <Logo/>
                    <Nav>
                        <NavItem className="left active">首页</NavItem>
                        <NavItem className="left">下载APP</NavItem>
                        <NavItem className="right">登录</NavItem>
                        <NavItem className="right">
                            <span className="iconfont">&#xe636;</span>
                        </NavItem>
                        <SearchWrapper>
                            <CSSTransition
                                in={this.props.focused}
                                timeout={200}
                                classNames="slide">
                                <NavSearch className={this.props.focused ? "focused":""}
                                        onFocus={this.props.handleInputFocus}
                                        onBlur={this.props.handleInputBlur}>
                                </NavSearch>
                                </CSSTransition>
                            <span className={this.props.focused ? "focused iconfont":"iconfont"}>&#xe62d;</span>
                          {this.getListArea(this.props.focused)}
                        </SearchWrapper>
                    </Nav>
                    <Addition>
                        <Button className="writting">
                            <span className="iconfont">&#xe61b;</span>
                            写文章
                        </Button>
                        <Button className="reg">注册</Button>
                    </Addition>
                </HeaderWrapper>
            )
        }
}

const mapStateToProps = (state) => {
    return {
        focused: state.get('header').get('focused'),
        list: state.getIn(["header","list"])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    handleInputFocus(){
        dispatch(actionCreators.getList());
        const action = actionCreators.searchFocus();
        dispatch(action);
    },

    handleInputBlur(){
        const action = actionCreators.searchBlur();
        dispatch(action);
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);