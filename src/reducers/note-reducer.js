const noteReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_NOTE':
      return state.concat(action.note);
    default:
      return state;
  }
}

export default noteReducer;