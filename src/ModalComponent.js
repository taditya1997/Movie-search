import React from 'react';
import Modal from "react-modal";
import { useSelector } from 'react-redux';
import './App.css';
Modal.setAppElement('#root')
//Modal.setAppElement(root);
// const customStyles = {
//     content: {
//         position: 'fixed',
//         top: '10%',
//         right: '10%',
//         bottom: '10%',
//         left: '10%',
//         padding: '10px',
//         boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
//         backgroundColor: 'white',
//         opacity: '0.9',
//         display: 'flex',
//         padding: '2.5rem',
//         flexDirection: 'row',
//         justifyContent: 'space-around'
//     },
//     image_section:
//     {

//     }


// };

const ModalComponent = ({ modalisOpen, modalData, setModalOpen, setModalData }) => {

    const movieData = useSelector(state=> state.movies.movie);
    const position=(movieData,modalData)=>
    {
        return movieData.findIndex((element)=>{
            return element.id===modalData.id
        })
        
        
    }
    let pos=position(movieData,modalData);
    function handlePrev(event) {
        //console.log(id);
        //console.log(movieData)
        event.preventDefault();
        if (pos >= 1) {
            
            const prev = pos - 1;
            const prevMovies = movieData[prev];
            //console.log(prevMovies)
            if (prevMovies != undefined) {
                setModalData(prevMovies);
               console.log(modalData)
            }
        }

    }
    function handleNext(event) {
        event.preventDefault();
        const next = pos + 1;
        const nextmovies = movieData[next];
        if (nextmovies != undefined) {
            setModalData(nextmovies);
        }
    }
function handleClose(event)
{
    event.preventDefault();
    setModalOpen(false);
}


    return (
        <>
            {modalisOpen && (
                <Modal isOpen={modalisOpen}  className="mymodal" overlayClassName="myOverlay" shouldCloseOnOverlayClick={false}>
                    <div className="prevButton">
                        <a href="#" className="previous round" onClick={(event) =>{handlePrev(event)}}>&#8249;</a>
                    </div>

                    <div className="image-div">
                        <img className="image" src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${modalData.backdrop_path}`} alt={modalData.title} />
                    </div>
                    <div className="description">
                        <div className="movie-title">
                            <h3>Movie Title</h3>
                            <h1 className="">{modalData.title}</h1>
                        </div>
                        <div className="release-date">
                            <h3>Release Date</h3>
                            <p>{modalData.release_date}</p>
                        </div>
                        <div className="movie-rating">
                            <h3>IMDB Rating</h3>
                            <p>{modalData.vote_average}</p>
                        </div>
                        <div className="overview">
                            <h3>Movie overview</h3>
                            <p>{modalData.overview}</p>
                        </div>
                    </div>
                    <div className="closebutton">
                        <button onClick={(event) =>handleClose(event)}>X</button>
                    </div>

                    <div className="nextButton">
                        <a href="#" className="next round" onClick={(event)=>{handleNext(event)}}>&#8250;</a>
                    </div>

                </Modal>
            )

            }
        </>

    );
};

export default ModalComponent;