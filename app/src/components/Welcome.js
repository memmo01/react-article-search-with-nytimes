import React from "react";
import $ from "jquery";

class Welcome extends React.Component {
  // when user selects the understand button,the local storage is updated so they will not see the prompt again if they visit.
  handleClick() {
    localStorage.setItem("isShow", "1");
    $(".welcomeContainer").css("display", "none");
  }

  //   check local storage to see if user has visited site Before. If they have not then display a prompt talking about the site
  componentDidMount() {
    let x = localStorage.getItem("isShow");
    if (x == null) {
      $(".welcomeContainer").css("display", "block");
    }
  }
  render() {
    return (
      <div className="welcomeContainer">
        <div className="welcome">
          <div className="display-4">Welcome!</div>
          <p className="lead">
            It looks like you are new to this application. Thanks for trying it
            out! Below I have a list of what can be done on the site.
          </p>
          <hr />
          <ul>
            <li>
              Search Articles by inputing <strong>Topic</strong>,{" "}
              <strong>Start Date</strong> , <strong> End date</strong>
            </li>
            <li>
              You can save favorite articles by selecting{" "}
              <strong> Save Article</strong> button underneath each article.
              (Articles you save can be accessed on the right side of the main
              page or you can navigate to it by selecting{" "}
              <strong> Save Articles</strong> in the navigation bar at the top)
            </li>
            <li>
              To access the top stories today, just select the{" "}
              <strong> Top Stories</strong> link in the navigation bar at the
              top
            </li>
            <li>
              Any article can be accessed by simply click on it. You will be
              directed to the New York Times site.
            </li>
          </ul>
          <hr />
          <div className="lead">
            Have fun with the application and feel free to check out my other
            applications on github at{" "}
            <a href="https://github.com/memmo01">https://github.com/memmo01</a>!
          </div>
          <hr />
          <div className="instructionsBtn">
            <button
              type="button"
              onClick={this.handleClick}
              class="btn btn-success"
            >
              I Understand
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Welcome;
