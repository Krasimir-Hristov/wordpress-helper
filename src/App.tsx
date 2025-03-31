import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import InstallationPage from './pages/InstallationPage';
import BasicUsagePage from './pages/BasicUsagePage';
import Modu from './pages/ModulesPage';
import LayoutsPage from './pages/LayoutsPage';
import CustomizationPage from './pages/CustomizationPage';

function App() {
  return (
    <Router>
      <div className='app'>
        <Header />
        <main>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/installation' element={<InstallationPage />} />
            <Route path='/basic-usage' element={<BasicUsagePage />} />
            <Route path='/modules' element={<ModulesPage />} />
            <Route path='/layouts' element={<LayoutsPage />} />
            <Route path='/customization' element={<CustomizationPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
