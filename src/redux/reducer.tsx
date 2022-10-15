import {TOGGLE, ActionTypes} from './actions'
import {Toggle} from './types'

function reducer(state: Toggle = {on: true}, action: ActionTypes){
    
    switch(action.type){
        case TOGGLE:
            return {
                ...state,
                on: action.payload
            }
        default:
            return state
    }
}

export default reducer