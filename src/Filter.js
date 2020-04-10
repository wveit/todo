import React from 'react';
import * as constants from './constants';

const buttonStyle = {};
const selectedButtonStyle = {
    backgroundColor: "blue",
    color: "white"
};

export default function Filter(props) {

    function onTextChange(event) {
        if(props.onTextChange)
            props.onTextChange(event.target.value);
    }

    function onFilterSelection(filterType) {
        if(props.onFilterSelection)
            props.onFilterSelection(filterType);
    }

    const allButtonStyle = (props.filterSelection === constants.ALL ? selectedButtonStyle : buttonStyle);
    const completeButtonStyle = (props.filterSelection === constants.COMPLETE ? selectedButtonStyle : buttonStyle);
    const notCompleteButtonStyle = (props.filterSelection === constants.NOT_COMPLETE ? selectedButtonStyle : buttonStyle);

    return (
        <div>
            <div>
                <input type="text" onChange={onTextChange} value={props.text} />
            </div>
            <div>
                <button style={allButtonStyle} onClick={() => onFilterSelection(constants.ALL)}>All</button>
                <button style={completeButtonStyle} onClick={() => onFilterSelection(constants.COMPLETE)}>Complete</button>
                <button style={notCompleteButtonStyle} onClick={() => onFilterSelection(constants.NOT_COMPLETE)}>Not Complete</button>
            </div>
        </div>
    );
}
