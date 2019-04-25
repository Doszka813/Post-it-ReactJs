import React, { Component } from "react";

import NoteForm from "./NoteForm";

import { Header, Modal } from "semantic-ui-react";
import "../../styles/Creator.css";

class NoteCreator extends Component {
  constructor(props) {
    super();
    this.state = {
      title: "",
      text: "",
      createdAt: new Date()
    };
  }

  changeNoteTitle = e => {
    this.setState({ title: e.target.value });
  };

  changeNoteTxt = e => {
    this.setState({ text: e.target.value });
  };

  onAddNote = e => {
    e.preventDefault();
    this.props.addNote(this.state);
  };

  render() {
    return (
      <div className="Creator">
        <Header icon="add" content="Add new note" />
        <Modal.Content>
          <NoteForm
            changeNoteTitle={this.changeNoteTitle}
            changeNoteTxt={this.changeNoteTxt}
            onAddNote={this.onAddNote}
          />
        </Modal.Content>
      </div>
    );
  }
}

export default NoteCreator;
