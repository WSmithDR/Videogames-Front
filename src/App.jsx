import { useLocation } from 'react-router';
import './App.css';
import NavBar from './Features/Navigation/components/Navbar';

function App() {
  const {pathname} = useLocation()
  return (
    <div className='App'>
      {(pathname !== "/" && !pathname.includes("/detail") && pathname!=="/form") && <NavBar/>}
      
    </div>
  )
}

export default App
