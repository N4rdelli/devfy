import React from 'react';
import styles from "./App.css";
import { Outlet } from 'react-router-dom';

import Header from './components/Header/Header';
import Library from './components/Library/Library';

const App = () => {
  return (
    <>
    <div>
      <Header />
      <Library />
    </div>
    <div>
      <Outlet />
    </div>
    </>
  )
}

export default App