import React, { Component } from 'react';

export default class NoteItem extends Component {
  render() {
    const { props } = this;
    const { note } = props;
    const { id, body, color,date, title } = note;

    return (
      <div>
        <p>{title}</p>
        <p>{body}</p>
        {/* <p>{date}</p> */}
        <p>{color}</p>

      </div>
    );
  }
}
