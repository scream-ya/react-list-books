import React from 'react';
import PropTypes from 'prop-types';
import ItemBook from './ItemBook';

const propTypes = {
  listBooks: PropTypes.arrayOf(PropTypes.object).isRequired,
  nextStatus: PropTypes.number.isRequired,
};

function ListBooks(props) {
  const { listBooks, nextStatus } = props;

  if (listBooks.length) {
    return (
      <div>
        {listBooks.map((item) => <ItemBook key={item.id} book={item} nextStatus={nextStatus} />)}
      </div>
    );
  }

  return (
    <div align="center">
      <b>List is empty</b>
    </div>
  );
}

ListBooks.propTypes = propTypes;

export default ListBooks;
