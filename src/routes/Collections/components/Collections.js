import React from 'react'
import './Collections.scss'

class Collections extends React.Component {

  getNav() {
    const navItems = this.props.types.map((type) => {
      return <a href='#'>{type}</a>
    });
    return <div>{navItems}</div>
  }
  render() {
    return <div style={{ margin: '0 auto' }} >
      <h2>Items: {this.props.items.length}</h2>
      <nav className="filter">
        {this.getNav()}
      </nav>
    </div>
  }
}

Collections.propTypes = {
  items     : React.PropTypes.array.isRequired
}

export default Collections
