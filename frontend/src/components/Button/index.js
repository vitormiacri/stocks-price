import React from 'react';
import PropTypes from 'prop-types';
import { MdAutorenew } from 'react-icons/md';

import { ButtonSearch } from './styles';

export default function Button({
  children,
  loading,
  backgroundColor,
  color,
  ...rest
}) {
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
  loading: PropTypes.bool,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  loading: false,
  backgroundColor: '#e0e0e0',
  color: '#000',
};
