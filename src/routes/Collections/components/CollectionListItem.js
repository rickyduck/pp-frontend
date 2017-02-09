import React from 'react';

export const CollectionListItem = (props) => (
  <li >
    <img src={"/images/"+props.item.featured_image} />
    {props.item.name}
  </li>
)

export default CollectionListItem
