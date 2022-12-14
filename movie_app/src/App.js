import React, {useState,useEffect} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';

//pages
import Movies from './Movies';
const api_search="https://api.themoviedb.org/3/search/movie?api_key=5598ac90398bc3c7dfd0af61b25733d9&query"

function App() {
  const [movies,setMovies] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(()=>{
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=5598ac90398bc3c7dfd0af61b25733d9")
      .then(res=> res.json())
      .then(data => {
        console.log(data)
        setMovies(data.results)
      })
     
  },[])

  const searchMovie = async(e)=>{
    e.preventDefault();
    console.log("Searching");
    try {
      const url='https://api.themoviedb.org/3/search/movie?api_key=5598ac90398bc3c7dfd0af61b25733d9&query=${query}';
      const res=await fetch(url);
      const data = await res.json();
      console.log(data);
      setMovies(data.results)
    } catch (e) {
      console.log(e)
    }
  }

    const changeHangler = (e) =>{
        setQuery(e.target.value)
    }
  return (
    <>
    <Navbar bg='dark' expand="lg" variant='dark'>
      <Container fluid>
        <Navbar.Brand href = "/home">Movie App</Navbar.Brand>
        <Navbar.Brand href = "/favorites">Favorites</Navbar.Brand>
        <Navbar.Toggle aria-controls='navbarScroll'>
        </Navbar.Toggle>
          <Navbar.Collapse id='navbarScroll'>
            <Nav
            className='me-auto my-2 my-lg-3'
            style={{maxHeight:'100px'}}
            navbarScroll></Nav>
            <Form className='d-flex' onSubmit={searchMovie}>
              <FormControl 
              type='serach'
              placeholder='Movie Search'
              className='me-2'
              aria-label='search'
              name='query'
              value={query}
              onChange={changeHangler}></FormControl>
              <Button variant='secondary' type='submit'>Search</Button>
            </Form>
          </Navbar.Collapse>
      </Container>
    </Navbar>
      <div className='container'>
        <div className='grid'>
          {movies.map((movie)=>
          <Movies key={movie.id} {...movie}/>)}
        </div>
      </div>
    
    </>
  );
}

export default App;
