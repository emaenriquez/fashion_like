

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './page/Home'
import Login from './page/Login'
import Register from './page/Register'
import PostFeed from './page/PostFeed'
import PostManager from './page/PostManager'

function App() {
  
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
          <Route path='postfeed' element={<PostFeed />} />
          <Route path='postmanager' element={<PostManager />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
