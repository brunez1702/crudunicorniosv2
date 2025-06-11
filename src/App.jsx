// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UnicornProvider } from './context/UnicornContext';
import { UnicornRoutes } from './unicorns';
import { ProductRoutes } from './products';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/unicornios/*"
          element={
            <UnicornProvider>
              <UnicornRoutes />
            </UnicornProvider>
          }
        />
        <Route path="/productos/*" element={<ProductRoutes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;