import React, { Component } from 'react';
import NoteItem from './NoteItem';

export default class NoteList extends Component {
  render() {
    const { props } = this;
    const { notes, editNote, deleteNote } = props;

    const allNotes = notes.map((note, i) => {
      return (
        <NoteItem
          key={note.id}
          note={note}
          index={i}
          editNote={editNote}
          deleteNote={deleteNote}
        />
      );
    });
    return (
      <div>
        <p>as</p>
        {allNotes}
      </div>
    );
  }
}
