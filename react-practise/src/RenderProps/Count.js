import React,{useState} from 'react'

const Count = (props) => {
    const [count,setCount] = React.useState(0);
    const incrementCount = () => {
        setCount(count + 1)
    }
  return (
    <>
    {props.render(count,incrementCount)}
    </>
  )
}

export default Count