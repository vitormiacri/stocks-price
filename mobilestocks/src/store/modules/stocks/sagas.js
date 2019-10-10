import { takeLatest, call, put, all } from 'redux-saga/effects';
import { Alert } from 'react-native';

import api from '../../../service/api';

import { failure, addStocksSuccess } from './actions';

export function* getInfo({ payload }) {
  try {
    const token = 'pk_532ce443b4b54f4690e54379a54d06c1';

    const { symbol, range } = payload;

    const latestPriceResponse = yield call(
      api.get,
      `/stock/${symbol}/quote/latestPrice`,
      {
        params: { token },
      }
    );

    const companyResponse = yield call(api.get, `/stock/${symbol}/company`, {
      params: { token },
    });

    const historicalPriceResponse = yield call(
      api.get,
      `/stock/${symbol}/chart/${range}`,
      {
        params: { token },
      }
    );

    const logoResponse = yield call(api.get, `/stock/${symbol}/logo`, {
      params: { token },
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
      Alert.alert(`Falha: Ação não encontrada.`);
    } else if (status === 500) {
      Alert.alert(`Falha: Erro interno no servidor.`);
    } else {
      Alert.alert(`Error: ${err.response.data}.`);
    }
    yield put(failure());
  }
}

export default all([takeLatest('@stocks/ADD_SYMBOL_REQUEST', getInfo)]);
