import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home'
import { ViewImages } from './pages/ViewImages';
import { ScannerQr } from './pages/ScannerQr';
import { ViewMobile } from './pages/ViewMobile';  

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/view-images" element={<ViewImages />} />
        <Route path="/scanner-qr" element={<ScannerQr />} />
        <Route path="/view-mobile" element={<ViewMobile />} />
      </Routes>
    </Router>
  )
}

export default App
