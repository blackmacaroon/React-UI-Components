import React from 'react';
import './Button.css';

const ClearButton = {
      buttonStyle: 'numberButton',
      text: 'clear'
};
const SevenButton = {
    buttonStyle: 'numberButton',
    text: '7'
};
const EightButton = {
    buttonStyle: 'numberButton',
    text: '8'
};
const NineButton = {
    buttonStyle: 'numberButton',
    text: '9'
};
const FourButton = {
    buttonStyle: 'numberButton',
    text: '4'
};
const FiveButton = {
    buttonStyle: 'numberButton',
    text: '5'
};
const SixButton = {
    buttonStyle: 'numberButton',
    text: '6'
};
const OneButton = {
    buttonStyle: 'numberButton',
    text: '1'
};
const TwoButton = {
    buttonStyle: 'numberButton',
    text: '2'
};
const ThreeButton = {
    buttonStyle: 'numberButton',
    text: '3'
};
const ZeroButton = {
    buttonStyle: 'numberButton',
    text: '0'
};


const NumberButton = (props) => {
    return (
        <div className="numericButtons">
            <button className={props.button.buttonStyle}>{props.button.text}</button>
        </div>
    )
}

const NumberButtons = () => {
    return (
        <div className="numbers">
            <div className='longButton'>
                  <NumberButton button ={ClearButton}/>
            </div>
            <div className='toprow'>
                  <NumberButton button ={SevenButton}/>
                  <NumberButton button ={EightButton}/>
                  <NumberButton button ={NineButton}/>
            </div>
            <div className='midrow'>
                  <NumberButton button ={FourButton}/>
                  <NumberButton button ={FiveButton}/>
                  <NumberButton button ={SixButton}/>
            </div>
            <div className='bottomrow'>
                  <NumberButton button ={OneButton}/>
                  <NumberButton button ={TwoButton}/>
                  <NumberButton button ={ThreeButton}/>
            </div>
            <div className='longButton'>
                  <NumberButton button ={ZeroButton}/>
            </div>
        </div>
    );
}

export default NumberButtons;
