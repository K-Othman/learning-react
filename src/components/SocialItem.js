import React from "react";

function SocialItem(props) {
  return (
    <li className="li">
      <input type="checkbox" value="facebook" id={props.id} name="face" />
      <label htmlFor={props.id}>{props.media}</label>
    </li>
  );
}

export default SocialItem;
