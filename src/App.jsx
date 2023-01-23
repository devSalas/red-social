import React from 'react'
import Chat from './page/Chat'
import Home from './page/home/index';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div>
        {/* <Chat/> */}
      </div>

      <Routes>
        <Route path='/chat' element={<Chat />} />
        <Route path='/home' element={<Home />} />
      </Routes>

    </Router>
  )
}

export default App