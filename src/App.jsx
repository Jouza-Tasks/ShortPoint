import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

import NewNote from './components/NewNote';
import NoteList from './components/NoteList';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [
        { id: uuidv4(), color: 'red', body: '1' },
        { id: uuidv4(), color: 'blue', body: '2' },
        { id: uuidv4(), color: 'green', body: '3' },
        { id: uuidv4(), color: 'yellow', body: '4' }
      ]
    };
  }

  addNewNote = (body, color) => {
    // need date
    let newNote = { id: uuidv4(), body, color };
    this.setState({ notes: [...this.state.notes, newNote] });
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
