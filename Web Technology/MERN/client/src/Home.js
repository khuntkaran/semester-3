import { useEffect ,useState} from "react";
import { useNavigate } from "react-router-dom";
import screenimg from "./screen.jpg";
const Home = () => {
  const navigate = useNavigate();
  const [user , setUser] = useState({});

  const callHomePage=async ()=>{
    
    try{
      const res = await fetch('/authenticate',{
        method:"GET",
        headers:{
          Accept:"application/json",
          "Content-Type":"application/json"
        },
        credentials:"include"
      })

      const data= await res.json(); 
      if(res.status===200){
        setUser(data);
      }
      else{
        navigate('../../');
      }
    }
    catch(e){
      navigate('../../');
    }
  }
  
  useEffect(()=>{
    callHomePage()
  },[])
  return (
    <>
      <div className="container-fluid">
        <div className="container text-center my-5">
          <div className="h1">Welcome To <span className="text-info">KKK-Bank</span> {user.gender==="male"?"Mr.":"Mrs/Ms."} {user.firstname}  </div>

          <div>
            <div className="h2 mt-5">Money made simple, by <span className="text-info">KKK-Bank</span>.
            </div>
            <div className="h5">
              Built for India with all the features and rewards you love, plus much more.<br/>
              <span className="text-info">KKK-Bank</span> is the simplest way to send money home to your family, recharge your mobile, or pay the neighbourhood chaiwala.
            </div>
          </div>
          <div><img class="img-responsive" style={{ height: "41rem" }} src={screenimg} alt="screen"/></div>
          <div>
            <div className="h2 mt-5">The simple way to send or receive money with anyone<br/>
            </div>
            <div className="h5">
              Send or receive money with zero fees, straight from your bank account to almost anyone. You can send or receive money must contact is account in <span className="text-info">KKK-Bank</span>. Split lunch with a friend, pay the rent, or send money to mom.
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};
export default Home;
