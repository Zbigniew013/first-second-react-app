import { createStore } from 'redux';
import { combineReducers } from 'redux';
import initialState from './InitialState';
import stringContains from '../utils/stringContains';

// selectors
    
export const getFilteredCards = ({ cards, searchString }, columnId) => 
  cards.filter(card => card.columnId === columnId && 
    stringContains(card.title, searchString));
    
export const getListById = ({ lists }, listId) => lists.find(list => list.id === listId);

export const getColumnsByList = ( {columns}, listId ) => columns.filter(column => 
  column.listId === listId);

export const getAllLists = state => state.lists;

export const getFavoriteCards = ({ cards }) =>
  cards.filter((card) => card.isFavorite === true);

// action creators

export const addColumn = payload => ({ type: 'ADD_COLUMN', payload });
export const addCard = payload => ({ type: 'ADD_CARD', payload });
export const updateSearchString = payload => ({ type: 'UPDATE_SEARCHSTRING', payload });
export const addNewList = payload => ({ type: 'ADD_NEW_LIST', payload });
export const toggleCardFavorite = payload => ({ type: 'TOGGLE_CARD_FAVORITE', payload });

// const reducer = (state, action) => {
//   const newState = {
//     lists: listsReducer(state.lists, action),
//     columns: columnsReducer(state.columns, action),
//     cards: cardsReducer(state.cards, action),
//     searchString: searchStringReducer(state.searchString, action)
//   };
//   return newState;
// };


const listsReducer = (statePart = [], action) => {
  switch(action.type) {
    case 'ADD_NEW_LIST':
      return [...statePart, action.payload];
    default:
      return statePart;
  };
};

const columnsReducer = (statePart = [], action) => {
  switch(action.type) {
    case 'ADD_COLUMN':
      return [...statePart, action.payload];
    default:
      return statePart;
  };
};

const cardsReducer = (statePart = [], action) => {
  switch(action.type) {
    case 'ADD_CARD':
      return [...statePart, action.payload];
    case 'TOGGLE_CARD_FAVORITE':
      return statePart.map(card => (card.id === action.payload) ? { ...card, isFavorite: !card.isFavorite } : card);
    default:
      return statePart;
  };
};

const searchStringReducer = (statePart = '', action) => {
  switch(action.type) {
    case 'UPDATE_SEARCHSTRING':
      return action.payload
    default:
      return statePart;
  };
};
const subreducers = {
  lists: listsReducer,
  columns: columnsReducer,
  cards: cardsReducer,
  searchString: searchStringReducer
}

const reducer = combineReducers(subreducers);

// const reducer = (state, action) => {
//   switch(action.type) {
//     case 'ADD_COLUMN':
//       return { ...state, columns: [...state.columns, action.payload ]};
  
//     case 'ADD_CARD':
//       return { ...state, cards: [...state.cards, action.payload ]};

//     case 'UPDATE_SEARCHSTRING':
//       return { ...state, searchString: action.payload };
      
//     case 'ADD_NEW_LIST':
//       return { ...state, lists: [...state.lists, action.payload]};

//     case 'TOGGLE_CARD_FAVORITE':
//       return { ...state, cards: state.cards.map(card => 
//         (card.id === action.payload) ? { ...card, isFavorite: !card.isFavorite } : card) };

//     default:
//       return state;
//   };
// };

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;