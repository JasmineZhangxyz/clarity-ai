import React, { useEffect } from 'react';
import AppRouter from './AppRouter';

const App = () => {
  useEffect(() => {
    document.title = 'Clarity AI';
  }, []);

  return <AppRouter />;
};

export default App;
