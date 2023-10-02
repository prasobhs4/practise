import React from 'react'

const MouseHover = (props) => {
    const {count,increment} = props
  return (
    <button onMouseOver={increment}>Mouse Hovered {count} times</button>
  )
}

export default MouseHover