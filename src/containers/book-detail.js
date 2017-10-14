import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  render() {
    /** Don't show book information once the application starts with an empty state. */
    const book              = this.props.book;
    const hasSelectedAnBook = Boolean(book);
    if (!hasSelectedAnBook) {
      const template = <div>Select a book to get started.</div>;
      return template;
    }

    /** Show book information once the user has selected a book. */
    const template = (
      <div>
        <h4>Details for:</h4>
        <div> Title: "{book.title}"</div>
        <div> Pages: {book.pages}</div>
      </div>
    );

    return template;
  }
}

function mapStateToProps(state) {
  const activeBook  = state.activeBook;
  const props       = {
    book: activeBook
  };

  return props;
}

const Container = connect(mapStateToProps)(BookDetail);
export default Container;
