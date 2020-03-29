import React, { Component } from 'react';

export default class NewNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noteBody: '',
      noteColor: 'Light_Blue'
    };
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleAddNewNote = () => {
    const { noteBody, noteColor } = this.state;
    this.props.addNewNote(noteBody, noteColor);
    this.setState({ noteBody: '', noteColor: 'Light_Blue' });
  };

  render() {
    const { state, handleInputChange, handleAddNewNote } = this;
    const { noteBody, noteColor } = state;

    return (
      <div className="new-note">
        <div className="text">
          <label>Note Text</label>
          <input
            type="text"
            name="noteBody"
            value={noteBody}
            onChange={handleInputChange}
            placeholder="Body for New Note..."
          />
        </div>

        <div className="color">
          <label>Note Color</label>
          <select
            name="noteColor"
            onChange={handleInputChange}
            value={noteColor}
          >
            <option value="Light_Blue">Light_Blue</option>
            <option value="Purple">Purple</option>
            <option value="Green">Green</option>
            <option value="Red">Red</option>
            <option value="Blue">Blue</option>
            <option value="Orange">Orange</option>
          </select>
        </div>

        <div className="add-button">
          <button onClick={handleAddNewNote}>ADD NOTE</button>
        </div>
      </div>
    );
  }
}
