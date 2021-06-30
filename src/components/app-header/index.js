import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'
import './index.css'
import { headerLinks } from '@/services/local-data'
import { Input, Button } from 'antd'
import { SearchOutlined } from '@ant-design/icons'

export default memo(function AppHeader() {
  const showSelectItem = (item, index) => {
    if (index < 3) {
      return (
        <NavLink to={item.link} key={index} activeClassName='active'>
          {item.title}
        </NavLink>
      )
    } else {
      return (
        <a href={item.link} key={index}>
          {item.title}
        </a>
      )
    }
  }
  return (
    <div className='header'>
      <div className='wrap-v1'>
        <NavLink to='/' className='logo'></NavLink>
        {headerLinks.map((item, i) => {
          return showSelectItem(item, i)
        })}
        <Input
          className='input'
          placeholder='音乐/视频/电台/用户'
          prefix={<SearchOutlined />}
          style={{ width: 150 }}
        />
        <Button type='primary' shape='round'>
          创作者中心
        </Button>
        <Button type='primary' size={'small'} shape='round'>
          登录
        </Button>
      </div>
    </div>
  )
})
