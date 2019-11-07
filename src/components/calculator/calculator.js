import React, { Component } from 'react';
import './calculator.css'
import Screen from '../screen/screen';
/* Main calculator component. Contains our other calculator components. */
class Calculator extends Component {
    render () {
        return (
            <div className="Calculator">
           <Screen/>
                </div>
        );
    }
}
export default Calculator;  

