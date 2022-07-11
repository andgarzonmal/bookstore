// Actions

const CHECKSTATUS = 'bookstore/categories/CHECKSTATUS';
const initialState = [];

//reducer
export function categoriesReducers(state=initialState, action) {
  switch (action.type) {
    case CHECKSTATUS:
      return 'Under construction'
    default:
      return initialState
  }
}

// Action creators 

const checkStatus = () => ({type:CHECKSTATUS})