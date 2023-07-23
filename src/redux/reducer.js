const initialState = {
  myFavorites: [],
  allCharacters: [], 
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_FAV':
      return {
        ...state,
        myFavorites: [...state.myFavorites, action.payload],
        allCharacters: [...state.allCharacters, action.payload],
      };
    case 'REMOVE_FAV':
      const idToRemove = parseInt(action.payload);
      const updatedFavorites = state.myFavorites.filter(
        (character) => character.id !== idToRemove
      );
      return {
        ...state,
        myFavorites: updatedFavorites,
      };
    case 'FILTER':
      const filteredCharacters = state.allCharacters.filter(
        (character) => character.gender === action.payload
      );
      return {
        ...state,
        myFavorites: filteredCharacters,
      };
    case 'ORDER':
      const sortedCharacters = [...state.allCharacters];
      if (action.payload === 'A') {
        sortedCharacters.sort((a, b) => a.id - b.id); 
      } else if (action.payload === 'D') {
        sortedCharacters.sort((a, b) => b.id - a.id); 
      }
      return {
        ...state,
        myFavorites: sortedCharacters,
      };
    default:
      return state;
  }
};

export default reducer;
