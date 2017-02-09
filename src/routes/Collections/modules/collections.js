// ------------------------------------
// Constants
// ------------------------------------
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
export const runFilter = (filter) => {
  return (dispatch, getState) => {
    const { collections } = getState();
    debugger;
    const filteredItems = collections.items.filter((item) => {
      return item.type == filter
    })
    dispatch({
      type: COLLECTIONS_FILTER,
      filteredItems: filteredItems,
      filter,
    });
  };
}

export const actions = {
  runFilter: (filter) => runFilter(filter)
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [COLLECTIONS_FILTER] : (state, action) => {
    debugger;
    return {...state, filteredItems: action.filteredItems, filter: action.filter}
  }
  // [COUNTER_INCREMENT]    : (state, action) => state + action.payload,
  // [COUNTER_DOUBLE_ASYNC] : (state, action) => state * 2
}

// ------------------------------------
// Reducer
// ------------------------------------
var initialState = {
  filter: "design",
  items: [
    {
      name: "Batemans - Yellow",
      featured_image: "EO-00105.jpg",
      sku: "EO 00105",
      collections_link: "http://www.elizabethockfordwallpapers.co.uk/collection-book-birchgrove-gardens.php?ver=1.0.0",
      product_details: `Design: Straight<br/>
  Repeat Size: 65cm<br/>
  Roll Dimensions: 52cm x 10.05m`,
      made_in: "EU",
      icons: null,
      type: 'design'
    },
    {
      name: "Batemans - Colourway",
      featured_image: "EO-00105.jpg",
      sku: "EO 00105",
      collections_link: "http://www.elizabethockfordwallpapers.co.uk/collection-book-birchgrove-gardens.php?ver=1.0.0",
      product_details: `Design: Straight<br/>
  Repeat Size: 65cm<br/>
  Roll Dimensions: 52cm x 10.05m`,
      made_in: "EU",
      icons: null,
      type: 'colourway'
    },
    {
      name: "Batemans - Panel",
      featured_image: "EO-00105.jpg",
      sku: "EO 00105",
      collections_link: "http://www.elizabethockfordwallpapers.co.uk/collection-book-birchgrove-gardens.php?ver=1.0.0",
      product_details: `Design: Straight<br/>
  Repeat Size: 65cm<br/>
  Roll Dimensions: 52cm x 10.05m`,
      made_in: "EU",
      icons: null,
      type: 'panel'
    }
  ]
}
initialState.filteredItems = initialState.items.filter((item) => {
  return item.type == initialState.filter
})
initialState
export default function collectionsReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  console.log(state);
  return handler ? handler(state, action) : state
}
