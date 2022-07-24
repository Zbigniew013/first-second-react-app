
const listsReducer = (statePart = [], action) => {
  switch(action.type) {
    case 'ADD_NEW_LIST':
      return [...statePart, action.payload];
    default:
      return statePart;
  };
};

export default listsReducer;