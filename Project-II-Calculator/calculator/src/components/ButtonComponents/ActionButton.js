
import React from 'react';
import './Button.css';




const DivideButton = {
    buttonStyle: 'actionButton',
    text: '/'
};

const TimesButton = {
    buttonStyle: 'actionButton',
    text: 'x'
};

const AddButton = {
      buttonStyle: 'actionButton',
      text: '+'
  };

const MinusButton = {
  buttonStyle: 'actionButton',
  text: '-'
};

const EqualsButton = {
    buttonStyle: 'actionButton',
    text: '='
  };

const FunctionButton = (props) => {
    return (
        <div className="functionalButtons">
            <button className={props.button.buttonStyle}>{props.button.text}</button>
        </div>
    )
}

const FunctionButtons = () => {
    return (
        <div className="functions">
            <FunctionButton button ={DivideButton}/>
            <FunctionButton button ={TimesButton}/>
            <FunctionButton button ={AddButton}/>
            <FunctionButton button ={MinusButton}/>
            <FunctionButton button ={EqualsButton}/>
        </div>
    );
}

export default FunctionButtons;