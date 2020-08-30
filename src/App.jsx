import React, { Component } from 'react'
import EnterInventory from './EnterInventory';
import EnteredInventory from './EnteredInventory';
import 'bootstrap/dist/css/bootstrap.min.css'

class APp extends Component {
  
    render() { 
        return ( 
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-6 mx-auto">
                            <EnterInventory /> 
                        </div>
                        <div className="col-6 mx-auto">
                            <EnteredInventory />
                        </div>
                    </div>
                </div>
                
            </div>
         );
    }
}
 
export default APp;