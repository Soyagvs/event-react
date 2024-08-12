// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { ViewImages } from './pages/ViewImages';
import { ScannerQr } from './pages/ScannerQr';
import { ViewMobile } from './pages/ViewMobile';
import { Login } from './pages/Login';
import { ProtectedRoute } from './ProtectedRoute'; // Asegúrate de la ruta correcta

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/view-images"
          element={
            <ProtectedRoute>
              <ViewImages />
            </ProtectedRoute>
          }
        />
        <Route
          path="/scanner-qr"
          element={
            <ProtectedRoute>
              <ScannerQr />
            </ProtectedRoute>
          }
        />
        <Route
          path="/view-mobile"
          element={
            <ProtectedRoute>
              <ViewMobile />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
