import React from "react";
import Note from "../Note/Note";
import BoardSidebar from "./BoardSidebar";
import { updateBoard, updateBoardNotes } from "../../actions/board-actions";
import { connect } from "react-redux";
import moment from "moment";
import { Card, Header } from "semantic-ui-react";

import "../../styles/Board.css";

const Board = props => {
  const addNote = note => {
    const newBoard = { ...props.board };
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
      <Header color="blue">{props.board.name}</Header>
      <div>
        Created: {moment(props.board.createdAt.toDate()).calendar()} by{" "}
        {props.board.authorFirstName} {props.board.authorLastName}
      </div>
      <BoardSidebar
        onDeleteBoard={onDeleteBoard}
        deleteAllNotes={deleteAllNotes}
        addNote={addNote}
      />
      {props.board.notes.length < 1 ? (
        <div className="NotesList">
          This board is empty. Add notes to the board.
        </div>
      ) : (
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
      )}
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
