import React from 'react';
import { Redirect } from 'react-router-dom';
import FinderPage from './FinderPage'


function Finder() {
  return (
    <div>
      {
        localStorage.getItem('isAuthenticated') === 'true'
        ?
          <FinderPage />
        :
         <Redirect to = '/' />
      }
    </div>
  )
}

export default Finder
