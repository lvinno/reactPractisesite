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
padding: 0 20px;
margin-top: 9px;
margin-left: 20px;
border: none;
outline: none;
border-radius: 19px;
background:#eee;
font-size: 14px;
&::placeholder{
    color:#999;
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