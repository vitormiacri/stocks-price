import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { MdAutorenew } from 'react-icons/md';

import { Container } from './styles';

export default function Card({ children }) {
  const loading = useSelector(state => state.stocks.loading);
  return (
    <Container loading={loading}>
      {loading ? <MdAutorenew size={200} color="#999" /> : children}
    </Container>
  );
}

Card.propTypes = {
  children: PropTypes.element.isRequired,
};
