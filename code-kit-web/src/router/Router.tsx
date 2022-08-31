import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import DefaultLayout from '../layout/DefaultLayout'
import MenuScreen from '../screens/MenuScreen'
import UUIDScreen from '../screens/ToolScreens/UUIDScreen/UUIDScreen'
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<MenuScreen />} />
          {routeList.map((el, i) => (
            <Route key={i} path={el.path} element={el.component} />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router

export const routeList = [
  {
    component: <UUIDScreen />,
    path: 'uuid4',
  },
]
