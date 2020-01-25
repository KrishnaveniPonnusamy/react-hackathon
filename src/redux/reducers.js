import { combineReducers } from "redux";
import {hotels} from '../constants'

const initialState = {list: hotels};
const hotelsState = (state = {list: []}, action) => {
    switch(action.type) {
        case 'SET_HOTELS': 
            return initialState;
        case 'SEARCH':
            let updatedList = initialState.list;
            const {param} = action;
            if(param.name) {
                updatedList = updatedList.filter((hotel) => {
                    return hotel.name.toLowerCase().includes(param.name);
                })
            }
            if(param.city) {
                updatedList = updatedList.filter((hotel) => {
                    return hotel.city.toLowerCase().includes(param.city);
                })
            }
            if(param.rating) {
                updatedList = updatedList.filter((hotel) => {
                    return hotel.rating === param.rating;
                })
            }
            return { list: updatedList}
        default:
            return state;
    }
}

var rootReducer = combineReducers({hotelsState})
export default rootReducer;