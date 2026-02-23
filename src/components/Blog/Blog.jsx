import React from "react";
import { FcBookmark } from "react-icons/fc";
//const Blog = (props) => {
const Blog = ({ blog, handleBookMark, handledMarkedRead }) => {
  //console.log(handleBookMark);
  // console.log(props.blog);
  //  const { blog } = props;
  //console.log(blog);
  return (
    <div className="m-2">
      <h1>{blog.id}</h1>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img src={blog.cover} alt="Shoes" />
        </figure>
        <div className="card-body">
          <div className="author flex items-center justify-around gap-2">
            <h3>{blog.author}</h3>

            <img className="w-15" src={blog.author_img} alt="" />
            <button onClick={() => handleBookMark(blog)}>
              <FcBookmark size={40} />
            </button>
          </div>
          <h2 className="card-title">{blog.title}</h2>
          <div className="flex">
            {blog.hashtags.map((has) => (
              <p>{has}</p>
            ))}
          </div>
          <div className="card-actions justify-end">
            <button
              onClick={() => handledMarkedRead(blog.reading_time, blog.id)}
              className="btn btn-primary"
            >
              Marked as Read
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
