import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

import NewNote from './components/NewNote';
import NoteList from './components/NoteList';

import './App.scss';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [
        {
          id: '2f0a8ba9-dcf8-4b9b-8f19-59974cdd4626',
          body: '1',
          color: 'Blue',
          date: 'March 29, 4:43 PM '
        },
        {
          id: '427a1898-f1c0-4347-8749-1bc361164fdc',
          body: '2',
          color: 'Red',
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

  editNote = (index, newBody) => {
    let newNotes = [...this.state.notes];
    newNotes[index] = {
      ...newNotes[index],
      body: newBody,
      time: this.getCurrentDate()
    };
    this.setState({
      notes: newNotes
    });
  };

  deleteNote = index => {
    let newNotes = [...this.state.notes];
    newNotes.splice(index, 1);
    this.setState({
      notes: newNotes
    });
  };

  render() {
    const { state, addNewNote, editNote, deleteNote } = this;
    const { notes } = state;

    return (
      <div className="App">
        <NewNote addNewNote={addNewNote} />
        <NoteList notes={notes} editNote={editNote} deleteNote={deleteNote} />
      </div>
    );
  }
}
