import React from 'react';
import { useSelector } from 'react-redux';

import PropTypes from 'prop-types';
import { MdAutorenew } from 'react-icons/md';

import { ButtonSearch } from './styles';

export default function Button({ children, backgroundColor, color, ...rest }) {
  const loading = useSelector(state => state.stocks.loading);
  return (
    <ButtonSearch
      backgroundColor={backgroundColor}
      color={color}
      loading={loading}
      {...rest}
    >
      {loading ? <MdAutorenew size={26} color="#FFF" /> : children}
    </ButtonSearch>
  );
}

Button.propTypes = {
  children: PropTypes.element.isRequired,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  backgroundColor: '#e0e0e0',
  color: '#000',
};
