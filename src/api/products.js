import Ajax from 'simple-ajax'
import _products from './mockProducts.json'


export default class api {
  constructor() {
    this.apiUrl = "http://pp.dev2.squaremediauk.com"
    this.apiEndpoint = "/wp-json/wp/v2"
    this.timeout = 100
  }
  getProducts(cb) {
    // const apiUrl = this.apiUrl
    // const apiEndpoint = this.apiEndpoint
    // var ajax = new Ajax(
    //     {
    //         url: `${apiUrl+apiEndpoint}/products-api`,
    //         method: 'GET',
    //         headers: {
    //             'X-Requested-With': 'XMLHttpRequest'
    //         }
    //     }
    // )
    // ajax.on("success", (event) => {
    //   debugger;
    //   cb(event)
    // })
    // ajax.send()
    var refinedProducts = _products.map((product) => {
      return product;
    });
    setTimeout(() => cb(_products), this.timeout)

  }

}
