import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const History = ()=>{
    const navigate = useNavigate();
  const [user, setUser] = useState([]);

  const callHistoryPage = async () => {

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
        setUser(data.transactions);
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
    callHistoryPage()
  }, [])

  const formtedhistory = user.reverse().map((fac)=>{

    const date = new Date(fac.date);
    const datemodified =date.getDate()+'-'+date.getMonth()+'-'+date.getFullYear();
    const timemodified = date.getHours()+':'+date.getMinutes()+':'+date.getSeconds();

    return(
        <>  
            <div className="col-md-4 d-flex justify-content-center">
                <div class="card  p-2 shadow" style={{width: 18+"rem"}} >
                <div className="row h5">
                    <div class="card-subtitle  col-6 d-inline  text-info">From : </div>
                    <div className=" col-6 d-inline ">{fac.from}</div>
                </div>
                <div className="row h5">
                    <div class="card-subtitle  col-6 d-inline text-info">To : </div>
                    <div className=" col-6 d-inline ">{fac.to}</div>
                </div>
                <div className="row h5">
                    <div class="card-subtitle  col-6 d-inline  text-info">Amount : </div>
                    <div className=" col-6 d-inline ">{fac.balance}</div>
                </div>
                <div className="row h5">
                    <div class="card-subtitle  col-6 d-inline  text-info">Date : </div>
                    <div className=" col-6 d-inline ">{datemodified}</div>
                </div>
                <div className="row h5">
                    <div class="card-subtitle  col-6 d-inline  text-info">Time : </div>
                    <div className=" col-6 d-inline "> {timemodified}</div>
                </div>
                </div>
            </div>
        </>
    )
}) 
return( 
    <>
        <div className="container my-5">
            <div className="row  g-4 ">
                {formtedhistory}
            </div>
        </div>
    </>
)}

export default History;