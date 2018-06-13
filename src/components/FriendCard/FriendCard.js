import React from "react";
import "./FriendCard.css";

const FriendCard = (props) => (
  <div className="card" onClick={() => props.handleClick(props.id)}>
    <div className="img-container">
      <img
        alt="SpongeBob"
        src={props.image}
      />
    </div>
    {/* <div className="content">
      <ul>
        <li>
          <strong>Name:</strong> {props.name}
        </li>
        <li>
          <strong>Occupation:</strong> {props.occupation}
        </li>
        <li>
          <strong>Location:</strong> {props.location}
        </li>
      </ul>
      <span onClick={() => props.randomizeFriends()} className="remove">
      𝘅
    </span> 
    <span onClick={() => props.resetState()} className="remove">
       𝘅
    </span>
    </div> */}
  </div>
);

export default FriendCard;
