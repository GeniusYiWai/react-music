import React, { memo, useEffect } from 'react'
import THR from '@/components/theme-header-rcm'

import { useDispatch, useSelector } from 'react-redux'
import { getRankList } from '../../store/actionCreators'
export default memo(function Index() {
  const dispatch = useDispatch()
  const rankList = useSelector(state => state.recommend.rankList)

  useEffect(() => {
    dispatch(getRankList(0))
    dispatch(getRankList(2))
    dispatch(getRankList(3))
   
  }, [dispatch])
  return (
    <div className='wrap-v2'>
      <THR title='榜单' />
    </div>
  )
})
