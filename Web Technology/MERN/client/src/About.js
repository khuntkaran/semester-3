import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const About = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});

  const callAboutPage = async () => {

    try {
      const res = await fetch('/authenticate', {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        credentials: "include"
      })

      const data = await res.json();
      if (res.status === 200) {
        setUser(data);
      }
      else {
        navigate('../../');
      }
    }
    catch (e) {
      navigate('../../');
    }
  }

  useEffect(() => {
    callAboutPage()
  }, [])

  return (
    <>
      <div class="container-fluid  mb-5 ">
        <div class="container pt-5">
          <div class="row ">
            <div class="card  ">
              <div class="card-body ">
                <div class="card-title text-center text-info h1 mb-3">About Us</div>
                <div class="card-subtitle mb-2 text-center text-muted">Please Verify your detail!!</div>
                <div className="row ">
                    <div class="card-subtitle col-md-3 col-6 d-inline h3 text-info">First Name : </div>
                    <div className="h3 col-md-3 col-6 d-inline ">{user.firstname}</div>
                    <div class="card-subtitle col-md-3 col-6 d-inline h3 text-info">Last Name : </div>
                    <div className="h3 col-md-3 col-6 d-inline ">{user.lastname}</div>
                </div>

                <div className="row ">
                    <div class="card-subtitle col-md-3 col-6 d-inline h3 text-info">Email : </div>
                    <div className="h3 col-md-3 col-6 d-inline ">{user.email}</div>
                    <div class="card-subtitle col-md-3 col-6 d-inline h3 text-info">Gender : </div>
                    <div className="h3 col-md-3 col-6 d-inline ">{user.gender}</div>
                </div>
              

                <div className="row ">
                    <div class="card-subtitle col-md-3 col-6 d-inline h3 text-info">Phone No : </div>
                    <div className="h3 col-md-3 col-6 d-inline ">{user.phone}</div>
                    <div class="card-subtitle col-md-3 col-6 d-inline h3 text-info">Age : </div>
                    <div className="h3 col-md-3 col-6 d-inline ">{user.age}</div>
                </div>

                <div className="row ">
                    <div class="card-subtitle col-md-3 col-6 d-inline h3 text-info">Balance : </div>
                    <div className="h3 col-md-3 col-6 d-inline ">{user.balance}</div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
