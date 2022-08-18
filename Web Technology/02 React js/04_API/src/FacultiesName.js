import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const FacultiesName = () => {
  const [faculties, setfaculties] = useState([]);
  useEffect(() => {
    fetch("https://62e7ab1e0e5d74566af96c99.mockapi.io/My")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setfaculties(res);
      });
  }, []);

  const formtedfaculties = faculties.map((fac,i) => {
    return (
      <>
        <h6 className="my-0">{i+1}. <Link style={{textDecoration:"none",color:"#70a5c2"}} to={"../faculty/" + fac.id}>{fac.FacultyName}</Link></h6>
        <br />
      </>
    );
  });
  return <>{formtedfaculties}</>;
};
export default FacultiesName;
