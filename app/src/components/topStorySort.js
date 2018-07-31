import React from "react";

class TopStorySort extends React.Component {
  render() {
    const { section, subsection, title, abstract, url } = this.props.story;
    return (
      <div>
        <div className="card">
          <a href={url} target="_blank">
            <div className="card-header bg-info text-white">{section}</div>
            <div className="card-body">
              <blockquote className="blockquote mb-0">
                <h2>{title}</h2>
                <p>{abstract}</p>

                <footer className="blockquote-footer">{subsection}</footer>
              </blockquote>
            </div>
          </a>
        </div>
      </div>
    );
  }
}

export default TopStorySort;
