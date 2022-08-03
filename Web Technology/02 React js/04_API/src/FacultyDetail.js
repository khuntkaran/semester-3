import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const FacultyDetail = () => {
  let parmes = useParams();
  const [Faculty, setFaculty] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    fetch("https://62e7ab1e0e5d74566af96c99.mockapi.io/My/" + parmes.id)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setFaculty(res);
      });
  }, []);

  const navigateHome = () => {
    navigate("/facultiesname");
  };

  return (
    <>
      <table>
        <tr>
          <td>
            <img src={Faculty.FacultyImage} alt="asdf" />
          </td>
        </tr>
        <tr>
          <td>Name : </td>
          <td>{Faculty.FacultyName}</td>
        </tr>
        <tr>
          <td>Mobile : </td>
          <td>{Faculty.Mobile}</td>
        </tr>
        <tr>
          <td>Email : </td>
          <td>{Faculty.Email}</td>
        </tr>
      </table>
      <button onClick={navigateHome}>Back</button>
    </>
  );
};
export default FacultyDetail;
