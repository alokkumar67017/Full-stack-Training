import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Create() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("https://6a866cf570fbbd308f97e28a.mockapi.io/Crud", {
        s_name: name,
        s_age: age,
        s_email: email,
      })
      .then(() => {
        alert("Data Created Successfully");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

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

        <div className="bg-primary text-white p-3 text-center">
          <h4>Create Data</h4>
        </div><br />

        <form onSubmit={handleSubmit}>

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
              value="Submit"
              className="btn btn-success"
            />
          </div>

        </form>
      </div>
    </div>
  );
}

export default Create;