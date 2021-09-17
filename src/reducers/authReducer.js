import { types } from "../types/types";

/* state =
    {
        uid: 'jsjdsd12123dsak3',
        name: 'Fernando'
    }
*/

export const authReducer = (state = { }, action) => {
    
    switch (action.type) {
    //Esto es por ->  dispatch(function(action))
        // Y la action tiene un type: types.xxxx
        case types.login:
            return {
                uid: action.payload.uid,
                name: action.payload.displayName
            }

        case types.logout:
            return {}

        default:
            return state;

    }
}