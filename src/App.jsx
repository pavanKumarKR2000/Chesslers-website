
import { Routes, Route } from 'react-router-dom';
import  Header  from './components/Header';
import ProtectedRoutes from './components/ProtectedRoutes';
import Auth from './pages/Auth';
import Challenges from './pages/Challenges';
import Home from './pages/Home';
import Index from './pages/Index';
import Leaderboard from './pages/Leaderboard';
import Tournaments from './pages/Tournaments';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Header />}>
          <Route index element={<Index />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/auth" element={<Auth />} />
          <Route element={<ProtectedRoutes />}>
              <Route path="/challenges" element={<Challenges />} />
              <Route path="/tournaments" element={<Tournaments />} />
              <Route path="/home" element={<Home/>} />
          </Route>
        </Route>
      </Routes>
    </>
   
  )
}

export default App
