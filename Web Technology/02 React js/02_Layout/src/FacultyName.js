import faculties from "./Facultydetail";

const FacultyName = () => {
  const AllFacultyName = faculties.map((fn) => {
    return <h5> {fn.FacultyName} </h5>;
  });

  return AllFacultyName;
};

export default FacultyName;
