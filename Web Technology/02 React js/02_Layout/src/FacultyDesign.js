import faculties from "./Facultydetail";
const FacultyDesign = () => {
  const design = faculties.map((fd) => {
    return (
      <>
        <div class="col-md-3">
          <div class="card">
            <img
              class="card-img-top"
              src={fd.FacultyImage}
              alt="Card image cap"
            />
            <div class="card-body">
              <h5 class="card-title">{fd.FacultyName}</h5>
              <p class="card-text">
                {fd.FacultyEducationQualification}
                <br />
                {fd.FacultyExperience}
                <br />
                {fd.FacultyWorkingSince}
              </p>
              <a href="#" class="btn btn-info">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </>
    );
  });
  return <div class="row">{design}</div>;
};
export default FacultyDesign;
