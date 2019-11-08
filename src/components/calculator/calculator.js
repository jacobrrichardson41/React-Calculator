import React, { Component } from 'react';
import './Calculator.css'
import Screen from '../screen/screen';
import Keypad from '../Keypad/Keypad';

/* Main calculator component. Contains our other calculator components. */
class Calculator extends Component {

    /* Constructor function to set our intial state */
    constructor(props) {
        super(props);
        
        this.state = {
            equation: "",
            result: 0
        }
    }

    /*Function that is called when any of the keypad buttons are pressed */
    onButtonPress = (event) => {
        let equation = 
        this.state.equation;

        const pressedButtonValue =
        event.target.innerHTML;

        console.log(pressedButtonValue);

        if (pressedButtonValue === 'C') {
            this.clear();
            return;
        } else if ((pressedButtonValue >= '0' && pressedButtonValue <= '9') || pressedButtonValue === '.') {
            /*If the user has pressed a button with a value 0-9 or the period, add that value to the equation */
            equation += pressedButtonValue;
        }  else if (['+', '-', '*', '/', '%'].indexOf(pressedButtonValue) !== -1) {
            /* If the user has pressed a button with the value of an operator, add the operator to the equation with a space on either side */
            equation += ' ' + pressedButtonValue + ' ';
        } else if (pressedButtonValue === '=') {
            /*If the user hits the enter button, calculate stuff */
            /*Try to catch blocks -try to run the code in the try block. If it fails and throws an error, deal with it in the catch block */
            try {
                const evalResult = eval(equation);
                const result = Number.isInteger(evalResult) ?
                evalResult : evalResult.toFixed(2);
                this.setState({result});

            }catch (error){
            /* If an error occurs, print it to the console and alert the user */
            console.log(error); 
            alert("You have a virus, it is harming your computer please call us at 1800-000-0000 to resolve this issue or just check your equation");
            }

        }else {
            /* If the user has pressed the back arrow, remove the last character from the equation string */
            equation = equation.trim();
            equation = equation.substr(0,  equation.length - 1);
        }
        /* Update our state with the new version of the equation */
        this.setState({ equation });

    }

    clear()
 {
     this.setState({equation: '', result: 0});
 }
    render () {
        return (
            <div className="Calculator">
                <Screen equation={this.state.equation} result={this.state.result}/>
                <Keypad onButtonPress={this.onButtonPress}/>
            </div>
        );
    }
}
export default Calculator;  

