import React from "react";
import Blog from "./Blog";

function Blogs(props){
    return(
        props.blogs.map( (b , i) => {
            return <Blog b={b} key={i}/>
        })
    )
}


export default Blogs;