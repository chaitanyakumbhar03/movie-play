import React from 'react';

const Navbar = () => {
  return (
    <>
        {/* <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <img src="/assets/logo.png" alt="" />
                </div>
            </div>
        </div> */}


<header className="p-3 text-bg-dark fixed-top">
    <div className="container-fluid">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
          <img src="/assets/logo_02.svg" alt="" className="bi me-2 img-fluid"/>
          <h1 className='logo-text mb-0'> Movie Play </h1>
          {/* <svg  width="40" height="32" role="img" aria-label="Bootstrap"><use xlink:href="#bootstrap"></use></svg> */}
        </a>

        <ul className="nav col-12 col-lg-auto ms-lg-auto mb-2 justify-content-center mb-md-0">
          <li><a href="#" className="nav-link px-4 fw-semibold fs-6 text-warning">Home</a></li>
          <li><a href="#" className="nav-link px-4 fw-medium fs-6 text-light">Top Rated</a></li>
          <li><a href="#" className="nav-link px-4 fw-medium fs-6 text-light">Upcoming</a></li>
          <li><a href="#" className="nav-link px-4 fw-medium fs-6 text-light">Profile</a></li>
        </ul>

        <div className="text-end">
          <button type="button" className="btn btn-outline-light me-2">Login</button>
          <button type="button" className="btn btn-warning">Sign-up</button>
        </div>
      </div>
    </div>
  </header>


    </>
    
  )
}
export default Navbar;