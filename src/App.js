import React, { Component } from 'react';
import CardList from './components/card-list/CardList'; 
import SearchBox from './components/search-list/SearchBox';
import './App.css';
import './components/search-list/SearchBox.css'
import './components/card-list/CardList.css'
import './components/card/Card.css'

class App extends Component{
    constructor() {
      console.log('constructor')
      super()

      this.state = {
        monsters: [],
        searchField: ''
    };

  }

  componentDidMount() {
    console.log('componentDidMount')
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users)=> 
    this.setState(() => {
      return {monsters: users};
    }, 
    () => {
      console.log(this.state);
    }))
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();

    this.setState(() => {
      return {searchField}
    })
  }

  render() {
     console.log('render')

    const{monsters, searchField} = this.state;
    const{onSearchChange} = this

     const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });


    return (
      <div className="App">
      <h1 class='app-title'>Monsters Rolodex</h1>
      <SearchBox 
      className = 'monsters-search-box'
      onChangeHandler = {onSearchChange} placeholder = 'search monsters' />
      <CardList monsters={filteredMonsters} />
      </div>
    );

  }
   
}

export default App;
