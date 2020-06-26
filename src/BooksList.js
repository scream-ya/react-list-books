import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import BookItem from './BookItem';
import TagsFilter from './TagsFilter';
import EmptyList from './EmptyList';

const propTypes = {
  listBooks: PropTypes.arrayOf(PropTypes.object).isRequired,
  nextStatus: PropTypes.number.isRequired,
};

function BooksList(props) {
  const { listBooks, nextStatus } = props;
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const tagsSearch = params.get('tags') ? params.get('tags').split(',') : '';

  const listBooksFilter = listBooks
    .filter(
      (item) => !tagsSearch || tagsSearch.every((el) => item.tags.includes(el)),
    );

  if (listBooks.length) {
    return (
      <div>
        {tagsSearch && <TagsFilter tags={tagsSearch} />}
        {listBooksFilter.map(
          (item) => (
            <BookItem
              key={item.id}
              book={item}
              nextStatus={nextStatus}
            />
          ),
        )}
      </div>
    );
  }

  return (<EmptyList />);
}

BooksList.propTypes = propTypes;

export default BooksList;
