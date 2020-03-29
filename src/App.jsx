import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

import NewNote from './components/NewNote';
import NoteList from './components/NoteList';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [
        {
          id: '2f0a8ba9-dcf8-4b9b-8f19-59974cdd4626',
          body: '1',
          color: 'red',
          date: 'March 29, 4:43 PM '
        },
        {
          id: '427a1898-f1c0-4347-8749-1bc361164fdc',
          body: '2',
          color: 'blue',
          date: 'March 29, 4:43 AM '
        }
      ]
    };
  }
  getCurrentDate = () => {
    const timeNow = new Date();
    let monthAndDay = timeNow.toLocaleString('en-US', {
      month: 'long',
      day: 'numeric'
    });
    let hours = timeNow.getHours();
    let mins = timeNow.getMinutes();
    let mid = '';
    if (hours === 0) {
      hours = 12;
      mid = 'AM';
    } else if (hours === 12) {
      mid = 'PM';
    } else if (hours > 12) {
      hours = hours % 12;
      mid = 'PM';
    } else {
      mid = 'AM';
    }
    let result = `${monthAndDay}, ${hours}:${mins} ${mid} `;
    return result;
  };
  addNewNote = (body, color) => {
    // need date
    let currentDate = this.getCurrentDate();
    let newNote = { id: uuidv4(), body, color, date: currentDate };
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
