import React, { memo, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentList } from './store/actionCreators'
export default memo(function Index() {
  const list = [
    {
      title: '飙升榜',
      idx: 0
    },
    {
      title: '新歌榜',
      idx: 2
    },
    {
      title: '原创榜',
      idx: 3
    }
  ]

  const [idx, setIdx] = useState(0)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setCurrentList(idx))
  }, [dispatch, idx])
  const rank = useSelector(state => state.rank.currentList)
 console.log(rank);
  return (
    <div>
      {idx}
      
      <div className='left'>
        {list.map((item, i) => {
          return <div onClick={() => setIdx(i)}>{item.title}</div>
        })}
      </div>
    </div>
  )
})
