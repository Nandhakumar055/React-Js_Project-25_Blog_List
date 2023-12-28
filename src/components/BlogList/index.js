// Write your JS code here

import BlockItem from '../BlogItem'
import './index.css'

const BlockList = props => {
  const {blogsList} = props
  return (
    <ul className="block-list-container">
      {blogsList.map(eachItem => (
        <BlockItem blockItemDetails={eachItem} key={eachItem.id} />
      ))}
    </ul>
  )
}

export default BlockList
