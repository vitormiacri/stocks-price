import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';

import { failure, addStocksSuccess } from './actions';

export function* getInfo({ payload }) {
  try {
    const { symbol, range } = payload;

    const latestPriceResponse = yield call(
      api.get,
      `/stock/${symbol}/quote/latestPrice`,
      {
        params: { token: process.env.REACT_APP_API_TOKEN },
      }
    );

    const companyResponse = yield call(api.get, `/stock/${symbol}/company`, {
      params: { token: process.env.REACT_APP_API_TOKEN },
    });

    const historicalPriceResponse = yield call(
      api.get,
      `/stock/${symbol}/chart/${range}`,
      {
        params: { token: process.env.REACT_APP_API_TOKEN },
      }
    );

    const logoResponse = yield call(api.get, `/stock/${symbol}/logo`, {
      params: { token: process.env.REACT_APP_API_TOKEN },
    });

    yield put(
      addStocksSuccess(
        latestPriceResponse.data,
        companyResponse.data,
        historicalPriceResponse.data,
        logoResponse.data.url
      )
    );
  } catch (err) {
    const { status } = err.response;
    if (status === 404) {
      toast.error(`Falha: Ação não encontrada.`);
    } else if (status === 500) {
      toast.error(`Falha: Erro interno no servidor.`);
    } else {
      toast.error(`Error: ${err.response.data}.`);
    }
    yield put(failure());
  }
}

export default all([takeLatest('@stocks/ADD_SYMBOL_REQUEST', getInfo)]);
