import React, { Component } from "react";
import moment from "moment";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import NoteRating from "./NoteRating";
import {
  Card,
  Image,
  Popup,
  Button,
  Icon,
  Divider,
} from "semantic-ui-react";
import { updateBoardNotes } from "../../actions/board-actions";
import "../../styles/Note.css";

class Note extends Component {
  constructor(props) {
    super();
    this.state = {
      done: true
    };
  }
  deleteNote = () => this.props.onDeleteNote(this.props.id);

  toggleDone = () => {
    this.setState({ done: !this.state.done });
    console.log(this.state.done);
    this.tgl();
  };

  tgl = () => {
    const newBoard = { ...this.props.board };
    const notes = this.props.board.notes.slice();
    const note = {
      ...notes[this.props.noteId],
      done: this.state.done
    };
    notes[this.props.noteId] = note;
    newBoard.notes = notes;
    this.props.updateBoardNotes(newBoard.notes, this.props.boardId);
  };

  render() {
    const { note } = this.props;

    return (
      <Card className="Note" color={ this.state.done ? "blue" : "grey"}>
        {note.done ? (
          <Popup
            trigger={
              <Image
                onClick={this.toggleDone}
                fluid
                label={{
                  as: "a",
                  color: "grey",
                  corner: "left",
                  icon: "undo",
                  size: "small"
                }}
              />
            }
            content="Mark as undone"
            position="left center"
          />
        ) : (
          <Popup
            trigger={
              <Image
                onClick={this.toggleDone}
                fluid
                label={{
                  as: "a",
                  color: "green",
                  corner: "right",
                  icon: "check",
                  size: "small"
                }}
              />
            }
            content="Mark as done"
            position="right center"
          />
        )}
        <Card.Content>
          <Card.Header>
            <NoteRating />
          </Card.Header>
          <Card.Header>{note.title}</Card.Header>
          <Card.Meta>
            <span className="date">
              {moment(note.createdAt.toDate()).calendar()}
            </span>
          </Card.Meta>
          <Divider />
          <Card.Description>{note.text}</Card.Description>
        </Card.Content>
        <Button animated onClick={this.deleteNote}>
          <Button.Content visible>
            <Icon name="trash" color={ this.state.done ? "blue" : "grey"} />
          </Button.Content>
          <Button.Content hidden>Remove</Button.Content>
        </Button>
      </Card>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    updateBoardNotes: (notes, id) => {
      dispatch(updateBoardNotes(notes, id));
    }
  };
};

const mapStateToProps = (state, ownProps) => {
  const boardId = ownProps.boardId;
  const userId = state.firebase.auth.uid;
  const brd =
    state.firestore.ordered.boards &&
    state.firestore.ordered.boards
      .filter(board => board.authorId === userId)
      .find(brd => brd.id === boardId);
  const noteId = ownProps.id;
  const note = brd.notes[noteId];
  return {
    noteId: noteId,
    boardId: boardId,
    note: note,
    board: brd,
    auth: state.firebase.auth
  };
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  firestoreConnect([{ collection: "boards", orderBy: ["createdAt", "desc"] }])
)(Note);
