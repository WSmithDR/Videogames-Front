import { useLocation } from 'react-router';
import './App.css';
import NavBar from './Features/Navigation/components/Navbar';

function App() {
  const {pathname} = useLocation()
  return (
    <div className='App'>
      {(pathname !== "/" && !pathname.includes("/detail") && pathname!=="/form") && <NavBar/>}
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/detail/:id" element={<DetailPage/>}/>
        <Route path="/form" element={<FormPage/>}/>
      </Routes>
    </div>
  )
}

export default App
