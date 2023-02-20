import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const baseURL = "https://sticky-note-fe.vercel.app/";
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    age: "",
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const getUserData = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const addUser = async (e) => {
    e.preventDefault();
    setLoading(true);
    let { data } = await axios.post(baseURL + "signup", user);

    setLoading(false);
    if (data.message === "success") {
      // Navigate to login
      navigate("/login");
    } else {
      setError(data.message);
    }
  };

  return (
    <>
      <div className="container my-5 py-5">
        <div className="col-md-5 m-auto text-center">
          <form onSubmit={addUser}>
            <div className="form-group">
              <input
                placeholder="Enter your first name"
                name="first_name"
                type="text"
                className=" form-control"
                onChange={getUserData}
              />
            </div>
            <div className="form-group my-2 ">
              <input
                placeholder="Enter your last name"
                name="last_name"
                type="text"
                className="form-control"
                onChange={getUserData}
              />
            </div>
            <div className="form-group">
              <input
                placeholder="Enter email"
                type="email"
                name="email"
                className="form-control"
                onChange={getUserData}
              />
            </div>
            <div className="form-group my-2">
              <input
                placeholder="Enter you password"
                type="password"
                name="password"
                className=" form-control"
                onChange={getUserData}
              />
            </div>
            <div className="form-group my-2">
              <input
                placeholder="Enter you Age"
                type="number"
                name="age"
                className=" form-control"
              />
            </div>
            {loading ? (
              <button type="submit" className="btn btn-info w-100">
                lodaing ...
              </button>
            ) : (
              <button type="submit" className="btn btn-info w-100">
                SignUp
              </button>
            )}

            {error ? (
              <div className="alert alert-danger mt-2">{error}</div>
            ) : (
              ""
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
