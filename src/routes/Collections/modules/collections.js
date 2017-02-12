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

const getProductTypes = (products) => {
  return products.filter((product) => {

    if(product.product_type) {
        return true;
    } else {
      return false;
    }

  }).map((product) => {
    return product.product_type
  })
}

export const getAllProducts = () => {
  return (dispatch, getState) => {
    const theApi = new api()
    theApi.getProducts(products => {
      const types = getProductTypes(products)
      dispatch({
        type: RECEIVE_PRODUCTS,
        types,
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
      if(item.product_type) {
        return item.product_type.slug == filter
      }
      return false
    })

    dispatch({
      type: COLLECTIONS_FILTER,
      filteredItems: filteredItems,
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
    return {...state, filteredItems: action.products, items: action.products, types: action.types}
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
