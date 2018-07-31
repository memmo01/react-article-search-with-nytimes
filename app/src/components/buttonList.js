import React from "react";

class ButtonList extends React.Component {
  render() {
    return (
      <div>
        <a href="/favorites">
          <button type="button" class="btn btn-info">
            Saved Articles
          </button>
        </a>
        <br />
        <a href="/topstories">
          <button type="button" class="btn btn-secondary">
            Top Stories
          </button>
        </a>
        {/* <li>advaced search button</li> */}
      </div>
    );
  }
}

export default ButtonList;
