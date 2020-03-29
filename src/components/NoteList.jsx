import React, { Component } from 'react';
import NoteItem from './NoteItem';

export default class NoteList extends Component {
  render() {
    const { props } = this;
    const { notes } = props;

    const allNotes = notes.map((note, i) => {
      return <NoteItem key={note.id} note={{ ...note, title: `Note ${i+1}` }} />;
    });
    return (
      <div>
        <p>as</p>
        {allNotes}
      </div>
    );
  }
}
