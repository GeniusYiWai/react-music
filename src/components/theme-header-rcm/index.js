import React, { memo } from 'react'
import './index.css'
import PropTypes from 'prop-types'
const Index = memo(function index(props) {
  const { title, keywords } = props
  return (
    <div className='thc-container'>
      <div className='thc-left'>
        {title}

        {keywords.map((item, i) => {
          return <div className='thc-left-item' key={i}>{item}</div>
        })}
      </div>
      <div className='thc-right'>更多</div>
    </div>
  )
})
Index.propTypes = {
  title: PropTypes.string.isRequired,
  keywords: PropTypes.array
}
Index.defaultProps = {
  keywords: []
}

export default Index
