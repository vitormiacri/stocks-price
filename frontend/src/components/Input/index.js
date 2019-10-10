import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import { InputSearch } from './styles';

function Input({ loading, ...rest }, ref) {
  return <InputSearch ref={ref} loading={loading} {...rest} />;
}

Input.propTypes = {
  loading: PropTypes.bool,
};

Input.defaultProps = {
  loading: false,
};

export default forwardRef(Input);
