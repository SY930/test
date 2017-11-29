/**
 * Created by SONG on 2017/11/27.
 */
import {get,remove} from './index'
export function getList() {
    return get('/api/users')
}

export function removeList(id) {
    console.log(id);
    return remove(`/api/users/${id}`)
}