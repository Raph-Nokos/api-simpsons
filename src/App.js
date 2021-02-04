import './App.css';
import React from 'react'
import axios from 'axios';
import Quote from './components/Quote';

const sampleQuote = {
  quote: "Last night's 'Itchy and Scratchy' was, without a d…tes, registering my disgust throughout the world.", 
  character: "Comic Book Guy", 
  image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FComicBookGuy.png?1497567511970"

};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      simpsonsQuote: sampleQuote
    };
    this.getQuote = this.getQuote.bind(this);
  }
  getQuote() {
    axios.get('https://simpsons-quotes-api.herokuapp.com/quotes')
      .then(response => response.data)
      .then(data => {
        this.setState({
          simpsonsQuote: data[0],
        });
        console.log(data[0])
    });
  }
  render () {
    return (
    <div className="App">
      <Quote simpsonsQuote={this.state.simpsonsQuote} />
      <button type="button" onClick={this.getQuote}>Get a new quote</button>
    </div>
    );
  }
}

export default App;
