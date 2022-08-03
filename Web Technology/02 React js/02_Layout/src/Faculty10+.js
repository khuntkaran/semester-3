import faculties from "./Facultydetail";

const Exp10Name = () => {
  const Exp10 = faculties.filter((exp) => {
    let expInNumber = parseInt(exp.FacultyExperience.split("+")[0]);
    return expInNumber > 10;
  });
  const Name = Exp10.map((fn) => {
    return <h5 class="bg-info"> {fn.FacultyName} </h5>;
  });
  return Name;
};
export default Exp10Name;
