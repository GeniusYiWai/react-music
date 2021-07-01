import { Redirect } from 'react-router-dom'
import discover from '../pages/discover'
import friend from '../pages/friend'
import mine from '../pages/mine'
import React from 'react'
import recommend from '../pages/discover/c-pages/recommend'
import album from '../pages/discover/c-pages/album'
import artist from '../pages/discover/c-pages/artist'
import djradio from '../pages/discover/c-pages/djradio'
import ranking from '../pages/discover/c-pages/ranking'
import songs from '../pages/discover/c-pages/songs'
const routes = [
  {
    path: '/',
    exact: true,
    render: () => {
      return <Redirect to='/discover' />
    }
  },
  {
    path: '/discover',
    exact: true,
    render: () => {
      return <Redirect to='/discover/ranking' />
    }
  },
  {
    path: '/discover',
    component: discover,
    routes: [
      {
        path: '/discover/recommend',
        component: recommend
      },
      {
        path: '/discover/album',
        component: album
      },
      {
        path: '/discover/artist',
        component: artist
      },
      {
        path: '/discover/djradio',
        component: djradio
      },
      {
        path: '/discover/ranking',
        component: ranking
      },
      {
        path: '/discover/songs',
        component: songs
      }
    ]
  },

  {
    path: '/mine',
    component: mine
  },
  {
    path: '/friend',
    component: friend
  }
]

export default routes
