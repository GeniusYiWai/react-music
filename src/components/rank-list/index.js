import React, { memo } from 'react'
import './index.css'

const index = memo(function (props) {
  const { list } = props
  return (
    <div className='rk-container'>
      {list.map((item, i) => {
        return <div className='rk-item'>{i+1}{item.name}</div>
      })}
    </div>
  )
})

export default index
