import React from 'react'

import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

import SearchPage from '../pages/SearchPage'
import UserPage from '../pages/UserPage'
 
import { Path } from './config'

interface Props {}

const RoutesContainer: React.FC<Props> = () => {
 // const loadingData = useSelector(loadingStatusSelector)

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
