import React from "react";
import FavoriteList from "../components/favoriteList";
import $ from "jquery";

class FavoritePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      savedArticles: []
    };
  }

  componentDidMount() {
    $.get("/api/favoriteList", data => {
      this.setState({
        savedArticles: data
      });
    }).then(() => console.log(this.state.savedArticles));
  }

  handleRemove = dataId => {
    let index = this.state.savedArticles.findIndex(article => {
      return parseInt(article.id, 10) === parseInt(dataId, 10);
    });

    let favId = this.state.savedArticles[index].id;
    let newFavList = this.state.savedArticles.splice(index, 1);

    this.setState({
      saveArticles: newFavList
    });

    $.ajax({
      method: "DELETE",
      url: `api/deleteFavorite/${favId}`
    });
  };

  render() {
    return (
      <div className="favPageSavedArticle">
        <h2 className="display-4">Saved Articles</h2>

        <FavoriteList
          savedArticles={this.state.savedArticles}
          handleRemove={this.handleRemove.bind(this)}
          num={this.state.savedArticles.length}
        />
      </div>
    );
  }
}

export default FavoritePage;
