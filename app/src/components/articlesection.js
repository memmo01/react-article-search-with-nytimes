import React from "react";
import OrganizeArticle from "./subcomponents/organizeArticle";
import Navigation from "./Navigation";

class ArticleSection extends React.Component {
  handleClick = articleId => {
    this.props.saveArticleData(articleId);
  };

  handleChange(page) {
    this.props.changePage(page);
  }

  render() {
    let individualArticle;

    if (this.props.articles) {
      individualArticle = this.props.articles.map(articles => {
        return (
          <OrganizeArticle
            saveArticleData={this.handleClick.bind(this)}
            key={articles.id}
            organize={articles}
          />
        );
      });
    }
    return (
      <div>
        {individualArticle}

        {this.props.showNav ? (
          <Navigation changePage={this.handleChange.bind(this)} />
        ) : null}
      </div>
    );
  }
}

export default ArticleSection;
