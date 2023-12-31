import { Route, Routes, useLocation } from 'react-router';
import './App.css';
import HomeScreen from './Features/Home/roots/HomeScreen.jsx';
import LandingScreen from './Features/Landing/roots/LandingScreen.jsx';
import NavBar from './Features/Navigation/containers/NavBar/Navbar.jsx';

function App() {
  const {pathname} = useLocation()
  return (
    <div className='App'>
      {(pathname !== "/" && !pathname.includes("/detail") && pathname!=="/form") && <NavBar/>}
      <Routes>
        <Route path="/" element={<LandingScreen/>}/>
        <Route path="/home" element={<HomeScreen/>}/>
        <Route path="/detail/:id" element={<DetailPage/>}/>
        <Route path="/form" element={<FormPage/>}/>
      </Routes>
    </div>
  )
}

export default App
