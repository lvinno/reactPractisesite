import React, { Component } from 'react';
import { connect } from 'react-redux'
import { InfoWrapper } from '../style'


class Info extends Component {
    render(){
      return (
           <InfoWrapper>
               <img src="./static/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png" alt=""/>
               <p>下载简书和手机APP</p>
               <p>随时随地创作内容</p> 
           </InfoWrapper>
        )    
    }

    componentDidMount(){
        
    }
}

const mapState = (state) => ({
    loginStatus: state.getIn(['login','login'])
})

const mapDispatch = (dispatch) => ({
   
})

export default connect(mapState,mapDispatch)(Info);