import React from "react";

export function Feed({ feed }) {
  return (
    <section className="feed flex">
      <div className="avatar-container">
        <img src={feed.avatarURL} />
      </div>
      <div className="text">
        <div className="email">{feed.email}</div>
        <div className="comment">{feed.comment}</div>
      </div>
    </section>
  );
}
