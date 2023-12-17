import React from "react";

export default function PostItem(props) {
  return (
    <div>
      <div className="post">
        <div>
          {props.post.id} {props.post.title}
        </div>
        <div className="description"> {props.post.body}</div>
        <button className="post_btn">Удалить</button>
      </div>
    </div>
  );
}
