import React, {Component} from 'react';
import KeypadRow from '../KeypadRow/KeypadRow';
import Button from '../Button/Button';

class Keypad extends Component {
    render() {
        return (
            <div className="Keypad">
                {/*fila uno*/}
            <KeypadRow>
                <Button onButtonPress={this.props.onButtonPress} type='primary'>C</Button>
                <Button onButtonPress={this.props.onButtonPress}>&larr;</Button>
                <Button onButtonPress={this.props.onButtonPress}>%</Button>
                <Button onButtonPress={this.props.onButtonPress}>/</Button>
            </KeypadRow>

                {/*Fila dos*/}
             <KeypadRow>
                 <Button onButtonPress={this.props.onButtonPress}>7</Button>
                 <Button onButtonPress={this.props.onButtonPress}>8</Button>
                 <Button onButtonPress={this.props.onButtonPress}>9</Button>
                 <Button onButtonPress={this.props.onButtonPress}type='operator'>*</Button>
             </KeypadRow>

                {/*fila tres*/}
             <KeypadRow>
             <Button onButtonPress={this.props.onButtonPress}>4</Button>
             <Button onButtonPress={this.props.onButtonPress}>5</Button>
             <Button onButtonPress={this.props.onButtonPress}>6</Button>
             <Button  onButtonPress={this.props.onButtonPress}type='operator'>-</Button>
             </KeypadRow>

                {/*fila cuatro*/}
             <KeypadRow>
             <Button onButtonPress={this.props.onButtonPress}>1</Button>
             <Button onButtonPress={this.props.onButtonPress}>2</Button>
             <Button onButtonPress={this.props.onButtonPress}>3</Button>
             <Button onButtonPress={this.props.onButtonPress} type='operator'>+</Button>
             </KeypadRow>

                {/*fila cinco */}
             <KeypadRow>
             <Button onButtonPress={this.props.onButtonPress}>0</Button>
             <Button onButtonPress={this.props.onButtonPress}>.</Button>
             <Button onButtonPress={this.props.onButtonPress} type="large">=</Button>
             </KeypadRow>
            </div>
        );
    }
}
export default Keypad;