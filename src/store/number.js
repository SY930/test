

export const ADD = 'ADD'

// export function add (num) {
//     console.log('11111'+num);
//     return {
//     type: ADD,
//     payload: num,
//   }
// }


const initialState = 0;

export default function numberReducer (state = initialState, action) {
    // console.log(state, action.type,action.payload);
    return action.type === ADD ? state + action.payload : state
}
