import React from "react";
import OrganizeArticle from "./organizeArticle";

class FavoriteList extends React.Component {
  handleClick = e => {
    let articleId = e.target.dataset.id;

    this.props.handleRemove(articleId);
  };

  render() {
    let x;
    let num = 0;

    x = this.props.savedArticles.map(articles => {
      num++;

      const {
        web_url,
        pub_date,
        headline,
        snippet,
        byline,
        id,
        news_desk
      } = articles;

      if (num <= this.props.num) {
        return (
          <div>
            <div className="card">
              <a href={web_url} target="_blank">
                <div className="card-header">{news_desk}</div>

                <div className="card-body">
                  <blockquote className="blockquote mb-0">
                    <h2>{headline}</h2>
                    <p>{snippet}</p>
                    <footer className="blockquote-footer">
                      {byline} <cite title="Source Title">{pub_date}</cite>
                    </footer>
                  </blockquote>
                </div>
              </a>

              <div className="saveArticle">
                <button
                  type="button"
                  data-id={id}
                  onClick={this.handleClick.bind(this)}
                  className="btn btn-outline-danger"
                >
                  Remove Article
                </button>
              </div>
            </div>
          </div>
        );
      }
    });

    return <div>{x}</div>;
  }
}

export default FavoriteList;
