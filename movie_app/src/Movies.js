import { Button, Modal } from 'react-bootstrap';
import React, { useState } from 'react';
import './App.css';

const Movies = ({title,poster_path,vote_average,vote_count,popularity,original_language,release_date,overview}) => {
    const api_img="https://image.tmdb.org/t/p/w500/"
    const [show,setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    return (
    <div className="card text-center bg-secondary mb-3">
        <div className='card-body'>
            <img className='card-img-top' src={api_img + poster_path}/>
            <div style={{marginTop:20,fontSize:20,fontWeight:600}}>{title}</div>
            <div style={{marginTop:20,fontSize:15,fontWeight:600}}> Release Date: {release_date}</div>
            <div style={{marginTop:20,fontSize:15,fontWeight:600}}>IMDB : {vote_average}</div>

            <div className='card-body'>
                <button type='button' className='btn btn-dark' onClick={handleShow}>View More</button>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <img className='card-img-top' style={{width:'29rem'}} src={api_img + poster_path}/>
                        <br/><br/>
                        <h3>{title}</h3>
                        <h4>IMDB: {vote_average}</h4>
                        <h5>Release Date : {release_date}</h5>
                        <br/>
                        <h5>Overview</h5>
                        <p>{overview}</p>
                        <br/>
                        <h5>Vote Count : {vote_count}</h5>
                        <h5>Popularity : {popularity}</h5>
                        <h5>Original Language : {original_language}</h5>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant='secondary' onClick={handleClose}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    </div>
    )
}

export default Movies;