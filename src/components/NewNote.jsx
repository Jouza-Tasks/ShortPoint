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
      title: '',
      color: '',
      isDropdownOpen: false
    };
  }
  toggleDropDown = () => {
    this.setState({ isDropdownOpen: !this.state.isDropdownOpen });
  };

  onChangeInput = e => {
    this.setState({ title: e.target.value });
  };

  render() {
    const { state, props, onChangeInput, toggleDropDown } = this;
    const { title, color, isDropdownOpen } = state;
    const { addNewNote } = props;

    return (
      <div>
        test
        <input type="text" onChange={onChangeInput} value={title} />
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
        <button onClick={() => addNewNote(title, color)}> Add Note</button>
      </div>
    );
  }
}
