/**
 * The "state" here is not the "application state".
 * It is only the "state" that this reducer is responsible for.
 */
export default function(state = null, action) {
  switch(action.type) {
    case 'BOOK_SELECTED':
      const book = action.payload;
      return book;
  }

  return state;
}
