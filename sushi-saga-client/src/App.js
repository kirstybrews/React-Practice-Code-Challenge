import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import Form from './containers/Form';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    fourSushis: [],
    sushis: [],
    eatenSushis: [],
    budget: 100,
    showForm: false
  }

  componentDidMount() {
    fetch(API)
      .then(r => r.json())
      .then(sushis => {
        this.setState({
          fourSushis: sushis.filter(sushi => sushi.id < 5),
          sushis: sushis
        })
      })
  }

  moreSushi = () => {
    this.state.fourSushis[3].id < 100 ?
    this.setState({
      fourSushis: this.state.sushis.filter(sushi => sushi.id > this.state.fourSushis[3].id && sushi.id < (this.state.fourSushis[3].id + 5))
    })
    : 
    this.setState({
      fourSushis: this.state.sushis.filter(sushi => sushi.id < 5)
    })
  }

  moreMoney = (money) => {
    this.setState({
      budget: this.state.budget + (+money)
    })
  }

  eatMoreSushi = (sushi) => {
    if (this.state.budget - sushi.price >= 0) {
      this.setState({
        budget: this.state.budget - sushi.price,
        eatenSushis: [...this.state.eatenSushis, sushi]
      })
    }
  }

  showForm = () => {
    this.setState({
      showForm: !this.state.showForm
    })
  }

  render() {
    return (
      <div className="app">
        <button onClick={this.showForm}>Add more money</button>
        {this.state.showForm ? <Form moreMoney={this.moreMoney}/> : null}
        <SushiContainer eatenSushis={this.state.eatenSushis} eatMoreSushi={this.eatMoreSushi} sushis={this.state.fourSushis} moreSushi={this.moreSushi}/>
        <Table budget={this.state.budget} eatenSushis={this.state.eatenSushis}/>
      </div>
    );
  }
}

export default App;