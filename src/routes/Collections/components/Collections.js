import React from 'react'
import ProductListItem from '../../../components/ProductList/ProductListItem'
import './Collections.scss'

class Collections extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
  //  this.props.getAllProducts()
  }
  handleClick(e, filter="design") {
    e.preventDefault();
    this.props.runFilter(filter);
  }
  getNav() {
    const navItems = this.props.types.map((type) => {

      return <a href='#' className={this.props.filter === type.slug ? "active" : "inactive"} onClick={(e) => this.handleClick(e, type.slug)}>{type.name}</a>
    });
    return <div>{navItems}</div>
  }
  getCollectionList() {
    const listItems = this.props.items.length ? this.props.items.map((item) => {
      return <ProductListItem item={item} />
    }) : null
    return <ul className="collection-list">{listItems}</ul>
  }
  render() {
    return <div style={{ margin: '0 auto' }} >
      <nav className="filter">
        {this.getNav()}
      </nav>

      {this.getCollectionList()}
    </div>
  }
}

Collections.propTypes = {
  //items     : React.PropTypes.array.isRequired
}

export default Collections
