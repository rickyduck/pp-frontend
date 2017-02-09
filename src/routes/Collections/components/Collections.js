import React from 'react'
import CollectionListItem from './CollectionListItem.js'
import './Collections.scss'

class Collections extends React.Component {
  constructor(props) {
    super(props);
  }
  handleClick(filter="design") {
    this.props.runFilter(filter);
  }
  getNav() {
    const navItems = this.props.types.map((type) => {
      let boundItemClick = this.handleClick.bind(this, type);

      return <a href='#' onClick={boundItemClick}>{type}</a>
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
      <h2>Items: {this.props.items.length}</h2>
      <nav className="filter">
        {this.getNav()}
      </nav>

      {this.getCollectionList()}
    </div>
  }
}

Collections.propTypes = {
  items     : React.PropTypes.array.isRequired
}

export default Collections
