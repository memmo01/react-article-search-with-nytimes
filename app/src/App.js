import React, { Component } from "react";
import "./App.css";
import Form from "./components/form";
import ArticleSection from "./components/articlesection";
import $ from "jquery";
import FavoriteList from "./components/favoriteList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      search: [],
      savedArticles: []
    };
  }

  componentDidMount() {
    this.showFavorites();
  }

  handleForm = info => {
    this.setState({
      search: info
    });
    let start = info.start;
    let end = info.end;
    let topic = info.article;
    this.queryApi(topic, start, end);
  };

  queryApi = (topic, start, end) => {
    let key = "9c50663a3f8a41f0aa37b27c629a17aa";

    fetch(
      `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${topic}&begin_date=${start}&end_date=${end}&api-key=${key}`
    )
      .then(results => results.json())
      .then(data => {
        this.setState({
          articles: data.response.docs
        });
        console.log(data);
      });
  };

  handleClick = articleId => {
    console.log(articleId);

    let index = this.state.articles.findIndex(id => {
      return parseInt(id._id, 10) === parseInt(articleId, 10);
    });

    this.loadToDatabase(this.state.articles[index]);
  };

  loadToDatabase = savedInfo => {
    //deconstructing object
    const { web_url, pub_date, snippet, news_desk } = savedInfo;
    const { print_headline } = savedInfo.headline;
    const { original } = savedInfo.byline;

    let data = {
      web_url: savedInfo.web_url,
      pub_date: savedInfo.pub_date,
      headline: savedInfo.headline.print_headline,
      snippet: savedInfo.snippet,
      byline: savedInfo.byline.original,
      news_desk: savedInfo.news_desk
    };
    console.log(data);

    $.ajax({
      method: "POST",
      url: "/api/addNewData",
      data: data
    })
      .then(() => {
        console.log("sent");
      })
      .fail(err => {
        throw err;
      })
      .then(() => {
        this.showFavorites();
      });
  };

  //displays the list of favorite articles
  showFavorites = () => {
    $.get("/api/favoriteList", data => {
      this.setState({
        savedArticles: data
      });
    });
  };

  //deleting data from the favorite list
  handleRemove = dataId => {
    // const { savedArticles } = this.state;

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
      <div className="App">
        <header>
          <h2 className="display-4">Search Articles</h2>
          {/* //this area will contain a title and a form for searching articles */}
          {/* at the top as an icon with counter or as a nav within the header will have an option
            for seeing saved articles. when clicked it will display all saved articles */}
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
              saveArticleData={this.handleClick.bind(this)}
              articles={this.state.articles}
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
