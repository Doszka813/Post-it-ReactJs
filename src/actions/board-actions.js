export const addNewBoard = board => {
  return (dispatch, getState) => {
    //async call to db
    dispatch({ type: "ADD_BOARD", board });
  };
};

export const deleteBoard = id => {
  return (dispatch, getState) => {
    //async call to db
    dispatch({ type: "DELETE_BOARD", id });
  };
};

export const updateBoard = board => {
  return (dispatch, getState) => {
    //async call to db
    dispatch({ type: "UPDATE_BOARD", board });
  };
};
