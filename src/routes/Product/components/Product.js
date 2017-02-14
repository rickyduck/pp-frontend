import React from 'react'
import api from '../../../api/products'
import './Product.scss'
class Product extends React.Component {
  constructor(props) {
    super(props)
    this.api = new api()
  }
  // componentWillMount() {
  //   this.props.getAllProducts()
  // }
  // handleClick(filter="design") {
  //   this.props.runFilter(filter);
  // }
  // getNav() {
  //   const navItems = this.props.types.map((type) => {
  //
  //     let boundItemClick = this.handleClick.bind(this, type.slug);
  //
  //     return <a href='#' className={this.props.filter === type.slug ? "active" : "inactive"} onClick={boundItemClick}>{type.name}</a>
  //   });
  //   return <div>{navItems}</div>
  // }
  // getCollectionList() {
  //   const listItems = this.props.items.length ? this.props.items.map((item) => {
  //     return <CollectionListItem item={item} />
  //   }) : null
  //   return <ul className="collection-list">{listItems}</ul>
  // }
  productImage() {
    if(this.props.product.media) {
      return <img className="main-image" src={this.api.apiUrl + this.api.apiImagePath + this.props.product.media.file} />
    } else {
      return null
    }
  }
  render() {

    return <div style={{ margin: '0 auto' }} >


      {this.productImage()}
      <div className="product-info">
        <section className="text-details">
          <h2 dangerouslySetInnerHTML={{ __html: this.props.product.title }}></h2>
          <div>{this.props.product.sku}</div>
        </section>
        <section className="icons">
          <img className="icon" src="/images/icons/icon-lightfast.png" /> Lightfast
        </section>
      </div>
    </div>
  }
}



export default Product
