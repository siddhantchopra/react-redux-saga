import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import './App.css';
import { MainComponent } from './components/MainComponent';
import { Provider } from 'react-redux';
import store from './store'

function App() {
  return (
    <div className="container">
      <Provider store={store}>
        <BrowserRouter>
          <MainComponent />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
