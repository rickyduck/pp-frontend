import api from '../../../api/products'

// ------------------------------------
// Constants
// ------------------------------------
export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS'
export const COLLECTIONS_FILTER = 'COLLECTIONS_FILTER'

// ------------------------------------
// Actions
// ------------------------------------
// export function filter (filter, state) {
//   var newState = state;
//   const filteredItems = state.items.filter((item) => {
//     return item.type == filter
//   })
//   return {
//     type    : COUNTER_INCREMENT,
//     payload : {
//       filteredItems
//     }
//   }
// }

export const getAllProducts = () => {
  return (dispatch, getState) => {
    const theApi = new api()
    theApi.getProducts(products => {
      dispatch({
        type: RECEIVE_PRODUCTS,
        products
      })
    })
  }
}
export const runFilter = (filter) => {
  return (dispatch, getState) => {
    const { collections } = getState();
    //debugger;
    const filteredItems = collections.items.filter((item) => {
      return item.type == filter
    })
    const types = filteredItems.items.map((item) => {
      return item.type
    })
    dispatch({
      type: COLLECTIONS_FILTER,
      filteredItems: filteredItems,
      types: types,
      filter,
    });
  };
}

export const actions = {
  getAllProducts: () => getAllProducts(),
  runFilter: (filter) => runFilter(filter)
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [COLLECTIONS_FILTER] : (state, action) => {
    return {...state, filteredItems: action.filteredItems, filter: action.filter}
  },
  [RECEIVE_PRODUCTS] : (state, action) => {
    debugger;
    return {...state, items: action.products}
  }
  // [COUNTER_INCREMENT]    : (state, action) => state + action.payload,
  // [COUNTER_DOUBLE_ASYNC] : (state, action) => state * 2
}

// ------------------------------------
// Reducer
// ------------------------------------
var initialState = {
  filter: "design",
  items: [],
  filteredItems: [],
  types: []
}


export default function collectionsReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  console.log(state);
  return handler ? handler(state, action) : state
}
