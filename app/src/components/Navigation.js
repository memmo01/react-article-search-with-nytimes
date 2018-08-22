import React from "react";

class Navigation extends React.Component {
  constructor() {
    super();
    this.state = {
      page: 0
    };
  }

  handleClick(nav, e) {
    e.preventDefault();

    nav === "next"
      ? this.setState({ page: this.state.page + 1 })
      : this.state.page >= 1
        ? this.setState({ page: this.state.page - 1 })
        : this.setState({ page: (this.state.page = 0) });

    this.update();
  }
  update() {
    this.props.changePage(this.state.page);
  }
  render() {
    return (
      <div class="btnNav">
        {" "}
        <button onClick={this.handleClick.bind(this, "back")}>back</button>
        <button onClick={this.handleClick.bind(this, "next")}>Next</button>
      </div>
    );
  }
}
export default Navigation;
