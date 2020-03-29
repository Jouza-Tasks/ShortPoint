import React, { Component } from 'react';
import NoteItem from './NoteItem';

export default class NoteList extends Component {
  render() {
    const { props } = this;
    const { notes, editNote, deleteNote } = props;

    const allNotes = notes.slice(0).reverse().map((note, i) => {
      return (
        <NoteItem
          key={note.id}
          note={note}
          index={notes.length-i-1}
          editNote={editNote}
          deleteNote={deleteNote}
        />
      );
    });
    return <div className="note-list">{allNotes}</div>;
  }
}
