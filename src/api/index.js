/**
 * Created by SONG on 2017/11/27.
 */
const HOST = 'https://www.mxcins.com';
export const get = (url) =>{
    console.log(url);
    return fetch (`${HOST}${url}`,{
        method:'get',
    }).then(res=>res.json())
};

export const remove = (id) =>{
    return fetch (`${HOST}${id}`,{
        method:'delete',
    }).then(res=>res.json())
};

export const post = (url,body)=>{
    console.log(url, body);
    return fetch(`${HOST}${url}`,{
        method:'post',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(body)
    }).then(res=>res.json())
};

export const upDate = (url,body)=>{
    console.log(url);
    return fetch(`${HOST}${url}`,{
        method:'put',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(body)
    }).then(res=>res.json())
};