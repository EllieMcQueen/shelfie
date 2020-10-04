import React, { Component } from 'react';

//methods
//handle change(one for each input)
//post new product to database
//clear input boxes

class Form extends Component{
    constructor(props){
        super(props);
        this.state = {
            isEditing: false,
            name:'',
            price: 0,
            imgurl: ''

        }
    }
    handleInput = (val, num, url) => {
        this.setState({name: val}, {price: num}, {imgurl: url} )
    }

    handleToggle = () => {
        this.setState({isEditing: !this.state.isEditing})
    }

    handleEdit = (id) => {
        this.props.nameFn(id, this.state.nameInput);
        this.handleToggle();
    }


    
    render(){
        return (
            <div>
                {this.state.isEditing
                ? (   
                <div> 
                <p>image URL:</p>
                <input
                    value={this.state.imgurl}
                    onChange={e => this.handleInput(e.target.value)}/>
                    
                <p>Product Name:</p>
                
                <input
                    value={this.state.name}
                    onChange={e => this.handleInput(e.target.value)}/>
                <p>Price:</p>
                
                <input
                    value={this.state.price}
                    onnChange={e => this.handleInput(e.target.value)}/>
                    <button onClick={() => this.handleEdit(this.props.form.id)}>Submit</button>
                </div>
            )
            : (
                <div>
                    
                    <button onClick={this.handleToggle}>Add to Inventory</button>
                </div>
            )}
            <button onClick={() => this.props.releaseFn(this.props.form.id)}>Cancel</button>
        </div>
                )
            }
}
    

export default Form;