import React from "react";
import $ from "jquery";

class OrganizeArticle extends React.Component {
  handleClick = (id, e) => {
    e.preventDefault();

    this.props.saveArticleData(id);
    $(`.${id}`).attr("class", "btn btn-outline-danger");
    $(`.${id}`).text("Article Saved");
    $(`.${id}`).attr("disabled", "disabled");
  };

  render() {
    // const { web_url, news_desk, snippet, _id, pub_date } = this.props.organize;
    // const { print_headline } = this.props.organize.headline;
    // const { original } = this.props.organize.byline;

    return (
      <div>
        <div className="card">
          <a href={this.props.organize.web_url} target="_blank">
            <div className="card-header bg-info text-white">
              {this.props.organize.news_desk}
            </div>
            <div className="card-body">
              <blockquote className="blockquote mb-0">
                <h2>{this.props.organize.headline.print_headline}</h2>
                <p>{this.props.organize.snippet}</p>

                <footer className="blockquote-footer">
                  {this.props.organize.byline.original}{" "}
                  <cite title="Source Title">
                    {this.props.organize.pub_date}
                  </cite>
                </footer>
              </blockquote>
            </div>
          </a>

          <div className="saveArticle">
            <button
              type="button"
              id={this.props.organize._id}
              onClick={this.handleClick.bind(this, this.props.organize._id)}
              className={`btn btn-outline-success ${this.props.organize._id}`}
            >
              save article
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default OrganizeArticle;
