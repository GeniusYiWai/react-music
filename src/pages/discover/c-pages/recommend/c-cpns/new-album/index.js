import React, { Fragment, memo } from 'react'
import THR from '@/components/theme-header-rcm'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getRecommend } from '../../store/actionCreators'
import './index.css'
export default memo(function Index() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getRecommend())
  }, [dispatch])

  const recommend = useSelector(state => state.recommend.recommendList)
  

  return (
    <Fragment>
      <div className='wrap-v2'>
        <THR
          keywords={['华语', '流行', '摇滚', '民谣', '电子']}
          title='热门推荐'
        />
      </div>
      <div className='rec-container'>
        {recommend.map((item, i) => {
          return <div className='rec-item' key={i}>
            <img src={item.picUrl} alt="" />
            {item.name}
           
            </div>
        })}
      </div>
    </Fragment>
  )
})
