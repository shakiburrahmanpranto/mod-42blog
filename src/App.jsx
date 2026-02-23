import { useState } from "react";
import "./App.css";
import Blogs from "./components/Navbar/Blogs/Blogs";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [bookmarked, setBookmarked] = useState([]);
  const [readingCount, setReadingCount] = useState(0);

  const handleBookMark = (blog) => {
    //  console.log(blog);
    // console.log(blog);
    setBookmarked([...bookmarked, blog]);
  };

  //console.log(bookmarked);

  const handledMarkedRead = (time, id) => {
    //   console.log("hello boss");
    // console.log(time);
    const newTime = readingCount + time;
    setReadingCount(newTime);
    //console.log(id);
    handleRemoveBookmarked(id);
  };

  console.log(readingCount);

  const handleRemoveBookmarked = (id) => {
    const remainingBookmarked = bookmarked.filter((mark) => mark.id !== id);
    //  console.log(remainingBookmarked);
    setBookmarked(remainingBookmarked);
  };

  return (
    <>
      <Navbar></Navbar>

      <div className="main_container flex text-center">
        <div className="left_container w-[70%]">
          <Blogs
            handledMarkedRead={handledMarkedRead}
            handleBookMark={handleBookMark}
          ></Blogs>
        </div>
        <div className="right_container w-[50%]">
          <h1>Reading time : {readingCount}</h1>
          <h1>Bookmarked count : {bookmarked.length}</h1>

          {bookmarked.map((marked) => (
            <p className="bg-fuchsia-950 p-2 m-2 shadow">{marked.title}</p>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
