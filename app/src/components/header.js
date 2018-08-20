import React from "react";
// this component is the header displayed on each page providing navigation
class Header extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
          <span className="navbar-brand mb-0 h1">
            New York Times Application
          </span>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Article Search
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/topstories">
                Top Stories
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/favorites">
                Saved Articles
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;
