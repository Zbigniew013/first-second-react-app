
// actions
const createActionName = actionName => `app/lists/${actionName}`;
const ADD_NEW_LIST = createActionName('ADD_NEW_LIST');

// selectors
export const getListById = ({ lists }, listId) => lists.find(list => list.id === listId);
export const getAllLists = state => state.lists;

// actions creators
export const addNewList = payload => ({ type: ADD_NEW_LIST, payload });

const listsReducer = (statePart = [], action) => {
  switch(action.type) {
    case ADD_NEW_LIST:
      return [...statePart, action.payload];
    default:
      return statePart;
  };
};

export default listsReducer;