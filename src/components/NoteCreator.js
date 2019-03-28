import React, { Component } from "react";

import NoteForm from "./NoteForm";

import { Header, Modal } from "semantic-ui-react";
import "../styles/Creator.css";

class NoteCreator extends Component {
  constructor(props) {
    super();
    this.state = {
      note: {
        id: new Date().getTime(),
        title: "",
        text: ""
      }
    };
  }

  changeNoteTitle = e => {
    const note = this.state.note;
    note.title = e.target.value;
    this.setState({ note });
  };

  changeNoteTxt = e => {
    const note = this.state.note;
    note.text = e.target.value;
    this.setState({ note });
  };

  onAddNote = (e) => {
    e.preventDefault();
    const note = {...this.state.note};
    this.props.addNote(note);
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
};

export default NoteCreator;
