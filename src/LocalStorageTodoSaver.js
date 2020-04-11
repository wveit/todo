import React from 'react';

const PROPERTY_NAME = "TODOS_APP.todos";

export default class LocalStorageTodoSaver extends React.Component {



    componentDidMount() {
        // Load todos from LocalStorage
        let todos = window.localStorage.getItem(PROPERTY_NAME);
        if(!todos) {
            todos = [];
        }
        else {
            todos = JSON.parse(todos);
        }
        
        // Pass the todos back to props handler
        if(this.props.onRead)
            this.props.onRead(todos);
    }

    componentDidUpdate() {
        // Save props todos to localstorage
        window.localStorage.setItem(PROPERTY_NAME, JSON.stringify(this.props.todos));
    }

    render() {
        return null;
    }
}
