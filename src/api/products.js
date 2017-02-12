import Ajax from 'simple-ajax'
import _products from './mockProducts.json'


export default class api {
  constructor() {
    this.apiUrl = "http://pp.dev2.squaremediauk.com"
    this.apiEndpoint = "/wp-json/wp/v2"
    this.timeout = 100
  }
  getProducts(cb) {

    ///SO MUCH HEAVY LIFTING TO STRIP DOWN THEAPI
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
    function* entries(obj) {
       for (let key of Object.keys(obj)) {
         yield [key, obj[key]];
       }
    }

    console.log(_products);
    var refinedProducts = _products.map((product) => {
      var refinedProduct = {
          id: product.id,
          title: product.title.rendered,
          product_type: product.pure_taxonomies.product_types ? product.pure_taxonomies.product_types[0] : null,
          media: product.better_featured_image ? product.better_featured_image.media_details : null,
          slug: product.slug
      }
      for (let [key, value] of entries(product.acf)) {
        refinedProduct[key] = value
         // do something with key|value
      }

      return refinedProduct;
    })
    setTimeout(() => cb(refinedProducts), this.timeout)

  }

}
