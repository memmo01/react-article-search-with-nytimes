import React, { Component } from 'react';
import './App.css';
import Form from './components/form';
import ButtonList from './components/buttonList'

class App extends Component {
  constructor(){
    super()
    this.state=({
      articles:[]
    })
  }

  componentDidMount(){
    fetch('/api/try')
    .then(res=>res.json())
    .then(hero=> this.setState({heroes:hero}))

    
  }
  render() {

    // let x;
    // x=this.state.heroes.map(hero =>{
    //   return <IndividualHero key={hero.name} person={hero}/>
    // })
    return (
      <div className="App">
      <header>
          <h1 class="display-4"><u>New York Times Article Search</u></h1>
            {/* //this area will contain a title and a form for searching articles */}
            {/* at the top as an icon with counter or as a nav within the header will have an option
            for seeing saved articles. when clicked it will display all saved articles */}
            <div className="jumbotron searchOptions">
              <div className="searchSide">
                <Form/>
              </div>
              <div className="btnOptionSide">
                <ButtonList />
              </div>
            </div>
            
        </header>
        <section>

          </section>
      </div>
    );
  }
}

export default App;
