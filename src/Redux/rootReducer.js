import {combineReducers} from 'redux';
import movieReducer from './Action/MovieReducer';


const rootReducer= combineReducers({
    movies:movieReducer
})

export default rootReducer;