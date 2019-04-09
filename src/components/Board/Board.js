import React from "react";
import Note from "../Note/Note";
import NoteCreator from "../Note/NoteCreator";
import BoardSidebar from "./BoardSidebar";
import { updateBoard, updateBoardNotes } from "../../actions/board-actions";
import { connect } from "react-redux";
import { Button, Card, Modal } from "semantic-ui-react";

import "../../styles/Board.css";

const Board = props => {
  
  const addNote = note => {
    const newBoard = {...props.board};
    newBoard.notes = [...newBoard.notes, note];
    props.updateBoardNotes(newBoard.notes, props.id);
  };

  const deleteNote = id => {
    const notes = props.board.notes.slice();
    notes.splice(id, 1);
    props.updateBoardNotes(notes, props.id);
  };

  const deleteAllNotes = () => {
    const notes = props.board.notes.slice();
    notes.splice(0, notes.length);
    props.updateBoardNotes(notes, props.id);
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
            props.board.notes.map((note, ind) => {
              return (
                <Note
                  {...note}
                  key={ind}
                  id={ind}
                  onDeleteNote={deleteNote}
                />
              );
            })}
        </Card.Group>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    updateBoard: board => {
      dispatch(updateBoard(board));
    },
    updateBoardNotes: (notes, id) => {
      dispatch(updateBoardNotes(notes, id));
    }
  };
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.id;
  const brd = state.firestore.ordered.boards.find(board => board.id === id);
  return {
    board: brd,
    id: id
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);
