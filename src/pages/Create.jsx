import React, { useState } from "react";
import Navbar from "../components/Navbar";
import axios, { create } from "axios";
import { useNavigate } from "react-router-dom";

function Create() {
  const navigate = useNavigate()
  const [data, setdata] = useState({
    title: "",
    subtitle: "",
    description: "",
    image: "",
  });
  const handleChange = (e) => {
    // const value = e.target.value
    // const name = e.target.name
    const { name, value } = e.target;
    setdata({
      ...data,
      [name]: name === "image" ? e.target.files[0] : value,
    });
  };
const blogcreate = async(e)=>{
  e.preventDefault();
   const response = await axios.post('http://localhost:3000/blog',data,{
    headers:{
      "Content-Type": "multipart/form-data"
    }
   })
   
   console.log(response.status)
   if(response.status == 200){
    navigate("/")
   }
   else{
    alert("Fill all the details")
   }
}
  return (
    <>
      <Navbar />
      <form className="max-w-md mx-auto mt-20 p-6 bg-white border rounded-lg shadow-lg" onSubmit={blogcreate}>
        <h2 className="text-2xl font-bold mb-6">Create Blog</h2>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" for="name">
            Title:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="title"
            type="text"
            placeholder="Enter your title"
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" for="email">
            SubTitle:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="subtitle"
            type="text"
            placeholder="Enter your subtitle"
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" for="feedback">
            Description:
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="description"
            rows="5"
            placeholder="Enter your description"
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="mb-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="file"
            name="image"
            id="image"
            onChange={handleChange}
          />
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Submit
        </button>
      </form>
    </>
  );
}

export default Create;
