/**
 * Created by SONG on 2017/11/27.
 */
const HOST = 'https://www.mxcins.com';
export const get = (url) =>{
    return fetch (`${HOST}${url}`,{
        method:'get',
    }).then(res=>res.json())
};

export const remove = (id) =>{
    return fetch (`${HOST}${id}`,{
        method:'delete',
    }).then(res=>res.json())
}