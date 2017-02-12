import React from 'react'
import CollectionListItem from './CollectionListItem.js'
import './Collections.scss'

class Collections extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    this.props.getAllProducts()
  }
  handleClick(filter="design") {
    this.props.runFilter(filter);
  }
  getNav() {
    const navItems = this.props.types.map((type) => {

      let boundItemClick = this.handleClick.bind(this, type.slug);

      return <a href='#' onClick={boundItemClick}>{type.name}</a>
    });
    return <div>{navItems}</div>
  }
  getCollectionList() {
    const listItems = this.props.items.map((item) => {
      return <CollectionListItem item={item} />
    })
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
