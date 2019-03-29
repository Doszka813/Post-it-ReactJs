import React from "react";
import Note from "./Note";
import NoteCreator from "./NoteCreator";
import BoardSidebar from "./BoardSidebar";

import { Button, Card, Modal } from "semantic-ui-react";

import { connect } from "react-redux";

import "../styles/Board.css";

const Board = props => {
  const addNote = note => {
    const newBoard = props.board;
    newBoard.notes = [...newBoard.notes, note];
    props.updateBoard(newBoard);
  };

  const deleteNote = id => {
    const newBoard = props.board;
    newBoard.notes = newBoard.notes.filter(note => note.id !== id);
    props.updateBoard(newBoard);
  };

  const deleteAllNotes = () => {
    const newBoard = props.board;
    newBoard.notes = [];
    props.updateBoard(newBoard);
  };

  const onDeleteBoard = () => {
    const id = props.id;
    props.deleteBoard(id);
  };

  return (
    <div className="Board">
      <BoardSidebar
        onDeleteBoard={onDeleteBoard}
        deleteAllNotes={deleteAllNotes}
      />
      <Modal
        trigger={<Button circular icon="plus circle" color="blue" />}
        size="tiny"
        centered={false}
        dimmer="blurring"
      >
        <NoteCreator addNote={addNote} />
      </Modal>
      <div className="NotesList">
        <Card.Group>
          {props.board &&
            props.board.notes.map(note => {
              return (
                <Note
                  {...note}
                  key={note.id}
                  id={note.id}
                  onDeleteNote={deleteNote}
                />
              );
            })}
        </Card.Group>
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.id;
  const brd = state.boards.find(board => board.id === id);
  return {
    board: brd
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateBoard: board => {
      dispatch({ type: "UPDATE_BOARD", board });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);
