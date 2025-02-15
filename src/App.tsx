import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import TaskList from './components/TaskList';

function App() {
  return (
    <Router>
      <div className="container mt-4">
        <header className="mb-4">
          <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#4db15d', borderRadius: '5px' }}>
            <div className="container-fluid">
              <NavLink className="navbar-brand" to="/task1">
                <img src="/viko-logo.png" alt="Viko Logo" style={{ height: '40px', marginRight: '10px' }} />
              </NavLink>
              <div className="collapse navbar-collapse">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/task1" style={({ isActive }) => ({ color: 'white', fontWeight: isActive ? 'bold' : 'normal' })}>
                      Užduočių sąrašas
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/task2" style={({ isActive }) => ({ color: 'white', fontWeight: isActive ? 'bold' : 'normal' })}>
                      Krepšelio sistema
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/task3" style={({ isActive }) => ({ color: 'white', fontWeight: isActive ? 'bold' : 'normal' })}>
                      Skaičių spėjimo žaidimas
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
        <Routes>
          <Route path="/task1" element={<TaskList />} />
          <Route path="/task2" element={<h1>Task 2</h1>} />
          <Route path="/task3" element={<h1>Task 3</h1>} />
        </Routes>
        <footer className="text-center mt-4">
          © 2025 Copyright Tauras Petrauskas
        </footer>
      </div>
    </Router>
  );
}

export default App;