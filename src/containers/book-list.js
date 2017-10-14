import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookList extends Component {
  renderList() {
    const books = this.props.books;
    const list  = books.map(book => {
      const template = (
        <li key={book.title} className="list-group-item">{book.title}</li>
      );

      return template;
    });

    return list;
  }

  render() {
    const template = (
      <ul className="list-group col-sm-4">
        { this.renderList() }
      </ul>
    );

    return template;
  }
}

/**
 * Responsible for getting the application state and serve it on the
 * "props" attribute of the Component.
 */
function mapStateToProps(state) {
  const props = {
    books: state.books
  };

  return props;
}

const Container = connect(mapStateToProps)(BookList);
export default Container;
