import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
    const [movieAllData, setMovieAllData] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [searchKeyword, setSearchKeyword] = useState('movie');
    const [isDataAvailable, setIsDataAvailable] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(false);

    const getMovieData = async (page = 1) => {
        setLoading(true);
        try {
            // Add a 5-second delay before making the API call
            await new Promise((resolve) => setTimeout(resolve, 1000));

            const { data } = await axios.get(
                `http://www.omdbapi.com/?apikey=15983b1e&s=${searchKeyword}&page=${page}`
            );
            if (data?.Response === "True") {
                setMovieAllData(prevMovies => [...prevMovies, ...data?.Search]);
                setIsDataAvailable(true);
            } else if (data?.Response === "False") {
                setIsDataAvailable(false);
            }
        } catch (error) {
            console.log("Error fetching data: ", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        setMovieAllData([]); // Clear existing results
        setCurrentPage(1); // Reset current page
        getMovieData(); // Fetch new data
    }, [searchKeyword]);

    useEffect(() => {
        const handleScroll = () => {
            if (
                window.innerHeight + document.documentElement.scrollTop
                !== document.documentElement.offsetHeight || loading
            ) {
                return;
            }
            setCurrentPage(prevPage => prevPage + 1);
            getMovieData(currentPage + 1);
            
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [currentPage, loading]);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSearch = () => {
        setSearchKeyword(inputValue);
    };
    return (
        <>
            <div className="container-fluid mt-5">
                <div className="row mt-5">
                    <div className="col-4 mt-5">
                        <div>
                            <h1 className='text-light mt-5'>Watch Here Your Favourite</h1>
                            <p className='text-light'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore vel porro voluptatum tenetur eaque neque iste sint! Hic ad ducimus, eum modi rerum, Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore vel porro voluptatum tenetur eaque neque iste sint! Hic ad ducimus, eum modi rerum, ipsum dolores saepe natus aliquid deleniti vero.</p>
                        </div>
                        <div className='d-flex gap-2'>
                            <input
                                type="text"
                                value={inputValue}
                                onChange={handleInputChange}
                                className='input-field w-75 border-0 rounded p-2'
                                placeholder='Search your favourite......'
                            />
                            <button className='w-25 border-0 rounded' onClick={handleSearch}>Search</button>
                        </div>
                    </div>
                </div>
                <div className="row mt-5 all-listing">
                    {isDataAvailable ? movieAllData?.map((movie) => (
                        <div className="col-md-2" key={movie?.imdbID}>
                            <NavLink className="text-decoration-none" to={`/view/${movie?.imdbID}`}>
                                <div className="card">
                                    <div className="img-wrapper">
                                        <img src={movie?.Poster} className="card-img-top img-fluid" alt="movie-img" />
                                    </div>
                                    <div className="card-body">
                                        <h2 className="title">{movie?.Title}</h2>
                                        <h4 className="release-date"> Release Date : {movie?.Year}</h4>
                                    </div>
                                    <button type="button" className="btn btn-outline-dark mx-2 mb-2">Know More</button>
                                    
                                </div>
                            </NavLink>
                        </div>
                    )) : <h1 className='text-danger fs-1'>No Result Found</h1>}
                </div>
                {loading && 
                <div className="d-flex justify-content-center my-5">
                    <div className="lds-ellipsis">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                }
            </div>
        </>
    );
};

export default Home;
