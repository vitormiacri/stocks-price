import produce from 'immer';

const INITIAL_STATE = {
  latestPrice: 0,
  historicalPrices: [],
  company: {},
  logo: '',
  loading: false,
};

export default function stocks(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@stocks/ADD_SYMBOL_REQUEST': {
        draft.loading = true;
        break;
      }

      case '@stocks/ADD_SYMBOL_SUCCESS': {
        draft.latestPrice = action.payload.latestPrice;
        draft.company = action.payload.company;
        draft.logo = action.payload.logo;
        draft.historicalPrices = action.payload.historicalPrices.map(price => ({
          date: price.date,
          label: price.label,
          value: price.close,
        }));
        draft.loading = false;
        break;
      }
      case '@stocks/FAILURE': {
        draft.loading = false;
        draft.latestPrice = 0;
        draft.historicalPrices = [];
        draft.company = {};
        draft.logo = '';
        break;
      }
      default:
    }
  });
}
