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
  handleClick(filter="design") {
    this.props.runFilter(filter);
  }
  getNav() {
    const navItems = this.props.types.map((type) => {

      let boundItemClick = this.handleClick.bind(this, type.slug);

      return <a href='#' className={this.props.filter === type.slug ? "active" : "inactive"} onClick={boundItemClick}>{type.name}</a>
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
