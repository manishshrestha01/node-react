import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function Edit() {
  const { id } = useParams();
  console.log(id);
  const navigate = useNavigate();
  const [data, setdata] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setdata({
      ...data,
      [name]: name === "image" ? e.target.files[0] : value,
    });
  };

  const edit = async (e) => {
    e.preventDefault();
    const response = await axios.patch("http://localhost:3000/blog/" + id, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    if (response.status == 200) {
      navigate("/blog/" + id);
    } else {
      alert("Fill all the details");
    }
  };

  const fetchBlogs = async () => {
    const response = await axios.get("http://localhost:3000/blog/" + id);
    if (response.status == 200) {
      setdata(response.data.data);
    } else {
      alert("error");
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <>
      <Navbar />
      <form
        className="max-w-md mx-auto mt-20 p-6 bg-white border rounded-lg shadow-lg"
        onSubmit={edit}
      >
        <h2 className="text-2xl font-bold mb-6">Edit Blog</h2>
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
            value={data.title || ""}
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
            value={data.subtitle || ""}
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
            value={data.description || ""}
          ></textarea>
        </div>
        <div className="mb-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="file"
            name="image"
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

export default Edit;
