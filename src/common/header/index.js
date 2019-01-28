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
        const { focused,list,page,mouseIn,totalPage,handleMouseEnter,handleMouseLeave,handleChangePage } = this.props;
        const newList = list.toJS();
        const pageList = [];
        if(newList.length){
            for(let i=(page-1) *10;i<page * 10;i++){
                pageList.push(
                    <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
                )
            }
        }
    if(focused || mouseIn){
        return ( 
            <SearchInfo onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
           <SearchInfoTitle>
               热门搜索
               <SearchInfoSwitch onClick={() => handleChangePage(page,totalPage,this.spinIcon)}>
               <span ref={(icon)=>{this.spinIcon = icon}}className="iconfont spin">&#xe612;</span>
               换一批</SearchInfoSwitch>
           </SearchInfoTitle>
            <SearchInfoList>
                {pageList}
           </SearchInfoList>
       </SearchInfo>
       )
    }else{
        return null;
    }
}
        render(){
            const { focused,handleInputBlur,handleInputFocus,list } = this.props;
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
                                in={focused}
                                timeout={200}
                                classNames="slide">
                                <NavSearch className={focused ? "focused":""}
                                        onFocus={()=>handleInputFocus(list)}
                                        onBlur={handleInputBlur}>
                                </NavSearch>
                                </CSSTransition>
                            <span className={focused ? "focused iconfont zoom":"iconfont zoom"}>&#xe62d;</span>
                          {this.getListArea(focused)}
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
        mouseIn: state.getIn(['header','mouseIn']),
        list: state.getIn(["header","list"]),
        page: state.getIn(["header","page"]),
        totalPage: state.getIn(["header","totalPage"])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    handleChangePage(page,totalPage,spin){
        let originAngle = spin.style.transform.replace(/[^0-9]/ig,'');
        if(originAngle){
            originAngle = parseInt(originAngle,10);
        }else{
            originAngle = 0;
        }
        spin.style.transform  = 'rotate('+(originAngle+360)+'deg)';

       if(page < totalPage){
            dispatch(actionCreators.changePage(page+1))
        }else{
            dispatch(actionCreators.changePage(1))
        }
    },
    handleMouseLeave(){
        dispatch(actionCreators.mouseLeave());
    },
    handleMouseEnter(){
        dispatch(actionCreators.mouseEnter())
    },
    handleInputFocus(list){
        if(list.size === 0){
            dispatch(actionCreators.getList());
        }
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