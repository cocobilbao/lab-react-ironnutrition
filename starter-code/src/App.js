import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import foods from './foods.json'


import FoodBox from './components/FoodBox/FoodBox.js'
import Form from './components/Form/Form.js'



class App extends Component {

constructor () {
         super()
      this.state = {
        food: foods.map((food) => food)
      }

}

  render() {
    return (
      <div className="App">
       
       <Form/>
       
       {this.state.food.map(food => <FoodBox {...food}/>)}

      </div>
    );
  }
}

export default App;
