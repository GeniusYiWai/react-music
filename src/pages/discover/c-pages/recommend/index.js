import React, { memo, useEffect } from 'react'
import { connect } from 'react-redux'
import { getBanner } from './store/actionCreators'

function Index(props) {
  const { getBanners, topBanners } = props
  useEffect(() => {
    getBanners()
  }, [getBanners])
  return (
    <div>
      recommend
   {
     topBanners.map(item=>{
       return (<img src={item.imageUrl}></img>)
     })
   }
    </div>
  )
}

const mapStateToProps = state => ({
  topBanners: state.recommend.topBanners
})

const mapDispatchToProps = dispatch => ({
  getBanners: () => {
    dispatch(getBanner())
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(memo(Index))
