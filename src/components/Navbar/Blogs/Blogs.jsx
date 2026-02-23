import React, { useEffect, useState } from "react";
import Blog from "../../Blog/Blog";

const Blogs = ({ handleBookMark, handledMarkedRead }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      // .then((data) => console.log(data));
      .then((data) => setBlogs(data));
  }, []);

  //console.log(blogs);

  return (
    <div>
      <h1 className="text-2xl">Total : {blogs.length}</h1>
      <div className="all_blogs grid grid-cols-2">
        {blogs.map((blog) => (
          <Blog
            handledMarkedRead={handledMarkedRead}
            handleBookMark={handleBookMark}
            blog={blog}
          ></Blog>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
