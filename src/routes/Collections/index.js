import { injectReducer } from '../../store/reducers'
import { getAllProducts } from '../../store/collections'

export default (store) => ({
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Collections = require('./containers/CollectionsContainer').default
      const reducer = require('../../store/collections').default

      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, { key: 'collections', reducer })
      store.dispatch(getAllProducts(nextState.params.collection))

      /*  Return getComponent   */
      cb(null, Collections)

    /* Webpack named bundle   */
    }, 'collections')
  }
})
