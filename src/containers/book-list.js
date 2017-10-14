/**
 * NPM packages.
 */
import React, { Component }   from 'react';
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';

/**
 * Project packages.
 */
import { selectBook } from '../actions/index';

class BookList extends Component {
  renderList() {
    const books = this.props.books;
    const list  = books.map(book => {
      const template = (
        <li
          key={book.title}
          onClick={ () => this.props.selectBook(book) }
          className="list-group-item">
          {book.title}
        </li>
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

/**
 * Anything returned from this function will end up as
 * "props" on the "BookList" container.
 */
function mapDispatchToProps(dispatch) {
  /**
   * Whenever "selectBook" is called, the result
   * should be passed to all of our reducers.
   */
  const actionCreators = {selectBook: selectBook};
  return bindActionCreators(actionCreators, dispatch);
}

/**
 * Promote "BookList" from a "Component" to a container - it needs to know about
 * this new dispatch method "selectBook" and make it available as a prop.
 */
const Container = connect(mapStateToProps, mapDispatchToProps)(BookList);
export default Container;
