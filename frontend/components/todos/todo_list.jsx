import React from "react";
import TodoListItem from "./todo_list_item";
import TodoForm from "./todo_form";

class todoList extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    return (
      <div>
        <h3>Todo List goes here!</h3>
        <ul>{this.props.todos.map(el => TodoListItem(el))}</ul>
        <TodoForm receiveTodo={this.props.receiveTodo} />
      </div>
    );
  }
}

export default todoList;
