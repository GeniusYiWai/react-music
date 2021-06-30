import React, { memo } from 'react'
import './index.css'
import { NavLink } from 'react-router-dom'
import { dicoverMenu } from '@/services/local-data'
import request from '@/services/axios'
import { renderRoutes } from 'react-router-config'
import { useState, useEffect } from 'react'

export default memo(function Discover(props) {
  // useEffect(() => {
  //   async function fetch() {
  //     try {
  //       const { banners } = await request('/banner')
  //       console.log(banners);
  //     } catch (error) {

  //     }
  //   }
  //   fetch()
  // })
  const { route } = props
  return (
    <div className='discover-header'>
      <div className='wrap-v2'>
        {dicoverMenu.map((item, i) => {
          return (
            <NavLink
              to={item.link}
              key={i}
              className='item'
              activeClassName='active'
            >
              {item.title}
            </NavLink>
          )
        })}
      </div>
      {renderRoutes(route.routes)}
    </div>
  )
})
