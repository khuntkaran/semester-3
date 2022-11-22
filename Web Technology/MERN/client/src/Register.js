import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Register = () => {
    const navigate = useNavigate();
    const [otpmsg , setOtpmsg] = useState();
    const [user, setUser] = useState({
        firstname: "", lastname: "", email: "", gender: "", phone: "", age: "", password: "", confirmpassword: ""
    });
    const handleInput = (e) => { setUser({ ...user, [e.target.name]: e.target.value }); }




    const PostData = async (e) => {
        e.preventDefault();
       
        const { firstname, lastname, email, gender, phone, age, password, confirmpassword } = user;
        const res = await fetch("/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ firstname, lastname, email, gender, phone, age, password, confirmpassword })
        })
        const data = await res.json();

        if (res.status === 200) {
            window.alert("Registertion Successful");
            navigate('../');
        }
        else if (data.e === "unmatch") {
            window.alert("confirm password are not matched");
        }
        else if (data.e === "error" && data.keyPattern.email === 1) {
            window.alert("you email is already Registertion please try another email")
        }
        else if (data.e === "error" && data.keyPattern.phone === 1) {
            window.alert("you phone no is already Registertion please try another phone no")
        }
        else {
            window.alert("Register failed due to same error");
        }
    }
    return (
        <>
            <div class="container-fluid bg-info text-center ">
                <div id="recaptcha-container"></div>
                <div class="container py-5">
                    <div class="row justify-content-center ">
                        <div class="card  " >
                            <div class="card-body ">
                                <form onSubmit={(e)=>{
                                    var regex2 = new RegExp('^[0-9]{10}$');
                                    if( regex2.test(user.phone)){
                                        PostData(e);
                                    }
                                    else{
                                        window.alert("envalid phone no");
                                        e.preventDefault();
                                    }
                                }}  className="mb-3">

                                    <div class="card-title text-info h3">USER REGISTERTION</div>
                                    <div class="card-subtitle mb-2 text-muted">Please enter all details!</div>

                                    <div className="row">
                                        <div className="col-md-6"><div class="card-subtitle text-start mt-4 mb-2 h5 text-info">First Name</div>
                                            <input required name="firstname" type="text" class="form-control " placeholder="First Name" value={user.firstname} onChange={handleInput} />
                                        </div>
                                        <div className="col-md-6"><div class="card-subtitle text-start mt-4 mb-2 h5 text-info">Last Name</div>
                                            <input required name="lastname" type="text" class="form-control" placeholder="Last Name" value={user.lastname} onChange={handleInput} />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-6"><div class="card-subtitle text-start mt-4 mb-2 h5 text-info">Email</div>
                                            <input required name="email" type="email" class="form-control" placeholder="Email" value={user.email} onChange={handleInput} />
                                        </div>
                                        <div className="col-md-6"><div class="card-subtitle text-start mt-4 mb-4 h5 text-info">Gender</div>
                                            <div class="d-flex justify-content-around">
                                                <label><input required type="radio" name="gender" value="male" onChange={handleInput} />Male</label>
                                                <label><input required type="radio" name="gender" value="female" onChange={handleInput} />Female</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-6"> <div class="card-subtitle text-start mt-4 mb-2 h5 text-info">Phone No</div>
                                            <input required pattern="[0-9]{10}" name="phone" type="number" class="form-control" placeholder="Phone No" value={user.phone} onChange={handleInput} />
                                        </div>
                                        <div className="col-md-6"><div class="card-subtitle text-start mt-4 mb-2 h5 text-info">Age</div>
                                            <input required name="age" type="number" class="form-control" placeholder="Age" value={user.age} onChange={handleInput} />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-6">
                                            <div class="card-subtitle text-start mt-4 mb-2 h5 text-info">Password</div>
                                            <input required name="password" type="password" class="form-control" placeholder="Password" value={user.password} onChange={handleInput} />

                                        </div>
                                        <div className="col-md-6">
                                            <div class="card-subtitle text-start mt-4 mb-2 h5 text-info">confrim Password</div>
                                            <input required name="confirmpassword" type="password" class="form-control" placeholder="confrim Password" value={user.confirmpassword} onChange={handleInput} />
                                        </div>
                                    </div>

                                    <button style={{ textDecoration: "none", color: "black", fontSize: 20, fontFamily: "cursive" }} className="me-3 mt-3 btn btn-info" type="submit" >Register</button>
                                </form>
                                <Link to="../" className="">Go to Login</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register;