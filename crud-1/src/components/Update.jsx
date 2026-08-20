import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function Update() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  const { id } = useParams();

  const navigate = useNavigate();

  const API_URL =
    "https://6a866cf570fbbd308f97e28a.mockapi.io/Crud";

  // GET SINGLE DATA
  const getSingleData = () => {
    axios
      .get(`${API_URL}/${id}`)
      .then((response) => {
        setName(response.data.s_name);
        setAge(response.data.s_age);
        setEmail(response.data.s_email);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // UPDATE DATA
  const handleUpdate = (e) => {
    e.preventDefault();

    axios
      .put(`${API_URL}/${id}`, {
        s_name: name,
        s_age: age,
        s_email: email,
      })
      .then(() => {
        alert("Data Updated Successfully");

        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getSingleData();
  }, [id]);

  return (
    <div className="row">

      <div className="col-md-4 mx-auto">

        <div className="mb-2 mt-2">

          <Link to="/">
            <button className="btn btn-primary">
              Read Data
            </button>
          </Link>

        </div>

        <div className="bg-warning p-3 text-center">
          <h4>Update Data</h4>
        </div>

        <form onSubmit={handleUpdate}>

          <div className="form-group mt-3">

            <label>Enter Name:</label>

            <input
              type="text"
              placeholder="Enter your name"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

          </div>

          <div className="form-group mt-3">

            <label>Enter Age:</label>

            <input
              type="number"
              placeholder="Enter age"
              className="form-control"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />

          </div>

          <div className="form-group mt-3">

            <label>Enter Email:</label>

            <input
              type="email"
              placeholder="Enter your email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

          </div>

          <div className="d-grid mt-3">

            <input
              type="submit"
              value="Update"
              className="btn btn-warning"
            />

          </div>

        </form>

      </div>

    </div>
  );
}

export default Update;