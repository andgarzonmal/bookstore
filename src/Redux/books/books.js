// Actions
const ADDBOOK = 'bookstore/books/ADDBOOKS';
const DELETEBOOKS = 'bookstore/books/DELETEBOOKS';
const initialState = [{
  id: 1,
  title: 'Book one',
  author: 'Author one',
},
{
  id: 2,
  title: 'Book two',
  author: 'Author two',
},
];

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
      const ActualBooks = state.filter((book) => book.id !== action.payload);
      return ActualBooks;
    }
    default:
      return initialState;
  }
}

// Action creators

export const addbook = (book) => ({ type: ADDBOOK, payload: book });
export const deletebook = (id) => ({ type: DELETEBOOKS, payload: id });
