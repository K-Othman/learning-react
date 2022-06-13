import React from "react";
import SocialItem from "./SocialItem";

function Social() {
  return (
    <ul>
      <SocialItem media="Facebook" id="facebook" />
      <SocialItem media="Youtube" id="Youtube" />
      <SocialItem media="Instagram" id="Instagram" />
      <SocialItem media="Twitter" id="Twitter" />
    </ul>
  );
}

export default Social;
