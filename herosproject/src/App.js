import React, { Component } from 'react';
import './App.css';
import IndividualHero from './components/individual';

class App extends Component {
  constructor(){
    super()
    this.state=({
      heroes:[]
    })
  }

  componentDidMount(){
    fetch('/api/try')
    .then(res=>res.json())
    .then(hero=> this.setState({heroes:hero}))

    
  }
  render() {

    let x;
    x=this.state.heroes.map(hero =>{
      return <IndividualHero key={hero.name} person={hero}/>
    })
    return (
      <div className="App">
   {x}
      </div>
    );
  }
}

export default App;
