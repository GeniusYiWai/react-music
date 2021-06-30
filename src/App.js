import React, { memo } from 'react'
import store from './store'
import { Provider } from 'react-redux'
import { renderRoutes } from 'react-router-config'
import { HashRouter } from 'react-router-dom'
import routes from './router'
import AppHeader from './components/app-header'
import AppFooter from './components/app-footer'
export default memo(function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <h2>
          <AppHeader />
        </h2>
        {renderRoutes(routes)}
        <h2>
          <AppFooter />
        </h2>
      </HashRouter>
    </Provider>
  )
})
