import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <h1>My Header</h1>
      <Link to="./">Home</Link> &nbsp;
      <Link to="./about">About</Link> &nbsp;
      <Link to="./contact">Contact</Link> &nbsp;
      <Link to="./facultyname">FacultyName</Link> &nbsp;
      <Link to="./exp10+">10+EXP</Link> &nbsp;
      <Link to="./facultydesign">FacultyDesign</Link> &nbsp;
      <hr />
      <hr />
    </>
  );
};

export default Header;
