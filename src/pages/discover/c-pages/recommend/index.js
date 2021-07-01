import React, { memo, useEffect, useCallback, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
// import { connect } from 'react-redux'
import { getBanner } from './store/actionCreators'
import { Carousel } from 'antd'
import './index.css'

function Index() {
  const dispatch = useDispatch()
  const { topBanners } = useSelector(
    state => ({
      topBanners: state.recommend.topBanners
    }),
    shallowEqual
  )
  // const { getBanners, topBanners } = props
  useEffect(() => {
    dispatch(getBanner())
  }, [dispatch])

  const contentStyle = {
    height: '300px',
    color: '#fff',
    textAlign: 'center'
  }
  const [imgUrl, setImgUrl] = useState('')
  const bannerChange = useCallback(
    (from, to) => {
      setImgUrl(topBanners[to].imageUrl)
    },
    [topBanners]
  )
  return (
    <div className='container'>
      {imgUrl}
      <Carousel
        effect='fade'
        autoplay
        beforeChange={(from, to) => bannerChange(from, to)}
        style={{ backgroundImage: `url(${imgUrl})` }}
      >
        {topBanners.map(item => {
          return (
            <div>
              <h3 style={contentStyle}>
                <img src={item.imageUrl} alt='' className='banner-img' />
              </h3>
            </div>
          )
        })}
      </Carousel>
    </div>
  )
}

// const mapStateToProps = state => ({
//   topBanners: state.recommend.topBanners
// })

// const mapDispatchToProps = dispatch => ({
//   getBanners: () => {
//     dispatch(getBanner())
//   }
// })
// export default connect(mapStateToProps, mapDispatchToProps)(memo(Index))
export default memo(Index)
