import React, { Component } from 'react';
import { LoginWrapper, LoginBox, Input, Button } from './style'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import { Redirect } from "react-router-dom"

class Login extends Component {
    render(){
        const { loginStatus } = this.props;
        if(loginStatus === false){
            return (
                <LoginWrapper>
                    <LoginBox>
                        <Input placeholder="账号" ref={(input)=>{this.account = input}}></Input>
                        <Input placeholder="密码" type='password' ref={(input)=>{this.password = input}}></Input>
                        <Button onClick={()=>{this.props.login(this.account,this.password)}}>
                            登陆
                        </Button>
                    </LoginBox>
                </LoginWrapper>
            )
        }else{
            return <Redirect to='/' />
        }
        
    }

    componentDidMount(){
        
    }
}

const mapState = (state) => ({
   loginStatus: state.getIn(['login',"login"])
})

const mapDispatch = (dispatch) => ({
   login(accountElem,passwordElem){
    console.log(accountElem,passwordElem)
    dispatch(actionCreators.login(accountElem.value,passwordElem.value))
   }
})

export default connect(mapState,mapDispatch)(Login);