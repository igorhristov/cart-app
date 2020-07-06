import React from 'react';
import './App.css';
import Header from './components/header/Header';
import HomePage from './pages/homepage/homepage.component';
const App = () => {
    return (
        <div>
            <Header />
            <HomePage />
        </div>
    );
};

export default App;
