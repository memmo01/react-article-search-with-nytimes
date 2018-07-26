import React, { Component } from 'react';
import './App.css';
import Form from './components/form';
import ButtonList from './components/buttonList';
import ArticleSection from './components/articlesection'


class App extends Component {
  constructor(){
    super()
    this.state=({
      articles:[],
      search:[]
    })
  }

  componentDidMount(){
    fetch('/api/try')
    .then(res=>res.json())
    .then(hero=> this.setState({heroes:hero}))
    
  }

  handleForm=(info)=>{
    this.setState({
      search:info
    })
    let start = info.start;
    let end = info.end;
    let topic = info.article
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
                <ButtonList />
              </div>
            </div>
            
        </header>

        <section>

        <ArticleSection articles={this.state.articles}/>
          </section>
      </div>
    );
  }
}

export default App;
