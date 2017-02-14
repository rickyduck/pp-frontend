import api from '../api/products'

// ------------------------------------
// Constants
// ------------------------------------
export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS'
export const COLLECTIONS_FILTER = 'COLLECTIONS_FILTER'
export const SELECT_PRODUCT = 'SELECT_PRODUCT'

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

const applyFilter = (products, filter) => {
  return products.filter((item) => {
    if(item.product_type) {
      return item.product_type.slug == filter
    }
    return false
  })
}


const getProductTypes = (products) => {
  let types = [];

  return products.filter((product) => {
    if(product.product_type && !types.includes(product.product_type.slug)) {
      types.push(product.product_type.slug);
      return true;
    } else {
      return false;
    }

  }).map((product) => {
    return product.product_type
  }).sort(function(a, b){
    if(a.slug < b.slug) return -1;
    if(a.slug > b.slug) return 1;
    return 0;
})
}

export const getAllProducts = () => {
  return (dispatch, getState) => {

    const { collections } = getState()
    const theApi = new api()
    theApi.getProducts(products => {
      const types = getProductTypes(products)
      const filteredItems = applyFilter(products, collections.filter)

      dispatch({
        type: RECEIVE_PRODUCTS,
        types,
        products,
        filteredItems
      })
    })
  }
}



export const runFilter = (filter) => {
  return (dispatch, getState) => {
    const { collections } = getState()
    //debugger;
    const filteredItems = applyFilter(collections.items, filter)

    dispatch({
      type: COLLECTIONS_FILTER,
      filteredItems: filteredItems,
      filter,
    });
  };
}

export const selectProduct = (slug) => {
  return (dispatch, getState) => {
    const { collections } = getState()
    //debugger;
    const filteredItems = collections.items.filter((product) => {
      return product.slug === slug
    })

    dispatch({
      type: SELECT_PRODUCT,
      selectedProduct: filteredItems[0]
    });
  };
}

export const actions = {
  getAllProducts: () => getAllProducts(),
  selectedProduct: (id) => selectedProduct(id),
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
    return {...state, filteredItems: action.filteredItems, items: action.products, types: action.types}
  },
  [SELECT_PRODUCT] : (state, action) => {
    return {...state, selectedProduct: action.selectedProduct}
  }
  // [COUNTER_INCREMENT]    : (state, action) => state + action.payload,
  // [COUNTER_DOUBLE_ASYNC] : (state, action) => state * 2
}

// ------------------------------------
// Reducer
// ------------------------------------
var initialState = {
  filter: "designs",
  items: [],
  filteredItems: [],
  types: [],
  selectedProduct: {}
}


export default function collectionsReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  console.log(state);
  return handler ? handler(state, action) : state
}
