export function addStocksRequest(symbol, range) {
  return {
    type: '@stocks/ADD_SYMBOL_REQUEST',
    payload: { symbol, range },
  };
}

export function addStocksSuccess(latestPrice, company, historicalPrices, logo) {
  return {
    type: '@stocks/ADD_SYMBOL_SUCCESS',
    payload: { latestPrice, company, historicalPrices, logo },
  };
}

export function failure() {
  return {
    type: '@stocks/FAILURE',
  };
}
