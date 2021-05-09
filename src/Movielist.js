import React, { useEffect,useState } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import { fetchMovie } from './Redux';
import Modal from 'react-modal';
import ModalComponent from './ModalComponent';

const Movielist = (props) => {
    const [modalisOpen,setModalOpen]= useState(false);
    const movielist = useSelector(state => state.movies.movie);
      const [modalData,setModalData]=useState({});

    function handleModal(event,element)
    {
        event.preventDefault();
        setModalData(element);
        //console.log(event.target.id);
      if(!modalisOpen)
      {
          setModalOpen(true);
      }
        
    }
    //console.log(movie);

    return (
        <>
        <div className="card-list">
            {
                movielist.map((element,index) => (
                    <div className='card' id={index} onClick={(event)=>{handleModal(event,element)}}>
                        <img className="card--image" src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${element.poster_path}`} alt={element.title} />
                        <div className="card-content">
                            <h3 className="card-title">{element.title}</h3>  
                        </div>

                    </div>

                ))
            }

        </div>
        <ModalComponent modalisOpen={modalisOpen} modalData={modalData} setModalOpen={setModalOpen} setModalData={setModalData}/>
        </>
    )


};
// const mapStateToProps = state => {
//     return {
//         movie: state
//     }
// }
// const mapDispatchToProps = (dispatch, ownProps) => {
//     return {
//         fetchMovie: () => {
//             dispatch(fetchMovie());
//         }
//     }
// }

export default Movielist;