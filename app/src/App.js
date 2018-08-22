import React, { Component } from "react";
import "./App.css";
import Form from "./components/Form";
import ArticleSection from "./components/articlesection";
import FavoriteList from "./components/favoriteList";
import $ from "jquery";

import Welcome from "./components/Welcome";

class App extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      search: [],
      savedArticles: [],
      showNav: false
    };
  }

  // show favorited articles when component mounts
  componentDidMount() {
    this.showFavorites();
  }

  //displays the list of favorite articles
  showFavorites = () => {
    $.get("/api/favoriteList", data => {
      this.setState({
        savedArticles: data
      });
    });
  };

  handleForm = info => {
    this.setState({
      search: info,
      showNav: true
    });
    let start = info.start;
    let end = info.end;
    let topic = info.article;
    let page = this.state.page;
    this.queryApi(topic, start, end, 0);
  };

  // if page button is press this updates the ny time information to cahnge page forward or backward
  changePage(page) {
    let start = this.state.search.start;
    let end = this.state.search.end;
    let topic = this.state.search.article;
    this.queryApi(topic, start, end, page);
  }

  // takes information given to it an queries the nytime API for specific info

  queryApi = (topic, start, end, page) => {
    let key = "9c50663a3f8a41f0aa37b27c629a17aa";

    fetch(
      `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${topic}&begin_date=${start}&end_date=${end}&api-key=${key}&page=${page}`
    )
      .then(results => results.json())
      .then(data => {
        this.setState({
          articles: data.response.docs
        });
        console.log(data);
      });
  };

  // SAVES ARTICLES
  handleSave = articleId => {
    let index = this.state.articles.findIndex(id => {
      return parseInt(id._id, 10) === parseInt(articleId, 10);
    });

    this.loadToDatabase(this.state.articles[index]);
  };

  loadToDatabase = savedInfo => {
    let data = {
      web_url: savedInfo.web_url,
      pub_date: savedInfo.pub_date,
      headline: savedInfo.headline.print_headline,
      snippet: savedInfo.snippet,
      byline: savedInfo.byline.original,
      news_desk: savedInfo.news_desk
    };

    $.ajax({
      method: "POST",
      url: "/api/addNewData",
      data: data
    })
      .then(() => {
        console.log("data sent");
      })
      .fail(err => {
        throw err;
      })
      .then(() => {
        this.showFavorites();
      });
  };

  //deleting data from the favorite list
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
    }).fail(err => {
      throw err;
    });
  };

  render() {
    return (
      <div className="App">
        <Welcome />
        {/* Header holds the form input from the form component */}
        <header>
          <h2 className="display-4">Search Articles</h2>

          <div className="jumbotron searchOptions">
            <div className="searchSide">
              <Form searchRequest={this.handleForm.bind(this)} />
            </div>
          </div>
        </header>

        <section id="listArea">
          <div className="articleArea">
            <div className="alert alert-secondary" role="alert">
              <h3>Search Results:</h3>
            </div>
            <ArticleSection
              saveArticleData={this.handleSave.bind(this)}
              articles={this.state.articles}
              showNav={this.state.showNav}
              changePage={this.changePage.bind(this)}
            />
          </div>

          <div className="savedArea">
            <div className="jumbotron saved">
              <h2>Saved Articles</h2>
              <FavoriteList
                savedArticles={this.state.savedArticles}
                handleRemove={this.handleRemove.bind(this)}
                num={5}
              />
              <a href="/favorites">
                <div id="savedLink">View All Saved Articles</div>
              </a>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
