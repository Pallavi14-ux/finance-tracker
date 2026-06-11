import { useState } from "react";

import { useNavigate }
from "react-router-dom";

import { registerUser }
from "../services/authService";

import { useAuth }
from "../context/AuthContext";


const Register = () => {

  const navigate = useNavigate();

  const { login } = useAuth();

  const [formData, setFormData] =
    useState({
      name: "",
      email: "",
      password: "",
    });


  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const data =
        await registerUser(formData);

      login(data);

      navigate("/");

    } catch (error) {
      console.log(error);
      alert("Registration failed");
    }
  };


  return (

    <div className="min-h-screen flex items-center justify-center">

      <div className="w-full max-w-md p-8 shadow-lg rounded-xl">

        <h1 className="text-3xl font-bold mb-6 text-center">
          Register
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >

          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />

          <button
            className="w-full bg-black text-white p-3 rounded-lg"
          >
            Register
          </button>

        </form>

      </div>

    </div>
  );
};

export default Register;