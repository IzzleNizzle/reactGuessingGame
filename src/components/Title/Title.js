import React from "react";
import "./Title.css";

const Title = props => <h1 className="title">{props.children}
<p>Current Score: <span>{props.score}</span>Top Score: <span>{props.highScore}</span></p>
</h1>;

export default Title;
