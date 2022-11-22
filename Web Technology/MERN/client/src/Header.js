import { Link } from "react-router-dom";
import "./App.css";
const Header = () =>{
  //header change color
  
  return(
      <>
          <nav  className='navbar navbar-expand-lg p-0 shadow-5-strong container-fluid bg-info sticky-top' >
              <div class="container ">
                  <Link class="navbar-brand" to="">
                      <img src="android-chrome-192x192.png" alt="Logo" width="100%" height="60" class="d-inline-block align-text-top"/>
                  </Link>
                  <span style={{fontFamily:"fantasy"}} className="my-auto h1 text-light">BANK</span>
                  <button class="custom-toggler navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul class="navbar-nav ms-auto mb-2  mb-lg-0">
                          <li class="nav-item my-auto">
                          <Link active="true" className="me-3  header-link" to='./'>Home</Link>
                          </li>
                          <li class="nav-item my-auto">
                          <Link className="me-3 header-link"to="./about">About</Link>
                          </li>
                          <li class="nav-item my-auto">
                          <Link   className="me-3 header-link" to="./payment">Payment</Link>
                          </li>
                          <li class="nav-item my-auto">
                          <Link  className="me-3 header-link" to="./history">History</Link>
                          </li>
                          <li class="nav-item my-auto">
                          <Link  className="me-3 header-link" to="./Logout">Logout</Link>
                          </li>
                      </ul>
                  </div>
              </div>
          </nav>
        </>
  )
}
export default Header;
