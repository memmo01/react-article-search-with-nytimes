import React from "react";

// this component packages all top stories individually and send back to topstories page

class TopStorySort extends React.Component {
  render() {
    return (
      <div>
        <div className="card">
          <a href={this.props.story.url} target="_blank">
            <div className="card-header bg-info text-white">
              {this.props.story.section}
            </div>
            <div className="card-body">
              <blockquote className="blockquote mb-0">
                <h2>{this.props.story.title}</h2>
                <p>{this.props.story.abstract}</p>

                <footer className="blockquote-footer">
                  {this.props.story.subsection}
                </footer>
              </blockquote>
            </div>
          </a>
        </div>
      </div>
    );
  }
}

export default TopStorySort;
