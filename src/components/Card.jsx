import React from "react";
import { Link } from "react-router-dom";

function Card({blog}) {
  return (
    <>
    <Link to={`/blog/${blog._id}`}>
<div clLinkss="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden my-10">
  <div class="px-4 py-2">
    <h1 class="text-gray-900 font-bold text-3xl uppercase">{blog.title}</h1>
    <p class="text-gray-600 text-sm mt-1">{blog.subtitle}</p>
        <p class="text-gray-600 text-sm mt-1">{blog.description}</p>

  </div>
  <img class="h-56 w-full object-cover mt-2" src={blog.image}alt="NIKE AIR"/>
</div>
</Link>
    </>
  );
}

export default Card;
