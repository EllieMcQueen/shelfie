import React, { Component } from 'react';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
//import axios from 'axios';

//get inventory from database

class App extends Component{ 
  constructor(){
    super();
    this.state = {
      inventory: []
    }
  }
  
render(){ 
return (
<div className="App">
  <h1>Add Product</h1>
   
    <Form />
    <Dashboard />
    <Header />
   
</div>
);
}
}

export default App; 

  // constructor(props){
  //   super(props);
  //   this.state = {
  //     List: []
//     }
//     this.handleAddProduct = this.handleAddProduct.bind(this);
//   }
//    componentDidMount(){   
//      axios.get('/api/Products')
//      .then(res => {
//        this.setState({Products: res.data})
//       })
//       .catch(err => console.log(err));
//     }
//     handleAddProduct(product) {
//       axios.post('/api/Products', {product: product})
//       .then(res => {
//       this.setState({ list: [...this.state.list, product] });
//       })
//       .catch(err => console.log(err));
//     }

//   editName = (id, newName) => {
//     let body = {name: newName};

//     axios.put(`/api/Products/${id}`, body)
//     .then(res => {
//       this.setState({List: res.data})
//     })
//     .catch(err => console.log(err));
//   }
//   deleteProduct = (id) => {
//     axios.delete(`/api/Products/${id}`)
//     .then(res => {
//       this.setState({List: res.data})
//     })
//     .catch(err => console.log(err));
 
