import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import axios from "axios";

const Home = () => {
  const [blogs, setblogs] = useState([])
  const fetchBlogs = async () => {
    const response = await axios.get("http://localhost:3000/blog");
    console.log(response.data.data);
    setblogs(response.data.data)
  };
  useEffect(() => {
    fetchBlogs();
  }, []);
  console.log(blogs)
  return (
    <>
      <Navbar />
      <div className="flex m-20 flex-wrap ">
        {
          blogs.map(function(blog){
            return(
              <Card blog={blog}/>
            )
          })
        }
      </div>
    </>
  );
};

export default Home;
