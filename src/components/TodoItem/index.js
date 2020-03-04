import React, { PureComponent } from "react";

export class TodoItem extends PureComponent {
  state = {
    value: this.props.item.value,
    done: this.props.item.done,
    editable: false
  };

  toggleEdit = () => {
    this.setState(state => ({
      editable: !state.editable
    }));
  };
  handleCancel = () => {
    const { value = "", done = false } = this.props.item;
    this.setState({
      value,
      done,
      editable: false
    });
  };
  handleSave = () => {
    const { onUpdate, item } = this.props;
    const { value, done } = this.state;
    onUpdate({
      ...item,
      value,
      done
    });
    this.setState({ editable: false });
  };
  handleDelete = () => {
    this.props.onDelete(this.props.item.id);
  };

  render() {
    console.log("Render Todo Item", this.props.item.value);
    const { editable, done, value } = this.state;
    return (
      <li>
        <input
          disabled={!editable}
          type="checkbox"
          checked={done}
          onChange={e => this.setState({ done: e.target.checked })}
        />
        <input
          disabled={!editable}
          type="text"
          value={value}
          onChange={e => this.setState({ value: e.target.value })}
        />
        {editable ? (
          <>
            <button onClick={this.handleSave}>Save</button>
            <button onClick={this.handleCancel}>Cancel</button>
          </>
        ) : (
          <>
            <button onClick={this.toggleEdit}>Edit</button>
            <button onClick={this.handleDelete}>Delete</button>
          </>
        )}
      </li>
    );
  }
}
