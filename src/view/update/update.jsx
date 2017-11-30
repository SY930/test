/**
 * Created by SONG on 2017/11/29.
 */
import React,{Component} from 'react'
import {connect} from 'react-redux'
import {getOneList,getUpdate} from '../../api/home'
import * as types from '../../store/action-types'
 class Update extends Component{
    constructor(){
        super();
        this.state={
            name:'',
            email:'',
            id:''
        }
    }

    componentDidMount(){
        let id = this.props.match.params.id;
        this.props.fetchOneList(id);
        let name1 = this.props.oneUser.name;
        let email1=this.props.oneUser.email;
        console.log(name1, email1);
        this.setState({
            name:name1,
            email:email1,
        })
    }
    submit=(e)=>{
        let id = this.props.match.params.id;
        e.preventDefault();
        let name = this.state.name;
        let email = this.state.email;
        // console.log(userId, userName,userEmail);
        this.props.fetchUpdate(id,{name,email})
    };

    render(){

        return (
            <div className="content">
                <form onSubmit={this.submit}>
                    <div className="inp">
                        <label htmlFor="userName">name:</label>
                        <input type="text"
                               required
                               maxLength='50'
                               value={this.state.name}
                               onChange={event=>this.setState({name:event.target.value})}
                        />
                    </div>
                    <div className="inp">
                        <label htmlFor="userEmail">邮箱:</label>
                        <input type="email"
                               required
                               maxLength='100'
                               value={this.state.email}
                               onChange={event=>this.setState({email:event.target.value})}
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
    fetchOneList:(id)=>{
        getOneList(id).then(oneList=>{
            dispatch({
                type:types.FETCH_ONE,
                oneList,
                id
            })
        })

    },
    fetchUpdate:(id,user)=>{
        getUpdate(id,user).then(updateList=>{
            dispatch({
                type:types.FETCH_UPDATE,
                updateList
            })
        })
    }
});
export default connect(mapStateToProps,mapDispatchToProps)(Update)