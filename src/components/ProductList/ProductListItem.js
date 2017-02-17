import React from 'react';
import { IndexLink, Link } from 'react-router'
import './ProductListItem.scss'

export const ProductListItem = (props) => (
  <li className="product-list-item">

  <Link to={`/${props.item.collection[0].post_name}/product/${props.item.slug}`} activeClassName='route--active'>
      <img src={(props.item.media ? props.item.media.sizes.thumbnail.source_url : "")} />
      <span  dangerouslySetInnerHTML={{ __html: props.item.title}}></span>
  </Link>
  </li>

)

export default ProductListItem
