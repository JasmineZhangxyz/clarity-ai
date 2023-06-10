import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import InfoPage from './pages/InfoPage';
import DnnDataPage from './pages/DnnDataPage';
import FeatureImportancePage from './pages/FeatureImportancePage';
import CnnDataPage from './pages/CnnDataPage';
import AttentionMapPage from './pages/AttentionMapPage';

const AppRouter = () => {
  return (
    <Router>
        <NavBar />
        <Routes>
            <Route exact path="/" component={HomePage} />
            <Route path="/info" component={InfoPage} />
            <Route path="/dnn-data" component={DnnDataPage} />
            <Route path="/feature-importance" component={FeatureImportancePage} />
            <Route path="/cnn-data" component={CnnDataPage} />
            <Route path="/attention-maps" component={AttentionMapPage} />
        </Routes>
    </Router>
  );
};

export default AppRouter;
