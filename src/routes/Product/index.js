import { injectReducer } from '../../store/reducers'
import { runFilter, getAllProducts, selectProduct } from '../../store/collections'

export default (store) => ({
  path : 'product/:slug',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Product = require('./containers/ProductContainer').default
      const reducer = require('../../store/collections').default

      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, { key: 'collections', reducer })
      store.dispatch(selectProduct("slug", nextState.params.slug))
      cb(null, Product)

      /*  Return getComponent   */

    /* Webpack named bundle   */
  }, 'product')
  }
})
