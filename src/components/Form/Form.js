import React, { Component } from 'react';
import axios from 'axios'

class Form extends Component{
    constructor(){
        super();
        this.state = {
        
            name:'',
            price: 0,
            imgurl: ''
        };
        this.addProduct = this.addProduct.bind(this)
        this.handleChange = this.handleChange.bind(this)

    }
    
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    clearInput = () => {
        this.setState({
            name: '',
            price: 0,
            imgurl: '',
        });
    }

    addProduct() {
        const { name, price, imgurl } = this.state
        axios.post(`/api/product`, {name, price, imgurl }).then ((response) => {
            this.setState({ inventory: response.data })
            this.props.getInventory ()
        });
    }
        
    componentDidUpdate(prevProps) {
        console.log(prevProps)
        const currentId = this.props.currentSelectedProduct.id
        const previousId = prevProps.currentSelectedProduct.id
        const { name, price, imgurl } = this.props.currentSelectedProduct
        console.log(currentId, previousId)
        if (currentId !== previousId) {
            this.setState({
                name: name,
                price: price,
                img: imgurl,
            });
        }
    }

    updateProduct = (id) => {
        const {name, price,imgurl} = this.state
        const body = { name, price, imgurl }

        axios.put(`/api/products/${id}`, body)
            .then(response => {
                this.setState({
                    inventory: response.data
                })
            }).catch(error => alert(error, 'Update not working, check back later'))
    }

    render() {
        console.log(this.props);
        return (
            <div className='App'>
                <p></p>
                <form className="form-container">   
                    <label> 
                        <p>Image Url:</p>
                        <input
                            value={this.state.imgurl}
                            type='text'
                            name='name'
                            onChange={this.handleChange}
                        ></input>
                    </label>
                    <label>
                        <p>Product Name</p>
                        <input
                            value={this.state.name}
                            type='text'
                            name='name'
                            onChange={this.handleChange}
                        ></input>
                    </label>
                    <label>
                            <p>Price:</p>
                            <input
                            value={this.state.price}
                            type='text'
                            name='price'
                            onChange={this.handleChange}
                            ></input>
                        </label>
                        <div className='form-btn-container'>
                            <button className='form-btn' onClick={this.clearInput}>
                                Cancel
                        </button>
                            <button
                                className='form-btn'
                                type='submit'
                                onClick={
                                    this.props.currentSelectedProduct.id
                                    ? () => this.updateProduct(this.props.currentSelectedProduct.id)
                                    : this.addProduct
                                }
                            >
                                {this.props.currentSelectedProduct.id
                                    ? 'Update Product'
                                    : 'Add to Inventory'}
                            </button>
                        </div>
                    </form>
                 </div>
                );
            }
        }
    
export default Form;