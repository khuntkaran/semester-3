import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <h1>Header</h1>
      <Link to="./">Home</Link>&nbsp;
      <Link to="./facultiesname">FacultyName</Link>&nbsp;
      <hr />
      <hr />
    </>
  );
};
export default Header;
