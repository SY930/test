/**
 * Created by SONG on 2017/11/27.
 */

import *as types from './action-types'
const initState = {
    userList:[],
    removeList:[],
    addList:[],
    oneUser:{}
};

export default function(state=initState,action) {
    //console.log(action.userList);
    switch (action.type){
        case types.FETCH_LIST:
            return {...state,userList:action.userList};
        case types.FETCH_REMOVE:
           let userNewList =  state.userList.filter(item=>item.id!=action.id);
            return {...state,removeList:action.removeList,userList:userNewList};
        case types.FETCH_ADD:
            return {...state,addList:action.addList};
        case types.FETCH_ONE:
            let User = action.oneList.find(item=>item.id==action.id);
            console.log(User);
            return {...state,oneUser:User};
        case types.FETCH_UPDATE:
            return {...state,updateList:action.updateList}
        default:
            return state
    }
}