export function selectBook(book) {
  const action = {
    type: 'BOOK_SELECTED',
    payload: book
  };

  return action;
}
