import React from 'react';
import PropTypes from 'prop-types';

import { InputSearch } from './styles';

export default function Input({
  loading,
  placeholder,
  handleChange,
  handleKeyPress,
  value,
  name,
}) {
  return (
    <InputSearch
      name={name}
      value={value}
      onChange={handleChange}
      onKeyDown={handleKeyPress}
      loading={loading}
      placeholder={placeholder}
    />
  );
}

Input.propTypes = {
  loading: PropTypes.bool,
  placeholder: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  handleKeyPress: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

Input.defaultProps = {
  loading: false,
  placeholder: 'Digite o código da ação',
};
