import React from "react";
import "../blog.css";

function Blog(props) {
    return (
           <div className="grid-item">
           <h2 className="title">{props.b.title}</h2>
                <p className="content">{props.b.content}</p>
                <div class="btns">
                <button className="like">Like</button>
                <button className="dislike">Dislike</button>
                <p className="t-likes">Total likes {props.b.like*props.b.like}</p>
                </div>
                

              
                
           </div>   
    )
}

export default Blog;