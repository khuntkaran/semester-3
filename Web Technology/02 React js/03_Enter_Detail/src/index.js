import { React, useState } from "react";
import { createRoot } from "react-dom/client";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
let isEdit = -1;

const Display = () => {
  let [Persion, setPersion] = useState([
    {
      PersionName: "karan",
      PersionAge: 19
    },
    {
      PersionName: "harsh",
      PersionAge: 20
    }
  ]);

  let [Detail, setDetail] = useState({});

  let formedPersion = Persion.map((pe, i) => {
    return (
      <tr>
        <td>{pe.PersionName}</td>
        <td>{pe.PersionAge}</td>
        <td>
          <button
            class="btn btn-primary"
            onClick={() => {
              isEdit = i;
              setDetail({
                ...Detail,
                PersionName: Persion[i].PersionName,
                PersionAge: Persion[i].PersionAge
              });
            }}
          >
            Edit
          </button>
        </td>
        <td>
          <button
            class="btn btn-danger"
            onClick={() => {
              Persion.splice(i, 1);
              setPersion([...Persion]);
            }}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  });
  return (
    <>
      <form>
        <table>
          <tr>
            <td>Enter Name</td>
            <td>:</td>
            <td>
              <input
                type="text"
                value={Detail.PersionName}
                onChange={(e) => {
                  setDetail({ ...Detail, PersionName: e.target.value });
                }}
              />
            </td>
          </tr>
          <tr>
            <td>Enter Age</td>
            <td>:</td>
            <td>
              <input
                type="text"
                value={Detail.PersionAge}
                onChange={(e) => {
                  setDetail({ ...Detail, PersionAge: e.target.value });
                }}
              />
            </td>
          </tr>
          <tr>
            <td colSpan="3" align="center">
              <input
                class="btn btn-success"
                type="submit"
                onClick={(e) => {
                  if (isEdit > -1) {
                    Persion[isEdit] = Detail;
                    isEdit = -1;
                  } else {
                    setPersion([...Persion, Detail]);
                  }
                  setDetail({ ...Detail, PersionAge: "", PersionName: "" });
                  e.preventDefault();
                }}
              />
            </td>
          </tr>
        </table>
      </form>
      <table border="1px">
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
        {formedPersion}
      </table>
    </>
  );
};
root.render(<Display />);
