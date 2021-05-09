import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchMovie } from './Redux';

const SearchComponent = (props) => {
    const [data, setData] = useState('');
    const dispatch=useDispatch();
    function handleSubmit(event){

        event.preventDefault();
        
         dispatch(fetchMovie(data));

    }
      

    return (
        <form className="form" onSubmit={(event)=>{handleSubmit(event)}}>
            <label className="label" htmlFor="query">Movie</label>
            <input className="input" value={data} type="text" name="query" placeholder="Type to search for the movie" onChange={(event)=>{setData(event.target.value)}}></input>
            <button className="button" type="submit">Search</button>
        </form>

    );
};

export default SearchComponent;