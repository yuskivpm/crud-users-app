/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'primereact/button';
import './Pagination.scss';

const Pagination = ({ usersOnPage, curPage, usersCount, onPageChange }) => {
  const pagesCount = Math.ceil(usersCount / usersOnPage);
  const isFirst = !curPage;
  const isLast = curPage + 1 >= pagesCount;
  return (
    pagesCount > 1 && (
      <div className="pagination">
        <div className="pagination-buttons">
          <Button
            className="pagination-button"
            icon="pi pi-step-backward"
            disabled={isFirst}
            onClick={() => onPageChange(0)}
          />
          <Button
            className="pagination-button"
            icon="pi pi-caret-left"
            disabled={isFirst}
            onClick={() => onPageChange(curPage - 1)}
          />
          <span>
            ({curPage + 1} of {pagesCount})
          </span>
          <Button
            className="pagination-button"
            icon="pi pi-caret-right"
            disabled={isLast}
            onClick={() => onPageChange(curPage + 1)}
          />
          <Button
            className="pagination-button"
            icon="pi pi-step-forward"
            disabled={isLast}
            onClick={() => onPageChange(pagesCount)}
          />
        </div>
      </div>
    )
  );
};

Pagination.propTypes = {
  usersOnPage: PropTypes.number.isRequired,
  curPage: PropTypes.number.isRequired,
  usersCount: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
