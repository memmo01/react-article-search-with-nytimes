import React from "react";
import moment from "moment";

class FavoriteList extends React.Component {
  handleClick = e => {
    let articleId = e.target.dataset.id;
    this.props.handleRemove(articleId);
  };

  render() {
    let article;
    let num = 0;

    article = this.props.savedArticles.map(articles => {
      num++;

      if (num <= this.props.num) {
        return (
          <div className="card">
            <a href={articles.web_url} target="_blank">
              <div className="card-header bg-info text-white">
                {articles.news_desk}
              </div>

              <div className="card-body">
                <blockquote className="blockquote mb-0">
                  <h2>{articles.headline}</h2>
                  <p>{articles.snippet}</p>
                  <footer className="blockquote-footer">
                    {articles.byline}{" "}
                    <cite title="Source Title">
                      {moment(articles.pub_date).format("MMM-DD-YYYY")}
                    </cite>
                  </footer>
                </blockquote>
              </div>
            </a>

            <div className="saveArticle">
              <button
                type="button"
                data-id={articles.id}
                onClick={this.handleClick.bind(this)}
                className="btn btn-outline-danger"
              >
                Remove Article
              </button>
            </div>
          </div>
        );
      } else {
        return null;
      }
    });

    return <div>{article}</div>;
  }
}

export default FavoriteList;
