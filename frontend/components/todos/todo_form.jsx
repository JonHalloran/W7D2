import React from "react";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      title: "",
      body: ""
    };
    this.makeTodo = this.makeTodo.bind(this);
    this.updateBody = this.updateBody.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
  }

  makeTodo(event) {
    event.preventDefault();
    this.props.receiveTodo(this.state);
  }

  updateTitle(event) {
    this.setState({ title: event.target.value });
  }

  updateBody(event) {
    this.setState({ body: event.target.value });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.makeTodo}>
          <label>
            Title
            <input
              onInput={this.updateTitle}
              type="text"
              className="title"
              value={this.state.title}
            />
          </label>
          <label>
            Body
            <input
              onInput={this.updateBody}
              type="text"
              className="body"
              value={this.state.body}
            />
          </label>
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default TodoForm;
