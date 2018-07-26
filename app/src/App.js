import React, { Component } from 'react';
import './App.css';
import Form from './components/form';
import ButtonList from './components/buttonList';
import ArticleSection from './components/articlesection';
import $ from 'jquery'
import FavoriteList from './components/favoriteList'


class App extends Component {
  constructor(){
    super()
    this.state=({
      articles:[],
      search:[],
      savedArticles:[]
    })
  }

  // componentDidMount(){
  //   fetch('/api/try')
  //   .then(res=>res.json())
  //   .then(hero=> this.setState({heroes:hero}))
    
  // }

  handleForm=(info)=>{
    this.setState({
      search:info
    })
    let start = info.start;
    let end = info.end;
    let topic = info.article;
    this.queryApi(topic, start, end)
  }

  queryApi=(topic, start, end)=>{
    let key ='9c50663a3f8a41f0aa37b27c629a17aa';
 
    fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${topic}&begin_date=${start}&end_date=${end}&api-key=${key}`)
    .then(results=> results.json())
    .then(data=>{
      this.setState({
        articles:data.response.docs
      })
     
    })
     
  }

    handleClick=(articleId)=>{

      let index = (this.state.articles.findIndex(id=>{return id._id == articleId}))
      
      this.loadToDatabase(this.state.articles[index])
    }
 // section name++
        //web_url
        // pub_date++
        //headline.print_headline++
        //snippet++
        //byline.original++
    loadToDatabase=(savedInfo)=>{
      console.log(savedInfo)

      let data ={
        web_url:savedInfo.web_url,
        pub_date:savedInfo.pub_date,
        headline:savedInfo.headline.print_headline,
        snippet:savedInfo.snippet,
        byline:savedInfo.byline.original
      }
    
      $.ajax({
        method:"POST",
        url:'/api/addNewData',
        data:data
      }).then(()=>{
        console.log("sent")
      })
    }



    showFavorites=()=>{

      $.get("/api/favoriteList",(data)=>{
        console.log(data)
        this.setState({
          savedArticles:data
        })
      })

    }

    handleRemove=(dataId)=>{
      let index =this.state.savedArticles.findIndex(article=>{return article.id == dataId})
     
      let favId=this.state.savedArticles[index].id
      let newFavList= this.state.savedArticles.splice(index,1);

      this.setState({
        saveArticles:newFavList
      })


      $.ajax({
        method:"DELETE",
        url:`api/deleteFavorite/${favId}`
      })

    }


  render() {

  
    return (
      <div className="App">
      <header>
          <h1 className="display-4"><u>New York Times Article Search</u></h1>
            {/* //this area will contain a title and a form for searching articles */}
            {/* at the top as an icon with counter or as a nav within the header will have an option
            for seeing saved articles. when clicked it will display all saved articles */}
            <div className="jumbotron searchOptions">
              <div className="searchSide">
                <Form searchRequest={this.handleForm.bind(this)}/>
              </div>
              <div className="btnOptionSide">
                <ButtonList showFavorites={this.showFavorites.bind(this)}/>
              </div>
            </div>
            
        </header>
        <section>

<FavoriteList savedArticles={this.state.savedArticles} handleRemove={this.handleRemove.bind(this)}/>
</section>
        <section>

        <ArticleSection saveArticleData={this.handleClick.bind(this)} articles={this.state.articles}/>
          </section>
          

      </div>
    );
  }
}

export default App;
