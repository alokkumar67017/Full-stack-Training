import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Read() {
  const [apiData, setApiData] = useState([]);

  const navigate = useNavigate();

  const API_URL =
    "https://6a866cf570fbbd308f97e28a.mockapi.io/Crud";

  // READ
  const getData = () => {
    axios
      .get(API_URL)
      .then((response) => {
        setApiData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // DELETE
  const deleteData = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this data?"
    );

    if (confirmDelete) {
      axios
        .delete(`${API_URL}/${id}`)
        .then(() => {
          alert("Data Deleted Successfully");

          // Remove deleted item from UI
          setApiData(
            apiData.filter((item) => item.id !== id)
          );
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  // UPDATE USER
  const setDataToStorage = (id, name, age, email) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("age", age);
    localStorage.setItem("email", email);

   navigate(`/update/${id}`);
  };



  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="row">

      <div className="col-md-12">

        <div className="mb-3 mt-3">
          <Link to="/create">
            <button className="btn btn-primary">
              Create New Data
            </button>
            <br />
          </Link>
        </div>




        {/* <div className="bg-primary text-white p-3 text-center mb-3">
          <h4>Student Data</h4>
        </div> */}

        {/* <table className="table table-bordered table-striped table-dark table-hover"> */}
        <table className="student-table">
          <thead className="custom-thead">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>Email</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>

          <tbody>

            {apiData.map((item) => {
              return (
                <tr key={item.id}>

                  <td>{item.id}</td>

                  <td>{item.s_name}</td>

                  <td>{item.s_age}</td>

                  <td>{item.s_email}</td>

                  <td>
                    <button

                      className="btn btn-warning"
                      onClick={() => setDataToStorage(
                        item.id,
                        item.s_name,
                        item.s_age,
                        item.s_email,
                      )}
                    >
                      Edit
                    </button>
                  </td>

                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteData(item.id)}
                    >
                      Delete
                    </button>
                  </td>

                </tr>
              );
            })}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Read;
