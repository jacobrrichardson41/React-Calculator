import React, {Component} from 'react';
import './screen.css';
import ResultsScreen from '../ResultsScreen /resultsScreen';
import computationScreen from '../ComputationScreen/computationScreen';


//Component that holds the results screen and calculation screen
class Screen extends Component {
    render() {
        return (
            <div className="Screen">
           <ResultsScreen>0</ResultsScreen>
           <computationScreen/>2+3<computationScreen/>
            </div>
              );
        }
    }
export default Screen;