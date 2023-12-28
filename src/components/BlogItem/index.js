// Write your JS code here

import './index.css'

const BlockItem = props => {
  const {blockItemDetails} = props
  const {title, description, publishedDate} = blockItemDetails
  return (
    <li className="list-item">
      <div className="post-details">
        <h1 className="post-title">{title}</h1>
        <p className="publish-date">{publishedDate}</p>
      </div>
      <p className="post-description">{description}</p>
    </li>
  )
}

export default BlockItem
