/**
 * Created by SONG on 2017/11/27.
 */

import *as types from './action-types'
const initState = {
    userList:[],
    removeList:[]
};

export default function(state=initState,action) {
    console.log(action.userList);
    switch (action.type){
        case types.FETCH_LIST:
            return {...state,userList:action.userList};
        case types.FETCH_REMOVE:
            return {...state,removeList:action.removeList}
        default:
            return state
    }
}