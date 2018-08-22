import React from "react";
import $ from "jquery";

class Welcome extends React.Component {
  render() {
    setTimeout(function() {
      $(".welcomeContainer").css("display", "none");
    }, 2000);
    return (
      <div className="welcomeContainer">
        <div className="welcome">welcome</div>
      </div>
    );
  }
}

export default Welcome;
