import React from 'react'
import api from '../../../api/products'
import ProductListItem from '../../../components/ProductList/ProductListItem'

import './Product.scss'
class Product extends React.Component {
  constructor(props) {
    super(props)
    this.api = new api()
    this.state = {
      selectedNav: 'complementary-designs'
    }
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
  selectNav(type) {
    this.setState({
      selectedNav: type
    })
  }
  productImage() {
    if(this.props.product.media) {
      return <img className="main-image" src={this.api.apiUrl + this.api.apiImagePath + this.props.product.media.file} />
    } else {
      return null
    }
  }
  renderAssociatedNav() {
    var navLis = []
    if(this.props.complementaryProducts.length){
      let boundItemClick = this.selectNav.bind(this, 'complementary-designs');
      navLis.push(<a href='#' className={this.state.selectedNav === 'complementary-designs' ? "active" : "inactive"} onClick={boundItemClick}>Complementary Products</a>)
    }
    if(this.props.colourways.length){
      let boundItemClick = this.selectNav.bind(this, 'available-colours');
      navLis.push(<a href='#' className={this.state.selectedNav === 'available-colours' ? "active" : "inactive"} onClick={boundItemClick}>Available Colours</a>)
    }
    return <nav className="filter">{navLis}</nav>
  }

  renderAssociates() {

    var listItems = null
    if(this.props.complementaryProducts.length && this.state.selectedNav === 'complementary-designs'){
      listItems = this.props.complementaryProducts.map((item) => {
        return <ProductListItem item={item} />
      })
    }
    if(this.props.colourways.length && this.state.selectedNav === 'available-colours'){
      listItems = this.props.colourways.map((item) => {
        return <ProductListItem item={item} />
      })
    }
    return <ul className="collection-list">{listItems}</ul>
  }

  renderProductDetails() {
    const product = this.props.product
    var productDetails = null
    switch(product.product_type.slug) {
      case "designs":
        productDetails = <div>
          <h3>WALLPAPER DETAILS</h3>
          <div>{product.wallpaper_code}</div>
          <div>Design: {product.design}</div>
          <div>Repeat Size: {product.repeat_design}</div>
          <div>Roll Dimensions: {product.roll_dimensions}</div>
          <div>Made in: {product.made_in}</div>
          <div>Coordinates: {product.coordinates}</div>
        </div>
      break
      case "fabrics":
        productDetails = <div>
          <h3>FABRIC DETAILS</h3>
          <div>Width: {product.width}</div>
          <div>Pattern Repeat: {product.design}</div>
          <div>Made in: {product.made_in}</div>
          <div>Composition: {product.repeat_design}</div>
          {
            (product.martindale !== "") ? <div>Martindale: {product.martindale}</div> : ""
          }

        </div>
      break
    }
    return productDetails
  }

  renderProductIcons() {
    const prefix = "EO-"
    const product = this.props.product
    var icons = []
    switch(product.product_type.slug) {
      case "fabrics":
        product.care.forEach((careIcon) => {
          icons.push(<li><img width="40" src={'/images/icons/fabrics/care/' + prefix + careIcon + '.png'} /></li>)
        })
      break
      case "designs":
        product.icons.forEach((icon) => {
          let parsedIcon = icon.replace(/\s+/g, '-').toLowerCase()
          icons.push(<li><img width="40" src={'/images/icons/designs/' + prefix + parsedIcon + '.png'} /> {icon}</li>)
        })
      break
    }
    return <ul className="icons-holder">{icons}</ul>
  }

  render() {

    return <div style={{ margin: '0 auto' }} >

      <div className="clear">
      {this.productImage()}
      <div className="product-info">
        <h2 dangerouslySetInnerHTML={{ __html: this.props.product.title }}></h2>
        <section className="text-details">
          {this.renderProductDetails()}
        </section>
        <section className="icons">
          {this.renderProductIcons()}
        </section>
      </div>
      </div>
      <div className="associated-products" style={{ margin: '20px auto' }} >
        {this.renderAssociatedNav()}
        {this.renderAssociates()}
      </div>

    </div>
  }
}



export default Product
