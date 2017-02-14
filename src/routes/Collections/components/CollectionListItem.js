import React from 'react';
import { IndexLink, Link } from 'react-router'

export const CollectionListItem = (props) => (
  <li className="collection-list-item">
<Link to={`/product/${props.item.slug}`} activeClassName='route--active'>
    <img src={(props.item.media ? props.item.media.sizes.thumbnail.source_url : "")} />
    <span  dangerouslySetInnerHTML={{ __html: props.item.title}}></span>
</Link>
  </li>

)

export default CollectionListItem
