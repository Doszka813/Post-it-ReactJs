const boardReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_BOARD":
      console.log("created board", action.board);
      return state;
    case "ADD_BOARD_ERROR":
      console.log("add board error", action.err);
      return state;
    case "DELETE_BOARD":
      console.log("deleted board", action.id);
      return state;
    case "DELETE_BOARD_ERROR":
      console.log("delete board error", action.err);
      return state;
    case "UPDATE_BOARD":
      console.log("updated board", action.board);
      return state;
    case "UPDATE_BOARD_NOTES":
      console.log("updated board notes", action.notes);
      return state;
    default:
      return state;
  }
};

export default boardReducer;
