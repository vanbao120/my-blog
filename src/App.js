import Home from './pages/home/Home.jsx';
import TopBar from './components/topbar/TopBar.jsx'
import Single from './pages/single/Single.jsx';
import Write from './pages/write/Write';
import Settings from './pages/settings/Settings.jsx';
import Login from './pages/login/Login.jsx';
import Register from './pages/register/Register.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/write" element={<Write/>} />
        <Route path="/single" element={<Single/>} />
        <Route path="/settings" element={<Settings/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
      </Routes>
    </Router>
  );
}

export default App;
