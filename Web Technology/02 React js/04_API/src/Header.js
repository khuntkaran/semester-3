import { Link } from "react-router-dom";

const Header = () => {
  const remove_link = {textDecoration:"none",color:"#4e5c51"}
  return (
    <>
      <nav class="navbar sticky-top  navbar-expand-lg  navbar-light"style={{backgroundColor:"#67a175"}}>
        <div class="container-fluid">
          <a style={remove_link} class="navbar-brand" href="#">Header</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link style={remove_link} className="nav-link"  to="./">Home</Link>
              </li>
              <li class="nav-item">
                <Link style={remove_link} className="nav-link"  to="./facultiesname">FacultyName</Link>
              </li>
              <li class="nav-item">
                <Link  style={remove_link} className="nav-link"  to="./faculty/add">FacultyAdd</Link>
              </li>
              <li class="nav-item dropdown">
                <a style={remove_link} class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown link
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <hr />
      <hr />
    </>
  );
};
export default Header;
