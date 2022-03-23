import React from 'react'

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import SearchPage from '../pages/SearchPage'
import UserPage from '../pages/UserPage'
 
import { Path } from './config'

const RoutesContainer: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={Path.HOMEPAGE} element={<SearchPage />} />
        <Route path={Path.USERPAGE} element={<UserPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesContainer
