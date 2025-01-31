import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import routes from './routes/routes';
import ProtectedRoute from './routes/ProtectedRoutes';
import './styles/App.css'

function App() {
  return (
    <Router>
      <Routes>
        {routes.map(({ path, component, isProtected }) => (
            <Route
              key={path}
              path={path}
              element={
                isProtected ? (
                  <ProtectedRoute component={component} />
                ) : (
                  React.createElement(component)
                )
              }
            />
          ))}
      </Routes>
    </Router>
  );
}

export default App;