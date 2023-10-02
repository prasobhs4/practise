import React from 'react'

const ButtonClick = (props) => {

   const {count,increment} = props
  return (
    <button onClick={increment}>Button Clicked {count} times</button>
  )
}

export default ButtonClick