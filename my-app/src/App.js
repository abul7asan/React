import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
                    Now         : new Date(),
                    Hours       : new Date().getHours(),
                    Minutes     : new Date().getMinutes(),
                    Seconds     : new Date().getSeconds(),
                    TabHours    : new Array(),
                    TabMinutes  : new Array(),
                    TabSecondes : new Array()
                 }
  }
  componentDidMount() {
    this.Timer = setInterval( () => this.Tick() , 1000);
  }
  componentWillUnmount() {
    clearInterval(this.Timer);
  }
  Tick() {
    this.setState({ 
                    Now : new Date(),
                    Hours : new Date().getHours(),
                    Minutes : new Date().getMinutes(),
                    Seconds : new Date().getSeconds(),
                    TabHours : this.getTable(new Date().getHours()),
                    TabMinutes : this.getTable(new Date().getMinutes()),
                    TabSecondes : this.getTable(new Date().getSeconds())
                  });
  }
  getTable(number){
    var tab = new Array();
    for(let i=0;i<=number;i++){
      tab.push(i);
    }
    return tab;
  }
  render(){
    const listHeures  = this.state.TabHours.map((number) =>
      <div class="one"></div>
    );
    const listMinutes = this.state.TabMinutes.map((number) =>
      <div class="one"></div>
    );
    const listSecondes = this.state.TabSecondes.map((number) =>
      <div class="one"></div>
    );
    return (
      <div className="App">
      <header className="App-header">
        <h1>{ this.state.Now.toLocaleString() }</h1>
        <div class="Heures">
          { listHeures }
        </div>
        <div class="Minutes">
          { listMinutes }
        </div>
        <div class="Secondes">
          { listSecondes }
        </div>
      </header>
    </div>
    )
  }
}

export default App;
