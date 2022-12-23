import "./App.css";
import React , {useState} from "react";
import "./blog.css";
import Navbar from "./components/Navbar";
import Blogs from "./components/Blogs";


function app() {
  const blogs = [{
    title: "Benefits of Coding",
    content: "Coding tests a variety of abilities. It hones problem-solving and analysis skills, such as finding errors and thinking logically",
    like:0,
  },

  {
    title: "Fifa World Cup 22",
    content: "Argentina has won the FIFA World Cup 2022 by defeating France in the Penalty shootout by 4-2, after the match was drawn at 3-3",
    like:0,
  },
  {
    title: "Coding interview",
    content: "Coding interviews test candidates' technical knowledge, coding ability, problem solving skills, and creativity, typically on a whiteboard.",
    like:0,
  },

  {
    title: "Fifa World Cup 22",
    content: "Argentina has won the FIFA World Cup 2022 by defeating France in the Penalty shootout by 4-2, after the match was drawn at 3-3",
    like:0,
  },
  {
    title: "Coding interview",
    content: "Coding interviews test candidates' technical knowledge, coding ability, problem solving skills, and creativity, typically on a whiteboard.",
    like:0,
  },

  ];


  return (
    <>
      <Navbar />
      <div className="grid-container">
        <Blogs blogs={blogs} />
      </div>

    </>

  )
}

export default app;