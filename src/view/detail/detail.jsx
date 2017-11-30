/**
 * Created by SONG on 2017/11/29.
 */
import React,{Component} from 'react'
import {connect} from 'react-redux'
import {removeList,getOneList} from '../../api/home'
import {Link} from 'react-router-dom'
import * as types from '../../store/action-types'
 class Detail extends Component{
    componentDidMount(){
            let id =this.props.match.params.id;
            this.props.fetchOneList(id)
    }
     remove=(e)=>{

         let id =e.target.getAttribute("data-id");
         //怎么在页面中删除
         this.props.fetchRemove(id)

     };
    render(){
        console.log(this.props);
        return (
            <div>
                <ul className="title">
                    <li className="list_title list">
                        <span>id</span>
                        <span>name</span>
                        <span>email</span>
                        <span>操作</span>
                    </li>
                        <li className="list_title" >
                             <span data-id={this.props.oneUser.id}>{this.props.oneUser.id}</span>
                            <span>{this.props.oneUser.name}</span>
                            <span>{this.props.oneUser.email}</span>
                            <span>
                          <a href="javaScript:;" data-id={this.props.oneUser.id} onClick={this.remove} >删除</a>
                          <Link to={`/update/${this.props.oneUser.id}`}>修改</Link>
                      </span>
                        </li>

                </ul>
            </div>
        )
    }
}
let mapStateToProps = state =>({
    ...state.home
});
let mapDispatchToProps = (dispatch) =>({
    fetchRemove:(id)=>{
        removeList(id).then(removeList=>{
            // console.log(removeList);
            dispatch({
                type:types.FETCH_REMOVE,
                removeList,
                id
            })
        })
    },
    fetchOneList:(id)=>{
        getOneList(id).then(oneList=>{
            console.log(oneList);
            dispatch({
                type:types.FETCH_ONE,
                oneList,
                id
            })
        })

    }
});
export default connect(mapStateToProps,mapDispatchToProps)(Detail)