import React from "react";
import OrganizeArticle from "./organizeArticle";

class ArticleSection extends React.Component {
  handleClick = articleId => {
    this.props.saveArticleData(articleId);
  };

  render() {
    let o;
    if (this.props.articles) {
      o = this.props.articles.map(articles => {
        return (
          <OrganizeArticle
            saveArticleData={this.handleClick.bind(this)}
            key={articles.id}
            organize={articles}
          />
        );
      });
    }
    return <div>{o}</div>;
  }
}

export default ArticleSection;
