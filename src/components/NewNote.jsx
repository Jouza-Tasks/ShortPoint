import React, { Component } from 'react';

export default class NewNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noteBody: '',
      noteColor: 'Blue'
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleAddNewNote = () => {
    const { noteBody, noteColor } = this.state;
    this.props.addNewNote(noteBody, noteColor);
    this.setState({ noteBody: '' });
  };

  render() {
    const { state, handleChange, handleAddNewNote } = this;
    const { noteBody, noteColor } = state;

    return (
      <div className="Add">
        <div className="text">
          <label>Note Text</label>
          <input
            type="text"
            name="noteBody"
            value={noteBody}
            onChange={handleChange}
            placeholder="Body for New Note..."
          />
        </div>

        <div className="color">
          <label>Note Color</label>
          <select name="noteColor" onChange={handleChange} value={noteColor}>
            <option value="Blue">Blue</option>
            <option value="Purble">Purble</option>
            <option value="Green">Green</option>
            <option value="Red">Red</option>
            <option value="Orange">Orange</option>
          </select>
        </div>

        <div className="add">
          <button onClick={handleAddNewNote}>ADD NOTE</button>
        </div>
      </div>
    );
  }
}
