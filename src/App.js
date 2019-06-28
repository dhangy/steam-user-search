import React from 'react';
import './App.css';
import { Search, Submit } from './search.js';

export class App extends React.Component{
//TEST STUFF 
constructor(props) {
  super(props);
  this.state = {
    name: '',
    greeting: ''
  };
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
}

handleChange(event) {
  this.setState({ name: event.target.value });
}

handleSubmit(event) {
  event.preventDefault();
  fetch(`/api/greeting?name=${encodeURIComponent(this.state.name)}`)
    .then(response => response.json())
    .then(state => this.setState(state));
}

//ACTUAL STUFF
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     vanityURL: "",
  //   }
  // }

  // hitApi = () => {
  
  // }
  
  // searchChange = (e) => {
  //   console.log(e.target.value);
  //   this.setState({vanityURL: e.target.value});
  // }

  // submitClick = async() => {

  // }

  render = () => {

  //TEST STUFF
  return (
    <div className="App">
      <header className="App-header">

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Enter your name: </label>
          <input
            id="name"
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <button type="submit">Submit</button>
        </form>
        <p>{this.state.greeting}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
   //ACTUAL STUFF 
  //   return (
  //     <div className="App">
  //       <h1>Hello!</h1>
  //       <Search change={(e) => this.searchChange(e) }/>
  //       <Submit click={ this.submitClick } />
  //     </div>
  //   )
   }
}

export default App;
