// Actions
const ADDBOOK = 'bookstore/books/ADDBOOKS';
const DELETEBOOKS = 'bookstore/books/DELETEBOOKS';
const initialState = [];

// Reducer

export function booksReducer(state = initialState, action) {
  switch (action.type) {
    case ADDBOOK: {
      return [
        ...state,
        action.payload,
      ];
    }
    case DELETEBOOKS: {
      const ActualBooks = state.filter((book) => book.id === action.payload);
      return ActualBooks;
    }
    default:
      return initialState;
  }
}

// Action creators

export const addbook = (book) => ({ type: ADDBOOK, payload: book });
export const deletebook = (id) => ({ type: DELETEBOOKS, payload: id });
