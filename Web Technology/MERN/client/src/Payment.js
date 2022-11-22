import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const navigate = useNavigate();

  const [transaction, setTransaction] = useState({ to: "", balance: "" });

  const handleInput = (e) => { setTransaction({ ...transaction, [e.target.name]: e.target.value }); }

  const Pay = async (e) => {
    e.preventDefault();
    const from = user.phone;
    const { to, balance } = transaction;
    if (from !== to) {
      const res = await fetch('/pay', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ from, to, balance })
      })

      const data = await res.json();
      
      if (res.status === 200) {
        window.alert("success");
        navigate("../about")
      }
      else if (data.e === "not fiend") {
        window.alert("user not exsist in kkk bank");
      }
      else if (data.e === "transaction failed!!") {
        window.alert("transaction failed");
      }
      else {
        window.alert("Transaction failed due to some error!!!");
      }

    }
    else{
      window.alert("This number is you!!!!")
    }

  }

  const [user, setUser] = useState({});

  const callTransactionPage = async () => {

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
      if(res.status===200){
        setUser(data);
      }
      else{
        navigate('../../');
      }
    }
    catch (e) {
      navigate('../../');
    }
  }

  useEffect(() => {
    callTransactionPage()
  }, [])


  return (<>
    <div class="container-fluid  text-center mb-5 ">
      <div class="container pt-5">
        <div class="row justify-content-center ">
          <div class="card  " style={{ width: "21rem" }}>
            <div class="card-body ">
              <form onSubmit={(e)=>{
                                    var regex2 = new RegExp('^[0-9]{10}$');
                                    if( regex2.test(transaction.to)){
                                        Pay(e)
                                    }
                                    else{
                                        window.alert("envalid phone no");
                                        e.preventDefault();
                                    }
                                }} method="POST" className="mb-3">
                <div class="card-title text-info h3">Payment</div>
                <div class="card-subtitle mb-2 text-muted">Please enter phone no and amount!</div>
                <div class="card-subtitle text-start mt-4 mb-2 h5 text-info">phone no</div>
                <input required name="to" type="number" class="form-control" placeholder="phone no" value={setTransaction.to} onChange={handleInput} />
                <div class="card-subtitle text-start mt-4 mb-2 h5 text-info">amount</div>
                <input required name="balance" type="number" class="form-control mb-4" placeholder="amount" value={setTransaction.balance} onChange={handleInput} />
                {/* <div><a href="#" class="card-subtitle my-4 text-muted">Forgot Password?</a></div> */}
                <button style={{ textDecoration: "none", color: "black", fontSize: 20, fontFamily: "cursive" }} className="me-3  btn btn-info" type="submit">Pay</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>)
}

export default Payment;