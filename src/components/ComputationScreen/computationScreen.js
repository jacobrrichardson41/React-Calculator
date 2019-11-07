import React, {Component } from 'react';
import './computationScreen.css';

class computationScreen extends Component {
    render() {

    
    return (
        <div className="ComputationScreen">
         {this.props.children}
         </div>

        );
      } 
    }
    export default computationScreen;