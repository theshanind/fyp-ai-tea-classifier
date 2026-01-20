import './App.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import LandingPage from './component/landing_page/landing_page';
import LoginPage from './component/login_page/login_page';
import RegisterPage from './component/register_page/register_page';
import DashboardPage from './component/dashboard_page/dashboard_page';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/register' element={<RegisterPage/>}/>
          <Route path='/dashboard' element={<DashboardPage/>}/>
        </Routes>
      </div> 
    </Router>
  );
}

export default App;
