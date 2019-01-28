import styled from "styled-components";
import logoPic from "../../static/logo.png";

export const HeaderWrapper = styled.div`
position: relative;
height:58px;
border-bottom:1px solid #f0f0f0;
`

export const Logo = styled.a.attrs({
    href:"/"
})`
position: absolute;
top: 0px;
left: 0px;
display:block;
width: 100px;
height: 56px;
background:url(${logoPic});
background-size: contain;
`
export const Nav = styled.div`
width: 960px;
height: 100%;
margin: 0 auto;
padding-right: 70px;
box-sizing: border-box;
`

export const NavItem = styled.div`
line-height: 56px;
padding: 0 15px;
font-size: 17px;
color #333;
&.left{
    float: left;
}
&.right{
    float: right;
    color: #969696;
}
&.active{
    color:#ea6f5a;
}
`

export const NavSearch = styled.input.attrs({
    placeholder:"搜索"
})`
width:160px;
height: 38px;
padding: 0 30px 0 20px;
margin-top: 9px;
margin-left: 20px;
border: none;
outline: none;
box-sizing: boder-box;
border-radius: 19px;
background:#eee;
color: #777;
font-size: 14px;
&::placeholder{
    color:#999;
}
&.focused{
    width: 240px;
}
`

export const Addition = styled.div`
position: absolute;
right: 0px;
top: 0px;
height: 56px;
`

export const Button = styled.div`
float: right;
line-height: 38px;
border-radius: 19px;
margin-top: 9px;
margin-right: 20px;
padding: 0 20px;
border: 1px solid #ea6f5a;
font-size: 14px;
&.reg {
    color:#ea6f5a;
}
&.writting {
    background-color:#ea6f5a;
    color: #fff;
}
`

export const SearchWrapper = styled.div`
float: left;
position: relative;

.slide-enter {
    transition: all 200ms ease-out;
}
.slide-enter-active {
    width: 240px;
}

.slide-exit {
    transition: all 200ms ease-out;
}

.slide-exit-active {
    width: 160px;
}

.zoom {
    position: absolute;
    right: 0px;
    bottom: 5px;
    width: 30px;
    line-height: 30px;
    border-radius: 15px;
    text-align: center;
    &.focused {
        background:#777;
        color: #fff;
        }
}
`

export const SearchInfo = styled.div`
position: absolute;
left: 0;
top: 56px;
width: 240px;
padding: 0 20px;
box-shadow: 0 0 8px rgba(0,0,0,0.2)
`

export const SearchInfoTitle = styled.div`
margin-top: 20px;
margin-bottom: 15px;
line-height: 20px;
font-size: 14px;
color: #969696;
`

export const SearchInfoSwitch = styled.span`
float: right;
font-size: 13px;
cursor: pointer;
.spin {
    display: block;
    float: left;
    font-szie: 12px;
    margin-right: 2px;
    transition: all 0.2s ease-in;
    transform: rotate(0deg);
    transition-origin: center center;
}
`
export const SearchInfoList = styled.div`
overflow: hidden;
`

export const SearchInfoItem = styled.a`
display: block;
float: left;
font-size: 12px;
padding: 0 5px;
border: 1px solid #ddd;
color: #787878;
border-radius: 2px;
margin-right: 10px;
margin-bottom: 15px;
`