import React from 'react';

export const CollectionListItem = (props) => (
  <li >
    <img src={(props.item.media ? props.item.media.sizes.thumbnail.source_url : "")} />
    {props.item.title}
  </li>
)

export default CollectionListItem
