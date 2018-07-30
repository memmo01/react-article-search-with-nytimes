import React from "react";
import $ from "jquery";

class ButtonList extends React.Component {
  render() {
    return (
      <div>
        <a href="/favorites">Saved Articles</a>

        <li>view top news today button</li>
        <li>advaced search button</li>
      </div>
    );
  }
}

export default ButtonList;
