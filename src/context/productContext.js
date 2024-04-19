import jsonServer from '../api/jsonServer';
import createDataContext from './createDataContext';

const productReducer = (state, action) => {
  switch (action.type) {
    case 'get_products':
      return action.payload;
    default:
      return state;
  }
};

const getProducts = dispatch => {
  return async () => {
    const response = await jsonServer.get('/products');

    dispatch({type: 'get_products', payload: response.data});
  };
};

export const {Context, Provider} = createDataContext(
  productReducer,
  {getProducts},
  [],
);
