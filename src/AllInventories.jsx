import React, { Component } from 'react'

class AllInventories extends Component {
    
    render() { 
        return ( 
            <div>
                <li className="list-group-item d-flex mb-3 justify-content-between">
                    <p>First Inventory</p>
                    <div>
                        <i className="fa fa-pencil text-success mx-2" aria-hidden="true"></i>
                        <i className="fa fa-trash text-danger" aria-hidden="true"></i>
                    </div>
                </li>
            </div>
         );
    }
}
 
export default AllInventories;