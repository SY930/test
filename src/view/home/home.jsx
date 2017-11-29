import React from 'react'
import store from '../../store'
// import * as Types from '../../store/number'
import {connect} from 'react-redux'
import {getList,removeList} from '../../api/home'
import * as types from '../../store/action-types'
import './index.css'
import {Link} from 'react-router-dom'
// import PropTypes from 'prop-types'

class HomeView extends React.Component {
  constructor(props) {
    super(...arguments)
    this.state = {
    }
  }
    componentDidMount(){
      this.props.fetchList();

    }
    remove=(e)=>{
        let id =e.target.getAttribute("data-id");
        //怎么在页面中删除
        this.props.userList.filter(item => item.id != id);
        console.log(this.props.userList);
        this.props.fetchRemove(id)

    };
  render () {

      return (
      <div>
          <Link to="/add" className="add">增加</Link>
          <ul className="title">
              <li className="list_title list">
                  <span>id</span>
                  <span>name</span>
                  <span>email</span>
                  <span>操作</span>
              </li>
              {this.props.userList.map((item,index)=>(
                  <li key={index} className="list_title" >
                      <span>{item.id}</span>
                      <span>{item.name}</span>
                      <span>{item.email}</span>
                      <span>
                          <a href="javaScript:;" data-id={item.id} onClick={this.remove} >删除</a>
                          <a href="javaScript:;">修改</a>
                      </span>
                  </li>
              ))}

          </ul>
          {/*{this.props.num}*/}
        {/*<button onClick={()=>this.props.add(1)}>+</button>*/}
      </div>
    )
  }
}
let mapStateToProps = state =>({
    ...state.home
});
let mapDispatchToProps = (dispatch)=>({
    // add:(num)=>dispatch({type:Types.ADD,payload: num}),
    fetchList:()=>{
            getList().then(userList=>{

                // console.log(userList);
                dispatch({
                    type:types.FETCH_LIST,
                    userList
                })
            })

    },
    fetchRemove:(id)=>{
        removeList(id).then(removeList=>{

            dispatch({
                type:types.FETCH_REMOVE,
                removeList
            })
        })
    }
});
export default connect(mapStateToProps,mapDispatchToProps)(HomeView)
