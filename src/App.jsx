import { useEffect, useState } from 'react'
import { fetchData } from './utils/api'

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setApiConfiguration } from './store/homeSlice';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import Notfound from './features/404/Notfound';
import Details from './features/details/Details';
import Explore from './features/explore/Explore';
import Home from './features/home/Home';
import Search from './features/search/Search';








function App() {

  const dispatch = useDispatch();
  const movies = useSelector((state) => state.home.url);


  useEffect(() => {
    apiTest();
  }, [])

  const apiTest = async () => {
    fetchData('/movie/popular').then((res) => {
      console.log(res)
      dispatch(setApiConfiguration(res))
    })

  }

  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:mediaType/:id" element={<Details />} />
        <Route path="/search/:query" element={<Search />} />
        <Route path="/explore/:mediaType" element={<Explore />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  )
}

export default App


/* if user tries to access any other router other than these routes this
 not found  path * means all expecr these routeswill be renderdd*/
