import React, { PureComponent } from "react";

class AddForm extends PureComponent {
  state = {
    value: ""
  };

  onChange = e => {
    this.setState({value: e.target.value})
  };

  handleSubmit = e => {
    e.preventDefault();

    const { onAdd } = this.props;
    onAdd({
      id: Math.random().toString(),
      value: this.state.value,
      done: false
    });
    this.setState({ value: "" });
  };

  render() {
    console.log("Render Add Form");
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          autoFocus
          value={this.state.value}
          onChange={this.onChange}
          placeholder="Todo"
        />
        <input type="submit" onClick={this.handleSubmit} />
      </form>
    );
  }
}

export { AddForm };
