// ------------------------------------
// Constants
// ------------------------------------
// export const COUNTER_INCREMENT = 'COUNTER_INCREMENT'
// export const COUNTER_DOUBLE_ASYNC = 'COUNTER_DOUBLE_ASYNC'

// ------------------------------------
// Actions
// ------------------------------------

/*  This is a thunk, meaning it is a function that immediately
    returns a function for lazy evaluation. It is incredibly useful for
    creating async actions, especially when combined with redux-thunk! */


export const actions = {


}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  // [COUNTER_INCREMENT]    : (state, action) => state + action.payload,
  // [COUNTER_DOUBLE_ASYNC] : (state, action) => state * 2
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
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
export default function collectionsReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  console.log(state);
  return handler ? handler(state, action) : state
}
