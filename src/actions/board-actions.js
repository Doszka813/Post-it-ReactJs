export const addNewBoard = board => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("boards")
      .add({
        ...board
      })
      .then(() => {
        dispatch({ type: "ADD_BOARD", board });
      })
      .catch(err => {
        dispatch({ type: "ADD_BOARD_ERROR", err });
      });
  };
};

export const deleteBoard = id => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("boards")
      .doc(id)
      .delete()
      .then(() => {
        dispatch({ type: "DELETE_BOARD", id });
      })
      .catch(err => {
        dispatch({ type: "DELETE_BOARD_ERROR", err });
      });
  };
};
export const updateBoardNotes = (notes, id) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("boards")
      .doc(id)
      .update({ 
        notes: notes
       })
      .then(() => {
        dispatch({ type: "UPDATE_BOARD_NOTES", notes });
      })
      .catch(err => {
        dispatch({ type: "UPDATE_BOARD_ERROR", err });
      });
  };
}

export const updateBoard = board => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("boards")
      .doc(board.id)
      .update({ board })
      .then(() => {
        dispatch({ type: "UPDATE_BOARD", board });
      })
      .catch(err => {
        dispatch({ type: "UPDATE_BOARD_ERROR", err });
      });
  };
};
