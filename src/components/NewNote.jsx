import React, { Component } from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

export default class NewNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noteBody: '',
      noteColor: '',
      isDropdownOpen: false
    };
  }
  toggleDropDown = () => {
    this.setState({ isDropdownOpen: !this.state.isDropdownOpen });
  };

  onChangeInput = e => {
    this.setState({ noteBody: e.target.value });
  };

  render() {
    const { state, props, onChangeInput, toggleDropDown } = this;
    const { noteBody, noteColor, isDropdownOpen } = state;
    const { addNewNote } = props;

    return (
      <div>
        test
        <input type="text" onChange={onChangeInput} value={noteBody} />
      
        <Dropdown isOpen={isDropdownOpen} toggle={toggleDropDown}>
          <DropdownToggle caret>Dropdown</DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Header</DropdownItem>
            <DropdownItem>Some Action</DropdownItem>
            <DropdownItem disabled>Action (disabled)</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Foo Action</DropdownItem>
            <DropdownItem>Bar Action</DropdownItem>
            <DropdownItem>Quo Action</DropdownItem>
          </DropdownMenu>
        </Dropdown>

        <button onClick={() => addNewNote(noteBody, noteColor)}> Add Note</button>
      </div>
    );
  }
}
