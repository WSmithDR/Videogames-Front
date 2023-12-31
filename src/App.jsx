import { Route, Routes, useLocation } from 'react-router';
import './App.css';
import LandingScreen from './Features/Landing/roots/LandingScreen.jsx';
import NavBar from './Features/Navigation/containers/NavBar/Navbar.jsx';

function App() {
  const {pathname} = useLocation()
  return (
    <div className='App'>
      {(pathname !== "/" && !pathname.includes("/detail") && pathname!=="/form") && <NavBar/>}
      <Routes>
        <Route path="/" element={<LandingScreen/>}/>
        
      </Routes>
    </div>
  )
}

export default App
