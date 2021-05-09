import{
    FETCH_MOVIE_REQUEST,
    FETCH_MOVIE_SUCCESS,
    FETCH_MOVIE_FAILURE,
    FETCH_PREV_MOVIE,
    FETCH_NEXT_MOVIE
} from './MovieTypes';

const initialState=
{
    loading:false,
    movie:[],
    error:''
}

const reducer=(state=initialState,action)=>
{
    switch(action.type)
    {
        case FETCH_MOVIE_REQUEST:
            return{
                ...state,loading:true
            }
        case FETCH_MOVIE_SUCCESS:
            return{
                loading:false,
                movie:action.payload,
                error:''
            }
        case FETCH_MOVIE_FAILURE:
            return{
                loading:false,
                movie:[],
                error:action.payload
            }
        
       
        default : return state;

    }
}

export default reducer;