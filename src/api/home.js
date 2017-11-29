/**
 * Created by SONG on 2017/11/27.
 */
import {get,remove,post} from './index'
export function getList() {
    return get('/api/users')
}

export function removeList(id) {
    return remove(`/api/users/${id}`)
}

export function addUser(user) {
    // console.log(user);
    return post('/api/users',user)
}

export function getOneList(id) {
   return get(`/api/users?id=${id}`)
}