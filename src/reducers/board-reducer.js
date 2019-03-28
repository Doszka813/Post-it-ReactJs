// import { UPDATE_NOTEBOOK } from '../actions/notebook-actions';

const boardReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_BOARD":
      return state.concat([action.board]);
    case "DELETE_BOARD":
      return state.filter(board => board.id !== action.id);
    // case "ADD_NOTE":
    //   return state.map(board => {
    //     if (board.id === action.id) {
    //       return [...board.notes, action.note];
    //     } else return board;
    //   });
    case "UPDATE_BOARD":
      return state.map(board => {
        if (board.id === action.board.id) {
          return action.board;
        } else return board;
      });
    default:
      return state;
  }
};

export default boardReducer;
