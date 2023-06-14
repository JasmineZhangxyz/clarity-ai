import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import InfoPage from './pages/InfoPage';
import DnnDataPage from './pages/DnnDataPage';
import FeatureImportancePage from './pages/FeatureImportancePage';
import CnnDataPage from './pages/CnnDataPage';
import AttentionMapPage from './pages/AttentionMapPage';
import Footer from './components/Footer';

const AppRouter = () => {
  return (
    <Router> 
      <NavBar />
        <Routes>
            <Route exact path="/clarity-ai" element={<HomePage />}/>
            <Route path="/info" element={<InfoPage />} />
            <Route path="/dnn-data" element={<DnnDataPage />} />
            <Route path="/feature-importance" element={<FeatureImportancePage />} />
            <Route path="/cnn-data" element={<CnnDataPage />} />
            <Route path="/attention-maps" element={<AttentionMapPage />} />

        </Routes>
      <Footer />
    </Router>
  );
};

export default AppRouter;
