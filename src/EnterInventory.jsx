import React, { Component } from 'react';
import "./index.css"

class EnterInventory extends Component {
    // google font awesome cdn
    constructor(){
        super()
        this.state = {
            enterInventory:'',
            enteredInventory: [],
            price: "",
            quantity:1,
            distributor:"",
            id: 0,
            itemEdit:false,
        }
        this.handleChange = this.handleChange.bind(this)
        this.handlePrice = this.handlePrice.bind(this)
        this.changeOption = this.changeOption.bind(this)
        
    }
    handleChange(event){
        this.setState({
            enterInventory:event.target.value
        })
    }
    handlePrice(event){
        this.setState({
            price:event.target.value
        })
    }
    changeOption(event){
        this.setState({
            distributor:event.target.value
        })
    }
   
    
    render() { 
        return ( 
            <div>
                <h5 className="enterClass">Enter Store Items</h5>
                <form>
                    <input  type="text" 
                    className="form-group input-group" 
                    value={this.state.enterInventory} 
                    onChange = {this.handleChange}
                    placeholder="Enter Items Here" />

                    <h6 className="mt-3">Quantity</h6>
                    <button  className="myButton mb-3 mr-5 btn btn-success"><i className="fa fa-plus-square-o" aria-hidden="true"></i></button>
                    <button  className="myButton mb-3 btn btn-danger"><i className="fa fa-minus" aria-hidden="true"></i></button>
                    <button className="mb-3 ml-5 btn btn-success">{this.state.quantity}</button>

                    <h6 className="mt-3">Price</h6>
                    <input  type="number" 
                    className="form-group input-group mb-4" 
                    value={this.state.price} 
                    onChange = {this.handlePrice}
                    placeholder="Enter Price Here" />

                    <h6 className="mt-3">Distributor</h6>
                    <select value={this.state.distributor} onChange={this.changeOption} className= "form-group input-group mb-4">
                        <option >Dangote</option>
                        <option >Innoson</option>
                        <option >Eleganza</option>
                    </select>

                    <button type="submit" className="btn btn-info btn-block">Enter</button>
                    
                </form>
            </div>
         );
    }
}
 
export default EnterInventory;