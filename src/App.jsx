import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

import NewNote from './components/NewNote';
import NoteList from './components/NoteList';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [
        { id: uuidv4(), color: 'red', text: '1' },
        { id: uuidv4(), color: 'blue', text: '2' },
        { id: uuidv4(), color: 'red', text: '3' },
        { id: uuidv4(), color: 'green', text: '4' },
        { id: uuidv4(), color: 'red', text: '5' },
        { id: uuidv4(), color: 'yellow', text: '6' },
        { id: uuidv4(), color: 'red', text: '7' }
      ]
    };
  }

  addNewNote = (title, color) => {
    // need date
    let newNote = { id: uuidv4(), title, color };
    this.setState({ notes: [...this.state.notes, newNote] });
  };

  sortNotes = () => {
    // asc or desc (later)
  };

  render() {
    const { state, addNewNote } = this;
    const { notes } = state;

    return (
      <div>
        <NewNote addNewNote={addNewNote} />
        <NoteList notes={notes} />
      </div>
    );
  }
}
