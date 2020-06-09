import React from "react";
//import './Card.css';

function User(props) {
  return (
    <div>
      <div>
        <img src={props.avatar} alt="user avatar" />
        <h4>{props.name}</h4>
        <p>{props.location}</p>
      </div>
    </div>
  );
}

export default User;
