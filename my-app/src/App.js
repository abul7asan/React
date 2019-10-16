import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { Now : new Date() }
  }
  componentDidMount() {
    this.Timer = setInterval( () => this.Tick() , 1000);
  }
  componentWillUnmount() {
    clearInterval(this.Timer);
  }
  Tick() {
    this.setState({ Now : new Date() });
  }
  render(){
    return (
      <div className="App">
      <header className="App-header">
        <h1>{ this.state.Now.toLocaleString() }</h1>
      </header>
    </div>
    )
  }
}

export default App;
