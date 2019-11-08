import React, {Component} from 'react';
import './screen.css';
import ResultsScreen from '../ResultsScreen /resultsScreen';
import ComputationScreen from '../ComputationScreen/ComputationScreen';


//Component that holds the results screen and calculation screen
class Screen extends Component {
    render() {
        return (
            <div className="Screen">
           <ResultsScreen>{this.props.result}</ResultsScreen>
           <ComputationScreen>{this.props.equation}</ComputationScreen>
            </div>
              );
        }
    }
export default Screen;