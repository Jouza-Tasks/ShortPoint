import React, { Component } from 'react';

export default class NoteItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newBody: this.props.note.body,
      isEdit: false,
      isDelete: false
    };
  }
  startOperation = operationName => {
    this.setState({ [operationName]: true });
  };
  cancelOperation = operationName => {
    this.setState({ [operationName]: false });
  };
  confirmOperation = (operationName, func) => {
    func(this.props.index, this.state.newBody);
    this.setState({ [operationName]: false });
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    const {
      state,
      props,
      handleInputChange,
      startOperation,
      cancelOperation,
      confirmOperation
    } = this;
    const { newBody, isEdit, isDelete } = state;
    const { note, index, editNote, deleteNote } = props;
    const { body, date, color } = note;

    const colors = {
      Blue: '#007bff',
      Green: '#28a745',
      Red: '#dc3545',
      Purple: '#9c27b0',
      Orange: '#ff9800',
      Gray: '#6c757d',
      Black: '#343a40'
    };
    return (
      <div
        className="note-item"
        style={{ borderLeft: `5px ${colors[color]} solid` }}
      >
        <div className="header">
          <span style={{ color: colors[color] }}>Note {index + 1}</span>
          <div className="buttons">
            {isEdit && (
              <>
                <button onClick={() => confirmOperation('isEdit', editNote)}>
                  <i className="fas fa-check"></i>
                </button>
                <button onClick={() => cancelOperation('isEdit')}>
                  <i className="fas fa-times"></i>
                </button>
              </>
            )}
            {isDelete && (
              <>
                <button
                  onClick={() => confirmOperation('isDelete', deleteNote)}
                >
                  <i className="fas fa-check"></i>
                </button>
                <button onClick={() => cancelOperation('isDelete')}>
                  <i className="fas fa-times"></i>
                </button>
              </>
            )}
            {!isDelete && !isEdit && (
              <>
                <button onClick={() => startOperation('isEdit')}>
                  <i className="fas fa-pen"></i>
                </button>
                <button onClick={() => startOperation('isDelete')}>
                  <i className="fas fa-trash"></i>
                </button>
              </>
            )}
          </div>
        </div>

        <div className="body">
          {isEdit ? (
            <>
              <textarea
                rows="3"
                cols="35"
                name="newBody"
                defaultValue={newBody}
                onChange={handleInputChange}
              ></textarea>
            </>
          ) : (
            <>
              <p>{body}</p>
            </>
          )}
        </div>
        <hr />
        <div className="time">
          <p>{date}</p>
        </div>
      </div>
    );
  }
}
