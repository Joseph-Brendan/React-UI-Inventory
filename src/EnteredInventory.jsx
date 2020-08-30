import React, { Component } from 'react'
import AllInventories from './AllInventories';
import './index.css'

class EnteredInventory extends Component {
    
    render() { 
        return ( 
            <div>
                <ul className="list-group mt-5 mb-5">
                    <h5 className="summary text-center mb-2">Summary Of Entered Items</h5>
                    <AllInventories />
                    <button className="btn btn-danger btn-block" type="submit">Delete All Inventory</button>
                </ul>
            </div>
         );
    }
}
 
export default EnteredInventory;