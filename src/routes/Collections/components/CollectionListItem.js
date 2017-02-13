import React from 'react';
import { IndexLink, Link } from 'react-router'

export const CollectionListItem = (props) => (
  <li >
<Link to={`/product/${props.item.slug}`} activeClassName='route--active'>
    <img src={(props.item.media ? props.item.media.sizes.thumbnail.source_url : "")} />
    {props.item.title}
</Link>
  </li>

)

export default CollectionListItem
