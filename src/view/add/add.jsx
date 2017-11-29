/**
 * Created by SONG on 2017/11/28.
 */
import React, {Component} from 'react'
import './index.css'
import {addUser} from '../../api/home'
import * as types from '../../store/action-types'
import {connect} from 'react-redux'
class AddUser extends Component {
    constructor(){
     super();
    }
    submit =(e)=>{
        //表单提交会自动刷新页面要阻止默认事件
        e.preventDefault();
        let name = this.refs.userName.value;
        let email = this.refs.userEmail.value;
        // console.log(userId, userName,userEmail);
        this.props.fetchAdd({name,email})
    };
    render() {
        return (
            <div className="content">
                <form onSubmit={this.submit} >
                <div className="inp">
                    <label htmlFor="userName">name:</label>
                    <input type="text"
                           required
                           maxLength='50'
                           ref="userName"
                          />
                </div>
                <div className="inp">
                    <label htmlFor="userEmail">邮箱:</label>
                    <input type="email"
                           required
                           maxLength='100'
                           ref="userEmail"
                    />
                </div>
                    <input type="submit" className="btn"/>
                </form>
            </div>
        )
    }
}
let mapStateToProps = state =>({
    ...state.home
});
let mapDispatchToProps = (dispatch) =>({
    fetchAdd:(user)=>{
        addUser(user).then(addList=>{
            console.log(addList);
            dispatch({
                type:types.FETCH_ADD,
                addList
            })
        })
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(AddUser)