import React, { memo, useEffect, useCallback, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
// import { connect } from 'react-redux'
import { getBanner } from './store/actionCreators'
import { Carousel } from 'antd'
import './index.css'
import Recommend from './c-cpns/hot-recommend'
import Album from './c-cpns/new-album'
import Rank from './c-cpns/ranking-list'
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
  const [imgUrl, setImgUrl] = useState('http://p1.music.126.net/dWcgY4oIZ4A44IjSeKF_AQ==/109951166135588916.jpg?imageView&blur=40x20')
  const bannerChange = useCallback(
    (from, to) => {
      setImgUrl(topBanners[to].imageUrl+'?imageView&blur=40x20')
    },
    [topBanners]
  )
  return (
    <div className='container'>
      <Carousel
        effect='fade'
        autoplay
        beforeChange={(from, to) => bannerChange(from, to)}
        style={{
          backgroundImage: `url(${imgUrl})`,
          backgroundSize: '6000px',
          backgroundPosition: 'center'
        }}
      >
        {topBanners.map((item,i) => {
          return (
            <div key={i}>
              <h3 style={contentStyle}>
                <img src={item.imageUrl} alt='' className='banner-img' />
              </h3>
            </div>
          )
        })}
      </Carousel>

      <Recommend />
      <Album />
      <Rank />
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
