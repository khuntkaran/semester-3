import {BsFillTelephoneFill} from "react-icons/bs";
import {ImLocation} from "react-icons/im";
import {GrMail} from "react-icons/gr";
import {BsFacebook,BsTwitter,BsLinkedin,BsGoogle} from "react-icons/bs"
const Footer = () =>{
    return(
        <>
            <div className=" text-center p-3" style={{backgroundColor:"black",color:"red"}}>
               <h1>kkk-supercar.netlify.app</h1>
               <div className="container">
                <div class="row justify-content-center py-3 text-dark">
              <div class="col col-lg-8 col-xl-7 bg-white rounded-pill py-2">
              
                  <div class="d-inline ">
                    <a href="#" class="text-reset"><ImLocation/>
                      <span > 250-Feet,Ring-Road,Rajkot</span></a>
                  </div>
                  <div class="d-inline mx-2">
                    <a href="#" class="text-reset"><BsFillTelephoneFill/>
                      +91 8780471198</a>
                  </div>
                  <div class="d-inline">
                    <a href="#" class="text-reset"><GrMail/>
                      <span >khuntkaran995@gmail.com</span></a>
                  </div>
              </div>
            </div>
            <div class="row justify-content-center">
            <div class="col-4  mb-3">
              
                <div class="d-inline me-3 mx-5">
                  <a href="#"><BsFacebook/></a>
                </div>
                <div class="d-inline me-3">
                  <a href="#"><BsTwitter/></a>
                </div>
                <div class="d-inline me-3">
                  <a href="#"><BsLinkedin/></a>
                </div>
                <div class="d-inline ">
                  <a href="#"><BsGoogle/></a>
                </div>
            </div>
          </div>
            </div>
            </div>
        </>
    )
}

export default Footer;