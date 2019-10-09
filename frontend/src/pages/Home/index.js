import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdSearch } from 'react-icons/md';
import { toast } from 'react-toastify';
import {
  AreaChart,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Area,
  ResponsiveContainer,
} from 'recharts';

import Input from '../../components/Input';
import Button from '../../components/Button';
import Card from '../../components/Card';

import api from '../../services/api';

import {
  Container,
  SearchBar,
  LatestPrice,
  Company,
  CompanyHeader,
  Description,
  CardContainer,
  Marquee,
} from './styles';

import { addStocksRequest } from '../../store/modules/stocks/actions';

export default function Home() {
  const [symbol, setSymbol] = useState('');
  const dispatch = useDispatch();
  const loading = useSelector(state => state.stocks.loading);
  const latestPrice = useSelector(state => state.stocks.latestPrice);
  const historicalPrices = useSelector(state => state.stocks.historicalPrices);
  const company = useSelector(state => state.stocks.company);
  const logo = useSelector(state => state.stocks.logo);

  const [marquee, setMarquee] = useState();

  useEffect(() => {
    async function loadStocks() {
      const response = await api.get('/stock/market/list/mostactive', {
        params: {
          token: process.env.REACT_APP_API_TOKEN,
          displayPercent: true,
          listLimit: 30,
        },
      });

      setMarquee(
        response.data.map(
          stocks =>
            `${stocks.symbol}: ${parseFloat(stocks.changePercent).toFixed(
              2
            )}% / `
        )
      );
    }

    loadStocks();
  }, []);

  function handleOnClick() {
    if (symbol) {
      dispatch(addStocksRequest(symbol, '1m'));
    } else {
      toast.error('Informe uma Ação!');
    }
  }

  function handleKeyPress(e) {
    if (e.keyCode === 13) {
      if (symbol) {
        dispatch(addStocksRequest(symbol, '1m'));
      } else {
        toast.error('Informe uma Ação!');
      }
    }
  }

  return (
    <Container>
      <h1>Stock$ Price</h1>
      <SearchBar>
        <Input
          value={symbol}
          name="symbol"
          loading={loading}
          handleKeyPress={handleKeyPress}
          handleChange={e => setSymbol(e.target.value)}
        />
        <Button
          backgroundColor="#3D5AFE"
          loading={loading}
          handleClick={handleOnClick}
        >
          <MdSearch size={26} color="#fff" />
        </Button>
      </SearchBar>
      <Marquee>{marquee}</Marquee>
      {historicalPrices.length > 0 &&
      latestPrice > 0 &&
      Object.keys(company).length > 0 ? (
        <CardContainer>
          <Card loading={loading}>
            <>
              <LatestPrice>
                <div className="symbol">
                  <strong>{latestPrice}</strong>
                  <span>USD</span>
                </div>
                <img src={logo} alt={company.companyName} />
              </LatestPrice>
              <Company>
                <CompanyHeader>
                  <strong>{company.companyName}</strong>
                  <p>
                    {company.exchange}: {company.symbol}
                  </p>
                  <p>CEO: {company.CEO}</p>
                  <a
                    href={company.website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Acessar Website
                  </a>
                </CompanyHeader>

                <Description>{company.description}</Description>
              </Company>
            </>
          </Card>

          <Card loading={loading}>
            <ResponsiveContainer width="100%" height={400}>
              <AreaChart data={historicalPrices}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="label" />
                <YAxis />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#8884d8"
                  fill="#8884d8"
                />
              </AreaChart>
            </ResponsiveContainer>
          </Card>
        </CardContainer>
      ) : (
        <Card loading={loading}>
          <p>Nenhuma ação informada/encontrada</p>
        </Card>
      )}
    </Container>
  );
}
