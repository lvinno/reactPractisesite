import React, { Component } from 'react';
import { ListItem,ListInfo } from '../style' 
import { connect } from 'react-redux'

class List extends Component {
    render(){
        return (
            <div>
                 {
                this.props.list.map((item) => {
                    return (
                        <ListItem key={item.get("id")}>
                            <img className="pic" src={item.get("imgUrl")}  alt=""/>
                          <ListInfo>
                               <h3 className="title">{item.get("title")}</h3>
                               <p className="desc">{item.get("desc")}</p>
                          </ListInfo>
                        </ListItem>
                    )
                })    
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        list: state.getIn(["home","articleList"])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(List);