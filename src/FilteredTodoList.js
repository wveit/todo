import React from 'react';
import Filter from './Filter';
import TodoList from './TodoList';
import * as constants from './constants';

export default class FilteredTodoList extends React.Component {
    state = {
        filterText: "",
        currentFilterSelection: constants.ALL
    };

    onTextChange = text => {
        this.setState({filterText: text});
    }

    onFilterSelection = selection => {
        this.setState({currentFilterSelection: selection});
    }
    
    render() {
        const todos = this.props.todos;
        const filter = this.state.currentFilterSelection;
        const filterText = this.state.filterText;
        const regex = new RegExp(filterText, "i");

        let filteredTodos = todos;
        filteredTodos = filteredTodos.filter(todo => {
            return regex.exec(todo.text) !== null;
        });
        if(filter === constants.COMPLETE) {
            filteredTodos = filteredTodos.filter(todo => todo.isComplete);
        }
        if(filter === constants.NOT_COMPLETE) {
            filteredTodos = filteredTodos.filter(todo => !todo.isComplete);
        }

        return (
        <div>
            <Filter text={this.state.filterText} 
                    filterSelection={this.state.currentFilterSelection}
                    onTextChange={this.onTextChange}
                    onFilterSelection={this.onFilterSelection} />
            <TodoList   todos={filteredTodos} 
                        onToggleIsComplete={this.props.onToggleIsComplete}
                        onDelete={this.props.onDelete} />
        </div>
        );
    }
}