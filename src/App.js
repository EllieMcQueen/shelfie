import React, { Component } from 'react';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import axios from 'axios';

class App extends Component{ 
  constructor(){
    super();
    
    this.state = {
      inventory: [],
      currentSelectedProduct: {}
    }
      
    
    this.getInventory = this.getInventory.bind(this);
    }
     
    componentDidMount(){   
      this.getInventory() 
     }

     getInventory(){
       axios.get(`/api/products`).then(response => {
         console.log(response)
         this.setState({ inventory: response.data })
       }).catch(error => alert(error, "All the stuff is missing."))
     }
    
     updateProduct = (product) => {
      this.setState({ currentSelectedProduct: product})
     }
      
render(){ 
return (
<div className="App">
    <Header />
    <Form currentSelectedProduct={this.state.currentSelectedProduct}/>
    <Dashboard inventory={this.state.inventory}
    nameFn={this.editName}
    releaseFn={this.releaseInventory} />
    
   
</div>
);
}
}

export default App; 