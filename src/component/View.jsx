import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';

const View = () => {

const {id} = useParams();
// console.log("Param = ", param);


const[singleMovie, setSingleMovie] = useState("");

const getSingleData = async () => {
  const data = await axios.get(
    `http://www.omdbapi.com/?apikey=15983b1e&i=${id}`
  );
  console.log(`Single Data`, data);
  setSingleMovie(data?.data);
}

useEffect(() => {
  getSingleData();
}, [id])

  return (
    <>
      <div className="container-fluid detail-page ">
        <div className="row align-items-center justify-content-center">
        <div className="col-md-8 d-flex align-items-center justify-content-center">
          
          <div className="row align-items-center detail-page">
            <div className="col-md-5 d-flex flex-column align-items-start justify-content-center">
              <NavLink to='/'>
                <button type="button" class="btn btn-light mb-3">Back to Home</button>
              </NavLink>
              <div className='movie-inner-img'>
                <img src={singleMovie?.Poster} alt={singleMovie?.Title} className='img-fluid'/>
              </div>
            </div>
            <div className="col-md-6 offset-md-1">
              <h1 className='title--'>{singleMovie?.Title}</h1>
              <p className='ratings'> <i className="fa-solid fa-star pe-2"></i> {singleMovie?.imdbRating} </p>
              <p className='ratings'> {singleMovie?.Runtime} </p>
              <p className='text-light'> <span className='opacity-75'>  Released On  &nbsp;&nbsp;:&nbsp;&nbsp; </span> {singleMovie?.Released} </p>
              <p className='text-light'> <span className='opacity-75'>  Languages  &nbsp;&nbsp;:&nbsp;&nbsp; </span> {singleMovie?.Language} </p>
              <p className='text-light'> <span className='opacity-75'>  Genre  &nbsp;&nbsp;:&nbsp;&nbsp; </span> <span className="badge text-bg-warning fw-medium">{singleMovie?.Genre}</span> </p>
              <p className='description'> {singleMovie?.Plot} </p>
              <h5 className='text-light'> <span className='opacity-75'>  Actors  &nbsp;&nbsp;:&nbsp;&nbsp; </span>   {singleMovie?.Actors} </h5>
              <h5 className='text-light'> <span className='opacity-75'>  Director  &nbsp;&nbsp;:&nbsp;&nbsp; </span>   {singleMovie?.Director} </h5>
              <h5 className='text-light'> <span className='opacity-75'>  Writer  &nbsp;&nbsp;:&nbsp;&nbsp; </span>   {singleMovie?.Writer} </h5>
              <h5><span> <i className="fa-solid fa-award"></i> </span> <span className='text-light'>  &nbsp;&nbsp;:&nbsp;&nbsp; {singleMovie?.Awards}</span></h5>
              <h5 className='text-light'> <span className='opacity-75'>  <i className="fa-solid fa-sack-dollar"></i>  &nbsp;&nbsp;:&nbsp;&nbsp; </span>   {singleMovie?.BoxOffice} </h5>
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  )
}
export default View;