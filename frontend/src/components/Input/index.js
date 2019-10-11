import React, { forwardRef } from 'react';
import { useSelector } from 'react-redux';

import { InputSearch } from './styles';

function Input({ ...props }, ref) {
  const loading = useSelector(state => state.stocks.loading);
  return <InputSearch ref={ref} loading={loading} {...props} />;
}

export default forwardRef(Input);
