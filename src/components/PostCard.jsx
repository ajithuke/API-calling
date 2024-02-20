import React from "react"

const PostCard = (props)=>{
    return (
        <div className="post-card">
            <h2 id='title'>{props.title}</h2>
            <h3 id="body">{props.body}</h3>
        </div>
    )
}

export default PostCard