import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const FacultyDetail = () => {
  let params = useParams();
  const [Faculty, setFaculty] = useState({});
 
  useEffect(() => {
    fetch("https://62e7ab1e0e5d74566af96c99.mockapi.io/My/" + params.id,{
      method:"GET"
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setFaculty(res);
      });
  }, []);
  const navigate = useNavigate();

  return (
    <>
    <button className="btn btn-primary ms-3" onClick= {()=>{navigate("/facultiesname")}}>Back</button>
      <table className="m-5 ">
        <tr  >
          <td colSpan={2}>
            <img src={Faculty.FacultyImage} alt="image_address_not_valid" style={{width:100+'%'}} />
          </td>
        </tr>
        <tr>
          <td>Name </td>
          <td> : </td>
          <td>{Faculty.FacultyName}</td>
        </tr>
        <tr>
          <td>Mobile </td>
          <td> : </td>
          <td>{Faculty.Mobile}</td>
        </tr>
        <tr>
          <td>Email </td>
          <td> : </td>
          <td>{Faculty.Email}</td>
        </tr>
        <tr>
          <td colSpan={3} align="center">
          <button className="btn btn-success" onClick={()=>{
                navigate("/faculty/edit/"+params.id);
            }}>Edit</button>
          </td>
        </tr>
        <tr>
          <td colSpan={3} align="center">
          <button className="btn btn-danger" onClick={()=>{
              fetch("https://62e7ab1e0e5d74566af96c99.mockapi.io/My/" + params.id,{
                method:"DELETE"
              }).then(() => {
                navigate("/facultiesname");
              })
              
            }}>Delete</button>
          </td>
        </tr>
      </table>
      
    </>
  );
};
export default FacultyDetail;
